// list player inventory
let inv = () => {
  document.getElementById("inventory").innerHTML = "";
  const items = disk.inventory.filter(item => !item.isHidden);

  if (!items.length) {
    document.getElementById("inventory-display").style.display = "block";
  }

  items.forEach(item => {
    document.getElementById("inventory-display").style.display = "block";
    if(item.itemId === 'xindexer'){
      // pulls up xindexer interactive div
      listX(item.icon,`${getName(item.name)}`, 'clickXIndex', item.itemId);
    } else {
      listInv(item.icon, `${getName(item.name)}`, 'clickItemInv', item.itemId);
    }
    /*
    document.getElementById("inventory-display").style.display = "block";
    listInv(item.icon, `${getName(item.name)}`, 'clickItemInv', item.itemId);*/
  });
};

// show room description
let look = () => {
  const room = getRoom(disk.roomId);

  if (typeof room.onLook === 'function') {
    room.onLook({disk, println});
  }

  else if (room.desc === '' || "" || ``) {
    println(`There's nothing interesting here.`)
  }


  else {
    println(room.desc)
  }
};

// look in the passed way
// string -> nothing
function lookThusly(str) {
  return println(`You look ${str}.`);
}

// look at the passed item or character
// array -> nothing
let lookAt = (args) => {
  const [_, name] = args;
  const item = getItemInInventory(name) || getItemInRoom(name, disk.roomId);

  if (item) {
    // Look at an item.
    if (item.desc) {
      println(item.desc);
    } else {
      println(`You don\'t notice anything remarkable about it.`);
    }

    if (typeof(item.onLook) === 'function') {
      item.onLook({disk, println, getRoom, enterRoom, item});
    }
  } else {
    const character = getCharacter(name, getCharactersInRoom(disk.roomId));
    if (character) {
      // Look at a character.
      if (character.desc) {
        println(character.desc);
      } else {
        println(`You don't notice anything remarkable about them.`);
      }

      if (typeof(character.onLook) === 'function') {
        character.onLook({disk, println, getRoom, enterRoom, item});
      }
    } else {
      println(`You don't see any such thing.`);
    }
  }
};

// list available exits
let go = () => {
  const room = getRoom(disk.roomId);
  const exits = room.exits.filter(exit => !exit.isHidden);

  if (!exits) {
    println(`There's nowhere to go.`);
    return;
  }

  println(`Where would you like to go? Available directions are:`);
  exits.forEach((exit) => {
    const rm = getRoom(exit.id);

    if (!rm) {
      return;
    }

    const dir = getName(exit.dir).toUpperCase();
    // include room name if player has been there before
    const directionName = rm.visits > 0
      ? `${dir} - ${rm.name}`
      : dir

    println(`${bullet} ${directionName}`);
  });
};

// find the exit with the passed direction in the given list
// string, array -> exit
let getExitDir = (dir, exits) => exits.find(exit =>
  Array.isArray(exit.dir)
    ? exit.dir.includes(dir)
    : exit.dir === dir
);

// go the passed direction
// string -> nothing
function goDir(dir) {
  const room = getRoom(disk.roomId);
  const exits = room.exits;

  if (!exits) {
    println(`There's nowhere to go.`);
    return;
  }

  const nextRoom = getExitDir(dir, exits);

  if (!nextRoom) {
    println(`There is no exit in that direction.`);
    return;
  }

  if (nextRoom.block) {
    println(nextRoom.block);
    return;
  }

  enterRoom(nextRoom.id);

  //updatePlayerStats();


}
//testing some things to further parse input
let inputRead = () => {
  if (input.value !== 'leave') {
    console.log(`you're not leaving`)
  } else {
    console.log(`nice, you're leaving`)
  }
};


// shortcuts for cardinal directions
let n = () => goDir('north');
let s = () => goDir('south');
let e = () => goDir('east');
let w = () => goDir('west');
let ne = () => goDir('northeast');
let se = () => goDir('southeast');
let nw = () => goDir('northwest');
let sw = () => goDir('southwest');

// if there is one character in the room, engage that character in conversation
// otherwise, list characters in the room
let talk = () => {
  const characters = getCharactersInRoom(disk.roomId);

  // assume players wants to talk to the only character in the room
  if (characters.length === 1) {
    talkToOrAboutX('to', getName(characters[0].name));
    return;
  }

  // list characters in the room
  println(`You can talk TO someone or ABOUT some topic.`);
  chars();
};

//////////////////////////////////////////////////
// Set aside for character creation commands only
// Will be deleted from command list after completion.
//////////////////////////////////////////////////

////////////////////////////////////////////////

// speak to someone or about some topic
// string, string -> nothing
let talkToOrAboutX = (preposition, x) => {
  const room = getRoom(disk.roomId);

  if (preposition !== 'to' && preposition !== 'about') {
    println(`You can talk TO someone or ABOUT some topic.`);
    return;
  }

  const character =
    preposition === 'to' && getCharacter(x, getCharactersInRoom(room.id))
      ? getCharacter(x, getCharactersInRoom(room.id))
      : disk.conversant;
  let topics;

  // give the player a list of topics to choose from for the character
  const listTopics = () => {
    // capture reference to the current conversation
    disk.conversation = topics;

    if (topics.length) {
      const availableTopics = topics.filter(topic => topicIsAvailable(character, topic));

      if (availableTopics.length) {
        println(`What would you like to discuss?`);
        availableTopics.forEach(topic => println(`${bullet} ${topic.option ? topic.option : topic.keyword.toUpperCase()}`));
        println(`${bullet} NOTHING`);
      } else {
        // if character isn't handling onTalk, let the player know they are out of topics
        if (!character.onTalk) {
          println(`You have nothing to discuss with ${getName(character.name)} at this time.`);
        }
        endConversation();
      }
    } else if (Object.keys(topics).length) {
      println(`Select a response:`);
      Object.keys(topics).forEach(topic => println(`${bullet} ${topics[topic].option}`));
    } else {
      endConversation();
    }
  };

  if (preposition === 'to') {
    if (!getCharacter(x)) {
      println(`There is no one here by that name.`);
      return;
    }

    if (!getCharacter(getName(x), getCharactersInRoom(room.id))) {
      println(`There is no one here by that name.`);
      return;
    }

    if (!character.topics) {
      println(`You have nothing to discuss with ${getName(character.name)} at this time.`);
      return;
    }

    if (typeof(character.topics) === 'string') {
      println(character.topics);
      return;
    }

    if (typeof(character.onTalk) === 'function') {
      character.onTalk({disk, println, getRoom, enterRoom, room, character});
    }

    topics = typeof character.topics === 'function'
      ? character.topics({println, room})
      : character.topics;

    if (!topics.length && !Object.keys(topics).length) {
      println(`You have nothing to discuss with ${getName(character.name)} at this time.`);
      return;
    }

    // initialize the chat log if there isn't one yet
    character.chatLog = character.chatLog || [];
    disk.conversant = character;
    //listTopics(topics);
  } else if (preposition === 'about') {
    if (!disk.conversant) {
      println(`You need to be in a conversation to talk about something.`);
      return;
    }
    const character = eval(disk.conversant);
    if (getCharactersInRoom(room.id).includes(disk.conversant)) {
      const response = x.toLowerCase();
      if (response === 'nothing') {
        endConversation();
        println(`You end the conversation.`);
      } else if (disk.conversation && disk.conversation[response]) {
        disk.conversation[response].onSelected();
      } else {
        const topic = disk.conversation.length && conversationIncludesTopic(disk.conversation, response);
        const isAvailable = topic && topicIsAvailable(character, topic);
        if (isAvailable) {
          if (topic.line) {
            println(topic.line);
          }
          if (topic.onSelected) {
            topic.onSelected({disk, println, getRoom, enterRoom, room, character});
          }
          // add the topic to the log
          character.chatLog.push(getKeywordFromTopic(topic));
        } else {
          println(`You talk about ${removePunctuation(x)}.`);
          println(`Type the capitalized KEYWORD to select a topic.`);
        }
      }

      // continue the conversation.
      if (disk.conversation) {
        topics = typeof character.topics === 'function'
          ? character.topics({println, room})
          : character.topics;
        //listTopics(character);
      }
    } else {
      println(`That person is no longer available for conversation.`);
      disk.conversant = undefined;
      disk.conversation = undefined;
    }
  }
};


