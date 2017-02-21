<?php
	try{
		//$connect=new PDO('mysql:dbname=quintaa_simu;localhost','root','miomio');
		$connect = new PDO('mysql:dbname=quintaa_simu;localhost','quintaa','NB7U@91A');
	}
	catch(PDOException $e){
		echo 'CONNECTION FAILED: '.$e->getMessage();
	}
	
	//insert into mysql table
	$stm=$connect->prepare('INSERT INTO eventi (titolo, provincia, data, idCat, nickname) VALUES (:titolo,:provincia,:date,:idCat, :nickname)');
			$stm->bindValue(':titolo',$_POST['tit']);
			$stm->bindValue(':provincia',$_POST['prov']);
			$stm->bindValue(':date',$_POST['date']);
			$stm->bindValue(':idCat',$_POST['cat']);
			$stm->bindValue(':nickname',$_POST['nick']);
			$stm->execute();
			/*$stmt = $connect->prepare("SELECT * FROM eventi");
			if ($stmt->execute()) {
				echo json_encode($stmt->fetchAll());*/
    
	
?>