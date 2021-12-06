let playerMarker = L.marker(disk.currPos).addTo(map);

//let playerMarker = L.marker(disk.currPos).addTo(map);
//let playerPopup = new L.Popup();

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
    println(console.log(disk.currPos));
    console.log(disk.currPos);
    if (disk.currPos.length !== 0) {
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
    } else if (disk.currPos.length === 0) {
      println('There are no coordinates here, please find some.');
    } 
    else {
      console.log('Something broke!!! Let your worldbuilder/programmer know!')
    }
  }
}

input.addEventListener('keypress', setPlayerMarker);


