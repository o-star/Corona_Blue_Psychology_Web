const express = require('express')
const app = express()
const port = process.env.PORT || 5000

app.get('/api', (req, res) => {
    res.send({title:"ostar !"});
})

app.listen(port, () => {
    console.log(`Server is listening at localhost:${process.env.PORT}`);
})