// list takeable items in room
function take() {
  const room = getRoom(disk.roomId);
  const items = (room.items || []).filter(item => item.isTakeable && !item.isHidden);

  if (!items.length) {
    println(`There's nothing to take.`);
    return;
  }

  println(`The following items can be taken:`);
  items.forEach(item => println(`${bullet} ${getName(item.name)}`));
}

// take the item with the given name
// string -> nothing
let takeItem = (itemName) => {
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
      } else {
        println(`You took the ${getName(item.name)}.`);
      }
    } else {
      if (typeof item.onTake === 'function') {
        item.onTake({disk, println, room, getRoom, enterRoom, item});
      } else {
        println(item.block || `You can't take that.`);
      }
    }
  } else {
    itemIndex = disk.inventory.findIndex(findItem);
    if (typeof itemIndex === 'number' && itemIndex > -1) {
      println(`You already have that.`);
    } else {
      println(`You don't see any such thing.`);
    }
  }
};




// list useable items in room and inventory
let use = () => {
  const room = getRoom(disk.roomId);

  const useableItems = (room.items || [])
    .concat(disk.inventory)
    .filter(item => item.onUse && !item.isHidden);

  if (!useableItems.length) {
    println(`There's nothing to use.`);
    return;
  }

  println(`The following items can be used:`);
  useableItems.forEach((item) => {
    println(`${bullet} ${getName(item.name)}`)
  });
};

// use the item with the given name
// string -> nothing
let useItem = (itemName) => {
  const item = getItemInInventory(itemName) || getItemInRoom(itemName, disk.roomId);

  if (!item) {
    println(`You don't have that.`);
    return;
  }

  if (item.use) {
    console.warn(`Warning: The "use" property for Items has been renamed to "onUse" and support for "use" has been deprecated in text-engine 2.0. Please update your disk, renaming any "use" methods to be called "onUse" instead.`);

    item.onUse = item.use;
  }

  if (!item.onUse) {
    println(`That item doesn't have a use.`);
    return;
  }

  // use item and give it a reference to the game
  if (typeof item.onUse === 'string') {
    const use = eval(item.onUse);
    use({disk, println, getRoom, enterRoom, item});
  } else if (typeof item.onUse === 'function') {
    item.onUse({disk, println, getRoom, enterRoom, item});
  }
};

// list items in room
let items = () => {
  const room = getRoom(disk.roomId);
  const items = (room.items || []).filter(item => !item.isHidden);

  if (!items.length) {
    println(`There's nothing here.`);
    return;
  }

  println(`You see the following:`);
  items
    .forEach(item => println(`${bullet} ${getName(item.name)}`));
}

// list characters in room
let chars = () => {
  const room = getRoom(disk.roomId);
  const chars = getCharactersInRoom(room.id).filter(char => !char.isHidden)

  if (!chars.length) {
    println(`There's no one here.`);
    return;
  }

  println(`You see the following:`);
  chars
    .forEach(char => println(`${bullet} ${getName(char.name)}`));
};

// display help menu
let help = () => {
  const instructions = `The following commands are available:
    LOOK:   'look at key'
    TAKE:   'take book'
    DROP:   'drop key'
    GO:     'go North'
    HEAD:   'head foyer'
    USE:    'use door'
    TALK:   'talk to mary'
    ITEMS:  list items in the room
    INV:    opens inventory 
    SAVE:   save the current game
    LOAD:   load the last saved game
    HELP:   this help menu
  `;
  println(instructions);
};

// handle say command with no args
let say = () => println([`Say what?`, `You don't say.`]);

// say the passed string
// string -> nothing
let sayString = (str) => println(`You say ${removePunctuation(str)}.`);

// retrieve user input (remove whitespace at beginning or end)
// nothing -> string
let getInput = () => input.value.trim();

// TV Commands: If tv is on goes through a channel array.
let forward = () => {
  let item = getItemInRoomById('roomtv', 'hote-room-8');
  if(item.arrCount >= 12) {
    println('You have entered the nightmare zone');
    //enterRoom('nigh-node');
    item.arrCount = 0;
  }
  if(item.isOn === true) {
    console.log(item.channelArr[item.arrCount]);
    println(item.channelArr[item.arrCount]);
    item.arrCount++;
  } else {
    if (disk.roomId === 'hote-room-8') {
      println(`The TV isn't turned on.`);
    } else {
      println(`You can't do that here.`);
    }
  }

  if(disk.roomId === 'hote-revi'){
    println(`The F button that should tune the TV to the next channel doesn't seem to be working any longer.`)
  }
}


// toggle any object between their on state or off state.
let turnOffOn = (toggle, itemId) => {
  if (itemId === "on" || itemId === "off") { //switches the input arguments if player put them in backwards (gramattically still correct)
    let temp = '';
    temp = toggle;
    toggle = itemId;
    itemId = temp;
  }
  let item = getItemInRoom(itemId, disk.roomId);

  if(item != undefined  && item.isOn != undefined) { // make sure that said item exists and that the item has the property isOn 
    if (toggle === 'on') {
      if (item.isOn === !true) {
        item.isOn = true;
          if(item.itemId === 'computer') {
            println(`Without having to look for the switch, you reach behind the computer to turn it on. \n\nAfter 20 seconds or so, the machine emits a groaning noise in the area of the disk drives, and then a "Beep!" \n\nThe small built-in cooling fan begins to whir quietly. The screen remains blank -- and without software that is how it will remain. But you've learned one piece of information: you have used this kind of machine before.`);
          } else {
            println(`You turned the ${item.name[0]} on.`);
          }
        } else {
          println(`The ${item.name[0]} is already turned on.`);
        }
    } else if (toggle === 'off') {
      if (item.isOn === !false) {
        item.isOn = false;
        println(`You turned the ${item.name[0]} off.`);
      } else {
        println(`The ${item.name[0]} is already turned off.`);
      }
    } else { //mispells an item but has right syntax
      println(`Can you rephrase that?`);
    }
  } else { //if player tries to turn on something that is not able to turn on 
    println(`You can't do that.`);
  }
}

