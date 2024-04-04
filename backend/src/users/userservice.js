const usermodel = require('./usermodel.js');
const key = '123456789trytrytry';
const encryptor = require('simple-encryptor')(key);

module.exports.createuserdbservice = (userdetails) => {
  return new Promise(function(resolve, reject) {
    const usermodeldata = new usermodel();

    usermodeldata.firstname = userdetails.firstname;
    usermodeldata.lastname = userdetails.lastname;
    usermodeldata.email = userdetails.email;
    usermodeldata.password = userdetails.password;
    const encrypted = encryptor.encrypt(userdetails.password);
    usermodeldata.password = encrypted;

    usermodeldata.save()
      .then(result => {
        resolve(true);
      })
      .catch(error => {
        reject(false);
      });
  });
};

// Login
module.exports.loginuserdbservice = (employeedetail) => {
  return new Promise(function(resolve, reject) {
    usermodel.findOne({ email: employeedetail.email })
      .then(result => {
        if (!result) {
          reject({ status: false, msg: 'Invalid details' });
          return;
        }
        const decrypted = encryptor.decrypt(result.password);
        if (decrypted === employeedetail.password) {
          resolve({ status: true, msg: 'Validation successful' });
        } else {
          reject({ status: false, msg: 'Validation failed' });
        }
      })
      .catch(error => {
        reject({ status: false, msg: 'Invalid data' });
      });
  });
};
