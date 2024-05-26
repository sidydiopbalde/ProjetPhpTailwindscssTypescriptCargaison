<!DOCTYPE html>
<html lang="fr">

<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Gestion des Cargaisons</title>
    <link href="https://cdn.jsdelivr.net/npm/tailwindcss@2.2.19/dist/tailwind.min.css" rel="stylesheet">
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.0.0-beta3/css/all.min.css">
    <!-- <link rel="stylesheet" href=".dist/style.css"> -->
    <style>
        .sidebar {
            width: 16rem;
            transition: width 0.3s;
        }

        .sidebar {
            width: 16rem;
            transition: width 0.3s;
        }

        .sidebar.reduced {
            width: 4rem;
        }

        .sidebar ul {
            transition: opacity 0.3s;
            overflow: hidden;
        }

        .sidebar.reduced ul {
            opacity: 0;
        }

        .sidebar ul li {
            display: flex;
            align-items: center;
        }

        .sidebar ul li i {
            width: 2rem;
            text-align: center;
        }

        .sidebar ul li span {
            transition: opacity 0.3s;
        }

        .sidebar.reduced ul li span {
            opacity: 0;
            visibility: hidden;
        }

        .main-content {
            transition: margin-left 0.3s;
        }

        .main-content.shifted {
            margin-left: 16rem;
        }

        .main-content.reduced {
            margin-left: 4rem;
        }

        .submenu {
            display: none;
            margin-left: 2rem;
        }

        .submenu li {
            display: flex;
            align-items: center;
        }

        .submenu li i {
            width: 1rem;
            text-align: center;
        }

        /* Style pour les sous-menus */
        .sub-menu {
            display: none;
            list-style-type: none;
            padding: 0;
        }

        /* Style pour afficher les sous-menus lorsque l'élément parent est ouvert */
        .open {
            display: block !important;
        }

        /* Style pour la flèche */
        /* .arrow {
    margin-left: 5px;
}

.rotate {
    transform: rotate(180deg);
} */

        /* Style pour les sous-menus */
        .sub-menu {
            display: none;
            list-style-type: none;
            padding: 0;
            position: absolute;
        }

        .dropdown-bottom {
            bottom: 530px;
            left: 110px;
        }
    </style>
</head>