let dial = () => {
  const room = getRoom(disk.roomId);

  if(firstDial === false){
    document.getElementById("tutorial").style.display = "block";
  }
  
  if(room.id === 'hote-room' || room.id === 'hote-revi' || room.id === 'bett-apar' || room.id === 'pho-boo1' || room.id === 'hous-broa'){
    document.getElementById("input").value = document.getElementById("input").value + 'dialing ';
    let number;
    document.getElementById('dialPad').style.display = "block";
    document.querySelector('input').disabled = true;
    function checkKeyPressed(evt){
      if(evt.keyCode === 48){
        number = 0;
        numdialKey();
      }
      if(evt.keyCode === 49){
        number = 1;
        numdialKey();
      }
      if(evt.keyCode === 50){
        number = 2;
        numdialKey();
      }
      if(evt.keyCode === 51){
        number = 3;
        numdialKey();
      }
      if(evt.keyCode === 52){
        number = 4;
        numdialKey();
      }
      if(evt.keyCode === 53){
        number = 5;
        numdialKey();
      }
      if(evt.keyCode === 54){
        number = 6;
        numdialKey();
      }
      if(evt.keyCode === 55){
        number = 7;
        numdialKey();
      }
      if(evt.keyCode === 56){
        number = 8;
        numdialKey();
      }
      if(evt.keyCode === 57){
        number = 9;
        numdialKey();
      }
      if(evt.keyCode === 13){
        enterNum();
        window.removeEventListener("keydown", checkKeyPressed, false);
      }
      if(evt.keyCode === 8){
        deleteNum();
      }
      if(evt.keyCode == 46){
        deleteNum();
      }
    }
    window.addEventListener("keydown", checkKeyPressed, false);
    let numdialKey = () => {
      document.getElementById("input").value = document.getElementById("input").value + number;
    }

    let deleteNum = () => {
      document.getElementById("input").value = document.getElementById("input").value.slice(0, -1);
    }
  } else {
    println(`With what phone?`)
  }
}

let dialing = () => {
  println(`Nope`)
}

// wear command
let wear = (clothes) => {
  let item = getItemInRoom(clothes, disk.roomId);
  const room = getRoom('hote-revi');

  // items that are worn on both the torso and legs
  if(item.top && item.bottom && playCloth.top.length === 0 && playCloth.bottom.length === 0){
    playCloth.top.push(item.itemId);
    playCloth.bottom.push(item.itemId);
    if(item.itemId === 'tuxedo' && room.lukecall !== true){
      println(`With a sense partly of jumping off a diving board into a complete void and partly of self-amazement-- as though you were a matador getting dressed for the first time in his suit-of-lights-- you put on the white tuxedo. First the frilly shirt and the white bow tie, then the pants, which are held up by the novelty of braces instead of by a belt; then the cummerbund; white silk calf-length socks and the whiter-than-white patent leather shoes; and finally the white jacket and the white silk top hat. You step in front of the mirror to see if you look any more or less familiar- but you only look very white.`);
    } else {
      println(`You put on the ${clothes}.`);
    }
  } else if(item.top && item.bottom && playCloth.top.length >= 1 && playCloth.bottom.length >= 1 && playCloth.top[0] !== item.itemId && playCloth.bottom[0] !== item.itemId){
    if(item.itemId === 'tuxedo' && room.lukecall === true){
      playCloth.top.splice('T-shirt');
      playCloth.bottom.splice('jeans');
      playCloth.feet.splice('sneakers');
      playCloth.top.push(item.itemId);
      playCloth.bottom.push(item.itemId);
      println(`You're in such a state of befuddlement that you begin to put on the tuxedo over the clothes you're wearing.
      
      Reluctantly-- for it took so much trouble getting these clothes-- you take off the jeans, sneakers, and T-shirt that you are wearing and put them in the gym-bag, together with the change of clothes you put into the plastic bookstore bag. As you do so, the marron address book catches your eye.`);
    } else {
      println(`You must first remove the ${playCloth.top} and the ${playCloth.bottom} you're wearing in order to put on something else.`);
    }
  } else if(item.top && item.bottom && playCloth.top.length >=1 && playCloth.top[0] !== item.itemId){
    println(`You must first remove the ${playCloth.top} you're wearing in order to put on something else.`);
  } else if(item.top && item.bottom && playCloth.bottom.length >= 1 && playCloth.bottom[0] !== item.itemId){
    println(`You must first remove the ${playCloth.bottom} you're wearing in order to put on something else.`);
  } else if(item.top && item.bottom && playCloth.top.length >= 1 && playCloth.top[0] === item.itemId && playCloth.bottom[0] === item.itemId){
    println(`You're already wearing that.`);
  }

  //
  if(item.top && !item.bottom && playCloth.top.length === 0){
    playCloth.top.push(item.itemId);
    println(`You put on ${clothes} on your torso.`);
  } else if(item.top && !item.bottom && playCloth.top.length >= 1 && playCloth.top[0] !== item.itemId){
    println(`You must first remove the ${playCloth.top} you're wearing in order to put on something else.`);
  } else if(item.top && !item.bottom && playCloth.top.length >= 1 && playCloth.top[0] === item.itemId){
    println(`You're already wearing that.`);
  }

  if(item.bottom && !item.top && playCloth.bottom.length === 0){
    playCloth.bottom.push(item.itemId);
    println(`You put on ${clothes} on your legs.`);
  } else if(item.bottom && !item.top && playCloth.bottom.length >= 1 && playCloth.bottom[0] !== item.itemId){
    println(`You must first remove the ${playCloth.bottom} you're wearing in order to put on something else.`);
  } else if(item.bottom && !item.top && playCloth.bottom.length >= 1 && playCloth.bottom[0] === item.itemId){
    println(`You're already wearing that.`);
  }
  
  if(item.head && playCloth.head.length === 0){
    playCloth.head.push(item.itemId);
    println(`You put on ${clothes} on your head.`);
  } else if(item.head && playCloth.head.length >= 1 && playCloth.head[0] !== item.itemId){
    println(`You must first remove the ${playCloth.head} you're wearing in order to put on something else.`);
  } else if(item.head && playCloth.head.length >= 1 && playCloth.head[0] === item.itemId){
    println(`You're already wearing that.`);
  }
  
  if(item.feet && playCloth.feet.length === 0){;
    playCloth.feet.push(item.itemId);
    println(`You put on ${clothes} on your feet.`);
  } else if(item.feet && playCloth.feet.length >= 1 && playCloth.feet[0] !== item.itemId){
    println(`You must first remove the ${playCloth.feet} you're wearing in order to put on something else.`);
  } else if(item.feet && playCloth.feet.length >= 1 && playCloth.feet[0] === item.itemId){
    println(`You're already wearing that.`);
  }
  
  if(!item.top && !item.bottom && !item.head && !item.feet){
    println(`You can't wear that.`);
  }
} 

