'use strict';

const crypto = require('crypto');

const AES_METHOD = 'aes-256-cbc';
const IV_LENGTH = 16; // For AES, this is always 16

const password = 'lbwyBzfgzUIvXZFShJuikaWvLJhIVq36'; // Must be 256 bits (32 characters)

function encrypt(text, password) {
    if (process.versions.openssl <= '1.0.1f') {
        throw new Error('OpenSSL Version too old, vulnerability to Heartbleed');
    }

    let iv = crypto.randomBytes(IV_LENGTH);
    let cipher = crypto.createCipheriv(AES_METHOD, Buffer.from(password), iv);
    let encrypted = cipher.update(text, 'utf8');

    encrypted = Buffer.concat([encrypted, cipher.final()]);

    return iv.toString('hex') + ':' + encrypted.toString('hex');
}

function decrypt(text, password) {
    let textParts = text.split(':');
    let iv = Buffer.from(textParts.shift(), 'hex');
    let encryptedText = Buffer.from(textParts.join(':'), 'hex');
    let decipher = crypto.createDecipheriv(AES_METHOD, Buffer.from(password), iv);
    let decrypted = decipher.update(encryptedText);

    decrypted = Buffer.concat([decrypted, decipher.final()]);

    return decrypted.toString();
}

// Example usage:
const myText = 'VikasGupta';
const encrypted = encrypt(myText, password);
console.log('Encrypted:', encrypted);

const decrypted = decrypt(encrypted, password);
console.log('Decrypted:', decrypted);
