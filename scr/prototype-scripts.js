



// global variables 



let difficultyChoice;
let styling;


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
    console.log(playHung);
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
   displayCheck(id, name);
   
   if(!x.style.display || x.style.display === "none"){
        x.style.display = "block";
   } else {
        x.style.display = "none";
   }
}

let displayCheck = (id, name) => {
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
            document.getElementById("inf0-display").style.display = "none";
            infoOn = false;
        }
        if(modeOn === true){
            document.getElementById("mode-display").style.display = "none";
            modeOn = false;
        }
        if(achieveOn === true){
            document.getElementById("acieve-display").style.display = "none";
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
            document.getElementById("help-display").style.display = "none";
            achieveOn = false;
        }
    }

    
}

let displayNone = (inv, item, xIndex) => {
    document.getElementById(inv).style.display = "none";
    document.getElementById(item).style.display = "none";
    document.getElementById(xIndex).style.display = "none";
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

let hunBar = () => {
    let x = playHung;

    document.getElementById("hunger-bar").style.width = `${x}` + '%';

}