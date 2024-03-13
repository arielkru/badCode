import jwt from 'jsonwebtoken';

const SECRET = process.env.JWT_SECRET_KEY

function GenerateJWT(algo) {
    const payload = {
        Issuer: "server",
        Subject: "Paz",
    }
    const token = jwt.sign(payload, SECRET, algo);
    return token
}


export default GenerateJWT;