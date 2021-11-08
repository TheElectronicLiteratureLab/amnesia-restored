const vault = {
  roomId: 'sund-vaul-3',
  rooms: [
    //talk to receptionist to move to this room
    {
      id: 'sund-vaul-1',
      name: 'The Sunderland Hotel',
      desc: ` "Mr. Cameron, I thought I should tell you that a woman came to the desk about an hour ago and was very insistent that she be allowed to examine your safe deposit box. She said she was your wife, but she had no identification, and you weren’t in your room, and at last she went away.  I hope--if she was indeed your wife--that she was not too much inconvenienced.  But we really can’t allow anyone to have access to the safe deposit boxes except those who’ve signed for them."`,
      onEnter: () => {
        pressEnter('sund-vaul-2');
      },
      exits: []
    },
    {
      id: 'sund-vaul-2',
      name: '',
      desc: `"I thought her a very attractive woman and quite smartly dressed. Of course, I did feel suspicious, having earlier spoken to the young lady, Miss Dudley, who had reserved the All-Faith Chapel for your wedding and whom I understood to be your intended bride. Of course, none of that is my business." \n\nPlease follow me, and I will let you in to examine the contents of the box."`,
      onEnter: () => {
        pressEnter('sund-vaul-3');
      },
      exits: []
    },
    {
      id: 'sund-vaul-3',
      name: 'The Sunderland Vault',
      desc: `The desk clerk unlocks the metal door of a cubbyhole of a room, and you follow him inside. Two of the walls are given over to steel safe deposit boxes of various sizes. There is a small table with a wooden chair by it. On the table is a computer keyboard and a small monitor, which connects by a black electric cord to a kind of dashboard projecting from the wall.`,
      onEnter: () => {
        pressEnter('sund-vaul-4');
      },
      exits: []
    },
    {
      id: 'sund-vaul-4',
      name: '',
      desc: `He shows you where your box is, number 334, switches on the computer, types a few instructions on the keyboard, and leaves the room with this parting advice: "The security system will allow for as many as four errors -- so do type carefully. Remember, the computer understands a blank space as another letter. If I can be of further assistance, I’ll be at the desk outside." \n\nHe leaves you in the small safe deposit vault, facing the alert-looking monitor of the computer, with its cursor blinking in front of the blank space where you are supposed to type in the password:`,
      onEnter: () => {
        reenableInput();
      },
      onBlock: () => {
        if(prevInput === 'with god'){
          enterRoom('sund-vaul-9');
        } else if (prevInput === '') {
          println('Please enter a password')
        } else {
          enterRoom('sund-vaul-5') //go to failure room 1
        }
      },
      exits: []
    },
    {
      id: 'sund-vaul-5',
      name: '',
      desc: ``,
      onEnter: () => {
        document.getElementById('output').innerHTML = '';
        println(`There is a delicate grinding sound from the console on the wall and then the screen of the monitor flashes this message at you: \n\nI'M SORRY. THAT IS NOT THE PASSWORD THAT WILL OPEN YOUR BOX. \nPLEASE TRY TO REMEMBER THE EXACT WORD OR WORDS OR NUMERALS THAT YOU CHOSE TO BE THE PASSWORD \n\n\nThe screen blanks out for a moment, and then offers you another opportunity.`)
        reenableInput();
      },
      onBlock: () => {
        if(prevInput === 'with god'){
          enterRoom('sund-vaul-9');
        } else if (prevInput === '') {
          println('Please enter a password')
        } else {
          enterRoom('sund-vaul-6') //go to failure room 2
        }
      },
      exits: []
    },
    {
      id: 'sund-vaul-6',
      name: '',
      desc: ``,
      onEnter: () => {
        let bibleRead = true;
        reenableInput();
        //flag for reading the bible earlier
        if (bibleRead === true) {
          document.getElementById('output').innerHTML = '';
          println(`The screen blanks out for a moment, and you recall having read, earlier in the day, something that may have held a hint, perhaps even a hint specific to your present dilemma. But what was it? Something about "doubt and uncertainty."`);
        } else {
          println(`The cursor on the monitor before winks on and off, indifferent to your dilemma: \n\nYOUR PASSWORD IS`);
        }
      },
      onBlock: () => {
        if(prevInput === 'with god'){
          enterRoom('sund-vaul-9');
        } else if (prevInput === '') {
          println('Please enter a password')
        } else {
          enterRoom('sund-vaul-7') //go to failure room 3
        }
      },
      exits: []
    },
    {
      id: 'sund-vaul-7',
      name: '',
      desc: ``,
      onEnter: () => {
        document.getElementById('output').innerHTML = '';
        println(`The screen blanks out, and now you remember that it was when you’d looked at the Gideon Bible’s lists of chapter-and- verses to be read by those with particular needs. The text commended to those “in doubt and uncertainty” had been crossed out and another text number hand-written in its place. You certainly qualify on the score of doubt and uncertainty. What was that text?`);
        reenableInput();
      },
      onBlock: () => {
        if(prevInput === 'with god'){
          enterRoom('sund-vaul-9');
        } else if (prevInput === '') {
          println('Please enter a password');
        } else {
          enterRoom('sund-vaul-8') //go to failure room 4
        }
        //in the read function put a check in it to see if you are in sund-vaul-7 or sund-vaul-6 in order give slightly text when reading in vault.
      },
      exits: []
    },
    {
      id: 'sund-vaul-8',
      name: '',
      desc: `Your fourth hunch is as wrong as the rest. The screen goes completely blank, and a buzzer softly bleeps. A moment later the desk clerk steps into the room. “I’m sorry, Mr. Cameron, but I’ll have to ask you to step back out into the lobby. If you still can’t remember your password, you’ll have to speak with the manager tomorrow. He’s the only one empowered to circumvent the password system. Sometimes these modern improvements are more trouble than they’re worth.” Reluctantly you return to the lobby, and the clerk locks the door to the safe deposit room.`,
      onEnter: () => {
        pressEnter(`lobb-revi`);
      },
      exits: []
    },
    {
      id: 'sund-vaul-9',
      name: '',
      desc: ``,
      onEnter: () => {
        document.getElementById('output').innerHTML = '';
        println(`With a click of instant recognition, the little metal door of Box 334 springs open, and a message appears on the monitor before you: \n\nYOUR SAFETY DEPUSIT BOX IS NOW OPEN FOR EXAMINATION.`);
        pressEnter('sund-vaul-10');
      },
      exits: []
    },
    {
      id: 'sund-vaul-10',
      name: '',
      desc: ``,
      onEnter: () => {
        document.getElementById('output').innerHTML = '';
        println(`You lift the gray metal lid of the box. The box contains a single 5.25-inch floppy disk in a plain paper sleeve. You feel equal pangs of curiosity and of disappointment. The disc may well have the answer to your basic question of WHO AM I? But money would have been more immediately useful. You feel like a kid who’s unwrapped a Christmas present and has to say thank you for new underwear.`)
        //floppy disk to inventory
        pressEnter('sund-vaul-11');
      },
      exits: []
    },
    {
      id: 'sund-vaul-11',
      name: 'The Sunderland Hotel Lobby',
      desc: ``,
      onEnter: () => {
        document.getElementById('output').innerHTML = '';
        println(`When you return to the lobby, gym bag in hand, the clerk looks up from the desk. You thank him and explain that you will have no further need for the safe deposit box.`);
        pressEnter('lobb-revi');
      },
      exits: []
    },
  ] 
}

