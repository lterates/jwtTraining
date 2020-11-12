require('dotenv').config();
const port = 3000;
//EXPRESS
const express = require('express');
const app = express();

//MONGOOSE
const mongoose = require('mongoose');
const db = mongoose.connection;
mongoose.connect('mongodb+srv://tsiw:GAa8xvmV3eKrVa8C@cluster0.b0vmz.mongodb.net/TSIW?retryWrites=t rue&w=majority', {useNewUrlParser: true, useUnifiedTopology: true});
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
    console.log("DB connected")
})

//
let students = require('./routes/students');
let teachers = require('./routes/teachers');
let login = require('./routes/login')
const utilities = require('./utilities')

const auth = function (req, res, next) {
    let exceptions = ['/login', '/'];
    if (exceptions.indexOf(req.url) >= 0) {
        next();
    } else {
        utilities.validateToken(req.headers.authorization, (result) => {
            if(result) {
                next();
            } else {
                res.status(401).send("Invalid Token");
            }
        })
    }
}

//USE
app.use(express.json());
app.use(auth)
app.use('/students', students);
app.use('/teachers', teachers);
app.use('/login', login)

//GETTERS E POSTS
app.get('/', (req, res) => {
    res.send('Exemplo de EX - Home Page');
})

app.post('/', function (req, res) {
    res.send('POST request to the Homepage')
})

app.get('/students', (req, res) => {
    res.send('Get Students');
})

app.get('/teachers', (req, res) => {
    res.send('Get Teachers'); //break do getter, senão permanece até ocorrer timeout
})

//IMPRIMIR O LINK NA CONSOLA PARA FÁCIL ACESSO
app.listen(port, () => {
    console.log(`Server is running at http://localhost:${port}`)
})