// remove command
let remove = (clothes) => {
  let item = getItemInRoom(clothes, disk.roomId);

  if(item.top && item.bottom && playCloth.top.length >= 1 && playCloth.bottom.length >= 1){
    playCloth.top.splice(item.itemId);
    playCloth.bottom.splice(item.itemId);
    println(`You remove the ${clothes}.`);
  } else if(item.top && item.bottom && playCloth.top.length === 0 && playCloth.bottom.length === 0){
    println(`You're not wearing anything.`);
  }

  if(item.top && !item.bottom && playCloth.top.length >= 1){
    playCloth.top.splice(item.itemId);
    println(`You remove the ${clothes} on your torso.`);
  } else if(item.top && !item.bottom && playCloth.top.length === 0){
    println(`You're not wearing anything.`);
  } 

  if(item.bottom && !item.top && playCloth.bottom.length >= 1){
    playCloth.bottom.splice(item.itemId);
    println(`You remove the ${clothes} on your legs.`);
  } else if(item.bottom && !item.top && playCloth.bottom.length === 0){
    println(`You're not wearing anything.`);
  } 

  if(item.head && playCloth.head.length >= 1){
    playCloth.head.splice(item.itemId);
    println(`You remove the ${clothes} on your head.`);
  } else if(item.head && playCloth.head.length === 0){
    println(`You're not wearing anything.`);
  } 

  if(item.feet && playCloth.feet.length >= 1){
    playCloth.feet.splice(item.itemId);
    println(`You remove the ${clothes} on your feet.`);
  } else if(item.feet && playCloth.feet.length === 0){
    println(`You're not wearing anything.`);
  } 

  if(!item.top && !item.bottom && !item.head && !item.feet){
    println(`You can't remove that.`);
  }
}


// open command
let open = (itemToOpen) => {
  //println(itemToOpen);
  let item = getItemInRoom(itemToOpen, disk.roomId);
  
  // Items that can be opened
  // Curtains
  if (item !== undefined)
  {
    if (item.itemId === 'curtains') {
      if(item.isOpen === !true) {
        item.isOpen = true;
        println(`The ${item.name[0]} are now open.`);
      } else {
        println("They're already opened.");
      }
    }
    // Window
    else if (item.itemId === 'window') {
      println('YOU ARE SEALED INSIDE NOOOO');
    }     
    // Dresser
    else if (item.itemId === 'dresser') {
      if(item.isOpen === !true) {
        item.isOpen = true;
        println(`The ${item.name[0]} is now open.`);
        println(`One after the other, you look through all the dresser drawers. You find a shoe-polishing rag that isn't even big enough for a loin cloth and a slip of paper advertising Acme Invisible Reweaving.`);
      } else {
        println("They're already opened.");
      }
    }
    // Door
    else if (item.itemId === 'hoteldoor') {
      if(item.isOpen !== true) {
        item.isOpen = true;
        println(`The ${item.name} is now open.`);
        item.desc = 'is open'
        console.log(item);
      } else {
        println(`The ${item.name} is already open.`);
      }
    }
    // Large Box (Hote-Revi)
    else if (item.itemId === 'hotebox'){
      if(item.isOpen !== true){
        item.isOpen = true;
        println(`In the box, under a layer of white tissue paper is an ***all-white tuxedo***, together with the appropriate appurtenances; frilly shirt, cummerbund, bow tie and a ***white silk top hat***. A shoe-box-sized box is lying beside the suit, containing, not surprisingly, a pair of shoes, ***white patent leather shoes*** no less. There could be only one place anyone would ever wear this outfit-- to his own wedding. Could the explanation for your amnesia be as simple as this? A last-ditch attempt to escape the state of matrimony?
        
        But maybe they're not meant for you. Maybe they go delivered to this room by mistake. There's an easy way to find out. You slip the jacket on over your T-shirt. It fits about as well as a rented tux could be expected to. In fact, if you were wearing the shirt instead of a T-shirt, you'd almost think it was tailored.`);
      } else {
        println(`You've already opened that.`);
      }
    }
  } else if (item.itemId === 'window') {
    println('The window is sealed to keep the air-conditioned air in the hotel.');
  } else if (item.itemId === 'dresser') {
    println(`One after the other, you look through all the dresser drawers. You find a shoe-polishing rag that isn't even big enough for a loin cloth and a slip of paper advertising Acme Invisible Reweaving.`);
  } else {
    println("You can't open that.");
  }
}

// close command
let close = (itemToOpen) => {
  //println(itemToOpen);
  let item = getItemInRoom(itemToOpen, disk.roomId);
  if (item !== undefined){
    if (item.itemId === 'curtains') {
      if(item.isOpen === !false) {
        item.isOpen = false;
        println(`The ${item.name[0]} are closed and the room is restored to the original semi-twilight you.`);
      } else {
        println("They're already closed.");
      }
    } else if (item.itemId === 'window') {
      println('You may not close that.');
    }
    // Dresser
    else if (item.itemId === 'dresser') {
      if(item.isOpen === !false) {
        item.isOpen = false;
        println(`The ${item.name[0]} is now closed.`);
      } else {
        println(`The ${item.name[0]} is already closed.`);
      }
    }
    // Door
    else if (item.itemId === 'hoteldoor') {
      if(item.isOpen !== false) {
        item.isOpen = false;
        item.desc = 'is closed'
        println(`The ${item.name} is now closed.`);
      } else {
        println(`The ${item.name} is already closed.`);
      }
    }    
  } else {
      println("You can't close that.");
  }
}

// read command 
let read = (item) => {
  if(getItemInInventory(item)){
    const invItem = getItemInInventory(item);
    if(invItem.passage){
      println(invItem.passage);
    } else {
      println(`You can't read that.`)
    }
  }
  const roomItem = getItemInRoom(item, disk.roomId);
  if(roomItem.passage){
    println(roomItem.passage);
  }
  if(!roomItem.passage){
    println(`There's nothing to read.`);
  }
}


////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//           HOGANS WORKSPACE BELOW           \\
////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

//Phone Booth Creation
function createPhone() { //create function
  const rooms = streets.rooms; //set variable to loaded disk
  const thisRoom = getRoom(disk.roomId); //get current room
  let phoneCount = 0;
  let roomCount = 0;
  for(let i = 0, l = rooms.length; i < l; i++){ //iterate through the array of rooms
    const room = rooms[i];
    roomCount++;
    if (room.isStreet){
      let chance = Math.floor(Math.random() * 101); //roll random number 0-100
      if(chance <= 15 && !thisRoom.phonesMade  && !rooms[i].isPhone) { //if number is 15 or less and the phone booths havent been made yet and the room is not a phone booth already
        console.log(chance); //log the number generated
        console.log(rooms[i].id + ` had a phone exit added`); // log which roomid has had a phone added
        rooms[i].exits.push( //push the following into the room's exits array
          {
            dir: ['phone', 'telephone', 'booth'], //exit directions for phone booth room
            id: 'pho-boo1' //id for phone booth
          },
        ); rooms[i].desc = rooms[i].desc + ` There is a phone booth on the corner.`; //set the description of the changed room to notify player upon entry that a phone is there
        phoneCount++
      }
    }
  }
  console.log(phoneCount + ' phone booths out of ' + roomCount + ' rooms.')
  thisRoom.phonesMade = true; //dont allow the function to run again
};



