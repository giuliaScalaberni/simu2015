<?php
	try{
		$connect=new PDO('mysql:dbname=quintaa_simu;localhost','root','miomio');
		//$connect = new PDO('mysql:dbname=quintaa_simu;localhost','quintaa','NB7U@91A');
	}
	catch(PDOException $e){
		echo 'CONNECTION FAILED: '.$e->getMessage();
	}
    $stmt = $connect->prepare("SELECT * FROM eventi");
    if ($stmt->execute()) {
        echo json_encode($stmt->fetchAll());
    }
?>