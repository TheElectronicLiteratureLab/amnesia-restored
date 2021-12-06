let playerMarker = L.marker(disk.currPos);
let playerLayer = L.layerGroup([playerMarker]);
//let playerMarker = L.marker(disk.currPos).addTo(map);

//Creating the Map
          //var map = L.map('map').setView([0, 0], 0);
          var map = L.map('map-man', {
            center:[0, 0],
            zoom: 4,
            layers: [playerLayer],
            attributionControl: false,
          });
        //map.invalidateSize();
        setTimeout(function(){ map.invalidateSize(true)}, 100);
        L.tileLayer('map/{z}/{x}/{y}.png', {
          continuousWorld: false,
          noWrap: true,	
          minZoom: 3,
          maxZoom: 6,
        }).addTo(map);

/* 
        ///Coordinate Finder
        var marker = L.marker([0, 0], {draggable: true,}).addTo(map);
        marker.bindPopup('LatLng Marker').openPopup();
        marker.on('drag', function(e) {
          marker.getPopup().setContent("Lat, Lng[" + marker.getLatLng().lat.toFixed(3).toString() + ", " + marker.getLatLng().lng.toFixed(3).toString() + "]").openOn(map);
          //marker.getPopup().setContent(marker.getLatLng().lat.toFixed(3).toString() + ", " + marker.getLatLng().lng.toFixed(3).toString()).openOn(map);
          marker.on('dragend', function(e) {
          navigator.clipboard.writeText(marker.getLatLng().lat.toFixed(3) + ', ' + marker.getLatLng().lng.toFixed(3));
        })
        });
*/


//POI: Tenement
//POI: Subways
//POI: Restaruants
//POI: Story Node
//POI: Hotel
//POI: Street
//POI: Phone

let centerOnPlayer = () => {
  map.flyTo(playerMarker.getLatLng());
}

let setPlayerMarker = (e) => {
  const ENTER = 13;
  if (e.keyCode === ENTER) {

      if (disk.currPos !== undefined) {
        let room = getRoom(disk.roomId);

        playerMarker.setLatLng(disk.currPos).bindPopup(room.name, {offset: L.point(-46, 5), className: 'popup'}).openPopup().update();
        centerOnPlayer();
        playerMarker.on('click', function(e) {
          playerMarker.unbindPopup();
          playerMarker.bindPopup(room.name, {className: 'popup'}).openPopup();
        });
        //playerMarker.getPopup().setContent(room.name).openPopup().update();
        console.log('Moving Player...' + disk.currPos);
        console.log('Name of Intersection: ' + room.name);
      } else if (disk.currPos === undefined) {
        console.log('There are no coordinates here, please find some.');
      } 
      else {
        console.log('Something broke!!! Let your worldbuilder/programmer know!')
      }

    println(console.log(disk.currPos));
  }
}

input.addEventListener('keypress', setPlayerMarker);


