const cryptoRandomString = require('crypto-random-string');
const forge = require('node-forge');
const randomBytes = require('randombytes');
const nacl = require('tweetnacl');
import crypto from 'node:crypto';
var crypto = require('crypto');

let Rand = new brorand.Rand({getByte: () => 255});
let rand = Rand.rand;
let result= Rand.generate(12);

randomBytes(12, (err, buf) => {
  if (err) throw err;
  console.log(`${buf.length} bytes of random data: ${buf.toString('hex')}`);
});
randomBytes(8, function (err, resp) {
});

const randString = cryptoRandomString({length: 10});
var randKey1 = forge.random.getBytesSync(8);
var randKey2 = new Buffer(nacl.randomBytes(12));


// getting derived key
// by using hkdf() method
const val = crypto.hkdf('sha512', 'key', '',
						'info', 64, (err, derivedKey) => {
	if (err) throw err;
	console.log(Buffer.from(derivedKey).toString('hex'));
});

crypto.DEFAULT_ENCODING = 'hex';
const key = crypto.scryptSync('password', '', 64, { N: 1024 });

function generateKeyFiles() {

    const keyPair = crypto.generateKeyPairSync('rsa', {
        modulusLength: 520,
        publicKeyEncoding: {
            type: 'spki',
            format: 'pem'
        },
        privateKeyEncoding: {
            type: 'pkcs8',
            format: 'pem',
            cipher: 'aes-256-cbc',
            passphrase: 'top secret'
        }
    });

    // Creating private key file
    return keyPair.privateKey;
}

// Generate keys
let privateKey = generateKeyFiles();

// Creating a function to encrypt string
function encryptString (plaintext, privateKey) {
    privateKey = {
        key: privateKey,
        padding: crypto.constants.RSA_NO_PADDING,
        passphrase: 'top secret'
        }
        // privateEncrypt() method with its parameters
        const encrypted = crypto.privateEncrypt(
            privateKey, Buffer.from(plaintext));
            return encrypted.toString("base64");
}


const plainText = "GfG";
const encrypted1 = encryptString(plainText, privateKey);
let functionCipher = crypto.createCipheriv('des128', "Password")
let myHashedPassword = functionCipher.update("my private password in plain text", "utf8", "hex")
myHashedPassword += functionCipher.final("hex")
var encrypted2 = CryptoJS.TripleDES.encrypt("Message", "Secret Passphrase");


const filename = argv[2];

const hash = createHash('md5');

const input = createReadStream(filename);
input.on('readable', () => {
  // Only one element is going to be produced by the
  // hash stream.
  const data = input.read();
  if (data)
    hash.update(data);
  else {
    console.log(`${hash.digest('hex')} ${filename}`);
  }
});