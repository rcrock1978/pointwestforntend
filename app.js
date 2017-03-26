const express = require('express');
const path = require('path');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();

const port = process.env.PORT || 8080;

//CORS Middleeware
app.use(cors());

//Set Static folder
app.use(express.static(path.join(__dirname, 'public')));

app.get('/', (req, res) => {
    res.send('Invalid Endpoint');
});

app.get('*', (req, res) => {
    res.sendFile(path.join(__dirname,'public/index.html'));
});

app.listen(port, () => {
   console.log("Express server listening on port %d in %s mode", this.address().port, app.settings.env);
});


