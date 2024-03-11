const express = require("express");
const { connectToMongoDB } = require("./connect");

const { checkForAuthentication } = require("./middlewares/auth");


const postRoutes = require("./routes/posts");
const userRoutes = require("./routes/users");

require("dotenv").config();

const app = express();

const { DATABASE_URL, PORT } = process.env;

connectToMongoDB(DATABASE_URL).then(() =>
  console.log("Database connection established!.")
);

app.use(express.json()); 

app.use(express.urlencoded({ extended: false }));

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  next();
});

app.use("/api/posts", checkForAuthentication, postRoutes);
app.use("/api/user", checkForAuthentication, userRoutes);

app.listen(PORT, () => console.log("Server running at port:", PORT));
