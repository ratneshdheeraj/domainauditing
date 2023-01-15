const express = require('express');

const bodyParser = require('body-parser');


const app = express();

app.set('view engine', 'ejs');
app.use(bodyParser.urlencoded({extended: false}));


app.use('/', require('./routes/domain'));

const PORT = process.env.PORT || 4111;
app.listen(PORT, console.log("Server don start for port: " + PORT))
