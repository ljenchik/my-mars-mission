const saltHash  = require('./index');

let hashPassword = saltHash.generateSaltHash('foo');

console.log(hashPassword);

let isPasswordMatch = saltHash.verifySaltHash(hashPassword.salt, hashPassword.password, 'foo');

console.log(isPasswordMatch);
