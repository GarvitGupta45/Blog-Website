import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;

app.use(express.static("styles"));

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", (req, res) => {
    res.render("index.ejs");
});

app.post("/blog1", (req,res) => {
    res.render("blogs/blog1.ejs");
});
app.post("/blog2", (req,res) => {
    res.render("blogs/blog2.ejs");
});
app.post("/blog3", (req,res) => {
    res.render("blogs/blog3.ejs");
});
app.post("/blog4", (req,res) => {
    res.render("blogs/blog4.ejs");
});
app.post("/blog5", (req,res) => {
    res.render("blogs/blog5.ejs");
});
app.post("/blog6", (req,res) => {
    res.render("blogs/blog6.ejs");
});
app.post("/blog7", (req,res) => {
    res.render("blogs/blog7.ejs");
});
app.post("/blog8", (req,res) => {
    res.render("blogs/blog8.ejs");
});
app.post("/blog9", (req,res) => {
    res.render("blogs/blog9.ejs");
});
app.post("/blog10", (req,res) => {
    res.render("blogs/blog10.ejs");
});
app.post("/blog11", (req,res) => {
    res.render("blogs/blog11.ejs");
});
app.post("/blog12", (req,res) => {
    res.render("blogs/blog12.ejs");
});

app.listen(port, () => {
    console.log(`listening on the port ${port}.`);
});