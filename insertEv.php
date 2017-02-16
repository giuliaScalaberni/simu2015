<?php
	try{
		//$connect=new PDO('mysql:dbname=quintaa_simu;localhost','root','miomio');
		$dbh = new PDO('mysql:dbname=quintaa_simu;localhost','quintaa','NB7U@91A');
	}
	catch(PDOException $e){
		echo 'CONNECTION FAILED: '.$e->getMessage();
	}
    $stmt = $dbh->prepare("SELECT * FROM eventi");
    if ($stmt->execute()) {
        echo json_encode($stmt->fetchAll());
    }
?>