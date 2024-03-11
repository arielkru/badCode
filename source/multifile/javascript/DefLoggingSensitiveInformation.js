const AWS = require('aws-sdk');
const { Pool } = require('pg');
const sm = new AWS.SecretsManager({ region: 'us-west-2' });

function GetSecrets() {
    const params = {
        SecretId: process.env.DB_SECRET_NAME || 'aurora-pg-secret/bc-aurora-rdsv2-secret-rotation'
    };
    return sm.getSecretValue(params);
}

export default GetSecrets;