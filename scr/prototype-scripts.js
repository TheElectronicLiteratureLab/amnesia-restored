



// global variables 



let difficultyChoice;
let styling;
let numbers = [
    {number:'3', roomid:'phone-1'},
    {number:'4', roomid:'phone-2'},
    {number:'5', roomid:'phone-3'},
    {number:'6', roomid:'phone-4'},
    {number:'7', roomid:'phone-5'},
    {number:'8', roomid:'phone-6'},
    {number:'9', roomid:'phone-7'},
    {number:'911', roomid:'phone-8'}
];


let storyDesc = `This is story mode.`;
let normalDesc = `This is normal mode.`;
let classicDesc = `This is classic mode.`;
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
    document.getElementById("saveSlot1").innerHTML = localStorage.key(0);
    document.getElementById("saveSlot2").innerHTML = localStorage.key(1);
    document.getElementById("saveSlot3").innerHTML = localStorage.key(2);
    //other data we would like for each save slot
}

let displayDesc = (id) => {
    let x = document.getElementById("difficulty-options-descriptions");
    let y = [
        ["story-mode", storyDesc, difficultyLevels[0]],
        ["normal-mode", normalDesc, difficultyLevels[1]],
        ["classic-mode", classicDesc, difficultyLevels[2]],
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

let currentInv = () => {
    applyInput("inv");
    //console.log(items);
    //document.getElementById("inventory").innerHTML = applyInput("inv");
}

let currentAdd = (id) => {
    let x = document.getElementById(id);
    x.innerHTML = '';
    console.log(x);

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
        let name = e.roomid;
        let phoneNum = e.number;
    
        console.log(name);
        console.log(phoneNum);
        
        displayNum(name, phoneNum);
    })
}

let displayNum = (contact, number) => {
    console.log(contact, number);
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

let invOn = false;
let addOn = false;
let mapOn = false;
let infoOn = false;
let modeOn = false;
let achieveOn = false;
let helpOn = false;


let displayToggle = (id, name) => {
   let x = document.getElementById(id);
   displayCheck(name);
   
   if(!x.style.display || x.style.display === "none"){
        x.style.display = "block";
   } else {
        x.style.display = "none";
   }
}

let displayCheck = (name) => {
    if(name === 'inventory'){
        invOn = true;
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
        if(helpOn === true){
            document.getElementById("help-display").style.display = "none";
            helpOn = false;
        }
    }

    if(name === "address"){
        addOn = true;
        if(invOn === true){
            document.getElementById("inventory-display").style.display = "none";
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

let displayNone = (id) => {
    document.getElementById(id).style.display = "none";
    document.getElementById("inventory-item-display").style.display = "none";
    document.getElementById("inventory-xIndex-display").style.display = "none";

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
        console.log('true');
        document.getElementById("inventory-xIndex-display").style.display = "grid";
        document.getElementById("inventory-item-display").style.display = "none";
    }
    
    // still need to add in check for if item clicked is xindexer so divs don't overlap
    /*document.getElementById(id).style.display = "grid";
    
    let inv = disk.inventory;
    inv.forEach(e => {
        if(e.itemId === name){
            document.getElementById("item-name").innerHTML = e.name[0];
            document.getElementById("item-img").src = e.gif;
            printInvDesc(e.desc);
            console.log(e.onUse);
        }
    })*/
}

// status bars
//let hunBarEl = document.querySelector("#hunger-bar");
//let hunStyle = window.getComputedStyle(hunBarEl);

//let currWidth = hunStyle.getPropertyValue("width");
//let hungerBar = document.getElementById("hunger-bar");
//let currWidth = window.getComputedStyle(hungerBar).getPropertyValue("width");

let updateHun = (x) => {
    // update progress bar to show the new player hunger
    // check previous hunger to know where progress begins from
    console.log(playHung + "this is play hunger");
    console.log(prevHung + "this is previous hunger")


    let newWidth = x;
    let width = prevHung;

    
    

    // if player hunger is back up to 100% then run this
    if(newWidth === '100'){
        console.log("running")
        let i = 0;
        if(i === 0){
            i = 1;
            let el = document.getElementById("hunger-bar");
            let curWidth = width;
            let progress = setInterval(fullBar, 10);
            function fullBar(){
                if(curWidth == 100){
                    clearInterval(progress);
                    i = 0;
                } else {
                    console.log("going up!")
                    curWidth++;
                    el.style.width = curWidth + "%";
                }
            }
        }
    } else {
        runProgress(newWidth);
    }


}

let runProgress = (newHung) => {
    
    
    let i = 0;

    let newWidth = newHung;
    let width = prevHung;

    console.log(newWidth);
    console.log(width);

    console.log(width < newWidth);

    //you'll never increase if width is 100

    if(width === '100'){
        console.log("true")
    }

    /*
    if(width <= newWidth){
        let el = document.getElementById("hunger-bar");
        console.log("increase bar");
        el.style.width = newWidth + "%";
        /*if(i === 0){
            i = 1;
            let el = document.getElementById("hunger-bar");
            let curWidth = width;
            let progress = setInterval(increase, 10);
            function increase(){
                if(curWidth >= newWidth){
                    clearInterval(progress);
                    i = 0;
                } else {
                    curWidth++;
                    el.style.width = curWidth + "%";
                }
            }
        }
    }
    
    if(width >= newWidth){
        let el = document.getElementById("hunger-bar");
        console.log("decrease bar");
        el.style.width = newWidth + "%";
    }*/
}



  


    // code below works but breaks if playhung is set to 100

    //console.log(newWidth > curWidth);

    /*if(newWidth === 100){
        el.style.width = 100 + "%";
    }*/

    /*

    if(newWidth > curWidth){
        if(i === 0){
            i = 1;
            let el = document.querySelector("#hunger-bar");
            let width = curWidth;
            let progress = setInterval(increase, 5);
            function increase(){
                if(width >= newWidth){
                    clearInterval(progress);
                    i = 0;
                } else {
                    //console.log('increase')
                    width++;
                    el.style.width = width + "%";
                    console.log(el.style.width)
                }
            }
        }
    } 
    
    if(newWidth < curWidth){
        if(i === 0){
            i = 1;
            let el = document.querySelector("#hunger-bar");
            let width = curWidth;
            let progress = setInterval(decrease, 5);
            function decrease(){
                if(width <= newWidth){
                    clearInterval(progress);
                    i = 0;
                } else {
                    //console.log('decrease')
                    width--;
                    el.style.width = width + "%";
                    console.log(el.style.width)
                }
            }
        }
    }
    */

    //hunBarEl.style.width = playHung + "%";






