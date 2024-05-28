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
    
      <!-- Form to Add Product -->
      <div class="bg-white p-6 rounded-lg shadow-lg border">
        <h2 class="text-lg font-semibold text-blue-500 mb-4 text-center">Ajouter Produit</h2>
        <form id="addProductForm" method="" action="">
          <div class="mb-4">
            <label for="productName" class="block text-gray-700">Nom du produit</label>
            <input type="text" id="productName" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div class="mb-4">
            <label for="productType" class="block text-gray-700">Type de produit</label>
            <select id="productType" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
              <option value="">Sélectionner</option>
              <option value="electronic">Électronique</option>
              <option value="furniture">Mobilier</option>
              <option value="clothing">Vêtements</option>
            </select>
          </div>
          <div class="mb-4">
            <label for="productWeight" class="block text-gray-700">Poids</label>
            <input type="text" id="productWeight" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div class="mb-4">
            <label for="productPrice" class="block text-gray-700">Prix</label>
            <input type="text" id="productPrice" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <div class="mb-4">
            <label for="productPrice" class="block text-gray-700">Prix</label>
            <input type="text" id="productPrice" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
          </div>
          <button type="button" id="addProduct" class="w-full bg-blue-600 text-blue-500 py-2 rounded-lg">Ajouter</button>
        </form>
      </div>
    </div>
  </div>
  <script>
 
  </script>
  <script type="module" src="./dist/test.js" defer></script>
</body>

</html>
