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
            name: 'W. Houston St. and Ave of Americas',
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
            name: 'Bedford Ave. and Ave of Americas',
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
            name: 'Bleecker St. and Ave of Americas',
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
            name: 'Minetta La. and Ave of Americas',
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
            name: 'Bleecker St. and Ave of Americas',
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
            name: 'Carmine St. and Ave of Americas',
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
            name: 'W. 3rd St. and Ave of Americas',
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
            name: 'W. 4th St. and Ave of Americas',
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
            name: 'Washington Pl. and Ave of Americas',
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
            name: 'Waverly Pl. and Ave of Americas',
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
            name: 'W. 8th St. and Ave of Americas',
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
            name: 'W. 9th St. and Ave of Americas',
            desc: ``,
            isStreet: true,
            exits: [
                {dir: 'north', id: '10-ave'},
                {dir: 'south', id: '8-ave'},
                {dir: 'east', id: '9-5'}, 
                {dir: 'west', id: 'chri-gree'} 
            ],
        },
    ],
};