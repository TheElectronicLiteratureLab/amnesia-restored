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

//Custom map of Manhattan
 let map = L.map('map-man', {
    center:[0, 0],
    zoom: 4,
    layers: [playerLayer],
    attributionControl: false,
    zoomControl: false
  });
map.invalidateSize(); //this allows for resizing within other divs
setTimeout(function(){ map.invalidateSize(true)}, 100); //this is just in case player tries to resize again and takes care of edge cases

//Link the tiles and the file directory template
L.tileLayer('map/{z}/{x}/{y}.png', {
  continuousWorld: false,
  noWrap: true,	
  minZoom: 3,
  maxZoom: 6,
}).addTo(map);

/*
///Coordinate Finder Tool
var marker = L.marker([0, 0], {draggable: true,}).addTo(map);
marker.bindPopup('LatLng Marker').openPopup();
marker.on('drag', function(e) {
  marker.getPopup().setContent("Lat, Lng[" + marker.getLatLng().lat.toFixed(3).toString() + ", " + marker.getLatLng().lng.toFixed(3).toString() + "]").openOn(map);
  
  /// This allows for coordinates to be directly formated and copied to clipboard
  marker.on('dragend', function(e) {
    navigator.clipboard.writeText(marker.getLatLng().lat.toFixed(3) + ', ' + marker.getLatLng().lng.toFixed(3));
})
});


//Layer Groups
let subwayLayer = L.layerGroup();
let phoneLayer = L.layerGroup();
let poiLayer = L.layerGroup();
let sleepLayer = L.layerGroup(); 

//Object that controls the different layer groups
let overlays = {
  "Subway": subwayLayer,
  "Phone Booths": phoneLayer,
  "Food": foodLayer,
  "Sleep": sleepLayer,
  "Story": poiLayer
}

L.control.layers(null, overlays, {collapsed: false, position: 'bottomleft'}).addTo(map);
L.control.zoom({position: 'bottomright'}).addTo(map);


//******Main Marker Creation Here*******//
///ICONS

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

//Story Marker
let storyMarker = L.marker([15.390, -6.546], {icon: poiIcon, className: "popup"})
storyMarker.bindPopup("???"); //Placeholder, will be set once called in game.
storyMarker.on("click", function() {
  storyMarker.openPopup();
});


//Creating a regular expression to extract Subway Station name [98 Stations!]
let subwayRegEx = / (.* Station) /;
//Creating a regular expression to extract restaruant name from "disk"
let foodRegEx = /luncheonette|Nedick's|pizzeria|Greek Gyro|Chock Full-O-Nuts/;

//Markers for POI Story Nodes, then run a forEach similarly like above in order to create markers. This is done by feeding an array containing ids of the rooms we want.
//I realized I'm making it more complicated, I just need one marker that I can move around...

//This isn't used and will be eventually removed
//[Princeton, Sunderland, Computer Store, Ann's House, Historical Society, Sketchpad, Bettes Apartment', The Dakota, Back to Bette's, Alison's Deathbed (dakota the 2nd), Epilogue]
let poiIDArr = ['43-5', '53-5', '56-madi', '19-amer', '76-cpkw', 'wasq-park', '20-irvi', '72-cpkw', '20-irvi', '73-colu'];
//let storyMarkers = [];

//This block is checking the entire "disk" for boolean values for food and subway.
disk.rooms.forEach((element)=>{
  if (element.coord !== undefined) {
    if (element.coord[0] !== undefined && element.coord[1] !== undefined) {
      
      //Food Markers
      if (element.hasFood === true) {
        let marker = L.marker([element.coord[0],element.coord[1]], {icon: foodIcon}).addTo(foodLayer);
        //marker.bindPopup(element.name, {className: 'popup'});
        let foodMatch = foodRegEx.exec(element.desc);
        let str = foodMatch[0];
        //Capitlize the first name of each food area.
        let restName = str.charAt(0).toUpperCase() + str.slice(1);
        marker.bindPopup(restName, {className: 'popup'});
      }

      //Subway Markers
      if (element.hasSubway === true) {
        //matches the desc to grab the exact the station name and places it in the popup.
        const match = subwayRegEx.exec(element.desc); 
        if (match) {
          let subName = match[1];
          ////console.log(subName)
          //setting up fast travel functionality
          let marker = L.marker([element.coord[0], element.coord[1]], {icon: subwayIcon}).addTo(subwayLayer);
          marker.bindPopup(subName, {className: 'popup'});
          marker.on('click', function(e) {
            if (disk.roomId === 'subway' && disk.inventory.find(el => el.itemId === 'token')) {
              //console.log('Fast Traveling...');
              let fastTravelLoc = marker.getLatLng();
              disk.rooms.forEach((fastEle) => {
                if (fastEle.coord !== undefined) {
                  ////console.log(fastEle.coord[0] + ', ' + fastEle.coord[1]);
                  ////console.log(fastTravelLoc);
                  if ((fastEle.coord[0] === fastTravelLoc.lat) && (fastEle.coord[1] === fastTravelLoc.lng)) {
                    ////console.log(fastTravelLoc)
                    ////console.log(fastEle.coord);
                    enterRoom(fastEle.id);
                    playerMarker.unbindPopup();
                    playerMarker.setLatLng(disk.currPos).bindPopup(fastEle.name, {className: 'popup'}).openPopup().update();
                    let tokenItem = disk.inventory.findIndex(el => el.itemId === 'token');
                    disk.inventory.splice(tokenItem, 1);
                    //console.log("YOU HAVE ARRIVED");
                  }
                }                
              })
            } else {
              //console.log("You can't fast travel here!");
            }
          })
        }
      }
      //.addTo(poiLayer)
      //POI Story Markers
/*      poiIDArr.forEach((poi) => {
        if (poi === element.id) {
          storyMarkers[poi] = L.marker([element.coord[0], element.coord[1]], {icon: poiIcon});
          storyMarkers[poi].bindPopup("???", {className: 'popup'});
        }
      })*/
    }
  } else {
    //console.log('NO COORDINATES EXIST IN THESE ROOMS');
  }
});


//enable popups on click for all markers
$('.popup').on('click', function(e) {
  e.openPopup();
})

let setPlayerMarker = (e) => {
  const ENTER = 13;
  if (e.keyCode === ENTER) {
      if (disk.currPos !== undefined) {
        let room = getRoom(disk.roomId);

        if (disk.roomId !== 'subway') {
          playerMarker.setLatLng(disk.currPos).bindPopup(room.name, {offset: L.point(-46, 5), className: 'popup'}).openPopup().update();
          return;
        } 
        
        playerMarker.on('click', function(e) {
          playerMarker.unbindPopup();
          playerMarker.bindPopup(room.name, {className: 'popup'}).openPopup();
        });

        //playerMarker.getPopup().setContent(room.name).openPopup().update();
        //console.log('Current Position: ' + disk.currPos);
        //console.log('Name of Intersection: ' + room.name);
      } else if (disk.currPos === undefined) {
        //console.log('There are no coordinates here, please find some.');
      } 
      else {
        //console.log('Something broke!!! Let your worldbuilder/programmer know!')
      }
  }
}

input.addEventListener('keypress', setPlayerMarker);


