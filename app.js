const express = require('express');
const app = express();
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
const expressValidator = require('express-validator');

require('dotenv').config();

//import routes
const authRoutes = require('./routes/Auth');
const userRoutes = require('./routes/User');
const categoryRoutes = require('./routes/Category');
const productRoutes = require('./routes/Product');

// db connection
const db = require('./helpers/db')();

// middlewares
app.use(morgan('de'));
app.use(bodyParser.json());
app.use(cookieParser());
app.use(expressValidator());

//routes middleware
app.use('/api', authRoutes);
app.use('/api', userRoutes);
app.use('/api', categoryRoutes);
app.use('/api', productRoutes);

const port = process.env.PORT || 8080;

app.listen(port, () => {
  console.log(`Server ${port} portunda çalışmaya başladı`);
});
