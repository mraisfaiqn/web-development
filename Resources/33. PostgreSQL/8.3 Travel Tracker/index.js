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

app.get("/", async (req, res) => {
  //Write your code here.
  const result = await db.query("SELECT country_code FROM visited_countries;");
  let visitedCountries = [];
  // More queries can go here
  result.rows.forEach(row => {
    visitedCountries.push(row.country_code); // Accessing specific column
  });
  console.log(visitedCountries);
  res.render("index.ejs", {total: visitedCountries.length, countries: visitedCountries });
  db.end();
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});


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
