
const amnesiaRestored = {
  roomId: 'hote-room-1', // Set this to the ID of the room you want the player to start in.
  rooms: [
    {
      id: 'hote-room-1', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'Hotel Room', // Displayed each time the player enters the room.
      desc: `What's a person to do in such a situation? \n\nWhat YOU do is...`, // Displayed when the player first enters the room.
      items: [
        {
          name: 'bed'
        },
        {
          name: 'mirror'
        },
        {
          name: 'drawer'
        },
        {
          name: 'closet'
        },
        {
          name: 'clothes hanger'
        },
        {
          name: ['sheet', 'sheets']
        },
        {
          name: ['bible', 'gideon bible', 'gideon', 'holy book']
        },
        {
          name: 'brochure'
        },
        {
          name: 'phone'
        }
      ],
      exits: [
        {dir: 'north', id: 'bath'}
      ]
    },
    {
      id: 'bath',
      name: 'Bathroom',
      desc: '',
      items: [
        {
          name: 'towel'
        },
        {
          name: 'sink'
        },
        {
          name: 'toilet'
        }
      ],
      exits: [
        {dir: "south", id: "hote-room-1"}
      ]
    },






    {
      id: 'clearing',
      name: 'A Forest Clearing',
      desc: `It's a forest clearing. To the SOUTH is The First Room.`,
      exits: [ // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
        {dir: 'north', id: 'clearing', block: `The DOOR leading NORTH is overgrown with VINES.`},// If an exit has a block, the player will not be able to go that direction until the block is removed.
        {dir: 'clearing', id: 'clearing', block: 'YOU SHALL NOT PASS'}
      ],
    }
  ],
};
