<?php
error_reporting(E_ALL);
ini_set('display_errors', 1);

/*  $page = isset($_GET['page']) ? ($_GET['page']):"";
 
 $chemin= "/var/www/html/projettailwinTs/demo-1/templates/$page.php";
 
 include('/var/www/html/projettailwinTs/demo-1/templates/header.php');
 include('/var/www/html/projettailwinTs/demo-1/templates/sidebar.php');
 include('/var/www/html/projettailwinTs/demo-1/templates/navbar.php');
 include $chemin;
include('/var/www/html/projettailwinTs/demo-1/templates/footer.php'); */



// $page = isset($_GET['page']) ? $_GET['page'] : 'connexion';

// // Construire le chemin complet du fichier
// $chemin = "/var/www/html/projettailwinTs/demo-1/templates/$page.php";

// // Inclure les fichiers de templates
// include('/var/www/html/projettailwinTs/demo-1/templates/header.php');
// include('/var/www/html/projettailwinTs/demo-1/templates/sidebar.php');
// include('/var/www/html/projettailwinTs/demo-1/templates/navbar.php');

// // Vérifier si le fichier existe avant de l'inclure
// if (file_exists($chemin)) {
//     include $chemin;
// } else {
//     echo "La page demandée n'existe pas.";
// }

// include('/var/www/html/projettailwinTs/demo-1/templates/footer.php');



error_reporting(E_ALL);
ini_set('display_errors', 1);

$page = isset($_GET['page']) ? $_GET['page'] : 'connexion';

// Construire le chemin complet du fichier
$chemin = "/var/www/html/projettailwinTs/demo-1/templates/$page.php";

// Si la page est "connexion", inclure seulement le fichier connexion.php
if ($page === 'connexion') {
    if (file_exists($chemin)) {
        include $chemin;
    } else {
        echo "La page demandée n'existe pas.";
    }
} else {
    // Inclure les fichiers de templates pour les autres pages
    include('/var/www/html/projettailwinTs/demo-1/templates/header.php');
    include('/var/www/html/projettailwinTs/demo-1/templates/sidebar.php');
    include('/var/www/html/projettailwinTs/demo-1/templates/navbar.php');
    
    // Vérifier si le fichier existe avant de l'inclure
    if (file_exists($chemin)) {
        include $chemin;
    } else {
        echo "La page demandée n'existe pas.";
    }

    include('/var/www/html/projettailwinTs/demo-1/templates/footer.php');
}
?>




