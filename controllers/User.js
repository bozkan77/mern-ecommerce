const User = require('../models/User');

exports.userById = (req, res, next, id) => {
  User.findById(id).exec((err, user) => {
    if (err || !user) {
      return res.status(400).json({
        error: 'Kullanıcı bulunamadı',
      });
    }
    req.profile = user;
    next();
  });
};