const findExitsArray = () => {
  const rooms = streets.rooms;
  let roomCount = 0;
  for(let i = 0; i < rooms.length; i++){
    rooms[i].exits.push(
      {dir: 'dummy-exit', id: '', block: 'this is a dummy exit'},
    );
    roomCount++;
    console.log(rooms[i].id + ' ' + roomCount);
  }
};

//x street indexer functionality
const xStreetGoButton = document.getElementById("submitButton"); //submit button variable

xStreetGoButton.onclick = function () { //set up the function if the submit button is pressed
  const aStreetNumber = document.getElementById("streetNumber"); //reference the street number drop down
  const bCrossStreet = document.getElementById("crossStreet"); //referende the street name drop down
  const streetNumber = aStreetNumber.value; //get the value of the street number drop down
  const crossStreet = bCrossStreet.value; //get the value of the street name drop down

  let cOutput = document.getElementById('result'); //reference the result
  let y; //variable for index

//iterate through the street name array and set a variable to the proper index number 
  for (let j = 0, k = xStreetName.length; j < k; j++) { 
    if (crossStreet === xStreetName[j]) {
      y = j;
    }
  }

//iterate through the street number array and use the variable above to get the proper value. 
  for(let i = 0, l = xStreetNumber.length; i < l; i++) {
    if (streetNumber === xStreetNumber[i].name) {
      cOutput.value = xStreetNumber[i].value[y];

    }
  }
};

//dev command functions 

  //teleport to certain room
  function teleport (place) {
    enterRoom(place);
    println(`
    Player Teleported to ${place}`);
  };

  //set the money to certain ammount
  function setMoney(amount) {
    playMon = amount;
    println(`
    Player Money now set to ${amount}`);
  };

  //set hunger to certain amount
  function setHunger(amount) {
    playHung = amount;
    println(`
    Player Hunger now set to ${amount}`);
  };

  //set fatigue to certain amount
  function setFatigue(amount) {
    playFat = amount;
    println(`
    Player fatigue now set to ${amount}`);
  };


//spawn tenement function
function spawnTenement() {
  const room = getRoom(disk.roomId); //get current room
  const enteredStreets = getRoom('53-5'); //get the room where they entered the streets
  const count = moveCount - enteredStreets.curMoveCount; //check the movecount against where they entered the streets

  const tenement = getRoom('tene'); //get the tenement rooms
  const tenement2 = getRoom('tene-1');
  const tenement3 = getRoom('tene-2');
  const tenement4 = getRoom('tene-3');
  const tenement5 = getRoom('tene-4');
  const tenement6 = getRoom('tene-5');
  const tenement7 = getRoom('tene-6');


  //put the tenement rooms into an array
  const tenementArray = [tenement, tenement2, tenement3, tenement4, tenement5, tenement6, tenement7];


    //distance formula
      const a = room.coord[0] - enteredStreets.coord[0];
      const b = room.coord[1] - enteredStreets.coord[1];
      const c = Math.sqrt( (a*a) + (b*b) );

  
      //if count is greater than or equal to 11 and 
      //if the distance between player and hotel is greater than or equal to 11 and
      //the room description is empty, aka no place of interest, or restaurant, or phone and
      //if the tenement hasn't already been spawned then
        if( room.isStreet && count >= 11 && c >= 15 && (room.desc === '' || "" || ``) && !tenementSpawned) { 
          const chance = Math.floor(Math.random() * 101); //generate random number between 0-100
          if ( chance <= 29 ) { //25% chance of spawning the tenement if the conditions above were met.
              room.exits.push( //push the tenement into the current rooms array of exits
                { dir: ['abandoned','tenement', 'abandonedtenement', 'abandoned tenement'], id: 'tene' }, 
              ); 
              for (let i = 0; i < tenementArray.length; i++) { //iterate through the tenement rooms
                tenementArray[i].coord = room.coord; //set all of the coords of the rooms to the current street corners coords
              };
              tenement.exits[1]= {dir: ['south', 'leave'], id: room.id};
               //push that rooms id into an exit south of the tenement entrance
              tenementSpawned = true; //set value so that function wont run again
              room.desc = `The abandoned tenement is here`; //tell player the tenement is here
              println(`You see a tenement here. Perhaps this would be a good place to sleep for the night.`);
            }
        }

};

//ask function
const askXAboutY = ([x, _, y]) => { //arguments will be xCharacter, 'about', yTopic

  if(disk.conversant && disk.conversation ) {
    endConversation();
    const character = getCharacter(x, getCharactersInRoom(disk.roomId)); //get character in room
    disk.conversant = character; //set the character to who you're talking to
    disk.conversation = character.topics; //set the conversation to the list of topics the character knows
    talkToOrAboutX('about', y); //execute asking them the thing
  }else {
    const character = getCharacter(x, getCharactersInRoom(disk.roomId)); //get character in room
    disk.conversant = character; //set the character to who you're talking to
    disk.conversation = character.topics; //set the conversation to the list of topics the character knows
    talkToOrAboutX('about', y); //execute asking them the thing
  }

};

//passing time function
const incrementTime = () => {
  xMinutes++; //increase the index of minutes array

  if(xMinutes >= 12 ) { //if index ever goes above length of minutes array 
    xMinutes = 0; //set index back to beginning
    yHours++;//then increment the hours index
  }
  if(yHours >= 12) { //if index ever goes above length of hours array
    yHours = 0; //set index back to beginning 
      if(qMeridiem === 1) { //if it is PM 
      qMeridiem--;//set it back to Am
      zDays++; //incremenent days array
    } else {
      qMeridiem++; //set it to PM
    }
  }
  if(zDays >= 7) { //if index every goes above length of days array
    zDays = 0; //set it back to sunday
  }

  //UPDATE THE UI ELEMENTS 
    let dumbMinutes = minutes[xMinutes];
    let dumbHours = hours[yHours];
    let dumbDays = days[zDays];
    let dumbAmPm = amPm[qMeridiem];

    document.getElementById('hungerNumber').innerHTML = `${playHung}`;
    document.getElementById('fatigueNumber').innerHTML = `${playFat}`;
    document.getElementById('money').innerHTML = `${formatter.format(playMon)}`;
    document.getElementById('time').innerHTML = `${dumbDays + ' ' + dumbHours + ':' + dumbMinutes + ' ' + dumbAmPm}`;
};

const incrementDay = () => {
  xMinutes = 1;
  yHours = 8;
  zDays = zdays + 1;
  qMeridiem = 0

  playFat = 100;

  let dumbMinutes = minutes[xMinutes];
  let dumbHours = hours[yHours];
  let dumbDays = days[zDays];
  let dumbAmPm = amPm[qMeridiem];

  document.getElementById('hungerNumber').innerHTML = `${playHung}`;
  document.getElementById('fatigueNumber').innerHTML = `${playFat}`;
  document.getElementById('money').innerHTML = `${formatter.format(playMon)}`;
  document.getElementById('time').innerHTML = `${dumbDays + ' ' + dumbHours + ':' + dumbMinutes + ' ' + dumbAmPm}`;
}


