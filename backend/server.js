// const express = require("express");
// const mysql = require("mysql");
// const cors = require("cors");

// const app = express();
// app.use(cors());
// app.use(express.json());

// const db  = mysql.createConnection({
//     host:"localhost",
//     user:"root",
//     password:"",
//     database:"sognup"

// })
// app.post("/signup",(req, res)=>{
//     const sql = "INSERT INTO LOGIN (`name`,`email`,`password`) VALUES (?)";
//     const values = [
//         req.body.name,
//         req.body.email,
//         req.body.password
//     ]
//     db.query(sql,[values],(err, data)=>{
//         if(err){
//             return res.json("Error");
//         }
//         return res.json(data);
//     })
// })


// app.listen(8081,()=>{
//     console.log("Listning")
// })
const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const bcrypt = require("bcrypt");

const app = express();
app.use(cors());
app.use(express.json());

const db = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "",
  database: "signup",
});

app.post("/signup", async (req, res) => {
  try {
    const hashedPassword = await bcrypt.hash(req.body.password, 10);

    const sql = "INSERT INTO LOGIN (`name`,`email`,`password`) VALUES ?";
    const values = [
      [req.body.name, req.body.email, hashedPassword],
    ];

    db.query(sql, [values], (err, data) => {
      if (err) {
        console.error(err);
        return res.status(500).json({ error: "Internal Server Error" });
      }
      return res.json(data);
    });
  } catch (error) {
    console.error(error);
    return res.status(500).json({ error: "Internal Server Error" });
  }
});

app.listen(8081, () => {
  console.log("Listening on port 8081");
});
