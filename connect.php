<?php
$servername = "jyzqx.h.filess.io";
$database = "dbsiswa_notedinch";
$username = "dbsiswa_notedinch";
$password = "69fef1abab612e934e3e5af34356e4358d1bc492";
$port = 3307;

$conn = mysqli_connect($servername, $username, $password, $database. $port);

if (!$conn) {
    die("Koneksi Gagal :" . mysqli_connect_error());
} else {
    echo "Koneksi Berhasil";
}