const express = require("express");
const mysql = require("mysql");

const app = express();
const port = 3033;

const db = mysql.createConnection({
  host: "db",
  user: "root",
  password: "root",
  database: "nodedb",
});

app.get("/", (req, res) => {
  const insertNameSql = `INSERT INTO people(name) VALUES('THIAGO HOMRICH')`;
  db.query(insertNameSql, (err, result) => {
    if (err) throw err;

    const selectNameSql = `SELECT name FROM people`;
    db.query(selectNameSql, (err, results) => {
      if (err) throw err;
      let response = "<h1>Full Cycle Rocks!</h1>";
      response += "<ul>";
      results.forEach((row) => {
        response += `<li>${row.name}</li>`;
      });
      response += "</ul>";
      res.send(response);
    });
  });
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});
