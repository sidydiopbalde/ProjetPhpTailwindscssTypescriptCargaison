<?php
function readDataUser(){
    $chemin = '/var/www/html/projettailwinTs/demo-1/authentification.json';
    
    // Lire le contenu du fichier JSON
    $jsonContent = file_get_contents($chemin);
    
    if ($jsonContent === false) {
        echo 'Erreur ouverture';
        return [];
    }
    
    // Décoder le contenu JSON en tableau associatif
    $donnee = json_decode($jsonContent, true);
    
    if (json_last_error() !== JSON_ERROR_NONE) {
        echo 'Erreur décodage JSON: ' . json_last_error_msg();
        return [];
    }
    
    return $donnee;
}


//fonction de lecture de fichier json
/* function readDatajson(){
    $chemin = '/var/www/html/Projet/data/authentification.json';
    $contenu_json = file_get_contents($chemin);

    if($contenu_json === false){
        echo 'Erreur de lecture du fichier JSON';
    } else {
        // Décoder le contenu JSON en un tableau PHP
        $donnees = json_decode($contenu_json, true);

        if($donnees === null){
            echo 'Erreur de décodage du JSON';
        } else {
            return $donnees;
        }
    }
} */