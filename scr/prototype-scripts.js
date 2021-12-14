/*

// adding alert to refreshing page
window.addEventListener('beforeunload', function (e) {
    // Cancel the event
    e.preventDefault(); // If you prevent default behavior in Mozilla Firefox prompt will always be shown
    // Chrome requires returnValue to be set
    e.returnValue = '';
  });

  */


// preload icon images to prevent any flickering
(function () {
	var preload = ["./img/png/icon-achieve-purple.png", "./img/png/icon-achieve-red.png", "./img/png/icon-address-purple.png", "./img/png/icon-address-red.png", "./img/png/icon-help-purple.png", "./img/png/icon-help-red.png", "./img/png/icon-info-purple.png", "./img/png/icon-info-red.png", "./img/png/icon-inventory-purple.png", "./img/png/icon-inventory-red.png", "./img/png/icon-map-purple.png", "./img/png/icon-map-red.png", "./img/png/icon-mode-purple.png", "./img/png/icon-mode-red.png", "./img/png/icon-save-purple.png", "./img/png/icon-save-red.png", "./img/png/icon-achieve-apple.png", "./img/png/icon-achieve-appleover.png", "./img/png/icon-address-apple.png", "./img/png/icon-address-appleover.png", "./img/png/icon-help-apple.png", "./img/png/icon-help-appleover.png", "./img/png/icon-info-apple.png", "./img/png/icon-info-appleover.png", "./img/png/icon-inventory-apple.png", "./img/png/icon-inventory-appleover.png", "./img/png/icon-map-apple.png", "./img/png/icon-map-appleover.png", "./img/png/icon-mode-apple.png", "./img/png/icon-mode-appleover.png", "./img/png/icon-save-apple.png", "./img/png/icon-save-appleover.png", "./img/png/icon-achieve-c64.png", "./img/png/icon-achieve-c64over.png", "./img/png/icon-address-c64.png", "./img/png/icon-address-c64over.png", "./img/png/icon-help-c64.png", "./img/png/icon-help-c64over.png", "./img/png/icon-info-c64.png", "./img/png/icon-info-c64over.png", "./img/png/icon-map-c64.png", "./img/png/icon-map-c64over.png", "./img/png/icon-mode-c64.png", "./img/png/icon-mode-c64over.png", "./img/png/icon-save-c64.png", "./img/png/icon-save-c64over.png", "./img/png/icon-achieve-IBM.png", "./img/png/icon-achieve-IBMover.png", "./img/png/icon-address-IBM.png", "./img/png/icon-address-IBMover.png", "./img/png/icon-help-IBM.png", "./img/png/icon-help-IBMover.png", "./img/png/icon-info-IBM.png", "./img/png/icon-info-IBMover.png", "./img/png/icon-inventory-IBM.png", "./img/png/icon-inventory-IBMover.png", "./img/png/icon-map-IBM.png", "./img/png/icon-map-IBMover.png", "./img/png/icon-mode-ibm.png", "./img/png/icon-mode-IBMover.png", "./img/png/icon-save-IBM.png", "./img/png/icon-save-IBMover.png"];

	window._ImageCache = preload.map(function (url) {
		var image = document.createElement('img');
		image.src = url;
		return image;
	});
})();


$(document).ready(function(){

    //jQuery to toggle on and off the command options
    $("#noAgruCommand").click(function(){
        
      $("#noAgruList").slideToggle("slow", changeCaretNo());
    });

    $("#oneAgruCommand").click(function(){
        $("#oneAgruList").slideToggle("slow", changeCaretOne());
    });

    $("#twoAgruCommand").click(function(){
        $("#twoAgruList").slideToggle("slow", changeCaretTwo());
    });
    
});

let changeCaretNo = () => {
    let x = document.getElementById("noAgruList").style.display;
    let arrow = document.getElementById("arrowIndicateNo");
    if(!x || x === "none"){
        arrow.innerHTML = "&#8744;"
    } else {
        arrow.innerHTML = "&#62;"
    }
}
let changeCaretOne = () => {
    let x = document.getElementById("oneAgruList").style.display;
    let arrow = document.getElementById("arrowIndicateOne");
    if(!x || x === "none"){
        arrow.innerHTML = "&#8744;"
    } else {
        arrow.innerHTML = "&#62;"
    }
}
let changeCaretTwo = () => {
    let x = document.getElementById("twoAgruList").style.display;
    let arrow = document.getElementById("arrowIndicateTwo");
    if(!x || x === "none"){
        arrow.innerHTML = "&#8744;"
    } else {
        arrow.innerHTML = "&#62;"
    }
}

// global variables 

let difficultyChoice = "modern";
let styling = "restored";
// the number array that gets referenced when the player uses the phone, as well as reference to display numbers visually
let numbers = [
    {number:'3', roomid:'phone-1', contactName: 'Front Desk'},
    {number:'4', roomid:'phone-2', contactName: 'Room Service'},
    {number:'5', roomid:'phone-3', contactName: 'Valet'},
    {number:'6', roomid:'phone-4', contactName: 'Bellman'},
    {number:'7', roomid:'phone-5', contactName: 'Security'},
    {number:'8', roomid:'phone-6', contactName: 'Other Rooms'},
    {number:'911', roomid:'phone-8', contactName: 'Emergency'}
];

// all of the descriptions of the difficulty levels and the visual style choices
let storyDesc = `Relax and enjoy the story. Fast travel from any position once you reach Manhattan.`;
let modernDesc = `This is how the game should be played, a small challenge to solve the mystery of who you are. Fast travel is only at subway entrances.`;
let classicDesc = `Based on the original game's difficulty. Play this if you want to feel a bit nostalgic and want a challenge. Not for the faint of heart or mind.`;
let restoredDesc = `A contemporary visual experience with a modern interface.`;
let appleDesc = `Published in 1986 for the Apple //e, this mode gives the classic visual experience with a modern interface.`; 
let commDesc = `Released in 1987 for the Commodore 64, this mode gives the Commodore 64 visual experience with a modern interface.`;
let IBMDesc = `Published in 1986 for IBM PC compatibles, this mode gives the IBM PC visual experience with a modern interface.`;


