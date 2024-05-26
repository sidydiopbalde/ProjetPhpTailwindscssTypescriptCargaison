<!DOCTYPE html>
<html lang="en"> 
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <link rel="stylesheet" href="tailwind.css">
  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.11.1/dist/full.min.css" rel="stylesheet" type="text/css" />
   <!-- <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDRrqXXbqLwynEtM5_BexPn_7_wV4v9tUg&callback=initMap" async defer></script> -->

<!-- <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
<script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script> -->
  <script>
/*      let map;
    let directionsService;
    let directionsRenderer;
    let markerA, markerB;
    let pointA, pointB;

    function initMap() {
      map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
      });

      directionsService = new google.maps.DirectionsService();
      directionsRenderer = new google.maps.DirectionsRenderer();
      directionsRenderer.setMap(map);

      map.addListener('click', (event) => {
        if (!pointA) {
          pointA = event.latLng;
          markerA = new google.maps.Marker({
            position: pointA,
            map: map,
            label: 'A'
          });
        } else if (!pointB) {
          pointB = event.latLng;
          markerB = new google.maps.Marker({
            position: pointB,
            map: map,
            label: 'B'
          });
          calculateAndDisplayRoute(pointA, pointB);
        }
      });
    }

    function calculateAndDisplayRoute(pointA, pointB) {
      directionsService.route(
        {
          origin: pointA,
          destination: pointB,
          travelMode: google.maps.TravelMode.DRIVING,
        },
        (response, status) => {
          if (status === "OK") {
            directionsRenderer.setDirections(response);
            const route = response.routes[0].legs[0];
            document.getElementById('distance').value = route.distance.text;
            alert("Distance: " + route.distance.text + "\nDuration: " + route.duration.text);
          } else {
            window.alert("Directions request failed due to " + status);
          }
        }
      );
    }  */
   
/*     let map, startMarker, endMarker;
  let startPoint, endPoint;

  map = L.map('map').setView([0, 0], 2);  // Change to world view
  L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    maxZoom: 19,
    attribution: '© OpenStreetMap'
  }).addTo(map);

  document.getElementById('pointSelect').addEventListener('click', function() {
    map.on('click', onMapClick);
  });

  function onMapClick(e) {
    if (!startPoint) {
      startPoint = e.latlng;
      startMarker = L.marker(startPoint).addTo(map);
      reverseGeocode(startPoint, 'pointDepart');
    } else if (!endPoint) {
      endPoint = e.latlng;
      endMarker = L.marker(endPoint).addTo(map);
      reverseGeocode(endPoint, 'pointArrive');
      calculateDistance();
      map.off('click', onMapClick);
    }
  }

  function reverseGeocode(latlng, elementId) {
    fetch(`https://nominatim.openstreetmap.org/reverse?format=jsonv2&lat=${latlng.lat}&lon=${latlng.lng}`)
      .then(response => response.json())
      .then(data => {
        document.getElementById(elementId).value = data.address.city || data.address.town || data.address.village || data.address.country;
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
    document.getElementById('start-location').value = '';
    document.getElementById('end-location').value = '';
    document.getElementById('distance').value = '';
  }  */
    
  </script> 
  <style>
    .hover-scale:hover {
      transform: scale(1.05);
    }
    #map{
      width: 100%;
      height: 150px;
    }
    body{
      overflow:scroll;
    }
    #divColis,#divPoids{
      display:none;
    }
  </style>
</head>
<body class="bg-gray-100">
  <div class="flex">