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
          dir: ['left', 'dolls', 'girls', `women's`, 'womens'], // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'heal-club1',
        },
        {
          dir: ['right'],
          id: 'heal-club?',
        },
        {
          dir: ['leave'],
          id: 'cor-?'
        }
      ],
    },
    {
      id: 'heal-club1',
      name: `Women's Locker Room`,
      desc: `You enter the women’s locker room, and a woman who seems to be in training for the Olympic hammer throw looks at you with the joy of combat already glistening in her eyes. 
      “Not here, buddy,” she informs you in a low voice. “This is the women’s locker room. And you--correct me if I’m wrong--belong in the men’s locker room.” 
      She points the direction with her thumb. “That way.”`,
      exits: [
        {
          dir: ['leave', 'exit'],
          id: 'heal-club',
        },
        {
          dir: [],
          id: 'heal-club 2'
        }
      ],
    },
    {
      id: 'heal-club3',
      name: `Women's Locker Room`,
      desc: `"I'm warning you, Bozo: Out of here!`,
      exits: [
        {
          dir: ['leave', 'exit'],
          id: 'heal-club',
        },
        {
          dir: [],
          id: 'heal-club4'
        }        
      ],
    },
    {
      id: 'heal-club4',
      name: `Women's Locker Room`,
      desc: `"Okay, that's it." 
      With a single, simple flowing motion remarkable in a woman of such size and strength, she springs up and lays you flat with a judicious karate chop to the side of your neck.`,
      exits: [
        {
          dir: [],
          id: 'Deat-Tex'
        }
      ]
    }
  ],
};

