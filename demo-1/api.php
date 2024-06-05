<?php
// api.php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Twilio\Rest\Client;
require '/var/www/html/projettailwinTs/demo-1/vendor/autoload.php';

function envoyerEmail($destinataire, $sujet, $message) {
    $mail = new PHPMailer(true);
    try {
        // Configurer le serveur SMTP
        $mail->isSMTP();
        $mail->Host = 'smtp.gmail.com'; // Remplacez par votre serveur SMTP
        $mail->SMTPAuth = true;
        $mail->Username = 'sididiop53@gmail.com'; // Remplacez par votre email
        $mail->Password = 'mzfi infx ftba afki'; // Remplacez par votre mot de passe
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port = 587;

        // Destinataires
        $mail->setFrom('sididiop53@gmail.com', 'Cargo');
        $mail->addAddress($destinataire);

        // Contenu
        $mail->isHTML(true);
        $mail->Subject = $sujet;
        $mail->Body    = $message;

        $mail->send();
        echo 'Message has been sent';
        return true;
    } catch (Exception $e) {
        error_log("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
    }
}
function envoyerSMS($numero, $message) {
    $sid = 'votre-account-sid'; // Remplacez par votre SID Twilio
    $token = 'votre-auth-token'; // Remplacez par votre token d'authentification Twilio
    $twilioNumber = '784316538'; // Remplacez par votre numéro Twilio

    $client = new Client($sid, $token);

    try {
        $client->messages->create(
            $numero,
            [
                'from' => $twilioNumber,
                'body' => $message
            ]
        );
    } catch (Exception $e) {
        error_log("SMS could not be sent. Error: {$e->getMessage()}");
    }
}

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
            "produit"=>$data['produit'],
            "limit" => $data['limite'],
            "value" => $data['value']
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
       
        $poids=0;
        foreach($cargaison['produit'] as $produit){
            $poids += $produit['poids'];
        }
        
        foreach ($currentData['cargaisons'] as &$cargaison) {
            if ($cargaison['numero'] === $idCargo) {
                
                if($cargaison['etatGlobal'] === 'fermé' ){
                  
                    echo json_encode(["status" => "error", "message" => " cargaison 🔐"]);
                    exit;
                }
                if($cargaison['etatAvancement'] === 'en cours' ){
                  
                    echo json_encode(["status" => "error", "message" => "la cargaison est en cours!!!!!"]);
                    exit;
                }
                if($cargaison['etatAvancement'] === 'perdue' ){
                  
                    echo json_encode(["status" => "error", "message" => "impossible!!! cargaison perdue"]);
                    exit;
                }
                
                if($cargaison['poidsMax'] <= $poids){
                    echo json_encode(["status" => "error", "message" => "la cargaison est en pleine"]);
                    exit;
                }
                if($newProduct['typeProduit'] === 'maritime' && $cargaison['type'] === 'fragile'){
                    echo json_decode(["status" => "error", "message" => "Ce produit ne peut etre transporté par cette cargaison"]);
                    exit;
                }


                $cargaison['produit'][] = $newProduct;
                
                ecrireJSON('data.json', $currentData);
                $clientemail= $newProduct['clientMail'];
                //envoie de mail
            /*     $message = "Votre cargaison avec le numéro{$cargaison['numero']} est maintenant arrivé.";

                $result= envoyerEmail($clientemail,'Evolution de la cargaison',$message); */
               /*  if($result ===true){
                    echo json_decode(["status" => "success", "message" => "le mail est bien envoyé"]);
                }else{
                    echo json_decode(["status" => "error", "message" => "erreur d'envoie mail"]);
                    
                } */
                break;
            }
        }


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

                if($cargaison['etatAvancement'] === 'en cours' ){
                  
                    echo json_encode(["status" => "error", "message" => "la cargaison est en cours"]);
                    exit;
                }
                if($cargaison['etatAvancement'] === 'perdue' ){
                  
                    echo json_encode(["status" => "error", "message" => "cargaison perdue"]);
                    exit;
                }

                if($cargaison['etatAvancement']=== 'perdue')
                $cargaison['etatGlobal'] = $newState;
                break;
            }
        }

        ecrireJSON('data.json', $currentData);
        echo json_encode(["status" => "success", "message" => "État de la cargaison mis à jour avec succès"]);
        exit;
    }else if($data['action'] === 'changer_etat_avancement') {
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

                if($newState === 'en attente' && $cargaison['etatAvancement'] === 'en cours'){
                echo json_encode(["status" => "error", "message" => "la cargaison est en  route"]);
                exit;
                }

                $cargaison['etatAvancement'] = $newState;
               
                break;
            }
        }

    
        ecrireJSON('data.json', $currentData);

        echo json_encode(["status" => "success", "message" => "cargaison mis en etat ".$newState]);
        exit;
    }else if ($data['action'] === 'supprimer-produit') {

        $currentData = lireJSON('data.json');
        if ($currentData === null) {
            error_log("Erreur de décodage JSON pour le fichier data.json");
            echo json_encode(["status" => "error", "message" => "Erreur de lecture des données existantes"]);
            exit;
        }

        foreach ($currentData['cargaisons'] as &$cargaison) {
            if($cargaison['etatAvancement'] === 'en cours' || $cargaison['etatGlobal'] === 'fermé'){
                echo json_encode(["status" => "error", "message" => "impossible! cargaison hors d'etat de retrait"]);
                 exit;
            }

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

        echo json_encode(["status" => "success", "message" => "Produit 🚮 avec succès"]);
        exit;
    }else if ($data['action'] === 'changerEtatProduit') {

        $idCargo = $data['id'];
        $newState = $data['newetatProd'];
        $codeProduit=$data['codePro'];

        $currentData = lireJSON('data.json');
        if ($currentData === null) {
            error_log("Erreur de décodage JSON pour le fichier data.json");
            echo json_encode(["status" => "error", "message" => "Erreur de lecture des données existantes"]);
            exit;
        }

        foreach ($currentData['cargaisons'] as &$cargaison) {
           
            if ($cargaison['numero'] === $idCargo) {

              foreach($_cargaison['produit'] as $produit){
                if($produit['numero'] === $codeProduit){
                    $produit['etat'] = $newState;
                    break;
                }
              }    
               
            }
        }
    
        ecrireJSON('data.json', $currentData);

        echo json_encode(["status" => "success", "message" => "produit mis en etat ".$newState]);
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