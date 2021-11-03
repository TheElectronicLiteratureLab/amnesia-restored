const greenwich = {
    roomId: 'whou-merc',
    rooms: [
        {   
            id: 'whou-merc',
            coord: [],
            name: 'W. Houston St. and Mercer Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'blee-merc'},
                {dir: 'south', id: 'prin-merc'},
                {dir: 'east', id: 'whou-broa'}, 
                {dir: 'west', id: 'whou-grea'} // green ave.
            ],
        },
        {   
            id: 'blee-merc',
            coord: [],
            name: 'Bleecker St. and Mercer Ave.',
            desc: `There is a pizzeria here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: '3-merc'},
                {dir: 'south', id: 'whou-merc'},
                {dir: 'east', id: 'blee-broa'}, 
                {dir: 'west', id: 'blee-lagu'},
                {dir: '', id: ''} // add pizzeria exit 
            ],
        },
        {   
            id: '3-merc',
            coord: [],
            name: 'W. 3rd St. and Mercer Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '4-merc'},
                {dir: 'south', id: 'blee-merc'},
                {dir: 'east', id: '3-broa'}, 
                {dir: 'west', id: '3-gree'} 
            ],
        },
        {   
            id: '4-merc',
            coord: [],
            name: 'W. 4th St. and Mercer Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wash-merc'},
                {dir: 'south', id: '3-merc'},
                {dir: 'east', id: '4-broa'}, 
                {dir: 'west', id: '4-gree'} 
            ],
        },
        {   
            id: 'wash-merc',
            coord: [],
            name: 'Washington Pl. and Mercer Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wave-merc'},
                {dir: 'south', id: '4-merc'},
                {dir: 'east', id: 'wash-broa'}, 
                {dir: 'west', id: 'wash-gree'} 
            ],
        },
        {   
            id: 'wave-merc',
            coord: [],
            name: 'Waverly Pl. and Mercer Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '8-merc'},
                {dir: 'south', id: 'wash-merc'},
                {dir: 'east', id: 'wave-broa'}, 
                {dir: 'west', id: 'wave-gree'} 
            ],
        },
        {   
            id: '8-merc',
            coord: [],
            name: 'E. 8th St. and Mercer Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'wave-merc'},
                {dir: 'east', id: '8-broa'}, 
                {dir: 'west', id: '8-gree'} 
            ],
        },
        {   
            id: 'whou-grea',
            coord: [],
            name: 'W. Houston St. and Green Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'prin-gree'},
                {dir: 'east', id: 'whou-merc'}, 
                {dir: 'west', id: 'whou-woos'} 
            ],
        },
        {   
            id: 'whou-woos',
            coord: [],
            name: 'W. Houston St. and Wooster Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'prin-woos'},
                {dir: 'east', id: 'whou-grea'}, 
                {dir: 'west', id: 'whou-lagu'} 
            ],
        },
        {   
            id: 'whou-lagu',
            coord: [],
            name: 'W. Houston St. and LaGuardia Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'blee-lagu'},
                {dir: 'south', id: 'prin-wbro'},
                {dir: 'east', id: 'whou-woos'}, 
                {dir: 'west', id: 'whou-thom'} 
            ],
        },
        {   
            id: 'blee-lagu',
            coord: [],
            name: 'Bleecker St. and LaGuardia Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '3-lagu'},
                {dir: 'south', id: 'whou-lagu'},
                {dir: 'east', id: 'blee-merc'}, 
                {dir: 'west', id: 'blee-thom'} 
            ],
        },
        {   
            id: '3-lagu',
            coord: [],
            name: 'W. 3rd St. and LaGuardia Pl.',
            desc: `There is a luncheonette on the corner.`, // add to desc IF after ? time `The bridge and tunnel crowd has returned to suburbia in New Jersey and Connecticut, leaving Manhattan to the natives and the night clubs`
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wash-lagu'},
                {dir: 'south', id: 'blee-lagu'},
                {dir: 'east', id: '3-gree'}, 
                {dir: 'west', id: '3-thom'},
                {dir: '', id: ''} // add luncheonette exit 
            ],
        },
        {   
            id: 'wash-lagu',
            coord: [],
            name: 'Washington Square S and LaGuardia Pl.',
            desc: `You may enter ***Washington Square Park*** from here.`,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: '3-lagu'},
                {dir: 'east', id: 'wash-univ'}, 
                {dir: 'west', id: 'wash-thom'},
                {dir: 'washington square park', id: 'wasq-park'} 
            ],
        },
        {   
            id: 'whou-thom',
            coord: [],
            name: 'W. Houston St. and Thompson St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'blee-thom'},
                {dir: 'south', id: 'prin-thom'},
                {dir: 'east', id: 'whou-lagu'}, 
                {dir: 'west', id: 'whou-sull'} 
            ],
        },
        {   
            id: 'blee-thom',
            coord: [],
            name: 'Bleecker St. and Thompson St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '3-thom'},
                {dir: 'south', id: 'whou-thom'},
                {dir: 'east', id: 'blee-lagu'}, 
                {dir: 'west', id: 'blee-sull'} 
            ],
        },
        {   
            id: '3-thom',
            coord: [],
            name: 'W. 3rd St. and Sullivan St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wash-thom'},
                {dir: 'south', id: 'blee-thom'},
                {dir: 'east', id: '3-lagu'}, 
                {dir: 'west', id: '3-sull'} 
            ],
        },
        {   
            id: 'wash-thom',
            coord: [],
            name: 'Washington Square S. and Thompson St.',
            desc: `You may enter ***Washington Square Park*** from here.`,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: '3-thom'},
                {dir: 'east', id: 'wash-lagu'}, 
                {dir: 'west', id: 'wash-sull'},
                {dir: 'washington square park', id: 'wasq-park'} 
            ],
        },
        {   
            id: 'whou-sull',
            coord: [],
            name: 'W. Houston St. and Sullivan St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'blee-sull'},
                {dir: 'south', id: 'prin-sull'},
                {dir: 'east', id: 'whou-thom'}, 
                {dir: 'west', id: 'whou-macd'} 
            ],
        },
        {   
            id: 'blee-sull',
            coord: [],
            name: 'Bleecker St. and Sullivan St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '3-sull'},
                {dir: 'south', id: 'whou-sull'},
                {dir: 'east', id: 'blee-thom'}, 
                {dir: 'west', id: 'blee-macd'} 
            ],
        },
        {   
            id: '3-sull',
            coord: [],
            name: 'W. 3rd St. and Sullivan St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wash-sull'},
                {dir: 'south', id: 'blee-sull'},
                {dir: 'east', id: '3-thom'}, 
                {dir: 'west', id: '3-macd'} 
            ],
        },
        {   
            id: 'wash-sull',
            coord: [],
            name: 'Washington Square S. and Sullivan St.',
            desc: `You may enter ***Washington Square Park*** from here.`,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: '3-sull'},
                {dir: 'east', id: 'wash-thom'}, 
                {dir: 'west', id: '4-macd'},
                {dir: 'washington square park', id: 'wasq-park'} 
            ],
        },
        {   
            id: 'whou-macd',
            coord: [],
            name: 'W. Houston St. and MacDougal Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'blee-macd'},
                {dir: 'south', id: 'king-macd'},
                {dir: 'east', id: 'whou-sull'}, 
                {dir: 'west', id: 'whou-ave'} 
            ],
        },
        {   
            id: 'blee-macd',
            coord: [],
            name: 'Bleecker St. and MacDogual Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'mine-macd'},
                {dir: 'south', id: 'whou-macd'},
                {dir: 'east', id: 'blee-sull'}, 
                {dir: 'west', id: 'blee-ave'} 
            ],
        },
        {   
            id: 'mine-macd',
            coord: [],
            name: 'Minetta La. and MacDogual Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '3-macd'},
                {dir: 'south', id: 'blee-macd'},
                {dir: 'east', block: `You can't go that way.`}, 
                {dir: 'west', id: 'mine-mine'} 
            ],
        },
        {   
            id: '3-macd',
            coord: [],
            name: 'W. 3rd St. and MacDougal Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '4-macd'},
                {dir: 'south', id: 'mine-macd'},
                {dir: 'east', id: '3-sull'}, 
                {dir: 'west', id: '3-ave'} 
            ],
        },
        {   
            id: '4-macd',
            coord: [],
            name: 'W. 4th St. and MacDougal Ave.',
            desc: `You may enter ***Washington Square Park*** from here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wash-wash'},
                {dir: 'south', id: '3-macd'},
                {dir: 'east', id: 'wash-sull'}, 
                {dir: 'west', id: '4-ave'},
                {dir: 'washington square park', id: 'wasq-park'} 
            ],
        },
        {   
            id: 'wash-wash',
            coord: [],
            name: 'Washington Pl. and Washington Square W.',
            desc: `You may enter ***Washington Square Park*** from here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wave-macd'},
                {dir: 'south', id: '4-macd'},
                {dir: 'east', block: `You can't go that way.`}, 
                {dir: 'west', id: 'wash-ave'},
                {dir: 'washington square park', id: 'wasq-park'} 
            ],
        },
        {   
            id: 'wave-macd',
            coord: [],
            name: 'Waverly Pl. and MacDougal Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'macd-macd'},
                {dir: 'south', id: 'wash-wash'},
                {dir: 'east', id: 'wave-5'}, 
                {dir: 'west', id: 'wave-ave'} 
            ],
        },
        {   
            id: 'macd-macd',
            coord: [],
            name: 'MacDougal Alley and MacDougal Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '8-macd'},
                {dir: 'south', id: 'wave-macd'},
                {dir: 'east', id: 'wash-5'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: '8-macd',
            coord: [],
            name: 'W. 8th St. and MacDougal Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'macd-macd'},
                {dir: 'east', id: '8-5'}, 
                {dir: 'west', id: '8-ave'} 
            ],
        },
        {   
            id: 'wave-5',
            coord: [],
            name: 'Waverly Pl. and 5th Ave.',
            desc: `You may enter ***Washington Square Park*** from here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wash-5'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'wave-univ'}, 
                {dir: 'west', id: 'wave-macd'},
                {dir: 'washington square park', id: 'wasq-park'} 
            ],
        },
        {   
            id: 'wash-5',
            coord: [],
            name: 'Washington Mews and 5th Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '8-5'},
                {dir: 'south', id: 'wave-5'},
                {dir: 'east', id: 'wash-univ'}, 
                {dir: 'west', id: 'macd-macd'} 
            ],
        },
        {   
            id: '8-5',
            coord: [],
            name: 'W. 8th St. and 5th Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '9-5'},
                {dir: 'south', id: 'wash-5'},
                {dir: 'east', id: '8-univ'}, 
                {dir: 'west', id: '8-macd'} 
            ],
        },
        {   
            id: '9-5',
            coord: [],
            name: 'W. 9th St. and 5th Ave.',
            desc: `There is a pizzeria here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: '10-5'},
                {dir: 'south', id: '8-5'},
                {dir: 'east', id: '9-univ'}, 
                {dir: 'west', id: '9-ave'},
                {dir: '', id: ''} // add pizzeria exit 
            ],
        },
        {   
            id: '10-5',
            coord: [],
            name: 'W. 10th St. and 5th Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '11-5'},
                {dir: 'south', id: '9-5'},
                {dir: 'east', id: '10-univ'}, 
                {dir: 'west', id: '10-ave'} 
            ],
        },
        {   
            id: '11-5',
            coord: [],
            name: 'W. 11th St. and 5th Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '12-5'},
                {dir: 'south', id: '10-5'},
                {dir: 'east', id: '11-univ'}, 
                {dir: 'west', id: '11-ave'} 
            ],
        },
        {   
            id: '12-5',
            coord: [],
            name: 'W. 12th St. and 5th Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '13-5'},
                {dir: 'south', id: '11-5'},
                {dir: 'east', id: '12-univ'}, 
                {dir: 'west', id: '12-ave'} 
            ],
        },
        {   
            id: '13-5',
            coord: [],
            name: 'W. 13th St. and 5th Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '14-5'},
                {dir: 'south', id: '12-5'},
                {dir: 'east', id: '13-univ'}, 
                {dir: 'west', id: '13-ave'} 
            ],
        },
        {   
            id: '3-gree',
            coord: [],
            name: 'W. 3rd St. and Greene St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '4-gree'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: '3-merc'}, 
                {dir: 'west', id: '3-lagu'} 
            ],
        },
        {   
            id: '4-gree',
            coord: [],
            name: 'W. 4th St. and Greene St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wash-gree'},
                {dir: 'south', id: '3-gree'},
                {dir: 'east', id: '4-merc'}, 
                {dir: 'west', id: 'wash-univ'} 
            ],
        },
        {   
            id: 'wash-gree',
            coord: [],
            name: 'Washington Pl. and Greene St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wave-gree'},
                {dir: 'south', id: '4-gree'},
                {dir: 'east', id: 'wash-merc'}, 
                {dir: 'west', id: 'wash-wash'} 
            ],
        },
        {   
            id: 'wave-gree',
            coord: [],
            name: 'Waverly Pl. and Greene St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '8-gree'},
                {dir: 'south', id: 'wash-gree'},
                {dir: 'east', id: 'wave-merc'}, 
                {dir: 'west', id: 'wave-univ'} 
            ],
        },
        {   
            id: '8-gree',
            coord: [],
            name: 'E. 8th St. and Greene St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'wave-gree'},
                {dir: 'east', id: '8-merc'}, 
                {dir: 'west', id: '8-univ'} 
            ],
        },
        {   
            id: 'wash-univ',
            coord: [],
            name: 'Washington Square S. and University Pl.',
            desc: `You may enter ***Washington Square Park*** from here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wash-wash'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: '4-gree'}, 
                {dir: 'west', id: 'wash-lagu'},
                {dir: 'washington square park', id: 'wasq-park'} 
            ],
        },
        {   
            id: 'wash-wash',
            coord: [],
            name: 'Washington Pl. and Washington Square E.',
            desc: `You may enter ***Washington Square Park*** from here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wave-univ'},
                {dir: 'south', id: 'wash-univ'},
                {dir: 'east', id: 'wash-gree'}, 
                {dir: 'west', block: `You can't go that way.`},
                {dir: 'washington square park', id: 'wasq-park'} 
            ],
        },
        {   
            id: 'wave-univ',
            coord: [],
            name: 'Waverly Pl. and University Pl.',
            desc: `You may enter ***Washington Square Park*** from here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wash-unvi'},
                {dir: 'south', id: 'wash-wash'},
                {dir: 'east', id: 'wave-gree'}, 
                {dir: 'west', id: 'wave-5'},
                {dir: 'washington square park', id: 'wasq-park'}
            ],
        },
        {   
            id: 'wash-univ',
            coord: [],
            name: 'Washington Mews and University Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '8-univ'},
                {dir: 'south', id: 'wave-univ'},
                {dir: 'east', block: `You can't go that way.`}, 
                {dir: 'west', id: 'wash-5'} 
            ],
        },
        {   
            id: '8-univ',
            coord: [],
            name: 'E. 8th St. and University Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '9-univ'},
                {dir: 'south', id: 'wash-univ'},
                {dir: 'east', id: '8-gree'}, 
                {dir: 'west', id: '8-5'} 
            ],
        },
        {   
            id: '9-univ',
            coord: [],
            name: 'E. 9th St. and University Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '10-univ'},
                {dir: 'south', id: '8-univ'},
                {dir: 'east', id: '9-broa'}, 
                {dir: 'west', id: '9-5'} 
            ],
        },
        {   
            id: '10-univ',
            coord: [],
            name: 'E. 10th St. and University Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '11-univ'},
                {dir: 'south', id: '9-univ'},
                {dir: 'east', id: '10-broa'}, 
                {dir: 'west', id: '10-5'} 
            ],
        },
        {   
            id: '11-univ',
            coord: [],
            name: 'E. 11th St. and University Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '12-univ'},
                {dir: 'south', id: '10-univ'},
                {dir: 'east', id: '11-broa'}, 
                {dir: 'west', id: '11-5'} 
            ],
        },
        {   
            id: '12-univ',
            coord: [],
            name: 'E. 12th St. and University Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '13-univ'},
                {dir: 'south', id: '11-univ'},
                {dir: 'east', id: '12-broa'}, 
                {dir: 'west', id: '12-5'} 
            ],
        },
        {   
            id: '13-univ',
            coord: [],
            name: 'E. 13th St. and University Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '14-unio'},
                {dir: 'south', id: '12-univ'},
                {dir: 'east', id: '13-broa'}, 
                {dir: 'west', id: '13-5'} 
            ],
        },
        {   
            id: 'whou-ave',
            coord: [],
            name: 'W. Houston St. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'bedf-ave'},
                {dir: 'south', id: 'king-ave'},
                {dir: 'east', id: 'whou-macd'}, 
                {dir: 'west', id: 'whou-seve'} 
            ],
        },
        {   
            id: 'bedf-ave',
            coord: [],
            name: 'Bedford Ave. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'blee-ave'},
                {dir: 'south', id: 'whou-ave'},
                {dir: 'east', block: `You can't go that way.`}, 
                {dir: 'west', id: 'down-bedf'} 
            ],
        },
        {   
            id: 'blee-ave',
            coord: [],
            name: 'Bleecker St. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'mine-ave'},
                {dir: 'south', id: 'bedf-ave'},
                {dir: 'east', id: 'blee-macd'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'mine-ave',
            coord: [],
            name: 'Minetta La. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'blee-ave-1'},
                {dir: 'south', id: 'blee-ave'},
                {dir: 'east', id: 'mine-mine'}, 
                {dir: 'west', id: 'down-bedf'} 
            ],
        },
        {   
            id: 'blee-ave-1',
            coord: [],
            name: 'Bleecker St. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'carm-ave'},
                {dir: 'south', id: 'mine-ave'},
                {dir: 'east', block: `You can't go that way.`}, 
                {dir: 'west', id: 'carm-blee'} 
            ],
        },
        {   
            id: 'carm-ave',
            coord: [],
            name: 'Carmine St. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '3-ave'},
                {dir: 'south', id: 'blee-ave-1'},
                {dir: 'east', id: 'mine-mine'}, 
                {dir: 'west', id: 'corn-4'} 
            ],
        },
        {   
            id: '3-ave',
            coord: [],
            name: 'W. 3rd St. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '4-ave'},
                {dir: 'south', id: 'carm-ave'},
                {dir: 'east', id: '3-macd'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: '4-ave',
            coord: [],
            name: 'W. 4th St. and Ave. of Americas',
            desc: `The 4 ST-Wash Sq Station entrance is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'wash-ave'},
                {dir: 'south', id: '3-ave'},
                {dir: 'east', id: '4-macd'}, 
                {dir: 'west', id: 'corn-4'} 
            ],
        },
        {   
            id: 'wash-ave',
            coord: [],
            name: 'Washington Pl. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wave-ave'},
                {dir: 'south', id: '4-ave'},
                {dir: 'east', id: 'wash-wash'}, 
                {dir: 'west', id: '4-wash'} 
            ],
        },
        {   
            id: 'wave-ave',
            coord: [],
            name: 'Waverly Pl. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '8-ave'},
                {dir: 'south', id: 'wash-ave'},
                {dir: 'east', id: 'wave-macd'}, 
                {dir: 'west', id: 'wave-gay'} 
            ],
        },
        {   
            id: '8-ave',
            coord: [],
            name: 'W. 8th St. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '9-ave'},
                {dir: 'south', id: 'wave-ave'},
                {dir: 'east', id: '8-macd'}, 
                {dir: 'west', id: 'chri-gree'} 
            ],
        },
        {   
            id: '9-ave',
            coord: [],
            name: 'W. 9th St. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '10-ave'},
                {dir: 'south', id: '8-ave'},
                {dir: 'east', id: '9-5'}, 
                {dir: 'west', id: 'chri-gree'} 
            ],
        },
        {   
            id: '10-ave',
            coord: [],
            name: 'W. 10th St. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '11-ave'},
                {dir: 'south', id: '9-ave'},
                {dir: 'east', id: '10-5'}, 
                {dir: 'west', id: '10-gree'} 
            ],
        },
        {   
            id: '11-ave',
            coord: [],
            name: 'W. 11th St. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '12-ave'},
                {dir: 'south', id: '10-ave'},
                {dir: 'east', id: '11-5'}, 
                {dir: 'west', id: '11-7'} 
            ],
        },
        {   
            id: '12-ave',
            coord: [],
            name: 'W. 12th St. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '13-ave'},
                {dir: 'south', id: '11-ave'},
                {dir: 'east', id: '12-5'}, 
                {dir: 'west', id: '12-7'} 
            ],
        },
        {   
            id: '13-ave',
            coord: [],
            name: 'W. 13th St. and Ave. of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '14-ave'},
                {dir: 'south', id: '12-ave'},
                {dir: 'east', id: '13-5'}, 
                {dir: 'west', id: '13-7'} 
            ],
        },
        {   
            id: 'whou-seve',
            coord: [],
            name: 'W. Houston St. and Seventh Ave. S.',
            desc: `The Houston-Varick Station entrance is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: 'down-7'},
                {dir: 'south', id: 'king-vari'},
                {dir: 'east', id: 'whou-ave'}, 
                {dir: 'west', id: 'whou-huds'} 
            ],
        },
        {   
            id: 'down-7',
            coord: [],
            name: 'Downing St. and 7th Ave. S.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'clar-7'},
                {dir: 'south', id: 'whou-seve'},
                {dir: 'east', id: 'down-bedf'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'clar-7',
            coord: [],
            name: 'Clarkson St. and 7th Ave. S.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: ''},
                {dir: 'south', id: 'down-7'},
                {dir: 'east', block: `You can't go that way.`}, 
                {dir: 'west', id: 'clar-huds'} 
            ],
        },
        {   
            id: 'carm-7',
            coord: [],
            name: 'Carmine St. and 7th Ave. S.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'bedf-7'},
                {dir: 'south', id: 'clar-7'},
                {dir: 'east', id: 'carm-bedf'}, 
                {dir: 'west', id: 'stlu-huds'} 
            ],
        },
        {   
            id: 'bedf-7',
            coord: [],
            name: 'Bedford Ave. and 7th Ave. S.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'mort-7'},
                {dir: 'south', id: 'carm-7'},
                {dir: 'east', id: 'carm-bedf'}, 
                {dir: 'west', id: 'mort-bedf'} 
            ],
        },
        {   
            id: 'mort-7',
            coord: [],
            name: 'Morton St. and 7th Ave. S.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'comm-7'},
                {dir: 'south', id: 'bedf-7'},
                {dir: 'east', id: 'mort-blee'}, 
                {dir: 'west', id: 'mort-bedf'} 
            ],
        },
        {   
            id: 'comm-7',
            coord: [],
            name: 'Commerce St. and 7th Ave. S.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'blee-7'},
                {dir: 'south', id: 'mort-7'},
                {dir: 'east', id: 'comm-blee'}, 
                {dir: 'west', id: 'comm-bedf'} 
            ],
        },
        {   
            id: 'blee-7',
            coord: [],
            name: 'Bleeker St. and 7th Ave. S.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'barr-7'},
                {dir: 'south', id: 'comm-7'},
                {dir: 'east', id: 'comm-blee'}, 
                {dir: 'west', id: 'barr-blee'} 
            ],
        },
        {   
            id: 'barr-7',
            coord: [],
            name: 'Barrow St. and 7th Ave. S.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'grov-7'},
                {dir: 'south', id: 'blee-7'},
                {dir: 'east', id: 'barr-4'}, 
                {dir: 'west', id: 'barr-blee'} 
            ],
        },
        {   
            id: 'grov-7',
            coord: [],
            name: 'Grove St. and 7th Ave. S.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'wash-7'},
                {dir: 'south', id: 'barr-7'},
                {dir: 'east', block: `You can't go that way.`}, 
                {dir: 'west', id: 'grov-blee'} 
            ],
        },
        {   
            id: 'wash-7',
            coord: [],
            name: 'Washington Pl. and 7th Ave. S.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'chri-7'},
                {dir: 'south', id: 'grov-7'},
                {dir: 'east', id: 'grov-wash'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'chri-7',
            coord: [],
            name: 'Christopher St. and 7th Ave. S.',
            desc: `The Chrstphr-7 AV S Station entrance is at this corner.`,
            isStreet: true,
            hasSubway: true,
            exits: [
                {dir: 'north', id: '10-7'},
                {dir: 'south', id: 'wash-7'},
                {dir: 'east', id: 'chri-grov'}, 
                {dir: 'west', id: 'chri-blee'} 
            ],
        },
        {   
            id: '10-7',
            coord: [],
            name: 'W. 10th St. and 7th Ave. S.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'char-7'},
                {dir: 'south', id: 'chri-7'},
                {dir: 'east', id: '10-wave'}, 
                {dir: 'west', id: '10-4'} 
            ],
        },
        {   
            id: 'char-7',
            coord: [],
            name: 'Charles St. and 7th Ave. S.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '7-wave'},
                {dir: 'south', id: '10-7'},
                {dir: 'east', id: 'char-wave'}, 
                {dir: 'west', id: 'char-4'} 
            ],
        },
        {   
            id: '7-wave',
            coord: [],
            name: '7th Ave. S. and Waverly Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'perr-7'},
                {dir: 'south', id: 'char-7'},
                {dir: 'east', id: 'char-wave'}, 
                {dir: 'west', id: 'perr-wave'} 
            ],
        },
        {   
            id: 'perr-7',
            coord: [],
            name: 'Perry St. and 7th Ave. S.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '7-gree'},
                {dir: 'south', id: '7-wave'},
                {dir: 'east', id: 'perr-gree'}, 
                {dir: 'west', id: 'perr-wave'} 
            ],
        },
        {   
            id: '7-gree',
            coord: [],
            name: '7th Ave. S. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '11-7'},
                {dir: 'south', id: 'perr-7'},
                {dir: 'east', id: 'perr-gree'}, 
                {dir: 'west', id: '11-gree'} 
            ],
        },
        {   
            id: '11-7',
            coord: [],
            name: 'W. 11th St. and 7th Ave. S.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '12-7'},
                {dir: 'south', id: '7-gree'},
                {dir: 'east', id: '11-ave'}, 
                {dir: 'west', id: '11-gree'} 
            ],
        },
        {   
            id: '12-7',
            coord: [],
            name: 'W. 12th St. and 7th Ave. S.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '13-7'},
                {dir: 'south', id: '11-7'},
                {dir: 'east', id: '12-ave'}, 
                {dir: 'west', id: '12-gree'} 
            ],
        },
        {   
            id: '13-7',
            coord: [],
            name: 'W. 13th St. and 7th Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '14-7'},
                {dir: 'south', id: '12-7'},
                {dir: 'east', id: '13-ave'}, 
                {dir: 'west', id: 'hora-13'} 
            ],
        },
        {   
            id: 'down-bedf',
            coord: [],
            name: 'Downing St. and Bedford Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'carm-bedf'},
                {dir: 'south', id: 'bedf-ave'},
                {dir: 'east', id: 'mine-mine'}, 
                {dir: 'west', id: 'down-7'} 
            ],
        },
        {   
            id: 'carm-bedf',
            coord: [],
            name: 'Carmine St. and Bedford Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'bedf-7'},
                {dir: 'south', id: 'down-bedf'},
                {dir: 'east', id: 'carm-blee'}, 
                {dir: 'west', id: 'carm-7'} 
            ],
        },
        {   
            id: 'mine-mine',
            coord: [],
            name: 'Minetta St. and Minetta La.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'mine-ave'},
                {dir: 'east', id: 'mine-macd'}, 
                {dir: 'west', id: 'carm-ave'} 
            ],
        },
        {   
            id: 'carm-blee',
            coord: [],
            name: 'Carmine St. and Bleecker St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'corn-blee'},
                {dir: 'south', id: 'blee-ave-1'},
                {dir: 'east', id: 'carm-ave'}, 
                {dir: 'west', id: 'carm-bedf'} 
            ],
        },
        {   
            id: 'corn-blee',
            coord: [],
            name: 'Cornelia St. and Bleeker St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'mort-blee'},
                {dir: 'south', id: 'carm-blee'},
                {dir: 'east', id: 'corn-4'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'mort-blee',
            coord: [],
            name: 'Morton St. and Bleecker St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'jone-blee'},
                {dir: 'south', id: 'corn-blee'},
                {dir: 'east', block: `You can't go that way.`}, 
                {dir: 'west', id: 'mort-7'} 
            ],
        },
        {   
            id: 'jone-blee',
            coord: [],
            name: 'Jones St. and Bleecker St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'comm-blee'},
                {dir: 'south', id: 'mort-blee'},
                {dir: 'east', id: 'jone-4'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'comm-blee',
            coord: [],
            name: 'Commerce St. and Bleecker St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'blee-7'},
                {dir: 'south', id: 'jone-blee'},
                {dir: 'east', block: `You can't go that way.`}, 
                {dir: 'west', id: 'comm-7'} 
            ],
        },
        {   
            id: 'corn-4',
            coord: [],
            name: 'Cornelia St. and W. 4th St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'corn-blee'},
                {dir: 'east', id: '4-ave'}, 
                {dir: 'west', id: 'jone-4'} 
            ],
        },
        {   
            id: 'jone-4',
            coord: [],
            name: 'Jones St. and W. 4th St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'barr-4'},
                {dir: 'south', id: 'corn-4'},
                {dir: 'east', block: `You can't go that way.`}, 
                {dir: 'west', id: 'jone-blee'} 
            ],
        },
        {   
            id: 'barr-4',
            coord: [],
            name: 'Barrow St. and W. 4th St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '4-wash'},
                {dir: 'south', id: 'jone-4'},
                {dir: 'east', block: `You can't go that way.`}, 
                {dir: 'west', id: 'barr-7'} 
            ],
        },
        {   
            id: '4-wash',
            coord: [],
            name: 'W. 4th St. and Washington Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'barr-4'},
                {dir: 'east', id: 'wash-ave'}, 
                {dir: 'west', id: 'grov-wash'} 
            ],
        },
        {   
            id: 'grov-wash',
            coord: [],
            name: 'Grove St. and Washington Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'grov-chri'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: '4-wash'}, 
                {dir: 'west', id: 'wash-7'} 
            ],
        },
        {   
            id: 'grov-chri',
            coord: [],
            name: 'Grove St. and Christopher Pk.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'chri-grove'},
                {dir: 'south', id: 'grov-wash'},
                {dir: 'east', id: 'wave-chri'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'chri-grov',
            coord: [],
            name: 'Christopher St. and Grove St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'grov-chri'},
                {dir: 'east', id: 'chri-wave'}, 
                {dir: 'west', id: 'chri-7'} 
            ],
        },
        {   
            id: 'wave-chri',
            coord: [],
            name: 'Waverly Pl. and Christopher Pk.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'chri-wave'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'wave-gay'}, 
                {dir: 'west', id: 'grov-chri'} 
            ],
        },
        {   
            id: 'chri-wave',
            coord: [],
            name: 'Christopher St. and Waverly Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '10-wave'},
                {dir: 'south', id: 'wave-chri'},
                {dir: 'east', id: 'chri-gay'}, 
                {dir: 'west', id: 'chri-grov'} 
            ],
        },
        {   
            id: '10-wave',
            coord: [],
            name: 'W. 10th St. and Waverly Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'char-wave'},
                {dir: 'south', id: 'chri-wave'},
                {dir: 'east', id: '10-gree'}, 
                {dir: 'west', id: '10-7'} 
            ],
        },
        {   
            id: 'char-wave',
            coord: [],
            name: 'Charles St. and Waverly Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '7-wave'},
                {dir: 'south', id: '10-wave'},
                {dir: 'east', id: 'char-gree'}, 
                {dir: 'west', id: 'char-7'} 
            ],
        },
        {   
            id: 'wave-gay',
            coord: [],
            name: 'Waverly Pl. and Gay St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'chri-gay'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'wave-ave'}, 
                {dir: 'west', id: 'wave-chri'} 
            ],
        },
        {   
            id: 'chri-gay',
            coord: [],
            name: 'Christopher St. and Gay St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'wave-gay'},
                {dir: 'east', id: 'chri-gree'}, 
                {dir: 'west', id: 'chri-wave'} 
            ],
        },
        {   
            id: 'chri-gree',
            coord: [],
            name: 'Christopher St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '10-gree'},
                {dir: 'south', id: '8-ave'},
                {dir: 'east', id: '9-ave'}, 
                {dir: 'west', id: 'chri-gay'} 
            ],
        },
        {   
            id: '10-gree',
            coord: [],
            name: 'W. 10th St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'char-gree'},
                {dir: 'south', id: 'chri-gree'},
                {dir: 'east', id: '10-ave'}, 
                {dir: 'west', id: '10-wave'} 
            ],
        },
        {   
            id: 'char-gree',
            coord: [],
            name: 'Charles St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'perr-gree'},
                {dir: 'south', id: '10-gree'},
                {dir: 'east', block: `You can't go that way.`}, 
                {dir: 'west', id: 'char-wave'} 
            ],
        },
        {   
            id: 'perr-gree',
            coord: [],
            name: 'Perry St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '7-gree'},
                {dir: 'south', id: 'char-gree'},
                {dir: 'east', block: `You can't go that way.`}, 
                {dir: 'west', id: 'perr-7'} 
            ],
        },
        {   
            id: 'clar-huds',
            coord: [],
            name: 'Clarkson St. and Hudson St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'stlu-huds'},
                {dir: 'south', id: 'whou-huds'},
                {dir: 'east', id: 'clar-7'}, 
                {dir: 'west', id: 'clar-gree'} 
            ],
        },
        {   
            id: 'stlu-huds',
            coord: [],
            name: 'St. Lukes Pl. and Hudson St.',
            desc: `There is a luncheonette on the corner.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'mort-huds'},
                {dir: 'south', id: 'clar-huds'},
                {dir: 'east', id: 'carm-7'}, 
                {dir: 'west', id: 'lero-gree'},
                {dir: '', id: ''} // add luncheonette exit  
            ],
        },
        {   
            id: 'mort-huds',
            coord: [],
            name: 'Morton St. and Hudson St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'barr-huds'},
                {dir: 'south', id: 'stlu-huds'},
                {dir: 'east', id: 'mort-bedf'}, 
                {dir: 'west', id: 'mort-gree'} 
            ],
        },
        {   
            id: 'barr-huds',
            coord: [],
            name: 'Barrow St. and Hudson St.',
            desc: `There is a pizzeria here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'grov-huds'},
                {dir: 'south', id: 'mort-huds'},
                {dir: 'east', id: 'barr-comm'}, 
                {dir: 'west', id: 'barr-gree'},
                {dir: '', id: ''} // add pizzeria exit 
            ],
        },
        {   
            id: 'grov-huds',
            coord: [],
            name: 'Grove St. and Hudson St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'chri-huds'},
                {dir: 'south', id: 'barr-huds'},
                {dir: 'east', id: 'grov-bedf'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'chri-huds',
            coord: [],
            name: 'Christopher St. and Hudson St.',
            desc: `The Theatre of Silliness is housed in a building of whitewashed concrete blocks without windows. To the side of the entrance is a peeling poster that asks:
            
            Is Your Life Too Tame?
            Are You Lonely?
            Have You Picked Up Your Toys?
            
            Then you've ready for a night at New York's cheapest and most offensive Off-Off-Off Broadway theater.
            
            Nothing in your past experience can have prepared you for the aggressive bad taste of the NTS-- (formerly, the Wooster St. Hole in the Wall Dramatic Academy).
            
            WARNING: The management of this theater is NOT responsible! 
            Admissions: Only $2.00!`,
            isStreet: true,
            exits: [
                {dir: 'north', id: '10-huds'},
                {dir: 'south', id: 'grov-huds'},
                {dir: 'east', id: 'chri-bedf'}, 
                {dir: 'west', id: 'chri-gree'},
                {dir: 'theatre of silliness', id: 'chri-huds-1'}
            ],
        },
        {   
            id: 'chri-huds-1',
            coord: [],
            name: '',
            desc: ``,
            exits: [

            ],
        },
        {   
            id: '10-huds',
            coord: [],
            name: 'W. 10th St. and Hudson St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'char-huds'},
                {dir: 'south', id: 'chri-huds'},
                {dir: 'east', id: '10-blee'}, 
                {dir: 'west', id: '10-gree'} 
            ],
        },
        {   
            id: 'char-huds',
            coord: [],
            name: 'Charles St. and Hudson St.',
            desc: `There is a pizzeria here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'perr-huds'},
                {dir: 'south', id: '10-huds'},
                {dir: 'east', id: 'char-blee'}, 
                {dir: 'west', id: 'char-gree'},
                {dir: '', id: ''} // add pizzeria exit
            ],
        },
        {   
            id: 'perr-huds',
            coord: [],
            name: 'Perry St. and Hudson St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '11-huds'},
                {dir: 'south', id: 'char-huds'},
                {dir: 'east', id: 'perr-blee'}, 
                {dir: 'west', id: 'perr-gree'} 
            ],
        },
        {   
            id: '11-huds',
            coord: [],
            name: 'W. 11th St. and Hudson St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'bank-huds'},
                {dir: 'south', id: 'perr-huds'},
                {dir: 'east', id: '11-blee'}, 
                {dir: 'west', id: '11-gree'} 
            ],
        },
        {   
            id: 'bank-huds',
            coord: [],
            name: 'Bank St. and Hudson St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'beth-huds'},
                {dir: 'south', id: '11-huds'},
                {dir: 'east', id: 'bank-8'}, 
                {dir: 'west', id: 'bank-gree'} 
            ],
        },
        {   
            id: 'beth-huds',
            coord: [],
            name: 'Bethune Ave. and Hudson St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '12-huds'},
                {dir: 'south', id: 'bank-huds'},
                {dir: 'east', block: `You can't go that way.`}, 
                {dir: 'west', id: 'beth-gree'} 
            ],
        },
        {   
            id: '12-huds',
            coord: [],
            name: 'W. 12th St. and Hudson St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'jane-huds'},
                {dir: 'south', id: 'beth-huds'},
                {dir: 'east', id: '12-8'}, 
                {dir: 'west', id: '12-gree'} 
            ],
        },
        {   
            id: 'jane-huds',
            coord: [],
            name: 'Jane St. and Hudson St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'hora-huds'},
                {dir: 'south', id: '12-huds'},
                {dir: 'east', id: 'jane-4'}, 
                {dir: 'west', id: 'jane-gree'} 
            ],
        },
        {   
            id: 'hora-huds',
            coord: [],
            name: 'Horatio St. and Hudson St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'gans-huds'},
                {dir: 'south', id: 'jane-huds'},
                {dir: 'east', id: 'hora-4'}, 
                {dir: 'west', id: 'hora-gree'} 
            ],
        },
        {   
            id: 'gans-huds',
            coord: [],
            name: 'Gansevoort St. and Hudson Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '13-huds'},
                {dir: 'south', id: 'hora-huds'},
                {dir: 'east', id: '13-gans'}, 
                {dir: 'west', id: 'gans-gree'} 
            ],
        },
        {   
            id: '13-huds',
            coord: [],
            name: 'W. 13th St. and Hudson Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'gans-huds'},
                {dir: 'east', id: '13-gans'}, 
                {dir: 'west', id: '13-9'} 
            ],
        },
        {   
            id: 'mort-bedf',
            coord: [],
            name: 'Morton St. and Bedford Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'comm-bedf'},
                {dir: 'south', id: 'bedf-7'},
                {dir: 'east', id: 'mort-7'}, 
                {dir: 'west', id: 'mort-huds'} 
            ],
        },
        {   
            id: 'comm-bedf',
            coord: [],
            name: 'Commerce St. and Bedford Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'barr-bedf'},
                {dir: 'south', id: 'mort-bedf'},
                {dir: 'east', id: 'comm-7'}, 
                {dir: 'west', id: 'barr-comm'} 
            ],
        },
        {   
            id: 'barr-bedf',
            coord: [],
            name: 'Barrow St. and Bedford Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'grov-bedf'},
                {dir: 'south', id: 'comm-bedf'},
                {dir: 'east', id: 'barr-blee'}, 
                {dir: 'west', id: 'barr-comm'} 
            ],
        },
        {   
            id: 'grov-bedf',
            coord: [],
            name: 'Grove St. and Bedford Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'chri-bedf'},
                {dir: 'south', id: 'barr-bedf'},
                {dir: 'east', id: 'grov-blee'}, 
                {dir: 'west', id: 'grov-huds'} 
            ],
        },
        {   
            id: 'chri-bedf',
            coord: [],
            name: 'Christopher St. and Bedford Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way. `},
                {dir: 'south', id: 'grov-bedf'},
                {dir: 'east', id: 'chri-blee'}, 
                {dir: 'west', id: 'chri-huds'} 
            ],
        },
        {   
            id: 'barr-blee',
            coord: [],
            name: 'Barrow St. and Bleecker St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'grov-blee'},
                {dir: 'south', id: 'blee-7'},
                {dir: 'east', id: 'barr-7'}, 
                {dir: 'west', id: 'barr-bedf'} 
            ],
        },
        {   
            id: 'grov-blee',
            coord: [],
            name: 'Grove St. and Bleecker St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'chri-blee'},
                {dir: 'south', id: 'barr-blee'},
                {dir: 'east', id: 'grov-7'}, 
                {dir: 'west', id: 'grov-bedf'} 
            ],
        },
        {   
            id: 'chri-blee',
            coord: [],
            name: 'Christopher St. and Bleecker St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '10-blee'},
                {dir: 'south', id: 'grov-blee'},
                {dir: 'east', id: 'chri-7'}, 
                {dir: 'west', id: 'chri-bedf'} 
            ],
        },
        {   
            id: '10-blee',
            coord: [],
            name: 'W. 10th St. and Bleecker St.',
            desc: `There is a pizzeria here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'char-blee'},
                {dir: 'south', id: 'chri-blee'},
                {dir: 'east', id: '10-4'}, 
                {dir: 'west', id: '10-huds'},
                {dir: '', id: ''} // add pizzeria exit
            ],
        },
        {   
            id: 'char-blee',
            coord: [],
            name: 'Charles St. and Bleecker St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'perr-blee'},
                {dir: 'south', id: '10-blee'},
                {dir: 'east', id: 'char-4'}, 
                {dir: 'west', id: 'char-huds'} 
            ],
        },
        {   
            id: 'perr-blee',
            coord: [],
            name: 'Perry St. and Bleecker St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '11-blee'},
                {dir: 'south', id: 'char-blee'},
                {dir: 'east', id: 'perr-4'}, 
                {dir: 'west', id: 'perr-huds'} 
            ],
        },
        {   
            id: '11-blee',
            coord: [],
            name: 'W. 11th St. and Bleecker St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'bank-blee'},
                {dir: 'south', id: 'perr-blee'},
                {dir: 'east', id: '4-11'}, 
                {dir: 'west', id: '11-huds'} 
            ],
        },
        {   
            id: 'bank-blee',
            coord: [],
            name: 'Bank St. and Bleecker St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'blee-8'},
                {dir: 'south', id: '11-blee'},
                {dir: 'east', id: 'bank-4'}, 
                {dir: 'west', id: 'bank-8'} 
            ],
        },
        {   
            id: 'blee-8',
            coord: [],
            name: 'Bleecker St. and 8th Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '12-8'},
                {dir: 'south', id: 'bank-8'},
                {dir: 'east', id: 'bank-blee'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: '12-8',
            coord: [],
            name: 'W. 12th St. and 8th Ave.',
            desc: `There is a luncheonette on the corner.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: '4-8'},
                {dir: 'south', id: 'blee-8'},
                {dir: 'east', id: '12-4'}, 
                {dir: 'west', id: '12-huds'},
                {dir: '', id: ''} // add luncheonette exit 
            ],
        },
        {   
            id: '4-8',
            coord: [],
            name: 'W. 4th St. and 8th Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'jane-8'},
                {dir: 'south', id: '12-8'},
                {dir: 'east', id: '12-4'}, 
                {dir: 'west', id: 'jane-4'} 
            ],
        },
        {   
            id: 'jane-8',
            coord: [],
            name: 'Jane St. and 8th Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'hora-8'},
                {dir: 'south', id: '4-8'},
                {dir: 'east', id: 'jane-gree'}, 
                {dir: 'west', id: 'jane-4'} 
            ],
        },
        {   
            id: 'hora-8',
            coord: [],
            name: 'Horatio Ave. and 8th Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '13-8'},
                {dir: 'south', id: 'jane-8'},
                {dir: 'east', id: 'hora-gree'}, 
                {dir: 'west', id: 'hora-4'} 
            ],
        },
        {   
            id: '13-8',
            coord: [],
            name: 'W. 13th St. and 8th Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '14-8'},
                {dir: 'south', id: 'hora-8'},
                {dir: 'east', id: 'hora-13'}, 
                {dir: 'west', id: '13-4'} 
            ],
        },
        {   
            id: '10-4',
            coord: [],
            name: 'W. 10th St. and W. 4th St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'char-4'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: '10-7'}, 
                {dir: 'west', id: '10-blee'} 
            ],
        },
        {   
            id: 'char-4',
            coord: [],
            name: 'Charles St. and W. 4th St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'perr-4'},
                {dir: 'south', id: '10-4'},
                {dir: 'east', id: 'char-7'}, 
                {dir: 'west', id: 'char-blee'} 
            ],
        },
        {   
            id: 'perr-4',
            coord: [],
            name: 'Perry St. and W. 4th St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '4-11'},
                {dir: 'south', id: 'char-4'},
                {dir: 'east', id: 'perr-wave'}, 
                {dir: 'west', id: 'perr-blee'} 
            ],
        },
        {   
            id: '4-11',
            coord: [],
            name: 'W. 4th St. and W. 11th St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'bank-4'},
                {dir: 'south', id: 'perr-4'},
                {dir: 'east', id: '11-wave'}, 
                {dir: 'west', id: '11-blee'} 
            ],
        },
        {   
            id: 'bank-4',
            coord: [],
            name: 'Bank St. and W. 4th St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '12-4'},
                {dir: 'south', id: '4-11'},
                {dir: 'east', id: 'bank-wave'}, 
                {dir: 'west', id: 'bank-blee'} 
            ],
        },
        {   
            id: '12-4',
            coord: [],
            name: 'W. 12th St. and W. 4th St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '4-8'},
                {dir: 'south', id: 'bank-4'},
                {dir: 'east', id: '12-gree'}, 
                {dir: 'west', id: '12-8'} 
            ],
        },
        {   
            id: 'perr-wave',
            coord: [],
            name: 'Perry St. and Waverly Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '11-wave'},
                {dir: 'south', id: '7-wave'},
                {dir: 'east', id: 'perr-7'}, 
                {dir: 'west', id: 'perr-4'} 
            ],
        },
        {   
            id: '11-wave',
            coord: [],
            name: 'W. 11th St. and Waverly Pl.',
            desc: `There is a Greek Gyro located here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'bank-wave'},
                {dir: 'south', id: 'perr-wave'},
                {dir: 'east', id: '11-gree'}, 
                {dir: 'west', id: '4-11'},
                {dir: '', id: ''} // add gyro exit 
            ],
        },
        {   
            id: 'bank-wave',
            coord: [],
            name: 'Bank St. and Waverly Pl.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: '11-wave'},
                {dir: 'east', id: 'bank-gree'}, 
                {dir: 'west', id: 'bank-4'} 
            ],
        },
        {   
            id: '11-gree',
            coord: [],
            name: 'W. 11th St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'bank-gree'},
                {dir: 'south', id: '7-gree'},
                {dir: 'east', id: '11-7'}, 
                {dir: 'west', id: '11-wave'} 
            ],
        },
        {   
            id: 'bank-gree',
            coord: [],
            name: 'Bank St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '12-gree'},
                {dir: 'south', id: '11-gree'},
                {dir: 'east', block: `You can't go that way.`}, 
                {dir: 'west', id: 'bank-wave'} 
            ],
        },
        {   
            id: '12-gree',
            coord: [],
            name: 'W. 12th St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'jane-gree'},
                {dir: 'south', id: 'bank-gree'},
                {dir: 'east', id: '12-7'}, 
                {dir: 'west', id: '12-4'} 
            ],
        },
        {   
            id: 'jane-gree',
            coord: [],
            name: 'Jane St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'hora-gree'},
                {dir: 'south', id: '12-gree'},
                {dir: 'east', block: `You can't go that way.`}, 
                {dir: 'west', id: 'jane-8'} 
            ],
        },
        {   
            id: 'hora-gree',
            coord: [],
            name: 'Horatio Ave. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'jane-gree'},
                {dir: 'east', id: 'hora-13'}, 
                {dir: 'west', id: 'hora-8'} 
            ],
        },
        {   
            id: 'hora-13',
            coord: [],
            name: 'Horatio Ave. and W. 13th St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', north: `You can't go that way.`},
                {dir: 'south', id: 'hora-gree'},
                {dir: 'east', id: '13-7'}, 
                {dir: 'west', id: '13-8'} 
            ],
        },
        {   
            id: 'barr-comm',
            coord: [],
            name: 'Barrow St. and Commerce St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'comm-bedf'},
                {dir: 'east', id: 'barr-bedf'}, 
                {dir: 'west', id: 'barr-huds'} 
            ],
        },
        {   
            id: 'bank-8',
            coord: [],
            name: 'Bank St. and 8th Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'blee-8'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'bank-blee'}, 
                {dir: 'west', id: 'bank-huds'} 
            ],
        },
        {   
            id: 'jane-4',
            coord: [],
            name: 'Jane St. and W. 4th St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'hora-4'},
                {dir: 'south', id: '4-8'},
                {dir: 'east', id: 'jane-8'}, 
                {dir: 'west', id: 'jane-huds'} 
            ],
        },
        {   
            id: 'hora-4',
            coord: [],
            name: 'Horatio St. and W. 4th St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '13-4'},
                {dir: 'south', id: 'jane-4'},
                {dir: 'east', id: 'hora-8'}, 
                {dir: 'west', id: 'hora-huds'} 
            ],
        },
        {   
            id: '13-4',
            coord: [],
            name: 'W. 13th St. and W. 4th St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'hora-4'},
                {dir: 'east', id: '13-8'}, 
                {dir: 'west', id: '13-gans'} 
            ],
        },
        {   
            id: '13-gans',
            coord: [],
            name: 'W. 13th St. and Gansevoort St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'gans-huds'},
                {dir: 'east', id: '13-4'}, 
                {dir: 'west', id: '13-huds'} 
            ],
        },
        {   
            id: 'clar-gree',
            coord: [],
            name: 'Clarkson St. and Greenwich St.',
            desc: `There is a pizzeria here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'lero-gree'},
                {dir: 'south', id: 'whou-gree'},
                {dir: 'east', id: 'clar-huds'}, 
                {dir: 'west', id: 'clar-wash'},
                {dir: '', id: ''} // add pizzeria exit
            ],
        },
        {   
            id: 'lero-gree',
            coord: [],
            name: 'Leroy St. and Greenwich St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'mort-gree'},
                {dir: 'south', id: 'clar-gree'},
                {dir: 'east', id: 'stlu-huds'}, 
                {dir: 'west', id: 'lero-wash'} 
            ],
        },
        {   
            id: 'mort-gree',
            coord: [],
            name: 'Morton St. and Greenwich St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'barr-gree'},
                {dir: 'south', id: 'lero-gree'},
                {dir: 'east', id: 'mort-huds'}, 
                {dir: 'west', id: 'mort-wash'} 
            ],
        },
        {   
            id: 'barr-gree',
            coord: [],
            name: 'Barrow St. and Greenwich St.',
            desc: `There is a luncheonette on the corner.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'chri-gree'},
                {dir: 'south', id: 'mort-gree'},
                {dir: 'east', id: 'barr-huds'}, 
                {dir: 'west', id: 'barr-wash'},
                {dir: '', id: ''} // add luncheonette exit 
            ],
        },
        {   
            id: 'chri-gree',
            coord: [],
            name: 'Christopher St. and Greenwich St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '10-gree'},
                {dir: 'south', id: 'barr-gree'},
                {dir: 'east', id: 'chri-huds'}, 
                {dir: 'west', id: 'chri-wash'} 
            ],
        },
        {   
            id: '10-gree',
            coord: [],
            name: 'W. 10th St. and Greenwich St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'char-gree'},
                {dir: 'south', id: 'chri-gree'},
                {dir: 'east', id: '10-huds'}, 
                {dir: 'west', id: '10-wash'} 
            ],
        },
        {   
            id: 'char-gree',
            coord: [],
            name: 'Charles St. and Greenwich St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'perr-gree'},
                {dir: 'south', id: '10-gree'},
                {dir: 'east', id: 'char-huds'}, 
                {dir: 'west', id: 'char-wash'} 
            ],
        },
        {   
            id: 'perr-gree',
            coord: [],
            name: 'Perry St. and Greenwich St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '11-gree'},
                {dir: 'south', id: 'char-gree'},
                {dir: 'east', id: 'perr-huds'}, 
                {dir: 'west', id: 'perr-wash'} 
            ],
        },
        {   
            id: '11-gree',
            coord: [],
            name: 'W. 11th St. and Greenwich St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'bank-gree'},
                {dir: 'south', id: 'perr-gree'},
                {dir: 'east', id: '11-huds'}, 
                {dir: 'west', id: '11-wash'} 
            ],
        },
        {   
            id: 'bank-gree',
            coord: [],
            name: 'Bank St. and Greenwich St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'beth-gree'},
                {dir: 'south', id: '11-gree'},
                {dir: 'east', id: 'bank-huds'}, 
                {dir: 'west', id: 'bank-wash'} 
            ],
        },
        {   
            id: 'beth-gree',
            coord: [],
            name: 'Bethune Ave. and Greenwich St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '12-gree'},
                {dir: 'south', id: 'bank-gree'},
                {dir: 'east', id: 'beth-huds'}, 
                {dir: 'west', id: 'beth-wash'} 
            ],
        },
        {   
            id: '12-gree',
            coord: [],
            name: 'W. 12th St. and Greenwich St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'jane-gree'},
                {dir: 'south', id: 'beth-gree'},
                {dir: 'east', id: '12-huds'}, 
                {dir: 'west', id: '12-wash'} 
            ],
        },
        {   
            id: 'jane-gree',
            coord: [],
            name: 'Jane St. and Greenwich St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'hora-gree'},
                {dir: 'south', id: '12-gree'},
                {dir: 'east', id: 'jane-huds'}, 
                {dir: 'west', id: 'jane-wash'} 
            ],
        },
        {   
            id: 'hora-gree',
            coord: [],
            name: 'Horatio St. and Greenwich St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'gans-gree'},
                {dir: 'south', id: 'jane-gree'},
                {dir: 'east', id: 'hora-huds'}, 
                {dir: 'west', id: 'hora-wash'} 
            ],
        },
        {   
            id: 'gans-gree',
            coord: [],
            name: 'Gansevoort St. and Greenwich Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '13-9'},
                {dir: 'south', id: 'hora-gree'},
                {dir: 'east', id: 'gans-huds'}, 
                {dir: 'west', id: 'gans-litt'} 
            ],
        },
        {   
            id: '13-9',
            coord: [],
            name: 'W. 13th St. and 9th Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '14-9'},
                {dir: 'south', id: 'gans-gree'},
                {dir: 'east', id: '13-huds'}, 
                {dir: 'west', id: '13-12'} 
            ],
        },
        {   
            id: 'clar-wash',
            coord: [],
            name: 'Clarkson St. and Washington St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'lero-wash'},
                {dir: 'south', id: 'whou-wash'},
                {dir: 'east', id: 'clar-gree'}, 
                {dir: 'west', id: 'clar-west'} 
            ],
        },
        {   
            id: 'lero-wash',
            coord: [],
            name: 'Leroy St. and Washington St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'mort-wash'},
                {dir: 'south', id: 'clar-wash'},
                {dir: 'east', id: 'lero-gree'}, 
                {dir: 'west', id: 'lero-west'} 
            ],
        },
        {   
            id: 'mort-wash',
            coord: [],
            name: 'Morton St. and Washington St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'mort-west'},
                {dir: 'south', id: 'lero-wash'},
                {dir: 'east', id: 'mort-gree'}, 
                {dir: 'west', id: 'barr-wash'} 
            ],
        },
        {   
            id: 'barr-wash',
            coord: [],
            name: 'Barrow St. and Washington St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'chri-wash'},
                {dir: 'south', id: 'mort-wash'},
                {dir: 'east', id: 'barr-gree'}, 
                {dir: 'west', id: 'barr-west'} 
            ],
        },
        {   
            id: 'chri-wash',
            coord: [],
            name: 'Christopher St. and Washington St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '10-wash'},
                {dir: 'south', id: 'barr-wash'},
                {dir: 'east', id: 'chri-gree'}, 
                {dir: 'west', id: 'chri-west'} 
            ],
        },
        {   
            id: '10-wash',
            coord: [],
            name: 'W. 10th St. and Washington St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'char-wash'},
                {dir: 'south', id: 'chri-wash'},
                {dir: 'east', id: '10-gree'}, 
                {dir: 'west', id: '10-west'} 
            ],
        },
        {   
            id: 'char-wash',
            coord: [],
            name: 'Charles St. and Washington St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'perr-wash'},
                {dir: 'south', id: '10-wash'},
                {dir: 'east', id: 'char-gree'}, 
                {dir: 'west', id: 'char-west'} 
            ],
        },
        {   
            id: 'perr-wash',
            coord: [],
            name: 'Perry St. and Washington St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '11-wash'},
                {dir: 'south', id: 'char-wash'},
                {dir: 'east', id: 'perr-gree'}, 
                {dir: 'west', id: 'perr-west'} 
            ],
        },
        {   
            id: '11-wash',
            coord: [],
            name: 'W. 11th St. and Washington St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'bank-wash'},
                {dir: 'south', id: 'perr-wash'},
                {dir: 'east', id: '11-gree'}, 
                {dir: 'west', id: '11-west'} 
            ],
        },
        {   
            id: 'bank-wash',
            coord: [],
            name: 'Bank St. and Washington St.',
            desc: `There is a luncheonette on the corner.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'beth-wash'},
                {dir: 'south', id: '11-wash'},
                {dir: 'east', id: 'bank-gree'}, 
                {dir: 'west', id: 'bank-west'},
                {dir: '', id: ''} // add luncheonette exit
            ],
        },
        {   
            id: 'beth-wash',
            coord: [],
            name: 'Bethune Ave. and Washington St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '12-wash'},
                {dir: 'south', id: 'bank-wash'},
                {dir: 'east', id: 'beth-gree'}, 
                {dir: 'west', id: 'beth-west'} 
            ],
        },
        {   
            id: '12-wash',
            coord: [],
            name: 'W. 12th St. and Washington St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'jane-wash'},
                {dir: 'south', id: 'beth-wash'},
                {dir: 'east', id: '12-gree'}, 
                {dir: 'west', id: '12-west'} 
            ],
        },
        {   
            id: 'jane-wash',
            coord: [],
            name: 'Jane St. and Washington St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'hora-wash'},
                {dir: 'south', id: '12-wash'},
                {dir: 'east', id: 'jane-gree'}, 
                {dir: 'west', id: 'jane-west'} 
            ],
        },
        {   
            id: 'hora-wash',
            coord: [],
            name: 'Horatio St. and Washington St.',
            desc: `There is a pizzeria here.`,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'gans-wash'},
                {dir: 'south', id: 'jane-wash'},
                {dir: 'east', id: 'hora-gree'}, 
                {dir: 'west', id: 'hora-west'},
                {dir: '', id: ''} // add pizzeria exit 
            ],
        },
        {   
            id: 'gans-wash',
            coord: [],
            name: 'Gansevoort St. and Washington Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'litt-wash'},
                {dir: 'south', id: 'bank-4'},
                {dir: 'east', id: 'gans-litt'}, 
                {dir: 'west', id: 'gans-west'} 
            ],
        },
        {   
            id: 'litt-wash',
            coord: [],
            name: 'Little W. 12th St. and Washington Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', block: `You can't go that way.`},
                {dir: 'south', id: 'gans-wash'},
                {dir: 'east', id: 'gans-litt'}, 
                {dir: 'west', id: 'litt-west'} 
            ],
        },
        {   
            id: 'gans-litt',
            coord: [],
            name: 'Gansevoort St. and Little W. 12th St.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'litt-wash'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: 'gans-gree'}, 
                {dir: 'west', id: 'gans-wash'} 
            ],
        },
        {   
            id: '13-12',
            coord: [],
            name: 'W. 13th St. and 12th Ave.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '14-12'},
                {dir: 'south', block: `You can't go that way.`},
                {dir: 'east', id: '13-9'}, 
                {dir: 'west', id: '13-west'} 
            ],
        },
        {   
            id: 'clar-west',
            coord: [],
            name: 'Clarkson St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'lero-west'},
                {dir: 'south', id: 'whou-west'},
                {dir: 'east', id: 'clar-wash'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'lero-west',
            coord: [],
            name: 'Leroy St. and West End Hwy',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'mort-west'},
                {dir: 'south', id: 'clar-west'},
                {dir: 'east', id: 'lero-wash'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'mort-west',
            coord: [],
            name: 'Morton St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'barr-west'},
                {dir: 'south', id: 'lero-west'},
                {dir: 'east', id: 'mort-wash'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'barr-west',
            coord: [],
            name: 'Barrow St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'chri-west'},
                {dir: 'south', id: 'mort-west'},
                {dir: 'east', id: 'barr-wash'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'chri-west',
            coord: [],
            name: 'Christopher St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '10-west'},
                {dir: 'south', id: 'barr-west'},
                {dir: 'east', id: 'chri-wash'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: '10-west',
            coord: [],
            name: 'W. 10th St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'char-west'},
                {dir: 'south', id: 'chri-west'},
                {dir: 'east', id: '10-wash'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'char-west',
            coord: [],
            name: 'Charles St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'perr-west'},
                {dir: 'south', id: '10-west'},
                {dir: 'east', id: 'char-wash'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'perr-west',
            coord: [],
            name: 'Perry St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '11-west'},
                {dir: 'south', id: 'char-west'},
                {dir: 'east', id: 'perr-wash'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: '11-west',
            coord: [],
            name: 'W. 11th St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'bank-west'},
                {dir: 'south', id: 'perr-west'},
                {dir: 'east', id: '11-wash'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'bank-west',
            coord: [],
            name: 'Bank St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'beth-west'},
                {dir: 'south', id: '11-west'},
                {dir: 'east', id: 'bank-wash'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'beth-west',
            coord: [],
            name: 'Bethune Ave. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '12-west'},
                {dir: 'south', id: 'bank-west'},
                {dir: 'east', id: 'beth-wash'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: '12-west',
            coord: [],
            name: 'W. 12th St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'jane-west'},
                {dir: 'south', id: 'beth-west'},
                {dir: 'east', id: '12-wash'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'jane-west',
            coord: [],
            name: 'Jane St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'hora-west'},
                {dir: 'south', id: '12-west'},
                {dir: 'east', id: 'jane-wash'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'hora-west',
            coord: [],
            name: 'Horatio St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'gans-west'},
                {dir: 'south', id: 'jane-west'},
                {dir: 'east', id: 'hora-wash'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'gans-west',
            coord: [],
            name: 'Gansevoort St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: 'litt-west'},
                {dir: 'south', id: 'hora-west'},
                {dir: 'east', id: 'gans-wash'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: 'litt-west',
            coord: [],
            name: 'Little W. 12th St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '13-west'},
                {dir: 'south', id: 'gans-west'},
                {dir: 'east', id: 'litt-wash'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
        {   
            id: '13-west',
            coord: [],
            name: 'W. 13th St. and West End Hwy.',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '14-west'},
                {dir: 'south', id: 'litt-west'},
                {dir: 'east', id: '13-12'}, 
                {dir: 'west', block: `You can't go that way.`} 
            ],
        },
    ],
};