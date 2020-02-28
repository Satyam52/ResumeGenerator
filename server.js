const express = require("express");
const bodyParser = require("body-parser");
const connectDB = require("./config/db");
const app = express();

connectDB();
app.use(bodyParser.json({ extended: false }));

app.get("/", (req, res) => {
  res.send("API Runnig");
});
app.use("/api/user", require("./routes/user"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server Runnig at ${PORT}`);
});