// button scripts
let newGame = () => {
    document.getElementById("game-title").style.display = "none";
    document.getElementById("game-options").style.display = "grid";
}
let loadGame = () => {
    document.getElementById("game-title").style.display = "none";
    document.getElementById("game-load").style.display = "grid";

    if (localStorage.length === 1) {
        document.getElementById("saveSlot1").innerHTML = localStorage.key(0);
    } else if (localStorage.length === 2) {
        document.getElementById("saveSlot1").innerHTML = localStorage.key(1);
        document.getElementById("saveSlot2").innerHTML = localStorage.key(0);
    } else if (localStorage.length === 3) {
        document.getElementById("saveSlot1").innerHTML = localStorage.key(2);
        document.getElementById("saveSlot2").innerHTML = localStorage.key(1);
        document.getElementById("saveSlot3").innerHTML = localStorage.key(0);  
    }

    //other data we would like for each save slot
}
// back button on load screen
let mainScreen = () => {
    document.getElementById("game-title").style.display = "grid";
    document.getElementById("game-load").style.display = "none";
}
// function iterates through the array to find which value the player has clicked on and sets that value to the difficulty variable
let displayDesc = (id) => {
    // styling variables for chosen mode
    let tD = "underline";
    let tDC = "red";
    let tDT = "2px";
    let tUO = ".5em";
    let storyMode = document.getElementById("story");
    let modernMode = document.getElementById("modern");
    let classicMode = document.getElementById("classic");
    // iterates through array to display description and set difficulty variable
    let x = document.getElementById("difficulty-options-descriptions");
    let y = [
        ["story", storyDesc, difficultyLevels[0]],
        ["modern", modernDesc, difficultyLevels[1]],
        ["classic", classicDesc, difficultyLevels[2]],
    ]
    let z;
    let a;
    let i;
    for(i = 0; i < y.length; i++){
        if(id === y[i][0]){
            z = y[i][1];
            a = y[i][2];
        }
    }
    x.innerHTML = z;
    difficulty = a;
    console.log(difficulty);
    // toggles on and off visual of chosen difficulty
    if(id === "story"){
        storyMode.style.textDecoration = tD;
        storyMode.style.textDecorationColor = tDC;
        storyMode.style.textDecorationThickness = tDT;
        storyMode.style.textUnderlineOffset = tUO;
        // remove other stylings
        modernMode.style.removeProperty("text-decoration");
        classicMode.style.removeProperty("text-decoration");
    } else if(id === "modern"){
        modernMode.style.textDecoration = tD;
        modernMode.style.textDecorationColor = tDC;
        modernMode.style.textDecorationThickness = tDT;
        modernMode.style.textUnderlineOffset = tUO;
        // remove other stylings
        storyMode.style.removeProperty("text-decoration");
        classicMode.style.removeProperty("text-decoration");
    } else {
        classicMode.style.textDecoration = tD;
        classicMode.style.textDecorationColor = tDC;
        classicMode.style.textDecorationThickness = tDT;
        classicMode.style.textUnderlineOffset = tUO;
        // remove other stylings
        storyMode.style.removeProperty("text-decoration");
        modernMode.style.removeProperty("text-decoration");
    }
}
// function iterates through the array to find which value the players has clicked on and sets that value to the visual mode variable called styling
let visualDesc = (id) => {
    // text-decoration: underline;
    // text-decoration-color: red;
    // text-decoration-thickness: 2px;
    // text-underline-offset: .5em;
    // styling variables for chosen mode
    let tD = "underline";
    let tDC = "red";
    let tDT = "2px";
    let tUO = ".5em";
    let restoredMode = document.getElementById("restored");
    let appleMode = document.getElementById("apple");
    let commMode = document.getElementById("commodore");
    let IBMMode = document.getElementById("IBM");
    // iterating through array to display description and set visual mode to variable
    let a = document.getElementById("visual-mode-options-descriptions");
    let b = [
        ["restored", restoredDesc, 'restored'],
        ["apple", appleDesc, 'apple'],
        ["commodore", commDesc, 'commodore'],
        ["IBM", IBMDesc, 'IBM']
    ]
    let c;
    let d;
    let i;
    for(i = 0; i < b.length; i++){
        if(id === b[i][0]){
            c = b[i][1];
            d = b[i][2];
        }
    }
    a.innerHTML = c;
    styling = d;
    console.log(styling);
    // toggling styling if chosen
    if(id === "restored"){
        restoredMode.style.textDecoration = tD;
        restoredMode.style.textDecorationColor = tDC;
        restoredMode.style.textDecorationThickness = tDT;
        restoredMode.style.textUnderlineOffset = tUO;
        // remove other stylings
        appleMode.style.removeProperty("text-decoration");
        commMode.style.removeProperty("text-decoration");
        IBMMode.style.removeProperty("text-decoration");
    } else if (id === "apple") {
        appleMode.style.textDecoration = tD;
        appleMode.style.textDecorationColor = tDC;
        appleMode.style.textDecorationThickness = tDT;
        appleMode.style.textUnderlineOffset = tUO;
        // remove other stylings
        restoredMode.style.removeProperty("text-decoration");
        commMode.style.removeProperty("text-decoration");
        IBMMode.style.removeProperty("text-decoration");
    } else if (id === "commodore"){
        commMode.style.textDecoration = tD;
        commMode.style.textDecorationColor = tDC;
        commMode.style.textDecorationThickness = tDT;
        commMode.style.textUnderlineOffset = tUO;
        // remove other stylings
        restoredMode.style.removeProperty("text-decoration");
        appleMode.style.removeProperty("text-decoration");
        IBMMode.style.removeProperty("text-decoration");
    } else {
        IBMMode.style.textDecoration = tD;
        IBMMode.style.textDecorationColor = tDC;
        IBMMode.style.textDecorationThickness = tDT;
        IBMMode.style.textUnderlineOffset = tUO;
        // remove other stylings
        restoredMode.style.removeProperty("text-decoration");
        appleMode.style.removeProperty("text-decoration");
        commMode.style.removeProperty("text-decoration");
    } 

    //displaying style
    if(styling === 'restored'){
        document.getElementById("modeStyles").href = "";
    } else if(styling === 'apple'){
        document.getElementById("modeStyles").href = "css/appleiie.css";
    } else if(styling === 'commodore'){
        document.getElementById("modeStyles").href = "css/c64.css";
    } else {
        document.getElementById("modeStyles").href = "css/ibm.css";
    }
}

