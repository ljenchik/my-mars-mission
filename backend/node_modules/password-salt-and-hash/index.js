var Crypto = require('crypto');

const hashPassword = (password, salt) => {

    return Crypto.pbkdf2Sync(password, salt, 10000, 64, 'sha1').toString('base64');
}

const generateSaltHash = ( password ) => {

  let randomBytesBuf = Crypto.randomBytes(25);
  let salt = randomBytesBuf.toString('hex');

  password = hashPassword(password, salt);

  return {
    'password': password,
    'salt': salt
  }

}

const verifySaltHash = ( salt, hashedPassword, password ) => {

  let newHashedPassword = hashPassword(password, salt);
  if ( hashedPassword === newHashedPassword )
    return true;

  return false;

}

exports.generateSaltHash  = generateSaltHash;
exports.verifySaltHash    = verifySaltHash;
