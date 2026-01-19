import express from "express";
import bodyParser from "body-parser";
const app = express();
const port = 3000;

let blogArray = [];

app.use(express.static("public"));
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/", (req, res) => {    
    res.render("index.ejs", {blogArticles: blogArray});
});

app.get("/blog", (req, res) => {
    res.render("blog.ejs");
});

app.post("/submit-blog", (req, res) => {
    const currentDate = new Date();
    const formatDate = new Intl.DateTimeFormat('en-GB', {day: 'numeric', month: 'short', year: 'numeric'}).format(currentDate);
    const finalDate = formatDate.toUpperCase();
    const newBlog = {postDate: finalDate, postTitle: req.body["title"], postSnippet: req.body["content"], postRemark: req.body["remarks"], postID: currentDate.getTime()};
    blogArray.unshift(newBlog);
    res.redirect("/");
});

app.post("/delete-blog", (req, res) => {
    const blogID = req.body["postID"];
    blogArray = blogArray.filter(blogArticle => blogArticle.postID != blogID)
    res.redirect("/");
});

app.get("/about", (req, res) => {
    res.render("about.ejs");
});

app.listen(port, () => {
    console.log(`Port: ${port}`);
});