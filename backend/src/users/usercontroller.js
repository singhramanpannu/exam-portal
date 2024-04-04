var userService = require('../users/userservice');
//creating data
var createUserControllerfn = async (req, res) => {
  try {
    console.log(req.body);
    var status = await userService.createuserdbservice(req.body);
    console.log(status);

    if (status) {
      res.send({ status: true, message: 'user created' });
    } else {
      res.send({ status: false, message: 'user not created' });
    }
  } catch (error) {
    console.log(err);
  }
};
//login user data
var loginUserControllerfn = async (req, res) => {
  var result = null;
  try {
    result = await userService.loginuserdbservice(req.body);
    if (result.status) {
      res.send({ status: true, message: result.msg });
    } else {
      res.send({ status: false, message: result.msg });
    }
  } catch (error) {
    console.log(error);
    res.send({ status: false ,"message":error.msg});
  }
};
module.exports = { createUserControllerfn ,loginUserControllerfn};
