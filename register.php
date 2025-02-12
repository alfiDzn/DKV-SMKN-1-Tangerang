<?php
require 'connect.php';
$namalengkap = $_POST["namalengkap"];
$kelas = $_POST["kelas"];
$email = $_POST["email"];
$password = password_hash($_POST["password"], PASSWORD_DEFAULT);

$query_check = "SELECT * FROM data_murid_dkv WHERE namalengkap = '$namalengkap'";
$result_check = mysqli_query($conn, $query_check);

if (mysqli_num_rows($result_check) > 0) {
    echo "Nama sudah terdaftar.";
} else {
    
    $query_sql = "INSERT INTO data_murid_dkv (namalengkap, kelas, email, password)
                VALUES ('$namalengkap', '$kelas', '$email', '$password')";

    if (mysqli_query($conn, $query_sql)) {
        header("Location: index.html");
        exit();
    }   else {
            echo "Pendaftaran Gagal : " . mysqli_error($conn);
    }

}