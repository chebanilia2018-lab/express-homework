import express from "express";
import bodyParser from "body-parser";
import { requestLogger } from "./src/middlewares/logger.js";
import usersRouter from "./src/routes/users.routes.js";
import articlesRouter from "./src/routes/articles.routes.js";

const app = express();
const PORT = 3000;


app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));


app.use(requestLogger);


app.get("/", (req, res) => {
  res.send("Get root route");
});


app.use(usersRouter);
app.use(articlesRouter);


app.get("/favicon.ico", (req, res) => res.status(204));

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});