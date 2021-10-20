const amnesiaRestored = {
  roomId: 'deat-1', // Set this to the ID of the room you want the player to start in.
  currPos: [],
  rooms: [
    {
      id: 'titl-scre-1',
      name: 'AMNESIA: RESTORED',
      desc: '',
      onEnter: () => {
        pressEnter(`amne-intr-1`);
      }
    },
    {
      id: 'amne-intr-1', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: '', // Displayed each time the player enters the room.
      desc: '',
      onEnter: () => {
        document.getElementById("output").innerHTML = "";
        document.querySelector('input').disabled = true;
        document.getElementById("arrow").innerHTML = "";
        //document.getElementById("inputarrow").disabled = true;
        println("You wake up feeling wonderful.\n\n ");
        setTimeout(() => {  println("But also, in some indefinable way, strange\n\n "); }, 2000);
        setTimeout(() => {  println("Slowly, as you lie there on the cool bedspread, it dawns on you that you have absolutely no idea where you are. A hotel room, by the look of it. But with the curtains drawn, you don't know in what city, or even what country.\n\n\n"); }, 4000);
        setTimeout(() => {  pressEnter('amne-intr-2');}, 4100);  
      },
    },
    {
      id: 'amne-intr-2',
      name: '',
      desc: "",
      onEnter: () => {
        document.getElementById("output").innerHTML = "";
        println(`Then the blank of WHERE AM I? balloons into the bigger the total blank of WHO AM I? It's a question without an answer. Your memory is an open book--with every page blank. You have no name, no known address, no memories of friends or relatives or schools or jobs. You have\n\n`)
        setTimeout(() => {  println("Thomas M. Disch's\n \n", "enter"); }, 1000);
        setTimeout(() => {  println("\n**AMNESIA**", "intro"); }, 1100);
        setTimeout(() => {  document.addEventListener("keydown", pressEnter('amne-intr-3'));}, 1150);
      },
    },
    {
      id: 'amne-intr-3',
      name: '',
      desc: '',
      onEnter: () => {
        document.getElementById("output").innerHTML = "";
        println('INSERT CREDITS HERE');
        println('AMNESIA: RESTORED was originally written by Thomas M. Disch, \nand programmed in JavaScript');
        println("Software copyright C 1984, 1985, 1986 By Thomas M. Disch and Cognetics Corp.");
        println("Story copyright C 1984, 1985, 1986 by Thomas M. Disch");
        println("AMNESIA: RESTORED C 2021 by ??????????");
        println("Executive Team: Dene Grigar, Suzanne Anderson, Greg Philbrook");
        println("Project Manager: Andrew Thompson");
        println("Lead Designer: Ariel Wallace");
        println("Lead Programmer: Ahria Nicholas");
        println("Lead Web Developer: Elaina Sundwell");
        println("Lead Animator: James Kay");
        println("Lead Videographer: Zach McNaught");
        println("Lead Promotioner: Sydney Brower");
        println("Special Thanks: Washington State University Vancouver, Greg, Sarah, more, more, more");
        pressEnter('hote-room-1');
      }
    },
    //**********************************************************/
    //                     Hotel Room 1502                     /
    //********************************************************/
    {
      id: 'hote-room-1',
      name: 'Hotel Room',
      desc: `What's a person to do in such a situation? \n\nWhat YOU do is...`,
      onEnter: () => {
        document.getElementById("output").innerHTML = "";
        println(`What's a person to do in such a situation? \n\nWhat YOU do is...`);
        reenableInput();
      },
      items: [
        {
          name: 'up',
          onTake: () => {
            enterRoom('hote-room-2');
            getInput();
          }
        }
      ]
    },
    {
      id: 'hote-room-2',
      name: '',
      desc: "You get out of bed, and as you do, you realize, from a glance at your naked body, that you are white, male, and reasonably well-put-together. But what about your face? That’s part of anyone’s identity that should be proof against amnesia. The mirror over the dresser is angled so you can’t see yourself from where you stand. So you decide to take a simple test, closing your eyes and taking an inventory of how you think you ought to look.",
      onEnter: () => {
        println('Your hair--is it light or dark?');
      }
    },
    {
      id: 'hote-room-3',
      name: '',
      desc: '',
      onEnter: () => {
        println('Long or short?');
      }
    },
    {
      id: 'hote-room-4',
      name: '',
      desc: '',
      onEnter: () => {
        println('Do you have a beard? Or a mustache? or neither?');
      }
    },
    {
      id: 'hote-room-5',
      name: '',
      desc: '',
      onEnter: () => {
        println('What is the color of your eyes?');
      }
    },
    {
      id: 'hote-room-6',
      name: '',
      desc: '',
      onEnter: () => {
        println(`You could hardly be more completely mistaken! For when you look in the mirror, the stranger you see there has ${hairLength}, ${hairColor} hair. He has ${hairFace}. And his eyes are emphatically ${eyeColor}.`);
        pressEnter('hote-room-7');
      }
    },
    {
      id: 'hote-room-7',
      name: 'Hotel Room',
      desc: `You take a deep breath--and long look about the hotel room, starting with the writing pad on the dresser. A sheet of the hotel's stationary informs you that you're a guest of the Sunderland Hotel. There is a room key with a large green plastic tag showing your room number, 1502.

      On the nightstand next to the bed you find a strange circular wheel called an 'X-street indexer,' and a single ragged dollar bill, both of which you take. To pass the time the hotel offers a television. Also, a Gideon Bible. A ballpoint pen has been placed near the phone.
      `,
      onEnter: () => {
        //reenableInput();
        pressEnter('hote-room-8');
      },
    },
    {
      id: 'hote-room-8', // The main room you can start exploring
      name: 'Hotel Room 1502',
      desc: `To the left of the dresser is an IBM PC computer on its own metal cart. You do a slow double-take. Have computers become standard equipment for hotel rooms in the same way that TVs are? No, there's a decal on the side of the monitor declaring that the computer is the property not of the hotel but of the User-Friendly Computer Store.`,
      onEnter: () => {
        addItem('xindexer');
        reenableInput();
      },
      onLook: () => {
        println(`You take a long look about the hotel room, starting with the dresser. A sheet of the hotel's stationary informs you that you're a guest of the Sunderland Hotel. There is a room key with a large green plastic tag showing your room number, 1502. \nTo pass the time the hotel offers a television. Also, a Gideon Bible. A ballpoint pen has been placed near the phone. \nTo the left of the dresser is an IBM PC computer on its own metal cart. You do a slow double-take. Have computers become standard equipment for hotel rooms in the same way that TVs are? No, there's a decal on the side of the monitor declaring that the computer is the property not of the hotel but of the User-Friendly Computer Store.`)
      },
      items: [
        {
          itemId: 'xindexer',
          name: ['X-street indexer', 'indexer', 'street indexer'],
          desc: 'A circular wheel that shows the cross street given the address.',
          isTakeable: true,
          onDrop: () => {
            println(`You shouldn't drop that. It might be important.`);
          }
        },
        {
          itemId: 'bible',
          name: ['Gideon Bible', 'bible', 'holy book', 'the bible'],
          desc: `You open the Bible to the only dog-eared page in the book and you notice that the page so marked has been scribbled on. It is the page on which appropriate texts are cited for those with special needs: For those who mourn; For those in ill health; etc. The list of texts commended to "those in doubt and uncertainty" had been crossed out, and above the deleted citations of chapter and verse someone had written "John I." \n If you remember John 1 reightly, it seems oddly irrelevant to the needs of those in double. But never mind.`,
          isTakeable: true,
          onDrop: () => {
            println(`You shouldn't drop that. It might be important.`);
          }
        },
        {
          itemId: 'pen',
          name: ['ballpoint pen', 'pen'],
          desc: 'It is a white plastic ballpoint.',
          isTakeable: true,
          isDroppable: true
        },
        {
          itemId: 'roomtv',
          name: ['Simplex TV', 'TV', 'television', 'telly'],
          desc: ' ',
          channelArr: [
            'On Channel 2 there is an ad for Kool-Aid, and then a re-run of WHEEL OF FORTUNE resumes. The three contestants are trying to guess the letters of someone’s name. There’s no T in it, no S, no N.', 
            'It’s tuned to the hotel’s own cable channel, and the screen fills with the heaving breasts and writhing limbs of a closed-circuit X-rated movie. You fee1 just enough arousal to know that your sexual orientation is definitely heterosexual.',
            'Channel 4 has a news program. The President of El Salvador wants more money for his country’s defense. The President and the Soviet Union have unkind things to say about each other. Two people died in a fire in the Bronx. The weather will remain sunny.',
            'Channel 5 has ads for soap and toothpaste and floor wax, and then a talk show host resumes his interview with an actress starring in a new prime-time soap opera, who feels that her role is helping her to grow in unexpected directions.',
            'static',
            'Channel 7 also has a news program. The President has asked Congress for money for arms. Two people died in a fire in the Bronx. \nRioting continues for the fifth day at the State Penitentiary at Revoltillo in Texas, where prisoners are protesting the prison’s food and its unsanitary conditions. There is some footage showing vats of stew cooking in the prison kitchen, the sight of which makes you continue to feel strangely queasy all through the weather forecast, which is for another bright and sunny day.',
            'static',
            `Channel 9 is showing a re-run of FAMILY FEUD. Host Richard Dawson is speaking: “100 people surveyed, top five answers are on the board--here’s the question: 'Name a brand of dishwasher detergent.' The question seems to ring a bell.`,
            'static',
            'Channel 11 is showing a lot of advertising interspersed with clips from an old black-and-white movie.',
            'static',
            `Channel 13 is showing a lot of advertising interspersed with clips from an old black-and-white movie.`
          ],
          isOn: false,
          arrCount: 0,
          onLook: () => {
            let item = getItemInRoomById('roomtv', 'hote-room-8');
            if(item.isOn) {
              if (item.desc == ' ')
              {
                println('It is a Simplex TV--a brand you’ve never heard of, or at least cannot remember. There are three buttons on the set. The first is for on and off, the second is marked F for forward, allowing you to change the channels, but the third is broken off. The TV is on.');
              } else {
                item.desc = 'It is a Simplex TV--a brand you’ve never heard of, or at least cannot remember. There are three buttons on the set. The first is for on and off, the second is marked F for forward, allowing you to change the channels, but the third is broken off. The TV is on.';
              }
              
            } else {
              if (item.desc == ' ')
              {
                println('It is a Simplex TV--a brand you’ve never heard of, or at least cannot remember. There are three buttons on the set. The first is for on and off, the second is marked F for forward, allowing you to change the channels, but the third is broken off. The TV is off.');
              }
              item.desc = 'It is a Simplex TV--a brand you’ve never heard of, or at least cannot remember. There are three buttons on the set. The first is for on and off, the second is marked F for forward, allowing you to change the channels, but the third is broken off. The TV is off.'
            }
          },
          onUse: () => {
            let item = getItemInRoomById('roomtv', 'hote-room-8');
            if(item.isOn) {
              item.desc = ' It is a Simplex TV--a brand you’ve never heard of, or at least cannot remember. There are three buttons on the set. The first is for on and off, the second is marked F for forward, allowing you to change the channels, but the third is broken off. The TV is on.';
              println(item.desc);
            } else {
              item.desc = 'It is a Simplex TV--a brand you’ve never heard of, or at least cannot remember. There are three buttons on the set. The first is for on and off, the second is marked F for forward, allowing you to change the channels, but the third is broken off. The TV is off.'
              println(item.desc);
            }
          }
        },
        {
          itemId: 'computer',
          name: ['IBM PC', 'apple', 'com', 'comp', 'computer', 'commodore', 'commodore 64', 'apple iie', 'pc'],
          desc: ' ',
          isOn: false,
          onLook: () => {
            let pc = getItemInRoomById('computer', 'hote-room-8');
            if(pc.isOn === true)
            {
              if (pc.desc === ' ')
              {
                println('The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned on.');
              }
              pc.desc = 'The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned on.';
              println(pc.desc);
            } else {
              if (pc.desc === ' ')
              {
                println('The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned off.');
              }
              pc.desc = 'The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned off.';
              println(pc.desc);
            }
          },
          onUse: () => {
            let pc = getItemInRoomById('computer', 'hote-room-8');
            if(pc.isOn === true)
            {
              println('The computer is already on.');
            } else {
              println('The computer is off.');
            }
          },
          onBlock: () => {
            //activate phone
          }
        },
        {
          itemId: 'dresser',
          name: ['dresser', 'drawer'],
          desc: ` `,
          isOpen: false,
          onLook: () => {
            let dresser = getItemInRoomById('dresser', disk.roomId);
            let stationary = getItemInRoomById('stationary', disk.roomId);
            let bible = getItemInRoomById('bible', disk.roomId);
            let roomkey = getItemInRoomById('roomkey', disk.roomId);
            let pen = getItemInRoomById('pen', disk.roomId);
            let brochure = getItemInRoomById('brochure', disk.roomId);

            let comma1 = ',';
            let comma2 = ',';
            let comma3 = ',';
            let iOne = ' a Gideon Bible, ';
            let iTwo = ' the room key with its large green tag, ';
            let iThr = ' ';
            let iFou = ', and beneath the telephone the hotel’s brochure';
            let iFiv = ' a pen,';

            if (dresser.desc === ' ') {
              if (!stationary === undefined) {
              
              }
              if (bible === undefined) {
                iOne = '';
              }
              if (roomkey === undefined) {
                iTwo = '';
              }
              if (brochure === undefined) {
                iFou = '';
              }
              if (pen === undefined) {
                iFiv = '';
              }
              println(`The four-drawer dresser is made of unconvincingly simulated wood, and the mirror above it is bolted securely to the wall. On top of the dresser is a supply of stationery with the Sunderland Hotel monogram${comma1}${iOne}${iTwo}${iFiv}and a large black ashtray. At the end of the dresser farthest from the window is a dial telephone${iFou}.`);
            } else {
              dresser.desc = `The four-drawer dresser is made of unconvincingly simulated wood, and the mirror above it is bolted securely to the wall. On top of the dresser is a supply of stationery with the Sunderland Hotel monogram${comma1}${iOne}${iTwo}${iFiv} and a large black ashtray. At the end of the dresser farthest from the window is a dial telephone${iFou}.`;
            }
          }
        },
        {
          itemId: 'roomkey',
          name: ['metal key', 'room key', 'hotel key', '1502 key', 'key'],
          desc: 'The key chain is green plastic with the numerals 1502 in white. The key is ordinary.',
          isTakeable: true,
          isDroppable: true
        },
        {
          itemId: 'stationary',
          name: ['hotel stationary', 'stationary', 'paper'],
          desc: 'The stationary says SUNDERLAND HOTEL at the top.',
          isTakeable: true,
          isDroppable: true
        },
        {
          itemId: 'roomphone',
          name: ['phone', 'telephone'],
          desc: 'The phone on the dresser belongs to NYNEX.',
          onTake: () => {
            println("You probably shouldn't take that.");
          }
        },
        {
          itemId: 'brochure',
          name: ['brochure', 'hotel brochure'],
          desc: 'A brochure from the Sunderland Hotel',
          isTakeable: true,
          isDroppable: true,
          onUse: () => {
            println('Brochure coming soon!');
          },
          onTake: () => {
            println(`You take it but don't read it`);
          },
          onDrop: () => {

          }
        },
        {
          itemId: 'curtains',
          name: ['drapes', 'curtains'],
          desc: ' ',
          isOpen: false,
          onLook: () => {
            let item = getItemInRoomById('curtains', disk.roomId);
            if (item.isCurtOpen === true) {
              if (item.desc === ' ')
              println(`The ${item.name[0]} are open.`);
            } else {
              println(item.desc);
            }
            if (item.isCurtOpen === false) {
              if (item.desc === ' ')
              println(`The ${item.name[0]} are closed.`);
            } else {
              println(item.desc);
            }
          }
        },
        {
          itemId: 'window',
          name: 'window',
          desc: 'The window is shrouded by the drapes.',
          onLook: () => {
            let item = getItemInRoomById('curtains', disk.roomId);
            if (item.isCurtOpen === false) {
              item.desc = 'The window is shrouded by the drapes';
            } else {
              item.desc = `Even without being able to see the Empire State Building off to the south, you would know by the sheer immensity of the view that you are in Manhattan. It seems familiar, but only in the general way that a famous postcard view is familiar. You don’t feel as though you belong in this city, as though you are a New Yorker.`;
              println(item.desc);
            }
          }
        }
      ],
      exits: [
        {dir: 'bathroom', id: 'bath-1'}
      ]
    },
    //**********************************************************/
    //               Hotel Room 1502 Revisited                 /
    //********************************************************/
    {
      id: 'hote-revi', //unique ID for this room
      name: 'Hotel Room', //room name (displayed to player)
      desc: `The first thing you notice is the late afternoon light streaming across the skyscrapers of the city, flashing from windows and walls of glass. It is late in the day, and the sun is low in the sky.
      
      You see a **tuxedo** lying on your bed.`, //text that appears when player first enters the room
      //**interactable items**
      onEnter: () => {
          if(getRoom('hote-revi').visits >= 2){
              let hotelRoom = getRoom('hote-revi');
              hotelRoom.desc = `You're standing in your hotel room`;
              println(hotelRoom.desc);
          }
      },
      onLook: () => {
          const room = getRoom('hote-revi');
          let keyDesc = `There is a **room key** with a large green plastic tag showing your room number, 1502.`;
          let bibleDesc = `Also, a **Gideon Bible**.`;
          let penDesc = `A **ballpoint pen** has been placed near the phone.`;

          room.desc = `You take a deep breath -- and a long look about the hotel room, starting with the writing pad on the dresser, where a sheet of the hotel's stationery informs you that you're a guest of the Sunderland Hotel. ${keyDesc}
          
          To pass the time the hotel offers a **television**. ${bibleDesc} ${penDesc}
          
          To the left of the dresser is an **IBM PC** computer on its own metal cart. There's a **window** bro.`; //IBM PC will change depending on which version the player is on. Need to add function for this. 
          
          if(getItemInInventory('metal key')){ //if the 1502 room key is already in inventory
              room.desc = room.desc.replace(`${keyDesc}`, '');
          };

          if(getItemInInventory('Gideon Bible')){ //if the Gideon Bible is already in inventory
              room.desc = room.desc.replace(`${bibleDesc}`, '');
          };

          if(getItemInInventory('ballpoint pen')){ //if the pen is already in inventory
              room.desc = room.desc.replace(`${penDesc}`, '');
          };

      }, // closes onLook function

      items: [
          {
              itemId: 'roomphone',
              name: ['phone', 'telephone'],
              desc: 'The phone on the dress belongs to NYNEX.',
              onTake: () => {
                println("You probably shouldn't take that.");
              },
              onUse: () => {
                  enterRoom('hote-revi-2'); //LUKE SEQUENCE, just wanted to check if works...won't work without calling getRoom
              },
          },
          { 
              itemId: 'roomkey', //change? keep? 
              name: ['metal key', 'room key', 'hotel key', '1502 key', 'key'],
              desc: `The key chain is green plastic with the numerals 1502 in white. The key is ordinary.`,
              isTakeable: true,
              isDroppable: true,
          }, 
          {
              itemId: 'bible',
              name: ['Gideon Bible', 'bible', 'holy book', 'the bible'],
              desc: `You open the Bible to the only dog-eared page in the book and you notice that the page so marked has been scribbled on. It is the page on which appropriate texts are cited for those with special needs: For those who mourn; For those in ill health; etc. The list of texts commended to "those in doubt and uncertainty" had been crossed out, and above the deleted citations of chapter and verse someone had written "John I." \n If you remember John 1 reightly, it seems oddly irrelevant to the needs of those in double. But never mind.`,
              isTakeable: true,
              isDroppable: true,
              onDrop: () => {
                println(`You shouldn't drop that. It might be important.`);
              }
          },
          {
              itemId: 'pen',
              name: ['ballpoint pen', 'pen'],
              desc: `It is a white plastic ballpoint.`,
              isTakeable: true, 
              isDroppable: true
          },
          {
            itemId: 'roomtv',
            name: ['Simplex TV', 'TV', 'television', 'telly'],
            desc: ' ',
            channelArr: [
              'On Channel 2 there is an ad for Kool-Aid, and then a re-run of WHEEL OF FORTUNE resumes. The three contestants are trying to guess the letters of someone’s name. There’s no T in it, no S, no N.', 
              'It’s tuned to the hotel’s own cable channel, and the screen fills with the heaving breasts and writhing limbs of a closed-circuit X-rated movie. You fee1 just enough arousal to know that your sexual orientation is definitely heterosexual.',
              'Channel 4 has a news program. The President of El Salvador wants more money for his country’s defense. The President and the Soviet Union have unkind things to say about each other. Two people died in a fire in the Bronx. The weather will remain sunny.',
              'Channel 5 has ads for soap and toothpaste and floor wax, and then a talk show host resumes his interview with an actress starring in a new prime-time soap opera, who feels that her role is helping her to grow in unexpected directions.',
              'static',
              'Channel 7 also has a news program. The President has asked Congress for money for arms. Two people died in a fire in the Bronx. \nRioting continues for the fifth day at the State Penitentiary at Revoltillo in Texas, where prisoners are protesting the prison’s food and its unsanitary conditions. There is some footage showing vats of stew cooking in the prison kitchen, the sight of which makes you continue to feel strangely queasy all through the weather forecast, which is for another bright and sunny day.',
              'static',
              `Channel 9 is showing a re-run of FAMILY FEUD. Host Richard Dawson is speaking: “100 people surveyed, top five answers are on the board--here’s the question: 'Name a brand of dishwasher detergent.' The question seems to ring a bell.`,
              'static',
              'Channel 11 is showing a lot of advertising interspersed with clips from an old black-and-white movie.',
              'static',
              `Channel 13 is showing a lot of advertising interspersed with clips from an old black-and-white movie.`
            ],
            isOn: false,
            arrCount: 0,
            onLook: () => {
              let item = getItemInRoomById('roomtv', 'hote-room-8');
              if(item.isOn) {
                if (item.desc == ' ')
                {
                  println('It is a Simplex TV--a brand you’ve never heard of, or at least cannot remember. There are three buttons on the set. The first is for on and off, the second is marked F for forward, allowing you to change the channels, but the third is broken off. The TV is on.');
                } else {
                  item.desc = 'It is a Simplex TV--a brand you’ve never heard of, or at least cannot remember. There are three buttons on the set. The first is for on and off, the second is marked F for forward, allowing you to change the channels, but the third is broken off. The TV is on.';
                }
                
              } else {
                if (item.desc == ' ')
                {
                  println('It is a Simplex TV--a brand you’ve never heard of, or at least cannot remember. There are three buttons on the set. The first is for on and off, the second is marked F for forward, allowing you to change the channels, but the third is broken off. The TV is off.');
                }
                item.desc = 'It is a Simplex TV--a brand you’ve never heard of, or at least cannot remember. There are three buttons on the set. The first is for on and off, the second is marked F for forward, allowing you to change the channels, but the third is broken off. The TV is off.'
              }
            },
            onUse: () => {
              let item = getItemInRoomById('roomtv', 'hote-room-8');
              if(item.isOn) {
                item.desc = ' It is a Simplex TV--a brand you’ve never heard of, or at least cannot remember. There are three buttons on the set. The first is for on and off, the second is marked F for forward, allowing you to change the channels, but the third is broken off. The TV is on.';
                println(item.desc);
              } else {
                item.desc = 'It is a Simplex TV--a brand you’ve never heard of, or at least cannot remember. There are three buttons on the set. The first is for on and off, the second is marked F for forward, allowing you to change the channels, but the third is broken off. The TV is off.'
                println(item.desc);
              }
            }
          },  
          {
            itemId: 'computer',
            names: ['IBM PC', 'apple', 'com', 'comp', 'computer', 'commodore', 'commodore 64', 'apple iie', 'pc'],
            desc: ` `,
            isOn: false,
            onLook: () => {
              let pc = getItemInRoomById('computer', 'hote-room-8');
              if(pc.isOn === true)
              {
                if (item.desc == ' ')
                {
                  println('The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned on.');
                }
                pc.desc = 'The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned on.';
                println(pc.desc);
              } else {
                if (item.desc == ' ')
                {
                  println('The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned off.');
                }
                pc.desc = 'The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned off.';
                println(pc.desc);
              }
            },
            onUse: () => {
              let pc = getItemInRoomById('computer', 'hote-room-8');
              if(pc.isOn === true)
              {
                pc.desc = 'The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned on.';
              } else {
                pc.desc = 'The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned off.';
              }
            }                
          },
          {
            itemId: 'dresser',
            name: ['dresser', 'drawer'],
            desc: ` `,
            isOpen: false,
            onLook: () => {
              let dresser = getItemInRoomById('dresser', disk.roomId);
              let stationary = getItemInRoomById('stationary', disk.roomId);
              let bible = getItemInRoomById('bible', disk.roomId);
              let roomkey = getItemInRoomById('roomkey', disk.roomId);
              let pen = getItemInRoomById('pen', disk.roomId);
              let brochure = getItemInRoomById('brochure', disk.roomId);
  
              let comma1 = ',';
              let comma2 = ',';
              let comma3 = ',';
              let iOne = ' a Gideon Bible, ';
              let iTwo = ' the room key with its large green tag, ';
              let iThr = ' ';
              let iFou = ', and beneath the telephone the hotel’s brochure';
              let iFiv = ' a pen,';
  
              if (dresser.desc === ' ') {
                if (!stationary === undefined) {
                
                }
                if (bible === undefined) {
                  iOne = '';
                }
                if (roomkey === undefined) {
                  iTwo = '';
                }
                if (brochure === undefined) {
                  iFou = '';
                }
                if (pen === undefined) {
                  iFiv = '';
                }
                println(`The four-drawer dresser is made of unconvincingly simulated wood, and the mirror above it is bolted securely to the wall. On top of the dresser is a supply of stationery with the Sunderland Hotel monogram${comma1}${iOne}${iTwo}${iFiv}and a large black ashtray. At the end of the dresser farthest from the window is a dial telephone${iFou}.`);
              } else {
                dresser.desc = `The four-drawer dresser is made of unconvincingly simulated wood, and the mirror above it is bolted securely to the wall. On top of the dresser is a supply of stationery with the Sunderland Hotel monogram${comma1}${iOne}${iTwo}${iFiv} and a large black ashtray. At the end of the dresser farthest from the window is a dial telephone${iFou}.`;
              }
            }
          },
          {
            itemId: 'stationary',
            name: ['hotel stationary', 'stationary', 'paper'],
            desc: 'The stationary says SUNDERLAND HOTEL at the top.',
            isTakeable: true,
            isDroppable: true
          },
          {
            itemId: 'brochure',
            name: ['brochure', 'hotel brochure'],
            desc: 'A brochure from the Sunderland Hotel',
            isTakeable: true,
            isDroppable: true,
            onUse: () => {
              println('Brochure coming soon!');
            },
            onTake: () => {
              println(`You take it but don't read it`);
            },
            onDrop: () => {
  
            }
          },
          {
              //itemId: 'tuxedo', 
              name: ['tuxedo', 'tux'],
              desc: `There is an all-while tuxedo, sitting on the bed. There could be only one place anyone would ever wear this outfit -- to his own wedding. Could the explanation for your amnesia be as simple as this? A last-ditch attempt to escape the state of matrimony?
              
              Maybe it got delivered to this room by mistake. There's an easy way to find out. You examine the tuxedo, and seems to be exactly your size.`,
              isTakeable: true, 
              onTake: () => println('You take the white tuxedo.'),//appears in inventory as 'white tuxedo'
              //add onWear function to put clothes on player 
              isWearable: true,
          },
          {
            itemId: 'curtains',
            name: ['drapes', 'curtains'],
            desc: ' ',
            isOpen: false,
            onLook: () => {
              let item = getItemInRoomById('curtains', disk.roomId);
              if (item.isCurtOpen === true) {
                if (item.desc === ' ')
                println(`The ${item.name[0]} are open.`);
              } else {
                println(item.desc);
              }
              if (item.isCurtOpen === false) {
                if (item.desc === ' ')
                println(`The ${item.name[0]} are closed.`);
              } else {
                println(item.desc);
              }
            }
          },
          {
              itemId: 'window',
              name: 'window', //hotel room window
              desc: `The first thing you notice is the late afternoon light streaming across the skyscrapers of the city, flashing from windows and walls of glass. It is late in the day, and the sun low in the sky.`,
          },
      ], //end of hote-revi items
      exits: [
          {
              dir: ['bathroom'], 
              id: 'hote-revi-1',
          }, //leads to bathroom 
          {
              dir: ['leave'],
              id: 'hote-revi-2',
              //leads to phone interaction with LUKE
          },
          {
              //enter phone room??
          },
          {
              dir: ['leave2'],
              id: 'hote-revi-8', //leads to transition to Lobby node
          },
      ],
  }, //end of hote-revi room
  {
      id: 'hote-revi-1',
      name: 'Bathroom',
      desc: `You're in the bathroom. It has the usual amneities of a good but not over-fancy hotel -- a **small pink sink** encased in formica that's pretneding to be marble, **a tiled shower**, **a toilet**, a towel rack with a **large towel**. But no clothes.`, 
      onEnter: () => {
          const room = getRoom('hote-revi-1');
          if(getItemInInventory('towel')){ //if the towel is already in inventory
              room.desc = room.desc.replace(` with a **large towel**.`, '.');
          };
      },
      items: [
          {
              name: ['sink', 'pink sink'], 
              desc: `It is a small pink sink encased in formica that's pretending to be marble. There is a used cake of **soap** sitting on the vanity.`,
              /*item: {
                      name: ['soap', 'cake of soap'],
                      desc: `It smells like lemon.`,
                      isTakeable: true,
                      onTake: () => {
                          println('You take the deodorant soap.');//appears in inventory as 'deodorant soap'
                          const sink = getItemInRoom('sink', 'hote-revi-1');
                          sink.desc = sink.desc.replace('There is a used cake of **soap** sitting on the vanity.', '');
                      },
                      onUse: () => {
                          println(`You wash your hands. It occurs to you only now that you are not wearing a wedding band. Does that mean you're single? Or divorced? Or that the ring has been stolen? Or that, like many married men, you've never worn one?`); //this line is printed after the command WASH HANDS, though on USE SOAP nothing is inputed in emulated game, nor in manuscript. Keep this? Or create a command that allows players to type WASH?
                      },
                  }, //end of sink items*/ //currently can't have an item property on item object.

          },
          {
              name: ['tiled shower', 'shower'],
              desc: `The tiled shower is equipped with hot and cold water knobs, and a water conserving shower head.`,
              onUse: () => println(`You remove any clothing you have on. 
              
              You step into the shower, slide the door shut, adjust the temperature to your liking, and take a nice long lathery shower. Not that you really needed one that badly, but cleaniness is next to godliness after all.`),
          },
          {
              name: 'toilet',
              desc: `Next to the toilet on the wall is a fresh roll of Charmin. You lift the lid of the toilet and bend down to look inside. What you see is a dim reflection of your own unfamiliar face -- looking very sheepish.`,
              onUse: () => println(`That's done. Now flush. Very good. Evidently your toilet training has not been neglected.`),
          },
          {
              name: ['towel', 'large towel'],
              desc: `It is a large fluffy towel.`,
              isTakeable: true,
              onTake: () => {
                  println('You take the towel'); //appears in inventory as 'towel'
                  const bathroom = getRoom('hote-revi-1');
                  bathroom.desc = bathroom.desc.replace(` with a **large towel**.`, '.'); //removes towel description from bathroom look description
              },
              //can WEAR towel.
          },
      ], //end of bathroom items
      exits: [
          {
              dir: ['room'], //rename
              id: 'hote-revi'
          },
      ],//end of hote-revi-1 exits
  }, //end of hote-revi-1 room
  {
      id:'hote-revi-2',
      name: '',
      desc:`The phone rings.`,
      
      items: [
          {
              itemId: '',
              name: 'phone',
              onUse: () => enterRoom('hote-revi-3'),
          },
      ], //end of hote-revi-2 items
  }, //end of hote-revi-2 room (conversation w/Luke on phone)
  {
      id: 'hote-revi-3',
      name: '',
      desc: ``,
      onEnter: () => {
          println(`You go to the dresser and answer the phone with a rather tentative "Hello?"`);
          pressEnter('hote-revi-4');
      }

  }, //end of hote-revi-3 room (conversation w/Luke on phone)
  {
      id: 'hote-revi-4',
      name: '',
      desc: '',
      onEnter: () => {
          println(`"John!" booms a man's gravelly voice. "Where've you been, son? We've been down here in the lobby for the last couple hours, calling your room every five minutes." He goes on without waiting for your reply. "I guess that last margarita last night was your undoing. Well, no matter, so long as you're on your feet again. Have you tried on your white bib and tucket yet?`);
          getInput();
          if(getInput() === ['yes', 'I have.', `I'm wearing it now.`]){
              println(`"Well then, what are we waiting for? I'm paying this damned preacher by the hour, and he's going to want time and a half for overtime pretty soon. Get on down to the lobby on the double!" He hangs up, and you're left thinking that getting married is almost as easy as...as putting on a suit of clothes.`);
          } else if(getInput() === ['no', 'I have not']){
              println(`"Well, get moving, my boy! Your bride is starting to think you may be planning to leave her standing at the altar. So unless you want me to come up there with a shotgun, you get into them fancy duds and report to the lobby on the double!" He hangs up, and you wonder, fleetingly, if getting married is usually this easy. Why, it's like...putting on a suit of clothes.`);
          } else {
              println(`"Very funny, my boy, very funny. But let's leave the joking for after the ceremony, if you don't mind. I'm paying this preacher by the hour, and he don't come cheap. So move your butt on down here-- and be wearing that wedding uniform. Your little Alice says she is aching to see you all in white." He hangs up, and you think: This isn't my life, this is a movie called *Alice at the Sunderland Hotel*. And there is the costume for the White Rabbit in three boxes on the bed.`)
          }
          pressEnter('hote-revi-1');
      },
  },//end of hote-revi-4 room (conversation w/Luke on phone)
  {
      id: 'hote-revi-5',
      name: '',
      desc: '',
      onEnter: () => {
          println(`You hear a key being fitted into the lock of the door and feel-- too late-- a sense of urgency. A man enters the room, dressed like a Texas businessman in a suit and tie with boots and a Stetson. The gun in his hand, however, is not consistent with his western theme, being a very modest .38 caliber pistol.`);
          pressEnter('hote-revi-6');
      }
  },//end of hote-revi-5 room (death for dawdlers ending)
  {
      id: 'hote-revi-6',
      name: '',
      desc: '',
      onEnter: () => {
          println(`"That's right, son," he says; aiming the gun at your chest, "you just freeze, and I will explain something about my character. I have never been a man to abide dawdlers. In fact, one time in Nashville, there was this waitress who took the better part of an hour to serve me a damned hamburger. I told her I was becoming impatient, and then I told her again. And then I lost my temper. Like this!`);
          pressEnter('hote-revi-7');
      }
  },//end of hote-revi-6 room (death for dawdlers ending)
  {
      id: 'hote-revi-7',
      name: '',
      desc: '',
      onEnter: () => {
          println(`The man shoots you twice in the chest, first through your liver and then through your heart. In the moments before your death, your killer offers some parting words of advice. "In the future, friend, don't dawdle. Dawdling never got anyone anywhere." He bends down and places your hands crosswise over the two bullet holes in your chest, straightens out your legs, and leaves the room with a tip of his Stetson.
          
          A fly alights on your nose. For a little while you feel the tickle of its feet, and then you're dead.`);
          pressEnter('');//leads to end screen
      }
  },//end of hote-revi-7 room (death for dawdlers ending)
  {
      id: 'hote-revi-8',
      name: '',
      desc: '',
      onEnter: () => {
        if(getItemInInventoryById('roomkey')){
            println(`You are just about out the door of the room when you remember to check in your pocket to see if you remembered to take the room key. You have it.
            
            You return to the room to pick up anything else you think you ought to have with you.
            
            You decide to leave most of the hotel's possessions in the room. Apparently you possess a sense of morality.
            
            You leave the room and close the door behind you. Then you head down the corridor. One of the elevators arrives at 15 the moment you press the DOWN button. You get in and ride to the lobby.`);
            pressEnter('lobby');//leads to Lobby node
        } else {
            println(`You are just about out the door of the room when you remember to check in your pocket to see if you remembered to take the room key. You've left it back in the room.
            
            You return to get the key-- and anything else you think you ought to have with you.
            
            You decide to leave most of the hotel's possessions in the room. Apparently you possess a sense of morality.
            
            You leave the room and close the door behind you. Then you head down the corridor. One of the elevators arrives at 15 the moment you press the DOWN button. You get in and ride to the lobby.`);
            pressEnter('lobby');//leads to Lobby node
        }
      } 
    },
    //**********************************************************/
    //                      The Nightmare                      /
    //********************************************************/

    //**********************************************************/
    //                Suicide at the Sunderland                /
    //********************************************************/
    {
      id: 'hell-1', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'Lethe', // Displayed each time the player enters the room.
      desc: `Now you are dead--but that isn’t the end of your problems. Because it turns out that there is an afterlife--and you are there. It is highly unpleasant, though strictly speaking it isn’t hell. Not yet. You and a few thousand other naked anxious souls are standing on the bank of a misty black river, being stung by mosquitoes and bitten by large centipedes.`, // Displayed when the player first enters the room.
      onEnter: () =>{
          pressEnter('hell-2');
          
      }
      },
      {
      id: 'hell-2',
      name: '',
      desc: `Every few years a kind of canoe comes up to the shore, and an old man with a long white beard and eyes that glow like a battery-operated jack-o-lantern offers the waiting throng a chance to get into the canoe and be taken to the seat of the Last Judgement. But first, you have to tell him your name. And you--and all these others--are the poor souls who died in a state of amnesia. You can’t remember your names, and you can’t get either to heaven or to hell until this old geezer, whose name is Charon, has checked you off his list. Each time he returns you have one chance to tell him what you think your name might be.`,
      onEnter: () =>{
          pressEnter('hell-3');
      },
  },
      {
      id: 'hell-3',
      name: '',
      desc: `Then if you’re wrong, you’ve got a few years to think of another name that might be yours. Eventually in the course of all eternity, you’ll probably come up with the name that corresponds to the name on his list. So, here’s your first chance. Charon hands you your Emigration Card, and there’s the blank you’ve got to fill in.\n PRINT YOUR NAME HERE`,
      onEnter: () =>{
          reenableInput();
          },  
      exits: [
        {
           dir: ['hollings', 'xavier'], 
           id: 'hell-4',
        },
        {
           dir: ['cameron', 'john', ], 
           id: 'corridor-1503',
       },
       {
        dir: ['' ], // on exit command? 
        id: 'corridor-1503',
        },
       ],
      },
  {
      id: 'hell-4',
      name: '',
      desc: `Charon examines your card, scratches his head, and hands it back. “So tell me, Xavier,” he says, “what’s your middle name?”`,
      exit: [
        {
        dir: ['' ], // on exit command? 
        id: 'hell-5',
        },
      ],
    },
    {
      id: 'hell-5',
      name: '',
      desc: `"Sorry, that's not right. Better luck next time."”`,
      onEnter: () =>{
          pressEnter(loadDisk(gameOver));
      }
    },
    {
      id: 'hell-6',
      name: '',
      desc: `“Sorry,” says Charon, handing you back your Emigration Card. “I’ve got no pick-up order for anyone by this name. Better luck next time.” Charon picks up his oar, and swats away the other lost souls gathered about his boat. You join in their collective groan as Charon’s ferryboat vanishes into the mists of the river Styx.\n Five Years have gone by. Charon has returned in a mood of angry impatience. You fill out the Emigration Card. \n PRINT YOUR NAME HERE.`,
      exits: [
        {
           dir: ['hollings', 'xavier'], 
           id: 'hell-4',
        },
        {
           dir: ['cameron', 'john', ], 
           id: 'corridor-1503',
       },
       {
        dir: ['' ], // on exit command? 
        id: 'corridor-1503',
        },
       ],

    },
    //**********************************************************/
    //                Sunderland Health Club                   /
    //********************************************************/
    {
      id: 'heal-club', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'Health Club Reception Room', // Displayed each time the player enters the room.
      desc: `The door opens with a creak, and you step into a small reception area furnished with cast-iron and vinyl armchairs, a water cooler with paper cups, a small Formica desk with a stack of application forms, and faded posters of once famous bodybuilders. A sign on the Formica desk promises that someone will be “Back in 10 Minutes.”
      The elevators open into the reception area from a hallway on one wall. There are two doors behind the desk. the one on the left is marked "Dolls," the one on the right "Guys."`, // Displayed when the player first enters the room.
      exits: [
        {
          dir: ['left', 'dolls', 'girls', 'girls', `women's`, 'womens'], // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'heal-club1',
        },
        {
          dir: ['right', 'guys', 'mens', 'boys', `boy's`, `men's`],
          id: 'heal-club5',
        },
        {
          dir: ['leave'],
          id: 'cor-?'
        }
      ],
    },
    {
      id: 'heal-club1',
      name: `Women's Locker Room`,
      desc: `You enter the women’s locker room, and a woman who seems to be in training for the Olympic hammer throw looks at you with the joy of combat already glistening in her eyes. 
      “Not here, buddy,” she informs you in a low voice. “This is the women’s locker room. And you--correct me if I’m wrong--belong in the men’s locker room.” 
      She points the direction with her thumb. “That way.”`,
      exits: [
        {
          dir: ['leave', 'exit'],
          id: 'heal-club',
        },
        {
          dir: [],
          id: 'heal-club2'
        }
      ],
    },
    {
      id: 'heal-club3',
      name: `Women's Locker Room`,
      desc: `"I'm warning you, Bozo: Out of here!`,
      exits: [
        {
          dir: ['leave', 'exit'],
          id: 'heal-club',
        },
        {
          dir: [],
          id: 'heal-club4'
        }        
      ],
    },
    {
      id: 'heal-club4',
      name: `Women's Locker Room`,
      desc: `"Okay, that's it." 
      With a single, simple flowing motion remarkable in a woman of such size and strength, she springs up and lays you flat with a judicious karate chop to the side of your neck.`,
      exits: [
        {
          dir: [],
          id: 'Deat-Tex'
        }
      ],
    },
    {
      id: 'heal-club5',
      name: `Men's Locker Room`,
      desc: `You are in the men’s locker room. 
      To your right are two changing areas formed by free-standing metal lockers. To your left are some sinks and a large mirror, with doors on either side. The door on the right is marked “Sauna,” that on the left “Massage.” Directly ahead are the showers, and beyond these a sign points the way to the weight room.`,
      exits: [
        {
          dir: ['leave', 'exit'],
          id: 'heal-club',
        },
        {
          dir: ['right', 'lockers'],
          id: 'heal-club6'
        },
        {
          dir: ['left door', 'massage'],
          id: 'heal-club7'
        },
        {
          dir: ['right door', 'sauna'],
          id: 'heal-club8'
        }, 
        {
          dir: ['showers', 'shower'],
          id: 'heal-club9'
        },
        {
          dir: ['weight room', 'weights'],
          id: 'heal-club10'
        }
      ],
    },
    {
      id: 'heal-club6',
      name: `Men's Locker Room`,
      desc: `You try and wedge yourself intop one of the metal lockers but clearly they weren't intended for this purpose -- or you weren't. There must be somewhere else you can hide`,
      onLook: () => {
        const room = getRoom('heal-club6');
        const room2 = getRoom('heal-club');
        room.desc = `You take a quick tour of the lockers, opening and closing the metal doors quietly, hoping to find a forgotten or abandoned piece of clothing. Your search of the first alcove yields slim pickings: a plastic bag from a bookstore, a white sock with holes in both toe and heel, a broken shoelace, and a small brass key. Four of the lockers are padlocked. Yanking at the handles accomplishes nothing.
        You check out the second alcove of lockers and the fourth locker along the row produces the equivalent, in clothing, of a Minimum Daily Requirement: sweatpants, a Mickey Mouse T-shirt with its sleeves chopped off, and a pair of shower slippers.
        Just as you are about to slip into this outfit you hear the voices of two men entering the locker room from the direction of the weight room. You feel a panicky certainty that these clothes belong to one of them, and you stuff them in the plastic bookstore bag. You wish you could crawl into the bag yourself, so strong is your impulse to hide from these approaching strangers.`;
        room2.block = `As you open the door to return to the reception area you can hear a woman’s voice, and then a man’s, discussing the relative merits of different brands of sneakers. Whoever had left the sign saying they’d be back in ten minutes has come back. 
        Realizing that you can’t leave the health club in the makeshift clothes you wore when you arrived, you close the door quietly--and feel again the same unreasoning dread, the same need not to be seen.`
      },
    },
    {
      id: 'heal-club7',
      name: `Men's Locker Room`,
      desc: '',
      block: 'The door to that room is locked.'
    },
    {
      id: 'heal-club9',
      name: `Men's Locker Room`,
      desc: '',
      block: `There is a woman in the weight room who looks like she is in training for the olympic hammer throw. You take one look at her decidedly hostile expression, and decide you are in less trouble in the locker room`,

    },
    {
      id: 'heal-club8',
      name: `Men's Locker Room`,
      desc: `As you enter the sauna a blast of superheated air wraps your body in what feels like a suit of flames. Your heartbeat quickens, and the narrow confines of the steamy, pine-paneled cell bend and warp and tilt. 
      You are barely able to keep yourself from falling against the iron stove and its pile of heated rocks. You crumble onto the bench of wooden slats, and then…`,
      exits: [
        {
          dir: [],
          id: 'heal-club11'
        }
      ]
    },
    {
      id: 'heal-club11',
      name: `Men's Locker Room`,
      desc: `But this 'then' is like no other then. It does not follow the time that's gone before. Like a fluid under tremendous pressure, the memories suppressed by your amnesia overwhelm you. At some cue supplied by this hot dark cubbyhole, your past supplants your present life. 
      You are experiencing . . . DEJA-VU!`,
      exits: [
        {
          dir: [],
          id: 'deja-vu'
        }
      ],
    },//BELOW HERE IS AFTER DEJA-VU
    {
      id: 'heal-club12',
      name: 'Massage Room',
      desc: `“Mr. Cameron, are you conscious, can you hear me?”
      A man’s face is bending down close to your own. You do not recognize him. Gradually you realize that you are no longer in the sauna, but in another small room, where you are lying on your back on a masseur’s table. The massage room, this must be.
      “He’s opened his eyes,” another voice says.
      “Yes,” says the man standing above you, “but there’s this funny dazed look in his eyes. The same thing happened when he went into the sauna last night, and I thought it was from drinking too much. We had to carry him down to his room.
      But maybe he just can’t take the heat in that sauna. Some guys can’t.”
      He turns his attention back to you. “Hey, Mr. Cameron—are you alright?”`,
      exits: [
        {
          dir: [],
          id: 'heal-club13'
        },
      ],
    },
    {
      id: 'heal-club13',
      name: 'Massage Room',
      desc: `“He’s trying to say something,” the other voice observes, “but the words are so slurred. Do you think he’s still drunk?”  The man above you bends over to sniff your breath. “Doesn’t seem to be. No, I figure it’s just heat prostration. Tell you what, Buddy, you mop up around the pool, and I’ll give Cameron here a once-over-lightly, then help him into some clothes. There must be something he can wear in his locker. After that I’d appreciate it if you would steer him back to his room.  Confidentially-” He lowers his voice to a whisper, but you are still able to hear what he says.  “--if there is something seriously wrong with him, I don’t want him shipped off to a hospital from here. It doesn’t look good for a gym to have people leaving it on stretchers.” “Right, boss, I get your message. If I have to, I can carry the guy down there. Does he have his room key on him?” The man nods. “It was on the floor of the sauna.”
      `,
      exits: [
          {
            dir: [],
            id: 'heal-club14'
          },
      ],
    },
    {
        id: 'heal-club14',
        name: 'Massage Room',
        desc: `The man who’d done most of the talking now begins to give you a very gentle massage. You find it strangely soothing. It’s as though he were smoothing tensions from your mind and your muscles at the same time. You begin to be able to think more clearly. Now at least you have a reasonable explanation of how you came to be in Room 1502 without any clothes. Apparently you’ve been a long-term member of this gym, for the masseur spoke of “your” locker.
        He rolls you over onto your stomach but instead of continuing the massage he turns on the sunlamp and leaves you alone in the room. The warmth of the lamp fills you with a strange peaceful passivity. You listen to the unmistakable crunch of steel through steel, and a moment later the masseur returns with a pair of metal cutters in one hand and a green canvas gym in the other. “Sorry to have to cut through your padlock, Mr. Cameron. But I remember how frustrated you got last night trying to remember the combination. I would have cut off the lock then, but you’d passed out in the sauna first. You feeling a little better now?”`,
        exits: [
            {
                dir:[],
                id: 'heal-club15'
            },
        ],
    },
    {
        id: 'heal-club15',
        name: 'Massage Room'
    },
    //**********************************************************/
    //                       Deja-Vu                           /
    //********************************************************/
    {
      id: 'deja-vu', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: '', // Displayed each time the player enters the room.
      desc: `You are locked in a cell. It is bare and dark and smells of lives gone sour. The only light is a feeble fluorescent glow that slants in through the louvred grill in the iron door. You know the door is iron because you have been beating on it. Your hands are sore, and your right eye is swollen shut. You ache all over.
      Worse than the ache is the hunger, and worse than the hunger is the fear that you will never leave this cell alive. You begin to scream. You know it will do no good. You’ll probably be beaten again--but you can’t help yourself. You scream the same few senseless words over and over, a litany of terror:`,
      exits: [
        {
          dir: [], 
          id: 'deja-vu1',
        },
      ],
    },
    {
      id: 'deja-vu1',
      name: '',
      desc: `At last, your screams attract the attention of your jailer. The grill of the door is pushed aside, and his face appears, leering, in the aperture. “What’s the matter, Juanito?” he asks in a drawling, twanging, Texas voice.
      You ask for food. His eyes shrink to pinponts of sadistic pleasure. "Why sure, Juanito, you'll get fed -- just as soon as you ask for it so's I can hear you. There's just two little words you got to say, and I'll bring you a nice big bowl of five=alarm chili.'
      He waits for you to say the two words that will get you fed.`,
      exits: [
        {
          dir: [],
          id: 'deja-vu2'
        },
        {
          dir: [],
          id: 'deja-vu3'
        }
      ],
    },
    {
      id: 'deja-vu2',
      name: '',
      desc: `“Sorry, Juanito,” your jailer says, and slams the grill shut. You think: this is not possible, it is not legal, it can’t go on. Not even the state of Texas can a prisoner be treated like this. You have not been charged with any crime. There has been no trial. One minute you were driving your car home, and the next a motorcycle cop was signaling for you to pull off to the side of the road. The worst of it is that no one knows you’re here, in Santa Candelaria, and so no one will think to report you missing. Suddenly you understand the meaning of hell. There is no way out.`,
      exits: [
        {
          dir: [],
          id: 'deja-vu4'
        },
        
      ],
    },
    {
      id: 'deja-vu3',
      name: '',
      desc: `The jailer favors you with a gap-toothed smile. “You’re learning quick, Juanito.” He goes off and returns in a few minutes with the promised bowl of chili, which he hands you through the aperture in the door. Your mouth waters, and your hand is trembling as you dip the plastic spoon into the lukewarm chili. And then you see the large dead tarantula with which the jailer has garnished your dinner. You laugh, thinking of the classic line, “Waiter, there’s a fly in my soup!” And then you flip the dead tarantula off the chili and wolf down the congealed mixture voraciously.
      When the last smear of spicy grease has been licked from the bowl there are tears in your eyes. Tears of thankfulness for being fed, of shame for being reduced to such a condition.`,
      exits: [
        {
          dir: [],
          id: 'deja-vu5'
        },
      ],
    },
    {
      id: 'deja-vu4',
      name: '',
      desc: `And then, sudden as waking from a nightmare, this mind e­xplosion of memory is over. But was it really a memory--couldn’t it have been, instead, some kind of waking nightmare? Aside from this one lurid glimpse of what may have been your past life, you are able to remember nothing else about yourself or that prison. If that was what your life was like, maybe you shouldn’t try to remember it. Maybe your amnesia is a blessing in disguise.`,
      exits: [
        {
          dir: [],
          id: 'heal-club12'
        },
      ],
    },
    {
      id: 'deja-vu5',
      name: '',
      desc: `You think: this is not possible, it is not legal, it can’t go on. Not even the state of Texas can a prisoner be treated like this. You have not been charged with any crime. There has been no trial. One minute you were driving your car home, and the next a motorcycle cop was signaling for you to pull off to the side of the road. The worst of it is that no one knows you’re here, in Santa Candelaria, and so no one will think to report you missing. Suddenly you understand the meaning of hell. There is no way out.`,
      exits: [
        {
          dir: [],
          id: 'deja-vu4'
        },
      ],
    },
    //**********************************************************/
    //                   Death and Texas                       /
    //********************************************************/
    {
      id: 'deat-1', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'Death and Texas', // Displayed each time the player enters the room.
      desc: `Several months go by during which time you are brought to trial for the murder of the guard you are charged with killing while escaping the State Penitentiary in Revoltillo, Texas. The prosecuting attorney, the judge, the jury, and even F. Lee Bailey; whom you hire to defend you, seem to think your amnesia is an imposture, the desperate invention of a guilty man. The prosecution calls your own wife, a woman named Denise, to testify that during most of the period after your escape you lived in hiding in her New York apartment, and she is able to produce several witnesses to confirm this. You cannot positively contradict her. You are sentenced to be executed either by a firing squad or lethal injection. Which is it to be?`, // Displayed when the player first enters the room.
      // arguement for lethal injection or firing squad
      exits: [
        {
          dir: ['squad',], //Two word strings are not working, need to find out why
          id : 'deat-f3'
        },
        {
          dir: ['injection'],
          id : 'deat-le3'
        },
        {
          dir: ['appeal', 'fight', 'resist'],
          id : 'deat-3'
        },
        {
          dir: [''], //onExit command here
          id : 'deat-2'
        },
      ],
    },
    {
      id: 'deat-2', // if the player doesn't pick firing squad or lethal injection
      name: '',
      desc: `You must make a decision: the firing squad or lethal injection, which will it be?`,
      exits: [
        {
          dir: ['firing', 'squad', 'firing squad'],
          id : 'deat-f3'
        },
        {
          dir: ['lethal', 'injection', 'lethal injection'],
          id : 'deat-le3'
        },
        {
          dir: [''], //onExit command here
          id : 'deat-2'
        },
      ],
    },
    
    {
      id: 'deat-f3', // if the player chooses firing squad
      name: '', // Displayed each time the player enters the room.
      desc: `On the morning of the day you are to be shot, a guard comes to your cell on Death Row and announces that you have a visitor. He takes you to the visiting room, and there, behind the wire mesh, already wearing the black dress and veil of her mourning, is your widow-soon-to-be, Denise. “Oh, Xavier!” she exclaims as you come into the room. “My poor darling! How shall I ever bear this loss?” She presses her face close to the wire mesh and awaits your kiss.`, // Displayed when the player first enters the room.
      onLook: () =>  {
        const room = getRoom('deat-f3');
        room.desc = `You search her face for some sign of genuine feeling but encounter a gaze of unyielding opacity. It is not that her eyes avoid yours; they are simply, and studiedly, noncommittal, like the eyes of a medical student performing an autopsy. For whose sake, you wonder, is she putting on this performance? Is she really your wife? And are you really guilty of the crime for which you’re to be executed? If only you could remember!`

      },
      exits: [
        {
          dir: ['kiss', 'hug', 'touch'], // second argument matters here
          id : 'deat-f4'
        },
        {
          dir: ['marriage', 'denise', 'who are you'], // second argument matters here
          id : 'deat-f7'
        },
        {
          dir: ['bite', 'spit', 'fuck', 'die'], // second argument matters here
          id : 'deat-f6'
        },
        {
          dir: ['xavier', 'hollings', 'xavier hollings', 'xav'], // second argument matters here
          id : 'deat-f8'
        },
        { 
          dir: [''], //onExit command here
          id : 'deat-f5'
        },
      ],
    },
    {
      id: 'deat-3', // if the player chooses to appeal the decision
      name: '', // Displayed each time the player enters the room.
      desc: `F. Lee Bailey takes your appeal to the highest court, but always the verdict and the sentence are sustained. At last, the dreaded day is at hand, and you must choose the means of your execution A firing squad or lethal injection--which is it?`, // Displayed when the player first enters the room.
      exits: [
        {
          dir: ['squad'],
          id : 'deat-f3'
        },
        {
          dir: ['injection'],
          id : 'deat-le3'
        },
        {
          dir: [''],
          id : 'deat-2'
        },
      ],
    },
    {
      id: 'deat-f4', // if Kiss, hug, or touch  Denise if firing squad selected
      name: '', // Displayed each time the player enters the room.
      desc: `Your lips meet hers in a kiss as chilly and formal as the swan carved from ice that appears at the end of a banquet. Yet when Denise draws back, she seems as pleased and replete as the proverbial cat that ate the canary. She wipes an imaginary tear from the corner of her eye with a cambric handkerchief embroidered with red and white roses.`, // Displayed when the player first enters the room.
      onEnter: () => {
          pressEnter('deat-f5');
      }
    },
    {
      id: 'deat-f5', // after Kiss, hug, or touch  Denise if firing squad selected
      name: '', // Displayed each time the player enters the room.
      desc: `Denise affects to wipe away a tear with her cambric handkerchief. “Xavier, forgive me, but I don’t think I can bear much more of this. My heart is simply breaking with the pity of it, and in any case I have to see the lawyers at three o’clock. It seems you won’t be able to cut me out of your will--as you’ve tried to do behind my back. I’ll inherit your estate willy-nilly--and your mother’s too, when she kicks the bucket. And I made the trip here today just to have the satisfaction of telling you myself.” She awaits your reaction with a taunting smile.`, // Displayed when the player first enters the room.
      onEnter: () => {
          pressEnter('deat-f9');
      }
    },
    {
      id: 'deat-f6', // if BITE/SPIT or any obscenity at Denise if firing squad selected
      name: '', // Displayed each time the player enters the room.
      desc: `It may be a small-minded satisfaction but you feel a genuine glow of pleasure at ruffling Denise’s black feathers. She hisses through the wire mesh that her revenge for this final insult will be to inform the reporters after your execution that you were sexually impotent, a drug addict, and that her chief conjugal responsibility was to read you a comic book each night before bed. She leaves the visiting room with a look of pure malice, and the guard escorts you back to your cell.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-f10');
    }
    },
    {
      id: 'deat-f7', // if ASK ABOUT DENISE or MARRIAGE or WHO ARE YOU if firing squad selected
      name: '', // Displayed each time the player enters the room.
      desc: `“It’s very brave of you, my dear, to stick to this silly story about your amnesia right to the bitter end, but surely with me there’s no need for such an imposture. You ask me about myself as though we were strangers. I’m your wife, the woman you love and to whom you confessed your guilt.”`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-f9');
      }
    },
    {
      id: 'deat-f8', // if ASK ABOUT XAVIER at DENISE if firing squad selected
      name: '', // Displayed each time the player enters the room.
      desc: `Denise sighs. “Xavier, I refuse to go through this foolish imposture with you. You know who you are. You know what you’ve done. And now you must face the fact that you must die. Do please try to die with some style. That’s all I have to say, except good-bye--and thank you for a huge inheritance. I’ll try and spend it the way you’d want me to--on big cars and lovely clothes and rubies and emeralds.” She leaves the visiting room with a flourish of her black crepe de chine mourning gown, and the guard leads you back to your cell on Death Row.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-f9');
      }
    },
    {
      id: 'deat-f9', // Proceeding to last meal node if firing squad selected
      name: '', // Displayed each time the player enters the room.
      desc: `Denise rises from her chair. “So long, sucker. Have a nice afterlife.” She leaves the room, and the guard escorts you back to your cell.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-f10');
        reenableInput();
      }
    },
    {
      id: 'deat-le3', // if the player chooses lethal injection
      name: '', // Displayed each time the player enters the room.
      desc: `On the morning of the day you are to be shot, a guard comes to your cell on Death Row and announces that you have a visitor. He takes you to the visiting room, and there, behind the wire mesh, already wearing the black dress and veil of her mourning, is your widow-soon-to-be, Denise. “Oh, Xavier!” she exclaims as you come into the room. “My poor darling! How shall I ever bear this loss?” She presses her face close to the wire mesh and awaits your kiss.`, // Displayed when the player first enters the room.
      onLook: () =>  {
        const room = getRoom('deat-le3');
      room.desc = `You search her face for some sign of genuine feeling but encounter a gaze of unyielding opacity. It is not that her eyes avoid yours; they are simply, and studiedly, noncommittal, like the eyes of a medical student performing an autopsy. For whose sake, you wonder, is she putting on this performance? Is she really your wife? And are you really guilty of the crime for which you’re to be executed? If only you could remember!`

    },
     exits: [
      {
        dir: ['kiss', 'hug', 'touch'],
        id : 'deat-le4'
      },
      {
        dir: ['marriage', 'denise', 'who are you'],
        id : 'deat-le7'
      },
      {
        dir: ['bite', 'spit', 'fuck', 'die'],
        id : 'deat-le6'
      },
      {
        dir: ['xavier', 'hollings', 'xavier hollings', 'xav'],
        id : 'deat-le8'
      },
      { //Anything other than the directions, wonder how to do that
        dir: [''],
        id : 'deat-le5' //onExit here
      },
    ],
  },
  {
    id: 'deat-le4', // if Kiss, hug, or touch  Denise if lethal injection selected
    name: '', // Displayed each time the player enters the room.
    desc: `Your lips meet hers in a kiss as chilly and formal as the swan carved from ice that appears at the end of a banquet. Yet when Denise draws back, she seems as pleased and replete as the proverbial cat that ate the canary. She wipes an imaginary tear from the corner of her eye with a cambric handkerchief embroidered with red and white roses.`, // Displayed when the player first enters the room.
    onEnter: () => {
        pressEnter('deat-le5');
    }
  },
  {
    id: 'deat-le5', // after Kiss, hug, or touch  Denise if lethal injection selected
    name: '', // Displayed each time the player enters the room.
    desc: `Denise affects to wipe away a tear with her cambric handkerchief. “Xavier, forgive me, but I don’t think I can bear much more of this. My heart is simply breaking with the pity of it, and in any case I have to see the lawyers at three o’clock. It seems you won’t be able to cut me out of your will--as you’ve tried to do behind my back. I’ll inherit your estate willy-nilly--and your mother’s too, when she kicks the bucket. And I made the trip here today just to have the satisfaction of telling you myself.” She awaits your reaction with a taunting smile.`, // Displayed when the player first enters the room.
    onEnter: () => {
        pressEnter('deat-le9');
    }
  },
  {
    id: 'deat-le6', // if BITE/SPIT or any obscenity at Denise if lethal injection selected
    name: '', // Displayed each time the player enters the room.
    desc: `It may be a small-minded satisfaction but you feel a genuine glow of pleasure at ruffling Denise’s black feathers. She hisses through the wire mesh that her revenge for this final insult will be to inform the reporters after your execution that you were sexually impotent, a drug addict, and that her chief conjugal responsibility was to read you a comic book each night before bed. She leaves the visiting room with a look of pure malice, and the guard escorts you back to your cell.`, // Displayed when the player first enters the room.
    onEnter: () => {
      pressEnter('deat-le10');
  }
  },
  {
    id: 'deat-le7', // if ASK ABOUT DENISE or MARRIAGE or WHO ARE YOU if lethal injection selected
    name: '', // Displayed each time the player enters the room.
    desc: `“It’s very brave of you, my dear, to stick to this silly story about your amnesia right to the bitter end, but surely with me there’s no need for such an imposture. You ask me about myself as though we were strangers. I’m your wife, the woman you love and to whom you confessed your guilt.”`, // Displayed when the player first enters the room.
    onEnter: () => {
      pressEnter('deat-le9');
    }
  },
  {
    id: 'deat-le8', // if ASK ABOUT XAVIER at DENISE if firing squad selected
    name: '', // Displayed each time the player enters the room.
    desc: `Denise sighs. “Xavier, I refuse to go through this foolish imposture with you. You know who you are. You know what you’ve done. And now you must face the fact that you must die. Do please try to die with some style. That’s all I have to say, except good-bye--and thank you for a huge inheritance. I’ll try and spend it the way you’d want me to--on big cars and lovely clothes and rubies and emeralds.” She leaves the visiting room with a flourish of her black crepe de chine mourning gown, and the guard leads you back to your cell on Death Row.`, // Displayed when the player first enters the room.
    onEnter: () => {
      pressEnter('deat-le9');
    }
  },
  {
    id: 'deat-le9', // Proceeding to last meal node if firing squad selected
    name: '', // Displayed each time the player enters the room.
    desc: `Denise rises from her chair. “So long, sucker. Have a nice afterlife.” She leaves the room, and the guard escorts you back to your cell.`, // Displayed when the player first enters the room.
    onEnter: () => {
      pressEnter('deat-le10');
    }
  },
  {
    id: 'deat-le10', // last meal node if lethal injection squad
    name: '', // Displayed each time the player enters the room. 
    desc: `Back in your cell you await the hour of execution. The warden asks what you would like for your last meal. Your first request shocks the warden, who is a man of simple, unsophisticated tastes. He explains that all previous condemned men have ordered either steak and potatoes for their last meal, or barbecued ribs, or roast turkey with stuffing. “So, which of those three will it be?”`, // Displayed when the player first enters the room.
   // argument made and stored for either ribs, turkey, steak
   onEnter: () =>{
    document.querySelector('input').disabled = false;
    document.getElementById('arrow').innerHTML = '>';
   },
   exits: [
    {
      dir: ['steak', 'potatoes', 'steak and potatoes'], // two word arguement
      id : 'deat-lesp'
    },
    {
      dir: ['barbecue', 'ribs', 'barbecue ribs'], // two word arguement
      id : 'deat-lebr'
    },
    {
      dir: ['roasted', 'turkey', 'roasted turkey'], // two word arguement
      id : 'deat-lert'
    },
    {
      dir: [''], // If no input
      id : 'deat-letar'
    },
  ],
  },
  {
    id: 'deat-f10', // last meal node if firing squad
    name: '', // Displayed each time the player enters the room. 
    desc: `Back in your cell you await the hour of execution. The warden asks what you would like for your last meal. Your first request shocks the warden, who is a man of simple, unsophisticated tastes. He explains that all previous condemned men have ordered either steak and potatoes for their last meal, or barbecued ribs, or roast turkey with stuffing. “So, which of those three will it be?”`, // Displayed when the player first enters the room.
   // argument made and stored for either ribs, turkey, steak
   onEnter: () => {
      document.querySelector('input').disabled = false;
      document.getElementById('arrow').innerHTML = '>';
     },
   exits: [
    {
      dir: ['steak', 'potatoes', 'steak and potatoes'], // two word arguement
      id : 'deat-fsp'
    },
    {
      dir: ['barbecue', 'ribs', 'barbecue ribs'], // two word arguement
      id : 'deat-fbr'
    },
    {
      dir: ['roasted', 'turkey', 'roasted turkey'], // two word arguement
      id : 'deat-frt'
    },
    {
      dir: [''], // If no input
      id : 'deat-ftar'
    },
  ],
  },
  {
    id: 'deat-fsp', // religious node if firing squad and steak and potatoes
    name: '', // Displayed each time the player enters the room.
    desc: `“You’ll probably want to see a clergyman now. I forget: are you Catholic, Protestant, or Jewish?”`, // Displayed when the player first enters the room.
   // argument made and stored for either ribs, turkey, steak
   exits: [
    {
      dir: ['jewish'], 
      id : 'deat-fspj'
    },
    {
      dir: ['catholic'], 
      id : 'deat-fspc'
    },
    {
      dir: ['protestant'], 
      id : 'deat-fspp'
    },
    {
      dir: [''], // If no input
      id : 'deat-fsp1'
    },
  ],
  },
  {
    id: 'deat-fbr', // religious node if firing squad and barbeque ribs
    name: '', // Displayed each time the player enters the room.
    desc: `“You’ll probably want to see a clergyman now. I forget: are you Catholic, Protestant, or Jewish?”`, // Displayed when the player first enters the room.
   // argument made and stored for either ribs, turkey, steak
   exits: [
    {
      dir: ['jewish'], 
      id : 'deat-fbrj'
    },
    {
      dir: ['catholic'], 
      id : 'deat-fbrc'
    },
    {
      dir: ['protestant'], 
      id : 'deat-fbrp'
    },
    {
      dir: [''], // If no input
      id : 'deat-fbr1'
    },
  ],
  },
  {
    id: 'deat-frt', // religious node if firing quad and roasted turkey
    name: '', // Displayed each time the player enters the room.
    desc: `“You’ll probably want to see a clergyman now. I forget: are you Catholic, Protestant, or Jewish?”`, // Displayed when the player first enters the room.
   // argument made and stored for either ribs, turkey, steak
   exits: [
    {
      dir: ['jewish'], 
      id : 'deat-frtj'
    },
    {
      dir: ['catholic'], 
      id : 'deat-frtc'
    },
    {
      dir: ['protestant'], 
      id : 'deat-frtp'
    },
    {
      dir: [''], // If no input
      id : 'deat-frt1'
    },
  ],
  },
  {
    id: 'deat-ftar', // religious node if firing squad and no meal selected
    name: '', // Displayed each time the player enters the room.
    desc: `“You’ll probably want to see a clergyman now. I forget: are you Catholic, Protestant, or Jewish?”`, // Displayed when the player first enters the room.
   // argument made and stored for either ribs, turkey, steak
   exits: [
    {
      dir: ['jewish'], 
      id : 'deat-ftarj'
    },
    {
      dir: ['catholic'], 
      id : 'deat-ftarc'
    },
    {
      dir: ['protestant'], 
      id : 'deat-ftarp'
    },
    {
      dir: [''], // If no input
      id : 'deat-ftar1'
    },
  ],
  },
    {
      id: 'deat-lesp', // religious node if lethal injection and steak and potatoes
      name: '', // Displayed each time the player enters the room.
      desc: `“You’ll probably want to see a clergyman now. I forget: are you Catholic, Protestant, or Jewish?”`, // Displayed when the player first enters the room.
     // argument made and stored for either ribs, turkey, steak
     exits: [
      {
        dir: ['jewish'], 
        id : 'deat-lespj'
      },
      {
        dir: ['catholic'], 
        id : 'deat-lespc'
      },
      {
        dir: ['protestant'], 
        id : 'deat-lespp'
      },
      {
        dir: [''], // If no input
        id : 'deat-lesp1'
      },
    ],
    },
    {
      id: 'deat-lebr', // religious node if lethal injection and barbeque ribs
      name: '', // Displayed each time the player enters the room.
      desc: `“You’ll probably want to see a clergyman now. I forget: are you Catholic, Protestant, or Jewish?”`, // Displayed when the player first enters the room.
     // argument made and stored for either ribs, turkey, steak
     exits: [
      {
        dir: ['jewish'], 
        id : 'deat-lebrj'
      },
      {
        dir: ['catholic'], 
        id : 'deat-lebrc'
      },
      {
        dir: ['protestant'], 
        id : 'deat-lebrp'
      },
      {
        dir: [''], // If no input
        id : 'deat-lebr1'
      },
    ],
    },
    {
      id: 'deat-lert', // religious node if lethal injection and roasted turkey
      name: '', // Displayed each time the player enters the room.
      desc: `“You’ll probably want to see a clergyman now. I forget: are you Catholic, Protestant, or Jewish?”`, // Displayed when the player first enters the room.
     // argument made and stored for either ribs, turkey, steak
     exits: [
      {
        dir: ['jewish'], 
        id : 'deat-lertj'
      },
      {
        dir: ['catholic'], 
        id : 'deat-lertc'
      },
      {
        dir: ['protestant'], 
        id : 'deat-lertp'
      },
      {
        dir: [''], // If no input
        id : 'deat-lert1'
      },
    ],
    },
    {
      id: 'deat-letar', // religious node if lethal injection and no meal selected
      name: '', // Displayed each time the player enters the room.
      desc: `“You’ll probably want to see a clergyman now. I forget: are you Catholic, Protestant, or Jewish?”`, // Displayed when the player first enters the room.
     // argument made and stored for either ribs, turkey, steak
     exits: [
      {
        dir: ['jewish'], 
        id : 'deat-letarj'
      },
      {
        dir: ['catholic'], 
        id : 'deat-letarc'
      },
      {
        dir: ['protestant'], 
        id : 'deat-letarp'
      },
      {
        dir: [''], // If no input
        id : 'deat-letar1'
      },
    ],
    },
    {
      id: 'deat-letarj', // If JEWISH, lethal injection & no meal selected
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-letar2');
      }
    },
    {
      id: 'deat-letarc', // If CATHOLIC & lethal injection & no meal selected
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-letar2');
      }
    },
    {
      id: 'deat-letarp', // If Protestant & lethal injection & no meal selected
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-letar2');
      }
    },
    {
      id: 'deat-letar1', // If none or go away, lethal injection & no meal selected
      name: '', // Displayed each time the player enters the room.
      desc: `“That’s about what I figured,” the warden says, and bids you good day.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-letar2');
      }
    },
    {
      id: 'deat-letar2', // lethal injection & no meal cont
      name: '', // Displayed each time the player enters the room.
      desc: `You spend the next hour preparing to face death and debating with yourself the pros and cons of capital punishment. If you could be sure you’d killed a guard while trying to escape from this prison, you’d feel less of two minds. Since you’re not sure, you feel it isn’t really fair to be executed. How much more humane, you think, to induce amnesia like your own instead of condemning men to death. On the other hand, given a choice between a quick and painless death and a lifetime of dying slowly here in Revoltillo…
      Your gloomy meditations are interrupted by the arrival of a guard with a covered tray. “Your last meal,” he announces, placing the tray on a table. “Enjoy it.” The guard leaves you alone. You uncover the dish and regard the last meal you’re to enjoy in this life.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-letar3');
      }
    },
    {
      id: 'deat-letar3', //  lethal injection & no meal cont
      name: '', // Displayed each time the player enters the room.
      desc: 'You are confronted with a bowl of cold chili garnished with a large dead hairy tarantula. An unsigned note accompanying this entree says: “We didn’t want you to die without a chance to sample our famous Texas chili!”', // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-letar4');
      }
    },
    {
      id: 'deat-letar4', //  lethal injection & no meal cont
      name: '', // Displayed each time the player enters the room.
      desc: `The guard looks in through the bars of your cell and sees you are not eating your last meal. “Come on, Hollings,” he says encouragingly. “You’re holding everything up. Eat your last meal so we can get this show on the road.” The guard goes away before you can make any reply, and you look down at the food on the plate. You begin, despite yourself, to salivate.\n
      You begin to eat your last meal. It is delicious! No, that is probably the wrong word. Objectively it is probably at the level of an average roadside diner. But subjectively it seems incredibly significant. You finish the last morsel on your plate--and then, like a bolt from the blue, it hits you--a memory from your past life. A memory that makes you realize that you must be innocent of the crime for which you are dying.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-letar5');
      }
    },
    {
      id: 'deat-letar5', // lethal injection & no meal cont
      name: '', // Displayed each time the player enters the room.
      desc: 'Balefully you regard this last sadistic prank of the staff of Revoltillo State Penitentiary, and briefly you consider ways of disposing of the chili in a spirit of reciprocal spite. But then, to your dismay and astonishment, you experience a voracious hunger for the cold, congealed chili before you. Your mouth waters like a faucet, and every cell of your body screams: “Feed me! Feed me!” like the voices of a rioting cellblock.\n You look down at the dead tarantula, which you’d removed from the chili before eating it, and remember your first experience of prison. In Santa Candelaria, where, investigating the rumors of a plague of amnesia that had been reported in a weekly tabloid paper, you had incurred the enmity of the local sheriff. He’d framed you on drug charges, imprisoned you with a flagrant disregard of all your legal rights, and made you the butt of endless sadistic jokes, such as serving you just such a bowl of tarantula-garnished chili. The horror of that squalid jail cell! The horror of it!', // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lelw');
      }
    },
    {
      id: 'deat-letarj', // If JEWISH, lethal injection & no meal selected
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-letar2');
      }
    },
    {
      id: 'deat-letarc', // If CATHOLIC & lethal injection & no meal selected
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-letar2');
      }
    },
    {
      id: 'deat-letarp', // If Protestant & lethal injection & no meal selected
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-letar2');
      }
    },
    {
      id: 'deat-lesp1', // If none or go away, lethal injection & Steak and Potatoes
      name: '', // Displayed each time the player enters the room.
      desc: `“That’s about what I figured,” the warden says, and bids you good day.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lesp2');
      }
    },
    {
      id: 'deat-lesp2', // lethal injection & steak and potatoes
      name: '', // Displayed each time the player enters the room.
      desc: `You spend the next hour preparing to face death and debating with yourself the pros and cons of capital punishment. If you could be sure you’d killed a guard while trying to escape from this prison, you’d feel less of two minds. Since you’re not sure, you feel it isn’t really fair to be executed. How much more humane, you think, to induce amnesia like your own instead of condemning men to death. On the other hand, given a choice between a quick and painless death and a lifetime of dying slowly here in Revoltillo…
      Your gloomy meditations are interrupted by the arrival of a guard with a covered tray. “Your last meal,” he announces, placing the tray on a table. “Enjoy it.” The guard leaves you alone. You uncover the dish and regard the last meal you’re to enjoy in this life.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lesp3');
      }
    },
    {
      id: 'deat-lesp3', //  lethal injection & steak and potatoes
      name: '', // Displayed each time the player enters the room.
      desc: 'A large sirloin steak confronts you, together with an abundance of french fries, and a single lettuce leaf symbolizing salad.', // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lesp4');
      }
    },
    {
      id: 'deat-lesp4', //  lethal injection & steak and potatoes
      name: '', // Displayed each time the player enters the room.
      desc: `The guard looks in through the bars of your cell and sees you are not eating your last meal. “Come on, Hollings,” he says encouragingly. “You’re holding everything up. Eat your last meal so we can get this show on the road.” The guard goes away before you can make any reply, and you look down at the food on the plate. You begin, despite yourself, to salivate.\n
      You begin to eat your last meal. It is delicious! No, that is probably the wrong word. Objectively it is probably at the level of an average roadside diner. But subjectively it seems incredibly significant. You finish the last morsel on your plate--and then, like a bolt from the blue, it hits you--a memory from your past life. A memory that makes you realize that you must be innocent of the crime for which you are dying.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lesp5');
      }
    },
    {
      id: 'deat-lesp5', // lethal injection & steak and potatoes
      name: '', // Displayed each time the player enters the room.
      desc: 'You remember an earlier steak dinner you had with Denise. You remember the care and deliberation with which she cut into her own steak with the steak knife after you had told her that you had fallen in love with another woman and that your engagement was over. You remember her look of rage and her quick recovery as she told you that she understood and wished you every happiness with your new love.', // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lelw');
      }
    },
    {
      id: 'deat-lespj', // If JEWISH, lethal injection & steak and potatoes
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lesp2');
      }
    },
    {
      id: 'deat-lespc', // If CATHOLIC & lethal injection & steak and potatoes
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lesp2');
      }
    },
    {
      id: 'deat-lespp', // If Protestant & lethal injection & steak and potatoes
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lesp2');
      }
    },
    {
      id: 'deat-lebr1', // If none or go away, lethal injection & Barbecue Ribs
      name: '', // Displayed each time the player enters the room.
      desc: `“That’s about what I figured,” the warden says, and bids you good day.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lebr2');
      }
    },
    {
      id: 'deat-lebr2', // lethal injection & Barbecue Ribs
      name: '', // Displayed each time the player enters the room.
      desc: `You spend the next hour preparing to face death and debating with yourself the pros and cons of capital punishment. If you could be sure you’d killed a guard while trying to escape from this prison, you’d feel less of two minds. Since you’re not sure, you feel it isn’t really fair to be executed. How much more humane, you think, to induce amnesia like your own instead of condemning men to death. On the other hand, given a choice between a quick and painless death and a lifetime of dying slowly here in Revoltillo…
      Your gloomy meditations are interrupted by the arrival of a guard with a covered tray. “Your last meal,” he announces, placing the tray on a table. “Enjoy it.” The guard leaves you alone. You uncover the dish and regard the last meal you’re to enjoy in this life.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lebr3');
      }
    },
    {
      id: 'deat-lebr3', //  lethal injection & Barbecue Ribs
      name: '', // Displayed each time the player enters the room.
      desc: 'The barbecue sauce on the slab of ribs is charred to the brown nearest black. There is a mound of french fries and a small paper cup of coleslaw.', // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lebr4');
      }
    },
    {
      id: 'deat-lebr4', //  lethal injection & Barbecue Ribs
      name: '', // Displayed each time the player enters the room.
      desc: `The guard looks in through the bars of your cell and sees you are not eating your last meal. “Come on, Hollings,” he says encouragingly. “You’re holding everything up. Eat your last meal so we can get this show on the road.” The guard goes away before you can make any reply, and you look down at the food on the plate. You begin, despite yourself, to salivate.\n
      You begin to eat your last meal. It is delicious! No, that is probably the wrong word. Objectively it is probably at the level of an average roadside diner. But subjectively it seems incredibly significant. You finish the last morsel on your plate--and then, like a bolt from the blue, it hits you--a memory from your past life. A memory that makes you realize that you must be innocent of the crime for which you are dying.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lebr5');
      }
    },
    {
      id: 'deat-lebr5', // lethal injection & Barbecue Ribs
      name: '', // Displayed each time the player enters the room.
      desc: 'You remember an earlier dinner of barbecue ribs you had at a diner somewhere in Texas.  On the outskirts of a town called Santa Candelaria.  From your table you could see back into the kitchen, where a fat counterman was sprinkling soap into an antique dishwasher. It was then you’d had the sense of Eureka, and the pieces of the puzzle had fit together. You remember the Odd Lots Discount Store and its great stacks of the detergent that had failed its test marketing and was being remaindered here and perhaps nowhere else. Shimmer the soap was called--you’d seen the bright blue package in every one of the homes you’d been allowed to investigate. It had only been a hunch, but it had proved correct. It was Shimmer, or one of its decay-products, that had been responsible for Santa Candelaria’s plague of amnesia!.', // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lelw');
      }
    },
    {
      id: 'deat-lebrj', // If JEWISH, lethal injection & Barbecue Ribs
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lebr2');
      }
    },
    {
      id: 'deat-lebrc', // If CATHOLIC & lethal injection & Barbecue Ribs
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lebr2');
      }
    },
    {
      id: 'deat-lebrp', // If Protestant & lethal injection & Barbecue Ribs
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lebr2');
      }
    },
    {
      id: 'deat-lert1', // If none or go away, lethal injection & Roasted Turkey
      name: '', // Displayed each time the player enters the room.
      desc: `“That’s about what I figured,” the warden says, and bids you good day.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lert2');
      }
    },
    {
      id: 'deat-lert2', // lethal injection & roasted turkey
      name: '', // Displayed each time the player enters the room.
      desc: `You spend the next hour preparing to face death and debating with yourself the pros and cons of capital punishment. If you could be sure you’d killed a guard while trying to escape from this prison, you’d feel less of two minds. Since you’re not sure, you feel it isn’t really fair to be executed. How much more humane, you think, to induce amnesia like your own instead of condemning men to death. On the other hand, given a choice between a quick and painless death and a lifetime of dying slowly here in Revoltillo…
      Your gloomy meditations are interrupted by the arrival of a guard with a covered tray. “Your last meal,” he announces, placing the tray on a table. “Enjoy it.” The guard leaves you alone. You uncover the dish and regard the last meal you’re to enjoy in this life.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lert3');
      }
    },
    {
      id: 'deat-lert3', //  lethal injection & roasted turkey
      name: '', // Displayed each time the player enters the room.
      desc: 'Several slices of turkey breast are surmounted with a perfect sphere of stuffing over which has been ladled a great deal of thick pale gravy. A squat, neat cylinder of cranberry sauce accompanies this holiday dinner..', // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lert4');
      }
    },
    {
      id: 'deat-lert4', //  lethal injection & roasted turkey
      name: '', // Displayed each time the player enters the room.
      desc: `The guard looks in through the bars of your cell and sees you are not eating your last meal. “Come on, Hollings,” he says encouragingly. “You’re holding everything up. Eat your last meal so we can get this show on the road.” The guard goes away before you can make any reply, and you look down at the food on the plate. You begin, despite yourself, to salivate.\n
      You begin to eat your last meal. It is delicious! No, that is probably the wrong word. Objectively it is probably at the level of an average roadside diner. But subjectively it seems incredibly significant. You finish the last morsel on your plate--and then, like a bolt from the blue, it hits you--a memory from your past life. A memory that makes you realize that you must be innocent of the crime for which you are dying.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lert5');
      }
    },
    {
      id: 'deat-lert5', // lethal injection & roasted turkey
      name: '', // Displayed each time the player enters the room.
      desc: 'You remember a holiday dinner years ago. It was your first Christmas home from college. After the dinner you had mustered up the courage to ask your mother (your father was already dead then) if you were an adopted child. She had denied it emphatically, and asked you how you had come to have such a suspicion. You had not told her, then, about Zane. Only years later, when she had put up the bail to release you from the nightmarish prison cell in Santa Candelaria, only then did you tell her that you had, if not an identical twin, a doppelganger, and even then she had denied you could be Zane’s twin. “You’re my son!” she insisted almost hysterically. “I will not have you suppose otherwise!”', // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lelw');
      }
    },
    {
      id: 'deat-lertj', // If JEWISH, lethal injection & roasted turkey
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lert2');
      }
    },
    {
      id: 'deat-lertc', // If CATHOLIC & lethal injection & roasted turkey
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lert2');
      }
    },
    {
      id: 'deat-lertp', // If Protestant & lethal injection & roasted turkey
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lert2');
      }
    },
    {
      id: 'deat-ftarj', // If JEWISH, firing squad & no meal selected
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-ftar2');
      }
    },
    {
      id: 'deat-ftarc', // If CATHOLIC & firing squad & no meal selected
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-ftar2');
      }
    },
    {
      id: 'deat-ftarp', // If Protestant & firing squad & no meal selected
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-ftar2');
      }
    },
    {
      id: 'deat-ftar1', // If none or go away, firing squad & no meal selected
      name: '', // Displayed each time the player enters the room.
      desc: `“That’s about what I figured,” the warden says, and bids you good day.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-ftar2');
      }
    },
    {
      id: 'deat-ftar2', // firing squad & no meal cont
      name: '', // Displayed each time the player enters the room.
      desc: `You spend the next hour preparing to face death and debating with yourself the pros and cons of capital punishment. If you could be sure you’d killed a guard while trying to escape from this prison, you’d feel less of two minds. Since you’re not sure, you feel it isn’t really fair to be executed. How much more humane, you think, to induce amnesia like your own instead of condemning men to death. On the other hand, given a choice between a quick and painless death and a lifetime of dying slowly here in Revoltillo…
      Your gloomy meditations are interrupted by the arrival of a guard with a covered tray. “Your last meal,” he announces, placing the tray on a table. “Enjoy it.” The guard leaves you alone. You uncover the dish and regard the last meal you’re to enjoy in this life.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-ftar3');
      }
    },
    {
      id: 'deat-ftar3', //  lethal injection & no meal cont
      name: '', // Displayed each time the player enters the room.
      desc: 'You are confronted with a bowl of cold chili garnished with a large dead hairy tarantula. An unsigned note accompanying this entree says: “We didn’t want you to die without a chance to sample our famous Texas chili!”', // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-ftar4');
      }
    },
    {
      id: 'deat-ftar4', //  firing squad & no meal cont
      name: '', // Displayed each time the player enters the room.
      desc: `The guard looks in through the bars of your cell and sees you are not eating your last meal. “Come on, Hollings,” he says encouragingly. “You’re holding everything up. Eat your last meal so we can get this show on the road.” The guard goes away before you can make any reply, and you look down at the food on the plate. You begin, despite yourself, to salivate.\n
      You begin to eat your last meal. It is delicious! No, that is probably the wrong word. Objectively it is probably at the level of an average roadside diner. But subjectively it seems incredibly significant. You finish the last morsel on your plate--and then, like a bolt from the blue, it hits you--a memory from your past life. A memory that makes you realize that you must be innocent of the crime for which you are dying.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-ftar5');
      }
    },
    {
      id: 'deat-ftar5', // firing squad & no meal cont
      name: '', // Displayed each time the player enters the room.
      desc: 'Balefully you regard this last sadistic prank of the staff of Revoltillo State Penitentiary, and briefly you consider ways of disposing of the chili in a spirit of reciprocal spite. But then, to your dismay and astonishment, you experience a voracious hunger for the cold, congealed chili before you. Your mouth waters like a faucet, and every cell of your body screams: “Feed me! Feed me!” like the voices of a rioting cellblock.\n You look down at the dead tarantula, which you’d removed from the chili before eating it, and remember your first experience of prison. In Santa Candelaria, where, investigating the rumors of a plague of amnesia that had been reported in a weekly tabloid paper, you had incurred the enmity of the local sheriff. He’d framed you on drug charges, imprisoned you with a flagrant disregard of all your legal rights, and made you the butt of endless sadistic jokes, such as serving you just such a bowl of tarantula-garnished chili. The horror of that squalid jail cell! The horror of it!', // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-flw');
      }
    },
    {
      id: 'deat-ftarj', // If JEWISH, firing squad & no meal selected
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-letar2');
      }
    },
    {
      id: 'deat-ftarc', // If CATHOLIC & firing squad & no meal selected
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-letar2');
      }
    },
    {
      id: 'deat-ftarp', // If Protestant & firing squad & no meal selected
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-ftar2');
      }
    },
    {
      id: 'deat-fsp1', // If none or go away, firing squad & Steak and Potatoes
      name: '', // Displayed each time the player enters the room.
      desc: `“That’s about what I figured,” the warden says, and bids you good day.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-fsp2');
      }
    },
    {
      id: 'deat-fsp2', // firing squad & steak and potatoes
      name: '', // Displayed each time the player enters the room.
      desc: `You spend the next hour preparing to face death and debating with yourself the pros and cons of capital punishment. If you could be sure you’d killed a guard while trying to escape from this prison, you’d feel less of two minds. Since you’re not sure, you feel it isn’t really fair to be executed. How much more humane, you think, to induce amnesia like your own instead of condemning men to death. On the other hand, given a choice between a quick and painless death and a lifetime of dying slowly here in Revoltillo…
      Your gloomy meditations are interrupted by the arrival of a guard with a covered tray. “Your last meal,” he announces, placing the tray on a table. “Enjoy it.” The guard leaves you alone. You uncover the dish and regard the last meal you’re to enjoy in this life.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-fsp3');
      }
    },
    {
      id: 'deat-fsp3', //  firing squad & steak and potatoes
      name: '', // Displayed each time the player enters the room.
      desc: 'A large sirloin steak confronts you, together with an abundance of french fries, and a single lettuce leaf symbolizing salad.', // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-fsp4');
      }
    },
    {
      id: 'deat-fsp4', //  firing squad & steak and potatoes
      name: '', // Displayed each time the player enters the room.
      desc: `The guard looks in through the bars of your cell and sees you are not eating your last meal. “Come on, Hollings,” he says encouragingly. “You’re holding everything up. Eat your last meal so we can get this show on the road.” The guard goes away before you can make any reply, and you look down at the food on the plate. You begin, despite yourself, to salivate.\n
      You begin to eat your last meal. It is delicious! No, that is probably the wrong word. Objectively it is probably at the level of an average roadside diner. But subjectively it seems incredibly significant. You finish the last morsel on your plate--and then, like a bolt from the blue, it hits you--a memory from your past life. A memory that makes you realize that you must be innocent of the crime for which you are dying.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-fsp5');
      }
    },
    {
      id: 'deat-fsp5', // firing squad & steak and potatoes
      name: '', // Displayed each time the player enters the room.
      desc: 'You remember an earlier steak dinner you had with Denise. You remember the care and deliberation with which she cut into her own steak with the steak knife after you had told her that you had fallen in love with another woman and that your engagement was over. You remember her look of rage and her quick recovery as she told you that she understood and wished you every happiness with your new love.', // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-flw');
      }
    },
    {
      id: 'deat-fspj', // If JEWISH, firing squad & steak and potatoes
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-fsp2');
      }
    },
    {
      id: 'deat-fspc', // If CATHOLIC & firing squad & steak and potatoes
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-fsp2');
      }
    },
    {
      id: 'deat-fspp', // If Protestant & firing squad & steak and potatoes
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-fsp2');
      }
    },
    {
      id: 'deat-fbr1', // If none or go away, firing squad & Barbecue Ribs
      name: '', // Displayed each time the player enters the room.
      desc: `“That’s about what I figured,” the warden says, and bids you good day.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-fbr2');
      }
    },
    {
      id: 'deat-fbr2', // firing squad & Barbecue Ribs
      name: '', // Displayed each time the player enters the room.
      desc: `You spend the next hour preparing to face death and debating with yourself the pros and cons of capital punishment. If you could be sure you’d killed a guard while trying to escape from this prison, you’d feel less of two minds. Since you’re not sure, you feel it isn’t really fair to be executed. How much more humane, you think, to induce amnesia like your own instead of condemning men to death. On the other hand, given a choice between a quick and painless death and a lifetime of dying slowly here in Revoltillo…
      Your gloomy meditations are interrupted by the arrival of a guard with a covered tray. “Your last meal,” he announces, placing the tray on a table. “Enjoy it.” The guard leaves you alone. You uncover the dish and regard the last meal you’re to enjoy in this life.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-fbr3');
      }
    },
    {
      id: 'deat-fbr3', //  firing squad & Barbecue Ribs
      name: '', // Displayed each time the player enters the room.
      desc: 'The barbecue sauce on the slab of ribs is charred to the brown nearest black. There is a mound of french fries and a small paper cup of coleslaw.', // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-fbr4');
      }
    },
    {
      id: 'deat-fbr4', //  firing squad & Barbecue Ribs
      name: '', // Displayed each time the player enters the room.
      desc: `The guard looks in through the bars of your cell and sees you are not eating your last meal. “Come on, Hollings,” he says encouragingly. “You’re holding everything up. Eat your last meal so we can get this show on the road.” The guard goes away before you can make any reply, and you look down at the food on the plate. You begin, despite yourself, to salivate.\n
      You begin to eat your last meal. It is delicious! No, that is probably the wrong word. Objectively it is probably at the level of an average roadside diner. But subjectively it seems incredibly significant. You finish the last morsel on your plate--and then, like a bolt from the blue, it hits you--a memory from your past life. A memory that makes you realize that you must be innocent of the crime for which you are dying.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-fbr5');
      }
    },
    {
      id: 'deat-fbr5', // firing squad & Barbecue Ribs
      name: '', // Displayed each time the player enters the room.
      desc: 'You remember an earlier dinner of barbecue ribs you had at a diner somewhere in Texas.  On the outskirts of a town called Santa Candelaria.  From your table you could see back into the kitchen, where a fat counterman was sprinkling soap into an antique dishwasher. It was then you’d had the sense of Eureka, and the pieces of the puzzle had fit together. You remember the Odd Lots Discount Store and its great stacks of the detergent that had failed its test marketing and was being remaindered here and perhaps nowhere else. Shimmer the soap was called--you’d seen the bright blue package in every one of the homes you’d been allowed to investigate. It had only been a hunch, but it had proved correct. It was Shimmer, or one of its decay-products, that had been responsible for Santa Candelaria’s plague of amnesia!.', // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-flw');
      }
    },
    {
      id: 'deat-fbrj', // If JEWISH, firing squad & Barbecue Ribs
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-fbr2');
      }
    },
    {
      id: 'deat-fbrc', // If CATHOLIC & firing squad& Barbecue Ribs
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-fbr2');
      }
    },
    {
      id: 'deat-fbrp', // If Protestant & firing squad & Barbecue Ribs
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-fbr2');
      }
    },
    {
      id: 'deat-frt1', // If none or go away, firing squad& Roasted Turkey
      name: '', // Displayed each time the player enters the room.
      desc: `“That’s about what I figured,” the warden says, and bids you good day.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-frt2');
      }
    },
    {
      id: 'deat-frt2', // firing squad & roasted turkey
      name: '', // Displayed each time the player enters the room.
      desc: `You spend the next hour preparing to face death and debating with yourself the pros and cons of capital punishment. If you could be sure you’d killed a guard while trying to escape from this prison, you’d feel less of two minds. Since you’re not sure, you feel it isn’t really fair to be executed. How much more humane, you think, to induce amnesia like your own instead of condemning men to death. On the other hand, given a choice between a quick and painless death and a lifetime of dying slowly here in Revoltillo…
      Your gloomy meditations are interrupted by the arrival of a guard with a covered tray. “Your last meal,” he announces, placing the tray on a table. “Enjoy it.” The guard leaves you alone. You uncover the dish and regard the last meal you’re to enjoy in this life.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-frt3');
      }
    },
    {
      id: 'deat-frt3', //  firing squad & roasted turkey
      name: '', // Displayed each time the player enters the room.
      desc: 'Several slices of turkey breast are surmounted with a perfect sphere of stuffing over which has been ladled a great deal of thick pale gravy. A squat, neat cylinder of cranberry sauce accompanies this holiday dinner..', // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-frt4');
      }
    },
    {
      id: 'deat-frt4', //  firing squad & roasted turkey
      name: '', // Displayed each time the player enters the room.
      desc: `The guard looks in through the bars of your cell and sees you are not eating your last meal. “Come on, Hollings,” he says encouragingly. “You’re holding everything up. Eat your last meal so we can get this show on the road.” The guard goes away before you can make any reply, and you look down at the food on the plate. You begin, despite yourself, to salivate.\n
      You begin to eat your last meal. It is delicious! No, that is probably the wrong word. Objectively it is probably at the level of an average roadside diner. But subjectively it seems incredibly significant. You finish the last morsel on your plate--and then, like a bolt from the blue, it hits you--a memory from your past life. A memory that makes you realize that you must be innocent of the crime for which you are dying.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-lert5');
      }
    },
    {
      id: 'deat-frt5', // firing squad & roasted turkey
      name: '', // Displayed each time the player enters the room.
      desc: 'You remember a holiday dinner years ago. It was your first Christmas home from college. After the dinner you had mustered up the courage to ask your mother (your father was already dead then) if you were an adopted child. She had denied it emphatically, and asked you how you had come to have such a suspicion. You had not told her, then, about Zane. Only years later, when she had put up the bail to release you from the nightmarish prison cell in Santa Candelaria, only then did you tell her that you had, if not an identical twin, a doppelganger, and even then she had denied you could be Zane’s twin. “You’re my son!” she insisted almost hysterically. “I will not have you suppose otherwise!”', // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-flw');
      }
    },
    {
      id: 'deat-frtj', // If JEWISH, firing squad & roasted turkey
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-frt2');
      }
    },
    {
      id: 'deat-lertc', // If CATHOLIC & firing squad & roasted turkey
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-frt2');
      }
    },
    {
      id: 'deat-frtp', // If Protestant & firing squad & roasted turkey
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-frt2');
      }
    },
    {
      id: 'deat-fbad', // If you swear at the guard firing squad
      name: '', // Displayed each time the player enters the room.
      desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-fgo');
      }
    },
  {
    id: 'deat-lebad', // if you swear at the guard lethal injection
    name: '', // Displayed each time the player enters the room.
    desc: 'The warden regards you with contempt and disbelief. “Come on, Hollings. You’ve only got a few minutes left. Try and show some dignity.” You are led, protesting your innocence, to the place of execution.', // Displayed when the player first enters the room.
    onEnter: () => {
      pressEnter('deat-fgo');
    }
  },
  {
    id: 'deat-lelw', // Last Words lethal injection route
    name: '', // Displayed each time the player enters the room.
    desc: `And then it all comes back in a rush, everything you’d forgotten, the entire tangle of events your amnesia had erased. And you realize that you are innocent! It wasn’t you who murdered the guard. It wasn’t you who escaped from Revoltillo. You’re innocent of those crimes.
    But this realization comes too late, for it is just then that the warden comes to your cell with the guards who are to ready you for your execution.
    “Xavier Hollings,” the warden asks solemnly, “do you have any last words?”`, // Displayed when the player first enters the room.
    // if anything
    onEnter: () =>{
      document.querySelector('input').disabled = false;
      document.getElementById('arrow').innerHTML = '>';
     },
    exits: [
      {
        dir: ['no', '', 'yes'], //Two word strings are not working, need to find out why
        id : 'deat-lego'
      },
      {
        dir: ['fuck', 'shit', 'die'], //Two word strings are not working, need to find out why
        id : 'deat-lebad'
      },
    ],
  },
  {
    id: 'deat-flw', // Last Words firing squad route
    name: '', // Displayed each time the player enters the room.
    desc: `And then it all comes back in a rush, everything you’d forgotten, the entire tangle of events your amnesia had erased. And you realize that you are innocent! It wasn’t you who murdered the guard. It wasn’t you who escaped from Revoltillo. You’re innocent of those crimes.
    But this realization comes too late, for it is just then that the warden comes to your cell with the guards who are to ready you for your execution.
    “Xavier Hollings,” the warden asks solemnly, “do you have any last words?”`, // Displayed when the player first enters the room.
    // if anything
    onEnter: () =>{
      document.querySelector('input').disabled = false;
      document.getElementById('arrow').innerHTML = '>';
     },
     onBlock: () => {
      enterRoom(`deat-fgo`);
    },
    exits: [
      {
        dir: ['no', '', 'yes'], //Two word strings are not working, need to find out why
        id : 'deat-fgo'
      },
      {
        dir: ['fuck', 'shit', 'die'], //Two word strings are not working, need to find out why
        id : 'deat-fbad'
      },
    ],
  },
  {
    id: 'deat-fgo', // If Firing Squad
    name: '', // Displayed each time the player enters the room.
    desc: `A stake has been placed in the courtyard of the prison, and you are bound to it. A chaplain appears to offer you some last words of comfort, and he too refuses to listen to your protests, as does the guard who offers you a blindfold and a last cigarette.
    “It’s just as well you don’t smoke,” he says, as he walks toward the group of six marksmen standing at the ready some ten yards away. “It’s bad for your health. Says so right on the package.”
    The marksmen laugh appreciatively at his joke.
    They take aim. You close your eyes. The order to Fire! is given.
    You die.`, // Displayed when the player first enters the room.
    // Go to Game Over
  },
  {
    id: 'deat-lego', // If lethal injection
    name: '', // Displayed each time the player enters the room.
    desc: `It is a small room glaringly lighted with about 500 watts of fluorescent light. The light gives a surreal intensity to the room’s single item of furniture, a kind of dentist’s chair that has been modified with a panoply of leather and canvas restraints. You are made to sit in the chair, and a guard secures the restraints.
    “This is the first time we’ve ever done a lethal injection here in Texas. They say it’s the wave of the future, but I don’t know. I think there’s something to be said for the traditional way of doing these things. What do you think?”\n
    The guard frowns thoughtfully at your protests of innocence and your frenzied attempt to explain the bizarre events that got you into this fix. “There’s nothing I can do to help you, fellow. Talk to the chaplain.”\n
    The chaplain assures you that only God can help you now. The chaplain leaves.\n
    A medical attendant enters the room. He makes a tourniquet below your biceps with a length of rubber tubing, and then when he has found a vein, he injects the poison.
    There is a tingling along your arm, a pain in your chest, followed by a sense of wonderful relaxation. You feel you still have breath enough to speak a single word that will be your last. You say it:`, // Displayed when the player first enters the room.
    onEnter: () =>{
      document.querySelector('input').disabled = false;
      document.getElementById('arrow').innerHTML = '>';
     },
    onBlock: () => {
      enterRoom(`deat-ledie`);
    },
  },
  {
    id: 'deat-ledie', // If lethal injection
    name: '', // Displayed each time the player enters the room.
    desc: `And then you die`, // Displayed when the player first enters the room.
    onEnter: () => {
      pressEnter('game-over');
    },
    // if anything
    // println('And then you die'
    //pressEnter('gameover?')
  },
  //**********************************************************/
  //                        Lobby                            /
  //********************************************************/
  {
    id: 'lobb-1',
    name: 'The Lobby',
    desc: `You step out of the elevator into the lobby of the Sunderland Hotel, and the first thing you see is yourself looking elegantly sheepish in your white tuxedo, for the doors of the facing elevator are made of mirror-glass.`, 
    

    onLook: () => { // Looking around the Lobby.
      const room = getRoom('lobb-1');
      room.desc = `Mirrors seem to be the prevailing theme at the Sunderland--at least since the latest decorator got hold of it. There are mirrors on the walls, and mirrors encase the free-standing columns, and the three chandeliers that hang above the main reception area are formed of mirrors instead of crystal.  Reflected and multiplied in all this silvered glass, the small body of the hotel's clientele become a multitude. To your right is the registration desk, and beyond it the exit to 53rd Street; to your left a news-stand and gift shop, and then a large curving staircase going up to the second floor. Beside the staircase a hand-lettered sign says:
      The Sunderland Hotel
      is happy to welcome
      The Noise Abatement League
      to the Big Apple.
      Beyond the staircase, at the end of a mirror-lined corridor, is an entrance to the Rathskeller Bar and Grill, and at the far end of the corridor is the exit to 52nd St.
      Directly in front of the elevator alcove in which you're standing is the main reception area. In the far corner of the reception area a lonely TV mutely displays the evening news to a man slumped in a wing-back chair. The man, who is dressed like a Texas businessman in suit and tie, with boots and Stetson, tilts back his hat to look at you. Then he stands up, smiling, and gestures for you to come to him.`;
    },
    

    exits: [
      { // If the player is wearing the Tux and goes to Luke
        dir: 'west',
        id: 'lobb-3', 
      },

      { // If the player is NOT wearing the Tux and goes to Luke
        dir: 'tuxless', //Temporary dir, used to access the tuxless path.
        id: 'lobb-8', 
      },

    ],
  },

