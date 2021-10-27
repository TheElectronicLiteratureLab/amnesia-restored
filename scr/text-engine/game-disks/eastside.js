const eastside = {
    roomId: 'cent-s5', // Starting the node with Central Park S. and 5th Ave.
    rooms: [
    {
        id: 'cent-s5', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
        name: 'Central Park S. and 5th Ave', // Displayed each time the player enters the room.
        desc: `There is a subway entrance at this corner.`, // SUBWAY ENTERANCE
        isStreet: true,
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '60-5'
            },
            {
                dir: ['e', 'east'],
                id: '59-madi'
            },
            {
                dir: ['w', 'west'],
                id: '59-amer'     // Somehwere in Central Park, depending on how central park is mapped will be up to change
            },
            {
                dir: ['s', 'south'],
                id: '58-5'
            },
            {
                dir: ['subway', 'entrance'],
                id: 'cent-s5-subway-ent'
            },
        ],
    },
        {
        id: '60-5',
        name: 'E. 60th and 5th Ave',
        desc: ``,
        isStreet: true,
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '61-5'
            },
            {
                dir: ['e', 'east'],
                id: '60-madi'
            },
            {
                dir: ['w', 'west'],
                id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change... but north more.
            },
            {
                dir: ['s', 'south'],
                id: 'cent-s-5'
            },
            
        ],
      
        },
        {
            id: '61-5',
            name: 'E. 61st and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '62-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '61-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '63-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '62-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '64-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '63-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '65-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '64-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '66-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '65-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '67-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '66-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '68-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '67-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '69-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '68-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '70-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '69-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '71-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '70-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '72-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '71-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '73-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '72-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '74-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '73-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '75-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '74-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '76-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '75-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '76-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '76-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '78-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '77-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '79-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '78-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '80-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '79-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '81-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '80-madi'
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
            isStreet: true,
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
                    id: '81-madi'
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
            isStreet: true,
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '83-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '82-madi'
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
            isStreet: true,
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '84-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '83-madi'
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
            isStreet: true,
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '85-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '84-madi'
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
            isStreet: true,
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '86-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '85-madi'
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
            isStreet: true,
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '87-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '86-madi'
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
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '88-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '87-madi'
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
            isStreet: true,
            onEnter: () =>{
                reenableInput();
            }, 
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '89-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '88-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '87-5'
                },
                {
                    dir: ['inside', 'museum'], // ONLY OPEN DURING MUSEUM HOURS, AND DAYS THAT ARE NOT SUNDAY
                    id: 'gug-mus',
                    block:'The museum is closed on Sundays'
                },
            ],
        },
        {
            id: 'gug-mus', // Inside the Gugenhiem Museum, brief interaction
            name: 'Museum',
            desc: `You enter the museum, and spend a pleasant hour enjoying the exhibits on display.\n When you've seen enough of the display, you leave`,
            onEnter: () => {
                pressEnter('88-5');
            },
        },
        {
            id: '89-5',
            name: 'E.89th and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '90-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '89-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '88-5'
                },
            ],
        },
        {
            id: '90-5',
            name: 'E.90th and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '91-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '90-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '89-5'
                },
            ],
        },
        {
            id: '91-5',
            name: 'E.91st and 5th Ave',
            desc: `Accustomed to the towering, relatively featureless blocks of Manhattan apartment houses, you are startled to see what appears to be a mansion with a generous garden. It's not a private residence, however, but the Cooper-Hewitt Museum.`,
            isStreet: true,
            onEnter: () => {
                reenableInput();
            },
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '92-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '91-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '90-5'
                },
                {
                    dir: ['inside', 'museum'], // ONLY OPEN DURING MUSEUM HOURS, AND DAYS THAT ARE NOT SUNDAY
                    id: 'coo-mus',
                    block:'The museum is closed on Sundays'
                },
            ],
        },
        {
            id: 'coo-mus', // Inside the Cooper-Hewitt Museum, brief interaction
            name: 'Museum',
            desc: `You enter the museum, and spend a pleasant hour enjoying the exhibits on display.\n When you've seen enough of the display, you leave`,
            isStreet: true,
            onEnter: () => {
                pressEnter('91-5');
            },
        },
        {
            id: '92-5',
            name: 'E.92nd and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '93-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '92-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '91-5'
                },
            ],
        },
        {
            id: '93-5',
            name: 'E.93rd and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '94-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '93-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '92-5'
                },
            ],
        },
        {
            id: '94-5',
            name: 'E.94th and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '95-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '94-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '93-5'
                },
            ],
        },
        {
            id: '95-5',
            name: 'E.95th and 5th Ave',
            desc: `There is a luncheonette on the corner.`,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '96-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '95-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '94-5'
                },
                {
                    dir: ['inside', 'luncheonette', 'restaurant'], // Luncheonette enterance on 95th and 5th
                    id: 'lun-95-5'
                },
            ],
        },
        // LUNCHEONETTE GOES HERE * DEPENDING ON HOW WE HANDLE IT
        {
            id: '96-5',
            name: 'E.96th and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '97-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '96-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '95-5'
                },
            ],
        },
        {
            id: '97-5',
            name: 'E.97th and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '98-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '97-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '96-5'
                },
            ],
        },
        {
            id: '98-5',
            name: 'E.98th and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '101-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '98-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '97-5'
                },
            ],
        },
        {
            id: '101-5',
            name: 'E.101st and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '102-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '101-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '98-5'
                },
            ],
        },
        {
            id: '102-5',
            name: 'E.102nd and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '103-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '102-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '101-5'
                },
            ],
        },
        {
            id: '103-5',
            name: 'E.103rd and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '104-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '103-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '102-5'
                },
            ],
        },
        {
            id: '104-5',
            name: 'E.104th and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '105-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '104-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '103-5'
                },
            ],
        },
        {
            id: '105-5',
            name: 'E.105th and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '106-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '105-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '104-5'
                },
            ],
        },
        {
            id: '106-5',
            name: 'E.106th and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '107-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '106-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '105-5'
                },
            ],
        },
        {
            id: '107-5',
            name: 'E.107th and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '108-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '107-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '106-5'
                },
            ],
        },
        {
            id: '108-5',
            name: 'E.108th and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '109-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '108-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '107-5'
                },
            ],
        },
        {
            id: '109-5',
            name: 'E.109th and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '110-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '109-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '108-5'
                },
            ],
        },
        {
            id: '110-5',
            name: 'E.110th and 5th Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '110-5',
                    block: 'North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasit it Horace Greely who said, "Go south, young man"?',
                },
                {
                    dir: ['e', 'east'],
                    id: '110-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '109-5'
                },
            ],
        },
        // madiDISON AVE STREETS
        {
        id: '59-madi', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
        name: 'E. 59th St. and madison Ave', // Displayed each time the player enters the room.
        desc: ``, 
        isStreet: true,
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '60-madi'
            },
            {
                dir: ['e', 'east'],
                id: '59-park'
            },
            {
                dir: ['w', 'west'],
                id: 'cent-s-5'     // Somehwere in Central Park, depending on how central park is mapped will be up to change
            },
            {
                dir: ['s', 'south'],
                id: '58-madi'
            },
        ],
    },
        {
        id: '60-madi',
        name: 'E. 60th and madison Ave',
        desc: ``,
        isStreet: true,
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '61-madi'
            },
            {
                dir: ['e', 'east'],
                id: '60-park'
            },
            {
                dir: ['w', 'west'],
                id: '60-5'     
            },
            {
                dir: ['s', 'south'],
                id: '59-madi'
            },
            
        ],
      
        },
        {
            id: '61-madi',
            name: 'E. 61st and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '62-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '61-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '61-5'    
                },
                {
                    dir: ['s', 'south'],
                    id: '60-madi'
                },
                
            ],
          
        },
        {
            id: '62-madi',
            name: 'E. 62nd and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '63-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '62-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '62-5'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '61-madi'
                },
                
            ],
          
        },
        {
            id: '63-madi',
            name: 'E. 63rd and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '64-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '63-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '63-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '62-madi'
                },
                
            ],
          
        },
        {
            id: '64-madi',
            name: 'E. 64th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '65-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '64-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '64-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '63-madi'
                },
                
            ],
          
        },
        {
            id: '65-madi',
            name: 'E. 65th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '66-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '65-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '65-5'    
                },
                {
                    dir: ['s', 'south'],
                    id: '64-5'
                },
            ],
          
        },
        {
            id: '66-madi',
            name: 'E. 66th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '67-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '66-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '66-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '65-madi'
                },
            ],
          
        },
        {
            id: '67-madi',
            name: 'E. 67th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '68-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '67-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '67-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '66-madi'
                },
            ],
          
        },
        {
            id: '68-madi',
            name: 'E. 68th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '69-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '68-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '68-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '67-madi'
                },
            ],  
        },
        {
            id: '69-madi',
            name: 'E. 69th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '70-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '69-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '69-5'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '68-madi'
                },
            ],
        },
        {
            id: '70-madi',
            name: 'E. 70th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '71-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '70-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '70-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '69-madi'
                },
            ],
        },
        {
            id: '71-madi',
            name: 'E. 71st and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '72-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '71-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '71-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '70-madi'
                },
            ],
        },
        {
            id: '72-madi',
            name: 'E. 72nd and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '73-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '72-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '72-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '71-madi'
                },
            ],
        },
        {
            id: '73-madi',
            name: 'E. 73rd and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '74-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '73-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '73-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '72-madi'
                },
            ],
        },
        {
            id: '74-madi', // Museum Spot
            name: 'E. 74th and madison Ave',
            desc: `You don't even notice that you've come to the Whitney Museum till you've come to the moat, where the sidewalk looks down to the basement sculpture garden, where a boy and a girl have taken some time off from modern art to make love unseen by anyone but you.`,
            isStreet: true,
            onEnter: () => {
                reenableInput();
            },
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '75-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '74-madi'
                },
                {
                    dir: ['w', 'west'],
                    id: 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '73-5'
                },
                {
                    dir: ['inside', 'museum'],
                    id: 'whit-mus',
                    block: `The museum is closed on Sundays.` // Add time block.ext removal later
                },
            ],
        },
        {
            id: `whit-mus`, // Whitney Museum
            name: 'Whitney Museum',
            desc: `You enter the museum, and spend a pleasant hour enjoying the exhibits on display. 
            When you've seen enough of the display, you leave.`,
            onEnter: () => {
                pressEnter('74-madi');
            },
        },
        {
            id: '75-madi',
            name: 'E. 75th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '76-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '75-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '75-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '74-madi'
                },
            ],
        },
        {
            id: '76-madi',
            name: 'E. 76th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '76-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '76-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '76-5'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id: '75-madi'
                },
            ],
        },
        {
            id: '77-madi',
            name: 'E. 77th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '78-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '77-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '77-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '76-madi'
                },
            ],
        },
        {
            id: '78-madi',
            name: 'E. 78th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '79-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '78-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '78-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '77-madi'
                },
            ],
        },
        {
            id: '79-madi',
            name: 'E. 79th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '80-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '79-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '79-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '78-madi'
                },
            ],
        },
        {
            id: '80-madi',
            name: 'E. 80th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '81-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '80-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '80-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '79-madi'
                },
            ],
        },
        {
            id: '81-madi',
            name: 'E. 81st and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '82-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '81-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '81-5'    
                },
                {
                    dir: ['s', 'south'],
                    id: '80-madi'
                },
            ],
        },
        {
            id: '82-madi',
            name: 'E. 82nd and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '83-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '82-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '82-5'    
                },
                {
                    dir: ['s', 'south'],
                    id: '81-madi'
                },
            ],
        },
        {
            id: '83-madi',
            name: 'E. 83rd and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '84-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '83-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '83-5'    
                },
                {
                    dir: ['s', 'south'],
                    id: '82-madi'
                },
            ],
        },
        {
            id: '84-madi',
            name: 'E. 84th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '85-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '84-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '84-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '83-madi'
                },
            ],
        },
        {
            id: '85-madi',
            name: 'E. 85th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '86-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '85-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '85-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '84-madi'
                },
            ],
        },
        {
            id: '86-madi',
            name: 'E.86th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '87-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '86-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '86-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '85-madi'
                },
            ],
        },
        {
            id: '87-madi',
            name: 'E.87th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '88-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '87-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '87-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '86-madi'
                },
            ],
        },
        {
            id: '88-madi',
            name: 'E.88th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '89-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '88-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '88-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '87-5'
                },
            ],
        },
        {
            id: '89-madi',
            name: 'E.89th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '90-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '89-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '89-5'  
                },
                {
                    dir: ['s', 'south'],
                    id: '88-madi'
                },
            ],
        },
        {
            id: '90-madi',
            name: 'E.90th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '91-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '90-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '90-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '89-madi'
                },
            ],
        },
        {
            id: '91-madi',
            name: 'E.91st and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '92-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '91-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '91-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '90-madi'
                },
            ],
        },
        {
            id: '92-madi',
            name: 'E.92nd and madison Ave',
            desc: ``,
            isStreet: true,    
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '93-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '92-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '92-5'    
                },
                {
                    dir: ['s', 'south'],
                    id: '91-madi'
                },
            ],
        },
        {
            id: '93-madi',
            name: 'E.93rd and madison Ave',
            desc: ``,
            isStreet: true,    
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '94-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '93-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '93-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '92-madi'
                },
            ],
        },
        {
            id: '94-madi',
            name: 'E.94th and madison Ave',
            desc: ``,
            isStreet: true,   
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '95-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '94-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '94-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '93-madi'
                },
            ],
        },
        {
            id: '95-madi',
            name: 'E.95th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '96-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '95-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '95-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '94-madi'
                },
            ],
        },
        {
            id: '96-madi',
            name: 'E.96th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '97-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '96-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '96-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '95-madi'
                },
            ],
        },
        {
            id: '97-madi',
            name: 'E.97th and madison Ave',
            desc: ``,   
            isStreet: true,         
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '98-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '97-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '97-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '96-madi'
                },
            ],
        },
        {
            id: '98-madi',
            name: 'E.98th and madison Ave',
            desc: ``,
            isStreet: true,   
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '101-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '98-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '98-5'    
                },
                {
                    dir: ['s', 'south'],
                    id: '97-madi'
                },
            ],
        },
        {
            id: '101-madi',
            name: 'E.101st and madison Ave',
            desc: ``,
            isStreet: true,        
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '102-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '101-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '101-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '98-madi'
                },
            ],
        },
        {
            id: '102-madi',
            name: 'E.102nd and madison Ave',
            desc: ``,
            isStreet: true,   
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '103-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '102-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '102-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '101-madi'
                },
            ],
        },
        {
            id: '103-madi',
            name: 'E.103rd and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '104-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '103-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '103-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '102-madi'
                },
            ],
        },
        {
            id: '104-madi',
            name: 'E.104th and madison Ave',
            desc: ``, 
            isStreet: true,          
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '105-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '104-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '104-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '103-madi'
                },
            ],
        },
        {
            id: '105-madi',
            name: 'E.105th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '106-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '105-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '105-5'    
                },
                {
                    dir: ['s', 'south'],
                    id: '104-madi'
                },
            ],
        },
        {
            id: '106-madi',
            name: 'E.106th and madison Ave',
            desc: ``,
            isStreet: true,
            exit:
            [
                {
                    dir: ['n', 'north'],
                    id: '107-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '106-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '106-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '105-madi'
                },
            ],
        },
        {
            id: '107-madi',
            name: 'E.107th and madison Ave',
            desc: ``, 
            isStreet: true, 
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '108-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '107-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '107-5'    
                },
                {
                    dir: ['s', 'south'],
                    id: '106-madi'
                },
            ],
        },
        {
            id: '108-madi',
            name: 'E.108th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '109-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '108-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '108-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '107-madi'
                },
            ],
        },
        {
            id: '109-madi',
            name: 'E.109th and madison Ave',
            desc: ``,
            isStreet: true,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '110-madi'
                },
                {
                    dir: ['e', 'east'],
                    id: '109-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '109-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '108-madi'
                },
            ],
        },
        {
            id: '110-madi',
            name: 'E.110th and madison Ave',
            desc: ``, 
            isStreet: true,    
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '110-madi',
                    block: 'North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasit it Horace Greely who said, "Go south, young man"?',
                },
                {
                    dir: ['e', 'east'],
                    id: '110-park'
                },
                {
                    dir: ['w', 'west'],
                    id: '110-5'     
                },
                {
                    dir: ['s', 'south'],
                    id: '109-madi'
                },
            ],
        },
                // PARK AVE STREETS
                {
                    id: '59-park', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
                    name: 'E. 59th St. and Park Ave', // Displayed each time the player enters the room.
                    desc: `There is a restaurant called Nedicks here.`,  
                    isStreet: true,    
                    exit: 
                    [
                        {
                            dir: ['n', 'north'],
                            id: '60-park'
                        },
                        {
                            dir: ['e', 'east'],
                            id: '59-lexi'
                        },
                        {
                            dir: ['w', 'west'],
                            id: '59-madi'    
                        },
                        {
                            dir: ['s', 'south'],
                            id: '58-park'
                        },
                        {
                            dir: ['inside', 'nedicks', 'restaraunt'], // NEDICKS restaraunt
                            id: '59-nedick'
                        },
                    ],
                },
                    {
                    id: '60-Park',
                    name: 'E. 60th and Park Ave',
                    desc: `Bloomingdales!`, // Bloomingdales!
                    isStreet: true,
                    exit: 
                    [
                        {
                            dir: ['n', 'north'],
                            id: '61-park'
                        },
                        {
                            dir: ['e', 'east'],
                            id: '60-lexi'
                        },
                        {
                            dir: ['w', 'west'],
                            id: '60-madi'     
                        },
                        {
                            dir: ['s', 'south'],
                            id: '59-park'
                        },
                        {
                            dir: ['inside', 'bloomingdales'],
                            id: '60-park',
                            block: `There's no point in going there`
                        },
                        
                    ],
                  
                    },
                    {
                        id: '61-park',
                        name: 'E. 61st and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '62-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '61-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '61-madi'    
                            },
                            {
                                dir: ['s', 'south'],
                                id: '60-park'
                            },
                            
                        ],
                      
                    },
                    {
                        id: '62-park',
                        name: 'E. 62nd and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '63-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '62-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '62-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '61-park'
                            },
                            
                        ],
                      
                    },
                    {
                        id: '63-park',
                        name: 'E. 63rd and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '64-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '63-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '63-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '62-park'
                            },
                            
                        ],
                      
                    },
                    {
                        id: '64-park',
                        name: 'E. 64th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '65-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '64-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '64-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '63-park'
                            },
                            
                        ],
                      
                    },
                    {
                        id: '65-park',
                        name: 'E. 65th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '66-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '65-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '65-madi'    
                            },
                            {
                                dir: ['s', 'south'],
                                id: '64-park'
                            },
                        ],
                      
                    },
                    {
                        id: '66-park',
                        name: 'E. 66th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '67-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '66-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '66-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '65-park'
                            },
                        ],
                      
                    },
                    {
                        id: '67-park',
                        name: 'E. 67th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '68-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '67-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '67-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '66-park'
                            },
                        ],
                      
                    },
                    {
                        id: '68-park',
                        name: 'E. 68th and Park Ave',
                        desc: `The Union Club's grey and white exterior suggests its age.`, // Union Club
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '69-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '68-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '68-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '67-park'
                            },
                            {
                                dir: ['inside', 'union'], // two word arguement situation, if the player types go to union club
                                id: '68-park',
                                block: `There's no point in going there`
                            },
                        ],  
                    },
                    {
                        id: '69-park',
                        name: 'E. 69th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '70-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '69-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '69-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '68-park'
                            },
                        ],
                    },
                    {
                        id: '70-park',
                        name: 'E. 70th and Park Ave',
                        desc: `If it rested on its side, this building might be the steps to a giant's doorstep: standing as it is, the modern-looking structure of the Asia House.`,
                        isStreet: true,
                        onEnter: () =>{
                            reenableInput();
                        },
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '71-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '70-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '70-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '69-park'
                            },
                            {
                                dir: ['inside', 'asia', 'house'], // two word arguement situation, if the player types asia house
                                id: 'asia-mus',
                                block: 'The museum is closed on Sundays'
                            },
                        ],
                    },
                    {
                        id: `asia-mus`,
                        name: `Asia House`,
                        desc: `You enter the museum, and spend a plasant hour enjoying the exhibits on display. \n When you've seen enough of the display, you leave.`,
                        onEnter: () =>{
                            pressEnter('70-park');
                        },
                    },
                    {
                        id: '71-park',
                        name: 'E. 71st and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '72-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '71-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '71-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '70-park'
                            },
                        ],
                    },
                    {
                        id: '72-park',
                        name: 'E. 72nd and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '73-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '72-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '72-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '71-park'
                            },
                        ],
                    },
                    {
                        id: '73-park',
                        name: 'E. 73rd and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '74-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '73-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '73-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '72-park'
                            },
                        ],
                    },
                    {
                        id: '74-park', 
                        name: 'E. 74th and madison Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '75-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '74-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '74-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '73-park'
                            },
                        ],
                    },
                    {
                        id: '75-park',
                        name: 'E. 75th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '76-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '75-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '75-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '74-park'
                            },
                        ],
                    },
                    {
                        id: '76-park',
                        name: 'E. 76th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '76-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '76-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '76-madi'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                            },
                            {
                                dir: ['s', 'south'],
                                id: '75-park'
                            },
                        ],
                    },
                    {
                        id: '77-park',
                        name: 'E. 77th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '78-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '77-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '77-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '76-park'
                            },
                        ],
                    },
                    {
                        id: '78-park',
                        name: 'E. 78th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '79-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '78-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '78-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '77-park'
                            },
                        ],
                    },
                    {
                        id: '79-park',
                        name: 'E. 79th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '80-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '79-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '79-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '78-park'
                            },
                        ],
                    },
                    {
                        id: '80-park',
                        name: 'E. 80th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '81-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '80-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '80-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '79-park'
                            },
                        ],
                    },
                    {
                        id: '81-park',
                        name: 'E. 81st and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '82-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '81-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '81-madi'    
                            },
                            {
                                dir: ['s', 'south'],
                                id: '80-park'
                            },
                        ],
                    },
                    {
                        id: '82-park',
                        name: 'E. 82nd and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '83-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '82-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '82-madi'    
                            },
                            {
                                dir: ['s', 'south'],
                                id: '81-park'
                            },
                        ],
                    },
                    {
                        id: '83-park',
                        name: 'E. 83rd and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '84-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '83-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '83-madi'    
                            },
                            {
                                dir: ['s', 'south'],
                                id: '82-park'
                            },
                        ],
                    },
                    {
                        id: '84-park',
                        name: 'E. 84th and Park Ave',
                        desc: ``,  
                        isStreet: true,        
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '85-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '84-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '84-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '83-park'
                            },
                        ],
                    },
                    {
                        id: '85-madi',
                        name: 'E. 85th and Park Ave',
                        desc: ``,     
                        isStreet: true, 
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '86-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '85-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '85-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '84-park'
                            },
                        ],
                    },
                    {
                        id: '86-park',
                        name: 'E.86th and Park Ave',
                        desc: ``,   
                        isStreet: true,                 
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '87-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '86-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '86-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '85-park'
                            },
                        ],
                    },
                    {
                        id: '87-park',
                        name: 'E.87th and Park Ave',
                        desc: ``,   
                        isStreet: true,          
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '88-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '87-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '87-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '86-park'
                            },
                        ],
                    },
                    {
                        id: '88-park',
                        name: 'E.88th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '89-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '88-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '88-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '87-park'
                            },
                        ],
                    },
                    {
                        id: '89-park',
                        name: 'E.89th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '90-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '89-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '89-madi'  
                            },
                            {
                                dir: ['s', 'south'],
                                id: '88-park'
                            },
                        ],
                    },
                    {
                        id: '90-park',
                        name: 'E.90th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '91-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '90-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '90-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '89-park'
                            },
                        ],
                    },
                    {
                        id: '91-park',
                        name: 'E.91st and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '92-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '91-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '91-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '90-park'
                            },
                        ],
                    },
                    {
                        id: '92-park',
                        name: 'E.92nd and Park Ave',
                        desc: ``,  
                        isStreet: true,  
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '93-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '92-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '92-madi'    
                            },
                            {
                                dir: ['s', 'south'],
                                id: '91-park'
                            },
                        ],
                    },
                    {
                        id: '93-park',
                        name: 'E.93rd and Park Ave',
                        desc: ``,  
                        isStreet: true,  
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '94-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '93-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '93-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '92-park'
                            },
                        ],
                    },
                    {
                        id: '94-park',
                        name: 'E.94th and Park Ave',
                        desc: ``,   
                        isStreet: true,    
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '95-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '94-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '94-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '93-park'
                            },
                        ],
                    },
                    {
                        id: '95-park',
                        name: 'E.95th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '96-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '95-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '95-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '94-park'
                            },
                        ],
                    },
                    {
                        id: '96-park',
                        name: 'E.96th and Park Ave',
                        desc: ``,   
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '97-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '96-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '96-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '95-park'
                            },
                        ],
                    },
                    {
                        id: '97-park',
                        name: 'E.97th and Park Ave',
                        desc: ``,  
                        isStreet: true,          
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '98-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '97-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '97-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '96-park'
                            },
                        ],
                    },
                    {
                        id: '98-park',
                        name: 'E.98th and Park Ave',
                        desc: ``, 
                        isStreet: true,  
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '101-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '98-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '98-madi'    
                            },
                            {
                                dir: ['s', 'south'],
                                id: '97-park'
                            },
                        ],
                    },
                    {
                        id: '101-park',
                        name: 'E.101st and Park Ave',
                        desc: ``, 
                        isStreet: true,       
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '102-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '101-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '101-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '98-park'
                            },
                        ],
                    },
                    {
                        id: '102-park',
                        name: 'E.102nd and Park Ave',
                        desc: ``,   
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '103-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '102-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '102-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '101-park'
                            },
                        ],
                    },
                    {
                        id: '103-park',
                        name: 'E.103rd and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '104-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '103-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '103-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '102-park'
                            },
                        ],
                    },
                    {
                        id: '104-park',
                        name: 'E.104th and Park Ave',
                        desc: ``,    
                        isStreet: true,       
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '105-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '104-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '104-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '103-park'
                            },
                        ],
                    },
                    {
                        id: '105-park',
                        name: 'E.105th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '106-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '105-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '105-madi'    
                            },
                            {
                                dir: ['s', 'south'],
                                id: '104-park'
                            },
                        ],
                    },
                    {
                        id: '106-park',
                        name: 'E.106th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit:
                        [
                            {
                                dir: ['n', 'north'],
                                id: '107-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '106-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '106-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '105-park'
                            },
                        ],
                    },
                    {
                        id: '107-park',
                        name: 'E.107th and Park Ave',
                        desc: ``,  
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '108-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '107-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '107-madi'    
                            },
                            {
                                dir: ['s', 'south'],
                                id: '106-park'
                            },
                        ],
                    },
                    {
                        id: '108-park',
                        name: 'E.108th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '109-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '108-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '108-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '107-park'
                            },
                        ],
                    },
                    {
                        id: '109-park',
                        name: 'E.109th and Park Ave',
                        desc: ``,
                        isStreet: true,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '110-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '109-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '109-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '108-park'
                            },
                        ],
                    },
                    {
                        id: '110-park',
                        name: 'E.110th and Park Ave',
                        desc: ``,   
                        isStreet: true,  
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '110-park',
                                block: 'North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasit it Horace Greely who said, "Go south, young man"?',
                            },
                            {
                                dir: ['e', 'east'],
                                id: '110-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '110-madi'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '109-park'
                            },
                        ],
                    },
    ],
},