const express = require("express");
const app = express();
const port = 8000;

const users = [
  { firstName: "Reimu", lastName: "Hakurei" },
  { firstName: "Marisa", lastName: "Kirisame" },
  { firstName: "Sanae", lastName: "Kochiya" },
  { firstName: "Sakuya", lastName: "Izayoi" },
  { firstName: "Momiji", lastName: "Inubashiri" }
];


// GET data
// Navigate to localhost:8000/api
app.get("/api", (req, res) => {
  res.json({users});
});


app.listen(port, () => console.log(`Listening on port: ${port}`));