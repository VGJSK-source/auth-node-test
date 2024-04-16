<!DOCTYPE html>
<html>

<body>

    <?php
    echo "My first PHP script!";


    // Hashing a password
    $password = "userPassword123";
    $hash = password_hash($password, PASSWORD_DEFAULT);

    // Verifying a password
    $isPasswordCorrect = password_verify('userPassword123', $hash);
    if ($isPasswordCorrect) {
        echo 'Password is valid!';
    } else {
        echo 'Invalid password!';
    }



    ?>

</body>

</html>