//Begin Lobby Wandering Section
{ 
id: 'lobb-#',
desc: `Text`,

onLook: () => {
  const room = getRoom('lobb-#');
  room.desc = `Mirrors seem to be the prevailing theme at the Sunderland--at least since the latest decorator got hold of it. There are mirrors on the walls, and mirrors encase the free-standing columns, and the three chandeliers that hang above the main reception area are formed of mirrors instead of crystal.  Reflected and multiplied in all this silvered glass, the small body of the hotel's clientele become a multitude. To your right is the registration desk, and beyond it the exit to 53rd Street; to your left a news-stand and gift shop, and then a large curving staircase going up to the second floor. Beside the staircase a hand-lettered sign says:
  The Sunderland Hotel
  is happy to welcome
  The Noise Abatement League
  to the Big Apple.
  Beyond the staircase, at the end of a mirror-lined corridor, is an entrance to the Rathskeller Bar and Grill, and at the far end of the corridor is the exit to 52nd St.
  Directly in front of the elevator alcove in which you're standing is the main reception area. In the far corner of the reception area a lonely TV mutely displays the evening news to a man slumped in a wing-back chair. The man, who is dressed like a Texas businessman in suit and tie, with boots and Stetson, tilts back his hat to look at you. Then he stands up, smiling, and gestures for you to come to him.`;
},

exits: [
  {
    dir: 'Text',
    id: '#',
  },
],  
},


