<?php
require 'connect.php';

$namalengkap = $_POST["namalengkap"];

$stmt_check = $conn->prepare("SELECT * FROM data_murid_dkv WHERE namalengkap = ?");
$stmt_check->bind_param("s", $namalengkap);
$stmt_check->execute();
$result_check = $stmt_check->get_result();

if ($result_check->num_rows > 0) {
  echo "nama_ada";
} else {
  echo "nama_tidak_ada";
}

$stmt_check->close();
$conn->close();
?>