const soho = {
  roomId: 'hous-amer',
  rooms: [
  {
    id: 'hous-amer',
    coord: [],
    name: 'W. Houston and Ave of Americas',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: 'king-amer'},
      {dir: 'east', id: 'hous-macd'},
      {dir: 'west', id: ''},
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
      {dir: 'west', id: ''},
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
      {dir: 'west', id: ''},
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
      {dir: 'west', id: ''},
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
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
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
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
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
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
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
      {dir: 'west', id: ''},
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
      {dir: 'west', id: ''},
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
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
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
      {dir: 'south', id: ''},
      {dir: 'east', id: 'cana-thom'},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'hous-macd',
    coord: [],
    name: 'W. Houston St. and MacDougal Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
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
      {dir: 'east', id: ''},
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
      {dir: 'north', id: ''},
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
      {dir: 'north', id: ''},
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
      {dir: 'east', id: 'prin-broa-1'},
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
      {dir: 'east', id: 'spri-broa-1'},
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
      {dir: 'east', id: 'broo-broa-1'},
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
      {dir: 'east', id: 'gran-broa-1'},
      {dir: 'west', id: ''},
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
      {dir: 'south', id: ''},
      {dir: 'east', id: 'cana-broa-1'},
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
      {dir: 'north', id: ''},
      {dir: 'south', id: 'prin-broa-1'},
      {dir: 'east', id: 'hous-woos'},
      {dir: 'west', id: 'hous-thom'},
    ]
  },
  {
    id: 'prin-broa-1',
    coord: [],
    name: 'Prince St. and W. Broadway',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: 'hous-lagu'},
      {dir: 'south', id: 'spri-broa-1'},
      {dir: 'east', id: 'prin-woos'},
      {dir: 'west', id: 'prin-thom'},
    ]
  },
  {
    id: 'spri-broa-1',
    coord: [],
    name: 'Spring St. and W. Broadway',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: 'prin-broa-1'},
      {dir: 'south', id: 'broo-broa-1'},
      {dir: 'east', id: 'spri-woos'},
      {dir: 'west', id: 'spri-thom'},
    ]
  },
  {
    id: 'broo-broa-1',
    coord: [],
    name: 'Broome St. and W. Broadway',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: 'spri-broa-1'},
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
      {dir: 'north', id: 'broo-broa-1'},
      {dir: 'south', id: 'gran-broa-1'},
      {dir: 'west', id: 'watt-thom'},
    ]
  },
  {
    id: 'gran-broa-1',
    coord: [],
    name: 'Grand St. and W. Broadway',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: 'watt-broa'},
      {dir: 'south', id: 'cana-broa-1'},
      {dir: 'east', id: 'gran-woos'},
      {dir: 'west', id: 'gran-thom'},
    ]
  },
  {
    id: 'cana-broa-1',
    coord: [],
    name: 'Canal St. and W. Broadway',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: 'gran-broa-1'},
      {dir: 'south', id: ''},
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
      {dir: 'north', id: ''},
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
      {dir: 'west', id: 'prin-broa-1'},
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
      {dir: 'west', id: 'spri-broa-1'},
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
      {dir: 'west', id: 'broo-broa-1'},
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
      {dir: 'east', id: 'gran-gree'},
      {dir: 'west', id: 'gran-broa-1'},
    ]
  },
  {
    id: 'cana-woos',
    coord: [],
    name: 'Canal St. and Wooster Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'south', id: ''},
      {dir: 'east', id: 'cana-chur'},
      {dir: 'west', id: 'cana-broa-1'},
    ]
  },
  {
    id: 'cana-chur',
    coord: [],
    name: 'Canal St. and Church Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'south', id: ''},
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
      {dir: 'north', id: ''},
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
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: 'gran-gree'},
      {dir: 'south', id: ''},
      {dir: 'east', id: 'cana-merc'},
      {dir: 'west', id: 'cana-chur'},
    ]
  },
  {
    id: 'hous-merc',
    coord: [],
    name: 'W. Houston and Mercer Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
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
      {dir: 'south', id: ''},
      {dir: 'east', id: 'cana-broa'},
      {dir: 'west', id: 'cana-gree'},
    ]
  }
  ]
}