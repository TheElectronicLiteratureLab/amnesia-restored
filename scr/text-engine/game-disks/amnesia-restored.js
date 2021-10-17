const amnesiaRestored = {
  roomId: 'hote-room-8', // Set this to the ID of the room you want the player to start in.
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
        setTimeout(() => {  println("Thomas Disch's\n \n", "tom"); }, 1000);
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
          name: ['IBM PC' , 'computer', 'comp', 'pc'],
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
            let bible = getItemInRoomById('bible', disk.roomId);
            let roomkey = getItemInRoomById('roomkey', disk.roomId);
            let pen = getItemInRoomById('pen', disk.roomId);
            let brochure = getItemInRoomById('brochure', disk.roomId);

            let comma1 = ',';
            let comma2 = ',';
            let comma3 = ',';
            let iOne = ' a Gideon Bible, ';
            let iTwo = ' the room key with its large green tag, ';
            //let iThr = ' ';
            let iFou = ', and beneath the telephone the hotel’s brochure';
            let iFiv = ' a pen,';

            if (dresser.desc === ' ') {
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
          name: ['room key', 'hotel key'],
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
          inUse: false,
          onUse: () => {
            let phone = getItemInRoomById('roomphone', 'hote-room-8');
            if (f_firstphonecall === true) {
              f_firstphonecall = false;
              phone.inUse = true;
              println(`"Good morning," says a woman's voice, after you say hello. "This is the Registration desk. You are aware, are you not, that the check-out time is twelve o' clock? "If you haven't checked out by that hour, Mr. Cameron, we will have to bill you for another night. But if you wish to extend your stay, I can adjust your bill accordingly. "Do you wish to stay another night?"`);
            }
          },
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
        },
        {
          itemId: 'software',
          name: 'software',
          desc: ' ',
          onLook: () => {
            println("You look absolutely everywhere you can conceive of looking for software that could be booted into the computer, but your search is futile.")
          }
        },
        {
          itemId: 'bed',
          name: ['bed', 'mattress', 'hotel bed'],
          desc: ' ',
          onLook: () => {
            let bed = getItemInRoomById('bed', 'hote-room-8');
            let sheet = getItemInInventoryById('sheet');
            let one = 'There is a rumpled sheet on the bed. ';
            if (sheet){
              one = '';
            }
            bed.desc = `It is a double bed. ${one}A quilted bedspread is rolled up in a ball. An oversized down-filled pillow is propped against the headboard.`;
            println(bed.desc);
          }
        },
        {
          itemId: 'sheet',
          name: 'sheet',
          desc: 'The sheet has a floral pattern on it.',
          isTakeable: true,
          isDroppable: true,
          onDrop: () => {
            println('You put the sheet back where you found it.');
          }
        },
        {
          itemId: 'closet',
          name: 'closet',
          desc: ' ',
          onLook: () => {
            let closet = getItemInRoomById('bed', 'hote-room-8');
            let hanger = getItemInInventoryById('hanger');
            let one = '';
            if (hanger){
              one = 'not even';
            } else {
              one = 'save for'
            }
            closet.desc = `There's nothing in the walk-in closet -- ${one} a forlorn coathanger.`;
            println(closet.desc);
          }
        },
        {
          itemId: 'hanger',
          name: ['coathanger', 'hanger'],
          desc: `A hanger is a hanger is a hanger.`,
          isTakeable: true,
          isDroppable: true
        },
        {
          itemId: 'hoteldoor',
          name: 'door',
          desc: 'is closed',
          isOpen: false,
          onUse: () => {
            //enterRoom('hote-coor');
          }  
        },
      ],
      
      exits: [
        {dir: 'leave', id: 'hote-coor'},
        //{dir: 'north', id: 'hote-coor'},
        //{dir: 'bathroom', id: 'hote-bath'}
      ]
    },
    {
      id: 'hote-room-9',
      name: ' ',
      desc: ' ',
      onEnter: () => {
        let pen = getItemInInventoryById('pen');
        let penGet = '';
        if(pen) {
          penGet = 'Oh yes, you took it from the dresser.';
        } else {
          penGet = 'Oh yes, it is on the dresser.'
        }
        println(`"Cameron." You test out the sound of the name she's given you. But can you be sure you are the Cameron that rented this room? \nIf your own signature as "Cameron" jibes with the one on the receipt the bellboy is bringing... \n${penGet} \nYou try several practice signatures.`);
        pressEnter('hote-room-10');
      }
    },
    {
      id: 'hote-room-10',
      name: ' ',
      desc: ' ',
      onEnter: () => {
        reenableInput();
        println(`The bellboy knocks on the door, and you position yourself behind it in such a way that when you it a crack to take the readjusted hotel bill, he will not see that you are naked. \nYou consider asking HIM to help you get some clothes, but a combination of shyness and common sense prevents you. \nFirst things first: "One moment," you say, and take the bill over to the desk to examine it.`);
        println('You examine the slip and find that a name, which is presumably yours, has been typewritten on the top of the statement. You have a name now: John Cameron III. \nYou sign the bill using your new-found name, and hand it back to the bellboy.');
        println(`The bellboy makes a significant cough -- he must be waiting for a tip. Should you give him one?`);
      }
    },
    //************************************/
    //*     Hotel Room Revisited        */
    //**********************************/
    {
      id: 'hote-revi', //unique ID for this room
      name: 'Hotel Room', //room name (displayed to player)
      desc: `The first thing you notice is the late afternoon light streaming across the skyscrapers of the city, flashing from windows and walls of glass. It is late in the day, and the sun is low in the sky.
      
      You see a **tuxedo** lying on your bed.`, //text that appears when player first enters the room
      onEnter: () => {
        if(getRoom('hote-revi').visits >= 2){
            let hotelRoom = getRoom('hote-revi');
            hotelRoom.desc = `You're standing in your hotel room`;
            println(hotelRoom.desc);
        }
      },
      onLook: () => {
        const room = getRoom('hote-revi');
        let keyDesc = `Beside the pad is the **room key** with a large green plastic tag showing your room number, Room 1502.`;
        let bibleDesc = ` and a **Gideon Bible**.`;
        let penDesc = `A **ballpoint pen** has been used as a bookmark in the Bible by someone wiht no respect for bindings.`;

        room.desc = `You take a deep breath -- and a long look about the hotel room, starting with the writing pad on the dresser, where a sheet of the hotel's stationery informs you that you're a guest of the Sunderland Hotel. ${keyDesc}
        
        To pass the time the hotel offers a **television**${bibleDesc} ${penDesc}
        
        To the left of the dresser is an **IBM PC** computer on its own metal cart. There's a **window** bro.`; //IBM PC will change depending on which version the player is on. Need to add function for this. 
        
        if(getItemInInventory('metal key')){ //if the 1502 room key is already in inventory
            room.desc = room.desc.replace(`${keyDesc}`, '');
        };

        if(getItemInInventory('Gideon Bible')){ //if the Gideon Bible is already in inventory
            room.desc = room.desc.replace(`${bibleDesc}`, '.');
        };

        if(getItemInInventory('ballpoint pen')){ //if the pen is already in inventory
            room.desc = room.desc.replace(`${penDesc}`, '');
        };
      }, // closes onLook function
      items: [
        {
          itemId: 'roomphone',
          name: ['phone', 'telephone'],
          desc: `On the beside tabel there is a dial phone that rests on top of a shiny cardboard brochure that bears the message: "Welcome to ***The Sunderland Hotel***-- Your Gateway to the Wonderland of Manhattan!"`,
          onUse: () => {
              println(`To use the phone, type DIAL followed by the hotel number you wish to dial.`);
          },

          /*onUse: () => {
              enterRoom('hote-revi-2'); //LUKE SEQUENCE, just wanted to check if works...won't work without calling getRoom
          },*/
        },
        { 
          itemId: 'roomkey', 
          name: ['room key', 'hotel key', '1502 key', 'key'],
          desc: `The key chain is green plastic with the numerals 1502 in white. The key is ordinary.`,
          isTakeable: true,
          isDroppable: true,
        }, 
        {
            itemId: 'bible',
            name: ['Gideon Bible', 'bible', 'holy book', 'the bible'],
            desc: `You open the Bible to the only dog-eared page in the book and you notice that the page so marked has been scribbled on. It is the page on which appropriate texts are cited for thos ewith special needs. the list of texxts commended to 'those in doubt and uncertainty' has been crossed out, and above the deleted citations of chapter and verse someone had written 'John 1'.
            
            If you remember John 1 rightly, it seems oddly irrevlevant to the needs of those in doubt. But never mind.`,
            passage: `You open the Bible to the beginning of the Gospel according to St. John. The text is what you remembered it to be -- "In the beginning was the Word, and the Word was ***with God***, and the Word was God.'`, //displayed on read function
            isTakeable: true,
            isDroppable: true,  
        },
        {
            itemId: 'pen',
            name: ['ballpoint pen', 'pen'],
            desc: `It is a white plastic ballpoint.`,
            isTakeable: true, 
            isDroppable: true,
        },
        {
            itemId: 'roomtv',
            name: ['Simplex TV', 'TV', 'television', 'telly'], 
            desc: `It is a Simplex TV -- a brand you've never heard of, or at least cannot remember. There are three buttons on the set. The first is for on and off, the second is marked F for forward, allowing you to change channels, but the third is broken off. The TV is off.`,
            isOn: false,
            /*onLook: () => {
                let tv = getItemInRoom('roomtv', 'hote-revi');
                tv.isOn = !tv.isOn;
                if(tv.isOn){
                    println(`You turn on the TV, which is showing a soft-core porn movie over the hotel's own cable channel. It seems to you, theoretically, that this ought to be effection as dynamite for breaking up the logjam of your memories, but while your imagination fully appreciates the movie's message, your memory remains inviolately blank. For all you know you could have been a virgin or another Don Juan with an entire catalog of sexual conquests.`);
                } else {
                    println(`The TV isn't on.`);
                }
            },*/
        }, 
        {
          itemId: 'computer',
          names: ['IBM PC', 'apple', 'com', 'comp', 'computer', 'commodore', 'commodore 64', 'apple iie', 'pc'],
          desc: `The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned off.`,
          isOn: false,
          onLook: () => {
            let pc = getItemInRoomById('computer', 'hote-revi');
            if(pc.isOn === true)
            {
              if (pc.desc == ' ')
              {
                println('The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned on.');
              }
              pc.desc = 'The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned on.';
              println(pc.desc);
            } else {
              if (pc.desc == ' ')
              {
                println('The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned off.');
              }
              pc.desc = 'The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned off.';
              println(pc.desc);
            }
          },
          onUse: () => {
            let pc = getItemInRoomById('computer', 'hote-revi');
            if(pc.isOn === true)
            {
              println('The computer is turned on.');
            } else {
              println('The computer is turned off.');
            }
          }             
        },
        {
          itemId: 'dresser',
          name: ['dresser', 'drawer'],
          desc: ``,
          isOpen: false,
          onLook: () => {
              //let bible = 
          },
        },
        {
          itemId: 'tuxedo', 
          name: ['tuxedo', 'tux'],
          desc: `There is an all-while tuxedo, sitting on the bed. There could be only one place anyone would ever wear this outfit -- to his own wedding. Could the explanation for your amnesia be as simple as this? A last-ditch attempt to escape the state of matrimony?
          
          Maybe it got delivered to this room by mistake. There's an easy way to find out. You examine the tuxedo, and seems to be exactly your size.`,
          isTakeable: true, 
          isDroppable: true,
          isWearable: true,
        },
        {
          itemId: 'window',
          name: 'window', //hotel room window
          desc: `The first thing you notice is the late afternoon light streaming across the skyscrapers of the city, flashing from windows and walls of glass. It is late in the day, and the sun low in the sky.`,
          onUse: () => println(`The window is sealed to keep the air-condiitoned air in the hotel.`), //how can the player jump if the window is sealed? mhmm?
      },
      ], //end of hote-revi items
      exits: [
        { dir: ['bathroom'], id: 'hote-revi-1'}, //leads to bathroom 
        { dir: ['leave'], id: 'hote-revi-2'}, //leads to phone interaction with LUKE
        //{ enter phone room??},
        { dir: ['leave2'], id: 'hote-revi-8'}, //leads to transition to Lobby node
      ],
    },
    {
      id: 'hote-revi-1',
      name: 'Bathroom',
      desc: `You're in the bathroom. It has the usual amneities of a good but not over-fancy hotel -- a **small pink sink** encased in formica that's pretneding to be marble, *a tiled shower*lrea, **a toilet**, a towel rack with a **large towel**. But no clothes.`, 
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
              isDroppable: true,
              onTake: () => {
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
        pressEnter('hote-revi-5');
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
      if(getItemInInventory('metal key')){
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
  },//end of hote-revi-8 room   
  //************************************/
  //*   Suicide at the Sunderland     */
  //**********************************/
  ],
};
