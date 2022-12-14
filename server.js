const path = require('path');
const express = require('express');
const bodyParser = require('body-parser');
const app = express();
const rootDir = require('./utils/path');

const adminRoute = require('./routes/admin');
const shopRoute = require('./routes/shop');

app.use(bodyParser.urlencoded({extended: false}));
app.use(express.static(path.join(__dirname, 'public')));

app.use('/admin', adminRoute);
app.use('/shop', shopRoute);

app.use((req, res, next) => {
    res.status(404).sendFile(path.join(rootDir, 'views', '404.html'));
})

app.listen(3000, console.log('Server listening at port 3000'));