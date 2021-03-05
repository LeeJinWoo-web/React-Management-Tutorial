const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const port = process.env.PORT || 5000;

app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true}));

app.get('/api/customers',(req, res) => {
    res.send([
            {
              'id' : 1,
              'image' : 'https://placeimg.com/64/64/any',
              'name' : '이진우',
              'birthday' : '900202',
              'gender' : '남자',
              'jop' : '학생'
            },
            {
              'id' : 2,
              'image' : 'https://placeimg.com/64/64/2',
              'name' : '박동희',
              'birthday' : '891222',
              'gender' : '남자',
              'jop' : '학생'
            },
            {
              'id' : 3,
              'image' : 'https://placeimg.com/64/64/3',
              'name' : '박시영',
              'birthday' : '890713',
              'gender' : '남자',
              'jop' : '디자이너'
            }
    ]);
});

app.listen(port, () => console.log(`Listening on port ${port}`));