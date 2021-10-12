// global properties, assigned with let for easy overriding by the user
let disk;

// store user input history
let inputs = [''];
let inputsPos = 0;

// define list style
let bullet = '•';

// reference to the input element
let input = document.querySelector('#input');

// add any default values to the disk
// disk -> disk
let init = (disk) => {
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

// register listeners for input events
let setup = () => {
  input.addEventListener('keypress', (e) => {
    const ENTER = 13;

    if (e.keyCode === ENTER) {
      applyInput();
    }
  });

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
let save = (name) => {
  const save = JSON.stringify(disk, (key, value) => typeof value === 'function' ? value.toString() : value);
  localStorage.setItem(name, save);
  const line = name.length ? `Game saved as "${name}".` : `Game saved.`;
  println(line);
};

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
