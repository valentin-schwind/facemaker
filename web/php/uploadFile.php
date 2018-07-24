<?php
ini_set('display_errors', 1);
ini_set('display_startup_errors', 1);
error_reporting(E_ALL);

/*$sourcePath = $_FILES['file']['tmp_name'];       // Storing source path of the file in a variable
$targetPath = "uploads/".$_FILES['file']['name']; // Target path where file is to be stored
move_uploaded_file($sourcePath,$targetPath) ;    // Moving Uploaded file*/
$imageID = $_GET['id'];
$file = file_get_contents("php://input");
$blubb = str_replace("data:image/png;base64","",$file);
$blubb = base64_decode($blubb);
file_put_contents("uploads/".$imageID.".png",$blubb);
echo "1";
?>