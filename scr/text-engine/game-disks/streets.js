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
        {dir: 'west', id: 'hous-7'},
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
      name: 'Charlton St. and Ave. of Americas',
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
        {dir: 'north', id: 'gran-watt'},
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
        {dir: 'east', id: 'hous-macd'},
        {dir: 'west', id: 'hous-thom'},
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
        {dir: 'south', id: 'pear-prow'},
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
    }
  ]
}