const nyhistorical = {
    roomId: 'nyhist-1',
    rooms: [
        {
          id: 'nyhist-1', // New York Historical Society entrance
          name: 'N.Y. Historical Society', // Displayed each time the player enters the room.
          desc: `Inside the revolving door there is a desk, where a large sign informs you of the admissions charges:\n
          Welcome to\n
          The\n
          New York\n
          Historical Society\n
          ADMISSION:\n
          \n
          Members                 FREE\n
          Adults                  2.00\n
          Senior Citizens         1.50\n
          Children (12 and Under) 0.75\n`,
          onEnter: () => 
          {
            pressEnter('nyhist-2');
          },
        },
        {
            id: 'nyhist-2', // New York Historical Society entrance
            name: 'N.Y. Historical Society', // Displayed each time the player enters the room.
            desc: `The ticket agent looks inquireingly from the paperback he was reading and says, "Would you like a ticket, sir?`,
            onEnter: () => 
            {
              reenableInput();
            },
            onBlock: () => 
            {
            if(prevInput === "ticket"){ // If player buys a ticket to the historical society
                orderTotal += 2.00;
                enterRoom('nyhist-3');
                console.log("Order Total: " + orderTotal);
             }else if(prevInput === "yes"){
                orderTotal += 2.00;
             }else if(prevInput === "member"){
                enterRoom('nyhist-4');
             }
            },
        },
        {
            id: 'nyhist-3', // New York Historical Society entrance
            name: 'N.Y. Historical Society', // This room is only entered if the player wants to buy a ticket
            desc: ``,
            onEnter: () => 
            {
                const room = getRoom('nyhist-3');
                if(orderTotal <= playMon){
                    playMon - orderTotal;
                    println(`The ticket agent takes your money, and tears a ticket in half, putting it in a box by his side.\n
                    You see a large free-standing bulletin board which shows you the maps of each floor of the museum. There is a special exhibition of 19th century portraits of famous New Yorkers in the first floor galleries to the north and south. Ahead of you to the west is a broad double-staircase mounting to the second floor.`);
                }else{
                  println(`Realizing you do not have enough money, you elect to leave the museum before you attract any official attention.`);
                  pressEnter('nyhist-1');
                }
            },
            exits: 
            [
                { 
                    dir: ['leave'],
                    id : '76-cpkw'
                },
                { 
                    dir: ['north'],
                    id : 'nyhist-1f-1'
                },
                { 
                    dir: ['south'],
                    id : 'nyhist-1f-2'
                },
                { 
                    dir: ['east'],
                    id : '76-cpkw'
                },
                {
                    dir: ['west'],
                    id: 'nyhist-2f-1'
                }
            ],
        },
        {
            id: 'nyhist-4', // New York Historical Society entrance
            name: 'N.Y. Historical Society', // This room is only entered if the player boldly declaires himself a member
            desc: `"I'm sorry," the ticket agent says. "I didn't recognize you at first, Sir. Go right in."\n
            You see a large free-standing bulletin board which shows you the maps of each floor of the museum. There is a special exhibition of 19th century portraits of famous New Yorkers in the first floor galleries to the north and south.`,
            exits: 
            [
                { 
                    dir: ['leave'],
                    id : '76-cpkw'
                },
                { 
                    dir: ['north'],
                    id : 'nyhist-1f-1'
                },
                { 
                    dir: ['south'],
                    id : 'nyhist-1f-2'
                },
                { 
                    dir: ['south'],
                    id : 'nyhist-entrance'
                },
                { 
                    dir: ['east'],
                    id : '76-cpkw'
                },
                {
                    dir: ['west', 'upstairs'],
                    id: 'nyhist-2f-1'
                }
            ],
        },
        {
            id: 'nyhist-entrance', // New York Historical Society entrance
            name: 'N.Y. Historical Society', // This room is only entered if the player returns to the entrance from one of the galleries.
            desc: `You return to the gallery entrance.`,
            exits: 
            [
                { 
                    dir: ['leave'],
                    id : '76-cpkw'
                },
                { 
                    dir: ['north'],
                    id : 'nyhist-1f-1'
                },
                { 
                    dir: ['south'],
                    id : 'nyhist-1f-2'
                },
                { 
                    dir: ['east'],
                    id : '76-cpkw'
                },
                {
                    dir: ['west', 'upstairs'],
                    id: 'nyhist-2f-1'
                }
            ],
        },
        {
            id: 'nyhist-1f-1', // New York Historical Society entrance
            name: 'N.Y. Historical Society', 
            desc: `You enter a gallery hung with many portraits of famous New Yorkers.`,
            onLook: () => {
                const room = getRoom('nyhist-1f-1'); // if they look at the portraits
                room.desc = `Most of the portraits are of long-ago businessmen. They don't seem particularly happy to be assembled here in a public museum with only each other-and you- for company. Surely it was not for this they'd hired the most expensive and dullest painters of their day. You see nothing unusual.`;
            },
            exits: 
            [
                { 
                    dir: ['leave'],
                    id : '76-cpkw'
                },
                { 
                    dir: ['north'],
                    id : 'nyhist-1f-1',
                    block: 'You cannot go that way'
                },
                { 
                    dir: ['south'],
                    id : 'nyhist-1f-2'
                },
                { 
                    dir: ['east'],
                    id : '76-cpkw'
                },
                {
                    dir: ['west'],
                    id: 'nyhist-2f-1'
                }
            ],
        },
        {
            id: 'nyhist-1f-2', // New York Historical Society entrance
            name: 'N.Y. Historical Society', // This room is only entered if the player boldly declaires himself a member
            desc: `You enter a gallery hung with many portraits of famous New Yorkers.`,
            onLook: () => {
                const room = getRoom('nyhist-1f-2');
                room.desc = `Most of these paintings are of women wearing magnificent dresses and hung with several small fortunes in jewelry. Each of them seems to be sizing up the other disdainfully, except for Mrs. Aloysius D. Brouwer, who looks with perfect satisfaction into a full-length mirror. Whistler had her number, and no doubt about it.`;
            },
            exits: 
            [
                { 
                    dir: ['leave'],
                    id : '76-cpkw'
                },
                { 
                    dir: ['north'],
                    id : 'nyhist-1f-1'
                },
                { 
                    dir: ['south'],
                    id : 'nyhist-1f-2',
                    block: 'You cannot go that way.'
                },
                { 
                    dir: ['east'],
                    id : '76-cpkw'
                },
                {
                    dir: ['west'],
                    id: 'nyhist-2f-1'
                }
            ],
        },
        {
            id: 'nyhist-2f-1', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `You mount the staircase, which takes a ninety-degree twist to the left on the way. The second floor library is to the west, and the entrance to the Neustadt collection of Tiffany lamps is to the east. The stairway is behind you, to the south.`,
            onLook: () => {
                const room = getRoom('nyhist-2f-1');
                room.desc = `The second floor library is to the west, and the entrance to the Neustadt collection of Tiffany lamps is to the east. The stairway is behind you, to the south.`;
            },
            exits: 
            [
                { 
                    dir: ['leave'],
                    id : '76-cpkw'
                },
                { 
                    dir: ['north', 'upstairs'],
                    id : 'nyhist-1f-1',
                    block: "You cannot go that way."
                },
                { 
                    dir: ['south'],
                    id : '76-cpkw',
                },
                { 
                    dir: ['east'],
                    id : 'nyhist-alice-1'
                },
                {
                    dir: ['west'],
                    id: 'nyhist-2f-1',
                    block: "The door to the library is locked."
                }
            ],
        },
        {
            id: 'nyhist-alice-1', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `You enter the gallery devoted to the Neustadt Collection of Tiffany lamps.`,
            onEnter: () => {
                pressEnter('nyhist-alice-2');
            },
        },
        {
            id: 'nyhist-alice-2', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `It is a single high-ceilinged hall from which every trace of daylight has been excluded. Each stained glass lamp gives off its own multicolored glow. How can it be that so many lamps, all alight and crowded together, each so intense, don't flood the hall with their radience?\n
            But the darkness here seems to exist quite independently of the light, a force in its own right.`,
            onEnter: () => {
                pressEnter('nyhist-alice-3');
            },
        },
        {
            id: 'nyhist-alice-3', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            hasEntered: false,
            desc: `The lamps are beautiful in the self-evident way that a sunset is beautiful, or a coral reef, or water over rock. Each mortised piece of glass has its own focused loveliness, as a single flower does, or a single jewel. En masse, their effect is indescribable.`,
            onEnter: () => {
                const room = getRoom('nyhist-alice-3');
                if (!room.hasEntered){
                    room.hasEntered = true;
                    pressEnter('nyhist-alice-4');
                }else{
                pressEnter('nyhist-alice-revisted');
                }
            },
        },
        {
            id: 'nyhist-alice-revisted', //If the player already visited the previous room, and therefore already talked with Alice.
            name: 'N.Y. Historical Society', 
            desc: `You begin to feel as you did in the sauna, a giddiness and trembling, a sense of your mind speeding away from your will's control -- and then you faint. The guard seems amused at your susceptibility to the beauty of the Neustadt Collection, but he refrains from making any kind of comment as he helps you downstairs and out to the street.`,
            onEnter: () => {
                pressEnter('76-cpkw');
            },
        },
        {
            id: 'nyhist-alice-4', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            hasEntered: false,
            desc: `You wait for fifteen minutes. Strangely, you don't feel any impatience, for the Tiffany lamps are an endless source of wonder.`,
            onEnter: () => {
                if (qMeridiem = 1 && (yHours === 0 || 1 || 12)){
                    room.hasEntered=true;
                    pressEnter('nyhist-alice-5');
                }
            },
        },
        {
            id: 'nyhist-alice-5', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            hasEntered: false,
            desc: `You begin to feel as you did on entering the sauna, a giddiness and trembling, a sense of your mind speeding away from your will's control with a purpose all on its own. But you don't faint.`,
            onEnter: () => {
                pressEnter('nyhist-alice-5');
            },
        },
    ],
} 