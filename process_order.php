<?php
include 'db_connect.php';

$product = $_POST['product'];
$quantity = $_POST['quantity'];
$pickup_date = $_POST['pickup_date'];
$pickup_time = $_POST['pickup_time'];

// Fetch product ID
$sql = "SELECT id FROM Products WHERE name = ?";
$stmt = $conn->prepare($sql);
$stmt->bind_param("s", $product);
$stmt->execute();
$result = $stmt->get_result();
$product_id = $result->fetch_assoc()['id'];
$stmt->close();

// Insert order
$sql = "INSERT INTO Orders (product_id, quantity, pickup_date, pickup_time) VALUES (?, ?, ?, ?)";
$stmt = $conn->prepare($sql);
$stmt->bind_param("iiss", $product_id, $quantity, $pickup_date, $pickup_time);

if ($stmt->execute()) {
    echo "Order placed successfully!";
} else {
    echo "Error: " . $stmt->error;
}

$stmt->close();
$conn->close();
?>
