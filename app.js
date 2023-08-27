const express = require('express');
const app = express();
const path = require('path');

const port = process.env.PORT || 3001;

app.use(express.static(path.join(__dirname, 'public')));

app.listen(port, () => console.log('servidor corriendo en el puerto: ' + PORT));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'views', 'home.html'));
});
app.get('/Crea-tu-cuenta', (req, res) => {
    res.sendFile(path.join(__dirname, 'views','register.html'));
});

app.post('/Crea-tu-cuenta', (req, res) => {
    res.redirect('/register.html');
})

app.get('/login', (req, res) => {
    res.sendFile(path.join(__dirname, 'views','login.html'));
});

app.post('/login', (req, res) => {
    res.redirect('/login.html');
})