const corridor1502 = {
    roomId: 'corridor-1502', // Set this to the ID of the room you want the player to start in.
    rooms: [
      {
        id: 'corridor-1502', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
        name: '15th Floor Hallway', // Displayed each time the player enters the room.
        desc: `You are now in a long corridor made to seem still longer by a wallpaper design of continuous horizontal stripes of chocolate brown and dusky orange. To the west, just after the door to your own room, is a door with a lighted EXIT sign above it. On along the corridor to the east the numbers of the rooms increase by increments of one.\n

        Halfway down the corridor there is a branching northward and and an arrow directing you to a bank of elevators. For the moment, the hallway is desered save for a maid's laundry trolley some five doors away and yourself.`,
        
        items: [
            {
                name: 'room', // If the player tries to go back to room 1502
                desc: `You are standing in front of the doors to rooms 1502.`,
                onUse: () => {
                    const room1502 = getRoom('corridor-1502');
                    const exit = getExitDir('hote-room-1', room1502.exits);
                    if ((getItemInRoom('roomkey') || getItemInInventory('roomkey'))) {
                      delete exit.block;
                    } else {
                      goDir('hote-room-1');
                    }
                  },
            },

        ],
        exits: [
          {
            dir: ['leave', '1502'], 
            id: 'hote-room-1',
            block: 'You try to return to your room, but the door locked automatically when it was closed.'
          },
          {
            dir: ['east', 'right', '1503'], 
            id: 'corridor-1503',
          },
          {
            dir: ['west', 'left', '1501'], 
            id: 'corridor-1501',
          },
          {
            dir: ['elevator'], 
            id: 'corridor-elevator15',
          },
          {
            dir: ['stairwell', 'stairs', 'exit'], 
            id: 'corridor-stairwell15',
          },
        ],
      },
      {
        id: 'corridor-1501',
        name: '15th Floor Hallway',
        desc: `You are standing in the front of the door with the lighted EXIT sign over it. This must be the stairway.`,
        onEnter: () =>{
            const room =getRoom('corridor-1502');
            if((getItemInRoom('towel') || getItemInInventory('towel'))){
                room.desc = `Despite the fact you are not wearing a stitch, you go out into the corridor. You're at one end of it, near a lighted EXIT sign. Facing you is the door to Room 1501. On along the corridor, the numbers of the rooms increase by increments of one. Some five doors away the maid's laundry trolley is parked, but the maid is not in sight. Farther down the corridor an arrow points left toward a bank of elevators.`
            }else{
                room.desc = `Despite the fact you are not wearing a stitch, you go out into the corridor. You're at one end of it, near a lighted EXIT sign. Facing you is the door to Room 1501. On along the corridor, the numbers of the rooms increase by increments of one. Some five doors away the maid's laundry trolley is parked, but the maid is not in sight. Farther down the corridor an arrow points left toward a bank of elevators.`
            }
        },
        exits: [
         {
            dir: ['east', 'right'], 
            id: 'corridor-1502',
         },
         {
            dir: ['west', 'left', 'stairwell', 'exit'], 
            id: 'corridor-stairwell15',
        },
        {
            dir: ['elevator'], 
            id: 'corridor-elevator15',
          },
        ],
      },
      {
        id: 'corridor-1503',
        name: '15th Floor Hallway',
        desc: `To your west is room 1502 and beyond that, the stairway. Right now you are standing in front of the doors to 1503 and 1504.`,
        exits: [
         {
            dir: ['east', 'right'], 
            id: 'corridor-1509',
         },
         {
            dir: ['west', 'left'], 
            id: 'corridor-1502',
        },
        {
            dir: ['stairs', 'stairwell'], 
            id: 'corridor-stairwell15',
        },
        {
            dir: ['elevator'], 
            id: 'corridor-elevator15',
          },
        ],
      },
      {
        id: 'corridor-1509',
        name: '15th Floor Hallway',
        desc: `You are standing in front of the doors to rooms 1509 and 1510. The door to room 1509 stands slightly ajar. Inside you can hear the purr of a vacuum cleaner.`,
        exits: [
         {
            dir: ['1509', 'room 1509', 'inside'], 
            id: 'corridor-1509inside',
         },
         {
            dir: ['west', 'left', ], 
            id: 'corridor-1503',
        },
        {
            dir: ['elevator', 'east', 'right'], 
            id: 'corridor-elevator15',
          },
        ],
      },
      {
        id: 'corridor-1509inside',
        name: 'Room 1509',
        desc: `You enter room 1509, where the maid who earlier came to clean your own room is busy vacuuming the carpet.

        "Excuse me, sir" she says as she turns off the vacuum. "No one is allowed in empty hotel rooms at the Sunderland except the staff. I'm afraid you'll have to leave.`,
        onEnter: () => {
            pressEnter('corridor-1509outside');
        },
      },
      {
        id: 'corridor-1509outside',
        name: '15th Floor Hallway',
        desc: `Not wishing to make a scene, you quietly withdraw from the room and go back to the hallway. \nYou are standing in front of the doors to rooms 1509 and 1510. The door to room 1509 stands slightly ajar. Inside you can hear the purr of a vacuum cleaner.`,
        exits: [
            {
               dir: ['1509', 'room 1509', 'inside'], 
               id: 'corridor-1509inside',
               block: ''
            },
            {
               dir: ['west', 'left', ], 
               id: 'corridor-1503',
           },
           {
               dir: ['elevator', 'east', 'right'], 
               id: 'corridor-elevator15',
             },
           ],
      },
      {
        id: 'corridor-stairwell15', // Stairway on 15th floor
        name: 'Firestairs',
        desc: `The door opens onto the landing of a wide stairwell. The concrete steps and walls are painted battleship grey.`,
        exits: [
          {
            dir: ['up', 'ascend'], // PROBLEM - the two word command as written doesn't discriminate with the first word, in this case it matters if they type up or down
            id: 'corridor-stairwellph'
          },
          {
            dir: ['down', 'descend'],
            id: 'corridor-stairwellde'
          },
          {
            dir: ['exit', 'leave'],
            id: 'corridor-1501'
          },
        ],
      },
      {
        id: 'corridor-stairwellph', // To the health club
        name: '',
        desc: `You mount the stairs slowly to the next landing. The concrete feels cold under your bare feet. You climb, in all, five flights of steps--and find yourself, at last, before a door marked SUNDERLAND HEALTH CLUB, Authorized Personnel Only.`,
        onEnter: () => {
            pressEnter('corridor-rooftop');
        },
      },
      {
        id: 'corridor-rooftop',
        name: 'Roof of the Sunderland',
        desc: `You find yourself on a gravel rooftop. Immediately in front of you is a drained swimming pool surrounded by deck chairs made of brightly colored metal tubing.

        Beyond the pool is the penthouse proper, a flat-roofed, windowless brick structure with a metal door from which the weather has almost entirely peeled away the lettering:
        S DE AND SAU   & HE LT   LUB`,
        items: [
            {
                name: 'door', // If the player tries to go back to room 1502
                desc: `You are now standing in front of the metal door.`,
                onUse: () => {
                      goDir( 'heal-club');
                  },
            }
        ],
        exits: [
          {
            dir: ['inside', ' health club', 'enter'],
            id: 'heal-club'
          },
          {
            dir: ['leave', 'descend'],
            id: 'corridor-stairwell15'
          },
        ],
      },
      {
        id: 'corridor-stairwellde',
        name: 'Firestairs',
        desc: `You go down the steps. At the next floor landing, you feel an odd vertiginous feeling. Foolishly you ignore the feeling, and as you approach the landing of still another floor you lose all sense of balance. 

        The stairwell whirls about you. You clutch for the railing and collapse on the landing where you lie, an inert and unconscious heap.`,
       onEnter: () =>{
           pressEnter('nightmare'); // change to whatever the room id of the nightmare is
       },
      },
      {
        id: 'nyu-medical1', // After the nightmare, proceeding to death and texas
        name: 'NYU Medical Center',
        desc: `You awaken not where you fell, on the landing of the Sunderland's firestairs, but in a hospital bed. Your arms have been fastened to the sides of the bed by canvas restraining straps. After you have struggled a little while, a nurse enters with a hypodermic. "Now, now, Mr. Hollings, none of that or I will have to sedate you."`,
        exits: [
            {
              dir: ['fight', 'protest', 'scream', 'struggle', 'kill','nurse', 'hollings'],
              id: 'nyu-medical2'
            },
            {
              dir: ['explain', 'explaination', 'you'],
              id: 'nyu-medical3'
            },
          ],
    },
    {
        id: 'nyu-medical2', // Proceed to Death and Texas
        name: 'NYU Medical Center',
        desc: `Protests and struggle are unavailing. Your restraints are strong, and the nurse remains unsympathetic. With a grim smile, she plunges the hypodermic into your arm.`,
       onEnter: () =>{
           pressEnter('deat-1'); 
       },
    },
    {
        id: 'nyu-medical3', // Proceed to Death and Texas
        name: 'NYU Medical Center',
        desc: `"There's really no much to explain, Mr. Hollings. You were found in the stairwell of the Sunderland Hotel, naked and unconscious, and taken here to Bellevue. Our security staff did a routine check to find out who you were -- and when we discovered you were wanted on a murder charge in Texas, naturally we informed the police. I'm told you can expect to be here another day, and then the extradition papers will be ready."`,
       onEnter: () =>{
           pressEnter('deat-1'); 
       },
    },
    ],
  };