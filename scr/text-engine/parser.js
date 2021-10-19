
// process user input & update game state (bulk of the engine)
// accepts optional string input; otherwise grabs it from the input element
let confirmArray = ['Ok.', 'Got it.', 'Check.', 'If you say so.', 'All right.'];
let f_firstphonecall = false;

let applyInput = (input) => {
  input = input || getInput();
  inputs.push(input);
  inputsPos = inputs.length;
  println(`> ${input}`);
  prevInput = input;
  //console.log(inputs);
  const val = input.toLowerCase();
  setInput(''); // reset input field
  

  const exec = (cmd, arg) => {
    const room = getRoom(disk.roomId);
    if (cmd) {
      cmd(arg);
      moveCount++;
  console.log(moveCount);
    } else if (disk.conversation) {
      println(`Type the capitalized KEYWORD to select a topic.`);
    } 
    
    //hard coding for the character creation, will come back to fix this
    //just trying to make it work for now
    //light or dark hair
    else if (disk.roomId === 'hote-room-2' && prevInput === 'light') {
      hairColor = 'dark';
      println(pickOne(confirmArray));
      enterRoom('hote-room-3');
    } else if (disk.roomId === 'hote-room-2' && prevInput === 'dark') {
      hairColor = 'light';
      println(pickOne(confirmArray));
      enterRoom('hote-room-3');
    } else if (disk.roomId === 'hote-room-2') {
      if (prevInput === '')
      {
        println('Come again?');
      } else {
        hairColor = 'light';
        println(pickOne(confirmArray));
        enterRoom('hote-room-3');
      }
    }

    //long or short hair
    else if (disk.roomId === 'hote-room-3' && prevInput === 'long') {
      hairLength = 'short';
      println(pickOne(confirmArray));
      enterRoom('hote-room-4');
    }
    else if (disk.roomId === 'hote-room-3' && prevInput === 'short') {
      hairLength = 'long';
      println(pickOne(confirmArray));
      enterRoom('hote-room-4');
    }
    else if (disk.roomId === 'hote-room-3') {
      if (prevInput === '')
      {
        println('Come again?');
      } else {
        let hair = ['short', 'long'];
        hairLength = pickOne(hair);
        println(pickOne(confirmArray));
        enterRoom('hote-room-4');
      }
    }

    //beard, stache, or neither
    else if (disk.roomId === 'hote-room-4' && prevInput === 'beard') {
      hairFace = 'a mustache'
      println(pickOne(confirmArray));
      enterRoom('hote-room-5');
    } else if (disk.roomId === 'hote-room-4' && prevInput === 'mustache') {
      hairFace = 'a full beard'
      println(pickOne(confirmArray));
      enterRoom('hote-room-5');
    } else if (disk.roomId === 'hote-room-4' && prevInput === 'neither') {
      let facialHair = ['a full beard', 'a mustache but no beard'];
      hairFace = pickOne(facialHair);
      println(pickOne(confirmArray));
      enterRoom('hote-room-5');
    } else if (disk.roomId === 'hote-room-4') {
      if (prevInput === '') 
      {
        println('Come again?');        
      }
      else {
        let facialHair = ['a full beard', 'a mustache', 'neither a beard or mustache'];
        hairFace = pickOne(facialHair);
        println(pickOne(confirmArray));
        enterRoom('hote-room-5');
      }
    }

    //blue or brown?
    else if (disk.roomId === 'hote-room-5' && prevInput === 'blue') {
      eyeColor = 'brown';
      println(pickOne(confirmArray));
      enterRoom('hote-room-6');
    } else if (disk.roomId === 'hote-room-5' && prevInput === 'brown') {
      eyeColor = 'blue';
      println(pickOne(confirmArray));
      enterRoom('hote-room-6');
    } else if (disk.roomId === 'hote-room-5') {
      if (prevInput === '')
      {
        println('Come again?');
      } else {
        eyeColor = 'blue';
        println(pickOne(confirmArray));
        enterRoom('hote-room-6');  
      }
    }
    
    //Yes or no phone
    else if (disk.roomId === 'hote-room-8' && getItemInRoomById('roomphone', disk.roomId).inUse === true && prevInput === 'yes') {
      println(`"I'll have a bellboy bring the readjusted VISA slip to your room momentarily. Have a good day." She hangs up.`);
      getItemInRoomById('roomphone', disk.roomId).inUse = false;
      enterRoom('hote-room-9');
    } else if (disk.roomId === 'hote-room-8' && getItemInRoomById('roomphone', disk.roomId).inUse === true && prevInput === 'no') {
      println(`"We have your VISA slip here. I'll have a bellboy bring it up to you. Have a good day." She hangs up.`);
      getItemInRoomById('roomphone', disk.roomId).inUse = false;
      enterRoom('hote-room-9');
    }
    
    //yes or no bellboy
    else if (disk.roomId === 'hote-room-10' && prevInput === 'yes') {
      println(`He accepts the tip with a murmur of thanks and leaves you alone in the room to consider what John Cameron's next move should be. Clothes are surely the first priority. Think: you ought to look everywhere where there might be clothes.`);
      // Flag tiping bellboy
      //f_tippedbellboy = true;
      enterRoom('hote-room-8');
    } else if (disk.roomId === 'hote-room-10' && prevInput === 'no') {
      println(`The bellboy leaves with a discontened mumble, and leaves you alone in the room to consider what John Cameron's next move should be. Clothes are surely the first priority. Think: you ought to look everywhere where there might be clothes.`);
      // Flag tiping bellboy
      //f_tippedbellboy = false;
      enterRoom('hote-room-8');
    }
    
    if (typeof room.onBlock === 'function') {
      room.onBlock({disk, println, getRoom, enterRoom,});
      return;
    }

    else {
      println(`Sorry, I didn't understand your input. For a list of available commands, type HELP.`);
    }
  };

  let args = val.split(' ')

  // remove articles (except for the say command, which prints back what the user said)
  if (args[0] !== 'say') {
    args = args.filter(arg => arg !== 'a' && arg !== 'an' && arg != 'the');
  }

  const [command, ...arguments] = args;
  const room = getRoom(disk.roomId);

  if (arguments.length === 1) {
    exec(commands[1][command], arguments[0]);
  } else if (command === 'take' && arguments.length) {
    // support for taking items with spaces in the names
    // (just tries to match on the first word)
    takeItem(arguments[0]);
  } else if (command === 'use' && arguments.length) {
    // support for using items with spaces in the names
    // (just tries to match on the first word)
    useItem(arguments[0]);
  } else if (arguments.length >= commands.length) {
    exec(commands[commands.length - 1][command], arguments);
  } else if (room.exits && getExitDir(command, room.exits)) {
    // handle shorthand direction command, e.g. "EAST" instead of "GO EAST"
    goDir(command);
  } else if (disk.conversation && (disk.conversation[command] || conversationIncludesTopic(disk.conversation, command))) {
    talkToOrAboutX('about', command);
  } else {
    exec(commands[arguments.length][command], arguments);
  }
};

