//Creating the Map
//Player Marker//
let playerIcon =  L.icon ({
  iconUrl: '/scr/images/icon-character-map.png',
  iconSize: [206/4, 181/4],
  popupAnchor: [0, -38],
  iconAnchor: [91/4,167/4],
});

let playerMarker = L.marker(disk.currPos, {icon: playerIcon, className: "popup"});
let playerLayer = L.layerGroup([playerMarker]);
          //var map = L.map('map').setView([0, 0], 0);
          var map = L.map('map-man', {
            center:[0, 0],
            zoom: 4,
            layers: [playerLayer],
            attributionControl: false,
            zoomControl: false
          });
        map.invalidateSize();
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

//******Marker Creation Here*******//

//ICONS

//POI: Tenement
let tenementIcon = L.icon ({
  iconUrl: '/scr/images/icon-tenement-map.png',
  iconSize: [164/4, 164/4],
  popupAnchor: [0, -164/8],
  iconAnchor: [164/8 + 1 , 164/8 + 1],
});
let tenementMarker = L.marker([0,0], {icon: tenementIcon, className: "popup"});
tenementMarker.bindPopup("Abandoned Tenement");
tenementMarker.on("click", function() {
  tenementMarker.openPopup();
});

//POI: Hotel
let hotelIcon = L.icon ({
  iconUrl: '/scr/images/icon-tenement-map.png',
  iconSize: [164/4, 164/4],
  popupAnchor: [0, -164/8],
  iconAnchor: [164/8 + 1 , 164/8 + 1],
});
let hotelMarker = L.marker([32.787, -6.877], {icon: hotelIcon, className: "popup"});
hotelMarker.bindPopup("The Sunderland Hotel");
hotelMarker.on("click", function() {
  hotelMarker.openPopup();
});

//POI: Food
let foodIcon = L.icon ({
  iconUrl: '/scr/images/icon-food-map.png',
  iconSize: [164/4, 164/4],
  popupAnchor: [0, -164/8],
  iconAnchor: [164/8 + 1 , 164/8 + 1],
});

//POI: Subways
let subwayIcon = L.icon ({
  iconUrl: '/scr/images/icon-subway-map.png',
  iconSize: [164/4, 164/4],
  popupAnchor: [0, -164/8],
  iconAnchor: [164/8 + 1 , 164/8 + 1],
});

//POI: Phone
let phoneIcon = L.icon ({
  iconUrl: '/scr/images/icon-phone-map.png',
  iconSize: [164/4, 164/4],
  popupAnchor: [0, -164/8],
  iconAnchor: [164/8 + 1 , 164/8 + 1],
});

//POI: Story Nodes
let poiIcon = L.icon ({
  iconUrl: '/scr/images/icon-POI-map.png',
  iconSize: [164/4, 164/4],
  popupAnchor: [0, -164/8],
  iconAnchor: [164/8 + 1 , 164/8 + 1],
});
//todo: insert story node icon here


//Layer Groups

let subwayLayer = L.layerGroup();
let phoneLayer = L.layerGroup(); //this might need to be moved into the phone spawning function
let foodLayer = L.layerGroup();
let poiLayer = L.layerGroup();
let sleepLayer = L.layerGroup([hotelMarker, tenementMarker]); 

//Creating a regular expression to extract Subway Station name [98 Stations!]
let subwayRegEx = / (.* Station) /;

//Markers for POI, then run a forEach similarly like above in order to create markers.
//This is done by feeding an array containing ids of the rooms we want
let poiIDArr = ['56-madi'];


//This block is checking the entire disk for boolean values for food and subway.
//todo: need to add hasFood property to every room that has a restaruant
console.log(disk.rooms)
disk.rooms.forEach((element)=>{
  if (element.coord !== undefined) {
    if (element.coord[0] !== undefined && element.coord[1] !== undefined) {
      
      //Food Markers
      if (element.hasFood === true) {
        console.log([element.coord[0],element.coord[1]])
        let marker = L.marker([element.coord[0],element.coord[1]], {icon: foodIcon}).addTo(foodLayer);
        //marker.bindPopup(element.name, {className: 'popup'});
      }

      //Subway Markers
      if (element.hasSubway === true) {
        //matches the desc to grab the exact the station name and places it in the popup.
        const match = subwayRegEx.exec(element.desc); 
        if (match) {
          let subName = match[1];
          console.log("match!");
          //console.log(subName)
          let marker = L.marker([element.coord[0], element.coord[1]], {icon: subwayIcon}).addTo(subwayLayer);
          marker.bindPopup(subName, {className: 'popup'});
        }
      } else {
        console.log('No subways here!');
      }

      //POI Markers
      poiIDArr.forEach((poi) => {
        if (poi === element.id) {
          console.log(element.id);
          let marker = L.marker([element.coord[0], element.coord[1]], {icon: poiIcon}).addTo(poiLayer);
          marker.bindPopup("???", {className: 'popup'});
        }
      })
    } else {
      console.log('No coordinates here!');
    }
  } else {
    console.log('No rooms to be found!');
  }
});

//enable popups on click for all markers
$('.popup').on('click', function(e) {
  e.openPopup();
})

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


let overlays = {
  "Subway": subwayLayer,
  "Phone Booths": phoneLayer,
  "Food": foodLayer,
  "Sleep": sleepLayer,
  "Story": poiLayer
}

L.control.layers(null, overlays, {collapsed: false, position: 'bottomleft'}).addTo(map);
L.control.zoom({position: 'bottomright'}).addTo(map);
input.addEventListener('keypress', setPlayerMarker);


