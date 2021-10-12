const deathAndTexas = {
    roomId: 'deat-1', // Set this to the ID of the room you want the player to start in.
    rooms: [
      {
        id: 'deat-1', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
        name: '', // Displayed each time the player enters the room.
        desc: `Several months go by during which time you are brought to trial for the murder of the guard you are charged with killing while escaping the State Penitentiary in Revoltillo, Texas. The prosecuting attorney, the judge, the jury, and even F. Lee Bailey; whom you hire to defend you, seem to think your amnesia is an imposture, the desperate invention of a guilty man. The prosecution calls your own wife, a woman named Denise, to testify that during most of the period after your escape you lived in hiding in her New York apartment, and she is able to produce several witnesses to confirm this. You cannot positively contradict her. You are sentenced to be executed either by a firing squad or lethal injection. Which is it to be?`, // Displayed when the player first enters the room.
        items: [
          {
            name: 'door',
            desc: 'It leads NORTH.', // Displayed when the player looks at the item.
            onUse: () => {}, // Called when the player uses the item.
          },
          {
            name: ['vines', 'vine'], // The player can refer to this item by either name. The game will use the first name.
            desc: `They grew over the DOOR, blocking it from being opened.`,
          },
          {
            name: 'axe',
            desc: `You could probably USE it to cut the VINES, unblocking the door.`,
            isTakeable: true, // Allows the player to take the item.
            onUse: () => {},
          }
        ],
        exits: [
          {dir: 'north', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
            id: 'clearing',
            block: `The DOOR leading NORTH is overgrown with VINES.`, // If an exit has a block, the player will not be able to go that direction until the block is removed.
          },
        ],
      },
      {
        id: 'clearing',
        name: 'A Forest Clearing',
        desc: `It's a forest clearing. To the SOUTH is The First Room.`,
        exits: [
          {
            dir: 'south',
            id: 'start',
          },
        ],
      }
    ],
  };