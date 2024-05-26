<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <!-- <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet"> -->
  <link rel="stylesheet" href="ltailwind.css">
  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.11.1/dist/full.min.css" rel="stylesheet" type="text/css" />
  <script src="https://kit.fontawesome.com/a076d05399.js" crossorigin="anonymous"></script>
  <style>
    .hover-scale:hover {
      transform: scale(1.05);
    }
  </style>
</head>

<body class="bg-gray-100">
  <div class="flex">
    <!-- Sidebar -->
    <div id="sidebar" class="w-1/5 bg-blue-500 text-white min-h-screen p-4 transition-transform transform duration-300 -translate-x-full lg:translate-x-0 lg:relative fixed">
      <h1 class="text-2xl font-bold mb-8">e-Cargaison</h1>
      <ul>
        <li class="mb-4">
          <a href="#" class="flex items-center py-2 px-4 hover:bg-white hover:text-blue-500 rounded">
            <span class="material-icons mr-2">dashboard</span>
            Dashboard
          </a>
        </li>
        <li class="mb-4">
          <a href="?page=navbar" class="flex items-center py-2 px-4 bg-blue-600 hover:bg-white hover:text-blue-500 rounded">
            CARGAISONS
          </a>
        </li>
        <li class="mb-4">
          <a href="#" class="flex items-center py-2 px-4 hover:bg-white hover:text-blue-500 rounded">
            PRODUITS/COLIS
          </a>
        </li>
        <li class="mb-4">
          <a href="#" class="flex items-center py-2 px-4 hover:bg-white hover:text-blue-500 rounded">
            <img src="ghd" alt="">
          </a>
        </li>
      </ul>
    </div>
    <!-- Main Content -->
    <div class="flex-1 p-8 lg:ml-1/5 transition-all duration-300">
      <div class="flex justify-between items-center mb-4">
        <button id="toggleSidebar" class="lg:hidden bg-blue-500 text-blue-500 p-2 rounded">
          ☰ 
        </button>
        <h1 class="text-2xl font-bold text-blue-500">SIDY</h1>
        <div class="flex items-center space-x-4">
          <input type="date" class="p-2 border rounded">
          <input type="date" class="p-2 border rounded">
          <div class="relative">
            <span class="material-icons absolute top-2 left-2 text-gray-400">notifications</span>
            <input type="text" class="p-2 pl-8 border rounded" placeholder="">
          </div>
          <img src="https://via.placeholder.com/40" alt="User Avatar" class="rounded-full">
        </div>
      </div>

      <div class="mb-4">
        <ul class="flex space-x-4">
          <li><a href="#" class="font-bold text-blue-500">All Cargaisons</a></li>
          <li><a href="#" class="text-blue-500">EN Attente</a></li>
          <li><a href="#" class="text-blue-500"></a></li>
          <li><a href="#" class="text-blue-500">Arrivée</a></li>
          <li><button class="bg-blue-500 text-white rounded-full p-1" onclick="my_modal_5.showModal()">ADD CARGO</button></li>
        </ul>
      </div>
      <!-- Modal -->
      <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
        <div class="bg-white p-6 rounded-lg shadow-lg border h-[700px]" style="width: 25%;">
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
            <div class="mb-4">
              <label for="statut" class="block text-gray-700">Staut</label>
              <input type="text" id="statut" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div>
            <button type="button" id="valider" class="w-full bg-blue-600">Valider</button>
          </form>
        </div>
      </dialog>
      <table class="w-full bg-white shadow rounded-lg overflow-hidden">
        <thead class="bg-gray-200">
          <tr>
            <th class="py-2 px-4">Id</th>
            <th class="py-2 px-4">Type</th>
            <th class="py-2 px-4">Date départ</th>
            <th class="py-2 px-4">Date d'arrivée</th>
            <th class="py-2 px-4">Poids Totale</th>
            <th class="py-2 px-4">Distance</th>
            <th class="py-2 px-4">Action</th>
            <th class="py-2 px-4">Détails</th>
          </tr>
        </thead>
        <tbody id="bodyCargaison">
          <!-- Example row -->
          <tr class="hover-scale transition transform duration-300 bg-blue-100 hover:bg-blue-200 cursor-pointer">
            <td class="py-2 px-4">#2633</td>
            <td class="py-2 px-4 flex items-center">
              <img src="https://via.placeholder.com/30" alt="Avatar" class="rounded-full mr-2">
              Sangomare
            </td>
            <td class="py-2 px-4">01/05/2024</td>
            <td class="py-2 px-4">01 Aug 2020</td>
            <td class="py-2 px-4">1000kg</td>
            <td class="py-2 px-4 text-green-500">EN Attente</td>
            <td class="py-2 px-4">
              <i class="fas fa-plus"  style="font-size:48px;color:blue;">+</i>
            </td>
            <td class="py-2 px-4">
              <button class="">Details</button>
            </td>
          </tr>
          <!-- Other rows -->
          <tr class="hover-scale transition transform duration-300">
            <td class="py-2 px-4">#2634</td>
            <td class="py-2 px-4 flex items-center">
              <img src="https://via.placeholder.com/30" alt="Avatar" class="rounded-full mr-2">
              LE Diola
            </td>
            <td class="py-2 px-4">01/05/2024</td>
            <td class="py-2 px-4">02 Aug 2020</td>
            <td class="py-2 px-4">$74.00</td>
            <td class="py-2 px-4  text-red-600">Completed</td>
            <td class="py-2 px-4">
            <i class="fas fa-plus"  style="font-size:48px;color:blue;">+</i>
            </td>
            <td class="py-2 px-4">
              <button class="material-icons">Details</button>
            </td>
          </tr>
          <!-- Repeat rows as needed -->
        </tbody>
      </table>
      <div class="flex justify-between mt-4">
        <div>Showing 06-12 of 28</div>
        <div>
          <button class="py-1 px-3 bg-gray-300 rounded">1</button>
          <button class="py-1 px-3 bg-blue-500 text-white rounded">2</button>
          <button class="py-1 px-3 bg-blue-300 rounded">3</button>
          <button class="py-1 px-3 bg-gray-300 rounded">4</button>
          <button class="py-1 px-3 bg-gray-300 rounded">5</button>
        </div>
      </div>
    </div>
  </div>
  <script>
    document.getElementById('toggleSidebar').addEventListener('click', function () {
      const sidebar = document.getElementById('sidebar');
      sidebar.classList.toggle('-translate-x-full');
    });
  </script>
 <!--  <script type="module" src="./dist/test.js" defer></script> -->
</body>

</html>
