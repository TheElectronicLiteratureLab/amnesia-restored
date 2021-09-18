// process user input & update game state (bulk of the engine)
// accepts optional string input; otherwise grabs it from the input element
let applyInput = (input) => {
  input = input || getInput();
  inputs.push(input);
  inputsPos = inputs.length;
  println(`> ${input}`);

  const val = input.toLowerCase();
  setInput(''); // reset input field

  const exec = (cmd, arg) => {
    if (cmd) {
      cmd(arg);
    } else if (disk.conversation) {
      println(`Type the capitalized KEYWORD to select a topic.`);
    } else {
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
  } else if (room.exits && getExit(command, room.exits)) {
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