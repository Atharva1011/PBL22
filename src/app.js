const express = require("express");
const path = require("path");
const hbs = require("hbs");
const bodyParser = require("body-parser");
require("./db/mongoose");

const app = express();
const port = process.env.PORT || 3000;

const static_path = path.join(__dirname, "../public");
const partials_path = path.join(__dirname, "../templates/partials");
const templates_path = path.join(__dirname, "../templates/views");

app.use(express.json());
app.use(express.static(static_path));
app.use(bodyParser.urlencoded({ extended: true }));

app.set("view engine", "hbs");
app.set("views", templates_path);

hbs.registerPartials(partials_path);

const userRouter = require("./routers/user");
const questionRouter = require("./routers/question");

app.use(userRouter);

app.listen(port, () => {
  console.log(`Listning to server on port ${port}`);
});