//End Lobby Wandering Section
//Once the player talks to Luke, they won't be able to walk around the Lobby anymore until they return later.

//Begin Tuxedo Lobby Section

  {//talking to Luke while wearing the tux
    id: 'lobb-3',
    desc: `"Johnny my boy!" booms the man in the Stetson, in a voice as abrasive as desert sand. "Wouldn't your dear old mother -God rest her gentle soul!--be proud to see you now?" He advances toward you grinning like a friendly skull, with his long, thin arms extended to embrace you, and before you can back away or offer any other protest the embrace is completed. Not what you'd call warm, just a short symbolic collision between your torso and his, with him maintaining the same cadaverous grin all the while. "Well, my boy," he says, releasing you, "how are you feeling after your big toot?"`,
    exits: [
      { // Answering in confirmation, goes to 4.
        dir: 'okay',
        id: 'lobb-4',
      },

      { // Answering negativley, goes to 4A.
        dir: 'no',
        id: 'lobb-4A',
      },

      { // Asking 'Who are you?' or something similar, skips both 4 and 4A to go to 4B.
        dir: 'who',
        id: 'lobb-4B',
      },
    ],  
  },

  {
    id: 'lobb-4',
    desc: `"Wish I could say the same for myself, but that's no matter now. Say, why that funny look? Something wrong with what I'm wearing?" You shake your head and go on wondering how anyone who'd ever met this man--as you must have in the life you can't remember--could ever forget him. For he is memorably ugly.`,
    exits: [
      {// Asking 'Who are you?' or something similar.
        dir: 'who',
        id: 'lobb-4B',
      },
    ],  
  },

  {
    id: 'lobb-4A',
    desc: `"I'm feeling just fine myself, but that's no matter now."`,
    exits: [
      {// Asking 'Who are you?' or something similar.
        dir: 'who',
        id: 'lobb-4B',
      },
    ],  
  },

  {
    id: 'lobb-4B',
    desc: `"Hey, Johnny boy, this is no time for dumb questions like that. I gotta go down to this here rats' cellar and fetch back that preacher. Meanwhile you'd better go up to the chapel on the next floor and smooth things over with the little lady. I think she was starting to worry that you was going to leave her standing at the altar a second time, but I told her, 'Honey, I said, just joking like, 'if that Cameron boy walks out on you this time with another dumb excuse like the last one, he's going to have to answer to your daddy.' And then, Johnny, I showed her what I was packing--" The man holds open the jacket of his suit to reveal a shoulder holster from which the butt of a small handgun projects. "--and that seemed to ease her worrying a whole lot. Nuff said, my boy? Do you take my meaning?"`,
    
    onLook: () => { // (6) Looking at Luke
      const room = getRoom('lobb-4B');
      room.desc = `He is a tall thin man with an expression of "good humor" so forced that his smile seems to be achieved the way some facelifts are, with little fishhooks pulling the flesh into place. His black suit hangs loosely on his spare frame, and the few strands of hair that have escaped the band of his black Stetson are the color of dirty khaki. His eyes are small and he has a tendency to squint. The buckle of his belt spells out his name in big brass capitals: LUKE.`;
    },

    exits: [
      { //Continues onto 5
        dir: 'yes',
        id: 'lobb-5',
      },
    ],  
  },

  { 
    id: 'lobb-5',
    desc: `"Glad to hear it. Cause I wouldn't want to have to do anything to make my little cactus blossom unhappy. You've given that poor gal enough trouble to last her a lifetime, and from here on out, Mr. Know-It-All Cameron the Third, you're going to do right by my little Alice--or my name ain't Luke Dudley. Now scoot on up those stairs and give her some of that sweet talk that got the two of you into this situation.'`,
    
    onLook: () => { // (6) Looking at Luke
      const room = getRoom('lobb-5');
      room.desc = `He is a tall thin man with an expression of "good humor" so forced that his smile seems to be achieved the way some facelifts are, with little fishhooks pulling the flesh into place. His black suit hangs loosely on his spare frame, and the few strands of hair that have escaped the band of his black Stetson are the color of dirty khaki. His eyes are small and he has a tendency to squint. The buckle of his belt spells out his name in big brass capitals: LUKE.`;
    },
    
    exits: [
      { // Leads straight to chapel
        dir: 'stairs',
        id: 'chap-1',
      },

      { // Asking Luke any form of question.
        dir: 'what',
        id: 'lobb-7',
      },

    ],  
  },

  { 
    id: 'lobb-7',
    desc: `Luke pats his concealed pistol. "I said 'scoot,' boy, and when I say 'scoot' I'm not talking about by-and-by. I'm saying 'scoot now.'"`,

    exits: [
      {// responding 'go to stairs"
        dir: 'stairs',
        id: 'lobb-17',
      },

      {// if player tries to go east past the stairs towards the street exit
        dir: 'east',
        id: 'lobb-18',
      },

      {// if player tries to go west past the stairs towards the street exit
        dir: 'west',
        id: 'lobb-18A',
      },

    ],  
  },
