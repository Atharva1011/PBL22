const express = require("express");
const router = new express.Router();

const app = express();

router.get("/", (req, res) => {
  res.render("intro");
});

router.get("/login", (req, res) => {
  res.render("login");
});

router.get("/cards", (req, res) => {
  res.render("cards");
});

router.get("/main?:title", (req, res) => {
  console.log(req.query);
  res.render("main", { title: req.query.title });
});

router.get("/register", (req, res) => {
  res.render("register");
});

router.post("/main", (req, res) => {
  res.redirect(req.url + "?title:" + req.body.title);
});

router.post("/login", (req, res) => {
  console.log(req.body);
  res.redirect("/cards");
});

module.exports = router;
