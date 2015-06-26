<?php
	include('config.php');	
	
	$sqlAll = "";
	$resultTrialID = "";
	$condition = "";
	$columnname = "";
	$onlycomplete = "";


	foreach ($_GET as $name=>$value) {
		if($value == "onlycomplete"){
			$columnname = $name;
			$condition .= "userUID IN (SELECT userUID FROM ".$tablename." GROUP BY userUID HAVING COUNT(*) >= 6 )";
		} 
	}


	$sqlAll = "SELECT DISTINCT ".$columnname." FROM ".$tablename." WHERE ".$condition." ORDER BY ".$columnname." ASC";


	$resultTrialID = mysqli_query($connection, $sqlAll);
	
	if($resultTrialID != false){
		$response = '';
		while($row = mysqli_fetch_array($resultTrialID)) {
			$response .= $row[0]."|";
		}
		$response = substr($response, 0, -1);
		echo $response;
	}else{
		echo "error: ".$sqlAll;
	}
	
	mysqli_close($connection); 
	
?>