//beg command
const beg = () => {
  const curRoom = getRoom(disk.roomId); //get current room
  const chance1 = Math.floor(Math.random() * 100) + 1; //generate chance of getting caught my cops
  console.log(chance1 + ' rolled for chance to be caught');
  if(curRoom.isStreet){//if tha player is on the streets
    if (chance1 <= 20 && !policeCaught) { //if you got caught and you haven't been caught before
      policeCaught = true;
      caughtCoords1 = curRoom.coord;
      console.log(caughtCoords1 + ' these are the coordinates in which player was first caught');
      //enterRoom('beg-poli'); //enter the room where the police catch you
      println(`We'll give you a warning this time.`)
    } else if (chance1 >= 21 && !policeCaught) {//if you didnt get caught
      begLootTable(); //roll on loot table
    } else if (chance1 <= 20 && policeCaught) {//if you did get caught and have been caught before
      caughtCoords2 = curRoom.coord; //generate coordinates of current room
      console.log(caughtCoords2 + ' thesen are the coordinates in which player was caught again.')
      
      //distance formula
      const a = caughtCoords1[0] - caughtCoords2[0];
      const b = caughtCoords1[1] - caughtCoords2[1];
      const distance = Math.sqrt( (a*a) + (b*b) );

      if(distance >= 20) { //if player has moved far enough from where initially caught;
        policeCaught = false;
        console.log('caught but changed neighborhoods');
        begLootTable();
      } else if (distance <= 19) { //if player hasnt moved far enough from where initially caught
        println(`We already gave you a warning, come with us.`)
      }
    } else if (chance1 >= 20 && policeCaught) { //if player has been caught but passed the check
      console.log(`caught once but succeeded 80% check`);
      begLootTable();
    }else { //debug purposes
      console.log(`Beg Command Malfunctioning`)
    }
  } else { //if player isn't on the streets
    println(`You can't beg when you aren't on the streets.`)
  }

}


//loot table for beg command
const begLootTable = () => {
  const chance2 = Math.floor(Math.random() * 100) + 1; //roll on loot table
  console.log(chance2 + ' is what was rolled for loot chance')

  if (difficulty === 'medium'){ // 
    if (chance2 <= 15) { //chance to get nothing
      println(`People shy away when you ask for money, you weren't able to get anything.`);
    } else if (16 <= chance2 <= 70) { //chance to get between 0.25 & 1.25
      const dollarAmount = Math.floor(Math.random() * ((125 - 25) + 25)) / 100;
      println(`You were able to get ${formatter.format(dollarAmount)}`); //tell the player how much they got
      playMon = playMon + dollarAmount;//add amount to player inventory
    } else if (71 <= chance2 <= 90) { //chance to get between 1.26 & 1.75
      const dollarAmount = Math.floor(Math.random() * ((175 - 126) + 126)) / 100;
      println(`You were able to get ${formatter.format(dollarAmount)}`);
      playMon = playMon + dollarAmount;
    } else if (91 <= chance2 <= 100) { //chance to get between 1.76-2.00
      const dollarAmount = Math.Floor(Math.random() * ((200 - 176) + 176)) / 100;
      println(`You were able to get ${formatter.format(dollarAmount)}`);
      playMon = playMon + dollarAmount;
    }
    document.getElementById('money').innerHTML = `${formatter.format(playMon)}`;
  
  } else if (difficulty === 'easy') {
    if (1 <= chance2 <= 55) { //chance to get between 0.25 & 1.25
      const dollarAmount = Math.floor(Math.random() * ((125 - 25) + 25)) / 100;
      println(`You were able to get ${formatter.format(dollarAmount)}`);
      playMon = playMon + dollarAmount;
    } else if (56 <= chance2 <= 85) { //chance to get between 1.26 & 1.75
      const dollarAmount = Math.floor(Math.random() * ((175 - 126) + 126)) / 100;
      println(`You were able to get ${formatter.format(dollarAmount)}`);
      playMon = playMon + dollarAmount;
    } else if (86 <= chance2 <= 100) { //chance to get between 1.76-2.00
      const dollarAmount = Math.Floor(Math.random() * ((200 - 176) + 176)) / 100;
      println(`You were able to get ${formatter.format(dollarAmount)}`);
      playMon = playMon + dollarAmount;
    }
    document.getElementById('money').innerHTML = `${formatter.format(playMon)}`;

  } else if (difficulty === 'hard') {
    if (chance2 <= 20) { //chance to get nothing
      println(`People shy away when you ask for money, you weren't able to get anything.`);
    } else if (21 <= chance2 <= 75) { //chance to get between 0.25 & 1.25
      const dollarAmount = Math.floor(Math.random() * ((125 - 25) + 25)) / 100;
      println(`You were able to get ${formatter.format(dollarAmount)}`);
      playMon = playMon + dollarAmount;
    } else if (76 <= chance2 <= 95) { //chance to get between 1.26 & 1.75
      const dollarAmount = Math.floor(Math.random() * ((175 - 126) + 126)) / 100;
      println(`You were able to get ${formatter.format(dollarAmount)}`);
      playMon = playMon + dollarAmount;
    } else if (96 <= chance2 <= 100) { //chance to get between 1.76-2.00
      const dollarAmount = Math.Floor(Math.random() * ((200 - 176) + 176)) / 100;
      println(`You were able to get ${formatter.format(dollarAmount)}`);
      playMon = playMon + dollarAmount;
    }
    document.getElementById('money').innerHTML = `${formatter.format(playMon)}`;
  } else { // debug purposes
    println(`Oops something went wrong`);
  }
};

const giveMoney = (amount) => {
  playMon = playMon + amount

  document.getElementById('money').innerHTML = `${formatter.format(playMon)}`;
};

// drop item from inventory basically just reversed the take item function above.
let dropItem = (itemName) => {
  const room = getRoom(disk.roomId);
  const findItem = item => objectHasName(item, itemName);
  let itemIndex = disk.inventory.findIndex(findItem);
  const item = getItemInInventory(itemName);
  
  if (typeof itemIndex === 'number' && itemIndex > -1){
    if (item.isDroppable) {
      room.items.push(item)
      disk.inventory.splice(itemIndex, 1);
      if (typeof item.onDrop === 'function') {
        item.onDrop({disk, println, room, getRoom, enterRoom, item});
      } else {
        println(`You dropped the ${getName(item.name)}.`);
      }
    } else {
      if (typeof itemIndex === 'function') {
        item.onDrop({disk, println, room, getRoom, enterRoom, item});
      } else {
        println(item.block || `You can't drop that.`);
      }
    }
  }
  if (!item) {
    println(`You can't drop what you don't have.`);
    return;
  }
};



