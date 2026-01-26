import express from "express";
import axios from "axios";

const app = express();
const port = 3000;

const API_URL = "https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,racist,sexist,explicit&type=single"

app.use(express.static("public"));

app.get("/", (req,res) => {
  res.render("index.ejs");
});

app.post("/get-joke", async (req, res) => {
  try {
    const result = await axios.get(API_URL);
    console.log(result.data.joke);
    res.render("index.ejs", { joke: result.data.joke });
  } catch (error) {
    console.log(error);
  }
});

app.listen(port, () => {
  console.log(`Port: ${port}`);
});