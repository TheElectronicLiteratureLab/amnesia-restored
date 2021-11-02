const luncheonette = { // Luncheonette Room
  roomId: 'lunch-intro', // Set this to the ID of the room you want the player to start in.
  rooms: [
    {
      id: 'lunch-intro', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'Luncheonette', // Displayed each time the player enters the room.
      desc: `The interior of the restuarant is decorated in stylish marble-patterened formica. A counter with stools is decorated with condiment containers containing sugar and milk. Behind the counter is a stainless steel coffee maker and towers of blue paper cups with drawings of the Parthenon. \n
        Small square napkins stand erect in a spring-loaded dispenser. At the moment you are the only customer.`,
      onEnter: () => 
        {
        pressEnter('lunch-buyscreen');
        },
    },
    {
      id: 'lunch-buyscreen', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'Luncheonette', // Displayed each time the player enters the room.
      desc: `You sit down at the counter and look at the menu\n
      TUNA              $2.75\n
      HAM               $2.75\n
      TEA               $0.45\n
      COFFEE            $0.85\n
      BURGER            $1.95\n
      The counterman asks you 'What can I get for you buddy?`,
      onEnter: () => 
      {
        reenableInput();
      },
      onBlock: () => 
      {
        let orderTotal = 0;

        if(prevInput === ['tuna']){
          orderTotal + 2.75;
          println('One charlie is ready to go. \n Anything else?');
          
        }else if(prevInput ===['ham']){
          orderTotal + 2.75;
          println('One kosher special coming right up. \n Anything else?');
          
        }else if(prevInput ===['tea']){
          orderTotal + 0.45;
          println('One tea is on its way. \n Anything else?');
          
        }else if(prevInput ===['pepsi']){
          orderTotal + 0.85;
          println('One pepsi is on its way. \n Anything else?');
          
        }else if(prevInput ===['burger']){
          orderTotal + 0.85;
          println('One hamburger is ready to go. \n Anything else?');
          
        }
      },
    },
    ],
}
