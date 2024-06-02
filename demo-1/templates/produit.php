<!DOCTYPE html>
<html lang="en">

<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Ajouter Produit</title>
  <link rel="stylesheet" href="./public/tailwind.css">
  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.11.1/dist/full.min.css" rel="stylesheet" type="text/css" />
  <style>
    .hover-scale:hover {
      transform: scale(1.05);
    }
  </style>
</head>

<body class="bg-gray-100">
  <div class="flex">
    
    <!-- Main Content -->
    
    <table class="w-full bg-white shadow rounded-lg overflow-hidden">
        <thead class="bg-gray-200">
          <tr>
            <th class="py-2 px-4">Code</th>
            <th class="py-2 px-4">Type</th>
            <th class="py-2 px-4">Poids(kg)</th>
            <th class="py-2 px-4">Prenom du client</th>
            <th class="py-2 px-4">Nom du client</th>
            <th class="py-2 px-4">Prenom destinataire</th>
            <th class="py-2 px-4">Nom destinataire</th>
            <th class="py-2 px-4">Action</th>
         
          </tr>
        </thead>
                            <?php
                            // Lire le fichier JSON
                            $donneesJson = file_get_contents('../data.json');
                            $cargaisons = json_decode($donneesJson, true)['cargaisons'];
                            ?>
        <tbody id="bodyProduit">
     
         <!--  <tr class="hover-scale transition transform duration-300 bg-blue-100 hover:bg-blue-200 cursor-pointer">
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
          </tr> -->
          <!-- Other rows -->
         <!--  <tr class="hover-scale transition transform duration-300">
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
          </tr> -->
          <!-- htmlspecialchars() est utilisé pour s'assurer que les données sont affichées en toute sécurité (protection contre les injections XSS). -->
          <!-- <?php foreach ($cargaisons as $cargaison) : ?>
            <tr class="hover-scale transition transform duration-300 bg-blue-100 hover:bg-blue-200 cursor-pointer">
                <td class="py-2 px-4"><?= htmlspecialchars($cargaison['numero']) ?></td>
                <td class="py-2 px-4"><?= htmlspecialchars($cargaison['type']) ?></td>
                <td class="py-2 px-4"><?= htmlspecialchars($cargaison['dateDepart']) ?></td>
                <td class="py-2 px-4"><?= htmlspecialchars($cargaison['dateArrive']) ?></td>
                <td class="py-2 px-4"><?= htmlspecialchars($cargaison['pointDepart']) ?></td>
                <td class="py-2 px-4"><?= htmlspecialchars($cargaison['pointArrive']) ?></td>
                <td class="py-2 px-4"><?= htmlspecialchars($cargaison['poidsMax']) ?></td>
                <td class="py-2 px-4"><?= htmlspecialchars($cargaison['distance']) ?></td>
                <td class="py-2 px-4"><?= htmlspecialchars($cargaison['etatGlobal'] ?? 'N/A') ?></td>
                <td class="py-2 px-4"><?= htmlspecialchars($cargaison['etatAvancement'] ?? 'N/A') ?></td>
                <td class="py-2 px-4">
                    <i class="fas fa-plus" style="font-size:48px;color:blue;">+</i>
                </td>
                <td class="py-2 px-4">
                    <button class="material-icons">Details</button>
                </td>
            </tr>
        <?php endforeach; ?> -->
         
        </tbody>
      </table>
      <div class="flex justify-between mt-4">
        <div>Showing 06-12 of 28</div>
        <div id="pagination">
          <button class="py-1 px-3 bg-gray-300 rounded">1</button>
          <button class="py-1 px-3 bg-blue-500 text-white rounded">2</button>
          <button class="py-1 px-3 bg-blue-300 rounded">3</button>
          <button class="py-1 px-3 bg-gray-300 rounded">4</button>
          <button class="py-1 px-3 bg-gray-300 rounded">5</button>
        </div>
      </div>
    </div>
  <script type="module" src="./dist/test.js" defer></script>
</body>

</html>
