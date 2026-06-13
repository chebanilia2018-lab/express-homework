import express from "express";
import {
  getArticles,
  createArticle,
  getArticleById,
  updateArticle,
  deleteArticle,
} from "../controllers/articles.controller.js";

const router = express.Router();


router.route("/articles")
  .get(getArticles)
  .post(createArticle);


router.route("/articles/:articleId")
  .get(getArticleById)
  .put(updateArticle)
  .delete(deleteArticle);

export default router;