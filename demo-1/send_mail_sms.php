<?php
/* use PHPMailer\PHPMailer\PHPMailer;
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
        $mail->setFrom('votre-email@example.com', 'Votre Nom');
        $mail->addAddress($destinataire);

        // Contenu
        $mail->isHTML(true);
        $mail->Subject = $sujet;
        $mail->Body    = $message;

        $mail->send();
        echo 'Message has been sent';
    } catch (Exception $e) {
        error_log("Message could not be sent. Mailer Error: {$mail->ErrorInfo}");
    }
} */

use TCPDF;

function generateReceipt($cargaison, $produit, $clientEmail) {
    $pdf = new TCPDF();

    // Set document information
    $pdf->SetCreator(PDF_CREATOR);
    $pdf->SetAuthor('Your Company Name');
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
    $html .= '<p>Nom: ' . $produit['nom'] . '</p>';
    $html .= '<p>Poids: ' . $produit['poids'] . ' kg</p>';
    $html .= '<p>Type: ' . $produit['typeProduit'] . '</p>';

    $pdf->writeHTML($html, true, false, true, false, '');

    // Save PDF to a file
    $filename = 'recu_' . $cargaison['numero'] . '_' . $produit['numero'] . '.pdf';
    $pdf->Output(_DIR_ . '/' . $filename, 'F');

    return $filename;
}


use PHPMailer\PHPMailer\PHPMailer;
use PHPMailer\PHPMailer\Exception;

require 'vendor/autoload.php';

function sendEmailWithReceipt($clientEmail, $pdfFilename) {
    $mail = new PHPMailer(true);

    try {
        // Paramètres du serveur
        $mail->isSMTP();
        $mail->Host       = 'smtp.example.com'; // Remplacez par le serveur SMTP de votre fournisseur
        $mail->SMTPAuth   = true;
        $mail->Username   = 'votre-email@example.com'; // Votre adresse email SMTP
        $mail->Password   = 'votre-mot-de-passe'; // Votre mot de passe SMTP
        $mail->SMTPSecure = PHPMailer::ENCRYPTION_STARTTLS;
        $mail->Port       = 587; // Port SMTP

        // Destinataires
        $mail->setFrom('votre-email@example.com', 'Votre Nom');
        $mail->addAddress($clientEmail);

        // Pièce jointe
        $mail->addAttachment(_DIR_ . '/' . $pdfFilename);

        // Contenu de l'email
        $mail->isHTML(true);
        $mail->Subject = 'Reçu de votre Cargaison';
        $mail->Body    = 'Veuillez trouver ci-joint le reçu de votre cargaison.';

        $mail->send();
        echo 'Le reçu a été envoyé avec succès';
    } catch (Exception $e) {
        echo "Le message n'a pas pu être envoyé. Erreur: {$mail->ErrorInfo}";
    }
}