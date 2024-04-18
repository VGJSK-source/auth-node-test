const argon2 = require('argon2');

// Hashing a password
async function hashPassword(password) {
    try {
        // Store the plaintext password before hashing
        const plaintextPassword = password;

        // Hash the password using Argon2
        const hashedPassword = await argon2.hash(password);

        // Return both the plaintext and hashed passwords
        return {
            plaintext: plaintextPassword,
            hashed: hashedPassword
        };
    } catch (err) {
        console.error('Error hashing password:', err);
    }
}

// Example usage
async function main() {
    const password = 'Vikas8767567';

    // Hash the password
    const hashedData = await hashPassword(password);
    console.log('Plaintext Password:', hashedData.plaintext);
    console.log('Hashed Password:', hashedData.hashed);
}

main();

