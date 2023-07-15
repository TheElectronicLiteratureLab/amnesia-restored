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
    output.scrollTo(0, output.scrollHeight);
  //output.scrollTo(0, document.body.scrollHeight);
   
};

let listX = (iconPath, line, className, idName) => {
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

  const output = document.querySelector('#inventory');
  const newLine = document.createElement('div');
  newLine.setAttribute("id", idName);
  newLine.setAttribute("onclick", "openItem('inventory-xIndex-display', this.id)");
  const itemTitle = document.createElement('h3');
  const icon = document.createElement("img");
  icon.src = iconPath;

  if (className) {
    newLine.classList.add(className);
  }

  output.appendChild(newLine);
  newLine.appendChild(icon);
  newLine.appendChild(itemTitle).innerHTML = str;
};

// making the item population for the brochure
let listBro = (iconPath, line, className, idName) => {
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

  const output = document.querySelector('#inventory');
  const newLine = document.createElement('div');
  newLine.setAttribute("id", idName);
  newLine.setAttribute("onclick", "openItem('inventory-brochure-display', this.id)");
  const itemTitle = document.createElement('h3');
  const icon = document.createElement("img");
  icon.src = iconPath;

  if (className) {
    newLine.classList.add(className);
  }

  output.appendChild(newLine);
  newLine.appendChild(icon);
  newLine.appendChild(itemTitle).innerHTML = str;
};

let listInv = (iconPath, line, className, idName) => {
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

  const output = document.querySelector('#inventory');
  const newLine = document.createElement('div');
  newLine.setAttribute("id", idName);
  newLine.setAttribute("onclick", "openItem('inventory-item-display', this.id)");
  const itemTitle = document.createElement('h3');
  const icon = document.createElement("img");
  icon.src = iconPath;

  if (className) {
    newLine.classList.add(className);
  }

  output.appendChild(newLine);
  newLine.appendChild(icon);
  newLine.appendChild(itemTitle).innerHTML = str;
};

let printInvDesc = (line, className) => {
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

  const output = document.querySelector('#item-description');

  if (className) {
    newLine.classList.add(className);
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

    output.innerHTML = str;
};

// get random array element
// array -> any
let pickOne = arr => arr[Math.floor(Math.random() * arr.length)];

// return the first name if it's an array, or the only name
// string | array -> string
function getName(name) {
  return typeof name === 'object' ? name[0] : name;
}

// retrieve room by its ID
// string -> room
function getRoom(id) {
  return disk.rooms.find(room => room.id === id);
}

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
  lastRoom = getRoom(disk.roomId);
  lastCoord = disk.currPos;

  if (!room) {
    println(`That exit doesn't seem to go anywhere.`);
    return;
  }

  println(room.img, 'img');

  if (room.name) {
    document.getElementById("currroom").innerHTML = `${getName(room.name)}`;
    //println(, 'room-name');
  }

  if (room.visits === 0) {
    println(room.desc);
  }

  // room.visits++;

  disk.roomId = id;
  disk.currPos = room.coord;

  if (typeof room.onEnter === 'function') {
    room.onEnter({disk, println, getRoom, enterRoom});
  }

  // reset any active conversation
  delete disk.conversation;
  delete disk.conversant;

  const isStreetRoom = getRoom(disk.roomId);

  if (isStreetRoom.isStreet){
    const chance = Math.floor(Math.random() * 100) + 1;

    if (!tenementSpawned) {
      console.log('trying to spawn the tenement');
      spawnTenement();
    } 
    
    if(chance <= 5) {
      const chance2 = Math.floor(Math.random() * 100) + 1;

      if(chance2 <= 15) {
      xStreetEvent();
      } else {
      carWashEncounter();
      }
    }

    randomEncounter();
  }

};

let response = (e) => {
  const ENTER = 13;

  if (e.keyCode === ENTER) {
    applyInput();
  }
};

// Function for pressing Enter and advancing to the next room, shout out to Ahria for masterminding this
let pressEnter = (id) => {

  let x = document.getElementById("arrow");

  x.classList.remove('ml-2');
    x.classList.add('ml-1');

  //disable normal input
  document.querySelector('input').disabled = true;
  x.innerHTML = `PLEASE PRESS <strong>&nbsp[ENTER]&nbsp</strong> TO CONTINUE`;
  document.querySelector('input').focus();

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

  let x = document.getElementById("arrow");

  
  setTimeout(() => {
    x.classList.remove('ml-1');
    x.classList.add('ml-2');
    
    
    document.querySelector('input').disabled = false;
    x.innerHTML = ">";
    document.querySelector('input').focus(); }, 100);
};

// clear the output screen
let clearOutput = () => {
  document.getElementById('output').innerHTML = '';
}

// determine whether the object has the passed name
// item | character, string -> bool
let objectHasName = (obj, name) => {
  const compareNames = n => n.toLowerCase().includes(name.toLowerCase());

  return Array.isArray(obj.name)
    ? obj.name.find(compareNames)
    : compareNames(obj.name);
}

// determine whether the object has the passed id
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
let getItemInRoomById = (itemName, roomId) => {
  const room = getRoom(roomId);

  return room.items && room.items.find(item => objectHasId(item, itemName));
}

// get item by name from room
// string, string -> item
let getItemInRoom = (itemName, roomId) => {
  const room = getRoom(roomId);

  return room.items && room.items.find(item => objectHasName(item, itemName));
}

// get item name from ID
let getItemName = (itemId, roomId) => {
  const room = getRoom(roomId);

  return room.items && room.items.find(item => objectHasId(item, itemId));
}

// get item by name from inventory
// string -> item
let getItemInInventoryById = (name) => disk.inventory.find(item => objectHasId(item, name));

// get item by name from inventory
// string -> item
let getItemInInventory = (name) => disk.inventory.find(item => objectHasName(item, name));

// add item into players inventory automatically, taken from pcmommands
let addItem = (itemName) => {
  const room = getRoom(disk.roomId);
  const findItem = item => objectHasName(item, itemName);
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

// retrieves a keyword from a topic
// topic -> string
function getKeywordFromTopic(topic) {
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
}

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

