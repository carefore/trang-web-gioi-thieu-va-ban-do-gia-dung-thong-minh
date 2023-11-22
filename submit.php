<?php
// Kết nối đến cơ sở dữ liệu MySQL
$servername = "localhost";
$username = "username";
$password = "password";
$dbname = "ten_database";

$conn = new mysqli($servername, $username, $password, $dbname);

// Kiểm tra kết nối
if ($conn->connect_error) {
  die("Kết nối không thành công: " . $conn->connect_error);
}

// Lấy dữ liệu từ form
$productName = $_POST['productName'];
$productPrice = $_POST['productPrice'];
$productDescription = $_POST['productDescription'];

// Chuẩn bị truy vấn SQL để thêm sản phẩm vào cơ sở dữ liệu
$sql = "INSERT INTO products (name, price, description) VALUES ('$productName', '$productPrice', '$productDescription')";

if ($conn->query($sql) === TRUE) {
  echo "Sản phẩm đã được thêm thành công";
} else {
  echo "Lỗi: " . $sql . "<br>" . $conn->error;
}

$conn->close();
?>
