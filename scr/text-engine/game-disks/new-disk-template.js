// This simple game disk can be used as a starting point to create a new adventure.
// Change anything you want, add new rooms, etc.
const healthClubDisk = {
  roomId: 'heal-club', // Set this to the ID of the room you want the player to start in.
  rooms: [
    {
      id: 'heal-club', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'Health Club Reception Room', // Displayed each time the player enters the room.
      desc: `The door opens with a creak, and you step into a small reception area furnished with cast-iron and vinyl armchairs, a water cooler with paper cups, a small Formica desk with a stack of application forms, and faded posters of once famous bodybuilders. A sign on the Formica desk promises that someone will be “Back in 10 Minutes.”
      The elevators open into the reception area from a hallway on one wall. There are two doors behind the desk. the one on the left is marked "Dolls," the one on the right "Guys."`, // Displayed when the player first enters the room.
      exits: [
        {
          dir: 'left', // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'heal-club1',
        },
        {
          dir: 'right',
          id: 'heal-club2',
        },
        {
          dir: 'leave',
          id: 'cor-?'
        }
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
