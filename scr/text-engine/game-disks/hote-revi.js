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
                
                To the left of the dresser is an ***IBM PC*** computer on its own metal cart. There's a **window** bro.`; // change IBM PC to be the computer name the css style is
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
                      }, // not printing the correct lines, only prints 'You don't notice anything remarkable about it.'
                    onUse: () => {
                        let pc = getItemInRoomById('computer', 'hote-revi-1');
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
                    itemId: '',
                    name: [],
                    desc: ``,
                }, 
            ], // closes hote-revi room items 
            exits: [

            ], //closes hote-revi room exits 
        }, // closes hote-revi room
    ], // closes hote-revi rooms
}; // closes hoteroomRevi