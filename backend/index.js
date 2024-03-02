const express = require("express");

const { connectToMongoDB } = require("./connect");
const Posts = require("./models/posts");

const postRoutes = require("./routes/posts");

const app = express();

connectToMongoDB("mongodb://127.0.0.1:27017/thoughts").then(() =>
  console.log("Database connection established!.")
);

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
  next();
});

app.use("/api/posts", postRoutes);

app.listen(8080, () => console.log("Server running at port 8080"));
