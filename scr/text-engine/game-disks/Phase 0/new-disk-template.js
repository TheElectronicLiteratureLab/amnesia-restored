// This simple game disk can be used as a starting point to create a new adventure.
// Change anything you want, add new rooms, etc.
const testDisk = {
  roomId: 'starting', 
  rooms: [
    {

    }
  ],
  Characters: [
    {
      name: 'Hogan',
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

