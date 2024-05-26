<?php
// api.php

// $filename = 'cargaison.json';
/* function lireJSON($filename) {
    $json_data = file_get_contents($filename);
   
    return json_decode($json_data, true);
}

function ecrireJSON($filename, $data) {
    $json_data = json_encode($data, JSON_PRETTY_PRINT);
    file_put_contents($filename, $json_data);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST' && isset($_POST['action'])) {
    $action = $_POST['action'];
    if ($action === 'addCargaison') {
        $newCargaison = [
            "idcargo" => uniqid(),
            "numero" => $_POST['numero'],
            "poids_max" => $_POST['poidsCargaison'],
            "lieu_depart" => $_POST['pointDepart'],
            "lieu_arrivee" => $_POST['pointArrive'],
            "distance_km" => $_POST['distance'],
            "type" => $_POST['type']
        ];

        $data = lireJSON('data.json');
        echo  $data;
        
        $data['cargaisons'][] = $newCargaison;
        ecrireJSON('data.json', $data);

        echo json_encode(["status" => "success", "message" => "Cargaison ajoutée avec succès"]);
        exit;
    }
} */


/* function lireJSON($filename) {
    $json_data = file_get_contents($filename);
    return json_decode($json_data, true);
}

function ecrireJSON($filename, $data) {
    $json_data = json_encode($data, JSON_PRETTY_PRINT);
    file_put_contents($filename, $json_data);
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['action']) && $data['action'] === 'addCargaison') {
        $newCargaison = [
            "idcargo" => uniqid(),
            "numero" => $data['numero'],
            "poids_max" => $data['poidsMax'],
            "lieu_depart" => $data['pointDepart'],
            "lieu_arrivee" => $data['pointArrive'],
            "distance_km" => $data['distance'],
            "type" => $data['type']
        ];

        $currentData = lireJSON('data.json');
        $currentData['cargaisons'][] = $newCargaison;
        ecrireJSON('data.json', $currentData);

        echo json_encode(["status" => "success", "message" => "Cargaison ajoutée avec succès"]);
        exit;
    } else {
        echo json_encode(["status" => "error", "message" => "Action non reconnue"]);
        exit;
    }
} */

function lireJSON($filename) {
    $json_data = file_get_contents($filename);
    if ($json_data === false) {
        error_log("Erreur de lecture du fichier $filename");
        return [];
    }
    return json_decode($json_data, true);
}

function ecrireJSON($filename, $data) {
    $json_data = json_encode($data, JSON_PRETTY_PRINT);
    if (file_put_contents($filename, $json_data) === false) {
        error_log("Erreur d'écriture dans le fichier $filename");
    }
}

if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $data = json_decode(file_get_contents('php://input'), true);

    if (isset($data['action']) && $data['action'] === 'addCargaison') {
        $newCargaison = [
            "idcargo" => uniqid(),
            "numero" => $data['numero'],
            "poids_max" => $data['poidsMax'],
            "lieu_depart" => $data['pointDepart'],
            "lieu_arrivee" => $data['pointArrive'],
            "distance_km" => $data['distance'],
            "type" => $data['type']
        ];

        error_log("Nouvelle cargaison: " . print_r($newCargaison, true));

        $currentData = lireJSON('data.json');
        if ($currentData === null) {
            error_log("Erreur de décodage JSON pour le fichier data.json");
            echo json_encode(["status" => "error", "message" => "Erreur de lecture des données existantes"]);
            exit;
        }

        $currentData['cargaisons'][] = $newCargaison;
        ecrireJSON('data.json', $currentData);

        // Re-lire le fichier pour vérifier
        $verifData = lireJSON('data.json');
        error_log("Données après écriture: " . print_r($verifData, true));

        echo json_encode(["status" => "success", "message" => "Cargaison ajoutée avec succès"]);
        exit;
    } else {
        echo json_encode(["status" => "error", "message" => "Action non reconnue"]);
        exit;
    }
}