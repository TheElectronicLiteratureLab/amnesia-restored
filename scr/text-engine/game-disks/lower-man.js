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
    ],
};