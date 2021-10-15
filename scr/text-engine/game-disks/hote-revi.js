const hoteroomRevi = {
    roomId: 'hote-revi', // this is the Hotel Room 1502 revisited node, entered from Sunderland Health Club node
    currPos: [],
    rooms: [
        {
            id: 'hote-revi', // unique ID for this room
            name: 'Hotel Room', // displayed to player
            desc: `You breathe a sigh of relief as you close the door behind you. Room 1502 feels almost like home.
            
            The first thing you notice is the late afternoon light streaming across the skyscrapers of the city, flashing from windows and walls of glass. It is late in the day, and the sun is low in the sky. You must have lain unconscious much longer than you supposed.
            
            You see a **large box*** that has been placed at the foot of the freshly made bed.`,

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
                let bibleDesc = ` and a ***Gideon Bible***.`;
                let penDesc = `A ***ballpoint pen*** has been used as a bookmark in the Bible by someone wiht no respect for bindings.`;
                room.desc = `You take a deep breath -- and a long look about the hotel room, starting with the writing pad on the dresser, where a sheet of the hotel's stationery informs you that you're a guest of the Sunderland Hotel. ${keyDesc}
                
                To pass the time the hotel offers a ***television***${bibleDesc} ${penDesc}
                
                To the left of the dresser is an ***IBM PC*** computer on its own metal cart. There's a **window** bro.`; // change IBM PC to be the computer name the css style is
                if(getItemInInventory('metal key')){ // if the room key is already in inventory
                    room.desc = room.desc.replace(`${keyDesc}`, '');
                };

                if(getItemInInventory('Gideon Bible')){ // if the Gideon Bible is already in inventory
                    room.desc = room.desc.replace(`${bibleDesc}`, '.');
                };

                if(getItemInInventory('ballpoint pen')){ // if the pen is already in inventory
                    room.desc = room.desc.replace(`${penDesc}`, '');
                };
            }, // closes onLook function

            items: [
                {
                    itemId: 'roomkey',
                    name: ['room key', 'hotel key'],
                    desc: ``,
                },
                {
                    itemId: 'bible',
                    name: ['Gideon Bible', 'bible', 'holy book', 'the bible'],
                    desc: `You open the Bible to the only dog-eared page in the book and you notice that the page so marked has been scribbled on. It is the page on which appropriate texts are cited for thos ewith special needs. the list of texxts commended to 'those in doubt and uncertainty' has been crossed out, and above the deleted citations of chapter and verse someone had written 'John 1'.
                    
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
                    desc: ``,
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
                      },
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
                    name: ['dresser'],
                    desc: ``,
                },
                {
                    itemId: 'drawer',
                    name: ['drawer'],
                    desc: ``,
                },
                {
                    itemId: '',
                    name: [],
                    desc: ``,
                },
                {
                    itemId: '',
                    name: [],
                    desc: ``,
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
    characters: [

    ], // closes characters
}; // closes hoteroomRevi