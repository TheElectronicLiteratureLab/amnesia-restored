const hotereviDisk = {
    roomId: 'hote-revi', // this is the Hotel Room 1502 revisited node, entered from Sunderland Health Club node
    currPos: [],
    rooms: [
        {
            id: 'hote-revi', // unique ID for this room
            name: 'Hotel Room', // displayed to player
            desc: ``,
            lukecall: false,            
            onEnter: () => {
                if(getRoom('hote-revi').visits <= 0){
                    println(`You breathe a sigh of relief as you close the door behind you. Room 1502 feels almost like home.
            
                    The first thing you notice is the late afternoon light streaming across the skyscrapers of the city, flashing from windows and walls of glass. It is late in the day, and the sun is low in the sky. You must have lain unconscious much longer than you supposed.
        
                    The thought of time cues another awareness: you are ravenously hungry.
                    
                    But even as you head toward the phone to dial Room Service, you see a ***large box*** that has been placed at the foot of the freshly made bed.`);
                } 

                if(getRoom('hote-revi').visits >= 1){
                    let hotelRoom = getRoom('hote-revi');
                    hotelRoom.desc = `You're standing in your hotel room`;
                    println(hotelRoom.desc);
                }
        
                const room = getRoom('hote-revi');
                console.log(room.lukecall);
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
            }, 
            onBlock: () => {
                const room = getRoom('hote-revi');

                // needs movecount IF increased by (in emulated 20+, in manuscript Disch just says "reasonable number of moves")
                if(room.lukecall !== false){ 
                    enterRoom('hote-revi-5');
                }
            },
            items: [
                {
                    itemId: 'hotebox',
                    name: ['box', 'large box'],
                    desc: `The box measures 36" by 18" by 9" and about 12" deep. It bears the name and slogan of ***JIFFY TUX EMPORIUM, For the Man Who's Fit to Be Tied***."`,
                    isOpen: false
                },
                // want an on block function to run that pushes these items when the hotebox is open === true // can't get it to work
                {
                    itemId: 'tuxedo',
                    name: ['tuxedo', 'tux', 'white tuxedo', 'all-white tuxedo'],
                    desc: `It's an all-white tuxedo, together with the appropriate apputenances; frilly shirt, cummerbund, and bow tie.`,
                    top: true,
                    bottom: true
                },
                {
                    itemId: 'tuxshoes',
                    name: ['white shoes', 'leather shoes', 'patent shoes', 'shoes'],
                    desc: `A pair of shoes, white patent leather shoes no less.`,
                    feet: true
                },
                {
                    itemId: 'tophat',
                    name: ['top hat', 'silk hat', 'white hat', 'hat'],
                    desc: `A white silk top hat.`,
                    head: true
                },
                //
                {
                    itemId: 'roomtv',
                    name: ['Simplex TV', 'TV', 'television', 'telly'],
                    desc: `It is a Simplex TV-- a brand you've never heard of, or at least cannot remember. There are three buttons on the set. The first is for on and off, the second is marked F for forward, allowing you to change the channels, but the third is broken off. The TV is off.`,
                    isOn: false,

                    // need to go over this in more detail.
                    onLook: () => {
                        let item = getItemInRoomById('roomtv', 'hote-revi');
                        if(item.isOn){
                            item.desc = item.desc.replace(' The TV is off.', ' The TV is on.');
                            println(`You turn on the TV, which is showing a soft-core porn movie over the hotel's own cable channel. It seems to you, theoretically, that this ought to be effective as dynamite for breaking up the logjam of your memories, but while your imagination fully appreciates the movie's message, your memory remains inviolately blank. For all you know you could have been a virgin or another Don Juan with an entire catalog of sexual conquests.`);
                        } 
                    },
                    onUse: () => {
                        let item = getItemInRoomById('roomtv', 'hote-revi');
                        if(item.isOn){
                            println(`You watch the TV`)
                        } else {
                            println(`The TV isn't on`);
                        }
                    }
                    // add onUse
                }, 
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
                        let boxDesc = `There is ***large box***, sitting on the bed.`;
                        let sheetDesc = `There is a rumpled ***sheet*** on the bed.`

                        bed.desc = `It is a double bed. ${sheetDesc} A quilted bedspread is rolled up in a ball. An oversized down-filled pillow is propped against the headboard. ${boxDesc}`;

                        if(getItemInRoomById('hotebox', 'hote-revi')){
                            let box = getItemInRoomById('hotebox', 'hote-revi');
                            if(box.isOpen === true){
                                boxDesc.replace('***large box***', '***large open box***');
                            }
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
                    },
                    top: true,
                    bottom: true
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
                {
                    itemId: 'hanger',
                    name: 'hanger',
                    desc: `A hanger is a hanger is a hanger.`,
                    isTakeable: true,
                    isDroppable: true,
                    onDrop: () => {
                        println(`You put the metal hanger back where you found it.`)
                    }
                }
            ], // closes hote-revi room items 
            exits: [
                {dir: ['bathroom'], id: 'hote-revi-1'}, // leads to hotel bathroom
                {dir: ['leave', 'exit', 'leave room'], id:'hote-revi-2'}, 
                {
                    // window exit
                }
            ], //closes hote-revi room exits 
        }, // closes hote-revi room
        {
            id: 'hote-revi-1', 
            name: 'The Bathroom',
            desc: `You're in the bathroom. It has the usual amenities of a good but not over-fancy hotel-- a small pink ***sink*** encased in Formica that's pretending to be marble, a tiled ***shower***, a ***toliet***, a towel rack with a ***large towel***. But no clothes.`,
            onEnter: () => {
                const room = getRoom('hote-revi-1');
                if(getItemInInventory('towel')){
                    room.desc = room.desc.replace(` with a ***large towel***.`, '.'); 
                }
            },
            items: [
                {
                    itemId: 'sink',
                    name: ['sink', 'pink sink'],
                    desc: `It is a small pink sink encased in formica that's pretending to be marble. There is a used cake of ***soap*** sitting on the vanity.`,
                    onLook: () => {
                        if(getItemInInventory('soap')){
                            let sink = getItemInRoomById('soap', 'hote-revi-1');
                            sink.desc = sink.desc.replace(' There is a used cake of ***soap*** sitting on the vanity.', '');
                        }
                    }
                },
                {
                    itemId: 'soap',
                    name: 'soap',
                    desc: 'It smells like lemon.',
                    isTakeable: true,
                    isDroppable: true,
                    onUse: () => {
                        println(`You wash your hands. It occurs to you only now that you are not wearing a wedding band. Does that mean you're single? Or divorced? Or that the ring has been stolen? Or that, like many married men, you're never worn one?`);
                    }
                },
                {
                    itemId: `shower`,
                    name: ['shower', 'tiled shower'],
                    desc: 'The tiled shower is equipped with hot and cold water knobs, and a water conserving shower head.',
                    onUse: () => {
                        println(`You remove any clothing you have on.
                        
                        You step into the shower, slide the door shut, adjust the temperature to your liking, and take a nice long lathery shower. Not that you really needed on that badly, but cleaniness is next to godliness after all. You dry off with a big fluffy towel.`);
                    }
                },
                {
                    itemId: 'toliet',
                    name: 'toliet',
                    desc: `Next to the toilet on the wall is a fresh roll of Charmin. You lift the lid of the toilet and bend down to look inside. What you see is a dim reflection of your own unfamiliar face -- looking very sheepish. What did you ***expect*** to find?`,
                    onUse: () => {
                        println(`You go to the toliet. But it hasn't solved any problems, has it? You still don't know who you are. You still don't have any clothes. And with each minute that goes by you can feel the level of your anxiety rising like water about to spill over a dam. You've got to DO SOMETHING!`);
                    }
                },
                {
                    itemId: 'large towel',
                    name: ['towel', 'large towel'],
                    desc: `It is a large fluffy towel.`,
                    /* on WEAR towel, println(`For lack of anything better you wrap a towel around your waist. It wouldn't pass muster anywhere but in a steam room, but it might keep you from being arrested for indecent exposure. 
                    
                    Are you doing in the bathroom?`)*/
                    isTakeable: true,
                    isDroppable: true,
                    onTake: () => {
                        let bathroom = getRoom('hote-revi-1');
                        bathroom.desc = bathroom.desc.replace(` with a ***large towel***.`, '.');
                    }
                }, 
            ],
            
            exits: [
                {dir: ['room'], id: 'hote-revi'}
            ]
        }, // closes hote-revi-1 room (bathroom)
        {
            id: 'hote-revi-2',
            name: 'Hotel Room',
            desc: `The phone rings.`,
            onEnter: () => {
                const room = getRoom('hote-revi');
                room.lukecall = true;
                room.exits[1].id = 'hote-revi-8';
            },
            onBlock: () => {
                if (prevInput === 'answer phone' || prevInput === 'answer the phone') {
                  enterRoom('hote-revi-3');
                } else {
                  println('The phone continues ringing.');
                }
              }
        }, // closes hote-revi-2 (luke's phonecall)
        {
            id: 'hote-revi-3',
            name: '',
            desc: ``,
            onEnter: () => {
                println(`You go to the bedside table and answer the phone with a rather tentative "Hello?"
                
                "John!" booms a man's gravelly voice. "Where've you been, son? We've been down here in the lobby for the last couple hours, calling your room every five minutes." He goes on without waiting for your reply. "I guess that last margarita last night was your undoing. Well, no matter, so long as you're on your feet again. Have you tried on your white bib and tucket yet?"`);
            },
            onBlock: () => {
                if(prevInput === 'yes'){
                    println(`"Well then, what are we waiting for? I'm paying this damned preacher by the hour, and he's going to want time and a half for overtime pretty soon. Get on down to the lobby on the double." He hangs up, and you're left thinking that getting married is almost as easy as...as putting on a suit of clothes.`);
                } else if(prevInput === 'no'){ 
                    println(`Well, get moving my boy! Your bride is starting to think you may be planning to leave her standing at the altar. So unless you want me to come up there with a shotgun, you get into them fancy duds and report to the lobby on the double!" He hangs up, and you wonder, fleetingly, if getting married is usually this easy. Why, it's like...putting on a suit of clothes.`);
                } else {
                    println(`"Very funny, my boy, very funny. But let's leave the joking for after the ceremony, if you don't mind. I'm paying this preacher by the hour, and he don't come cheap. So move your butt on down here-- and be wearing that wedding uniform. Your little Alice says she is aching to see you all in white." He hangs up, and you think: This isn't my life, this is a movie called ***ALICE AT THE SUNDERLAND HOTEL***. And there is the costume for the White Rabbit in the box on the bed.`);
                }
                enterRoom('hote-revi');
            }
        }, // closes hote-revi-3 (luke's phonecall)
        {
            id: 'hote-revi-5',
            name: '',
            desc: '',
            onEnter: () => {
                println(`You hear a key being fitted into the lock of the door and feel-- too late-- a sense of urgency. A man enters the room, dressed like a Texas businessman in a suit and tie with boots and a Stetson. The gun in his hand, however, is not consistent with his western theme, being a very modest .38 caliber pistol.`);
                pressEnter('hote-revi-6');
            }
        }, // closes hote-revi-5 (death for dawdlers ending)
        {
            id: 'hote-revi-6',
            name: '',
            desc: '',
            onEnter: () => {
                println(`"That's right, son," he says; aiming the gun at your chest, "you just freeze, and I will explain something about my character. I have never been a man to abide dawdlers. In fact, one time in Nashville, there was this waitress who took the better part of an hour to serve me a damned hamburger. I told her I was becoming impatient, and then I told her again. And then I lost my temper. Like this!"`);
                pressEnter('hote-revi-7');
            }
        }, // closes hote-revi-6 (death for dawdlers ending)
        {
            id: 'hote-revi-7',
            name: '',
            desc: '',
            onEnter: () => {
                println(`The man shoots you twide in the chest, first through you liver and then through your heart. In the moments before your death, your killer offers some parting words of advice. "In the future, friend, don't dawdle. Dawdling never go anyone anywhere." He bends down and places your hands crosswise over the two bullet holes in your chest, straightens out your legs, and leaves the room with a tip of his Stetson.
                
                A fly alights on your nose. For a little white you feel the tickle of its feet, and then you're dead.`);
                pressEnter('end-scre'); // leads to end screen
            }
        }, // closes hote-revi-7 (death for dawdlers ending)
        {
            id: 'end-scre',
            name: 'THE END',
            desc: 'Game Over Gumshoe',
        },
        {
            id: 'hote-revi-8',
            name: '',
            desc: '',
            onEnter: () => {
                if(getItemInInventory('metal key')){
                    println(`You are just about out the door of the room when you remember to check in your pocket to see if you remembered to take the room key. You have it.
                    
                    You return to the room to pick up anything else you think you ought to have with you.
                    
                    You decide to leave most of the hotel's possessions in the room. Apparently you possess a sense of morality.
                    
                    You leave the room and close the door behind you. Then you head down the corridor toward the bank of elevators. One of the elevators arrives at 15 the moment you press the DOWN button. You get in and ride to the lobby without stopping at any of the intervening floors.`);
                    pressEnter('lobby');//leads to Lobby node
                } else {
                    println(`You are just about out the door of the room when you remember to check in your pocket to see if you remembered to take the room key. You've left it back in the room.
                    
                    You return to get the key-- and anything else you think you ought to have with you.
                    
                    You decide to leave most of the hotel's possessions in the room. Apparently you possess a sense of morality.
                    
                    You leave the room and close the door behind you. Then you head down the corridor toward the bank of elevators. One of the elevators arrives at 15 the moment you press the DOWN button. You get in and ride to the lobby without stopping at any of the intervening floors.`);
                    pressEnter('lobb-1');//leads to Lobby node
                }
            } 
        },//end of hote-revi-8 room 
    ], // closes hote-revi rooms
}; // closes hoteroomRevi

