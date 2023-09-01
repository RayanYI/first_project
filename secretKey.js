const crypto = require('crypto');

const secretKey = crypto.randomBytes(32).toString('hex'); // Generate a 256-bit (32-byte) key

module.exports = secretKey;