let beginGame = () => {
    document.getElementById("game-options").style.display = "none";
    document.getElementById("game-load").style.display = "none";
    document.getElementById("game").style.display = "grid";
}

// changing the mode styling through radio buttons

let changeMode = (mode) => {
    console.log("its a meee a mode change.")
    let x = document.getElementById("modeStyles");
    if(mode === 'restored'){
        x.href = "";
        styling = 'restored';
    } else if(mode === 'apple'){
        x.href = "css/appleiie.css";
        styling = 'apple';
    } else if(mode === 'c64'){
        x.href = "css/c64.css";
        styling = 'commodore';
    } else {
        x.href = "css/ibm.css";
        styling = "IBM";
    }
    
}

// clickables scripts

// when the inv button is pressed, if NOT displayed apply input command inv and run a check to see if any of the other visual display elements are on ELSE if displayed, slide out of view. 
let currentInv = () => {
    let invDisplay = document.getElementById("inventory-display");
    if(!invDisplay.style.display || invDisplay.style.display === "none"){
        applyInput("inv");
        displayCheck("inventory")
        invOn = true;
    } else {
        slideLeftOut("inventory-display", "inventory-text-container");
        document.getElementById("inventory-item-display").style.display = "none";
        document.getElementById("inventory-xIndex-display").style.display = "none";
        document.getElementById("inventory-brochure-display").style.display = "none";
        document.getElementById("brochure-full-display").style.display = "none";
        document.querySelector("input").disabled = false;
        invOn = false;
    }
}

// runs a function to pull the updated address book numbers and clear out the old list
let currentAdd = (id) => {
    let x = document.getElementById(id);
    x.innerHTML = '';

    let num = numbers;
    // calls the div holding the numbers
    let list = x;
    // create a new div to hold the number
    let newNumber = document.createElement('div');
    // add a class to the divs
    newNumber.setAttribute("class", "listedNum");
    // create a new h3 element for contact name
    let newConName = document.createElement('h3');
    // create a new h4 element for number 
    let newNum = document.createElement('h4');

    num.forEach(e => {
        let name = e.contactName;
        let phoneNum = e.number;
    
        displayNum(name, phoneNum);
    })
}
// function displays the numbers in the address book display
let displayNum = (contact, number) => {
    // call display
    let listings = document.getElementById("addresses");
    // create a div to hold listing
    let newListing = document.createElement('div');
    // add class to the divs
    newListing.setAttribute("class", "listedNum");
    // create an h3 el for contact name
    let newCon = document.createElement('h3');
    // create an h4 el for contact number
    let newNum = document.createElement('h4');

    // append the divs to the display
    listings.appendChild(newListing);
    newListing.appendChild(newCon).innerHTML = contact;
    newListing.appendChild(newNum).innerHTML = number;
}


// variables to check whether displays are on or off. on = true, off = false
let invOn = false;
let addOn = false;
let mapOn = false;
let infoOn = false;
let modeOn = false;
let achieveOn = false;
let helpOn = false;
let dialOn = false;

// when the player presses the sidebar btns toggle on and off, when displays are open inputs are disabled except the command guide.

// this is the display toggling for the address book and the infomation display
let displayLeftToggle = (id, name, text) => {
   let x = document.getElementById(id);
   // run check to see if any other displays are on and turn them off before displaying
   displayCheck(name);
   // check if display is none, if true slide in display, if false slide out display
   if(!x.style.display || x.style.display === "none"){
       // add check to see if btn is address book to keep input enabled
       if(id === "address-display"){
        slideLeftIn(id, text);
        addOn = true;
       } else {
        slideLeftIn(id, text);
        document.querySelector('input').disabled = true;
        infoOn = true;
       }
   } else {
        slideLeftOut(id, text);
        if(name === "address"){
            addOn = false;
        } else {
            infoOn = false;
        }
        document.querySelector('input').disabled = false;
        document.querySelector('input').focus();
   }
}

let turnOnMap = () => {
    let x = document.getElementById("map-display");
    displayCheck("map");
    //console.log(x.style.display);
    if(!x.style.display || x.style.display === "none"){
        fadeOn("map-display");
        map.invalidateSize();
        mapOn = true;
    } else {
        fadeOff("map-display");
        mapOn = false;
    }
    
}

/*
// this is the display toggling for the map
let displayMapToggle = (id, name) => {
    let x = document.getElementById(id);
    // run check to see if any other displays are on and turn them off before displaying
    displayCheck(name);
    // check if display is none, if true slide in display, if false slide out display
    if(!x.style.display || x.style.display === "none"){
        //slideMapDown(id);
        //fadeOn(id);
        console.log("turn on")
    } else {
         
         document.querySelector('input').disabled = false;
         document.querySelector('input').focus();
    }
} */

// this is the display toggling for the visual mode, achievements, and the command guide
let displayRightToggle = (id, name, text) => {
    let x = document.getElementById(id);
    // run check to see if any other displays are on and turn them off before displaying
    displayCheck(name);
    // check if display is nnone, if true slide in display, if false slide out display
    if(!x.style.display || x.style.display === "none"){
        // checks to see if the btn is the help btn to allow input still, else input disabled
        if(id === "help-display"){
            slideRightIn(id, text);
            helpOn = true;
        } else {
            slideRightIn(id, text);
            document.querySelector('input').disabled = true;
            if(name === "mode"){
                modeOn = true;
            } else {
                achieveOn = true;
            }
        }
    } else {
        slideRightOut(id, text);
        if(name === "mode"){
            modeOn = false;
        } else if(name === achieve){
            achieveOn = false;
        } else {
            helpOn = false;
        }
        document.querySelector('input').disabled = false;
        document.querySelector('input').focus();
    }
}

