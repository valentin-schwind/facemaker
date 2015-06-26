<?php
	include('config.php');	
	
	$sqlAll = "";
	$resultTrialID = "";
	$condition = "";
	$columnname = "";

	foreach ($_GET as $name=>$value) {
		if($value == "all"){
			$columnname = $name;
		}
		if($name == "onlycomplete" && $value == "yes"){
			$condition .= "userUID IN (SELECT userUID FROM ".$tablename." GROUP BY userUID HAVING COUNT(*) >= 6 ) AND ";
		} 
		if($value != "all" && $name != "onlycomplete"){
			$condition .= $name."='".$value."' AND ";
		}
	}

	$condition = substr($condition, 0, -5);
	
	if($condition != '') {
		$sqlAll = "SELECT DISTINCT ".$columnname." FROM ".$tablename." WHERE ".$condition." ORDER BY ".$columnname." ASC";
	} else {
		$sqlAll = "SELECT DISTINCT ".$columnname." FROM ".$tablename;
	}

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