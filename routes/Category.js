const express = require('express');
const router = express.Router();

const { create } = require('../controllers/Category');
const { requireSignin, isAuth, isAdmin } = require('../controllers/Auth');
const { userById } = require('../controllers/User');

router.post('/category/create/:userId', requireSignin, isAuth, isAdmin, create);

router.param('userId', userById);

module.exports = router;
