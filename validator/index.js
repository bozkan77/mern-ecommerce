exports.userSignupValidator = (req, res, next) => {
  req.check('name', 'İsim boş bırakılamaz').notEmpty();
  req
    .check('email', 'Email 3i l32 karakter arası gereklidir')
    .matches(/.+@.+\..+/)
    .withMessage('Email must contain @')
    .isLength({
      min: 4,
      max: 32,
    });
  req.check('password', 'Şifre boş bırakılamaz');
  req
    .check('password')
    .isLength({ min: 6 })
    .withMessage('Şifre  6 karakterden az olamaz');
  const errors = req.validationErrors();
  if (errors) {
    const firsError = errors.map((error) => error.msg)[0];
    return res.status(400).json({ error: firsError });
  }
  next();
};
