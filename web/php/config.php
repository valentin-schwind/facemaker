<?php	
	$connection = null;
	$tablename = "trials";
	
	if($_SERVER['HTTP_HOST'] == "localhost") {
		$connection = mysqli_connect("localhost", "root", "facemaker", "facemaker")
		or die ("Connection could be established");
		//echo "choosing local db<p></p>";
	} else {
		$connection = mysqli_connect("HOSTNAME", "USERNAME", "PASSWORD", "DATABASENAME")
		or die ("Connection could be established");
		//echo "choosing online db<p></p>";
	}
	
	if (mysqli_connect_errno()) {
	  echo "Failed to connect to MySQL: " . mysqli_connect_error();
	  mysqli_close($connection);
	}
	
	if(!$connection)
	{
		echo mysqli_connect_error();
		exit(mysqli_connect_error());
	}
?>