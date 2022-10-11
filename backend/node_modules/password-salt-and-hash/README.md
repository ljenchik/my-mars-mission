# password-salt-and-hash

[![NPM](https://img.shields.io/npm/v/password-salt-and-hash.svg)](https://www.npmjs.com/package/password-salt-and-hash) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save password-salt-and-hash
```

## Usage

```js
import saltHash from 'password-salt-and-hash'

// hash password
let hashPassword = saltHash.generateSaltHash('foo');

console.log(hashPassword);

Result:

{
  password: 'k1cB2mwUc9q1Q0HPIiI2/Zg1T6ZMGloukzuPIhAJ2oqs+rqVt5+2UgYYzzbJcC8CnKJ2C9KSHXir+O8+ToWjsQ==',
  salt: '8a40191bc15e99a71707c6308514f0568c20cb951538e1104d'
}

```
## Verify
```
// check entered password with stored hash
let isPasswordMatch = saltHash.verifySaltHash(hashPassword.salt, hashPassword.password, 'foo');

console.log(isPasswordMatch);

Result:

true

```

## License

MIT © [](https://github.com/)
