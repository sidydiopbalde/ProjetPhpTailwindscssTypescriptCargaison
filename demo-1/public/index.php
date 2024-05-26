<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

 $page = isset($_GET['page']) ? ($_GET['page']):"";
 
 $chemin= "/var/www/html/projettailwinTs/demo-1/templates/$page.php";
 
 include('/var/www/html/projettailwinTs/demo-1/templates/header.php');
 include('/var/www/html/projettailwinTs/demo-1/templates/sidebar.php');
 include('/var/www/html/projettailwinTs/demo-1/templates/navbar.php');
 include $chemin;
include('/var/www/html/projettailwinTs/demo-1/templates/footer.php');
?>