//sleep function
//check if bed is in room --
//check what room is in, different happenings for hotel or tenement or central park --
//(check if name = somewhere in central park) 
//check if nightmare has happened and if so do something different
//check if fatigue is is low enough
//reset time back to 9:05am but have it progress to the next day 
//update the player ui
//print out the proper dream sequence stuff or enter them into the right room
const sleepFunction = () => {
  const room = getRoom(disk.roomId);
  const nightmareRoom = getRoom('nigh-1');
  const nightmareRoom2 = getRoom('nigh2-1');


      if (room.id === 'hote-room-1' && !nightmareRoom.hasEntered && room.hasBed) {
        println(`You roll over and decide to fall back asleep.`);
        pressEnter('nigh-1');
      } else if (room.id === 'hote-room-1' && nightmareRoom.hasEntered && room.hasBed) {
        println(`You roll over and decide to fall back asleep.`);
        pressEnter('nigh-2nd');
      } else if (room.name === 'Somewhere in Central Park' && playFat <= 40) {
        enterRoom('cent-slee');
      } else if (room.name === 'Somewhere in Central Park' && playFat >= 40) {
        println(`You don't feel tired enough to sleep yet.`);
      } else if (room.id === 'hote-revi' && !nightmareRoom.hasEntered && room.hasBed){
        println(`You lie down on the bed to take a midday nap, you find it hard to fall asleep with the thoughts of who you are running through your mind. But alas sleep does find you eventually.`);
        pressEnter('nigh-1');
      } else if (room.id === 'hote-revi' && nightmareRoom.hasEntered && room.hasBed) {
        println(`You lie down on the bed to take a midday nap, you find it hard to fall asleep with the thoughts of who you are running through your mind. But alas sleep does find you eventually.`);
        pressEnter('nigh-2nd');
      } else if (room.id === 'tene-3' && !nightmareRoom2.hasEntered && room.hasBed && playFat <= 40) {
        println(`You lie down on the charred and moldy mattress, close your eyes, and fall asleep almost instantly.`);
        pressEnter('nigh2-1');
      } else if (room.id === 'tene-3' && !nightmareRoom2.hasEntered && room.hasBed && playFat >= 40) {
        println(`You don't feel tired enough to sleep yet.`);
      } else if (room.id === 'tene-3' && nightmareRoom2.hasEntered && room.hasBed && playFat <= 40){
        enterRoom('nigh2-4');
      } else if (room.id === 'tene-3' && nightmareRoom2.hasEntered && room.hasBed && playFat >= 40){
        println(`You don't feel tired enough to sleep yet.`);
      } else if (!room.hasBed && room.isStreet) {
        println(`Napping in the city isn't possible.`)
      } else if (!room.hasBed && !room.isStreet) {
        println(`You need a bed to sleep.`);
      } else {
        console.log('sleep function malfunctioning.');
      } 
    // } else {
    //   println(`You don't feel tired enough to sleep yet.`)
    // }
    
};


//save load\\
//player score\\
//difficulty level tie ins\\.

//random encounter function
const randomEncounter = () => {
  
  const chance = Math.floor(Math.random() * 100) + 1 //roll number between 1-100
  const room = getRoom(disk.roomId); //get the current room
  if (chance <= 5 && room.desc === '' || "" || ``) { //5% chance and the room description has to be empty
    const lat = room.coord[0]; //set the latitude to the latitude
    const lng = room.coord[1]; //set the longitude to the longitude
    if( (lat >= -36 && lat <= -2) && (lng >= -55 && lng <= -12 ) ) { //if the lat/lng is in the range of chelsea
      quIndex = Math.floor(Math.random() * 11);//roll an index equal to the length of the chelsea encounters array 
      if(quIndex >= 8 && quIndex <= 10) { //if the index is one of the ones without variables to assign
        chelDesc();//run the chelsea description function
        return;//end this function 
      } else { //if the index is one of the ones with variables to assign
        const encounter = chelseaEncounters[quIndex]; //grab the proper encounter based on the index
        const size = Object.keys(encounter).length; //get the length of the object to know how many variables to assign
        if(size === 4) {//if there are 4 variables to assign
          const u = Math.floor(Math.random() * encounter.choices4.length ); //randomly choose the choices
          const t = Math.floor(Math.random() * encounter.choices3.length );
          const v = Math.floor(Math.random() * encounter.choices2.length );
          const h = Math.floor(Math.random() * encounter.choices1.length );
          choice1 = encounter.choices1[h]; //assign those choices
          choice2 = encounter.choices2[v];
          choice3 = encounter.choices3[t];
          choice4 = encounter.choices4[u];
          chelDesc(choice1, choice2, choice3, choice4); //run the chelsea description function with the new choices.
          return;
        } else if (size === 3 ) {
          const t = Math.floor(Math.random() * encounter.choices3.length );
          const v = Math.floor(Math.random() * encounter.choices2.length );
          const h = Math.floor(Math.random() * encounter.choices1.length );
          choice1 = encounter.choices1[h];
          choice2 = encounter.choices2[v];
          choice3 = encounter.choices3[t];
          chelDesc(choice1, choice2, choice3);
          return;
        } else if (size === 2 ) {
          const v = Math.floor(Math.random() * encounter.choices2.length );
          const h = Math.floor(Math.random() * encounter.choices1.length );
          choice1 = encounter.choices1[h];
          choice2 = encounter.choices2[v];
          chelDesc(choice1, choice2);
          return;
        } else if ( size === 1 ) {
          const h = Math.floor(Math.random() * encounter.choices1.length );
          choice1 = encounter.choices1[h];
          chelDesc(choice1);
          return;
        }
      }
    } else if ( (lat >= 13 && lat <= 42) && (lng >= -55 && lng <= 28 ) ) {
      quIndex = Math.floor(Math.random() * 14);
      if(quIndex === 13) {
        midDesc();
        return;
      } else {
        const encounter = midtownEncounters[quIndex];
        const size = Object.keys(encounter).length; 
        if(size === 4) {
          const u = Math.floor(Math.random() * encounter.choices4.length );
          const t = Math.floor(Math.random() * encounter.choices3.length );
          const v = Math.floor(Math.random() * encounter.choices2.length );
          const h = Math.floor(Math.random() * encounter.choices1.length );
          choice1 = encounter.choices1[h];
          choice2 = encounter.choices2[v];
          choice3 = encounter.choices3[t];
          choice4 = encounter.choices4[u];
          midDesc(choice1, choice2, choice3, choice4);
          return;
        } else if (size === 3 ) {
          const t = Math.floor(Math.random() * encounter.choices3.length );
          const v = Math.floor(Math.random() * encounter.choices2.length );
          const h = Math.floor(Math.random() * encounter.choices1.length );
          choice1 = encounter.choices1[h];
          choice2 = encounter.choices2[v];
          choice3 = encounter.choices3[t];
          midDesc(choice1, choice2, choice3);
          return;
        } else if (size === 2 ) {
          const v = Math.floor(Math.random() * encounter.choices2.length );
          const h = Math.floor(Math.random() * encounter.choices1.length );
          choice1 = encounter.choices1[h];
          choice2 = encounter.choices2[v];
          midDesc(choice1, choice2);
          return;
        } else if ( size === 1 ) {
          const h = Math.floor(Math.random() * encounter.choices1.length );
          choice1 = encounter.choices1[h];
          midDesc(choice1);
          return;
        }
      }
    } else if ( (lat >= -58 && lat <= -36) && (lng >= -42 && lng <= 5 ) ) {
      quIndex = Math.floor(Math.random() * 12);
      if(quIndex >= 5) {
        greenDesc();
        return;
      } else {
        const encounter = midtownEncounters[quIndex];
        const size = Object.keys(encounter).length; 
        if(size === 4) {
          const u = Math.floor(Math.random() * encounter.choices4.length );
          const t = Math.floor(Math.random() * encounter.choices3.length );
          const v = Math.floor(Math.random() * encounter.choices2.length );
          const h = Math.floor(Math.random() * encounter.choices1.length );
          choice1 = encounter.choices1[h];
          choice2 = encounter.choices2[v];
          choice3 = encounter.choices3[t];
          choice4 = encounter.choices4[u];
          greenDesc(choice1, choice2, choice3, choice4);
          return;
        } else if (size === 3 ) {
          const t = Math.floor(Math.random() * encounter.choices3.length );
          const v = Math.floor(Math.random() * encounter.choices2.length );
          const h = Math.floor(Math.random() * encounter.choices1.length );
          choice1 = encounter.choices1[h];
          choice2 = encounter.choices2[v];
          choice3 = encounter.choices3[t];
          greenDesc(choice1, choice2, choice3);
          return;
        } else if (size === 2 ) {
          const v = Math.floor(Math.random() * encounter.choices2.length );
          const h = Math.floor(Math.random() * encounter.choices1.length );
          choice1 = encounter.choices1[h];
          choice2 = encounter.choices2[v];
          greenDesc(choice1, choice2);
          return;
        } else if ( size === 1 ) {
          const h = Math.floor(Math.random() * encounter.choices1.length );
          choice1 = encounter.choices1[h];
          greenDesc(choice1);
          return;
        }
      }
    } 
  } 
};




