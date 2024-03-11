import GenerateJWT from './DefEnsureJwtAlgo.js';

let myInSecureAlgo = { algorithm: 'none' }
let mySecureAlgo = { algorithm: 'sha254' }

GenerateJWT(myInSecureAlgo);
GenerateJWT(mySecureAlgo);
