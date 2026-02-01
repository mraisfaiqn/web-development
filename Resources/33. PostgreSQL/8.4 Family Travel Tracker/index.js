import express from "express";
import bodyParser from "body-parser";
import pg from "pg";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "mrais",
  port: 5432,
});
db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

// Function to handle process termination
const handleGracefulShutdown = () => {
  console.log('Received SIGINT. Closing database connection.');
  
  // Call the appropriate method to end your database connection
  if (db && typeof db.end === 'function') {
    db.end(err => {
      if (err) {
        console.error('Error closing database connection:', err.message);
        // Optionally exit with a non-zero code to indicate an issue
        process.exit(1); 
      } else {
        console.log('Database connection closed gracefully.');
        // Exit cleanly
        process.exit(0); 
      }
    });
  } else {
    console.log('No database connection to close, exiting.');
    process.exit(0);
  }
};

// Listen for the SIGINT event
process.on('SIGINT', handleGracefulShutdown);

console.log('Application running. Press Ctrl+C to trigger SIGINT and close the DB connection.')

let defaultColor = "blue";
let populateUser = 1;

async function currentUser() {
  const result = await db.query("SELECT * FROM users;");
  return result.rows;
};

async function checkVisited() {
  const result = await db.query("SELECT country_code FROM visited_countries WHERE user_id = $1;", [populateUser]);
  let userCountries = [];
  result.rows.forEach(row => {
    userCountries.push(row.country_code); // Accessing specific column
  });
  return userCountries;
};

app.get("/", async (req, res) => {
  const availableCountries = await currentUser();
  if (availableCountries.length != 0) {
    const countriesVisited = await checkVisited();
    const foundID = availableCountries.find(obj => obj.id === populateUser);
    res.render("index.ejs", {users: availableCountries, color: foundID.color, total: countriesVisited.length, countries: countriesVisited});
  } else {                  
    res.render("index.ejs", {users: availableCountries, color: defaultColor, total: availableCountries.length, countries: availableCountries});
  }
});

app.post("/add", async (req, res) => {
  const userCheck = await currentUser();
  const countriesVisited = await checkVisited();  
  if (userCheck.length != 0) {
    const searchID = userCheck.find(obj => obj.id === populateUser);
    const searchCountry = await db.query("SELECT country_code FROM search_countries WHERE UPPER(country_name) = $1 OR country_code = $1;", [req.body["country"].toUpperCase()]);
    if (searchCountry.rows.length != 0) {
      try {
        await db.query("INSERT INTO visited_countries (country_code, user_id) VALUES ($1, $2);", [searchCountry.rows[0].country_code, populateUser]);
        res.redirect("/");
      } catch (err) {
        res.render("index.ejs", {error: "Country has already been added...", users: userCheck, color: searchID.color, total: countriesVisited.length, countries: countriesVisited});
      }
    } else {
      res.render("index.ejs", {error: "Can't add an undefined location...", users: userCheck, color: searchID.color, total: countriesVisited.length, countries: countriesVisited});      
    };
  } else {
    res.render("index.ejs", {error: "Add a family member first...", users: userCheck, color: defaultColor, total: userCheck.length, countries: userCheck});
  }
});

app.post("/user", async (req, res) => {
  if (req.body.user == null) {
    res.render("new.ejs");
  } else {
    populateUser = parseInt(req.body.user);
    res.redirect("/");
  }
});

app.post("/new", async (req, res) => {
  //Hint: The RETURNING keyword can return the data that was inserted.
  //https://www.postgresql.org/docs/current/dml-returning.html
  const userName = req.body["name"];
  const userColor = req.body["color"];
  if (userName != '' && userColor != null) {
    try {
      const result = await db.query("INSERT INTO users (name, color) VALUES ($1, $2) RETURNING id;", [userName, userColor]);
      populateUser = result.rows[0].id;
      res.redirect("/");
    } catch (err) {
      console.log("Error");
    };
  } else {
    if (userName === '' && userColor == null) {
      res.render("new.ejs", {error: "Insert name and color..."});
    } else {
      if (userName === '') {
        res.render("new.ejs", {error: "Insert name here..."});
      } else {
        res.render("new.ejs", {error: "Select a color below..."});
      }
    }
  }
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});
