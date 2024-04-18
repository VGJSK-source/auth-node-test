<?php

// Hashing a password
function hashPassword($password)
{
    $options = [
        'memory_cost' => 1 << 17, // 128 MB
        'time_cost' => 4,
        'threads' => 2
    ];

    // Store the plaintext password before hashing
    $plaintextPassword = $password;

    // Hash the password using Argon2
    $hashedPassword = password_hash($password, PASSWORD_ARGON2I, $options);

    // Return both the plaintext and hashed passwords
    return [
        'plaintext' => $plaintextPassword,
        'hashed' => $hashedPassword
    ];
}

// Example usage
$password = 'password123';

// Hash the password
$hashedData = hashPassword($password);
echo 'Plaintext Password: ' . $hashedData['plaintext'] . "\n";
echo 'Hashed Password: ' . $hashedData['hashed'] . "\n";

?>