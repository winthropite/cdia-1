<?php
	$db = mysqli_connect('localhost','root','','cities');
	$master = array();

	if(isset($_POST['function'])) {
		// load all states.
		$query = 'SELECT DISTINCT state_code FROM cities_extended ORDER BY state_code';
		$result = mysqli_query($db, $query);
		while($row = mysqli_fetch_assoc($result)) {
			$master[] = $row['state_code'];
		}
	} else if (isset($_POST['state'])) {
		$query = '';
		if(isset($_POST['city'])) {
			$query = 'SELECT DISTINCT zip FROM cities_extended WHERE state_code = "'.$_POST['state'].'" and city = "'.$_POST['city'].'" ORDER BY city';
		} else {
			$query = 'SELECT DISTINCT city FROM cities_extended WHERE state_code = "'.$_POST['state'].'" ORDER BY city';		
		}
		$result = mysqli_query($db, $query);
		while($row = mysqli_fetch_assoc($result)) {
			if(isset($_POST['city'])) {
				$master[] = $row['zip'];
			} else {
				$master[] = $row['city'];
			}
		}
	}
	echo json_encode($master);
?>