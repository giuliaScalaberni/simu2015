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
			$stm->bindValue(':titolo',$_GET['tit']);
			$stm->bindValue(':provincia',$_GET['prov']);
			$stm->bindValue(':date',$_GET['date']);
			$stm->bindValue(':idCat',$_GET['cat']);
			$stm->bindValue(':nickname',$_GET['nick']);
			if ($stm->execute()){
				echo 'ok';
			}
			else
				echo 'error';
	
?>