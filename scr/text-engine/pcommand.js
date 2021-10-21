// list player inventory
let inv = () => {
  const items = disk.inventory.filter(item => !item.isHidden);

  if (!items.length) {
    println(`You don't have any items in your inventory.`);
    return;
  }

  println(`You have the following items in your inventory:`);
  items.forEach(item => {
    println(`${bullet} ${getName(item.name)}`);
  });
};

// show room description
let look = () => {
  const room = getRoom(disk.roomId);

  if (typeof room.onLook === 'function') {
    room.onLook({disk, println});
  }

  println(room.desc)
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
    listTopics(topics);
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
        listTopics(character);
      }
    } else {
      println(`That person is no longer available for conversation.`);
      disk.conversant = undefined;
      disk.conversation = undefined;
    }
  }
};



// list takeable items in room
let take = () => {
  const room = getRoom(disk.roomId);
  const items = (room.items || []).filter(item => item.isTakeable && !item.isHidden);

  if (!items.length) {
    println(`There's nothing to take.`);
    return;
  }

  println(`The following items can be taken:`);
  items.forEach(item => println(`${bullet} ${getName(item.name)}`));
};

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


// drop item from inventory
let dropItem = (itemName) => {
  const room = getRoom(disk.roomId);
  const findItem = item => objectHasName(item, itemName);
  let itemIndex = disk.inventory.findIndex(findItem);
  const item = getItemInInventory(itemName);
  
  if (typeof itemIndex === 'number' && itemIndex > -1){
    if (item.isDroppable) {
      room.items.push(item)
      disk.inventory.splice(itemIndex, 1);
      if (typeof itemIndex === 'function') {
        item.onDrop({disk, println, room, getRoom, enterRoom, item});
      } else {
        println(`You dropped the ${getName(item.name)}.`);
      }
    } else {
      if (typeof item.onDrop === 'function') {
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
    INV:    list inventory items
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

// dial command
let dial = (number) => { 
  const room = getRoom(disk.roomId);
  let numbers = [
      { num: '3', roomid: 'phone-1'}, // front desk
      { num: '4', roomid: 'phone-2'}, // room service
      { num: '5', roomid: 'phone-3'}, // valet
      { num: '6', roomid: 'phone-4'}, // bellman
      { num: '7', roomid: 'phone-5'}, // security
      { num: '8-', roomid: 'phone-6'}, // other rooms
      { num: '9-', roomid: 'phone-7'}, // outside calls
      { num: '911', roomid: 'phone-8'} // 911
  ];


// if brochure === in inventory push numbers
  if(getItemInInventory('brochure')){
    numbers.push(
      { num: '555-1188', roomid: 'phone-9'}, // Rod & Harpmeister Funeral Service
      { num: '555-7656', roomid: 'phone-10'}, // Rolo's Pizzeria
      { num: '555-7673', roomid: 'phone-11'} // Koch's Florists
    );
  }


// if address book === in inventory push numbers
if(getItemInInventory('address book')){
  numbers.push(
    { num: '555-1314', roomid: 'phone-12'}, // JA
    { num: '555-1315', roomid: 'phone-13'}, // Wit's End
    { num: '555-2712', roomid: 'phone-14'}, // FBI
    { num: '555-2259', roomid: 'phone-15'}, // E.H.
    { num: '555-2577', roomid: 'phone-16'}, // Lila T.
    { num: '555-2783', roomid: 'phone-17'}, // Sue G.
    { num: '555-4312', roomid: 'phone-18'}, // Chelsea H.
    { num: '555-4365', roomid: 'phone-19'}, // Sex
    { num: '555-4685', roomid: 'phone-20'}, // Kvetch
    { num: '555-5436', roomid: 'phone-21'}, // AA
    { num: '555-5643', roomid: 'phone-22'}, // Interlude
    { num: '555-6200', roomid: 'phone-23'}, // TTTT
    { num: '555-8422', roomid: 'phone-24'}, // Drugs
    { num: '555-8749', roomid: 'phone-25'}, // R + J
    { num: '555-8876', roomid: 'phone-26'}, // J.L.
    { num: '571-7171', roomid: 'phone-27'}, // Soft
    { num: '976-1212', roomid: 'phone-28'} // F
  );
}

// after Bette's phonecall with Denise's Number push number
// { num: '555-5413', roomid: 'phone-29'}

  // checks to see if you're in a room with a phone
  if(room.id === 'hote-room' || 'hote-revi' || 'bett-apar'){ // add telephone booths on streets
    const num = number;
    let id;
   
  
    for(let i = 0; i < numbers.length; i++){
      if(numbers[i].num === num){
        id = numbers[i].roomid;
      } 
    }

    if(!id){
      println(`This number doesn't exist.`)
    }

    if(id){
      println(id);
    }


  } else {
    println(`With what phone?`);
  };

  
 

}

//ask character about topic function

// function askAbout(xCharacter, yTopic) {
//   const room = getRoom(disk.roomId);

// };

function askXAboutY(xCharacter, yPrep, zTopic) {
  const room = getRoom(disk.roomId);
  const character = getCharacter(xCharacter, getCharactersInRoom(room.id));

  if (yPrep !== 'about') {
    println('You can Ask x(character) about y(topic)');
  }
  
  if (yPrep === 'about'){
    console.log(character.name);
    console.log(xCharacter, zTopic);
  }
};

//ask character about topic function
// const askXAboutY = ([x, y]) => {
//   const character = getCharacter(x, getCharactersInRoom(disk.roomId));
//   disk.conversant = character;
//   talkToOrAboutX('about', y);
// };


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
  } else if (item.itemId === 'window') {
    println('The window is sealed to keep the air-conditioned air in the hotel.');
  } else if (item.itemId === 'dresser') {
    println('One after the other, you look through all the dresser drawers. All you find is a leaflet advertising Acme Invisible Reweaving.');
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

function teleport (place) {
  enterRoom(place);
  println(`
  Player Teleported to ${place}`);
}

function setMoney(amount) {
  playMon = amount;
  println(`
    Player Money now set to ${amount}`
  );
};

function setHunger(amount) {
  playHung = amount;
  println(`
    Player Hunger now set to ${amount}`
  );
};

function setFatigue(amount) {
  playFat = amount;
  println(`
    Player fatigue now set to ${amount}`
  );
};

// jump command

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
  },
  // one argument (e.g. "go north", "take book")
  {
    firing: args => goDir(args), //Firing and below commands won't work, they're just accepting whatever word this is as a command
    lethal: args => goDir(args),
    xavier: args => goDir(args),
    steak: args => goDir(args), 
    roasted: args => goDir(args),
    barbecue: args => goDir(args),
    look: lookThusly,
    head: goDir,
    go: goDir,
    take: takeItem,
    get: takeItem,
    wake: takeItem,
    use: useItem,
    leave: useItem,
    answer: useItem,
    say: sayString,
    drop: dropItem,
    save: x => save(x),
    load: x => load(x),
    restore: x => load(x),
    x: x => lookAt([null, x]), // IF standard shortcut for look at
    t: x => talkToOrAboutX('to', x), // IF standard shortcut for talk
    open: x => open(x),
    close: x => close(x),
    answer: x => answer(x),
    dial: dial,
    devcom1: x => teleport(x),
    devcom2: args => setMoney(args),
    devcom3: x => setHunger(x),
    devcom4: x => setFatigue(x),
  },
  // two+ arguments (e.g. "look at key", "talk to mary")
  {
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
  {
    ask: args => askXAboutY(args[0], args[2]),
  },
];
