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
            dir: ['east', 'right', ], 
            id: 'corridor-1503',
          },
          {
            dir: ['west', 'left'], 
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
        name: '',
        desc: `You are standing in the front of the door with the lighted EXIT sign over it. This must be the stairway.`,
        exits: [
         {
            dir: ['east', 'right'], 
            id: 'corridor-1502',
         },
         {
            dir: ['west', 'left'], 
            id: 'corridor-1501',
        },
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
    ],
  };