//End Tuxedo Lobby Section

//Begin Tuxless Lobby Section

  { //if attempting to talk to Luke without wearing the Tuxedo from earlier.
    id: 'lobb-8',
    desc: `"Well, god damn," swears the man in the Stetson hat loud enough to be heard from the other side of the reception area. He strides toward you with an angry glint in his beady eyes. "Now where in tarnation is that white suit. I ain't shelling out five hundred bucks to get my little Alice looking like a proper bride and then have you showing up looking like a pig farmer. No siree!" He lays a hand on your shoulder and pushed you back toward the elevator alcove. "We are going right back to your room, and you are going to get dressed in your bridegroom uniform, and then by God you're going to do the right thing by my little Alice. Now get inside that elevator."`,

    exits: [
      {// Responding by going to the elevator.
        dir: 'elevator',
        id: 'lobb-9',
      },

      {// Anything else but going to the elevator
        dir: 'no',
        id: 'lobb-10',
      },

    ],  
  },

  { 
    id: 'lobb-9',
    desc: `The man in the Stetson--his brass belt-buckle identifies him as 'LUKE'--follows you into the elevator and pushes the button for 15. The doors whoosh close and the elevator starts to go up.`,

    exits: [
      {// Attempting to ask a question
        dir: 'what',
        id: 'lobb-10A',
      },

    ],  
  },

  { // entering from lobb-8
    id: 'lobb-10',
    desc: `The man spreads back the lapel of his suitcoat to reveal a shoulder holster from which the butt of a small handgun projects. "Now I don't want any trouble out of you, Mr. smarty-pants Cameron the Third. This ain't going to be no shotgun wedding, but it might turn out to be a .38 caliber wedding, if you insist on it."
    
    You are persuaded by his eloquence and get in the elevator. He follows after you and pushes the button for 15. The doors whoosh closed and the elevator starts to go up.`,

    exits: [
      {// any response except 'take gun' or 'fight man/Luke'
        dir: 'any',
        id: 'lobb-11',
      },

      {// responding 'take gun' or 'fight man/Luke'
        dir: 'fight',
        id: 'lobb-13',
      },

    ],  
  },

  { // entering from lobby-9
    id: 'lobb-10A',
    desc: `The man spreads back the lapel of his suitcoat to reveal a shoulder holster from which the butt of a small handgun projects. "Now I don't want any trouble out of you, Mr. smarty-pants Cameron the Third. This ain't going to be no shotgun wedding, but it might turn out to be a .38 caliber wedding, if you insist on it."`,

    exits: [
      {// any response except 'take gun' or 'fight man/Luke'
        dir: 'any',
        id: 'lobb-11',
      },

      {// responding 'take gun' or 'fight man/Luke'
        dir: 'fight',
        id: 'lobb-13',
      },
    ],  
  },

  { 
    id: 'lobb-11',
    desc: `The man pats his concealed weapon significantly and gives you a grin like a skull trying to be friendly. The elevator arrives at 15 and the doors open. He motions for you to get out, and then follows you to the door of Room 1502. "Now give me the key," he demands.`,

    exits: [
      {// responding 'give man/Luke room key'
       dir: 'give key',
       id: 'lobb-14',
      },

      {// if the player either didn't take the key from the room, or says: "I don't have key/I can't"
        dir: 'no',
        id: 'lobb-12',
      },
    ],  
  },

  { 
    id: 'lobb-12',
    desc: `"You didn’t take your room key when you left your room? God-damn, but you are a turkey.  Johnny boy, I think you just plain aren't good enough for my little Alice, so say your prayers and make them quick." And with no more preface than that, the man in the Stetson takes the .38 caliber revolver from his shoulder holster and shoots you between the eyes.`,

    exits: [
      { // leads to the same 'Hell' ending as the suicide from earlier.
        dir: 'dead',
        id: 'hell-1',
      },
    ],  
  },

  { 
    id: 'lobb-13',
    desc: `Unwisely you try to take the man’s revolver by force. He proves to be much stronger than his spare frame would suggest. Instead of the gun, you have to make do with a single bullet--right between the eyes.`,

    exits: [
      { // leads to the same 'Hell' ending as the suicide from earlier.
        dir: 'dead',
        id: 'hell-1',
      },
    ],  
  },

  { 
    id: 'lobb-14',
    desc: `He takes the key from you and unlocks the door to Room 1502. "Now you get in there and change into that white monkey suit on the double--and then like the song says, you're going to the chapel and you're going to get married." He chuckles and adds: "Going to the Chapel of Love!"`,

    exits: [
      {// responding "enter room"
        dir: 'enter',
        id: 'lobb-16',
      },

      {// any response but "enter room"
        dir: 'no',
        id: 'lobb-15',
      },
    ],  
  },

  { 
    id: 'lobb-15',
    desc: `"God-damn, but you are a turkey. Johnny boy, I think you just plain aren't good enough for my little Alice, so say your prayers and make them quick." And with no more preface than that, the man in the Stetson takes the .38 caliber revolver from his shoulder holster and shoots you between the eyes.`,

    exits: [
      {// leads to the same 'Hell' ending as the suicide from earlier.
        dir: 'dead',
        id: 'hell-1',
      },
    ],  
  },

  { 
    id: 'lobb-16',
    desc: `You quickly change into the white tuxedo, put the clothes you were wearing into the gym bag, and return with the bag under your arm to where your would-be father-in-law is waiting in the corridor. "Now that looks a whole lot nicer," he says when you're back in the elevator, "and I'll bet it feels more comfortable too, don’t it?" He presses the button for 2, and the elevator takes you to the second floor--and the entrance to the All-Faith Chapel. "Now you go in the chapel," Luke says, "and start getting into a romantic mood. I got to go down to that rats' cellar they got here and fetch back that preacher. Damned if this ain't more work than rounding up pigs from a corn patch!" You step out of the elevator, and the doors close behind you.`,

    exits: [
      { // Leads straight to chapel
        dir: 'chapel',
        id: 'chap-1',
      },
    ],  
  },
