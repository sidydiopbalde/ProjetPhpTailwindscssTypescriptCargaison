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
        <button class="bg-blue-500 px-4 py-3 text-blue-50 rounded-lg">Rechercher</button>
      </div>
  <div id="blockfiltrer" class="py-4 m-[20%] flex justify-between" >
    <div class="">
      <label for="filterNumero">Filtrer par Code</label>
    <input type="text" class="py-4" id="filterNumero" placeholder="Filtrer par numéro">
    </div>
    <div>

      <label for="filterPointDepart">filtrer depart</label>
      <input type="text" id="filterPointDepart" placeholder="Filtrer par point de départ">
    </div>
    <div>

      <label for="filtrer Arrivée">point Arrivé</label>
    <input type="text" id="filterPointArrive" placeholder="Filtrer par point d'arrivée">
    </div>
    <div>

      <label for="filterType">filtrer type</label>
    <input type="text" id="filterType" placeholder="Filtrer par type">
    </div>
    <div>

<label for="filterPointDepart">filtrer date dpt</label>
<input type="text" id="filterdateDepart" placeholder="Filtrer par point de départ">
</div>
<div>

<label for="filtrer Arrivée">point date  Arrivé</label>
<input type="text" id="filterdateArrive" placeholder="Filtrer par point d'arrivée">
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
          <h2 class="text-lg font-semibold text-blue-500 mb-4 text-center">Ajouter Cargaison</h2>
          <form id="addCargoForm">
         <!--  <input type="hidden" name="action" value="addCargaison"> -->
           <!--  <div class="mb-4">
              <label for="codeCargaison" class="block text-gray-700">Code Cargo</label>
              <input type="text" id="codeCargaison" name="numero"
              class="w-full px-4 py-2 border rounded-lg border-sky-500 focus:outline-none focus:ring-2 focus:ring-blue-500">
            </div> -->
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
                      
                      <option value="colis">nombre de colis</option>
                      <option value="poids">poids cargaison</option>
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
             
            <button type="submit"  id="valider" class="w-full bg-blue-500 text-blue-600">Valider</button> 
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
            <th class="py-2 px-4">Poids Totale</th>
            <th class="py-2 px-4">Distance</th>
            <th class="py-2 px-4">etat-Global</th>
            <th class="py-2 px-4">etat-Avancement</th>
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
    