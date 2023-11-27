const express = require('express');
// const cookieParser = require('cookie-parser');
const expressSession = require('express-session');
const auth = require('./auth');

const app = express();

app.listen(3000, console.log("App listen in port 3000"));

// This code is without builtin functions !!!
// --------------------------------------------
// let visited = 0;
// const sessions = {};

// function mySession(req, res, next) {
//     const cookies = (req.headers.cookie || '')
//         .split(';')
//         .map(t => t.trim())
//         .map(t => t.split('='))
//         .reduce((a, [k, v]) => Object.assign(a, { [k]: v }), {});

//     console.log('>>>', cookies);

//     let user = sessions[cookies.sessionId];

//     if (user == undefined) {
//         const newId = ('000000' + (Math.random() * 999999).toString(16)).slice(-6);
//         user = {
//             visited: 1
//         }
//         sessions[newId] = user;

//         // httpOnly return empty string and user can not send to other site
//         res.setHeader('Set-Cookie', `sessionId=${newId};httpOnly`);

//     } else {
//         user.visited++;
//     }
//     req.session = user
//     next();

// }
// app.use(mySession);
// ----------------------------------------------------------------------------------
// app.use(cookieParser());
// ----------------------------------------------------------------------------------

// app.get('/', (req, res) => {
    // ------------------------------------------------------------------------------
    //  this is without builtin function
    // ===================================
    // res.send(`<h1>Hello</h1><h3>You visited site ${req.session.visited} times</h3>`);
    // --------------------------------------------------------------------------------
    // this is with cookie-parser
    // ===========================
    // console.log(req.cookies);
    // res.cookie('cookieParser', 'hello')
    // ---------------------------------------
    // this code is with express-session
    // =================================
    // if (req.session.visited) {
    //     req.session.visited++;
    // } else {
    //     req.session.visited = 1;
    // }
    // res.send(`<h1>Hello</h1><h3>You visited site ${req.session.visited} times</h3>`);
// });

// express.urlencoded help us to see data from login form
app.use(express.urlencoded({extended: true}));

app.use(expressSession({
    secret: 'super secret',
    resave: false,
    saveUninitialized: true,
    cookie: { secure: 'auto' }
}));

app.use(auth());

const users = {
    'Peter': {
        password: '123qwe',
        username: 'Peter'
    }
};

app.get('/',(req, res) => {
    const user = req.session.user || {
        username: 'Anonymous'
    }
    res.send(`<!DOCTYPE html>
    <html lang="en">
    <head>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>index</title>
    </head>
    <body>
        <h1>Hello ${user.username}</h1>
        <a href="/login">Login</a><br>
        <a href="/register">Register</a>
    </body>
    </html>`);
});

app.get('/login', (req, res) => {
    res.sendFile(__dirname + '/login.html');
});

app.post('/login', (req, res) => {
  
    if (req.auth.login(req.body.username, req.body.password)) {
        
        res.redirect('/');
    } else {
        res.status(401).send('username or password is incorrect');
    }
})

app.get('/register', (req, res) => {
     res.sendFile(__dirname + '/register.html');
});

app.post ('/register', (req, res) => {
    if (req.auth.register(req.body.username, req.body.password)) {
        
        res.redirect('/');
    } else {
        res.status(409).send('user already exist');
    }
})