//End Tuxless Section

//Begin Lobby Stairs Section
  { 
    id: 'lobb-17',
    desc: `Halfway up the stairs a woman in a bright blue dress insists on giving you a mimeographed flyer with the headline: TOO MUCH NOISE CAN DRIVE YOU CRAZY!!! A large yellow button pinned to her dress shows her to be a member of the New York City Chapter of the Noise Abatement League. "The next presentation will be in just a minute or two!" she calls after you as you continue up the staircase. At the top you take your direction from an arrow pointing you to the All­-Faith Chapel.`,

    exits: [
      { // Leads straight to chapel
        dir: 'enter',
        id: 'chap-1',
      },

    ],  
  },

  { //East from (lobby-7)
    id: 'lobb-18',
    desc: `You walk on past the stairs towards the 52nd Street exit, but you’ve not gone more than a few yards before you feel Luke's hand on your shoulder--and his revolver pressed into the small of your back. "Lost your way?" he asks sarcastically. You let him conduct you to the foot of the stairs without protest. "To the chapel!" Luke advises, prodding at your back with the revolver.`,

    exits: [
      {// responding 'go to stairs"
        dir: 'stairs',
        id: 'lobb-17',
      },

    ],  
  },

  { //West from (7)
    id: 'lobb-18A',
    desc: `Instead of heading toward the stairs, you turn left toward the 53rd Street exit, but you’ve not gone more than a few yards before you feel Luke's hand on your shoulder--and his revolver pressed into the small of your back. "Lost your way?" he asks sarcastically. You let him conduct you to the foot of the stairs without protest. "To the chapel!" Luke advises, prodding at your back with the revolver.`,

    exits: [
      {// responding 'go to stairs"
        dir: 'stairs',
        id: 'lobb-17',
      },

    ],  
  },
  //**********************************************************/
  //                          Chapel                         /
  //********************************************************/
