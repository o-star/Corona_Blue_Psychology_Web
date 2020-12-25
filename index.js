const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const path = require('path')
const bodyParser = require('body-parser')

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended : true}));

app.post('/test-page', (req, res) => {
  console.log("!");
  res.send(req.body.number);
})

app.listen(port, () => {
    console.log(`Server is listening at localhost:${process.env.PORT}`);
})

// 리액트 정적 파일 제공
app.use(express.static(path.join(__dirname, 'client/build')));

// 라우트 설정
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname+'/client/build/index.html'));
});