const midwestside = {
    roomId: '59-12', // Starting the node in the top-left with W. 59th and 12th Ave.
    rooms: [

//Begin 59th St.
    {
        id: '59-12',
        name: 'W. 59th St. and 12th Ave.',
        exit: 
        [//Can't go North or West
            {
                dir: ['e', 'east'],
                id: '59-wend'
            },
            {
                dir: ['s', 'south'],
                id: '58-12'
            },
        ],
    },

    {
        id: '59-wend',
        name: 'W. 59th St. and West End Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '60-wend'
            },
            {
                dir: ['e', 'east'],
                id: '59-amst'
            },
            {
                dir: ['w', 'west'],
                id: '59-12'
            },
            {
                dir: ['s', 'south'],
                id: '58-11'
            },
            {//Subway Entrance
                dir: ['subway', 'entrance'],
                id: 'S-A-subway-ent'
            },
        ],
    },

    {
        id: '59-amst',
        name: 'W. 59th St. and Amsterdam Ave.',
        desc: `There is a subway entrance at this corner.`, // SUBWAY ENTERANCE
        
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '60-amst'
            },
            {
                dir: ['e', 'east'],
                id: '59-colu'
            },
            {
                dir: ['w', 'west'],
                id: '59-wend'
            },
            {
                dir: ['s', 'south'],
                id: '58-10'
            },
            {//Subway Entrance
                dir: ['subway', 'entrance'],
                id: '59-amst-subway-ent'
            },
        ],
    },

    {
        id: '59-colu',
        name: 'W. 59th St. and Columbus Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '60-colu'
            },
            {
                dir: ['e', 'east'],
                id: '59-broa'
            },
            {
                dir: ['w', 'west'],
                id: '59-amst'
            },
            {
                dir: ['s', 'south'],
                id: '58-9'
            },
        ],
    },

    {
        id: '59-broa',
        name: 'W. 59th St. and Broadway',   
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '60-broa'
            },
            {
                dir: ['e', 'east'],
                id: '59-cent'
            },
            {
                dir: ['w', 'west'],
                id: '59-colu'
            },
            {
                dir: ['s', 'south'],
                id: 'broa-8'
            },
        ],
    },

    {
        id: '59-cent',
        name: 'W. 59th St. and Central Pk. W.',  
        desc: `The monument to Christopher Columbus surveys a large undistinguished building called the Coliseum, which shows no signs of its Roman heritage.`, 
        exit: 
        [
            {//Game takes you to 61st and Central Park W. Sort-of checks out on the map
                dir: ['n', 'north'],
                id: '61-cent'
            },
            {
                dir: ['e', 'east'],
                id: 'cent-7'
            },
            {
                dir: ['w', 'west'],
                id: '59-broa'
            },
            {
                dir: ['s', 'south'],
                id: 'broa-8'
            },
        ],
    },
//Somewhere
    {
        id: 'cent-7',
        name: 'Central Park S. and 7th Ave.',
        exit: 
        [
            {//Somewhere in central park
                dir: ['n', 'north'],
                id: 'S-A'
            },
            {
                dir: ['e', 'east'],
                id: 'cent-amer'
            },
            {
                dir: ['w', 'west'],
                id: '59-cent'
            },
            {
                dir: ['s', 'south'],
                id: '58-7'
            },
        ],
    },
//somewhere
    {
        id: 'cent-amer',
        name: 'Central Park S. and Ave of Americas',
        desc: `There is a restaurant called Nedicks here.`, // Nedicks entrance
        exit: 
        [
            {//Somewhere in Central Park
                dir: ['n', 'north'],
                id: 'S-A'
            },
            {
                dir: ['e', 'east'],
                id: 'cent-wdri'
            },
            {
                dir: ['w', 'west'],
                id: 'cent-7'
            },
            {
                dir: ['s', 'south'],
                id: '58-amer'
            },
            {//Nedicks Entrance
                dir: ['nedicks',],
                id: 'cent-amer-nedicks'
            },
        ],
    },
//End 59th St.

