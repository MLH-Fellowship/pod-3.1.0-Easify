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

const data = {
    one: [1, 2, 3, 4],
    two: [3, 4, 5, 6]
}


const sadsongs = ['RBumgq5yVrA','My2FRPA3Gf8','RBumgq5yVrA'];

app.get('/', (req, res) => {
    res.json(data)
})

app.post('/songs/', (req,res) => {
    // res.json(Math.round(Math.random(sadsongs.length)));
    console.log(req.body)
    if(req.body.emotion == "happy"){
      sequelize.query("SELECT * FROM happy", { type: sequelize.QueryTypes.SELECT})
      .catch ( (err) => { console.log(err);  })
      .then(function(songs) {
          // console.log(songs);
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
//     Sad.sync({
//         force:false,
//    })
//    .then(function() {
//       return Sad.findAll();
//    })
       
//    .then(function (sadlist) {
//        console.log(sadlist)
//    })
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

