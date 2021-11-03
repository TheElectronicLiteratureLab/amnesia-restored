const computerStore = {
  roomId: 'frie-comp-7',
  rooms: [
    {
      id: '56-madi',
      coord: [],
      name: 'E. 56th St. and Madison Ave.',
      desc: `As you come to the corner of Madison Avenue, you notice, halfway down the block a shop front that seems somehow familiar. The sign above the front window, written in letters that imitate a dot-matrix printout, says:
      USER-FRIENDLY
      COMPUTER STORE.`,
      isStreet: true,
      onEnter: () => {
        //eventually check what time it is
        //if its too early or late change exit id to open or closed.
      },
      onLook: () => {
        println(`The store looks like it has either not yet opened for business or recently gone bankrupt.`);
      },
      exits: [
        {dir: ['store', 'computer store', 'user-friendly computer store'], id: 'frie-comp-1'},
      ]
    },
    {
      id: 'frie-comp-1',
      coord: [],
      name: 'USER-FRIENDLY COMPUTER STORE',
      desc: `The store looks like it has either not yet opened for business or recently gone bankrupt. There are only a few computers in sight--an Apple, a Commodore, and an IBM PC. \n\n Various products line the wall, including Electronic Arts' "Adventure Construction Set", "Tales of the Unknown: The Bard's Tale", and "Thomas M. Disch's AMNESIA."`,
      onEnter: () => {
        //if first time:
        println(`The one other person in the store--a woman in what is almost but not quite a man’s business suit--approaches you, and says, “How may I help you, sir?”`);
        pressEnter('frie-comp-3');
      },
      exits: []
    },
    {//if closed
      id: 'frie-comp-2',
      coord: [],
      name: '',
      desc: 'The store looks closed. \n\nList HOURS HERE:',
      onEnter: () => {
        pressEnter('56-madi');
      },
      exits: []
    },
    {
      id: 'frie-comp-3',
      coord: [],
      name: '',
      desc: `The saleswoman examines the disk you show her. “This looks like any other floppy disk, sir. There are any number of machines it might have been made on--and of course it will only run on a machine if it’s been formatted to do so.
      I don’t pretend to understand any more of it than that. You can try it on the machines we have here, and if it runs on one of them you can rent time for $7.50 an hour. We have available the Apple 2e, the IBM PC, and the Commodore 64. Which would you like?`,
      onEnter: () => {
        reenableInput();
      },
      onBlock: () => {
        //Eventually check for which version is being run
        //If player picks a different version afterwards change it.
        if (prevInput === 'Apple 2e' || prevInput === 'apple' || prevInput === 'the apple' || prevInput === 'the apple 2e' || prevInput === 'apple 2e') {
          //run a check if version is apple
          document.getElementById('output').innerHTML = '';
          println(`The Apple's disk drive whirrs earnestly, but the monitor remains blank "Perhaps," the saleswoman suggest, "you'd like to try another machine. Which would you like the Commodore or the IBM?"`);
          //readApple = true;
          enterRoom('frie-comp-4');

         
        } else if (prevInput === 'commodore' || prevInput === 'Commodore' || prevInput === 'Commodore 64' || prevInput === 'commodore 64' || prevInput === 'the commodore 64') {
          //run a check if version is c64
          document.getElementById('output').innerHTML = '';
          println(`The screen of the Commodore refuses to acknolodege the presence of your disk in its disk drive. "Not this one," the saleswoman says. "Another machine perhaps?"`);
          //readCommodore = true;
        }
        else if (prevInput === 'pc' || prevInput === 'ibm pc' || prevInput === 'the ibm pc' || prevInput === 'IBM PC' || prevInput === 'IBM' || prevInput === 'PC' || prevInput === 'the PC' ) {
          //run a check if version is ibm
          enterRoom('frie-comp-4');
        }
        else if (prevInput = '') {
          println('Please select a computer sir.');
        } else if (prevInput === 'a computer') {
          println(`Alright listen here you little shit. I don't get paid enough for this. Now pick a TYPE of PC.`);
        } else {
          println('Please select a computer sir. We have an Apple 2e, Commodore 64, and IBM PC.');
        }
      },
      exits: [
        {dir: 'leave', id: '56-madi'}
      ]
    },
    {
      id: 'frie-comp-4',
      coord: [],
      name: '',
      desc: '',
      onEnter: () => {
        document.getElementById('output').innerHTML = '';
        println(`&#42&#42&#42&#42 HIGHLY CONFIDENTIAL &#42&#42&#42&#42\n\nDo not access material on this desk unless it is YOURS. \n\nYou will know if it is yours only if you don’t know who you are.`, 'enter');
        pressEnter('frie-comp-5');
      },
      exits: []
    },
    {
      id: 'frie-comp-5',
      coord: [],
      name: '',
      desc: `The saleswoman who has been looking over your shoulder gives a little sniff of disapproval after reading the text that appears on the screen. "Well, that certainly piques the curiosity, doesn’t it," she comments levelly. "I assume you’ll want to work in private if you do wish to rent time, and there is an Apple set up in its own little cubbyhole. As I said, the rental fee is $7.50, cash in advance."`,
      onEnter: () => {
        reenableInput();
      },
      onBlock: () => {
        if (prevInput === 'pay')
        {
          enterRoom('frie-comp-6')
        }
        //pay, check if you have 7.50
        //if (prevInput === 'pay' && money >= 7.5)
        //{
          //rent computer
        //}
        //println('');
        //put here leave if you have money
        //"I don’t have the time now," you tell the saleswoman. "Maybe later." She smiles stiffly as you go out the door to Madison Avenue.
      },
      exits: []
    },
    {
      id: 'frie-comp-6',
      coord: [],
      name: '',
      desc: `You pay the saleswoman for an hour on the Apple, and she leads you to a back room about the size of the hotel’s safe deposit vault. When you’re alone, you boot the disk into the Apple disk drive, and once again the monitor lights up with this introductory message:`,
      onEnter: () => {
        println(`&#42&#42&#42&#42 HIGHLY CONFIDENTIAL &#42&#42&#42&#42\n\nDo not access material on this desk unless it is YOURS. \n\nYou will know if it is yours only if you don’t know who you are.`, 'enter');
        pressEnter('frie-comp-7')
      },
      exits: []
    },
    {
      id: 'frie-comp-7',
      coord: [],
      name: '',
      desc: '',
      onEnter: () => {
        document.getElementById('output').innerHTML = '';
        println(`E/xit opsys \n\nDirectory of CAMERON: \n ENTER A FILE ID:
        <table style="width: 100%"><tr><th>ID:</th><th>FILENAME:</th><th>SIZE:</th><th>TY:</th><th>DTE:</th></tr><tr><th></th><th>Vol254</th><th></th><th></th><th>1-Jan-80</th></tr><tr><th>1</th><th>File1</th><th>5k</th><th>Txt</th><th>4-Jul-86</th></tr><tr><th>2</th><th>File2</th><th>6k</th><th>Txt</th><th>3-Jul-86</th></tr><tr><th>3</th><th>File3</th><th>8k</th><th>Txt</th><th>2-Jul-86</th></tr><tr><th>4</th><th>File4</th><th>7k</th><th>Txt</th><th>1-Jul-86</th></tr><tr><th>5</th><th>&#42File5</th><th>14k</th><th>Txt</th><th>30-Jun-86</th></tr>
        </table>`);
        pressEnter('frie-comp-8');
      },
      /*
      onBlock: () => {
        if (prevInput ===  '1' || prevInput === 'file1' || prevInput === 'File1' || prevInput === 'access File1' || prevInput === 'access file1') {
          pressEnter('frie-comp-8')
        } 
      },
      */
      exits: []
    },
    {
      id: 'frie-comp-8', //riddle one
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    {
      id: 'frie-comp-',
      coord: [],
      name: '',
      desc: '',
      exits: []
    },
    
  ]
}