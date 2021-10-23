const eastside = {
    roomId: 'cent-s5', // Starting the node with Central Park S. and 5th Ave.
    rooms: [
    {
        id: 'cent-s5', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
        name: 'Central Park S. and 5th Ave', // Displayed each time the player enters the room.
        desc: `There is a subway entrance at this corner.`, // SUBWAY ENTERANCE
        
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '60-5'
            },
            {
                dir: ['e', 'east'],
                id: '59-mad'
            },
            {
                dir: ['w', 'west'],
                id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change
            },
            {
                dir: ['s', 'south'],
                id: '58-5'
            },
            {
                dir: ['subway', 'entrance'],
                id: 'centS-5-subway-ent'
            },
        ],
    },
        {
        id: '60-5',
        name: 'E. 60th and 5th Ave',
        desc: ``,
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '61-5'
            },
            {
                dir: ['e', 'east'],
                id: '60-mad'
            },
            {
                dir: ['w', 'west'],
                id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change... but north more.
            },
            {
                dir: ['s', 'south'],
                id: 'cent-5'
            },
            
        ],
      
        },
        {
            id: '61-5',
            name: 'E. 61st and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '62-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '61-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '60-5'
                },
                
            ],
          
        },
        {
            id: '62-5',
            name: 'E. 62nd and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '63-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '62-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '61-5'
                },
                
            ],
          
        },
        {
            id: '63-5',
            name: 'E. 63rd and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '64-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '63-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '62-5'
                },
                
            ],
          
        },
        {
            id: '64-5',
            name: 'E. 64th and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '64-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '64-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '63-5'
                },
                
            ],
          
        },
        {
            id: '64-5',
            name: 'E. 64th and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '65-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '64-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '63-5'
                },
                
            ],
          
        },
        {
            id: '65-5',
            name: 'E. 65th and 5th Ave',
            desc: `Here you see the Temple Emanuel. It resembles an elaborately carved chunk of fog, though closer examination shows it to be of grey limestone.`,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '66-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '65-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '64-5'
                },
                {
                    dir: ['inside', 'temple'],
                    id: '64-5',
                    block: `There's no point in going there.`
                },
            ],
          
        },
        {
            id: '66-5',
            name: 'E. 66th and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '67-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '66-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '65-5'
                },
            ],
          
        },
        {
            id: '67-5',
            name: 'E. 67th and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '68-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '67-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '66-5'
                },
            ],
          
        },
        {
            id: '68-5',
            name: 'E. 68th and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '69-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '68-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '67-5'
                },
            ],  
        },
        {
            id: '69-5',
            name: 'E. 69th and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '70-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '69-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '68-5'
                },
            ],
        },
        {
            id: '70-5',
            name: 'E. 70th and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '71-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '70-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '69-5'
                },
            ],
        },
        {
            id: '71-5',
            name: 'E. 71st and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '72-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '71-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '70-5'
                },
            ],
        },
        {
            id: '72-5',
            name: 'E. 72nd and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '73-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '72-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '71-5'
                },
            ],
        },
        {
            id: '73-5',
            name: 'E. 73rd and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '74-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '73-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '72-5'
                },
            ],
        },
        {
            id: '74-5',
            name: 'E. 74th and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '75-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '74-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '73-5'
                },
            ],
        },
        {
            id: '75-5',
            name: 'E. 75th and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '76-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '75-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '74-5'
                },
            ],
        },
        {
            id: '76-5',
            name: 'E. 76th and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '76-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '76-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '75-5'
                },
            ],
        },
        {
            id: '77-5',
            name: 'E. 77th and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '78-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '77-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '76-5'
                },
            ],
        },
        {
            id: '78-5',
            name: 'E. 78th and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '79-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '78-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '77-5'
                },
            ],
        },
        {
            id: '79-5',
            name: 'E. 79th and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '80-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '79-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '78-5'
                },
            ],
        },
        {
            id: '80-5',
            name: 'E. 80th and 5th Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '81-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '80-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '79-5'
                },
            ],
        },
        {
            id: '81-5',
            name: 'E. 81st and 5th Ave',
            desc: `There's the Metropolitan Museum, three long city blocks of Greek-styled marble sheathing a few thousand years of pots, paintings, armor, and assorted gew-gaws.`,
            onEnter: () =>{
                reenableInput();
            },
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '82-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '81-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '80-5'
                },
                {
                    dir: ['inside', 'museum'], // ONLY OPEN DURING MUSEUM HOURS, AND DAYS THAT ARE NOT SUNDAY
                    id: 'met-mus',
                    block:'The museum is closed on Sundays'
                },
            ],
        },
        {
            id: 'met-mus', // Inside the Metropolitan Museum, brief interaction
            name: 'Museum',
            desc: `You enter the museum, and spend a pleasant hour enjoying the exhibits on display.\n When you've seen enough of the display, you leave`,
            onEnter: () => {
                pressEnter('81-5');
            },
            
        },
        {
            id: '82-5',
            name: 'E. 82nd and 5th Ave',
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '83-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '82-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '81-5'
                },
            ],
        },
        {
            id: '83-5',
            name: 'E. 83rd and 5th Ave',
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '84-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '83-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '82-5'
                },
            ],
        },
        {
            id: '84-5',
            name: 'E. 84th and 5th Ave',
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '85-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '84-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '83-5'
                },
            ],
        },
        {
            id: '85-5',
            name: 'E. 85th and 5th Ave',
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '86-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '85-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '84-5'
                },
            ],
        },
        {
            id: '86-5',
            name: 'E.86th and 5th Ave',
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '87-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '86-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '85-5'
                },
            ],
        },
        {
            id: '87-5',
            name: 'E.87th and 5th Ave',
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '88-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '87-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '86-5'
                },
            ],
        },
        {
            id: '88-5',
            name: 'E.88th and 5th Ave',
            desc: `From a distance, the Guggenheim Museum might be a gigantic of modern sculpture -- perhaps some demented artist's version of a thunderstorm. Even up close, its huge spiral is enough to make you dizzy for a moment.`,  
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '89-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '88-mad'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '87-5'
                },
            ],
        },
    ],
},