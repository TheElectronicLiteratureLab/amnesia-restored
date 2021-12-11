

//Creating the Map
//Player Marker//
let playerIcon =  L.icon ({
  iconUrl: '/scr/images/icon-character-map.png',
  iconSize: [206/4, 181/4],
  popupAnchor: [0, -38],
  iconAnchor: [91/4,167/4],
});

let playerLayer = L.layerGroup();
let playerMarker = L.marker(disk.currPos, {icon: playerIcon, zIndexOffset: 1000, className: "popup"}).addTo(playerLayer);

let foodLayer = L.layerGroup();

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
});*/


//Layer Groups
let subwayLayer = L.layerGroup();
let phoneLayer = L.layerGroup(); //this might need to be moved into the phone spawning function

let poiLayer = L.layerGroup();
let sleepLayer = L.layerGroup(); 

let overlays = {
  "Subway": subwayLayer,
  "Phone Booths": phoneLayer,
  "Food": foodLayer,
  "Sleep": sleepLayer,
  "Story": poiLayer
}

L.control.layers(null, overlays, {collapsed: false, position: 'bottomleft'}).addTo(map);
L.control.zoom({position: 'bottomright'}).addTo(map);

//******Marker Creation Here*******//

//ICONS

//POI: Tenement
let tenementIcon = L.icon ({
  iconUrl: '/scr/images/icon-tenement-map.png',
  iconSize: [164/4, 164/4],
  popupAnchor: [0, -164/8],
  iconAnchor: [164/8 + 1 , 164/8 + 1],
});
let tenementMarker = L.marker([0,0], {icon: tenementIcon, className: "popup"}).addTo(sleepLayer);
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
let hotelMarker = L.marker([32.787, -6.877], {icon: hotelIcon, className: "popup"}).addTo(sleepLayer);
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



//Creating a regular expression to extract Subway Station name [98 Stations!]
let subwayRegEx = / (.* Station) /;

//Creating a regular expression to extract restaruant name
let foodRegEx = /luncheonette/;


//Markers for POI, then run a forEach similarly like above in order to create markers.
//This is done by feeding an array containing ids of the rooms we want
let poiIDArr = ['56-madi'];


//This block is checking the entire disk for boolean values for food and subway.
//todo: need to add hasFood property to every room that has a restaruant
disk.rooms.forEach((element)=>{
  if (element.coord !== undefined) {
    if (element.coord[0] !== undefined && element.coord[1] !== undefined) {
      
      //Food Markers
      if (element.hasFood === true) {
        let marker = L.marker([element.coord[0],element.coord[1]], {icon: foodIcon}).addTo(foodLayer);
        //marker.bindPopup(element.name, {className: 'popup'});
        console.log(`Yum yum, I'm hungry.`);
        let foodMatch = foodRegEx.exec(element.desc);
        let str = foodMatch[0];
        let restName = str.charAt(0).toUpperCase() + str.slice(1);
        marker.bindPopup(restName, {className: 'popup'});
      }

      //Subway Markers
      if (element.hasSubway === true) {
        //matches the desc to grab the exact the station name and places it in the popup.
        const match = subwayRegEx.exec(element.desc); 
        if (match) {
          let subName = match[1];
          //console.log(subName)
          let marker = L.marker([element.coord[0], element.coord[1]], {icon: subwayIcon}).addTo(subwayLayer);
          marker.bindPopup(subName, {className: 'popup'});
          marker.on('click', function(e) {
            if (disk.roomId === 'subway' && disk.inventory.find(el => el.itemId === 'token')) {
              console.log('Fast Traveling...');
              let fastTravelLoc = marker.getLatLng();
              disk.rooms.forEach((fastEle) => {
                if (fastEle.coord !== undefined) {
                  //console.log(fastEle.coord[0] + ', ' + fastEle.coord[1]);
                  //console.log(fastTravelLoc);
                  if ((fastEle.coord[0] === fastTravelLoc.lat) && (fastEle.coord[1] === fastTravelLoc.lng)) {
                    console.log(fastTravelLoc)
                    console.log(fastEle.coord);
                    enterRoom(fastEle.id);
                    playerMarker.unbindPopup();
                    playerMarker.setLatLng(disk.currPos).bindPopup(fastEle.name, {className: 'popup'}).openPopup().update();
                    console.log("YOU HAVE ARRIVED");
                  }
                }

                
              })


            } else {
              console.log("You can't fast travel here!");
            }
          })
        }
      }

      //POI Markers
      poiIDArr.forEach((poi) => {
        if (poi === element.id) {
          //console.log(element.id);
          let marker = L.marker([element.coord[0], element.coord[1]], {icon: poiIcon}).addTo(poiLayer);
          marker.bindPopup("???", {className: 'popup'});
        }
      })
    }
  } else {
    console.log('NO COORDINATES EXIST IN THESE ROOMS');
  }
});

//enable popups on click for all markers
$('.popup').on('click', function(e) {
  e.openPopup();
})

//Phone Booth Marker Function
//Will move this so that it runs later
console.log(subwayLayer)



//Player Marker Movement
let centerOnPlayer = () => {
  map.flyTo(playerMarker.getLatLng());
}

let setPlayerMarker = (e) => {
  const ENTER = 13;
  if (e.keyCode === ENTER) {

      if (disk.currPos !== undefined) {
        let room = getRoom(disk.roomId);
        if (disk.roomId !== 'subway') {
          playerMarker.setLatLng(disk.currPos).bindPopup(room.name, {offset: L.point(-46, 5), className: 'popup'}).openPopup().update();
        }
        //centerOnPlayer();
        playerMarker.on('click', function(e) {
          playerMarker.unbindPopup();
          playerMarker.bindPopup(room.name, {className: 'popup'}).openPopup();
        });
        //playerMarker.getPopup().setContent(room.name).openPopup().update();
        console.log('Current Position: ' + disk.currPos);
        console.log('Name of Intersection: ' + room.name);
      } else if (disk.currPos === undefined) {
        console.log('There are no coordinates here, please find some.');
      } 
      else {
        console.log('Something broke!!! Let your worldbuilder/programmer know!')
      }
  }
}


input.addEventListener('keypress', setPlayerMarker);


