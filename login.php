<?php
require 'connect.php';
$email = $_POST['email'];
$password = $_POST['password'];

$query_sql = "SELECT * FROM data_murid_dkv
            WHERE email = '$email'";

$result = mysqli_query($conn, $query_sql);

if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result); // Ambil data pengguna dari hasil query

    // Verifikasi password menggunakan password_verify()
    if (password_verify($password, $row['password'])) {
        $_SESSION['id_user'] = $id_user;
        header("Location: users/index_users.html");
    } else {
        echo "<center><h1>Email atau Password Anda Salah. Silahkan Coba Login Kembali!.</h1><button><strong><a href='index.html'></a></strong></button></center>";
    }
} else {
    echo "<center><h1>Email atau Password Anda Salah. Silahkan Coba Login Kembali!.</h1><button><strong><a href='index.html'></a></strong></button></center>";
}