const express = require('express');
const path = require('path');
const app = express();
const logger = require('./public/middleware/logger');

const PORT = process.env.PORT || 5000;
// app.use(logger);

app.use(express.json());
app.use(express.urlencoded({extended: false}));

app.use(express.static(path.join(__dirname, 'public')));

app.use('/api/members', require('./public/router/api/members'));
app.listen(PORT, () => console.log('server started on' + PORT));
// app.get('/', (req, res) => {
//     res.sendFile(path.join(__dirname, 'public', 'home.html'));
// });