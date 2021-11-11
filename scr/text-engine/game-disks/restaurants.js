const luncheonette = { // Luncheonette Room
  /*
  FOOD ENERGY TOTALS
  TUNA      28 energy
  HAM       26 energy
  TEA       08 energy
  COFFEE    08 energy
  BURGER    16 energy
  */
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

        if(prevInput === "tuna"){
          orderTotal =+ 2.75;
          energyTotal =+ 28;
          println('One charlie is ready to go. \n Anything else?');
          
        }else if(prevInput ==='ham'){
          orderTotal + 2.75;
          energyTotal + 26;
          println('One kosher special coming right up. \n Anything else?');
          
        }else if(prevInput ==='tea'){
          orderTotal + 0.45;
          energyTotal + 8;
          println('One tea is on its way. \n Anything else?');
          
        }else if(prevInput ==='pepsi'){
          orderTotal + 0.85;
          energyTotal + 8;
          println('One pepsi is on its way. \n Anything else?');
          
        }else if(prevInput ==='burger'){
          orderTotal + 0.85;
          energyTotal + 16;
          println('One hamburger is ready to go. \n Anything else?');
          
        }else if(prevInput ==='leave'){
          enterRoom('lunch-leave')

        }
      },
      exits: 
      [
        {dir: 'no', id: 'lunch-total'},
        {dir: 'leave', id: 'lunch-leave'},
      ]
    },
    {
      id: 'lunch-total', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'Luncheonette', // Displayed each time the player enters the room.
      desc: `The attendant totals up your purchase on the register, and it comes to $${orderTotal}.`,
      onEnter: () => 
        {
          if(orderTotal <= playMon){ // Subtracting
          playMon - orderTotal;
          playHung + energyTotal;
        pressEnter('lunch-payscreen');
          }else{
            pressEnter('lunch-nomon'); // if you have no money
          }
        },
    },
    {
      id: 'lunch-payscreen', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'Luncheonette', // Displayed each time the player enters the room.
      desc: `You hand him the money. After paying the bill, you check to see how much money money you have left. You come up with $${playMon}\n
      \n
      Your order arrives. You quickly consume your order, then you get up and leave the restaurant.`,
      onEnter: () => 
      {
        orderTotal = 0; // Clearing this variable
        energyTotal = 0; // Clearing the variable 
        pressEnter('prevroomid'); // Replace with the last room visited secret formula
      }
    },
    {
      id: 'lunch-leave', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'Luncheonette', // Displayed each time the player enters the room.
      desc: `You leave the restaurant`,
      onEnter: () => 
        {
          orderTotal = 0; // Clearing this variable
          energyTotal = 0; // Clearing the variable 
          pressEnter(prevroomid); // Replace with the last room visited secret formula
        },
    },
    {
      id: 'lunch-nomon', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'Luncheonette', // Displayed each time the player enters the room.
      desc: `Realizing you do not have enough money, you run out of the store and walk hastily down the block to the nearest corner.`,
      onEnter: () => 
        {
          orderTotal = 0; // Clearing this variable
          energyTotal = 0; // Clearing the variable 
          pressEnter(prevroomid); // Replace with the last room visited secret formula
        },
    },
    ],
  }