<?php
use Vonage\Client\Credentials\Basic;
use Vonage\Client;
use Vonage\SMS\Message\SMS;
require '/var/www/html/projettailwinTs/demo-1/vendor/autoload.php';
$basic  = new \Vonage\Client\Credentials\Basic("1b8466a1", "znHkZvMpAo4uxMUC");
$client = new \Vonage\Client($basic);

function sendSMS($to, $message, $from = 'SDB_CARGO_COMPANY') {
    $key = '1b8466a1';
    $secret = 'znHkZvMpAo4uxMUC';

    try {
        $basic = new Basic($key, $secret);
        $client = new Client($basic);

        $response = $client->sms()->send(
            new SMS($to, $from, $message)
        );

        $message = $response->current();

        if ($message->getStatus() == 0) {
            error_log("SMS sent successfully to $to");
            return "The message was sent successfully\n";
        } else {
            error_log("Failed to send SMS to $to with status: " . $message->getStatus());
            return "The message failed with status: " . $message->getStatus() . "\n";
        }
    } catch (Exception $e) {
        error_log("Error sending SMS: " . $e->getMessage());
        return "An error occurred: " . $e->getMessage() . "\n";
    }
}

// Test de la fonction
/* $to = '+221784316538';
$message = 'Votre colis a été enregistré avec succès';
echo sendSMS($to, $message);  */