//Begin 58th St.
    {
        id: '58-12',
        name: 'W. 58th St. and 12th Ave.',
        exit: 
        [//Can't go West
            {
                dir: ['n', 'north'],
                id: '59-12'
            },
            {
                dir: ['e', 'east'],
                id: '58-11'
            },
            {
                dir: ['s', 'south'],
                id: '57-12'
            },
        ],
    },

    {
        id: '58-11',
        name: 'W. 58th St. and 11th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '59-wend'
            },
            {
                dir: ['e', 'east'],
                id: '58-10'
            },
            {
                dir: ['w', 'west'],
                id: '58-12'
            },
            {
                dir: ['s', 'south'],
                id: '57-11'
            },
        ],
    },

    {
        id: '58-10',
        name: 'W. 58th St. and 10th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '59-amst'
            },
            {
                dir: ['e', 'east'],
                id: '58-9'
            },
            {
                dir: ['w', 'west'],
                id: '58-11'
            },
            {
                dir: ['s', 'south'],
                id: '57-10'
            },
        ],
    },

    {
        id: '58-9',
        name: 'W. 58th St. and 9th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '59-colu'
            },
            {
                dir: ['e', 'east'],
                id: '58-8'
            },
            {
                dir: ['w', 'west'],
                id: '58-10'
            },
            {
                dir: ['s', 'south'],
                id: '57-9'
            },
        ],
    },

    {
        id: 'broa-8',
        name: 'Broadway and 8th Ave.',
        desc: `There is a subway entrance at this corner.`, // SUBWAY ENTERANCE
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: '59-cent'
            },
            {
                dir: ['e', 'east'],
                id: '58-broa'
            },
            {
                dir: ['w', 'west'],
                id: '59-broa'
            },
            {
                dir: ['s', 'south'],
                id: '58-8'
            },
            {//Subway Entrance
                dir: ['subway', 'entrance'],
                id: 'broa-8-subway-ent'
            },
        ],
    },

    {
        id: '58-8',
        name: 'W. 58th St. and 8th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: 'broa-8'
            },
            {
                dir: ['e', 'east'],
                id: '58-broa'
            },
            {
                dir: ['w', 'west'],
                id: '58-9'
            },
            {
                dir: ['s', 'south'],
                id: '57-8'
            },
        ],
    },

    {
        id: '58-broa',
        name: 'W. 58th St. and Broadway',
        desc: `Cars spin around on Columbus Circle like atomic particles in a particle accelerator, while pedestrians scamper for safety as best they can. Clearly, this is an experiment designed to control the city's expanding population.`,
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: 'broa-8'
            },
            {
                dir: ['e', 'east'],
                id: '58-7'
            },
            {
                dir: ['w', 'west'],
                id: '58-8'
            },
            {
                dir: ['s', 'south'],
                id: '57-broa'
            },
        ],
    },

    {
        id: '58-7',
        name: 'W. 58th St. and 7th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: 'cent-7'
            },
            {
                dir: ['e', 'east'],
                id: '58-amer'
            },
            {
                dir: ['w', 'west'],
                id: '58-broa'
            },
            {
                dir: ['s', 'south'],
                id: '57-7'
            },
        ],
    },

    {
        id: '58-amer',
        name: 'W. 58th St. and Ave of Americas',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: 'cent-amer'
            },
            {
                dir: ['e', 'east'],
                id: '58-wdri'
            },
            {
                dir: ['w', 'west'],
                id: '58-7'
            },
            {
                dir: ['s', 'south'],
                id: '57-amer'
            },
        ],
    },
//End 58th St.




//-----Current Progress-----

