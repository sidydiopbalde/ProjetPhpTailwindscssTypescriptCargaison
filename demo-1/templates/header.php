<!DOCTYPE html>
<html lang="en"> 
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Dashboard</title>
  <link rel="stylesheet" href="tailwind.css">
  <link href="https://cdn.jsdelivr.net/npm/daisyui@4.11.1/dist/full.min.css" rel="stylesheet" type="text/css" />
  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/>
<!--   <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@20..48,100..700,0..1,-50..200" /> -->
  <!--  <script src="https://maps.googleapis.com/maps/api/js?key=AIzaSyDRrqXXbqLwynEtM5_BexPn_7_wV4v9tUg&callback=initMap" async defer></script>  -->

<!--  <link rel="stylesheet" href="https://unpkg.com/leaflet@1.9.4/dist/leaflet.css" integrity="sha256-p4NxAoJBhIIN+hmNHrzRCf9tD/miZyoHS5obTRR9BMY=" crossorigin=""/> -->

  <style>
    .hover-scale:hover {
      transform: scale(1.05);
    }
    #map{
      width: 100%;
      height: 300px;
    }
    body{
      overflow:scroll;
    }
    #divColis{
      display:none;
    }
    


  </style>
</head>
<body class="bg-gray-100">
  <div class="flex">