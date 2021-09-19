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

  input.addEventListener('focusout', () => {
    input.focus({preventScroll: true});
  });
};

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


/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

// render output, with optional class
// (string | array | fn -> string) -> nothing
let println = (line, className) => {
  // bail if string is null or undefined
  if (!line) {
    return;
  }

  str =
    // if this is an array of lines, pick one at random
    Array.isArray(line) ? pickOne(line)
    // if this is a method returning a string, evaluate it
    : typeof line  === 'function' ? line()
    // otherwise, line should be a string
    : line;

  const output = document.querySelector('#output');
  const newLine = document.createElement('div');

  if (className) {
    newLine.classList.add(className);
  }

  // add a class for styling prior user input
  if (line[0] === '>') {
    newLine.classList.add('user');
  }

  // support for markdown-like bold, italic, underline & strikethrough tags
  if (className !== 'img') {
    str = addStyleTags(str, '__', 'u');
    str = addStyleTags(str, '**', 'b');
    str = addStyleTags(str, '*', 'i');
    str = addStyleTags(str, '~~', 'strike');
  }

  // maintain line breaks
  while (str.includes('\n')) {
    str = str.replace('\n', '<br>');
  }

  output.appendChild(newLine).innerHTML = str;
  window.scrollTo(0, document.body.scrollHeight);
};

// get random array element
// array -> any
let pickOne = arr => arr[Math.floor(Math.random() * arr.length)];

// return the first name if it's an array, or the only name
// string | array -> string
let getName = name => typeof name === 'object' ? name[0] : name;

// retrieve room by its ID
// string -> room
let getRoom = (id) => disk.rooms.find(room => room.id === id);

// remove punctuation marks from a string
// string -> string
let removePunctuation = str => str.replace(/[.,\/#?!$%\^&\*;:{}=\_`~()]/g,"");

// remove extra whitespace from a string
// string -> string
let removeExtraSpaces = str => str.replace(/\s{2,}/g," ");

// move the player into room with passed ID
// string -> nothing
let enterRoom = (id) => {
  const room = getRoom(id);

  if (!room) {
    println(`That exit doesn't seem to go anywhere.`);
    return;
  }

  println(room.img, 'img');

  if (room.name) {
    println(`${getName(room.name)}`, 'room-name');
  }

  if (room.visits === 0) {
    println(room.desc);
  }

  room.visits++;

  disk.roomId = id;

  if (typeof room.onEnter === 'function') {
    room.onEnter({disk, println, getRoom, enterRoom});
  }

  // reset any active conversation
  delete disk.conversation;
  delete disk.conversant;
};

// determine whether the object has the passed name
// item | character, string -> bool
let objectHasName = (obj, name) => {
  const compareNames = n => n.toLowerCase().includes(name.toLowerCase());

  return Array.isArray(obj.name)
    ? obj.name.find(compareNames)
    : compareNames(obj.name);
}

// get a list of all characters in the passed room
// string -> characters
let getCharactersInRoom = (roomId) => disk.characters.filter(c => c.roomId === roomId);

// get a character by name from a list of characters
// string, characters -> character
let getCharacter = (name, chars = disk.characters) => chars.find(char => objectHasName(char, name));

// get item by name from room with ID
// string, string -> item
let getItemInRoom = (itemName, roomId) => {
  const room = getRoom(roomId);

  return room.items && room.items.find(item => objectHasName(item, itemName))
};

// get item by name from inventory
// string -> item
let getItemInInventory = (name) => disk.inventory.find(item => objectHasName(item, name));

// retrieves a keyword from a topic
// topic -> string
let getKeywordFromTopic = (topic) => {
  if (topic.keyword) {
    return topic.keyword;
  }

  // find the keyword in the option (the word in all caps)
  const keyword = removeExtraSpaces(removePunctuation(topic.option))
    // separate words by spaces
    .split(' ')
    // find the word that is in uppercase
    // (must be at least 2 characters long)
    .find(w => w.length > 1 && w.toUpperCase() === w)
    .toLowerCase();

  return keyword;
};

// determine whether the passed conversation includes a topic with the passed keyword
// conversation, string -> boolean
let conversationIncludesTopic = (conversation, keyword) => {
  // NOTHING is always an option
  if (keyword === 'nothing') {
    return true;
  }

  if (Array.isArray(disk.conversation)) {
    return disk.conversation.find(t => getKeywordFromTopic(t) === keyword);
  }

  return disk.conversation[keyword];
};

// determine whether the passed topic is available for discussion
// character, topic -> boolean
let topicIsAvailable = (character, topic) => {
  // topic has no prerequisites, or its prerequisites have been met
  const prereqsOk = !topic.prereqs || topic.prereqs.every(keyword => character.chatLog.includes(keyword));
  // topic is not removed after read, or it hasn't been read yet
  const readOk = !topic.removeOnRead || !character.chatLog.includes(getKeywordFromTopic(topic));

  return prereqsOk && readOk;
};

// end the current conversation
let endConversation = () => {
  disk.conversant = undefined;
  disk.conversation = undefined;
};

/////////////////////////////////////////////////////////////////////////
/////////////////////////////////////////////////////////////////////////

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
