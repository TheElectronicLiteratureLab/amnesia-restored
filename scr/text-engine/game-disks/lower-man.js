const lowerMan = {
    roomId: 'whit-pete',
    rooms: [
        {   // starting SOUTH to NORTH on Whitehall St.
            id: 'whit-pete',
            coord: [],
            name: 'Whitehall St. and Peter Minuit Plz.',
            desc: `The Whitehall-South Station entrance is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'stat-whit'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'broa-sout'},
                {dir: 'west', id: 'pete-stat'} 
            ],
        },
        {
            id: 'stat-whit',
            coord: [],
            name: 'State St. and Whitehall St.',
            desc: `The Whitehall-Bway Station entrance at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'wate-whit'},
                {dir: 'south', id: 'whit-pete'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'pete-stat'}
            ],
        },
        {
            id: 'wate-whit',
            coord: [],
            name: 'Water St. and Whitehall St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'pear-whit'},
                {dir: 'south', id: 'stat-whit'},
                {dir: 'east', id: 'wate-moor'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'pear-whit',
            coord: [],
            name: 'Pearl St. and Whitehall St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'brid-whit'},
                {dir: 'south', id: 'wate-whit'},
                {dir: 'east', id: 'pear-moor'},
                {dir: 'west', id: 'pear-stat'}
            ],
        },
        {
            id: 'brid-whit',
            coord: [],
            name: 'Bridge St. and Whitehall St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'ston-whit'},
                {dir: 'south', id: 'pear-whit'},
                {dir: 'east', id: 'pear-brid'},
                {dir: 'west', id: 'brid-stat'}
            ],
        },
        {
            id: 'ston-whit',
            coord: [],
            name: 'Stone St. and Whitehall St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'batt-whit'},
                {dir: 'south', id: 'brid-whit'},
                {dir: 'east', id: 'ston-broa'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'batt-whit',
            coord: [],
            name: 'Battery Pl. and Whitehall St.',
            desc: `Looking south from this thin strip of park here at the southernmost tip of the city, you can see the Statue of Liberty, swathed in scaffolding while she's getting her once-a-century beauty treatment.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'beav-whit'},
                {dir: 'south', id: 'ston-whit'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'batt-stat'}
            ],
        },
        {
            id: 'beav-whit',
            coord: [],
            name: '',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'morr-broa'},
                {dir: 'south', id: 'batt-whit'},
                {dir: 'east', id: 'beav-new'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'morr-broa',
            coord: [],
            name: 'Morris St. and Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'exch-broa'},
                {dir: 'south', id: 'batt-stat'},
                {dir: 'east', id: 'beav-whit'},
                {dir: 'west', id: 'morr-trin'}
            ],
        },
        {
            id: 'exch-broa',
            coord: [],
            name: 'Exchange Pl. and Broadway',
            desc: `There is a Chock Full-O-Nuts at this intersection.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'rect-broa'},
                {dir: 'south', id: 'morr-broa'},
                {dir: 'east', id: 'exch-new'},
                {dir: 'west', id: 'exch-trin'},
                // add chock-full-o-nuts exit
            ],
        },
        {
            id: 'rect-broa',
            coord: [],
            name: 'Rector St. and Broadway',
            desc: `The American Stock Exchange-- an institution built of money.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wall-broa'},
                {dir: 'south', id: 'exch-broa'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'rect-trin'}
            ],
        },
        {
            id: 'wall-broa',
            coord: [],
            name: 'Wall St. and Broadway',
            desc: `The Wall-Broadway Station is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'pine-broa'},
                {dir: 'south', id: 'rect-broa'},
                {dir: 'east', id: 'new-wall'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'pine-broa',
            coord: [],
            name: 'Pine St. and Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'tham-broa'},
                {dir: 'south', id: 'wall-broa'},
                {dir: 'east', id: 'pine-nass'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'tham-broa',
            coord: [],
            name: 'Thames St. and Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'ceda-broa'},
                {dir: 'south', id: 'pine-broa'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'tham-trin'}
            ],
        },
        {
            id: 'ceda-broa',
            coord: [],
            name: 'Cedar St. and Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'libe-broa'},
                {dir: 'south', id: 'tham-broa'},
                {dir: 'east', id: 'ceda-nass'},
                {dir: 'west', id: 'ceda-trin'}
            ],
        },
        {
            id: 'libe-broa',
            coord: [],
            name: 'Liberty St. and Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'cort-broa'},
                {dir: 'south', id: 'ceda-broa'},
                {dir: 'east', id: 'libe-libe'},
                {dir: 'west', id: 'libe-trin'}
            ],
        },
        {
            id: 'cort-broa',
            coord: [],
            name: 'Cortlandt St. and Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'john-broa'},
                {dir: 'south', id: 'libe-broa'},
                {dir: 'east', id: 'maid-libe'},
                {dir: 'west', id: 'cort-trin'}
            ],
        },
        {
            id: 'john-broa',
            coord: [],
            name: 'John St. and Broadway',
            desc: `In the midst of all the Wall Street skyscrapers stands this lone nobel survivor of another ara. The plaque on the iron fence says St. Paul's Chapel is the only pre-Revolutionary War church still standing in Manhattan, and it was built when the city's population was less than 50,000.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fult-broa'},
                {dir: 'south', id: 'cort-broa'},
                {dir: 'east', id: 'john-nass'},
                {dir: 'west', id: 'dey-trin'}
            ],
        },
        {
            id: 'fult-broa',
            coord: [],
            name: 'Fulton St. and Broadway',
            desc: `The Fulton-Broadway Station is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'vese-broa'},
                {dir: 'south', id: 'john-broa'},
                {dir: 'east', id: 'fult-nass'},
                {dir: 'west', id: 'fult-chur'}
            ],
        },
        {
            id: 'vese-broa',
            coord: [],
            name: 'Vesey St. and Broadway',
            desc: `You've come to a small park near the Wall Street area. At the uptown end of the park is a small palace of white marble. You join a crowd that's gathered on the steps to listen to Mayor Koch welcome a foreign dignitary to the city. He seems to look straight down at you in the crowd as he says, "I know you'll always remember your visit to New York!"
            
            The dignitary receives the keys to the city and follows Mayor Koch into the palace, which is City Hall. The crowd disperses into the surrounding streets.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'barc-broa'},
                {dir: 'south', id: 'fult-broa'},
                {dir: 'east', id: 'ann-park'},
                {dir: 'west', id: 'vese-chur'}
            ],
        },
        {
            id: 'barc-broa',
            coord: [],
            name: 'Barclay St. and Broadway',
            desc: `The Barclay-Broadwy Station is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'park-broa'},
                {dir: 'south', id: 'vese-broa'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'barc-chur'}
            ],
        },
        {
            id: 'park-broa',
            coord: [],
            name: 'Park Pl. and Broadway',
            desc: `The Park Pl-Broadwy Station is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'murr-broa'},
                {dir: 'south', id: 'barc-broa'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'park-chur'}
            ],
        },
        {
            id: 'murr-broa',
            coord: [],
            name: 'Murray St. and Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'warr-broa'},
                {dir: 'south', id: 'park-broa'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'murr-chur'}
            ],
        },
        {
            id: 'warr-broa',
            coord: [],
            name: 'Warren St. and Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'cham-broa'},
                {dir: 'south', id: 'murr-broa'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'warr-chur'}
            ],
        },
        {
            id: 'cham-broa',
            coord: [],
            name: 'Chambers St. and Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'read-broa'},
                {dir: 'south', id: 'warr-broa'},
                {dir: 'east', id: 'cham-elk'},
                {dir: 'west', id: 'cham-chur'}
            ],
        },
        {
            id: 'read-broa',
            coord: [],
            name: 'Reade St. and Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'duan-broa'},
                {dir: 'south', id: 'cham-broa'},
                {dir: 'east', id: 'read-elk'},
                {dir: 'west', id: 'read-chur'}
            ],
        },
        {
            id: 'duan-broa',
            coord: [],
            name: 'Duane St. and Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'thom-broa'},
                {dir: 'south', id: 'read-broa'},
                {dir: 'east', id: 'duan-elk'},
                {dir: 'west', id: 'duan-chur'}
            ],
        },
        {
            id: 'thom-broa',
            coord: [],
            name: 'Thomas St. and Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wort-broa'},
                {dir: 'south', id: 'duan-broa'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'thom-chur'}
            ],
        },
        {
            id: 'wort-broa',
            coord: [],
            name: 'Worth St. and Broadway',
            desc: `There is a Chock Full-O-Nuts at this intersection.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'cath-broa'},
                {dir: 'south', id: 'thom-broa'},
                {dir: 'east', id: 'wort-lafa'},
                {dir: 'west', id: 'wort-chur'}
            ],
        },
        {
            id: 'cath-broa',
            coord: [],
            name: 'Catherine La. and Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'leon-broa'},
                {dir: 'south', id: 'wort-broa'},
                {dir: 'east', id: 'cath-lafa'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
    ],
};