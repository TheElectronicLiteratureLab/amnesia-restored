const dakota = {
    roomId: '72-cent',
    rooms: [
    {
      id: '72-cent',
      coord: [],
      name: `W. 72nd St. and Central Pk. W.`,
      desc: `You walk into the gate house.
      `,
      onEnter: () => 
      {
        pressEnter('dakota-1');  
      },
    },
    {
      id: 'dakota-1',
      coord: [],
      name: `The Dakota`,
      desc: `'Stop right there,' the guard advises you, as you step into the shadow of the tunnel entrance. 'Visitors have be announced. Who are you here to see?`,
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
      desc: `'And your name?`,
      onBlock: () => 
      {
        if(prevInput === ['hollings'] || ['xavier']){
          enterRoom('dakota-4');
        }else {
          enterRoom('dakota-3');
        }
      },
    },
  ],
}