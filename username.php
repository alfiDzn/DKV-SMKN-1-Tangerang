<?php
require 'connect.php';

// Ambil data user dari session atau sumber lainnya
$id_user = $_SESSION['id_user']; // Contoh: ambil id user dari session

$query = "SELECT namalengkap FROM data_murid_dkv WHERE id_user = '$id_user'";
$result = mysqli_query($conn, $query);

if (mysqli_num_rows($result) > 0) {
    $row = mysqli_fetch_assoc($result);
    $namalengkap = $row['namalengkap'];
} else {
    $namalengkap = "Nama Lengkap Tidak Ditemukan"; // Jika data tidak ditemukan
}
?>