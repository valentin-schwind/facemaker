<?php

	include('config.php');
	
	$columnNames = '';
	$values = '';
	$condition = '';
	
	/*foreach ($_POST as $array => $arrayValue) {
		$condition .= "((";
		foreach ($arrayValue as $columnName => $value) {
			if($array != "onlycomplete" ){
				$value = str_replace( "|", ") OR (", $value );
				if($value != "all"){
					$condition .= $array."=".$value." AND ";
				} else {
					$condition .= $array."=".$value." OR ";
				}
			}
			if($array == "onlycomplete" && $value == "yes"){
				$condition .= "userUID IN (SELECT userUID FROM ".$tablename." GROUP BY userUID HAVING COUNT(*) >= 6 ) AND ";
			} 
			
		}
		$condition = substr($condition, 0, -5);
		$condition .= ")) AND ";
	}*/
	$condition = $_POST["query"];
	$condition = str_replace( ":", "=", $condition );
	//print $condition;
	
	//$columnNames = substr($columnNames, 0, -1);
	//$values = substr($values, 0, -1);
	//$condition = substr($condition, 0, -5);
	
	
	//$myString = "'My amiable lady!' he interrupted, with an almost diabolical sneer on his face. 'Where is she--my amiable lady?'";
	//$searchTerms = array ( 'lady', 'amiable' );
	//$replacements = array ( 'wife', 'lovely' );
	//print str_replace( $searchTerms, $replacements, $myString );
	//print $condition;
	
	$columns = mysqli_query($connection,"select column_name from information_schema.columns where table_name='".$tablename."'");
	//$column = mysqli_fetch_assoc($columns);
	
	if($condition != '') {
		$sqlAll = "SELECT * FROM ".$tablename." WHERE ".$condition;
	} else {
		$sqlAll = "SELECT * FROM ".$tablename." ";
	}
	
	$all = mysqli_query($connection, $sqlAll);
	$numResults = mysqli_num_rows($all);
	
	$output = "found=".$numResults."|";
	
	while($column = mysqli_fetch_assoc($columns)) {
		foreach($column as $column_name => $columnname) { 
			//print $value."<br />";
			/*
			if(	$columnname == "faceGender" || $columnname == "faceStyle" || $columnname == "skinDetails" || $columnname == "skinColor" || $columnname == "hairColor" || $columnname == "eyeColor" || $columnname == "eyeShape" || $columnname == "eyeSize" || $columnname == "eyeHeight" || $columnname == "eyeDistance" || $columnname == "eyeDepth" || $columnname == "eyebrowsColor" || $columnname == "eyebrowsShape" || $columnname == "eyebrowsLine" || $columnname == "noseShape" || $columnname == "noseLength" || $columnname == "noseWidth" || $columnname == "noseBridge" || $columnname == "foreheadHeight" || $columnname == "cheeksBone" || $columnname == "jawShape" || $columnname == "jawChin" || $columnname == "jawLength" || $columnname == "earSize" || $columnname == "throatSize" || $columnname == "upperLipWidth" || $columnname == "lowerLipWidth" || $columnname == "mouthVolume" || $columnname == "mouthWidth" || $columnname == "mouthHeight" || $columnname == "mouthDepth" || $columnname == "mouthOverlap" || $columnname == "eyeShadow" || $columnname == "lipStick" || $columnname == "rouge" || $columnname == "timeDuration" || $columnname == "timeMainSessionTime" )
			*/
			if($columnname == "trialid" || $columnname == "latinSquare" ||$columnname == "cookies" ||$columnname == "timeDate"||$columnname == "webgl" ||$columnname == "acceptTOU" ||$columnname == "sessions" || $columnname == "userUID" || $columnname == "systemLanguage" || $columnname == "ipadress" || $columnname == "theAge" || $columnname == "theGender" || $columnname == "theCountry" ||  $columnname == "playingGames" || $columnname == "watchingMovies" || $columnname == "screenWidth" || $columnname == "screenHeight" || $columnname == "userLanguage" || $columnname == "platform" || $columnname == "appCodeName" || $columnname == "appVersion" || $columnname == "product"|| $columnname == "browser" ){
				if($condition != '') {
					$sqlUnique = "SELECT DISTINCT ".$columnname." FROM ".$tablename." WHERE ".$condition;
				} else {
					$sqlUnique = "SELECT DISTINCT ".$columnname." FROM ".$tablename." ";
				}
				$resultsUnique = mysqli_query($connection,  $sqlUnique);
				$numUniques = mysqli_num_rows($resultsUnique);
				$output.= $columnname."_".$numUniques."=";
				
				$stopMe = 0;
				while($row = mysqli_fetch_assoc($resultsUnique)) {
					
					
					foreach($row as $fieldName => $value) {
						$stopMe++;
						if($stopMe < 5){
							if($condition != '') {
								$sqlCount = "SELECT ".$columnname." FROM ".$tablename." WHERE ".$condition." AND ".$columnname."='".$value."' ORDER BY ".$columnname." DESC" ;
							} else {
								$sqlCount = "SELECT ".$columnname." FROM ".$tablename." WHERE ".$columnname."='".$value."' ORDER BY ".$columnname." DESC" ;
							}
							//print $sqlCount;
							$countColResults = mysqli_query($connection,  $sqlCount);
							if($countColResults){
								$numResultsCol = mysqli_num_rows($countColResults);
							}else{ 
								$numResultsCol = 0;
							}
							//if($value != 0){
							if($value == "") {$value = "unknown";}
							if($columnname == "theCountry") {
							
								$output.= $value." ".$numResultsCol.",";
							}else{
								$output.= "<b>".$value."</b> <i>(".$numResultsCol.")</i><br />";
							}
						}else if ($stopMe == 100){
							$output.= "...<br />";
						}else{
						}
					}
					//print "(".$stopMe.")";
				}
				$output.= "|";
			}else{
			
				if($condition != '') {
					$sql = "SELECT AVG(".$columnname.") FROM ".$tablename." WHERE ".$condition;
				} else {
					$sql = "SELECT AVG(".$columnname.") FROM ".$tablename." ";
				}
				
				$results = mysqli_query($connection,  $sql);
				
				while($row = mysqli_fetch_assoc($results)) {
					foreach($row as $fieldName => $value) {
						
						$output.= $columnname."=".$value."|";
					}
				}
			}
			
		}
	}
	$output = substr($output, 0, -1);

	print $output;
	
	
	/*
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
	}*/
	mysqli_close($connection);
?>