/*
let displayLeftToggle = (id, name, text) => {
    let x = document.getElementById(id);
    // run check to see if any other displays are on and turn them off before displaying
    displayCheck(id, name);
    // check if display is none, if true slide in display, if false slide out display
    if(!x.style.display || x.style.display === "none"){
        if(id === "help-display"){
             document.getElementById("help-display").style.display = "block";
        } else if (id === "map-display"){
             document.getElementById("map-display").style.display = "block";
        } else {
         slideLeftIn(id, text);
          //fadeOn(id);
         //slideToggle(id);
         //x.style.display = "block";
         document.querySelector('input').disabled = true;
        }
    } else {
        slideLeftOut(id, text);
         //fadeOff(id);
         //x.style.display = "none";
         //slideToggle(id);
         document.querySelector('input').disabled = false;
         document.querySelector('input').focus();
    }
 }
 */

// running a check to see if a display is open and if it is turn variable true and check which other variable is true and turn false
let displayCheck = (name) => {
    if(name === 'inventory'){
        if(addOn === true){
            document.getElementById("address-display").style.display = "none";
            addOn = false;
        } 
        if(mapOn === true){
            //document.getElementById("map-display").style.display = "none";
            fadeOff("map-display");
            mapOn = false;
        }
        if(infoOn === true){
            document.getElementById("info-display").style.display = "none";
            infoOn = false;
        }
        if(modeOn === true){
            document.getElementById("mode-display").style.display = "none";
            modeOn = false;
        }
        if(achieveOn === true){
            document.getElementById("achieve-display").style.display = "none";
            achieveOn = false;
        }
        if(helpOn === true){
            document.getElementById("help-display").style.display = "none";
            helpOn = false;
        }
        if(dialOn === true){
            applyInput('dialing');
            dialOn = false;
        }
    }

    if(name === "address"){
        if(invOn === true){
            document.getElementById("inventory-display").style.display = "none";
            document.getElementById("inventory-xIndex-display").style.display = "none";
            document.getElementById("inventory-item-display").style.display = "none";
            document.getElementById("inventory-brochure-display").style.display = "none";
            document.getElementById("brochure-full-display").style.display = "none";
            invOn = false;
        }
        if(mapOn === true){
            //document.getElementById("map-display").style.display = "none";
            fadeOff("map-display");
            mapOn = false;
        }
        if(infoOn === true){
            document.getElementById("info-display").style.display = "none";
            infoOn = false;
        }
        if(modeOn === true){
           document.getElementById("mode-display").style.display = "none";
            modeOn = false;
        }
        if(achieveOn === true){
            document.getElementById("achieve-display").style.display = "none";
            achieveOn = false;
        }
        if(helpOn === true){
            document.getElementById("help-display").style.display = "none";
            helpOn = false;
        }
    }

    if(name === "map"){
        setTimeout(function(){ map.invalidateSize()}, 50);
        //map.panTo(playerMarker.getLatLng());
        if(invOn === true){
            document.getElementById("inventory-display").style.display = "none";
            document.getElementById("inventory-xIndex-display").style.display = "none";
            document.getElementById("inventory-item-display").style.display = "none";
            document.getElementById("inventory-brochure-display").style.display = "none";
            document.getElementById("brochure-full-display").style.display = "none";
            invOn = false;
        }
        if(addOn === true){
            document.getElementById("address-display").style.display = "none";
            addOn = false;
        } 
        if(infoOn === true){
            document.getElementById("info-display").style.display = "none";
            infoOn = false;
        }
        if(modeOn === true){
            document.getElementById("mode-display").style.display = "none";
            modeOn = false;
        }
        if(achieveOn === true){
            document.getElementById("achieve-display").style.display = "none";
            achieveOn = false;
        }
        if(helpOn === true){
            document.getElementById("help-display").style.display = "none";
            helpOn = false;
        }
        if(dialOn === true){
            applyInput('dialing');
            dialOn = false;
        }
    }

    if(name === "info"){
        if(invOn === true){
            document.getElementById("inventory-display").style.display = "none";
            document.getElementById("inventory-xIndex-display").style.display = "none";
            document.getElementById("inventory-item-display").style.display = "none";
            document.getElementById("inventory-brochure-display").style.display = "none";
            document.getElementById("brochure-full-display").style.display = "none";
            invOn = false;
        }
        if(addOn === true){
            document.getElementById("address-display").style.display = "none";
            addOn = false;
        } 
        if(mapOn === true){
            //document.getElementById("map-display").style.display = "none";
            fadeOff("map-display");
            mapOn = false;
        }
        if(modeOn === true){
            document.getElementById("mode-display").style.display = "none";
            modeOn = false;
        }
        if(achieveOn === true){
            document.getElementById("achieve-display").style.display = "none";
            achieveOn = false;
        }
        if(helpOn === true){
            document.getElementById("help-display").style.display = "none";
            helpOn = false;
        }
        if(dialOn === true){
            applyInput('dialing');
            dialOn = false;
        }
    }

    if(name === "mode"){
        if(invOn === true){
            document.getElementById("inventory-display").style.display = "none";
            document.getElementById("inventory-xIndex-display").style.display = "none";
            document.getElementById("inventory-item-display").style.display = "none";
            document.getElementById("inventory-brochure-display").style.display = "none";
            document.getElementById("brochure-full-display").style.display = "none";
            invOn = false;
        }
        if(addOn === true){
            document.getElementById("address-display").style.display = "none";
            addOn = false;
        } 
        if(mapOn === true){
            //document.getElementById("map-display").style.display = "none";
            fadeOff("map-display");
            mapOn = false;
        }
        if(infoOn === true){
            document.getElementById("info-display").style.display = "none";
            infoOn = false;
        }
        if(achieveOn === true){
            document.getElementById("achieve-display").style.display = "none";
            achieveOn = false;
        }
        if(helpOn === true){
            document.getElementById("help-display").style.display = "none";
            helpOn = false;
        }
        if(dialOn === true){
            applyInput('dialing');
            dialOn = false;
        }
    }

    if(name === "achieve"){
        if(invOn === true){
            document.getElementById("inventory-display").style.display = "none";
            document.getElementById("inventory-xIndex-display").style.display = "none";
            document.getElementById("inventory-item-display").style.display = "none";
            document.getElementById("inventory-brochure-display").style.display = "none";
            document.getElementById("brochure-full-display").style.display = "none";
            invOn = false;
        }
        if(addOn === true){
            document.getElementById("address-display").style.display = "none";
            addOn = false;
        } 
        if(mapOn === true){
            //document.getElementById("map-display").style.display = "none";
            fadeOff("map-display");
            mapOn = false;
        }
        if(infoOn === true){
            document.getElementById("info-display").style.display = "none";
            infoOn = false;
        }
        if(modeOn === true){
            document.getElementById("mode-display").style.display = "none";
            modeOn = false;
        }
        if(helpOn === true){
            document.getElementById("help-display").style.display = "none";
            helpOn = false;
        }
        if(dialOn === true){
            applyInput('dialing');
            dialOn = false;
        }
    }

    if(name === "help"){
        if(invOn === true){
            document.getElementById("inventory-display").style.display = "none";
            document.getElementById("inventory-xIndex-display").style.display = "none";
            document.getElementById("inventory-item-display").style.display = "none";
            document.getElementById("inventory-brochure-display").style.display = "none";
            document.getElementById("brochure-full-display").style.display = "none";
            invOn = false;
        }
        if(addOn === true){
            document.getElementById("address-display").style.display = "none";
            addOn = false;
        } 
        if(mapOn === true){
            //document.getElementById("map-display").style.display = "none";
            fadeOff("map-display");
            mapOn = false;
        }
        if(infoOn === true){
            document.getElementById("info-display").style.display = "none";
            infoOn = false;
        }
        if(modeOn === true){
            document.getElementById("mode-display").style.display = "none";
            modeOn = false;
        }
        if(achieveOn === true){
            document.getElementById("achieve-display").style.display = "none";
            achieveOn = false;
        }
        if(dialOn === true){
            applyInput('dialing');
            dialOn = false;
        }
    }

    
}

