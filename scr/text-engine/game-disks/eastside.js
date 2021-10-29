const eastside = {
    roomId: 'cent-s5',   // Starting the node with Central Park S. and 5th Ave.
    rooms : [
    {
        id       : 'cent-s5',                                      // Unique identifier for this room. Entering a room will set the disk's roomId to this.
        name     : 'Central Park S. and 5th Ave',                  // Displayed each time the player enters the room.
        cord     : [],
        desc     : `There is a subway entrance at this corner.`,   // SUBWAY ENTERANCE
        hasSubway: true,
        isStreet : true,
        exit     : 
        [
            {
                dir: ['n', 'north'],
                id : '60-5'
            },
            {
                dir: ['e', 'east'],
                id : '59-madi'
            },
            {
                dir: ['w', 'west'],
                id : '59-amer'       // Somehwere in Central Park, depending on how central park is mapped will be up to change
            },
            {
                dir: ['s', 'south'],
                id : '58-5'
            },
        ],
    },
        {
        id      : '60-5',
        name    : 'E. 60th and 5th Ave',
        cord    : [],
        desc    : ``,
        isStreet: true,
        exit    : 
        [
            {
                dir: ['n', 'north'],
                id : '61-5'
            },
            {
                dir: ['e', 'east'],
                id : '60-madi'
            },
            {
                dir: ['w', 'west'],
                id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change... but north more.
            },
            {
                dir: ['s', 'south'],
                id : 'cent-s-5'
            },
            
        ],
      
        },
        {
            id      : '61-5',
            name    : 'E. 61st and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '62-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '61-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '60-5'
                },
                
            ],
          
        },
        {
            id      : '62-5',
            name    : 'E. 62nd and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '63-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '62-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '61-5'
                },
                
            ],
          
        },
        {
            id      : '63-5',
            name    : 'E. 63rd and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '64-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '63-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '62-5'
                },
                
            ],
          
        },
        {
            id      : '64-5',
            name    : 'E. 64th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '65-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '64-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '63-5'
                },
                
            ],
          
        },
        {
            id      : '65-5',
            name    : 'E. 65th and 5th Ave',
            cord    : [],
            desc    : `Here you see the Temple Emanuel. It resembles an elaborately carved chunk of fog, though closer examination shows it to be of grey limestone.`,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '66-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '65-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '64-5'
                },
                {
                    dir  : ['inside', 'temple'],
                    id   : '64-5',
                    block: `There's no point in going there.`
                },
            ],
          
        },
        {
            id      : '66-5',
            name    : 'E. 66th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '67-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '66-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '65-5'
                },
            ],
          
        },
        {
            id      : '67-5',
            name    : 'E. 67th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '68-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '67-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '66-5'
                },
            ],
          
        },
        {
            id      : '68-5',
            name    : 'E. 68th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '69-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '68-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '67-5'
                },
            ],  
        },
        {
            id      : '69-5',
            name    : 'E. 69th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '70-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '69-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '68-5'
                },
            ],
        },
        {
            id      : '70-5',
            name    : 'E. 70th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '71-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '70-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '69-5'
                },
            ],
        },
        {
            id      : '71-5',
            name    : 'E. 71st and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '72-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '71-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '70-5'
                },
            ],
        },
        {
            id      : '72-5',
            name    : 'E. 72nd and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '73-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '72-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '71-5'
                },
            ],
        },
        {
            id      : '73-5',
            name    : 'E. 73rd and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '74-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '73-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '72-5'
                },
            ],
        },
        {
            id      : '74-5',
            name    : 'E. 74th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '75-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '74-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '73-5'
                },
            ],
        },
        {
            id      : '75-5',
            name    : 'E. 75th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '76-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '75-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '74-5'
                },
            ],
        },
        {
            id      : '76-5',
            name    : 'E. 76th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '76-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '76-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '75-5'
                },
            ],
        },
        {
            id      : '77-5',
            name    : 'E. 77th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '78-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '77-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '76-5'
                },
            ],
        },
        {
            id      : '78-5',
            name    : 'E. 78th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '79-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '78-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '77-5'
                },
            ],
        },
        {
            id      : '79-5',
            name    : 'E. 79th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '80-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '79-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '78-5'
                },
            ],
        },
        {
            id      : '80-5',
            name    : 'E. 80th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '81-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '80-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '79-5'
                },
            ],
        },
        {
            id      : '81-5',
            name    : 'E. 81st and 5th Ave',
            cord    : [],
            desc    : `There's the Metropolitan Museum, three long city blocks of Greek-styled marble sheathing a few thousand years of pots, paintings, armor, and assorted gew-gaws.`,
            isStreet: true,
            onEnter : () =>{
                reenableInput();
            },
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id : '82-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '81-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '80-5'
                },
                {
                    dir  : ['inside', 'museum'],              // ONLY OPEN DURING MUSEUM HOURS, AND DAYS THAT ARE NOT SUNDAY
                    id   : 'met-mus',
                    block: 'The museum is closed on Sundays'
                },
            ],
        },
        {
            id     : 'met-mus',                                                                                                                                 // Inside the Metropolitan Museum, brief interaction
            name   : 'Museum',
            cord   : [],
            desc   : `You enter the museum, and spend a pleasant hour enjoying the exhibits on display.\n When you've seen enough of the display, you leave`,
            onEnter: () => {
                pressEnter('81-5');
            },
            
        },
        {
            id      : '82-5',
            name    : 'E. 82nd and 5th Ave',
            isStreet: true,
            cord    : [],
            desc    : ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id : '83-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '82-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '81-5'
                },
            ],
        },
        {
            id      : '83-5',
            name    : 'E. 83rd and 5th Ave',
            isStreet: true,
            cord    : [],
            desc    : ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id : '84-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '83-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '82-5'
                },
            ],
        },
        {
            id      : '84-5',
            name    : 'E. 84th and 5th Ave',
            isStreet: true,
            cord    : [],
            desc    : ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id : '85-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '84-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '83-5'
                },
            ],
        },
        {
            id      : '85-5',
            name    : 'E. 85th and 5th Ave',
            isStreet: true,
            cord    : [],
            desc    : ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id : '86-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '85-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '84-5'
                },
            ],
        },
        {
            id      : '86-5',
            name    : 'E.86th and 5th Ave',
            isStreet: true,
            cord    : [],
            desc    : ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id : '87-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '86-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '85-5'
                },
            ],
        },
        {
            id      : '87-5',
            name    : 'E.87th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '88-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '87-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '86-5'
                },
            ],
        },
        {
            id      : '88-5',
            name    : 'E.88th and 5th Ave',
            cord    : [],
            desc    : `From a distance, the Guggenheim Museum might be a gigantic of modern sculpture -- perhaps some demented artist's version of a thunderstorm. Even up close, its huge spiral is enough to make you dizzy for a moment.`,
            isStreet: true,
            onEnter : () =>{
                reenableInput();
            }, 
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id : '89-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '88-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '87-5'
                },
                {
                    dir  : ['inside', 'museum'],              // ONLY OPEN DURING MUSEUM HOURS, AND DAYS THAT ARE NOT SUNDAY
                    id   : 'gug-mus',
                    block: 'The museum is closed on Sundays'
                },
            ],
        },
        {
            id     : 'gug-mus',                                                                                                                                 // Inside the Gugenhiem Museum, brief interaction
            name   : 'Museum',
            cord   : [],
            desc   : `You enter the museum, and spend a pleasant hour enjoying the exhibits on display.\n When you've seen enough of the display, you leave`,
            onEnter: () => {
                pressEnter('88-5');
            },
        },
        {
            id      : '89-5',
            name    : 'E.89th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '90-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '89-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '88-5'
                },
            ],
        },
        {
            id      : '90-5',
            name    : 'E.90th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '91-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '90-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '89-5'
                },
            ],
        },
        {
            id      : '91-5',
            name    : 'E.91st and 5th Ave',
            cord    : [],
            desc    : `Accustomed to the towering, relatively featureless blocks of Manhattan apartment houses, you are startled to see what appears to be a mansion with a generous garden. It's not a private residence, however, but the Cooper-Hewitt Museum.`,
            isStreet: true,
            onEnter : () => {
                reenableInput();
            },
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id : '92-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '91-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '90-5'
                },
                {
                    dir  : ['inside', 'museum'],              // ONLY OPEN DURING MUSEUM HOURS, AND DAYS THAT ARE NOT SUNDAY
                    id   : 'coo-mus',
                    block: 'The museum is closed on Sundays'
                },
            ],
        },
        {
            id      : 'coo-mus',                                                                                                                                 // Inside the Cooper-Hewitt Museum, brief interaction
            name    : 'Museum',
            cord    : [],
            desc    : `You enter the museum, and spend a pleasant hour enjoying the exhibits on display.\n When you've seen enough of the display, you leave`,
            isStreet: true,
            onEnter : () => {
                pressEnter('91-5');
            },
        },
        {
            id      : '92-5',
            name    : 'E.92nd and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '93-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '92-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '91-5'
                },
            ],
        },
        {
            id      : '93-5',
            name    : 'E.93rd and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '94-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '93-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '92-5'
                },
            ],
        },
        {
            id      : '94-5',
            name    : 'E.94th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '95-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '94-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '93-5'
                },
            ],
        },
        {
            id      : '95-5',
            name    : 'E.95th and 5th Ave',
            cord    : [],
            desc    : `There is a luncheonette on the corner.`,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '96-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '95-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '94-5'
                },
                {
                    dir: ['inside', 'luncheonette', 'restaurant'],   // Luncheonette enterance on 95th and 5th
                    id : 'lun-95-5'
                },
            ],
        },
        // LUNCHEONETTE GOES HERE * DEPENDING ON HOW WE HANDLE IT
        {
            id      : '96-5',
            name    : 'E.96th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '97-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '96-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '95-5'
                },
            ],
        },
        {
            id      : '97-5',
            name    : 'E.97th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '98-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '97-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '96-5'
                },
            ],
        },
        {
            id      : '98-5',
            name    : 'E.98th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '101-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '98-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '97-5'
                },
            ],
        },
        {
            id      : '101-5',
            name    : 'E.101st and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '102-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '101-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '98-5'
                },
            ],
        },
        {
            id      : '102-5',
            name    : 'E.102nd and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '103-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '102-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '101-5'
                },
            ],
        },
        {
            id      : '103-5',
            name    : 'E.103rd and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '104-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '103-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '102-5'
                },
            ],
        },
        {
            id      : '104-5',
            name    : 'E.104th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '105-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '104-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '103-5'
                },
            ],
        },
        {
            id      : '105-5',
            name    : 'E.105th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '106-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '105-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '104-5'
                },
            ],
        },
        {
            id      : '106-5',
            name    : 'E.106th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '107-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '106-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '105-5'
                },
            ],
        },
        {
            id      : '107-5',
            name    : 'E.107th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '108-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '107-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '106-5'
                },
            ],
        },
        {
            id      : '108-5',
            name    : 'E.108th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '109-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '108-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '107-5'
                },
            ],
        },
        {
            id      : '109-5',
            name    : 'E.109th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '110-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '109-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '108-5'
                },
            ],
        },
        {
            id      : '110-5',
            name    : 'E.110th and 5th Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir  : ['n', 'north'],
                    id   : '110-5',
                    block: 'North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasit it Horace Greely who said, "Go south, young man"?',
                },
                {
                    dir: ['e', 'east'],
                    id : '110-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '109-5'
                },
            ],
        },
        // madiDISON AVE STREETS
        {
        id      : '59-madi',                       // Unique identifier for this room. Entering a room will set the disk's roomId to this.
        name    : 'E. 59th St. and madison Ave',   // Displayed each time the player enters the room.
        cord    : [],
        desc    : ``,
        isStreet: true,
        exit    : 
        [
            {
                dir: ['n', 'north'],
                id : '60-madi'
            },
            {
                dir: ['e', 'east'],
                id : '59-park'
            },
            {
                dir: ['w', 'west'],
                id : 'cent-s-5'      // Somehwere in Central Park, depending on how central park is mapped will be up to change
            },
            {
                dir: ['s', 'south'],
                id : '58-madi'
            },
        ],
    },
        {
        id      : '60-madi',
        name    : 'E. 60th and madison Ave',
        cord    : [],
        desc    : ``,
        isStreet: true,
        exit    : 
        [
            {
                dir: ['n', 'north'],
                id : '61-madi'
            },
            {
                dir: ['e', 'east'],
                id : '60-park'
            },
            {
                dir: ['w', 'west'],
                id : '60-5'
            },
            {
                dir: ['s', 'south'],
                id : '59-madi'
            },
            
        ],
      
        },
        {
            id      : '61-madi',
            name    : 'E. 61st and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '62-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '61-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '61-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '60-madi'
                },
                
            ],
          
        },
        {
            id      : '62-madi',
            name    : 'E. 62nd and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '63-5'
                },
                {
                    dir: ['e', 'east'],
                    id : '62-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '62-5'          // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '61-madi'
                },
                
            ],
          
        },
        {
            id      : '63-madi',
            name    : 'E. 63rd and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '64-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '63-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '63-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '62-madi'
                },
                
            ],
          
        },
        {
            id      : '64-madi',
            name    : 'E. 64th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '65-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '64-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '64-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '63-madi'
                },
                
            ],
          
        },
        {
            id      : '65-madi',
            name    : 'E. 65th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '66-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '65-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '65-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '64-5'
                },
            ],
          
        },
        {
            id      : '66-madi',
            name    : 'E. 66th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '67-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '66-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '66-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '65-madi'
                },
            ],
          
        },
        {
            id      : '67-madi',
            name    : 'E. 67th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '68-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '67-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '67-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '66-madi'
                },
            ],
          
        },
        {
            id      : '68-madi',
            name    : 'E. 68th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '69-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '68-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '68-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '67-madi'
                },
            ],  
        },
        {
            id      : '69-madi',
            name    : 'E. 69th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '70-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '69-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '69-5'          // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '68-madi'
                },
            ],
        },
        {
            id      : '70-madi',
            name    : 'E. 70th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '71-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '70-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '70-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '69-madi'
                },
            ],
        },
        {
            id      : '71-madi',
            name    : 'E. 71st and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '72-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '71-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '71-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '70-madi'
                },
            ],
        },
        {
            id      : '72-madi',
            name    : 'E. 72nd and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '73-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '72-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '72-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '71-madi'
                },
            ],
        },
        {
            id      : '73-madi',
            name    : 'E. 73rd and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '74-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '73-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '73-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '72-madi'
                },
            ],
        },
        {
            id      : '74-madi',                                                                                                                                                                                                                                                             // Museum Spot
            name    : 'E. 74th and madison Ave',
            cord    : [],
            desc    : `You don't even notice that you've come to the Whitney Museum till you've come to the moat, where the sidewalk looks down to the basement sculpture garden, where a boy and a girl have taken some time off from modern art to make love unseen by anyone but you.`,
            isStreet: true,
            onEnter : () => {
                reenableInput();
            },
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id : '75-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '74-madi'
                },
                {
                    dir: ['w', 'west'],
                    id : 'some-cent'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '73-5'
                },
                {
                    dir  : ['inside', 'museum'],
                    id   : 'whit-mus',
                    block: `The museum is closed on Sundays.`  // Add time block.ext removal later
                },
            ],
        },
        {
            id  : `whit-mus`,                                                                          // Whitney Museum
            name: 'Whitney Museum',
            cord: [],
            desc: `You enter the museum, and spend a pleasant hour enjoying the exhibits on display. 
            When you've seen enough of the display, you leave.`,
            onEnter: () => {
                pressEnter('74-madi');
            },
        },
        {
            id      : '75-madi',
            name    : 'E. 75th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '76-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '75-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '75-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '74-madi'
                },
            ],
        },
        {
            id      : '76-madi',
            name    : 'E. 76th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '76-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '76-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '76-5'          // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                },
                {
                    dir: ['s', 'south'],
                    id : '75-madi'
                },
            ],
        },
        {
            id      : '77-madi',
            name    : 'E. 77th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '78-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '77-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '77-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '76-madi'
                },
            ],
        },
        {
            id      : '78-madi',
            name    : 'E. 78th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '79-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '78-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '78-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '77-madi'
                },
            ],
        },
        {
            id      : '79-madi',
            name    : 'E. 79th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '80-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '79-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '79-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '78-madi'
                },
            ],
        },
        {
            id      : '80-madi',
            name    : 'E. 80th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '81-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '80-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '80-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '79-madi'
                },
            ],
        },
        {
            id      : '81-madi',
            name    : 'E. 81st and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '82-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '81-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '81-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '80-madi'
                },
            ],
        },
        {
            id      : '82-madi',
            name    : 'E. 82nd and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '83-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '82-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '82-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '81-madi'
                },
            ],
        },
        {
            id      : '83-madi',
            name    : 'E. 83rd and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '84-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '83-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '83-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '82-madi'
                },
            ],
        },
        {
            id      : '84-madi',
            name    : 'E. 84th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '85-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '84-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '84-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '83-madi'
                },
            ],
        },
        {
            id      : '85-madi',
            name    : 'E. 85th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '86-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '85-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '85-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '84-madi'
                },
            ],
        },
        {
            id      : '86-madi',
            name    : 'E.86th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '87-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '86-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '86-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '85-madi'
                },
            ],
        },
        {
            id      : '87-madi',
            name    : 'E.87th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '88-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '87-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '87-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '86-madi'
                },
            ],
        },
        {
            id      : '88-madi',
            name    : 'E.88th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '89-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '88-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '88-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '87-5'
                },
            ],
        },
        {
            id      : '89-madi',
            name    : 'E.89th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '90-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '89-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '89-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '88-madi'
                },
            ],
        },
        {
            id      : '90-madi',
            name    : 'E.90th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '91-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '90-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '90-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '89-madi'
                },
            ],
        },
        {
            id      : '91-madi',
            name    : 'E.91st and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '92-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '91-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '91-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '90-madi'
                },
            ],
        },
        {
            id      : '92-madi',
            name    : 'E.92nd and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '93-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '92-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '92-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '91-madi'
                },
            ],
        },
        {
            id      : '93-madi',
            name    : 'E.93rd and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '94-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '93-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '93-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '92-madi'
                },
            ],
        },
        {
            id      : '94-madi',
            name    : 'E.94th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '95-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '94-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '94-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '93-madi'
                },
            ],
        },
        {
            id      : '95-madi',
            name    : 'E.95th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '96-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '95-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '95-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '94-madi'
                },
            ],
        },
        {
            id      : '96-madi',
            name    : 'E.96th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '97-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '96-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '96-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '95-madi'
                },
            ],
        },
        {
            id      : '97-madi',
            name    : 'E.97th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '98-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '97-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '97-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '96-madi'
                },
            ],
        },
        {
            id      : '98-madi',
            name    : 'E.98th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '101-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '98-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '98-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '97-madi'
                },
            ],
        },
        {
            id      : '101-madi',
            name    : 'E.101st and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '102-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '101-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '101-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '98-madi'
                },
            ],
        },
        {
            id      : '102-madi',
            name    : 'E.102nd and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '103-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '102-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '102-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '101-madi'
                },
            ],
        },
        {
            id      : '103-madi',
            name    : 'E.103rd and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '104-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '103-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '103-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '102-madi'
                },
            ],
        },
        {
            id      : '104-madi',
            name    : 'E.104th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '105-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '104-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '104-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '103-madi'
                },
            ],
        },
        {
            id      : '105-madi',
            name    : 'E.105th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '106-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '105-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '105-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '104-madi'
                },
            ],
        },
        {
            id      : '106-madi',
            name    : 'E.106th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '107-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '106-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '106-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '105-madi'
                },
            ],
        },
        {
            id      : '107-madi',
            name    : 'E.107th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '108-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '107-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '107-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '106-madi'
                },
            ],
        },
        {
            id      : '108-madi',
            name    : 'E.108th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '109-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '108-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '108-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '107-madi'
                },
            ],
        },
        {
            id      : '109-madi',
            name    : 'E.109th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir: ['n', 'north'],
                    id : '110-madi'
                },
                {
                    dir: ['e', 'east'],
                    id : '109-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '109-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '108-madi'
                },
            ],
        },
        {
            id      : '110-madi',
            name    : 'E.110th and madison Ave',
            cord    : [],
            desc    : ``,
            isStreet: true,
            exit    : 
            [
                {
                    dir  : ['n', 'north'],
                    id   : '110-madi',
                    block: 'North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasit it Horace Greely who said, "Go south, young man"?',
                },
                {
                    dir: ['e', 'east'],
                    id : '110-park'
                },
                {
                    dir: ['w', 'west'],
                    id : '110-5'
                },
                {
                    dir: ['s', 'south'],
                    id : '109-madi'
                },
            ],
        },
                // PARK AVE STREETS
                {
                    id      : '59-park',                                      // Unique identifier for this room. Entering a room will set the disk's roomId to this.
                    name    : 'E. 59th St. and Park Ave',                     // Displayed each time the player enters the room.
                    cord    : [],
                    desc    : `There is a restaurant called Nedicks here.`,
                    isStreet: true,
                    exit    : 
                    [
                        {
                            dir: ['n', 'north'],
                            id : '60-park'
                        },
                        {
                            dir: ['e', 'east'],
                            id : '59-lexi'
                        },
                        {
                            dir: ['w', 'west'],
                            id : '59-madi'
                        },
                        {
                            dir: ['s', 'south'],
                            id : '58-park'
                        },
                        {
                            dir: ['inside', 'nedicks', 'restaraunt'],   // NEDICKS restaraunt
                            id : '59-nedick'
                        },
                    ],
                },
                    {
                    id      : '60-Park',
                    name    : 'E. 60th and Park Ave',
                    cord    : [],
                    desc    : `Bloomingdales!`,         // Bloomingdales!
                    isStreet: true,
                    exit    : 
                    [
                        {
                            dir: ['n', 'north'],
                            id : '61-park'
                        },
                        {
                            dir: ['e', 'east'],
                            id : '60-lexi'
                        },
                        {
                            dir: ['w', 'west'],
                            id : '60-madi'
                        },
                        {
                            dir: ['s', 'south'],
                            id : '59-park'
                        },
                        {
                            dir  : ['inside', 'bloomingdales'],
                            id   : '60-park',
                            block: `There's no point in going there`
                        },
                        
                    ],
                  
                    },
                    {
                        id      : '61-park',
                        name    : 'E. 61st and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '62-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '61-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '61-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '60-park'
                            },
                            
                        ],
                      
                    },
                    {
                        id      : '62-park',
                        name    : 'E. 62nd and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '63-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '62-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '62-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '61-park'
                            },
                            
                        ],
                      
                    },
                    {
                        id      : '63-park',
                        name    : 'E. 63rd and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '64-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '63-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '63-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '62-park'
                            },
                            
                        ],
                      
                    },
                    {
                        id      : '64-park',
                        name    : 'E. 64th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '65-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '64-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '64-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '63-park'
                            },
                            
                        ],
                      
                    },
                    {
                        id      : '65-park',
                        name    : 'E. 65th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '66-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '65-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '65-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '64-park'
                            },
                        ],
                      
                    },
                    {
                        id      : '66-park',
                        name    : 'E. 66th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '67-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '66-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '66-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '65-park'
                            },
                        ],
                      
                    },
                    {
                        id      : '67-park',
                        name    : 'E. 67th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '68-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '67-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '67-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '66-park'
                            },
                        ],
                      
                    },
                    {
                        id      : '68-park',
                        name    : 'E. 68th and Park Ave',
                        cord    : [],
                        desc    : `The Union Club's grey and white exterior suggests its age.`,   // Union Club
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '69-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '68-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '68-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '67-park'
                            },
                            {
                                dir  : ['inside', 'union'],               // two word arguement situation, if the player types go to union club
                                id   : '68-park',
                                block: `There's no point in going there`
                            },
                        ],  
                    },
                    {
                        id      : '69-park',
                        name    : 'E. 69th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '70-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '69-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '69-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '68-park'
                            },
                        ],
                    },
                    {
                        id      : '70-park',
                        name    : 'E. 70th and Park Ave',
                        cord    : [],
                        desc    : `If it rested on its side, this building might be the steps to a giant's doorstep: standing as it is, the modern-looking structure of the Asia House.`,
                        isStreet: true,
                        onEnter : () =>{
                            reenableInput();
                        },
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '71-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '70-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '70-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '69-park'
                            },
                            {
                                dir  : ['inside', 'asia', 'house'],       // two word arguement situation, if the player types asia house
                                id   : 'asia-mus',
                                block: 'The museum is closed on Sundays'
                            },
                        ],
                    },
                    {
                        id     : `asia-mus`,
                        name   : `Asia House`,
                        cord   : [],
                        desc   : `You enter the museum, and spend a plasant hour enjoying the exhibits on display. \n When you've seen enough of the display, you leave.`,
                        onEnter: () =>{
                            pressEnter('70-park');
                        },
                    },
                    {
                        id      : '71-park',
                        name    : 'E. 71st and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '72-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '71-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '71-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '70-park'
                            },
                        ],
                    },
                    {
                        id      : '72-park',
                        name    : 'E. 72nd and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '73-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '72-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '72-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '71-park'
                            },
                        ],
                    },
                    {
                        id      : '73-park',
                        name    : 'E. 73rd and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '74-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '73-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '73-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '72-park'
                            },
                        ],
                    },
                    {
                        id      : '74-park',
                        name    : 'E. 74th and madison Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '75-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '74-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '74-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '73-park'
                            },
                        ],
                    },
                    {
                        id      : '75-park',
                        name    : 'E. 75th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '76-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '75-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '75-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '74-park'
                            },
                        ],
                    },
                    {
                        id      : '76-park',
                        name    : 'E. 76th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '76-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '76-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '76-madi'       // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
                            },
                            {
                                dir: ['s', 'south'],
                                id : '75-park'
                            },
                        ],
                    },
                    {
                        id      : '77-park',
                        name    : 'E. 77th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '78-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '77-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '77-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '76-park'
                            },
                        ],
                    },
                    {
                        id      : '78-park',
                        name    : 'E. 78th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '79-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '78-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '78-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '77-park'
                            },
                        ],
                    },
                    {
                        id      : '79-park',
                        name    : 'E. 79th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '80-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '79-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '79-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '78-park'
                            },
                        ],
                    },
                    {
                        id      : '80-park',
                        name    : 'E. 80th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '81-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '80-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '80-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '79-park'
                            },
                        ],
                    },
                    {
                        id      : '81-park',
                        name    : 'E. 81st and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '82-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '81-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '81-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '80-park'
                            },
                        ],
                    },
                    {
                        id      : '82-park',
                        name    : 'E. 82nd and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '83-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '82-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '82-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '81-park'
                            },
                        ],
                    },
                    {
                        id      : '83-park',
                        name    : 'E. 83rd and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '84-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '83-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '83-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '82-park'
                            },
                        ],
                    },
                    {
                        id      : '84-park',
                        name    : 'E. 84th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '85-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '84-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '84-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '83-park'
                            },
                        ],
                    },
                    {
                        id      : '85-madi',
                        name    : 'E. 85th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '86-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '85-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '85-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '84-park'
                            },
                        ],
                    },
                    {
                        id      : '86-park',
                        name    : 'E.86th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '87-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '86-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '86-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '85-park'
                            },
                        ],
                    },
                    {
                        id      : '87-park',
                        name    : 'E.87th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '88-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '87-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '87-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '86-park'
                            },
                        ],
                    },
                    {
                        id      : '88-park',
                        name    : 'E.88th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '89-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '88-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '88-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '87-park'
                            },
                        ],
                    },
                    {
                        id      : '89-park',
                        name    : 'E.89th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '90-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '89-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '89-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '88-park'
                            },
                        ],
                    },
                    {
                        id      : '90-park',
                        name    : 'E.90th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '91-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '90-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '90-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '89-park'
                            },
                        ],
                    },
                    {
                        id      : '91-park',
                        name    : 'E.91st and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '92-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '91-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '91-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '90-park'
                            },
                        ],
                    },
                    {
                        id      : '92-park',
                        name    : 'E.92nd and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '93-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '92-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '92-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '91-park'
                            },
                        ],
                    },
                    {
                        id      : '93-park',
                        name    : 'E.93rd and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '94-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '93-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '93-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '92-park'
                            },
                        ],
                    },
                    {
                        id      : '94-park',
                        name    : 'E.94th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '95-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '94-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '94-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '93-park'
                            },
                        ],
                    },
                    {
                        id      : '95-park',
                        name    : 'E.95th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '96-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '95-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '95-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '94-park'
                            },
                        ],
                    },
                    {
                        id      : '96-park',
                        name    : 'E.96th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '97-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '96-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '96-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '95-park'
                            },
                        ],
                    },
                    {
                        id      : '97-park',
                        name    : 'E.97th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '98-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '97-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '97-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '96-park'
                            },
                        ],
                    },
                    {
                        id      : '98-park',
                        name    : 'E.98th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '101-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '98-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '98-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '97-park'
                            },
                        ],
                    },
                    {
                        id      : '101-park',
                        name    : 'E.101st and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '102-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '101-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '101-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '98-park'
                            },
                        ],
                    },
                    {
                        id      : '102-park',
                        name    : 'E.102nd and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '103-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '102-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '102-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '101-park'
                            },
                        ],
                    },
                    {
                        id      : '103-park',
                        name    : 'E.103rd and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '104-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '103-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '103-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '102-park'
                            },
                        ],
                    },
                    {
                        id      : '104-park',
                        name    : 'E.104th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '105-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '104-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '104-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '103-park'
                            },
                        ],
                    },
                    {
                        id      : '105-park',
                        name    : 'E.105th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '106-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '105-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '105-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '104-park'
                            },
                        ],
                    },
                    {
                        id      : '106-park',
                        name    : 'E.106th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '107-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '106-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '106-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '105-park'
                            },
                        ],
                    },
                    {
                        id      : '107-park',
                        name    : 'E.107th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '108-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '107-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '107-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '106-park'
                            },
                        ],
                    },
                    {
                        id      : '108-park',
                        name    : 'E.108th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '109-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '108-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '108-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '107-park'
                            },
                        ],
                    },
                    {
                        id      : '109-park',
                        name    : 'E.109th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '110-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '109-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '109-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '108-park'
                            },
                        ],
                    },
                    {
                        id      : '110-park',
                        name    : 'E.110th and Park Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir  : ['n', 'north'],
                                id   : '110-park',
                                block: 'North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasit it Horace Greely who said, "Go south, young man"?',
                            },
                            {
                                dir: ['e', 'east'],
                                id : '110-lexi'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '110-madi'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '109-park'
                            },
                        ],
                    },
                    // LEXINGTON AVE STREETS
                    {
                        id      : '60-lexi',
                        name    : 'E. 60th and Lexington Ave',
                        cord    : [],
                        desc    : ``,
                        isStreet: true,
                        exit    : 
                        [
                            {
                                dir: ['n', 'north'],
                                id : '61-lexi'
                            },
                            {
                                dir: ['e', 'east'],
                                id : '60-3'
                            },
                            {
                                dir: ['w', 'west'],
                                id : '60-park'
                            },
                            {
                                dir: ['s', 'south'],
                                id : '59-lexi'
                            },
                            
                        ],
                      
                        },
                        {
                            id      : '61-lexi',
                            name    : 'E. 61st and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '62-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '61-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '61-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '60-lexi'
                                },
                                
                            ],
                          
                        },
                        {
                            id      : '62-lexi',
                            name    : 'E. 62nd and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '63-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '62-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '62-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '61-lexi'
                                },
                                
                            ],
                          
                        },
                        {
                            id      : '63-lexi',                                                                                                         // Barbizon location
                            name    : 'E. 63rd and Lexington Ave',
                            cord    : [],
                            desc    : `Barbizon: This towering structure of brick and arches looks like a cross between a townhouse and a cathedral.`,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '64-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '63-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '63-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '62-lexi'
                                },
                                {
                                    dir  : ['inside', 'barbizon'],
                                    id   : '62-barb',
                                    block: 'This office building is closed on Sundays'  // Able to access if not on sunday
                                },
                                
                            ],
                          
                        },
                        {
                            id      : '64-lexi',
                            name    : 'E. 64th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '65-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '64-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '64-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '63-lexi'
                                },
                                
                            ],
                          
                        },
                        {
                            id      : '65-lexi',                                                                                                                                                                                                                                                                                                      // Russian delegation to the U.N 
                            name    : 'E. 65th and Lexington Ave',
                            cord    : [],
                            desc    : `Two stoical policemen are stationed outside the nondescript entrance of a small brick fortress, supervising the slow, revolving march of some twenty protestors, all carrying placards denouncing whom? You walk closer till you can read the placards. Ah yes, this is the Russian delegation to the U.N.`,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '66-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '65-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '65-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '64-lexi'
                                },
                                {
                                    dir  : ['inside', 'russian'],
                                    id   : '65-lexi',
                                    block: 'You cannot go in there.'
                                },
                            ],
                          
                        },
                        {
                            id      : '66-lexi',
                            name    : 'E. 66th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '67-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '66-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '66-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '65-lexi'
                                },
                            ],
                          
                        },
                        {
                            id      : '67-lexi',
                            name    : 'E. 67th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '68-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '67-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '67-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '66-lexi'
                                },
                            ],
                          
                        },
                        {
                            id       : '68-lexi',
                            name     : 'E. 68th and Lexington Ave',
                            cord     : [],
                            desc     : ``,
                            isStreet : true,
                            hasSubway: true,
                            exit     : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '69-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '68-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '68-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '67-lexi'
                                },
                            ],  
                        },
                        {
                            id      : '69-lexi',
                            name    : 'E. 69th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '70-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '69-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '69-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '68-lexi'
                                },
                            ],
                        },
                        {
                            id      : '70-lexi',
                            name    : 'E. 70th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '71-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '70-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '70-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '69-lexi'
                                },
                            ],
                        },
                        {
                            id      : '71-lexi',
                            name    : 'E. 71st and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '72-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '71-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '71-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '70-lexi'
                                },
                            ],
                        },
                        {
                            id      : '72-lexi',
                            name    : 'E. 72nd and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '73-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '72-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '72-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '71-lexi'
                                },
                            ],
                        },
                        {
                            id      : '73-lexi',
                            name    : 'E. 73rd and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '74-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '73-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '73-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '72-lexi'
                                },
                            ],
                        },
                        {
                            id      : '74-lexi',                                 // Luncheonette location
                            name    : 'E. 74th and Lexington Ave',
                            cord    : [],
                            desc    : `There is a luncheonette on the corner`,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '75-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '74-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '74-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '73-lexi'
                                },
                                {
                                    dir: ['inside', 'luncheonette', 'restaurant'],   // Luncheonette enterance on 95th and 5th
                                    id : 'lun-74-lexi'
                                },
                            ],
                        },
                        {
                            id      : '75-lexi',
                            name    : 'E. 75th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '76-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '75-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '75-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '74-lexi'
                                },
                            ],
                        },
                        {
                            id      : '76-lexi',
                            name    : 'E. 76th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '76-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '76-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '76-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '75-lexi'
                                },
                            ],
                        },
                        {
                            id       : '77-lexi',
                            name     : 'E. 77th and Lexington Ave',
                            cord     : [],
                            desc     : `There is a subway enterance at this corner`,
                            isStreet : true,
                            hasSubway: true,
                            exit     : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '78-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '77-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '77-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '76-lexi'
                                },
                            ],
                        },
                        {
                            id      : '78-lexi',
                            name    : 'E. 78th and Lexington Ave',
                            cord    : [],
                            desc    : `There is a luncheonette on the corner`,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '79-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '78-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '78-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '77-lexi'
                                },
                                {
                                    dir: ['inside', 'luncheonette', 'restaurant'],   // Luncheonette enterance on 78th and Lexington
                                    id : 'lun-78-lexi'
                                },
                            ],
                        },
                        {
                            id      : '79-lexi',
                            name    : 'E. 79th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '80-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '79-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '79-madi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '78-park'
                                },
                            ],
                        },
                        {
                            id      : '80-lexi',
                            name    : 'E. 80th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '81-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '80-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '80-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '79-lexi'
                                },
                            ],
                        },
                        {
                            id      : '81-lexi',
                            name    : 'E. 81st and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '82-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '81-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '81-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '80-lexi'
                                },
                            ],
                        },
                        {
                            id      : '82-lexi',
                            name    : 'E. 82nd and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '83-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '82-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '82-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '81-lexi'
                                },
                            ],
                        },
                        {
                            id      : '83-lexi',
                            name    : 'E. 83rd and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '84-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '83-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '83-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '82-lexi'
                                },
                            ],
                        },
                        {
                            id      : '84-lexi',
                            name    : 'E. 84th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '85-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '84-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '84-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '83-lexi'
                                },
                            ],
                        },
                        {
                            id      : '85-lexi',
                            name    : 'E. 85th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '86-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '85-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '85-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '84-lexi'
                                },
                            ],
                        },
                        {
                            id       : '86-lexi',
                            name     : 'E.86th and Lexington Ave',
                            cord     : [],
                            desc     : `There is a subway entrance at this corner`,
                            isStreet : true,
                            hasSubway: true,
                            exit     : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '87-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '86-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '86-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '85-lexi'
                                },
                            ],
                        },
                        {
                            id      : '87-lexi',
                            name    : 'E.87th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '88-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '87-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '87-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '86-lexi'
                                },
                            ],
                        },
                        {
                            id      : '88-lexi',
                            name    : 'E.88th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '89-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '88-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '88-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '87-lexi'
                                },
                            ],
                        },
                        {
                            id      : '89-lexi',
                            name    : 'E.89th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '90-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '89-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '89-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '88-lexi'
                                },
                            ],
                        },
                        {
                            id      : '90-lexi',
                            name    : 'E.90th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '91-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '90-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '90-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '89-lexi'
                                },
                            ],
                        },
                        {
                            id      : '91-lexi',
                            name    : 'E.91st and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '92-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '91-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '91-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '90-lexi'
                                },
                            ],
                        },
                        {
                            id      : '92-lexi',
                            name    : 'E.92nd and Lexington Ave',
                            cord    : [],
                            desc    : `There is a subway entrance at this corner`,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '93-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '92-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '92-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '91-lexi'
                                },
                                {
                                    dir: ['inside', 'luncheonette', 'restaurant'],   // Luncheonette enterance on 92th and Lexington
                                    id : 'lun-92-lexi'
                                },
                               
                            ],
                        },
                        {
                            id      : '93-lexi',
                            name    : 'E.93rd and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '94-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '93-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '93-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '92-lexi'
                                },
                            ],
                        },
                        {
                            id      : '94-lexi',
                            name    : 'E.94th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '95-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '94-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '94-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '93-lexi'
                                },
                            ],
                        },
                        {
                            id      : '95-lexi',
                            name    : 'E.95th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '96-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '95-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '95-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '94-lexi'
                                },
                            ],
                        },
                        {
                            id       : '96-lexi',
                            name     : 'E.96th and Lexington Ave',
                            cord     : [],
                            desc     : `There is a subway entrance at this corner.`,
                            isStreet : true,
                            hasSubway: true,
                            exit     : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '97-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '96-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '96-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '95-lexi'
                                },
                            ],
                        },
                        {
                            id      : '97-park',
                            name    : 'E.97th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '98-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '97-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '97-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '96-lexi'
                                },
                            ],
                        },
                        {
                            id      : '98-lexi',
                            name    : 'E.98th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '101-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '98-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '98-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '97-lexi'
                                },
                            ],
                        },
                        {
                            id      : '101-lexi',
                            name    : 'E.101st and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '102-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '101-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '101-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '98-lexi'
                                },
                            ],
                        },
                        {
                            id      : '102-lexi',
                            name    : 'E.102nd and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '103-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '102-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '102-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '101-lexi'
                                },
                            ],
                        },
                        {
                            id       : '103-lexi',
                            name     : 'E.103rd and Lexington Ave',
                            cord     : [],
                            desc     : `There is a subway entrance at this corner`,
                            isStreet : true,
                            hasSubway: true,
                            exit     : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '104-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '103-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '103-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '102-lexi'
                                },
                            ],
                        },
                        {
                            id      : '104-lexi',
                            name    : 'E.104th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '105-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '104-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '104-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '103-lexi'
                                },
                            ],
                        },
                        {
                            id      : '105-lexi',
                            name    : 'E.105th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '106-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '105-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '105-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '104-lexi'
                                },
                            ],
                        },
                        {
                            id      : '106-lexi',
                            name    : 'E.106th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '107-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '106-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '106-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '105-lexi'
                                },
                            ],
                        },
                        {
                            id      : '107-lexi',
                            name    : 'E.107th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '108-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '107-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '107-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '106-lexi'
                                },
                            ],
                        },
                        {
                            id      : '108-lexi',
                            name    : 'E.108th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '109-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '108-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '108-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '107-lexi'
                                },
                            ],
                        },
                        {
                            id       : '109-park',
                            name     : 'E.109th and Park Ave',
                            cord     : [],
                            desc     : `There is a subway entrance at this corner`,
                            isStreet : true,
                            hasSubway: true,
                            exit     : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '110-lexi'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '109-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '109-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '108-lexi'
                                },
                            ],
                        },
                        {
                            id      : '110-lexi',
                            name    : 'E.110th and Lexington Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir  : ['n', 'north'],
                                    id   : '110-lexi',
                                    block: 'North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasit it Horace Greely who said, "Go south, young man"?',
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '110-3'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '110-park'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '109-lexi'
                                },
                            ],
                        },
                        // 3rd Ave Streets
                        {
                            id      : '60-3',
                            name    : 'E. 60th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '61-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : 'quee-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '60-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '59-3'
                                },
                                
                            ],
                          
                            },
                            {
                                id      : '61-3',
                                name    : 'E. 61st and 3rd Ave',
                                cord    : [],
                                desc    : ``,
                                isStreet: true,
                                exit    : 
                                [
                                    {
                                        dir: ['n', 'north'],
                                        id : '62-3'
                                    },
                                    {
                                        dir: ['e', 'east'],
                                        id : '61-2'
                                    },
                                    {
                                        dir: ['w', 'west'],
                                        id : '61-lexi'
                                    },
                                    {
                                        dir: ['s', 'south'],
                                        id : '60-3'
                                    },
                                    
                                ],
                              
                            },
                            {
                                id      : '62-3',
                                name    : 'E. 62nd and 3rd Ave',
                                cord    : [],
                                desc    : ``,
                                isStreet: true,
                                exit    : 
                                [
                                    {
                                        dir: ['n', 'north'],
                                        id : '63-3'
                                    },
                                    {
                                        dir: ['e', 'east'],
                                        id : '62-2'
                                    },
                                    {
                                        dir: ['w', 'west'],
                                        id : '62-lexi'
                                    },
                                    {
                                        dir: ['s', 'south'],
                                        id : '61-3'
                                    },
                                    
                                ],
                              
                            },
                            {
                                id      : '63-3',
                                name    : 'E. 63rd and 3rd Ave',
                                cord    : [],
                                desc    : `There is a luncheonette on the corner`,
                                isStreet: true,
                                exit    : 
                                [
                                    {
                                        dir: ['n', 'north'],
                                        id : '64-3'
                                    },
                                    {
                                        dir: ['e', 'east'],
                                        id : '63-2'
                                    },
                                    {
                                        dir: ['w', 'west'],
                                        id : '63-lexi'
                                    },
                                    {
                                        dir: ['s', 'south'],
                                        id : '62-3'
                                    },
                                    {
                                        dir: ['inside', 'luncheonette', 'restaurant'],   // Luncheonette enterance on 63rd and 5th
                                        id : 'lun-63-3'
                                    },
                                    
                                ],
                              
                            },
                            {
                                id      : '64-3',
                                name    : 'E. 64th and 3rd Ave',
                                cord    : [],
                                desc    : ``,
                                isStreet: true,
                                exit    : 
                                [
                                    {
                                        dir: ['n', 'north'],
                                        id : '65-3'
                                    },
                                    {
                                        dir: ['e', 'east'],
                                        id : '64-2'
                                    },
                                    {
                                        dir: ['w', 'west'],
                                        id : '64-lexi'
                                    },
                                    {
                                        dir: ['s', 'south'],
                                        id : '63-3'
                                    },
                                    
                                ],
                              
                            },
                            {
                                id      : '65-3',
                                name    : 'E. 65th and 3rd Ave',
                                cord    : [],
                                desc    : ``,
                                isStreet: true,
                                exit    : 
                                [
                                    {
                                        dir: ['n', 'north'],
                                        id : '66-3'
                                    },
                                    {
                                        dir: ['e', 'east'],
                                        id : '65-2'
                                    },
                                    {
                                        dir: ['w', 'west'],
                                        id : '65-lexi'
                                    },
                                    {
                                        dir: ['s', 'south'],
                                        id : '64-3'
                                    },
                                ],
                              
                            },
                        {
                            id      : '66-3',
                            name    : 'E. 66th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '67-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '66-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '66-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '65-3'
                                },
                            ],
                          
                        },
                        {
                            id      : '67-3',
                            name    : 'E. 67th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '68-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '67-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '67-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '66-3'
                                },
                            ],
                          
                        },
                        {
                            id      : '68-3',
                            name    : 'E. 68th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '69-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '68-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '68-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '67-3'
                                },
                            ],  
                        },
                        {
                            id      : '69-3',
                            name    : 'E. 69th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '70-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '69-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '69-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '68-2'
                                },
                            ],
                        },
                        {
                            id      : '70-3',
                            name    : 'E. 70th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '71-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '70-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '70-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '69-3'
                                },
                            ],
                        },
                        {
                            id      : '71-3',
                            name    : 'E. 71st and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '72-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '71-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '71-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '70-3'
                                },
                            ],
                        },
                        {
                            id      : '72-3',
                            name    : 'E. 72nd and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '73-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '72-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '72-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '71-3'
                                },
                            ],
                        },
                        {
                            id      : '73-3',
                            name    : 'E. 73rd and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '74-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '73-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '73-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '72-3'
                                },
                            ],
                        },
                        {
                            id      : '74-3',
                            name    : 'E. 74th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '75-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '74-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '74-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '73-3'
                                },
                            ],
                        },
                        {
                            id      : '75-3',
                            name    : 'E. 75th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '76-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '75-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '75-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '74-3'
                                },
                            ],
                        },
                        {
                            id      : '76-3',
                            name    : 'E. 76th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '76-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '76-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '76-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '75-3'
                                },
                            ],
                        },
                        {
                            id      : '77-3',
                            name    : 'E. 77th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '78-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '77-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '77-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '76-3'
                                },
                            ],
                        },
                        {
                            id      : '78-3',
                            name    : 'E. 78th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '79-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '78-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '78-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '77-3'
                                },
                            ],
                        },
                        {
                            id      : '79-3',
                            name    : 'E. 79th and 3rd Ave',
                            cord    : [],
                            desc    : `A plaque outside this little limestone palace explains that this was the first of the city's Carnegie Libraries.`,
                            isStreet: true,
                            onEnter : () =>{
                                reenableInput();
                            },
                            exit: 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '80-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '79-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '79-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '78-3'
                                },
                                {
                                    dir: ['inside', 'libraries'],
                                    id : 'car-mus'
                                },
                            ],
                        },
                        {
                            id     : 'car-mus',                                                                                                                                 // Inside the Carnegie Libraries, brief interaction
                            name   : 'Museum',
                            cord   : [],
                            desc   : `You enter the museum, and spend a pleasant hour enjoying the exhibits on display.\n When you've seen enough of the display, you leave`,
                            onEnter: () => {
                                pressEnter('79-3');
                            },
                            
                        },
                        {
                            id      : '80-3',
                            name    : 'E. 80th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '81-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '80-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '80-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '79-3'
                                },
                            ],
                        },
                        {
                            id      : '81-3',
                            name    : 'E. 81st and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '82-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '81-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '81-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '80-3'
                                },
                            ],
                        },
                        {
                            id      : '82-3',
                            name    : 'E. 82nd and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '83-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '82-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '82-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '81-3'
                                },
                            ],
                        },
                        {
                            id      : '83-3',
                            name    : 'E. 83rd and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '84-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '83-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '83-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '82-3'
                                },
                            ],
                        },
                        {
                            id      : '84-3',
                            name    : 'E. 84th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '85-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '84-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '84-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '83-3'
                                },
                            ],
                        },
                        {
                            id      : '85-3',
                            name    : 'E. 85th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '86-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '85-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '85-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '84-3'
                                },
                            ],
                        },
                        {
                            id      : '86-3',
                            name    : 'E.86th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '87-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '86-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '86-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '85-3'
                                },
                            ],
                        },
                        {
                            id      : '87-3',
                            name    : 'E.87th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '88-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '87-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '87-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '86-3'
                                },
                            ],
                        },
                        {
                            id      : '88-3',
                            name    : 'E.88th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '89-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '88-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '88-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '87-3'
                                },
                            ],
                        },
                        {
                            id      : '89-3',
                            name    : 'E.89th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '90-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '89-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '89-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '88-3'
                                },
                            ],
                        },
                        {
                            id      : '90-3',
                            name    : 'E.90th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '91-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '90-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '90-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '89-3'
                                },
                            ],
                        },
                        {
                            id      : '91-3',
                            name    : 'E.91st and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '92-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '91-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '91-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '90-3'
                                },
                            ],
                        },
                        {
                            id      : '92-3',
                            name    : 'E.92nd and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '93-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '92-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '92-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '91-lexi'
                                },
                               
                            ],
                        },
                        {
                            id      : '93-3',
                            name    : 'E.93rd and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '94-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '93-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '93-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '92-3'
                                },
                            ],
                        },
                        {
                            id      : '94-3',
                            name    : 'E.94th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '95-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '94-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '94-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '93-3'
                                },
                            ],
                        },
                        {
                            id      : '95-3',
                            name    : 'E.95th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '96-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '95-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '95-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '94-3'
                                },
                            ],
                        },
                        {
                            id      : '96-3',
                            name    : 'E.96th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '97-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '96-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '96-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '95-3'
                                },
                            ],
                        },
                        {
                            id      : '97-3',
                            name    : 'E.97th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '98-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '97-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '97-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '96-3'
                                },
                            ],
                        },
                        {
                            id      : '98-3',
                            name    : 'E.98th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '101-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '98-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '98-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '97-3'
                                },
                            ],
                        },
                        {
                            id      : '101-3',
                            name    : 'E.101st and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '102-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '101-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '101-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '98-3'
                                },
                            ],
                        },
                        {
                            id      : '102-3',
                            name    : 'E.102nd and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '103-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '102-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '102-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '101-3'
                                },
                            ],
                        },
                        {
                            id      : '103-3',
                            name    : 'E.103rd and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '104-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '103-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '103-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '102-3'
                                },
                            ],
                        },
                        {
                            id      : '104-3',
                            name    : 'E.104th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '105-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '104-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '104-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '103-3'
                                },
                            ],
                        },
                        {
                            id      : '105-3',
                            name    : 'E.105th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '106-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '105-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '105-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '104-3'
                                },
                            ],
                        },
                        {
                            id      : '106-3',
                            name    : 'E.106th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '107-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '106-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '106-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '105-3'
                                },
                            ],
                        },
                        {
                            id      : '107-3',
                            name    : 'E.107th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '108-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '107-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '107-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '106-3'
                                },
                            ],
                        },
                        {
                            id      : '108-3',
                            name    : 'E.108th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '109-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '108-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '108-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '107-3'
                                },
                            ],
                        },
                        {
                            id      : '109-3',
                            name    : 'E.109th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir: ['n', 'north'],
                                    id : '110-3'
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '109-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '109-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '108-3'
                                },
                            ],
                        },
                        {
                            id      : '110-3',
                            name    : 'E.110th and 3rd Ave',
                            cord    : [],
                            desc    : ``,
                            isStreet: true,
                            exit    : 
                            [
                                {
                                    dir  : ['n', 'north'],
                                    id   : '110-3',
                                    block: 'North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasit it Horace Greely who said, "Go south, young man"?',
                                },
                                {
                                    dir: ['e', 'east'],
                                    id : '110-2'
                                },
                                {
                                    dir: ['w', 'west'],
                                    id : '110-lexi'
                                },
                                {
                                    dir: ['s', 'south'],
                                    id : '109-3'
                                },
                            ],
                        },
                                                // 2nd Ave Streets
                                                {
                                                    id      : 'quee-2',                           // 2nd Ave and Queensboro Bridge
                                                    name    : '2nd Ave. and Queensboro Bridge',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '60-2'
                                                        },
                                                        {
                                                            dir  : ['e', 'east'],
                                                            id   : '60-2',
                                                            block: 'You cannot go that way',
                                                        },
                                                        {
                                                            dir  : ['w', 'west'],
                                                            id   : '60-2',
                                                            block: 'You cannot go that way',
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '59-2'
                                                        },
                                                        
                                                    ],
                                                  
                                                    },
                                                    {
                                                        id      : '60-2',
                                                        name    : '60th St. and 2nd Ave',
                                                        cord    : [],
                                                        desc    : ``,
                                                        isStreet: true,
                                                        exit    : 
                                                        [
                                                            {
                                                                dir: ['n', 'north'],
                                                                id : '61-2'
                                                            },
                                                            {
                                                                dir: ['e', 'east'],
                                                                id : '60-quee'
                                                            },
                                                            {
                                                                dir: ['w', 'west'],
                                                                id : '60-3'
                                                            },
                                                            {
                                                                dir: ['s', 'south'],
                                                                id : 'quee-2'
                                                            },
                                                            
                                                        ],
                                                      
                                                        },
                                                    {
                                                        id      : '61-2',
                                                        name    : 'E. 61st and 2nd Ave',
                                                        cord    : [],
                                                        desc    : ``,
                                                        isStreet: true,
                                                        exit    : 
                                                        [
                                                            {
                                                                dir: ['n', 'north'],
                                                                id : '62-2'
                                                            },
                                                            {
                                                                dir: ['e', 'east'],
                                                                id : '61-quee'
                                                            },
                                                            {
                                                                dir: ['w', 'west'],
                                                                id : '61-3'
                                                            },
                                                            {
                                                                dir: ['s', 'south'],
                                                                id : '60-2'
                                                            },
                                                            
                                                        ],
                                                      
                                                    },
                                                    {
                                                        id      : '62-2',
                                                        name    : 'E. 62nd and 2nd Ave',
                                                        cord    : [],
                                                        desc    : `There is a luncheonette on the corner`,
                                                        isStreet: true,
                                                        exit    : 
                                                        [
                                                            {
                                                                dir: ['n', 'north'],
                                                                id : '63-2'
                                                            },
                                                            {
                                                                dir: ['e', 'east'],
                                                                id : '62-quee'
                                                            },
                                                            {
                                                                dir: ['w', 'west'],
                                                                id : '62-3'
                                                            },
                                                            {
                                                                dir: ['s', 'south'],
                                                                id : '61-2'
                                                            },
                                                            {
                                                                dir: ['inside', 'luncheonette', 'restaurant'],   // Luncheonette enterance on 62rd and 2nd
                                                                id : 'lun-63-2'
                                                            },
                                                            
                                                        ],
                                                      
                                                    },
                                                    {
                                                        id      : '63-2',
                                                        name    : 'E. 63rd and 2nd Ave',
                                                        cord    : [],
                                                        desc    : ``,
                                                        isStreet: true,
                                                        exit    : 
                                                        [
                                                            {
                                                                dir: ['n', 'north'],
                                                                id : '64-2'
                                                            },
                                                            {
                                                                dir: ['e', 'east'],
                                                                id : '63-quee'
                                                            },
                                                            {
                                                                dir: ['w', 'west'],
                                                                id : '63-3'
                                                            },
                                                            {
                                                                dir: ['s', 'south'],
                                                                id : '62-2'
                                                            },
                                                            
                                                        ],
                                                      
                                                    },
                                                    {
                                                          id      : '64-2',
                                                          name    : 'E. 64th and 2nd Ave',
                                                          cord    : [],
                                                          desc    : ``,
                                                          isStreet: true,
                                                          exit    : 
                                                        [
                                                            {
                                                                dir: ['n', 'north'],
                                                                id : '65-2'
                                                            },
                                                            {
                                                                dir: ['e', 'east'],
                                                                id : '64-1'
                                                            },
                                                            {
                                                                dir: ['w', 'west'],
                                                                id : '64-3'
                                                            },
                                                            {
                                                                dir: ['s', 'south'],
                                                                id : '63-2'
                                                            },
                                                            
                                                        ],
                                                      
                                                    },
                                                    {
                                                        id      : '65-2',
                                                        name    : 'E. 65th and 2nd Ave',
                                                        cord    : [],
                                                        desc    : ``,
                                                        isStreet: true,
                                                        exit    : 
                                                        [
                                                            {
                                                                dir: ['n', 'north'],
                                                                id : '66-2'
                                                            },
                                                            {
                                                                dir: ['e', 'east'],
                                                                id : '65-1'
                                                            },
                                                            {
                                                                dir: ['w', 'west'],
                                                                id : '65-3'
                                                            },
                                                            {
                                                                dir: ['s', 'south'],
                                                                id : '64-2'
                                                            },
                                                        ],
                                                      
                                                    },
                                                {
                                                    id      : '66-2',
                                                    name    : 'E. 66th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '67-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '66-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '66-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '65-2'
                                                        },
                                                    ],
                                                  
                                                },
                                                {
                                                    id      : '67-2',
                                                    name    : 'E. 67th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '68-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '67-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '67-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '66-2'
                                                        },
                                                    ],
                                                  
                                                },
                                                {
                                                    id      : '68-2',
                                                    name    : 'E. 68th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '69-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '68-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '68-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '67-2'
                                                        },
                                                    ],  
                                                },
                                                {
                                                    id      : '69-2',
                                                    name    : 'E. 69th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '70-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '69-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '69-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '68-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '70-2',
                                                    name    : 'E. 70th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '71-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '70-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '70-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '69-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '71-2',
                                                    name    : 'E. 71st and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '72-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '71-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '71-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '70-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '72-2',
                                                    name    : 'E. 72nd and 2nd Ave',
                                                    cord    : [],
                                                    desc    : `There is a luncheonette on the corner.`,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '73-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '72-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '72-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '71-2'
                                                        },
                                                        {
                                                            dir: ['inside', 'luncheonette', 'restaurant'],   // Luncheonette enterance on 72nd and 2nd
                                                            id : 'lun-72-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '73-2',
                                                    name    : 'E. 73rd and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '74-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '73-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '73-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '72-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '74-2',
                                                    name    : 'E. 74th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '75-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '74-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '74-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '73-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '75-2',
                                                    name    : 'E. 75th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '76-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '75-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '75-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '74-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '76-2',
                                                    name    : 'E. 76th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '76-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '76-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '76-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '75-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '77-2',
                                                    name    : 'E. 77th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : `There is a pizzaeria here`,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '78-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '77-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '77-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '76-2'
                                                        },
                                                        {
                                                            dir: ['inside', 'pizzaeria', 'restaurant'],   // Pizzaeria enterance on 77th and 2nd ave
                                                            id : 'piz-95-5'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '78-2',
                                                    name    : 'E. 78th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '79-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '78-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '78-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '77-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '79-2',
                                                    name    : 'E. 79th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '80-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '79-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '79-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '78-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '80-2',
                                                    name    : 'E. 80th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '81-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '80-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '80-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '79-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '81-2',
                                                    name    : 'E. 81st and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '82-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '81-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '81-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '80-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '82-2',
                                                    name    : 'E. 82nd and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '83-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '82-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '82-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '81-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '83-2',
                                                    name    : 'E. 83rd and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '84-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '83-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '83-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '82-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '84-2',
                                                    name    : 'E. 84th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '85-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '84-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '84-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '83-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '85-2',
                                                    name    : 'E. 85th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '86-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '85-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '85-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '84-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '86-2',
                                                    name    : 'E.86th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '87-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '86-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '86-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '85-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '87-2',
                                                    name    : 'E.87th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '88-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '87-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '87-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '86-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '88-2',
                                                    name    : 'E.88th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '89-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '88-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '88-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '87-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '89-2',
                                                    name    : 'E.89th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '90-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '89-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '89-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '88-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '90-2',
                                                    name    : 'E.90th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '91-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '90-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '90-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '89-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '91-2',
                                                    name    : 'E.91st and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '92-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '91-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '91-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '90-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '92-2',
                                                    name    : 'E.92nd and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '93-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '92-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '92-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '91-2'
                                                        },
                                                       
                                                    ],
                                                },
                                                {
                                                    id      : '93-2',
                                                    name    : 'E.93rd and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '94-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '93-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '93-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '92-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '94-2',
                                                    name    : 'E.94th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : `There is a luncheonette on the corner`,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '95-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '94-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '94-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '93-2'
                                                        },
                                                        {
                                                            dir: ['inside', 'luncheonette', 'restaurant'],   // Luncheonette enterance on 94th and 2nd
                                                            id : 'lun-94-2'
                                                        },
                                              
                                                    ],
                                                },
                                                {
                                                    id      : '95-2',
                                                    name    : 'E.95th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '96-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '95-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '95-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '94-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '96-2',
                                                    name    : 'E.96th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '97-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '96-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '96-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '95-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '97-2',
                                                    name    : 'E.97th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '98-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '97-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '97-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '96-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '98-2',
                                                    name    : 'E.98th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '101-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '98-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '98-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '97-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '101-2',
                                                    name    : 'E.101st and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '102-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '101-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '101-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '98-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '102-2',
                                                    name    : 'E.102nd and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '103-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '102-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '102-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '101-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '103-2',
                                                    name    : 'E.103rd and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '104-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '103-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '103-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '102-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '104-2',
                                                    name    : 'E.104th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '105-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '104-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '104-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '103-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '105-2',
                                                    name    : 'E.105th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '106-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '105-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '105-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '104-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '106-2',
                                                    name    : 'E.106th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '107-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '106-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '106-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '105-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '107-2',
                                                    name    : 'E.107th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '108-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '107-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '107-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '106-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '108-2',
                                                    name    : 'E.108th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '109-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '108-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '108-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '107-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '109-2',
                                                    name    : 'E.109th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '110-2'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '109-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '109-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '108-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '110-2',
                                                    name    : 'E.110th and 2nd Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir  : ['n', 'north'],
                                                            id   : '110-2',
                                                            block: 'North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasit it Horace Greely who said, "Go south, young man"?',
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '110-1'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '110-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '109-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '60-quee',                             // Queensboro Bridge Nodes
                                                    name    : 'E. 60th and Queensboro Bridge OUT',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '61-quee'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '60-1',
                                                            
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '60-2',
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '59-quee'
                                                        },
                                                        
                                                    ],
                                                  
                                                    },
                                                    {
                                                        id      : '61-quee',
                                                        name    : '61st and Queensboro Bridge OUT',
                                                        cord    : [],
                                                        desc    : ``,
                                                        isStreet: true,
                                                        exit    : 
                                                        [
                                                            {
                                                                dir: ['n', 'north'],
                                                                id : '62-quee'
                                                            },
                                                            {
                                                                dir: ['e', 'east'],
                                                                id : '61-1',
                                                            },
                                                            {
                                                                dir: ['w', 'west'],
                                                                id : '61-3',
                                                            },
                                                            {
                                                                dir: ['s', 'south'],
                                                                id : '60-quee'
                                                            },
                                                            
                                                        ],
                                                      
                                                        },
                                                    {
                                                        id      : '62-quee',
                                                        name    : 'E. 62nd and Queensboro Bridge OUT',
                                                        cord    : [],
                                                        desc    : ``,
                                                        isStreet: true,
                                                        exit    : 
                                                        [
                                                            {
                                                                dir: ['n', 'north'],
                                                                id : '63-quee'
                                                            },
                                                            {
                                                                dir: ['e', 'east'],
                                                                id : '62-1'
                                                            },
                                                            {
                                                                dir: ['w', 'west'],
                                                                id : '62-2'
                                                            },
                                                            {
                                                                dir: ['s', 'south'],
                                                                id : '61-quee'
                                                            },
                                                            
                                                        ],
                                                      
                                                    },
                                                    {
                                                        id      : '63-quee',
                                                        name    : 'E. 63rd and Queensboro Bridge OUT',
                                                        cord    : [],
                                                        desc    : ``,
                                                        isStreet: true,
                                                        exit    : 
                                                        [
                                                            {
                                                                dir  : ['n', 'north'],
                                                                id   : '63-2',
                                                                block: 'You cannot go that way',
                                                            },
                                                            {
                                                                dir: ['e', 'east'],
                                                                id : '62-1'
                                                            },
                                                            {
                                                                dir: ['w', 'west'],
                                                                id : '62-2'
                                                            },
                                                            {
                                                                dir: ['s', 'south'],
                                                                id : '62-quee'
                                                            },
                                                            
                                                        ],
                                                      
                                                    },
                                                    // 1st Ave Streets
                                                    {
                                                        id      : '60-1',
                                                        name    : '60th St. and 1st Ave',
                                                        cord    : [],
                                                        desc    : `Dangling high above the traffic on the street are the steel cables and the gondolas of the aerial tramway to Roosevelt Island. It looks almost as much fun as a ferris wheel.`,
                                                        isStreet: true,
                                                        exit    : 
                                                        [
                                                            {
                                                                dir: ['n', 'north'],
                                                                id : '61-1'
                                                            },
                                                            {
                                                                dir: ['e', 'east'],
                                                                id : '60-york'
                                                            },
                                                            {
                                                                dir: ['w', 'west'],
                                                                id : '60-quee'
                                                            },
                                                            {
                                                                dir: ['s', 'south'],
                                                                id : '59-1'
                                                            },
                                                            
                                                        ],
                                                      
                                                        },
                                                    {
                                                        id      : '61-1',
                                                        name    : 'E. 61st and 1st Ave',
                                                        cord    : [],
                                                        desc    : `Dangerfields -- This looks like a perfectly reasonable night club, but somehow you just don't respect it.`,
                                                        isStreet: true,
                                                        exit    : 
                                                        [
                                                            {
                                                                dir: ['n', 'north'],
                                                                id : '62-2'
                                                            },
                                                            {
                                                                dir: ['e', 'east'],
                                                                id : '61-york'
                                                            },
                                                            {
                                                                dir: ['w', 'west'],
                                                                id : '61-quee'
                                                            },
                                                            {
                                                                dir: ['s', 'south'],
                                                                id : '60-1'
                                                            },
                                                            {
                                                                dir  : ['inside', 'dangerfields'],
                                                                id   : '61-1',
                                                                block: 'You cannot go there'
                                                            },
                                                            
                                                        ],
                                                      
                                                    },
                                                    {
                                                        id      : '62-1',
                                                        name    : 'E. 62nd and 1st Ave',
                                                        cord    : [],
                                                        desc    : ``,
                                                        isStreet: true,
                                                        exit    : 
                                                        [
                                                            {
                                                                dir: ['n', 'north'],
                                                                id : '63-1'
                                                            },
                                                            {
                                                                dir: ['e', 'east'],
                                                                id : '62-york'
                                                            },
                                                            {
                                                                dir: ['w', 'west'],
                                                                id : '62-quee'
                                                            },
                                                            {
                                                                dir: ['s', 'south'],
                                                                id : '61-2'
                                                            },
                                                            
                                                        ],
                                                      
                                                    },
                                                    {
                                                        id      : '63-1',
                                                        name    : 'E. 63rd and 1st Ave',
                                                        cord    : [],
                                                        desc    : ``,
                                                        isStreet: true,
                                                        exit    : 
                                                        [
                                                            {
                                                                dir: ['n', 'north'],
                                                                id : '64-1'
                                                            },
                                                            {
                                                                dir: ['e', 'east'],
                                                                id : '63-york'
                                                            },
                                                            {
                                                                dir: ['w', 'west'],
                                                                id : '63-2'
                                                            },
                                                            {
                                                                dir: ['s', 'south'],
                                                                id : '62-1'
                                                            },
                                                            
                                                        ],
                                                      
                                                    },
                                                    {
                                                        id      : '64-1',
                                                        name    : 'E. 64th and 1st Ave',
                                                        cord    : [],
                                                        desc    : ``,
                                                        isStreet: true,
                                                        exit    : 
                                                        [
                                                            {
                                                                dir: ['n', 'north'],
                                                                id : '65-1'
                                                            },
                                                            {
                                                                dir: ['e', 'east'],
                                                                id : '64-york'
                                                            },
                                                            {
                                                                dir: ['w', 'west'],
                                                                id : '64-2'
                                                            },
                                                            {
                                                                dir: ['s', 'south'],
                                                                id : '63-1'
                                                            },
                                                            
                                                        ],
                                                      
                                                    },
                                                    {
                                                        id      : '65-1',
                                                        name    : 'E. 65th and 1st Ave',
                                                        cord    : [],
                                                        desc    : ``,
                                                        isStreet: true,
                                                        exit    : 
                                                        [
                                                            {
                                                                dir: ['n', 'north'],
                                                                id : '66-1'
                                                            },
                                                            {
                                                                dir: ['e', 'east'],
                                                                id : '65-york'
                                                            },
                                                            {
                                                                dir: ['w', 'west'],
                                                                id : '65-2'
                                                            },
                                                            {
                                                                dir: ['s', 'south'],
                                                                id : '64-2'
                                                            },
                                                        ],
                                                      
                                                    },
                                                {
                                                    id      : '66-1',
                                                    name    : 'E. 66th and 1st Ave',
                                                    cord    : [],
                                                    desc    : `There is a pizzeria here.`,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '67-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '66-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '66-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '65-1'
                                                        },
                                                    ],
                                                  
                                                },
                                                {
                                                    id      : '67-1',
                                                    name    : 'E. 67th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '68-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '67-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '67-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '66-1'
                                                        },
                                                    ],
                                                  
                                                },
                                                {
                                                    id      : '68-1',
                                                    name    : 'E. 68th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '69-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '68-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '68-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '67-1'
                                                        },
                                                    ],  
                                                },
                                                {
                                                    id      : '69-1',
                                                    name    : 'E. 69th and 1st Ave',
                                                    cord    : [],
                                                    desc    : `Occupying half the street-frontage of a medium-new brick and glass condo is a night club called the F. B. I. Glit-lettering on the plate glass window explains that the F. B. I. is "Manhattan's most authentic imitation speakeasy" and "New York's answer to Colonial Williamsburg."`,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '70-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '69-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '69-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '68-1'
                                                        },
                                                        {
                                                            dir: ['inside', 'fbi'],
                                                            id : '68-1',
                                                            block: 'You cannot go in there'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '70-1',
                                                    name    : 'E. 70th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '71-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '70-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '70-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '69-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '71-1',
                                                    name    : 'E. 71st and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '72-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '71-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '71-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '70-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '72-1',
                                                    name    : 'E. 72nd and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '73-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '72-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '72-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '71-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '73-1',
                                                    name    : 'E. 73rd and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '74-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '73-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '73-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '72-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '74-1',
                                                    name    : 'E. 74th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '75-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '74-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '74-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '73-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '75-1',
                                                    name    : 'E. 75th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '76-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '75-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '75-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '74-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '76-1',
                                                    name    : 'E. 76th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '76-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '76-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '76-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '75-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '77-1',
                                                    name    : 'E. 77th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '78-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '77-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '77-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '76-1'
                                                        },
                                                      
                                                    ],
                                                },
                                                {
                                                    id      : '78-1',
                                                    name    : 'E. 78th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '79-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '78-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '78-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '77-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '79-1',
                                                    name    : 'E. 79th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '80-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '79-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '79-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '78-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '80-1',
                                                    name    : 'E. 80th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '81-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '80-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '80-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '79-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '81-1',
                                                    name    : 'E. 81st and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '82-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '81-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '81-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '80-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '82-1',
                                                    name    : 'E. 82nd and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '83-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '82-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '82-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '81-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '83-1',
                                                    name    : 'E. 83rd and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '84-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '83-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '83-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '82-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '84-1',
                                                    name    : 'E. 84th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '85-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '84-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '84-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '83-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '85-1',
                                                    name    : 'E. 85th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '86-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '85-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '85-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '84-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '86-1',
                                                    name    : 'E.86th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '87-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '86-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '86-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '85-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '87-1',
                                                    name    : 'E.87th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '88-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '87-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '87-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '86-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '88-1',
                                                    name    : 'E.88th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '89-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '88-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '88-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '87-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '89-1',
                                                    name    : 'E.89th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '90-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '89-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '89-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '88-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '90-1',
                                                    name    : 'E.90th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '91-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '90-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '90-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '89-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '91-1',
                                                    name    : 'E.91st and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '92-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '91-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '91-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '90-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '92-1',
                                                    name    : 'E.92nd and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '93-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '92-york'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '92-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '91-1'
                                                        },
                                                       
                                                    ],
                                                },
                                                {
                                                    id      : '93-1',
                                                    name    : 'E.93rd and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '94-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '93-fdr'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '93-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '92-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '94-1',
                                                    name    : 'E.94th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '95-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '94-fdr'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '94-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '93-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '95-1',
                                                    name    : 'E.95th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '96-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '95-fdr'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '95-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '94-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '96-1',
                                                    name    : 'E.96th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '97-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '96-fdr'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '96-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '95-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '97-1',
                                                    name    : 'E.97th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '98-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '97-fdr'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '97-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '96-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '98-1',
                                                    name    : 'E.98th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '99-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '98-fdr'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '98-3'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '97-2'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '99-1',
                                                    name    : 'E.99th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '99-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '99-fdr'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '99-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '98-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '100-1',
                                                    name    : 'E.100th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '101-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '100-fdr'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '99-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '99-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '101-1',
                                                    name    : 'E.101st and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '102-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '101-york',
                                                            block: 'You cannot go that way'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '101-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '100-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '102-1',
                                                    name    : 'E.102nd and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '103-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '102-fdr'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '102-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '101-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '103-1',
                                                    name    : 'E.103rd and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '104-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '103-york',
                                                            block: 'You cannot go that way'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '103-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '102-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '104-1',
                                                    name    : 'E.104th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '105-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '104-york',
                                                            block: 'You cannot go that way'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '104-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '103-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '105-1',
                                                    name    : 'E.105th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '106-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '105-fdr'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '105-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '104-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '106-1',
                                                    name    : 'E.106th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '107-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '106-fdr'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '106-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '105-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '107-1',
                                                    name    : 'E.107th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '108-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '107-york',
                                                            block: 'You cannot go that way'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '107-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '106-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '108-1',
                                                    name    : 'E.108th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '109-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '108-york',
                                                            block: 'You cannot go that way'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '108-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '107-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '109-2',
                                                    name    : 'E.109th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '110-1'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '109-york',
                                                            block: 'You cannot go that way'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '109-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '108-1'
                                                        },
                                                    ],
                                                },
                                                {
                                                    id      : '110-1',
                                                    name    : 'E.110th and 1st Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir  : ['n', 'north'],
                                                            id   : '110-1',
                                                            block: 'North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasit it Horace Greely who said, "Go south, young man"?',
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '110-fdr'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '110-2'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '109-1'
                                                        },
                                                    ],
                                                },
                                                // York Ave Streets
                                                {
                                                    id      : '60-york',
                                                    name    : '60th St. and York Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '61-york'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '60-york',
                                                            block:'You cannot go there'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '60-1'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '59-sutt'
                                                        },
                                                        
                                                    ],
                                                  
                                                    },
                                                {
                                                    id      : '61-york',
                                                    name    : 'E. 61st and York Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '62-york'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '61-york',
                                                            block:'You cannot go there'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '61-1'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '60-york'
                                                        },
                                                    ],
                                                  
                                                },
                                                {
                                                    id      : '62-york',
                                                    name    : 'E. 62nd and York Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '63-york'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '62-york',
                                                            block:'You cannot go there'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '62-1'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '61-york'
                                                        },
                                                        
                                                    ],
                                                  
                                                },
                                                {
                                                    id      : '63-york',
                                                    name    : 'E. 63rd and York Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '64-york'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '63-york',
                                                            block:'You cannot go there'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '63-1'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '62-york'
                                                        },
                                                        
                                                    ],
                                                  
                                                },
                                                {
                                                    id      : '64-york',
                                                    name    : 'E. 64th and York Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '65-york'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '64-york',
                                                            block:'You cannot go there'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '64-1'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '63-york'
                                                        },
                                                        
                                                    ],
                                                  
                                                },
                                                {
                                                    id      : '65-york',
                                                    name    : 'E. 65th and York Ave',
                                                    cord    : [],
                                                    desc    : ``,
                                                    isStreet: true,
                                                    exit    : 
                                                    [
                                                        {
                                                            dir: ['n', 'north'],
                                                            id : '66-york'
                                                        },
                                                        {
                                                            dir: ['e', 'east'],
                                                            id : '65-york',
                                                            block:'You cannot go there'
                                                        },
                                                        {
                                                            dir: ['w', 'west'],
                                                            id : '65-1'
                                                        },
                                                        {
                                                            dir: ['s', 'south'],
                                                            id : '64-york'
                                                        },
                                                    ],
                                                  
                                                },
                                            {
                                                id      : '66-york',
                                                name    : 'E. 66th and York Ave',
                                                cord    : [],
                                                desc    : `T`,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '67-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '66-york',
                                                        block:'You cannot go there'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '66-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '65-york'
                                                    },
                                                ],
                                              
                                            },
                                            {
                                                id      : '67-york',
                                                name    : 'E. 67th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '68-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '67-york',
                                                        block:'You cannot go there'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '67-2'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '66-york'
                                                    },
                                                ],
                                              
                                            },
                                            {
                                                id      : '68-york',
                                                name    : 'E. 68th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '69-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '68-york',
                                                        block:'You cannot go there'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '68-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '67-york'
                                                    },
                                                ],  
                                            },
                                            {
                                                id      : '69-york',
                                                name    : 'E. 69th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '70-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '69-york',
                                                        block:'You cannot go there'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '69-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '68-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '70-york',
                                                name    : 'E. 70th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '71-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '70-york',
                                                        block:'You cannot go there'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '70-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '69-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '71-york',
                                                name    : 'E. 71st and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '72-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '71-fdr'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '71-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '70-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '72-york',
                                                name    : 'E. 72nd and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '73-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '72-fdr'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '72-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '71-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '73-york',
                                                name    : 'E. 73rd and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '74-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '73-fdr'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '73-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '72-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '74-york',
                                                name    : 'E. 74th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '75-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '74-fdr',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '74-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '73-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '75-york',
                                                name    : 'E. 75th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '76-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '75-fdr',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '75-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '74-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '76-york',
                                                name    : 'E. 76th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '76-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '76-fdr',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '76-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '75-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '77-york',
                                                name    : 'E. 77th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '78-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '77-fdr',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '77-2'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '76-1'
                                                    },
                                                  
                                                ],
                                            },
                                            {
                                                id      : '78-york',
                                                name    : 'E. 78th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '79-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '78-york',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '78-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '77-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '79-york',
                                                name    : 'E. 79th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '80-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '79-fdr'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '79-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '78-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '80-york',
                                                name    : 'E. 80th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '81-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : 'end-fdr'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '80-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '79-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '81-york',
                                                name    : 'E. 81st and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '82-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '81-fdr',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '81-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '80-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '82-york',
                                                name    : 'E. 82nd and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '83-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '82-york',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '82-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '81-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '83-york',
                                                name    : 'E. 83rd and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '84-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '83-york',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '83-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '82-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '84-york',
                                                name    : 'E. 84th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '85-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '84-york',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '84-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '83-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '85-york',
                                                name    : 'E. 85th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '86-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '85-york',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '85-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '84-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '86-york',
                                                name    : 'E.86th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '87-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '86-york',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '86-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '85-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '87-york',
                                                name    : 'E.87th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '88-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '87-york',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '87-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '86-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '88-york',
                                                name    : 'E.88th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '89-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '88-york',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '88-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '87-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '89-1',
                                                name    : 'E.89th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '90-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '89-frd',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '89-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '88-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '90-york',
                                                name    : 'E.90th and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '91-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '90-york',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '90-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '89-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '91-york',
                                                name    : 'E.91st and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '92-york'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '91-york',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '91-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '90-york'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '92-york',
                                                name    : 'E.92nd and York Ave',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '93-1',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '92-york',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '92-2'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '91-1'
                                                    },
                                                   
                                                ],
                                            },
                                            // FDR Streets
                                            {
                                                id      : '71-fdr',
                                                name    : 'E.71st and FDR Drive',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '72-fdr'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '94-fdr',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '94-york'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '93-1',
                                                        block: 'You cannot go that way'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '72-fdr',
                                                name    : 'E.72nd and FDR Drive',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '73-fdr'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '95-fdr',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '72-york'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '71-fdr'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '73-fdr',
                                                name    : 'E.73rd and FDR Drive',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '79-fdr'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '96-fdr',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '73-york'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '72-fdr'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '79-fdr',
                                                name    : 'E.79th and FDR Drive',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : 'end-fdr'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '97-fdr',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '79-york'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '73-fdr'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : 'end-fdr',
                                                name    : 'East End Ave. and FDR Drive',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '93-fdr'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '98-fdr',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '80-york'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '79-fdr'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '93-fdr',
                                                name    : 'E.93th and FDR Drive',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '94-fdr'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '99-fdr',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '93-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : 'end-fdr'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '94-fdr',
                                                name    : 'E.94th and FDR Drive',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '95-fdr'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '100-fdr',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '94-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '99-1'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '95-fdr',
                                                name    : 'E.95th and FDR Drive',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '96-fdr'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '101-york',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '96-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '94-fdr'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '96-fdr',
                                                name    : 'E.96th and FDR Drive',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '97-fdr'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '102-fdr',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '96-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '95-fdr'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '97-fdr',
                                                name    : 'E.97th and FDR Drive',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '98-fdr'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '103-york',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '97-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '97-fdr'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '98-fdr',
                                                name    : 'E.98th and FDR Drive',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '99-fdr'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '104-york',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '98-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '98-fdr'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '99-fdr',
                                                name    : 'E.99th and FDR Drive',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '100-fdr'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '105-fdr',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '100-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '98-fdr'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '100-fdr',
                                                name    : 'E.100th and FDR Drive',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '102-fdr'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '106-fdr',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '100-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '99-fdr'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '102-fdr',
                                                name    : 'E.102nd and FDR Drive',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '105-fdr'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '107-york',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '102-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '100-fdr'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '105-fdr',
                                                name    : 'E.105th and FDR Drive',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '106-fdr'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '108-york',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '105-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '102-fdr'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '106-fdr',
                                                name    : 'E.106th and FDR Drive',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir: ['n', 'north'],
                                                        id : '110-fdr'
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '109-york',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '106-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '105-fdr'
                                                    },
                                                ],
                                            },
                                            {
                                                id      : '110-fdr',
                                                name    : 'E.110th and FDR Drive',
                                                cord    : [],
                                                desc    : ``,
                                                isStreet: true,
                                                exit    : 
                                                [
                                                    {
                                                        dir  : ['n', 'north'],
                                                        id   : '110-1',
                                                        block: 'North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasit it Horace Greely who said, "Go south, young man"?',
                                                    },
                                                    {
                                                        dir: ['e', 'east'],
                                                        id : '110-fdr',
                                                        block: 'You cannot go that way'
                                                    },
                                                    {
                                                        dir: ['w', 'west'],
                                                        id : '110-1'
                                                    },
                                                    {
                                                        dir: ['s', 'south'],
                                                        id : '106-fdr'
                                                    },
                                                ],
                                            },
                                         
    ],
},