<?php


    if ($_SERVER["REQUEST_METHOD"] == "POST") {
        // Récupérer les valeurs soumises
        $email = $_POST['email'] ?? '';
        $motdepasse = $_POST['motdepasse'] ?? '';

        //verifie si email ne correspond pas à un format valide
        if(!empty($email)){
        if(!filter_var($email, FILTER_VALIDATE_EMAIL)){
            $error_email = "le champ doit etre un e-mail !!!";
        }
         }

     
        if(empty($motdepasse)|| empty($email)){
            $error_message = "Adresse e-mail et mot de passe obligatoire.";
        }

        include '/var/www/html/projettailwinTs/demo-1/public/authentification.php';
        $data=readDataUser();  
    
       /*  var_dump($data);
        die(); */
        if(filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($motdepasse)){
            
            foreach($data as $value){
                if(($value['email']==$email) && ($value['password']==$motdepasse))
                {
                    $bool="true";
                    break;
                }
                else
                {
                    $bool="false";
                    $error_message = " email ou mot de passe  incorrect !!"; 
                } 
                
            } 
        
        }
       
        // Vérifier les informations d'identification
        if ($bool== "true") {
            // Rediriger vers la page d'accueil
            /* if($_SESSION['user']['statut']=='administrateur'){ */
            header("Location:http://www.sidy.diop.balde:8010/projettailwinTs/demo-1/public/index.php?page=cargaison");
            exit; // Arrêter l'exécution du script pour éviter toute sortie supplémentaire
          /*   } */
            /* else{
                header("location: ?page=connexion");
                exit;
            } */
        }
        
    }
?>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <title>Page de connexion</title>
</head>
<body class="bg-gray-100 flex items-center justify-center min-h-screen">
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-8">
        <form method="post" action="" class="space-y-6">
            <div class="flex justify-center">
                <img src="../public/logo.png" alt="SDB CARGO COMPANY" class="w-40 h-50">
            </div>
            <div class="space-y-4">
                <!-- email et password requierd -->
                <?php if(isset($error_message)) echo "<p class='text-red-500'>$error_message</p>"; ?>
            </div>
            <div>
                <label for="email" class="block text-gray-700">Email Address <span class="text-red-500">*</span></label>
                <input type="text" name="email" class="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter email address*">
                <?php if(isset($error_email)) echo "<p class='text-red-500'>$error_email</p>"; ?>
            </div>
            <div>
                <label for="motdepasse" class="block text-gray-700">Password <span class="text-red-500">*</span></label>
                <input type="password" name="motdepasse" class="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent" placeholder="Enter your password*">
                <?php if(isset($error_password)) echo "<span class='text-red-500'>$error_password</span>"; ?>
                <i class="fa fa-eye-slash text-gray-500 text-lg mt-2"></i>
            </div>
            <div class="flex items-center justify-between">
                <label class="inline-flex items-center">
                    <input type="checkbox" class="form-checkbox text-blue-600">
                    <span class="ml-2 text-gray-700">Remember me</span>
                </label>
                <a href="#" class="text-lightseagreen">Mot de passe Oublié?</a>
            </div>
            <div>
          
                <button type="submit" class="w-full bg-blue-600 text-white py-2 rounded-md text-xl hover:bg-blue-700">Log in</button>
                
            </div>
        </form>
    </div>
</body>
</html>