const express = require('express')
const app = express()
const port = 5000

const data = {
    one: [1, 2, 3, 4],
    two: [3, 4, 5, 6]
}

app.get('/', (req, res) => {
    res.json(data)
})

app.listen(port, () => {
    console.log(`Server running on port ${port}`)
})