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

//gets the last user input and stores it inside the lastInput variable
let lastInput;
function getLastInput () {
  lastInput = String(inputs[inputs.length-1]);
  console.log(lastInput);
};

//parses the users last input against first parameter, outputs text of second parameter
function parseLastInput (kWord, outText) {
  getLastInput();
  if (lastInput !== kWord) {
    println(outText);
  };
};

// return the first name if it's an array, or the only name
// string | array -> string
function getName(name) {
  return typeof name === 'object' ? name[0] : name;
}

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
let response = (e) => {
  const ENTER = 13;

  if (e.keyCode === ENTER) {
    applyInput();
  }
};

// Function for pressing Enter and advancing to the next room, shout out to Ahira for masterminding this
let pressEnter = (id) => {
  println('\nPLEASE PRESS **[ENTER]** TO CONTINUE', 'enter');
  //disable normal input
  document.querySelector('input').disabled = true;
  document.getElementById("arrow").innerHTML = "";

let cont = (e) => {
  if (e.key === 'Enter') {
    enterRoom(id);
    document.removeEventListener("keydown", cont);
    //input.addEventListener('keypress', response);
  }
}
document.addEventListener("keydown", cont);
};
// bring back the input after you delete it with the Press Enter function
let reenableInput = () => {
  setTimeout(() => {
    document.querySelector('input').disabled = false;
    document.getElementById('arrow').innerHTML = ">";
    document.querySelector('input').focus(); }, 100);
};


// determine whether the object has the passed name
// item | character, string -> bool
let objectHasName = (obj, name) => {
  const compareNames = n => n.toLowerCase().includes(name.toLowerCase());

  return Array.isArray(obj.name)
    ? obj.name.find(compareNames)
    : compareNames(obj.name);
}

// determine whether the object has the passed name
// item | character, string -> bool
let objectHasId = (obj, id) => {
  const compareIds = i => i.toLowerCase().includes(id.toLowerCase());

  return Array.isArray(obj.itemId) ? obj.itemId.find(compareIds) : compareIds(obj.itemId);
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

  return room.items && room.items.find(item => objectHasId(item, itemName));
}

// get item name from ID
let getItemName = (itemId, roomId) => {
  const room = getRoom(roomId);

  return room.items && room.items.find(item => objectHasId(item, itemId));
}

// get item by name from inventory
// string -> item
let getItemInInventory = (name) => disk.inventory.find(item => objectHasId(item, name));

// add item into players inventory automatically taken from pcmommands
let addItem = (itemName) => {
  const room = getRoom(disk.roomId);
  const findItem = item => objectHasId(item, itemName);
  let itemIndex = room.items && room.items.findIndex(findItem);

  if (typeof itemIndex === 'number' && itemIndex > -1) {
    const item = room.items[itemIndex];
    if (item.isTakeable) {
      disk.inventory.push(item);
      room.items.splice(itemIndex, 1);

      if (typeof item.onTake === 'function') {
        item.onTake({disk, println, room, getRoom, enterRoom, item});
      }
    }
  }
};

/*
let addItem = (itemId, roomId) => {
  let item = getItemName(itemId, roomId);
  println(item.name[0]);

}
*/

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