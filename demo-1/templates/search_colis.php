<?php
/* include '../public/authentification.php'; */


function searchColis($codeColis){

    $chemin = '../data.json';
    $jsondata = file_get_contents($chemin);
    $data=json_decode($jsondata, true);
    $bool=false;

    foreach ($data['cargaisons'] as $cargo) {
        foreach($cargo['produit'] as $produit){
            if($produit['numero'] === $codeColis){

                $bool=true;
                $prod=$produit;
                break;
            }
            
        }
    }
    if (($bool)) {
      return [$bool,$prod];
        
    } else {
        return false;
       
    }
}

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    $search = $_POST['search'] ?? '';

     if (!empty($search)) {
        $colis = searchColis($search);
        if ($colis[0] === true) {
            echo json_encode(["success" => true, "message" => "Colis trouvé : " . json_encode($colis[1])]);
        } else {
            echo json_encode(["success" => false, "message" => "Colis non trouvé."]);
        }
    } else {
        echo json_encode(["success" => false, "message" => "Veuillez entrer un numéro de colis."]);
    }   
}
?>