//x street indexer encounter functionality
const xStreetEvent = () => {
  const i1 = Math.floor(Math.random() * 31); //need number 0-30
  const i2 = Math.floor(Math.random() * 15);//need number 0-14
  //get an integer from a string within the numbers array based on the random number above
  const a = parseInt(xStreetNumber[i1].name); 
  if (a === 0) { //if the integer is zero
    encounterStreetNumber = Math.floor(Math.random() * 199) + 1; // set the encounter street number to random number in that range
  } else { //if the integer is anything else
     encounterStreetNumber = Math.floor(Math.random() * ( ( (a + 99) - a) + 1 ) + a ); //set the encounter street number to a random number in that proper indexes range
  } 
  encounterStreetName = xStreetNameComplete[i2]; //set the string value at that index to a variable
  encounterAnswer = xStreetNumber[i1].value[i2]; //get the answer to the encounter based on the random numbers above
  xStreetC = encounterStreetNumber % 10; //find the last digit of the encounter street number
  if(xStreetC === 1) { //if that last digit is 1
    xStreetD = `${encounterAnswer}st`; //provide another answer to the player based on proper suffix
  } else if (xStreetC === 2) { //if that last digit is 2
    xStreetD = `${encounterAnswer}nd`; //provide another answer to the player based on proper suffix
  } else if (xStreetC === 3) { //if that last digit is 3
    xStreetD = `${encounterAnswer}rd` //provide another answer to the player based on proper suffix
  } else { //since all the other digits have the same suffix 
    xStreetD = `${encounterAnswer}th` //provide another answer to the player based on proper suffix
  };
  const room = getRoom('xStreet-6'); //get the room with the answer onBlock
  //set that room description to the following based on the encounter variables generated above
  room.desc = `'Pardon me, but I'm from out of town,' he says in a twangy voice that makes his admission superfluous, 'and I can't seem to figure out how to get to ${encounterStreetNumber} ${encounterStreetName}.`
  //enter the x street encounter room chain
  enterRoom('xStreet');
};
//encounter needs to happen on 2nd move after leaving hotel then not sure when after that\\


////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
//           HOGANS WORKSPACE ABOVE           \\
////////////////////////////////////////////////
//\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\

// objects with methods for handling commands
// the array should be ordered by increasing number of accepted parameters
// e.g. index 0 means no parameters ("help"), index 1 means 1 parameter ("go north"), etc.
// the methods should be named after the command (the first argument, e.g. "help" or "go")
// any command accepting multiple parameters should take in a single array of parameters
// if the user has entered more arguments than the highest number you've defined here, we'll use the last set
let commands = [
  // no arguments (e.g. "help", "chars", "inv")
  {
    inv,
    i: inv, // shortcut for inventory
    look,
    l: look, // shortcut for look
    go,
    n,
    s,
    e,
    w,
    ne,
    se,
    sw,
    nw,
    talk,
    t: talk, // shortcut for talk
    take,
    get: take,
    items,
    use,
    chars,
    help,
    say,
    save,
    load,
    restore: load,
    forward,
    f: forward,
    dial,
    dialing,
    beg,
    sleep: sleepFunction,
  },
  // one argument (e.g. "go north", "take book")
  {
    firing: args => goDir(args), //Firing and below commands won't work, they're just accepting whatever word this is as a command
    lethal: args => goDir(args),
    xavier: args => goDir(args),
    steak: args => goDir(args), 
    roasted: args => goDir(args),
    barbecue: args => goDir(args),
    ring: args => goDir(args),
    enter: args => goDir(args),
    look: lookThusly,
    head: goDir,
    go: goDir,
    take: takeItem,
    get: takeItem,
    wake: takeItem,
    use: useItem,
    leave: useItem,
    say: sayString,
    drop: dropItem,
    save: x => save(x),
    load: x => load(x),
    restore: x => load(x),
    x: x => lookAt([null, x]), // IF standard shortcut for look at
    t: x => talkToOrAboutX('to', x), // IF standard shortcut for talk
    open: x => open(x),
    close: x => close(x),
    devcom1: x => teleport(x),
    devcom2: args => setMoney(args),
    devcom3: x => setHunger(x),
    devcom4: x => setFatigue(x),
    wear: wear,
    remove: remove,
    read: read,
    asking: args => askTesting(args),
    dialing: x => callNum(x),
  },
  // two+ arguments (e.g. "look at key", "talk to mary")
  {
    search: args => goDir(args[1]),
    look: args => goDir(args[1]),
    go: args => goDir(args[1]),
    walk: args => goDir(args[1]),
    look: lookAt,
    say(args) {
      const str = args.reduce((cur, acc) => cur + ' ' + acc, '');
      sayString(str);
    },
    steak(args) {
      const str = args.reduce((cur, acc) => cur + ' ' + acc, '');
      goDir(str);
    },
    talk: args => talkToOrAboutX(args[0], args[1]),
    x: args => lookAt([null, ...args]),
    turn: args => turnOffOn(args[0], args[1])
  },
  //3 arguments 
  {
    ask: askXAboutY,
  },
];

