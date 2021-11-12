const dakota = {
    roomId: '72-cent',
    rooms: [
    {
      id: '72-cent',
      coord: [],
      name: `W. 72nd St. and Central Pk. W.`,
      desc: `You walk into the gate house.`,
      onEnter: () => 
      {
        pressEnter('dakota-1');  
      },
    },
    {
      id: 'dakota-1',
      coord: [],
      name: `The Dakota`,
      desc: `"Stop right there," the guard advises you, as you step into the shadow of the tunnel entrance. "Visitors have be announced. Who are you here to see?"`,
      onEnter: () => 
      {
        reenableInput();  
      },
      onBlock: () => 
      {
        if(prevInput === ['colby']){
          enterRoom('dakota-2');
        }else {
          enterRoom('dakota-3');
        }
      },
    },
    {
      id: 'dakota-2',
      coord: [],
      name: `The Dakota`,
      desc: `"And your name?"`,
      onBlock: () => 
      {
        if(prevInput === ['hollings'] || ['xavier']){
          enterRoom('dakota-5');
        }else {
          enterRoom('dakota-4');
        }
      },
    },
    {
      id: 'dakota-3', // If you say any name other than Colby
      coord: [],
      name: `The Dakota`,
      desc: `"Sorry, there is no one here by that name, and I would suggest that you leave." With this the guard retires into a kind of sentry box and begins speaking into a telephone, glancing at you from time to time.`,
      onEnter: () => 
      {
        reenableInput();  
      },
      exits: [
        {dir: ['leave'], id: 'dakota-4'}
        ],
    },
    {
      id: 'dakota-4', // Leading to Death and Texas
      coord: [],
      name: `The Dakota`,
      desc: `The guard picks up a newspaper and ignores you. As you stand there, feeling resentful and frustrated, you feel a tap on your shoulder. You turn around to confront two policemen\n

      'We'd like to see some identification,' says the younger policeman.`,
      onEnter: () => 
      {
        pressEnter('dakota-5');  
      },
    },
    {
      id: 'dakota-5', // Leading to Death and Texas
      coord: [],
      name: `The Dakota`,
      desc: `Before you can invent an excuse, the older policeman smiles. 'No need for ID. I recognize him. This is Xavier Hollings. Am I right, Mr. Hollings?'
      `,
      onEnter: () => 
      {
        pressEnter('dakota-6');  
      },
    },
    {
      id: 'dakota-6', // Leading to Death and Texas
      coord: [],
      name: `The Dakota`,
      desc: `Before you can invent an excuse, the older policeman smiles. 'No need for ID. I recognize him. This is Xavier Hollings. Am I right, Mr. Hollings?'
      `,
      onEnter: () => 
      {
        pressEnter('dakota-5');  
      },
    },
  ],
}