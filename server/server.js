const express = require('express')
var cors = require('cors')
const app = express()
var bodyParser = require("body-parser");

app.use(bodyParser.json());
app.use(cors())
const port = 5000

const Sequelize = require("sequelize-cockroachdb");
 
// For secure connection to CockroachDB
const fs = require('fs');
 
// Connect to CockroachDB through Sequelize
var sequelize = new Sequelize({
  dialect: "postgres",
  username: "a",
  password: "",
  host: "free-tier5.gcp-europe-west1.cockroachlabs.cloud",
  port: 26257,
  database: "lost-lion-1040.easify",
  dialectOptions: {
    instanceName: "lost-lion",
    ssl: {
      
      //For secure connection:
      ca: fs.readFileSync('./certs/root.crt')
              .toString()
    },
  },
  logging: false, 
});

app.get('/', (req, res) => {
    res.json(data)
})

app.post('/songs/', (req,res) => {
    console.log(req.body)
    if(req.body.emotion == "happy"){
      sequelize.query("SELECT * FROM happy", { type: sequelize.QueryTypes.SELECT})
      .catch ( (err) => { console.log(err);  })
      .then(function(songs) {
          res.json(songs[Math.round(Math.random(songs.length))]);
      })
    }
    else if(req.body.emotion == "sad"){
      sequelize.query("SELECT * FROM sad", { type: sequelize.QueryTypes.SELECT})
      .catch ( (err) => { console.log(err);  })
      .then(function(songs) {
          console.log(songs);
          res.json(songs[Math.round(Math.random(songs.length))]);
      })
    }
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

