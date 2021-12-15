// global properties, assigned with let for easy overriding by the user
let disk;

// global values for character creation
hairColor = 'dark';
hairLength = 'short';
hairFace = 'beard';
eyeColor = 'blue';

// store user input history
let inputs = [''];
let inputsPos = 0;

// define list style
let bullet = '•';

//specific timer var for anns house
let annTimer;

//specific counter for Bette's Apartment
let bettesHome;

//Specifc move counter for Bette's Apartment
let betteCounter;

// reference to the input element
let input = document.querySelector('#input');

// add any default values to the disk
// disk -> disk
let init = (disk, mC) => {
  const initializedPlay = Object.assign({}, mC);
  const initializedDisk = Object.assign({}, disk);
  initializedDisk.rooms = disk.rooms.map((room) => {
    // number of times a room has been visited
    room.visits = 0;
    return room;
  });

  if (!initializedDisk.inventory) {
    initializedDisk.inventory = [];
  }

  if (!initializedDisk.characters) {
    initializedDisk.characters = [];
  }

  initializedDisk.characters = initializedDisk.characters.map(char => {
    // player's conversation history with this character
    char.chatLog = [];
    return char;
  });

  return initializedDisk;
};

let quickResponse = (e) => {
  const ENTER = 13;

  if (e.keyCode === ENTER) {
    applyInput();
  }
}
// register listeners for input events
let setup = () => {

  input.addEventListener('keypress', quickResponse);

  input.addEventListener('keydown', (e) => {
    input.focus();

    const UP = 38;
    const DOWN = 40;
    const TAB = 9;

    if (e.keyCode === UP) {
      navigateHistory('prev');
    } else if (e.keyCode === DOWN) {
      navigateHistory('next');
    } else if (e.keyCode === TAB) {
      e.stopPropagation();
      e.preventDefault()
      autocomplete();
    }
  });
};

  input.addEventListener('focusout', () => {
    input.focus({preventScroll: true});
  });

// convert the disk to JSON and store it
// (optionally accepts a name for the save)
/*let save = (name) => {
  const save = JSON.stringify(disk, (key, value) => typeof value === 'function' ? value.toString() : value);
  localStorage.setItem(name, save);
  const line = name.length ? `Game saved as "${name}".` : `Game saved.`;
  println(line);
};*/

/*
let save = () => {
  const save = JSON.stringify(disk, (key, value) => typeof value === 'function' ? value.toString() : value);
  if (saveSlot === '1') {    
    localStorage.setItem("Slot1", save);
    println("Game Saved to Slot 1");
  } else if (saveSlot === '2') {
    localStorage.setItem("Save2", save);
  } else if (saveSlot === '3') {
    localStorage.setItem("Slot3", save);
  } else {
    console.log("There are no available slots left!")
  }
}
*/

// restore the disk from storage
// (optionally accepts a name for the save)

/*let load = (name) => {
  println('TEST')
  const save = localStorage.getItem(name);
  console.log(save);
  if (!save) {
    println(`Save file not found.`);
    return;
  }

  disk = JSON.parse(save, (key, value) => {
    try {
      return eval(value);
    } catch (error) {
      return value;
    }
  });

  const line = name.length ? `Game "${name}" was loaded.` : `Game loaded.`;
  println(line);
  enterRoom(disk.roomId);
};
*/

// convert the disk to JSON and store it
// (optionally accepts a name for the save)
let save = (name = 'Amnesia Restored Save') => {
  const save = JSON.stringify(disk, (key, value) => typeof value === 'function' ? value.toString() : value);
  localStorage.setItem(name, save);
  const line = name.length ? `Game saved as "${name}".` : `Game saved.`;
  println(line);
};

let autoSave = () => {
  console.log('Saving...');
  const save = JSON.stringify(disk, (key, value) => typeof value === 'function' ? value.toString() : value);
  let saveDate = new Date();
  let saveFileTime = `Autosave: ${saveDate.getFullYear()}-${saveDate.getMonth()}-${saveDate.getDate()} ${saveDate.getHours()}:${saveDate.getMinutes()}`
  localStorage.setItem(saveFileTime, save);
}

// restore the disk from storage
// (optionally accepts a name for the save)
let load = (name) => {
  const save = localStorage.getItem(name);

  if (!save) {
    println(`Save file not found.`);
    return;
  }

  disk = JSON.parse(save, (key, value) => {
    try {
      return eval(value);
    } catch (error) {
      return value;
    }
  });

  const line = name.length ? `Game "${name}" was loaded.` : `Game loaded.`;
  println(line);
  enterRoom(disk.roomId);
};






// load the passed disk and start the game
// disk -> nothing
let loadDisk = (uninitializedDisk) => {
  // initialize the disk
  disk = init(uninitializedDisk);

  // start the game
  enterRoom(disk.roomId);

  // start listening for user input
  setup();

  // focus on the input
  input.focus();
};



// npm support
if (typeof module !== 'undefined' && typeof module.exports !== 'undefined') {
  module.exports = loadDisk;
}


//internalSave();


//let globalStats = localStorage.setItem('stats', saveLoadChar);
let internalSave = (saveStats = 'stats') => {
  saveLoadChar.currMon = playMon;
  saveLoadChar.currFat = playFat;
  saveLoadChar.currHun = playHung;
  saveLoadChar.shepEnd = theShep;
  saveLoadChar.monkEnd = emptEnli;
  saveLoadChar.shepEnd = theShep;
  saveLoadChar.clasEnd = the1986;
  saveLoadChar.texaEnd = deatTexa;
  saveLoadChar.pianEnd = painMan;
  saveLoadChar.dawdEnd = dawdHote;
  saveLoadChar.trueEnd = anAmn;
  saveLoadChar.zaneEnd = zaneShot;
  saveLoadChar.eterEnd = eterWith;
  saveLoadChar.she2End = shepTux;
  saveLoadChar.elephant = elepAchi;



  const globalStats = JSON.stringify(saveLoadChar);
  
  localStorage.setItem(saveStats, globalStats);
}

let internalLoad = (statsToLoad = 'stats') => {
  const saveStats = localStorage.getItem(statsToLoad);

  if (!saveStats) {
    console.log('nothing to load yet')
    return;
  }

  globalStats = JSON.parse(saveStats);
  console.log(globalStats);

  //Reload all stats :( This kind of sucks doing by hand. I might find a different way eventually...
  //disk.roomId = saveLoadChar.currRoom;
  
  playMon = globalStats.currMon;
  playFat = globalStats.currFat;
  playHung = globalStats.currHun;
  theShep = globalStats.shepEnd;
  emptEnli = globalStats.monkEnd;
  theShep = globalStats.shepEnd;
  the1986 = globalStats.clasEnd;
  deatTexa = globalStats.texaEnd;
  painMan = globalStats.pianEnd;
  dawdHote = globalStats.dawdEnd;
  anAmn = globalStats.trueEnd;
  zaneShot = globalStats.zaneEnd;
  eterWith = globalStats.eterEnd;
  shepTux = globalStats.she2End;
  elepAchi = globalStats.elephant;
}

//this is to clear certain varibles so they don't bleed over.
//Should always put before saveInternal() in game over scenarios;
let clearTemps = () => {
  //money, hung, fat, time, all flags, player clothes, difficulty (just in case)
} 
internalLoad();

