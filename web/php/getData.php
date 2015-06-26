<?php

	include('config.php');
	
	$columnNames = '';
	$values = '';
	$condition = '';
	
	foreach ($_POST as $array => $arrayValue) {
		$condition .= "(";
		foreach ($arrayValue as $columnName => $value) {
			//echo $array."=>". $value;
			//$columnNames .= $columnName.' ,';
			//$value .= "'" . $value . "',";
			$condition .= $array."='".$value."' OR ";
			//echo ' ';
		}
		$condition = substr($condition, 0, -4);
		$condition .= ") AND ";
	}
	//$columnNames = substr($columnNames, 0, -1);
	//$values = substr($values, 0, -1);
	$condition = substr($condition, 0, -5);
	//echo $condition;
	
	if($condition != '') {
		
		$sql = "SELECT * FROM test WHERE ".$condition;
	} else {
		$sql = "SELECT * FROM test ";
	}
	
	$results = mysqli_query($connection,  $sql);
	
	if(!empty($results)) {

		echo mysqli_connect_error();
		
		$response = '';
		while($row = mysqli_fetch_assoc($results)) {
			foreach($row as $fieldName => $value) {
				$response .= $fieldName."=".$value."|";
			}
			$response = substr($response, 0, -1);
			$response .= "--";
		}
		$response = substr($response, 0, -3);
		echo $response;
	}else{
		echo "empty";
	}
	mysqli_close($connection);
?>