const lowerMan = {
    roomId: 'whit-pete',
    rooms: [
        {   
            id: 'whit-pete',
            coord: [],
            name: 'Whitehall St. and Peter Minuit Plaza',
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
            name: 'Beaver St. and Whitehall St.',
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
                {dir: '', id: ''} // add chock-full-o-nuts exit
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
                {dir: '', id: ''} // can you go in?? American Stock Exchange check
            ],
        },
        {
            id: 'wall-broa',
            coord: [],
            name: 'Wall St. and Broadway',
            desc: `The Wall-Broadway Station entrance is at this corner.`,
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
            desc: `The Fulton-Broadway Station entrance is at this corner.`,
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
            desc: `The Barclay-Broadwy Station entrance is at this corner.`,
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
            desc: `The Park Pl-Broadwy Station entrance is at this corner.`,
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
                {dir: 'west', id: 'wort-chur'},
                {dir: '', id: ''} // add chock full-o-nuts exit
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
        {
            id: 'broa-sout',
            coord: [],
            name: 'Broad St. and South St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wate-broa'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'olds-sout'},
                {dir: 'west', id: 'whit-pete'}
            ],
        },
        {
            id: 'wate-broa',
            coord: [],
            name: 'Water St. and Broad St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'brid-pear'},
                {dir: 'south', id: 'broa-sout'},
                {dir: 'east', id: 'wate-coen'},
                {dir: 'west', id: 'wate-moor'}
            ],
        },
        {
            id: 'brid-pear',
            coord: [],
            name: 'Bridge St. and Pearl St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'ston-broa'},
                {dir: 'south', id: 'wate-broa'},
                {dir: 'east', id: 'pear-ston'},
                {dir: 'west', id: 'pear-brid'}
            ],
        },
        {
            id: 'ston-broa',
            coord: [],
            name: 'Stone St. and Broad St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'swil-broa'},
                {dir: 'south', id: 'brid-pear'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'ston-whit'}
            ],
        },
        {
            id: 'swil-broa',
            coord: [],
            name: 'S. William St. and Broad St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'mark-broa'},
                {dir: 'south', id: 'ston-broa'},
                {dir: 'east', id: 'beav-swil'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'mark-broa',
            coord: [],
            name: 'Marketfield St. and Broad St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'beav-broa'},
                {dir: 'south', id: 'swil-broa'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'beav-new'}
            ],
        },
        {
            id: 'beav-broa',
            coord: [],
            name: 'Beaver St. and Broad St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'exch-nass'},
                {dir: 'south', id: 'mark-broa'},
                {dir: 'east', id: 'beav-will'},
                {dir: 'west', id: 'beav-new'}
            ],
        },
        {
            id: 'exch-nass',
            coord: [],
            name: 'Exchange Pl. and Nassau St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wall-nass'},
                {dir: 'south', id: 'beav-broa'},
                {dir: 'east', id: 'exch-will'},
                {dir: 'west', id: 'exch-new'}
            ],
        },
        {
            id: 'wall-nass',
            coord: [],
            name: 'Wall St. and Nassau St.',
            desc: `The Broad-Wall Station entrance is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'pine-nass'},
                {dir: 'south', id: 'exch-nass'},
                {dir: 'east', id: 'wall-will'},
                {dir: 'west', id: 'new-wall'}
            ],
        },
        {
            id: 'pine-nass',
            coord: [],
            name: 'Pine St. and Nassau St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'ceda-nass'},
                {dir: 'south', id: 'wall-nass'},
                {dir: 'east', id: 'pine-broa'},
                {dir: 'west', id: 'pine-will'}
            ],
        },
        {
            id: 'ceda-nass',
            coord: [],
            name: 'Cedar St. and Nassau St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'libe-nass'},
                {dir: 'south', id: 'pine-nass'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'ceda-broa'}
            ],
        },
        {
            id: 'libe-nass',
            coord: [],
            name: 'Liberty St. and Nassau St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'maid-nass'},
                {dir: 'south', id: 'ceda-nass'},
                {dir: 'east', id: 'libe-swil'},
                {dir: 'west', id: 'libe-libe'}
            ],
        },
        {
            id: 'maid-nass',
            coord: [],
            name: 'Maiden La. and Nassau St.',
            desc: `You are on Nassau, a street that here has been converted to a pedestrian mall where a variety of shops provies honey for the hives of Wall Street.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'john-nass'},
                {dir: 'south', id: 'libe-nass'},
                {dir: 'east', id: 'maid-will'},
                {dir: 'west', id: 'maid-libe'}
            ],
        },
        {
            id: 'john-nass',
            coord: [],
            name: 'John St. and Nassau St.',
            desc: `The John-Nassau Station entrance is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'fult-nass'},
                {dir: 'south', id: 'maid-nass'},
                {dir: 'east', id: 'john-dutc'},
                {dir: 'west', id: 'john-broa'}
            ],
        },
        {
            id: 'fult-nass',
            coord: [],
            name: 'Fulton St. and Nassau St.',
            desc: `The Fulton-Nassau Station entrance is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'ann-nass'},
                {dir: 'south', id: 'john-nass'},
                {dir: 'east', id: 'fult-dutc'},
                {dir: 'west', id: 'fult-broa'}
            ],
        },
        {
            id: 'ann-nass',
            coord: [],
            name: 'Ann St. and Nassau St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'beek-nass'},
                {dir: 'south', id: 'fult-nass'},
                {dir: 'east', id: 'ann-will'},
                {dir: 'west', id: 'ann-park'}
            ],
        },
        {
            id: 'beek-nass',
            coord: [],
            name: 'Beekman St. and Nassau St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'spru-nass'},
                {dir: 'south', id: 'ann-nass'},
                {dir: 'east', id: 'beek-will'},
                {dir: 'west', id: 'beek-park'}
            ],
        },
        {
            id: 'spru-nass',
            coord: [],
            name: 'Spruce St. and Nassau St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fran-park'},
                {dir: 'south', id: 'beek-mass'},
                {dir: 'east', id: 'spru-gold'},
                {dir: 'west', id: 'spru-park'}
            ],
        },
        {
            id: 'fran-park',
            coord: [],
            name: 'Frankfort St. and Park Row',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'park-cent'},
                {dir: 'south', id: 'spru-nass'},
                {dir: 'east', id: 'fran-gold'},
                {dir: 'west', id: 'spru-park'}
            ],
        },
        {
            id: 'park-cent',
            coord: [],
            name: 'Park Row and Centre St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'cham-cent'},
                {dir: 'south', id: 'fran-park'},
                {dir: 'east', id: 'broo-park'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'cham-cent',
            coord: [],
            name: 'Chambers St. and Centre St.',
            desc: `The Chambers-Centre Station entrance is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'read-cent'},
                {dir: 'south', id: 'park-cent'},
                {dir: 'east', id: 'broo-park'},
                {dir: 'west', id: 'cham-elk'}
            ],
        },
        {
            id: 'read-cent',
            coord: [],
            name: 'Reade St. and Centre St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'duan-cent'},
                {dir: 'south', id: 'cham-cent'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'read-elk'}
            ],
        },
        {
            id: 'duan-cent',
            coord: [],
            name: 'Duane St. and Centre St.',
            desc: `The Duane-Lafayette Station entrance is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'cent-lafa'},
                {dir: 'south', id: 'read-cent'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'duan-elk'}
            ],
        },
        {
            id: 'cent-lafa',
            coord: [],
            name: 'Centre St. and Lafayette St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'pear-cent'},
                {dir: 'south', id: 'duan-cent'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'pear-lafa'}
            ],
        },
        {
            id: 'pear-cent',
            coord: [],
            name: 'Pearl St. and Centre St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'hami-cent'},
                {dir: 'south', id: 'cent-lafa'},
                {dir: 'east', id: 'pear-kent'},
                {dir: 'west', id: 'pear-lafa'}
            ],
        },
        {
            id: 'hami-cent',
            coord: [],
            name: 'Hamill Pl. and Centre St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wort-cent'},
                {dir: 'south', id: 'pear-cent'},
                {dir: 'east', id: 'wort-hami'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'wort-cent',
            coord: [],
            name: 'Worth St. and Centre St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'leon-cent'},
                {dir: 'south', id: 'hami-cent'},
                {dir: 'east', id: 'wort-hami'},
                {dir: 'west', id: 'wort-lafa'}
            ],
        },
        {
            id: 'olds-sout',
            coord: [],
            name: 'Old Slip and South St.',
            desc: `There is a pizzeria here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'gouv-sout'},
                {dir: 'south', id: 'broa-sout'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'olds-fron'},
                {dir: '', id: ''} // add pizzeria exit
            ],
        },
        {
            id: 'gouv-sout',
            coord: [],
            name: 'Gouverneur La. and South St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wall-sout'},
                {dir: 'south', id: 'olds-sout'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'gouv-fron'}
            ],
        },
        {
            id: 'wall-sout',
            coord: [],
            name: 'Wall St. and South St.',
            desc: `There is a luncheonette on the corner.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'pine-sout'},
                {dir: 'south', id: 'gouv-sout'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'wall-fron'},
                {dir: '', id: ''} // add luncheonette exit
            ],
        },
        {
            id: 'pine-sout',
            coord: [],
            name: 'Pine St. and South St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'libe-sout'},
                {dir: 'south', id: 'wall-sout'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'pine-fron'}
            ],
        },
        {
            id: 'libe-sout',
            coord: [],
            name: 'Liberty St. and South St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'flet-sout'},
                {dir: 'south', id: 'pine-sout'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'libe-fron'}
            ],
        },
        {
            id: 'flet-sout',
            coord: [],
            name: 'Fletcher St. and South St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'john-sout'},
                {dir: 'south', id: 'libe-sout'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'flet-fron'}
            ],
        },
        {
            id: 'john-sout',
            coord: [],
            name: 'John St. and South St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fult-sout'},
                {dir: 'south', id: 'flet-sout'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'john-fron'}
            ],
        },
        {
            id: 'fult-sout',
            coord: [],
            name: 'Fulton St. and South St.',
            desc: `The South Street Seaport is a tourist attraction that today at least has not attracted any tourists. The sailing boats docked along the river are equal in number to the people who've come to look at them.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'beek-sout'},
                {dir: 'south', id: 'john-sout'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'fult-fron'}
            ],
        },
        {
            id: 'beek-sout',
            coord: [],
            name: 'Beekman St. and South St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'peck-sout'},
                {dir: 'south', id: 'fult-sout'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'beek-fron'}
            ],
        },
        {
            id: 'peck-sout',
            coord: [],
            name: 'Peck Slip and South St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'dove-sout'},
                {dir: 'south', id: 'beek-sout'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'peck-fron'}
            ],
        },
        {
            id: 'dove-sout',
            coord: [],
            name: 'Dover St. and South St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'sout-broo'},
                {dir: 'south', id: 'peck-sout'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'dove-fron'}
            ],
        },
        {
            id: 'sout-broo',
            coord: [],
            name: 'South St. and Brooklyn Bridge',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'dove-sout'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'wate-moor',
            coord: [],
            name: 'Water St. and Moore St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'pear-moor'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'wate-broa'},
                {dir: 'west', id: 'wate-whit'}
            ],
        },
        {
            id: 'pear-moor',
            coord: [],
            name: 'Pearl St. and Moore St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'wate-moor'},
                {dir: 'east', id: 'pear-brid'},
                {dir: 'west', id: 'pear-whit'}
            ],
        },
        {
            id: 'pear-brid',
            coord: [],
            name: 'Pearl St. and Bridge St.',
            desc: `As you pass New York Police Headquarters you decide that you would be better off elsewhere.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'brid-whit'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'brid-pear'},
                {dir: 'west', id: 'pear-moor'},
                {dir: 'new york police headquarters', block: `You would be better off elsewhere, remember?`}
            ],
        },
        {
            id: 'beav-swil',
            coord: [],
            name: 'Beaver St. and S. William St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'exch-swil'},
                {dir: 'south', id: 'swil-broa'},
                {dir: 'east', id: 'beav-olds'},
                {dir: 'west', id: 'beav-broa'}
            ],
        },
        {
            id: 'exch-swil',
            coord: [],
            name: 'Exchange Pl. and S. William St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wall-swil'},
                {dir: 'south', id: 'beav-swil'},
                {dir: 'east', id: 'exch-hano'},
                {dir: 'west', id: 'exch-nass'}
            ],
        },
        {
            id: 'wall-swil',
            coord: [],
            name: 'Wall St. and S. William St.',
            desc: `The old Trinity Church seems oddly out of place amidst the financial canyons of Wall Street.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'pine-swil'},
                {dir: 'south', id: 'exch-swil'},
                {dir: 'east', id: 'wall-hano'},
                {dir: 'west', id: 'wall-nass'},
                {dir: 'trinity church', block: `There is no point to going there.`}
            ],
        },
        {
            id: 'pine-swil',
            coord: [],
            name: 'Pine St. and S. William St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'ceda-swil'},
                {dir: 'south', id: 'wall-swil'},
                {dir: 'east', id: 'pine-pear'},
                {dir: 'west', id: 'pine-nass'}
            ],
        },
        {
            id: 'ceda-swil',
            coord: [],
            name: 'Cedar St. and S. William St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'libe-swil'},
                {dir: 'south', id: 'pine-swil'},
                {dir: 'east', id: 'ceda-pear'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'libe-swil',
            coord: [],
            name: 'Liberty St. and S. William St.',
            desc: `The welded iron sculptures of Louise Nevelson Plaza made a desperate bid for the pedestrians' attention, but most of them walk past too abstracted themselves to notice all that Abstract Art is trying so hard to do.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'maid-will'},
                {dir: 'south', id: 'ceda-swil'},
                {dir: 'east', id: 'maid-libe'},
                {dir: 'west', id: 'libe-nass'}
            ],
        },
        {
            id: 'maid-will',
            coord: [],
            name: 'Maiden La. and William St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'plat-will'},
                {dir: 'south', id: 'libe-swil'},
                {dir: 'east', id: 'maid-libe'},
                {dir: 'west', id: 'maid-nass'}
            ],
        },
        {
            id: 'plat-will',
            coord: [],
            name: 'Platt St. and William St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'john-will'},
                {dir: 'south', id: 'maid-will'},
                {dir: 'east', id: 'plat-gold'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'john-will',
            coord: [],
            name: 'John St. and William St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fult-will'},
                {dir: 'south', id: 'maid-will'},
                {dir: 'east', id: 'john-gold'},
                {dir: 'west', id: 'john-dutc'}
            ],
        },
        {
            id: 'fult-will',
            coord: [],
            name: 'Fulton St. and William St.',
            desc: `The Fulton-William Station entrance is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'ann-will'},
                {dir: 'south', id: 'john-will'},
                {dir: 'east', id: 'fult-gold'},
                {dir: 'west', id: 'fult-dutc'}
            ],
        },
        {
            id: 'ann-will',
            coord: [],
            name: 'Ann St and William St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'beek-will'},
                {dir: 'south', id: 'fult-will'},
                {dir: 'east', id: 'ann-gold'},
                {dir: 'west', id: 'ann-nass'}
            ],
        },
        {
            id: 'beek-will',
            coord: [],
            name: 'Beekman St. and William St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'ann-will'},
                {dir: 'east', id: 'beek-gold'},
                {dir: 'west', id: 'beek-nass'}
            ],
        },
        {
            id: 'john-dutc',
            coord: [],
            name: 'John St. and Dutch St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fult-dutc'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'john-will'},
                {dir: 'west', id: 'john-nass'}
            ],
        },
        {
            id: 'fult-dutc',
            coord: [],
            name: 'Fulton St. and Dutch St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'john-dutc'},
                {dir: 'east', id: 'fult-will'},
                {dir: 'west', id: 'fult-nass'}
            ],
        },
        {
            id: 'maid-libe',
            coord: [],
            name: 'Maiden La. and Liberty St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'maid-will'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'libe-gold'},
                {dir: 'west', id: 'libe-swil'}
            ],
        },
        {
            id: 'libe-gold',
            coord: [],
            name: 'Liberty St. and Gold St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'plat-gold'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'libe-pear'},
                {dir: 'west', id: 'maid-libe'}
            ],
        },
        {
            id: 'plat-gold',
            coord: [],
            name: 'Platt St. and Gold St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'john-gold'},
                {dir: 'south', id: 'libe-gold'},
                {dir: 'east', id: 'plat-pear'},
                {dir: 'west', id: 'plat-will'}
            ],
        },
        {
            id: 'john-gold',
            coord: [],
            name: 'John St. and Gold St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fult-gold'},
                {dir: 'south', id: 'plat-gold'},
                {dir: 'east', id: 'john-clif'},
                {dir: 'west', id: 'john-will'}
            ],
        },
        {
            id: 'fult-gold',
            coord: [],
            name: 'Fulton St. and Gold St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'ann-gold'},
                {dir: 'south', id: 'john-gold'},
                {dir: 'east', id: 'fult-clif'},
                {dir: 'west', id: 'fult-will'}
            ],
        },
        {
            id: 'ann-gold',
            coord: [],
            name: 'Ann St. and Gold St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'beek-gold'},
                {dir: 'south', id: 'fult-gold'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'ann-will'}
            ],
        },
        {
            id: 'beek-gold',
            coord: [],
            name: 'Beekman St. and Gold St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'spru-gold'},
                {dir: 'south', id: 'ann-gold'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'beek-will'}
            ],
        },
        {
            id: 'spru-gold',
            coord: [],
            name: 'Spruce St. and Gold St.',
            desc: `There is a luncheonette on the corner.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fran-gold'},
                {dir: 'south', id: 'beek-gold'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'spru-nass'},
                {dir: '', id: ''} // add luncheonette exit
            ],
        },
        {
            id: 'fran-gold',
            coord: [],
            name: 'Frankfort St. and Gold St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'spru-gold'},
                {dir: 'east', id: 'fran-stja'},
                {dir: 'west', id: 'fran-park'}
            ],
        },
        {
            id: 'john-clif',
            coord: [],
            name: 'John St. and Cliff St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fult-clif'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'john-pear'},
                {dir: 'west', id: 'john-clif'}
            ],
        },
        {
            id: 'fult-clif',
            coord: [],
            name: 'Fulton St. and Cliff St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'beek-clif'},
                {dir: 'south', id: 'john-clif'},
                {dir: 'east', id: 'fult-pear'},
                {dir: 'west', id: 'fult-gold'}
            ],
        },
        {
            id: 'beek-clif',
            coord: [],
            name: 'Beekman St. and Cliff St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'fult-clif'},
                {dir: 'east', id: 'beek-pear'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'beav-new',
            coord: [],
            name: 'Beaver St. and New St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'exch-new'},
                {dir: 'south', id: 'mark-broa'},
                {dir: 'east', id: 'beav-broa'},
                {dir: 'west', id: 'beav-whit'}
            ],
        },
        {
            id: 'exch-new',
            coord: [],
            name: 'Exchange Pl. and New St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'new-wall'},
                {dir: 'south', id: 'beav-new'},
                {dir: 'east', id: 'exch-nass'},
                {dir: 'west', id: 'exch-broa'}
            ],
        },
        {
            id: 'new-wall',
            coord: [],
            name: 'New St. and Wall St.',
            desc: `The New York Stock Exchange-- where all the wealth of the country turns into a sea of numbers, constatnly shifting and changing but always supporting the fleets of bankers and brokers who are its mariners.`,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'exch-new'},
                {dir: 'east', id: 'wall-nass'},
                {dir: 'west', id: 'wall-broa'},
                {dir: 'new york stock exchange', block: `There is no point to going there.`}
            ],
        },
        {
            id: 'libe-libe',
            coord: [],
            name: 'Liberty St. and Liberty Pl.',
            desc: `You stop to read the plaque fixed to the corner of the Federal Reserve Bank and are dully impressed by the information that five stories of this Renaissance palace are below street level 'with subterranean vaults resting on bedrock.'`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'maid-libe'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'libe-nass'},
                {dir: 'west', id: 'libe-broa'},
                {dir: 'federal reserve bank', id: 'libe-libe-1'}
            ],
        },
        {
            id: 'libe-libe-1',
            coord: [],
            name: 'Federal Reserve Bank Lobby',
            desc: ``,
            onEnter: () => {
                println(`You walk through the smoked-glass doors, and enter a lobby decorated in stone. A security desk near the elevators makes you think twice about remaining.
                
                You turn away quickly and leave.`);
                pressEnter('libe-libe');
            }
        },
        {
            id: 'maid-libe',
            coord: [],
            name: 'Maiden La. and Liberty Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'libe-libe'},
                {dir: 'east', id: 'maid-nass'},
                {dir: 'west', id: 'cort-broa'}
            ],
        },
        {
            id: 'ann-park',
            coord: [],
            name: 'Ann St. and Park Row',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'beek-park'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'ann-nass'},
                {dir: 'west', id: 'vese-broa'}
            ],
        },
        {
            id: 'beek-park',
            coord: [],
            name: 'Beekman St. and Park Row',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'spru-park'},
                {dir: 'south', id: 'ann-park'},
                {dir: 'east', id: 'beek-nass'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'spru-park',
            coord: [],
            name: 'Spruce St. and Park Row',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fran-park'},
                {dir: 'south', id: 'beek-park'},
                {dir: 'east', id: 'spru-nass'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'wate-coen',
            coord: [],
            name: 'Water St. and Coenties Slip',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wate-olds'},
                {dir: 'south', id: 'wate-broa'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'pear-ston'}
            ],
        },
        {
            id: 'wate-olds',
            coord: [],
            name: 'Water St. and Old Slip',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'gouv-wate'},
                {dir: 'south', id: 'wate-coen'},
                {dir: 'east', id: 'olds-fron'},
                {dir: 'west', id: 'pear-olds'}
            ],
        },
        {
            id: 'gouv-wate',
            coord: [],
            name: 'Gouverneur La. and Water St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wall-wate'},
                {dir: 'south', id: 'wate-olds'},
                {dir: 'east', id: 'gouv-fron'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'wall-wate',
            coord: [],
            name: 'Wall St. and Water St.',
            desc: `100 Wall Street is like a good-looking woman at a party of raving beauties. Anywhere else you'd be impressed with it; here it's just another skyscraper.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'pine-wate'},
                {dir: 'south', id: 'gouv-wate'},
                {dir: 'east', id: 'wall-fron'},
                {dir: 'west', id: 'wall-pear'},
                {dir: '100 Wall Street', id: 'wall-wate-1'}
            ],
        },
        {
            id: 'wall-wate-1',
            coord: [],
            name: '100 Wall Street Lobby',
            onEnter: () => {
                println(`You walk through the smoked-glass doors, and enter a lobby decorated in marble. A security guard near the elevators makes you think twice about remaining.
                
                You turn away quickly and leave.`);
                pressEnter('wall-wate');
            }
        },
        {
            id: 'pine-wate',
            coord: [],
            name: 'Pine St. and Water St.',
            desc: `Giant letters on the side of one of a pair of white skyscrapers informs you that this is Wall Street Plaza. Wedged between the skyscrapers is a hunk of minimalist art: a big round aluminum coinslot with a big mirror-surfaced slug forever waiting to be inserted.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'libe-wate'},
                {dir: 'south', id: 'wall-wate'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'pine-pear'}
            ],
        },
        {
            id: 'libe-wate',
            coord: [],
            name: 'Liberty St. and Water St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'flet-wate'},
                {dir: 'south', id: 'pine-wate'},
                {dir: 'east', id: 'libe-fron'},
                {dir: 'west', id: 'libe-pear'}
            ],
        },
        {
            id: 'flet-wate',
            coord: [],
            name: 'Fletcher St. and Water St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'john-wate'},
                {dir: 'south', id: 'libe-wate'},
                {dir: 'east', id: 'flet-fron'},
                {dir: 'west', id: 'flet-pear'}
            ],
        },
        {
            id: 'john-wate',
            coord: [],
            name: 'John St. and Water St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fult-wate'},
                {dir: 'south', id: 'flet-wate'},
                {dir: 'east', id: 'john-fron'},
                {dir: 'west', id: 'john-pear'}
            ],
        },
        {
            id: 'fult-wate',
            coord: [],
            name: 'Fulton St. and Water St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'beek-stja'},
                {dir: 'south', id: 'john-wate'},
                {dir: 'east', id: 'fult-fron'},
                {dir: 'west', id: 'fult-pear'}
            ],
        },
        {
            id: 'beek-stja',
            coord: [],
            name: 'Beekman St. and St. James Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'pear-stja'},
                {dir: 'south', id: 'fult-wate'},
                {dir: 'east', id: 'beek-wate'},
                {dir: 'west', id: 'beek-pear'}
            ],
        },
        {
            id: 'pear-stja',
            coord: [],
            name: 'Pearl St. and St. James Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'peck-stja'},
                {dir: 'south', id: 'beek-stja'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'beek-pear'}
            ],
        },
        {
            id: 'peck-stja',
            coord: [],
            name: 'Peck Slip and St. James Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fran-stja'},
                {dir: 'south', id: 'pear-stja'},
                {dir: 'east', id: 'peck-wate'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'fran-stja',
            coord: [],
            name: 'Frankfort St. and St. James Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'rbtw-stja'},
                {dir: 'south', id: 'peck-stja'},
                {dir: 'east', id: 'fran-wate'},
                {dir: 'west', id: 'park-cent'}
            ],
        },
        {
            id: 'rbtw-stja',
            coord: [],
            name: 'Rbt Wagner Pl. and St. James Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'pear-stja'},
                {dir: 'south', id: 'fran-stja'},
                {dir: 'east', id: 'rbtw-sout'},
                {dir: 'west', id: 'ave-madi'}
            ],
        },
        {
            id: 'pear-stja',
            coord: [],
            name: 'Pearl St. and St. James Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'madi-stja'},
                {dir: 'south', id: 'rbtw-stja'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'pear-madi'}
            ],
        },
        {
            id: 'madi-stja',
            coord: [],
            name: 'Madison St. and St. James Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'jame-stja'},
                {dir: 'south', id: 'pear-stja'},
                {dir: 'east', id: 'james-madi'},
                {dir: 'west', id: 'pear-madi'}
            ],
        },
        {
            id: 'jame-stja',
            coord: [],
            name: 'James St. and St. James Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'oliv-stja'},
                {dir: 'south', id: 'madi-stja'},
                {dir: 'east', id: 'jame-madi'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'oliv-stja',
            coord: [],
            name: 'Oliver St. and St. James Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'ebro-stja'},
                {dir: 'south', id: 'jame-stja'},
                {dir: 'east', id: 'oliv-henr'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'ebro-stja',
            coord: [],
            name: 'E. Broadway and St. James Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wort-stja'},
                {dir: 'south', id: 'oliv-stja'},
                {dir: 'east', id: 'ebro-cath'},
                {dir: 'west', id: 'park-ebro'}
            ],
        },
        {
            id: 'pear-ston',
            coord: [],
            name: 'Pearl St. and Stone La.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'pear-olds'},
                {dir: 'south', id: 'brid-pear'},
                {dir: 'east', id: 'wate-coen'},
                {dir: 'west', id: 'ston-olds'}
            ],
        },
        {
            id: 'pear-olds',
            coord: [],
            name: 'Pearl St. and Old Slip',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'hano-pear'},
                {dir: 'south', id: 'pear-ston'},
                {dir: 'east', id: 'wate-olds'},
                {dir: 'west', id: 'ston-olds'}
            ],
        },
        {
            id: 'hano-pear',
            coord: [],
            name: 'Hanover St. and Pearl St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wall-pear'},
                {dir: 'south', id: 'pear-olds'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'hano-beav'}
            ],
        },
        {
            id: 'wall-pear',
            coord: [],
            name: 'Wall St. and Pearl St.',
            desc: `There is a restaurant called Nedicks here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'pine-pear'},
                {dir: 'south', id: 'hano-pear'},
                {dir: 'east', id: 'wall-wate'},
                {dir: 'west', id: 'wall-beav'},
                {dir: '', id: ''} // add nedicks exit
            ],
        },
        {
            id: 'pine-pear',
            coord: [],
            name: 'Pine St. and Pearl St.',
            desc: `There is a pizzeria here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'ceda-pear'},
                {dir: 'south', id: 'wall-pear'},
                {dir: 'east', id: 'pine-wate'},
                {dir: 'west', id: 'pine-swil'},
                {dir: '', id: ''} // add pizzeria exit
            ],
        },
        {
            id: 'ceda-pear',
            coord: [],
            name: 'Cedar St. and Pearl St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'libe-pear'},
                {dir: 'south', id: 'pine-pear'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'ceda-swil'}
            ],
        },
        {
            id: 'libe-pear',
            coord: [],
            name: 'Liberty St. and Pearl St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'flet-pear'},
                {dir: 'south', id: 'ceda-pear'},
                {dir: 'east', id: 'libe-wate'},
                {dir: 'west', id: 'libe-gold'}
            ],
        },
        {
            id: 'flet-pear',
            coord: [],
            name: 'Fletcher St. and Pearl St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'plat-pear'},
                {dir: 'south', id: 'libe-pear'},
                {dir: 'east', id: 'flet-wate'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'plat-pear',
            coord: [],
            name: 'Platt St and Pearl St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'john-pear'},
                {dir: 'south', id: 'flet-pear'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'plat-gold'}
            ],
        },
        {
            id: 'john-pear',
            coord: [],
            name: 'John St. and Pearl St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fult-pear'},
                {dir: 'south', id: 'plat-pear'},
                {dir: 'east', id: 'john-wate'},
                {dir: 'west', id: 'john-clif'}
            ],
        },
        {
            id: 'fult-pear',
            coord: [],
            name: 'Fulton St. and Pearl St.',
            desc: `The stone towers of the Brooklyn Bridge come into view. The sudden sight of them is like a blast of Beethoven-- familiar but still inspiring.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'beek-pear'},
                {dir: 'south', id: 'john-pear'},
                {dir: 'east', id: 'fult-wate'},
                {dir: 'west', id: 'fult-clif'}
            ],
        },
        {
            id: 'beek-pear',
            coord: [],
            name: 'Beekman St. and Pearl St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'pear-stja'},
                {dir: 'south', id: 'fult-pear'},
                {dir: 'east', id: 'beek-stja'},
                {dir: 'west', id: 'beek-clif'}
            ],
        },
        {
            id: 'ston-olds',
            coord: [],
            name: 'Stone La. and Old Slip',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'pear-ston'},
                {dir: 'east', id: 'pear-olds'},
                {dir: 'west', id: 'beav-olds'}
            ],
        },
        {
            id: 'beav-olds',
            coord: [],
            name: 'Beaver St. and Old Slip',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'hano-beav'},
                {dir: 'south', id: 'beav-swil'},
                {dir: 'east', id: 'ston-olds'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'hano-beav',
            coord: [],
            name: 'Hanover St. and Beaver St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'exch-hano'},
                {dir: 'south', id: 'hano-pear'},
                {dir: 'east', id: 'wall-beav'},
                {dir: 'west', id: 'beav-olds'}
            ],
        },
        {
            id: 'exch-hano',
            coord: [],
            name: 'Exchange Pl and Hanover St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wall-hano'},
                {dir: 'south', id: 'hano-beav'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'exch-swil'}
            ],
        },
        {
            id: 'wall-hano',
            coord: [],
            name: 'Wall St. and Hanover St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'exch-hano'},
                {dir: 'east', id: 'wall-beav'},
                {dir: 'west', id: 'wall-swil'}
            ],
        },
        {
            id: 'wall-beav',
            coord: [],
            name: 'Wall St. and Beaver St.',
            desc: `A plaque outside Citibank informs you that this was once the most expensive building in the city. $1,800,000 was the record-setting pricetag. And that was before McKim Mead White added a Corinthian to the Ionic original of 1842.`,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'hano-beav'},
                {dir: 'east', id: 'wall-pear'},
                {dir: 'west', id: 'wall-hano'},
                {dir: 'Citibank', id: 'wall-beav-1'}
            ],
        },
        {
            id: 'wall-beav-1',
            coord: [],
            name: 'Citibank Lobby',
            desc: ``,
            onEnter: () => {
                println(`You walk through the heavy doors, and enter a lobby decorated in stone. A security desk near the elevators makes you think twice about remaining.
                
                You turn away quickly and leave.`);
                pressEnter(`wall-beav`);
            }
            
        },
        {
            id: 'olds-fron',
            coord: [],
            name: 'Old Slip and Front St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'hano-beav'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'olds-sout'},
                {dir: 'west', id: 'wate-olds'}
            ],
        },
        {
            id: 'gouv-fron',
            coord: [],
            name: 'Gouverneur La. and Front St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wall-fron'},
                {dir: 'south', id: 'olds-fron'},
                {dir: 'east', id: 'gouv-sout'},
                {dir: 'west', id: 'gouv-wate'}
            ],
        },
        {
            id: 'wall-fron',
            coord: [],
            name: 'Wall St. and Front St.',
            desc: `There is a luncheonette on the corner.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'pine-fron'},
                {dir: 'south', id: 'gouv-fron'},
                {dir: 'east', id: 'wall-sout'},
                {dir: 'west', id: 'wall-wate'},
                {dir: '', id: ''} // add luncheonette exit
            ],
        },
        {
            id: 'pine-fron',
            coord: [],
            name: 'Pine St. and Front St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'libe-fron'},
                {dir: 'south', id: 'wall-fron'},
                {dir: 'east', id: 'pine-sout'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'libe-fron',
            coord: [],
            name: 'Liberty St. and Front St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'flet-fron'},
                {dir: 'south', id: 'pine-fron'},
                {dir: 'east', id: 'libe-sout'},
                {dir: 'west', id: 'libe-wate'}
            ],
        },
        {
            id: 'flet-fron',
            coord: [],
            name: 'Fletcher St. and Front St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'john-fron'},
                {dir: 'south', id: 'libe-fron'},
                {dir: 'east', id: 'flet-sout'},
                {dir: 'west', id: 'flet-wate'}
            ],
        },
        {
            id: 'john-fron',
            coord: [],
            name: 'John St. and Front St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fult-fron'},
                {dir: 'south', id: 'flet-fron'},
                {dir: 'east', id: 'john-sout'},
                {dir: 'west', id: 'john-wate'}
            ],
        },
        {
            id: 'fult-fron',
            coord: [],
            name: 'Fulton St. and Front St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'beek-fron'},
                {dir: 'south', id: 'john-fron'},
                {dir: 'east', id: 'fult-sout'},
                {dir: 'west', id: 'fult-wate'}
            ],
        },
        {
            id: 'beek-fron',
            coord: [],
            name: 'Beekman St. and Front St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'peck-fron'},
                {dir: 'south', id: 'fult-fron'},
                {dir: 'east', id: 'beek-sout'},
                {dir: 'west', id: 'beek-wate'}
            ],
        },
        {
            id: 'peck-fron',
            coord: [],
            name: 'Peck Slip and Front St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'dove-fron'},
                {dir: 'south', id: 'beek-fron'},
                {dir: 'east', id: 'peck-sout'},
                {dir: 'west', id: 'peck-wate'}
            ],
        },
        {
            id: 'dove-fron',
            coord: [],
            name: 'Dover St. and Front St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'peck-fron'},
                {dir: 'east', id: 'dove-sout'},
                {dir: 'west', id: 'fran-wate'}
            ],
        },
        {
            id: 'beek-wate',
            coord: [],
            name: 'Beekman St. and Water St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'peck-wate'},
                {dir: 'south', id: 'fult-wate'},
                {dir: 'east', id: 'beek-fron'},
                {dir: 'west', id: 'beek-stja'}
            ],
        },
        {
            id: 'peck-wate',
            coord: [],
            name: 'Peck Slip and Water St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fran-wate'},
                {dir: 'south', id: 'beek-wate'},
                {dir: 'east', id: 'peck-fron'},
                {dir: 'west', id: 'peck-stja'}
            ],
        },
        {
            id: 'fran-wate',
            coord: [],
            name: 'Frankfort St. and Water St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'peck-wate'},
                {dir: 'east', id: 'dove-fron'},
                {dir: 'west', id: 'fran-stja'}
            ],
        },
        {
            id: 'rbtw-sout',
            coord: [],
            name: 'Rbt. Wagner Pl. and South St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'sout-cath'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'rbtw-stja'}
            ],
        },
        {
            id: 'sout-cath',
            coord: [],
            name: 'South St. and Catherine St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wate-cath'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'sout-mark'},
                {dir: 'west', id: 'rbtw-sout'}
            ],
        },
        {
            id: 'wate-cath',
            coord: [],
            name: 'Water St. and Catherine St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'cher-cath'},
                {dir: 'south', id: 'sout-cath'},
                {dir: 'east', id: 'wate-mark'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'cher-cath',
            coord: [],
            name: 'Cherry St. and Catherine St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'monr-cath'},
                {dir: 'south', id: 'wate-cath'},
                {dir: 'east', id: 'cher-mark'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'monr-cath',
            coord: [],
            name: 'Monroe St. and Catherine St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'madi-cath'},
                {dir: 'south', id: 'cher-cath'},
                {dir: 'east', id: 'monr-mark'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'madi-cath',
            coord: [],
            name: 'Madison St. and Catherine St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'henr-cath'},
                {dir: 'south', id: 'monr-cath'},
                {dir: 'east', id: 'madi-mark'},
                {dir: 'west', id: 'oliv-madi'}
            ],
        },
        {
            id: 'oliv-madi',
            coord: [],
            name: 'Oliver St. and Madison St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'oliv-henr'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'madi-cath'},
                {dir: 'west', id: 'jame-madi'}
            ],
        },
        {
            id: 'jame-madi',
            coord: [],
            name: 'James St. and Madison St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'jame-stja'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'oliv-madi'},
                {dir: 'west', id: 'madi-stja'}
            ],
        },
        {
            id: 'oliv-henr',
            coord: [],
            name: 'Oliver St. and Henry St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'oliv-stja'},
                {dir: 'south', id: 'oliv-madi'},
                {dir: 'east', id: 'henr-cath'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'sout-mark',
            coord: [],
            name: 'South St. and Market St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wate-mark'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'sout-pike'},
                {dir: 'west', id: 'sout-cath'}
            ],
        },
        {
            id: 'wate-mark',
            coord: [],
            name: 'Water St. and Market St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'cher-mark'},
                {dir: 'south', id: 'sout-mark'},
                {dir: 'east', id: 'wate-pike'},
                {dir: 'west', id: 'wate-cath'}
            ],
        },
        {
            id: 'cher-mark',
            coord: [],
            name: 'Cherry St. and Market St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'monr-mark'},
                {dir: 'south', id: 'wate-mark'},
                {dir: 'east', id: 'cher-pike'},
                {dir: 'west', id: 'cher-cath'}
            ],
        },
        {
            id: 'monr-mark',
            coord: [],
            name: 'Monroe St. and Market St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'madi-mark'},
                {dir: 'south', id: 'cher-mark'},
                {dir: 'east', id: 'monr-pike'},
                {dir: 'west', id: 'monr-cath'}
            ],
        },
        {
            id: 'madi-mark',
            coord: [],
            name: 'Madison St. and Market St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'henr-mark'},
                {dir: 'south', id: 'monr-mark'},
                {dir: 'east', id: 'fors-madi'},
                {dir: 'west', id: 'madi-cath'}
            ],
        },
        {
            id: 'fors-madi',
            coord: [],
            name: 'Forsyth St. and Madison',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fors-henr'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'madi-pike'},
                {dir: 'west', id: 'madi-mark'}
            ],
        },
        {
            id: 'broo-park',
            coord: [],
            name: 'Brooklyn Bridge and Park Row',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'ave-park'},
                {dir: 'south', id: 'park-cent'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'cham-cent'}
            ],
        },
        {
            id: 'ave-park',
            coord: [],
            name: 'Ave. of Finest and Park Row',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'pear-park'},
                {dir: 'south', id: 'broo-park'},
                {dir: 'east', id: 'ave-madi'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'ave-madi',
            coord: [],
            name: 'Ave. of Finest and Madison St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'pear-madi'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'rbtw-stja'},
                {dir: 'west', id: 'ave-park'}
            ],
        },
        {
            id: 'pear-madi',
            coord: [],
            name: 'Pearl St. and Madison St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'pear-park'},
                {dir: 'south', id: 'pear-stja'},
                {dir: 'east', id: 'madi-stja'},
                {dir: 'west', id: 'ave-madi'}
            ],
        },
        {
            id: 'pear-park',
            coord: [],
            name: 'Pearl St. and Park Row',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'park-ebro'},
                {dir: 'south', id: 'ave-park'},
                {dir: 'east', id: 'pear-madi'},
                {dir: 'west', id: 'pear-baxt'}
            ],
        },
        {
            id: 'pear-baxt',
            coord: [],
            name: 'Pearl St. and Baxter St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'baxt-kent'},
                {dir: 'south', id: 'pear-park'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'pear-kent'}
            ],
        },
        {
            id: 'baxt-kent',
            coord: [],
            name: 'Baxter St. and Kent Pl.',
            desc: `There is a luncheonette on the corner.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wort-baxt'},
                {dir: 'south', id: 'pear-baxt'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'pear-kent'},
                {dir: '', id: ''} // add luncheonette exit
            ],
        },
        {
            id: 'pear-kent',
            coord: [],
            name: 'Pearl St. and Kent Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'baxt-kent'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'pear-baxt'},
                {dir: 'west', id: 'pear-cent'}
            ],
        },
        {
            id: 'wort-hami',
            coord: [],
            name: 'Worth St. and Hamill Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'hami-cent'},
                {dir: 'east', id: 'wort-baxt'},
                {dir: 'west', id: 'wort-cent'}
            ],
        },
        {
            id: 'cham-elk',
            coord: [],
            name: 'Chambers St. and Elk St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'read-elk'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'cham-cent'},
                {dir: 'west', id: 'cham-broa'}
            ],
        },
        {
            id: 'read-elk',
            coord: [],
            name: 'Reade St. and Elk St.',
            desc: `There is a restaurant called Nedicks here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'duan-elk'},
                {dir: 'south', id: 'cham-elk'},
                {dir: 'east', id: 'read-cent'},
                {dir: 'west', id: 'read-broa'},
                {dir: '', id: ''} // add nedicks exit
            ],
        },
        {
            id: 'duan-elk',
            coord: [],
            name: 'Duane St. and Elk St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'read-elk'},
                {dir: 'east', id: 'duan-cent'},
                {dir: 'west', id: 'duan-broa'}
            ],
        },
        {
            id: 'pear-lafa',
            coord: [],
            name: 'Pearl St. and Lafayette St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wort-lafayette'},
                {dir: 'south', id: 'cent-lafa'},
                {dir: 'east', id: 'pear-cent'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'wort-lafa',
            coord: [],
            name: 'Worth St. and Lafayette St.',
            desc: `Koch's Florists is a brick-facade building with Van Gogh's 'Sunflowers' painted on the front window. A sign on the door says: 'Closed for Annual Summer Retreat with Roe and Harpmeister Funeral Service.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'cath-lafa'},
                {dir: 'south', id: 'pear-lafa'},
                {dir: 'east', id: 'wort-cent'},
                {dir: 'west', id: 'wort-broa'},
                {dir: `Koch's Florists`, block: `It's closed, remember?`}
            ],
        },
        {
            id: 'cath-lafa',
            coord: [],
            name: 'Catherine La. and Lafayette St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'leon-lafa'},
                {dir: 'south', id: 'wort-lafa'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'cath-broa'}
            ],
        },
        {
            id: 'pete-stat',
            coord: [],
            name: 'Peter Minuit Plaza and State St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'pear-stat'},
                {dir: 'south', id: 'whit-pete'},
                {dir: 'east', id: 'stat-whit'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'pear-stat',
            coord: [],
            name: 'Pearl St. and State St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'brid-stat'},
                {dir: 'south', id: 'pete-stat'},
                {dir: 'east', id: 'pear-whit'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'brid-stat',
            coord: [],
            name: 'Bridge St. and State St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'batt-stat'},
                {dir: 'south', id: 'pear-stat'},
                {dir: 'east', id: 'brid-whit'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'batt-stat',
            coord: [],
            name: 'Battery Pl. and State St.',
            desc: `The Battery Pl-Bway Station entrance is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'morr-broa'},
                {dir: 'south', id: 'brid-stat'},
                {dir: 'east', id: 'batt-whit'},
                {dir: 'west', id: 'batt-gree'}
            ],
        },
        {
            id: 'morr-trin',
            coord: [],
            name: 'Morris St. and Trinity Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'exch-trin'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'morr-broa'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'exch-trin',
            coord: [],
            name: 'Exchange Pl. and Trinity Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'rect-trin'},
                {dir: 'south', id: 'morr-trin'},
                {dir: 'east', id: 'exch-broa'},
                {dir: 'west', id: 'exch-gree'}
            ],
        },
        {
            id: 'rect-trin',
            coord: [],
            name: 'Rector St. and Trinity Pl.',
            desc: `The Rector-Trinity Station entrance is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'tham-trin'},
                {dir: 'south', id: 'exch-trin'},
                {dir: 'east', id: 'rect-broa'},
                {dir: 'west', id: 'rect-gree'}
            ],
        },
        {
            id: 'tham-trin',
            coord: [],
            name: 'Thames St. and Trinity Pl.',
            desc: `There is a luncheonette on the corner.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'ceda-trin'},
                {dir: 'south', id: 'rect-trin'},
                {dir: 'east', id: 'tham-broa'},
                {dir: 'west', id: 'tham-gree'},
                {dir: '', id: ''} // add luncheonette exit
            ],
        },
        {
            id: 'ceda-trin',
            coord: [],
            name: 'Cedar St. and Trinity Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'libe-trin'},
                {dir: 'south', id: 'tham-trin'},
                {dir: 'east', id: 'ceda-broa'},
                {dir: 'west', id: 'ceda-gree'}
            ],
        },
        {
            id: 'libe-trin',
            coord: [],
            name: 'Liberty St. and Trinity Pl.',
            desc: `The Liberty-Church Station entrance is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'cort-trin'},
                {dir: 'south', id: 'ceda-trin'},
                {dir: 'east', id: 'libe-broa'},
                {dir: 'west', id: 'libe-gree'}
            ],
        },
        {
            id: 'cort-trin',
            coord: [],
            name: 'Cortlandt St. and Trinity Pl.',
            desc: `The Crtlandt-Chrch Station entrance is at this corner.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'dey-trin'},
                {dir: 'south', id: 'libe-trin'},
                {dir: 'east', id: 'cort-broa'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'dey-trin',
            coord: [],
            name: 'Dey St. and Trinity Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fult-chur'},
                {dir: 'south', id: 'cort-trin'},
                {dir: 'east', id: 'john-broa'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'fult-chur',
            coord: [],
            name: 'Fulton St. and Church St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'vese-chur'},
                {dir: 'south', id: 'dey-trin'},
                {dir: 'east', id: 'fult-broa'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'vese-chur',
            coord: [],
            name: 'Vesey St. and Church Ave.',
            desc: `Here are the two towers of the World Trade Center. Aside from their size, there's nothing that special about them. They may have replaced the Empire State Building as the tallest in the city, but for glamor the Empire State Building is still the champion.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'barc-chur'},
                {dir: 'south', id: 'fult-chur'},
                {dir: 'east', id: 'vese-broa'},
                {dir: 'west', id: 'vese-wbro'}
                {dir: 'world trade center', block: `There is no point to going there.`}
            ],
        },
        {
            id: 'barc-chur',
            coord: [],
            name: 'Barclay St. and Church Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'park-chur'},
                {dir: 'south', id: 'vese-chur'},
                {dir: 'east', id: 'barc-broa'},
                {dir: 'west', id: 'barc-wbro'}
            ],
        },
        {
            id: 'park-chur',
            coord: [],
            name: 'Park Pl. and Church Ave.',
            desc: `A tour-guide is explaining to a cluster of tourists that between 1913 and 1930 this building, the Woolworth Building, was the tallest in the world at 792 feet.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'murr-chur'},
                {dir: 'south', id: 'barc-chur'},
                {dir: 'east', id: 'park-broa'},
                {dir: 'west', id: 'park-wbro'},
                {dir: 'woolworth building', id: 'park-chur-1'}
            ],
        },
        {
            id: 'park-chur-1',
            coord: [],
            name: 'Woolworth Lobby',
            desc: ``,
            onEnter: () => {
                println(`You walk through the smoked-glass doors, and enter a lobby decorated in marble. A security kiosk near the elevators makes you think twice about remaining.
                
                You turn away quickly and leave.`);
                pressEnter('park-chur');
            }
        },
        {
            id: 'murr-chur',
            coord: [],
            name: 'Murray St. and Church Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'warr-chur'},
                {dir: 'south', id: 'park-chur'},
                {dir: 'east', id: 'murr-broa'},
                {dir: 'west', id: 'murr-wbro'}
            ],
        },
        {
            id: 'warr-chur',
            coord: [],
            name: 'Warren St. and Church Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'cham-chur'},
                {dir: 'south', id: 'murr-chur'},
                {dir: 'east', id: 'warr-broa'},
                {dir: 'west', id: 'warr-wbro'}
            ],
        },
        {
            id: 'cham-chur',
            coord: [],
            name: 'Chambers St. and Church Ave.',
            desc: `The Chambers-Church Station entrance is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'read-chur'},
                {dir: 'south', id: 'warr-chur'},
                {dir: 'east', id: 'cham-broa'},
                {dir: 'west', id: 'cham-wbro'}
            ],
        },
        {
            id: 'read-chur',
            coord: [],
            name: 'Reade St. and Church Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'duan-chur'},
                {dir: 'south', id: 'cham-chur'},
                {dir: 'east', id: 'read-broa'},
                {dir: 'west', id: 'read-wbro'}
            ],
        },
        {
            id: 'duan-chur',
            coord: [],
            name: 'Duane St. and Church Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'thom-chur'},
                {dir: 'south', id: 'read-chur'},
                {dir: 'east', id: 'duan-broa'},
                {dir: 'west', id: 'duan-wbro'}
            ],
        },
        {
            id: 'thom-chur',
            coord: [],
            name: 'Thomas St. and Church Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wort-chur'},
                {dir: 'south', id: 'duan-chur'},
                {dir: 'east', id: 'thom-broa'},
                {dir: 'west', id: 'thom-wbro'}
            ],
        },
        {
            id: 'wort-chur',
            coord: [],
            name: 'Worth St. and Church Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'leon-chur'},
                {dir: 'south', id: 'thom-chur'},
                {dir: 'east', id: 'wort-broa'},
                {dir: 'west', id: 'wort-wbro'}
            ],
        },
        {
            id: 'leon-chur',
            coord: [],
            name: 'Leonard St. and Church Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fran-chur'},
                {dir: 'south', id: 'wort-chur'},
                {dir: 'east', id: 'leon-broa'},
                {dir: 'west', id: 'leon-wbro'}
            ],
        },
        {
            id: 'fran-chur',
            coord: [],
            name: 'Franklin St. and Church Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'ave-chur'},
                {dir: 'south', id: 'leon-chur'},
                {dir: 'east', id: 'fran-broa'},
                {dir: 'west', id: 'fran-wbro'}
            ],
        },
        {
            id: 'ave-chur',
            coord: [],
            name: 'Ave. of Americas and Church Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'whit-chur'},
                {dir: 'south', id: 'fran-chur'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'whit-ave'}
            ],
        },
        {
            id: 'whit-chur',
            coord: [],
            name: 'White St. and Church Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'walk-chur'},
                {dir: 'south', id: 'ave-chur'},
                {dir: 'east', id: 'whit-broa'},
                {dir: 'west', id: 'whit-ave'}
            ],
        },
        {
            id: 'walk-chur',
            coord: [],
            name: 'Walker St. and Church Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'lisp-chur'},
                {dir: 'south', id: 'whit-chur'},
                {dir: 'east', id: 'walk-broa'},
                {dir: 'west', id: 'walk-ave'}
            ],
        },
        {
            id: 'lisp-chur',
            coord: [],
            name: 'Lispenard St. and Church Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'cana-chur'},
                {dir: 'south', id: 'walk-chur'},
                {dir: 'east', id: 'lisp-broa'},
                {dir: 'west', id: 'lisp-wbro'}
            ],
        },
        {
            id: 'batt-gree',
            coord: [],
            name: 'Battery Pl. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'exch-gree'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'batt-stat'},
                {dir: 'west', id: 'batt-wash'}
            ],
        },
        {
            id: 'exch-gree',
            coord: [],
            name: 'Exchange Pl. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'rect-gree'},
                {dir: 'south', id: 'batt-gree'},
                {dir: 'east', id: 'exch-trin'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'rect-gree',
            coord: [],
            name: 'Rector St. and Greenwich Ave.',
            desc: `The Rector-Greenwch Station entrance is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'carl-gree'},
                {dir: 'south', id: 'exch-gree'},
                {dir: 'east', id: 'rect-trin'},
                {dir: 'west', id: 'rect-wash'}
            ],
        },
        {
            id: 'carl-gree',
            coord: [],
            name: 'Carlisle St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'alba-gree'},
                {dir: 'south', id: 'rect-gree'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'carl-wash'}
            ],
        },
        {
            id: 'alba-gree',
            coord: [],
            name: 'Albany St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'tham-gree'},
                {dir: 'south', id: 'carl-gree'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'alba-wash'}
            ],
        },
        {
            id: 'tham-gree',
            coord: [],
            name: 'Thames St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'ceda-gree'},
                {dir: 'south', id: 'alba-gree'},
                {dir: 'east', id: 'tham-trin'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'ceda-gree',
            coord: [],
            name: 'Cedar St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'libe-gree'},
                {dir: 'south', id: 'tham-gree'},
                {dir: 'east', id: 'ceda-trin'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'libe-gree',
            coord: [],
            name: 'Liberty St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'ceda-gree'},
                {dir: 'east', id: 'libe-trin'},
                {dir: 'west', id: 'libe-wash'}
            ],
        },
        {
            id: 'whit-ave',
            coord: [],
            name: 'White St. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'walk-ave'},
                {dir: 'south', id: 'ave-chur'},
                {dir: 'east', id: 'whit-chur'},
                {dir: 'west', id: 'whit-wbro'}
            ],
        },
        {
            id: 'walk-ave',
            coord: [],
            name: 'Walker St. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'ave-wbro'},
                {dir: 'south', id: 'whit-ave'},
                {dir: 'east', id: 'walk-chur'},
                {dir: 'west', id: 'walk-wbro'}
            ],
        },
        {
            id: 'batt-wash',
            coord: [],
            name: 'Battery Pl. and Washington Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'morr-wash'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'batt-gree'},
                {dir: 'west', id: 'batt-west'}
            ],
        },
        {
            id: 'morr-wash',
            coord: [],
            name: 'Morris St. and Washington Ave.',
            desc: `Art Deco tiles cover the facade of the Downtown Athletic Club.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'btun-wash'},
                {dir: 'south', id: 'batt-wash'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'morr-west'},
                {dir: 'athletic club', block: `There is no point to going there.`}
            ],
        },
        {
            id: 'btun-wash',
            coord: [],
            name: 'Battery Tunnel and Washington Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'exch-wash'},
                {dir: 'south', id: 'morr-wash'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'btun-west'}
            ],
        },
        {
            id: 'exch-wash',
            coord: [],
            name: 'Exchange Pl. and Washington Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'rect-wash'},
                {dir: 'south', id: 'btun-wash'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'exch-west'}
            ],
        },
        {
            id: 'rect-wash',
            coord: [],
            name: 'Rector St. and Washington Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'carl-wash'},
                {dir: 'south', id: 'exch-wash'},
                {dir: 'east', id: 'rect-gree'},
                {dir: 'west', id: 'rect-west'}
            ],
        },
        {
            id: 'carl-wash',
            coord: [],
            name: 'Carlisle St. and Washington Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'alba-wash'},
                {dir: 'south', id: 'rect-wash'},
                {dir: 'east', id: 'carl-gree'},
                {dir: 'west', id: 'carl-west'}
            ],
        },
        {
            id: 'alba-wash',
            coord: [],
            name: 'Albany St. and Washington Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'ceda-wash'},
                {dir: 'south', id: 'carl-wash'},
                {dir: 'east', id: 'alba-gree'},
                {dir: 'west', id: 'alba-west'}
            ],
        },
        {
            id: 'ceda-wash',
            coord: [],
            name: 'Cedar St. and Washington Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'libe-wash'},
                {dir: 'south', id: 'alba-wash'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'ceda-west'}
            ],
        },
        {
            id: 'libe-wash',
            coord: [],
            name: 'Liberty St. and Washington Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'ceda-wash'},
                {dir: 'east', id: 'libe-gree'},
                {dir: 'west', id: 'libe-west'}
            ],
        },
        {
            id: 'batt-west',
            coord: [],
            name: 'Battery Pl. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'morr-west'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'batt-wash'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'morr-west',
            coord: [],
            name: 'Morris St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'btun-west'},
                {dir: 'south', id: 'batt-west'},
                {dir: 'east', id: 'morr-wash'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'btun-west',
            coord: [],
            name: 'Battery Tunnel and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'exch-west'},
                {dir: 'south', id: 'morr-west'},
                {dir: 'east', id: 'btun-wash'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'exch-west',
            coord: [],
            name: 'Exchange Pl. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'rect-west'},
                {dir: 'south', id: 'btun-west'},
                {dir: 'east', id: 'exch-wash'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'rect-west',
            coord: [],
            name: 'Rector St. and West End Hwy.',
            desc: `There is a luncheonette on this corner.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'carl-west'},
                {dir: 'south', id: 'exch-west'},
                {dir: 'east', id: 'rect-wash'},
                {dir: 'west', block: `You can't got that way.`},
                {dir: '', id: ''} // add luncheonette exit
            ],
        },
        {
            id: 'carl-west',
            coord: [],
            name: 'Carlisle St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'alba-west'},
                {dir: 'south', id: 'rect-west'},
                {dir: 'east', id: 'carl-wash'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'alba-west',
            coord: [],
            name: 'Albany St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'ceda-west'},
                {dir: 'south', id: 'carl-west'},
                {dir: 'east', id: 'alba-wash'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'ceda-west',
            coord: [],
            name: 'Cedar St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'libe-west'},
                {dir: 'south', id: 'alba-west'},
                {dir: 'east', id: 'ceda-wash'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'libe-west',
            coord: [],
            name: 'Liberty St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'vese-west'},
                {dir: 'south', id: 'ceda-west'},
                {dir: 'east', id: 'libe-wash'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'vese-west',
            coord: [],
            name: 'Vesey St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'barc-west'},
                {dir: 'south', id: 'libe-west'},
                {dir: 'east', id: 'vese-wash'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'barc-west',
            coord: [],
            name: 'Barclay St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'murr-west'},
                {dir: 'south', id: 'vese-west'},
                {dir: 'east', id: 'barc-wash'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'murr-west',
            coord: [],
            name: 'Murray St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'warr-west'},
                {dir: 'south', id: 'barc-west'},
                {dir: 'east', id: 'murr-gree'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'warr-west',
            coord: [],
            name: 'Warren St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'cham-west'},
                {dir: 'south', id: 'murr-west'},
                {dir: 'east', id: 'warr-gree'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'cham-west',
            coord: [],
            name: 'Chambers St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'harr-west'},
                {dir: 'south', id: 'warr-west'},
                {dir: 'east', id: 'cham-gree'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'harr-west',
            coord: [],
            name: 'Harrison St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'nmoo-west'},
                {dir: 'south', id: 'cham-west'},
                {dir: 'east', id: 'harr-gree'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'nmoo-west',
            coord: [],
            name: 'N. Moore St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'beac-west'},
                {dir: 'south', id: 'harr-west'},
                {dir: 'east', id: 'nmoo-gree'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'beac-west',
            coord: [],
            name: 'Beach St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'hube-west'},
                {dir: 'south', id: 'nmoo-west'},
                {dir: 'east', id: 'beac-gree'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'hube-west',
            coord: [],
            name: 'Hubert St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'laig-west'},
                {dir: 'south', id: 'beac-west'},
                {dir: 'east', id: 'hube-wash'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'laig-west',
            coord: [],
            name: 'Laight St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'vest-west'},
                {dir: 'south', id: 'hube-west'},
                {dir: 'east', id: 'laig-wash'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'vest-west',
            coord: [],
            name: 'Vestry St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'desb-west'},
                {dir: 'south', id: 'laig-west'},
                {dir: 'east', id: 'vest-wash'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'desb-west',
            coord: [],
            name: 'Desbrosses St. and West End Hwy.',
            desc: `The view across the Hudson to New Jersey is awesome. The sweep of the sky is awesome. The river is awesome. The traffic in between you and the river is awesome. Even the seagulls, soaring over the river are awesome. You are awed.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'watt-west'},
                {dir: 'south', id: 'vest-west'},
                {dir: 'east', id: 'desb-wash'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'watt-west',
            coord: [],
            name: 'Watts St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'cana-west'},
                {dir: 'south', id: 'desb-west'},
                {dir: 'east', id: 'watt-wash'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'cana-west',
            coord: [],
            name: 'Canal St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'whou-west'},
                {dir: 'south', id: 'watt-west'},
                {dir: 'east', id: 'cana-wash'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'whou-west',
            coord: [],
            name: 'W. Houston St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'clar-west'},
                {dir: 'south', id: 'cana-west'},
                {dir: 'east', id: 'whou-wash'},
                {dir: 'west', block: `You can't got that way.`}
            ],
        },
        {
            id: 'vese-wash',
            coord: [],
            name: 'Vesey St. and Washington Ave.',
            desc: `The New York Telephone Building is a massive and elaborate tower.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'barc-wash'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'vese-wbro'},
                {dir: 'west', id: 'vese-west'}
            ],
        },
        {
            id: 'barc-wash',
            coord: [],
            name: 'Barclay St. and Washington Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'vese-wash'},
                {dir: 'east', id: 'barc-gree'},
                {dir: 'west', id: 'barc-west'}
            ],
        },
        {
            id: 'barc-gree',
            coord: [],
            name: 'Barclay St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'park-gree'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'barc-wbro'},
                {dir: 'west', id: 'barc-wash'}
            ],
        },
        {
            id: 'park-gree',
            coord: [],
            name: 'Park Pl. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'murr-gree'},
                {dir: 'south', id: 'barc-gree'},
                {dir: 'east', id: 'park-wbro'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'murr-gree',
            coord: [],
            name: 'Murray St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'warr-gree'},
                {dir: 'south', id: 'park-gree'},
                {dir: 'east', id: 'murr-wbro'},
                {dir: 'west', id: 'murr-west'}
            ],
        },
        {
            id: 'warr-gree',
            coord: [],
            name: 'Warren St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'cham-gree'},
                {dir: 'south', id: 'murr-gree'},
                {dir: 'east', id: 'warr-wbro'},
                {dir: 'west', id: 'warr-west'}
            ],
        },
        {
            id: 'cham-gree',
            coord: [],
            name: 'Chambers St. and Greenwich Ave.',
            desc: `There is a luncheonette on the corner.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'read-gree'},
                {dir: 'south', id: 'warr-gree'},
                {dir: 'east', id: 'cham-huds'},
                {dir: 'west', id: 'cham-west'},
                {dir: '', id: ''} // add luncheonette exit
            ],
        },
        {
            id: 'read-gree',
            coord: [],
            name: 'Reade St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'thom-gree'},
                {dir: 'south', id: 'cham-gree'},
                {dir: 'east', id: 'read-huds'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'thom-gree',
            coord: [],
            name: 'Thomas St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'jay-gree'},
                {dir: 'south', id: 'read-gree'},
                {dir: 'east', id: 'thom-duan'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'jay-gree',
            coord: [],
            name: 'Jay St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'harr-gree'},
                {dir: 'south', id: 'thom-gree'},
                {dir: 'east', id: 'jay-stap'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'harr-gree',
            coord: [],
            name: 'Harrison St. and Greenwich Ave.',
            desc: `Vast? Vast isn't the word for it. Ugly comes closer. Independence Plaza is a high-rise apartment complex on a scale that beggars the imagination, but that is its only relationship to the imagination. Otherwise it's just bricks and windows stacked as high as current zoning laws will allow.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fran-gree'},
                {dir: 'south', id: 'jay-gree'},
                {dir: 'east', id: 'harr-stap'},
                {dir: 'west', id: 'harr-west'}
            ],
        },
        {
            id: 'fran-gree',
            coord: [],
            name: 'Franklin St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'nmoo-gree'},
                {dir: 'south', id: 'harr-gree'},
                {dir: 'east', id: 'fran-huds'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'nmoo-gree',
            coord: [],
            name: 'N. Moore St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'beac-gree'},
                {dir: 'south', id: 'fran-gree'},
                {dir: 'east', id: 'nmoo-huds'},
                {dir: 'west', id: 'nmoo-west'}
            ],
        },
        {
            id: 'beac-gree',
            coord: [],
            name: 'Beach St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'hube-gree'},
                {dir: 'south', id: 'nmoo-gree'},
                {dir: 'east', id: 'beac-coll'},
                {dir: 'west', id: 'beac-west'}
            ],
        },
        {
            id: 'hube-gree',
            coord: [],
            name: 'Hubert St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'laig-gree'},
                {dir: 'south', id: 'beac-gree'},
                {dir: 'east', id: 'hube-coll'},
                {dir: 'west', id: 'hube-wash'}
            ],
        },
        {
            id: 'laig-gree',
            coord: [],
            name: 'Laight St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'vest-gree'},
                {dir: 'south', id: 'hube-gree'},
                {dir: 'east', id: 'laig-coll'},
                {dir: 'west', id: 'laig-wash'}
            ],
        },
        {
            id: 'vest-gree',
            coord: [],
            name: 'Vestry St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'desb-gree'},
                {dir: 'south', id: 'laig-gree'},
                {dir: 'east', id: 'vest-huds'},
                {dir: 'west', id: 'vest-wash'}
            ],
        },
        {
            id: 'desb-gree',
            coord: [],
            name: 'Desbrosses St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'watt-gree'},
                {dir: 'south', id: 'vest-gree'},
                {dir: 'east', id: 'desb-huds'},
                {dir: 'west', id: 'desb-wash'}
            ],
        },
        {
            id: 'watt-gree',
            coord: [],
            name: 'Watts St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'cana-gree'},
                {dir: 'south', id: 'desb-gree'},
                {dir: 'east', id: 'watt-wash'},
                {dir: 'west', id: 'cana-watt'}
            ],
        },
        {
            id: 'cana-gree',
            coord: [],
            name: 'Canal St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'spri-gree'},
                {dir: 'south', id: 'watt-gree'},
                {dir: 'east', id: 'cana-renw'},
                {dir: 'west', id: 'cana-wash'}
            ],
        },
        {
            id: 'spri-gree',
            coord: [],
            name: 'Spring St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'vand-gree'},
                {dir: 'south', id: 'cana-gree'},
                {dir: 'east', id: 'spri-renw'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'vand-gree',
            coord: [],
            name: 'Vandam St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'char-gree'},
                {dir: 'south', id: 'spri-gree'},
                {dir: 'east', id: 'vand-huds'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'char-gree',
            coord: [],
            name: 'Charlton St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'king-gree'},
                {dir: 'south', id: 'vand-gree'},
                {dir: 'east', id: 'char-huds'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'king-gree',
            coord: [],
            name: 'King St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'whou-gree'},
                {dir: 'south', id: 'char-gree'},
                {dir: 'east', id: 'king-huds'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'whou-gree',
            coord: [],
            name: 'W. Houston St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'clar-gree'},
                {dir: 'south', id: 'king-gree'},
                {dir: 'east', id: 'whou-huds'},
                {dir: 'west', id: 'whou-wash'}
            ],
        },
        {
            id: 'hube-wash',
            coord: [],
            name: 'Hubert St. and Washington Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'laig-wash'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'hube-gree'},
                {dir: 'west', id: 'hube-west'}
            ],
        },
        {
            id: 'laig-wash',
            coord: [],
            name: 'Laight St. and Washington Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'vest-wash'},
                {dir: 'south', id: 'hube-wash'},
                {dir: 'east', id: 'laig-gree'},
                {dir: 'west', id: 'laig-west'}
            ],
        },
        {
            id: 'vest-wash',
            coord: [],
            name: 'Vestry St. and Washington Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'desb-wash'},
                {dir: 'south', id: 'laig-wash'},
                {dir: 'east', id: 'vest-gree'},
                {dir: 'west', id: 'vest-west'}
            ],
        },
        {
            id: 'desb-wash',
            coord: [],
            name: 'Desbrosses St. and Washington Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'watt-wash'},
                {dir: 'south', id: 'vest-wash'},
                {dir: 'east', id: 'desb-gree'},
                {dir: 'west', id: 'desb-west'}
            ],
        },
        {
            id: 'watt-wash',
            coord: [],
            name: 'Watts St. and Washington Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'cana-wash'},
                {dir: 'south', id: 'desb-wash'},
                {dir: 'east', id: 'watt-gree'},
                {dir: 'west', id: 'watt-west'}
            ],
        },
        {
            id: 'cana-wash',
            coord: [],
            name: 'Canal St. and Washington Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'whou-wash'},
                {dir: 'south', id: 'watt-wash'},
                {dir: 'east', id: 'cana-gree'},
                {dir: 'west', id: 'cana-west'}
            ],
        },
        {
            id: 'whou-wash',
            coord: [],
            name: 'W. Houston St. and Washington St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'clar-wash'},
                {dir: 'south', id: 'cana-wash'},
                {dir: 'east', id: 'whou-gree'},
                {dir: 'west', id: 'whou-west'}
            ],
        },
        {
            id: 'cana-renw',
            coord: [],
            name: 'Canal St. and Renwick Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'spri-renw'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'cana-watt'},
                {dir: 'west', id: 'cana-gree'}
            ],
        },
        {
            id: 'spri-renw',
            coord: [],
            name: 'Spring St. and Renwick Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'cana-renw'},
                {dir: 'east', id: 'spri-huds'},
                {dir: 'west', id: 'spri-gree'}
            ],
        },
        {
            id: 'vese-wbro',
            coord: [],
            name: 'Vesey St. and W. Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'barc-wbro'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'vese-chur'},
                {dir: 'west', id: 'vese-wash'}
            ],
        },
        {
            id: 'barc-wbro',
            coord: [],
            name: 'Barclay St. and W. Broadway.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'park-wbro'},
                {dir: 'south', id: 'vese-wbro'},
                {dir: 'east', id: 'barc-chur'},
                {dir: 'west', id: 'barc-gree'}
            ],
        },
        {
            id: 'park-wbro',
            coord: [],
            name: 'Park Pl. and W. Broadway',
            desc: `There is a Chock Full-O-Nuts at this intersection.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'murr-wbro'},
                {dir: 'south', id: 'barc-wbro'},
                {dir: 'east', id: 'park-chur'},
                {dir: 'west', id: 'park-gree'},
                {dir: '', id: ''} // add chock full-o-nuts exit
            ],
        },
        {
            id: 'murr-wbro',
            coord: [],
            name: 'Murray St. and W. Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'warr-wbro'},
                {dir: 'south', id: 'park-wbro'},
                {dir: 'east', id: 'murr-chur'},
                {dir: 'west', id: 'murr-gree'}
            ],
        },
        {
            id: 'warr-wbro',
            coord: [],
            name: 'Warren St. and W. Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'cham-wbro'},
                {dir: 'south', id: 'murr-wbro'},
                {dir: 'east', id: 'warr-chur'},
                {dir: 'west', id: 'warr-gree'}
            ],
        },
        {
            id: 'cham-wbro',
            coord: [],
            name: 'Chambers St. and W. Broadway',
            desc: `The Chambers-W Bway Station entrance is at this corner.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'read-wbro'},
                {dir: 'south', id: 'warr-wbro'},
                {dir: 'east', id: 'cham-chur'},
                {dir: 'west', id: 'cham-huds'}
            ],
        },
        {
            id: 'read-wbro',
            coord: [],
            name: 'Reade St. and W. Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'duan-wbro'},
                {dir: 'south', id: 'cham-wbro'},
                {dir: 'east', id: 'read-huds'},
                {dir: 'west', id: 'read-chur'}
            ],
        },
        {
            id: 'duan-wbro',
            coord: [],
            name: 'Duane St. and W. Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'thom-wbro'},
                {dir: 'south', id: 'read-wbro'},
                {dir: 'east', id: 'duan-chur'},
                {dir: 'west', id: 'duan-huds'}
            ],
        },
        {
            id: 'thom-wbro',
            coord: [],
            name: 'Thomas St. and W. Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wort-wbro'},
                {dir: 'south', id: 'duan-wbro'},
                {dir: 'east', id: 'thom-chur'},
                {dir: 'west', id: 'thom-huds'}
            ],
        },
        {
            id: 'wort-wbro',
            coord: [],
            name: 'Worth St. and W. Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'leon-wbro'},
                {dir: 'south', id: 'thom-wbro'},
                {dir: 'east', id: 'wort-chur'},
                {dir: 'west', id: 'wort-huds'}
            ],
        },
        {
            id: 'leon-wbro',
            coord: [],
            name: 'Leonard St. and W. Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'vari-wbro'},
                {dir: 'south', id: 'wort-wbro'},
                {dir: 'east', id: 'leon-chur'},
                {dir: 'west', id: 'leon-huds'}
            ],
        },
        {
            id: 'vari-wbro',
            coord: [],
            name: 'Varick Ave. and W. Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'fran-wbro'},
                {dir: 'south', id: 'leon-wbro'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'fran-vari'}
            ],
        },
        {
            id: 'fran-wbro',
            coord: [],
            name: 'Franklin St. and W. Broadway',
            desc: `The spikey crown of the Statue of Liberty peeks out from the fake stone facade of a building that seems to feel overwhelmed by the surrounding warehouses and desperate for attention. The rest of Liberty, presumably, has sunk far below the pavements of Tribeca. Surrealism strikes again!`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'whit-wbro'},
                {dir: 'south', id: 'vari-wbro'},
                {dir: 'east', id: 'fran-chur'},
                {dir: 'west', id: 'fran-vari'}
            ],
        },
        {
            id: 'whit-wbro',
            coord: [],
            name: 'White St. and W. Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'nmoo-wbro'},
                {dir: 'south', id: 'fran-wbro'},
                {dir: 'east', id: 'whit-ave'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'nmoo-wbro',
            coord: [],
            name: 'N. Moore St. and W. Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'walk-wbro'},
                {dir: 'south', id: 'whit-wbro'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'nmoo-vari'}
            ],
        },
        {
            id: 'walk-wbro',
            coord: [],
            name: 'Walker St. and W. Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'eric-wbro'},
                {dir: 'south', id: 'nmoo-wbro'},
                {dir: 'east', id: 'walk-ave.'},
                {dir: 'west', id: 'eric-walk'}
            ],
        },
        {
            id: 'eric-wbro',
            coord: [],
            name: 'Ericsson Pl. and W. Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'ave-wbro'},
                {dir: 'south', id: 'walk-wbro'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'eric-stjo'}
            ],
        },
        {
            id: 'ave-wbro',
            coord: [],
            name: 'Ave. of Americas and W. Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'lisp-wbro'},
                {dir: 'south', id: 'walk-wbro'},
                {dir: 'east', id: 'walk-ave.'},
                {dir: 'west', id: 'york-ave.'}
            ],
        },
        {
            id: 'lisp-wbro',
            coord: [],
            name: 'Lispenard St. and W. Broadway',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'cana-wbro'},
                {dir: 'south', id: 'ave-wbro'},
                {dir: 'east', id: 'lisp-chur'},
                {dir: 'west', block: `You can't go that way.`}
            ],
        },
        {
            id: 'york-ave',
            coord: [],
            name: 'York St. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'laig-ave.'},
                {dir: 'south', id: 'ave-wbro'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'york-stjo'}
            ],
        },
        {
            id: 'laig-ave',
            coord: [],
            name: 'Laight St. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'cana-ave.'},
                {dir: 'south', id: 'york-ave'},
                {dir: 'east', block: `You can't go that way.`},
                {dir: 'west', id: 'laig-stjo'}
            ],
        },
    ],
};