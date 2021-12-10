




// global variables 

let difficultyChoice = "modern";
let styling = "restored-mode";
// the number array that gets referenced when the player uses the phone, as well as reference to display numbers visually
let numbers = [
    {number:'3', roomid:'phone-1', contactName: 'Front Desk'},
    {number:'4', roomid:'phone-2', contactName: 'Room Service'},
    {number:'5', roomid:'phone-3', contactName: 'Valet'},
    {number:'6', roomid:'phone-4', contactName: 'Bellman'},
    {number:'7', roomid:'phone-5', contactName: 'Security'},
    {number:'8', roomid:'phone-6', contactName: 'Other Rooms'},
    {number:'9', roomid:'phone-7', contactName: 'Outside Calls'},
    {number:'911', roomid:'phone-8', contactName: 'Emergency'}
];

// all of the descriptions of the difficulty levels and the visual style choices
let storyDesc = `Lay back, relax and enjoy the story without the worry of hunger, fatigue, or money.`;
let modernDesc = `This is how the game should be played, a small challenge to solve the mystery of who you are.`;
let classicDesc = `Based on the original game's difficulty. Play this if you want to feel a bit nostalgic and want a challenge. Not for the faint of heart or mind.`;
let restoredDesc = `A contemporary visual experience with a modern interface.`;
let appleDesc = `Published in 1986 for the Apple lle, this mode gives the classic visual experience with a modern interface.`; 
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

let displayDesc = (id) => {
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
}

