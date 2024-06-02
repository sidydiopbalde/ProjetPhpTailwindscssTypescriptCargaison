
<div class="mb-4">
        <ul class="flex space-x-4">
          <li><a href="#" class="font-bold text-blue-500">All Cargaisons</a></li>
          <li><a href="#" class="text-blue-500">EN Attente</a></li>
          <li><a href="#" class="text-blue-500"></a></li>
          <li><a href="#" class="text-blue-500">Arrivée</a></li>
          <li><button class="bg-blue-500 text-white rounded-full p-1" onclick="my_modal_5.showModal()">ADD CARGO</button></li>
        </ul>
      </div>
      <div>
      <!--   <button class="bg-blue-500 px-4 py-3 text-blue-50 rounded-lg">Rechercher</button> -->
      </div>
      <!-- ajout produit -->
      <dialog id="mymodal1" class="modal"> 
    <div class="bg-white p-6 rounded-lg shadow-lg border" style="width:60%">
        <form method="dialog" class="border-none">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button> 
        </form>
        <h2 class="text-lg font-semibold text-blue-500 mb-4 text-center">Ajouter Produit</h2>
        <form id="addProductForm" class="" style="width:100%">
            <div class="flex flex-col space-y-10 gap-3">
                <!-- Produit Section -->
                <div>
                    <h3 class="text-md font-semibold text-gray-800 mb-2">Produit</h3>
                    <div class="mb-4">
                        <label for="productName" class="block text-gray-700">Nom du produit</label>
                        <input type="text" id="nomProduit" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div class="mb-4">
                        <label for="productType" class="block text-gray-700">Type de produit</label>
                        <select id="productType" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                            <option value="">Sélectionner</option>
                            <option value="alimentaire">Alimentaire</option>
                            <option value="chimique">chimique</option>
                            <option value="incassable">incassable</option>
                            <option value="fragile">fragile</option>
                        </select>
                        <span>ce type de produit</span>
                    </div>
                    <div class="mb-4">
                        <label for="productToxicity" class="block text-gray-700">Toxicity</label>
                        <input type="text" id="productToxicity" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <span class="error">error</span>
                    </div>
                    <div class="mb-4">
                        <label for="productWeight" class="block text-gray-700">Poids</label>
                        <input type="text" id="productWeight" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <span class="error">error</span>
                    </div>
                    <div class="mb-4">
                        <label for="productPrice" class="block text-gray-700">Prix</label>
                        <input type="text" id="productPrice" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <span class="error">error</span>
                    </div>
                </div>
                <!-- Client Section -->
                <div>
                    <h3 class="text-md font-semibold text-gray-800 mb-2">Informations du client</h3>
                    <div class="mb-4">
                        <label for="clientFirstName" class="block text-gray-700">Nom du client</label>
                        <input type="text" id="clientFirstName" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <span class="error">error</span>
                    </div>
                    <div class="mb-4">
                        <label for="clientLastName" class="block text-gray-700">Prenom du client</label>
                        <input type="text" id="clientLastName" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <span class="error">error</span>
                    </div>
                    <div class="mb-4">
                        <label for="clientPhone" class="block text-gray-700">Numero de telephone</label>
                        <input type="text" id="clientPhone" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div class="mb-4">
                        <label for="clientAddress" class="block text-gray-700">Adresse</label>
                        <input type="text" id="clientAddress" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                        <span class="error">error</span>
                    </div>
                </div>
                <!-- Destinataire Section -->
                <div>
                    <h3 class="text-md font-semibold text-gray-800 mb-2">Informations du destinataire</h3>
                    <div class="mb-4">
                        <label for="recipientFirstName" class="block text-gray-700">Nom du destinataire</label>
                        <input type="text" id="nomDestin" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div class="mb-4">
                        <label for="recipientLastName" class="block text-gray-700">Prenom du destinataire</label>
                        <input type="text" id="prenomDestin" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                    <div class="mb-4">
                        <label for="recipientAddress" class="block text-gray-700">Adresse du destinataire</label>
                        <input type="text" id="addressDestin" class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                    </div>
                </div>
            </div>
            <button type="submit" id="addProduct" class="w-full text-blue-600   py-2 rounded-lg mt-6">Ajouter</button>
        </form>
    </div>
</dialog>

