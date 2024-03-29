const express = require('express');
const path = require('path');
const bodyParser = require('body-parser')
const cookieParser = require('cookie-parser')

const loginRoute = require('./routes/loginRoute');
const songRoute = require('./routes/songRoute');
const timerRoute = require('./routes/timerRoute');

const PORT = 3000;

const app = express();

app.use(express.json());
app.use(cookieParser());
app.use(bodyParser.json())

// app.use('/build', express.static(path.resolve(__dirname, '../build')))

if (process.env.NODE_ENV === 'production'){
    app.use('/', express.static(path.join(__dirname, '../build')))
}
else {
//route to serve the index html when the page is loaded
app.get('/', (req, res) => {
    res.status(200).sendFile(path.resolve(__dirname, '../index.html'));
    })
}

//route for creating user, verifying user, and logging in
app.use('/api/user/', loginRoute)

//route for fetching, adding, and deleting songs
app.use('/api/songs/', songRoute)


//route for sending set time filter
app.use('/api/timer/', timerRoute)


//catch all route
app.use('*', (req, res) => {
    res.status(404).send('Page not found')
});

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
    log: `Express error handler caught unknown middleware error: ${err}`,
    status: 400,
    message: { err: "An error occurred" },
  };
  const errorObj = Object.assign({}, defaultErr, err);
  console.log(errorObj.log);
  return res.status(errorObj.status).json(errorObj.message);
});

app.listen(PORT, ()=>{ console.log(`Listening on port ${PORT}...`); });
module.exports = app;