/*
let displayNone = (id, textId) => {
    slideLeftOut(id, textId);
    document.getElementById("inventory-item-display").style.display = "none";
    document.getElementById("inventory-xIndex-display").style.display = "none";
    document.querySelector('input').disabled = false;
    document.querySelector('input').focus();
   
} */

// run when players click on items in inventory
let openItem = (id, name) => {
    // if items are not the xindexer
    if(name !== 'xindexer'){

        slideInvItems(id);
        document.getElementById("inventory-xIndex-display").style.display = "none";
        document.getElementById("inventory-brochure-display").style.display = "none";
        document.getElementById("brochure-full-display").style.display = "none";
        //document.getElementById(id).style.display = "grid";
        //slideInvItems(id, textId);
    
        let inv = disk.inventory;
        inv.forEach(e => {
            if(e.itemId === name){
                document.getElementById("item-name").innerHTML = e.name[0];
                document.getElementById("item-img").src = e.gif;
                printInvDesc(e.desc);
            }
        })
    } 

    if(name === 'brochure'){
        slideBro(id);
        document.getElementById("inventory-item-display").style.display = "none";
        document.getElementById("inventory-xIndex-display").style.display = "none";
        document.getElementById("brochure-full-display").style.display = "none";
    }

    // if item is the xindexer
    if(name === 'xindexer'){
        slideInvX("inventory-xIndex-display", "xIndex-container");
        //document.getElementById("inventory-xIndex-display").style.display = "block";
        document.getElementById("inventory-item-display").style.display = "none";
        document.getElementById("inventory-brochure-display").style.display = "none";
        document.getElementById("brochure-full-display").style.display = "none";
    }
}

// status bars and on screen variable changes (such as scoring)

// the hunger status bar
// variables to check the progress of the bar 
let increasingHung = false;
let decreasingHung = false;

// function to be called whenever hunger is changed, it then updates the visual of the bars
let updateHung = (x) => {
    // converts values into integers
    const xPlayHung = parseInt(playHung);
    const xPrevHung = parseInt(prevHung);
    // checking whether the previous hunger is higher or lower than the current hunger and setting variable true
    if(xPlayHung > xPrevHung){
        increasingHung = true;
    } else if(xPlayHung < xPrevHung){
        decreasingHung = true;
    } else {
        console.log("updateHung" + " if statements not working");
    }
    // update progress bar to show the new player hunger
    // increasing bar
    if(increasingHung === true){
        let width = x;
        let i = 0;
        if(i === 0){
            i = 1;
            let el = document.getElementById("hunger-bar");
            let startWidth = xPrevHung;
            let progress = setInterval(update, 100);
            function update(){
                if(startWidth >= width){
                    clearInterval(progress);
                    i = 0;
                } else {
                    startWidth++;
                    el.style.width = startWidth + "%";
                }
            }
        }
        increasingHung = false;
    } else if(decreasingHung === true){ // decreasing bar
        let width = x;
        let i = 0;
        if(i === 0){
            i = 1;
            let el = document.getElementById("hunger-bar");
            let startWidth = xPrevHung;
            let progress = setInterval(update, 100);
            function update(){
                if(startWidth <= width){
                    clearInterval(progress);
                    i = 0;
                } else {
                    startWidth--;
                    el.style.width = startWidth + "%";
                }
            }
        }
        decreasingHung = false;
    }
    // checking to see if the hunger is beneath 40 the color of the bar changes to red
    if(xPlayHung <= 40){
        document.getElementById('hunger-bar').style.background = "transparent linear-gradient(270deg, #df3333 0%, #7c180b 100%) 0% 0% no-repeat padding-box";
    } else {
        document.getElementById('hunger-bar').style.background = "transparent linear-gradient(270deg, #9C4FEC 0%, #4E2876 100%) 0% 0% no-repeat padding-box";
    }
}

