const express = require('express');
const bodyParser = require('body-parser');
const logInRoute = require('./routes/login.js');
const signUpRoute = require('./routes/signup.js');
const profileRoute = require('./routes/profile.js');
const app = express();
const session = require('express-session');
const cors = require('cors')
const dbConnect = require('./config/connect.js');

dbConnect();

app.use(bodyParser.json({extended : false}));
app.use(cors(
 {
  origin: 'https://social-media-project-six.vercel.app',
  optionsSuccessStatus: 200 // some legacy browsers (IE11, various SmartTVs) choke on 204
}
));
app.use(session({
  secret: '$123', // Secret key to sign the session ID cookie
  resave: false, // Don't save session if unmodified
  saveUninitialized: false // Don't create session until something stored
}));

app.use('/login', logInRoute);
app.use('/signup', signUpRoute);
app.use('/profile', profileRoute);

app.get('/',(req,res)=>{
  res.send("Hello world");
})

app.listen(8080, ()=>{
  console.log("http://localhost:8080");
})
