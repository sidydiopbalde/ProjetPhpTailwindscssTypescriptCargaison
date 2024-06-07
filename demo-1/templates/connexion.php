<?php
/* session_start(); */
error_reporting(E_ALL);
ini_set('display_errors', 1);

/* $searchMessage = ''; */

if ($_SERVER["REQUEST_METHOD"] == "POST") {
    if (isset($_POST['motdepasse'])) {
        // Récupérer les valeurs soumises pour la connexion admin
        $email = $_POST['email'] ?? '';
        $motdepasse = $_POST['motdepasse'] ?? '';

        // Vérifie si l'email ne correspond pas à un format valide
        if (!empty($email)) {
            if (!filter_var($email, FILTER_VALIDATE_EMAIL)) {
                $error_email = "Le champ doit être un e-mail valide !!!";
            }
        }

        if (empty($motdepasse) || empty($email)) {
            $error_message = "Adresse e-mail et mot de passe obligatoires.";
        }

        include '/var/www/html/projettailwinTs/demo-1/public/authentification.php';
        $data = readDataUser();

        if (filter_var($email, FILTER_VALIDATE_EMAIL) && !empty($motdepasse)) {
            foreach ($data as $value) {
                if (($value['email'] == $email) && ($value['password'] == $motdepasse)) {
                    $bool = "true";
                  /*   $_SESSION['user'] = $value; */
                    break;
                } else {
                    $bool = "false";
                    $error_message = "Email ou mot de passe incorrect !!";
                }
            }
        }

     
        if ($bool == "true") {
          
            header("Location: http://www.sidy.diop.balde:8010/projettailwinTs/demo-1/public/index.php?page=cargaison");
            exit; 
        }  
    } /* elseif (isset($_POST['search'])) {
        include '/var/www/html/projettailwinTs/demo-1/public/authentification.php';
     
        
        $search = $_POST['search'] ?? '';
    if(!empty($search)){
    $colis = searchColis($search);
   

    if ($colis[0]=== true) {
        $searchMessage = "Colis trouvé : " . json_encode($colis) ;
    } else {
        $searchMessage = "Colis non trouvé.";
    } 
}
} */
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
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-8" id="selectionSection">
        <button onclick="showAdminLogin()" class="w-full bg-blue-600 text-white py-2 rounded-md text-xl hover:bg-blue-700 mb-4">Admin Login</button>
        <button onclick="showClientSearch()" class="w-full bg-green-600 text-white py-2 rounded-md text-xl hover:bg-green-700">Client Search</button>
    </div>
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-8 hidden" id="adminLoginSection">
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
            <div>true
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
   <!--  <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-8 hidden" id="clientSearchSection">
        <form method="post" action="" class="space-y-6">
            <div class="flex justify-center">
                <img src="../public/logo.png" alt="SDB CARGO COMPANY" class="w-40 h-50">
            </div>
            <div>
                <label for="search" class="block text-gray-700">Search Colis <span class="text-red-500">*</span></label>
                <input type="text" name="search" class="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Enter colis number*">
            </div>
            <div>
                <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-md text-xl hover:bg-green-700">Search</button>
            </div>
        </form>
    </div> -->
    <div class="w-full max-w-md bg-white shadow-lg rounded-lg p-8 hidden" id="clientSearchSection">
        <form id="searchForm" method="post" action="javascript:void(0);" class="space-y-6">
            <div class="flex justify-center">
                <img src="../public/logo.png" alt="SDB CARGO COMPANY" class="w-40 h-50">
            </div>
            <div>
                <label for="search" class="block text-gray-700">Search Colis <span class="text-red-500">*</span></label>
                <input type="text" name="search" id="search" class="block w-full mt-1 px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-transparent" placeholder="Enter colis number*">
            </div>
            <div>
                <button type="submit" class="w-full bg-green-600 text-white py-2 rounded-md text-xl hover:bg-green-700">Search</button>
            </div>
            <p class="text-gray-700 mt-4" id="searchMessage"></p>
        </form>
    </div>
    <script>
        function showAdminLogin() {
            document.getElementById('selectionSection').classList.add('hidden');
            document.getElementById('adminLoginSection').classList.remove('hidden');
        }

        function showClientSearch() {
            document.getElementById('selectionSection').classList.add('hidden');
            document.getElementById('clientSearchSection').classList.remove('hidden');
        }

        document.getElementById('searchForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const searchValue = document.getElementById('search').value;
            const searchMessage = document.getElementById('searchMessage');

          fetch('../templates/search_colis.php', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded'
                },
                body: 'search=' + encodeURIComponent(searchValue)
            })
            .then(response => {
                console.log("Response status:", response.status); // Debug
                return response.json();
            })
            .then(data => {
                console.log("Response data:", data);
                if (data.success) {
                    searchMessage.innerHTML = data.message;
                    searchMessage.classList.remove('text-red-500');
                    searchMessage.classList.add('text-green-500');
                } else {
                    searchMessage.innerHTML = data.message;
                    searchMessage.classList.remove('text-green-500');
                    searchMessage.classList.add('text-red-500');
                }
            })
            .catch(error => {
                searchMessage.innerHTML = 'Erreur lors de la recherche.';
                searchMessage.classList.remove('text-green-500');
                searchMessage.classList.add('text-red-500');
            }); 
        });
        /* fetch('../data.json')
        .then(response => response.json())
        .then(data => {
        console.log(data);}) */
        </script>
</body>
</html>