<?php
	include('config.php');	
	
	$sqlAll = "";
	$resultTrialID = "";
	$condition = "";

	foreach ($_GET as $name=>$value) {
		if($value != "all"){
			$condition .= $name."='".$value."' AND ";
		}
	}

	$condition = substr($condition, 0, -5);
	
	if($condition != '') {
		$sqlAll = "SELECT trialid, latinSquare FROM ".$tablename." WHERE ".$condition;
	} else {
		$sqlAll = "SELECT trialid, latinSquare FROM ".$tablename." ";
	}

	$resultTrialID = mysqli_query($connection, $sqlAll);
	
	if($resultTrialID != false){
		$response = '';
		while($row = mysqli_fetch_array($resultTrialID)) {
			$response .= $row[0]."-".$row[1]."|";
		}
		$response = substr($response, 0, -1);
		echo $response;
	}else{
		echo "error: ".$resultTrialID;
	}
	
	mysqli_close($connection); 
	
?>