import express from "express";

const app = express();
const port = 3000;
const currentDate = new Date();
var dayIndex = currentDate.getDay();

app.get("/", (req, res) => {
    if (dayIndex === 0 || dayIndex === 6) {
        res.render("index.ejs", {advice: "It's the weekend, have a breather!"});
    } else {
        res.render("index.ejs", {advice: "It's a weekday, get to work!"});
    }
});

app.listen(port, () => {
    console.log(`Port: ${port}`);
});