<body class="bg-gray-100">
    <header id="nav" class="bg-white text-white p-4 flex justify-between items-center shadow-lg">
        <button id="btn-toggle-sidebar" class="text-black text-2xl">☰</button>
        <h1 class="text-2xl font-bold">Gestion des Cargaisons</h1>
        <input type="text" placeholder="Rechercher..." class="p-2 rounded">
    </header>

    <div class="flex ">


        <aside id="sidebar" class="sidebar bg-black text-white hidden lg:block h-screen">
            <div class="p-4">
                <img src="/img/logo.jpeg" alt="Logo" class="mb-4 h-10 w-10 mr-2">
                <h2 class="text-xl font-bold mb-4 text-yellow-200">GP-monde</h2>
                <nav>
                    <ul>
                        <li class="mb-2 flex items-center btn-add">
                            <i class="fas fa-tachometer-alt w-6"></i>
                            <a href="#" class="block p-2 ml-2">
                                <button id="btn-add" class=" text-white">Ajouter </button>
                            </a>
                        </li>

                        <li class="mb-2 flex items-center btn-add">
                            <i class="fas fa-tachometer-alt w-6"></i>
                            <a href="#" class="block p-2 ml-2">
                                <button id="btn-list" class=" text-white">Liste Cargaisons </button>
                            </a>
                        </li>
                        <li class="mb-2 flex items-center">
                            <i class="fas fa-ship w-6"></i>
                            <a href="#" class="block p-2 ml-2" id="toggle-cargaisons">Gestion Cargaisons <span
                                    class="arrow">&#9660;</span></a>
                            <ul class="ml-8 sub-menu dropdown-bottom" id="cargaisons-menu">
                                <li><a href="#">
                                        <button id="btn-filter-maritime" class="mt-5">
                                            Filtre-maritime</a></li>
                                </button>
                                <li><a href="#">
                                        <button id="btn-filter-aerienne">
                                            Filtre-aériénne
                                        </button></a></li>
                                <li><a href="#">
                                    <button id="btn-filter-routiere">
                                        Filtre-routiére</button></a></li>
                            </ul>
                        </li>
                        <li class="mb-2 flex items-center">
                            <i class="fas fa-box-open w-6"></i>
                            <a href="#" class="block p-2 ml-2">Produits</a>
                        </li>
                        <li class="mb-2 flex items-center">
                            <i class="fas fa-cogs w-6"></i>
                            <a href="#" class="block p-2 ml-2">Paramètres</a>
                        </li>
                    </ul>
                </nav>
            </div>
        </aside>




        <main id="main-content" class="main-content flex-grow  p-8 shifted">
            <div class="container mx-auto">
                <h1 class="text-2xl font-bold mb-4">Gestion des Cargaisons</h1>

                <div id="output" class="bg-white p-4 rounded shadow">
                    <table class="min-w-full divide-y divide-gray-200 table">
                        <thead class="bg-gray-100">
                            <tr>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Numero</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Poids (kg)</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Prix-total</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Depart</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Arrivee</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Distance</th>
                                <th scope="col"
                                    class="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                                    Action</th>
                            </tr>
                        </thead>
                        <tbody id="cargaison-list" class="bg-white divide-y divide-gray-200">
                            <!-- Liste des cargaison -->
                            
                        </tbody>
                    </table>
                </div>
            </div>
        </main>
    </div>

    <!-- Modal Cargaison -->
    <div id="modal" class="fixed inset-0 bg-gray-600 bg-opacity-50 flex items-center justify-center hidden">
        <div class="bg-white p-8 rounded-lg shadow-lg ">
            <h2 class="text-xl font-bold mb-4">Ajouter une cargaison</h2>
            <form id="form-add-cargaison">
                <input type="hidden" class="form-control" id="produit-id">
                <div class="mb-4">
                    <label for="type-cargaison" class="block text-sm font-medium text-gray-700">Type de
                        cargaison</label>
                    <select id="type-cargaison" class="mt-1 block w-full p-2 border border-gray-300 rounded">
                        <option value="CargaisonMaritime">Maritime</option>
                        <option value="CargaisonAérienne">Aérienne</option>
                        <option value="CargaisonRoutière">Routière</option>
                    </select>
                </div>
                <div class="mb-4">
                    <label for="numero-cargaison" class="block text-sm font-medium text-gray-700 px-80">Numero
                        </label>
                    <input type="text" id="numero-cargaison"
                        class="mt-1 block w-full p-2 border border-gray-300 rounded">
                </div>
                <div class="mb-4">
                    <label for="poids-cargaison" class="block text-sm font-medium text-gray-700">Poids
                        (kg)</label>
                    <input type="number" id="poids-produit"
                        class="mt-1 block w-full p-2 border border-gray-300 rounded">
                </div>
                <div class="mb-4" id="toxicite-field" class="hidden">
                    <label for="toxicite-produit" class="block text-sm font-medium text-gray-700">
                        prix total</label>
                    <input type="number" id="toxicite-produit"
                        class="mt-1 block w-full p-2 border border-gray-300 rounded" min="1" max="10">
                </div>
                <div class="mb-4" id="toxicite-field" class="hidden">
                    <label for="toxicite-produit" class="block text-sm font-medium text-gray-700">
                        Depart</label>
                    <input type="number" id="toxicite-produit"
                        class="mt-1 block w-full p-2 border border-gray-300 rounded" min="1" max="10">
                </div>
                <div class="mb-4" id="toxicite-field" class="hidden">
                    <label for="toxicite-produit" class="block text-sm font-medium text-gray-700">
                        Arrivee</label>
                    <input type="number" id="toxicite-produit"
                        class="mt-1 block w-full p-2 border border-gray-300 rounded" min="1" max="10">
                </div>
                <div class="mb-4" id="toxicite-field" class="hidden">
                    <label for="toxicite-produit" class="block text-sm font-medium text-gray-700">
                        Distance</label>
                    <input type="number" id="toxicite-produit"
                        class="mt-1 block w-full p-2 border border-gray-300 rounded" min="1" max="10">
                </div>
                <div class="flex justify-end">
                    <button type="button" id="btn-close-modal"
                        class="bg-gray-500 text-white px-4 py-2 rounded mr-2">Annuler</button>
                    <button id="ajouter" type="submit" class="bg-blue-500 text-white px-4 py-2 rounded">Ajouter</button>
                </div>
            </form>
        </div>
    </div>
   <!--  <script type="module" src="dist/test.js"></script> -->
   <!--  <script>
        const btnToggleSidebar = document.getElementById('btn-toggle-sidebar');
        const sidebar = document.getElementById('sidebar');
        const nav = document.getElementById('nav');
        const mainContent = document.getElementById('main-content');

        btnToggleSidebar.addEventListener('click', () => {
            sidebar.classList.toggle('hidden');
            mainContent.classList.toggle('shifted');
            nav.classList.toggle('nav');

        });

        document.addEventListener('DOMContentLoaded', function () {
            const toggleCargaisons = document.getElementById('toggle-cargaisons');
            const cargaisonsMenu = document.getElementById('cargaisons-menu');
            const arrow = toggleCargaisons.querySelector('.arrow');

            toggleCargaisons.addEventListener('click', function (event) {
                if (event.target === arrow) { // Vérifie si la flèche a été cliquée
                    cargaisonsMenu.classList.toggle('open');
                    arrow.classList.toggle('rotate');
                } else {
                    cargaisonsMenu.classList.toggle('open');
                }
            });
        });

    </script> -->
</body>

</html>