// the fatigue status bar
// variables to check the progress of the bar
let increasingFat = false;
let decreasingFat = false;

// function to be called whenever the players fatigue is changed
let updateFat = (x) => {
    // converts variables to intergers to run math checks
    const xPlayFat = parseInt(playFat);
    const xPrevFat = parseInt(prevFat);
    // determines whether the fatigue is lower or higher than the previous fatigue number 
    if(xPlayFat > xPrevFat){
        increasingFat = true;
    } else if(xPlayFat < xPrevFat){
        decreasingFat = true;
    } else {
        console.log("updateFat" + " if statements not working");
    }
    // increasing bar
    if(increasingFat === true){
        let width = x;
        let i = 0;
        if(i === 0){
            i = 1;
            let el = document.getElementById("fatigue-bar");
            let startWidth = xPrevFat;
            let progress = setInterval(update, 100);
            function update(){
                if(startWidth >= width){
                    clearInterval(progress);
                    i = 0;
                } else {
                    startWidth++;
                    el.style.width = startWidth + "%";
                }
            }
        }
        increasingFat = false;
    } else if(decreasingFat === true){ // decreasing bar
        let width = x;
        let i = 0;
        if(i === 0){
            i = 1;
            let el = document.getElementById("fatigue-bar");
            let startWidth = xPrevFat;
            let progress = setInterval(update, 100);
            function update(){
                if(startWidth <= width){
                    clearInterval(progress);
                    i = 0;
                } else {
                    startWidth--;
                    el.style.width = startWidth + "%";
                }
            }
        }
        decreasingFat = false;
    }
    // if the player fatigue is lower than 40 change the color style
    if(xPlayFat <= 40){
        document.getElementById('fatigue-bar').style.background = "transparent linear-gradient(270deg, #df3333 0%, #7c180b 100%) 0% 0% no-repeat padding-box";
    } else {
        document.getElementById('fatigue-bar').style.background = "transparent linear-gradient(270deg, #9C4FEC 0%, #4E2876 100%) 0% 0% no-repeat padding-box";
    }
}

const updateMon = () => {
    document.getElementById("money").innerHTML = `${formatter.format(playMon)}`;
}

const updateScore = () => {
    console.log("displaying score");
    document.getElementById("det-score").innerHTML = detScore;
    document.getElementById("sur-score").innerHTML = survScore;
    document.getElementById("char-score").innerHTML = charScore;
    document.getElementById("tote-score").innerHTML = totalScore;
    document.getElementById("difficulty-setting").innerHTML = difficultyChoice;
}

const updateEndings = () => {
    if(eterWith === true){
        document.getElementById("eterWith-title").innerHTML = "Eternity Without A Name";
        document.getElementById("eterWith-desc").style.display = "block";
    }
    if(emptEnli === true){
        document.getElementById("emptEnli-title").innerHTML = "Empty Enlightenment";
        document.getElementById("emptEnli-desc").style.display = "block";
    }
    if(theShep === true){
        document.getElementById("theShep-title").innerHTML = "The Shepard";
        document.getElementById("theShep-desc").style.display = "block";
    }
    if(the1986 === true){
        document.getElementById("the1986-title").innerHTML = "The 1986 Classic";
        document.getElementById("the1986-desc").style.display = "block";
    }
    if(deatTexa === true){
        document.getElementById("deatTexa-title").innerHTML = "Death and Texas";
        document.getElementById("deatTexa-desc").style.display = "block";
    }
    if(painMan === true){
        document.getElementById("painMan-title").innerHTML = "Piano Man";
        document.getElementById("painMan-desc").style.display = "block";
    }
    if(dawdHote === true){
        document.getElementById("dawdHote-title").innerHTML = "Dawdler in the Hotel";
        document.getElementById("dawdHote-desc").style.display = "block";
    }
    if(anAmn === true){
        document.getElementById("anAmn-title").innerHTML = "An Amnesiac No More";
        document.getElementById("anAmn-desc").style.display = "none";
    }
    if(zaneShot === true){
        document.getElementById("zaneShot-title").innerHTML = "Flight or Fight";
        document.getElementById("zaneShot-desc").style.display = "block";
    }
    if(shepTux === true){
        document.getElementById("shepTux-title").innerHTML = "The Shepard ReTuxed";
        document.getElementById("shepTux-desc").style.display = "block";
    }
    if(elepAchi === true){
        document.getElementById("elepAchi-title").innerHTML = "An Elephant Never Forgets";
        document.getElementById("elepAchi-desc").style.display = "block";
    }
    
}

// dial pad scripts

// function that adds the button pressed value to the input
let numdialButton = (clicked_id) => {
    let x = document.getElementById(clicked_id).value;
    let el = document.getElementById("input");
    el.value = el.value + x; 
}
// function that deletes last number on input string value
let deleteNumBtn = () => {
    let el = document.getElementById("input");
    el.value = el.value.slice(0, -1);
}


// toggle tutorial 
let animateToggle = () => {
    let x = document.getElementById("tutorial");

    if(x.style.display === "none"){
        slideRightIn("tutorial", "tutorial-text-container");
    } else {
        slideRightOut("tutorial", "tutorial-text-container");
    }
}

