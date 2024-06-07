<?php
// api.php

use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;
use Twilio\Rest\Client;
use TCPDF;
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
/* function envoyerSMS($numero, $message) {
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
} */

function generateReceipt($cargaison, $produit) {
    $pdf = new TCPDF();

    // Set document information
    $pdf->SetCreator(PDF_CREATOR);
    $pdf->SetAuthor('SDB CARGO COMPANY');
    $pdf->SetTitle('Reçu de Cargaison');
    $pdf->SetSubject('Reçu de Cargaison');
    $pdf->SetKeywords('TCPDF, PDF, example, test, guide');

    // Add a page
    $pdf->AddPage();

    // Title
    $pdf->SetFont('helvetica', 'B', 20);
    $pdf->Cell(0, 15, 'Reçu de Cargaison', 0, 1, 'C');

    // Cargaison Info
    $pdf->SetFont('helvetica', '', 12);
    $html = '<h3>Informations de la Cargaison</h3>';
    $html .= '<p>Numéro: ' . $cargaison['numero'] . '</p>';
    $html .= '<p>Poids Max: ' . $cargaison['poidsMax'] . ' kg</p>';
    $html .= '<p>Point de Départ: ' . $cargaison['pointDepart'] . '</p>';
    $html .= '<p>Point d\'Arrivée: ' . $cargaison['pointArrive'] . '</p>';
    $html .= '<p>Date de Départ: ' . $cargaison['dateDepart'] . '</p>';
    $html .= '<p>Date d\'Arrivée: ' . $cargaison['dateArrive'] . '</p>';
    $html .= '<p>Distance: ' . $cargaison['distance'] . ' km</p>';
    $html .= '<p>Type: ' . $cargaison['type'] . '</p>';

    // Produit Info
    $html .= '<h3>Informations du Produit</h3>';
    $html .= '<p>Numéro: ' . $produit['numero'] . '</p>';
    $html .= '<p>Nom: ' . $produit['nomProduit'] . '</p>';
    $html .= '<p>Poids: ' . $produit['poids'] . ' kg</p>';
    $html .= '<p>Type: ' . $produit['typeProduit'] . '</p>';

    $pdf->writeHTML($html, true, false, true, false, '');

    // Save PDF to a file
    $filename = __DIR__ . '/pdf/recu_' . $cargaison['numero'] . '_' . $produit['numero'] . '.pdf';
    $pdf->Output($filename, 'F');

    return $filename;
}

function sendEmailWithReceipt($clientEmail, $pdfFilename) {
    $mail = new PHPMailer(true);

    try {
        // Paramètres du serveur
        $mail->isSMTP();
        $mail->Host       = 'smtp.gmail.com'; // Remplacez par le serveur SMTP de votre fournisseur
        $mail->SMTPAuth   = true;
        $mail->Username   = 'sididiop53@gmail.com'; // Votre adresse email SMTP
        $mail->Password   = 'mzfi infx ftba afki'; // Votre mot de passe SMTP
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587; // Port SMTP

        // Destinataires
        $mail->setFrom('sididiop53@gmail.com', 'Sidy Diop Balde');
        $mail->addAddress($clientEmail);

        // Pièce jointe
        $mail->addAttachment($pdfFilename);

        // Contenu de l'email
        $mail->isHTML(true);
        $mail->Subject = 'Reçu de votre Cargaison';
        $mail->Body    = 'Veuillez trouver ci-joint le reçu de votre cargaison.';

        $mail->send();
        echo 'Le reçu a été envoyé avec succès';
        return true;
    } catch (Exception $e) {
        echo "Le message n'a pas pu être envoyé. Erreur: {$mail->ErrorInfo}";
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

        // /* if ($currentData === null) {
        //     error_log("Erreur de décodage JSON pour le fichier data.json");
        //     echo json_encode(["status" => "error", "message" => "Erreur de lecture des données existantes"]);
        //     exit;
        // }
       
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
                if($cargaison['etatAvancement'] === 'archivé' ){
                  
                    echo json_encode(["status" => "error", "message" => "impossible!!! cargaison archivée!"]);
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
                /* foreach($cargaison['produit'] as $produit){
                    $poids += $produit['poids'];
                  } 
                  if($cargaison['poidsMax'] <= $poids){
                    echo json_decode(["status" => "error", "message" => "La cargaison est pleine"]);
                    exit;
                }  */
                 $cargaison['produit'][] = $newProduct;
                
                $clientemail= $newProduct['clientMail'];
                
               $pdfFilename = generateReceipt($cargaison, $newProduct);
               ecrireJSON('data.json', $currentData);
        //         // Envoyer le reçu par email
              $result= sendEmailWithReceipt($clientemail, $pdfFilename);
             
              //  echo json_encode($newProduct['clientMail']);
        //         // if(!$result){
        //         //     echo json_decode(["status" => "error", "message" => "erreur lors de l'envoie"]);
        //         //     exit;
        //         // }
        //         //envoie de mail
                 $message = " Bonjour! M/Mme {$newProduct['clientFirstName']} {$newProduct['clientLastName']} Votre produit a été ajouté avec succés dans la cargaison numéro {$cargaison['numero']}.
                 Voici le code de votre produit {$newProduct['numero']} .Cordialement SDB CArgo Company ";

                $result= envoyerEmail($clientemail,'Evolution de la cargaison',$message); 
          if($result ===true){
                 echo json_decode(["status" => "success", "message" => "Produit ajouté!! et le mail est bien envoyé"]);
                 exit;
             }else{
                   echo json_decode(["status" => "error", "message" => "erreur d'envoie mail"]);
                    
        //         } */
        //         break;
            }
        }
    }

        // // Re-lire le fichier pour vérifier
        // $verifData = lireJSON('data.json');
         error_log("Données après écriture: " . print_r($verifData, true));

         echo json_encode(["status" => "success", "message" => "Produit ajouté avec succès"]);
        // exit;

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
                  
                    echo json_encode(["status" => "error", "message" => "la cargaison est perdue"]);
                    exit;
                }

                
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
                if($cargaison['etatGlobal'] === 'ouvert' && $newState === 'en cours' ){
                    echo json_encode(["status" => "error", "message" => "ferme d'abord la cargaison"]);
                    exit;
                    }
                  
                if($newState === 'perdue'){
                    foreach ($cargaison['produit'] as &$produit) {
                        $produit['etat']= $newState;
                    }
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
        /* echo json_encode($data); */

        $currentData = lireJSON('data.json');
        if ($currentData === null) {
            error_log("Erreur de décodage JSON pour le fichier data.json");
            echo json_encode(["status" => "error", "message" => "Erreur de lecture des données existantes"]);
            exit;
        } 

        foreach ($currentData['cargaisons'] as &$cargaison) {
            if ($cargaison['numero'] === $idCargo) {
                foreach ($cargaison['produit'] as &$produit) {
                    if ($produit['numero'] === $codeProduit) {


                        if($cargaison['etatGlobal'] === 'fermé' || $cargaison['etatAvancement']=== 'en attente'){

                            echo json_encode(["status" => "error", "message" => "Erreur de lecture des données existantes"]);
                            exit;
                        }



                        $produit['etat'] = $newState;
                        break; // Sortir de la boucle une fois le produit trouvé et mis à jour
                    }
                }
                break; // Sortir de la boucle une fois la cargaison trouvée et mise à jour
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