<!-- modal details cargaison -->
<dialog id="mymodal2" class="modal"> 
    <div class="bg-white p-6 rounded-lg shadow-lg border" style="width:60%">
        <form method="dialog" class="border-none">
            <!-- if there is a button in form, it will close the modal -->
            <button class="btn">Close</button> 
        </form>
        <h2 class="text-lg font-semibold text-blue-500 mb-4 text-center">DETAILS CARGAISONS</h2>
      <table>
      <thead class="bg-gray-200">
          <tr>
            <th class="py-2 px-4">Code</th>
            <th class="py-2 px-4">Type</th>
            <th class="py-2 px-4">Poids</th>
            <th class="py-2 px-4">exp Nom</th>
            <th class="py-2 px-4">Exp Pren</th>
            <th class="py-2 px-4">Dest Nom</th>
            <th class="py-2 px-4">dest Pren</th>
            <th class="py-2 px-4">Action</th>
          </tr>
        </thead>
        <tbody id="bodyDetailsCargo">

        </tbody>
      </table>
     
    </div>
</dialog>
           <!-- filtre -->
   <div id="blockfiltrer" class="py-4 m-[20%] flex justify-between" >
    <div class="">
      <label for="filterNumero" class="text-blue-500">Filtrer par Code</label>
    <input type="text" class="py-4 rounded" id="filterNumero" style="padding:0.5rem" placeholder="Filtrer par numéro">
    </div>
    <div>

      <label for="filterPointDepart" class="text-blue-500">filtrer depart</label>
      <input type="text" id="filterPointDepart" style="padding:0.5rem"  placeholder="Filtrer par point de départ">
    </div>
    <div>

      <label for="filtrer Arrivée" class="text-blue-500">point Arrivé</label>
    <input type="text" id="filterPointArrive" style="padding:0.5rem" placeholder="Filtrer par point d'arrivée">
    </div>
    <div>

      <label for="filterType" class="text-blue-500">filtrer type</label>
    <input type="text" id="filterType" style="padding:0.5rem" placeholder="Filtrer par type">
    </div>
    <div>

<label for="filterPointDepart" class="text-blue-500">filtrer date dpt</label>
<input type="text" id="filterdateDepart" style="padding:0.5rem" placeholder="Filtrer par point de départ">
</div>
<div>

<label for="filtrer Arrivée" class="text-blue-500">point date  Arrivé</label>
<input type="text" id="filterdateArrive" style="padding:0.5rem" placeholder="Filtrer par point d'arrivée">
</div>
  <button id="filterBtn" class="bg-blue-500 rounded-lg text-white">Filtrer</button>
</div> 
      <!-- Modal -->
      <dialog id="my_modal_5" class="modal modal-bottom sm:modal-middle">
        <div class="bg-white p-6 rounded-lg shadow-lg border min-h-14 overflow-scroll" style="width: 50%;" >
          <div class="modal-action">
            <form method="dialog">
              <button id="close" class="btn">Close</button>
            </form>
          </div>
          <!-- formulaire ajout cargaison -->
          <h2 class="text-lg font-semibold text-blue-500 mb-4 text-center">Ajouter Cargaison</h2>
          <form id="addCargoForm">
            <div class="mb-4">
              <label for="type" class="block text-gray-700">Type de cargaison</label>
              <select id="type" name="type" class="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                <option value="">Sélectionner</option>
                <option value="aerien">Aérien</option>
                <option value="maritime">Maritime</option>
                <option value="terrestre">Terrestre</option>
              </select>
              <span id="typeError" style="color:red"></span>
            </div>
            <div class="flex">

              <div class="mb-4">
                <label for="limiteCargaison" class="block text-gray-700">type de limitation cargaisons</label>
                  <select  id="limiteCargaison" name="limteCargo" class="w-[50%] px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500">
                      
                    <option value="poids">poids cargaison</option>
                      <option value="colis">nombre de colis</option>
                  </select>
              </div>
               <div class="mb-4 " id="divPoids" >
                <label for="poidsCargaison" class="block text-gray-700">Poids total cargaison</label>
                <input type="text" id="poidsCargaison" name="poidsCargaison" class="w-[50%] px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span id="poidsCargaisonError" style="color:red"></span>
              </div>
              <div class="mb-4" id="divColis">
                <label for="nombredeColis" class="block text-gray-700">Nombre de colis</label>
                <input type="text" id="nombredeColis" name="nombredeColis" class="w-[50%] px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span id="nombredeColisError" style="color:red"></span>
              </div> 
            </div>
          
               <div id="map"></div> 
              <!-- <button type="button" id="pointSelect" class="btn bg-primary w-full text-white hover:bg-secondary-dark hover:text-primary mb-4">Select les deux points</button>  -->
            <div class="mt-4">
            <label for="distance" class="block mb-2 text-sm font-medium text-gray-900">Distance (km):</label>
            <input type="number" id="distance" name="distance" class="block w-full p-2 border border-gray-300 rounded-lg focus:ring-blue-500 focus:border-blue-500">
            <span id="distanceError" style="color:red"></span>
          </div>
          <div class="flex justify-between">
            <div class="mb-4">
              <label for="dateDepart" class="block text-gray-700">Date de départ</label>
              <input type="date" id="dateDepart" name="dateDepart" class="w-[100%] px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <span id="dateDepartError" style="color:red"></span>
            </div>
            <div class="mb-4">
              <label for="dateArrive" class="block text-gray-700">Date d'arrivée</label>
              <input type="date" id="dateArrive" name="dateArrive" class="w-[100%] px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
              <span id="dateArriveError" style="color:red"></span>
            </div>
            
          </div>
          <div class="flex justify-between">

            <div class="mb-4">
               <label for="pointDepart" class="block text-gray-700">lieu de départ</label>
               <input type="text" id="pointDepart" name="pointDepart"
               class="w-[50%] px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
               <span id="pointDepartError" style="color:red"></span>
             </div>
             <div class="mb-4">
               <label for="pointArrive" class="block text-gray-700">lieu d'arrivée</label>
               <input type="text" id="pointArrive" name="pointArrive"
                class="w-[50%] px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
                <span id="pointArriveError" style="color:red" ></span>
             </div>
          </div>
             
            <button type="submit"  id="valider" class="w-full bg-blue-800 text-blue-600">Valider</button> 
          </form>
        </div>
      </dialog>
      <table class="w-full bg-white shadow rounded-lg overflow-hidden">
        <thead class="bg-gray-200">
          <tr>
            <th class="py-2 px-4">Code</th>
            <th class="py-2 px-4">Type</th>
            <th class="py-2 px-4">Date départ</th>
            <th class="py-2 px-4">Date d'arrivée</th>
            <th class="py-2 px-4">lieu départ</th>
            <th class="py-2 px-4">lieu d'arrivée</th>
            <th class="py-2 px-4">Distance</th>
            <th class="py-2 px-4">etat-Global</th>
            <th class="py-2 px-4">etat-Avancement</th>
            <th class="py-2 px-4">Action</th>
            <th class="py-2 px-4">Aj-produit</th>
            <th class="py-2 px-4">Détails</th>
          </tr>
        </thead>
                            <?php
                            // Lire le fichier JSON
                            $donneesJson = file_get_contents('../data.json');
                            $cargaisons = json_decode($donneesJson, true)['cargaisons'];
                            ?>
        <tbody id="bodyCargaison">
     
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

    <script src="https://unpkg.com/leaflet@1.7.1/dist/leaflet.js" ></script>

    <script>
          let map, startMarker, endMarker;
