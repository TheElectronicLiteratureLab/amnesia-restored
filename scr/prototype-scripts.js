



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

let clickOn = false;
let invOn = false;
let addOn = false;

let displayToggle = (id) => {
    

    
    if(invOn === true){
        document.getElementById("inventory-display").style.display = "none";
        document.getElementById("inventory-item-display").style.display = "none";
        document.getElementById("inventory-xIndex-display").style.display = "none";
        invOn = false;
    } else if (addOn === true){
        document.getElementById("address-display").style.display = "none";
        addOn = false;
    } else {
        document.getElementById(id).style.display = "block";
        if(id === "inventory-display"){
            invOn = true;
        }
    }

    


    
    /*
    if(document.getElementById(id).style.display === "none"){
        document.getElementById(id).style.display = "block";
    } else {
        document.getElementById(id).style.display = "none";
        document.getElementById("inventory-item-display").style.display = "none";
        document.getElementById("inventory-xIndex-display").style.display = "none";
    }
    /*console.log(x);

    if(x === false){
        document.getElementById(id).style.display = "block";
        x = true;
    } else if(x === true){
        document.getElementById(id).style.display = "none";
        x = false;
    }*/
    
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