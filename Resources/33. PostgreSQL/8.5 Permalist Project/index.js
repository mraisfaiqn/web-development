import pg from "pg";
import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

const db = new pg.Client({
  user: "postgres",
  host: "localhost",
  database: "permalist",
  password: "mrais",
  port: "5432",
});

db.connect();

app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));

function generateDate() {
  const today = new Date();
  const dayOfWeekNumber = today.getDay();
  const daysList = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
  const dayOfWeekName = daysList[dayOfWeekNumber];
  const dateOfMonth = today.getDate();
  const monthNumber = today.getMonth() + 1; // Add 1 to adjust for 0-based index
  const year = today.getFullYear() % 100; // e.g., 26
  const customFormat = `${dayOfWeekName} ${monthNumber}/${dateOfMonth}/${year}`;
  return customFormat;
} 

app.get("/", async (req, res) => {
  const listTitle = generateDate();
  const listItems = await db.query("SELECT * FROM items ORDER BY id ASC;");
  res.render("index.ejs", {listTitle: listTitle, listItems: listItems.rows});
});

app.post("/add", async (req, res) => {
  const newTitle = req.body.newItem;
  if (newTitle.length != 0){
    await db.query("INSERT INTO items (title) VALUES ($1);", [newTitle]);
  } else {
    console.log("NOT NULL value only!")
  }
  res.redirect("/");
});

app.post("/edit", async (req, res) => {
  const itemID = req.body.updatedItemId;
  const itemTitle = req.body.updatedItemTitle;
  if (itemTitle.length != 0){
    await db.query("UPDATE items SET title = $1 WHERE id = $2;", [itemTitle, itemID]);
  } else {
    console.log("NOT NULL value only!")
  }
  res.redirect("/");
});

app.post("/delete", async (req, res) => {
  const itemID = req.body.deleteItemId;
  console.log(itemID);
  await db.query("DELETE FROM items WHERE id = $1;", [itemID]);
  res.redirect("/");
});

app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
