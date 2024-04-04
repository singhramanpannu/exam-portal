var express = require('express');

var usercontroller = require('../src/users/usercontroller');
const router = express.Router();

router.route('/user/login').post(usercontroller.loginUserControllerfn);
router.route('/user/create').post(usercontroller.createUserControllerfn);

module.exports= router;
