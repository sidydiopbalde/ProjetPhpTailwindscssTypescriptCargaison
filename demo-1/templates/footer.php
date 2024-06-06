</div> <!-- Closing main content div -->
<script>
  document.getElementById('toggleSidebar').addEventListener('click', function () {
    const sidebar = document.getElementById('sidebar');
    sidebar.classList.toggle('-translate-x-full');
  });
 
</script>
<!-- <script type="module" src="/var/www/html/projettailwinTs/demo-1/dist/test.js" defer></script>  -->
<script src="../dist/test.js" type="module"></script>
<script src="https://cdn.jsdelivr.net/npm/sweetalert2@11"></script>
<!-- <script src="https://unpkg.com/leaflet@1.9.4/dist/leaflet.js" integrity="sha256-20nQCchB9co0qIjJZRGuk2/Z9VM+kNiyxNV1lvTlZBo=" crossorigin=""></script>  -->-

<script>
   document.getElementById("selectFilter").addEventListener("change", function () {
      var selectedFilter = this.value;
      var selectedFilterInput = document.getElementById("selectedFilterInput");

      // Réinitialiser les champs de saisie précédents
      selectedFilterInput.innerHTML = '';

      if (selectedFilter !== "") {
        if (selectedFilter === "all") {
          // Ajouter tous les champs de saisie dans le conteneur flex
          var filterOptions = this.options;
          for (var i = 0; i < filterOptions.length; i++) {
            if (filterOptions[i].value !== "") {
              var inputElement = document.createElement("input");
              inputElement.setAttribute("type", "text");
              inputElement.setAttribute("class", "w-32 ml-5 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500");
              inputElement.setAttribute("id", filterOptions[i].value);
              inputElement.setAttribute("placeholder", "Filtrer par " + filterOptions[i].text);
              selectedFilterInput.appendChild(inputElement);
            }
          }
        } else {
          // Ajouter un champ de saisie pour l'option sélectionnée
          var inputElement = document.createElement("input");
          inputElement.setAttribute("type", "text");
          inputElement.setAttribute("class", "w-32 py-2 rounded border border-gray-300 focus:outline-none focus:border-blue-500");
          inputElement.setAttribute("id", selectedFilter);
          inputElement.setAttribute("placeholder", "Filtrer par " + this.options[this.selectedIndex].text);
          selectedFilterInput.appendChild(inputElement);
        }
      }
    });

</script>
</body>
</html>