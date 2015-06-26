<?php
	include('config.php');
	
	$columnNames = '';
	$values = '';
	foreach ($_POST as $columnName => $value) {
		$columnNames .= "`" . $columnName . '`,';
		$values .= "'" . $value . "',";
	}
	$columnNames = substr($columnNames, 0, -1);
	$values = substr($values, 0, -1);
	
	//echo $columnNames;
	
	//echo $values;
	
	$insert = "INSERT INTO `".$tablename."` (" . $columnNames . ") VALUES (" . $values . ");";
	$qry = mysqli_query($connection,  $insert);
	
	if($qry) {
		echo "success";
	} else {
		echo mysqli_error($connection);
	}
	
	//echo mysqli_connect_error();
	
	//$result = mysqli_query($connection,  "SELECT * FROM test");
	//$userID = mysqli_insert_id($connection);
	//while($row = mysqli_fetch_array($result)) {
	//	echo "\n".$row['userUID'];
//	}
	
	mysqli_close($connection);
	
	//exit();
?>