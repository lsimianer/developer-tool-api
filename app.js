import express from 'express';
import bodyParser from 'body-parser';
import db from './db/db.js';
import router from './routes/index.js';


//set up the express app
const app = express();
// parse incoming data requests
app.use(bodyParser.urlencoded({ extended: false}));
app.use(router);



// /set port to listen on
const PORT = 5000;


app.listen(PORT, () => {
    console.log(`APP is listening on port ${PORT}` )
});

