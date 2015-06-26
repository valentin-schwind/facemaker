<?php
	include('config.php');
	
	
	$sqlA = "SELECT `latinSquare` FROM ".$tablename." WHERE `latinSquare`='A' ";
	$sqlB = "SELECT `latinSquare` FROM ".$tablename." WHERE `latinSquare`='B' ";
	$sqlC = "SELECT `latinSquare` FROM ".$tablename." WHERE `latinSquare`='C' ";
	$sqlD = "SELECT `latinSquare` FROM ".$tablename." WHERE `latinSquare`='D' ";
	$sqlE = "SELECT `latinSquare` FROM ".$tablename." WHERE `latinSquare`='E' ";
	$sqlF = "SELECT `latinSquare` FROM ".$tablename." WHERE `latinSquare`='F' ";

	$countA = mysqli_num_rows(mysqli_query($connection, $sqlA ));
	$countB = mysqli_num_rows(mysqli_query($connection, $sqlB ));
	$countC = mysqli_num_rows(mysqli_query($connection, $sqlC ));
	$countD = mysqli_num_rows(mysqli_query($connection, $sqlD ));
	$countE = mysqli_num_rows(mysqli_query($connection, $sqlE ));
	$countF = mysqli_num_rows(mysqli_query($connection, $sqlF ));
	
	$arrResults = Array(
		"A" => $countA,
		"B" => $countB,
		"C" => $countC,
		"D" => $countD,
		"E" => $countE,
		"F" => $countF
	);
	
	$maxs = array_keys($arrResults, min($arrResults));
    
	echo $maxs[0];
	
	mysqli_close($connection); 
	
?>