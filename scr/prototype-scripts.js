



// global variables 



let difficulty;
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
    document.getElementById("game-options").style.display = "grid";
    document.getElementById("game-title").style.display = "none";
}

let displayDesc = (id) => {
    let x = document.getElementById("difficulty-options-descriptions");
    let y = [
        ["story-mode", storyDesc],
        ["normal-mode", normalDesc],
        ["classic-mode", classicDesc],
    ]
    let z;
    let i;
    for(i = 0; i < y.length; i++){
        if(id === y[i][0]){
            z = y[i][1];
        }
    }
    x.innerHTML = z;
    document.getElementById(id).style.textDecoration = 'underline';
    document.getElementById(id).style.textDecorationColor = 'red';
    document.getElementById(id).style.textDecorationStyle = 'solid';
    document.getElementById(id).style.textDecorationThickness = '3px';

    difficulty = id;
    console.log(difficulty);
}

let visualDesc = (id) => {
    let a = document.getElementById("visual-mode-options-descriptions");
    let b = [
        ["restored-mode", restoredDesc],
        ["apple-mode", appleDesc],
        ["comm-mode", commDesc],
        ["IBM-mode", IBMDesc]
    ]
    let c;
    let i;

    for(i = 0; i < b.length; i++){
        if(id === b[i][0]){
            c = b[i][1];
        }
    }
    a.innerHTML = c;
    styling = id;
    console.log(styling);
}

let beginGame = () => {
    document.getElementById("game").style.display = "grid";
    document.getElementById("game-options").style.display = "none";

    console.log(playHung);
}

let x = false;

let display = (id) => {
    console.log(x);

    if(x == false){
        document.getElementById(id).style.display = "block";
        x = true;
    } else if(x == true){
        document.getElementById(id).style.display = "none";
        x = false;
    }
    
}

let displayNone = (inv, item, xIndex) => {
    document.getElementById(inv).style.display = "none";
    document.getElementById(item).style.display = "none";
    document.getElementById(xIndex).style.display = "none";
}

let openItem = (id, name) => {
    // still need to add in check for if item clicked is xindexer so divs don't overlap
    document.getElementById(id).style.display = "grid";
    
    let inv = disk.inventory;
    inv.forEach(e => {
        if(e.itemId === name){
            document.getElementById("item-name").innerHTML = e.name[0];
            document.getElementById("item-img").src = e.gif;
            printInvDesc(e.desc);
            console.log(e.onUse);
        }
    })
}

// status bars

let hunBar = () => {
    let x = playHung;

    document.getElementById("hunger-bar").style.width = `${x}` + '%';

}