const streets = {
  roomId: 'hous-broa',
  rooms: [
      /******/
     /*Soho*/
    /******/
    {
      id: 'hous-amer',
      coord: [],
      name: 'W. Houston St. and Ave of Americas',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'bedf-amer'},
        {dir: 'south', id: 'king-amer'},
        {dir: 'east', id: 'hous-macd'},
        {dir: 'west', id: 'whou-7'},
      ]
    },
    {
      id: 'whou-7',
      coord: [],
      name: 'W. Houston St. and 7th Ave. S.',
      desc: '',
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: 'down-7'},
        {dir: 'south', id: 'king-vari'},
        {dir: 'east', id: 'hous-amer'},
        {dir: 'west', id: 'whou-huds'},
      ]
    },
    {
      id: 'king-amer',
      coord: [],
      name: 'King St. and Ave of Americas',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-amer'},
        {dir: 'south', id: 'char-amer'},
        {dir: 'east', id: 'king-macd'},
        {dir: 'west', id: 'king-7'},
      ]
    },
    {
      id: 'char-amer',
      coord: [],
      name: 'Charlton St. and Ave of Americas',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'king-amer'},
        {dir: 'south', id: 'vand-amer'},
        {dir: 'east', id: 'prin-macd'},
        {dir: 'west', id: 'char-vari'},
      ]
    },
    {
      id: 'vand-amer',
      coord: [],
      name: 'Vandam St. and Ave of Americas',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'char-amer'},
        {dir: 'south', id: 'spri-amer'},
        {dir: 'east', id: 'prin-macd'},
        {dir: 'west', id: 'vand-vari'},
      ]
    },
    {
      id: 'spri-amer',
      coord: [],
      name: 'Spring St. and Ave of Americas',
      desc: '',
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: 'vand-amer'},
        {dir: 'south', id: 'domi-amer'},
        {dir: 'east', id: 'spri-sull'},
        {dir: 'west', id: 'spri-vari'},
      ]
    },
    {
      id: 'domi-amer',
      coord: [],
      name: 'Dominick Ave. and Ave of Americas',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-amer'},
        {dir: 'south', id: 'sull-amer'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'domi-vari'},
      ]
    },
    {
      id: 'sull-amer',
      coord: [],
      name: 'Sullivan St. and Ave of Americas',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-sull'},
        {dir: 'south', id: 'broo-amer'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'domi-amer'},
      ]
    },
    {
      id: 'broo-amer',
      coord: [],
      name: 'Broome St. and Ave of Americas',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'sull-amer'},
        {dir: 'south', id: 'watt-amer'},
        {dir: 'east', id: 'broo-thom'},
        {dir: 'west', id: 'broo-vari'},
      ]
    },
    {
      id: 'watt-amer',
      coord: [],
      name: 'Watts St. and Ave of Americas',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-amer'},
        {dir: 'south', id: 'gran-amer'},
        {dir: 'east', id: 'watt-thom'},
        {dir: 'west', id: 'watt-vari'},
      ]
    },
    {
      id: 'gran-amer',
      coord: [],
      name: 'Grand St. and Ave of Americas',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'watt-amer'},
        {dir: 'south', id: 'cana-amer'},
        {dir: 'east', id: 'gran-thom'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'cana-amer',
      coord: [],
      name: 'Canal St. and Ave of Americas',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-amer'},
        {dir: 'south', id: 'laig-amer'},
        {dir: 'east', id: 'cana-thom'},
        {dir: 'west', id: 'cana-vari'},
      ]
    },
    {
      id: 'hous-macd',
      coord: [],
      name: 'W. Houston St. and MacDougal Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'blee-macd'},
        {dir: 'south', id: 'king-macd'},
        {dir: 'east', id: 'hous-sull'},
        {dir: 'west', id: 'hous-amer'},
      ]
    },
    {
      id: 'king-macd',
      coord: [],
      name: 'King St. and MacDougal Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-macd'},
        {dir: 'south', id: 'prin-macd'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'king-amer'},
      ]
    },
    {
      id: 'prin-macd',
      coord: [],
      name: 'Prince St. and MacDougal Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'king-macd'},
        {dir: 'south', id: 'vand-amer'},
        {dir: 'east', id: 'prin-sull'},
        {dir: 'west', id: 'char-amer'},
      ]
    },
    {
      id: 'hous-sull',
      coord: [],
      name: 'W. Houston St. and Sullivan St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'blee-sull'},
        {dir: 'south', id: 'prin-sull'},
        {dir: 'east', id: 'hous-thom'},
        {dir: 'west', id: 'hous-macd'},
      ]
    },
    {
      id: 'prin-sull',
      coord: [],
      name: 'Prince St. and Sullivan St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-sull'},
        {dir: 'south', id: 'spri-sull'},
        {dir: 'east', id: 'prin-thom'},
        {dir: 'west', id: 'prin-macd'},
      ]
    },
    {
      id: 'spri-sull',
      coord: [],
      name: 'Spring St. and Sullivan St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'prin-sull'},
        {dir: 'south', id: 'sull-amer'},
        {dir: 'east', id: 'spri-thom'},
        {dir: 'west', id: 'spri-amer'},
      ]
    },
    {
      id: 'hous-thom',
      coord: [],
      name: 'W. Houston St. and Thompson St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'blee-thom'},
        {dir: 'south', id: 'prin-thom'},
        {dir: 'east', id: 'hous-lagu'},
        {dir: 'west', id: 'hous-sull'},
      ]
    },
    {
      id: 'prin-thom',
      coord: [],
      name: 'Prince St. and Thompson St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir:  'north', id: 'hous-thom'},
        {dir: 'south', id: 'spri-thom'},
        {dir: 'east', id: 'prin-wbro'},
        {dir: 'west', id: 'prin-sull'},
      ]
    },
    {
      id: 'spri-thom',
      coord: [],
      name: 'Spring St. and Thompson St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-thom'},
        {dir: 'south', id: 'broo-thom'},
        {dir: 'east', id: 'spri-wbro'},
        {dir: 'west', id: 'spri-sull'},
      ]
    },
    {
      id: 'broo-thom',
      coord: [],
      name: 'Broome St. and Thompson St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-thom'},
        {dir: 'south', id: 'watt-thom'},
        {dir: 'east', id: 'broo-wbro'},
        {dir: 'west', id: 'broo-amer'},
      ]
    },
    {
      id: 'watt-thom',
      coord: [],
      name: 'Watts St. and Thompson St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-thom'},
        {dir: 'south', id: 'gran-thom'},
        {dir: 'east', id: 'watt-broa'},
        {dir: 'west', id: 'watt-amer'},
      ]
    },
    {
      id: 'gran-thom',
      coord: [],
      name: 'Grand St. and Thompson St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'watt-thom'},
        {dir: 'south', id: 'cana-thom'},
        {dir: 'east', id: 'gran-wbro'},
        {dir: 'west', id: 'gran-amer'},
      ]
    },
    {
      id: 'cana-thom',
      coord: [],
      name: 'Canal St. and Thompson St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-thom'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'cana-wbro'},
        {dir: 'west', id: 'cana-amer'},
      ]
    },
    {
      id: 'hous-lagu',
      coord: [],
      name: 'W. Houston St. and LaGuardia Pl.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'blee-lagu'},
        {dir: 'south', id: 'prin-wbro'},
        {dir: 'east', id: 'hous-woos'},
        {dir: 'west', id: 'hous-thom'},
      ]
    },
    {
      id: 'prin-wbro',
      coord: [],
      name: 'Prince St. and W. Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-lagu'},
        {dir: 'south', id: 'spri-wbro'},
        {dir: 'east', id: 'prin-woos'},
        {dir: 'west', id: 'prin-thom'},
      ]
    },
    {
      id: 'spri-wbro',
      coord: [],
      name: 'Spring St. and W. Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'prin-wbro'},
        {dir: 'south', id: 'broo-wbro'},
        {dir: 'east', id: 'spri-woos'},
        {dir: 'west', id: 'spri-thom'},
      ]
    },
    {
      id: 'broo-wbro',
      coord: [],
      name: 'Broome St. and W. Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-wbro'},
        {dir: 'south', id: 'watt-broa'},
        {dir: 'east', id: 'broo-woos'},
        {dir: 'west', id: 'broo-thom'},
      ]
    },
    {
      id: 'watt-broa',
      coord: [],
      name: 'Watts St. and W. Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-wbro'},
        {dir: 'south', id: 'gran-wbro'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'watt-thom'},
      ]
    },
    {
      id: 'gran-wbro',
      coord: [],
      name: 'Grand St. and W. Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'watt-broa'},
        {dir: 'south', id: 'cana-wbro'},
        {dir: 'east', id: 'gran-woos'},
        {dir: 'west', id: 'gran-thom'},
      ]
    },
    {
      id: 'cana-wbro',
      coord: [],
      name: 'Canal St. and W. Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-wbro'},
        {dir: 'south', id: 'lisp-wbro'},
        {dir: 'east', id: 'cana-woos'},
        {dir: 'west', id: 'cana-thom'},
      ]
    },
    {
      id: 'hous-woos',
      coord: [],
      name: 'W. Houston St. and Wooster Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'prin-woos'},
        {dir: 'east', id: 'hous-gree'},
        {dir: 'west', id: 'hous-lagu'},
      ]
    },
    {
      id: 'prin-woos',
      coord: [],
      name: 'Prince St. and Wooster Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-woos'},
        {dir: 'south', id: 'spri-woos'},
        {dir: 'east', id: 'prin-gree'},
        {dir: 'west', id: 'prin-wbro'},
      ]
    },
    {
      id: 'spri-woos',
      coord: [],
      name: 'Spring St. and Wooster Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'prin-woos'},
        {dir: 'south', id: 'broo-woos'},
        {dir: 'east', id: 'spri-gree'},
        {dir: 'west', id: 'spri-wbro'},
      ]
    },
    {
      id: 'broo-woos',
      coord: [],
      name: 'Broome St. and Wooster Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-woos'},
        {dir: 'south', id: 'gran-woos'},
        {dir: 'east', id: 'broo-gree'},
        {dir: 'west', id: 'broo-wbro'},
      ]
    },
    {
      id: 'gran-woos',
      coord: [],
      name: 'Grand St. and Wooster Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-woos'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'gran-gree'},
        {dir: 'west', id: 'gran-wbro'},
      ]
    },
    {
      id: 'cana-woos',
      coord: [],
      name: 'Canal St. and Wooster Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-woos'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'cana-chur'},
        {dir: 'west', id: 'cana-wbro'},
      ]
    },
    {
      id: 'cana-chur',
      coord: [],
      name: 'Canal St. and Church Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'lisp-chur'},
        {dir: 'east', id: 'cana-gree'},
        {dir: 'west', id: 'cana-woos'},
      ]
    },
    {
      id: 'hous-gree',
      coord: [],
      name: 'W. Houston St. and Green Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'prin-gree'},
        {dir: 'east', id: 'hous-merc'},
        {dir: 'west', id: 'hous-woos'},
      ]
    },
    {
      id: 'prin-gree',
      coord: [],
      name: 'Prince St. and Green Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-gree'},
        {dir: 'south', id: 'spri-gree'},
        {dir: 'east', id: 'prin-merc'},
        {dir: 'west', id: 'prin-woos'},
      ]
    },
    {
      id: 'spri-gree',
      coord: [],
      name: 'Spring St. and Green Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'prin-gree'},
        {dir: 'south', id: 'broo-gree'},
        {dir: 'east', id: 'spri-merc'},
        {dir: 'west', id: 'spri-woos'},
      ]
    },
    {
      id: 'broo-gree',
      coord: [],
      name: 'Broome St. and Green Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-gree'},
        {dir: 'south', id: 'gran-gree'},
        {dir: 'east', id: 'broo-merc'},
        {dir: 'west', id: 'broo-woos'},
      ]
    },
    {
      id: 'gran-gree',
      coord: [],
      name: 'Grand St. and Green Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-gree'},
        {dir: 'south', id: 'cana-gree'},
        {dir: 'east', id: 'gran-merc'},
        {dir: 'west', id: 'gran-woos'},
      ]
    },
    {
      id: 'cana-gree',
      coord: [],
      name: 'Canal St. and Green Ave.',
      desc: 'The Museum of Holography',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-gree'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'cana-merc'},
        {dir: 'west', id: 'cana-chur'},
      ]
    },
    {
      id: 'hous-merc',
      coord: [],
      name: 'W. Houston St. and Mercer Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'blee-merc'},
        {dir: 'south', id: 'prin-merc'},
        {dir: 'east', id: 'hous-broa'},
        {dir: 'west', id: 'hous-gree'},
      ]
    },
    {
      id: 'prin-merc',
      coord: [],
      name: 'Prince St. and Mercer Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-merc'},
        {dir: 'south', id: 'spri-merc'},
        {dir: 'east', id: 'prin-broa'},
        {dir: 'west', id: 'prin-gree'},
      ]
    },
    {
      id: 'spri-merc',
      coord: [],
      name: 'Spring St. and Mercer Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'prin-merc'},
        {dir: 'south', id: 'broo-merc'},
        {dir: 'east', id: 'spri-broa'},
        {dir: 'west', id: 'spri-gree'},
      ]
    },
    {
      id: 'broo-merc',
      coord: [],
      name: 'Broome St. and Mercer Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-merc'},
        {dir: 'south', id: 'gran-merc'},
        {dir: 'east', id: 'broo-broa'},
        {dir: 'west', id: 'broo-gree'},
      ]
    },
    {
      id: 'gran-merc',
      coord: [],
      name: 'Grand St. and Mercer Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-merc'},
        {dir: 'south', id: 'howa-merc'},
        {dir: 'east', id: 'gran-broa'},
        {dir: 'west', id: 'gran-gree'},
      ]
    },
    {
      id: 'howa-merc',
      coord: [],
      name: 'Howard St. and Mercer Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-merc'},
        {dir: 'south', id: 'cana-merc'},
        {dir: 'east', id: 'howa-broa'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'cana-merc',
      coord: [],
      name: 'Canal St. and Mercer Ave.',
      desc: '',
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: 'howa-merc'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'cana-broa'},
        {dir: 'west', id: 'cana-gree'},
      ]
    },
  
      /**************/
     /*Little Italy*/
    /**************/
    {
      id: 'hous-broa',
      coord: [],
      name: 'W. Houston St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'blee-broa'},
        {dir: 'south', id: 'prin-broa'},
        {dir: 'east', id: 'hous-cros'},
        {dir: 'west', id: 'hous-merc'},
      ]
    },
    {
      id: 'prin-broa',
      coord: [],
      name: 'Prince St. and Broadway',
      desc: '',
      isStreet: true,  
      exits: [
        {dir: 'north', id: 'hous-broa'},
        {dir: 'south', id: 'spri-broa'},
        {dir: 'east', id: 'prin-cros'},
        {dir: 'west', id: 'prin-merc'},
      ]
    },
    {
      id: 'spri-broa',
      coord: [],
      name: 'Spring St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'prin-broa'},
        {dir: 'south', id: 'broo-broa'},
        {dir: 'east', id: 'spri-cros'},
        {dir: 'west', id: 'spri-merc'},
      ]
    },
    {
      id: 'broo-broa',
      coord: [],
      name: 'Broome St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-broa'},
        {dir: 'south', id: 'gran-broa'},
        {dir: 'east', id: 'broo-cros'},
        {dir: 'west', id: 'broo-merc'},
      ]
    },
    {
      id: 'gran-broa',
      coord: [],
      name: 'Grand St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-broa'},
        {dir: 'south', id: 'howa-broa'},
        {dir: 'east', id: 'gran-cros'},
        {dir: 'west', id: 'gran-merc'},
      ]
    },
    {
      id: 'howa-broa',
      coord: [],
      name: 'Howard St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-broa'},
        {dir: 'south', id: 'cana-broa'},
        {dir: 'east', id: 'howa-cros'},
        {dir: 'west', id: 'howa-merc'},
      ]
    },
    {
      id: 'cana-broa',
      coord: [],
      name: 'Canal St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'howa-broa'},
        {dir: 'south', id: 'lisp-broa'},
        {dir: 'east', id: 'cana-cort'},
        {dir: 'west', id: 'cana-merc'},
      ]
    },
    {
      id: 'hous-cros',
      coord: [],
      name: 'E. Houston St. and Crosby St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'blee-cros'},
        {dir: 'south', id: 'jers-cros'},
        {dir: 'east', id: 'hous-lafa'},
        {dir: 'west', id: 'hous-broa'},
      ]
    },
    {
      id: 'jers-cros',
      coord: [],
      name: 'Jersey St. and Crosby St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-cros'},
        {dir: 'south', id: 'prin-cros'},
        {dir: 'east', id: 'jers-lafa'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'prin-cros',
      coord: [],
      name: 'Prince St. and Crosby St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'jers-cros'},
        {dir: 'south', id: 'spri-cros'},
        {dir: 'east', id: 'prin-lafa'},
        {dir: 'west', id: 'prin-broa'},
      ]
    },
    {
      id: 'spri-cros',
      coord: [],
      name: 'Spring St. and Crosby St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'prin-cros'},
        {dir: 'south', id: 'broo-cros'},
        {dir: 'east', id: 'spri-lafa'},
        {dir: 'west', id: 'spri-broa'},
      ]
    },
    {
      id: 'broo-cros',
      coord: [],
      name: 'Broome St. and Crosby St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-cros'},
        {dir: 'south', id: 'gran-cros'},
        {dir: 'east', id: 'broo-lafa'},
        {dir: 'west', id: 'broo-broa'},
      ]
    },
    {
      id: 'gran-cros',
      coord: [],
      name: 'Grand St. and Crosby St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-cros'},
        {dir: 'south', id: 'howa-cros'},
        {dir: 'east', id: 'gran-lafa'},
        {dir: 'west', id: 'gran-broa'},
      ]
    },
    {
      id: 'howa-cros',
      coord: [],
      name: 'Howard St. and Crosby St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-cros'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'howa-lafa'},
        {dir: 'west', id: 'howa-broa'},
      ]
    },
    {
      id: 'cana-cort',
      coord: [],
      name: 'Canal St. and Corlandnt Al.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '', block: `You can't go that way.`},
        {dir: 'south', id: 'walk-cort'},
        {dir: 'east', id: 'cana-lafa'},
        {dir: 'west', id: 'cana-broa'},
      ]
    },
    {
      id: 'hous-lafa',
      coord: [],
      name: 'E. Houston and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'lafa-mulb'},
        {dir: 'south', id: 'jers-lafa'},
        {dir: 'east', id: 'hous-mulb'},
        {dir: 'west', id: 'hous-cros'},
      ]
    },
    {
      id: 'jers-lafa',
      coord: [],
      name: 'Jersey St. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-lafa'},
        {dir: 'south', id: 'prin-lafa'},
        {dir: 'east', id: 'jers-mulb'},
        {dir: 'west', id: 'jers-cros'},
      ]
    },
    {
      id: 'prin-lafa',
      coord: [],
      name: 'Prince St. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'jers-lafa'},
        {dir: 'south', id: 'spri-lafa'},
        {dir: 'east', id: 'prin-mulb'},
        {dir: 'west', id: 'prin-cros'},
      ]
    },
    {
      id: 'spri-lafa',
      coord: [],
      name: 'Spring St. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'prin-lafa'},
        {dir: 'south', id: 'kenm-lafa'},
        {dir: 'east', id: 'spri-cent'},
        {dir: 'west', id: 'spri-cros'},
      ]
    },
    {
      id: 'kenm-lafa',
      coord: [],
      name: 'Kenmare St. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-lafa'},
        {dir: 'south', id: 'broo-lafa'},
        {dir: 'east', id: 'kenm-cent'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'broo-lafa',
      coord: [],
      name: 'Broome St. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'kenm-lafa'},
        {dir: 'south', id: 'gran-lafa'},
        {dir: 'east', id: 'broo-cent'},
        {dir: 'west', id: 'broo-cros'},
      ]
    },
    {
      id: 'gran-lafa',
      coord: [],
      name: 'Grand St. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-lafa'},
        {dir: 'south', id: 'howa-lafa'},
        {dir: 'east', id: 'gran-cent'},
        {dir: 'west', id: 'gran-cros'},
      ]
    },
    {
      id: 'howa-lafa',
      coord: [],
      name: 'Howard St. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-lafa'},
        {dir: 'south', id: 'cana-lafa'},
        {dir: 'east', id: 'howa-cent'},
        {dir: 'west', id: 'howa-cros'},
      ]
    },
    {
      id: 'cana-lafa',
      coord: [],
      name: 'Canal St. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'howa-lafa'},
        {dir: 'south', id: 'walk-lafa'},
        {dir: 'east', id: 'cana-cent'},
        {dir: 'west', id: 'cana-cort'},
      ]
    },
    {
      id: 'spri-cent',
      coord: [],
      name: 'Spring St. and Centre St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'prin-lafa'},
        {dir: 'south', id: 'kenm-cent'},
        {dir: 'east', id: 'kenm-mulb'},
        {dir: 'west', id: 'spri-lafa'},
      ]
    },
    {
      id: 'kenm-cent',
      coord: [],
      name: 'Kenmare St. and Centre St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-cent'},
        {dir: 'south', id: 'broo-cent'},
        {dir: 'east', id: 'kenm-mulb'},
        {dir: 'west', id: 'kenm-lafa'},
      ]
    },
    {
      id: 'broo-cent',
      coord: [],
      name: 'Broome St. and Centre St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'kenm-cent'},
        {dir: 'south', id: 'gran-cent'},
        {dir: 'east', id: 'broo-baxt'},
        {dir: 'west', id: 'broo-lafa'},
      ]
    },
    {
      id: 'gran-cent',
      coord: [],
      name: 'Grand St. and Centre St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-cent'},
        {dir: 'south', id: 'howa-cent'},
        {dir: 'east', id: 'gran-baxt'},
        {dir: 'west', id: 'gran-lafa'},
      ]
    },
    {
      id: 'howa-cent',
      coord: [],
      name: 'Howard St. and Centre St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-cent'},
        {dir: 'south', id: 'hest-cent'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'howa-lafa'},
      ]
    },
    {
      id: 'hest-cent',
      coord: [],
      name: 'Hester St. and Centre St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'howa-cent'},
        {dir: 'south', id: 'cana-cent'},
        {dir: 'east', id: 'hest-baxt'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'cana-cent',
      coord: [],
      name: 'Canal St. and Centre St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hest-cent'},
        {dir: 'south', id: 'walk-cent'},
        {dir: 'east', id: 'cana-baxt'},
        {dir: 'west', id: 'cana-lafa'},
      ]
    },
    {
      id: 'broo-baxt',
      coord: [],
      name: 'Broome St. and Baxter St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'gran-baxt'},
        {dir: 'east', id: 'broo-mulb'},
        {dir: 'west', id: 'broo-cent'},
      ]
    },
    {
      id: 'gran-baxt',
      coord: [],
      name: 'Grand St. and Baxter St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-baxt'},
        {dir: 'south', id: 'hest-baxt'},
        {dir: 'east', id: 'gran-mulb'},
        {dir: 'west', id: 'gran-cent'},
      ]
    },
    {
      id: 'hest-baxt',
      coord: [],
      name: 'Hester St. and Baxter St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-baxt'},
        {dir: 'south', id: 'cana-baxt'},
        {dir: 'east', id: 'hest-mulb'},
        {dir: 'west', id: 'hest-cent'},
      ]
    },
    {
      id: 'cana-baxt',
      coord: [],
      name: 'Canal St. and Baxter St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hest-baxt'},
        {dir: 'south', id: 'walk-baxt'},
        {dir: 'east', id: 'cana-mulb'},
        {dir: 'west', id: 'cana-cent'},
      ]
    },
    {
      id: 'hous-mulb',
      coord: [],
      name: 'E. Houston St. and Mulberry St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'lafa-mulb'},
        {dir: 'south', id: 'jers-mulb'},
        {dir: 'east', id: 'hous-mott'},
        {dir: 'west', id: 'hous-lafa'},
      ]
    },
    {
      id: 'jers-mulb',
      coord: [],
      name: 'Jersey St. and Mulberry St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-mulb'},
        {dir: 'south', id: 'prin-mulb'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'jers-lafa'},
      ]
    },
    {
      id: 'prin-mulb',
      coord: [],
      name: 'Prince St. and Mulberry St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'jers-mulb'},
        {dir: 'south', id: 'spri-mulb'},
        {dir: 'east', id: 'prin-mott'},
        {dir: 'west', id: 'prin-lafa'},
      ]
    },
    {
      id: 'spri-mulb',
      coord: [],
      name: 'Spring St. and Mulberry St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'prin-mulb'},
        {dir: 'south', id: 'kenm-mulb'},
        {dir: 'east', id: 'spri-mott'},
        {dir: 'west', id: 'spri-cent'},
      ]
    },
    {
      id: 'kenm-mulb',
      coord: [],
      name: 'Kenmare St. and Mulberry St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-mulb'},
        {dir: 'south', id: 'kenm-mulb'},
        {dir: 'east', id: 'kenm-mott'},
        {dir: 'west', id: 'kenm-cent'},
      ]
    },
    {
      id: 'broo-mulb',
      coord: [],
      name: 'Broome St. and Mulberry St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'kenm-mulb'},
        {dir: 'south', id: 'gran-mulb'},
        {dir: 'east', id: 'broo-mott'},
        {dir: 'west', id: 'broo-baxt'},
      ]
    },
    {
      id: 'gran-mulb',
      coord: [],
      name: 'Grand St. and Mulberry St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-mulb'},
        {dir: 'south', id: 'hest-mulb'},
        {dir: 'east', id: 'gran-mott'},
        {dir: 'west', id: 'gran-baxt'},
      ]
    },
    {
      id: 'hest-mulb',
      coord: [],
      name: 'Hester St. and Mulberry St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-mulb'},
        {dir: 'south', id: 'cana-mulb'},
        {dir: 'east', id: 'hest-mott'},
        {dir: 'west', id: 'hest-baxt'},
      ]
    },
    {
      id: 'cana-mulb',
      coord: [],
      name: 'Canal St. and Mulberry St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hest-mulb'},
        {dir: 'south', id: 'walk-mulb'},
        {dir: 'east', id: 'cana-mott'},
        {dir: 'west', id: 'cana-baxt'},
      ]
    },
    {
      id: 'hous-mott',
      coord: [],
      name: 'E. Houston St. and Mott St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'blee-mott'},
        {dir: 'south', id: 'prin-mott'},
        {dir: 'east', id: 'hous-eliz'},
        {dir: 'west', id: 'hous-mulb'},
      ]
    },
    {
      id: 'prin-mott',
      coord: [],
      name: 'Prince St. and Mott St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-mott'},
        {dir: 'south', id: 'spri-mott'},
        {dir: 'east', id: 'prin-eliz'},
        {dir: 'west', id: 'prin-mulb'},
      ]
    },
    {
      id: 'spri-mott',
      coord: [],
      name: 'Spring St. and Mott St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'prin-mott'},
        {dir: 'south', id: 'kenm-mott'},
        {dir: 'east', id: 'spri-eliz'},
        {dir: 'west', id: 'spri-mulb'},
      ]
    },
    {
      id: 'kenm-mott',
      coord: [],
      name: 'Kenmare St. and Mott St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-mott'},
        {dir: 'south', id: 'broo-mott'},
        {dir: 'east', id: 'kenm-eliz'},
        {dir: 'west', id: 'kenm-mulb'},
      ]
    },
    {
      id: 'broo-mott',
      coord: [],
      name: 'Broome St. and Mott St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'kenm-mott'},
        {dir: 'south', id: 'gran-mott'},
        {dir: 'east', id: 'broo-eliz'},
        {dir: 'west', id: 'broo-mulb'},
      ]
    },
    {
      id: 'gran-mott',
      coord: [],
      name: 'Grand St. and Mott St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-mott'},
        {dir: 'south', id: 'hest-mott'},
        {dir: 'east', id: 'gran-eliz'},
        {dir: 'west', id: 'gran-mulb'},
      ]
    },
    {
      id: 'hest-mott',
      coord: [],
      name: 'Hester St. and Mott St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-mott'},
        {dir: 'south', id: 'cana-mott'},
        {dir: 'east', id: 'hest-eliz'},
        {dir: 'west', id: 'hest-mulb'},
      ]
    },
    {
      id: 'cana-mott',
      coord: [],
      name: 'Canal St. and Mott St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hest-mott'},
        {dir: 'south', id: 'baya-mott'},
        {dir: 'east', id: 'cana-eliz'},
        {dir: 'west', id: 'cana-mulb'},
      ]
    },
    {
      id: 'hous-eliz',
      coord: [],
      name: 'E. Houston St and Elizabeth St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'blee-eliz'},
        {dir: 'south', id: 'prin-eliz'},
        {dir: 'east', id: 'hous-bowe'},
        {dir: 'west', id: 'hous-mott'},
      ]
    },
    {
      id: 'prin-eliz',
      coord: [],
      name: 'Prince St. and Elizabeth St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-eliz'},
        {dir: 'south', id: 'spri-eliz'},
        {dir: 'east', id: 'prin-bowe'},
        {dir: 'west', id: 'prin-mott'},
      ]
    },
    {
      id: 'spri-eliz',
      coord: [],
      name: 'Spring St. and Elizabeth St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'prin-eliz'},
        {dir: 'south', id: 'kenm-eliz'},
        {dir: 'east', id: 'spri-bowe'},
        {dir: 'west', id: 'spri-mott'},
      ]
    },
    {
      id: 'kenm-eliz',
      coord: [],
      name: 'Kenmare St. and Elizabeth St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-eliz'},
        {dir: 'south', id: 'broo-eliz'},
        {dir: 'east', id: 'kenm-bowe'},
        {dir: 'west', id: 'kenm-mott'},
      ]
    },
    {
      id: 'broo-eliz',
      coord: [],
      name: 'Broome St. and Elizabeth St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'kenm-eliz'},
        {dir: 'south', id: 'gran-eliz'},
        {dir: 'east', id: 'broo-bowe'},
        {dir: 'west', id: 'broo-mott'},
      ]
    },
    {
      id: 'gran-eliz',
      coord: [],
      name: 'Grand St. and Elizabeth St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-eliz'},
        {dir: 'south', id: 'hest-eliz'},
        {dir: 'east', id: 'gran-bowe'},
        {dir: 'west', id: 'gran-mott'},
      ]
    },
    {
      id: 'hous-bowe',
      coord: [],
      name: 'E. Houston St. and Bowery St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '1-bowe'},
        {dir: 'south', id: 'stan-bowe'},
        {dir: 'east', id: 'hous-chry'},
        {dir: 'west', id: 'hous-eliz'},
      ]
    },
    {
      id: 'stan-bowe',
      coord: [],
      name: 'Stanton St. and Bowery St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-bowe'},
        {dir: 'south', id: 'prin-bowe'},
        {dir: 'east', id: 'stan-chry'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'prin-bowe',
      coord: [],
      name: 'Prince St. and Bowery St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stan-bowe'},
        {dir: 'south', id: 'rivi-bowe'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'prin-eliz'},
      ]
    },
    {
      id: 'rivi-bowe',
      coord: [],
      name: 'Rivington St. and Bowery St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'prin-bowe'},
        {dir: 'south', id: 'spri-bowe'},
        {dir: 'east', id: 'rivi-chry'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'spri-bowe',
      coord: [],
      name: 'Spring St. and Bowery St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'rivi-bowe'},
        {dir: 'south', id: 'kenm-bowe'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'spri-eliz'},
      ]
    },
    {
      id: 'kenm-bowe',
      coord: [],
      name: 'Kenmare St. and Bowery St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-bowe'},
        {dir: 'south', id: 'broo-bowe'},
        {dir: 'east', id: 'dela-chry'},
        {dir: 'west', id: 'kenm-eliz'},
      ]
    },
    {
      id: 'broo-bowe',
      coord: [],
      name: 'Broome St. and Bowery St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'kenm-bowe'},
        {dir: 'south', id: 'gran-bowe'},
        {dir: 'east', id: 'broo-chry'},
        {dir: 'west', id: 'broo-eliz'},
      ]
    },
    {
      id: 'gran-bowe',
      coord: [],
      name: 'Grand St. and Bowery St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-bowe'},
        {dir: 'south', id: 'hest-bowe'},
        {dir: 'east', id: 'gran-chry'},
        {dir: 'west', id: 'gran-eliz'},
      ]
    },
    
      /***********/
     /*Chinatown*/
    /***********/
    {
      id: 'lisp-broa',
      coord: [],
      name: 'Lispenard St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-broa'},
        {dir: 'south', id: 'walk-broa'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'lisp-broa'},
      ]
    },
    {
      id: 'walk-broa',
      coord: [],
      name: 'Walker St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'lisp-broa'},
        {dir: 'south', id: 'whit-broa'},
        {dir: 'east', id: 'walk-cort'},
        {dir: 'west', id: 'walk-chur'},
      ]
    },
    {
      id: 'whit-broa',
      coord: [],
      name: 'White St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'walk-broa'},
        {dir: 'south', id: 'fran-broa'},
        {dir: 'east', id: 'whit-cort'},
        {dir: 'west', id: 'whit-chur'},
      ]
    },
    {
      id: 'fran-broa',
      coord: [],
      name: 'Franklin St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'whit-broa'},
        {dir: 'south', id: 'leon-broa'},
        {dir: 'east', id: 'fran-cort'},
        {dir: 'west', id: 'fran-chur'},
      ]
    },
    {
      id: 'leon-broa',
      coord: [],
      name: 'Leonard St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'fran-broa'},
        {dir: 'south', id: 'cath-broa'},
        {dir: 'east', id: 'leon-bens'},
        {dir: 'west', id: 'leon-chur'},
      ]
    },
    {
      id: 'walk-cort',
      coord: [],
      name: 'Walker St. and Cortlandt Al.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-cort'},
        {dir: 'south', id: 'whit-cort'},
        {dir: 'east', id: 'walk-lafa'},
        {dir: 'west', id: 'walk-broa'},
      ]
    },
    {
      id: 'whit-cort',
      coord: [],
      name: 'White St. and Cortlandt Al.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'walk-cort'},
        {dir: 'south', id: 'fran-cort'},
        {dir: 'east', id: 'whit-lafa'},
        {dir: 'west', id: 'whit-broa'},
      ]
    },
    {
      id: 'fran-cort',
      coord: [],
      name: 'Franklin St. and Cortlandt Al.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'whit-cort'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'fran-lafa'},
        {dir: 'west', id: 'fran-broa'},
      ]
    },
    {
      id: 'leon-bens',
      coord: [],
      name: 'Leonard St. and Benson Pl.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'leon-lafa'},
        {dir: 'west', id: 'leon-broa'},
      ]
    },
    {
      id: 'walk-lafa',
      coord: [],
      name: 'Walker St. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-lafa'},
        {dir: 'south', id: 'whit-lafa'},
        {dir: 'east', id: 'walk-cent'},
        {dir: 'west', id: 'walk-cort'},
      ]
    },
    {
      id: 'whit-lafa',
      coord: [],
      name: 'White St. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'walk-lafa'},
        {dir: 'south', id: 'fran-lafa'},
        {dir: 'east', id: 'whit-cent'},
        {dir: 'west', id: 'whit-cort'},
      ]
    },
    {
      id: 'fran-lafa',
      coord: [],
      name: 'Franklin St. and Lafayette',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'whit-lafa'},
        {dir: 'south', id: 'leon-lafa'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'fran-cort'},
      ]
    },
    {
      id: 'leon-lafa',
      coord: [],
      name: 'Leonard St. and Lafayette',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'fran-lafa'},
        {dir: 'south', id: 'cath-lafa'},
        {dir: 'east', id: 'leon-cent'},
        {dir: 'west', id: 'leon-bens'},
      ]
    },
    {
      id: 'walk-cent',
      coord: [],
      name: 'Walker St. and Centre St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-cent'},
        {dir: 'south', id: 'whit-cent'},
        {dir: 'east', id: 'walk-baxt'},
        {dir: 'west', id: 'walk-lafa'},
      ]
    },
    {
      id: 'whit-cent',
      coord: [],
      name: 'White St. and Centre St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'walk-cent'},
        {dir: 'south', id: 'leon-cent'},
        {dir: 'east', id: 'whit-baxt'},
        {dir: 'west', id: 'whit-lafa'},
      ]
    },
    {
      id: 'leon-cent',
      coord: [],
      name: 'Leonard St. and Centre St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'whit-cent'},
        {dir: 'south', id: 'wort-cent'},
        {dir: 'east', id: 'leon-baxt'},
        {dir: 'west', id: 'leon-lafa'},
      ]
    },
    {
      id: 'walk-baxt',
      coord: [],
      name: 'Walker St. and Baxter St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-baxt'},
        {dir: 'south', id: 'whit-baxt'},
        {dir: 'east', id: 'walk-mulb'},
        {dir: 'west', id: 'walk-cent'},
      ]
    },
    {
      id: 'whit-baxt',
      coord: [],
      name: 'White St. and Baxter St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'walk-baxt'},
        {dir: 'south', id: 'baya-baxt'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'whit-cent'},
      ]
    },
    {
      id: 'baya-baxt',
      coord: [],
      name: 'Baynard St. and Baxter St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'whit-baxt'},
        {dir: 'south', id: 'leon-baxt'},
        {dir: 'east', id: 'baya-mulb'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'leon-baxt',
      coord: [],
      name: 'Leonard St. and Baxter St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'baya-baxt'},
        {dir: 'south', id: 'wort-baxt'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'leon-cent'},
      ]
    },
    {
      id: 'wort-baxt',
      coord: [],
      name: 'Worth St. and Baxter St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'leon-baxt'},
        {dir: 'south', id: 'baxt-kent'},
        {dir: 'east', id: 'wort-park'},
        {dir: 'west', id: 'wort-hami'},
      ]
    },
    {
      id: 'walk-mulb',
      coord: [],
      name: 'Walker St. and Mulberry St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-mulb'},
        {dir: 'south', id: 'baya-mulb'},
        {dir: 'east', id: 'walk-baxt'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: 'baya-mulb',
      coord: [],
      name: 'Baynard St. and Mulberry St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'walk-mulb'},
        {dir: 'south', id: 'park-mulb'},
        {dir: 'east', id: 'baya-mott'},
        {dir: 'west', id: 'baya-baxt'},
      ]
    },
    {
      id: 'park-mulb',
      coord: [],
      name: 'Park St. and Mulberry St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'baya-mulb'},
        {dir: 'south', id: 'wort-mulb'},
        {dir: 'east', id: 'park-mott'},
        {dir: 'west', id: 'wort-park'},
      ]
    },
    {
      id: 'wort-park',
      coord: [],
      name: 'Worth St. and Park St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'park-mulb'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'wort-mulb'},
        {dir: 'west', id: 'wort-baxt'},
      ]
    },
    {
      id: 'wort-mulb',
      coord: [],
      name: 'Worth St. and Mulberry St.',
      desc: `Clam House. The tourists file out of the bus and listen to their guide's account of how on the night of his 43rd birthday, April 7, 1972, "Crazy Joey" Gallo was shot down in this very restaurant.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'park-mulb'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'wort-mott'},
        {dir: 'west', id: 'wort-park'},
      ]
    },
    {
      id: 'baya-mott',
      coord: [],
      name: 'Baynard St. and Mott St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-mott'},
        {dir: 'south', id: 'pell-mott'},
        {dir: 'east', id: 'baya-eliz'},
        {dir: 'west', id: 'baya-mulb'},
      ]
    },
    {
      id: 'pell-mott',
      coord: [],
      name: 'Pell St. and Mott St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'baya-mott'},
        {dir: 'south', id: 'park-mott'},
        {dir: 'east', id: 'pell-doye'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'park-mott',
      coord: [],
      name: 'Park St. and Mott St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'pell-mott'},
        {dir: 'south', id: 'wort-mott'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'park-mulb'},
      ]
    },
    {
      id: 'wort-mott',
      coord: [],
      name: 'Worth St. and Mott St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'park-mott'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'wort-park-1'},
        {dir: 'west', id: 'wort-mulb'},
      ]
    },
    {
      id: 'wort-park-1',
      coord: [],
      name: 'Worth St. and Park Row',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'divi-stja'},
        {dir: 'south', id: 'park-broa'},
        {dir: 'east', id: 'wort-stja'},
        {dir: 'west', id: 'wort-mott'},
      ]
    },
    {
      id: 'park-broa',
      coord: [],
      name: 'Park Row and E. Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wort-park-1'},
        {dir: 'south', id: 'pear-p'},
        {dir: 'east', id: 'broa-stja'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'wort-stja',
      coord: [],
      name: 'Worth St. and Saint James St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'divi-stja'},
        {dir: 'south', id: 'broa-stja'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'wort-park-1'},
      ]
    },
    {
      id: 'broa-stja',
      coord: [],
      name: 'E. Broadway and and Saint James St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wort-stja'},
        {dir: 'south', id: 'oliv-stja'},
        {dir: 'east', id: 'broa-cath'},
        {dir: 'west', id: 'park-broa'},
      ]
    },
    {
      id: 'divi-stja',
      coord: [],
      name: 'Division St. and Saint James St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stja-cath'},
        {dir: 'south', id: 'wort-stja'},
        {dir: 'east', id: 'divi-cath'},
        {dir: 'west', id: 'wort-park-1'},
      ]
    },
    {
      id: 'hest-eliz',
      coord: [],
      name: 'Hester St. and Elizabeth St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-eliz'},
        {dir: 'south', id: 'cana-eliz'},
        {dir: 'east', id: 'hest-bowe'},
        {dir: 'west', id: 'hest-mott'},
      ]
    },
    {
      id: 'cana-eliz',
      coord: [],
      name: 'Canal St. and Elizabeth St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hest-eliz'},
        {dir: 'south', id: 'baya-eliz'},
        {dir: 'east', id: 'cana-bowe'},
        {dir: 'west', id: 'cana-mott'},
      ]
    },
    {
      id: 'baya-eliz',
      coord: [],
      name: 'Baynard St. and Elizabeth St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-eliz'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'baya-stja'},
        {dir: 'west', id: 'baya-mott'},
      ]
    },
    {
      id: 'hest-bowe',
      coord: [],
      name: 'Hester St. and Bowery St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-bowe'},
        {dir: 'south', id: 'cana-bowe'},
        {dir: 'east', id: 'hest-chry'},
        {dir: 'west', id: 'hest-eliz'},
      ]
    },
    {
      id: 'cana-bowe',
      coord: [],
      name: 'Canal St. and Bowery St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hest-bowe'},
        {dir: 'south', id: 'baya-stja'},
        {dir: 'east', id: 'cana-manh'},
        {dir: 'west', id: 'cana-eliz'},
      ]
    },
    {
      id: 'baya-stja',
      coord: [],
      name: 'Baynard St. and Saint James St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-bowe'},
        {dir: 'south', id: 'pell-stja'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'baya-eliz'},
      ]
    },
    {
      id: 'pell-stja',
      coord: [],
      name: 'Pell St. and Saint James St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'baya-stja'},
        {dir: 'south', id: 'stja-doye'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'pell-doye'},
      ]
    },
    {
      id: 'stja-doye',
      coord: [],
      name: 'Saint James St. and Doyers La.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'pell-stja'},
        {dir: 'south', id: 'stja-cath'},
        {dir: 'east', lock: `You can't go that way.`},
        {dir: 'west', id: 'pell-doye'},
      ]
    },
    {
      id: 'pell-doye',
      coord: [],
      name: 'Pell St. and Doyers La. ',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'stja-doye'},
        {dir: 'east', id: 'pell-stja'},
        {dir: 'west', id: 'pell-mott'},
      ]
    },
    {
      id: 'stja-cath',
      coord: [],
      name: 'Saint James St. and Catherine St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stja-doye'},
        {dir: 'south', id: 'divi-stja'},
        {dir: 'east', id: 'divi-cath'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'divi-cath',
      coord: [],
      name: 'Division St. and Catherine St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stja-cath'},
        {dir: 'south', id: 'broa-cath'},
        {dir: 'east', id: 'divi-mark'},
        {dir: 'west', id: 'divi-stja'},
      ]
    },
    {
      id: 'broa-cath',
      coord: [],
      name: 'E. Broadway and Catherine St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'divi-cath'},
        {dir: 'south', id: 'henr-cath'},
        {dir: 'east', id: 'broa-mark'},
        {dir: 'west', id: 'broa-stja'},
      ]
    },
    {
      id: 'cana-manh',
      coord: [],
      name: 'Canal St. and Manhattan Bridge',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'cana-chry'},
        {dir: 'west', id: 'cana-bowe'},
      ]
    },
    {
      id: 'cana-chry',
      coord: [],
      name: 'Canal St. and Chrystie Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hest-chry'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'cana-fors'},
        {dir: 'west', id: 'cana-manh'},
      ]
    },
    {
      id: 'cana-fors',
      coord: [],
      name: 'Canal St. and Forsyth St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hest-fors'},
        {dir: 'south', id: 'fors-divi'},
        {dir: 'east', id: 'cana-eldr'},
        {dir: 'west', id: 'cana-chrs'},
      ]
    },
    {
      id: 'fors-divi',
      coord: [],
      name: 'Forsyth St. and Division St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-fors'},
        {dir: 'south', id: 'fors-broa'},
        {dir: 'east', id: 'divi-eldr'},
        {dir: 'west', id: 'divi-mark'},
      ]
    },
    {
      id: 'fors-broa',
      coord: [],
      name: 'Forsyth St. and E. Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'fors-divi'},
        {dir: 'south', id: 'fors-henr'},
        {dir: 'east', id: 'broa-pike'},
        {dir: 'west', id: 'broa-mark'},
      ]
    },
    {
      id: 'fors-henr',
      coord: [],
      name: 'Forsyth St. and Henry St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'fors-broa'},
        {dir: 'south', id: 'fors-madi'},
        {dir: 'east', id: 'henr-pike'},
        {dir: 'west', id: 'henr-mark'},
      ]
    },
    {
      id: 'divi-mark',
      coord: [],
      name: 'Division St. and Market St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '', block: `You can't go that way.`},
        {dir: 'south', id: 'broa-mark'},
        {dir: 'east', id: 'fors-divi'},
        {dir: 'west', id: 'divi-cath'},
      ]
    },
    {
      id: 'broa-mark',
      coord: [],
      name: 'E. Broadway and Market St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'divi-mark'},
        {dir: 'south', id: 'henr-mark'},
        {dir: 'east', id: 'fors-broa'},
        {dir: 'west', id: 'broa-cath'},
      ]
    },
    {
      id: 'henr-mark',
      coord: [],
      name: 'Henry St. and Market St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broa-mark'},
        {dir: 'south', id: 'madi-mark'},
        {dir: 'east', id: 'fors-henr'},
        {dir: 'west', id: 'henr-cath'},
      ]
    },
    {
      id: 'henr-cath',
      coord: [],
      name: 'Henry St. and Catherine St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broa-cath'},
        {dir: 'south', id: 'madi-cath'},
        {dir: 'east', id: 'henr-mark'},
        {dir: 'west', id: 'oliv-henr'},
      ]
    },
    {
      id: 'cana-eldr',
      coord: [],
      name: 'Canal St. and Eldridge St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hest-eldr'},
        {dir: 'south', id: 'divi-eldr'},
        {dir: 'east', id: 'cana-alle'},
        {dir: 'west', id: 'cana-fors'},
      ]
    },
    {
      id: 'divi-eldr',
      coord: [],
      name: 'Division St. and Eldridge St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'divi-cana-eldr'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'divi-alle'},
        {dir: 'west', id: 'fors-divi'},
      ]
    },
    {
      id: 'cana-alle',
      coord: [],
      name: 'Canal St. and Allen St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hest-alle'},
        {dir: 'south', id: 'divi-alle'},
        {dir: 'east', id: 'cana-orch'},
        {dir: 'west', id: 'cana-eldr'},
      ]
    },
    {
      id: 'divi-alle',
      coord: [],
      name: 'Division St. and Allen St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-alle'},
        {dir: 'south', id: 'broa-pike'},
        {dir: 'east', id: 'divi-orch'},
        {dir: 'west', id: 'divi-eldr'},
      ]
    },
    {
      id: 'broa-pike',
      coord: [],
      name: 'E. Broadway and Pike St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'divi-alle'},
        {dir: 'south', id: 'henr-pike'},
        {dir: 'east', id: 'broa-rutg'},
        {dir: 'west', id: 'fors-broa'},
      ]
    },
    {
      id: 'henr-pike',
      coord: [],
      name: 'Henry St. and Pike St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broa-pike'},
        {dir: 'south', id: 'madi-pike'},
        {dir: 'east', id: 'henr-rutg'},
        {dir: 'west', id: 'fors-henr'},
      ]
    },
    {
      id: 'cana-orch',
      coord: [],
      name: 'Canal St. and Orchard St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hest-orch'},
        {dir: 'south', id: 'divi-orch'},
        {dir: 'east', id: 'cana-ludl'},
        {dir: 'west', id: 'cana-alle'},
      ]
    },
    {
      id: 'divi-orch',
      coord: [],
      name: 'Division St. and Orchard St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-orch'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'divi-ludl'},
        {dir: 'west', id: 'divi-alle'},
      ]
    },
    {
      id: 'cana-ludl',
      coord: [],
      name: 'Canal St. and Ludlow St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hest-ludl'},
        {dir: 'south', id: 'divi-ludl'},
        {dir: 'east', id: 'cana-divi'},
        {dir: 'west', id: 'cana-orch'},
      ]
    },
    {
      id: 'cana-divi',
      coord: [],
      name: 'Canal St. and Division St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', lock: `You can't go that way.`},
        {dir: 'south', id: 'divi-ludl'},
        {dir: 'east', id: 'cana-rutg'},
        {dir: 'west', id: 'cana-ludl'},
      ]
    },
    {
      id: 'divi-ludl',
      coord: [],
      name: 'Division St. and Ludlow St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-ludl'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'cana-rutg'},
        {dir: 'west', id: 'divi-orch'},
      ]
    },
    {
      id: 'cana-rutg',
      coord: [],
      name: 'Canal St. and Rutgers St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hest-esse'},
        {dir: 'south', id: 'cana-rutg'},
        {dir: 'east', id: 'broa-cana'},
        {dir: 'west', id: 'cana-divi'},
      ]
    },
    {
      id: 'broa-rutg',
      coord: [],
      name: 'E. Broadway and Rutgers St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-rutg'},
        {dir: 'south', id: 'henr-rutg'},
        {dir: 'east', id: 'broa-cana'},
        {dir: 'west', id: 'broa-pike'},
      ]
    },
    {
      id: 'henr-rutg',
      coord: [],
      name: 'Henry St. and Rutgers St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broa-rutg'},
        {dir: 'south', id: 'madi-rutg'},
        {dir: 'east', id: 'henr-jeff'},
        {dir: 'west', id: 'henr-pike'},
      ]
    },
      /****************/
     /* East Village */
    /****************/
     {
      id: '14-broa',
      coord: [],
      name: 'E. 14th St. and Broadway',
      desc: 'There is a restaurant called Nedicks here.',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '13-broa'},
        {dir: 'east', id: '14-4'},
        {dir: 'west', id: '14-unio'},
        //{dir: 'Nedicks', id: '???'}
      ]
    },
    {
      id: '13-broa',
      coord: [],
      name: 'E. 13th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '14-broa'},
        {dir: 'south', id: '12-broa'},
        {dir: 'east', id: '13-4'},
        {dir: 'west', id: '13-univ'},
      ]
    },
    {
      id: '12-broa',
      coord: [],
      name: 'E. 12th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '13-broa'},
        {dir: 'south', id: '11-broa'},
        {dir: 'east', id: '12-4'},
        {dir: 'west', id: '12-univ'},
      ]
    },
    {
      id: '11-broa',
      coord: [],
      name: 'E. 11th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '12-broa'},
        {dir: 'south', id: '10-broa'},
        {dir: 'east', id: '11-4'},
        {dir: 'west', id: '11-univ'},
      ]
    },
    {
      id: '10-broa',
      coord: [],
      name: 'E. 10th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '11-broa'},
        {dir: 'south', id: '9-broa'},
        {dir: 'east', id: '10-4'},
        {dir: 'west', id: '10-univ'},
      ]
    },
    {
      id: '9-broa',
      coord: [],
      name: 'E. 9th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '10-broa'},
        {dir: 'south', id: '8-broa'},
        {dir: 'east', id: 'wana-lafa'},
        {dir: 'west', id: '9-univ'},
      ]
    },
    {
      id: '8-broa',
      coord: [],
      name: 'E. 8th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '9-broa'},
        {dir: 'south', id: 'asto-broa'},
        {dir: 'east', id: 'stma-lafa'},
        {dir: 'west', id: '8-merc'},
      ]
    },
    {
      id: 'asto-broa',
      coord: [],
      name: 'Astor Pl. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '8-broa'},
        {dir: 'south', id: 'wave-broa'},
        {dir: 'east', id: 'asto-lafa'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'wave-broa',
      coord: [],
      name: 'Waverly Pl. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'asto-broa'},
        {dir: 'south', id: 'wash-broa'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'wave-merc'},
      ]
    },
    {
      id: 'wash-broa',
      coord: [],
      name: 'Washington Pl. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wave-broa'},
        {dir: 'south', id: '4-broa'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'wash-merc'},
      ]
    },
    {
      id: '4-broa',
      coord: [],
      name: 'W. 4th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wash-broa'},
        {dir: 'south', id: '3-broa'},
        {dir: 'east', id: '4-lafa'},
        {dir: 'west', id: '4-merc'},
      ]
    },
    {
      id: '3-broa',
      coord: [],
      name: 'W. 3rd St. and Broadway',
      desc: 'There is a luncheonette on the corner.',
      isStreet: true,
      exits: [
        {dir: 'north', id: '4-broa'},
        {dir: 'south', id: 'bond-broa'},
        {dir: 'east', id: 'grea-lafa'},
        {dir: 'west', id: '3-merc'},
      ]
    },
    {
      id: 'bond-broa',
      coord: [],
      name: 'Bond St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '3-broa'},
        {dir: 'south', id: 'blee-broa'},
        {dir: 'east', id: 'bond-lafa'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'blee-broa',
      coord: [],
      name: 'Bleecker St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'bond-broa'},
        {dir: 'south', id: 'hous-broa'},
        {dir: 'east', id: 'blee-cros'},
        {dir: 'west', id: 'blee-merc'},
      ]
    },
    {
      id: 'blee-cros',
      coord: [],
      name: 'Bleecker St. and Crosby St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'hous-cros'},
        {dir: 'east', id: 'blee-lafa'},
        {dir: 'west', id: 'blee-broa'},
      ]
    },
    {
      id: 'wana-lafa',
      coord: [],
      name: 'Wannamaker Pl. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'stma-lafa'},
        {dir: 'east', id: 'wana-4'},
        {dir: 'west', id: '9-broa'},
      ]
    },
    {
      id: 'stma-lafa',
      coord: [],
      name: 'Saint Marks Pl. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wana-lafa'},
        {dir: 'south', id: 'asto-lafa'},
        {dir: 'east', id: 'stma-4'},
        {dir: 'west', id: '8-broa'},
      ]
    },
    {
      id: 'asto-lafa',
      coord: [],
      name: 'Astor Pl. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stma-lafa'},
        {dir: 'south', id: '4-lafa'},
        {dir: 'east', id: 'asto-4'},
        {dir: 'west', id: 'asto-broa'},
      ]
    },
    {
      id: '4-lafa',
      coord: [],
      name: 'E. 4th St. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'asto-lafa'},
        {dir: 'south', id: 'grea-lafa'},
        {dir: 'east', id: '4-bowe'},
        {dir: 'west', id: '4-broa'},
      ]
    },
    {
      id: 'grea-lafa',
      coord: [],
      name: 'Great Jones St. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '4-lafa'},
        {dir: 'south', id: 'bond-lafa'},
        {dir: 'east', id: 'grea-bowe'},
        {dir: 'west', id: '3-broa'},
      ]
    },
    {
      id: 'bond-lafa',
      coord: [],
      name: 'Bond St. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'grea-lafa'},
        {dir: 'south', id: 'blee-lafa'},
        {dir: 'east', id: 'bond-bowe'},
        {dir: 'west', id: 'bond-broa'},
      ]
    },
    {
      id: 'blee-lafa',
      coord: [],
      name: 'Bleecker St. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'bond-lafa'},
        {dir: 'south', id: 'lafa-mulb'},
        {dir: 'east', id: 'blee-mott'},
        {dir: 'west', id: 'blee-cros'},
      ]
    },
    {
      id: 'lafa-mulb',
      coord: [],
      name: 'Lafayette St. and Mulberry St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'blee-lafa'},
        {dir: 'south', id: 'hous-lafa'},
        {dir: 'east', id: 'hous-mulb'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'blee-mott',
      coord: [],
      name: 'Bleecker St. and Mott St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'hous-mott'},
        {dir: 'east', id: 'blee-eliz'},
        {dir: 'west', id: 'blee-lafa'},
      ]
    },
    {
      id: 'blee-eliz',
      coord: [],
      name: 'Bleecker St. and Elizabeth St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'hous-eliz'},
        {dir: 'east', id: 'blee-bowe'},
        {dir: 'west', id: 'blee-mott'},
      ]
    },
    {
      id: '14-unio',
      coord: [],
      name: 'E. 14th At. and Union Square E.', 
      desc: '',
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '4-unio'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '14-4'},
        {dir: 'west', id: '14-broa'},
      ]
    },
    {
      id: '14-4',
      coord: [],
      name: 'E. 14th St. and 4th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '4-unio'},
        {dir: 'south', id: '13-4'},
        {dir: 'east', id: '14-irvi'},
        {dir: 'west', id: '14-broa'},
      ]
    },
    {
      id: '13-4',
      coord: [],
      name: 'E. 13th St. and 4th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '14-4'},
        {dir: 'south', id: '12-4'},
        {dir: 'east', id: '13-3'},
        {dir: 'west', id: '13-broa'},
      ]
    },
    {
      id: '12-4',
      coord: [],
      name: 'E. 12th St. and 4th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '13-4'},
        {dir: 'south', id: '11-4'},
        {dir: 'east', id: '12-3'},
        {dir: 'west', id: '12-broa'},
      ]
    },
    {
      id: '11-4',
      coord: [],
      name: 'E. 11th St. and 4th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '12-4'},
        {dir: 'south', id: '10-4'},
        {dir: 'east', id: '11-3'},
        {dir: 'west', id: '11-broa'},
      ]
    },
    {
      id: '10-4',
      coord: [],
      name: 'E. 10th St. and 4th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '11-4'},
        {dir: 'south', id: 'wana-4'},
        {dir: 'east', id: '10-3'},
        {dir: 'west', id: '10-broa'},
      ]
    },
    {
      id: 'wana-4',
      coord: [],
      name: 'Wanamaker Pl. and 4th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '10-4'},
        {dir: 'south', id: 'stma-4'},
        {dir: 'east', id: 'wana-3'},
        {dir: 'west', id: 'wana-lafa'},
      ]
    },
    {
      id: 'stma-4',
      coord: [],
      name: 'Saint Marks Pl. and 4th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wana-4'},
        {dir: 'south', id: 'asto-4'},
        {dir: 'east', id: 'asto-stma'},
        {dir: 'west', id: 'stma-lafa'},
      ]
    },
    {
      id: 'asto-4',
      coord: [],
      name: 'Astor Pl. and 4th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stma-4'},
        {dir: 'south', id: '4-3'},
        {dir: 'east', id: 'asto-stma'},
        {dir: 'west', id: 'asto-lafa'},
      ]
    },
    {
      id: '14-irvi',
      coord: [],
      name: 'E. 14th St. and Irving Pl.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '15-irvi'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '14-3'},
        {dir: 'west', id: '14-4'},
      ]
    },
    {
      id: 'asto-stma',
      coord: [],
      name: 'Astor Pl. and Saint Marks Pl.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'asto-4'},
        {dir: 'east', id: 'stma-3'},
        {dir: 'west', id: 'stma-4'},
      ]
    },
    {
      id: '14-3',
      coord: [],
      name: 'E. 14th St. and 3rd Ave.',
      desc: '',
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '15-3'},
        {dir: 'south', id: '13-3'},
        {dir: 'east', id: '14-2'},
        {dir: 'west', id: '14-irvi'},
      ]
    },
    {
      id: '13-3',
      coord: [],
      name: 'E. 13th St. and 3rd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '14-3'},
        {dir: 'south', id: '12-3'},
        {dir: 'east', id: '13-3'},
        {dir: 'west', id: '13-4'},
      ]
    },
    {
      id: '12-3',
      coord: [],
      name: 'E. 12th St. and 3rd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '13-3'},
        {dir: 'south', id: '11-3'},
        {dir: 'east', id: '12-2'},
        {dir: 'west', id: '12-4'},
      ]
    },
    {
      id: '11-3',
      coord: [],
      name: 'E. 11th St. and 3rd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '12-3'},
        {dir: 'south', id: '10-3'},
        {dir: 'east', id: '11-2'},
        {dir: 'west', id: '11-4'},
      ]
    },
    {
      id: '10-3',
      coord: [],
      name: 'E. 10th St. and 3rd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '11-3'},
        {dir: 'south', id: 'wana-3'},
        {dir: 'east', id: 'stuy-10'},
        {dir: 'west', id: '10-4'},
      ]
    },
    {
      id: 'wana-3',
      coord: [],
      name: 'Wanamaker Pl. and 3rd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '10-3'},
        {dir: 'south', id: 'stuy-3'},
        {dir: 'east', id: 'stuy-wana'},
        {dir: 'west', id: 'wana-4'},
      ]
    },
    {
      id: 'stuy-3',
      coord: [],
      name: 'Stuyvesant St. and 3rd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wana-3'},
        {dir: 'south', id: 'stma-3'},
        {dir: 'east', id: 'stuy-wana'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'stma-3',
      coord: [],
      name: 'Saint Marks Pl. and 3rd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stuy-3'},
        {dir: 'south', id: '7-3'},
        {dir: 'east', id: 'stma-2'},
        {dir: 'west', id: 'asto-stma'},
      ]
    },
    {
      id: '7-3',
      coord: [],
      name: 'E. 7th St. and 3rd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stma-3'},
        {dir: 'south', id: '6-3'},
        {dir: 'east', id: '7-2'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '6-3',
      coord: [],
      name: 'E. 6th St. and 3rd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '7-3'},
        {dir: 'south', id: '5-3'},
        {dir: 'east', id: '6-2'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '5-3',
      coord: [],
      name: 'E. 5th St. and 3rd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '6-3'},
        {dir: 'south', id: '4-3'},
        {dir: 'east', id: '5-2'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '4-3',
      coord: [],
      name: '4th Ave. and 3rd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '5-3'},
        {dir: 'south', id: '4-bowe'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'asto-4'},
      ]
    },
    {
      id: '4-bowe',
      coord: [],
      name: 'E. 4th St. and Bowery St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '4-3'},
        {dir: 'south', id: 'grea-bowe'},
        {dir: 'east', id: '4-2'},
        {dir: 'west', id: '4-lafa'},
      ]
    },
    {
      id: 'grea-bowe',
      coord: [],
      name: 'Great Jones St. and Bowery St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '4-bowe'},
        {dir: 'south', id: 'bond-bowe'},
        {dir: 'east', id: '3-2'},
        {dir: 'west', id: 'grea-lafa'},
      ]
    },
    {
      id: 'bond-bowe',
      coord: [],
      name: 'Bond St. and Bowery St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'grea-bowe'},
        {dir: 'south', id: 'blee-bowe'},
        {dir: 'east', id: '2-2'},
        {dir: 'west', id: 'bond-lafa'},
      ]
    },
    {
      id: 'blee-bowe',
      coord: [],
      name: 'Bleecker St. and Bowery St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'bond-bowe'},
        {dir: 'south', id: '1-bowe'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'blee-eliz'},
      ]
    },
    {
      id: '1-bowe',
      coord: [],
      name: 'E. 1st St. and Bowery St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'blee-bowe'},
        {dir: 'south', id: 'hous-bowe'},
        {dir: 'east', id: '1-2'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '14-2',
      coord: [],
      name: 'E. 14th St. and 2nd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '15-2'},
        {dir: 'south', id: '13-2'},
        {dir: 'east', id: '14-1'},
        {dir: 'west', id: '14-3'},
      ]
    },
    {
      id: '13-2',
      coord: [],
      name: 'E. 13th St. and 2nd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '14-2'},
        {dir: 'south', id: '12-2'},
        {dir: 'east', id: '13-1'},
        {dir: 'west', id: '13-3'},
      ]
    },
    {
      id: '12-2',
      coord: [],
      name: 'E. 12th St. and 2nd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '13-2'},
        {dir: 'south', id: '11-2'},
        {dir: 'east', id: '12-1'},
        {dir: 'west', id: '12-3'},
      ]
    },
    {
      id: '11-2',
      coord: [],
      name: 'E. 11th St. and 2nd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '12-2'},
        {dir: 'south', id: 'stuy-2'},
        {dir: 'east', id: '11-1'},
        {dir: 'west', id: '11-3'},
      ]
    },
    {
      id: 'stuy-2',
      coord: [],
      name: 'Stuyvesant St. and 2nd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '11-2'},
        {dir: 'south', id: '10-2'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'stuy-10'},
      ]
    },
    {
      id: 'stuy-10',
      coord: [],
      name: 'Stuyvesant St. and E. 10th St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stuy-2'},
        {dir: 'south', id: 'stuy-wana'},
        {dir: 'east', id: '10-2'},
        {dir: 'west', id: '10-3'},
      ]
    },
    {
      id: 'stuy-wana',
      coord: [],
      name: 'Stuyvesant St. and Wanamaker Pl.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stuy-10'},
        {dir: 'south', id: 'stuy-3'},
        {dir: 'east', id: 'wana-2'},
        {dir: 'west', id: 'wana-3'},
      ]
    },
    {
      id: '10-2',
      coord: [],
      name: 'E. 10th St. and 2nd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stuy-2'},
        {dir: 'south', id: 'wana-2'},
        {dir: 'east', id: '10-1'},
        {dir: 'west', id: 'stuy-10'},
      ]
    },
    {
      id: 'wana-2',
      coord: [],
      name: 'Wanamaker Pl. and 2nd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '10-2'},
        {dir: 'south', id: 'stma-2'},
        {dir: 'east', id: 'wana-1'},
        {dir: 'west', id: 'stuy-wana'},
      ]
    },
    {
      id: 'stma-2',
      coord: [],
      name: 'Saint Marks Pl. and 2nd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wana-1'},
        {dir: 'south', id: '7-2'},
        {dir: 'east', id: 'stma-1'},
        {dir: 'west', id: 'stma-3'},
      ]
    },
    {
      id: '7-2',
      coord: [],
      name: 'E. 7th St. and 2nd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stma-2'},
        {dir: 'south', id: '6-2'},
        {dir: 'east', id: '7-1'},
        {dir: 'west', id: '7-3'},
      ]
    },
    {
      id: '6-2',
      coord: [],
      name: 'E. 6th St. and 2nd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '7-2'},
        {dir: 'south', id: '5-2'},
        {dir: 'east', id: '6-1'},
        {dir: 'west', id: '6-3'},
      ]
    },
    {
      id: '5-2',
      coord: [],
      name: 'E. 5th St. and 2nd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '6-2'},
        {dir: 'south', id: '4-2'},
        {dir: 'east', id: '5-1'},
        {dir: 'west', id: '5-3'},
      ]
    },
    {
      id: '4-2',
      coord: [],
      name: 'E. 4th St. and 2nd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '5-2'},
        {dir: 'south', id: '3-2'},
        {dir: 'east', id: '4-1'},
        {dir: 'west', id: '4-bowe'},
      ]
    },
    {
      id: '3-2',
      coord: [],
      name: 'E. 3rd St. and 2nd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '4-2'},
        {dir: 'south', id: '2-2'},
        {dir: 'east', id: '3-1'},
        {dir: 'west', id: 'grea-bowe'},
      ]
    },
    {
      id: '2-2',
      coord: [],
      name: 'E. 2nd St. and 2nd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '3-2'},
        {dir: 'south', id: '1-2'},
        {dir: 'east', id: '2-1'},
        {dir: 'west', id: 'bond-bowe'},
      ]
    },
    {
      id: '1-2',
      coord: [],
      name: 'E. 1st St. and 2nd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '2-2'},
        {dir: 'south', id: 'hous-chry'},
        {dir: 'east', id: '1-1'},
        {dir: 'west', id: '1-bowe'},
      ]
    },
    {
      id: '14-1',
      coord: [],
      name: 'E. 14th St. and 1st Ave.',
      desc: '',
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '15-1'},
        {dir: 'south', id: '13-1'},
        {dir: 'east', id: '14-avea'},
        {dir: 'west', id: '14-2'},
      ]
    },
    {
      id: '13-1',
      coord: [],
      name: 'E. 13th St. and 1st Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '14-1'},
        {dir: 'south', id: '12-1'},
        {dir: 'east', id: '13-avea'},
        {dir: 'west', id: '13-2'},
      ]
    },
    {
      id: '12-1',
      coord: [],
      name: 'E. 12th St. and 1st Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '13-1'},
        {dir: 'south', id: '11-1'},
        {dir: 'east', id: '12-avea'},
        {dir: 'west', id: '12-2'},
      ]
    },
    {
      id: '11-1',
      coord: [],
      name: 'E. 11th St. and 1st Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '12-1'},
        {dir: 'south', id: '10-1'},
        {dir: 'east', id: '11-avea'},
        {dir: 'west', id: '11-2'},
      ]
    },
    {
      id: '10-1',
      coord: [],
      name: 'E. 10th St. and 1st Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '11-1'},
        {dir: 'south', id: 'wana-1'},
        {dir: 'east', id: '10-avea'},
        {dir: 'west', id: '10-2'},
      ]
    },
    {
      id: 'wana-1',
      coord: [],
      name: 'Wanamaker Pl. and 1st Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '10-1'},
        {dir: 'south', id: 'stma-1'},
        {dir: 'east', id: 'stma-avea'},
        {dir: 'west', id: 'stma-2'},
      ]
    },
    {
      id: 'stma-1',
      coord: [],
      name: 'Saint Marks Pl. and 1st Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wana-1'},
        {dir: 'south', id: '7-1'},
        {dir: 'east', id: 'stma-avea'},
        {dir: 'west', id: 'stma-2'},
      ]
    },
    {
      id: '7-1',
      coord: [],
      name: 'E. 7th St. and 1st Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stma-1'},
        {dir: 'south', id: '6-1'},
        {dir: 'east', id: '7-avea'},
        {dir: 'west', id: '7-2'},
      ]
    },
    {
      id: '6-1',
      coord: [],
      name: 'E. 6th St. and 1st Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '7-1'},
        {dir: 'south', id: '5-1'},
        {dir: 'east', id: '6-avea'},
        {dir: 'west', id: '6-2'},
      ]
    },
    {
      id: '5-1',
      coord: [],
      name: 'E. 5th St. and 1st Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '6-1'},
        {dir: 'south', id: '4-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '5-2'},
      ]
    },
    {
      id: '4-1',
      coord: [],
      name: 'E. 4th St. and 1st Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '5-1'},
        {dir: 'south', id: '3-1'},
        {dir: 'east', id: '4-avea'},
        {dir: 'west', id: '4-2'},
      ]
    },
    {
      id: '3-1',
      coord: [],
      name: 'E. 3rd St. and 1st Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '4-1'},
        {dir: 'south', id: '2-1'},
        {dir: 'east', id: '3-avea'},
        {dir: 'west', id: '3-2'},
      ]
    },
    {
      id: '2-1',
      coord: [],
      name: 'E. 2nd St. and 1st Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '3-1'},
        {dir: 'south', id: '1-1'},
        {dir: 'east', id: '2-avea'},
        {dir: 'west', id: '2-2'},
      ]
    },
    {
      id: '1-1',
      coord: [],
      name: 'E. 1st St. and 1st Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '2-1'},
        {dir: 'south', id: 'hous-alle'},
        {dir: 'east', id: 'hous-1'},
        {dir: 'west', id: '1-2'},
      ]
    },
    {
      id: 'hous-1',
      coord: [],
      name: 'E. Houston St. and 1st St.',
      desc: `On the corner amid the debris of a street-widening project stands a small cube of a building dressed up as a Greek temple. Across the frieze is carved THE PROVIDENT LOAN SOCIETY. Provident? Make that 'Defunct.'`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '1-1'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'hous-ludl'},
        {dir: 'west', id: 'hous-orch'},
      ]
    },
    {
      id: 'hous-orch',
      coord: [],
      name: 'E. Houston St. and Orchard St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'stan-orch'},
        {dir: 'east', id: 'hous-1'},
        {dir: 'west', id: 'hous-alle'},
      ]
    },
    {
      id: 'hous-ludl',
      coord: [],
      name: 'E. Houston St. and Orchard St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'stan-ludl'},
        {dir: 'east', id: 'hous-esse'},
        {dir: 'west', id: 'hous-1'},
      ]
    },
    {
      id: '14-avea',
      coord: [],
      name: 'E. 14th St. and Ave. A',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '14-aveb'},
        {dir: 'south', id: '13-avea'},
        {dir: 'east', id: '14-aveb'},
        {dir: 'west', id: '14-1'},
      ]
    },
    {
      id: '13-avea',
      coord: [],
      name: 'E. 13th St. and Ave. A',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '14-avea'},
        {dir: 'south', id: '12-avea'},
        {dir: 'east', id: '13-aveb'},
        {dir: 'west', id: '13-1'},
      ]
    },
    {
      id: '12-avea',
      coord: [],
      name: 'E. 12th St. and Ave. A',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '13-avea'},
        {dir: 'south', id: '11-avea'},
        {dir: 'east', id: '12-aveb'},
        {dir: 'west', id: '12-1'},
      ]
    },
    {
      id: '11-avea',
      coord: [],
      name: 'E. 11th St. and Ave. A',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '12-avea'},
        {dir: 'south', id: '10-avea'},
        {dir: 'east', id: '11-aveb'},
        {dir: 'west', id: '11-1'},
      ]
    },
    {
      id: '10-avea',
      coord: [],
      name: 'E. 10th St. and Ave. A',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '11-avea'},
        {dir: 'south', id: 'wana-avea'},
        {dir: 'east', id: '10-aveb'},
        {dir: 'west', id: '10-1'},
      ]
    },
    {
      id: 'wana-avea',
      coord: [],
      name: 'Wanamaker Pl. and Ave. A',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '10-avea'},
        {dir: 'south', id: 'stma-avea'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'wana-1'},
      ]
    },
    {
      id: 'stma-avea',
      coord: [],
      name: 'Saint Marks Pl. and Ave. A',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wana-avea'},
        {dir: 'south', id: '7-avea'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'stma-1'},
      ]
    },
    {
      id: '7-avea',
      coord: [],
      name: 'E. 7th St. and Ave. A',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stma-avea'},
        {dir: 'south', id: '6-avea'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '7-1'},
      ]
    },
    {
      id: '6-avea',
      coord: [],
      name: 'E. 6th St. and Ave. A',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '7-avea'},
        {dir: 'south', id: '5-avea'},
        {dir: 'east', id: '6-aveb'},
        {dir: 'west', id: '6-1'},
      ]
    },
    {
      id: '5-avea',
      coord: [],
      name: 'E. 5th St. and Ave. A',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '6-avea'},
        {dir: 'south', id: '4-avea'},
        {dir: 'east', id: '5-aveb'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '4-avea',
      coord: [],
      name: 'E. 4th St. and Ave. A',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '5-avea'},
        {dir: 'south', id: '3-avea'},
        {dir: 'east', id: '4-aveb'},
        {dir: 'west', id: '4-1'},
      ]
    },
    {
      id: '3-avea',
      coord: [],
      name: 'E. 3rd St. and Ave. A',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '4-avea'},
        {dir: 'south', id: '2-avea'},
        {dir: 'east', id: '3-aveb'},
        {dir: 'west', id: '3-1'},
      ]
    },
    {
      id: '2-avea',
      coord: [],
      name: 'E. 2nd St. and Ave. A',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '3-avea'},
        {dir: 'south', id: 'hous-esse'},
        {dir: 'east', id: '2-aveb'},
        {dir: 'west', id: '2-1'},
      ]
    },
    {
      id: 'hous-esse',
      coord: [],
      name: 'E. Houston St. and Essex St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '2-avea'},
        {dir: 'south', id: 'stan-esse'},
        {dir: 'east', id: 'hous-norf'},
        {dir: 'west', id: 'hous-ludl'},
      ]
    },
    {
      id: 'hous-norf',
      coord: [],
      name: 'E. Houston St. and Norfolk St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'stan-norf'},
        {dir: 'east', id: 'hous-suff'},
        {dir: 'west', id: 'hous-esse'},
      ]
    },
    {
      id: 'hous-suff',
      coord: [],
      name: 'E. Houston St. and Suffolk St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'stan-suff'},
        {dir: 'east', id: 'hous-clin'},
        {dir: 'west', id: 'hous-norf'},
      ]
    },
    {
      id: '14-aveb',
      coord: [],
      name: 'E. 14th St. and Ave. B',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '14-avea'},
        {dir: 'south', id: '13-aveb'},
        {dir: 'east', id: '14-avec'},
        {dir: 'west', id: '14-avea'},
      ]
    },
    {
      id: '13-aveb',
      coord: [],
      name: 'E. 13th St. and Ave. B',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '14-aveb'},
        {dir: 'south', id: '12-aveb'},
        {dir: 'east', id: '13-avec'},
        {dir: 'west', id: '13-avea'},
      ]
    },
    {
      id: '12-aveb',
      coord: [],
      name: 'E. 12th St. and Ave. B',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '13-aveb'},
        {dir: 'south', id: '11-aveb'},
        {dir: 'east', id: '12-avec'},
        {dir: 'west', id: '12-avea'},
      ]
    },
    {
      id: '11-aveb',
      coord: [],
      name: 'E. 11th St. and Ave. B',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '12-aveb'},
        {dir: 'south', id: '10-aveb'},
        {dir: 'east', id: '12-avec'},
        {dir: 'west', id: '12-avea'},
      ]
    },
    {
      id: '10-aveb',
      coord: [],
      name: 'E. 10th St. and Ave. B',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '11-aveb'},
        {dir: 'south', id: 'wana-aveb'},
        {dir: 'east', id: '10-avec'},
        {dir: 'west', id: '10-avea'},
      ]
    },
    {
      id: 'wana-aveb',
      coord: [],
      name: 'Wanamaker St. and Ave. B',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '10-aveb'},
        {dir: 'south', id: '8-aveb'},
        {dir: 'east', id: 'wana-avec'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '8-aveb',
      coord: [],
      name: 'E. 8th St. and Ave. B',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wana-aveb'},
        {dir: 'south', id: '7-aveb'},
        {dir: 'east', id: '8-avec'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '7-aveb',
      coord: [],
      name: 'E. 7th St. and Ave. B',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '8-aveb'},
        {dir: 'south', id: '6-aveb'},
        {dir: 'east', id: '7-avec'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '6-aveb',
      coord: [],
      name: 'E. 6th St. and Ave. B',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '7-aveb'},
        {dir: 'south', id: '5-aveb'},
        {dir: 'east', id: '6-avec'},
        {dir: 'west', id: '6-avea'},
      ]
    },
    {
      id: '5-aveb',
      coord: [],
      name: 'E. 5th St. and Ave. B',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '6-aveb'},
        {dir: 'south', id: '4-aveb'},
        {dir: 'east', id: '5-avec'},
        {dir: 'west', id: '5-avea'},
      ]
    },
    {
      id: '4-aveb',
      coord: [],
      name: 'E. 4th St. and Ave. B',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '5-aveb'},
        {dir: 'south', id: '3-aveb'},
        {dir: 'east', id: '4-avec'},
        {dir: 'west', id: '4-avea'},
      ]
    },
    {
      id: '3-aveb',
      coord: [],
      name: 'E. 3rd St. and Ave. B',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '4-aveb'},
        {dir: 'south', id: '2-aveb'},
        {dir: 'east', id: '3-avec'},
        {dir: 'west', id: '3-avea'},
      ]
    },
    {
      id: '2-aveb',
      coord: [],
      name: 'E. 2nd St. and Ave. B',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '3-aveb'},
        {dir: 'south', id: 'hous-clin'},
        {dir: 'east', id: 'hous-2'},
        {dir: 'west', id: 'hous-suff'},
      ]
    },
    {
      id: 'hous-clin',
      coord: [],
      name: 'E. Houston St. and Clinton St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '2-aveb'},
        {dir: 'south', id: 'stan-clin'},
        {dir: 'east', id: 'hous-atto'},
        {dir: 'west', id: 'hous-suff'},
      ]
    },
    {
      id: 'hous-atto',
      coord: [],
      name: 'E. Houston St. and Attorney St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'stan-atto'},
        {dir: 'east', id: 'hous-ridg'},
        {dir: 'west', id: 'hous-clin'},
      ]
    },
    {
      id: 'hous-ridg',
      coord: [],
      name: 'E. Houston St. and Ridge St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'stan-ridg'},
        {dir: 'east', id: 'hous-2'},
        {dir: 'west', id: 'hous-atto'},
      ]
    },
    {
      id: 'hous-2',
      coord: [],
      name: 'E. Houston St. and E. 2nd St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '2-aveb'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'hous-pitt'},
        {dir: 'west', id: 'hous-ridg'},
      ]
    },
    {
      id: '14-avec',
      coord: [],
      name: 'E. 14th and Ave. C',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '15-avec'},
        {dir: 'south', id: '13-avec'},
        {dir: 'east', id: '14-aved'},
        {dir: 'west', id: '14-aveb'},
      ]
    },
    {
      id: '13-avec',
      coord: [],
      name: 'E. 13th and Ave. C',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '14-avec'},
        {dir: 'south', id: '12-avec'},
        {dir: 'east', id: '13-aved'},
        {dir: 'west', id: '13-aveb'},
      ]
    },
    {
      id: '12-avec',
      coord: [],
      name: 'E. 12th and Ave. C',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '13-avec'},
        {dir: 'south', id: '11-avec'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '12-aveb'},
      ]
    },
    {
      id: '11-avec',
      coord: [],
      name: 'E. 11th and Ave. C',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '12-avec'},
        {dir: 'south', id: '10-avec'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '11-aveb'},
      ]
    },
    {
      id: '10-avec',
      coord: [],
      name: 'E. 10th and Ave. C',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '11-avec'},
        {dir: 'south', id: 'wana-avec'},
        {dir: 'east', id: '10-szol'},
        {dir: 'west', id: '10-aveb'},
      ]
    },
    {
      id: 'wana-avec',
      coord: [],
      name: 'Wanamaker St. and Ave. C',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '10-avec'},
        {dir: 'south', id: '8-avec'},
        {dir: 'east', id: 'wana-aved'},
        {dir: 'west', id: 'wana-aveb'},
      ]
    },
    {
      id: '8-avec',
      coord: [],
      name: 'E. 8th St. and Ave. C',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wana-avec'},
        {dir: 'south', id: '7-avec'},
        {dir: 'east', id: '8-aved'},
        {dir: 'west', id: '8-aveb'},
      ]
    },
    {
      id: '7-avec',
      coord: [],
      name: 'E. 7th St. and Ave. C',
      desc: 'There is a pizzeria here.',
      isStreet: true,
      exits: [
        {dir: 'north', id: '8-avec'},
        {dir: 'south', id: '6-avec'},
        {dir: 'east', id: '7-aved'},
        {dir: 'west', id: '7-aveb'},
      ]
    },
    {
      id: '6-avec',
      coord: [],
      name: 'E. 6th St. and Ave. C',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '7-avec'},
        {dir: 'south', id: '5-avec'},
        {dir: 'east', id: '6-aved'},
        {dir: 'west', id: '6-aveb'},
      ]
    },
    {
      id: '5-avec',
      coord: [],
      name: 'E. 5th St. and Ave. C',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '6-avec'},
        {dir: 'south', id: '4-avec'},
        {dir: 'east', id: '5-aved'},
        {dir: 'west', id: '5-aveb'},
      ]
    },
    {
      id: '4-avec',
      coord: [],
      name: 'E. 4th St. and Ave. C',
      desc: 'There is a Greek Gyro located here.',
      isStreet: true,
      exits: [
        {dir: 'north', id: '5-avec'},
        {dir: 'south', id: '3-avec'},
        {dir: 'east', id: '4-aved'},
        {dir: 'west', id: '4-aveb'},
      ]
    },
    {
      id: '3-avec',
      coord: [],
      name: 'E. 3rd St. and Ave. C',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '4-avec'},
        {dir: 'south', id: 'hous-pitt'},
        {dir: 'east', id: '3-aved'},
        {dir: 'west', id: '3-aveb'},
      ]
    },
    {
      id: 'hous-pitt',
      coord: [],
      name: 'E. Houston St. and Pitt St.',
      desc: '',
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '3-avec'},
        {dir: 'south', id: 'stan-pitt'},
        {dir: 'east', id: 'hous-colu'},
        {dir: 'west', id: 'hous-2'},
      ]
    },
    {
      id: '14-aved',
      coord: [],
      name: 'E. 14th St. and Ave. D',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '13-aved'},
        {dir: 'east', id: '14-fdrd'},
        {dir: 'west', id: '14-avec'},
      ]
    },
    {
      id: '13-aved',
      coord: [],
      name: 'E. 13th St. and Ave. D',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '14-aved'},
        {dir: 'south', id: 'szol-aved'},
        {dir: 'east', id: '13-fdrd'},
        {dir: 'west', id: '13-avec'},
      ]
    },
    {
      id: 'szol-aved',
      coord: [],
      name: 'Szold Pl. and Ave. D',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '13-aved'},
        {dir: 'south', id: '10-aved'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '10-szol'},
      ]
    },
    {
      id: '10-szol',
      coord: [],
      name: 'E. 10th St. and Szold Pl.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'szol-aved'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '10-aved'},
        {dir: 'west', id: '10-avec'},
      ]
    },
    {
      id: 'wana-aved',
      coord: [],
      name: 'Wanamaker Pl. and Ave. D',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '10-aved'},
        {dir: 'south', id: '8-aved'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'wana-avec'},
      ]
    },
    {
      id: '8-aved',
      coord: [],
      name: 'E. 8th St. and Ave. D',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wana-aved'},
        {dir: 'south', id: '7-aved'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '8-avec'},
      ]
    },
    {
      id: '7-aved',
      coord: [],
      name: 'E. 7th St. and Ave. D',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '8-aved'},
        {dir: 'south', id: '6-aved'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '7-avec'},
      ]
    },
    {
      id: '6-aved',
      coord: [],
      name: 'E. 6th St. and Ave. D',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '7-aved'},
        {dir: 'south', id: '5-aved'},
        {dir: 'east', id: '6-fdrd'},
        {dir: 'west', id: '6-avec'},
      ]
    },
    {
      id: '5-aved',
      coord: [],
      name: 'E. 5th St. and Ave. D',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '6-aved'},
        {dir: 'south', id: '4-aved'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '5-avec'},
      ]
    },
    {
      id: '4-aved',
      coord: [],
      name: 'E. 4th St. and Ave. D',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '5-aved'},
        {dir: 'south', id: '3-aved'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '4-avec'},
      ]
    },
    {
      id: '3-aved',
      coord: [],
      name: 'E. 3rd St. and Ave. D',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '4-aved'},
        {dir: 'south', id: 'hous-colu'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '3-avec'},
      ]
    },
    {
      id: 'hous-colu',
      coord: [],
      name: 'E. Houston St. and Columbia',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '3-aved'},
        {dir: 'south', id: 'colu-rivi'},
        {dir: 'east', id: 'hous-baru'},
        {dir: 'west', id: 'hous-pitt'},
      ]
    },
    {
      id: 'hous-baru',
      coord: [],
      name: 'E. Houston St. and Baruch Pl.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'new-baru'},
        {dir: 'east', id: 'hous-mang'},
        {dir: 'west', id: 'hous-colu'},
      ]
    },
    {
      id: 'hous-mang',
      coord: [],
      name: 'E. Houston St. and Mangin St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'new-mang'},
        {dir: 'east', id: 'hous-fdrd'},
        {dir: 'west', id: 'hous-baru'},
      ]
    },
    {
      id: '15-avec',
      coord: [],
      name: 'E. 15th St. and Ave. C',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '16-avec'},
        {dir: 'south', id: '14-avec'},
        {dir: 'east', id: '15-fdrd'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '16-avec',
      coord: [],
      name: 'E. 16th St. and Ave. C',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'avec-fdrd'},
        {dir: 'south', id: '15-aved'},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: 'avec-fdrd',
      coord: [],
      name: 'E. 16th St. and Ave. C',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '16-avec'},
        {dir: 'east', id: '15-fdrd'},
        {dir: 'west', id: '20-fdrd'},
      ]
    },
    {
      id: '15-fdrd',
      coord: [],
      name: 'E. 15th St. and FDR Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'avec-fdrd'},
        {dir: 'south', id: '14-fdrd'},
        {dir: 'east', id: '15-erdr'},
        {dir: 'west', id: '15-aved'},
      ]
    },
    {
      id: '14-fdrd',
      coord: [],
      name: 'E. 14th St and FDR Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '15-fdrd'},
        {dir: 'south', id: '13-fdrd'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '14-aved'},
      ]
    },
    {
      id: '13-fdrd',
      coord: [],
      name: 'E. 13th St. and FDR Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '14-fdrd'},
        {dir: 'south', id: '10-fdrd'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '13-aved'},
      ]
    },
    {
      id: '10-fdrd',
      coord: [],
      name: 'E. 10th St. and FDR Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '13-fdrd'},
        {dir: 'south', id: '6-fdrd'},
        {dir: 'east', id: '10-erdr'},
        {dir: 'west', id: '10-aved'},
      ]
    },
    {
      id: '6-fdrd',
      coord: [],
      name: 'E. 6th St. and FDR Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '10-fdrd'},
        {dir: 'south', id: 'hous-fdrd'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '6-aved'},
      ]
    },
    {
      id: 'hous-fdrd',
      coord: [],
      name: 'E. Houston and FDR Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '6-fdrd'},
        {dir: 'south', id: 'dela-fdrd'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'hous-mang'},
      ]
    },
    {
      id: '15-erdr',
      coord: [],
      name: 'E. 15th St. and East River Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '42-erdr'},
        {dir: 'south', id: '10-erdr'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '15-fdrd'},
      ]
    },
    {
      id: '10-erdr',
      coord: [],
      name: 'E. 10th St. and East River Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '15-erdr'},
        {dir: 'south', id: 'dela-erdr'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '10-fdrd'},
      ]
    },
      /*******************/
     /* Lower Manhattan */
    /*******************/
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
        {dir: 'west', id: 'rect-trin'},
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
      desc: `In the midst of all the Wall Street skyscrapers stands this lone noble survivor of another era. According to the plaque on the iron fence, St. Paul's Chapel is the only pre-Revolutionary War church still standing in Manhattan, and it was built when the city's population was less than 50,000.`,
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
      desc: `You've come to a small but well-tended park at the edge of the Wall Street area. At the uptown end of the park is a small palace of white marble. You join a crowd that's gathered on the steps to listen to Mayor Koch welcome a foreign dignitary to the city. He seems to look straight down at you in the crowd as he says, "I know you'll always remember your visit to New York!"
        
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
        {dir: 'east', id: 'wall-swil'},
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
      desc: `You stop to read the plaque fixed to the corner of the Federal Reserve Bank and are dully impressed by the information that five stories of this Renaissance palace are below street level "with subterranean vaults resting on bedrock." In other words, the dollar is solid.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'maid-nass'},
        {dir: 'south', id: 'ceda-nass'},
        {dir: 'east', id: 'libe-swil'},
        {dir: 'west', id: 'libe-libe'},
        {dir: 'federal reserve bank', id: 'libe-nass-1'}
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
        {dir: 'south', id: 'beek-nass'},
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
      desc: `The South Street Seaport is a tourist attraction that today at least has not attracted any tourists. The sailing boats docked along the river are equal in number to the people who've come to look at them, and the concession area is like a ghost town.`,
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
      desc: `With the side of the Federal Reserve Bank for a backdrop, the welded iron sculptures of Louise Nevelson Plaza made a desperate bid for the pedestrians' attention, but most of them walk past too abstracted themselves to notice all that Abstract Art is trying so hard to do.`,
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
      desc: `A Roman temple? No, the New York Stock Exchange, where all the wealth of the country turns into a sea of numbers, constatnly shifting and changing but always supporting the fleets of bankers and brokers who are its mariners.`,
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
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'maid-libe'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'libe-nass'},
        {dir: 'west', id: 'libe-broa'},
      ],
    },
    {
      id: 'libe-nass-1',
      coord: [],
      name: 'Federal Reserve Bank Lobby',
      desc: ``,
        onEnter: () => {
          println(`You walk through the smoked-glass doors, and enter a lobby decorated in stone. A security desk near the elevators makes you think twice about remaining.
          
          You turn away quickly and leave.`);
          pressEnter('libe-nass');
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
      desc: `Giant letters on the side of one of a pair of white skyscrapers informs you that this is Wall Street Plaza. Wedged between the skyscrapers is a hunk of minimalist art: a big round aluminum coinslot with a big mirror-surfaced slug forever waiting to be inserted-- and when it is all New York will know its weight and fortune.`,
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
      desc: `The stone towers of the Brooklyn Bridge come into view some blocks to the north. The sudden sight of them is like a blast of Beethoven-- familiar but still inspiring.`,
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
      desc: `A free-standing plaque outside Citibank informs you that this was once the most expensive building in the city. $1,800,000 was the record-setting pricetag. And that was before McKim Mead White added their own Corinthian two-cents-worth on top of the Ionic original of 1842. Very classic.`,
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
      desc: `There it is, or rather there they are-- the two towers of the World Trade Center. Aside from their size, there's nothing that special about it. They may have replaced the Empire State Building as the tallest in the city, but for glamor the Empire State Building is still the all-time champion.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'barc-chur'},
        {dir: 'south', id: 'fult-chur'},
        {dir: 'east', id: 'vese-broa'},
        {dir: 'west', id: 'vese-wbro'},
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
      desc: `Outside the cathedral-like entrance of this gothic-styled skyscraper, a tour-guide is explaining to a cluster of tourists that between 1913 and 1930 this building, the Wollworth Building, was teh tallest in the world. "Even today," he points out, "only three U.S. cities have buildings taller." 
        
        "And how tall is it?" on of the tourists asks him.
        
        "792 feet," he replies.`,
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
      id: 'amer-chur',
      coord: [],
      name: 'Ave of Americas and Church Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'whit-chur'},
        {dir: 'south', id: 'fran-chur'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'whit-amer'}
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
      id: 'whit-amer',
      coord: [],
      name: 'White St. and Ave of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'walk-amer'},
        {dir: 'south', id: 'ave-chur'},
        {dir: 'east', id: 'whit-chur'},
        {dir: 'west', id: 'whit-wbro'}
      ],
    },
    {
      id: 'walk-amer',
      coord: [],
      name: 'Walker St. and Ave of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'amer-wbro'},
        {dir: 'south', id: 'whit-amer'},
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
        {dir: 'north', id: 'cana-gree-1'},
        {dir: 'south', id: 'desb-gree'},
        {dir: 'east', id: 'watt-wash'},
        {dir: 'west', id: 'cana-watt'}
      ],
    },
    {
      id: 'cana-gree-1',
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
        {dir: 'south', id: 'cana-gree-1'},
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
        {dir: 'east', id: 'cana-gree-1'},
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
        {dir: 'west', id: 'cana-gree-1'}
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
        {dir: 'north', id: 'amer-wbro'},
        {dir: 'south', id: 'walk-wbro'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'eric-stjo'}
      ],
    },
    {
      id: 'amer-wbro',
      coord: [],
      name: 'Ave of Americas and W. Broadway',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'lisp-wbro'},
        {dir: 'south', id: 'walk-wbro'},
        {dir: 'east', id: 'walk-amer'},
        {dir: 'west', id: 'york-amer'}
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
      id: 'york-amer',
      coord: [],
      name: 'York St. and Ave of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'laig-amer'},
        {dir: 'south', id: 'amer-wbro'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'york-stjo'}
      ],
    },
    {
      id: 'laig-amer',
      coord: [],
      name: 'Laight St. and Ave of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-amer'},
        {dir: 'south', id: 'york-amer'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'laig-stjo'}
      ],
    },
    {
      id: 'cham-huds',
      coord: [],
      name: 'Chambers St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'read-huds'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'cham-wbro'},
        {dir: 'west', id: 'cham-gree'}
      ],
    },
    {
      id: 'read-huds',
      coord: [],
      name: 'Reade St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'duan-huds'},
        {dir: 'south', id: 'cham-huds'},
        {dir: 'east', id: 'read-wbro'},
        {dir: 'west', id: 'read-gree'}
      ],
    },
    {
      id: 'duan-huds',
      coord: [],
      name: 'Duane St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'thom-huds'},
        {dir: 'south', id: 'read-huds'},
        {dir: 'east', id: 'duan-wbro'},
        {dir: 'west', id: 'thom-duan'}
      ],
    },
    {
      id: 'thom-huds',
      coord: [],
      name: 'Thomas St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'jay-huds'},
        {dir: 'south', id: 'duan-huds'},
        {dir: 'east', id: 'thom-wbro'},
        {dir: 'west', id: 'thom-stap'}
      ],
    },
    {
      id: 'jay-huds',
      coord: [],
      name: 'Jay St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wort-huds'},
        {dir: 'south', id: 'thom-huds'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'jay-stap'}
      ],
    },
    {
      id: 'wort-huds',
      coord: [],
      name: 'Worth St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'harr-huds'},
        {dir: 'south', id: 'jay-huds'},
        {dir: 'east', id: 'wort-wbro'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: 'harr-huds',
      coord: [],
      name: 'Harrison St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'leon-huds'},
        {dir: 'south', id: 'wort-huds'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'harr-stap'}
      ],
    },
    {
      id: 'leon-huds',
      coord: [],
      name: 'Leonard St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'fran-huds'},
        {dir: 'south', id: 'harr-huds'},
        {dir: 'east', id: 'leon-wbro'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: 'fran-huds',
      coord: [],
      name: 'Franklin St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'nmoo-huds'},
        {dir: 'south', id: 'leon-huds'},
        {dir: 'east', id: 'fran-vari'},
        {dir: 'west', id: 'fran-gree'}
      ],
    },
    {
      id: 'nmoo-huds',
      coord: [],
      name: 'N. Moore St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'beac-huds'},
        {dir: 'south', id: 'fran-huds'},
        {dir: 'east', id: 'nmoo-vari'},
        {dir: 'west', id: 'nmoo-gree'}
      ],
    },
    {
      id: 'beac-huds',
      coord: [],
      name: 'Beach St. and Hudson Ave.',
      desc: `There is a luncheonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hube-huds'},
        {dir: 'south', id: 'nmoo-huds'},
        {dir: 'east', id: 'eric-vari'},
        {dir: 'west', id: 'beac-coll'},
        {dir: '', id: ''} // add luncheonette exit
      ],
    },
    {
      id: 'hube-huds',
      coord: [],
      name: 'Hubert St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'laig-huds'},
        {dir: 'south', id: 'beac-huds'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'hube-coll'}
      ],
    },
    {
      id: 'laig-huds',
      coord: [],
      name: 'Laight St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'vest-huds'},
        {dir: 'south', id: 'hube-huds'},
        {dir: 'east', id: 'vest-laig'},
        {dir: 'west', id: 'laig-coll'}
      ],
    },
    {
      id: 'vest-huds',
      coord: [],
      name: 'Vestry St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'desb-huds'},
        {dir: 'south', id: 'laig-huds'},
        {dir: 'east', id: 'vest-laig'},
        {dir: 'west', id: 'vest-gree'}
      ],
    },
    {
      id: 'desb-huds',
      coord: [],
      name: 'Desbrosses St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-huds'},
        {dir: 'south', id: 'vest-huds'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'desb-gree'}
      ],
    },
    {
      id: 'cana-huds',
      coord: [],
      name: 'Canal St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'domi-huds'},
        {dir: 'south', id: 'desb-huds'},
        {dir: 'east', id: 'cana-holl'},
        {dir: 'west', id: 'cana-watt'}
      ],
    },
    {
      id: 'domi-huds',
      coord: [],
      name: 'Dominick Ave. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-huds'},
        {dir: 'south', id: 'cana-huds'},
        {dir: 'east', id: 'domi-vari'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: 'spri-huds',
      coord: [],
      name: 'Spring St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'vand-huds'},
        {dir: 'south', id: 'domi-huds'},
        {dir: 'east', id: 'spri-vari'},
        {dir: 'west', id: 'spri-renw'}
      ],
    },
    {
      id: 'vand-huds',
      coord: [],
      name: 'Vandam St. and Hudson Ave.',
      desc: `There is a luncheonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'char-huds'},
        {dir: 'south', id: 'spri-huds'},
        {dir: 'east', id: 'vand-vari'},
        {dir: 'west', id: 'vand-gree'},
        {dir: '', id: ''} // add luncheonette exit
      ],
    },
    {
      id: 'char-huds',
      coord: [],
      name: 'Charlton St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'king-huds'},
        {dir: 'south', id: 'vand-huds'},
        {dir: 'east', id: 'char-vari'},
        {dir: 'west', id: 'char-gree'}
      ],
    },
    {
      id: 'king-huds',
      coord: [],
      name: 'King St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'whou-huds'},
        {dir: 'south', id: 'char-huds'},
        {dir: 'east', id: 'king-vari'},
        {dir: 'west', id: 'king-gree'}
      ],
    },
    {
      id: 'whou-huds',
      coord: [],
      name: 'W. Houston St. and Hudson Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'clar-huds'},
        {dir: 'south', id: 'king-huds'},
        {dir: 'east', id: 'whou-7'},
        {dir: 'west', id: 'whou-gree'}
      ],
    },
    {
      id: 'thom-duan',
      coord: [],
      name: 'Thomas St. and Duane St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'duan-huds'},
        {dir: 'east', id: 'thom-stap'},
        {dir: 'west', id: 'thom-gree'}
      ],
    },
    {
      id: 'thom-stap',
      coord: [],
      name: 'Thomas St. and Staple Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'jay-stap'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'thom-huds'},
        {dir: 'west', id: 'thom-duan'}
      ],
    },
    {
      id: 'jay-stap',
      coord: [],
      name: 'Jay St. and Staple Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'harr-stap'},
        {dir: 'south', id: 'thom-stap'},
        {dir: 'east', id: 'jay-huds'},
        {dir: 'west', id: 'jay-gree'}
      ],
    },
    {
      id: 'harr-stap',
      coord: [],
      name: 'Harrison St. and Staple Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'jay-stap'},
        {dir: 'east', id: 'harr-huds'},
        {dir: 'west', id: 'harr-gree'}
      ],
    },
    {
      id: 'beac-coll',
      coord: [],
      name: 'Beach St. and Collister Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hube-coll'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'beac-huds'},
        {dir: 'west', id: 'beac-gree'}
      ],
    },
    {
      id: 'hube-coll',
      coord: [],
      name: 'Hubert St. and Collister Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'laig-coll'},
        {dir: 'south', id: 'beac-coll'},
        {dir: 'east', id: 'hube-huds'},
        {dir: 'west', id: 'hube-gree'}
      ],
    },
    {
      id: 'laig-coll',
      coord: [],
      name: 'Laight St. and Collister Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'hube-coll'},
        {dir: 'east', id: 'laig-huds'},
        {dir: 'west', id: 'laig-gree'}
      ],
    },
    {
      id: 'vest-laig',
      coord: [],
      name: 'Vestry St. and Laight St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'vest-huds'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'laig-vari'},
        {dir: 'west', id: 'laig-huds'}
      ],
    },
    {
      id: 'fran-vari',
      coord: [],
      name: 'Franklin St. and Varick Ave.',
      desc: `The Franklin-Varick Station entrance is at this corner.`,
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: 'nmoo-vari'},
        {dir: 'south', id: 'vari-wbro'},
        {dir: 'east', id: 'fran-wbro'},
        {dir: 'west', id: 'fran-huds'}
      ],
    },
    {
      id: 'nmoo-vari',
      coord: [],
      name: 'N. Moore St. and Varick Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'eric-vari'},
        {dir: 'south', id: 'fran-vari'},
        {dir: 'east', id: 'nmoo-wbro'},
        {dir: 'west', id: 'nmoo-huds'}
      ],
    },
    {
      id: 'eric-vari',
      coord: [],
      name: 'Ericsson Pl. and Varick Ave.',
      desc: `Here we have a modest concrete palazzo housing the 1st precinct of the NYPD. Two roan stallions, bearing a pair of New York's finest, canter down Varick and enter a building by a side entrance.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'laig-vari'},
        {dir: 'south', id: 'nmoo-vari'},
        {dir: 'east', id: 'eric-walk'},
        {dir: 'west', id: 'beac-huds'}
      ],
    },
    {
      id: 'laig-vari',
      coord: [],
      name: 'Laight St. and Varick Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-vari'},
        {dir: 'south', id: 'eric-vari'},
        {dir: 'east', id: 'laig-stjo'},
        {dir: 'west', id: 'vest-laig'}
      ],
    },
    {
      id: 'cana-vari',
      coord: [],
      name: 'Canal St. and Varick Ave.',
      desc: `The Canal-Varick Station entrance is at this corner.`,
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: 'watt-vari'},
        {dir: 'south', id: 'laig-vari'},
        {dir: 'east', id: 'cana-amer'},
        {dir: 'west', id: 'cana-watt'}
      ],
    },
    {
      id: 'watt-vari',
      coord: [],
      name: 'Watts St. and Varick Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-vari'},
        {dir: 'south', id: 'cana-vari'},
        {dir: 'east', id: 'watt-ave'},
        {dir: 'west', id: 'watt-holl'}
      ],
    },
    {
      id: 'broo-vari',
      coord: [],
      name: 'Broome St. and Varick Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'domi-vari'},
        {dir: 'south', id: 'watt-vari'},
        {dir: 'east', id: 'broo-ave'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: 'domi-vari',
      coord: [],
      name: 'Dominick Ave. and Varick Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-vari'},
        {dir: 'south', id: 'broo-vari'},
        {dir: 'east', id: 'domi-ave'},
        {dir: 'west', id: 'domi-huds'}
      ],
    },
    {
      id: 'spri-vari',
      coord: [],
      name: 'Spring St. and Varick Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'vand-vari'},
        {dir: 'south', id: 'domi-vari'},
        {dir: 'east', id: 'spri-amer'},
        {dir: 'west', id: 'spri-huds'}
      ],
    },
    {
      id: 'vand-vari',
      coord: [],
      name: 'Vandam St. and Varick Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'char-vari'},
        {dir: 'south', id: 'spri-vari'},
        {dir: 'east', id: 'vand-amer'},
        {dir: 'west', id: 'vand-huds'}
      ],
    },
    {
      id: 'char-vari',
      coord: [],
      name: 'Charlton St. and Varick Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'king-vari'},
        {dir: 'south', id: 'vand-vari'},
        {dir: 'east', id: 'char-amer'},
        {dir: 'west', id: 'char-huds'}
      ],
    },
    {
      id: 'king-vari',
      coord: [],
      name: 'King St. and Varick Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'whou-7'},
        {dir: 'south', id: 'char-vari'},
        {dir: 'east', id: 'king-amer'},
        {dir: 'west', id: 'king-huds'}
      ],
    },
    {
      id: 'eric-walk',
      coord: [],
      name: 'Ericsson Pl. and Walker St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'walk-wbro'},
        {dir: 'east', id: 'eric-stjo'},
        {dir: 'west', id: 'eric-vari'}
      ],
    },
    {
      id: 'eric-stjo',
      coord: [],
      name: `Ericsson Pl. and St. John's Ave.`,
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'york-stjo'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'eric-wbro'},
        {dir: 'west', id: 'eric-walk'}
      ],
    },
    {
      id: 'york-stjo',
      coord: [],
      name: `York St. and St. John's Ave.`,
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'laig-stjo'},
        {dir: 'south', id: 'eric-stjo'},
        {dir: 'east', id: 'york-ave'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: 'laig-stjo',
      coord: [],
      name: `Laight St. and St. John's Ave.`,
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'york-stjo'},
        {dir: 'east', id: 'laig-amer'},
        {dir: 'west', id: 'laig-vari'}
      ],
    },
    {
      id: 'cana-watt',
      coord: [],
      name: 'Canal St. and Watts St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'watt-vari'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'cana-huds'},
        {dir: 'west', id: 'cana-holl'}
      ],
    },
    {
      id: 'cana-holl',
      coord: [],
      name: 'Canal St. and Holland Tunnel In',
      desc: `There is a luncheonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'cana-watt-1'},
        {dir: 'west', id: 'cana-huds'},
        {dir: '', id: ''} // add lunecheonette exit
      ],
    },
    {
      id: 'cana-watt-1',
      coord: [],
      name: 'Canal St. and Watts St.',
      desc: `There is a luncheonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'watt-vari'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'cana-vari'},
        {dir: 'west', id: 'cana-holl'},
        {dir: '', id: ''} // add lunecheonette exit
      ],
    },

    {
      id: 'watt-holl',
      coord: [],
      name: 'Watts St. and Holland Tunnel In',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'watt-vari'},
        {dir: 'west', id: 'cana-huds'}
      ],
    },
  ]
}