const mongoose = require('mongoose');

const dbUrl = `mongodb://${process.env.DB_HOST}/${process.env.DB_NAME}`;

module.exports = () => {
  mongoose.connect(dbUrl, { useNewUrlParser: true, useUnifiedTopology: true });
  mongoose.connection.on('open', () => {
    console.log('MongoDB bağlantısı hazır');
  });
  mongoose.connection.on('error', (err) => {
    console.log(`MongoDB Error ${err}`);
  });
};