//End Lobby Stairs Section

//End Lobby

//Begin Lobby Notes

  //Add in basic rooms for walking around the Lobby before talking to Luke
  //Needs to adjust rooms for compass direction movements. This allows for access to stairs from room 7. And probably a few other things too.
  //properly name the dir for navigation. Will need to happen once we have an array of words that will work.
  //adding in specific look functions for the room, and for Luke
  //Fix desc for 18 and 18A. Check where they should properly happen.
  //Manuscript text for 4 and 5 have some diolouge shifted around. Original game skips this issue by forcing you onto a path.
  //Connect any sections that shoul auto-advance to the next ones, such as those leading to hell or the chapel.
  //Organize the code a little bit so it's easier to tell the wearing-tux rooms from the non-wearing-tux rooms
  //Last updated 10/9/2021

//End Lobby Notes

// Start Templates
  // Templates for quick & easy copy/paste use. These will be deleted when the work is finished.

  // Basic template for a new room, looking around, and it's exits.
  { 
    id: '#',
    desc: `Text`,

    onLook: () => {
      const room = getRoom('name');
      room.desc = `Description`;
    },

    exits: [
      {
        dir: 'Text',
        id: '#',
      },
    ],  
  },
        {
        id: 'chap-1',
        name: 'All-Faith Chapel',
        desc: `You are standing before a large rosewood door bearing a mottled brass nameplate declaring this to be the ALL-FAITH CHAPEL.`, 
           
        exits: [
          { //Any direction or "enter chapel" will result in entering the chapel.
            dir: 'enter',
            id: 'chap-2', 
          },
  
        ],
      },

      { 
        id: 'chap-2',
        desc: `You enter the chapel, which is dim and fragrant with the mingled scents of flowers and candlewax. It seems to be deserted.`,
  
        onLook: () => {
          const room = getRoom('chap-2');
          room.desc = `The chapel is about twenty feet square, windowless, with a high coffered ceiling and a terracotta floor. In the center of the room is a large round slab of marble too low to dine at but too high to be a coffee table. Grouped about it on three sides are pews of blond wood. Behind it is a lectern flanked by a vase of wilting gladiolas on a free­standing marble column and a large candelabra, its candles burned down to the sockets. The general effect is that of a funeral parlor without a corpse.
          High up on three of the walls, forming a kind of frieze, is the All-Faith Chapel's chief claim to distinction, a much-darkened mural representing all the faiths of mankind worshipping the Supreme Being, painted (a plaque behind the lectern informs you) in 1938 by Maxfield Parrish. Christ, Moses, Mohammed, Buddha, Confucius, Martin Luther, and Mary Baker Eddy are represented sitting down at or standing about a table and waving their arms, all seeming to be alarmed by the gold-and-violet sunset sky painted on the wall to their right or by the magenta dawn to their left, or possibly by the simultaneity of these events, although the servants who are waiting on this distinguished gathering seem entirely unperturbed.`;
        },
  
        exits: [
          {
            dir: 'leave',
            id: 'chap-4',
          },
          {
            dir: 'pray',
            id: 'chap-3',
          },
        ],  
      },

      { 
        id: 'chap-3',
        desc: `You enter one of the pews nearest the central marble slab and kneel on the padded kneeler. You fold your hands and bow your head and close your eyes. You’re all ready to say a prayer--but what do you want to say a prayer for?`,
  
        exits: [
          {
            dir: 'leave',
            id: 'chap-4',
          },
          {
            dir: 'memory',
            id: 'chap-3A',
          },
        ],  
      },

      { 
        id: 'chap-3A',
        desc: `You pray to have your memory restored--if not in whole, then for the least scrap of your past, a flashback from childhood, a face, a voice, a feeling--anything authentically belonging to your mislaid identity. And then you wait, trying to make your mind receptively blank. But a blank mind is hard to maintain. You begin to imagine memories you would like to have--your first communion, your bar mitzvah, your wedding day--and the image of each is so vivid that you might be seeing it in an album of family photographs.`,
  
        exits: [
          {
            dir: 'leave',
            id: 'chap-4',
          },
        ],  
      },