let startPoint, endPoint;

map = L.map('map').setView([0, 0], 2);  // Change to world view
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
  maxZoom: 19,
  attribution: '© OpenStreetMap'
}).addTo(map);

// Event listener to handle map click
map.on('click', function(e) {
  console.log("sidy")
  if (!startPoint) {
    startPoint = e.latlng;
    startMarker = L.marker(startPoint, { draggable: true }).addTo(map);
    reverseGeocode(startPoint, 'pointDepart');

    // Add event listener to handle startMarker click for deselection
    startMarker.on('click', function() {
      map.removeLayer(startMarker);
      startPoint = null;
      document.getElementById('pointDepart').value = '';
      document.getElementById('distance').value = '';
    });
  } else if (!endPoint) {
    endPoint = e.latlng;
    endMarker = L.marker(endPoint, { draggable: true }).addTo(map);
    reverseGeocode(endPoint, 'pointArrive');
    calculateDistance();

    // Add event listener to handle endMarker click for deselection
    endMarker.on('click', function() {
      map.removeLayer(endMarker);
      endPoint = null;
      document.getElementById('pointArrive').value = '';
      document.getElementById('distance').value = '';
    });
  }
});

function reverseGeocode(latlng, elementId) {
  fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latlng.lat}&lon=${latlng.lng}`)
    .then(response => response.json())
    .then(data => {
      if (data.address) {
        document.getElementById(elementId).value = data.address.city || data.address.town || data.address.village || data.address.country || '';
      } else {
        document.getElementById(elementId).value = '';
        console.error('Address not found for the provided coordinates.');
      }
    })
    .catch(error => {
      console.error('Error fetching address data:', error);
      document.getElementById(elementId).value = '';
    });
}

function calculateDistance() {
  if (startPoint && endPoint) {
    const distance = map.distance(startPoint, endPoint) / 1000; // Convert to km
    document.getElementById('distance').value = distance.toFixed(2);
  }
}


document.getElementById('close').addEventListener('click', function() {
 
  resetMap();
});

function resetMap() {
  if (startMarker) map.removeLayer(startMarker);
  if (endMarker) map.removeLayer(endMarker);
  startPoint = null;
  endPoint = null;
  document.getElementById('pointDepart').value = '';
  document.getElementById('pointArrive').value = '';
  document.getElementById('distance').value = '';
}
 
  
  </script> 
    