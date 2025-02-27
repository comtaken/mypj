const express = require("express");
const mysql = require("mysql2");
const cors = require("cors");

const app = express();
app.use(cors()); // React からのリクエストを許可
app.use(express.json());

// MySQL 接続
const db = mysql.createConnection({
  host: "xxxxxxxxxxxx",
  user: "xxxxxxxxxxxx",
  password: "xxxxxxxxxxxx",
  database: "xxxxxxxxxxxx",
});

db.connect((err) => {
  if (err) {
    console.error("MySQL 接続エラー:", err);
  } else {
    console.log("MySQL 接続成功！");
  }
});

// API エンドポイント
app.get("/api/users", (req, res) => {
  db.query("SELECT * FROM users", (err, results) => {
    if (err) {
      res.status(500).json({ error: err.message });
    } else {
      res.json(results);
    }
  });
});

app.listen(5000, () => {
  console.log("サーバーが http://localhost:5000 で起動中...");
});

