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
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
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
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
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
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
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
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
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
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
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
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
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
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'king-macd',
    coord: [],
    name: 'King St. and MacDougal Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'prin-macd',
    coord: [],
    name: 'Prince St. and MacDougal Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
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
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'prin-sull',
    coord: [],
    name: 'Prince St. and Sullivan St.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'spri-sull',
    coord: [],
    name: 'Spring St. and Sullivan St.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
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
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'prin-thom',
    coord: [],
    name: 'Prince St. and Thompson St.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'spri-thom',
    coord: [],
    name: 'Spring St. and Thompson St.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'broo-thom',
    coord: [],
    name: 'Broome St. and Thompson St.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'watt-thom',
    coord: [],
    name: 'Watts St. and Thompson St.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'gran-thom',
    coord: [],
    name: 'Grand St. and Thompson St.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
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
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
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
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'prin-broa-1',
    coord: [],
    name: 'Prince St. and W. Broadway',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'spri-broa-1',
    coord: [],
    name: 'Spring St. and W. Broadway',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'broo-broa-1',
    coord: [],
    name: 'Broome St. and W. Broadway',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'watt-broa',
    coord: [],
    name: 'Watts St. and W. Broadway',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'gran-broa-1',
    coord: [],
    name: 'Grand St. and W. Broadway',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'cana-broa-1',
    coord: [],
    name: 'Canal St. and W. Broadway',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
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
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'prin-woos',
    coord: [],
    name: 'Prince St. and Wooster Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'spri-woos',
    coord: [],
    name: 'Spring St. and Wooster Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'broo-woos',
    coord: [],
    name: 'Broome St. and Wooster Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'gran-woos',
    coord: [],
    name: 'Grand St. and Wooster Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'cana-woos',
    coord: [],
    name: 'Canal St. and Wooster Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'cana-chur',
    coord: [],
    name: 'Canal St. and Church Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
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
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'prin-gree',
    coord: [],
    name: 'Prince St. and Green Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'spri-gree',
    coord: [],
    name: 'Spring St. and Green Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'broo-gree',
    coord: [],
    name: 'Broome St. and Green Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'gran-gree',
    coord: [],
    name: 'Grand St. and Green Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'cana-gree',
    coord: [],
    name: 'Canal St. and Green Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
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
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'prin-merc',
    coord: [],
    name: 'Prince St. and Mercer Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'spri-merc',
    coord: [],
    name: 'Spring St. and Mercer Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'broo-merc',
    coord: [],
    name: 'Broome St. and Mercer Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'gran-merc',
    coord: [],
    name: 'Grand St. and Mercer Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'howa-merc',
    coord: [],
    name: 'Howard St. and Mercer Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  },
  {
    id: 'cana-merc',
    coord: [],
    name: 'Canal St. and Mercer Ave.',
    desc: '',
    isStreet: true,
    exits: [
      {dir: 'north', id: ''},
      {dir: 'south', id: ''},
      {dir: 'east', id: ''},
      {dir: 'west', id: ''},
    ]
  }
  ]
}