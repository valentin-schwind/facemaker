<?php
	include('config.php');	
	
	$sqlAll = "SELECT count(*) FROM ".$tablename;

	$resultTrialID = mysqli_query($connection, $sqlAll);
	
	if($resultTrialID != false){
		$response = '';
		while($row = mysqli_fetch_array($resultTrialID)) {
			$response .= $row[0];
		}
		echo $response;
	}else{
		echo "error: ".$resultTrialID;
	}
	
	mysqli_close($connection); 
	
?>