const express = require("express");
const app = express();
const dotenv = require("dotenv");
const path = require("path");
const cors = require("cors");

dotenv.config(); // Replit Secrets

const connectDatabase = require("./config/connectDatabase");

const products = require("./routes/products");
const orders = require("./routes/order");

connectDatabase();

app.use(express.json());
app.use(cors());

app.use("/api/v1/", products);
app.use("/api/v1/", orders);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "..", "frontend", "build")));

  app.get("*", (req, res) => {
    res.sendFile(
      path.resolve(__dirname, "..", "frontend", "build", "index.html")
    );
  });
}

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server listening on port ${PORT} in ${process.env.NODE_ENV}`);
});
