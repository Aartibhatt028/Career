<?php
$servername = "localhost";  // or IP address of your MySQL server
$username = "root";         // MySQL username (typically root)
$password = "";             // MySQL password (leave blank for default in XAMPP/WAMP)
$dbname = "registration_db"; // Name of your database

// Create connection
$conn = new mysqli($servername, $username, $password, $dbname);

// Check connection
if ($conn->connect_error) {
    die("Connection failed: " . $conn->connect_error);
}
echo "Connected successfully";
?>