let visualDesc = (id) => {
    let a = document.getElementById("visual-mode-options-descriptions");
    let b = [
        ["restored-mode", restoredDesc, 'restored'],
        ["apple-mode", appleDesc, 'apple'],
        ["comm-mode", commDesc, 'commodore'],
        ["IBM-mode", IBMDesc, 'IBM']
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
}

let beginGame = () => {
    document.getElementById("game-options").style.display = "none";
    document.getElementById("game-load").style.display = "none";
    document.getElementById("game").style.display = "grid";
}

// clickables scripts

// when the inv button is pressed, if NOT displayed apply input command inv and run a check to see if any of the other visual display elements are on ELSE if displayed, slide out of view. 
let currentInv = () => {
    let invDisplay = document.getElementById("inventory-display");
    if(!invDisplay.style.display || invDisplay.style.display === "none"){
        applyInput("inv");
        displayCheck("inventory-display", "inventory")
    } else {
        slideLeftOut("inventory-display", "inventory-text-container");
        document.getElementById("inventory-item-display").style.display = "none";
        document.getElementById("inventory-xIndex-display").style.display = "none";
        document.querySelector("input").disabled = false;
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

// when the player presses the sidebar btns toggle on and off, when displays are open inputs are disabled except the command guide.

// this is the display toggling for the address book and the infomation display
let displayLeftToggle = (id, name, text) => {
   let x = document.getElementById(id);
   // run check to see if any other displays are on and turn them off before displaying
   displayCheck(id, name);
   // check if display is none, if true slide in display, if false slide out display
   if(!x.style.display || x.style.display === "none"){
       slideLeftIn(id, text);
   } else {
        slideLeftOut(id, text);
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
let displayCheck = (id, name) => {
    if(name === 'inventory'){
        invOn = true;
        if(addOn === true){
            slideLeftOut()
            //document.getElementById("address-display").style.display = "none";
            addOn = false;
        } 
        if(mapOn === true){
            document.getElementById("map-display").style.display = "none";
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

    if(name === "address"){
        addOn = true;
        if(invOn === true){
            document.getElementById("inventory-display").style.display = "none";
            document.getElementById("inventory-xIndex-display").style.display = "none";
            document.getElementById("inventory-item-display").style.display = "none";
            invOn = false;
        }
        if(mapOn === true){
            document.getElementById("map-display").style.display = "none";
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
        mapOn = true;
        setTimeout(function(){ map.invalidateSize()}, 50);
        //map.panTo(playerMarker.getLatLng());
        if(invOn === true){
            document.getElementById("inventory-display").style.display = "none";
            document.getElementById("inventory-xIndex-display").style.display = "none";
            document.getElementById("inventory-item-display").style.display = "none";
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
    }

    if(name === "info"){
        infoOn = true;
        if(invOn === true){
            document.getElementById("inventory-display").style.display = "none";
            document.getElementById("inventory-xIndex-display").style.display = "none";
            document.getElementById("inventory-item-display").style.display = "none";
            invOn = false;
        }
        if(addOn === true){
            document.getElementById("address-display").style.display = "none";
            addOn = false;
        } 
        if(mapOn === true){
            document.getElementById("map-display").style.display = "none";
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
    }

    if(name === "mode"){
        modeOn = true;
        if(invOn === true){
            document.getElementById("inventory-display").style.display = "none";
            document.getElementById("inventory-xIndex-display").style.display = "none";
            document.getElementById("inventory-item-display").style.display = "none";
            invOn = false;
        }
        if(addOn === true){
            document.getElementById("address-display").style.display = "none";
            addOn = false;
        } 
        if(mapOn === true){
            document.getElementById("map-display").style.display = "none";
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
    }

    if(name === "achieve"){
        achieveOn = true;
        if(invOn === true){
            document.getElementById("inventory-display").style.display = "none";
            document.getElementById("inventory-xIndex-display").style.display = "none";
            document.getElementById("inventory-item-display").style.display = "none";
            invOn = false;
        }
        if(addOn === true){
            document.getElementById("address-display").style.display = "none";
            addOn = false;
        } 
        if(mapOn === true){
            document.getElementById("map-display").style.display = "none";
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
    }

    if(name === "help"){
        helpOn = true;
        if(invOn === true){
            document.getElementById("inventory-display").style.display = "none";
            document.getElementById("inventory-xIndex-display").style.display = "none";
            document.getElementById("inventory-item-display").style.display = "none";
            invOn = false;
        }
        if(addOn === true){
            document.getElementById("address-display").style.display = "none";
            addOn = false;
        } 
        if(mapOn === true){
            document.getElementById("map-display").style.display = "none";
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
    }

    
}

let displayNone = (id, textId) => {
    slideLeftOut(id, textId);
    //fadeOff(id);
    //document.getElementById(id).style.display = "none";
    document.getElementById("inventory-item-display").style.display = "none";
    document.getElementById("inventory-xIndex-display").style.display = "none";
    document.querySelector('input').disabled = false;
    document.querySelector('input').focus();
    /*
    document.getElementById(inv).style.display = "none";
    document.getElementById(item).style.display = "none";
    document.getElementById(xIndex).style.display = "none";
    */
}

let openItem = (id, name) => {

    if(name !== 'xindexer'){
        document.getElementById("inventory-xIndex-display").style.display = "none";
        document.getElementById(id).style.display = "grid";
    
        let inv = disk.inventory;
        inv.forEach(e => {
            if(e.itemId === name){
                document.getElementById("item-name").innerHTML = e.name[0];
                document.getElementById("item-img").src = e.gif;
                printInvDesc(e.desc);
            }
        })
    } 

    if(name === 'xindexer'){
        document.getElementById("inventory-xIndex-display").style.display = "block";
        document.getElementById("inventory-item-display").style.display = "none";
    }
}

// status bars

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
    document.getElementById("difficulty-setting").innerHTML = difficultyChoice;
}



// dial pad scripts

// function that adds the button pressed value to the input
let numdialButton = (clicked_id) => {
    let x = document.getElementById(clicked_id).value;
    let el = document.getElementById("input");
    el.value = el.value + x; 
}

/*
// function to be called on enter button to act like enter key press
function enterBtnClick(){
    e = $.Event('keyup');
    e.keyCode = 13; //enter
    $('input').trigger(e);
    applyInput();
    
} */


// function that deletes last number on input string value
let deleteNumBtn = () => {
    let el = document.getElementById("input");
    el.value = el.value.slice(0, -1);
}

  
let openTutorial = () => {
    let x = document.getElementById("tutorial");
    if(x.style.display === "none"){
      x.style.display = "block";
    } else {
      x.style.display = "none";
    }
}

let tutorialDisplayed = false;

let animateToggle = () => {
    
    if(tutorialDisplayed === false){
        let id = null;
        const el = document.getElementById("tutorial");
        el.style.display = "block";
        let rightPos = 0;
        clearInterval(id);
        id = setInterval(slide, 15);
        function slide(){
            if(rightPos === 25){
                clearInterval(id);
            } else {
                rightPos++;
                el.style.right = rightPos + "%";
            }
        }
        tutorialDisplayed = true;
    } else if(tutorialDisplayed === true){
        console.log("goodbye")
        let id = null;
        const el = document.getElementById("tutorial");
        let rightPos = 25;
        clearInterval(id);
        id = setInterval(slide, 15);
        function slide(){
            if(rightPos === 0){
                clearInterval(id);
                el.style.display = "none";
            } else {
                rightPos--;
                el.style.right = rightPos + "%";
            }
        }
        tutorialDisplayed = false;
    }
    
}



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
    id = setInterval(slideIn, 30);
    function slideIn(){
        if(width === 25){
            clearInterval(id);
        } else {
            width++;
            element.style.width = width + "%";
            if(width === 10){
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

let slideLeftOut = (elId, textId) => {
    let id = null;
    // gets the display div
    const element = document.getElementById(elId);
    // gets the text of display
    let elementText = document.getElementById(textId);
    // sets beginning width 
    let width = 25;
    clearInterval(id);
    id = setInterval(slideIn, 30);
    function slideIn(){
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
                        opacity -= 0.1;
                        console.log(opacity);
                        elementText.style.opacity = opacity;
                    }

                }
            }
        }
    }
}