const eastside = {
    roomId: 'cent-s-5', // Starting the node with Central Park S. and 5th Ave.
    rooms: [
    {
        id: 'cent-s-5', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
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
                id: 'cent-s-5'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '90-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '89-mad'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '91-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '90-mad'
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
                    id: '91-mad'
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
            onEnter: () => {
                pressEnter('91-5');
            },
        },
        {
            id: '92-5',
            name: 'E.92nd and 5th Ave',
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '93-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '92-mad'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '94-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '93-mad'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '95-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '94-mad'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '96-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '95-mad'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '97-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '96-mad'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '98-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '97-mad'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '101-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '98-mad'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '102-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '101-mad'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '103-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '102-mad'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '104-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '103-mad'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '105-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '104-mad'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '106-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '105-mad'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '107-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '106-mad'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '108-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '107-mad'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '109-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '108-mad'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '110-5'
                },
                {
                    dir: ['e', 'east'],
                    id: '109-mad'
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
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '110-5',
                    block: 'North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasit it Horace Greely who said, "Go south, young man"?',
                },
                {
                    dir: ['e', 'east'],
                    id: '110-mad'
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
        // MADDISON AVE STREETS
        {
        id: '59-mad', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
        name: 'E. 59th St. and Madison Ave', // Displayed each time the player enters the room.
        desc: ``, 
        
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '60-mad'
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
                id: '58-mad'
            },
        ],
    },
        {
        id: '60-mad',
        name: 'E. 60th and Madison Ave',
        desc: ``,
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '61-mad'
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
                id: '59-mad'
            },
            
        ],
      
        },
        {
            id: '61-mad',
            name: 'E. 61st and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '62-mad'
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
                    id: '60-mad'
                },
                
            ],
          
        },
        {
            id: '62-mad',
            name: 'E. 62nd and Madison Ave',
            desc: ``,
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
                    id: '61-mad'
                },
                
            ],
          
        },
        {
            id: '63-mad',
            name: 'E. 63rd and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '64-mad'
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
                    id: '62-mad'
                },
                
            ],
          
        },
        {
            id: '64-mad',
            name: 'E. 64th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '65-mad'
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
                    id: '63-mad'
                },
                
            ],
          
        },
        {
            id: '65-mad',
            name: 'E. 65th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '66-mad'
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
            id: '66-mad',
            name: 'E. 66th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '67-mad'
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
                    id: '65-mad'
                },
            ],
          
        },
        {
            id: '67-mad',
            name: 'E. 67th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '68-mad'
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
                    id: '66-mad'
                },
            ],
          
        },
        {
            id: '68-mad',
            name: 'E. 68th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '69-mad'
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
                    id: '67-mad'
                },
            ],  
        },
        {
            id: '69-mad',
            name: 'E. 69th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '70-mad'
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
                    id: '68-mad'
                },
            ],
        },
        {
            id: '70-mad',
            name: 'E. 70th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '71-mad'
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
                    id: '69-mad'
                },
            ],
        },
        {
            id: '71-mad',
            name: 'E. 71st and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '72-mad'
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
                    id: '70-mad'
                },
            ],
        },
        {
            id: '72-mad',
            name: 'E. 72nd and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '73-mad'
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
                    id: '71-mad'
                },
            ],
        },
        {
            id: '73-mad',
            name: 'E. 73rd and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '74-mad'
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
                    id: '72-mad'
                },
            ],
        },
        {
            id: '74-mad', // Museum Spot
            name: 'E. 74th and Madison Ave',
            desc: `You don't even notice that you've come to the Whitney Museum till you've come to the moat, where the sidewalk looks down to the basement sculpture garden, where a boy and a girl have taken some time off from modern art to make love unseen by anyone but you.`,
            onEnter: () => {
                reenableInput();
            },
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '75-mad'
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
                pressEnter('74-mad');
            },
        },
        {
            id: '75-mad',
            name: 'E. 75th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '76-mad'
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
                    id: '74-mad'
                },
            ],
        },
        {
            id: '76-mad',
            name: 'E. 76th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '76-mad'
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
                    id: '75-mad'
                },
            ],
        },
        {
            id: '77-mad',
            name: 'E. 77th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '78-mad'
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
                    id: '76-mad'
                },
            ],
        },
        {
            id: '78-mad',
            name: 'E. 78th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '79-mad'
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
                    id: '77-mad'
                },
            ],
        },
        {
            id: '79-mad',
            name: 'E. 79th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '80-mad'
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
                    id: '78-mad'
                },
            ],
        },
        {
            id: '80-mad',
            name: 'E. 80th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '81-mad'
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
                    id: '79-mad'
                },
            ],
        },
        {
            id: '81-mad',
            name: 'E. 81st and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '82-mad'
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
                    id: '80-mad'
                },
            ],
        },
        {
            id: '82-mad',
            name: 'E. 82nd and Madison Ave',
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '83-mad'
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
                    id: '81-mad'
                },
            ],
        },
        {
            id: '83-mad',
            name: 'E. 83rd and Madison Ave',
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '84-mad'
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
                    id: '82-mad'
                },
            ],
        },
        {
            id: '84-mad',
            name: 'E. 84th and Madison Ave',
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '85-mad'
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
                    id: '83-mad'
                },
            ],
        },
        {
            id: '85-mad',
            name: 'E. 85th and Madison Ave',
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '86-mad'
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
                    id: '84-mad'
                },
            ],
        },
        {
            id: '86-mad',
            name: 'E.86th and Madison Ave',
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '87-mad'
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
                    id: '85-mad'
                },
            ],
        },
        {
            id: '87-mad',
            name: 'E.87th and Madison Ave',
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '88-mad'
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
                    id: '86-mad'
                },
            ],
        },
        {
            id: '88-mad',
            name: 'E.88th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '89-mad'
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
            id: '89-mad',
            name: 'E.89th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '90-mad'
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
                    id: '88-mad'
                },
            ],
        },
        {
            id: '90-mad',
            name: 'E.90th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '91-mad'
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
                    id: '89-mad'
                },
            ],
        },
        {
            id: '91-mad',
            name: 'E.91st and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '92-mad'
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
                    id: '90-mad'
                },
            ],
        },
        {
            id: '92-mad',
            name: 'E.92nd and Madison Ave',
            desc: ``,    
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '93-mad'
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
                    id: '91-mad'
                },
            ],
        },
        {
            id: '93-mad',
            name: 'E.93rd and Madison Ave',
            desc: ``,    
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '94-mad'
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
                    id: '92-mad'
                },
            ],
        },
        {
            id: '94-mad',
            name: 'E.94th and Madison Ave',
            desc: ``,       
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '95-mad'
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
                    id: '93-mad'
                },
            ],
        },
        {
            id: '95-mad',
            name: 'E.95th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '96-mad'
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
                    id: '94-mad'
                },
            ],
        },
        {
            id: '96-mad',
            name: 'E.96th and Madison Ave',
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '97-mad'
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
                    id: '95-mad'
                },
            ],
        },
        {
            id: '97-mad',
            name: 'E.97th and Madison Ave',
            desc: ``,            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '98-mad'
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
                    id: '96-mad'
                },
            ],
        },
        {
            id: '98-mad',
            name: 'E.98th and Madison Ave',
            desc: ``,   
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '101-mad'
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
                    id: '97-mad'
                },
            ],
        },
        {
            id: '101-mad',
            name: 'E.101st and Madison Ave',
            desc: ``,        
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '102-mad'
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
                    id: '98-mad'
                },
            ],
        },
        {
            id: '102-mad',
            name: 'E.102nd and Madison Ave',
            desc: ``,   
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '103-mad'
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
                    id: '101-mad'
                },
            ],
        },
        {
            id: '103-mad',
            name: 'E.103rd and Madison Ave',
            desc: ``,
            
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '104-mad'
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
                    id: '102-mad'
                },
            ],
        },
        {
            id: '104-mad',
            name: 'E.104th and Madison Ave',
            desc: ``,           
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '105-mad'
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
                    id: '103-mad'
                },
            ],
        },
        {
            id: '105-mad',
            name: 'E.105th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '106-mad'
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
                    id: '104-mad'
                },
            ],
        },
        {
            id: '106-mad',
            name: 'E.106th and Madison Ave',
            desc: ``,
            exit:
            [
                {
                    dir: ['n', 'north'],
                    id: '107-mad'
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
                    id: '105-mad'
                },
            ],
        },
        {
            id: '107-mad',
            name: 'E.107th and Madison Ave',
            desc: ``,  
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '108-mad'
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
                    id: '106-mad'
                },
            ],
        },
        {
            id: '108-mad',
            name: 'E.108th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '109-mad'
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
                    id: '107-mad'
                },
            ],
        },
        {
            id: '109-mad',
            name: 'E.109th and Madison Ave',
            desc: ``,
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '110-mad'
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
                    id: '108-mad'
                },
            ],
        },
        {
            id: '110-mad',
            name: 'E.110th and Madison Ave',
            desc: ``,     
            exit: 
            [
                {
                    dir: ['n', 'north'],
                    id: '110-mad',
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
                    id: '109-mad'
                },
            ],
        },
                // PARK AVE STREETS
                {
                    id: '59-park', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
                    name: 'E. 59th St. and Park Ave', // Displayed each time the player enters the room.
                    desc: `There is a restaurant called Nedicks here.`,      
                    exit: 
                    [
                        {
                            dir: ['n', 'north'],
                            id: '60-park'
                        },
                        {
                            dir: ['e', 'east'],
                            id: '59-lex'
                        },
                        {
                            dir: ['w', 'west'],
                            id: '59-mad'    
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
                    exit: 
                    [
                        {
                            dir: ['n', 'north'],
                            id: '61-park'
                        },
                        {
                            dir: ['e', 'east'],
                            id: '60-lex'
                        },
                        {
                            dir: ['w', 'west'],
                            id: '60-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '62-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '61-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '61-mad'    
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '63-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '62-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '62-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '64-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '63-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '63-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '65-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '64-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '64-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '66-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '65-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '65-mad'    
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '67-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '66-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '66-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '68-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '67-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '67-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '69-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '68-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '68-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '70-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '69-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '69-mad'     
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
                                id: '70-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '70-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '72-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '71-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '71-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '73-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '72-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '72-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '74-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '73-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '73-mad'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '72-park'
                            },
                        ],
                    },
                    {
                        id: '74-park', 
                        name: 'E. 74th and Madison Ave',
                        desc: ``,
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '75-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '74-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '74-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '76-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '75-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '75-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '76-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '76-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '76-mad'     // Somehwere in Central Park, depending on how central park is mapped will be up to change. Even more north than the other some-cent
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '78-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '77-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '77-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '79-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '78-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '78-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '80-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '79-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '79-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '81-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '80-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '80-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '82-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '81-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '81-mad'    
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '83-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '82-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '82-mad'    
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '84-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '83-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '83-mad'    
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '85-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '84-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '84-mad'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '83-park'
                            },
                        ],
                    },
                    {
                        id: '85-mad',
                        name: 'E. 85th and Park Ave',
                        desc: ``,      
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '86-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '85-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '85-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '87-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '86-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '86-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '88-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '87-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '87-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '89-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '88-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '88-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '90-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '89-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '89-mad'  
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '91-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '90-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '90-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '92-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '91-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '91-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '93-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '92-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '92-mad'    
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '94-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '93-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '93-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '95-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '94-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '94-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '96-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '95-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '95-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '97-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '96-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '96-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '98-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '97-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '97-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '101-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '98-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '98-mad'    
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '102-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '101-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '101-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '103-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '102-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '102-mad'     
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
                        
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '104-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '103-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '103-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '105-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '104-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '104-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '106-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '105-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '105-mad'    
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
                        exit:
                        [
                            {
                                dir: ['n', 'north'],
                                id: '107-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '106-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '106-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '108-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '107-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '107-mad'    
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '109-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '108-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '108-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '110-park'
                            },
                            {
                                dir: ['e', 'east'],
                                id: '109-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '109-mad'     
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
                        exit: 
                        [
                            {
                                dir: ['n', 'north'],
                                id: '110-park',
                                block: 'North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasit it Horace Greely who said, "Go south, young man"?',
                            },
                            {
                                dir: ['e', 'east'],
                                id: '110-lex'
                            },
                            {
                                dir: ['w', 'west'],
                                id: '110-mad'     
                            },
                            {
                                dir: ['s', 'south'],
                                id: '109-park'
                            },
                        ],
                    },
    ],
},