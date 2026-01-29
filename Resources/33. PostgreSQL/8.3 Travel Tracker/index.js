import pg from "pg"; 
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

// PostgreSQL config
const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "world",
  password: "mrais",
  port: "5432",
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

async function checkVisited() {
  const result = await db.query("SELECT country_code FROM visited_countries;");
  let visitedCountries = [];
  result.rows.forEach(row => {
    visitedCountries.push(row.country_code); // Accessing specific column
  });
  return visitedCountries;
};

app.get("/", async (req, res) => {
  const countriesVisited = await checkVisited();
  res.render("index.ejs", {total: countriesVisited.length, countries: countriesVisited });
});

app.post("/add", async (req, res) => {
  const searchResult = req.body["country"].toUpperCase();
  try {
    const result = await db.query("SELECT country_code FROM search_countries WHERE (UPPER(country_name) = $1 OR country_code = $1;", [searchResult]);
    console.log(result.rows);
    if (result.rows.length != 0) {
      try {
        await db.query("INSERT INTO visited_countries (country_code) VALUES ($1);", [result.rows[0].country_code]);
        res.redirect("/");
      } catch (err) {
        const countriesVisited = await checkVisited();
        res.render("index.ejs", {total: countriesVisited.length, countries: countriesVisited, error: "Country has already been added..."});
      };    
    } else {
      const countriesVisited = await checkVisited();
      res.render("index.ejs", {total: countriesVisited.length, countries: countriesVisited, error: "Can't add an undefined location..."});
    };
  } catch (err) {
    const countriesVisited = await checkVisited();
    res.render("index.ejs", {total: countriesVisited.length, countries: countriesVisited, error: "Search result couldn't find country!"});
  };
});

// app.get("/", async (req, res) => {
//   //Write your code here.
//   const result = await db.query("SELECT country_code FROM visited_countries;");
//   let visitedCountries = [];
//   // More queries can go here
//   result.rows.forEach(row => {
//     visitedCountries.push(row.country_code); // Accessing specific column
//   });
//   res.render("index.ejs", {total: visitedCountries.length, countries: visitedCountries });
// });

// app.post("/add", async (req, res) => {
//   const searchResult = req.body["country"].toUpperCase();
//   try {
//     const result = await db.query("SELECT country_code FROM search_countries WHERE UPPER(country_name) = $1 OR country_code = $1;", [searchResult]);
//     if (result.rows.length === 1) {
//       await db.query("INSERT INTO visited_countries (country_code) VALUES ($1);", [result.rows[0].country_code]);
//     } else {
//       console.log("Database result length error...");
//     };
//   } catch (error) {
//     console.log("Error searching for country!");
//   };
//   res.redirect("/");
// });

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});





















//-------------------POSSIBLE WAY OF REFRESHING THE APP WITHOUT CRASHING--------------------------- 
// const { Pool } = pg;
// const app = express();
// const port = 3000;

// // PostgreSQL config
// const pool = new Pool({
//   user: "postgres",
//   host: "localhost",
//   database: "world",
//   password: "mrais",
//   port: "5432",
// });



// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(express.static("public"));

// app.get("/", async (req, res) => {
//   //Write your code here.
//   let client; 
//   let visitedCountries = [];
//   let totalCountries = 0;
//   try {
//     client = await pool.connect();
//     const result = await client.query("SELECT country_code FROM visited_countries;");
//     // More queries can go here
//     result.rows.forEach(row => {
//       visitedCountries.push(row.country_code); // Accessing specific column
//       totalCountries++;
//     });
//     console.log(visitedCountries);
//     res.render("index.ejs", {total: totalCountries, countries: visitedCountries });
//   } catch (error) {
//     console.error('An error occurred:', error);
//     // Handle the error appropriately
//   }
// });


// app.listen(port, () => {
//   console.log(`Server running on http://localhost:${port}`);
// });