// animate first tutorial display
let slideTutoIn = () => {
    let id = null; // handles the 3 second wait interval
        let widthChange = null; // handles the width increase interval
        let textOn = null; // handles the text displaying interval
        // calling the element ID's
        const el = document.getElementById("tutorial");
        let elText = document.getElementById("tutorial-text-container");
        // calling reference variables
        let secondCount = 0;
        let width = 0;
        let opacity = 0;

        clearInterval(id);
        id = setInterval(countDown, 20);
        function countDown(){
            if(secondCount >= 30){
                clearInterval(id);
                el.style.display = "block";
                el.style.width = "0%";
                clearInterval(widthChange);
                widthChange = setInterval(slideOut, 15);
                function slideOut(){
                    if(width === 25){
                        clearInterval(widthChange);
                        clearInterval(textOn);
                        textOn = setInterval(fadeOn, 40);
                        function fadeOn(){
                            if(opacity >= 1){
                                clearInterval(textOn);
                            } else {
                                opacity += .2;
                                elText.style.opacity = opacity;
                            }
                        }
                    } else {
                        width++;
                        el.style.width = width + "%";
                    }
                }
            } else {
                secondCount++;
                
            }
        }
}



/*
// tutorial is displayed on screen variable
let tutorialDisplayed = false;
// handles the toggling of tutorial display 
let animateToggle = () => {
    // if the tutorial isn't displayed then display it
    if(tutorialDisplayed === false){
        console.log("working")
        let id = null; // handles the 3 second wait interval
        let widthChange = null; // handles the width increase interval
        let textOn = null; // handles the text displaying interval
        // calling the element ID's
        const el = document.getElementById("tutorial");
        let elText = document.getElementById("tutorial-text-container");
        // calling reference variables
        let secondCount = 0;
        let width = 0;
        let opacity = 0;

        clearInterval(id);
        id = setInterval(countDown, 30);
        function countDown(){
            if(secondCount >= 30){
                clearInterval(id);
                el.style.display = "block";
                el.style.width = "0%";
                clearInterval(widthChange);
                widthChange = setInterval(slideOut, 40);
                function slideOut(){
                    if(width === 25){
                        clearInterval(widthChange);
                        clearInterval(textOn);
                        textOn = setInterval(fadeOn, 40);
                        function fadeOn(){
                            if(opacity >= 1){
                                clearInterval(textOn);
                            } else {
                                opacity += .2;
                                elText.style.opacity = opacity;
                            }
                        }
                    } else {
                        width++;
                        el.style.width = width + "%";
                    }
                }
            } else {
                secondCount++;
                
            }
        }
        tutorialDisplayed = true;
    } else {
        let widthChangeDown = null; // handles the width decrese interval
        let textOff = null; // handles the text displaying interval
        const el = document.getElementById("tutorial");
        let elText = document.getElementById("tutorial-text-container");
        let width = 25;
        let opacity = 1;

        clearInterval(widthChangeDown);
        widthChangeDown = setInterval(slideIn, 40);
        function slideIn(){
            if(width === 0){
                clearInterval(widthChangeDown);
                el.style.display = "none";
            } else {
                width--;
                el.style.width = width + "%";
                if(width === 24){
                    clearInterval(textOff);
                    textOff = setInterval(fadeOff, 40);
                    function fadeOff(){
                        if(opacity <= 0){
                            clearInterval(textOff)
                        } else {
                            opacity -= 0.2;
                            elText.style.opacity = opacity;
                        }
                    }
                }
            }
        }
        tutorialDisplayed = false;
    }
    
} */

// map fade on, fade off elements

let fadeOn = (elId) => {
    let id = null;
    const el = document.getElementById(elId);
    el.style.display = "block";
    let opacNum = 0;
    clearInterval(id);
    id = setInterval(fadeIn, 1);
    function fadeIn(){
        if(opacNum === 100){
            clearInterval(id);
        } else {
            opacNum++;
            el.style.opacity = opacNum + "%";
        }
    }
}

let fadeOff = (elId) => {
    let id = null;
    const elem = document.getElementById(elId);
    //el.style.display = "block";
    let opacNum = 100;
    clearInterval(id);
    id = setInterval(fadeOut, 1);
    function fadeOut(){
        if(opacNum === 0){
            elem.style.display = "none";
            clearInterval(id);
        } else {
            opacNum--;
            elem.style.opacity = opacNum + "%";
        }
    }
    
} 


// functions for the left side clickables, slide ins, slide outs, and text fades and the map special slide down function
// width starts at 0 and then text fades in at 10% width

// slide into view the left side clickable elements
let slideLeftIn = (elId, textId) => {
    let id = null;
    // gets the display div
    const element = document.getElementById(elId);
    element.style.display = "block";
    element.style.width = "0%";
    // gets the text of display
    let elementText = document.getElementById(textId);
        elementText.style.opacity = 0;
    // sets beginning width
    let width = 0;
    clearInterval(id);
    id = setInterval(slideInL, 15);
    function slideInL(){
        if(width === 25){
            clearInterval(id);
        } else {
            width++;
            element.style.width = width + "%";
            if(width === 20){
                let text = null;
                // sets beginning opacity
                let opacity = 0;
                clearInterval(text);
                text = setInterval(fadeInText, 50);
                function fadeInText(){
                    if(opacity >= 1){
                        clearInterval(text);
                    } else {
                        opacity += .2;
                        console.log(opacity);
                        elementText.style.opacity = opacity;
                    }

                }
            }
        }
    }  
}

// slide out of view the left side clickables
let slideLeftOut = (elId, textId) => {
    let id = null;
    // gets the display div
    const element = document.getElementById(elId);
    // gets the text of display
    let elementText = document.getElementById(textId);
    // sets beginning width 
    let width = 25;
    clearInterval(id);
    id = setInterval(slideOutL, 15);
    function slideOutL(){
        if(width === 0){
            clearInterval(id);
            element.style.display = "none";
        } else {
            width--;
            element.style.width = width + "%";
            if(width === 24){
                let text = null;
                // sets beginning opacity
                let opacity = 1;
                clearInterval(text);
                text = setInterval(fadeOutText, 50);
                function fadeOutText(){
                    if(opacity <= 0){
                        clearInterval(text);
                    } else {
                        opacity -= 0.2;
                        console.log(opacity);
                        elementText.style.opacity = opacity;
                    }

                }
            }
        }
    }
}