//Start 57th St.
    {
        id: '57-12',
        name: 'W. 57th St. and #th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: 'S-A'
            },
            {
                dir: ['e', 'east'],
                id: 'S-A'
            },
            {
                dir: ['w', 'west'],
                id: 'S-A'
            },
            {
                dir: ['s', 'south'],
                id: 'S-A'
            },
        ],
    },

    {
        id: '57-11',
        name: 'W. 57th St. and #th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: 'S-A'
            },
            {
                dir: ['e', 'east'],
                id: 'S-A'
            },
            {
                dir: ['w', 'west'],
                id: 'S-A'
            },
            {
                dir: ['s', 'south'],
                id: 'S-A'
            },
        ],
    },

    {
        id: '57-10',
        name: 'W. 57th St. and #th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: 'S-A'
            },
            {
                dir: ['e', 'east'],
                id: 'S-A'
            },
            {
                dir: ['w', 'west'],
                id: 'S-A'
            },
            {
                dir: ['s', 'south'],
                id: 'S-A'
            },
        ],
    },

    {
        id: '57-9',
        name: 'W. 57th St. and #th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: 'S-A'
            },
            {
                dir: ['e', 'east'],
                id: 'S-A'
            },
            {
                dir: ['w', 'west'],
                id: 'S-A'
            },
            {
                dir: ['s', 'south'],
                id: 'S-A'
            },
        ],
    },

    {
        id: '57-8',
        name: 'W. 57th St. and #th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: 'S-A'
            },
            {
                dir: ['e', 'east'],
                id: 'S-A'
            },
            {
                dir: ['w', 'west'],
                id: 'S-A'
            },
            {
                dir: ['s', 'south'],
                id: 'S-A'
            },
        ],
    },

    {
        id: '57-broa',
        name: 'W. 57th St. and #th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: 'S-A'
            },
            {
                dir: ['e', 'east'],
                id: 'S-A'
            },
            {
                dir: ['w', 'west'],
                id: 'S-A'
            },
            {
                dir: ['s', 'south'],
                id: 'S-A'
            },
        ],
    },

    {
        id: '57-7',
        name: 'W. 57th St. and #th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: 'S-A'
            },
            {
                dir: ['e', 'east'],
                id: 'S-A'
            },
            {
                dir: ['w', 'west'],
                id: 'S-A'
            },
            {
                dir: ['s', 'south'],
                id: 'S-A'
            },
        ],
    },

    {
        id: '57-amer',
        name: 'W. 57th St. and #th Ave.',
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: 'S-A'
            },
            {
                dir: ['e', 'east'],
                id: 'S-A'
            },
            {
                dir: ['w', 'west'],
                id: 'S-A'
            },
            {
                dir: ['s', 'south'],
                id: 'S-A'
            },
        ],
    },
//End 57th St.

//Start 56th St.
{
    id: '5#-12',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-11',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-10',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-9',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-8',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-broa',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-7',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-amer',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},
//End 56th St.

//Start 55th St.
{
    id: '5#-12',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-11',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-10',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-9',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-8',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-broa',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-7',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-amer',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},
//End 55th St.

//Start 54th St.
{
    id: '5#-12',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-11',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-10',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-9',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-8',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-broa',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-7',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-amer',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},
//End 54th St.

//Start 53rd St.
{
    id: '5#-12',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-11',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-10',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-9',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-8',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-broa',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-7',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-amer',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},
//End 53rd St.

//Start 52nd St.
{
    id: '5#-12',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-11',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-10',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-9',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-8',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-broa',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-7',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-amer',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},
//End 52nd St.

//Start 51st St.
{
    id: '5#-12',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-11',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-10',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-9',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-8',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-broa',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-7',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-amer',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},
//End 51st St.

//Start 50th St.
{
    id: '5#-12',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-11',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-10',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-9',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-8',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-broa',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-7',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-amer',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},
//End 50th St.


//Start Templates

 //Start Room Template
    {
        id: 'St-Ave',
        name: 'W. #th St. and #th Ave.',
        desc: `There is a subway entrance at this corner.`, // SUBWAY ENTERANCE
        exit: 
        [
            {
                dir: ['n', 'north'],
                id: 'S-A'
            },
            {
                dir: ['e', 'east'],
                id: 'S-A'
            },
            {
                dir: ['w', 'west'],
                id: 'S-A'
            },
            {
                dir: ['s', 'south'],
                id: 'S-A'
            },
            {//Subway Entrance
                dir: ['subway', 'entrance'],
                id: 'S-A-subway-ent'
            },
        ],
    },
 //End Room Template

 //Start Block Template

//Start 5#th St.
{
    id: '5#-12',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-11',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-10',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-9',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-8',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-broa',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-7',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},

{
    id: '5#-amer',
    name: 'W. 5#th St. and #th Ave.',
    exit: 
    [
        {
            dir: ['n', 'north'],
            id: 'S-A'
        },
        {
            dir: ['e', 'east'],
            id: 'S-A'
        },
        {
            dir: ['w', 'west'],
            id: 'S-A'
        },
        {
            dir: ['s', 'south'],
            id: 'S-A'
        },
    ],
},
//End 5#th St.

//Still need streets 49 through 34

 //End Block Template

//End Templates

//Naming conventions in this disk: 
//Midtown West Side > midwestside
//West End Ave. > wend
//Amsterdam Ave. > amst
//Columbus Ave. > colu
//Central Park W > cent
//Broadway > broa
//Ave of Americas > amer
//West Drive > wdri



    ],
},