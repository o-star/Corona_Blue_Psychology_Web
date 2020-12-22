const express = require('express')
const app = express()
const port = process.env.PORT || 5000
const path = require('path');

app.get('/api', (req, res) => {
    res.send({title:"ostar !"});
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