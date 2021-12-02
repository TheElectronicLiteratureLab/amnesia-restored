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
   


  // var app = document.querySelector('.app');

  // var typewriter = new Typewriter(app, {
  //   delay: 50,

  // });

  // typewriter.typeString(str)
  //   .start();
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

  //spawnTenement();
  console.log('trying to spawn the tenement');

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

let callNum = (num) => {
  reenableInput();
  const room = getRoom(disk.roomId);
  let id;
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
  if(getItemInInventoryById('brochure')){
    numbers.push(
      {number:'555-1188', roomid:'phone-9'},
      {number:'555-7656', roomid:'phone-10'},
      {number:'555-7653', roomid:'phone-11'}
    );
  }
  if(getItemInInventoryById('address book')){
    numbers.push(
      {number:'555-1314', roomid:'phone-12'},
      {number:'555-1315', roomid:'phone-13'},
      {number:'555-2712', roomid:'phone-14'},
      {number:'555-2259', roomid:'phone-15'},
      {number:'555-2577', roomid:'phone-16'},
      {number:'555-2783', roomid:'phone-17'}, 
      {number:'555-4312', roomid:'phone-18'},
      {number:'555-4365', roomid:'phone-19'},
      {number:'555-4685', roomid:'phone-20'},
      {number:'555-5436', roomid:'phone-21'},
      {number:'555-5643', roomid:'phone-22'},
      {number:'555-6200', roomid:'phone-23'},
      {number:'555-8422', roomid:'phone-24'},
      {number:'555-8749', roomid:'phone-25'},
      {number:'555-8876', roomid:'phone-26'},
      {number:'571-7171', roomid:'phone-27'},
      {number:'976-1212', roomid:'phone-28'}
    );
  }

  if(room.id === 'bett-apar'){
    numbers.push(
      {number:'555-0042', roomid:'phone-29'},
      {number:'555-5413', roomid:'phone-30'}
    );
  }

  for(let i = 0; i < numbers.length; i++){
    if(numbers[i].number === num){
      id = numbers[i].roomid;
    };
  }

  if(id){
    enterRoom(id);
  }

  if(!id){
    println(`This number doesn't exist.`)
  }
};

let numdialButton = (clicked_id) => {
  let x = document.getElementById(clicked_id).innerHTML;
  document.getElementById("input").value = document.getElementById("input").value + x;
}

function enterBtnClick () {
  e = $.Event('keyup');
  e.keyCode= 13; // enter
  $('input').trigger(e);
  applyInput();
}

let enterNum = () => {
  const enterButton = document.getElementById("enterkey");
  enterButton.addEventListener("click", enterBtnClick());
  document.getElementById("dialPad").style.display = "none";
  firstDial = true;
  document.getElementById("tutorial").style.display = "none";

}
       
let deleteNum = () => {
  document.getElementById("input").value = document.getElementById("input").value.slice(0, -1);
}

let closeDial = () => {
  document.getElementById("dialPad").style.display = "none";
  document.getElementById("input").value = '';
  reenableInput();
}

let openTutorial = () => {
  let x = document.getElementById("tutorial");
  if(x.style.display === "none"){
    x.style.display = "block";
  } else {
    x.style.display = "none";
  }
}

