// This simple game disk can be used as a starting point to create a new adventure.
// Change anything you want, add new rooms, etc.
const testDisk = {
  roomId: 'starting', 
  rooms: [
    {
      isStreets: true,
      coord: [],
      hasSubway: true,
      id: 'starting',
      name: 'W. 54th St, and 5th Ave.',
      desc: `There is a subway entrance at this corner.`,
      exits: [
          {
            dir: ['north'],
            id: '55-5',
          },
          {
            dir: ['south'],
            id: '53-5'
          },
          {
            dir: ['east'],
            id: '54-madi',
          },
          {
            dir: ['west'],
            id: '54-amer'
          }, 
          {
            dir: ['subway'],
            id: '????',
          },
      ]
  },
  {
    isStreets: true,
    coord: [],
    id: '36-3',
    name: 'E. 36th St. and 3rd Ave.',
    desc: ``,
    exits: [
        {
          dir: ['north'],
          id: '37-3',
        },
        {
          dir: ['south'],
          id: '35-3',
        },
        {
          dir: ['east'],
          id: '36-qout',
        },
        {
          dir: ['west'],
          id: '36-lexi',
        },
    ]
},
  ],
  Characters: [
    {
      name: 'Hogan',
      roomId: 'starting',
      topics: [
        {
          id: 'javascript',
          desc: 'Hogan knows javascript fairly well but would rather work in a game development environment'
        },
        {
          id: 'C#',
          desc: 'C# is probably his favorite way to work, Hogan thinks Unity is fun'
        },
        {
          id: ['HTML', 'CSS'],
          desc: 'Hogan would rather jump off a cliff than engage in web development.'
        }
      ]
    },
    {
      name: 'Ahria',
      roomId: 'starting',
      topics: [
        {
          id: 'javascript',
          desc: 'I dont know what Ahria knows about javascript'
        },
        {
          id: 'C#',
          desc: 'I think she likes C# an awful lot'
        },
        {
          id: ['HTML', 'CSS'],
          desc: 'unsure of her feelings on html/css'
        }
      ]
    },
  ] 
};

