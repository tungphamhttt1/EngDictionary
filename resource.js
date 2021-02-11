const express = require('express');
const bodyParser = require('body-parser');
const app = express();


app.use(bodyParser.json());
// Import Routes
const postsRoute = require('./routes/posts');



app.use('/posts', postsRoute);

app.get('/', (req, res) => {
    res.send('We are on home');
})
// How to we start listening to the server
app.listen(3000);