// handles sliding in and out the right side clickables, including the dial pad
let slideRightOut = (elId, textId) => {
    let id = null;
    // gets the display div
    const element = document.getElementById(elId);
    // gets the text of display
    let elementText = document.getElementById(textId);
    // sets beginning width 
    let width = 25;
    clearInterval(id);
    id = setInterval(slideOutR, 15);
    function slideOutR(){
        if(width === 0){
            clearInterval(id);
            element.style.display = "none";
        } else {
            width--;
            element.style.width = width + "%";
            if(width === 24){
                let text = null;
                // sets beginning opacity
                let opacity = 1;
                clearInterval(text);
                text = setInterval(fadeOutText, 20);
                function fadeOutText(){
                    if(opacity <= 0){
                        clearInterval(text);
                    } else {
                        opacity -= 0.2;
                        console.log(opacity);
                        elementText.style.opacity = opacity;
                    }

                }
            }
        }
    }
}

// slide into view the right side clickables
let slideRightIn = (elId, textId) => {
    let id = null;
    // gets the display div
    const element = document.getElementById(elId);
    element.style.display = "block";
    element.style.width = "0%";
    // gets the text of display
    let elementText = document.getElementById(textId);
        elementText.style.opacity = 0;
    // sets beginning width
    let width = 0;
    clearInterval(id);
    id = setInterval(slideInR, 15);
    function slideInR(){
        if(width === 25){
            clearInterval(id);
        } else {
            width++;
            element.style.width = width + "%";
            if(width === 20){
                let text = null;
                // sets beginning opacity
                let opacity = 0;
                clearInterval(text);
                text = setInterval(fadeInText, 50);
                function fadeInText(){
                    if(opacity >= 1){
                        clearInterval(text);
                    } else {
                        opacity += .2;
                        console.log(opacity);
                        elementText.style.opacity = opacity;
                    }

                }
            }
        }
    }  
}



//slideInvX("inventory-xIndex-display", "xIndex-container");
// slide in items from inventory
let slideInvX = (elId, textId) => {
    let id = null;
    // gets the display div
    const element = document.getElementById(elId);
    element.style.display = "grid";
    element.style.width = "0%";
    // gets the text of display
    let elementText = document.getElementById(textId);
        elementText.style.opacity = 0;
    // sets beginning width
    let width = 0;
    clearInterval(id);
    id = setInterval(slideInL, 15);
    function slideInL(){
        if(width === 60){
            clearInterval(id);
        } else {
            width++;
            element.style.width = width + "%";
            if(width === 50){
                let text = null;
                // sets beginning opacity
                let opacity = 0;
                clearInterval(text);
                text = setInterval(fadeInText, 50);
                function fadeInText(){
                    if(opacity >= 1){
                        clearInterval(text);
                    } else {
                        opacity += .1;
                        console.log(opacity);
                        elementText.style.opacity = opacity;
                    }

                }
            }
        }
    }  
} 

let slideInvItems = (elId) => {

    // elId would be 'inventory-item-display'
    // textId would be the item id, which is the div that holds the title/img/desc

    let id = null;
    // gets the display div
    const element = document.getElementById(elId);
    element.style.display = "block";
    element.style.width = "0%";
    // gets the text of display
    let elementText = document.getElementById('inventory-item-container');
        elementText.style.opacity = 0;
    // sets beginning width
    let width = 0;
    clearInterval(id);
    id = setInterval(slideInL, 15);
    function slideInL(){
        if(width === 40){
            clearInterval(id);
        } else {
            width++;
            element.style.width = width + "%";
            if(width === 20){
                let text = null;
                // sets beginning opacity
                let opacity = 0;
                clearInterval(text);
                text = setInterval(fadeInText, 50);
                function fadeInText(){
                    if(opacity >= 1){
                        clearInterval(text);
                    } else {
                        opacity += .1;
                        console.log(opacity);
                        elementText.style.opacity = opacity;
                    }

                }
            }
        }
    }  
} 

let slideBro = (elId) => {

    // elId would be 'inventory-item-display'
    // textId would be the item id, which is the div that holds the title/img/desc

    let id = null;
    // gets the display div
    const element = document.getElementById(elId);
    element.style.display = "block";
    element.style.width = "0%";
    // gets the text of display
    let elementText = document.getElementById('inventory-brochure-container');
        elementText.style.opacity = 0;
    // sets beginning width
    let width = 0;
    clearInterval(id);
    id = setInterval(slideInL, 15);
    function slideInL(){
        if(width === 40){
            clearInterval(id);
        } else {
            width++;
            element.style.width = width + "%";
            if(width === 20){
                let text = null;
                // sets beginning opacity
                let opacity = 0;
                clearInterval(text);
                text = setInterval(fadeInText, 50);
                function fadeInText(){
                    if(opacity >= 1){
                        clearInterval(text);
                    } else {
                        opacity += .1;
                        console.log(opacity);
                        elementText.style.opacity = opacity;
                    }

                }
            }
        }
    }  
} 

let slideBroFull = (elId) => {

    let id = null;
    // gets the display div
    const element = document.getElementById(elId);
    element.style.display = "block";
    element.style.width = "0%";
    // gets the text of display
    let elementText = document.getElementById('brochure-full-container');
        elementText.style.opacity = 0;
    // sets beginning width
    let width = 0;
    clearInterval(id);
    id = setInterval(slideInL, 15);
    function slideInL(){
        if(width === 35){
            clearInterval(id);
        } else {
            width++;
            element.style.width = width + "%";
            if(width === 20){
                let text = null;
                // sets beginning opacity
                let opacity = 0;
                clearInterval(text);
                text = setInterval(fadeInText, 50);
                function fadeInText(){
                    if(opacity >= 1){
                        clearInterval(text);
                    } else {
                        opacity += .1;
                        console.log(opacity);
                        elementText.style.opacity = opacity;
                    }

                }
            }
        }
    }  
} 


