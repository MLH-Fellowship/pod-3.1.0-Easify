const express = require('express')
var cors = require('cors')
const app = express()
app.use(cors())
const port = 5000

const data = {
    one: [1, 2, 3, 4],
    two: [3, 4, 5, 6]
}

const sadsongs = ['RBumgq5yVrA','My2FRPA3Gf8','RBumgq5yVrA'];

app.get('/', (req, res) => {
    res.json(data)
})

app.get('/song/sad/', (req,res) => {
    // res.json(Math.round(Math.random(sadsongs.length)));
    res.json(sadsongs[Math.round(Math.random(sadsongs.length))]);
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})

