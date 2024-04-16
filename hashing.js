const bcrypt = require('bcryptjs');

// Hashing a password
const password = "vikas";
bcrypt.genSalt(10, function (err, salt) {
    bcrypt.hash(password, salt, function (err, hash) {
        // Output the hash to the console
        console.log("Hashed password:", hash);

        // Verifying a password
        bcrypt.compare("vikas", hash, function (err, isMatch) {
            if (isMatch) {
                console.log('Password is valid!');
            } else {
                console.log('Invalid password!');
            }
        });
    });
});
