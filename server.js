const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const app = express();
const path = require("path");

connectDB();
app.use(bodyParser.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API Runnig");
});
app.use("/api/user", require("./routes/user"));
app.use("/api/auth", require("./routes/auth"));
app.use("/api/resume", require("./routes/resume"));

if (process.env.NODE_ENV === "production") {
  // Set static folder
  app.use(express.static("cvgenerator/build"));

  app.get("*", (req, res) => {
    res.sendFile(path.resolve(__dirname, "cvgenerator", "build", "index.html"));
  });
}

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Runnig at ${PORT}`);
});
