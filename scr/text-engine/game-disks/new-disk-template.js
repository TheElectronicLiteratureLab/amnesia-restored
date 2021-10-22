// This simple game disk can be used as a starting point to create a new adventure.
// Change anything you want, add new rooms, etc.
const testDisk = {
  roomId: 'starting', 
  rooms: [
    {
      id: 'starting',
      name: 'sunderland hotel',
      desc: `You are leaving the hotel and going to the streets`,
      
      onEnter: () => {
        pressEnter('pho-boo');
      }
    },
    {
      id: 'pho-boo',
      name: 'Streets of Manhattan',
      desc: 'There is nothing interesting here - 1',
      phonesMade: false,
      onEnter: () => {
        const room = getRoom(disk.roomId);
        if (!room.phonesMade) {
          createPhone();
        }
        pressEnter('pho-boo2');
      },
      
      exits: [
        {
          dir: ['left', 'east',],
          id: 'pho-boo2'
        }
      ],
    },
    {
      id: 'pho-boo2',
      name: 'Streets of Manhattan',
      desc: 'There is nothing interesting here - 2',
      onEnter: () => {
        pressEnter('pho-boo3');
      },
      exits: [
        {
          dir: ['left', 'east',],
          id: 'pho-boo3'
        }
      ],
    },
    {
      id: 'pho-boo3',
      name: 'Streets of Manhattan',
      desc: 'There is nothing interesting here - 3',
      onEnter: () => {
        pressEnter('pho-boo4');
      },
      exits: [
        {
          dir: ['left', 'east',],
          id: 'pho-boo4'
        }
      ],
    },
    {
      id: 'pho-boo4',
      name: 'Streets of Manhattan',
      desc: 'There is nothing interesting here - 4',
      onEnter: () => {
        pressEnter('pho-boo5');
      },
      exits: [
        {
          dir: ['left', 'east',],
          id: 'pho-boo5'
        }
      ],
    },
    {
      id: 'pho-boo5',
      name: 'Streets of Manhattan',
      desc: 'There is nothing interesting here - 5',
      onEnter: () => {
        pressEnter('pho-boo6');
      },
      exits: [
        {
          dir: ['left', 'east',],
          id: 'pho-boo6'
        }
      ],
    },
    {
      id: 'pho-boo6',
      name: 'Streets of Manhattan',
      desc: 'There is nothing interesting here - 6',
      onEnter: () => {
        pressEnter('pho-boo7');
      },
      exits: [
        {
          dir: ['left', 'east',],
          id: 'pho-boo7'
        }
      ],
    },
    {
      id: 'pho-boo7',
      name: 'Streets of Manhattan',
      desc: 'There is nothing interesting here - 7',
      onEnter: () => {
        pressEnter('pho-boo8');
      },
      exits: [
        {
          dir: ['left', 'east',],
          id: 'pho-boo8'
        }
      ],
    },
    {
      id: 'pho-boo8',
      name: 'Streets of Manhattan',
      desc: 'There is nothing interesting here - 8',
      onEnter: () => {
        pressEnter('pho-boo9');
      },
      exits: [
        {
          dir: ['left', 'east',],
          id: 'pho-boo9'
        }
      ],
    },
    {
      id: 'pho-boo9',
      name: 'Streets of Manhattan',
      desc: 'There is nothing interesting here - 9',
      onEnter: () => {
        pressEnter('pho-boo10');
      },
      exits: [
        {
          dir: ['left', 'east',],
          id: 'pho-boo10'
        }
      ],
    },
    {
      id: 'pho-boo10',
      name: 'Streets of Manhattan',
      desc: 'There is nothing interesting here - 10',
      
      exits: [
        {
          dir: ['left', 'east',],
          id: 'pho-boo'
        }
      ],
    },
    {
      id: 'pho-boo1',
      name: 'Phone Booth',
      desc: 'Please dial a number',
      isPhoneBooth: true,
      
      exits: [
        {
          dir: ['leave'],
          id: 'pho-boo2'
        }
      ],
    },
  ]
};

