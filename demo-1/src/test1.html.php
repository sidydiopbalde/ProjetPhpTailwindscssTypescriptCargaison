<!DOCTYPE html>
<html lang="fr">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Tableau de Bord</title>
  <link rel="stylesheet" href="tailwind.css">
  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.11.1/dist/full.min.css" rel="stylesheet" type="text/css" />
  
</head>

<body class="bg-gray-100">
  <!-- Navbar -->
  <header class="bg-blue-500 text-white p-4 rounded-md">
    <h1 class="text-2xl font-bold text-center">Gestion des Cargaisons GP WORLD</h1>
  </header>

  <div class="flex min-h-screen">
    <!-- Sidebar -->
    <aside class="w-1/5 bg-white p-4 shadow-2xl">
      <div class="flex items-center mb-8">
        <img src="public/images.1jpeg" alt="Logo" class="h-52">
      </div>
      <nav>
        <ul>
          <li class="mb-4">
            <a href="#" class="block py-2 px-4 bg-blue-600 text-white rounded">Dashboard</a>
          </li>
          <li class="mb-4">
            <a href="#" class="block py-2 px-4 bg-blue-500 text-white rounded">Cargaison</a>
          </li>
          <li>
            <a href="#" class="block py-2 px-4 bg-blue-400 text-white rounded">Produits / Colis</a>
          </li>
        </ul>
      </nav>
    </aside>

    <!-- Main Content -->
    <main class="w-4/5 p-8">
      <!-- Header -->
      <div class="flex justify-between items-center mb-8">
        <h1 class="text-2xl font-bold text-blue-500">BREUKH CARGAISON</h1>
        <div class="flex items-center space-x-4">
          <button class="bg-blue-500 text-white rounded-full p-3" onclick="my_modal_5.showModal()">ADD CARGO</button>
          <button class="p-2 bg-blue-500 text-black rounded-full">
            <input type="date" id="dateInput" class="bg-blue-500 border-none text-white" >
          </button>
        </div>
      </div>

      <!-- Modal -->
      <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
        <div class="bg-white p-6 rounded-lg shadow-lg border h-[600px]" style="width: 25%;">
          <div class="modal-action">
            <form method="dialog">
              <button class="btn">Close</button>
            </form>
          </div>
          <h2 class="text-lg font-semibold text-blue-500 mb-4 text-center">Ajouter Cargaison</h2>
          <form id="addCargoForm" method="" action="">
            <div class="mb-4">
              <label for="libelleCargaison" class="block text-gray-700">Libelléss</label>
              <input type="text" id="libelleCargaison" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="mb-4">
              <label for="type" class="block text-gray-700">Type de cargaison</label>
              <select id="type" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Sélectionner</option>
                <option value="aerien">Aérien</option>
                <option value="maritime">Maritime</option>
                <option value="terrestre">Terrestre</option>
              </select>
            </div>
            <div class="mb-4">
              <label for="poidsCargaison" class="block text-gray-700">Poids total</label>
              <input type="text" id="poidsCargaison" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="mb-4">
              <label for="dateDepart" class="block text-gray-700">Date de départ</label>
              <input type="date" id="dateDepart" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <div class="mb-4">
              <label for="dateArrive" class="block text-gray-700">Date d'arrivée</label>
              <input type="date" id="dateArrive" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <button type="button" id="valider" class="w-full bg-blue-600">Valider</button>
          </form>
        </div>
      </dialog>

      <!-- Table and Forms Section -->
      <div id="deux-forms" class="flex justify-between w-full relative">
        <!-- Product Form -->
        <div id="contentformProduct" class="mb-4 w-1/2 h-full hidden absolute left-[50%] transition-all duration-[2s] ease-out" style="width: 40%;">
          <form id="addProductForm" class="bg-white p-4 shadow rounded">
            <span id="fermerProduct" class="font-bold text-2xl cursor-pointer">&times;</span>
            <div class="mb-4">
              <label for="productType" class="block text-gray-700">Type de Produit</label>
              <select id="productType" class="mt-1 block w-full p-3 border rounded-lg border-sky-500">
                <option value="alimentaire">Alimentaire</option>
                <option value="chimique">Chimique</option>
                <option value="fragile">Fragile</option>
                <option value="incassable">Incassable</option>
              </select>
            </div>
            <div class="mb-4">
              <label for="libelle" class="block text-gray-700">Libellé</label>
              <input type="text" id="libelle" class="mt-1 block w-full p-3 border rounded-lg border-sky-500" placeholder="Entrer le libelle du produit">
            </div>
            <div class="mb-4">
              <label for="poids" class="block text-gray-700">Poids</label>
              <input type="text" id="poids" class="mt-1 block w-full p-3 border rounded-lg border-sky-500" placeholder="Entrer le poids">
            </div>
            <div id="toxicityField" class="mb-4 hidden">
              <label for="toxicite" class="block text-gray-700">Toxicité</label>
              <input type="number" id="toxicite" class="mt-1 block w-full p-3 border rounded-lg border-sky-500">
            </div>
            <button type="submit" id="ajouter" class="bg-blue-500 text-white py-2 px-4 rounded">Ajouter Produit</button>
          </form>
        </div>

        <!-- Cargo Table -->
        <div id="tableauCargaison" class="w-1/2" style="width: 70%;">
          <table class="w-full border border-collapse border-solid border-blue-500">
            <thead class="border-2 border-blue-800 bg-blue-500 h-11 rounded-full">
              <tr class="text-white border border-collapse border-solid border-blue-500 rounded-full">
                <th>Nom de la CARGAISON</th>
                <th>Type</th>
                <th>Départ</th>
                <th>Arrivée</th>
                <th>Distance(km)</th>
                <th>Actions</th>
                <th>Détails</th>
              </tr>
            </thead>
            <tbody id="bodyCargaison" class="border border-collapse border-solid border-blue-500">
         <!--      <tr class="p-4">
                <td class="border-2 border-blue-800">China</td>
                <td  class="border-2 border-blue-800" >Maritime</td>
                <td  class="border-2 border-blue-800" >10/05/2024</td>
                  <td class="border-2 border-blue-800" >10/05/2024</td>
                <td class="border-2 border-blue-800" >1000</td>
                <td class="border-2 border-blue-800 bg-blue-200 rounded-full text-center w-[7.5rem]" >Ajouter Produit</td>
                <td class="border-2 border-blue-800 bg-green-400">Details</td>
              </tr>
              <tr>
                <td class="border-2 border-blue-800" >China</td>
                <td class="border-2 border-blue-800">Maritime</td>
                <td  class="border-2 border-blue-800" >10/05/2024</td>
                  <td  class="border-2 border-blue-800" >10/05/2024</td>
                <td class="border-2 border-blue-800" >3500</td>
                <td class="border-2 border-blue-800">Add Product</td>
                <td class="border-2 border-blue-800 bg-green-400">Details</td>
              </tr>
              <tr>
                <td class="border-2 border-blue-800" >China</td>
                <td class="border-2 border-blue-800">Maritime</td>
                <td  class="border-2 border-blue-800" >10/05/2024</td>
                  <td  class="border-2 border-blue-800" >10/05/2024</td>
                <td class="border-2 border-blue-800">1000</td>
                <td class="border-2 border-blue-800">Add Product</td>
                <td class="border-2 border-blue-800">Details</td>
              </tr>
              <tr>
                <td class="border-2 border-blue-800" >China</td>
                <td class="border-2 border-blue-800">Maritime</td>
                <td  class="border-2 border-blue-800" >10/05/2024</td>
                  <td  class="border-2 border-blue-800" >10/05/2024</td>
                <td class="border-2 border-blue-800">1000</td>
                <td class="border-2 border-blue-800">Add Product</td>
                <td class="border-2 border-blue-800">Details</td>
              </tr>
              <tr>
                <td class="border-2 border-blue-800" >China</td>
                <td class="border-2 border-blue-800">Maritime</td>
                <td  class="border-2 border-blue-800" >10/05/2024</td>
                  <td  class="border-2 border-blue-800" >10/05/2024</td>
                <td class="border-2 border-blue-800">1000</td>
                <td class="border-2 border-blue-800">Add Product</td>
                <td class="border-2 border-blue-800">Details</td>
              </tr> -->
            </tbody>
          </table>
        </div>
      </div>
    </main>
  </div>

  <!-- Footer -->
  <footer class="bg-blue-800 text-white p-4 text-center">
    &copy; 2024 GP WORLD. Tous droits réservés.
  </footer>
  <script type="module" src="./dist/test.js" defer></script>
</body>

</html>