// allows wrapping text in special characters so println can convert them to HTML tags
// string, string, string -> string
let addStyleTags = (str, char, tagName) => {
  let odd = true;
  while (str.includes(char)) {
    const tag = odd ? `<${tagName}>` : `</${tagName}>`;
    str = str.replace(char, tag);
    odd = !odd;
  }

  return str;
};

// overwrite user input
// string -> nothing
let setInput = (str) => {
  input.value = str;
  // on the next frame, move the cursor to the end of the line
  setTimeout(() => {
    input.selectionStart = input.selectionEnd = input.value.length;
  });
};


// predict what the user is trying to type
let autocomplete = () => {
  const room = getRoom(disk.roomId);
  const words = input.value.toLowerCase().trim().split(/\s+/);
  const wordsSansStub = words.slice(0, words.length - 1);
  const itemNames = (room.items || []).concat(disk.inventory).map(item => item.name);

  const stub = words[words.length - 1];
  let options;

  if (words.length === 1) {
    // get the list of options from the commands array
    // (exclude one-character commands from auto-completion)
    const allCommands = commands
      .reduce((acc, cur) => acc.concat(Object.keys(cur)), [])
      .filter(cmd => cmd.length > 1);

    options = [...new Set(allCommands)];
    if (disk.conversation) {
      options = Array.isArray(disk.conversation)
        ? options.concat(disk.conversation.map(getKeywordFromTopic))
        : Object.keys(disk.conversation);
      options.push('nothing');
    }
  } else if (words.length === 2) {
    const optionMap = {
      talk: ['to', 'about'],
      take: itemNames,
      use: itemNames,
      go: (room.exits || []).map(exit => exit.dir),
      look: ['at'],
    };
    options = optionMap[words[0]];
  } else if (words.length === 3) {
    const characterNames = (getCharactersInRoom(room.id) || []).map(character => character.name);
    const optionMap = {
      to: characterNames,
      at: characterNames.concat(itemNames),
    };
    options = (optionMap[words[1]] || []).flat().map(string => string.toLowerCase());
  }

  const stubRegex = new RegExp(`^${stub}`);
  const matches = (options || []).flat().filter(option => option.match(stubRegex));

  if (!matches.length) {
    return;
  }

  if (matches.length > 1) {
    const longestCommonStartingSubstring = (arr1) => {
      const arr = arr1.concat().sort();
      const a1 = arr[0];
      const a2 = arr[arr.length-1];
      const L = a1.length;
      let i = 0;
      while (i < L && a1.charAt(i) === a2.charAt(i)) {
        i++;
      }
      return a1.substring(0, i);
    };

    input.value = [...wordsSansStub,longestCommonStartingSubstring(matches)].join(' ');
  } else {
    input.value = [...wordsSansStub, matches[0]].join(' ');
  }
};

// select previously entered commands
// string -> nothing
let navigateHistory = (dir) => {
  if (dir === 'prev') {
    inputsPos--;
    if (inputsPos < 0) {
      inputsPos = 0;
    }
  } else if (dir === 'next') {
    inputsPos++;
    if (inputsPos > inputs.length) {
      inputsPos = inputs.length;
    }
  }

  setInput(inputs[inputsPos] || '');
};