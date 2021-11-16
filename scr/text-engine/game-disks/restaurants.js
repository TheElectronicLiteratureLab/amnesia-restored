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
      PEPSI             $0.85\n
      BURGER            $1.95\n
      The counterman asks you 'What can I get for you buddy?`,
      onEnter: () => 
      {
        reenableInput();
      },
      onBlock: () => 
      {

        if(prevInput === "tuna"){
          orderTotal += 2.75;
          energyTotal += 28;
          println('One charlie is ready to go. \n Anything else?');
          console.log("Order Total: " + orderTotal);
          console.log("Energy Total: " + energyTotal);
        }else if(prevInput ==='ham'){
          orderTotal += 2.75;
          energyTotal += 26;
          println('One kosher special coming right up. \n Anything else?');
          console.log("Order Total: " + orderTotal);
          console.log("Energy Total: " + energyTotal);
        }else if(prevInput ==='tea'){
          orderTotal += 0.45;
          energyTotal += 8;
          println('One tea is on its way. \n Anything else?');
          console.log("Order Total: " + orderTotal);
          console.log("Energy Total: " + energyTotal);
        }else if(prevInput ==='coffee'){
          orderTotal += 0.45;
          energyTotal += 8;
          println('One coffee is on its way. \n Anything else?');
          console.log("Order Total: " + orderTotal);
          console.log("Energy Total: " + energyTotal);
        }else if(prevInput ==='pepsi'){
          orderTotal += 0.85;
          energyTotal += 8;
          println('One pepsi is on its way. \n Anything else?');
          console.log("Order Total: " + orderTotal);
          console.log("Energy Total: " + energyTotal);
        }else if(prevInput ==='burger'){
          orderTotal += 0.85;
          energyTotal += 16;
          println('One hamburger is ready to go. \n Anything else?');
          console.log("Order Total: " + orderTotal);
          console.log("Energy Total: " + energyTotal);
        }else if(prevInput ==='leave'){
          enterRoom('lunch-leave')
          console.log("Order Total: " + orderTotal);
          console.log("Energy Total: " + energyTotal);
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
      desc: ``,
      onEnter: () => 
        {
          println(formatter.format(orderTotal).toString());
          if(orderTotal <= playMon){ // Subtracting
          playMon -= orderTotal;
          playHung += energyTotal;
          console.log(playMon);
        pressEnter('lunch-payscreen');
          }else{
            pressEnter('lunch-nomon'); // if you have no money
          }
          println(`The attendant totals up your purchase on the register, and it comes to ${formatter.format(orderTotal)}.`);
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
    {
      id: 'nedick-intro', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Nedick's`, // Displayed each time the player enters the room.
      desc: `The interior of the restaurant is decorated in chipped marble-patterned formica. A counter with stools is decorated with condiment containers containing mustard and relish.\n

      Small square napkins stand erect in a spring-loaded dispenser. At the moment you are the only customer expect for a man apparently conversing with a cup of coffee.`,
      onEnter: () => 
        {
        pressEnter('nedick-buyscreen');
        },
    },
    {
      id: 'nedick-buyscreen', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Nedick's`, // Displayed each time the player enters the room.
      desc: `You sit down at the counter and look at the menu on the wall which offers you a choice of:\n
      HOTDOG              $1.40\n
      BURGER              $1.98\n
      TUNA                $2.75\n
      ORANGE              $0.65\n
      COKE                $0.85\n
      COFFEE              $0.45\n
      The counterman asks you 'What can I get for you, Joe?`,
      onEnter: () => 
      {
        reenableInput();
      },
      onBlock: () => 
      {

        if(prevInput === "hotdog"){
          orderTotal + 1.40;
          energyTotal + 28;
          println('One dog is ready to go. \n Anything else?');
          
        }else if(prevInput ==='burger'){
          orderTotal + 1.98;
          energyTotal + 26;
          println('One hamburger coming right up. \n Anything else?');
          
        }else if(prevInput ==='tuna'){
          orderTotal + 2.75;
          energyTotal + 8;
          println('One charlie is on its way. \n Anything else?');
          
        }else if(prevInput ==='orange'){
          orderTotal + 0.65;
          energyTotal + 8;
          println('One bug juice is on its way. \n Anything else?');
          
        }else if(prevInput ==='coffee'){
          orderTotal + 0.45;
          energyTotal + 8;
          println('One java coming right up. \n Anything else?');
          
        }else if(prevInput ==='coke'){
          orderTotal + 0.85;
          energyTotal + 16;
          println('One down is ready to go. \n Anything else?');
          
        }else if(prevInput ==='leave'){
          enterRoom('nedick-leave')

        }
      },
      exits: 
      [
        {dir: 'no', id: 'nedick-total'},
        {dir: 'leave', id: 'nedick-leave'},
      ]
    },
    {
      id: 'nedick-total', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Nedick's`, // Displayed each time the player enters the room.
      desc: `The attendant totals up your purchase on the register, and it comes to $${orderTotal}.`,
      onEnter: () => 
        {
          if(orderTotal <= playMon){ // Subtracting
          playMon - orderTotal;
          playHung + energyTotal;
        pressEnter('nedick-payscreen');
          }else{
            pressEnter('nedick-nomon'); // if you have no money
          }
        },
    },
    {
      id: 'nedick-payscreen', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Nedick's`, // Displayed each time the player enters the room.
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
      id: 'nedick-leave', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Nedick's'`, // Displayed each time the player enters the room.
      desc: `You leave the restaurant`,
      onEnter: () => 
        {
          orderTotal = 0; // Clearing this variable
          energyTotal = 0; // Clearing the variable 
          pressEnter(prevroomid); // Replace with the last room visited secret formula
        },
    },
    {
      id: 'nedick-nomon', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Nedick's`, // Displayed each time the player enters the room.
      desc: `Realizing you do not have enough money, you run out of the store and walk hastily down the block to the nearest corner.`,
      onEnter: () => 
        {
          orderTotal = 0; // Clearing this variable
          energyTotal = 0; // Clearing the variable 
          pressEnter(prevroomid); // Replace with the last room visited secret formula
        },
    },
    {
      id: 'pizza-intro', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Pizzeria`, // Displayed each time the player enters the room.
      desc: `The interior of the restaurant is decorated in chipped pale blue formica. A counter with stools is decorated with condiment containers containing garlic and hot pepper.\n 

      Small square napkins stand erect in a spring-loaded dispenser. At the moment you are the only customer. From the kitchen you hear a woman's voice scolding someone in a voice ruined by years of cigarettes and screaming at kids. From the pauses you deduce that she is talking on the phone.`,
      onEnter: () => 
        {
        pressEnter('pizza-buyscreen');
        },
    },
    {
      id: 'pizza-buyscreen', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Pizzeria`, // Displayed each time the player enters the room.
      desc: `You sit down at the counter and look at the menu on the wall which offers you a choice of:\n
      SLICE               $0.95\n
      CALZONE             $3.50\n
      ROOT BEER           $0.85\n
      COKE                $0.85\n
      7UP                 $0.85\n
      The counterman asks you 'What can I get for you, buddy?`,
      onEnter: () => 
      {
        reenableInput();
      },
      onBlock: () => 
      {

        if(prevInput === "slice"){
          orderTotal + 1.40;
          energyTotal + 28;
          println('One pizza slice is ready to go. \n Anything else?');
          
        }else if(prevInput ==='calzone'){
          orderTotal + 1.98;
          energyTotal + 26;
          println('One calzone coming right up. \n Anything else?');
          
        }else if(prevInput ==='rootbeer'){
          orderTotal + 2.75;
          energyTotal + 8;
          println('One rootbeer is on its way. \n Anything else?');
          
        }else if(prevInput ==='coke'){
          orderTotal + 0.65;
          energyTotal + 8;
          println('One coke is on its way. \n Anything else?');
          
        }else if(prevInput ==='7up'){
          orderTotal + 0.45;
          energyTotal + 8;
          println('One 7UP is on its way. \n Anything else?');
          
        }else if(prevInput ==='leave'){
          enterRoom('pizza-leave')

        }
      },
      exits: 
      [
        {dir: 'no', id: 'pizza-total'},
        {dir: 'leave', id: 'pizza-leave'},
      ]
    },
    {
      id: 'pizza-total', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Pizzeria`, // Displayed each time the player enters the room.
      desc: `The attendant totals up your purchase on the register, and it comes to $${orderTotal}.`,
      onEnter: () => 
        {
          if(orderTotal <= playMon){ // Subtracting
          playMon - orderTotal;
          playHung + energyTotal;
        pressEnter('pizza-payscreen');
          }else{
            pressEnter('pizza-nomon'); // if you have no money
          }
        },
    },
    {
      id: 'pizza-payscreen', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Pizzeria`, // Displayed each time the player enters the room.
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
      id: 'pizza-leave', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Pizzeria`, // Displayed each time the player enters the room.
      desc: `You leave the restaurant`,
      onEnter: () => 
        {
          orderTotal = 0; // Clearing this variable
          energyTotal = 0; // Clearing the variable 
          pressEnter(prevroomid); // Replace with the last room visited secret formula
        },
    },
    {
      id: 'pizza-nomon', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Pizzeria`, // Displayed each time the player enters the room.
      desc: `Realizing you do not have enough money, you run out of the store and walk hastily down the block to the nearest corner.`,
      onEnter: () => 
        {
          orderTotal = 0; // Clearing this variable
          energyTotal = 0; // Clearing the variable 
          pressEnter(prevroomid); // Replace with the last room visited secret formula
        },
    },
    {
      id: 'nuts-intro', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Chock Full O' Nuts`, // Displayed each time the player enters the room.
      desc: `As you enter the restaurant, you overhear a couple who, by their clothing, appear to be extras who have just stepped out of a crowd scene on a rerun of Hawaii 5-0. As they pass you on their way out, the man says "No one can ever say they've seen New York without seeing Times Square. No one should leave..."\n

      The interior of the restaurant is decorated in chipped orange formica. A counter with stools is decorated with condiment containers containing mustard and relish.\n
      
      Small square napkins stand erect in a spring-loaded dispenser. At the moment you are the only customer except for a man apparently conversing with a cup of coffee.`,
      onEnter: () => 
        {
        pressEnter('nuts-buyscreen');
        },
    },
    {
      id: 'nuts-buyscreen', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Chock Full O' Nuts`, // Displayed each time the player enters the room.
      desc: `You sit down at the counter and look at the menu on the wall which offers you a choice of:\n
      FRANKFURTER         $1.40\n
      BURGER              $1.95\n
      CHEESE SAND         $1.00\n
      DONUT               $0.75\N
      COKE                $0.85\n
      COFFEE              $0.45\n
      The counterman asks you 'What can I get for you, buddy?`,
      onEnter: () => 
      {
        reenableInput();
      },
      onBlock: () => 
      {

        if(prevInput === "frankfurter"){
          orderTotal + 1.40;
          energyTotal + 28;
          println('One frank is ready to go. \n Anything else?');
          
        }else if(prevInput ==='burger'){
          orderTotal + 1.95;
          energyTotal + 26;
          println('One burger coming right up. \n Anything else?');
          
        }else if(prevInput ==='cheese'){
          orderTotal + 1.00;
          energyTotal + 8;
          println('One cheese sandwich is on its way. \n Anything else?');
          
        }else if(prevInput ==='coke'){
          orderTotal + 0.85;
          energyTotal + 8;
          println('One coke is on its way. \n Anything else?');
          
        }else if(prevInput ==='donut'){
          orderTotal + 0.75;
          energyTotal + 8;
          println('One donut is on its way. \n Anything else?');
          
        }else if(prevInput ==='coffee'){
          orderTotal + 0.45;
          energyTotal + 8;
          println('One coffee is on its way. \n Anything else?');
          
        }else if(prevInput ==='leave'){
          enterRoom('nuts-leave')

        }
      },
      exits: 
      [
        {dir: 'no', id: 'nuts-total'},
        {dir: 'leave', id: 'nuts-leave'},
      ]
    },
    {
      id: 'nuts-total', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Chock Full O' Nuts`, // Displayed each time the player enters the room.
      desc: `The attendant totals up your purchase on the register, and it comes to $${orderTotal}.`,
      onEnter: () => 
        {
          if(orderTotal <= playMon){ // Subtracting
          playMon - orderTotal;
          playHung + energyTotal;
        pressEnter('nuts-payscreen');
          }else{
            pressEnter('nuts-nomon'); // if you have no money
          }
        },
    },
    {
      id: 'nuts-payscreen', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Chock Full O' Nuts`, // Displayed each time the player enters the room.
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
      id: 'nuts-leave', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Chock Full O' Nuts`, // Displayed each time the player enters the room.
      desc: `You leave the restaurant`,
      onEnter: () => 
        {
          orderTotal = 0; // Clearing this variable
          energyTotal = 0; // Clearing the variable 
          pressEnter(prevroomid); // Replace with the last room visited secret formula
        },
    },
    {
      id: 'nuts-nomon', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Chock Full O' Nuts`, // Displayed each time the player enters the room.
      desc: `Realizing you do not have enough money, you run out of the store and walk hastily down the block to the nearest corner.`,
      onEnter: () => 
        {
          orderTotal = 0; // Clearing this variable
          energyTotal = 0; // Clearing the variable 
          pressEnter(prevroomid); // Replace with the last room visited secret formula
        },
    },
    {
      id: 'gyro-intro', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Greek Gyro`, // Displayed each time the player enters the room.
      desc: `The interior of the restaurant is decorated in stylish marble-patterned formica. A counter with stools is decorated with condiment containers containing salt and pepper. \n
      Small square naplins stand erect in a spring-loaded dispenser. At the moment you are the only customer except for a man and woman involved in an intense argument in a foreign language.`,
      onEnter: () => 
        {
        pressEnter('gyro-buyscreen');
        },
    },
    {
      id: 'nuts-buyscreen', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Greek Gyro`, // Displayed each time the player enters the room.
      desc: `You sit down at the counter and look at the menu on the wall which offers you a choice of:\n
      GYRO                $1.85\n
      SOUVLAKI            $1.95\n
      BAKLAVA             $1.50\n
      PEPSI               $0.85\n
      COFFEE              $0.45\n
      The counterman asks you 'What can I get for you, fella?`,
      onEnter: () => 
      {
        reenableInput();
      },
      onBlock: () => 
      {

        if(prevInput === "gyro"){
          orderTotal + 1.85;
          energyTotal + 21;
          println('One gyro is ready to go. \n Anything else?');
          
        }else if(prevInput ==='souvlaki'){
          orderTotal + 1.95;
          energyTotal + 23;
          println('One souvlaki coming right up. \n Anything else?');
          
        }else if(prevInput ==='baklava'){
          orderTotal + 1.50;
          energyTotal + 11;
          println('One cheese sandwich is on its way. \n Anything else?');
          
        }else if(prevInput ==='pepsi'){
          orderTotal + 0.85;
          energyTotal + 6;
          println('One pepsi is on its way. \n Anything else?');
          
        }else if(prevInput ==='coffee'){
          orderTotal + 0.45;
          energyTotal + 8;
          println('One coffee is on its way. \n Anything else?');
          
        }else if(prevInput ==='leave'){
          enterRoom('gyro-leave')

        }
      },
      exits: 
      [
        {dir: 'no', id: 'gyro-total'},
        {dir: 'leave', id: 'gyro-leave'},
      ]
    },
    {
      id: 'gyro-total', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Greek Gyro`, // Displayed each time the player enters the room.
      desc: `The attendant totals up your purchase on the register, and it comes to $${orderTotal}.`,
      onEnter: () => 
        {
          if(orderTotal <= playMon){ // Subtracting
          playMon - orderTotal;
          playHung + energyTotal;
        pressEnter('gyro-payscreen');
          }else{
            pressEnter('gyro-nomon'); // if you have no money
          }
        },
    },
    {
      id: 'gyro-payscreen', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Greek Gyro`, // Displayed each time the player enters the room.
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
      id: 'gyro-leave', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Greek Gyro`, // Displayed each time the player enters the room.
      desc: `You leave the restaurant without waiting for the food you have ordered. The greasy spoon motif of this place must not appeal to you.`,
      onEnter: () => 
        {
          orderTotal = 0; // Clearing this variable
          energyTotal = 0; // Clearing the variable 
          pressEnter(prevroomid); // Replace with the last room visited secret formula
        },
    },
    {
      id: 'gyro-nomon', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: `Greek Gyro`, // Displayed each time the player enters the room.
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