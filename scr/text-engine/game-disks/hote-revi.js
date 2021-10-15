const hoteroomRevi = {
    roomId: 'hote-revi', // this is the Hotel Room 1502 revisited node, entered from Sunderland Health Club node
    currPos: [],
    rooms: [
        {
            id: 'hote-revi', // unique ID for this room
            name: 'Hotel Room', // displayed to player
            desc: `You breathe a sigh of relief as you close the door behind you. Room 1502 feels almost like home.
            
            The first thing you notice is the late afternoon light streaming across the skyscrapers of the city, flashing from windows and walls of glass. It is late in the day, and the sun is low in the sky. You must have lain unconscious much longer than you supposed.
            
            You see a ***large box*** that has been placed at the foot of the freshly made bed.`,

            
            onEnter: () => {
                if(getRoom('hote-revi').visits >= 2){
                    let hotelRoom = getRoom('hote-revi');
                    hotelRoom.desc = `You're standing in your hotel room`;
                    println(hotelRoom.desc);
                };
            },

            onLook: () => {
                const room = getRoom('hote-revi');

                let keyDesc = `Beside the pad is the ***room key*** with a large green plastic tag showing your room number, Room 1502.`;
                let bibleDesc = ` and a ***Gideon Bible***`;
                let penDesc = `A ***ballpoint pen*** has been used as a bookmark in the Bible by someone wiht no respect for bindings.`;
                room.desc = `You take a deep breath -- and a long look about the hotel room, starting with the writing pad on the dresser, where a sheet of the hotel's stationery informs you that you're a guest of the Sunderland Hotel. ${keyDesc}
                
                To pass the time the hotel offers a ***television***${bibleDesc}. ${penDesc}
                
                To the left of the dresser is an ***IBM computer*** on it's own metal stand.`; // change IBM PC to be the computer name the css style is // text in this node is shortened, to keep from redunancy
                if(getItemInInventory('metal key')){ // if the room key is already in inventory
                    room.desc = room.desc.replace(`${keyDesc}`, '');
                };

                if(getItemInInventory('Gideon Bible')){ // if the Gideon Bible is already in inventory
                    room.desc = room.desc.replace(`${bibleDesc}`, '');
                };

                if(getItemInInventory('ballpoint pen')){ // if the pen is already in inventory
                    room.desc = room.desc.replace(`${penDesc}`, '');
                };
            }, // closes onLook function
            
            items: [
                {
                    itemId: 'roomkey',
                    name: ['room key', 'hotel key'],
                    desc: `The key chain is green plastic with the numerals 1502 in white. The key is ordinary.`,
                    isTakeable: true,
                    isDroppable: true,
                },
                {
                    itemId: 'bible',
                    name: ['Gideon Bible', 'bible', 'holy book', 'the bible'],
                    desc: `You open the Bible to the only dog-eared page in the book and you notice that the page so marked has been scribbled on. It is the page on which appropriate texts are cited for thos ewith special needs. the list of texxts commended to 'those in doubt and uncertainty' has been crossed out, and above the deleted citations of chapter and verse someone had written '**John 1**'.
                    
                    If you remember **John 1** rightly, it seems oddly irrevlevant to the needs of those in doubt. But never mind.`,
                    passage: `You open the Bible to the beginning of the Gospel according to St. John. The text is what you remembered it to be -- "In the beginning was the Word, and the Word was ***with God***, and the Word was God.'`, //displayed on read function
                    isTakeable: true,
                    onDrop: () => {
                        println(`You shouldn't drop that. It might be important.`);
                    }
                }, 
                {
                    itemId: 'pen',
                    name: ['ballpoint pen', 'pen'],
                    desc: `It is a white plastic ballpoint`,
                    isTakeable: true,
                    isDroppable: true
                }, 
                {
                    itemId: 'roomtv',
                    name: ['Simplex TV', 'TV', 'television', 'telly'],
                    desc: ``,
                    isOn: false
                    // add onLook
                    // add onUse
                }, 
                {
                    itemId: 'computer',
                    name: ['IBM PC', 'computer', 'comp', 'pc'],
                    desc: '',
                    isOn: false,
                    onLook: () => {
                        let pc = getItemInRoomById('computer', 'hote-revi-1');
                        if(pc.isOn === true)
                        {
                          if (item.desc == ' ')
                          {
                            println('The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the rental division of the User-Friendly Computer Store. It is turned on.');
                          }
                          pc.desc = 'The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the rental division of the User-Friendly Computer Store. It is turned on.';
                          println(pc.desc);
                        } else {
                          if (item.desc == ' ')
                          {
                            println('The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the rental division of the User-Friendly Computer Store. It is turned off.');
                          }
                          pc.desc = 'The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the rental division of the User-Friendly Computer Store. It is turned off.';
                          println(pc.desc);
                        }
                      }, // not printing the correct lines, only prints 'You don't notice anything remarkable about it.'
                    onUse: () => {
                        let pc = getItemInRoomById('computer', 'hote-revi-1');
                        if(pc.isOn === true)
                        {
                          pc.desc = 'The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the rental division of the User-Friendly Computer Store. It is turned on.';
                        } else {
                          pc.desc = 'The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the rental division of the User-Friendly Computer Store. It is turned off.';
                        }
                    }     
                }, 
                {
                    itemId: 'dresser',
                    name: ['dresser', 'drawer'],
                    desc: '',
                    isOpen: false,
                    onLook: () => {
                        let dresser = getItemInRoomById('dresser', disk.roomId);
                        let stationDesc = ` a supply of stationery with the Sunderland Hotel monogram,`;
                        let bibleDesc = ` a Gideon Bible,`;
                        let keyDesc = ` the room key with its large green tag,`;
                        let brocDesc = `, and beneath the telephone the hotel's brochure.`;

                        dresser.desc = `The four-drawer dresser is made of unconvincingly simulated wood, and the mirror above it is bolted securely to the wall. On top of the dresser is plenty of dust,${stationDesc}${bibleDesc}${keyDesc} and a large black ashtray. At the end of the dresser farthest from the window is a dial telephone${brocDesc}`;

                        if(getItemInInventory('stationary')){ 
                            dresser.desc = dresser.desc.replace(`${stationDesc}`, '');
                        };
                        if(getItemInInventory('Gideon Bible')){ 
                            dresser.desc = dresser.desc.replace(`${bibleDesc}`, '');
                        };
                        if(getItemInInventory('roomkey')){ 
                            dresser.desc = dresser.desc.replace(`${keyDesc}`, '');
                        };
                        if(getItemInInventory('brochure')){
                            dresser.desc = dresser.desc.replace(`${brocDesc}`, '');
                        }

                    }
                }, 
                {
                    itemId: 'stationary',
                    name: ['hotel stationary', 'stationary', 'paper'],
                    desc: `The stationery says SUNDERLAND HOTEL at the top.`,
                    isTakeable: true,
                    isDroppable: true
                }, 
                {
                    itemId: 'brochure',
                    name: ['brochure', 'hotel brochure'],
                    desc: `You take the brochure from where it lies beneath the telephone, breathing a prayer as you do that it will be able to live up to the promise boldly printed at the foot of the stiff cardboard cover: How We Can Help You Enjoy New York. 
                    
                    The cover is mostly given up to an artist's rendering of the Sunderland Hotel viewed from the vantage of a low-flying helicopter. It is essentially a ziggurat, its upper stories overlain with curlicures of ornamental stonework. There, and a swimming pool on the penthouse floor of the ziggurat, have been rendered in great detail by the artist's pen, while the ground floor, which covers a full block of 5th Avenue, is an impressionistic blur of shoppers and shopfronts, probably by way of play down the fact that the entrance, around the corner on 53rd St., is quite modest, nothing but a canopy with the hotel's name. It doesn't seem familiar-- but no one except a helocopter pilot or a pigeon would ever see the building from this privileged angle, so its strangeness is not to be wondered at.`,
                    isTakeable: true,
                    onDrop: () => {
                        println(`You shouldn't drop that. It might be important.`);
                    }
                },
                {
                    itemId: 'roomphone',
                    name: ['phone', 'telephone'],
                    desc: `On the beside tabel there is a dial phone that rests on top of a shiny cardboard brochure that bears the message: "Welcome to ***The Sunderland Hotel***-- Your Gateway to the Wonderland of Manhattan!"`,
                    onUse: () => {
                        println(`To use the phone, type DIAL followed by the hotel number you wish to dial.`);
                    }

                },
                {
                    itemId: 'curtains',
                    name: ['drapes', 'curtains'],
                    desc: ``,
                    isOpen: false,
                    onLook: () => {
                      let item = getItemInRoomById('curtains', disk.roomId);
                      if (item.isCurtOpen === true){
                          if(item.desc === ''){
                              println(`The ${item.name[0]} are open.`);
                          } else{
                              println(item.desc);
                          }
                      }
                      if (item.isCurtOpen === false){
                          if (item.desc === ''){
                              println(`The ${item.name[0]} are closed.`);
                          } else {
                              println(item.desc);
                          }
                      }  
                    }
                },
                {
                    itemId: 'window',
                    name: 'window',
                    desc: `The window is shrouded by the drapes`,
                    onLook: () => {
                        let curtain = getItemInRoomById('curtains', disk.roomId);
                        let window = getItemInRoomById('window', disk.roomId);
                        if (curtain.isCurtOpen === false){
                            window.desc = window.desc;
                        } else {
                            let exwindDesc = `Now you know where you are. But when are you? What day is it? For that matter, what month, what year? It isn't winter, that much is clear from the greenery poking up out of odd parts of the stone forest. But the year? Maybe you could figure it out by presidents, since that part of your memory, the part concerned with public events, still seems to be functional. Let's see-- Ford took over from Nixon. And after Ford there's been... Carter. That would have been in '76. And after Carter? Reagan, right. Then it started getting hazy. Which meant that this was '81 at the earliest. Which proved what? That your mind isn't totally dysfunctional. The weird thing is that despite the panicky feeling that comes and goes you're not feeling so bad. In a way it was kind of enjoyable. This is probably how people would like to feel when they take a vacation.`;
                            window.desc = `Even without being able to see the Empire State Building off to the southeast, you would know by the sheer immesity of the view that you are in Manhattan. Skyscraper after skyscraper contests for light and air like the pines of a stone forest. It seems familiar, but only in the general way that a famous postcard view is familiar. You don't feel as though you ***belong*** in this city, as though you are a New Yorker.
                            
                            ${exwindDesc}`; // if player has looked out the window before remove this extra text?
                        }
                    }
                }, 
                {
                    itemId: 'software',
                    name: 'software',
                    desc: `You look absolutely everywhere you can conceive of looking for software that could be booted into the computer, but your search is futile.`
                },
                {
                    itemId: 'bed',
                    name: ['bed', 'mattress', 'hotel bed'],
                    desc: '',
                    onLook: () => {
                        let bed = getItemInRoomById('bed', disk.roomId);
                        let tuxedoDesc = `There is an all-white tuxedo, sitting on the bed.`;
                        let sheetDesc = `There is a rumpled sheet on the bed.`

                        bed.desc = `It is a double bed. ${sheetDesc} A quilted bedspread is rolled up in a ball. An oversized down-filled pillow is propped against the headboard. ${tuxedoDesc}`;

                        if(getItemInInventory('tuxedo')){
                            bed.desc = bed.desc.replace(`${tuxedoDesc}`, '');
                        }
                        if(getItemInInventory('sheet')){
                            bed.desc = bed.desc.replace(`${sheetDesc}`, '');
                        }
                        
                    }
                },
                {
                    itemId: 'sheet',
                    name: ['sheet', 'bedsheet'],
                    desc: 'The sheet has a floral pattern on it',
                    isTakeable: true,
                    isDroppable: true,
                    onDrop: () => {
                        println(`You put the sheet back where you found it.`);
                    }
                },
                {
                    itemId: 'closet',
                    name: 'closet',
                    desc: '',
                    onLook: () => {
                        let closet = getItemInRoomById('closet', disk.roomId);
                        let hangerDesc = `-- save for a forlorn coathanger.`;

                        closet.desc = `There's nothing in the walk-in closet${hangerDesc}`;

                        if(getItemInInventory('hanger')){
                            closet.desc = closet.desc.replace(`${hangerDesc}`, '.');
                        }
                    }
                },
            ], // closes hote-revi room items 
            exits: [

            ], //closes hote-revi room exits 
        }, // closes hote-revi room
        {
            id: 'hote-revi-1', 
            name: 'The Bathroom',
            desc: ``,

            items: [

            ],
            
            exits: [

            ]
        }, // closes hote-revi-1 room (bathroom)
    ], // closes hote-revi rooms
}; // closes hoteroomRevi

