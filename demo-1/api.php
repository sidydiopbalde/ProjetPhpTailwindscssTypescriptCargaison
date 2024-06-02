<?php
// api.php



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
            "poidsMax" => $data['poidsMax'],
            "pointDepart" => $data['pointDepart'],
            "pointArrive" => $data['pointArrive'],
            "dateDepart" => $data['dateDepart'],
            "dateArrive" => $data['dateArrive'],
            "distance" => $data['distance'],
            "type" => $data['type'],
            "etatGlobal" =>$data['etatGlobal'],
            "etatAvancement"=> $data['etatAvancement'],
            "produit"=>$data['produit']
        ];

        error_log("Nouvelle cargaison: " . print_r($newCargaison, true));

        $currentData = lireJSON('data.json');
        if ($currentData === null) {
            error_log("Erreur de décodage JSON pour le fichier data.json");
            echo json_encode(["status" => "error", "message" => "Erreur de lecture des données existantes"]);
            exit;
        }

        /* $currentData['cargaisons'][] = $newCargaison; */
        array_unshift($currentData['cargaisons'], $newCargaison);
        ecrireJSON('data.json', $currentData);

        // Re-lire le fichier pour vérifierr
        $verifData = lireJSON('data.json');
        error_log("Données après écriture: " . print_r($verifData, true));

        echo json_encode(["status" => "success", "message" => "Cargaison ajoutée avec succès"]);
        exit;
    } 
    else if($data['action'] === 'ajoutProduit') {
        $idCargo = $data['numero'];
        
        $newProduct = $data['produit']; 

        $currentData = lireJSON('data.json');

        if ($currentData === null) {
            error_log("Erreur de décodage JSON pour le fichier data.json");
            echo json_encode(["status" => "error", "message" => "Erreur de lecture des données existantes"]);
            exit;
        }

        foreach ($currentData['cargaisons'] as &$cargaison) {
            if ($cargaison['numero'] === $idCargo) {
                $cargaison['produit'][] = $newProduct;
                break;
            }
        }

        ecrireJSON('data.json', $currentData);

        // Re-lire le fichier pour vérifier
        $verifData = lireJSON('data.json');
        error_log("Données après écriture: " . print_r($verifData, true));

        echo json_encode(["status" => "success", "message" => "Produit ajouté avec succès"]);
        exit;

    } elseif ($data['action'] === 'changerEtatCargo') {
        $idCargo = $data['idcargo'];
        $newState = $data['newState'];

        $currentData = lireJSON('data.json');
        if ($currentData === null) {
            error_log("Erreur de décodage JSON pour le fichier data.json");
            echo json_encode(["status" => "error", "message" => "Erreur de lecture des données existantes"]);
            exit;
        }

        foreach ($currentData['cargaisons'] as &$cargaison) {
            if ($cargaison['numero'] === $idCargo) {
                $cargaison['etatGlobal'] = $newState;
                break;
            }
        }

        ecrireJSON('data.json', $currentData);

        echo json_encode(["status" => "success", "message" => "État de la cargaison mis à jour avec succès"]);
        exit;
    }
     else if ($data['action'] === 'supprimer-produit') {
        $currentData = lireJSON('data.json');
        if ($currentData === null) {
            error_log("Erreur de décodage JSON pour le fichier data.json");
            echo json_encode(["status" => "error", "message" => "Erreur de lecture des données existantes"]);
            exit;
        }

        foreach ($currentData['cargaisons'] as &$cargaison) {
            if ($cargaison['numero'] === $data['idcargo'] && $cargaison['etatGlobal'] === 'ouvert' && $cargaison['etatAvancement'] === 'en attente') {
                foreach ($cargaison['produit'] as $key => $produit) {
                    if ($produit['numero'] === $data['codeProduit']) {
                        array_splice($cargaison['produit'], $key, 1);
                        break;
                    }
                }
                break;
            }
        }

        ecrireJSON('data.json', $currentData);

        echo json_encode(["status" => "success", "message" => "Produit retiré avec succès"]);
        exit;
    }


    else {
        echo json_encode(["status" => "error", "message" => "Action non reconnue"]);
        exit;
    }
}
 elseif ($_SERVER['REQUEST_METHOD'] === 'GET') {
    $data = lireJSON('data.json');
    if ($data === null) {
        echo json_encode(["status" => "error", "message" => "Erreur de lecture des données existantes"]);
    } else {
        echo json_encode($data);
    }
    exit;
}