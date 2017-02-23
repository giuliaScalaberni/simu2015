<?php session_start()?>

<?php
try{
		//$connect=new PDO('mysql:dbname=quintaa_login;localhost','root','miomio');
		$connect=new PDO('mysql:dbname=quintaa_simu;localhost','quintaa','NB7U@91A');
	}
	catch(PDOException $e){
		echo 'CONNECTION FAILED: '.$e->getMessage();
	}
	if((isset($_GET['nick']))&&(isset($_GET['psw']))){
		$nickname = (string)$_GET['nick'];
		$password=md5($_GET['psw']);
		$sql = "SELECT * FROM utente WHERE nickname= '$nickname' and password='$password'";
		$stm=$connect->prepare($sql);
		$stm->execute();
		if ($data = $stm->fetch()){
			$row=$stm->rowCount() ;
			if ($row> 0) {
				$_SESSION['log']='ok';
				$_SESSION['nick']=$_GET['nick'];
				echo json_encode($_SESSION);
			}
			else{echo 'error row';}
		}
		else{echo 'error fetch';}
	}
	else{echo 'error set';}
?>