//End Starting Chapel Section

//Begin Alice Chapel Section
      { 
        id: 'chap-4',
        desc: `Just as you decide to leave the empty chapel, the door opens behind you, and a woman’s voice exclaims, "John! Oh my darling, you're here!" You spin around to confront the figure of a woman in a bridal gown.`,
  
        onLook: () => {
          const room = getRoom('chap-4');
          room.desc = `She is wearing a floor-length gown of creamed white satin trimmed with lace and taffeta. A veil of yellowed lace obscures her face. She is of average height and has a well- proportioned figure--or a good dressmaker. Really, there’s more of the wedding gown and veil in evidence than of the woman.`;
        },
  
        exits: [
          {//If response is "Who are you?"
            dir: 'who',
            id: 'chap-5',
          },
          {//If response is "Ask woman/Alice about Luke"
            dir: 'ask luke',
            id: 'chap-6',
          },
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: 'ask marriage',
            id: 'chap-7',
          },
        ],  
      },

 //Begin Alice Chapel Questions
      { //"Who are you?"
        id: 'chap-5',
        desc: `In answer to your question she laughs--and lifts her bridal bouquet to screen her already veiled face. "I am… a woman of mystery." Her Garbo imitation is first-rate.`,
  
        onLook: () => {
          const room = getRoom('chap-5');
          room.desc = `She is wearing a floor-length gown of creamed white satin trimmed with lace and taffeta. A veil of yellowed lace obscures her face. She is of average height and has a well- proportioned figure--or a good dressmaker. Really, there’s more of the wedding gown and veil in evidence than of the woman.`;
        },
  
        exits: [
          {//If response is "Ask woman/Alice about Luke"
            dir: 'ask luke',
            id: 'chap-6',
          },
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: 'ask marriage',
            id: 'chap-7',
          },
        ],  
      },
  
      {//"Ask woman/Alice about Luke"
        id: 'chap-6',
        desc: `"Oh darling, don't make me get into all that again. Can I help it if the man is my father? Once we're in Australia he can't bother us anymore."`,
  
        onLook: () => {
          const room = getRoom('chap-6');
          room.desc = `She is wearing a floor-length gown of creamed white satin trimmed with lace and taffeta. A veil of yellowed lace obscures her face. She is of average height and has a well- proportioned figure--or a good dressmaker. Really, there’s more of the wedding gown and veil in evidence than of the woman.`;
        },
  
        exits: [
          {//If response is "Who are you?"
            dir: 'who',
            id: 'chap-5',
          },
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: 'ask marriage',
            id: 'chap-7',
          },
        ],  
      },

      {//"Ask woman/Alice about marriage/wedding"
        id: 'chap-7',
        desc: `"Isn't it wonderful? I've always wanted to be married in full bridal regalia, and even if there's not to be a great crowd to see us, it's so much more solemn like this. And more fun too. It's so sweet of you to go along with my whims. And I promise that tonight I'll go along with all of yours. Oh my darling, take me in your arms! Kiss me! Make me yours!"`,
  
        onLook: () => {
          const room = getRoom('chap-7');
          room.desc = `She is wearing a floor-length gown of creamed white satin trimmed with lace and taffeta. A veil of yellowed lace obscures her face. She is of average height and has a well- proportioned figure--or a good dressmaker. Really, there’s more of the wedding gown and veil in evidence than of the woman.`;
        },
  
        exits: [
          {//If response is "Who are you?"
            dir: 'who',
            id: 'chap-5',
          },
          {//If response is "Ask woman/Alice about Luke"
            dir: 'ask luke',
            id: 'chap-6',
          },
          {//If response is "Lift Veil"
            dir: 'lift veil',
            id: 'chap-8',
          },
        ],  
      },

      { //Lifting the veil
        id: 'chap-8',
        desc: `You grasp the lower edge of the veil with a gentle firmness and raise it slowly--to reveal a pale, pretty, and slightly frightened face. Her eyes are fixed on yours imploringly, but she bites her lower lip, as though to keep herself from asking aloud the question that is in her eyes. But the eyes need no interpreters. Do you love me? they ask. Will you love me? Can you love me?`,
  
        onLook: () => {
          const room = getRoom('chap-8');
          room.desc = `She is wearing a floor-length gown of creamed white satin trimmed with lace and taffeta. She is of average height and has a well- proportioned figure--or a good dressmaker. Really, there’s more of the wedding gown in evidence than of the woman.`;
        },
  
        exits: [
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chap-9',
          },
        ],  
      },

      {//"I love you"
        id: 'chap-9',
        desc: `"Oh my darling, I love you too. More than anything in the whole world. You are my world. You're everything to me. Oh my love--kiss me!"`,
  
        onLook: () => {
          const room = getRoom('chap-9');
          room.desc = `She is wearing a floor-length gown of creamed white satin trimmed with lace and taffeta. She is of average height and has a well- proportioned figure--or a good dressmaker. Really, there’s more of the wedding gown in evidence than of the woman.`;
        },
  
        exits: [
          {//Kiss Alice (Veil raised)
            dir: 'kiss',
            id: 'chap-10',
          },
        ],  
      },

      {//Kiss Alice (Veil raised)
        id: 'chap-10',
        desc: `Her lips meet yours eagerly, and the satin of her gown is crushed to the polyester of your tux. The invitation is irresistible. The kiss intensifies from perhaps to entirely. Something phony may be going on, but a kiss like this doesn't leave any room to doubt one thing--this woman wants you.`,
    
        exits: [
          {
            dir: 'Text',
            id: 'chap-#',
          },
        ],  
      },

      {//Kiss Alice (Veil down)
        id: 'chap-10A',
        desc: `You place your hands on her shoulders and incline your head until your lips meet… the yellowed lace of the wedding veil. It has a dusty smell with a faint overtone of mothballs.`,
    
        exits: [
          {
            dir: 'Text',
            id: 'chap-#',
          },
        ],  
      },

      {//Telling Alice about amnesia
        id: 'chap-11',
        desc: `She laughs. "Well, that’s nothing to worry about, darling. If you had herpes, that would be something else again." When she sees that you don't laugh at her joke, she fingers her bridal veil nervously. "You're not serious, are you?"`,
    
        exits: [
          {
            dir: 'Text',
            id: 'chap-11A',
          },
        ],  
      },

      {//Answering yes, serious about amnesia
        id: 'chap-11A',
        desc: `When you assure her that you are perfectly serious and that you're suffering from total amnesia and have no idea who she is, she smiles grimly, lifts her satin-gloved hand and slaps your face. "John Cameron, you are the most despicable liar I've ever known, and if you think you can worm your way out of our getting married this time, you are mistaken."`,
    
        exits: [
          {
            dir: 'Text',
            id: 'chap-#',
          },
        ],  
      },

      {//Asking about self (1st time)
        id: 'chap-12',
        desc: `"What a strange question. What can I tell you about yourself that you don't know already? You're good-looking, but I guess you know that. You're a great lover--but I'm not going to make comparisons. And you’ve told me you love me-­ and I've believed you."`,
    
        exits: [
          {
            dir: 'Text',
            id: 'chap-#',
          },
        ],  
      },

      {//Asking about self (2nd time)
        id: 'chap-12A',
        desc: `"Are you serious? Maybe you think I blame you for what happened in Texas. But I know that wasn't your fault. You had to get away from that jail. It would have destroyed your soul. You simply have to stop thinking about all that-­ and think about Australia instead."`,
    
        exits: [
          {
            dir: 'Text',
            id: 'chap-#',
          },
        ],  
      },

      {//Asking about self (3rd time)
        id: 'chap-12B',
        desc: `"What a vain creature you are, John! Why don't we talk about me for a change? How I feel about sacrificing my career for your sake? Do you realize I could go to jail for helping you get out of the country?"`,
    
        exits: [
          {
            dir: 'Text',
            id: 'chap-#',
          },
        ],  
      },

      {//Asking about self (4th+ time)
        id: 'chap-12C',
        desc: `In reply to your repeated question, she will only shake her head, as though at the annoyance of a persistent fly.`,
    
        exits: [
          {
            dir: 'Text',
            id: 'chap-#',
          },
        ],  
      },

      {//Asking about Austrailia - if chap-12A has appeared
        id: 'chap-13',
        desc: `"Oh, we're going to be so happy in Australia, John--I know we wil1. It may be hard at first, since we don’t either of us know anything about sheep ranches--or are they called farms?--but we're young and strong and healthy, and our love will see us through our trials."`,
    
        exits: [
          {
            dir: 'Text',
            id: 'chap-#',
          },
        ],  
      },

      {//Asking about Texas - if chap-12A has appeared
        id: 'chap-14',
        desc: `"John, you must try and forget about all that. Oh, I really wish you did have amnesia, so that you'd never be haunted by those terrible memories. Forget Texas, John. Pretend it never happened."`,
    
        exits: [
          {
            dir: 'Text',
            id: 'chap-#',
          },
        ],  
      },

      {//Asking about Jail - if chap-12A has appeared
        id: 'chap-15',
        desc: `"Oh John, please, this is our wedding day. It's not a time to talk about these morbid matters. That's over and done with. Try to forget. Try!"`,
    
        exits: [
          {
            dir: 'Text',
            id: 'chap-#',
          },
        ],  
      },

 //End Alice Chapel Questions

 {//When attempting to leave the chapel after Alice has appeared. Also when responding to Alice's questions with: go away/ask her to go/say goodbye/I will not marry you or similar response
  id: 'chap-16',
  desc: `"John!" the woman in the bridal dress shrieks, "please don't abandon me like this. I'll die of shame if you leave me now. Surely, whatever reason you may have for changing your mind, it's something we can talk about it. It's Daddy, isn't it? He's such a bully, I know. But once you get to know him he's really a sweet person, and in any case, John, once we're in Australia he won't be able to bother us anymore." She throws herself on her knees before you and lifts up her arms (the same gesture in which you can see Mary Baker Eddy worshipping the Supreme Being in the chapel's mural) imploringly. "Please John. Please say you'll marry me."`,

  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

{//Refusing to marry
  id: 'chap-17',
  desc: `Considering her almost hysterical manner up till now, she accepts your refusal with surprising dignity. "Very well then, I won't argue. But promise me at least this--promise that we can meet again tomorrow--just to talk. We can't talk now. Daddy will be here at any moment. I must go out and tell him you've left me standing at the altar once again. I expect he'll be very mad for a while, so please stay in the chapel for another half hour or so, till we’re out of the hotel. And then tomorrow at noon I'll meet you in that lovely hall of Tiffany lamps at the New York Historical Society. It will be a sort of anniversary for us. Please be there, John." She turns to leave, and then turns round again to hand you a small blue box bearing the words "Tiffany & Co." "Speaking of Tiffany," she says with a sad smile, "I almost forgot to give you this. I bought it with your money, so it belongs to you--until you decide that you want to put it on my finger."`,

  onLook: () => {//looking at the box
    println(`It is nearly cubical. It is dark blue with silver lettering that says TIFFANY & CO.`)
  },

  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

{//Take the box
  id: 'chap-18',
  desc: `You accept the box from her, and then in a flash of white satin and yellow lace she is out the door of the chapel.`,

  onLook: () => {//looking at the box
    println(`It is nearly cubical. It is dark blue with silver lettering that says TIFFANY & CO.`)
  },
  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

{//Refuse to take the box
  id: 'chap-18A',
  desc: `When you do not at once accept the box from her, she mutters a fervent, "Oh, damn you!" and throws it at your feet. Then in a flash of white satin and yellow lace she is out the door of the chapel.`,

  onLook: () => {//looking at the box
    println(`It is nearly cubical. It is dark blue with silver lettering that says TIFFANY & CO.`)
  },
  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

{//Open the box
  id: 'chap-19',
  desc: `You tilt back the hinged lid of the box and find, nestled in white velvet, a thick golden wedding band. An engraver has written in miniscule script within the band: "To my beloved wife Alice, from John."`,

  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

//End Alice Chapel Section

//Begin Exiting Chapel Section
{//When attempting to follow Alice
  id: 'chap-20',
  desc: `After a moment’s hesitation, you spring forward to pursue her--and fall to the terra cotta floor, tripped by a kneeling pad. As you push yourself up from the dark tiles, a familiar vertigo overcomes you. Your body seems much too heavy a weight for your arms to raise and you slump back to the floor, watching the great octagons of terracotta bend and warp, waver and grow black. Your last conscious thought is that you may be the first bridegroom ever to have fainted when left standing at the altar.`,

  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},
//Figure out coding options for multiple attempts
{//Attempt to get up (1st attempt)
  id: 'chap-21',
  desc: `A dim faraway voice seems to be telling you to do something. But it is so far away, and you are so comfortable, and there is a sunset above you, all with stripes of gold and indigo.`,

  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

{//Attempt to get up (2nd attempt)
  id: 'chap-21A',
  desc: `The same voice calls to you. It is nearer now, an annoying buzz. You blink your eyes and shift your head--and see that a magenta dawn is silhouetting the poplars.`,

  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

{//Attempt to get up (3rd attempt)
  id: 'chap-21B',
  desc: `You wake up with a strange pain in your left arm. You realize that you have been lying on the terracotta tiles for some time staring in a daze at the two wings of the mural frieze by Maxfield Parrish.

  There is blood on the tiles where you were lying.`,

  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

{//Anything except trying to get up
  id: 'chap-21C',
  desc: `You can't do that. You're lying unconscious on the floor.`,

  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

{//Examine arm (After getting up)
  id: 'chap-22',
  desc: `High on your left arm, near the padded shoulder of the tuxedo jacket, the white polyester has been torn and blotched with blood that is still damp to the touch. When you remove the jacket to examine the wound there is a sharp twinge of pain in your shoulder. There is a larger blotch on the frilly shirt.`,

  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

{//Remove shirt
  id: 'chap-23',
  desc: `You take off the ruined shirt as well and see, to your relief that the source of these bloodstains is a superficial wound--an inch-long line drawn across the smooth flesh as though by a ruler. It represents, you realize, the path of a bullet. And though you did not see or hear that bullet fired you have no doubt at all that it was Luke who shot at you. Perhaps, if you had not stumbled over the kneeler, his bullet might have had a deadlier result.
  Tentatively you move your arm. Any pronounced movement from the shoulder seems to start the blood flowing freshly from the wound.
  `,

  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

{//Bandage wound (With what?)
  id: 'chap-24',
  desc: `Good idea, but what to use for a bandage?`,

  exits: [
    {//Use Frilly Shirt
      dir: 'Text',
      id: 'chap-#',
    },
    {//Use T-Shirt
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

{//Bandage wound with frilly shirt
  id: 'chap-24A',
  desc: `Carefully you tear off the left arm of the bloodstained shirt and wrap it about the wound as a crude bandage. Your arm hurts but not much more than if you'd had a shot at a doctor’s office.
  Now to get dressed again. Except that it's missing its left arm the frilly shirt is still wearable. Or there are the T-shirts in the gym bag--the plain red T-shirt or the Mickey Mouse T-shirt.`,

  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

{//Bandage wound with shirt (Which shirt?)
  id: 'chap-24B',
  desc: `Which T-shirt--the Mickey Mouse T-shirt or the red T-shirt?`,

  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

{//Bandage wound with Mickey Mouse shirt
  id: 'chap-24C',
  desc: `You tear the Mickey Mouse T-shirt into strips and wrap them about the wound in a crude bandage. Your arm hurts but not much more than if you’d had a shot at the doctor’s office.
  Now to get dressed again. You could rip off the arm of the shirt you were wearing and put that on again. Or you could wear the other T-shirt under the jacket of the tux. It’s all up to your sense of what the well-dressed murder victim should appear in.`,

  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

{//Bandage wound with red shirt
  id: 'chap-24D',
  desc: `You tear the red T-shirt into strips and wrap them about the wound in a crude bandage. Your arm hurts but not much more than if you’d had a shot at the doctor’s office.
  Now to get dressed again. You could rip off the arm of the shirt you were wearing and put that on again. Or you could wear the other T-shirt under the jacket of the tux. It’s all up to your sense of what the well-dressed murder victim should appear in.
  `,

  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

{//Dressed again (Could just move this text into the shirt sections)
  id: 'chap-#',
  desc: `Text`,

  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

{//Attempting to leave before bandaging wound
  id: 'chap-#',
  desc: `Text`,

  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},

{//Leaving the chapel
  id: 'chap-#',
  desc: `Text`,

  exits: [
    {
      dir: 'Text',
      id: 'chap-#',
    },
  ],  
},
//End Exiting Chapel Section
//End Chapel

//Begin Marriage Section (Chapel)
{//What is your name?
  id: 'marr-1',
  desc: `"Oh my darling!" she cries, leaping to her feet and embracing you with all of love's tender fury and then some. "Oh my sweet eternal love!" Her lips meet yours, preventing any reply but a kiss: and then another kiss, and then, as though he'd been waiting outside the door of the chapel for this cue, the father of the bride enters with a preacher and two witnesses in tow. You recognize both witnesses: one is the cleaning woman who entered Room 1502 without knocking just after you woke up ear1ier in the day, and the other is the man, Buddy, who took you from the penthouse health club and sauna back to Room 1502.
  
  The preacher, a thin white-haired man in a Roman collar, takes charge. He positions you and Alice before the marble slab of the altar. He directs Luke Dudley to stand behind his daughter--and to remove his Stetson, which he does with reluctance. Buddy and the cleaning woman take up a position in the center aisle, as though to be able to block you if you make a final bolt. The preacher begins to intone the wedding service from memory, only breaking stride to ask you your name.`,

  exits: [
    {//Respond with John Cameron, John Cameron III, or John
      dir: 'John',
      id: 'marr-2',
    },
    {//Fail to respond appropriately
      dir: 'Text',
      id: 'marr-1A',
    },
  ],  
},

{//Forced to respond with name
  id: 'marr-1A',
  desc: `"Very funny, Johnny-boy," Luke says to you. Then, to the preacher: "His name is John Cameron."`,

  exits: [
    {//Forced to next question
      dir: 'Text',
      id: 'marr-2',
    },
  ],  
},

{//Take as your wife?
  id: 'marr-2',
  desc: ``,
  exits: [
    {//Correct response
      dir: 'Text',
      id: 'marr-3',
    },
    {//Fail to respond appropriately
      dir: 'Text',
      id: 'marr-2A',
    },
  ],  
},

{//Forced to respond "I do"
  id: 'marr-2A',
  desc: ``,

  exits: [
    {
      dir: 'Text',
      id: 'marr-#',
    },
  ],  
},
  ],
};
