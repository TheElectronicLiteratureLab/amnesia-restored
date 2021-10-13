const hotelroomRevisted = {
    roomId: 'hote-revi', //this is the Hotel Room 1502 revisited node, entered from Sunderland Health Club node
    rooms: [
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
                    //itemId: '1502phone',
                    name: 'phone',
                    desc: 'The phone on the dress belongs to NYNEX.',
                    onUse: () => {
                        enterRoom('hote-revi-2'); //LUKE SEQUENCE, just wanted to check if works...won't work without calling getRoom
                    },
                },
                { 
                    //itemId: 'metel key', //change? keep? 
                    name: ['metal key', 'room key', 'hotel key', '1502 key', 'key'],
                    desc: `The key chain is green plastic with the numerals 1502 in white. The key is ordinary.`,
                    isTakeable: true,
                    onTake: () => println('You take the metal key.')//appears in inventory as 'metal key'
                }, 
                {
                    //itemId: 'bible',
                    name: ['Gideon Bible', 'bible', 'holy book', 'bible'],
                    desc: `You open the Bible to the only dog-eared page in the book and you notice that the page so marked has been scribbled on. It is the page on which appropriate texts are cited for thos ewith special needs. the list of texxts commended to 'those in doubt and uncertainty' has been crossed out, and above the deleted citations of chapter and verse someone had written 'John 1'.
                    
                    If you remember John 1 rightly, it seems oddly irrevlevant to the needs of those in doubt. But never mind.`,
                    isTakeable: true,
                    onTake: () => println('You take the Gideon Bible'), //appears in inventory as 'Gideon Bible'
                    isDroppable: true,
                    onDrop: () => println('') 
                },
                {
                    //itemId: 'pen',
                    name: ['pen', 'ballpoint pen'],
                    desc: `It is a white plastic ballpoint.`,
                    isTakeable: true, 
                    onTake: () => println('You take the ballpoint pen.'), //appears in inventory as 'ballpoint pen'

                },
                {
                    //itemId: 'roomtv',
                    name: ['television', 'tv', 'telly', 'Simplex TV'], 
                    desc: `It is a Simplex TV -- a brand you've never heard of, or at least cannot remember. There are three buttons on the set. The first is for on and off, the second is marked F for forward, allowing you to change channels, but the third is broken off. The TV is off.`,
                    isOn: false,
                    onUse: () => {
                        let tv = getItemInRoom('roomtv', 'hote-revi');
                        tv.isOn = !tv.isOn;
                        if(tv.isOn){
                            println(`You turn on the TV, which is showing a soft-core porn movie over the hotel's own cable channel. It seems to you, theoretically, that this ought to be effection as dynamite for breaking up the logjam of your memories, but while your imagination fully appreciates the movie's message, your memory remains inviolately blank. For all you know you could have been a virgin or another Don Juan with an entire catalog of sexual conquests.`);
                        } else {
                            println(`The TV isn't on.`);
                        }
                        //turning tv off?
                    },
                    onForward: () => {
                        let tv = getItemInRoom('roomtv', 'hote-revi'); 
                        
                        if(tv.isOn){
                            println(`The F button that shoulder tune the TV to the next channel doesn't seem to be working any longer.`)
                        } else {
                            println(`The TV isn't on.`)
                        };
                    },    
                }, 
                {
                    //itemId: 'computer',
                    names: ['IBM PC', 'apple', 'com', 'comp', 'computer', 'commodore', 'commodore 64', 'apple iie', 'pc'],
                    desc: `The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned off.`,
                    isOn: false,
                    onUse: () => {
                        let pc = getItemInRoom('computer', 'hote-revi');
                        pc.isOn = !pc.isOn;
                        if(pc.isOn === true){
                            pc.desc = `The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned on.`;
                            println(pc.desc);
                        } else {
                            pc.desc = `The computer is an IBM PC equipped with a monochrome monitor, and two disk drives. Both drives are empty. A decal on the side of the monitor declares that the computer is the property of the User-Friendly Computer Store. It is turned off.`;
                            println(pc.desc);
                        };
                    },                
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
                    //itemId: '1502window',
                    name: 'window', //hotel room window
                    desc: `The first thing you notice is the late afternoon light streaming across the skyscrapers of the city, flashing from windows and walls of glass. It is late in the day, and the sun low in the sky.`,
                    onUse: () => println(`The window is sealed to keep the air-condiitoned air in the hotel.`), //how can the player jump if the window is sealed? mhmm?
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
        
    ], //end of hote-revi rooms  
};//end of const hotelroomRevisited


