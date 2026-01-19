// import express from "express";
// const app = express();
// const port = 3000;

// app.get("/", (req, res) => {
//   res.send("<h1>Hello</h1>");
// });

// app.get("/about", (req, res) => {
//   res.send("<h1>About Me</h1><p>My name is Faiq</p>");
// });

// app.get("/contact", (req, res) => {
//   res.send("<h1>Contact Me</h1><p>Phone: +60123116032</p>");
// });

// app.listen(port, () => {
//   console.log(`Server started on port ${port}`);
// });




import express from "express";
const app = express();
const port = 3000;

app.get("/", (req, res) => {
  res.send("<h1>Hello World!</h1>");
});

app.get("/about", (req, res) => {
  res.send("<h1>About Me</h1><p>I am currently learning Web Development</p>");
});

app.get("/contact", (req, res) => {
  res.send("<h1>Contact Details</h1><p>Email: faiqnichol@gmail.com</p>");
});

app.listen(port, () => {
  console.log(`Port: ${port}`);
});