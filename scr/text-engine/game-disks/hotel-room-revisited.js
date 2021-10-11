const hotelroomRevisted = {
    roomId: 'hote-revi', // this is the Hotel Room 1502 revisited node, entered from Sunderland Health Club node
    rooms: [
        {
            id: 'hote-revi', // unique ID for this room
            name: 'Hotel Room', // room name (displayed to player)
            desc: `The first thing you notice is the late afternoon light streaming across the skyscrapers of the city, flashing from windows and walls of glass. It is late in the day, and the sun is low in the sky.
            
            You see a **tuxedo** lying on your bed.`, // text that appears when player first enters the room
            //**interactable items**
            onLook: () => {
                const room = getRoom('hote-revi');
                let keyDesc = `There is a **room key** with a large green plastic tag showing your room number, 1502.`;
                let bibleDesc = `Also, a **Gideon Bible**.`;
                let penDesc = `A **ballpoint pen** has been placed near the phone.`;

                room.desc = `You take a deep breath -- and a long look about the hotel room, starting with the writing pad on the dresser, where a sheet of the hotel's stationery informs you that you're a guest of the Sunderland Hotel. ${keyDesc}
                
                To pass the time the hotel offers a **television**. ${bibleDesc} ${penDesc}
                
                To the left of the dresser is an **IBM PC** computer on its own metal cart.`; //IBM PC will change depending on which version the player is on. Need to add function for this. 
                
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
                    name: ['metal key', 'room key', 'hotel room key', '1502 key', 'key'],
                    desc: `The key chain is green plastic with the numerals 1502 in white. The key is ordinary.`,
                    isTakeable: true,
                    onTake: () => println('You take the metal key.')//appears in inventory as 'metal key'
                }, 
                {
                    name: ['Gideon Bible', 'bible'],
                    desc: `You open the Bible to the only dog-eared page in the book and you notice that the page so marked has been scribbled on. It is the page on which appropriate texts are cited for thos ewith special needs. the list of texxts commended to 'those in doubt and uncertainty' has been crossed out, and above the deleted citations of chapter and verse someone had written 'John 1'.
                    
                    If you remember John 1 rightly, it seems oddly irrevlevant to the needs of those in doubt. But never mind.`,
                    isTakeable: true,
                    onTake: () => println('You take the Gideon Bible'), //appears in inventory as 'Gideon Bible'
                    isDroppable: true,
                    onDrop: () => println('') 
                },
                {
                    name: ['pen', 'ballpoint pen'],
                    desc: `It is a white plastic ballpoint.`,
                    isTakeable: true, 
                    onTake: () => println('You take the ballpoint pen.'), //appears in inventory as 'ballpoint pen'

                },
                {
                    name: ['television', 'tv', 'telly'], 
                    desc: `It is a Simplex TV -- a brand you've never heard of, or at least cannot remember. There are three buttons on the set. The first is for on and off, the second is marked F for forward, allowing you to change channels, but the third is broken off. The TV is off.`,
                    onUse: () => {
                        println(`You turn on the TV, which is showing a soft-core porn movie over the hotel's own cable channel. It seems to you, theoretically, that this ought to be effection as dynamite for breaking up the logjam of your memories, but while your imagination fully appreciates the movie's message, your memory remains inviolately blank. For all you know you could have been a virgin or another Don Juan with an entire catalog of sexual conquests.`);
                    } //the command should be TURN ON      
                }, 
                {
                    name: ['tuxedo', 'tux'],
                    desc: `There is an all-while tuxedo, sitting on the bed. There could be only one place anyone would ever wear this outfit -- to his own wedding. Could the explanation for your amnesia be as simple as this? A last-ditch attempt to escape the state of matrimony?
                    
                    Maybe it got delivered to this room by mistake. There's an easy way to find out. You examine the tuxedo, and seems to be exactly your size.`,
                    isTakeable: true, 
                    onTake: () => println('You take the white tuxedo.'),//appears in inventory as 'white tuxedo'
                    //add onWear function to put clothes on player 
                    
                },
                {
                    name: 'window', //hotel room window
                    desc: `The first thing you notice is the late afternoon light streaming across the skyscrapers of the city, flashing from windows and walls of glass. It is late in the day, and the sun low in the sky.`,
                },
                {
                    name: ['phone', 'telephone', 'hotel phone'],
                    desc: `The phone on the dresser belongs to NYNEX.`,
                    onUse: () => println(`To use the phone, type DIAL followed by the hotel number you wish to dial.`), //need to creat DIAL command 
                },
            ], //end of hote-revi items
            exits: [
                {
                    dir: 'north', 
                    id: 'hote-revi-1'
                }, //GO NORTH leads to Bathroom 
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
                    dir: 'south', 
                    id: 'hote-revi'
                },
            ],//end of hote-revi-1 exits
        }, //end of hote-revi-1 room
    ], //end of hote-revi rooms  
    characters: [
        {
        },
    ],//end of characters
};//end of const hotelroomRevisited


