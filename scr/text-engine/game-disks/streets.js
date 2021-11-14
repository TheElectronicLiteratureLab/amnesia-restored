const streets = {
  roomId: 'hous-amer',
  currPos: [],
  rooms: [

            /*********************/
           /*********************/
          /*********************/
         /*-------------------*/
        /* MANHATTAN STREETS */
       /*-------------------*/
      /*********************/
     /*********************/
    /*********************/

      /********/
     /* Soho */
    /********/
    {
      id: 'hous-amer',
      coord: [-54.454, -11.697],
      name: 'W. Houston St. and Ave. of Americas',
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
      coord: [-55.603, -16.611],
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
      coord: [-55.616, -11.251],
      name: 'King St. and Ave. of Americas',
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
      coord: [-56.813, -10.833],
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
      coord: [-57.915, -10.371],
      name: 'Vandam St. and Ave. of Americas',
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
      coord: [-58.946, -9.961],
      name: 'Spring St. and Ave. of Americas',
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
      coord: [-59.900, -9.551],
      name: 'Dominick Ave. and Ave. of Americas',
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
      coord: [-60.475, -8.980],
      name: 'Sullivan St. and Ave. of Americas',
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
      coord: [-60.834, -9.112],
      name: 'Broome St. and Ave. of Americas',
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
      coord: [-61.547, -8.789],
      name: 'Watts St. and Ave. of Americas',
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
      coord: [-62.380, -8.423],
      name: 'Grand St. and Ave. of Americas',
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
      coord: [-63.513, -7.639],
      name: 'Canal St. and Ave. of Americas',
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
      coord: [-54.504, -10.194],
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
      coord: [-55.607, -10.298],
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
      coord: [-56.845, -10.393],
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
      coord: [-54.542, -8.350],
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
      coord: [-56.861, -8.584],
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
      coord: [-58.969, -8.796],
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
      coord: [-54.559, -6.643],
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
      coord: [-56.869, -6.834],
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
      coord: [-59.003, -7.024],
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
      coord: [-60.877, -7.192],
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
      coord: [-61.309, -7.251],
      name: 'Watts St. and Thompson St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-thom'},
        {dir: 'south', id: 'gran-thom'},
        {dir: 'east', id: 'watt-wbro'},
        {dir: 'west', id: 'watt-amer'},
      ]
    },
    {
      id: 'gran-thom',
      coord: [-62.394, -7.324],
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
      coord: [-63.552, -7.346],
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
      coord: [-54.589, -4.658],
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
      coord: [-56.909, -4.863],
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
      coord: [-59.074, -5.068],
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
      coord: [-60.970, -5.295],
      name: 'Broome St. and W. Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'spri-wbro'},
        {dir: 'south', id: 'watt-wbro'},
        {dir: 'east', id: 'broo-woos'},
        {dir: 'west', id: 'broo-thom'},
      ]
    },
    {
      id: 'watt-wbro',
      coord: [-61.101, -5.280],
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
      coord: [-62.451, -5.486],
      name: 'Grand St. and W. Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'watt-wbro'},
        {dir: 'south', id: 'cana-wbro'},
        {dir: 'east', id: 'gran-woos'},
        {dir: 'west', id: 'gran-thom'},
      ]
    },
    {
      id: 'cana-wbro',
      coord: [-63.753, -5.574],
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
      coord: [-54.652, -2.966],
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
      coord: [-56.957, -3.084],
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
      coord: [-59.127, -3.303],
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
      coord: [-60.990, -3.494],
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
      coord: [-62.492, -3.582],
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
      coord: [-63.950, -3.713],
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
      coord: [-64.130, -2.695],
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
      coord: [-54.661, -1.003],
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
      coord: [-56.989, -1.150],
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
      coord: [-59.172, 1.370],
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
      coord: [-61.055, -1.545],
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
      coord: [-62.543, -1.677],
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
      coord: [-64.216, -1.868],
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
      coord: [-54.712, 1.208],
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
      coord: [-56.997, 0.945],
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
      coord: [-59.217, 0.681],
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
      coord: [-61.062, 0.417],
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
      coord: [-62.610, 0.227],
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
      coord: [-63.921, 0.037],
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
      coord: [-64.419, -0.037],
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
      coord: [-54.735, 3.091],
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
      coord: [-57.061, 2.790],
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
      coord: [-59.201, 2.585],
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
      coord: [-61.150, 2.278],
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
      coord: [-62.651, 2.080],
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
      coord: [-63.960, 1.904],
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
      coord: [-64.618, 1.736],
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
      coord: [-54.699, 50.084],
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
      coord: [-55.982, 5.002],
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
      coord: [-57.096, 4.871],
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
      coord: [-59.329, 4.600],
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
      coord: [-61.263, 4.351],
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
      coord: [-62.741, 4.211],
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
      coord: [-64.014, 4.080],
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
      coord: [-64.855, 3.611],
      name: 'Canal St. and Corlandnt Al.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'walk-cort'},
        {dir: 'east', id: 'cana-lafa'},
        {dir: 'west', id: 'cana-broa'},
      ]
    },
    {
      id: 'hous-lafa',
      coord: [-54.640, 6.395],
      name: 'E. Houston St. and Lafayette St.',
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
      coord: [-56.027, 6.248],
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
      coord: [-57.108, 6.160],
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
      coord: [-59.322, 6.379],
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
      coord: [-60.634, 6.313],
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
      coord: [-61.291, 6.284],
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
      coord: [-62.795, 6.108],
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
      coord: [-64.104, 5.947],
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
      coord: [-65.100, 5.793],
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
      coord: [-59.359, 6.775],
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
      coord: [-60.482, 7.317],
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
      coord: [-61.309, 7.727],
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
      coord: [-62.825, 7.625],
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
      coord: [-64.101, 7.566],
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
      coord: [-64.429, 7.545],
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
      coord: [-65.281, 7.486],
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
      coord: [-61.341, 8.752],
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
      coord: [-62.842, 8.899],
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
      coord: [-64.384, 9.089],
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
      coord: [-65.446, 9.236],
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
      coord: [-54.610, 7.045],
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
      coord: [-56.043, 7.537],
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
      coord: [-57.144, 7.976],
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
      coord: [-59.307, 8.958],
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
      coord: [-60.414, 9.448],
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
      coord: [-61.319, 9.815],
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
      coord: [-62.802, 10.357],
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
      coord: [-64.372, 10.767],
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
      coord: [-65.710, 11.016],
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
      coord: [-54.525, 8.818],
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
      coord: [-57.172, 9.873],
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
      coord: [-59.344, 10.781],
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
      coord: [-60.338, 11.228],
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
      coord: [-61.386, 11.741],
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
      coord: [-62.771, 12.400],
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
      coord: [-64.368, 12.693],
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
      coord: [-65.646, 13.000],
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
      coord: [-54.444, 10.553],
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
      coord: [-57.228, 11.711],
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
      coord: [-59.337, 12.649],
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
      coord: [-60.258, 13.103],
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
      coord: [-61.379, 13.675],
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
      coord: [-62.678, 14.290],
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
      coord: [-54.329, 12.407],
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
      coord: [-56.511, 13.331],
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
      coord: [-57.263, 13.682],
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
      coord: [-58.248, 14.092],
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
      coord: [-59.367, 14.685],
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
      coord: [-60.163, 15.080],
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
      coord: [-61.414, 15.767],
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
      coord: [-62.603, 16.308],
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
      coord: [-65.029, 1.655],
      name: 'Lispenard St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-broa'},
        {dir: 'south', id: 'walk-broa'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'lisp-chur'},
      ]
    },
    {
      id: 'walk-broa',
      coord: [-65.797, 1.509],
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
      coord: [-66.580, 1.311],
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
      coord: [-67.365, 1.121],
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
      coord: [-68.005, 0.960],
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
      coord: [-65.866, 3.476],
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
      coord: [-66.650, 3.417],
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
      coord: [-67.410, 2.832],
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
      coord: [-68.043, 3.066],
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
      coord: [-65.860, 5.626],
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
      coord: [-66.696, 5.480],
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
      coord: [-67.483, 5.319],
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
      coord: [-68.092, 5.158],
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
      coord: [-65.866, 7.483],
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
      coord: [-66.743, 7.498],
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
      coord: [-68.142, 7.454],
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
      coord: [-65.842, 9.312],
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
      coord: [-66.818, 9.414],
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
      coord: [-67.178, 9.458],
      name: 'Bayard St. and Baxter St.',
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
      coord: [-68.169, 9.780],
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
      coord: [-68.922, 10.430],
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
      coord: [-65.785, 11.057],
      name: 'Walker St. and Mulberry St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-mulb'},
        {dir: 'south', id: 'baya-mulb'},
        {dir: 'east', id: 'walk-baxt'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'baya-mulb',
      coord: [-67.153, 11.408],
      name: 'Bayard St. and Mulberry St.',
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
      coord: [-68.544, 12.841],
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
      coord: [-68.929, 10.642],
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
      coord: [-68.982, 13.469],
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
      coord: [-67.139, 13.352],
      name: 'Bayard St. and Mott St.',
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
      coord: [-67.757, 13.601],
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
      coord: [-68.321, 14.304],
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
      coord: [-68.966, 15.315],
      name: 'Worth St. and Mott St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'park-mott'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'wort-prow'},
        {dir: 'west', id: 'wort-mulb'},
      ]
    },
    {
      id: 'wort-prow',
      coord: [-69.024, 15.666],
      name: 'Worth St. and Park Row',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'divi-stja'},
        {dir: 'south', id: 'prow-ebro'},
        {dir: 'east', id: 'wort-stja'},
        {dir: 'west', id: 'wort-mott'},
      ]
    },
    {
      id: 'prow-ebro',
      coord: [-69.074, 15.725],
      name: 'Park Row and E. Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wort-prow'},
        {dir: 'south', id: 'pear-park'},
        {dir: 'east', id: 'broa-stja'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'wort-stja',
      coord: [-68.935, 16.6199],
      name: 'Worth St. and Saint James St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'divi-stja'},
        {dir: 'south', id: 'broa-stja'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'wort-prow'},
      ]
    },
    {
      id: 'broa-stja',
      coord: [-68.966, 16.633],
      name: 'E. Broadway and and Saint James St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wort-stja'},
        {dir: 'south', id: 'oliv-stja'},
        {dir: 'east', id: 'broa-cath'},
        {dir: 'west', id: 'prow-ebro'},
      ]
    },
    {
      id: 'divi-stja',
      coord: [-68.272, 16.780],
      name: 'Division St. and Saint James St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stja-cath'},
        {dir: 'south', id: 'wort-stja'},
        {dir: 'east', id: 'divi-cath'},
        {dir: 'west', id: 'wort-prow'},
      ]
    },
    {
      id: 'hest-eliz',
      coord: [-64.337, 14.598],
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
      coord: [-65.619, 14.818],
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
      coord: [-67.116, 15.081],
      name: 'Bayard St. and Elizabeth St.',
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
      coord: [-64.286, 16.664],
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
      coord: [-65.577, 16.839],
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
      coord: [-67.119, 16.824],
      name: 'Bayard St. and Saint James St.',
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
      coord: [-67.576, 16.765],
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
      coord: [-68.172, 16.779],
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
      coord: [-67.698, 15.080],
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
      coord: [-68.177, 16.897],
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
      coord: [-68.112, 17.542],
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
      coord: [-68.550, 18.170],
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
      coord: [-65.549, 17.886],
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
      coord: [-65.379, 19.224],
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
      coord: [-65.342, 20.979],
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
      coord: [-66.780, 22.713],
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
      coord: [-67.153, 23.868],
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
      coord: [-67.548, 25.243],
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
      coord: [-67.170, 21.250],
      name: 'Division St. and Market St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'broa-mark'},
        {dir: 'east', id: 'fors-divi'},
        {dir: 'west', id: 'divi-cath'},
      ]
    },
    {
      id: 'broa-mark',
      coord: [-67.497, 22.450],
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
      coord: [-67.980, 23.415],
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
      coord: [-69.037, 19.248],
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
      coord: [-65.211, 22.932],
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
      coord: [-66.586, 23.459],
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
      coord: [-65.094, 25.049],
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
      coord: [-66.086, 25.342],
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
      coord: [-66.554, 26.111],
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
      coord: [-67.036, 27.187],
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
      coord: [-65.007, 26.587],
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
      coord: [-65.691, 26.851],
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
      coord: [-64.939, 28.022],
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
      coord: [-64.995, 29.224],
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
      coord: [-65.327, 28.184],
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
      coord: [-64.964, 29.824],
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
      coord: [-65.364, 30.454],
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
      /****************/
     /* East Village */
    /****************/
     {
      id: '14-broa',
      coord: [-35.651, 1.216],
      name: 'E. 14th St. and Broadway',
      desc: 'There is a restaurant called Nedicks here.',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '13-broa'},
        {dir: 'east', id: '14-4'},
        {dir: 'west', id: '14-usqw'},
        //{dir: 'Nedicks', id: '???'}
      ]
    },
    {
      id: '13-broa',
      coord: [-37.090, 2.007],
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
      coord: [-38.663, 2.856],
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
      coord: [-40.128, 3.750],
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
      coord: [-41.514, 4.504],
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
      coord: [-43.026, 4.512],
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
      coord: [-44.271, 4.358],
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
      coord: [-45.414, 4.226],
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
      coord: [-46.554, 4.087],
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
      coord: [-47.838, 3.926],
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
      coord: [-49.033, 3.779],
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
      coord: [-50.420, 3.662],
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
      coord: [-51.668, 3.464],
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
      coord: [-52.789, 3.318],
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
      coord: [-52.993, 5.266],
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
      coord: [-43.005, 7.558],
      name: 'Wanamaker Pl. and Lafayette St.',
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
      coord: [-44.298, 7.354],
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
      coord: [-44.820, 7.310],
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
      coord: [-49.128, 6.673],
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
      coord: [-50.521, 6.510],
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
      coord: [-51.867, 6.473],
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
      coord: [-53.068, 6.494],
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
      coord: [-54.436, 6.562],
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
      coord: [-53.019, 8.284],
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
      coord: [-52.957, 9.968],
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
      id: '14-usqe',
      coord: [-35.562, 2.483],
      name: 'E. 14th At. and Union Square E.', 
      desc: '',
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '4-usqe'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '14-4'},
        {dir: 'west', id: '14-broa'},
      ]
    },
    {
      id: '14-4',
      coord: [-35.562, 3.245],
      name: 'E. 14th St. and 4th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '4-usqe'},
        {dir: 'south', id: '13-4'},
        {dir: 'east', id: '14-irvi'},
        {dir: 'west', id: '14-usqe'},
      ]
    },
    {
      id: '13-4',
      coord: [-37.382, 4.527],
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
      coord: [-38.657, 5.112],
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
      coord: [-40.190, 6.130],
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
      coord: [-41.531, 6.965],
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
      coord: [-42.935, 7.932],
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
      coord: [-44.245, 8.342],
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
      coord: [-44.580, 8.445],
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
      coord: [-35.485, 6.126],
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
      coord: [-44.203, 10.150],
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
      coord: [-35.496, 10.122],
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
      coord: [-37.020, 10.122],
      name: 'E. 13th St. and 3rd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '14-3'},
        {dir: 'south', id: '12-3'},
        {dir: 'east', id: '13-2'},
        {dir: 'west', id: '13-4'},
      ]
    },
    {
      id: '12-3',
      coord: [-37.904, 10.122],
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
      coord: [-40.145, 10.122],
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
      coord: [-41.498, 10.188],
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
      coord: [-42.952, 10.229],
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
      coord: [-43.997, 10.234],
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
      coord: [-44.231, 10.241],
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
      coord: [-45.575, 10.255],
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
      coord: [-46.882, 10.268],
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
      coord: [-48.020, 10.294],
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
      coord: [-48.754, 10.262],
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
      coord: [-49.318, 10.333],
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
      coord: [-50.733, 10.913],
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
      coord: [-52.297, 11.582],
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
      coord: [-52.810, 11.823],
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
      coord: [-53.387, 12.071],
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
      coord: [-35.418, 15.581],
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
      coord: [-37.031, 15.607],
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
      coord: [-38.580, 15.670],
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
      coord: [-40.116, 15.670],
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
      coord: [-40.777, 15.687],
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
      coord: [-41.471, 14.468],
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
      coord: [-42.992, 12.094],
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
      coord: [-41.471, 15.651],
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
      coord: [-42.982, 15.718],
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
      coord: [-44.177, 15.721],
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
      coord: [-45.506, 15.734],
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
      coord: [-46.815, 15.743],
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
      coord: [-48.014, 15.754],
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
      coord: [-49.255, 15.813],
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
      coord: [-50.748, 15.887],
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
      coord: [-52.306, 15.862],
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
      coord: [-53.416, 15.872],
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
      coord: [-35.375, 20.914],
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
      coord: [-36.942, 20.928],
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
      coord: [-38.559, 20.969],
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
      coord: [-40.068, 20.969],
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
      coord: [-41.421, 20.969],
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
      coord: [-42.951, 21.024],
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
      coord: [-44.183, 21.024],
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
      coord: [-45.472, 21.035],
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
      coord: [-46.798, 21.076],
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
      coord: [-47.950, 21.112],
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
      coord: [-49.239, 21.112],
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
      coord: [-50.679, 21.142],
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
      coord: [-52.328, 21.181],
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
      coord: [-53.446, 21.181],
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
      coord: [-53.630, 24.069],
      name: 'E. Houston St. and E. 1st St.',
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
      coord: [-53.703, 23.454],
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
      coord: [-53.632, 24.878],
      name: 'E. Houston St. and Ludlow St.',
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
      coord: [-35.374, 26.555],
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
      coord: [-36.924, 26.558],
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
      coord: [-38.499, 26.577],
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
      coord: [-40.041, 26.577],
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
      coord: [-41.400, 26.577],
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
      coord: [-42.936, 26.582],
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
      coord: [-44.149, 26.579],
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
      coord: [-45.439, 26.610],
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
      coord: [-46.730, 26.610],
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
      coord: [-47.951, 26.599],
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
      coord: [-49.207, 26.654],
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
      coord: [-50.655, 26.631],
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
      coord: [-52.331, 26.639],
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
      coord: [-53.473, 26.676],
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
      coord: [-53.309, 28.363],
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
      coord: [-53.143, 30.228],
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
      coord: [-35.305, 31.932],
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
      coord: [-36.837, 31.959],
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
      coord: [-38.477, 31.991],
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
      coord: [-39.990, 31.991],
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
      coord: [-41.326, 32.016],
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
      coord: [-42.779, 32.036],
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
      coord: [-44.037, 32.036],
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
      coord: [-45.328, 32.033],
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
      coord: [-46.658, 32.063],
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
      coord: [-47.883, 32.067],
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
      coord: [-49.157, 32.083],
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
      coord: [-50.617, 32.123],
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
      coord: [-52.342, 32.177],
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
      coord: [-53.046, 32.173],
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
      coord: [-52.863, 34.257],
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
      coord: [-52.721, 36.020],
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
      coord: [-52.380, 36.884],
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
      coord: [-35.289, 37.439],
      name: 'E. 14th St. and Ave. C',
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
      coord: [-36.862, 37.433],
      name: 'E. 13th St. and Ave. C',
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
      coord: [-38.454, 37.465],
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
      coord: [-39.949, 37.499],
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
      coord: [-41.283, 37.521],
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
      coord: [-42.744, 37.571],
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
      coord: [-43.999, 37.592],
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
      coord: [-45.335, 37.668],
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
      coord: [-46.585, 37.688],
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
      coord: [-47.852, 37.738],
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
      coord: [-49.102, 37.777],
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
      coord: [-50.569, 37.821],
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
      coord: [-52.652, 37.851],
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
      coord: [-35.238, 43.560],
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
      coord: [-36.834, 43.580],
      name: 'E. 13th St. and Ave. D',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '14-aved'},
        {dir: 'south', id: '10-aved'},
        {dir: 'east', id: '13-fdrd'},
        {dir: 'west', id: '13-avec'},
      ]
    },
    {
      id: '10-aved',
      coord: [-41.258, 43.612],
      name: 'E. 10th St. and Ave. D',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '13-aved'},
        {dir: 'south', id: 'wana-aved'},
        {dir: 'east', id: '10-fdrd'},
        {dir: 'west', id: '10-avec'},
      ]
    },
    {
      id: 'wana-aved',
      coord: [-42.683, 43.641],
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
      coord: [-44.015, 43.683],
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
      coord: [-45.278, 43.680],
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
      coord: [-46.513, 43.678],
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
      coord: [-47.764, 43.721],
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
      coord: [-49.057, 43.736],
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
      coord: [-50.557, 43.717],
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
      coord: [-52.187, 43.675],
      name: 'E. Houston St. and Columbia St.',
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
      id: 'colu-rivi',
      coord: [-56.162, 44.542],
      name: 'Columbia St. and Rivington St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-colu'},
        {dir: 'south', id: 'dela-colu'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'hous-baru',
      coord: [-51.956, 48.998],
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
      coord: [-51.732, 50.803],
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
      coord: [-33.749, 37.363],
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
      coord: [-32.486, 37.337],
      name: 'E. 16th St. and Ave. C',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'avec-fdrd'},
        {dir: 'south', id: '15-aved'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '20-fdrd',
      coord: [-25.955, 31.897],
      name: 'E. 20th St. and FDR Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '23-fdrd'},
        {dir: 'south', id: 'avec-avec'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '20-1'},
      ]
    },
    {
      id: 'avec-fdrd',
      coord: [-29.254, 37.334],
      name: 'Ave. C and FDR Dr.',
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
      coord: [-33.643, 43.771],
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
      coord: [-35.083, 44.759],
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
      coord: [-36.753, 45.575],
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
      coord: [-41.215, 47.594],
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
      coord: [-46.450, 49.985],
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
      coord: [-51.469, 52.421],
      name: 'E. Houston St. and FDR Drive',
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
      coord: [-33.615, 45.296],
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
      coord: [-41.154, 48.835],
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
    {
      id: '23-erdr',
      coord: [-20.917, 28.971],
      name: 'E. 23rd St. and East River Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '15-erdr'},
        {dir: 'south', id: '10-erdr'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '23-fdrd'},
      ]
    },
    {
      id: '42-erdr',
      coord: [13.620, 24.045],
      name: 'E. 42nd St. and East River Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '23-erdr'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '42-fdrd'},
      ]
    },

      /*******************/
     /* Lower Manhattan */
    /*******************/
    {   
      id: 'whit-pete',
      coord: [-79.939, 4.756],
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
      coord: [-79.647, 3.490],
      name: 'State St. and Whitehall St.',
      desc: `The Whitehall-Bway Station entrance is at this corner.`,
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
      coord: [-79.572, 3.179],
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
      coord: [-79.315, 2.106],
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
      coord: [-79,134, 1.322],
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
      coord: [-78.973, 0.592],
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
      coord: [-78.680, -0.571],
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
      coord: [-78.486, -0.843],
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
      coord: [-78.138, -1.780],
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
      coord: [-77.492, -2.008],
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
      coord: [-77.073, -1.853],
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
      coord: [-76.809, -1.706],
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
      coord: [-76.349, -1.592],
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
      coord: [-76.151, -1.526],
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
      coord: [-75.991, -1.439],
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
      coord: [-75.654, -1.321],
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
      coord: [-75.222, -1.169],
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
      coord: [-74.687, -0.923],
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
      coord: [-74.331, -0.808],
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
      coord: [-73.809, -0.715],
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
      coord: [-73.219, -0.483],
      name: 'Barclay St. and Broadway',
      desc: `The Barclay-Broadwy Station entrance is at this corner.`,
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: 'prow-ebro'},
        {dir: 'south', id: 'vese-broa'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'barc-chur'}
      ],
    },
    {
      id: 'prow-ebro',
      coord: [-72.694, -0.305],
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
      coord: [-72.142, -0.138],
      name: 'Murray St. and Broadway',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'warr-broa'},
        {dir: 'south', id: 'prow-ebro'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'murr-chur'}
      ],
    },
    {
      id: 'warr-broa',
      coord: [-71.613, -0.005],
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
      coord: [-71.041, 0.171],
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
      coord: [-70.539, 0.314],
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
      coord: [-69.983, 0.481],
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
      coord: [-69.424, 0.613],
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
      coord: [-68.769, 0.776],
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
      coord: [-68.382, 0.887],
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
      coord: [-79.609, 6.925],
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
      coord: [-79.182, 5.045],
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
      coord: [-78.890, 4.153],
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
      coord: [-78.677, 3.613],
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
      coord: [-78.491, 3.201],
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
      coord: [-78.370, 2.897],
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
      coord: [-78.176, 2.415],
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
      coord: [-77.413, 1.425],
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
      coord: [-76.933, 1.412],
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
      coord: [-76.488, 1.599],
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
      coord: [-76.158, 1.791],
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
      coord: [-75.699, 2.024],
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
      coord: [-75.358, 2.224],
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
      coord: [-74.890, 2.457],
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
      coord: [-74.398, 2.721],
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
      coord: [-73.877, 3.269],
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
      coord: [-73.298, 3.991],
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
      coord: [-72.831, 4.632],
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
      coord: [-72.288, 5.569],
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
      coord: [-71.343, 6.086],
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
      coord: [-71.144, 5.974],
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
      coord: [-70.655, 6.321],
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
      coord: [-70.122, 6.689],
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
      coord: [-70.072, 6.515],
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
      coord: [-69.751, 6.876],
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
      coord: [-69.524, 7.049],
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
      coord: [-68.884, 7.416],
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
      coord: [-78.322, 11.113],
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
      coord: [-77.877, 12.142],
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
      coord: [-77.543, 12.825],
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
      coord: [-77.004, 14.068],
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
      coord: [-76.581, 14.964],
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
      coord: [-76.400, 15.336],
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
      coord: [-76.125, 15.849],
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
      coord: [-75.696, 16.684],
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
      coord: [-75.244, 17.587],
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
      coord: [-74.391, 19.141],
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
      coord: [-73.870, 20.055],
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
      coord: [-73.353, 20.957],
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
      coord: [-79.369, 4.198],
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
      coord: [-79.126, 3.062],
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
      coord: [-78.959, 3.838],
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
      coord: [-77.760, 4.910],
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
      coord: [-77.372, 4.267],
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
      coord: [-77.048, 4.560],
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
      coord: [-76.629, 4.720],
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
      coord: [-76.300, 4.926],
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
      coord: [-76.028, 5.129],
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
      coord: [-75.801, 5.274],
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
      coord: [-75.468, 5.481],
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
      coord: [-75.111, 5.694],
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
      coord: [-74.470, 6.106],
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
      coord: [-73.990, 6.370],
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
      coord: [-73.631, 6.596],
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
      coord: [-75.008, 4.268],
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
      coord: [-74.442, 4.618],
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
      coord: [-76.076, 6.947],
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
      coord: [-76.136, 7.318],
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
      coord: [-75.612, 7.650],
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
      coord: [-75.260, 7.921],
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
      coord: [-74.514, 8.440],
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
      coord: [-74.079, 8.933],
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
      coord: [-73.905, 9.105],
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
        {dir: 'west', id: 'prow-ebro'}
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
      name: 'Forsyth St. and Madison St.',
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
      name: 'Ave. of Finest St. and Madison St.',
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
        {dir: 'north', id: 'prow-ebro'},
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
      coord: [-68.927, 9.192],
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
        {dir: 'east', id: 'prow-ebro'},
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
      name: 'Ave. of Americas and Church Ave.',
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
        {dir: 'west', id: 'whit-amer'}
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
        {dir: 'west', id: 'walk-amer'}
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
      name: 'White St. and Ave. of Americas',
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
      name: 'Walker St. and Ave. of Americas',
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
        {dir: 'east', id: 'whit-amer'},
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
        {dir: 'east', id: 'walk-amer'},
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
      name: 'Ave. of Americas and W. Broadway',
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
      coord: [-64.821, -5.720],
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
      name: 'York St. and Ave. of Americas',
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
      name: 'Laight St. and Ave. of Americas',
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
        {dir: 'east', id: 'watt-amer'},
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
        {dir: 'east', id: 'broo-amer'},
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
        {dir: 'east', id: 'domi-amer'},
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
        {dir: 'east', id: 'york-amer'},
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
      /*******************/
     /* Lower East Side */
    /*******************/    

    {
      id: 'hous-chry',
      coord: [],
      name: 'E. Houston St. and Chrystie Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '1-2'},
        {dir: 'south', id: 'stan-chry'},
        {dir: 'east', id: 'hous-fors'},
        {dir: 'west', id: 'hous-bowe'}, 
      ]
    },
    {
      id: 'hous-fors',
      coord: [],
      name: 'E. Houston St. and Forsyth St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'stan-fors'},
        {dir: 'east', id: 'hous-eldr'},
        {dir: 'west', id: 'hous-chry'}, 
      ]
    },
    {
      id: 'hous-eldr',
      coord: [],
      name: 'E. Houston St. and Eldridge St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'stan-fors'},
        {dir: 'east', id: 'hous-alle'},
        {dir: 'west', id: 'hous-fors'}, 
      ]
    },
    {
      id: 'hous-alle',
      coord: [],
      name: 'E. Houston St. and Allen St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '1-1'},
        {dir: 'south', id: 'stan-alle'},
        {dir: 'east', id: 'hous-orch'},
        {dir: 'west', id: 'hous-eldr'}, 
      ]
    },
    {
      id: 'stan-chry',
      coord: [],
      name: 'Stanton St. and Chrystie Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-chry'},
        {dir: 'south', id: 'rivi-chry'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'stan-bowe'}, 
      ]
    },
    {
      id: 'stan-fors',
      coord: [],
      name: 'Stanton St. and Forsyth St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-fors'},
        {dir: 'south', id: 'rivi-fors'},
        {dir: 'east', id: 'stan-eldr'},
        {dir: 'west', block: `You can't go that way.`}, 
      ]
    },
    {
      id: 'stan-eldr',
      coord: [],
      name: 'Stanton St. and Eldridge St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-eldr'},
        {dir: 'south', id: 'rivi-eldr'},
        {dir: 'east', id: 'stan-alle'},
        {dir: 'west', id: 'stan-fors'}, 
      ]
    },
    {
      id: 'stan-alle',
      coord: [],
      name: 'Stanton St. and Allen St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-alle'},
        {dir: 'south', id: 'rivi-alle'},
        {dir: 'east', id: 'stan-orch'},
        {dir: 'west', id: 'stan-eldr'}, 
      ]
    },
    {
      id: 'stan-orch',
      coord: [],
      name: 'Stanton St. and Orchard St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-orch'},
        {dir: 'south', id: 'rici-orch'},
        {dir: 'east', id: 'stan-ludl'},
        {dir: 'west', id: 'stan-alle'}, 
      ]
    },
    {
      id: 'stan-ludl',
      coord: [],
      name: 'Stanton St. and Ludlow St. ',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-ludl'},
        {dir: 'south', id: 'rivi-ludl'},
        {dir: 'east', id: 'stan-esse'},
        {dir: 'west', id: 'stan-orch'}, 
      ]
    },
    {
      id: 'stan-esse',
      coord: [],
      name: 'Stanton St. and Essex St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-esse'},
        {dir: 'south', id: 'rivi-esse'},
        {dir: 'east', id: 'stan-norf'},
        {dir: 'west', id: 'stan-ludl'}, 
      ]
    },
    {
      id: 'stan-norf',
      coord: [],
      name: 'Stanton St. and Norfolk St. ',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-norf'},
        {dir: 'south', id: 'rivi-norf'},
        {dir: 'east', id: 'stan-suff'},
        {dir: 'west', id: 'stan-esse'}, 
      ]
    },
    {
      id: 'stan-suff',
      coord: [],
      name: 'Stanton St. and Suffolk St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-suff'},
        {dir: 'south', id: 'rivi-suff'},
        {dir: 'east', id: 'stan-clin'},
        {dir: 'west', id: 'stan-norf'}, 
      ]
    },
    {
      id: 'stan-clin',
      coord: [],
      name: 'Stanton St. and Clinton St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-clin'},
        {dir: 'south', id: 'rivi-clin'},
        {dir: 'east', id: 'stan-atto'},
        {dir: 'west', id: 'stan-suff'}, 
      ]
    },
    {
      id: 'stan-atto',
      coord: [],
      name: 'Stanton St. and Attorney St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-atto'},
        {dir: 'south', id: 'rivi-atto'},
        {dir: 'east', id: 'stan-ridg'},
        {dir: 'west', id: 'stan-clin'}, 
      ]
    },
    {
      id: 'stan-ridg',
      coord: [],
      name: 'Stanton St. and Ridge St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-ridg'},
        {dir: 'south', id: 'rivi-ridg'},
        {dir: 'east', id: 'stan-pitt'},
        {dir: 'west', id: 'stan-atto'}, 
      ]
    },
    {
      id: 'stan-pitt',
      coord: [],
      name: 'Stanton St. and Pitt St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-pitt'},
        {dir: 'south', id: 'rivi-pitt'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'stan-ridg'}, 
      ]
    },
    {
      id: 'new-baru',
      coord: [],
      name: 'New St. and Baruch Pl.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-baru'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'new-mang', },
        {dir: 'west', block: `You can't go that way.`}, 
      ]
    },
    {
      id: 'new-mang',
      coord: [],
      name: 'New St. and Mangin St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-mang'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'new-baru'}, 
      ]
    },
    {
      id: 'rivi-chry',
      coord: [],
      name: 'Rivington St. and Chrystie Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stan-chry'},
        {dir: 'south', id: 'dela-chry'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'rivi-bowe'}, 
      ]
    },
    {
      id: 'rivi-fors',
      coord: [],
      name: 'Rivington St. and Forsyth St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stan-fors'},
        {dir: 'south', id: 'dela-fors'},
        {dir: 'east', id: 'rivi-eldr'},
        {dir: 'west', block: `You can't go that way.`}, 
      ]
    },
    {
      id: 'rivi-eldr',
      coord: [],
      name: 'Rivington St. and Eldridge St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stan-eldr'},
        {dir: 'south', id: 'dela-eldr'},
        {dir: 'east', id: 'rivi-alle'},
        {dir: 'west', id: 'rivi-fors'}, 
      ]
    },
    {
      id: 'rivi-alle',
      coord: [],
      name: 'Rivington St. and Allen St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stan-alle'},
        {dir: 'south', id: 'dela-alle'},
        {dir: 'east', id: 'rivi-orch'},
        {dir: 'west', id: 'rivi-eldr'}, 
      ]
    },
    {
      id: 'rivi-orch',
      coord: [],
      name: 'Rivington St. and Orchard St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stan-orch'},
        {dir: 'south', id: 'dela-orch'},
        {dir: 'east', id: 'rivi-ludl'},
        {dir: 'west', id: 'rivi-alle'}, 
      ]
    },
    {
      id: 'rivi-ludl',
      coord: [],
      name: 'Rivington St. and Ludlow St. ',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stan-ludl'},
        {dir: 'south', id: 'dela-ludl'},
        {dir: 'east', id: 'rivi-esse'},
        {dir: 'west', id: 'rivi-orch'}, 
      ]
    },
    {
      id: 'rivi-esse',
      coord: [],
      name: 'Rivington St. and Essex St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stan-esse'},
        {dir: 'south', id: 'dela-esse'},
        {dir: 'east', id: 'rivi-norf'},
        {dir: 'west', id: 'rivi-ludl'}, 
      ]
    },
    {
      id: 'rivi-norf',
      coord: [],
      name: 'Rivington St. and Norfolk St. ',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stan-norf'},
        {dir: 'south', id: 'dela-norf'},
        {dir: 'east', id: 'rivi-suff'},
        {dir: 'west', id: 'rivi-esse'}, 
      ]
    },
    {
      id: 'rivi-suff',
      coord: [],
      name: 'Rivington St. and Suffolk St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stan-suff'},
        {dir: 'south', id: 'dela-suff'},
        {dir: 'east', id: 'rivi-clin'},
        {dir: 'west', id: 'rivi-norf'}, 
      ]
    },
    {
      id: 'rivi-clin',
      coord: [],
      name: 'Rivington St. and Clinton St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stan-clin'},
        {dir: 'south', id: 'dela-clin'},
        {dir: 'east', id: 'rivi-atto'},
        {dir: 'west', id: 'rivi-suff'}, 
      ]
    },
    {
      id: 'rivi-atto',
      coord: [],
      name: 'Rivington St. and Attorney St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stan-atto'},
        {dir: 'south', id: 'dela-atto'},
        {dir: 'east', id: 'rivi-ridg'},
        {dir: 'west', id: 'rivi-clin'}, 
      ]
    },
    {
      id: 'rivi-ridg',
      coord: [],
      name: 'Rivington St. and Ridge St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stan-ridg'},
        {dir: 'south', id: 'dela-ridg'},
        {dir: 'east', id: 'rivi-pitt'},
        {dir: 'west', id: 'rivi-atto'}, 
      ]
    },
    {
      id: 'rivi-pitt',
      coord: [],
      name: 'Rivington St. and Pitt St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'stan-pitt'},
        {dir: 'south', id: 'dela-pitt'},
        {dir: 'east', id: 'rivi-colu'},
        {dir: 'west', id: 'rivi-ridg'}, 
      ]
    },
    {
      id: 'rivi-colu',
      coord: [],
      name: 'Rivington St. and Columbia St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-colu'},
        {dir: 'south', id: 'dela-colu'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', block: `You can't go that way.`}, 
      ]
    },
    {
      id: 'dela-chry',
      coord: [],
      name: 'Delancy St. and Chrystie Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'rivi-chry'},
        {dir: 'south', id: 'broo-chry'},
        {dir: 'east', id: 'dela-fors'},
        {dir: 'west', id: 'kenm-bowe'}, 
      ]
    },
    {
      id: 'dela-fors',
      coord: [],
      name: 'Delancy St. and Forsyth St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'rivi-fors'},
        {dir: 'south', id: 'broo-fors'},
        {dir: 'east', id: 'dela-eldr'},
        {dir: 'west', id: 'dela-chry'}, 
      ]
    },
    {
      id: 'dela-eldr',
      coord: [],
      name: 'Delancy St. and Eldridge St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'rivi-eldr'},
        {dir: 'south', id: 'broo-eldr'},
        {dir: 'east', id: 'dela-alle'},
        {dir: 'west', id: 'dela-fors'}, 
      ]
    },
    {
      id: 'dela-alle',
      coord: [],
      name: 'Delancy St. and Allen St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'rivi-alle'},
        {dir: 'south', id: 'broo-alle'},
        {dir: 'east', id: 'dela-orch'},
        {dir: 'west', id: 'dela-eldr'}, 
      ]
    },
    {
      id: 'dela-orch',
      coord: [],
      name: 'Delancy St. and Orchard St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'rivi-orch'},
        {dir: 'south', id: 'broo-orch'},
        {dir: 'east', id: 'dela-ludl'},
        {dir: 'west', id: 'dela-alle'}, 
      ]
    },
    {
      id: 'dela-ludl',
      coord: [],
      name: 'Delancy St. and Ludlow St. ',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'rivi-ludl'},
        {dir: 'south', id: 'broo-ludl'},
        {dir: 'east', id: 'dela-esse'},
        {dir: 'west', id: 'dela-orch'}, 
      ]
    },
    {
      id: 'dela-esse',
      coord: [],
      name: 'Delancy St. and Essex St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'rivi-esse'},
        {dir: 'south', id: 'broo-esse'},
        {dir: 'east', id: 'dela-norf'},
        {dir: 'west', id: 'dela-ludl'}, 
      ]
    },
    {
      id: 'dela-norf',
      coord: [],
      name: 'Delancy St. and Norfolk St. ',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'rivi-norf'},
        {dir: 'south', id: 'broo-norf'},
        {dir: 'east', id: 'dela-suff'},
        {dir: 'west', id: 'dela-esse'}, 
      ]
    },
    {
      id: 'dela-suff',
      coord: [],
      name: 'Delancy St. and Suffolk St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'rivi-suff'},
        {dir: 'south', id: 'broo-suff'},
        {dir: 'east', id: 'will-clin'},
        {dir: 'west', id: 'dela-norf'}, 
      ]
    },
    {
      id: 'dela-clin',
      coord: [],
      name: 'Delancy St. and Clinton St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'rivi-clin'},
        {dir: 'south', id: 'will-clin'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'dela-suff'}, 
      ]
    },
    {
      id: 'dela-atto',
      coord: [],
      name: 'Delancy St. and Attorney St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'rivi-atto'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'dela-ridg'},
        {dir: 'west', id: 'dela-clin'}, 
      ]
    },
    {
      id: 'dela-ridg',
      coord: [],
      name: 'Delancy St. and Ridge St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'rivi-ridg'},
        {dir: 'south', id: 'new-ridg'},
        {dir: 'east', id: 'dela-pitt'},
        {dir: 'west', id: 'dela-atto'}, 
      ]
    },
    {
      id: 'dela-pitt',
      coord: [],
      name: 'Delancy St. and Pitt St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'rivi-pitt'},
        {dir: 'south', id: 'new-pitt'},
        {dir: 'east', id: 'dela-colu'},
        {dir: 'west', id: 'dela-ridg'}, 
      ]
    },
    {
      id: 'dela-colu',
      coord: [],
      name: 'Delancy St. and Columbia St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'rivi-colu'},
        {dir: 'south', id: 'new-colu'},
        {dir: 'east', id: 'dela-fdrd'},
        {dir: 'west', id: 'dela-pitt'}, 
      ]
    },
    {
      id: 'dela-fdrd',
      coord: [],
      name: 'Delancy St. and ',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'hous-fdrd'},
        {dir: 'south', id: 'new-sout'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'dela-colu'}, 
      ]
    },
    {
      id: 'will-clin',
      coord: [],
      name: 'Williamsburg Brg. and Clinton St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'dela-clin'},
        {dir: 'south', id: 'new-clin'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'dela-suff'}, 
      ]
    },
    {
      id: 'new-clin',
      coord: [],
      name: 'New St. and Clinton St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'will-clin'},
        {dir: 'south', id: 'broo-clin'},
        {dir: 'east', id: 'new-ridg'},
        {dir: 'west', block: `You can't go that way.`}, 
      ]
    },
    {
      id: 'new-ridg',
      coord: [],
      name: 'New St. and Ridge St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'dela-ridg'},
        {dir: 'south', id: 'broo-ridg'},
        {dir: 'east', id: 'new-pitt'},
        {dir: 'west', id: 'new-clin'}, 
      ]
    },
    {
      id: 'new-pitt',
      coord: [],
      name: 'New St. and Pitt St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'dela-pitt'},
        {dir: 'south', id: 'broo-pitt'},
        {dir: 'east', id: 'new-will'},
        {dir: 'west', id: 'new-ridg'}, 
      ]
    },
    {
      id: 'new-will',
      coord: [],
      name: 'New St. and Willet St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'broo-will'},
        {dir: 'east', id: 'new-colu'},
        {dir: 'west', id: 'new-pitt'}, 
      ]
    },
    {
      id: 'new-colu',
      coord: [],
      name: 'New St. and Columbia St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'dela-colu'},
        {dir: 'south', id: 'broo-colu'},
        {dir: 'east', id: 'new-lewi'},
        {dir: 'west', id: 'new-will'}, 
      ]
    },
    {
      id: 'new-lewi',
      coord: [],
      name: 'New St. and Lewis St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'gran-lewi'},
        {dir: 'east', id: 'new-sout'},
        {dir: 'west', id: 'new-colu'}, 
      ]
    },
    {
      id: 'new-sout',
      coord: [],
      name: 'New St. and South St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'dela-fdrd'},
        {dir: 'south', id: 'gran-sout'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'new-lewi'}, 
      ]
    },
    {
      id: 'broo-chry',
      coord: [],
      name: 'Broome St. and Chrystie Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'dela-chry'},
        {dir: 'south', id: 'gran-chry'},
        {dir: 'east', id: 'broo-fors'},
        {dir: 'west', id: 'broo-bowe'}, 
      ]
    },
    {
      id: 'broo-fors',
      coord: [],
      name: 'Broome St. and Forsyth St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'dela-fors'},
        {dir: 'south', id: 'gran-fors'},
        {dir: 'east', id: 'broo-eldr'},
        {dir: 'west', id: 'broo-chry'}, 
      ]
    },
    {
      id: 'broo-eldr',
      coord: [],
      name: 'Broome St. and Eldridge St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'dela-eldr'},
        {dir: 'south', id: 'gran-eldr'},
        {dir: 'east', id: 'broo-alle'},
        {dir: 'west', id: 'broo-fors'}, 
      ]
    },
    {
      id: 'broo-alle',
      coord: [],
      name: 'Broome St. and Allen St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'dela-alle'},
        {dir: 'south', id: 'gran-alle'},
        {dir: 'east', id: 'broo-orch'},
        {dir: 'west', id: 'broo-eldr'}, 
      ]
    },
    {
      id: 'broo-orch',
      coord: [],
      name: 'Broome St. and Orchard St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'dela-orch'},
        {dir: 'south', id: 'gran-orch'},
        {dir: 'east', id: 'broo-ludl'},
        {dir: 'west', id: 'broo-alle'}, 
      ]
    },
    {
      id: 'broo-ludl',
      coord: [],
      name: 'Broome St. and Ludlow St. ',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'dela-ludl'},
        {dir: 'south', id: 'gran-ludl'},
        {dir: 'east', id: 'broo-esse'},
        {dir: 'west', id: 'broo-orch'}, 
      ]
    },
    {
      id: 'broo-esse',
      coord: [],
      name: 'Broome St. and Essex St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'dela-esse'},
        {dir: 'south', id: 'gran-esse'},
        {dir: 'east', id: 'broo-norf'},
        {dir: 'west', id: 'broo-ludl'}, 
      ]
    },
    {
      id: 'broo-norf',
      coord: [],
      name: 'Broome St. and Norfolk St. ',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'dela-norf'},
        {dir: 'south', id: 'gran-norf'},
        {dir: 'east', id: 'broo-suff'},
        {dir: 'west', id: 'broo-esse'}, 
      ]
    },
    {
      id: 'broo-suff',
      coord: [],
      name: 'Broome St. and Suffolk St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'dela-suff'},
        {dir: 'south', id: 'gran-suff'},
        {dir: 'east', id: 'broo-clin'},
        {dir: 'west', id: 'broo-norf'}, 
      ]
    },
    {
      id: 'broo-clin',
      coord: [],
      name: 'Broome St. and Clinton St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'new-clin'},
        {dir: 'south', id: 'gran-clin'},
        {dir: 'east', id: 'broo-ridg'},
        {dir: 'west', id: 'broo-suff'}, 
      ]
    },
    {
      id: 'broo-ridg',
      coord: [],
      name: 'Broome St. and Ridge St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'new-ridg'},
        {dir: 'south', id: 'gran-ridg', },
        {dir: 'east', id: 'broo-pitt'},
        {dir: 'west', id: 'broo-clin'}, 
      ]
    },
    {
      id: 'broo-pitt',
      coord: [],
      name: 'Broome St. and Pitt St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'new-pitt'},
        {dir: 'south', id: 'gran-pitt'},
        {dir: 'east', id: 'broo-will'},
        {dir: 'west', id: 'broo-ridg'}, 
      ]
    },
    {
      id: 'broo-will',
      coord: [],
      name: 'Broome St. and Willet St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'new-will'},
        {dir: 'south', id: 'gran-will'},
        {dir: 'east', id: 'broo-colu'},
        {dir: 'west', id: 'bro-pitt'}, 
      ]
    },
    {
      id: 'broo-colu',
      coord: [],
      name: 'Broome St. and Columbia St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'new-colu'},
        {dir: 'south', id: 'gran-colu'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'broo-will'}, 
      ]
    },
    {
      id: 'gran-chry',
      coord: [],
      name: 'Grand St. and Chrystie Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-chrys'},
        {dir: 'south', id: 'hest-chry'},
        {dir: 'east', id: 'gran-fors'},
        {dir: 'west', id: 'gran-bowe'}, 
      ]
    },
    {
      id: 'gran-fors',
      coord: [],
      name: 'Grand St. and Forsyth St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-fors'},
        {dir: 'south', id: 'hest-fors'},
        {dir: 'east', id: 'gran-eldr'},
        {dir: 'west', id: 'gran-chry'}, 
      ]
    },
    {
      id: 'gran-eldr',
      coord: [],
      name: 'Grand St. and Eldridge St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-eldr'},
        {dir: 'south', id: 'hest-eldr'},
        {dir: 'east', id: 'gran-alle'},
        {dir: 'west', id: 'gran-fors'}, 
      ]
    },
    {
      id: 'gran-alle',
      coord: [],
      name: 'Grand St. and Allen St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-alle'},
        {dir: 'south', id: 'hest-alle'},
        {dir: 'east', id: 'gran-orch'},
        {dir: 'west', id: 'gran-eldr'}, 
      ]
    },
    {
      id: 'gran-orch',
      coord: [],
      name: 'Grand St. and Orchard St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-orch'},
        {dir: 'south', id: 'hest-orch'},
        {dir: 'east', id: 'gran-ludl'},
        {dir: 'west', id: 'gran-alle'}, 
      ]
    },
    {
      id: 'gran-ludl',
      coord: [],
      name: 'Grand St. and Ludlow St. ',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-ludl'},
        {dir: 'south', id: 'hest-ludl'},
        {dir: 'east', id: 'gran-esse'},
        {dir: 'west', id: 'gran-orch'}, 
      ]
    },
    {
      id: 'gran-esse',
      coord: [],
      name: 'Grand St. and Essex St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-esse'},
        {dir: 'south', id: 'hest-eese'},
        {dir: 'east', id: 'gran-norf'},
        {dir: 'west', id: 'gran-ludl'}, 
      ]
    },
    {
      id: 'gran-norf',
      coord: [],
      name: 'Grand St. and Norfolk St. ',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-norf'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'gran-suff'},
        {dir: 'west', id: 'gran-esse'}, 
      ]
    },
    {
      id: 'gran-suff',
      coord: [],
      name: 'Grand St. and Suffolk St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-suff'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'gran-clin'},
        {dir: 'west', id: 'gran-norf'}, 
      ]
    },
    {
      id: 'gran-clin',
      coord: [],
      name: 'Grand St. and Clinton St.',
      desc: `There is a lunchonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-clin'},
        {dir: 'south', id: 'broa-clin'},
        {dir: 'east', id: 'gran-ridg'},
        {dir: 'west', id: 'gran-suff'}, 
      ]
    },
    {
      id: 'gran-ridg',
      coord: [],
      name: 'Grand St. and Ridge St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-ridg'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'gran-pitt'},
        {dir: 'west', id: 'gran-clin'}, 
      ]
    },
    {
      id: 'gran-pitt',
      coord: [],
      name: 'Grand St. and Pitt St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-pitt'},
        {dir: 'south', id: 'broa-pitt'},
        {dir: 'east', id: 'gran-will'},
        {dir: 'west', id: 'gran-ridg'}, 
      ]
    },
    {
      id: 'gran-will',
      coord: [],
      name: 'Grand St. and Willet St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-will'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'gran-ebro'},
        {dir: 'west', id: 'gran-pitt'}, 
      ]
    },
    {
      id: 'gran-ebro',
      coord: [],
      name: 'Grand St. and E. Broadway',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'broa-will', },
        {dir: 'east', id: 'gran-colu'},
        {dir: 'west', id: 'gran-will'}, 
      ]
    },
    {
      id: 'gran-colu',
      coord: [],
      name: 'Grand St. and Columbia St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broo-colu'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'gran-henr'},
        {dir: 'west', id: 'gran-ebro'}, 
      ]
    },
    {
      id: 'gran-henr',
      coord: [],
      name: 'Grand St. and Henry St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'henr-will'},
        {dir: 'east', id: 'gran-jack'},
        {dir: 'west', id: 'gran-colu'}, 
      ]
    },
    {
      id: 'gran-jack',
      coord: [],
      name: 'Grand St. and Jackson St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'madi-jack'},
        {dir: 'east', id: 'gran-lwei'},
        {dir: 'west', id: 'gran-henr'}, 
      ]
    },
    {
      id: 'gran-lewi',
      coord: [],
      name: 'Grand St. and Lewis St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'new-lewi'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'gran-madi'},
        {dir: 'west', id: 'gran-jack'}, 
      ]
    },
    {
      id: 'gran-madi',
      coord: [],
      name: 'Grand St. and Madison St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'madi-jack'},
        {dir: 'east', id: 'gran-sout'},
        {dir: 'west', id: 'gran-lwei'}, 
      ]
    },
    {
      id: 'gran-sout',
      coord: [],
      name: 'Grand St. and South St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'new-sout'},
        {dir: 'south', id: 'sout-jack'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'gran-madi'}, 
      ]
    },
    {
      id: 'hest-chry',
      coord: [],
      name: 'Hester St. and Chrystie Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-chry'},
        {dir: 'south', id: 'cana-chry'},
        {dir: 'east', id: 'hest-fors'},
        {dir: 'west', id: 'hest-bowe'}, 
      ]
    },
    {
      id: 'hest-fors',
      coord: [],
      name: 'Hester St. and Forsyth St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-fors'},
        {dir: 'south', id: 'cana-fors'},
        {dir: 'east', id: 'hest-eldr'},
        {dir: 'west', id: 'hest-chry'}, 
      ]
    },
    {
      id: 'hest-eldr',
      coord: [],
      name: 'Hester St. and Eldridge St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-eldr'},
        {dir: 'south', id: 'cana-eldr'},
        {dir: 'east', id: 'hest-alle'},
        {dir: 'west', id: 'hest-fors'}, 
      ]
    },
    {
      id: 'hest-alle',
      coord: [],
      name: 'Hester St. and Allen St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-alle'},
        {dir: 'south', id: 'cana-alle'},
        {dir: 'east', id: 'hest-orch'},
        {dir: 'west', id: 'hest-eldr'}, 
      ]
    },
    {
      id: 'hest-orch',
      coord: [],
      name: 'Hester St. and Orchard St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-orch'},
        {dir: 'south', id: 'cana-orch'},
        {dir: 'east', id: 'hest-ludl'},
        {dir: 'west', id: 'hest-alle'}, 
      ]
    },
    {
      id: 'hest-ludl',
      coord: [],
      name: 'Hester St. and Ludlow St. ',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-ludl'},
        {dir: 'south', id: 'cana-ludl'},
        {dir: 'east', id: 'hest-esse'},
        {dir: 'west', id: 'hest-orch'}, 
      ]
    },
    {
      id: 'hest-esse',
      coord: [],
      name: 'Hester St. and Essex St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-esse'},
        {dir: 'south', id: 'cana-esse'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'hest-ludl'}, 
      ]
    },
    {
      id: 'broa-cana',
      coord: [],
      name: 'E. Broadway and Canal St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', lock: `You can't go that way.`},
        {dir: 'south', id: 'henr-rutg'},
        {dir: 'east', id: 'broa-jeff'},
        {dir: 'west', id: 'cana-rutg'}, 
      ]
    },
    {
      id: 'broa-jeff',
      coord: [],
      name: 'E. Broadway and Jefferson St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'henr-jeff', },
        {dir: 'east', id: 'broa-clin'},
        {dir: 'west', id: 'broa-cana'}, 
      ]
    },
    {
      id: 'broa-clin',
      coord: [],
      name: 'E. Broadway and Clinton St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-clin'},
        {dir: 'south', id: 'henr-clin'},
        {dir: 'east', id: 'broa-mont'},
        {dir: 'west', id: 'broa-jeff'}, 
      ]
    },
    {
      id: 'broa-mont',
      coord: [],
      name: 'E. Broadway and Montgomery St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'henr-mont'},
        {dir: 'east', id: 'broa-pitt'},
        {dir: 'west', id: 'broa-clin'}, 
      ]
    },
    {
      id: 'broa-pitt',
      coord: [],
      name: 'E. Broadway and Pitt St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-pitt'},
        {dir: 'south', id: 'henr-pitt'},
        {dir: 'east', id: 'broa-will'},
        {dir: 'west', id: 'broa-mont'}, 
      ]
    },
    {
      id: 'broa-will',
      coord: [],
      name: 'E. Broadway and Willet St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'henr-will'},
        {dir: 'east', id: 'gran-broa'},
        {dir: 'west', id: 'broa-pitt'}, 
      ]
    },
    {
      id: 'henr-rutg',
      coord: [],
      name: 'Henry St. and Rutgers St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broa-rutg'},
        {dir: 'south', id: 'madi-rutg'},
        {dir: 'east', id: 'henr-jeff'},
        {dir: 'west', id: 'henr-pike'}, 
      ]
    },
    {
      id: 'henr-jeff',
      coord: [],
      name: 'Henry St. and Jefferson St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broa-jeff'},
        {dir: 'south', id: 'madi-jeff'},
        {dir: 'east', id: 'henr-clin'},
        {dir: 'west', id: 'henr-rutg'}, 
      ]
    },
    {
      id: 'henr-clin',
      coord: [],
      name: 'Henry St. and Clinton St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broa-clin'},
        {dir: 'south', id: 'madi-clin'},
        {dir: 'east', id: 'henr-mont'},
        {dir: 'west', id: 'henr-jeff'}, 
      ]
    },
    {
      id: 'henr-mont',
      coord: [],
      name: 'Henry St. and Montgomery St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broa-mont'},
        {dir: 'south', id: 'madi-mont'},
        {dir: 'east', id: 'henr-pitt'},
        {dir: 'west', id: 'henr-clin'}, 
      ]
    },
    {
      id: 'henr-pitt',
      coord: [],
      name: 'Henry St. and Pitt St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broa-pitt'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'henr-will'},
        {dir: 'west', id: 'henr-mont'}, 
      ]
    },
    {
      id: 'henr-will',
      coord: [],
      name: 'Henry St. and Willet St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broa-will'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'gran-henr'},
        {dir: 'west', id: 'henr-pitt'}, 
      ]
    },
    {
      id: 'madi-pike',
      coord: [],
      name: 'Madison St. and Pike St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'henr-pike'},
        {dir: 'south', id: 'monr-pike'},
        {dir: 'east', id: 'madi-rutg'},
        {dir: 'west', id: 'fors-madi'}, 
      ]
    },
    {
      id: 'madi-rutg',
      coord: [],
      name: 'Madison St. and Rutgers St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'henr-rutg'},
        {dir: 'south', id: 'cher-rutg'},
        {dir: 'east', id: 'madi-jeff'},
        {dir: 'west', id: 'madi-pike'}, 
      ]
    },
    {
      id: 'madi-jeff',
      coord: [],
      name: 'Madison St. and Jefferson St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'henr-jeff'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'madi-clin'},
        {dir: 'west', id: 'madi-rutg'}, 
      ]
    },
    {
      id: 'madi-clin',
      coord: [],
      name: 'Madison St. and Clinton St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'henr-clin'},
        {dir: 'south', id: 'cher-clin'},
        {dir: 'east', id: 'madi-mont'},
        {dir: 'west', id: 'madi-jeff'}, 
      ]
    },
    {
      id: 'madi-mont',
      coord: [],
      name: 'Madison St. and Montgomery St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'henr-mont'},
        {dir: 'south', id: 'cher-mont'},
        {dir: 'east', id: 'madi-gouv'},
        {dir: 'west', id: 'madi-clin'}, 
      ]
    },
    {
      id: 'madi-gouv',
      coord: [],
      name: 'Madison St. and Gouverneur St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'ggdn-gouv'},
        {dir: 'east', id: 'madi-jack'},
        {dir: 'west', id: 'madi-mont'}, 
      ]
    },
    {
      id: 'madi-jack',
      coord: [],
      name: 'Madison St. and Jackson St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gran-jack'},
        {dir: 'south', id: `ggdn-jack`},
        {dir: 'east', id: 'gran-madi'},
        {dir: 'west', id: 'madi-gouv'}, 
      ]
    },
    {
      id: 'monr-pike',
      coord: [],
      name: 'Madison St. and Pike St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'madi-pike'},
        {dir: 'south', id: 'cher-pike'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'monr-mark'}, 
      ]
    },
    {
      id: 'cher-pike',
      coord: [],
      name: 'Cherry St. and Pike St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'monr-pike'},
        {dir: 'south', id: 'wate-pike'},
        {dir: 'east', id: 'cher-rutg'},
        {dir: 'west', id: 'cher-mark'}, 
      ]
    },
    {
      id: 'cher-rutg',
      coord: [],
      name: 'Cherry St. and Rutgers St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'madi-rutg'},
        {dir: 'south', id: 'wate-rutg'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'cher-pike'}, 
      ]
    },
    {
      id: 'cher-clin',
      coord: [],
      name: 'Cherry St. and Clinton St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'madi-clin'},
        {dir: 'south', id: 'sout-clin'},
        {dir: 'east', id: 'cher-mont'},
        {dir: 'west', block: `You can't go that way.`}, 
      ]
    },
    {
      id: 'cher-mont',
      coord: [],
      name: 'Cherry St. and Montgomery St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'madi-mont'},
        {dir: 'south', id: 'ggdn-mont'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'cher-clin'}, 
      ]
    },
    {
      id: 'wate-pike',
      coord: [],
      name: 'Water St. and Pike St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cher-pike'},
        {dir: 'south', id: 'sout-pike'},
        {dir: 'east', id: 'wate-rutg'},
        {dir: 'west', id: 'wate-mark'}, 
      ]
    },
    {
      id: 'wate-rutg',
      coord: [],
      name: 'Water St. and Rutgers St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cher-rutg'},
        {dir: 'south', id: 'sout-rutg'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'wate-pike'}, 
      ]
    },
    {
      id: 'sout-pike',
      coord: [],
      name: 'South St. and Pike St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wate-pike'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'sout-rutg'},
        {dir: 'west', id: 'sout-mark'}, 
      ]
    },
    {
      id: 'sout-rutg',
      coord: [],
      name: 'South St. and Rutgers St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wate-rutg'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'sout-clin'},
        {dir: 'west', id: 'sout-pike'}, 
      ]
    },
    {
      id: 'sout-clin',
      coord: [],
      name: 'South St. and Clinton St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cher-clin'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'sout-mont'},
        {dir: 'west', id: 'sout-rutg'}, 
      ]
    },
    {
      id: 'sout-mont',
      coord: [],
      name: 'South St. and Montgomery St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gouv-mont'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'sout-gouv'},
        {dir: 'west', id: 'sout-clin'}, 
      ]
    },
    {
      id: 'ggdn-mont',
      coord: [],
      name: 'Gouverneur Gdns. and Montgomery St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cher-mont'},
        {dir: 'south', id: 'sout-mont'},
        {dir: 'east', id: 'ggdn-gslw'},
        {dir: 'west', block: `You can't go that way.`}, 
      ]
    },
    {
      id: 'ggdn-gslw',
      coord: [],
      name: 'Gouverneur Gdns. and Gouverneur Slip W',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: 'sout-gslw'},
        {dir: 'east', id: 'ggdn-gouv'},
        {dir: 'west', id: 'ggdn-mont'}, 
      ]
    },
    {
      id: 'ggdn-gouv',
      coord: [],
      name: 'Gouverneur Gdns. and Gouverneur St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'madi-gouv'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'ggdn-gsle'},
        {dir: 'west', id: 'ggdn-gslw'}, 
      ]
    },
    {
      id: 'ggdn-gsle',
      coord: [],
      name: 'Gouverneur Gdns. and Gouverneur Slip E',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: `sout-gsle`},
        {dir: 'east', id: 'ggdn-jack'},
        {dir: 'west', id: 'ggdn-gouv'}, 
      ]
    },
    {
      id: 'ggdn-jack',
      coord: [],
      name: 'Gouverneur Gdns. and Jackson St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'madi-jack'},
        {dir: 'south', id: 'sout-jack'},
        {dir: 'east', id: 'gran-sout'},
        {dir: 'west', id: 'ggdn-gsle'}, 
      ]
    },
    {
      id: 'sout-gslw',
      coord: [],
      name: 'South St. and Gouverneur Slip W',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'gouv-gslw'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'sout-gsle'},
        {dir: 'west', id: 'sout-mont'}, 
      ]
    },
    {
      id: 'sout-gsle',
      coord: [],
      name: 'South St. and Gouverneur Slip E',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'ggdn-gsle'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: 'sout-jack'},
        {dir: 'west', id: 'sout-gslw'}, 
      ]
    },
    {
      id: 'sout-jack',
      coord: [],
      name: 'South St. and Jackson St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'ggdn-jack'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'sout-gsle'}, 
      ]
    },
    
      /*************/
     /* Greenwich */
    /*************/    
    {   
      id: 'blee-merc',
      coord: [],
      name: 'Bleecker St. and Mercer Ave.',
      desc: `There is a pizzeria here.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '3-merc'},
        {dir: 'south', id: 'hous-merc'},
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
        {dir: 'west', id: 'hous-amer'} 
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
        {dir: 'west', id: 'blee-amer'} 
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
        {dir: 'west', id: '3-amer'} 
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
        {dir: 'west', id: '4-amer'},
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
        {dir: 'west', id: 'wash-amer'},
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
        {dir: 'west', id: 'wave-amer'} 
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
        {dir: 'west', id: '8-amer'} 
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
        {dir: 'west', id: '9-amer'},
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
        {dir: 'west', id: '10-amer'} 
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
        {dir: 'west', id: '11-amer'} 
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
        {dir: 'west', id: '12-amer'} 
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
        {dir: 'west', id: '13-amer'} 
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
        {dir: 'north', id: '14-usqe'},
        {dir: 'south', id: '12-univ'},
        {dir: 'east', id: '13-broa'}, 
        {dir: 'west', id: '13-5'} 
      ],
    },
    {   
      id: 'bedf-amer',
      coord: [],
      name: 'Bedford Ave. and Ave. of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'blee-amer'},
        {dir: 'south', id: 'hous-amer'},
        {dir: 'east', block: `You can't go that way.`}, 
        {dir: 'west', id: 'down-bedf'} 
      ],
    },
    {   
      id: 'blee-amer',
      coord: [],
      name: 'Bleecker St. and Ave. of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'mine-amer'},
        {dir: 'south', id: 'bedf-amer'},
        {dir: 'east', id: 'blee-macd'}, 
        {dir: 'west', block: `You can't go that way.`} 
      ],
    },
    {   
      id: 'mine-amer',
      coord: [],
      name: 'Minetta La. and Ave. of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'blee-amer-1'},
        {dir: 'south', id: 'blee-amer'},
        {dir: 'east', id: 'mine-mine'}, 
        {dir: 'west', id: 'down-bedf'} 
      ],
    },
    {   
      id: 'blee-amer-1',
      coord: [],
      name: 'Bleecker St. and Ave. of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'carm-amer'},
        {dir: 'south', id: 'mine-amer'},
        {dir: 'east', block: `You can't go that way.`}, 
        {dir: 'west', id: 'carm-blee'} 
      ],
    },
    {   
      id: 'carm-amer',
      coord: [],
      name: 'Carmine St. and Ave. of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '3-amer'},
        {dir: 'south', id: 'blee-amer-1'},
        {dir: 'east', id: 'mine-mine'}, 
        {dir: 'west', id: 'corn-4'} 
      ],
    },
    {   
      id: '3-amer',
      coord: [],
      name: 'W. 3rd St. and Ave. of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '4-amer'},
        {dir: 'south', id: 'carm-amer'},
        {dir: 'east', id: '3-macd'}, 
        {dir: 'west', block: `You can't go that way.`} 
      ],
    },
    {   
      id: '4-amer',
      coord: [],
      name: 'W. 4th St. and Ave. of Americas',
      desc: `The 4 ST-Wash Sq Station entrance is at this corner.`,
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: 'wash-amer'},
        {dir: 'south', id: '3-amer'},
        {dir: 'east', id: '4-macd'}, 
        {dir: 'west', id: 'corn-4'} 
      ],
    },
    {   
      id: 'wash-amer',
      coord: [],
      name: 'Washington Pl. and Ave. of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wave-amer'},
        {dir: 'south', id: '4-amer'},
        {dir: 'east', id: 'wash-wash'}, 
        {dir: 'west', id: '4-wash'} 
      ],
    },
    {   
      id: 'wave-amer',
      coord: [],
      name: 'Waverly Pl. and Ave. of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '8-amer'},
        {dir: 'south', id: 'wash-amer'},
        {dir: 'east', id: 'wave-macd'}, 
        {dir: 'west', id: 'wave-gay'} 
      ],
    },
    {   
      id: '8-amer',
      coord: [],
      name: 'W. 8th St. and Ave. of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '9-amer'},
        {dir: 'south', id: 'wave-amer'},
        {dir: 'east', id: '8-macd'}, 
        {dir: 'west', id: 'chri-gree'} 
      ],
    },
    {   
      id: '9-amer',
      coord: [],
      name: 'W. 9th St. and Ave. of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '10-amer'},
        {dir: 'south', id: '8-amer'},
        {dir: 'east', id: '9-5'}, 
        {dir: 'west', id: 'chri-gree'} 
      ],
    },
    {   
      id: '10-amer',
      coord: [],
      name: 'W. 10th St. and Ave. of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '11-amer'},
        {dir: 'south', id: '9-amer'},
        {dir: 'east', id: '10-5'}, 
        {dir: 'west', id: '10-gree'} 
      ],
    },
    {   
      id: '11-amer',
      coord: [],
      name: 'W. 11th St. and Ave. of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '12-amer'},
        {dir: 'south', id: '10-amer'},
        {dir: 'east', id: '11-5'}, 
        {dir: 'west', id: '11-7'} 
      ],
    },
    {   
      id: '12-amer',
      coord: [],
      name: 'W. 12th St. and Ave. of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '13-amer'},
        {dir: 'south', id: '11-amer'},
        {dir: 'east', id: '12-5'}, 
        {dir: 'west', id: '12-7'} 
      ],
    },
    {   
      id: '13-amer',
      coord: [],
      name: 'W. 13th St. and Ave. of Americas',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '14-amer'},
        {dir: 'south', id: '12-amer'},
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
        {dir: 'east', id: 'whou-amer'}, 
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
        {dir: 'north', id: 'carm-7'},
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
        {dir: 'east', id: '11-amer'}, 
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
        {dir: 'east', id: '12-amer'}, 
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
        {dir: 'east', id: '13-amer'}, 
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
        {dir: 'south', id: 'bedf-amer'},
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
        {dir: 'south', id: 'mine-amer'},
        {dir: 'east', id: 'mine-macd'}, 
        {dir: 'west', id: 'carm-amer'} 
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
        {dir: 'south', id: 'blee-amer-1'},
        {dir: 'east', id: 'carm-amer'}, 
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
        {dir: 'east', id: '4-amer'}, 
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
        {dir: 'east', id: 'wash-amer'}, 
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
        {dir: 'east', id: 'wave-amer'}, 
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
        {dir: 'south', id: '8-amer'},
        {dir: 'east', id: '9-amer'}, 
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
        {dir: 'east', id: '10-amer'}, 
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
      name: 'Leroy St. and West End Hwy.',
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
    {   
      id: '14-west',
      coord: [-35.996, -41.607],
      name: 'W. 14th St. and West End Hwy.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '15-hhpw'},
        {dir: 'south', id: '13-west'},
        {dir: 'east', id: '14-12'}, 
        {dir: 'west', block: `You can't go that way.`} 
      ],
    },
      /***********/
     /* Chelsea */
    /***********/
    {
      id: '34-hhpw',
      coord: [-2.504, -53.508],
      name: 'W. 34th Ave. and Henry Hudson Pkwy.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '42-hhpw'},
        {dir: 'south', id: '23-hhpw'},
        {dir: 'east', id: '34-12'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '23-hhpw',
      coord: [-21.759, -50.687],
      name: 'W. 23rd St. and Henry Hudson Pkwy.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '34-hhpw'},
        {dir: 'south', id: '15-hhpw'},
        {dir: 'east', id: '23-12'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '15-hhpw',
      coord: [-34.336, -42.684],
      name: 'W. 15th St. and Henry Hudson Pkwy.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '23-hhpw'},
        {dir: 'south', id: '14-west'},
        {dir: 'east', id: '15-12'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
 
    //12th Ave
    {
      id: '34-12',
      coord: [-2.456, -52.413],
      name: 'W. 34th St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '39-12'},
        {dir: 'south', id: '33-12'},
        {dir: 'east', id: '34-11'},
        {dir: 'west', id: '34-hhpw'}
      ],
    },
    {
      id: '33-12',
      coord: [-4.316, -52.431],
      name: 'W. 33rd St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '34-12'},
        {dir: 'south', id: '30-12'},
        {dir: 'east', id: '33-11'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '30-12',
      coord: [-9.583, -52.150],
      name: 'W. 30th St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '33-12'},
        {dir: 'south', id: '29-12'},
        {dir: 'east', id: '30-11'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '29-12',
      coord: [-11.325, -52.000],
      name: 'W. 29th St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '30-12'},
        {dir: 'south', id: '28-12'},
        {dir: 'east', id: '29-11'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '28-12',
      coord: [-13.146, -51.789],
      name: 'W. 28th St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '29-12'},
        {dir: 'south', id: '27-12'},
        {dir: 'east', id: '28-11'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },      
    {
      id: '27-12',
      coord: [-14.796, -51.504],
      name: 'W. 27th St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '28-12'},
        {dir: 'south', id: '26-12'},
        {dir: 'east', id: '27-11'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '26-12',
      coord: [-16.573, -51.130],
      name: 'W. 26th St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '27-12'},
        {dir: 'south', id: '25-12'},
        {dir: 'east', id: '26-11'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '24-12',
      coord: [-19.994, -50.054],
      name: 'W. 24th St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '26-12'},
        {dir: 'south', id: '23-12'},
        {dir: 'east', id: '24-11'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '23-12',
      coord: [-21.821, -49.329],
      name: 'W. 23rd St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '24-12'},
        {dir: 'south', id: '22-12'},
        {dir: 'east', id: '23-11'},
        {dir: 'west', id: '23-hhpw'}
      ],
    },
    {
      id: '22-12',
      coord: [-23.645, -47.395],
      name: 'W. 22nd St. and 12th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '23-12'},
        {dir: 'south', id: '11-12'},
        {dir: 'east', id: '22-11'},
        {dir: 'west', block: `You can't go that way.`}
      ]
    },
    {
      id: '11-12',
      coord: [-24.127, -46.956],
      name: '11th Ave. and 12th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '22-11'},
        {dir: 'south', id: '21-12'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '22-12'}
      ]
    },
    {
      id: '21-12',
      coord: [-24.986, -46.561],
      name: 'W. 21st St. and 12th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '11-12'},
        {dir: 'south', id: '20-12'},
        {dir: 'east', id: '21-10'},
        {dir: 'west', block: `You can't go that way.`}
      ]
    },
    {
      id: '20-12',
      coord: [-26.804, -45.572],
      name: 'W. 20th St. and 12th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '21-12'},
        {dir: 'south', id: '19-12'},
        {dir: 'east', id: '20-10'},
        {dir: 'west', block: `You can't go that way.`}
      ]
    },
    {
      id: '19-12',
      coord: [-28.420, -44.715],
      name: 'W. 19th St. and 12th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '20-12'},
        {dir: 'south', id: '18-12'},
        {dir: 'east', id: '19-10'},
        {dir: 'west', block: `You can't go that way.`}
      ]
    },
    {
      id: '18-12',
      coord: [-30.050, -43.771],
      name: 'W. 18th St. and 12 Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '19-12'},
        {dir: 'south', id: '17-12'},
        {dir: 'east', id: '18-10'},
        {dir: 'west', block: `You can't go that way.`}
      ]
    },
    {
      id: '17-12',
      coord: [-31.560, -43.001],
      name: 'W. 17th St. and 12th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '18-12'},
        {dir: 'south', id: '16-12'},
        {dir: 'east', id: '17-10'},
        {dir: 'west', block: `You can't go that way.`}
      ]
    },
    {
      id: '16-12',
      coord: [-33.082, -42.188],
      name: 'W. 16th St. and 12th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '17-12'},
        {dir: 'south', id: '15-12'},
        {dir: 'east', id: '16-10'},
        {dir: 'west', block: `You can't go that way.`}
      ]
    },
    {
      id: '15-12',
      coord: [-34.271, -41.529],
      name: 'W. 15th St. and 12th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '16-12'},
        {dir: 'south', id: '14-12'},
        {dir: 'east', id: '15-10'},
        {dir: 'west', id: '15-hhpw'}
      ]
    },
    {
      id: '14-12',
      coord: [-35.925, -40.584],
      name: 'W. 14th St. and 12th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '15-12'},
        {dir: 'south', id: '13-12'},
        {dir: 'east', id: '14-10'},
        {dir: 'west', id: '14-west'}
      ]
    },
        //11th Ave.
    {
      id: '33-11',
      coord: [],
      name: 'W. 33rd St. and 11th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '34-11'},
        {dir: 'south', id: '32-11'},
        {dir: 'east', id: '33-10'},
        {dir: 'west', id: '33-12'}

      ],
    },
    {
      id: '32-11',
      coord: [],
      name: 'W. 32nd St. and 11th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '33-11'},
        {dir: 'south', id: '30-11'},
        {dir: 'east', id: '32-10'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '30-11',
      coord: [],
      name: 'W. 30th St. and 11th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '32-11'},
        {dir: 'south', id: '29-11'},
        {dir: 'east', id: '30-10'},
        {dir: 'west', id: '30-12'}
      ],
    },
    {
      id: '29-11',
      coord: [],
      name: 'W. 29th St. and 11th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '30-11'},
        {dir: 'south', id: '28-11'},
        {dir: 'east', id: '29-10'},
        {dir: 'west', id: '29-12'},
      ],
    },
    {
      id: '28-11',
      coord: [],
      name: 'W. 28th St. and 11th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '29-11'},
        {dir: 'south', id: '27-11'},
        {dir: 'east', id: '28-10'},
        {dir: 'west', id: '28-12'},
      ],
    },
    {
      id: '27-11',
      coord: [],
      name: 'W. 27th St. and 11th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '28-11'},
        {dir: 'south', id: '26-11'},
        {dir: 'east', id: '27-10'},
        {dir: 'west', id: '27-12'},
      ],
    },
    {
      id: '26-11',
      coord: [],
      name: 'W. 26th St. and 11th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '27-11'},
        {dir: 'south', id: '25-11'},
        {dir: 'east', id: '26-10'},
        {dir: 'west', id: '26-12'}
      ],
    },
    {
      id: '25-11',
      coord: [],
      name: 'W. 25th St. and 11th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '26-11'},
        {dir: 'south', id: '24-11'},
        {dir: 'east', id: '25-10'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '24-11',
      coord: [],
      name: 'W. 24th St. and 11th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '25-11'},
        {dir: 'south', id: '23-11'},
        {dir: 'east', id: '24-10'},
        {dir: 'west', id: '24-12'}
      ],
    },
    {
      id: '23-11',
      coord: [],
      name: 'W. 23rd St. and 11th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '24-11'},
        {dir: 'south', id: '22-11'},
        {dir: 'east', id: '23-10'},
        {dir: 'west', id: '23-12'}
      ],
    },
    {
      id: '22-11',
      coord: [],
      name: 'W. 22nd St. and 11th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '23-11'},
        {dir: 'south', id: '12-12'},
        {dir: 'east', id: '22-10'},
        {dir: 'west', id: '23-12'}
      ],
    },
        //10th Ave
    {
      id: '33-10',
      coord: [],
      name: 'W. 33rd St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '34-10'},
        {dir: 'south', id: '32-10'},
        {dir: 'east', id: '33-9'},
        {dir: 'west', id: '33-11'},
      ],
    },
    {
      id: '32-10',
      coord: [],
      name: 'W. 32nd St. and 10th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '33-10'},
        {dir: 'south', id: '31-10'},
        {dir: 'east', id: '32-9'},
        {dir: 'west', id: '32-11'},
      ]
    },
    {
      id: '31-10',
      coord: [],
      name: 'W. 31st St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '32-10'},
        {dir: 'south', id: '30-10'},
        {dir: 'east', id: '31-9'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: 'linc-10',
      coord: [],
      name: 'Lincoln Tunnel IN and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '31-10'},
        {dir: 'south', id: '30-10'},
        {dir: 'west', block: `You can't go that way.`},
        {dir: 'east', id: 'linc-9'}
      ]
    },
    {
      id: '30-10',
      coord: [],
      name: 'W. 30th St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '31-10'},
        {dir: 'south', id: '29-10'},
        {dir: 'east', id: '30-9'},
        {dir: 'west', id: '30-11'},
      ],
    },
    {
      id: '29-10',
      coord: [],
      name: 'W. 29th St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '30-10'},
        {dir: 'south', id: '28-10'},
        {dir: 'east', id: '29-9'},
        {dir: 'west', id: '29-11'},
      ],
    },
    {
      id: '28-10',
      coord: [],
      name: 'W. 28th St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '29-10'},
        {dir: 'south', id: '27-10'},
        {dir: 'east', id: '28-9'},
        {dir: 'west', id: '28-11'},
      ],
    },
    {
      id: '27-10',
      coord: [],
      name: 'W. 27th St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '28-10'},
        {dir: 'south', id: '26-10'},
        {dir: 'east', id: '27-26'},
        {dir: 'west', id: '27-11'},
      ],
    },
    {
      id: '27-26',
      coord: [],
      name: 'W. 27th St. and W. 26th St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '27-10'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '26-9'},
        {dir: 'west', id: '26-10'}
      ]
    },
    {
      id: '26-10',
      coord: [],
      name: 'W. 26th St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '27-10'},
        {dir: 'south', id: '25-10'},
        {dir: 'east', id: '27-26'},
        {dir: 'west', id: '26-11'},
      ],
    },
    {
      id: '25-10',
      coord: [],
      name: 'W. 25th St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '26-10'},
        {dir: 'south', id: '24-10'},
        {dir: 'east', id: '25-9'},
        {dir: 'west', id: '25-11'},
      ],
    },
    {
      id: '24-10',
      coord: [],
      name: 'W. 24th St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '25-10'},
        {dir: 'south', id: '23-10'},
        {dir: 'east', id: '24-9'},
        {dir: 'west', id: '24-11'},
      ],
    },
    {
      id: '23-10',
      coord: [],
      name: 'W. 23rd St. and 10th Ave.',
      desc: `There is a luncheonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '24-10'},
        {dir: 'south', id: '22-10'},
        {dir: 'east', id: '23-9'},
        {dir: 'west', id: '23-11'},
      ],
    },
    {
      id: '22-10',
      coord: [],
      name: 'W. 22nd St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '23-10'},
        {dir: 'south', id: '21-10'},
        {dir: 'east', id: '22-9'},
        {dir: 'west', id: '22-11'},
      ],
    },
    {
      id: '21-10',
      coord: [],
      name: 'W. 21st St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '22-10'},
        {dir: 'south', id: '20-10'},
        {dir: 'east', id: '21-9'},
        {dir: 'west', id: '21-12'},
      ],
    },
    {
      id: '20-10',
      coord: [],
      name: 'W. 20th St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '21-10'},
        {dir: 'south', id: '19-10'},
        {dir: 'east', id: '20-9'},
        {dir: 'west', id: '20-12'},
      ],
    },
    {
      id: '19-10',
      coord: [],
      name: 'W. 19th St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '20-10'},
        {dir: 'south', id: '18-10'},
        {dir: 'east', id: '19-9'},
        {dir: 'west', id: '19-12'},
      ],
    },
    {
      id: '18-10',
      coord: [],
      name: 'W. 18th St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '19-10'},
        {dir: 'south', id: '17-10'},
        {dir: 'east', id: '18-9'},
        {dir: 'west', id: '18-12'},
      ],
    },
    {
      id: '17-10',
      coord: [],
      name: 'W. 17th St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '18-10'},
        {dir: 'south', id: '16-10'},
        {dir: 'east', id: '17-9'},
        {dir: 'west', id: '17-12'},
      ],
    },
    {
      id: '16-10',
      coord: [],
      name: 'W. 16th St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '17-10'},
        {dir: 'south', id: '15-10'},
        {dir: 'east', id: '16-9'},
        {dir: 'west', id: '16-12'},
      ],
    },
    {
      id: '15-10',
      coord: [],
      name: 'W. 15th St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '16-10'},
        {dir: 'south', id: '14-10'},
        {dir: 'east', id: '15-9'},
        {dir: 'west', id: '15-12'},
      ],
    },
    {
      id: '14-10',
      coord: [],
      name: 'W. 14th St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '15-10'},
        {dir: 'south', id: '13-10'},
        {dir: 'east', id: '14-9'},
        {dir: 'west', id: '14-12'},
      ],
    },       
    {
      id: '33-9',
      coord: [],
      name: 'W. 33rd St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '34-9'},
        {dir: 'south', id: '31-9'},
        {dir: 'east', id: '33-8'},
        {dir: 'west', id: '33-10'},
      ],
    },
    {
      id: '31-9',
      coord: [],
      name: 'W. 31st St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '33-9'},
        {dir: 'south', id: 'linc-9'},
        {dir: 'east', id: '31-8'},
        {dir: 'west', id: '31-10'},
      ],
    },
    {
      id: 'linc-9',
      coord: [],
      name: 'Lincoln Tunnel IN and 9th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '31-9'},
        {dir: 'south', id: '30-9'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: 'linc-10'},
      ]
    },
    {
      id: '30-9',
      coord: [],
      name: 'W. 30th St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'linc-9'},
        {dir: 'south', id: '29-9'},
        {dir: 'east', id: '30-8'},
        {dir: 'west', id: '30-10'},
      ],
    },
    {
      id: '29-9',
      coord: [],
      name: 'W. 29th St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '30-9'},
        {dir: 'south', id: '28-9'},
        {dir: 'east', id: '29-8'},
        {dir: 'west', id: '29-10'},
      ],
    },

    {
      id: '28-9',
      coord: [],
      name: 'W. 28th St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '29-9'},
        {dir: 'south', id: '26-9'},
        {dir: 'east', id: '28-8'},
        {dir: 'west', id: '28-10'},
      ],
    },
    {
      id: '26-9',
      coord: [],
      name: 'W. 26th St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '28-9'},
        {dir: 'south', id: '25-9'},
        {dir: 'east', id: '26-8'},
        {dir: 'west', id: '27-26'},
      ],
    },
    {
      id: '25-9',
      coord: [],
      name: 'W. 25th St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '26-9'},
        {dir: 'south', id: '24-9'},
        {dir: 'east', id: '25-8'},
        {dir: 'west', id: '25-10'},
      ],
    },

    {
      id: '24-9',
      coord: [],
      name: 'W. 24th St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '25-9'},
        {dir: 'south', id: '23-9'},
        {dir: 'east', id: '24-8'},
        {dir: 'west', id: '24-10'},
      ],
    },

    {
      id: '23-9',
      coord: [],
      name: 'W. 23rd St. and 9th Ave.',
      desc: `There is a lunchonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '24-9'},
        {dir: 'south', id: '22-9'},
        {dir: 'east', id: '23-8'},
        {dir: 'west', id: '23-10'},
      ],
    },

    {
      id: '22-9',
      coord: [],
      name: 'W. 22nd St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '23-9'},
        {dir: 'south', id: '21-9'},
        {dir: 'east', id: '22-8'},
        {dir: 'west', id: '22-10'},
      ],
    },

    {
      id: '21-9',
      coord: [],
      name: 'W. 21st St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '22-9'},
        {dir: 'south', id: '20-9'},
        {dir: 'east', id: '21-8'},
        {dir: 'west', id: '21-10'},
      ],
      
    },
    {
      id: '20-9',
      coord: [],
      name: 'W. 20th St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '21-9'},
        {dir: 'south', id: '19-9'},
        {dir: 'east', id: '20-8'},
        {dir: 'west', id: '20-10'},
      ],
    },

    {
      id: '19-9',
      coord: [],
      name: 'W. 19th St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '20-9'},
        {dir: 'south', id: '18-9'},
        {dir: 'east', id: '19-8'},
        {dir: 'west', id: '19-10'},
      ],
    },

    {
      id: '18-9',
      coord: [],
      name: 'W. 18th St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '19-9'},
        {dir: 'south', id: '17-9'},
        {dir: 'east', id: '18-8'},
        {dir: 'west', id: '18-10'},
      ],
    },
    {
      id: '17-9',
      coord: [],
      name: 'W. 17th St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '18-9'},
        {dir: 'south', id: '16-9'},
        {dir: 'east', id: '17-8'},
        {dir: 'west', id: '17-10'},
      ],
    },
    {
      id: '16-9',
      coord: [],
      name: 'W. 16th St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'south', id: '15-9'},
        {dir: 'east', id: '16-8'},
        {dir: 'west', id: '16-10'},
        {dir: 'north', id: '17-9'}
      ],
    },
    {
      id: '15-9',
      coord: [],
      name: 'W. 15th St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '16-9'},
        {dir: 'south', id: '14-9'},
        {dir: 'east', id: '15-8'},
        {dir: 'west', id: '15-10'},
      ],
    },
    {
      id: '14-9',
      coord: [],
      name: 'W. 14th St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '15-9'},
        {dir: 'south', id: '13-9'},
        {dir: 'east', id: '14-8'},
        {dir: 'west', id: '14-10'},
      ],
    },
        //8th Ave
    {
      id: '33-8',
      coord: [],
      name: 'W. 33rd St. and 8th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '34-8'},
        {dir: 'south', id: '31-8'},
        {dir: 'east', id: '33-7'},
        {dir: 'west', id: '33-9'}
      ],
    },
    {
      id: '31-8',
      coord: [],
      name: 'W. 31st St. and 8th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '33-8'},
        {dir: 'south', id: '30-8'},
        {dir: 'east', id: '31-7'},
        {dir: 'west', id: '31-9'},
      ],
    },
    {
      id: '30-8',
      coord: [],
      name: 'W. 30th St. and 8th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '31-8'},
        {dir: 'south', id: '29-8'},
        {dir: 'east', id: '30-7'},
        {dir: 'west', id: '30-9'},
      ],
    },
    {
      id: '29-8',
      coord: [],
      name: 'W. 29th St. and 8th Ave.',
      desc: `There is a pizzeria here.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '30-8'},
        {dir: 'south', id: '28-8'},
        {dir: 'east', id: '29-7'},
        {dir: 'west', id: '29-9'},
      ],
    },
    {
      id: '28-8',
      coord: [],
      name: 'W. 28th St. and 8th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '29-8'},
        {dir: 'south', id: '27-8'},
        {dir: 'east', id: '28-7'},
        {dir: 'west', id: '28-9'},
      ],
    },
    {
      id: '27-8',
      coord: [],
      name: 'W. 27th St. and 8th Ave.',
      desc: `You are at the edge of a vast tract of buildings all built to the same characterless specs, a monument ot the bureaucratic mind.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '28-8'},
        {dir: 'south', id: '26-8'},
        {dir: 'east', id: '27-7'},
        {dir: 'west', block: `You can't go that way.`},
      ],
    },
    {
      id: '26-8',
      coord: [],
      name: 'W. 26th St. and 8th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '27-8'},
        {dir: 'south', id: '25-8'},
        {dir: 'east', id: '26-7'},
        {dir: 'west', id: '26-9'},
      ],
    },
    {
      id: '25-8',
      coord: [],
      name: 'W. 25th St. and 8th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '26-8'},
        {dir: 'south', id: '24-8'},
        {dir: 'east', id: '24-7'},
        {dir: 'west', id: '24-9'},
      ],
    },
    {
      id: '24-8',
      coord: [],
      name: 'W. 24th St. and 8th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '25-8'},
        {dir: 'south', id: '23-8'},
        {dir: 'east', id: '24-7'},
        {dir: 'west', id: '24-9'},
      ],
    },
    {
      id: '23-8',
      coord: [],
      name: 'W. 23th St. and 8th Ave.',
      desc: `The 23 ST-8 AV Station entrance is at this corner.`,
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '24-8'},
        {dir: 'south', id: '22-8'},
        {dir: 'east', id: '23-7'},
        {dir: 'west', id: '23-9'},
      ],
    },
    {
      id: '22-8',
      coord: [],
      name: 'W. 22nd St. and 8th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '23-8'},
        {dir: 'south', id: '21-8'},
        {dir: 'east', id: '22-7'},
        {dir: 'west', id: '22-9'},
      ],
    },
    {
      id: '21-8',
      coord: [],
      name: 'W. 21st St. and 8th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '22-8'},
        {dir: 'south', id: '20-8'},
        {dir: 'east', id: '21-7'},
        {dir: 'west', id: '21-9'},
      ],
    },
    {
      id: '20-8',
      coord: [],
      name: 'W. 20th St. and 8th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '21-8'},
        {dir: 'south', id: '19-8'},
        {dir: 'east', id: '20-7'},
        {dir: 'west', id: '20-9'},
      ],
    },
    {
      id: '19-8',
      coord: [],
      name: 'W. 19th St. and 8th Ave.',
      desc: `There is a lunchonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '20-8'},
        {dir: 'south', id: '18-8'},
        {dir: 'east', id: '19-7'},
        {dir: 'west', id: '19-9'},
      ],
    },
    {
      id: '18-8',
      coord: [],
      name: 'W. 18th St. and 8th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '17-8'},
        {dir: 'south', id: '17-8'},
        {dir: 'east', id: '16-7'},
        {dir: 'west', id: '16-9'},
      ],
    },
    {
      id: '17-8',
      coord: [],
      name: 'W. 17th St. and 8th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '18-8'},
        {dir: 'south', id: '16-8'},
        {dir: 'east', id: '17-7'},
        {dir: 'west', id: '17-9'},
      ],
    },
    {
      id: '16-8',
      coord: [],
      name: 'W. 16th St. and 8th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '17-8'},
        {dir: 'south', id: '15-8'},
        {dir: 'east', id: '16-7'},
        {dir: 'west', id: '16-9'},
      ],
    },
    {
      id: '15-8',
      coord: [],
      name: 'W. 15th St. and 8th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '16-8'},
        {dir: 'south', id: '14-8'},
        {dir: 'east', id: '15-7'},
        {dir: 'west', id: '15-9'},
      ],
    },
    {
      id: '14-8',
      coord: [],
      name: 'W. 14th St. and 8th Ave.',
      desc: `The 14 ST-8 AV Station entrance is at this corner.`,
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '15-8'},
        {dir: 'south', id: '13'},
        {dir: 'east', id: '14-7'},
        {dir: 'west', id: '14-9'},
      ],
    },
        //7th Ave
    {
      id: '33-7',
      coord: [],
      name: 'W. 33rd St. and 7th Ave.',
      desc: `You face the block-long staircase and colonnade of the main Post Office. The famous motto is carved in stone all the way from 32nd Street To 33rd: NEITHER SNOW NOR RAIN NOR HEAT NOR GLOOM OF NIGHT STAYS THESE COURIERS FROM THE SWIFT COMPLETION OF THEIR APPOINTED ROUNDS.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '34-7'},
        {dir: 'south', id: '32-7'},
        {dir: 'east', id: '33-amer'},
        {dir: 'west', id: '33-8'},
      ],
    },
    {
      id: '32-7',
      coord: [],
      name: 'W. 32nd St. and 7th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '33-7'},
        {dir: 'south', id: '31-7'},
        {dir: 'east', id: '32-amer'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '31-7',
      coord: [],
      name: '31st St. and 7th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '32-7'},
        {dir: 'south', id: '30-7'},
        {dir: 'east', id: '31-amer'},
        {dir: 'west', id: '31-8'},
      ],
    },
    {
      id: '30-7',
      coord: [],
      name: 'W. 30th St. and 7th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '31-7'},
        {dir: 'south', id: '29-7'},
        {dir: 'east', id: '30-amer'},
        {dir: 'west', id: '30-8'},
      ],
    },
    {
      id: '29-7',
      coord: [],
      name: '29th St. and 7th Ave.',
      desc: `There is a pizzeria here.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '30-7'},
        {dir: 'south', id: '28-7'},
        {dir: 'east', id: '29-amer'},
        {dir: 'west', id: '29-8'},
      ],
    },
    {
      id: '28-7',
      coord: [],
      name: '28th St. and 7th Ave.',
      desc: `The 28 ST-7 AV Station entrance is at this corner`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '29-7'},
        {dir: 'south', id: '27-7'},
        {dir: 'east', id: '28-amer'},
        {dir: 'west', id: '28-8'},
      ],
    },
    {
      id: '27-7',
      coord: [],
      name: 'W. 27th St. and 7th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '28-7'},
        {dir: 'south', id: '26-7'},
        {dir: 'east', id: '27-amer'},
        {dir: 'west', id: '27-8'},
      ],
    },
    {
      id: '26-7',
      coord: [],
      name: 'W. 26th St. and 7th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '27-7'},
        {dir: 'south', id: '25-7'},
        {dir: 'east', id: '26-amer'},
        {dir: 'west', id: '26-8'},
      ],
    },
    {
      id: '25-7',
      coord: [],
      name: 'W. 25th St. and 7th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '26-7'},
        {dir: 'south', id: '24-7'},
        {dir: 'east', id: '25-amer'},
        {dir: 'west', id: '25-8'},
      ],
    },
    {
      id: '24-7',
      coord: [],
      name: 'W. 24th St. and 7th Ave.',
      desc: `There is a lunchonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '25-7'},
        {dir: 'south', id: '23-7'},
        {dir: 'east', id: '24-amer'},
        {dir: 'west', id: '24-8'},
      ],
    },
    {
      id: '23-7',
      coord: [],
      name: 'W. 23rd St. and 7th Ave.',
      desc: `The 23 ST-7 AV Station entrance is at this corner`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '24-7'},
        {dir: 'south', id: '22-7'},
        {dir: 'east', id: '23-amer'},
        {dir: 'west', id: '23-8'},
      ],
    },
    {
      id: '22-7',
      coord: [],
      name: 'W. 22nd St. and 7th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '23-7'},
        {dir: 'south', id: '21-7'},
        {dir: 'east', id: '22-amer'},
        {dir: 'west', id: '22-8'},
      ],
    },
    {
      id: '21-7',
      coord: [],
      name: 'W. 21st St. and 7th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '21-7'},
        {dir: 'south', id: '20-7'},
        {dir: 'east', id: '21-amer'},
        {dir: 'west', id: '21-8'},
      ],
    },
    {
      id: '20-7',
      coord: [],
      name: 'W. 20th St. and 7th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '21-7'},
        {dir: 'south', id: '19-7'},
        {dir: 'east', id: '20-amer'},
        {dir: 'west', id: '20-8'},
      ],
    },
    {
      id: '19-7',
      coord: [],
      name: 'W. 19th St. and 7th Ave.',
      desc: `There is a lunchonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '20-7'},
        {dir: 'south', id: '18-7'},
        {dir: 'east', id: '19-amer'},
        {dir: 'west', id: '19-8'},
      ],
    },
    {
      id: '18-7',
      coord: [],
      name: 'W. 18th St. and 7th Ave.',
      desc: `The 18 ST-7 AV Station entrance is at this corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '19-7'},
        {dir: 'south', id: '17-7'},
        {dir: 'east', id: '18-amer'},
        {dir: 'west', id: '18-8'},
      ],
    },
    {
      id: '17-7',
      coord: [],
      name: 'W. 17th St. and 7th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '18-7'},
        {dir: 'south', id: '16-7'},
        {dir: 'east', id: '17-amer'},
        {dir: 'west', id: '17-8'},
      ],
    },
    {
      id: '16-7',
      coord: [],
      name: '16th St. and 7th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '17-7'},
        {dir: 'south', id: '15-7'},
        {dir: 'east', id: '16-amer'},
        {dir: 'west', id: '16-8'},
      ],
    },
    {
      id: '15-7',
      coord: [],
      name: '15th St. and 7th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '15-7'},
        {dir: 'south', id: '14-7'},
        {dir: 'east', id: '14-amer'},
        {dir: 'west', id: '14-8'},
      ],
    },
    {
      id: '14-7',
      coord: [],
      name: '14th St. and 7th Ave.',
      desc: `The 14 ST-7 AV Station entrance is at this corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '15-7'},
        {dir: 'south', id: '13-7'},
        {dir: 'east', id: '14-amer'},
        {dir: 'west', id: '14-8'},
      ],
    },
    //6th Ave/Ave. of America
    {
      id: '34-amer',
      coord: [],
      name: 'W. 34th St. and Ave. of America',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-amer'},
        {dir: 'south', id: 'broa-amer'},
        {dir: 'east', id: '34-5'},
        {dir: 'west', id: '34-broa'},
      ]
    },
    {
      id: '33-amer',
      coord: [],
      name: 'W. 33rd St. and Ave. of America',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broa-amer'},
        {dir: 'south', id: '32-amer'},
        {dir: 'east', id: '33-broa'},
        {dir: 'west', id: '33-7'},
      ],
    },
    {
      id: '32-amer',
      coord: [],
      name: 'W. 32nd St. and Ave. of America',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '33-amer'},
        {dir: 'south', id: '31-amer'},
        {dir: 'east', id: '32-broa'},
        {dir: 'west', id: '32-7'},
      ],
    },
    {
      id: '31-amer',
      coord: [],
      name: 'W. 31st St. and Ave. of America',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '32-amer'},
        {dir: 'south', id: '30-amer'},
        {dir: 'east', id: '31-broa'},
        {dir: 'west', id: '31-7'},
      ],
    },
    {
      id: '30-amer',
      coord: [],
      name: 'W. 30th St. and Ave. of America',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '31-amer'},
        {dir: 'south', id: '29-amer'},
        {dir: 'east', id: '30-broa'},
        {dir: 'west', id: '30-7'},
      ],
    },
    {
      id: '29-amer',
      coord: [],
      name: 'W. 29th St. and Ave. of America',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '30-amer'},
        {dir: 'south', id: '28-amer'},
        {dir: 'east', id: '29-broa'},
        {dir: 'west', id: '29-7'},
      ],
    },
    {
      id: '28-amer',
      coord: [],
      name: 'W. 28th St. and Ave. of America',
      desc: `A small forest of potted trees and shrubs line both sides of Sixth Ave. Palmettos, ferns, philodendrons and other emigrants from the tropics enjoy their last tasted of summer sunlight before reporting to duty in the lobbies, offices and restaurants of the city.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '29-amer'},
        {dir: 'south', id: '27-amer'},
        {dir: 'east', id: '28-broa'},
        {dir: 'west', id: '28-7'},
      ],
    },
    {
      id: '27-amer',
      coord: [],
      name: 'W. 27th St. and Ave. of America',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '28-amer'},
        {dir: 'south', id: '26-amer'},
        {dir: 'east', id: '27-broa'},
        {dir: 'west', id: '27-7'},
      ],
    },
    {
      id: '26-amer',
      coord: [],
      name: 'W. 26th St. and Ave. of America',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '27-amer'},
        {dir: 'south', id: '25-amer'},
        {dir: 'east', id: '26-broa'},
        {dir: 'west', id: '26-7'},
      ],
    },
    {
      id: '25-amer',
      coord: [],
      name: 'W. 25th St. and Ave. of America',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '26-amer'},
        {dir: 'south', id: '24-amer'},
        {dir: 'east', id: '25-broa'},
        {dir: 'west', id: '25-7'},
      ],
    },
    {
      id: '24-amer',
      coord: [],
      name: '24th St. and Ave. of America',
      desc: `There is a pizeria here.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '25-amer'},
        {dir: 'south', id: '23-amer'},
        {dir: 'east', id: '24-broa'},
        {dir: 'west', id: '24-7'},
      ],
    },
    {
      id: '23-amer',
      coord: [],
      name: 'W. 23rd St. and Ave. of America',
      desc: `The 23 ST-6 AV Station entrance is at this corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '24-amer'},
        {dir: 'south', id: '22-amer'},
        {dir: 'east', id: '23-5'},
        {dir: 'west', id: '23-7'},
      ],
    },
    {
      id: '22-amer',
      coord: [],
      name: 'W. 22nd St. and Ave. of America',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '23-amer'},
        {dir: 'south', id: '21-amer'},
        {dir: 'east', id: '22-5'},
        {dir: 'west', id: '22-7'},
      ],
    },
    {
      id: '21-amer',
      coord: [],
      name: 'W. 21st St. and Ave. of America',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '22-amer'},
        {dir: 'south', id: '20-amer'},
        {dir: 'east', id: '21-5'},
        {dir: 'west', id: '21-7'},
      ],
      
    },
    {
      id: '20-amer',
      coord: [],
      name: 'W. 20th St. and Ave. of America',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'south', id: '19-amer'},
        {dir: 'east', id: '20-5'},
        {dir: 'west', id: '20-7'},
        {dir: 'north', id: '21-amer'
        }
      ],
    },
    {
      id: '19-amer',
      coord: [],
      name: 'W. 19th St. and Ave. of America',
      desc: `You can see a large brownstone at 25 W. 19th St. It is just a few steps from the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '20-amer'},
        {dir: 'south', id: '18-amer'},
        {dir: 'east', id: '19-5'},
        {dir: 'west', id: '19-7'},
        //{dir: ['brownstone', '25W'], id: '25w-19st'}
      ],
    },
    {
      id: '18-amer',
      coord: [],
      name: 'W. 18th St. and Ave. of America',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '19-amer'},
        {dir: 'south', id: '17-amer'},
        {dir: 'east', id: '18-5'},
        {dir: 'west', id: '18-7'},
      ],
    },
    {
      id: '17-amer',
      coord: [],
      name: 'W. 17th St. and Ave. of America',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '18-amer'},
        {dir: 'south', id: '16-amer'},
        {dir: 'east', id: '17-5'},
        {dir: 'west', id: '17-7'},
      ],
    },
    {
      id: '16-amer',
      coord: [],
      name: 'W. 16th St. and Ave. of America',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '17-amer'},
        {dir: 'south', id: '15-amer'},
        {dir: 'east', id: '16-5'},
        {dir: 'west', id: '16-7'},
      ],
    },
    {
      id: '15-amer',
      coord: [],
      name: 'W. 15th St. and Ave. of America',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '16-amer'},
        {dir: 'south', id: '14-amer'},
        {dir: 'east', id: '15-5'},
        {dir: 'west', id: '15-7'},
      ],
    },
    {
      id: '14-amer',
      coord: [],
      name: 'W. 14th St. and Ave. of America',
      desc: `The 14 ST-6 AV Station entrance is at this corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '15-amer'},
        {dir: 'south', id: '13-amer'},
        {dir: 'east', id: '14-5'},
        {dir: 'west', id: '14-7'},
      ],
    },
        //Broadway
    {
      id: '34-broa',
      coord: [],
      name: 'W. 34th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-broa'},
        {dir: 'south', id: 'broa-amer'},
        {dir: 'east', id: '34-amer'},
        {dir: 'west', id: '34-7'},
      ]
    },        
    {
      id: 'broa-amer',
      coord: [],
      name: 'Broadway and Ave. of America',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '34-amer'},
        {dir: 'south', id: '33-amer'},
        {dir: 'east', id: '33-broa'},
        {dir: 'west', id: '34-amer'}
      ],
    },
    {
      id: '33-broa',
      coord: [],
      name: 'W. 33rd St. and Broadway',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broa-amer'},
        {dir: 'south', id: '32-broa'},
        {dir: 'east', id: '33-5'},
        {dir: 'west', id: '33-amer'}
      ],
    },
    {
      id: '32-broa',
      coord: [],
      name: 'W. 32nd St. and Broadway',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '33-broa'},
        {dir: 'south', id: '31-broa'},
        {dir: 'east', id: '32-5'},
        {dir: 'west', id: '32-amer'},
      ],
    },
    {
      id: '31-broa',
      coord: [],
      name: 'W. 31st St. and Broadway',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '32-broa'},
        {dir: 'south', id: '30-broa'},
        {dir: 'east', id: '31-5'},
        {dir: 'west', id: '31-amer'},
      ],
    },
    {
      id: '30-broa',
      coord: [],
      name: 'W. 30th St. and Broadway',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '31-broa'},
        {dir: 'south', id: '29-broa'},
        {dir: 'east', id: '30-5'},
        {dir: 'west', id: '30-amer'},
      ],
    },
    {
      id: '29-broa',
      coord: [],
      name: 'W. 29th St. and Broadway',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '30-broa'},
        {dir: 'south', id: '28-broa'},
        {dir: 'east', id: '29-5'},
        {dir: 'west', id: '29-amer'},
      ],
    },
    {
      id: '28-broa',
      coord: [],
      name: 'W. 28th St. and Broadway',
      desc: `The 28 ST-Broadway Station entrance is at this corner.`,
      isStreet: true,
      exits: [
        {dir: 'south', id: '27-broa'},
        {dir: 'east', id: '28-5'},
        {dir: 'west', id: '28-amer'},
        {dir: 'north', id: '29-broa'
        }
      ],
    },
    {
      id: '27-broa',
      coord: [],
      name: 'W. 27th St. and Broadway',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '28-broa'},
        {dir: 'south', id: '26-broa'},
        {dir: 'east', id: '27-5'},
        {dir: 'west', id: '27-amer'},
      ],
    },
    {
      id: '26-broa',
      coord: [],
      name: 'W. 26th St. and Broadway',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '27-broa'},
        {dir: 'south', id: '25-broa'},
        {dir: 'east', id: '26-5'},
        {dir: 'west', id: '26-amer'},
      ],
    },
    {
      id: '25-broa',
      coord: [],
      name: 'W. 25th St. and Broadway',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '26-broa'},
        {dir: 'south', id: '24-broa'},
        {dir: 'east', id: '25-5'},
        {dir: 'west', id: '25-amer'},
      ],
    },
    {
      id: '24-broa',
      coord: [],
      name: 'W. 24th St. and Broadway',
      desc: `From the edge of the mini-woodland of Madison Square Park there is a splendid view of the entire aspiring shaft of the Empire State Building.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '25-broa'},
        {dir: 'south', id: '5-broa'},
        {dir: 'east', id: '24-5'},
        {dir: 'west', id: '24-amer'},
      ]
    },
    {
      id: '5-broa',
      coord: [],
      name: '5th Ave. and Broadway',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '24-5'},
        {dir: 'south', id: '23-5'},
        {dir: 'east', id: '23-broa'},
        {dir: 'west', id: '24-broa'},
      ],
    },
    {
      id: '23-broa',
      coord: [],
      name: 'W. 23rd St. and Broadway',
      desc: `The 23 ST-Broadway Station entrance is at this corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '24-5'},
        {dir: 'south', id: '22-broa'},
        {dir: 'east', id: '23-madi'},
        {dir: 'west', id: '23-5'},
      ],
    },
    {
      id: '22-broa',
      coord: [],
      name: 'W. 22nd St. and Broadway',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '23-broa'},
        {dir: 'south', id: '21-broa'},
        {dir: 'east', id: '22-park'},
        {dir: 'west', id: '22-5'},
      ],
    },
    {
      id: '21-broa',
      coord: [],
      name: 'W. 21st St. and Broadway',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '22-broa'},
        {dir: 'south', id: '20-broa'},
        {dir: 'east', id: '21-park'},
        {dir: 'west', id: '21-5'},
      ],
    },
    {
      id: '20-broa',
      coord: [],
      name: 'W. 20th St. and Broadway',
      desc: `There is a luncheonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '21-broa'},
        {dir: 'south', id: '19-broa'},
        {dir: 'east', id: '20-park'},
        {dir: 'west', id: '20-5'},
      ],
    },
    {
      id: '19-broa',
      coord: [],
      name: 'W. 19th St. and Broadway',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '20-broa'},
        {dir: 'south', id: '18-broa'},
        {dir: 'east', id: '19-park'},
        {dir: 'west', id: '19-5'},
      ],
    },
    {
      id: '18-broa',
      coord: [],
      name: 'W. 18th St. and Broadway',
      desc: `The upper end of Union Square Park is given over today to a farmer's market. The wooden bins are piled high with eggplants and tomatoes, sweet corn and fresh basil, whole-grain bread and eggs from jersey, cut flowers and potted plants.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '19-broa'},
        {dir: 'south', id: '17-broa'},
        {dir: 'east', id: '18-park'},
        {dir: 'west', id: '18-5'},
      ],
    },
    {
      id: '17-broa',
      coord: [],
      name: 'E. 17th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '18-broa'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '17-usqe'},
        {dir: 'west', id: '17-usqw'},
      ]
    },
    {
      id: '14-broa',
      coord: [],
      name: 'W. 14th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '13-broa'},
        {dir: 'east', id: '14-usqe'},
        {dir: 'west', id: '14-usqw'},
      ]
    },
        //5th Ave
    {
      id: '34-5',
      coord: [],
      name: 'W. 34th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-5'},
        {dir: 'south', id: '33-5'},
        {dir: 'east', id: '34-madi'},
        {dir: 'west', id: '34-amer'},
      ],
    },
    {
      id: '33-5',
      coord: [],
      name: 'W. 33rd St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '34-5'},
        {dir: 'south', id: '32-5'},
        {dir: 'east', id: '33-madi'},
        {dir: 'west', id: '33-broa'},
      ],
    },
    {
      id: '32-5',
      coord: [],
      name: 'W. 32nd St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '33-5'},
        {dir: 'south', id: '31-5'},
        {dir: 'east', id: '32-madi'},
        {dir: 'west', id: '32-broa'},
      ],
    },
    {
      id: '31-5',
      coord: [],
      name: 'W. 31st St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '32-5'},
        {dir: 'south', id: '30-5'},
        {dir: 'east', id: '31-madi'},
        {dir: 'west', id: '31-broa'},
      ],
    },
    {
      id: '30-5',
      coord: [],
      name: 'W. 30th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '31-5'},
        {dir: 'south', id: '29-5'},
        {dir: 'east', id: '30-madi'},
        {dir: 'west', id: '30-broa'},
      ],
    },
    {
      id: '29-5',
      coord: [],
      name: 'W. 29th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '30-5'},
        {dir: 'south', id: '28-5'},
        {dir: 'east', id: '29-madi'},
        {dir: 'west', id: '29-broa'},
      ],
    },
    {
      id: '28-5',
      coord: [],
      name: 'W. 28th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '29-5'},
        {dir: 'south', id: '27-5'},
        {dir: 'east', id: '28-madi'},
        {dir: 'west', id: '28-broa'},
      ],
    },
    {
      id: '27-5',
      coord: [],
      name: 'W. 27th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '28-5'},
        {dir: 'south', id: '26-5'},
        {dir: 'east', id: '27-madi'},
        {dir: 'west', id: '27-broa'},
      ],
    },
    {
      id: '26-5',
      coord: [],
      name: 'W. 26th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '27-5'},
        {dir: 'south', id: '25-5'},
        {dir: 'east', id: '26-madi'},
        {dir: 'west', id: '26-broa'},
      ],
    },
    {
      id: '25-5',
      coord: [],
      name: 'W. 25th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '26-5'},
        {dir: 'south', id: '24-5'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '25-broa'},
      ],
    },
    {
      id: '24-5',
      coord: [],
      name: 'W. 24th St. and 5th Ave.',
      desc: `There is a pizzeria here.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '25-5'},
        {dir: 'south', id: '5-broa'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '24-broa'},

      ],
    },
    {
      id: '23-5',
      coord: [],
      name: '23rd St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '5-broa'},
        {dir: 'south', id: '22-5'},
        {dir: 'east', id: '23-broa'},
        {dir: 'west', id: '23-amer'},
      ],
    },
    {
      id: '22-5',
      coord: [],
      name: 'W. 22nd St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '23-5'},
        {dir: 'south', id: '21-5'},
        {dir: 'east', id: '22-broa'},
        {dir: 'west', id: '22-amer'},
      ],
    },
    {
      id: '21-5',
      coord: [],
      name: 'W. 21st St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '22-5'},
        {dir: 'south', id: '20-5'},
        {dir: 'east', id: '21-broa'},
        {dir: 'west', id: '21-amer'},
      ],
    },
    {
      id: '20-5',
      coord: [],
      name: 'W. 20th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '21-5'},
        {dir: 'south', id: '19-5'},
        {dir: 'east', id: '20-broa'},
        {dir: 'west', id: '20-amer'},
      ],
    },
    {
      id: '19-5',
      coord: [],
      name: 'W. 19th St. and 5th Ave.',
      desc: `You can see a large brownstone at 25 W. 19th St. It is just a few steps from the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '20-5'},
        {dir: 'south', id: '18-5'},
        {dir: 'east', id: '19-broa'},
        {dir: 'west', id: '19-amer'},
        //exit for the brownstone
      ],
    },
    {
      id: '18-5',
      coord: [],
      name: 'W. 18th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '19-5'},
        {dir: 'south', id: '17-5'},
        {dir: 'east', id: '18-broa'},
        {dir: 'west', id: '18-amer'},
      ],
    },
    {
      id: '17-5',
      coord: [],
      name: 'W. 17th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '18-5'},
        {dir: 'south', id: '16-5'},
        {dir: 'east', id: '17-usqw'},
        {dir: 'west', id: '17-amer'},
      ],
    },
    {
      id: '16-5',
      coord: [],
      name: 'W. 16th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '17-5'},
        {dir: 'south', id: '15-5'},
        {dir: 'east', id: '16-usqw'},
        {dir: 'west', id: '16-amer'},
      ],
    },
    {
      id: '15-5',
      coord: [],
      name: 'W. 15th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '16-5'},
        {dir: 'south', id: '14-5'},
        {dir: 'east', id: '15-usqw'},
        {dir: 'west', id: '15-amer'},
      ],
    },
    {
      id: '14-5',
      coord: [],
      name: 'W. 14th St. and 5th Ave.',
      desc: `You stop to admire the imaginar living rooms in the three windows of a furniture store. They are furnished in the highly traditional bad tast of the quiz program WHEEL OF FORTUNE`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '15-5'},
        {dir: 'south', id: '13-5'},
        {dir: 'east', id: '14-usqw'},
        {dir: 'west', id: '14-amer'},
      ],
    },
        //Madison Ave
    {
      id: '34-madi',
      coord: [],
      name: 'E. 34th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-madi'},
        {dir: 'south', id: '33-madi'},
        {dir: 'east', id: '34-park'},
        {dir: 'west', id: '34-5'},
      ],
    },
    {
      id: '33-madi',
      coord: [],
      name: 'E. 33rd St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '34-madi'},
        {dir: 'south', id: '32-madi'},
        {dir: 'east', id: '33-park'},
        {dir: 'west', id: '33-5'},
      ],
    },
    {
      id: '32-madi',
      coord: [],
      name: 'E. 32nd St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '33-madi'},
        {dir: 'south', id: '31-madi'},
        {dir: 'east', id: '32-park'},
        {dir: 'west', id: '32-5'},
      ],
    },
    {
      id: '31-madi',
      coord: [],
      name: 'E. 31st St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '32-madi'},
        {dir: 'south', id: '30-madi'},
        {dir: 'east', id: '31-park'},
        {dir: 'west', id: '31-5'},
      ],
    },
    {
      id: '30-madi',
      coord: [],
      name: 'E. 30th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '31-madi'},
        {dir: 'south', id: '29-madi'},
        {dir: 'east', id: '30-park'},
        {dir: 'west', id: '30-5'},
      ],
    },
    {
      id: '29-madi',
      coord: [],
      name: 'E. 29th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '30-madi'},
        {dir: 'south', id: '28-madi'},
        {dir: 'east', id: '29-park'},
        {dir: 'west', id: '29-5'},
      ],
    },
    {
      id: '28-madi',
      coord: [],
      name: 'E. 28th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '29-madi'},
        {dir: 'south', id: '27-madi'},
        {dir: 'east', id: '28-park'},
        {dir: 'west', id: '28-5'},
      ],
    },
    {
      id: '27-madi',
      coord: [],
      name: 'E. 27th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '28-madi'},
        {dir: 'south', id: '26-madi'},
        {dir: 'east', id: '27-park'},
        {dir: 'west', id: '27-5'},
      ],
    },
    {
      id: '26-madi',
      coord: [],
      name: 'E. 26th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '27-madi'},
        {dir: 'south', id: '25-madi'},
        {dir: 'east', id: '26-park'},
        {dir: 'west', id: '26-5'},
      ],
    },
    {
      id: '25-madi',
      coord: [],
      name: 'E. 25th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '26-madi'},
        {dir: 'south', id: '24-madi'},
        {dir: 'east', id: '25-park'},
        {dir: 'west', block: `You can't go that way.`}

      ],
    },
    {
      id: '24-madi',
      coord: [],
      name: 'E. 24th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '25-madi'},
        {dir: 'south', id: '23-madi'},
        {dir: 'east', id: '24-park'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '23-madi',
      coord: [],
      name: 'E. 23th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '24-madi'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '23-park'},
        {dir: 'west', id: '23-broa'},
      ],
    },
        //Union Square W. and E.
    {
      id: '17-usqw',
      coord: [],
      name: 'E. 17th St. and Union Square W.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '18-broa'},
        {dir: 'south', id: '16-usqw'},
        {dir: 'east', id: '17-broa'},
        {dir: 'west', id: '17-5'}
      ],
    },
    {
      id: '16-usqw',
      coord: [],
      name: 'E. 16th St. and Union Square W.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '17-usqw'},
        {dir: 'south', id: '15-usqw'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '16-5'}
      ],
    },
    {
      id: '15-usqw',
      coord: [],
      name: 'E. 15th St. and Union Square W.',
      desc: `Union Square Park is sealed up for renovations. A bronze George Washington mounted on a horse raises his right arm to give instructions to the hardhats who are laying the tiles of a new pavement.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '16-usqw'},
        {dir: 'south', id: '14-usqw'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '15-5'}
      ],
    },
    {
      id: '14-usqw',
      coord: [],
      name: 'E. 14th St. and Union Square W.',
      desc: `The 14 ST-Union Sq Station entrance is at this corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '15-usqw'},
        {dir: 'south', id: '13-univ'},
        {dir: 'east', id: '14-broa'},
        {dir: 'west', id: '14-5'}
      ],
    },
    {
      id: '17-usqe',
      coord: [],
      name: 'E. 17th St. and Union Square E.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '18-park'},
        {dir: 'south', id: '16-usqe'},
        {dir: 'east', id: '17-irvi'},
        {dir: 'west', id: '17-broa'}
      ],
    },
    {
      id: '16-usqe',
      coord: [],
      name: 'E. 16th St. and Union Square E.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '17-usqe'},
        {dir: 'south', id: '15-usqe'},
        {dir: 'east', id: '16-irvi'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '15-usqe',
      coord: [],
      name: 'E. 15th St. and Union Sqaure E.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '16-usqe'},
        {dir: 'south', id: '14-usqe'},
        {dir: 'east', id: '15-irvi'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '4-usqe',
      coord: [],
      name: '4th Ave. and Union Square E.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '15-usqe'},
        {dir: 'south', id: '14-usqe'},
        {dir: 'east', id: '14-4'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },

    //Park Ave
    {
      id: '34-park',
      coord: [],
      name: 'E. 34th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-park'},
        {dir: 'south', id: '33-park'},
        {dir: 'east', id: '34-lexi'},
        {dir: 'west', id: '34-madi'}
      ],
    },
    {
      id: '33-park',
      coord: [],
      name: 'E. 33rd St. and Park Ave.',
      desc: `The 33 ST-Park AV Station entrance is at this corner.`,
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '34-park'},
        {dir: 'south', id: '32-park'},
        {dir: 'east', id: '33-lexi'},
        {dir: 'west', id: '33-madi'}
      ],
    },
    {
      id: '32-park',
      coord: [],
      name: 'E. 32nd St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '33-park'},
        {dir: 'south', id: '31-park'},
        {dir: 'east', id: '32-lexi'},
        {dir: 'west', id: '32-madi'}
      ],
    },
    {
      id: '31-park',
      coord: [],
      name: 'E. 31st St. and Park Ave.',
      desc: `There is a lunchonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '32-park'},
        {dir: 'south', id: '30-park'},
        {dir: 'east', id: '31-lexi'},
        {dir: 'west', id: '31-madi'}
      ],
    },
    {
      id: '30-park',
      coord: [],
      name: 'E. 30th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '31-park'},
        {dir: 'south', id: '29-park'},
        {dir: 'east', id: '30-lexi'},
        {dir: 'west', id: '30-madi'}
      ],
    },
    {
      id: '29-park',
      coord: [],
      name: 'E. 29th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '30-park'},
        {dir: 'south', id: '28-park'},
        {dir: 'east', id: '29-lexi'},
        {dir: 'west', id: '29-madi'}
      ],
    },
    {
      id: '28-park',
      coord: [],
      name: 'E. 28th St. and Park Ave.',
      desc: `The 28 ST-Park AV Station entrance is at this corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '29-park'},
        {dir: 'south', id: '27-park'},
        {dir: 'east', id: '28-lexi'},
        {dir: 'west', id: '28-madi'}
      ],
    },
    {
      id: '27-park',
      coord: [],
      name: 'E. 27th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '28-park'},
        {dir: 'south', id: '26-park'},
        {dir: 'east', id: '27-lexi'},
        {dir: 'west', id: '27-madi'}
      ],
    },
    {
      id: '26-park',
      coord: [],
      name: 'E. 26th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '27-park'},
        {dir: 'south', id: '25-park'},
        {dir: 'east', id: '26-lexi'},
        {dir: 'west', id: '26-madi'}
      ],
    },
    {
      id: '25-park',
      coord: [],
      name: 'E. 25th St. and Park Ave.',
      desc: `There is a luncheonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '26-park'},
        {dir: 'south', id: '24-park'},
        {dir: 'east', id: '25-lexi'},
        {dir: 'west', id: '25-madi'}
      ],
    },
    {
      id: '24-park',
      coord: [],
      name: 'E. 24th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '25-park'},
        {dir: 'south', id: '23-park'},
        {dir: 'east', id: '24-lexi'},
        {dir: 'west', id: '24-madi'}
      ],
    },
    {
      id: '23-park',
      coord: [],
      name: 'E. 23rd St. and Park Ave.',
      desc: `The 23 ST-Park AV Station entrance is at this corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '24-park'},
        {dir: 'south', id: '22-park'},
        {dir: 'east', id: '23-lexi'},
        {dir: 'west', id: '23-madi'}
      ],
    },
    {
      id: '22-park',
      coord: [],
      name: 'E. 22nd St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '23-park'},
        {dir: 'south', id: '21-park'},
        {dir: 'east', id: '22-lexi'},
        {dir: 'west', id: '22-broa'}
      ],
    },
    {
      id: '21-park',
      coord: [],
      name: 'E. 21st St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '22-park'},
        {dir: 'south', id: '20-park'},
        {dir: 'east', id: '21-gpkw'},
        {dir: 'west', id: '21-broa'}
      ],
    },
    {
      id: '20-park',
      coord: [],
      name: 'E. 20th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '21-park'},
        {dir: 'south', id: '19-park'},
        {dir: 'east', id: '20-gpkw'},
        {dir: 'west', id: '20-broa'}
      ],
    },
    {
      id: '19-park',
      coord: [],
      name: 'E. 19th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '20-park'},
        {dir: 'south', id: '18-park'},
        {dir: 'east', id: '19-irvi'},
        {dir: 'west', id: '19-broa'}
      ],
    },
    {
      id: '18-park',
      coord: [],
      name: 'E. 18th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '19-park'},
        {dir: 'south', id: '17-usqe'},
        {dir: 'east', id: '18-irvi'},
        {dir: 'west', id: '18-broa'}
      ],
    },
        //Lexington Ave
    {
      id: '34-lexi',
      coord: [],
      name: 'E. 34th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-lexi'},
        {dir: 'south', id: '33-lexi'},
        {dir: 'east', id: '34-3'},
        {dir: 'west', id: '34-park'}
      ],
    },
    {
      id: '33-lexi',
      coord: [],
      name: 'E. 33rd St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '34-lexi'},
        {dir: 'south', id: '32-lexi'},
        {dir: 'east', id: '33-3'},
        {dir: 'west', id: '33-park'}
      ],
    },
    {
      id: '32-lexi',
      coord: [],
      name: 'E. 32nd St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '33-lexi'},
        {dir: 'south', id: '31-lexi'},
        {dir: 'east', id: '32-3'},
        {dir: 'west', id: '32-park'}
      ],
    },
    {
      id: '31-lexi',
      coord: [],
      name: 'E. 31st St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '32-lexi'},
        {dir: 'south', id: '30-lexi'},
        {dir: 'east', id: '31-3'},
        {dir: 'west', id: '31-park'}
      ],
    },
    {
      id: '30-lexi',
      coord: [],
      name: 'E. 30th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '31-lexi'},
        {dir: 'south', id: '29-lexi'},
        {dir: 'east', id: '30-3'},
        {dir: 'west', id: '30-park'}
      ],
    },
    {
      id: '29-lexi',
      coord: [],
      name: 'E. 29th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '30-lexi'},
        {dir: 'south', id: '28-lexi'},
        {dir: 'east', id: '29-3'},
        {dir: 'west', id: '29-park'}
      ],
    },
    {
      id: '28-lexi',
      coord: [],
      name: 'E. 28th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '29-lexi'},
        {dir: 'south', id: '27-lexi'},
        {dir: 'east', id: '28-3'},
        {dir: 'west', id: '28-park'}
      ],
    },
    {
      id: '27-lexi',
      coord: [],
      name: 'E. 27th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '28-lexi'},
        {dir: 'south', id: '26-lexi'},
        {dir: 'east', id: '27-3'},
        {dir: 'west', id: '27-park'}
      ],
    },
    {
      id: '26-lexi',
      coord: [],
      name: 'E. 26th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '27-lexi'},
        {dir: 'south', id: '25-lexi'},
        {dir: 'east', id: '26-3'},
        {dir: 'west', id: '26-park'}
      ],
    },
    {
      id: '25-lexi',
      coord: [],
      name: 'E. 25th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '26-lexi'},
        {dir: 'south', id: '24-lexi'},
        {dir: 'east', id: '25-3'},
        {dir: 'west', id: '25-park'}
      ],
    },
    {
      id: '24-lexi',
      coord: [],
      name: 'E. 24th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '25-lexi'},
        {dir: 'south', id: '23-lexi'},
        {dir: 'east', id: '24-3'},
        {dir: 'west', id: '24-park'}
      ],
    },
    {
      id: '23-lexi',
      coord: [],
      name: 'E. 23rd St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '24-lexi'},
        {dir: 'south', id: '22-lexi'},
        {dir: 'east', id: '23-3'},
        {dir: 'west', id: '23-park'}
      ],
    },
    {
      id: '22-lexi',
      coord: [],
      name: 'E. 22nd St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '23-lexi'},
        {dir: 'south', id: '21-lexi'},
        {dir: 'east', id: '22-3'},
        {dir: 'west', id: '22-park'}
      ],
    },
    {
      id: '21-lexi',
      coord: [],
      name: 'E. 21st St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '22-lexi'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '21-gpke'},
        {dir: 'west', id: '21-gpkw'}
      ],
    },
        //Gramercy Park E. and W.
    {
      id: '21-gpkw',
      coord: [],
      name: 'E. 21st St. and Gramercy Park W.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '20-gpkw'},
        {dir: 'east', id: '21-lexi'},
        {dir: 'west', id: '21-park'}
      ],
    },
    {
      id: '20-gpkw',
      coord: [],
      name: 'E. 20th St. and Gramercy Park W.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '21-gpkw'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '20-irvi'},
        {dir: 'west', id: '20-park'},

      ],
    },
    {
      id: '21-gpke',
      coord: [],
      name: 'E. 21st St. and Gramercy Park E.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '20-gpke'},
        {dir: 'east', id: '21-3'},
        {dir: 'west', id: '21-lexi'}
      ],
    },
    {
      id: '20-gpke',
      coord: [],
      name: 'E. 20th St. and Gramercy Park E.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '21-gpke'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '20-3'},
        {dir: 'west', id: '20-irvi'},
      ],
    },
        //Irving Pl.
    {
      id: '20-irvi',
      coord: [],
      name: 'E. 20th St. and Irving Pl.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '19-irvi'},
        {dir: 'east', id: '20-gpke'},
        {dir: 'west', id: '20-gpkw'}
      ],
    },
    {
      id: '19-irvi',
      coord: [],
      name: 'E. 19th St. and Irving Pl.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '20-irvi'},
        {dir: 'south', id: '18-irvi'},
        {dir: 'east', id: '19-3'},
        {dir: 'west', id: '19-park'}
      ],
    },
    {
      id: '18-irvi',
      coord: [],
      name: 'E. 18th St. and Irving Pl.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '19-irvi'},
        {dir: 'south', id: '17-irvi'},
        {dir: 'east', id: '18-3'},
        {dir: 'west', id: '18-park'}
      ],
    },
    {
      id: '17-irvi',
      coord: [],
      name: 'E. 17th St. and Irving Pl.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '18-irvi'},
        {dir: 'south', id: '16-irvi'},
        {dir: 'east', id: '17-3'},
        {dir: 'west', id: '17-usqe'}
      ],
    },
    {
      id: '16-irvi',
      coord: [],
      name: 'E. 16th St. and Irving Pl.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '17-irvi'},
        {dir: 'south', id: '15-irvi'},
        {dir: 'east', id: '16-3'},
        {dir: 'west', id: '16-usqe'}
      ],
    },
    {
      id: '15-irvi',
      coord: [],
      name: 'E. 15th St. and Irving Pl.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '16-irvi'},
        {dir: 'south', id: '14-irvi'},
        {dir: 'east', id: '15-3'},
        {dir: 'west', id: '15-usqe'}
      ],
    },
        //3rd Ave
    {
      id: '34-3',
      coord: [],
      name: 'E. 34th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-3'},
        {dir: 'south', id: '33-3'},
        {dir: 'east', id: '34-qout'},
        {dir: 'west', id: '34-lexi'}
      ],
    },
    {
      id: '33-3',
      coord: [],
      name: 'E. 33rd St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '34-3'},
        {dir: 'south', id: '32-3'},
        {dir: 'east', id: '33-2'},
        {dir: 'west', id: '33-lexi'}
      ],
    },
    {
      id: '32-3',
      coord: [],
      name: 'E. 32nd St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '33-3'},
        {dir: 'south', id: '31-3'},
        {dir: 'east', id: '32-2'},
        {dir: 'west', id: '32-lexi'}
      ],
    },
    {
      id: '31-3',
      coord: [],
      name: 'E. 31st St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '32-3'},
        {dir: 'south', id: '30-3'},
        {dir: 'east', id: '31-2'},
        {dir: 'west', id: '31-lexi'}
      ],
    },
    {
      id: '30-3',
      coord: [],
      name: 'E. 30th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '31-3'},
        {dir: 'south', id: '29-3'},
        {dir: 'east', id: '30-2'},
        {dir: 'west', id: '30-lexi'}
      ],
    },
    {
      id: '29-3',
      coord: [],
      name: 'E. 29th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '30-3'},
        {dir: 'south', id: '28-3'},
        {dir: 'east', id: '29-2'},
        {dir: 'west', id: '29-lexi'}
      ],
    },
    {
      id: '28-3',
      coord: [],
      name: 'E. 28th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '29-3'},
        {dir: 'south', id: '27-3'},
        {dir: 'east', id: '28-2'},
        {dir: 'west', id: '28-lexi'}
      ],
    },
    {
      id: '27-3',
      coord: [],
      name: 'E. 27th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '28-3'},
        {dir: 'south', id: '26-3'},
        {dir: 'east', id: '27-2'},
        {dir: 'west', id: '27-lexi'}
      ],
    },
    {
      id: '26-3',
      coord: [],
      name: 'E. 26th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '27-3'},
        {dir: 'south', id: '25-3'},
        {dir: 'east', id: '26-2'},
        {dir: 'west', id: '26-lexi'}
      ],
    },
    {
      id: '25-3',
      coord: [],
      name: 'E. 25th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '26-3'},
        {dir: 'south', id: '24-3'},
        {dir: 'east', id: '25-2'},
        {dir: 'west', id: '25-lexi'}
      ],
    },
    {
      id: '24-3',
      coord: [],
      name: 'E. 24th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '25-3'},
        {dir: 'south', id: '23-3'},
        {dir: 'east', id: '24-2'},
        {dir: 'west', id: '24-lexi'}
      ],
    },
    {
      id: '23-3',
      coord: [],
      name: 'E. 23rd St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '24-3'},
        {dir: 'south', id: '22-3'},
        {dir: 'east', id: '23-2'},
        {dir: 'west', id: '23-lexi'}
      ],
    },
    {
      id: '22-3',
      coord: [],
      name: 'E. 22nd St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '23-3'},
        {dir: 'south', id: '21-3'},
        {dir: 'east', id: '22-2'},
        {dir: 'west', id: '22-lexi'},

      ],
    },
    {
      id: '21-3',
      coord: [],
      name: 'E. 21st St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '22-3'},
        {dir: 'south', id: '20-3'},
        {dir: 'east', id: '21-2'},
        {dir: 'west', id: '21-gpke'}
      ],
    },
    {
      id: '20-3',
      coord: [],
      name: 'E. 20th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '21-3'},
        {dir: 'south', id: '19-3'},
        {dir: 'east', id: '20-2'},
        {dir: 'west', id: '20-gpke'}
      ],
    },
    {
      id: '19-3',
      coord: [],
      name: 'E. 19th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '20-3'},
        {dir: 'south', id: '18-3'},
        {dir: 'east', id: '19-2'},
        {dir: 'west', id: '19-irvi'}
      ],
    },
    {
      id: '18-3',
      coord: [],
      name: 'E. 18th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '19-3'},
        {dir: 'south', id: '17-3'},
        {dir: 'east', id: '18-2'},
        {dir: 'west', id: '18-irvi'}
      ],
    },
    {
      id: '17-3',
      coord: [],
      name: 'E. 17th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '18-3'},
        {dir: 'south', id: '16-3'},
        {dir: 'east', id: '17-ruth'},
        {dir: 'west', id: '17-irvi'}
      ],
    },
    {
      id: '16-3',
      coord: [],
      name: 'E. 16th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '17-3'},
        {dir: 'south', id: '15-3'},
        {dir: 'east', id: '16-ruth'},
        {dir: 'west', id: '16-irvi'}
      ],
    },
    {
      id: '15-3',
      coord: [],
      name: 'E. 15th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '16-3'},
        {dir: 'south', id: '14-3'},
        {dir: 'east', id: '15-ruth'},
        {dir: 'west', id: '15-irvi'}
      ],
    },
        //2nd Ave
    {
      id: '34-2',
      coord: [],
      name: 'E. 34th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-2'},
        {dir: 'south', id: '33-2'},
        {dir: 'east', id: '34-qin'},
        {dir: 'west', id: '34-qout'},
      ],
    },
    {
      id: '33-2',
      coord: [],
      name: 'E. 33rd St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '34-2'},
        {dir: 'south', id: '32-2'},
        {dir: 'east', id: '33-1'},
        {dir: 'west', id: '33-3'},
      ],
    },
    {
      id: '32-2',
      coord: [],
      name: 'E. 32nd St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '33-2'},
        {dir: 'south', id: '31-2'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '32-3'},

      ],
    },
    {
      id: '31-2',
      coord: [],
      name: 'E. 31st St. and 2nd Ave.',
      desc: `There is a lunchonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '32-2'},
        {dir: 'south', id: '30-2'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '31-3'},
      ],
    },
    {
      id: '30-2',
      coord: [],
      name: 'E. 30th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '31-2'},
        {dir: 'south', id: '29-2'},
        {dir: 'east', id: '30-1'},
        {dir: 'west', id: '30-3'},
      ],
    },
    {
      id: '29-2',
      coord: [],
      name: 'E. 29th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '30-2'},
        {dir: 'south', id: '28-2'},
        {dir: 'east', id: '29-1'},
        {dir: 'west', id: '29-3'},
      ],
    },
    {
      id: '28-2',
      coord: [],
      name: 'E. 28th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '29-2'},
        {dir: 'south', id: '27-2'},
        {dir: 'east', id: '26-28'},
        {dir: 'west', id: '28-3'},
      ],
    },
    {
      id: '26-28',
      coord: [],
      name: 'E. 26th St. and E. 28th St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '28-2'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '26-1'},
        {dir: 'west', id: '26-2'},
      ],
    },
    {
      id: '27-2',
      coord: [],
      name: 'E. 27th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '28-2'},
        {dir: 'south', id: '26-2'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '27-3'}

      ],
    },
    {
      id: '26-2',
      coord: [],
      name: 'E. 26th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '27-2'},
        {dir: 'south', id: '25-2'},
        {dir: 'east', id: '26-28'},
        {dir: 'west', id: '26-3'},
      ],
    },
    {
      id: '25-2',
      coord: [],
      name: 'E. 25th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '26-2'},
        {dir: 'south', id: '24-2'},
        {dir: 'east', id: '25-1'},
        {dir: 'west', id: '25-3'},
      ],
    },
    {
      id: '24-2',
      coord: [],
      name: 'E. 24th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '25-2'},
        {dir: 'south', id: '23-2'},
        {dir: 'east', id: '24-1'},
        {dir: 'west', id: '24-3'},
      ],
    },
    {
      id: '23-2',
      coord: [],
      name: 'E. 23rd St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '24-2'},
        {dir: 'south', id: '22-2'},
        {dir: 'east', id: '23-1'},
        {dir: 'west', id: '23-3'},
      ],
    },
    {
      id: '22-2',
      coord: [],
      name: 'E. 22nd St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '23-2'},
        {dir: 'south', id: '21-2'},
        {dir: 'east', id: '22-1'},
        {dir: 'west', id: '22-3'},
      ],
    },
    {
      id: '21-2',
      coord: [],
      name: 'E. 31st St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '22-2'},
        {dir: 'south', id: '20-2'},
        {dir: 'east', id: '21-1'},
        {dir: 'west', id: '21-3'},
      ],
    },
    {
      id: '20-2',
      coord: [],
      name: 'E. 20th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '21-2'},
        {dir: 'south', id: '19-2'},
        {dir: 'east', id: '20-1'},
        {dir: 'west', id: '20-3'},
      ],
    },
    {
      id: '19-2',
      coord: [],
      name: 'E. 19th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '20-2'},
        {dir: 'south', id: '18-2'},
        {dir: 'east', id: '19-1'},
        {dir: 'west', id: '19-3'},
      ],
    },
    {
      id: '18-2',
      coord: [],
      name: 'E. 18th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '19-2'},
        {dir: 'south', id: '17-2'},
        {dir: 'east', id: '18-1'},
        {dir: 'west', id: '18-3'},
      ],
    },
    {
      id: '17-2',
      coord: [],
      name: 'E. 17th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '18-2'},
        {dir: 'south', id: '15-2'},
        {dir: 'east', id: '17-perl'},
        {dir: 'west', id: '17-ruth'},
      ],
    },
    {
      id: '15-2',
      coord: [],
      name: 'E. 15th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '17-2'},
        {dir: 'south', id: '14-2'},
        {dir: 'east', id: '15-perl'},
        {dir: 'west', id: '15-ruth'},
      ],
    },
        //Rutherford St.
    {
      id: '17-ruth',
      coord: [],
      name: 'E. 17th St. and Rutherford St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '16-ruth'},
        {dir: 'east', id: '17-2'},
        {dir: 'west', id: '17-3'},
      ],
    },
    {
      id: '16-ruth',
      coord: [],
      name: 'E. 16th St. and Rutherford St.',
      desc: `Second Avenue slices the park into two almost exactly symmetrical halves. Both have the basic amenities of greenery, horizontal space, and benches, but only the western half of the park has a life-size bronze statue of peg-legged Peter Stuyvesant.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '17-ruth'},
        {dir: 'south', id: '15-ruth'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '16-3'},
      ],
    },
    {
      id: '15-ruth',
      coord: [],
      name: 'E. 15th St. and Rutherford Plaza',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '16-ruth'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '15-2'},
        {dir: 'west', id: '15-3'}
      ],
    },
        //nathan d perlman Plaza
    {
      id: '17-perl',
      coord: [],
      name: 'E. 17th St. and Perlman St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'south', id: 'nath-16'},
        {dir: 'east', id: '17-1'},
        {dir: 'west', id: '17-2'},
      ],
    },
    {
      id: '16-perl',
      coord: [],
      name: 'E. 16th St. and Perlman St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '17-ruth'},
        {dir: 'south', id: 'nath-15'},
        {dir: 'east', id: '16-1'},
      ],
    },
    {
      id: '16-perl',
      coord: [],
      name: 'E. 15th St. and Perlman St.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '16-ruth'},
        {dir: 'east', id: '15-1'},
        {dir: 'west', id: '15-2'},
      ],
    },
        //1st Ave
    {
      id: '34-1',
      coord: [],
      name: 'E. 34th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-1'},
        {dir: 'south', id: '33-1'},
        {dir: 'east', id: '34-fdrd'},
        {dir: 'west', id: '34-2'},
      ],
    },
    {
      id: '33-1',
      coord: [],
      name: 'E. 33rd St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '34-1'},
        {dir: 'south', id: '30-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '33-2'},
      ],
    },
    {
      id: '30-1',
      coord: [],
      name: 'E. 30th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '33-1'},
        {dir: 'south', id: '29-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '30-2'},
      ],
    },
    {
      id: '29-1',
      coord: [],
      name: 'E. 29th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '30-1'},
        {dir: 'south', id: '26-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '29-2'}
      ],
    },
    {
      id: '26-1',
      coord: [],
      name: 'E. 26th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '29-1'},
        {dir: 'south', id: '25-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '26-28'},
      ],
    },
    {
      id: '25-1',
      coord: [],
      name: 'E. 25th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '26-1'},
        {dir: 'south', id: '24-1'},
        {dir: 'east', id: '25-asse'},
        {dir: 'west', id: '25-2'}
      ],
    },
    {
      id: '24-1',
      coord: [],
      name: 'E. 24th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '25-1'},
        {dir: 'south', id: '23-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '24-2'}
      ],
    },
    {
      id: '23-1',
      coord: [],
      name: 'E. 23rd St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '24-1'},
        {dir: 'south', id: '22-1'},
        {dir: 'east', id: '23-asse'},
        {dir: 'west', id: '23-2'}
      ],
    },
    {
      id: '22-1',
      coord: [],
      name: 'E. 22nd St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '23-1'},
        {dir: 'south', id: '21-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '22-2'}
      ],
    },
    {
      id: '21-1',
      coord: [],
      name: 'E. 21st St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '22-1'},
        {dir: 'south', id: '20-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '21-2'}
      ],
    },
    {
      id: '20-1',
      coord: [],
      name: 'E. 20th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '21-1'},
        {dir: 'south', id: '19-1'},
        {dir: 'east', id: '20-fdrd'},
        {dir: 'west', id: '20-2'}
      ],
    },
    {
      id: '19-1',
      coord: [],
      name: 'E. 19th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '20-1'},
        {dir: 'south', id: '18-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '19-2'},
      ],
    },
    {
      id: '18-1',
      coord: [],
      name: 'E. 18th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '19-1'},
        {dir: 'south', id: '17-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '18-2'}
      ],
    },
    {
      id: '17-1',
      coord: [],
      name: 'E. 17th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '18-1'},
        {dir: 'south', id: '16-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '17-perl'}
      ],
    },
    {
      id: '16-1',
      coord: [],
      name: 'E. 16th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '17-1'},
        {dir: 'south', id: '15-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '16-perl'}
      ],
    },
    {
      id: '15-1',
      coord: [],
      name: 'W. 15th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '16-1'},
        {dir: 'south', id: '14-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '15-perl'}
      ],
    },
        //Misc streets E. side of map
    {
      id: '34-qout',
      coord: [],
      name: 'E. 34th St. and Queens Tunnel OUT',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-qout'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '34-2'},
        {dir: 'west', id: '34-3'}
      ],
    },
    {
      id: '34-qin',
      coord: [],
      name: 'E. 34th St. and Queens Tunnel IN',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-qin'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '34-1'},
        {dir: 'west', id: '34-2'}
      ],
    },
    {
      id: '35-qin',
      coord: [],
      name: 'E. 35th St. and Queens Tunnel IN',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '36-qin'},
        {dir: 'south', id: `34-qin`},
        {dir: 'east', id: '35-1'},
        {dir: 'west', id: '35-2'}
      ],
    },
    {
      id: '36-qin',
      coord: [],
      name: 'E. 36th St. and Queens Tunnel IN',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'qtin'},
        {dir: 'south', id: `35-qin`},
        {dir: 'east', id: '36-1'},
        {dir: 'west', id: '36-2'}
      ],
    },
    {
    id: 'qtin',
    coord: [],
    name: 'QUEENS TUNNEL IN',
    desc: ``,
    isStreet: true,
    exits: [
      {dir: 'north', block: `You can't go that way.`},
      {dir: 'south', id: '36-qin'},
      {dir: 'east', block: `You can't go that way.`},
      {dir: 'west', block: `You can't go that way.`}
    ],
  },
    {
      id: '34-fdrd',
      coord: [],
      name: 'E. 34th St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '41-fdrd'},
        {dir: 'south', id: '25-fdrd'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '34-1'}
      ],
    },
    {
      id: '25-fdrd',
      coord: [],
      name: 'E. 25th St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '34-fdrd'},
        {dir: 'south', id: '23-fdrd'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '25-asse'},
      ],
    },
    {
      id: '23-fdrd',
      coord: [],
      name: 'E. 23rd St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '25-fdrd'},
        {dir: 'south', id: '20-fdrd'},
        {dir: 'east', id: '23-erdr'},
        {dir: 'west', id: '23-asse'}
      ],
    },//chek here for peter cooper road exiting
    {
      id: '25-asse',
      coord: [],
      name: 'E. 25th St. and Asser Levy Plaza',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '23-asse'},
        {dir: 'east', id: '25-fdrd'},
        {dir: 'west', id: '25-1'}
      ],
    },
    {
      id: '23-asse',
      coord: [],
      name: 'E. 23rd St. and Asser Levy Plaza',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '25-asse'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'west', id: '23-1'},
        {dir: 'east', id: '23-fdrd'}
      ],
    },
      /*********************/
     /* Midtown West Side */
    /*********************/
    {
      id: '59-12',
      coord: [],
      name: 'W. 59th St. and 12th Ave.',
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '58-12'},
        {dir: 'east', id: '59-wend'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '59-wend',
      coord: [],
      name: 'W. 59th St. and West End Ave.',
      exits: [
        {dir: 'north', id: '60-wend'},
        {dir: 'south', id: '58-11'},
        {dir: 'east', id: '59-amst'},
        {dir: 'west', id: '59-12'},
        {dir: ['subway', 'entrance'], id: 'S-A-subway-ent'},
      ],
    },
    {
      id: '59-7',
      coord: [],
      name: 'Central Park S. and 7th Ave.',
      exits: [
        {dir: 'north', id: 'S-A'},
        {dir: 'south', id: '58-7'},
        {dir: 'east', id: '59-amer'},
        {dir: 'west', id: '59-cent'},  
    ],
    },
    {
      id: '59-amer',
      coord: [],
      name: 'Central Park S. and Ave. of Americas',
      desc: `There is a restaurant called Nedicks here.`, // Nedicks entrance
      exits: [
        {dir: 'north', id: 'S-A'},
        {dir: 'south', id: '58-amer'},
        {dir: 'east', id: '59-wdri'},
        {dir: 'west', id: '59-7'},
        {dir: ['nedicks','enter',], id: 'cent-amer-nedi'},
      ],
    },
//Begin 58th St.
    {
      id: '58-12',
      coord: [],
      name: 'W. 58th St. and 12th Ave.',
      exits: [//Can't go West
        {dir: 'north', id: '59-12'},
        {dir: 'south', id: '57-12'},
        {dir: 'east', id: '58-11'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '58-11',
      coord: [],
      name: 'W. 58th St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '59-wend'},
        {dir: 'south', id: '57-11'},
        {dir: 'east', id: '58-10'},
        {dir: 'west', id: '58-12'},
      ],
    },
    {
      id: '58-10',
      coord: [],
      name: 'W. 58th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '59-amst'},
        {dir: 'south', id: '57-10'},
        {dir: 'east', id: '58-9'},
        {dir: 'west', id: '58-11'},  
      ],
    },
    {
      id: '58-9',
      coord: [],
      name: 'W. 58th St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '59-colu'},
        {dir: 'south', id: '57-9'},
        {dir: 'east', id: '58-8'},
        {dir: 'west', id: '58-10'},
      ],
    },
    {
      id: 'broa-8',
      coord: [],
      name: 'Broadway and 8th Ave.',
      desc: `There is a subway entrance at this corner.`,
      exits: [
        {dir: 'north', id: '59-cent'},
        {dir: 'south', id: '58-8'},
        {dir: 'east', id: '58-broa'},
        {dir: 'west', id: '59-broa'},
        {dir: ['subway', 'entrance'], id: 'broa-8-subway-ent'},
      ],
    },
    {
      id: '58-8',
      coord: [],
      name: 'W. 58th St. and 8th Ave.',
      exits: [
        {dir: 'north', id: 'broa-8'},
        {dir: 'south', id: '57-8'},
        {dir: 'east', id: '58-broa'},
        {dir: 'west', id: '58-9'},
      ],
    },
    {
      id: '58-broa',
      coord: [],
      name: 'W. 58th St. and Broadway',
      desc: `Cars spin around on Columbus Circle like atomic particles in a particle accelerator, while pedestrians scamper for safety as best they can. Clearly, this is an experiment designed to control the city's expanding population.`,
      exits: [
        {dir: 'north', id: 'broa-8'},
        {dir: 'south', id: '57-broa'},
        {dir: 'east', id: '58-7'},
        {dir: 'west', id: '58-8'},
      ],
    },
    {
      id: '58-7',
      coord: [],
      name: 'W. 58th St. and 7th Ave.',
      exits: [
        {dir: 'north', id: 'cent-7'},
        {dir: 'south', id: '57-7'},
        {dir: 'east', id: '58-amer'},
        {dir: 'west', id: '58-broa'},
      ],
    },
    {
      id: '58-amer',
      coord: [],
      name: 'W. 58th St. and Ave. of Americas',
      exits: [
        {dir: 'north', id: '59-amer'},
        {dir: 'south', id: '57-amer'},
        {dir: 'east', id: '58-wdri'},
        {dir: 'west', id: '58-7'},
      ],
    },
//End 58th St.
    {
      id: '58-wdri',
      coord: [],
      name: 'W. 58th St. and West Drive',
      exits: [
        {dir: 'north', id: '59-wdri'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '58-5'},
        {dir: 'west', id: '58-amer'},
      ],
    },
    {
      id: '59-wdri',
      coord: [],
      name: 'Central Park S. and West Drive',
      desc: `The imposing statue of General W.T. Sherman surveys the elegant square of Grand Army Plaza. To the north, the grand old lady, the Sherry Netherland, nestles romantically with its mate, the Pierre. Across the street, couples purchase a romantic interlude on a horse-drawn carriage. The horses and the driver seem immensely bored by it all.`,
      exits: [
        {dir: 'north', block: `You can't go that way`},
        {dir: 'south', id: '58-wdri'},
        {dir: 'east', id: '59-5'},
        {dir: 'west', id: '59-amer'},
      ],
    },
    
//Start 57th St.
    {
      id: '57-hhpw',
      coord: [],
      name: 'W. 57th St. and Henry Hudson Pkwy.',
      exits: [
        {dir: 'north', id: '72-hhpw'},
        {dir: 'south', id: '44-hhpw'},
        {dir: 'east', id: '57-12'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '57-12',
      coord: [],
      name: 'W. 57th St. and 12th Ave.',
      exits: [
        {dir: 'north', id: '58-12'},
        {dir: 'south', id: '55-12'},        
        {dir: 'east', id: '57-11'},
        {dir: 'west', id: '57-hhpw'}
      ],
    },
    {
      id: '57-11',
      coord: [],
      name: 'W. 57th St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '58-11'},
        {dir: 'south', id: '56-11'},
        {dir: 'east', id: '57-10'},
        {dir: 'west', id: '57-12'},
      ],
    },
    {
      id: '57-10',
      coord: [],
      name: 'W. 57th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '58-10'},
        {dir: 'south', id: '56-10'},
        {dir: 'east', id: '57-9'},
        {dir: 'west', id: '57-11'},
      ],
    },
    {
      id: '57-9',
      coord: [],
      name: 'W. 57th St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '58-9'},
        {dir: 'south', id: '56-9'},
        {dir: 'east', id: '57-8'},
        {dir: 'west', id: '57-10'},
      ],
    },
    {
      id: '57-8',
      coord: [],
      name: 'W. 57th St. and 8th Ave.',
      desc: `There is a Chock Full-O-Nuts at this intersection.`, // Restaurant entrance
      exits: [
        {dir: 'north', id: '58-8'},
        {dir: 'south', id: '56-8'},
        {dir: 'east', id: '57-broa'},
        {dir: 'west', id: '57-9'},
        {dir: ['enter', 'chock'], id: '57-8-chock'},
      ],
    },
    {
      id: '57-broa',
      coord: [],
      name: 'W. 57th St. and Broadway',
      desc: `At street level Carnegie Hall is basically a row of posters announcing its upcoming events, which this week include a concert of Puccini arias by Linda Ronstadt, the Tuscon Festival Ballet's performance of Twyla Tharp's SWAN LAKE, the Canadian Youth Philharmonic in an all-Beethoven program, and a poetry reading by Allen Ginzberg.`,
      exits: [
        {dir: 'north', id: '58-broa'},
        {dir: 'south', id: '56-broa'},
        {dir: 'east', id: '57-7'},
        {dir: 'west', id: '57-8'},
      ],
    },
    {
      id: '57-7',
      coord: [],
      name: 'W. 57th St. and 7th Ave.',
      desc: `There is a subway entrance at this corner.`, //Subway entrance
      exits: [
        {dir: 'north', id: '58-7'},
        {dir: 'south', id: '56-7'},
        {dir: 'east', id: '57-amer'},
        {dir: 'west', id: '57-broa'},
        {dir: ['subway', 'entrance'], id: '57-7-subway-ent'},
      ],
    },
    {
      id: '57-amer',
      coord: [],
      name: 'W. 57th St. and Ave. of Americas',
      desc: `There is a subway entrance at this corner.`, //Subway entrance
      exits: [
        {dir: 'north', id: '58-amer'},
        {dir: 'south', id: '56-amer'},
        {dir: 'east', id: '57-5'},
        {dir: 'west', id: '57-7'},
        {dir: ['subway', 'entrance'], id: '57-amer-subway-ent'},
        ],
    },
//Start 56th St.
//There is no 56-12
    {
      id: '56-11',
      coord: [],
      name: 'W. 56th St. and 11th Ave.',
      exits: [//Can't go West
        {dir: 'north', id: '57-1'},
        {dir: 'east', id: '56-10'},
        {dir: 'south', id: '55-11'},
      ],
    },
    {
      id: '56-10',
      coord: [],
      name: 'W. 56th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '57-10'},
        {dir: 'south', id: '55-10'},
        {dir: 'east', id: '56-9'},
        {dir: 'west', id: '56-11'},
      ],
    },
    {
      id: '56-9',
      coord: [],
      name: 'W. 56th St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '57-9'},
        {dir: 'south', id: '55-9'},
        {dir: 'east', id: '56-8'},
        {dir: 'west', id: '56-10'},
      ],
    },
    {
      id: '56-8',
      coord: [],
      name: 'W. 56th St. and 8th Ave.',
      exits: [
        {dir: 'north', id: '57-8'},
        {dir: 'south', id: '55-8'},
        {dir: 'east', id: '56-broa'},
        {dir: 'west', id: '56-9'},
      ],
    },
    {
      id: '56-broa',
      coord: [],
      name: 'W. 56th St. and Broadway',
      exits: [
        {dir: 'north', id: '57-broa'},
        {dir: 'south', id: '55-broa'},
        {dir: 'east', id: '56-7'},
        {dir: 'west', id: '56-8'},
      ],
    },
    {
      id: '56-7',
      coord: [],
      name: 'W. 56th St. and 7th Ave.',
      desc: `The block from 55th to 56th is taken up by the Omni Park Central Hotel which you seem to remember by another name, though you can't remember what it was.`,
      exits: [//Player cannot enter Omni Park Central Hotel
        {dir: 'north', id: '57-7'},
        {dir: 'south', id: '55-7'},
        {dir: 'east', id: '56-amer'},
        {dir: 'west', id: '56-broa'},
      ],
    },
    {
      id: '56-amer',
      coord: [],
      name: 'W. 56th St. and Ave. of Americas',
      exits: [
        {dir: 'north', id: '57-amer'},
        {dir: 'south', id: '55-amer'},
        {dir: 'east', id: '56-5'},
        {dir: 'west', id: '56-7'},
      ],
    },//End 56th St.

//Start 55th St.
    {
      id: '55-12',
      coord: [],
      name: 'W. 55th St. and 12th Ave.',
      exits: [
        {dir: 'north', id: '57-12'},
        {dir: 'east', id: '55-11'},
        {dir: 'south', id: '54-12'},
      ],
    },
    {
      id: '55-11',
      coord: [],
      name: 'W. 55th St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '56-11'},
        {dir: 'south', id: '54-11'},
        {dir: 'east', id: '55-10'},
        {dir: 'west', id: '55-12'}, 
      ],
    },
    {
      id: '55-10',
      coord: [],
      name: 'W. 55th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '56-10'},
        {dir: 'south', id: '54-10'},
        {dir: 'east', id: '55-9'},
        {dir: 'west', id: '55-11'},
      ],
    },
    {
      id: '55-9',
      coord: [],
      name: 'W. 55th St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '56-9'},
        {dir: 'south', id: '54-9'},
        {dir: 'east', id: '55-8'},
        {dir: 'west', id: '55-10'},
      ],
    },
    {
      id: '55-8',
      coord: [],
      name: 'W. 55th St. and 8th Ave.',
      desc: `There is a Greek Gyro located here.`, // Restaurant entrance
      exits: [
        {dir: 'north', id: '56-8'},
        {dir: 'south', id: '54-8'},
        {dir: 'east', id: '55-broa'},
        {dir: 'west', id: '55-9'},
        {dir: ['enter', 'greek', 'gyro'], id: '55-8-gyro'},
      ],
    },
    {
      id: '55-broa',
      coord: [],
      name: 'W. 55th St. and Broadway',
      exits: [
        {dir: 'north', id: '56-broa'},
        {dir: 'south', id: '54-broa'},
        {dir: 'east', id: '55-7'},
        {dir: 'west', id: '55-8'},
      ],
    },
    {
      id: '55-7',
      coord: [],
      name: 'W. 55th St. and 7th Ave.',
      exits: [
        {dir: 'north', id: '56-7'},
        {dir: 'south', id: '54-7'},
        {dir: 'east', id: '5-amer'},
        {dir: 'west', id: '55-broa'},
      ],
    },
    {
      id: '55-amer',
      coord: [],
      name: 'W. 55th St. and Ave of America',
      exits: [
        {dir: 'north', id: '56-amer'},
        {dir: 'south', id: '54-amer'},
        {dir: 'east', id: '55-5'},
        {dir: 'west', id: '55-7'},
      ],
    },//End 55th St.

//Start 54th St.
    {
      id: '54-12',
      coord: [],
      name: 'W. 54th St. and 12th Ave.',
      exits: [//Can't go west
        {dir: 'north', id: '55-12'},
        {dir: 'east', id: '54-11'},
        {dir: 'south', id: '53-12'},
      ],
    },
    {
      id: '54-11',
      coord: [],
      name: 'W. 54th St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '55-11'},
        {dir: 'south', id: '53-11'},
        {dir: 'east', id: '54-10'},
        {dir: 'west', id: '54-12'},
      ],
    },
    {
      id: '54-10',
      coord: [],
      name: 'W. 54th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '55-10'},
        {dir: 'south', id: '53-10'},
        {dir: 'east', id: '54-9'},
        {dir: 'west', id: '54-11'},
      ],
    },
    {
      id: '54-9',
      coord: [],
      name: 'W. 54th St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '55-9'},
        {dir: 'south', id: '53-9'},
        {dir: 'east', id: '54-8'},
        {dir: 'west', id: '54-10'},
      ],
    },
    {
      id: '54-8',
      coord: [],
      name: 'W. 54th St. and 8th Ave.',
      exits: [//I found a tenement here
        {dir: 'north', id: '55-8'},
        {dir: 'south', id: '53-8'},
        {dir: 'east', id: '54-broa'},
        {dir: 'west', id: '54-9'},
      ],
    },
    {
      id: '54-broa',
      coord: [],
      name: 'W. 54th St. and Broadway',
      exits: [
        {dir: 'north', id: '55-broa'},
        {dir: 'south', id: '53-broa'},
        {dir: 'east', id: '54-7'},
        {dir: 'west', id: '54-8'},
      ],
    },
    {
      id: '54-7',
      coord: [],
      name: 'W. 54th St. and 7th Ave.',
      exits: [
        {dir: 'north', id: '55-7'},
        {dir: 'south', id: '53-7'},
        {dir: 'east', id: '54-amer'},
        {dir: 'west', id: '54-broa'},
      ],
    },
    {
      id: '54-amer',
      coord: [],
      name: 'W. 54th St. and Ave. of Americas',
      desc: `There is a pizzeria here.`,//Restaurant Entrance
      exits: [
        {dir: 'north', id: '55-amer'},
        {dir: 'south', id: '53-amer'},
        {dir: 'east', id: '54-5'},
        {dir: 'west', id: '54-7'},
        {dir: ['enter', 'pizzeria', 'pizza',], id: '54-amer-pizza'},
      ],
    },//End 54th St.

//Start 53rd St.
    {
      id: '53-12',
      coord: [],
      name: 'W. 53rd St. and 12th Ave.',
      exits: [//Can't go west
        {dir: 'north', id: '54-12'},
        {dir: 'east', id: '53-11'},
        {dir: 'south', id: '52-12'},
      ],
    },
    {
      id: '53-11',
      coord: [],
      name: 'W. 53rd St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '54-11'},
        {dir: 'south', id: '52-11'},
        {dir: 'east', id: '53-10'},
        {dir: 'west', id: '53-12'},
      ],
    },
    {
      id: '53-10',
      coord: [],
      name: 'W. 53rd St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '54-10'},
        {dir: 'south', id: '52-10'},
        {dir: 'east', id: '53-9'},
        {dir: 'west', id: '53-11'},
      ],
    },
    {
      id: '53-9',
      coord: [],
      name: 'W. 53rd St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '54-9'},
        {dir: 'south', id: '52-9'},
        {dir: 'east', id: '53-8'},
        {dir: 'west', id: '53-10'},
      ],
    },
    {
      id: '53-8',
      coord: [],
      name: 'W. 53rd St. and 8th Ave.',
      exits: [
        {dir: 'north', id: '54-8'},
        {dir: 'south', id: '52-8'},
        {dir: 'east', id: '53-broa'},
        {dir: 'west', id: '53-9'},
      ],
    },
    {
      id: '53-broa',
      coord: [],
      name: 'W. 53rd St. and Broadway',
      exits: [
        {dir: 'north', id: '54-broa'},
        {dir: 'south', id: '52-broa'},
        {dir: 'east', id: '53-7'},
        {dir: 'west', id: '53-8'},
      ],
    },
    {
      id: '53-7',
      coord: [],
      name: 'W. 53rd St. and 7th Ave.',
      desc: 'There is a subway entrance at this corner.', //Subway Entrance
      exits: [
        {dir: 'north', id: '54-7'},
        {dir: 'south', id: '52-7'},
        {dir: 'east', id: '53-amer'},
        {dir: 'west', id: '53-broa'},
        {dir: ['subway', 'entrance'], id: '53-7-subway-ent'},
      ],
    },
    {
      id: '53-amer',
      coord: [],
      name: 'W. 53rd St. and Ave. of Americas',
      exits: [
        {dir: 'north', id: '54-amer'},
        {dir: 'south', id: '52-amer'},
        {dir: 'east', id: '53-5'},
        {dir: 'west', id: '53-7'},
      ],
    },

//Start 52nd St.
    {
      id: '52-12',
      coord: [],
      name: 'W. 52nd St. and 12th Ave.',
      exits: [//Can't go west
        {dir: 'north', id: '53-12'},
        {dir: 'east', id: '52-11'},
        {dir: 'south', id: '51-12'},
      ],
    },
    {
      id: '52-11',
      coord: [],
      name: 'W. 52nd St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '53-11'},
        {dir: 'south', id: '51-11'},
        {dir: 'east', id: '52-10'},
        {dir: 'west', id: '52-12'},
      ],
    },
    {
      id: '52-10',
      coord: [],
      name: 'W. 52nd St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '53-10'},
        {dir: 'south', id: '51-10'},
        {dir: 'east', id: '52-9'},
        {dir: 'west', id: '52-11'},
      ],
    },
    {
      id: '52-9',
      coord: [],
      name: 'W. 52nd St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '53-9'},
        {dir: 'south', id: '51-9'},
        {dir: 'east', id: '52-8'},
        {dir: 'west', id: '52-10'},
      ],
    },
    {
      id: '52-8',
      coord: [],
      name: 'W. 52nd St. and 8th Ave.',
      exits: [
        {dir: 'north', id: '53-8'},
        {dir: 'south', id: '51-8'},
        {dir: 'east', id: '52-broa'},
        {dir: 'west', id: '52-9'},
      ],
    },
    {
      id: '52-broa',
      coord: [],
      name: 'W. 52nd St. and Broadway',
      exits: [
        {dir: 'north', id: '53-broa'},
        {dir: 'south', id: '51-broa'},
        {dir: 'east', id: '52-7'},
        {dir: 'west', id: '52-8'},
      ],
    },
    {
      id: '52-7',
      coord: [],
      name: 'W. 52nd St. and 7th Ave.',
      exits: [
        {dir: 'north', id: '53-7'},
        {dir: 'south', id: '51-7'},
        {dir: 'east', id: '52-amer'},
        {dir: 'west', id: '52-broa'},
      ],
    },
    {
      id: '52-amer',
      coord: [],
      name: 'W. 52nd St. and Ave. of Americas',
      exits: [
        {dir: 'north', id: '53-amer'},
        {dir: 'south', id: '51-amer'},
        {dir: 'east', id: '52-5'},
        {dir: 'west', id: '52-7'},
      ],
    },//End 52nd St.

//Start 51st St.
    {
      id: '51-12',
      coord: [],
      name: 'W. 51st St. and 12th Ave.',
      exits: [
        {dir: 'north', id: '52-12'},
        {dir: 'east', id: '51-A'},
        {dir: 'south', id: '50-12'},
      ],
    },
    {
      id: '51-11',
      coord: [],
      name: 'W. 51st St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '52-11'},
        {dir: 'south', id: '50-11'},
        {dir: 'east', id: '51-10'},
        {dir: 'west', id: '51-12'},
      ],
    },
    {
      id: '51-10',
      coord: [],
      name: 'W. 51st St. and 10th Ave.',
      desc: 'There is a Chock Full-O-Nuts at this intersection.',
      exits: [
        {dir: 'north', id: '52-10'},
        {dir: 'south', id: '50-10'},
        {dir: 'east', id: '51-9'},
        {dir: 'west', id: '51-11'},
        {dir: ['enter', 'chock', 'nuts',], id: '51-10-chock'},
      ],
    },
    {
      id: '51-9',
      coord: [],
      name: 'W. 51st St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '52-9'},
        {dir: 'south', id: '50-9'},
        {dir: 'east', id: '51-8'},
        {dir: 'west', id: '51-10'},
      ],
    },
    {
      id: '51-8',
      coord: [],
      name: 'W. 51st St. and 8th Ave.',
      desc: 'There is a luncheonette on the corner.',
      exits: [
        {dir: 'north', id: '52-8'},
        {dir: 'south', id: '50-8'},
        {dir: 'east', id: '51-broa'},
        {dir: 'west', id: '51-9'},
        {dir: ['enter', 'lunch', 'luncheonette',], id: '51-8-lunch'},
      ],
    },
    {
      id: '51-broa',
      coord: [],
      name: 'W. 51st St. and Broadway',
      exits: [
        {dir: 'north', id: '52-broa'},
        {dir: 'south', id: '50-broa'},
        {dir: 'east', id: '51-7'},
        {dir: 'west', id: '51-8'},
      ],
    },
    {
      id: '51-7',
      coord: [],
      name: 'W. 51st St. and 7th Ave.',
      exits: [
        {dir: 'north', id: '52-7'},
        {dir: 'south', id: '50-7'},
        {dir: 'east', id: '51-amer'},
        {dir: 'west', id: '51-broa'},
      ],
    },
    {
      id: '51-amer',
      coord: [],
      name: 'W. 51st St. and Ave. of Americas',
      exits: [
        {dir: 'north', id: '52-amer'},
        {dir: 'south', id: '50-amer'},
        {dir: 'east', id: '51-5'},
        {dir: 'west', id: '51-7'},
      ],
    },//End 51st St.

//Start 50th St.
    {
      id: '50-12',
      coord: [],
      name: 'W. 50th St. and 12th Ave.',
      exits: [
        {dir: 'north', id: '51-12'},
        {dir: 'south', id: '49-12'},
        {dir: 'east', id: '50-11'},
      ],
    },
    {
      id: '50-11',
      coord: [],
      name: 'W. 50th St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '51-11'},
        {dir: 'south', id: '49-11'},
        {dir: 'east', id: '50-10'},
        {dir: 'west', id: '50-12'},
      ],
    },
    {
      id: '50-10',
      coord: [],
      name: 'W. 50th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '51-10'},
        {dir: 'south', id: '49-10'},
        {dir: 'east', id: '50-9'},
        {dir: 'west', id: '50-11'},
      ],
    },
    {
      id: '50-9',
      coord: [],
      name: 'W. 50th St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '51-9'},
        {dir: 'south', id: '49-9'},
        {dir: 'east', id: '50-8'},
        {dir: 'west', id: '50-10'},
      ],
    },
    {
      id: '50-8',
      coord: [],
      name: 'W. 50th St. and 8th Ave.',
      desc: 'There is a subway entrance at this corner.',
      exits: [
        {dir: 'north', id: '51-8'},
        {dir: 'south', id: '49-8'},
        {dir: 'east', id: '50-broa'},
        {dir: 'west', id: '50-9'},
        {dir: ['subway', 'entrance'], id: '50-8-subway-ent'},
      ],
    },
    {
      id: '50-broa',
      coord: [],
      name: 'W. 50th St. and Broadway',
      desc: 'There is a subway entrance at this corner.',
      exits: [
        {dir: 'north', id: '51-broa'},
        {dir: 'south', id: '49-broa'},
        {dir: 'east', id: '50-7'},
        {dir: 'west', id: '50-8'},
        {dir: ['subway', 'entrance'], id: '50-broa-subway-ent'},
      ],
    },
    {
      id: '50-7',
      coord: [],
      name: 'W. 50th St. and 7th Ave.',
      desc: 'Radio City Music Hall -- its bronze doors hiding the largest chandeliers and the best legs in the world.',
      exits: [
        {dir: 'north', id: '51-7'},
        {dir: 'south', id: '49-7'},
        {dir: 'east', id: '50-amer'},
        {dir: 'west', id: '50-broa'},
      ],
    },
    {
      id: '50-amer',
      coord: [],
      name: 'W. 50th St. and Ave. of Americas',
      desc: 'The 50 ST-6 AV Station Entrance is at this corner.',
      exits: [
        {dir: 'north', id: '51-amer'},
        {dir: 'south', id: '49-amer'},
        {dir: 'east', id: '50-5'},
        {dir: 'west', id: '50-7'},
        {dir: ['subway', 'entrance'], id: '50-amer-subway-ent'},
      ],
    },//End 50th St.

//Start 49th St.
    {
      id: '49-12',
      coord: [],
      name: 'W. 49th St. and 12th Ave.',
      exits: [
        {dir: 'north', id: '50-12'},
        {dir: 'east', id: '49-11'},
        {dir: 'south', id: '48-12'},
      ],
    },
    {
      id: '49-11',
      coord: [],
      name: 'W. 49th St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '50-11'},
        {dir: 'south', id: '48-11'},
        {dir: 'east', id: '49-10'},
        {dir: 'west', id: '49-12'},
      ],
    },
    {
      id: '49-10',
      coord: [],
      name: 'W. 49th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '50-10'},
        {dir: 'south', id: '48-10'},
        {dir: 'east', id: '49-9'},
        {dir: 'west', id: '49-11'},
      ],
    },
    {
      id: '49-9',
      coord: [],
      name: 'W. 49th St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '50-9'},
        {dir: 'south', id: '48-9'},
        {dir: 'east', id: '49-8'},
        {dir: 'west', id: '49-10'},
      ],
    },
    {
      id: '49-8',
      coord: [],
      name: 'W. 49th St. and 8th Ave.',
      exits: [
        {dir: 'north', id: '50-8'},
        {dir: 'south', id: '48-8'},
        {dir: 'east', id: '49-broa'},
        {dir: 'west', id: '49-9'},
      ],
    },
    {
      id: '49-broa',
      coord: [],
      name: 'W. 49th St. and Broadway',
      desc: `There is a restaurant called Nedicks here.`,//Restaurant Entrance
      exits: [
        {dir: 'north', id: '50-broa'},
        {dir: 'south', id: '48-broa'},
        {dir: 'east', id: '49-7'},
        {dir: 'west', id: '49-8'},
        {dir: ['enter', 'restaurant', 'nedicks'], id: '49-broa-nedicks'},
      ],
    },
    {
      id: '49-7',
      coord: [],
      name: 'W. 49th St. and 7th Ave.',
      desc: 'There is a subway entrance at this corner.', //Subway Entrance
      exits: [
        {dir: 'north', id: '50-7'},
        {dir: 'south', id: '48-7'},
        {dir: 'east', id: '49-amer'},
        {dir: 'west', id: '49-broa'},
        {//Subway Entrance
            dir: ['subway', 'entrance'], id: '49-7-subway-ent'},
      ],
    },
    {
      id: '49-amer',
      coord: [],
      name: 'W. 49th St. and Ave. of Americas',
      exits: [
        {dir: 'north', id: '50-amer'},
        {dir: 'south', id: '48-amer'},
        {dir: 'east', id: '49-5'},
        {dir: 'west', id: '49-7'},
      ],
    },

//Start 48th St.
    {
      id: '48-12',
      coord: [],
      name: 'W. 48th St. and 12th Ave.',
      exits: [
        {dir: 'south', id: '47-12'},
        {dir: 'west', block:`You can’t go that way.`},
        {dir: 'north', id: '49-12'},
        {dir: 'east', id: '48-11'},
      ],
    },
    {
      id: '48-11',
      coord: [],
      name: 'W. 48th St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '49-11'},
        {dir: 'south', id: '47-11'},
        {dir: 'east', id: '48-10'},
        {dir: 'west', id: '48-12'},
      ],
    },
    {
      id: '48-10',
      coord: [],
      name: 'W. 48th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '49-10'},
        {dir: 'south', id: '47-10'},
        {dir: 'east', id: '48-9'},
        {dir: 'west', id: '48-11'},
      ],
    },
    {
      id: '48-9',
      coord: [],
      name: 'W. 48th St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '49-9'},
        {dir: 'south', id: '47-9'},
        {dir: 'east', id: '48-8'},
        {dir: 'west', id: '48-10'},
      ],
    },
    {
      id: '48-8',
      coord: [],
      name: 'W. 48th St. and 8th Ave.',
      exits: [
        {dir: 'north', id: '49-8'},
        {dir: 'south', id: '47-8'},
        {dir: 'east', id: '48-broa'},
        {dir: 'west', id: '48-9'},
      ],
    },
    {
      id: '48-broa',
      coord: [],
      name: 'W. 48th St. and Broadway',
      desc: 'Here is the Metropole Cafe. In the evening it is a safe haven for bare breasts and sequined hips that undulate slightly off the beat of the music.',
      exits: [
        {dir: 'north', id: '49-broa'},
        {dir: 'south', id: '47-broa'},
        {dir: 'east', id: '48-7'},
        {dir: 'west', id: '48-8'},
        {dir: ['enter', 'cafe', 'metropole'], block:`There is no point to going there.`},
      ],
    },
    {
      id: '48-7',
      coord: [],
      name: 'W. 48th St. and 7th Ave.',
      exits: [
        {dir: 'north', id: '49-7'},
        {dir: 'south', id: '47-7'},
        {dir: 'east', id: '48-amer'},
        {dir: 'west', id: '48-broa'},
      ],
    },
    {
      id: '48-amer',
      coord: [],
      name: 'W. 48th St. and Ave. of Americas',
      desc: 'There is a Greek Gyro located here.',
      exits: [
        {dir: 'north', id: '49-amer'},
        {dir: 'south', id: '47-amer'},
        {dir: 'east', id: '48-5'},
        {dir: 'west', id: '48-7'},
        {dir: ['enter', 'greek', 'gyro'], id: '48-gyro'},
      ],
    },//End 48th Street

//Start 47th Street
    {
      id: '47-12',
      coord: [],
      name: 'W. 47th St. and 12th Ave.',
      exits: [
        {dir: 'north', id: '48-12'},
        {dir: 'south', id: '46-12'},
        {dir: 'east', id: '47-11'},
        {dir: 'west', block:`You can’t go that way.`},
      ],
    },
    {
      id: '47-11',
      coord: [],
      name: 'W. 47th St. and 11th Ave.',
      desc: 'There is a luncheonette on the corner.',
      exits: [
        {dir: 'north', id: '48-11'},
        {dir: 'south', id: '46-11'},
        {dir: 'east', id: '47-10'},
        {dir: 'west', id: '47-12'},
        {dir: ['enter', 'lunch', 'luncheonette'], id: '47-11-lunch'},
      ],
    },
    {
      id: '47-10',
      coord: [],
      name: 'W. 47th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '48-10'},
        {dir: 'south', id: '46-10'},
        {dir: 'east', id: '47-9'},
        {dir: 'west', id: '47-11'},
      ],
    },
    {
      id: '47-10',
      coord: [],
      name: 'W. 47th St. and 10th Ave.',
      desc: 'There is a pizzeria here.',
      exits: [
        {dir: 'north', id: '48-10'},
        {dir: 'south', id: '46-10'},
        {dir: 'east', id: '47-9'},
        {dir: 'west', id: '47-11'},
        {dir: ['enter', 'pizza', 'pizzeria'], id: '47-10-pizza'},
      ],
    },
    {
      id: '47-9',
      coord: [],
      name: 'W. 47th St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '48-9'},
        {dir: 'south', id: '46-9'},
        {dir: 'east', id: '47-8'},
        {dir: 'west', id: '47-10'},
      ],
    },
    {
      id: '47-8',
      coord: [],
      name: 'W. 47th St. and 8th Ave.',
      exits: [
        {dir: 'north', id: '48-8'},
        {dir: 'south', id: '46-8'},
        {dir: 'east', id: '47-broa'},
        {dir: 'west', id: '47-9'},
      ],
    },
    {
      id: '47-broa',
      coord: [],
      name: 'W. 47th St. and Broadway',
      exits: [
        {dir: 'north', id: '48-broa'},
        {dir: 'south', id: '46-broa'},
        {dir: 'east', id: '47-7'},
        {dir: 'west', id: '47-8'},
      ],
    },
    {
      id: '47-7',
      coord: [],
      name: 'W. 47th St. and 7th Ave.',
      desc: 'There is a restaurant called Nedicks here.',
      exits: [
        {dir: 'north', id: '48-7'},
        {dir: 'south', id: '46-7'},
        {dir: 'east', id: '47-amer'},
        {dir: 'west', id: '47-broa'},
        {dir: ['enter', 'restaurant', 'nedicks'], id: '47-7-nedi'},
      ],
    },
    {
      id: '47-amer',
      coord: [],
      name: 'W. 47th St. and Ave. of Americas',
      desc: 'There is a pizzeria here.',
      exits: [
        {dir: 'north', id: '48-amer'},
        {dir: 'south', id: '46-amer'},
        {dir: 'east', id: '47-5'},
        {dir: 'west', id: '47-broa'},
        {dir: ['enter', 'pizza', 'pizzeria'], id: '47-amer-pizza'},
      ],
    },

//Start 46th Street.
{
      id: '46-12',
      coord: [],
      name: 'W. 46th St. and 12th Ave.',
      exits: [
        {dir: 'north', id: '47-12'},
        {dir: 'south', id: '45-12'},
        {dir: 'east', id: '46-11'},
        {dir: 'west', block:`You can’t go that way.`},
      ],
    },
    {
      id: '46-11',
      coord: [],
      name: 'W. 46th St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '47-11'},
        {dir: 'south', id: '45-11'},
        {dir: 'east', id: '46-10'},
        {dir: 'west', id: '46-12'},
      ],
    },
    {
      id: '46-10',
      coord: [],
      name: 'W. 46th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '47-10'},
        {dir: 'south', id: '45-10'},
        {dir: 'east', id: '46-9'},
        {dir: 'west', id: '46-11'},
      ],
    },
    {
      id: '46-9',
      coord: [],
      name: 'W. 46th St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '47-9'},
        {dir: 'south', id: '45-9'},
        {dir: 'east', id: '46-8'},
        {dir: 'west', id: '46-10'},
      ],
    },
    {
      id: '46-8',
      coord: [],
      name: 'W. 46th St. and 8th Ave.',
      exits: [
        {dir: 'north', id: '47-8'},
        {dir: 'south', id: '45-8'},
        {dir: 'east', id: '46-broa'},
        {dir: 'west', id: '46-9'},
      ],
    },
    {
      id: '46-broa',
      coord: [],
      name: 'W. 46th St. and Broadway',
      exits: [
        {dir: 'north', id: '47-broa'},
        {dir: 'south', id: '45-broa'},
        {dir: 'east', id: '46-7'},
        {dir: 'west', id: '46-8'},
      ],
    },
    {
      id: '46-7',
      coord: [],
      name: 'W. 46th St. and 7th Ave.',
      exits: [
        {dir: 'north', id: '47-7'},
        {dir: 'south', id: '45-7'},
        {dir: 'east', id: '46-amer'},
        {dir: 'west', id: '46-broa'},
      ],
    },
    {
      id: '46-amer',
      coord: [],
      name: 'W. 46th St. and Ave. of Americas',
      exits: [
        {dir: 'north', id: '47-amer'},
        {dir: 'south', id: '45-amer'},
        {dir: 'east', id: '46-5'},
        {dir: 'west', id: '46-7'},
      ],
    },

//Start 45th Street
    {
      id: '45-12',
      coord: [],
      name: 'W. 45th St. and 12th Ave.',
      exits: [
        {dir: 'north', id: '46-12'},
        {dir: 'south', id: '44-12'},
        {dir: 'east', id: '45-11'},
        {dir: 'west', block:`You can’t go that way.`},
      ],
    },
    {
      id: '45-11',
      coord: [],
      name: 'W. 45th St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '46-11'},
        {dir: 'south', id: '44-11'},
        {dir: 'east', id: '45-10'},
        {dir: 'west', id: '45-12'},
      ],
    },
    {
      id: '45-10',
      coord: [],
      name: 'W. 45th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '46-10'},
        {dir: 'south', id: '44-10'},
        {dir: 'east', id: '45-9'},
        {dir: 'west', id: '45-11'},
      ],
    },
    {
      id: '45-9',
      coord: [],
      name: 'W. 45th St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '46-9'},
        {dir: 'south', id: '44-9'},
        {dir: 'east', id: '45-8'},
        {dir: 'west', id: '45-10'},
      ],
    },
    {
      id: '45-8',
      coord: [],
      name: 'W. 45th St. and 8th Ave.',
      exits: [
        {dir: 'north', id: '46-8'},
        {dir: 'south', id: '44-8'},
        {dir: 'east', id: '45-broa'},
        {dir: 'west', id: '45-9'},
      ],
    },
    {
      id: '45-broa',
      coord: [],
      name: 'W. 45th St. and Broadway',
      exits: [
        {dir: 'north', id: '46-broa'},
        {dir: 'south', id: 'broa-7'},
        {dir: 'east', id: '45-7'},
        {dir: 'west', id: '45-8'},
      ],
    },
    {
      id: '45-7',
      coord: [],
      name: 'W. 45th St. and 7th Ave.',
      exits: [
        {dir: 'north', id: '46-7'},
        {dir: 'south', id: 'broa-7'},
        {dir: 'east', id: '45-amer'},
        {dir: 'west', id: '45-broa'},
      ],
    },
    {
      id: '45-amer',
      coord: [],
      name: 'W. 45th St. and Ave. of Americas',
      exits: [
        {dir: 'north', id: '46-amer'},
        {dir: 'south', id: '44-amer'},
        {dir: 'east', id: '45-5'},
        {dir: 'west', id: '45-7'},
      ],
    },
    {//Important!!
      id: 'broa-7',
      coord: [],
      name: 'Broadway and 7th Ave.',
      desc: `Times Square -- where the city's melting pot reaches a full boil. Every extreme of wealth and squalor rub shoulders here, and every conceivable hustle is in operation.`,
    //Important!! In this section, there is a guy who says: "And a sidewalk vendor wants to sell you a genuine gold chain stolen only five minutes ago from a woman standing in line to buy tickets to that long running hit musical, 42ND STREET. 'Check it out,' he chants, shaking the chain in your face, wanna buy this beauty cheap?'" 
    //The player can then respond with "no" for a response of: "The hustler leaves you and begins making his pitch to someone else halfway down the block."
    //When the player responds yes, the game continues to a bad end, in the following room.
    isStreet: true,
      exits: [
        {dir: 'north', id: '45-7'},
        {dir: 'south', id: '44-7'},
        {dir: 'east', id: '44-broa'},
        {dir: 'west', id: '45-broa'},
        {dir: ['yes', 'okay'], id: 'broa-7-A'},
      ],
    },
    {//Gets arrested and sent to trial
      id: 'broa-7-A',
      onEnter: () => {
        println(`That was dumb. The cops have been waiting for the last 15 minutes for someone to come along and compound the felony. A plainclothes detective flashes his badge and informs you you're under arrest.`);
        pressEnter('deat-1');
    },
      },//End of 45th Street & broa-7

//Start of 44th Street
    {
      id: '44-hhpw',
      coord: [],
      name: 'W. 44th St. and Henry Hudson Pkwy.',
      exits: [
        {dir: 'north', id: '57-hhpw'},
        {dir: 'south', id: '43-hhpw'},
        {dir: 'east', id: '44-12'},
        {dir: 'west', block:`You can’t go that way.`},
      ],
    },
    {
      id: '44-12',
      coord: [],
      name: 'W. 44th St. and 12th Ave.',
      exits: [
        {dir: 'north', id: '45-12'},
        {dir: 'south', id: '43-12'},
        {dir: 'east', id: '44-11'},
        {dir: 'west', id: '44-hhpw'},
      ],
    },
    {
      id: '44-11',
      coord: [],
      name: 'W. 44th St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '45-11'},
        {dir: 'south', id: '43-11'},
        {dir: 'east', id: '44-10'},
        {dir: 'west', id: '44-12'},
      ],
    },
    {
      id: '44-10',
      coord: [],
      name: 'W. 44th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '45-10'},
        {dir: 'south', id: '43-10'},
        {dir: 'east', id: '44-9'},
        {dir: 'west', id: '44-11'},
      ],
    },
    {
      id: '44-9',
      coord: [],
      name: 'W. 44th St. and 9th Ave.',
      desc: 'There is a Greek Gyro here.',
      exits: [
        {dir: 'north', id: '45-9'},
        {dir: 'south', id: '43-9'},
        {dir: 'east', id: '44-8'},
        {dir: 'west', id: '44-10'},
        {dir: ['enter', 'greek', 'gyro'], id: '44-9'},
      ],
    },
    {
      id: '44-8',
      coord: [],
      name: 'W. 44th St. and 8th Ave.',
      exits: [
        {dir: 'north', id: '45-8'},
        {dir: 'south', id: '43-8'},
        {dir: 'east', id: '44-7'},
        {dir: 'west', id: '44-9'},
      ],
    },
    {
      id: '44-7',
      coord: [],
      name: 'W. 44th St. and 7th Ave.',
      exits: [
        {dir: 'north', id: 'broa-7'},
        {dir: 'south', id: '43-7'},
        {dir: 'east', id: '44-broa'},
        {dir: 'west', id: '44-8'},
      ],
    },
    {
      id: '44-broa',
      coord: [],
      name: 'W. 44th St. and Broadway',
      exits: [
        {dir: 'north', id: 'broa-7'},
        {dir: 'south', id: '43-broa'},
        {dir: 'east', id: '44-amer'},
        {dir: 'west', id: '44-7'},
      ],
    },
    {
      id: '44-amer',
      coord: [],
      name: 'W. 44th St. and Ave. of Americas',
      desc: 'The faded elegance of the Algonquin Hotel still draws the theatre and writing crowd for cocktails and meals.',
      exits: [
        {dir: 'north', id: '45-amer'},
        {dir: 'south', id: '43-amer'},
        {dir: 'east', id: '44-5'},
        {dir: 'west', id: '44-broa'},
        {dir: ['enter', 'hotel', 'algonquin'], block:`You can’t go that way.`},
      ],
    },//End 44th Street

//Start 43rd Street
    {
      id: '43-hhpw',
      coord: [],
      name: 'W. 43rd St. and Henry Hudson Pkwy.',
      exits: [
        {dir: 'north', id: '44-hhpw'},
        {dir: 'south', id: '42-hhpw'},
        {dir: 'east', id: '43-12'},
        {dir: 'west', block:`You can’t go that way.`},
      ],
    },
    {
      id: '43-12',
      coord: [],
      name: 'W. 43rd St. and 12th Ave.',
      desc: 'There is a restaurant called Nedicks here.',
      exits: [
        {dir: 'north', id: '44-12'},
        {dir: 'south', id: '42-12'},
        {dir: 'east', id: '43-11'},
        {dir: 'west', id: '43-hhpw'},
        {dir: ['enter', 'nedicks'], id: '43-12-nedi'},
      ],
    },
    {
      id: '43-11',
      coord: [],
      name: 'W. 43rd St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '44-11'},
        {dir: 'south', id: '42-11'},
        {dir: 'east', id: '43-10'},
        {dir: 'west', id: '43-12'},
      ],
    },
    {
      id: '43-10',
      coord: [],
      name: 'W. 43rd St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '44-10'},
        {dir: 'south', id: '42-10'},
        {dir: 'east', id: '43-9'},
        {dir: 'west', id: '43-11'},
      ],
    },
    {
      id: '43-9',
      coord: [],
      name: 'W. 43rd St. and 9th Ave.',
      desc: 'There is a Chock Full-O-Nuts at this intersection.',
      exits: [
        {dir: 'north', id: '44-10'},
        {dir: 'south', id: '42-10'},
        {dir: 'east', id: '43-9'},
        {dir: 'west', id: '43-11'},
        {dir: ['enter', 'chock', 'nuts'], id: '43-9-chock'},
      ],
    },
    {
      id: '43-8',
      coord: [],
      name: 'W. 43rd St. and 8th Ave.',
      exits: [
        {dir: 'north', id: '44-8'},
        {dir: 'south', id: '42-8'},
        {dir: 'east', id: '43-7'},
        {dir: 'west', id: '43-9'},
      ],
    },
    {
      id: '43-7',
      coord: [],
      name: 'W. 43rd St. and 7th Ave.',
      desc: 'There is a subway entrance at this corner.',
      exits: [
        {dir: 'north', id: '44-7'},
        {dir: 'south', id: '42-7'},
        {dir: 'east', id: '43-broa'},
        {dir: 'west', id: '43-8'},
      ],
    },
    {
      id: '43-broa',
      coord: [],
      name: 'W. 43rd St. and Broadway',
      exits: [
        {dir: 'north', id: '44-broa'},
        {dir: 'south', id: '42-broa'},
        {dir: 'east', id: '43-amer'},
        {dir: 'west', id: '43-7'},
      ],
    },
    {
      id: '43-amer',
      coord: [],
      name: 'W. 43rd St. and Ave. of Americas',
      exits: [
        {dir: 'north', id: '44-amer'},
        {dir: 'south', id: '42-amer'},
        {dir: 'east', id: '43-5'},
        {dir: 'west', id: '43-broa'},
      ],
    },//End 43rd Street

//Start 42nd Street
    {
      id: '42-hhpw',
      coord: [],
      name: 'W. 42nd St. and Henry Hudson Pkwy.',
      exits: [
        {dir: 'north', id: '43-hhpw'},
        {dir: 'south', id: '39-hhpw'},
        {dir: 'east', id: '42-12'},
        {dir: 'west', block:`You can’t go that way.`},
      ],
    },
    {
      id: '42-12',
      coord: [],
      name: 'W. 42nd St. and 12th Ave.',
      exits: [
        {dir: 'north', id: '43-12'},
        {dir: 'south', id: '41-12'},
        {dir: 'east', id: '42-11'},
        {dir: 'west', id: '42-hhpw'},
      ],
    },
    {
      id: '42-11',
      coord: [],
      name: 'W. 42nd St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '43-11'},
        {dir: 'south', id: '41-11'},
        {dir: 'east', id: '42-10'},
        {dir: 'west', id: '42-12'},
      ],
    },
    {
      id: '42-10',
      coord: [],
      name: 'W. 42nd St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '43-10'},
        {dir: 'south', id: '41-10'},
        {dir: 'east', id: '42-dyer'},
        {dir: 'west', id: '42-11'},
        {dir: ['enter', 'nedicks'], id: '42-10-nedi'},
      ],
    },
    {
      id: '42-dyer',
      coord: [],
      name: 'W. 42nd St. and Dyer Ave.',
      desc: 'A row of new theatres struggle desperately to surmount the general decay of the area.',
      exits: [
        {dir: 'north', block:`You can’t go that way.`},
        {dir: 'east', id: '42-9'},
        {dir: 'west', id: '42-10'},
        {dir: 'south', id: '41-dyer'},
      ],
    },
    {//Possible description change
      id: '42-9',
      coord: [],
      name: 'W. 42nd St. and 9th Ave.',
      desc: 'This block long stretch of 42nd St. is another one lined with movie marquee after another advertising either the pornography of sex or the pornography of violence. Under these marquees are the pushers, pimps, muggers, junkies, hustlers and whores who represent the scuzzy reality the movies are glamourizing.',
      exits: [
        {dir: 'north', id: '43-9'},
        {dir: 'south', id: '41-9'},
        {dir: 'east', id: '42-8'},
        {dir: 'west', id: '42-dyer'},
      ],
    },
    {
      id: '42-8',
      coord: [],
      name: 'W. 42nd St. and 8th Ave.',
      exits: [
        {dir: 'north', id: '43-8'},
        {dir: 'south', id: '41-8'},
        {dir: 'east', id: '42-7'},
        {dir: 'west', id: '42-9'},
      ],
    },
    {
      id: '42-7',
      coord: [],
      name: 'W. 42nd St. and 7th Ave.',
      exits: [
        {dir: 'north', id: '43-7'},
        {dir: 'south', id: '41-7'},
        {dir: 'east', id: '42-broa'},
        {dir: 'west', id: '42-8'},
      ],
    },
    {
      id: '42-broa',
      coord: [],
      name: 'W. 42nd St. and Broadway',
      exits: [
        {dir: 'north', id: '43-broa'},
        {dir: 'south', id: '41-broa'},
        {dir: 'east', id: '42-amer'},
        {dir: 'west', id: '42-7'},
      ],
    },
    {
      id: '42-amer',
      coord: [],
      name: 'W. 42nd St. and Ave. of Americas',
      exits: [
        {dir: 'north', id: '43-amer'},
        {dir: 'south', id: '41-amer'},
        {dir: 'east', id: '42-5'},
        {dir: 'west', id: '42-broa'},
      ],
    },//End 42nd Street

//Start 41st Street
    {
      id: '41-12',
      coord: [],
      name: 'W. 41st St. and 12th Ave.',
      exits: [
        {dir: 'north', id: '42-12'},
        {dir: 'south', id: '40-12'},
        {dir: 'east', id: '41-11'},
        {dir: 'west', block:`You can’t go that way.`},
      ],
    },
    {
      id: '41-11',
      coord: [],
      name: 'W. 41st St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '42-11'},
        {dir: 'south', id: '40-11'},
        {dir: 'east', id: '41-galv'},
        {dir: 'west', id: '41-12'},
      ],
    },
    {
      id: '41-galv',
      coord: [],
      name: 'W. 41st St. and Galvin Ave.',
      exits: [
        {dir: 'north', block:`You can’t go that way.`},
        {dir: 'east', id: '41-10'},
        {dir: 'west', id: '41-11'},
        {dir: 'south', id: '40-galv'},
      ],
    },
    {
      id: '41-10',
      coord: [],
      name: 'W. 41st St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '42-10'},
        {dir: 'south', id: '40-10'},
        {dir: 'east', id: '41-dyer'},
        {dir: 'west', id: '41-galv'},
      ],
    },
    {
      id: '41-dyer',
      coord: [],
      name: 'W. 41st St. and Dyer Ave.',
      desc: 'There is a restaurant called Nedicks here.',
      exits: [
        {dir: 'north', id: '42-dyer'},
        {dir: 'south', id: 'bta-dyer'},
        {dir: 'east', id: '41-9'},
        {dir: 'west', id: '41-10'},
        {dir: ['enter', 'nedicks'], id: '41-dyer-nedi'},
      ],
    },
    {
      id: '41-9',
      coord: [],
      name: 'W. 41st St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '42-9'},
        {dir: 'south', id: 'bta-9'},
        {dir: 'east', id: '41-8'},
        {dir: 'west', id: '41-dyer'},
      ],
    },
    {
      id: '41-8',
      coord: [],
      name: 'W. 41st St. and 8th Ave.',
      desc: 'The enormous Port Authority Bus Terminal is a waystop for travelers and home to the squatters who sit at its entrance.',
      exits: [
        {dir: 'north', id: '42-8'},
        {dir: 'south', id: '40-8'},
        {dir: 'east', id: '41-7'},
        {dir: 'west', id: '41-9'},
      ],
    },
    {
      id: '41-7',
      coord: [],
      name: 'W. 41st St. and 7th Ave.',
      exits: [
        {dir: 'north', id: '42-7'},
        {dir: 'south', id: '40-7'},
        {dir: 'east', id: '41-broa'},
        {dir: 'west', id: '41-8'},
      ],
    },
    {
      id: '41-broa',
      coord: [],
      name: 'W. 41st St. and Broadway',
      exits: [
        {dir: 'north', id: '42-broa'},
        {dir: 'south', id: '40-broa'},
        {dir: 'east', id: '41-amer'},
        {dir: 'west', id: '41-7'},
      ],
    },
    {
      id: '41-amer',
      coord: [],
      name: 'W. 41st St. and Ave. of Americas',
      desc: 'There is a pizzeria here.',
      exits: [
        {dir: 'north', id: '42-amer'},
        {dir: 'south', id: '40-amer'},
        {dir: 'east', block:`You can’t go that way.`},
        {dir: 'west', id: '41-broa'},
        {dir: ['enter', 'pizza', 'pizzeria'], id: '41-amer-pizza'},
      ],
    },
//Start 40th Street
    {
      id: '40-12',
      coord: [],
      name: 'W. 40th St. and 12th Ave.',
      exits: [
        {dir: 'north', id: '41-12'},
        {dir: 'south', id: '39-12'},
        {dir: 'east', id: '40-11'},
        {dir: 'west', block:`You can’t go that way.`},
      ],
    },
    {
      id: '40-11',
      coord: [],
      name: 'W. 40th St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '41-11'},
        {dir: 'south', id: '39-11'},
        {dir: 'east', id: '40-galv'},
        {dir: 'west', id: '40-12'},
      ],
    },
    {
      id: '40-galv',
      coord: [],
      name: 'W. 40th St. and Galvin Ave.',
      exits: [
        {dir: 'north', id: '41-galv'},
        {dir: 'south', id: '39-galv'},
        {dir: 'east', id: '40-10'},
        {dir: 'west', id: '40-11'},
      ],
    },
    {
      id: '40-10',
      coord: [],
      name: 'W. 40th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '41-10'},
        {dir: 'south', id: '39-10'},
        {dir: 'east', id: 'bta-40'},
        {dir: 'west', id: '40-galv'},
      ],
    },//Bus Terminal Access
    {
      id: 'bta-galv',
      coord: [],
      name: 'Bus Terminal Access and Galvin Ave.',
      exits: [
        {dir: 'north', id: '40-galv'},
        {dir: 'south', id: '39-galv'},
        {dir: 'east', id: 'bta-10'},
        {dir: 'west', block:`You can’t go that way.`},
      ],
    },
    {
      id: 'bta-10',
      coord: [],
      name: 'Bus Terminal Access and 10th Ave.',
      exits: [
        {dir: 'north', id: '40-10'},
        {dir: 'south', id: '39-10'},
        {dir: 'east', id: 'bta-40'},
        {dir: 'west', id: 'bta-galv'},
      ],
    },
    {
      id: 'bta-40',
      coord: [],
      name: 'Bus Terminal Access and W. 40th St.',
      exits: [
        {dir: 'north', id: 'bta-dyer'},
        {dir: 'south', id: 'bta-10'},
        {dir: 'east', id: '40-dyer'},
        {dir: 'west', id: '40-10'},
      ],
    },
    {
      id: 'bta-dyer',
      coord: [],
      name: 'Bus Terminal Access and Dyer Ave.',
      exits: [
        {dir: 'north', id: 'bta-dyer'},
        {dir: 'south', id: '40-dyer'},
        {dir: 'east', id: 'bta-9'},
        {dir: 'west', id: 'bta-40'},
      ],
    },
    {
      id: 'bta-9',
      coord: [],
      name: 'Bus Terminal Access and 9th Ave.',
      exits: [
        {dir: 'north', id: '41-9'},
        {dir: 'south', id: '40-9'},
        {dir: 'east', block:`You can’t go that way.`},
        {dir: 'west', id: 'bta-dyer'},
      ],
    },//End Bus Terminal Access
{
      id: '40-dyer',
      coord: [],
      name: 'W. 40th St. and Dyer Ave.',
      desc: 'There is a pizzeria here.',
      exits: [
        {dir: 'north', id: 'bta-dyer'},
        {dir: 'south', id: '39-dyer'},
        {dir: 'east', id: '40-9'},
        {dir: 'west', id: 'bta-40'},
        {dir: ['enter', 'pizza', 'pizzeria'], id: '39-10'},
      ],
    },
    {
      id: '40-9',
      coord: [],
      name: 'W. 40th St. and 9th Ave.',
      exits: [
        {dir: 'north', id: 'bta-9'},
        {dir: 'south', id: '39-9'},
        {dir: 'east', id: '40-8'},
        {dir: 'west', id: '40-dyer'},
      ],
    },
    {
      id: '40-8',
      coord: [],
      name: 'W. 40th St. and 8th Ave.',
      exits: [
        {dir: 'north', id: '41-8'},
        {dir: 'south', id: '39-8'},
        {dir: 'east', id: '40-7'},
        {dir: 'west', id: '40-9'},
      ],
    },
    {
      id: '40-7',
      coord: [],
      name: 'W. 40th St. and 7th Ave.',
      exits: [
        {dir: 'north', id: '41-7'},
        {dir: 'south', id: '39-7'},
        {dir: 'east', id: '40-broa'},
        {dir: 'west', id: '40-8'},
      ],
    },
    {
      id: '40-broa',
      coord: [],
      name: 'W. 40th St. and Broadway',
      exits: [
        {dir: 'north', id: '41-broa'},
        {dir: 'south', id: '39-broa'},
        {dir: 'east', id: '40-amer'},
        {dir: 'west', id: '40-7'},
      ],
    },
    {
      id: '40-broa',
      coord: [],
      name: 'W. 40th St. and Broadway',
      desc: 'Here is a very unlikely swatch of Arcadia, a park as posh and demure as the nicest sort of cemetery. The social mix here is not so upscale as the scenery, but being about equally divided between drug pushers modeling the latest styles of sweat-suit chic and more conventionally dressed and generally older people trying to read books and newspapers.',
      exits: [
        {dir: 'north', id: '41-amer'},
        {dir: 'south', id: '39-amer'},
        {dir: 'east', id: '40-5'},
        {dir: 'west', id: '40-broa'},
      ],
    },//End 40th Street

//Start 39th Street
    {
      id: '39-hhpw',
      coord: [],
      name: 'W. 39th St. and Henry Hudson Pkwy.',
      exits: [
        {dir: 'north', id: '42-hhpw'},
        {dir: 'south', id: '34-hhpw'},
        {dir: 'east', id: '39-12'},
        {dir: 'west', block:`You can’t go that way.`},
      ],
    },
    {
      id: '39-12',
      coord: [],
      name: 'W. 39th St. and 12th Ave.',
      exits: [
        {dir: 'north', id: '40-12'},
        {dir: 'south', id: '34-12'},
        {dir: 'east', id: '39-11'},
        {dir: 'west', id: '39-hhpw'},
      ],
    },
    {
      id: '39-11',
      coord: [],
      name: 'W. 39th St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '40-11'},
        {dir: 'south', id: '38-11'},
        {dir: 'east', id: '39-galv'},
        {dir: 'west', id: '39-12'},
      ],
    },
    {
      id: '39-galv',
      coord: [],
      name: 'W. 39th St. and Galvin Ave.',
      exits: [
        {dir: 'north', id: 'bta-galv'},
        {dir: 'east', id: '39-10'},
        {dir: 'west', id: '39-11'},
        {dir: 'south', block:`You can’t go that way.`},
      ],
    },
    {
      id: '39-10',
      coord: [],
      name: 'W. 39th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: 'bta-10'},
        {dir: 'south', id: '38-10'},
        {dir: 'east', id: '39-dyer'},
        {dir: 'west', id: '39-galv'},
      ],
    },
    {
      id: '39-dyer',
      coord: [],
      name: 'W. 39th St. and Dyer Ave.',
      exits: [
        {dir: 'north', id: '40-dyer'},
        {dir: 'south', id: 'linc-dyer'},
        {dir: 'east', id: '39-9'},
        {dir: 'west', id: '39-10'},
      ],
    },
    {
      id: 'linc-dyer',
      coord: [],
      name: 'Lincoln Tunnel and Dyer Ave.',
      exits: [
        {dir: 'north', id: '39-dyer'},
        {dir: 'south', id: '38-dyer'},
        {dir: 'east', block:`You can’t go that way.`},
        {dir: 'west', block:`You can’t go that way.`},
      ],
    },
    {
      id: '39-9',
      coord: [],
      name: 'W. 39th St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '40-9'},
        {dir: 'south', id: '38-9'},
        {dir: 'east', id: '39-8'},
        {dir: 'west', id: '39-dyer'},
      ],
    },
    {
      id: '39-8',
      coord: [],
      name: 'W. 39th St. and 8th Ave.',
      exits: [
        {dir: 'north', id: '40-8'},
        {dir: 'south', id: '38-8'},
        {dir: 'east', id: '39-7'},
        {dir: 'west', id: '39-9'},
      ],
    },
    {
      id: '39-7',
      coord: [],
      name: 'W. 39th St. and 7th Ave.',
      exits: [
        {dir: 'north', id: '40-7'},
        {dir: 'south', id: '38-7'},
        {dir: 'east', id: '39-broa'},
        {dir: 'west', id: '39-8'},
      ],
    },
    {
      id: '39-broa',
      coord: [],
      name: 'W. 39th St. and Broadway',
      desc: 'There is a Chock Full-O-Nuts at this intersection.',
      exits: [
        {dir: 'north', id: '40-broa'},
        {dir: 'south', id: '38-broa'},
        {dir: 'east', id: '39-amer'},
        {dir: 'west', id: '39-7'},
        {dir: ['enter', 'chock', 'nuts'], id: '39-broa-chock'},
      ],
    },
    {
      id: '39-amer',
      coord: [],
      name: 'W. 39th St. and Ave. of Americas',
      exits: [
        {dir: 'north', id: '40-amer'},
        {dir: 'south', id: '38-amer'},
        {dir: 'east', id: '39-5'},
        {dir: 'west', id: '39-broa'},
      ],
    },
//Start 38th Street
    {
      id: '38-11',
      coord: [],
      name: 'W. 38th St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '39-11'},
        {dir: 'south', id: '37-11'},
        {dir: 'east', id: '38-10'},
        {dir: 'west', block:`You can’t go that way.`},
      ],
    },
    {
      id: '38-10',
      coord: [],
      name: 'W. 38th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '39-10'},
        {dir: 'south', id: '37-10'},
        {dir: 'east', id: '38-dyer'},
        {dir: 'west', id: '38-11'},
      ],
    },
    {
      id: '38-dyer',
      coord: [],
      name: 'W. 38th St. and Dyer Ave.',
      exits: [
        {dir: 'north', id: 'linc-dyer'},
        {dir: 'south', id: '37-dyer'},
        {dir: 'east', id: '38-9'},
        {dir: 'west', id: '38-10'},
      ],
    },
    {
      id: '38-9',
      coord: [],
      name: 'W. 38th St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '39-9'},
        {dir: 'south', id: '37-9'},
        {dir: 'east', id: '38-8'},
        {dir: 'west', id: '38-dyer'},
      ],
    },
    {
      id: '38-8',
      coord: [],
      name: 'W. 38th St. and 8th Ave.',
      exits: [
        {dir: 'north', id: '39-8'},
        {dir: 'south', id: '37-8'},
        {dir: 'east', id: '38-7'},
        {dir: 'west', id: '38-9'},
      ],
    },
    {
      id: '38-7',
      coord: [],
      name: 'W. 38th St. and 7th Ave.',
      exits: [
        {dir: 'north', id: '39-7'},
        {dir: 'south', id: '37-7'},
        {dir: 'east', id: '38-broa'},
        {dir: 'west', id: '38-8'},
      ],
    },
    {
      id: '38-broa',
      coord: [],
      name: 'W. 38th St. and Broadway',
      exits: [
        {dir: 'north', id: '39-broa'},
        {dir: 'south', id: '37-broa'},
        {dir: 'east', id: '38-amer'},
        {dir: 'west', id: '38-7'},
      ],
    },
    {
      id: '38-amer',
      coord: [],
      name: 'W. 38th St. and Ave. of Americas',
      exits: [
        {dir: 'north', id: '39-amer'},
        {dir: 'south', id: '37-amer'},
        {dir: 'east', id: '38-5'},
        {dir: 'west', id: '38-broa'},
      ],
    },

//Start 37th Street
    {
      id: '37-11',
      coord: [],
      name: 'W. 37th St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '38-11'},
        {dir: 'south', id: '36-11'},
        {dir: 'east', id: '37-10'},
        {dir: 'west', block:`You can’t go that way.`},
      ],
    },
    {
      id: '37-10',
      coord: [],
      name: 'W. 37th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '38-10'},
        {dir: 'south', id: '36-10'},
        {dir: 'east', id: '37-dyer'},
        {dir: 'west', id: '37-11'},
      ],
    },
    {
      id: '37-dyer',
      coord: [],
      name: 'W. 37th St. and Dyer Ave.',
      exits: [
        {dir: 'north', id: '38-dyer'},
        {dir: 'south', id: '36-dyer'},
        {dir: 'east', id: '37-9'},
        {dir: 'west', id: '37-10'},
      ],
    },
    {
      id: '37-9',
      coord: [],
      name: 'W. 37th St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '38-9'},
        {dir: 'south', id: '36-9'},
        {dir: 'east', id: '37-8'},
        {dir: 'west', id: '37-dyer'},
      ],
    },
    {
      id: '37-8',
      coord: [],
      name: 'W. 37th St. and 8th Ave.',
      exits: [
        {dir: 'north', id: '38-8'},
        {dir: 'south', id: '36-8'},
        {dir: 'east', id: '37-7'},
        {dir: 'west', id: '37-9'},
      ],
    },
    {
      id: '37-7',
      coord: [],
      name: 'W. 37th St. and 7th Ave.',
      exits: [
        {dir: 'north', id: '38-7'},
        {dir: 'south', id: '36-7'},
        {dir: 'east', id: '37-broa'},
        {dir: 'west', id: '37-8'},
      ],
    },
    {
      id: '37-broa',
      coord: [],
      name: 'W. 37th St. and Broadway',
      exits: [
        {dir: 'north', id: '38-broa'},
        {dir: 'south', id: '36-broa'},
        {dir: 'east', id: '37-amer'},
        {dir: 'west', id: '37-7'},
      ],
    },
    {
      id: '37-amer',
      coord: [],
      name: 'W. 37th St. and Ave. of Americas',
      exits: [
        {dir: 'north', id: '38-amer'},
        {dir: 'south', id: '36-amer'},
        {dir: 'east', id: '37-5'},
        {dir: 'west', id: '37-broa'},
      ],
    },

//Start 36th Street
    {
      id: '36-11',
      coord: [],
      name: 'W. 36th St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '37-11'},
        {dir: 'south', id: '35-11'},
        {dir: 'east', id: '36-10'},
        {dir: 'west', block:`You can’t go that way.`},
      ],
    },
    {
      id: '36-10',
      coord: [],
      name: 'W. 36th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '37-10'},
        {dir: 'south', id: '35-10'},
        {dir: 'east', id: '36-dyer'},
        {dir: 'west', id: '36-11'},
      ],
    },
    {
      id: '36-dyer',
      coord: [],
      name: 'W. 36th St. and Dyer Ave.',
      exits: [
        {dir: 'north', id: '37-dyer'},
        {dir: 'south', id: '35-dyer'},
        {dir: 'east', id: '36-9'},
        {dir: 'west', id: '36-10'},
      ],
    },
    {
      id: '36-9',
      coord: [],
      name: 'W. 36th St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '37-9'},
        {dir: 'south', id: '35-9'},
        {dir: 'east', id: '36-8'},
        {dir: 'west', id: '36-dyer'},
      ],
    },
    {
      id: '36-8',
      coord: [],
      name: 'W. 36th St. and 8th Ave.',
      exits: [
        {dir: 'north', id: '37-8'},
        {dir: 'south', id: '35-8'},
        {dir: 'east', id: '36-7'},
        {dir: 'west', id: '36-9'},
      ],
    },
    {
      id: '36-7',
      coord: [],
      name: 'W. 36th St. and 7th Ave.',
      exits: [
        {dir: 'north', id: '37-7'},
        {dir: 'south', id: '35-7'},
        {dir: 'east', id: '36-broa'},
        {dir: 'west', id: '36-8'},
      ],
    },
    {
      id: '36-broa',
      coord: [],
      name: 'W. 36th St. and Broadway',
      exits: [
        {dir: 'north', id: '37-broa'},
        {dir: 'south', id: '35-broa'},
        {dir: 'east', id: '36-amer'},
        {dir: 'west', id: '36-7'},
      ],
    },
    {
      id: '36-amer',
      coord: [],
      name: 'W. 36th St. and Ave. of Americas',
      exits: [
        {dir: 'north', id: '37-amer'},
        {dir: 'south', id: '35-amer'},
        {dir: 'east', id: '36-5'},
        {dir: 'west', id: '36-broa'},
      ],
    },

//Start 35th Street
    {
      id: '35-11',
      coord: [],
      name: 'W. 35th St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '36-11'},
        {dir: 'south', id: '34-11'},
        {dir: 'east', id: '35-10'},
        {dir: 'west', block:`You can’t go that way.`},
      ],
    },
    {
      id: '35-10',
      coord: [],
      name: 'W. 35th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '36-10'},
        {dir: 'south', id: '34-10'},
        {dir: 'east', id: '35-dyer'},
        {dir: 'west', id: '35-11'},
      ],
    },
    {
      id: '35-dyer',
      coord: [],
      name: 'W. 35th St. and Dyer Ave.',
      exits: [
        {dir: 'north', id: '36-dyer'},
        {dir: 'south', id: '34-dyer'},
        {dir: 'east', id: '35-9'},
        {dir: 'west', id: '35-10'},
      ],
    },
    {
      id: '35-9',
      coord: [],
      name: 'W. 35th St. and 9th Ave.',
      exits: [
        {dir: 'north', id: '36-9'},
        {dir: 'south', id: '34-9'},
        {dir: 'east', id: '35-8'},
        {dir: 'west', id: '35-dyer'},
      ],
    },
    {
      id: '35-8',
      coord: [],
      name: 'W. 35th St. and 8th Ave.',
      desc: `'Watch out where you're going!' You step into the gutter just in time to escape being rammed by a wheeled garment rack full of next fall's fashions.`,
      exits: [
        {dir: 'north', id: '36-8'},
        {dir: 'south', id: '34-8'},
        {dir: 'east', id: '35-7'},
        {dir: 'west', id: '35-9'},
      ],
    },
    {
      id: '35-7',
      coord: [],
      name: 'W. 35th St. and 7th Ave.',
      exits: [
        {dir: 'north', id: '36-7'},
        {dir: 'south', id: '34-7'},
        {dir: 'east', id: '35-broa'},
        {dir: 'west', id: '35-8'},
      ],
    },
    {
      id: '35-broa',
      coord: [],
      name: 'W. 35th St. and Broadway',
      desc: `There is a Chock Full-O-Nuts at this intersection.`,
      exits: [
        {dir: 'north', id: '36-broa'},
        {dir: 'south', id: '34-broa'},
        {dir: 'east', id: '35-amer'},
        {dir: 'west', id: '35-7'},
        {dir: ['enter', 'chock', 'nuts'], id: '35-broa-chock'},
      ],
    },
    {
      id: '35-amer',
      coord: [],
      name: 'W. 35th St. and Ave. of Americas',
      exits: [
        {dir: 'north', id: '36-amer'},
        {dir: 'south', id: '34-amer'},
        {dir: 'east', id: '35-5'},
        {dir: 'west', id: '35-broa'},
      ],
    },

//Start 34th Street
    {
      id: '34-hhpw',
      coord: [],
      name: 'W. 34th St. and Henry Hudson Pkwy.',
      exits: [
        {dir: 'north', id: '39-hhpw'},
        {dir: 'south', id: '23-hhpw'},
        {dir: 'east', id: '34-12'},
        {dir: 'west', block:`You can’t go that way.`},
      ],
    },
    {
      id: '34-11',
      coord: [],
      name: 'W. 34th St. and 11th Ave.',
      exits: [
        {dir: 'north', id: '35-11'},
        {dir: 'south', id: '33-11'},
        {dir: 'east', id: '34-10'},
        {dir: 'west', id: '34-12'},
      ],
    },
    {
      id: '34-10',
      coord: [],
      name: 'W. 34th St. and 10th Ave.',
      exits: [
        {dir: 'north', id: '35-10'},
        {dir: 'south', id: '33-10'},
        {dir: 'east', id: '34-dyer'},
        {dir: 'west', id: '34-11'},
      ],
    },
    {
      id: '34-dyer',
      coord: [],
      name: 'W. 34th St. and Dyer Ave.',
      exits: [
        {dir: 'north', id: '35-dyer'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '34-9'},
        {dir: 'west', id: '34-10'},
      ],
    },
    {
      id: '34-9',
      coord: [],
      name: 'W. 34th St. and 9th Ave.',
      desc: 'There is a restaurant called Nedicks here.',
      exits: [
        {dir: 'north', id: '35-9'},
        {dir: 'south', id: '33-9'},
        {dir: 'east', id: '34-8'},
        {dir: 'west', id: '34-dyer'},
        {dir: ['enter', 'restaurant', 'nedicks'], id: '34-9-nedi'},
      ],
    },
    {
      id: '34-8',
      coord: [],
      name: 'W. 34th St. and 8th Ave.',
      exits: [
        {dir: 'north', id: '35-8'},
        {dir: 'south', id: '33-8'},
        {dir: 'east', id: '34-7'},
        {dir: 'west', id: '34-9'},
      ],
    },
    {
      id: '34-7',
      coord: [],
      name: 'W. 34th St. and 7th Ave.',
      exits: [
        {dir: 'north', id: '35-7'},
        {dir: 'south', id: '33-7'},
        {dir: 'east', id: '34-broa'},
        {dir: 'west', id: '34-8'},
      ],
    },
    {
      id: '34-broa',
      coord: [],
      name: 'W. 34th St. and Broadway',
      exits: [
        {dir: 'north', id: '35-broa'},
        {dir: 'south', id: '33-broa'},
        {dir: 'east', id: '34-amer'},
        {dir: 'west', id: '34-7'},
      ],
    },
    {
      id: '34-amer',
      coord: [],
      name: 'W. 34th St. and Ave. of Americas',
      exits: [
        {dir: 'north', id: '35-amer'},
        {dir: 'south', id: '33-amer'},
        {dir: 'east', id: '34-5'},
        {dir: 'west', id: '34-broa'},
      ],
    },
     /*********************/
    /* Midtown East Side */
   /*********************/
    {
      id: 'hote-exit',
      coord: [],
      name: 'Sunderland Hotel Lobby',
      desc: `You exit the Sunderland with a feeling a POW must have when he cuts through the last strands of barbed wire separating him from freedom. It feels great to be a single faceless, nameless atom among the million others churning about in the grid of Manhattan's streets. It feels safe.`,
      isStreet: true,
      onEnter: () => {
        pressEnter('hote-exit1');
      },
      exits: []
    },
    {
      id: 'hote-exit1',
      coord: [],
      name: 'Sunderland Hotel Lobby',
      desc: `Here it is already night time, but the sidewalks are still teeming with people, and the streets are heavily trafficked, and bright with the sum-total wattage of so many streetlights, headlights, and lighted signs. In the windows of the darkened shopfronts, you see yourself mirrored and feel an utterly inappropiate glow of vanity.
            
            The white tux makes you look like a refugee from the chorus line of a Thirties musical comedy, and in a peculiar way it serves as camouflage. People stare, but they're staring at the tux, not at you.`,
      onEnter: () => {
        pressEnter('hote-exit2');
      },
      exits: []
    },
    {
      id: 'hote-exit2',
      coord: [],
      name: 'Sunderland Hotel Lobby',
      desc: `As you approach Fifth Avenue, the brief buoyancy of feeling free gives way to ordinary what-now anxieties. You've got no money, no credit card, nowhere to sleep (you certainly can't stay on at the Sunderland), and no visible means of support.`,
      isStreet: true,
      onEnter: () => {
        pressEnter('hote-exit3');
      },
      exits: []
    },
    {
      id: 'hote-exit3',
      coord: [],
      name: 'Sunderland Hotel Lobby',
      desc: `At the corner you watch a blind man with a tin cup slowly progress down Fifth Avenue, rattling coins at the milling pedestrians. Most of them are too caught up in their own business even to notice the blind man. A few do see him and veer widely around him, as though fearing the rattle of his cup
            
            A black man pauses, considers, digs into his pocket, and drops a quarter in the cup. He notices you watching this act of charity, and as he walks by you a moment later, he says, "There but for the grace of God, eh?"
            
            You nod your head thoughtfully.`,
      onEnter: () => {
        pressEnter('53-5');
      },
      exits: []
    },
    {
      id: '53-5',
      coord: [32.732, -6.902],
      name: 'W. 53rd St. and 5th Ave.',
      desc: `On 53rd Street stands the Sunderland hotel. Across the street, a glass tower rises above the Museum of Modern Art == New York's big MOMA.`,
      isStreet: true,
      onEnter: () => {
        reenableInput();
      },
      exits: [
        {dir: 'north', id: '54-5'},
        {dir: 'south', id: '52-5'},
        {dir: 'east', id: '53-madi'},
        {dir: 'west', id: '53-amer'}, 
        {dir: ['Sunderland', 'hotel'], id: '????'},
      ]
    },
    {
      id: '54-5',
      coord: [],
      name: 'W. 54th St. and 5th Ave.',
      desc: `There is a subway entrance at this corner.`,
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '55-5'},
        {dir: 'south', id: '53-5'},
        {dir: 'east', id: '54-madi'},
        {dir: 'west', id: '54-amer'}, 
        {dir: ['subway'], id: '????'},
      ]
    },
    {
      id: '55-5',
      coord: [],
      name: 'W. 55th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '56-5'},
        {dir: 'south', id: '54-5'},
        {dir: 'east', id: '55-madi'},
        {dir: 'west', id: '55-amer'}, 
      ]
    },
    {
      id: '56-5',
      coord: [],
      name: 'W. 56th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '57-5'},
        {dir: 'south', id: '55-5'},
        {dir: 'east', id: '56-madi'},
        {dir: 'west', id: '56-amer'}, 
      ]
    },
    {
      id: '57-5',
      coord: [],
      name: 'W. 57th St. and 5th Ave.',
      desc: `Every block, every shop front, in this part of town seems to bear another Famous Name. This corner, which from a distance looked like a large granite tombstone, turns out on closer inspection to be none other than that celebrated breakfast club, Tiffany’s. Inside each of the tiny windows in the fortress-like facade is a modest bouquet of tea-roses, each held together by about $50,000 worth of diamonds, pearls, emeralds, and rubies. An ideal low-cholesterol breakfast.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '58-5'},
        {dir: 'south', id: '56-5'},
        {dir: 'east', id: '57-madi'},
        {dir: 'west', id: '57-amer'}, 
      ]
    },
    {
      id: '58-5',
      coord: [],
      name: 'W. 58th St. and 5th Ave.',
      desc: `There are certain buildings--the Pyramids, St. Peter’s in Rome, the White House--that even an amnesiac would probably recognize. And here’s another--the Plaza Hotel. One limousine after another pulls up to the brazen art nouveau canopy, like filings of money drawn irresistibly to a great Money Magnet.`,
      isStreet: true,
      onEnter: () => {
        reenableInput();
      },
      exits: [
        {dir: 'north', id: '59-5'},
        {dir: 'south', id: '57-5'},
        {dir: 'east', id: '58-madi'},
        {dir: 'west', id: '58-wdri'},
        {dir: ['plaza', 'hotel'], id: 'plaz-hote'}
      ]
    },
    {
      id: 'plaz-hote',
      coord: [],
      name: 'Lobby of the Plaza Hotel',
      desc: `You enter the Plaza, and the lobby is more splendid than the facade. Marble, gilt, carpets, chandeliers, potted palms--the works. A voice deep inside you says you belong here, but the look on the face of the liveried security guard says that you don’t. You ignore the voice deep inside and leave with a sigh of regret.`,
      isStreet: true,
      exits: [],
      onEnter: () => {
        pressEnter('58-5')
      },
    },
    {
      id: '59-madi',
      coord: [],
      name: 'E. 59th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '60-madi'},
        {dir: 'south', id: '58-madi'},
        {dir: 'east', id: '59-park'},
        {dir: 'west', id: '59-5'},
      ]
    },
    {
      id: '58-madi',
      coord: [],
      name: 'E. 58th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '59-madi'},
        {dir: 'south', id: '57-madi'},
        {dir: 'east', id: '58-park'},
        {dir: 'west', id: '58-5'},
      ]
    },
    {
      id: '57-madi',
      coord: [],
      name: 'E. 57th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '58-madi'},
        {dir: 'south', id: '56-madi'},
        {dir: 'east', id: '57-park'},
        {dir: 'west', id: '57-5'},
      ]
    },
    {
      id: '56-madi',
      coord: [],
      name: 'E. 56th St. and Madison Ave.',
      desc: `The sign above the store's front window, written in letters that imitate a dot-matrix printout, says: User-Friendly Computer Store.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '57-madi'},
        {dir: 'south', id: '55-madi'},
        {dir: 'east', id: '56-park'},
        {dir: 'west', id: '56-5'},
        {dir: ['computer', 'store'], id: 'user-frie'}
      ]
    },
    {
      id: '56-madi',
      coord: [],
      name: 'E. 56th St. and Madison Ave.',
      desc: `As you come to the corner of Madison Avenue, you notice, halfway down the block a shop front that seems somehow familiar. The sign above the front window, written in letters that imitate a dot-matrix printout, says:

            USER-FRIENDLY

            COMPUTER STORE.`,
      exits: [
        {dir: 'north', id: '57-madi'},
        {dir: 'south', id: '55-madi'},
        {dir: 'east', id: '56-park'},
        {dir: 'west', id: '56-5'},
        {dir: ['computer', 'store', 'user', 'friendly'], id: 'user-frie'}
      ]
    },
    {
      id: '55-madi',
      coord: [],
      name: 'E. 55th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '56-madi'},
        {dir: 'south', id: '54-madi'},
        {dir: 'east', id: '55-park'},
        {dir: 'west', id: '55-5'},
      ]
    },
    {
      id: '54-madi',
      coord: [],
      name: 'E. 54th St. and Madison Ave.',
      desc: `There is a Chock Full-O-Nuts at this intersection.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '55-madi'},
        {dir: 'south', id: '53-madi'},
        {dir: 'east', id: '54-park'},
        {dir: 'west', id: '54-5'},
        {dir: ['chock', 'full-o-nuts'], id: 'choc-nuts'}
      ]
    },
    {
      id: '53-madi',
      coord: [],
      name: 'E. 53rd St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '54-madi'},
        {dir: 'south', id: '52-madi'},
        {dir: 'east', id: '53-park'},
        {dir: 'west', id: '53-5'},
      ]
    },
    {
      id: '52-madi',
      coord: [],
      name: 'E. 52nd St. and Madison Ave.',
      desc: `Park Plaza – In the sterile griminess of New York, a patch of green is good to see – but this 50-story glass structure does not remind you of meadows or forests; it is more like congealed lake water. `,
      isStreet: true,
      exits: [
        {dir: 'north', id: '53-madi'},
        {dir: 'south', id: '51-madi'},
        {dir: 'east', id: '52-park'},
        {dir: 'west', id: '52-5'},
        {dir: ['park', 'plaza'], id: 'park-plaz'},
      ]
    },
    {
      id: '51-madi',
      coord: [],
      name: 'E. 51st St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '52-madi'},
        {dir: 'south', id: '50-madi'},
        {dir: 'east', id: '51-park'},
        {dir: 'west', id: '51-5'},
      ]
    },
    {
      id: '50-madi',
      coord: [],
      name: 'E. 50th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '51-madi'},
        {dir: 'south', id: '49-madi'},
        {dir: 'east', id: '50-park'},
        {dir: 'west', id: '50-5'},
      ]
    },
    {
      id: '49-madi',
      coord: [],
      name: 'E. 49th St. and Madison Ave.',
      desc: `There is a Chock Full-O-Nuts at this intersection.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '50-madi'},
        {dir: 'south', id: '48-madi'},
        {dir: 'east', id: '49-park'},
        {dir: 'west', id: '49-5'},
        {dir: ['chock', 'full-o-nuts',], id: 'choc-nuts'}
      ]
    },
    {
      id: '48-madi',
      coord: [],
      name: 'E. 48th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '49-madi'},
        {dir: 'south', id: '47-madi'},
        {dir: 'east', id: '48-park'},
        {dir: 'west', id: '48-5'},
      ]
    },
    {
      id: '47-madi',
      coord: [],
      name: 'E. 47th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '48-madi'},
        {dir: 'south', id: '46-madi'},
        {dir: 'east', id: '47-vand'},
        {dir: 'west', id: '47-5'},
      ]
    },
    {
      id: '46-madi',
      coord: [],
      name: 'E. 46th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '47-madi'},
        {dir: 'south', id: '45-madi'},
        {dir: 'east', id: '46-vand'},
        {dir: 'west', id: '46-5'},
      ]
    },
    {
      id: '45-madi',
      coord: [],
      name: 'E. 45th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '46-madi'},
        {dir: 'south', id: '44-madi'},
        {dir: 'east', id: '45-vand'},
        {dir: 'west', id: '45-5'},
      ]
    },
    {
      id: '44-madi',
      coord: [],
      name: 'E. 44th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '45-madi'},
        {dir: 'south', id: '43-madi'},
        {dir: 'east', id: '44-vand'},
        {dir: 'west', id: '44-5'},
      ]
    },
    {
      id: '43-madi',
      coord: [],
      name: 'E. 43rd St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '44-madi'},
        {dir: 'south', id: '42-madi'},
        {dir: 'east', id: '43-vand'},
        {dir: 'west', id: '43-5'},
      ]
    },
    {
      id: '42-madi',
      coord: [],
      name: 'E. 42nd St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '43-madi'},
        {dir: 'south', id: '41-madi'},
        {dir: 'east', id: '42-vand'},
        {dir: 'west', id: '42-5'},
      ]
    },
    {
      id: '41-madi',
      coord: [],
      name: 'E. 41st St. and Madison Ave.',
      desc: `There is a Chock Full-O-Nuts at this intersection.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '42-madi'},
        {dir: 'south', id: '40-madi'},
        {dir: 'east', id: '41-park'},
        {dir: 'west', id: '41-5'},
        {dir: ['chock', 'full-o-nuts', 'enter'], id: 'choc-nuts'}
      ]
    },
    {
      id: '40-madi',
      coord: [],
      name: 'E. 40th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '41-madi'},
        {dir: 'south', id: '39-madi'},
        {dir: 'east', id: '40-park'},
        {dir: 'west', id: '40-5'},
      ]
    },
    {
      id: '39-madi',
      coord: [],
      name: 'E. 39th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '40-madi'},
        {dir: 'south', id: '38-madi'},
        {dir: 'east', id: '39-park'},
        {dir: 'west', id: '39-5'},
      ]
    },
    {
      id: '39-madi',
      coord: [],
      name: 'E. 39th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '40-madi'},
        {dir: 'south', id: '38-madi'},
        {dir: 'east', id: '39-park'},
        {dir: 'west', id: '39-5'},
      ]
    },
    {
      id: '38-madi',
      coord: [],
      name: 'E. 38th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '39-madi'},
        {dir: 'south', id: '37-madi'},
        {dir: 'east', id: '38-park'},
        {dir: 'west', id: '38-5'},
      ]
    },
    {
      id: '37-madi',
      coord: [],
      name: 'E. 37th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '38-madi'},
        {dir: 'south', id: '36-madi'},
        {dir: 'east', id: '37-park'},
        {dir: 'west', id: '37-5'},
      ]
    },
    {
      id: '36-madi',
      coord: [],
      name: 'E. 36th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '37-madi'},
        {dir: 'south', id: '35-madi'},
        {dir: 'east', id: '36-park'},
        {dir: 'west', id: '36-5'},
      ]
    },
    {
      id: '35-madi',
      coord: [],
      name: 'E. 35th St. and Madison Ave.',
      desc: `Somewhere in Manhattan there seems to be a piece of architecture corresponding to every period in history. This one here is definitely the High Renaissance. Lorenzo de Medici couldn’t have asked for a nobler palazzo. Until you’re right up beside it you would even guess that all these columns and cornices were the wrappings of a department store--because Altman’s doesn’t believe in vulgar ostentation like signs. Neither did Lorenzo the Magnificent, probably.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '36-madi'},
        {dir: 'south', id: '34-madi'},
        {dir: 'east', id: '35-park'},
        {dir: 'west', id: '35-5'},
        {dir: [`Altman's`,], id: '????'},
      ]
    },
    {
      id: '34-madi',
      coord: [],
      name: 'E. 34th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-madi'},
        {dir: 'south', id: '33-madi'},
        {dir: 'east', id: '34-park'},
        {dir: 'west', id: '34-5'},
      ]
    },
    {
      id: '34-5',
      coord: [],
      name: 'W. 34th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-5'},
        {dir: 'south', id: '33-5'},
        {dir: 'east', id: '34-madi'},
        {dir: 'west', id: '34-amer'},
      ]
    },
    {
      id: '35-5',
      coord: [1.784, -6.296],
      name: 'W. 35th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '36-5'},
        {dir: 'south', id: '34-5'},
        {dir: 'east', id: '35-madi'},
        {dir: 'west', id: '35-amer'},
      ]
    },
    {
      id: '36-5',
      coord: [],
      name: 'W. 36th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '37-5'},
        {dir: 'south', id: '35-5'},
        {dir: 'east', id: '36-madi'},
        {dir: 'west', id: '36-amer'},
      ]
    },
    {
      id: '37-5',
      coord: [],
      name: 'W. 37th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '38-5'},
        {dir: 'south', id: '36-5'},
        {dir: 'east', id: '37-madi'},
        {dir: 'west', id: '37-amer'},
      ]
    },
    {
      id: '38-5',
      coord: [],
      name: 'W. 38th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '39-5'},
        {dir: 'south', id: '37-5'},
        {dir: 'east', id: '38-madi'},
        {dir: 'west', id: '38-amer'},
      ]
    },
    {
      id: '38-5',
      coord: [],
      name: 'W. 38th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '39-5'},
        {dir: 'south', id: '37-5'},
        {dir: 'east', id: '38-madi'},
        {dir: 'west', id: '38-amer'},
      ]
    },
    {
      id: '39-5',
      coord: [],
      name: 'W. 39th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '40-5'},
        {dir: 'south', id: '38-5'},
        {dir: 'east', id: '39-madi'},
        {dir: 'west', id: '39-amer'},
      ]
    },
    {
      id: '40-5',
      coord: [],
      name: 'W. 40th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '41-5'},
        {dir: 'south', id: '39-5'},
        {dir: 'east', id: '40-madi'},
        {dir: 'west', id: '40-amer'},
      ]
    },
    {
      id: '41-5',
      coord: [],
      name: 'W. 41st St. and 5th Ave.',
      desc: `Two large, smug lions flank the steps that lead up to the monumental triple triumphant arch of the main branch of the Public Library. This has got to be the world’s classiest set of bookshelves.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '42-5'},
        {dir: 'south', id: '40-5'},
        {dir: 'east', id: '41-madi'},
        {dir: 'west', id: '41-amer'},
        {dir: ['public', 'library',], id: 'publ-libr'}
      ]
    },
    {
      id: '42-5',
      coord: [],
      name: 'W. 42nd St. and 5th Ave.',
      desc: `There is a subway entrance at this corner.`,
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '43-5'},
        {dir: 'south', id: '41-5'},
        {dir: 'east', id: '42-madi'},
        {dir: 'west', id: '42-amer'},
        {dir: ['Subway'], id: '????'},
      ]
    },
    {
      id: '43-5',
      coord: [],
      name: 'W. 43rd St. and 5th Ave.',
      desc: `here is the Princeton Club - distinctly a members only institution.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '44-5'},
        {dir: 'south', id: '42-5'},
        {dir: 'east', id: '43-madi'},
        {dir: 'west', id: '43-amer'},
        {dir: ['Princeton', 'Health', 'Club',], id: '????'},
      ]
    },
    {
      id: '44-5',
      coord: [],
      name: 'W. 44th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '45-5'},
        {dir: 'south', id: '43-5'},
        {dir: 'east', id: '44-madi'},
        {dir: 'west', id: '44-amer'},
      ]
    },
    {
      id: '45-5',
      coord: [],
      name: 'W. 45th St. and 5th Ave.',
      desc: `An ideal spot for a would-be traveler. This block is lined with offices of Qantas, British Airways, Northwest Orient, and Aeroflot.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '46-5'},
        {dir: 'south', id: '44-5'},
        {dir: 'east', id: '45-madi'},
        {dir: 'west', id: '45-amer'},
        {dir: ['qantas', 'british', 'airways', 'northwest', 'orient', 'aeroflot'], id: '????'}
      ]
    },
    {
      id: '46-5',
      coord: [],
      name: 'W. 46th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '47-5'},
        {dir: 'south', id: '45-5'},
        {dir: 'east', id: '46-madi'},
        {dir: 'west', id: '46-amer'},
      ]
    },
    {
      id: '47-5',
      coord: [],
      name: 'W. 47th St. and 5th Ave.',
      desc: `You pause to consider the hollow hulk of a store that was once called Brentano's`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '48-5'},
        {dir: 'south', id: '46-5'},
        {dir: 'east', id: '47-madi'},
        {dir: 'west', id: '47-amer'},
        {dir: [`Brentano's`, `Brentano`, `Brentanos`], id: 'bren', block: '????'}
      ]
    },
    {
      id: 'bren',
      coord: [],
      name: '',
      desc: ``,
      isStreet: true,
      exits: []
    },
    {
      id: '48-5',
      coord: [],
      name: 'W. 48th St. and 5th Ave.',
      desc: `Here is Barnes-Nobles – a store filled with what appears to be thousands and thousands of books. Across the street is Scribner’s. Looking through the windows, you cannot be certain whether it is a retail establishment or a library of some exclusive club .`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '49-5'},
        {dir: 'south', id: '47-5'},
        {dir: 'east', id: '48-madi'},
        {dir: 'west', id: '48-amer'},
        {dir: [`barnes`, `nobles`], id: 'barn-nobl', block: '????'},
        {dir: [`scriber's`, 'scribners'], id: 'scri',coord: [], block: '????'}
      ]
    },
    {
      id: 'barn-nobl',
      coord: [],
      name: '',
      desc: ``,
      isStreet: true,
      exits: []
    },
    {
      id: 'scri',
      coord: [],
      name: '',
      desc: ``,
      isStreet: true,
      exits: []
    },
    {
      id: '49-5',
      coord: [],
      name: 'W. 49th St. and 5th Ave.',
      desc: `A statue of Atlas bearing the burden of the world reflects on your own mood as you pass the entrance to Rockefeller plaza.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '50-5'},
        {dir: 'south', id: '48-5'},
        {dir: 'east', id: '48-madi'},
        {dir: 'west', id: '48-amer'},
        {dir: [`rockefeller`, `plaza`], id: 'rock-plaz', block: '????'}
      ]
    },
    {
      id: 'rock-plaz',
      coord: [],
      name: 'Office Building Lobby',
      desc: `You walk through the revolving doors, and enter a lobby decorated in marble. A security check-point near the elevators makes you think twice about remaining. 
            
            you turn away quickly and leave`,
      onEnter: () => {
        pressEnter('49-5')
      }, 
      exits: []
    },
    {
      id: '50-5',
      coord: [],
      name: 'W. 50th St. and 5th Ave.',
      desc: `There is a Chock Full-O-Nuts at this intersection.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '51-5'},
        {dir: 'south', id: '49-5'},
        {dir: 'east', id: '50-madi'},
        {dir: 'west', id: '50-amer'},
        {dir: ['chock', 'full-o-nuts'], id: 'choc-nuts'}
      ]
    },
    {
      id: '51-5',
      coord: [],
      name: 'W. 51st St. and 5th Ave.',
      desc: `Like a ghost from across the ocean a genuine gothic cathedral rears up out of the welter of midtown hustle and bustle, looking dark and spiky and disapproving of everything going on around it. The center door stands open, where an occasional worshipper--or sightseer--slips in or out.
            `,
      exits: [
        {dir: 'north', id: '52-5'},
        {dir: 'south', id: '50-5'},
        {dir: 'east', id: '51-madi'},
        {dir: 'west', id: '51-amer'},
        {
                    dir: ['st.', 'saint', 'patrick', `patrick's`, 'cathedral'],
                    id: '????'}
      ]
    },
    {
      id: '52-5',
      coord: [],
      name: 'W. 52nd St. and 5th Ave.',
      desc: `Midway down the block, across from the Sunderland, plaster jockeys mark the 21 club, home of the most expensive hamburger in New York City. 

            There is a poster here which catches your eye. It announces a series of organ recitals at St. Patrick’s Cathedral in memory of James Renwick, the architect.`,
      exits: [
        {dir: 'north', id: '53-5'},
        {dir: 'south', id: '51-5'},
        {dir: 'east', id: '51-madi'},
        {dir: 'west', id: '51-amer'},
        {dir: ['21', 'club'], id: '????'}
      ]
    },
    {
      id: '58-park',
      coord: [],
      name: 'E. 58th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '59-park'},
        {dir: 'south', id: '57-park'},
        {dir: 'east', id: '58-lexi'},
        {dir: 'west', id: '58-madi'},
      ]
    },
    {
      id: '57-park',
      coord: [],
      name: 'E. 57th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '58-park'},
        {dir: 'south', id: '56-park'},
        {dir: 'east', id: '57-lexi'},
        {dir: 'west', id: '57-madi'},
      ]
    },
    {
      id: '56-park',
      coord: [],
      name: 'E. 56th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '57-park'},
        {dir: 'south', id: '55-park'},
        {dir: 'east', id: '56-lexi'},
        {dir: 'west', id: '56-madi'},
      ]
    },
    {
      id: '55-park',
      coord: [],
      name: 'E. 55th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '56-park'},
        {dir: 'south', id: '54-park'},
        {dir: 'east', id: '55-lexi'},
        {dir: 'west', id: '55-madi'},
      ]
    },
    {
      id: '54-park',
      coord: [],
      name: 'E. 54th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '55-park'},
        {dir: 'south', id: '53-park'},
        {dir: 'east', id: '54-lexi'},
        {dir: 'west', id: '54-madi'},
      ]
    },
    {
      id: '53-park',
      coord: [],
      name: 'E. 53rd St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '54-park'},
        {dir: 'south', id: '52-park'},
        {dir: 'east', id: '53-lexi'},
        {dir: 'west', id: '53-madi'},
      ]
    },
    {
      id: '52-park',
      coord: [],
      name: 'E. 52nd St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '53-park'},
        {dir: 'south', id: '51-park'},
        {dir: 'east', id: '52-lexi'},
        {dir: 'west', id: '52-madi'},
      ]
    },
    {
      id: '51-park',
      coord: [],
      name: 'E. 51st St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '52-park'},
        {dir: 'south', id: '50-park'},
        {dir: 'east', id: '51-lexi'},
        {dir: 'west', id: '51-madi'},
      ]
    },
    {
      id: '50-park',
      coord: [],
      name: 'E. 50th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '51-park'},
        {dir: 'south', id: '49-park'},
        {dir: 'east', id: '50-lexi'},
        {dir: 'west', id: '50-madi'},
      ]
    },
    {
      id: '49-park',
      coord: [],
      name: 'E. 49th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '50-park'},
        {dir: 'south', id: '48-park'},
        {dir: 'east', id: '49-lexi'},
        {dir: 'west', id: '49-madi'},
      ]
    },
    {
      id: '48-park',
      coord: [],
      name: 'E. 48th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '49-park'},
        {dir: 'south', id: '47-park'},
        {dir: 'east', id: '48-lexi'},
        {dir: 'west', id: '48-madi'},
      ]
    },
    {
      id: '47-park',
      coord: [],
      name: 'E. 47th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '48-park'},
        {dir: 'south', id: '46-park'},
        {dir: 'east', id: '47-lexi'},
        {dir: 'west', id: '47-vand'},
      ]
    },
    {
      id: '47-vand',
      coord: [],
      name: 'E. 47th St. and Vanderbilt Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '46-vand'},
        {dir: 'east', id: '47-park'},
        {dir: 'west', id: '47-madi'},
      ]
    },
    {
      id: '46-vand',
      coord: [],
      name: 'E. 46th St. and Vanderbilt Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '47-vand'},
        {dir: 'south', id: '45-vand'},
        {dir: 'east', id: '46-park'},
        {dir: 'west', id: '46-madi'},
      ]
    },
    {
      id: '45-vand',
      coord: [],
      name: 'E. 45th St. and Vanderbilt Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '46-vand'},
        {dir: 'south', id: '44-vand'},
        {dir: 'east', id: '45-park'},
        {dir: 'west', id: '45-madi'},
      ]
    },
    {
      id: '44-vand',
      coord: [],
      name: 'E. 44th St. and Vanderbilt Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '45-vand'},
        {dir: 'south', id: '43-vand'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '44-madi'},
      ]
    },
    {
      id: '43-vand',
      coord: [],
      name: 'E. 43rd St. and Vanderbilt Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '44-vand'},
        {dir: 'south', id: '42-vand'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '43-madi'},
      ]
    },
    {
      id: '42-vand',
      coord: [],
      name: 'E. 42nd St. and Vanderbilt Ave.',
      desc: `Mobil Building – Nothing this tall could be made of silver, but you are tempted to think so. It is hard to realize that such a gleam can come from a metal as mundane as stainless steel.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '43-vand'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '42-park'},
        {dir: 'west', id: '42-madi'},
        {dir: ['mobil', 'building'], id: '????'}
      ]
    },
    {
      id: '46-park',
      coord: [],
      name: 'E. 46th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '47-park'},
        {dir: 'south', id: '45-park'},
        {dir: 'east', id: '46-depe'},
        {dir: 'west', id: '46-vand'},
      ]
    },
    {
      id: '45-park',
      coord: [],
      name: 'E. 45th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '46-park'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '45-depe'},
        {dir: 'west', id: '45-vand'},
      ]
    },
    {
      id: '42-park',
      coord: [],
      name: 'E. 42nd St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '41-park'},
        {dir: 'east', id: '42-depe'},
        {dir: 'west', id: '42-vand'},
      ]
    },
    {
      id: '41-park',
      coord: [],
      name: 'E. 41st St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '42-park'},
        {dir: 'south', id: '40-park'},
        {dir: 'east', id: '41-lexi'},
        {dir: 'west', id: '41-madi'},
      ]
    },
    {
      id: '41-park',
      coord: [],
      name: 'E. 41st St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '42-park'},
        {dir: 'south', id: '40-park'},
        {dir: 'east', id: '41-lexi'},
        {dir: 'west', id: '41-madi'},
      ]
    },
    {
      id: '40-park',
      coord: [],
      name: 'E. 40th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '41-park'},
        {dir: 'south', id: '39-park'},
        {dir: 'east', id: '40-lexi'},
        {dir: 'west', id: '40-madi'},
      ]
    },
    {
      id: '39-park',
      coord: [],
      name: 'E. 39th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '40-park'},
        {dir: 'south', id: '38-park'},
        {dir: 'east', id: '39-lexi'},
        {dir: 'west', id: '39-madi'},
      ]
    },
    {
      id: '38-park',
      coord: [],
      name: 'E. 38th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '39-park'},
        {dir: 'south', id: '37-park'},
        {dir: 'east', id: '38-lexi'},
        {dir: 'west', id: '38-madi'},
      ]
    },
    {
      id: '37-park',
      coord: [],
      name: 'E. 37th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '38-park'},
        {dir: 'south', id: '36-park'},
        {dir: 'east', id: '37-lexi'},
        {dir: 'west', id: '37-madi'},
      ]
    },
    {
      id: '36-park',
      coord: [],
      name: 'E. 36th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '37-park'},
        {dir: 'south', id: '35-park'},
        {dir: 'east', id: '36-lexi'},
        {dir: 'west', id: '36-madi'},
      ]
    },
    {
      id: '35-park',
      coord: [],
      name: 'E. 35th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '36-park'},
        {dir: 'south', id: '34-park'},
        {dir: 'east', id: '35-lexi'},
        {dir: 'west', id: '35-madi'},
      ]
    },
    {
      id: '34-park',
      coord: [],
      name: 'E. 34th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-park'},
        {dir: 'south', id: '33-park'},
        {dir: 'east', id: '34-lexi'},
        {dir: 'west', id: '34-madi'},
      ]
    },
    {
      id: '34-lexi',
      coord: [],
      name: 'E. 34th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-lexi'},
        {dir: 'south', id: '33-lexi'},
        {dir: 'east', id: '34-3'},
        {dir: 'west', id: '34-park'},
      ]
    },
    {
      id: '35-lexi',
      coord: [],
      name: 'E. 35th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '36-lexi'},
        {dir: 'south', id: '34-lexi'},
        {dir: 'east', id: '35-3'},
        {dir: 'west', id: '35-park'},
      ]
    },
    {
      id: '36-lexi',
      coord: [],
      name: 'E. 36th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '37-lexi'},
        {dir: 'south', id: '35-lexi'},
        {dir: 'east', id: '36-3'},
        {dir: 'west', id: '36-park'},
      ]
    },
    {
      id: '37-lexi',
      coord: [],
      name: 'E. 37th St. and Lexington Ave.',
      desc: `There is a luncheonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '38-lexi'},
        {dir: 'south', id: '36-lexi'},
        {dir: 'east', id: '37-3'},
        {dir: 'west', id: '37-park'},
        {dir: ['luncheonette', 'lunch'], id: '????'}
      ]
    },
    {
      id: '38-lexi',
      coord: [],
      name: 'E. 38th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '39-lexi'},
        {dir: 'south', id: '37-lexi'},
        {dir: 'east', id: '38-3'},
        {dir: 'west', id: '38-park'},
      ]
    },
    {
      id: '39-lexi',
      coord: [],
      name: 'E. 39th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '40-lexi'},
        {dir: 'south', id: '38-lexi'},
        {dir: 'east', id: '39-3'},
        {dir: 'west', id: '39-park'},
      ]
    },
    {
      id: '40-lexi',
      coord: [],
      name: 'E. 40th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '41-lexi'},
        {dir: 'south', id: '39-lexi'},
        {dir: 'east', id: '40-3'},
        {dir: 'west', id: '40-park'},
      ]
    },
    {
      id: '41-lexi',
      coord: [],
      name: 'E. 41st St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '42-lexi'},
        {dir: 'south', id: '40-lexi'},
        {dir: 'east', id: '41-3'},
        {dir: 'west', id: '41-park'},
      ]
    },
    {
      id: '42-lexi',
      coord: [],
      name: 'E. 42nd St. and Lexington Ave.',
      desc: `You are stopped in your tracks by the Marlene Dietrich of New York’s skyscrapers. It’s the Chrysler building swathed in stainless steel, and Art Deco trimmings. It still looks like a million.  `,
      isStreet: true,
      exits: [
        {dir: 'north', id: '43-lexi'},
        {dir: 'south', id: '41-lexi'},
        {dir: 'east', id: '42-3'},
        {dir: 'west', id: '41-depe'},
      ]
    },
    {
      id: '42-depe',
      coord: [],
      name: 'E. 2nd St. and Depew Pl.',
      desc: `Grand Central Station. Crossroads of a million people. What are your chances, you wonder, of meeting someone who used to know you back in your real life? You loiter for a while, waiting for someone to come along, clap you on the shoulder, and say, ‘John Cameron, you old son of a gun – nice to see you again!’ `,
      isStreet: true,
      exits: [
        {dir: 'north', id: '44-depe'},
        {dir: 'south', id: '', oord: [], block: `You can't go that way.`},
        {dir: 'east', id: '42-lexi'},
        {dir: 'west', id: '42-park'},
        {id: ['grand', 'central', 'station', 'subway'], id: 'gran-cent'}
      ]
    },
    {
      id: '44-depe',
      coord: [],
      name: 'E. 44th St. and Depew Pl.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '45-depe'},
        {dir: 'south', id: '42-depe'},
        {dir: 'east', id: '44-lexi'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '45-depe',
      coord: [],
      name: 'E. 45th St. and Depew Pl.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '46-depe'},
        {dir: 'south', id: '44-depe'},
        {dir: 'east', id: '45-lexi'},
        {dir: 'west', id: '45-park'},
      ]
    },
    {
      id: '46-depe',
      coord: [],
      name: 'E. 46th St. and Depew Pl.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '45-depe'},
        {dir: 'east', id: '46-lexi'},
        {dir: 'west', id: '46-park'},
      ]
    },
    {
      id: '43-lexi',
      coord: [],
      name: 'E. 43rd St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '44-lexi'},
        {dir: 'south', id: '42-lexi'},
        {dir: 'east', id: '43-3'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '44-lexi',
      coord: [],
      name: 'E. 44th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '45-lexi'},
        {dir: 'south', id: '43-lexi'},
        {dir: 'east', id: '44-3'},
        {dir: 'west', id: '44-depe'},
      ]
    },
    {
      id: '45-lexi',
      coord: [],
      name: 'E. 45th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '46-lexi'},
        {dir: 'south', id: '44-lexi'},
        {dir: 'east', id: '45-3'},
        {dir: 'west', id: '45-depe'},
      ]
    },
    {
      id: '46-lexi',
      coord: [],
      name: 'E. 46th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '47-lexi'},
        {dir: 'south', id: '45-lexi'},
        {dir: 'east', id: '46-3'},
        {dir: 'west', id: '46-depe'},
      ]
    },
    {
      id: '47-lexi',
      coord: [],
      name: 'E. 47th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '48-lexi'},
        {dir: 'south', id: '46-lexi'},
        {dir: 'east', id: '47-3'},
        {dir: 'west', id: '47-park'},
      ]
    },
    {
      id: '48-lexi',
      coord: [],
      name: 'E. 48th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '49-lexi'},
        {dir: 'south', id: '47-lexi'},
        {dir: 'east', id: '48-3'},
        {dir: 'west', id: '48-park'},
      ]
    },
    {
      id: '49-lexi',
      coord: [],
      name: 'E. 49th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '50-lexi'},
        {dir: 'south', id: '48-lexi'},
        {dir: 'east', id: '49-3'},
        {dir: 'west', id: '49-park'},
      ]
    },
    {
      id: '50-lexi',
      coord: [],
      name: 'E. 50th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '51-lexi'},
        {dir: 'south', id: '49-lexi'},
        {dir: 'east', id: '50-3'},
        {dir: 'west', id: '50-park'},
      ]
    },
    {
      id: '51-lexi',
      coord: [],
      name: 'E. 51st St. and Lexington Ave.',
      desc: `There is a subway entrance at this corner.`,
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '52-lexi'},
        {dir: 'south', id: '50-lexi'},
        {dir: 'east', id: '51-3'},
        {dir: 'west', id: '51-park'},
        {dir: ['subway'], id: '????'}
      ]
    },
    {
      id: '52-lexi',
      coord: [],
      name: 'E. 52nd St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '53-lexi'},
        {dir: 'south', id: '51-lexi'},
        {dir: 'east', id: '52-3'},
        {dir: 'west', id: '52-park'},
      ]
    },
    {
      id: '53-lexi',
      coord: [],
      name: 'E. 53rd St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '54-lexi'},
        {dir: 'south', id: '52-lexi'},
        {dir: 'east', id: '53-3'},
        {dir: 'west', id: '53-park'},
      ]
    },
    {
      id: '54-lexi',
      coord: [],
      name: 'E. 54th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '55-lexi'},
        {dir: 'south', id: '53-lexi'},
        {dir: 'east', id: '54-3'},
        {dir: 'west', id: '54-park'},
      ]
    },
    {
      id: '55-lexi',
      coord: [],
      name: 'E. 55th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '56-lexi'},
        {dir: 'south', id: '54-lexi'},
        {dir: 'east', id: '55-3'},
        {dir: 'west', id: '55-park'},
      ]
    },
    {
      id: '56-lexi',
      coord: [],
      name: 'E. 56th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '57-lexi'},
        {dir: 'south', id: '55-lexi'},
        {dir: 'east', id: '56-3'},
        {dir: 'west', id: '56-park'},
      ]
    },
    {
      id: '57-lexi',
      coord: [],
      name: 'E. 57th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '58-lexi'},
        {dir: 'south', id: '56-lexi'},
        {dir: 'east', id: '57-3'},
        {dir: 'west', id: '57-park'},
      ]
    },
    {
      id: '58-lexi',
      coord: [],
      name: 'E. 58th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '59-lexi'},
        {dir: 'south', id: '57-lexi'},
        {dir: 'east', id: '58-3'},
        {dir: 'west', id: '58-park'},
      ]
    },
    {
      id: '59-lexi',
      coord: [],
      name: 'E. 59th St. and Lexington Ave.',
      desc: `There is a subway entrance at this corner.`,
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '60-lexi'},
        {dir: 'south', id: '58-lexi'},
        {dir: 'east', id: '59-3'},
        {dir: 'west', id: '59-park'},
      ]
    },
    {
      id: '59-3',
      coord: [],
      name: 'E. 59th St. and 3rd Ave.',
      desc: `There is a subway entrance at this corner.`,
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '60-3'},
        {dir: 'south', id: '58-3'},
        {dir: 'east', id: '59-2'},
        {dir: 'west', id: '59-lexi'},
      ]
    },
    {
      id: '58-3',
      coord: [],
      name: 'E. 58th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '59-3'},
        {dir: 'south', id: '57-3'},
        {dir: 'east', id: '58-2'},
        {dir: 'west', id: '58-lexi'},
      ]
    },
    {
      id: '57-3',
      coord: [],
      name: 'E. 57th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '58-3'},
        {dir: 'south', id: '56-3'},
        {dir: 'east', id: '57-2'},
        {dir: 'west', id: '57-lexi'},
      ]
    },
    {
      id: '56-3',
      coord: [],
      name: 'E. 56th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '57-3'},
        {dir: 'south', id: '55-3'},
        {dir: 'east', id: '56-2'},
        {dir: 'west', id: '56-lexi'},
      ]
    },
    {
      id: '55-3',
      coord: [],
      name: 'E. 55th St. and 3rd Ave.',
      desc: `There is a luncheonette on the corner`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '56-3'},
        {dir: 'south', id: '54-3'},
        {dir: 'east', id: '55-2'},
        {dir: 'west', id: '55-lexi'},
        {dir: ['luncheonette'], id: 'lunc'}
      ]
    },
    {
      id: '54-3',
      coord: [],
      name: 'E. 54th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '55-3'},
        {dir: 'south', id: '53-3'},
        {dir: 'east', id: '54-2'},
        {dir: 'west', id: '54-lexi'},
      ]
    },
    {
      id: '53-3',
      coord: [],
      name: 'E. 53rd St. and 3rd Ave.',
      desc: `There is a subway entrance at this corner`,
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '54-3'},
        {dir: 'south', id: '52-3'},
        {dir: 'east', id: '53-2'},
        {dir: 'west', id: '53-lexi'},
        {dir: ['subway'], id: '????'}
      ]
    },
    {
      id: '52-3',
      coord: [],
      name: 'E. 52nd St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '53-3'},
        {dir: 'south', id: '51-3'},
        {dir: 'east', id: '52-2'},
        {dir: 'west', id: '52-lexi'},
      ]
    },
    {
      id: '51-3',
      coord: [],
      name: 'E. 51st St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '52-3'},
        {dir: 'south', id: '50-3'},
        {dir: 'east', id: '51-2'},
        {dir: 'west', id: '51-lexi'},
      ]
    },
    {
      id: '50-3',
      coord: [],
      name: 'E. 50th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '51-3'},
        {dir: 'south', id: '49-3'},
        {dir: 'east', id: '50-2'},
        {dir: 'west', id: '50-lexi'},
      ]
    },
    {
      id: '49-3',
      coord: [],
      name: 'E. 49th St. and 3rd Ave.',
      desc: `There is a luncheonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '50-3'},
        {dir: 'south', id: '48-3'},
        {dir: 'east', id: '49-2'},
        {dir: 'west', id: '49-lexi'},
        {dir: ['luncheonette'], id: 'lunc'}
      ]
    },
    {
      id: '48-3',
      coord: [],
      name: 'E. 48th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '49-3'},
        {dir: 'south', id: '47-3'},
        {dir: 'east', id: '48-2'},
        {dir: 'west', id: '48-lexi'},
      ]
    },
    {
      id: '47-3',
      coord: [],
      name: 'E. 47th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '48-3'},
        {dir: 'south', id: '46-3'},
        {dir: 'east', id: '47-2'},
        {dir: 'west', id: '47-lexi'},
      ]
    },
    {
      id: '46-3',
      coord: [],
      name: 'E. 46th St. and 3rd Ave.',
      desc: `There is a lunchonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '47-3'},
        {dir: 'south', id: '45-3'},
        {dir: 'east', id: '46-2'},
        {dir: 'west', id: '46-lexi'},
        {dir: ['luncheonette'], id: 'lunc'}
      ]
    },
    {
      id: '45-3',
      coord: [],
      name: 'E. 45th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '46-3'},
        {dir: 'south', id: '44-3'},
        {dir: 'east', id: '45-2'},
        {dir: 'west', id: '45-lexi'},
      ]
    },
    {
      id: '44-3',
      coord: [],
      name: 'E. 44th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '45-3'},
        {dir: 'south', id: '43-3'},
        {dir: 'east', id: '44-2'},
        {dir: 'west', id: '44-lexi'},
      ]
    },
    {
      id: '43-3',
      coord: [],
      name: 'E. 43rd St. and 3rd Ave.',
      desc: `The glass and steel case of the Ford Foundation Building resembles an aquarium that any tropical fish might envy. Humans are kept in their ‘natural habitat’ here: a lush indoor park complete with trees and flowers.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '44-3'},
        {dir: 'south', id: '42-3'},
        {dir: 'east', id: '43-2'},
        {dir: 'west', id: '43-lexi'},
        {dir: ['ford', 'foundation','building'], id: '????'}
      ]
    },
    {
      id: '42-3',
      coord: [],
      name: 'E. 42nd St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '43-3'},
        {dir: 'south', id: '41-3'},
        {dir: 'east', id: '42-2'},
        {dir: 'west', id: '42-lexi'},
      ]
    },
    {
      id: '41-3',
      coord: [],
      name: 'E. 41st St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '42-3'},
        {dir: 'south', id: '40-3'},
        {dir: 'east', id: '41-2'},
        {dir: 'west', id: '41-lexi'},
      ]
    },
    {
      id: '40-3',
      coord: [],
      name: 'E. 40th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '41-3'},
        {dir: 'south', id: '39-3'},
        {dir: 'east', id: '40-2'},
        {dir: 'west', id: '40-lexi'},
      ]
    },
    {
      id: '39-3',
      coord: [],
      name: 'E. 39th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '40-3'},
        {dir: 'south', id: '38-3'},
        {dir: 'east', id: '39-qout'},
        {dir: 'west', id: '39-lexi'},
      ]
    },
    {
      id: '38-3',
      coord: [],
      name: 'E. 38th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '39-3'},
        {dir: 'south', id: '37-3'},
        {dir: 'east', id: '38-qout'},
        {dir: 'west', id: '38-lexi'},
      ]
    },
    {
      id: '37-3',
      coord: [],
      name: 'E. 37th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '38-3'},
        {dir: 'south', id: '36-3'},
        {dir: 'east', id: '37-qout'},
        {dir: 'west', id: '37-lexi'},
      ]
    },
    {
      id: '36-3',
      coord: [],
      name: 'E. 36th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '37-3'},
        {dir: 'south', id: '35-3'},
        {dir: 'east', id: '36-qout'},
        {dir: 'west', id: '36-lexi'},
      ]
    },
    {
      id: '35-3',
      coord: [],
      name: 'E. 35th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '36-3'},
        {dir: 'south', id: '34-3'},
        {dir: 'east', id: '35-qout'},
        {dir: 'west', id: '35-lexi'},
      ]
    },
    {
      id: '34-3',
      coord: [],
      name: 'E. 34th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-3'},
        {dir: 'south', id: '33-3'},
        {dir: 'east', id: '34-qout'},
        {dir: 'west', id: '34-lexi'},
      ]
    },
    {
      id: '35-qout',
      coord: [],
      name: 'E. 35th St. and Queens Tunnel out',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '36-qout'},
        {dir: 'south', id: '34-qout'},
        {dir: 'east', id: '35-2'},
        {dir: 'west', id: '35-3'},
      ]
    },
    {
      id: '36-qout',
      coord: [],
      name: 'E. 36th St. and Queens Tunnel out',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '37-qout'},
        {dir: 'south', id: '35-qout'},
        {dir: 'east', id: '36-2'},
        {dir: 'west', id: '36-3'},
      ]
    },
    {
      id: '37-qout',
      coord: [],
      name: 'E. 36th St. and Queens Tunnel out',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '38-qout'},
        {dir: 'south', id: '36-qout'},
        {dir: 'east', id: '37-2'},
        {dir: 'west', id: '37-3'},
      ]
    },
    {
      id: '38-qout',
      coord: [],
      name: 'E. 38th St. and Queens Tunnel out',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '39-qout'},
        {dir: 'south', id: '37-qout'},
        {dir: 'east', id: '38-2'},
        {dir: 'west', id: '38-3'},
      ]
    },
    {
      id: '39-qout',
      coord: [],
      name: 'E. 39th St. and Queens Tunnel out',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '38-qout'},
        {dir: 'east', id: '39-2'},
        {dir: 'west', id: '39-3'},
      ]
    },
    {
      id: '34-2',
      coord: [],
      name: 'E. 34th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-2'},
        {dir: 'south', id: '33-2'},
        {dir: 'east', id: '34-qin'},
        {dir: 'west', id: '34-qout'},
      ]
    },
    {
      id: '35-2',
      coord: [],
      name: 'E. 35th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', d: '36-2'},
        {dir: 'south', id: '34-2'},
        {dir: 'east', id: '35-qin'},
        {dir: 'west', id: '35-qout'},
      ]
    },
    {
      id: '36-2',
      coord: [],
      name: 'E. 36th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '37-2'},
        {dir: 'south', id: '35-2'},
        {dir: 'east', id: '36-qin'},
        {dir: 'west', id: '36-qout'},
      ]
    },
    {
      id: '37-2',
      coord: [],
      name: 'E. 37th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '38-2'},
        {dir: 'south', id: '36-2'},
        {dir: 'east', id: '37-qin'},
        {dir: 'west', id: '37-qout'},
      ]
    },
    {
      id: '38-2',
      coord: [],
      name: 'E. 38th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '39-2'},
        {dir: 'south', id: '37-2'},
        {dir: 'east', id: '38-1'},
        {dir: 'west', id: '38-qout'},
      ]
    },
    {
      id: '39-2',
      coord: [],
      name: 'E. 39th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '40-2'},
        {dir: 'south', id: '38-2'},
        {dir: 'east', id: '39-tudo'},
        {dir: 'west', id: '39-qout'},
      ]
    },
    {
      id: '40-2',
      coord: [],
      name: 'E. 40th St. and 2nd Ave.',
      desc: `There is a luncheonette on the corner`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '41-2'},
        {dir: 'south', id: '39-2'},
        {dir: 'east', id: '40-tudo'},
        {dir: 'west', id: '40-3'},
        {dir: ['luncheonette', 'lunch'], id: '????'}
        ]
    },
    {
      id: '41-2',
      coord: [],
      name: 'E. 41st St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '42-2'},
        {dir: 'south', id: '40-2'},
        {dir: 'east', id: '41-tudo'},
        {dir: 'west', id: '41-3'},
      ]
    },
    {
      id: '42-2',
      coord: [],
      name: 'E. 42nd St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '43-2'},
        {dir: 'south', id: '41-2'},
        {dir: 'east', id: '42-tudo'},
        {dir: 'west', id: '42-3'},
      ]
    },
    {
      id: '43-2',
      coord: [],
      name: 'E. 43rd St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '44-2'},
        {dir: 'south', id: '42-2'},
        {dir: 'east', id: '43-tudo'},
        {dir: 'west', id: '43-3'},
      ]
    },
    {
      id: '44-2',
      coord: [],
      name: 'E. 44th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '45-2'},
        {dir: 'south', id: '43-2'},
        {dir: 'east', id: '44-1'},
        {dir: 'west', id: '44-3'},
      ]
    },
    {
      id: '45-2',
      coord: [],
      name: 'E. 45th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '46-2'},
        {dir: 'south', id: '44-2'},
        {dir: 'east', id: '45-1'},
        {dir: 'west', id: '45-3'},
      ]
    },
    {
      id: '46-2',
      coord: [],
      name: 'E. 46th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '47-2'},
        {dir: 'south', id: '45-2'},
        {dir: 'east', id: '46-1'},
        {dir: 'west', id: '46-3'},
      ]
    },
    {
      id: '47-2',
      coord: [],
      name: 'E. 47th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '48-2'},
        {dir: 'south', id: '46-2'},
        {dir: 'east', id: '47-1'},
        {dir: 'west', id: '47-3'},
      ]
    },
    {
      id: '48-2',
      coord: [],
      name: 'E. 48th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '49-2'},
        {dir: 'south', id: '47-2'},
        {dir: 'east', id: '48-1'},
        {dir: 'west', id: '48-3'},
      ]
    },
    {
      id: '49-2',
      coord: [],
      name: 'E. 49th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '50-2'},
        {dir: 'south', id: '48-2'},
        {dir: 'east', id: '49-1'},
        {dir: 'west', id: '49-3'},
      ]
    },
    {
      id: '50-2',
      coord: [],
      name: 'E. 50th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '51-2'},
        {dir: 'south', id: '49-2'},
        {dir: 'east', id: '50-1'},
        {dir: 'west', id: '50-3'},
      ]
    },
    {
      id: '51-2',
      coord: [],
      name: 'E. 51st St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '52-2'},
        {dir: 'south', id: '50-2'},
        {dir: 'east', id: '51-1'},
        {dir: 'west', id: '51-3'},
      ]
    },
    {
      id: '52-2',
      coord: [],
      name: 'E. 52nd St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '53-2'},
        {dir: 'south', id: '51-2'},
        {dir: 'east', id: '52-1'},
        {dir: 'west', id: '52-3'},
      ]
    },
    {
      id: '53-2',
      coord: [],
      name: 'E. 53rd St. and 2nd Ave.',
      desc: `There is a luncheonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '54-2'},
        {dir: 'south', id: '52-2'},
        {dir: 'east', id: '53-1'},
        {dir: 'west', id: '53-3'},
      ]
    },
    {
      id: '54-2',
      coord: [],
      name: 'E. 54th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '55-2'},
        {dir: 'south', id: '53-2'},
        {dir: 'east', id: '54-1'},
        {dir: 'west', id: '54-3'},
      ]
    },
    {
      id: '55-2',
      coord: [],
      name: 'E. 55th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '56-2'},
        {dir: 'south', id: '54-2'},
        {dir: 'east', id: '55-1'},
        {dir: 'west', id: '55-3'},
      ]
    },
    {
      id: '56-2',
      coord: [],
      name: 'E. 56th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '57-2'},
        {dir: 'south', id: '55-2'},
        {dir: 'east', id: '56-1'},
        {dir: 'west', id: '56-3'},
      ]
    },
    {
      id: '57-2',
      coord: [],
      name: 'E. 57th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '58-2'},
        {dir: 'south', id: '56-2'},
        {dir: 'east', id: '57-quen'},
        {dir: 'west', id: '57-3'},
      ]
    },
    {
      id: '58-2',
      coord: [],
      name: 'E. 58th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '59-2'},
        {dir: 'south', id: '57-2'},
        {dir: 'east', id: '58-quen'},
        {dir: 'west', id: '58-3'},
      ]
    },
    {
      id: '59-2',
      coord: [],
      name: 'E. 59th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'quen-2'},
        {dir: 'south', id: '58-2'},
        {dir: 'east', id: '59-quen'},
        {dir: 'west', id: '59-3'},
      ]
    },
    {
      id: '59-quen',
      coord: [],
      name: 'E. 59th St. and Queensboro Bridge In',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '60-quen'},
        {dir: 'south', id: '58-quen'},
        {dir: 'east', id: '59-1'},
        {dir: 'west', id: '59-2'},
      ]
    },
    {
      id: '58-quen',
      coord: [],
      name: 'E. 58th St. and Queensboro Bridge In',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '59-quen'},
        {dir: 'south', id: '57-quen'},
        {dir: 'east', id: '58-1'},
        {dir: 'west', id: '58-2'},
      ]
    },
    {
      id: '57-quen',
      coord: [],
      name: 'E. 57th St. and Queensboro Bridge In',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '58-quen'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '57-1'},
        {dir: 'west', id: '57-2'},
      ]
    },
    {
      id: '59-1',
      coord: [],
      name: 'E. 59th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '60-1'},
        {dir: 'south', id: '58-1'},
        {dir: 'east', id: '59-sutt'},
        {dir: 'west', id: '59-quen'},
      ]
    },
    {
      id: '58-1',
      coord: [],
      name: 'E. 58th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '59-1'},
        {dir: 'south', id: '57-1'},
        {dir: 'east', id: '58-sutt'},
        {dir: 'west', id: '58-quen'},
      ]
    },
    {
      id: '57-1',
      coord: [],
      name: 'E. 57th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '58-1'},
        {dir: 'south', id: '56-1'},
        {dir: 'east', id: '57-sutt'},
        {dir: 'west', id: '57-quen'},
      ]
    },
    {
      id: '56-1',
      coord: [],
      name: 'E. 56th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '57-1'},
        {dir: 'south', id: '55-1'},
        {dir: 'east', id: '56-sutt'},
        {dir: 'west', id: '56-2'},
      ]
    },
    {
      id: '55-1',
      coord: [],
      name: 'E. 55th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '56-1'},
        {dir: 'south', id: '54-1'},
        {dir: 'east', id: '55-sutt'},
        {dir: 'west', id: '55-2'},
      ]
    },
    {
      id: '54-1',
      coord: [],
      name: 'E. 54th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '55-1'},
        {dir: 'south', id: '53-1'},
        {dir: 'east', id: '54-sutt'},
        {dir: 'west', id: '54-2'},
      ]
    },
    {
      id: '53-1',
      coord: [],
      name: 'E. 53rd St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '54-1'},
        {dir: 'south', id: '52-1'},
        {dir: 'east', id: '53-sutt'},
        {dir: 'west', id: '53-2'},
      ]
    },
    {
      id: '52-1',
      coord: [],
      name: 'E. 52nd St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '53-1'},
        {dir: 'south', id: '51-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '52-2'},
      ]
    },
    {
      id: '51-1',
      coord: [],
      name: 'E. 51st St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '52-1'},
        {dir: 'south', id: '50-1'},
        {dir: 'east', id: '51-beek'},
        {dir: 'west', id: '51-2'},
      ]
    },
    {
      id: '50-1',
      coord: [],
      name: 'E. 50th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '51-1'},
        {dir: 'south', id: '49-1'},
        {dir: 'east', id: '50-beek'},
        {dir: 'west', id: '50-2'},
      ]
    },
    {
      id: '49-1',
      coord: [],
      name: 'E. 49th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '50-1'},
        {dir: 'south', id: '48-1'},
        {dir: 'east', id: '49-beek'},
        {dir: 'west', id: '49-2'},
      ]
    },
    {
      id: '48-1',
      coord: [],
      name: 'E. 48th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '49-1'},
        {dir: 'south', id: '47-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '48-2'},
      ]
    },
    {
      id: '47-1',
      coord: [],
      name: 'E. 47th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '48-1'},
        {dir: 'south', id: '46-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '47-2'},
      ]
    },
    {
      id: '46-1',
      coord: [],
      name: 'E. 46th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '47-1'},
        {dir: 'south', id: '45-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '46-2'},
      ]
    },
    {
      id: '45-1',
      coord: [],
      name: 'E. 45th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '46-1'},
        {dir: 'south', id: '44-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '45-2'},
      ]
    },
    {
      id: '44-1',
      coord: [],
      name: 'E. 44th St. and 1st Ave.',
      desc: `The great green glass slab of the UN Secretariat looms over the swooping shape of the General Assembly Building. Flags of member nations snap in the wind that comes in from the East River. For a moment you wish you could be just an ordinary tourist so you could enjoy the vista the way it deserves. But the vista includes twenty assorted policemen, and you get the feeling this is nowhere to loiter.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '45-1'},
        {dir: 'south', id: '43-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '44-2'},
        {dir: ['UN', 'building', 'secretariat'], block: 'There is no point in going there.',
            },
      ]
    },
    {
      id: '42-1',
      coord: [],
      name: 'E. 42nd St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '44-1'},
        {dir: 'south', id: '41-1'},
        {dir: 'east', id: '42-fdrd'},
        {dir: 'west', id: '42-tudo'},
      ]
    },
    {
      id: '41-1',
      coord: [],
      name: 'E. 41st St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '42-1'},
        {dir: 'south', id: '40-1'},
        {dir: 'east', id: '41-fdrd'},
        {dir: 'west', id: '41-tudo'},
      ]
    },
    {
      id: '40-1',
      coord: [],
      name: 'E. 40th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '41-1'},
        {dir: 'south', id: '39-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '40-tudo'},
      ]
    },
    {
      id: '39-1',
      coord: [],
      name: 'E. 39th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '40-1'},
        {dir: 'south', id: '38-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '39-tudo'},
      ]
    },
    {
      id: '38-1',
      coord: [],
      name: 'E. 38th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '39-1'},
        {dir: 'south', id: '37-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '38-2'},
      ]
    },
    {
      id: '37-1',
      coord: [],
      name: 'E. 37th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '38-1'},
        {dir: 'south', id: '36-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '37-qin'},
      ]
    },
    {
      id: '36-1',
      coord: [],
      name: 'E. 36th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '37-1'},
        {dir: 'south', id: '35-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '36-qin'},
      ]
    },
    {
      id: '35-1',
      coord: [],
      name: 'E. 35th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '36-1'},
        {dir: 'south', id: '34-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '35-qin'},
      ]
    },
    {
      id: '39-tudo',
      coord: [],
      name: 'E. 39th St. and Tudor Place',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '40-tudo'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '39-1'},
        {dir: 'west', id: '39-2'},
      ]
    },
    {
      id: '40-tudo',
      coord: [],
      name: 'E. 40th St. and Tudor Place',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '41-tudo'},
        {dir: 'south', id: '39-tudo'},
        {dir: 'east', id: '40-1'},
        {dir: 'west', id: '40-2'},
      ]
    },
    {
      id: '41-tudo',
      coord: [],
      name: 'E. 41st St. and Tudor Place',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '42-tudo'},
        {dir: 'south', id: '40-tudo'},
        {dir: 'east', id: '41-1'},
        {dir: 'west', id: '41-2'},
      ]
    },
    {
      id: '42-tudo',
      coord: [],
      name: 'E. 42nd St. and Tudor Place',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '43-tudo'},
        {dir: 'south', id: '41-tudo'},
        {dir: 'east', id: '42-1'},
        {dir: 'west', id: '42-2'},
      ]
    },
    {
      id: '43-tudo',
      coord: [],
      name: 'E. 40th St. and Tudor Place',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '42-tudo'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '43-2'},
      ]
    },
    {
      id: '41-fdrd',
      coord: [],
      name: 'E. 41st St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '42-fdrd'},
        {dir: 'south', id: '34-fdrd'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '41-1'},
      ]
    },
    {
      id: '42-fdrd',
      coord: [],
      name: 'E. 42nd St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '41-fdrd'},
        {dir: 'east', id: '42-erdr'},
        {dir: 'west', id: '42-1'},
      ]
    },
    {
      id: '49-beek',
      coord: [],
      name: 'E. 49th St. and Beekman Place',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '50-beek'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '49-1'},
      ]
    },
    {
      id: '50-beek',
      coord: [],
      name: 'E. 50th St. and Beekman Place',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '51-beek'},
        {dir: 'south', id: '49-beek'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '50-1'},
      ]
    },
    {
      id: '51-beek',
      coord: [],
      name: 'E. 51st St. and Beekman Place',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '50-beek'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '51-1'},
      ]
    },
    {
      id: '53-sutt',
      coord: [],
      name: 'E. 53rd St. and Sutton Place',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '54-sutt'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '53-1'},
      ]
    },
    {
      id: '54-sutt',
      coord: [],
      name: 'E. 54th St. and Sutton Place',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '55-sutt'},
        {dir: 'south', id: '53-sutt'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '54-1'},
      ]
    },
    {
      id: '55-sutt',
      coord: [],
      name: 'E. 55th St. and Sutton Place',
      desc: `In a city of strange sights this has to be one of the strangest.  A gigantic office building in the shape of a chest of drawers has come to rest on what seems to be a gigantic pagan temple, complete with gilded idol. But who is the god being worshipped here? \n\nHe carries a bundle of lightning bolts, but he’s too slim for Zeus. `,
      exits: [
        {dir: 'north', id: '56-sutt'},
        {dir: 'south', id: '54-sutt'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '55-1'},
        {dir: ['office', 'building', 'drawers', 'drawer'], block: `Finally you have to ask one of the attendants of the shrine, who stands behind the marble altar to INFORMATION. He gives you a fishy look and tells you to keep moving.`}
        ]
    },
    {
      id: '56-sutt',
      coord: [],
      name: 'E. 56th St. and Sutton Place',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '57-sutt'},
        {dir: 'south', id: '55-sutt'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '56-1'},
      ]
    },
    {
      id: '57-sutt',
      coord: [],
      name: 'E. 57th St. and Sutton Place',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '58-sutt'},
        {dir: 'south', id: '56-sutt'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '57-1'},
      ]
    },
    {
      id: '58-sutt',
      coord: [],
      name: 'E. 58th St. and Sutton Place',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '59-sutt'},
        {dir: 'south', id: '57-sutt'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '58-1'},
      ]
    },
    {
      id: '59-sutt',
      coord: [],
      name: 'E. 59th St. and Sutton Place',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '60-york'},
        {dir: 'south', id: '58-sutt'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '59-1'},
      ]
    },
      /************/
    /* Westside */
    /************/
    {
      id: '96-hhpw',
      coord: [75.505, -56.173],
      name: 'W. 96th St. and Henry Hudson Parkway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '79-hhpw'},
        {dir: 'east', id: '96-rive'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '79-hhpw',
      coord: [64.534, -56.173],
      name: 'W. 79th St. and Henry Hudson Parkway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-hhpw'},
        {dir: 'south', id: '72-hhpw'},
        {dir: 'east', id: '79-rive'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '72-hhpw',
      coord: [57.878, -54.974],
      name: 'W. 72nd St. and Henry Hudson Parkway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-hhpw'},
        {dir: 'south', id: '57-hhpw'},
        {dir: 'east', id: '72-rive'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    //Riverside Drive
    {
      id: '110-rive',
      coord: [80.909, -53.202],
      name: 'W. 110th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-rive'},
        {dir: 'east', id: '110-broa'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '109-rive',
      coord: [80.597, -53.202],
      name: 'W. 109th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-rive'},
        {dir: 'south', id: '108-rive'},
        {dir: 'east', id: '109-broa'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '108-rive',
      coord: [80.299, -53.202],
      name: 'W. 108th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-rive'},
        {dir: 'south', id: '107-rive'},
        {dir: 'east', id: '108-broa'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '107-rive',
      coord: [79.971, -53.267],
      name: 'W. 107th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-rive'},
        {dir: 'south', id: '106-rive'},
        {dir: 'east', id: '107-broa'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '106-rive',
      coord: [79.632, -53.267],
      name: 'W. 106th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-rive'},
        {dir: 'south', id: '105-rive'},
        {dir: 'east', id: '106-broa'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '105-rive',
      coord: [79.320, -53.172],
      name: 'W. 105th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-rive'},
        {dir: 'south', id: '104-rive'},
        {dir: 'east', id: '105-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '104-rive',
      coord: [78.926, -53.029],
      name: 'W. 104th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-rive'},
        {dir: 'south', id: '103-rive'},
        {dir: 'east', id: '104-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '103-rive',
      coord: [78.549, -52.778],
      name: 'W. 103th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-rive'},
        {dir: 'south', id: '102-rive'},
        {dir: 'east', id: '103-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '102-rive',
      coord: [78.171, -52.485],
      name: 'W. 102nd St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-rive'},
        {dir: 'south', id: '101-rive'},
        {dir: 'east', id: '102-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '101-rive',
      coord: [77.737, -52.060],
      name: 'W. 101st St. and Riverside Dr. ',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-rive'},
        {dir: 'south', id: '100-rive'},
        {dir: 'east', id: '101-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '100-rive',
      coord: [77.329, -51.850],
      name: 'W. 100th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-rive'},
        {dir: 'south', id: '99-rive'},
        {dir: 'east', id: '100-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '99-rive',
      coord: [76.936, -52.094],
      name: 'W. 99th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '100-rive'},
        {dir: 'south', id: '98-rive'},
        {dir: 'east', id: '99-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '98-rive',
      coord: [76.468, -52.441],
      name: 'W. 98th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '99-rive'},
        {dir: 'south', id: '97-rive'},
        {dir: 'east', id: '98-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '97-rive',
      coord: [75.983, -52.878],
      name: 'W. 97th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-rive'},
        {dir: 'south', id: '96-rive'},
        {dir: 'east', id: '97-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '96-rive',
      coord: [75.520, -53.105],
      name: 'W. 96th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '97-rive'},
        {dir: 'south', id: '95-rive'},
        {dir: 'east', id: '96-wend'},
        {dir: 'west', id: '96-hhpw'},
      ]
    },
    {
      id: '95-rive',
      coord: [75.000, -52.948],
      name: 'W. 95th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-rive'},
        {dir: 'south', id: '94-rive'},
        {dir: 'east', id: '95-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '94-rive',
      coord: [74.468, -52.568],
      name: 'W. 94th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-rive'},
        {dir: 'south', id: '93-rive'},
        {dir: 'east', id: '94-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '93-rive',
      coord: [73.992, -52.064],
      name: 'W. 93rd St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-rive'},
        {dir: 'south', id: '92-rive'},
        {dir: 'east', id: '93-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '92-rive',
      coord: [73.458, -51.679],
      name: 'W. 92nd St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-rive'},
        {dir: 'south', id: '91-rive'},
        {dir: 'east', id: '92-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '91-rive',
      coord: [72.918, -51.598],
      name: 'W. 91st St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-rive'},
        {dir: 'south', id: '90-rive'},
        {dir: 'east', id: '91-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '90-rive',
      coord: [72.316, -51.732],
      name: 'W. 90th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-rive'},
        {dir: 'south', id: '89-rive'},
        {dir: 'east', id: '90-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '89-rive',
      coord: [71.813, -52.069],
      name: 'W. 89th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-rive'},
        {dir: 'south', id: '88-rive'},
        {dir: 'east', id: '89-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '88-rive',
      coord: [71.207, -52.597],
      name: 'W. 88th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-rive'},
        {dir: 'south', id: '87-rive'},
        {dir: 'east', id: '88-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '87-rive',
      coord: [70.545, -53.247],
      name: 'W. 87th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-rive'},
        {dir: 'south', id: '86-rive'},
        {dir: 'east', id: '87-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '86-rive',
      coord: [69.881, -53.695],
      name: 'W. 86th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '87-rive'},
        {dir: 'south', id: '85-rive'},
        {dir: 'east', id: '86-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '85-rive',
      coord: [69.219, -53.897],
      name: 'W. 85th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-rive'},
        {dir: 'south', id: 'epoe-rive'},
        {dir: 'east', id: ''},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: 'epoe-rive',
      coord: [68.530, -53.826],
      name: 'Edgar Allen Poe St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-rive'},
        {dir: 'south', id: '83-rive'},
        {dir: 'east', id: 'epoe-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '83-rive',
      coord: [67.817, -53.601],
      name: 'W. 83rd St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'epoe-rive'},
        {dir: 'south', id: '82-rive'},
        {dir: 'east', id: '83-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '82-rive',
      coord: [67.106, -53.068],
      name: 'W. 82nd St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-rive'},
        {dir: 'south', id: '81-rive'},
        {dir: 'east', id: '82-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '81-rive',
      coord: [66.244, -52.240],
      name: 'W. 81st St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-rive'},
        {dir: 'south', id: '80-rive'},
        {dir: 'east', id: '81-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '80-rive',
      coord: [65.448, -51.469],
      name: 'W. 80th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-rive'},
        {dir: 'south', id: '79-rive'},
        {dir: 'east', id: '80-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '79-rive',
      coord: [64.498, -51.112],
      name: 'W. 79th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '80-rive'},
        {dir: 'south', id: '78-rive'},
        {dir: 'east', id: '79-wend'},
        {dir: 'west', id: '79-hhpw'},
      ]
    },
    {
      id: '78-rive',
      coord: [63.741, -51.379],
      name: 'W. 78th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-rive'},
        {dir: 'south', id: '77-rive'},
        {dir: 'east', id: '78-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '77-rive',
      coord: [62.859, -51.862],
      name: 'W. 77th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-rive'},
        {dir: 'south', id: '76-rive'},
        {dir: 'east', id: '77-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '76-rive',
      coord: [61.908, -52.334],
      name: 'W. 76th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-rive'},
        {dir: 'south', id: '75-rive'},
        {dir: 'east', id: '76-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '75-rive',
      coord: [60.901, -52.634],
      name: 'W. 75th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-rive'},
        {dir: 'south', id: '74-rive'},
        {dir: 'east', id: '75-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '74-rive',
      coord: [59.841, -52.445],
      name: 'W. 74th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-rive'},
        {dir: 'south', id: '73-rive'},
        {dir: 'east', id: '74-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '73-rive',
      coord: [58.907, -51.947],
      name: 'W. 73rd St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-rive'},
        {dir: 'south', id: '72-rive'},
        {dir: 'east', id: '73-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '72-rive',
      coord: [57.850, -51.021],
      name: 'W. 72nd St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-rive'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '72-wend'},
        {dir: 'west', id: '72-hhpw'},
      ]
    },
    {
      id: '105-wend',
      coord: [79.309, -49.058],
      name: 'W. 105th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wend-broa'},
        {dir: 'south', id: '104-wend'},
        {dir: 'east', id: '105-broa'},
        {dir: 'west', id: '105-rive'},
      ]
    },
    {
      id: '104-wend',
      coord: [78.937, -49.033],
      name: 'W. 104th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-wend'},
        {dir: 'south', id: '103-wend'},
        {dir: 'east', id: '104-broa'},
        {dir: 'west', id: '104-rive'},
      ]
    },
    {
      id: '103-wend',
      coord: [78.545, -49.022],
      name: 'W. 103rd St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-wend'},
        {dir: 'south', id: '102-wend'},
        {dir: 'east', id: '103-broa'},
        {dir: 'west', id: '103-rive'},
      ]
    },
    {
      id: '102-wend',
      coord: [78.142, -49.009],
      name: 'W. 102nd St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-wend'},
        {dir: 'south', id: '101-wend'},
        {dir: 'east', id: '102-broa'},
        {dir: 'west', id: '102-rive'},
      ]
    },
    {
      id: '101-wend',
      coord: [77.727, -48.983],
      name: 'W. 101st St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-wend'},
        {dir: 'south', id: '100-wend'},
        {dir: 'east', id: '101-broa'},
        {dir: 'west', id: '101-rive'},
      ]
    },
    {
      id: '100-wend',
      coord: [77.328, -48.964],
      name: 'W. 100th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-wend'},
        {dir: 'south', id: '99-wend'},
        {dir: 'east', id: '100-broa'},
        {dir: 'west', id: '100-rive'},
      ]
    },
    {
      id: '99-wend',
      coord: [76.936, -48.937],
      name: 'W. 99th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '100-wend'},
        {dir: 'south', id: '98-wend'},
        {dir: 'east', id: '99-broa'},
        {dir: 'west', id: '99-rive'},
      ]
    },
    {
      id: '98-wend',
      coord: [76.451, -48.914],
      name: 'W. 98th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '99-wend'},
        {dir: 'south', id: '97-wend'},
        {dir: 'east', id: '98-broa'},
        {dir: 'west', id: '98-rive'},
      ]
    },
    {
      id: '97-wend',
      coord: [75.997, -48.898],
      name: 'W. 97th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-wend'},
        {dir: 'south', id: '96-wend'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '97-rive'},
      ]
    },
    {
      id: '96-wend',
      coord: [75.510, -48.895],
      name: 'W. 96th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '97-wend'},
        {dir: 'south', id: '95-wend'},
        {dir: 'east', id: '96-broa'},
        {dir: 'west', id: '96-rive'},
      ]
    },
    {
      id: '95-wend',
      coord: [75.000, -48.837],
      name: 'W. 95th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-wend'},
        {dir: 'south', id: '94-wend'},
        {dir: 'east', id: '95-broa'},
        {dir: 'west', id: '95-rive'},
      ]
    },
    {
      id: '94-wend',
      coord: [74.454, -48.817],
      name: 'W. 94th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-wend'},
        {dir: 'south', id: '93-wend'},
        {dir: 'east', id: '94-broa'},
        {dir: 'west', id: '94-rive'},
      ]
    },
    {
      id: '93-wend',
      coord: [73.977, -48.820],
      name: 'W. 93rd St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-wend'},
        {dir: 'south', id: '92-wend'},
        {dir: 'east', id: '93-broa'},
        {dir: 'west', id: '93-rive'},
      ]
    },
    {
      id: '92-wend',
      coord: [73.440, -48.820],
      name: 'W. 92nd St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-wend'},
        {dir: 'south', id: '91-wend'},
        {dir: 'east', id: '92-broa'},
        {dir: 'west', id: '92-rive'},
      ]
    },
    {
      id: '91-wend',
      coord: [72.922, -48.755],
      name: 'W. 91st St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-wend'},
        {dir: 'south', id: '90-wend'},
        {dir: 'east', id: '91-broa'},
        {dir: 'west', id: '91-rive'},
      ]
    },
    {
      id: '90-wend',
      coord: [72.334, -48.729],
      name: 'W. 90th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-wend'},
        {dir: 'south', id: '89-wend'},
        {dir: 'east', id: '90-broa'},
        {dir: 'west', id: '90-rive'},
      ]
    },
    {
      id: '89-wend',
      coord: [71.814, -48.720],
      name: 'W. 89th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-wend'},
        {dir: 'south', id: '88-wend'},
        {dir: 'east', id: '89-broa'},
        {dir: 'west', id: '89-rive'},
      ]
    },
    {
      id: '88-wend',
      coord: [71.187, -48.720],
      name: 'W. 88th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-wend'},
        {dir: 'south', id: '87-wend'},
        {dir: 'east', id: '88-broa'},
        {dir: 'west', id: '88-rive'},
      ]
    },
    {
      id: '87-wend',
      coord: [70.539, -48.676],
      name: 'W. 87th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-wend'},
        {dir: 'south', id: '86-wend'},
        {dir: 'east', id: '87-broa'},
        {dir: 'west', id: '87-rive'},
      ]
    },
    {
      id: '86-wend',
      coord: [69.858, -48.680],
      name: 'W. 86th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '87-wend'},
        {dir: 'south', id: '85-wend'},
        {dir: 'east', id: '86-broa'},
        {dir: 'west', id: '86-rive'},
      ]
    },
    {
      id: '85-wend',
      coord: [69.220, -48.650],
      name: 'W. 85th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-wend'},
        {dir: 'south', id: 'epoe-wend'},
        {dir: 'east', id: '85-broa'},
        {dir: 'west', id: '85-rive'},
      ]
    },
    {
      id: 'epoe-wend',
      coord: [68.509, -48.671],
      name: 'Edgar Allen Poe St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-wend'},
        {dir: 'south', id: '83-wend'},
        {dir: 'east', id: 'epoe-broa'},
        {dir: 'west', id: 'epoe-rive'},
      ]
    },
    {
      id: '83-wend',
      coord: [67.813, -48.628],
      name: 'W. 83rd St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'epoe-wend'},
        {dir: 'south', id: '82-wend'},
        {dir: 'east', id: '83-broa'},
        {dir: 'west', id: '83-rive'},
      ]
    },
    {
      id: '82-wend',
      coord: [67.078, -48.585],
      name: 'W. 82nd St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-wend'},
        {dir: 'south', id: '81-wend'},
        {dir: 'east', id: '82-broa'},
        {dir: 'west', id: '82-rive'},
      ]
    },
    {
      id: '81-wend',
      coord: [66.255, -48.579],
      name: 'W. 81st St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-wend'},
        {dir: 'south', id: '80-wend'},
        {dir: 'east', id: '81-broa'},
        {dir: 'west', id: '81-rive'},
      ]
    },
    {
      id: '80-wend',
      coord: [65.454, -48.585],
      name: 'W. 80th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-wend'},
        {dir: 'south', id: '79-wend'},
        {dir: 'east', id: '80-broa'},
        {dir: 'west', id: '80-rive'},
      ]
    },
    {
      id: '79-wend',
      coord: [64.516, -48.570],
      name: 'W. 79th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '80-wend'},
        {dir: 'south', id: '78-wend'},
        {dir: 'east', id: '79-broa'},
        {dir: 'west', id: '79-rive'},
      ]
    },
    {
      id: '78-wend',
      coord: [63.724, -48.551],
      name: 'W. 78th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-wend'},
        {dir: 'south', id: '77-wend'},
        {dir: 'east', id: '78-broa'},
        {dir: 'west', id: '78-rive'},
      ]
    },
    {
      id: '77-wend',
      coord: [62.822, -48.527],
      name: 'W. 77th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-wend'},
        {dir: 'south', id: '76-wend'},
        {dir: 'east', id: '77-broa'},
        {dir: 'west', id: '77-rive'},
      ]
    },
    {
      id: '76-wend',
      coord: [61.891, -48.464],
      name: 'W. 76th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-wend'},
        {dir: 'south', id: '75-wend'},
        {dir: 'east', id: '76-broa'},
        {dir: 'west', id: '76-rive'},
      ]
    },
    {
      id: '75-wend',
      coord: [60.904, -48.466],
      name: 'W. 75th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-wend'},
        {dir: 'south', id: '74-wend'},
        {dir: 'east', id: '75-broa'},
        {dir: 'west', id: '75-rive'},
      ]
    },
    {
      id: '74-wend',
      coord: [59.889, -48.457],
      name: 'W. 74th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-wend'},
        {dir: 'south', id: '73-wend'},
        {dir: 'east', id: '74-broa'},
        {dir: 'west', id: '74-rive'},
      ]
    },
    {
      id: '73-wend',
      coord: [58.950, -48.438],
      name: 'W. 73rd St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-wend'},
        {dir: 'south', id: '72-wend'},
        {dir: 'east', id: '73-broa'},
        {dir: 'west', id: '73-rive'},
      ]
    },
    {
      id: '72-wend',
      coord: [57.867, -48.386],
      name: 'W. 72nd St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-wend'},
        {dir: 'south', id: '71-wend'},
        {dir: 'east', id: '72-broa'},
        {dir: 'west', id: '72-rive'},
      ]
    },
    {
      id: '71-wend',
      coord: [56.822, -48.397],
      name: 'W. 71st St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-wend'},
        {dir: 'south', id: '70-wend'},
        {dir: 'east', id: '71-broa'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '70-wend',
      coord: [55.684, -48.387],
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '71-wend'},
        {dir: 'south', id: '69-wend'},
        {dir: 'east', id: '70-amst'},
        {dir: 'west', id: '70-free'},
      ]
    },
    {
      id: '66-wend',
      coord: [51.293, -48.287],
      name: 'W. 66th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-wend'},
        {dir: 'south', id: '65-wend'},
        {dir: 'east', id: '66-amst'},
        {dir: 'west', id: '66-free'},
      ]
    },
    {
      id: '65-wend',
      coord: [49.987, -48.296],
      name: 'W. 65th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '66-wend'},
        {dir: 'south', id: '64-wend'},
        {dir: 'east', id: '65-amst'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '64-wend',
      coord: [48.677, -48.251],
      name: 'W. 64th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '65-wend'},
        {dir: 'south', id: '63-wend'},
        {dir: 'east', id: '64-amst'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '63-wend',
      coord: [47.468, -48.230],
      name: 'W. 63rd St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-wend'},
        {dir: 'south', id: '61-wend'},
        {dir: 'east', id: '63-amst'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '61-wend',
      coord: [44.835, -48.131],
      name: 'W. 61st St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-wend'},
        {dir: 'south', id: '60-wend'},
        {dir: 'east', id: '61-amst'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '60-wend',
      coord: [43.381, -48.131],
      name: 'W. 60th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-wend'},
        {dir: 'south', id: '59-wend'},
        {dir: 'east', id: '60-amst'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '59-wend',
      coord: [41.922, -48.099],
      name: 'W. 59th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '60-wend'},
        {dir: 'south', id: '58-wend'},
        {dir: 'east', id: '59-amst'},
        {dir: 'west', id: '59-12'},
      ]
    },
//freedom place
    {
      id: '70-free',
      coord: [55.635, -53.079],
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '66-free'},
        {dir: 'east', id: '70-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '66-free',
      coord: [51.339, -51.514],
      name: 'W. 66th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-free'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '66-wend'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '110-broa',
      coord: [80.887, -49.153],
      name: 'W. 110th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-broa'},
        {dir: 'east', id: '110-amst'},
        {dir: 'west', id: '110-rive'},
      ]
    },
    {
      id: '109-broa',
      coord: [80.601, -49.110],
      name: 'W. 109th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-broa'},
        {dir: 'south', id: '108-broa'},
        {dir: 'east', id: '109-amst'},
        {dir: 'west', id: '109-rive'},
      ]
    },
    {
      id: '108-broa',
      coord: [80.303, -49.059],
      name: 'W. 108th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-broa'},
        {dir: 'south', id: '107-broa'},
        {dir: 'east', id: '108-amst'},
        {dir: 'west', id: '108-rive'},
      ]
    },
    {
      id: '107-broa',
      coord: [79.954, -49.049],
      name: 'W. 107th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-broa'},
        {dir: 'south', id: '106-broa'},
        {dir: 'east', id: '107-amst'},
        {dir: 'west', id: '107-rive'},
      ]
    },
    {
      id: '106-broa',
      coord: [79.635, -48.856],
      name: 'W. 106th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-broa'},
        {dir: 'south', id: 'wend-broa'},
        {dir: 'east', id: '106-amst'},
        {dir: 'west', id: '106-rive'},
      ]
    },
    //COME BACK HERE
    {
      id: 'wend-broa',
      coord: [79.603, -48.844],
      name: 'West End Ave. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-broa'},
        {dir: 'south', id: '105-wend'},
        {dir: 'east', id: '105-broa'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '105-broa',
      coord: [79.301, -48.016],
      name: 'W. 105th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'wend-broa'},
        {dir: 'south', id: '104-broa'},
        {dir: 'east', id: '105-amst'},
        {dir: 'west', id: '105-wend'},
      ]
    },
    {
      id: '104-broa',
      coord: [78.936, -46.916],
      name: 'W. 104th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-broa'},
        {dir: 'south', id: '103-broa'},
        {dir: 'east', id: '104-amst'},
        {dir: 'west', id: '104-wend'},
      ]
    },
    {
      id: '103-broa',
      coord: [78.540, -45.817],
      name: 'W. 103rd St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-broa'},
        {dir: 'south', id: '102-broa'},
        {dir: 'east', id: '103-amst'},
        {dir: 'west', id: '103-wend'},
      ]
    },
    {
      id: '102-broa',
      coord: [78.151, -45.765],
      name: 'W. 102nd St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-broa'},
        {dir: 'south', id: '101-broa'},
        {dir: 'east', id: '102-amst'},
        {dir: 'west', id: '102-wend'},
      ]
    },
    {
      id: '101-broa',
      coord: [77.737, -45.731],
      name: 'W. 101st St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-broa'},
        {dir: 'south', id: '100-broa'},
        {dir: 'east', id: '101-amst'},
        {dir: 'west', id: '101-wend'},
      ]
    },
    {
      id: '100-broa',
      coord: [77.318, -45.763],
      name: 'W. 100th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-broa'},
        {dir: 'south', id: '99-broa'},
        {dir: 'east', id: '100-amst'},
        {dir: 'west', id: '100-wend'},
      ]
    },
    {
      id: '99-broa',
      coord: [76.922, -45.781],
      name: 'W. 99th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '100-broa'},
        {dir: 'south', id: '98-broa'},
        {dir: 'east', id: '99-amst'},
        {dir: 'west', id: '99-wend'},
      ]
    },
    {
      id: '98-broa',
      coord: [76.445, -45.769],
      name: 'W. 98th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '99-broa'},
        {dir: 'south', id: '97-broa'},
        {dir: 'east', id: '98-amst'},
        {dir: 'west', id: '98-wend'},
      ]
    },
    {
      id: '97-broa',
      coord: [75.985, -45.782],
      name: 'W. 97th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-broa'},
        {dir: 'south', id: '96-broa'},
        {dir: 'east', id: '97-amst'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '96-broa',
      coord: [75.501, -45.814],
      name: 'W. 96th St. and Broadway',
      desc: '',
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '97-broa'},
        {dir: 'south', id: '95-broa'},
        {dir: 'east', id: '96-amst'},
        {dir: 'west', id: '96-wend'},
      ]
    },
    {
      id: '95-broa',
      coord: [74.990, -45.764],
      name: 'W. 95th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-broa'},
        {dir: 'south', id: '94-broa'},
        {dir: 'east', id: '95-amst'},
        {dir: 'west', id: '95-wend'},
      ]
    },
    {
      id: '94-broa',
      coord: [74.462, -45.783],
      name: 'W. 94th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-broa'},
        {dir: 'south', id: '93-broa'},
        {dir: 'east', id: '94-amst'},
        {dir: 'west', id: '94-wend'},
      ]
    },
    {
      id: '93-broa',
      coord: [73.973, -45.797],
      name: 'W. 93rd St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-broa'},
        {dir: 'south', id: '92-broa'},
        {dir: 'east', id: '93-amst'},
        {dir: 'west', id: '93-wend'},
      ]
    },
    {
      id: '92-broa',
      coord: [73.443, -45.797],
      name: 'W. 92nd St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-broa'},
        {dir: 'south', id: '91-broa'},
        {dir: 'east', id: '92-amst'},
        {dir: 'west', id: '92-wend'},
      ]
    },
    {
      id: '91-broa',
      coord: [72.905, -45.782],
      name: 'W. 91st St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-broa'},
        {dir: 'south', id: '90-broa'},
        {dir: 'east', id: '91-amst'},
        {dir: 'west', id: '91-wend'},
      ]
    },
    {
      id: '90-broa',
      coord: [72.325, -45.768],
      name: 'W. 90th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-broa'},
        {dir: 'south', id: '89-broa'},
        {dir: 'east', id: '90-amst'},
        {dir: 'west', id: '90-wend'},
      ]
    },
    {
      id: '89-broa',
      coord: [71.816, -45.751],
      name: 'W. 89th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-broa'},
        {dir: 'south', id: '88-broa'},
        {dir: 'east', id: '89-amst'},
        {dir: 'west', id: '89-wend'},
      ]
    },
    {
      id: '88-broa',
      coord: [71.188, -45.797],
      name: 'W. 88th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-broa'},
        {dir: 'south', id: '87-broa'},
        {dir: 'east', id: '88-amst'},
        {dir: 'west', id: '88-wend'},
      ]
    },
    {
      id: '87-broa',
      coord: [70.547, -45.775],
      name: 'W. 87th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-broa'},
        {dir: 'south', id: '86-broa'},
        {dir: 'east', id: '87-amst'},
        {dir: 'west', id: '87-wend'},
      ]
    },
    {
      id: '86-broa',
      coord: [69.863, -45.771],
      name: 'W. 86th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '87-broa'},
        {dir: 'south', id: '85-broa'},
        {dir: 'east', id: '86-amst'},
        {dir: 'west', id: '86-wend'},
      ]
    },
    {
      id: '85-broa',
      coord: [69.213, -45.735],
      name: 'W. 85th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-broa'},
        {dir: 'south', id: 'epoe-broa'},
        {dir: 'east', id: '85-amst'},
        {dir: 'west', id: '85-wend'},
      ]
    },
    {
      id: 'epoe-broa',
      coord: [68.499, -45.775],
      name: 'Edgar Allen Poe St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-broa'},
        {dir: 'south', id: '83-broa'},
        {dir: 'east', id: 'epoe-amst'},
        {dir: 'west', id: 'epoe-wend'},
      ]
    },
    {
      id: '83-broa',
      coord: [67.792, -45.768],
      name: 'W. 83rd St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'epoe-broa'},
        {dir: 'south', id: '82-broa'},
        {dir: 'east', id: '83-amst'},
        {dir: 'west', id: '83-wend'},
      ]
    },
    {
      id: '82-broa',
      coord: [67.080, -45.706],
      name: 'W. 82nd St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-broa'},
        {dir: 'south', id: '81-broa'},
        {dir: 'east', id: '82-amst'},
        {dir: 'west', id: '82-wend'},
      ]
    },
    {
      id: '81-broa',
      coord: [66.239, -45.577],
      name: 'W. 81st St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-broa'},
        {dir: 'south', id: '80-broa'},
        {dir: 'east', id: '81-amst'},
        {dir: 'west', id: '81-wend'},
      ]
    },
    {
      id: '80-broa',
      coord: [65.437, -45.432],
      name: 'W. 80th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-broa'},
        {dir: 'south', id: '79-broa'},
        {dir: 'east', id: '80-amst'},
        {dir: 'west', id: '80-wend'},
      ]
    },
    {
      id: '79-broa',
      coord: [64.548, -45.315],
      name: 'W. 79th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '80-broa'},
        {dir: 'south', id: '78-broa'},
        {dir: 'east', id: '79-amst'},
        {dir: 'west', id: '79-wend'},
      ]
    },
    {
      id: '78-broa',
      coord: [63.707, -45.125],
      name: 'W. 78th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-broa'},
        {dir: 'south', id: '77-broa'},
        {dir: 'east', id: '78-amst'},
        {dir: 'west', id: '78-wend'},
      ]
    },
    {
      id: '77-broa',
      coord: [62.833, -44.831],
      name: 'W. 77th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-broa'},
        {dir: 'south', id: '76-broa'},
        {dir: 'east', id: '77-amst'},
        {dir: 'west', id: '77-wend'},
      ]
    },
    {
      id: '76-broa',
      coord: [61.895, -44.517],
      name: 'W. 76th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-broa'},
        {dir: 'south', id: '75-broa'},
        {dir: 'east', id: '76-amst'},
        {dir: 'west', id: '76-wend'},
      ]
    },
    {
      id: '75-broa',
      coord: [60.892, -44.126],
      name: 'W. 75th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-broa'},
        {dir: 'south', id: '74-broa'},
        {dir: 'east', id: '75-amst'},
        {dir: 'west', id: '75-wend'},
      ]
    },
    {
      id: '74-broa',
      coord: [59.907, -43.566],
      name: 'W. 74th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-broa'},
        {dir: 'south', id: '73-broa'},
        {dir: 'east', id: '74-amst'},
        {dir: 'west', id: '74-wend'},
      ]
    },
    {
      id: '73-broa',
      coord: [58.937, -43.078],
      name: 'W. 73rd St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-broa'},
        {dir: 'south', id: '72-broa'},
        {dir: 'east', id: '73-amst'},
        {dir: 'west', id: '73-wend'},
      ]
    },
    {
      id: '72-broa',
      coord: [57.898, -42.383],
      name: 'W. 72nd St. and Broadway',
      desc: `The 72 ST-Broadway Station entrance is at this corner.`,
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '73-broa'},
        {dir: 'south', id: '71-broa'},
        {dir: 'east', id: '72-amst'},
        {dir: 'west', id: '72-wend'},
      ]
    },
    {
      id: '71-broa',
      coord: [56.845, -41.781],
      name: 'W. 71st St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-broa'},
        {dir: 'south', id: 'broa-amst'},
        {dir: 'east', id: '71-amst'},
        {dir: 'west', id: '71-wend'},
      ]
    },
    {
      id: '70-broa',
      coord: [55.728, -40.720],
      name: 'W. 70th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '69-broa'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '70-amst'},
      ]
    },
    {
      id: '69-broa',
      coord: [54.752, -39.927],
      name: 'W. 69th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-broa'},
        {dir: 'south', id: '68-broa'},
        {dir: 'east', id: '69-colu'},
        {dir: 'west', id: '69-amst'},
      ]
    },
    {
      id: '68-broa',
      coord: [53.607, -38.813],
      name: 'W. 68th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '69-broa'},
        {dir: 'south', id: '67-broa'},
        {dir: 'east', id: '68-colu'},
        {dir: 'west', id: '68-amst'},
      ]
    },
    {
      id: '67-broa',
      coord: [52.529, -37.785],
      name: 'W. 67th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '68-broa'},
        {dir: 'south', id: '66-broa'},
        {dir: 'east', id: '68-colu'},
        {dir: 'west', id: '68-amst'},
      ]
    },
    {
      id: '66-broa',
      coord: [51.311, -36.605],
      name: 'W. 66th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '67-broa'},
        {dir: 'south', id: '65-broa'},
        {dir: 'east', id: '66-colu'},
        {dir: 'west', id: '66-amst'},
      ]
    },
    {
      id: '65-broa',
      coord: [50.012, -35.400],
      name: 'W. 65th St. and Broadway',
      desc: '',
      isStreet: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '66-broa'},
        {dir: 'south', id: 'broa-colu'},
        {dir: 'east', id: '65-colu'},
        {dir: 'west', id: '65-amst'},
      ]
    },
    {
      id: '64-broa',
      coord: [48.741, -34.095],
      name: 'W. 64th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broa-colu'},
        {dir: 'south', id: '63-broa'},
        {dir: 'east', id: '64-cpkw'},
        {dir: 'west', id: '64-colu'},
      ]
    },
    {
      id: '63-broa',
      coord: [47.563, -32.959],
      name: 'W. 64th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-broa'},
        {dir: 'south', id: '62-broa'},
        {dir: 'east', id: '63-cpkw'},
        {dir: 'west', id: '63-colu'},
      ]
    },
    {
      id: '62-broa',
      coord: [46.352, -31.906],
      name: 'W. 62nd St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-broa'},
        {dir: 'south', id: '61-broa'},
        {dir: 'east', id: '62-cpkw'},
        {dir: 'west', id: '62-colu'},
      ]
    },
    {
      id: '61-broa',
      coord: [44.946, -30.736],
      name: 'W. 61st St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '62-broa'},
        {dir: 'south', id: '60-broa'},
        {dir: 'east', id: '61-cpkw'},
        {dir: 'west', id: '61-colu'},
      ]
    },
    {
      id: '60-broa',
      coord: [43.544, -29.649],
      name: 'W. 60th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-broa'},
        {dir: 'south', id: '59-broa'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '60'},
      ]
    },
    {
      id: '59-broa',
      coord: [42.036, -28.432],
      name: 'W. 59th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '60-broa'},
        {dir: 'south', id: 'broa-8'},
        {dir: 'east', id: '59-cpkw'},
        {dir: 'west', id: '59-colu'},
      ]
    },
    {
      id: '110-amst',
      coord: [80.895, -42.075],
      name: 'W. 110th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-amst'},
        {dir: 'east', id: '110-colu'},
        {dir: 'west', id: '110-broa'},
      ]
    },
    {
      id: '109-amst',
      coord: [80.597, -42.058],
      name: 'W. 109th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-amst'},
        {dir: 'south', id: '108-amst'},
        {dir: 'east', id: '109-colu'},
        {dir: 'west', id: '109-broa'},
      ]
    },
    {
      id: '108-amst',
      coord: [80.279, -42.039],
      name: 'W. 108th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-amst'},
        {dir: 'south', id: '107-amst'},
        {dir: 'east', id: '108-colu'},
        {dir: 'west', id: '108-broa'},
      ]
    },
    {
      id: '107-amst',
      coord: [79.953, -42.047],
      name: 'W. 107th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-amst'},
        {dir: 'south', id: '106-amst'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '107-broa'},
      ]
    },
    {
      id: '106-amst',
      coord: [79.628, -42.042],
      name: 'W. 106th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-amst'},
        {dir: 'south', id: '105-amst'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '106-broa'},
      ]
    },
    {
      id: '105-amst',
      coord: [79.295, -41.983],
      name: 'W. 105th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-amst'},
        {dir: 'south', id: '104-amst'},
        {dir: 'east', id: '105-colu'},
        {dir: 'west', id: '105-broa'},
      ]
    },
    {
      id: '104-amst',
      coord: [78.934, -42.018],
      name: 'W. 104th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-amst'},
        {dir: 'south', id: '103-amst'},
        {dir: 'east', id: '104-colu'},
        {dir: 'west', id: '104-broa'},
      ]
    },
    {
      id: '103-amst',
      coord: [78.548, -41.981],
      name: 'W. 103rd St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-amst'},
        {dir: 'south', id: '102-amst'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '103-broa'},
      ]
    },
    {
      id: '102-amst',
      coord: [78.156, -41.953],
      name: 'W. 102nd St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-amst'},
        {dir: 'south', id: '101-amst'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '102-broa'},
      ]
    },
    {
      id: '101-amst',
      coord: [77.743, -42.000],
      name: 'W. 101st St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-amst'},
        {dir: 'south', id: '100-amst'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '101-broa'},
      ]
    },
    {
      id: '100-amst',
      coord: [77.315, -41.957],
      name: 'W. 100th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-amst'},
        {dir: 'south', id: '99-amst'},
        {dir: 'east', id: '100-colu'},
        {dir: 'west', id: '100-broa'},
      ]
    },
    {
      id: '99-amst',
      coord: [76.935, -41.957],
      name: 'W. 99th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '100-amst'},
        {dir: 'south', id: '98-amst'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '99-broa'},
      ]
    },
    {
      id: '98-amst',
      coord: [76.455, -41.970],
      name: 'W. 98th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '99-amst'},
        {dir: 'south', id: '97-amst'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '98-broa'},
      ]
    },
    {
      id: '97-amst',
      coord: [75.997, -41.909],
      name: 'W. 97th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-amst'},
        {dir: 'south', id: '96-amst'},
        {dir: 'east', id: '97-colu'},
        {dir: 'west', id: '97-broa'},
      ]
    },
    {
      id: '96-amst',
      coord: [75.503, -41.918],
      name: 'W. 96th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '97-amst'},
        {dir: 'south', id: '95-amst'},
        {dir: 'east', id: '96-colu'},
        {dir: 'west', id: '96-broa'},
      ]
    },
    {
      id: '95-amst',
      coord: [74.999, -41.898],
      name: 'W. 95th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-amst'},
        {dir: 'south', id: '94-amst'},
        {dir: 'east', id: '95-colu'},
        {dir: 'west', id: '95-broa'},
      ]
    },
    {
      id: '94-amst',
      coord: [74.466, -41.879],
      name: 'W. 94th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-amst'},
        {dir: 'south', id: '93-amst'},
        {dir: 'east', id: '94-colu'},
        {dir: 'west', id: '94-broa'},
      ]
    },
    {
      id: '93-amst',
      coord: [73.977, -41.859],
      name: 'W. 93rd St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-amst'},
        {dir: 'south', id: '92-amst'},
        {dir: 'east', id: '93-colu'},
        {dir: 'west', id: '93-broa'},
      ]
    },
    {
      id: '92-amst',
      coord: [73.445, -41.867],
      name: 'W.  St. and ',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-amst'},
        {dir: 'south', id: '91-amst'},
        {dir: 'east', id: '92-colu'},
        {dir: 'west', id: '92-broa'},
      ]
    },
    {
      id: '91-amst',
      coord: [72.912, -41.869],
      name: 'W. 91st St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-amst'},
        {dir: 'south', id: '90-amst'},
        {dir: 'east', id: '91-colu'},
        {dir: 'west', id: '91-broa'},
      ]
    },
    {
      id: '90-amst',
      coord: [72.326, -41.854],
      name: 'W. 90th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-amst'},
        {dir: 'south', id: '89-amst'},
        {dir: 'east', id: '90-colu'},
        {dir: 'west', id: '90-broa'},
      ]
    },
    {
      id: '89-amst',
      coord: [71.816, -41.834],
      name: 'W. 89th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-amst'},
        {dir: 'south', id: '88-amst'},
        {dir: 'east', id: '89-colu'},
        {dir: 'west', id: '89-broa'},
      ]
    },
    {
      id: '88-amst',
      coord: [71.179, -41.830],
      name: 'W. 88th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-amst'},
        {dir: 'south', id: '87-amst'},
        {dir: 'east', id: '88-colu'},
        {dir: 'west', id: '88-broa'},
      ]
    },
    {
      id: '87-amst',
      coord: [70.569, -41.825],
      name: 'W. 87th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-amst'},
        {dir: 'south', id: '86-amst'},
        {dir: 'east', id: '87-colu'},
        {dir: 'west', id: '87-broa'},
      ]
    },
    {
      id: '86-amst',
      coord: [69.855, -41.793],
      name: 'W. 86th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '87-amst'},
        {dir: 'south', id: '85-amst'},
        {dir: 'east', id: '86-colu'},
        {dir: 'west', id: '86-broa'},
      ]
    },
    {
      id: '85-amst',
      coord: [69.205, -41.808],
      name: 'W. 85th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-amst'},
        {dir: 'south', id: 'epoe-amst'},
        {dir: 'east', id: '85-colu'},
        {dir: 'west', id: '85-broa'},
      ]
    },
    {
      id: 'epoe-amst',
      coord: [68.494, -41.776],
      name: 'Edgar Allen Poe St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-amst'},
        {dir: 'south', id: '83-amst'},
        {dir: 'east', id: 'epoe-colu'},
        {dir: 'west', id: 'epoe-broa'},
      ]
    },
    {
      id: '83-amst',
      coord: [67.797, -41.776],
      name: 'W. 83rd St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'epoe-amst'},
        {dir: 'south', id: '82-amst'},
        {dir: 'east', id: '83-colu'},
        {dir: 'west', id: '83-broa'},
      ]
    },
    {
      id: '82-amst',
      coord: [67.036, -41.763],
      name: 'W. 82nd St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-amst'},
        {dir: 'south', id: '81-amst'},
        {dir: 'east', id: '82-colu'},
        {dir: 'west', id: '82-broa'},
      ]
    },
    {
      id: '81-amst',
      coord: [66.254, -41.764],
      name: 'W. 81st St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-amst'},
        {dir: 'south', id: '80-amst'},
        {dir: 'east', id: '81-colu'},
        {dir: 'west', id: '81-broa'},
      ]
    },
    {
      id: '80-amst',
      coord: [65.427, -41.718],
      name: 'W. 80th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-amst'},
        {dir: 'south', id: '79-amst'},
        {dir: 'east', id: '80-colu'},
        {dir: 'west', id: '80-broa'},
      ]
    },
    {
      id: '79-amst',
      coord: [64.529, -41.706],
      name: 'W. 79th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '80-amst'},
        {dir: 'south', id: '78-amst'},
        {dir: 'east', id: '79-colu'},
        {dir: 'west', id: '79-broa'},
      ]
    },
    {
      id: '78-amst',
      coord: [63.718, -41.716],
      name: 'W. 78th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-amst'},
        {dir: 'south', id: '77-amst'},
        {dir: 'east', id: '78-colu'},
        {dir: 'west', id: '78-broa'},
      ]
    },
    {
      id: '77-amst',
      coord: [62.850, -41.659],
      name: 'W. 77th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-amst'},
        {dir: 'south', id: '76-amst'},
        {dir: 'east', id: '77-colu'},
        {dir: 'west', id: '77-broa'},
      ]
    },
    {
      id: '76-amst',
      coord: [61.885, -41.658],
      name: 'W. 76th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-amst'},
        {dir: 'south', id: '75-amst'},
        {dir: 'east', id: '76-colu'},
        {dir: 'west', id: '76-broa'},
      ]
    },
    {
      id: '75-amst',
      coord: [60.883, -41.617],
      name: 'W. 75th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-amst'},
        {dir: 'south', id: '74-amst'},
        {dir: 'east', id: '75-colu'},
        {dir: 'west', id: '75-broa'},
      ]
    },
    {
      id: '74-amst',
      coord: [59.911, -41.608],
      name: 'W. 74th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-amst'},
        {dir: 'south', id: '73-amst'},
        {dir: 'east', id: '74-colu'},
        {dir: 'west', id: '74-broa'},
      ]
    },
    {
      id: '73-amst',
      coord: [58.950, -41.587],
      name: 'W. 73rd St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-amst'},
        {dir: 'south', id: '72-amst'},
        {dir: 'east', id: '73-colu'},
        {dir: 'west', id: '73-broa'},
      ]
    },
    {
      id: '72-amst',
      coord: [57.878, -41.548],
      name: 'W. 72nd St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-amst'},
        {dir: 'south', id: '71-amst'},
        {dir: 'east', id: '72-colu'},
        {dir: 'west', id: '72-broa'},
      ]
    },
    {
      id: '71-amst',
      coord: [56.807, -41.507],
      name: 'W. 71st St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-amst'},
        {dir: 'south', id: 'broa-amst'},
        {dir: 'east', id: '71-colu'},
        {dir: 'west', id: '71-broa'},
      ]
    },
    {
      id: 'broa-amst',
      coord: [56.538, -41.516],
      name: 'Broadway and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '71-amst'},
        {dir: 'south', id: '70-amst'},
        {dir: 'east', id: '70-broa'},
        {dir: 'west', id: '71-broa'},
      ]
    },
    {
      id: '70-amst',
      coord: [55.721, -41.558],
      name: 'W. 70th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broa-amst'},
        {dir: 'south', id: '69-amst'},
        {dir: 'east', id: '70-broa'},
        {dir: 'west', id: '70-wend'},
      ]
    },
    {
      id: '69-amst',
      coord: [54.760, -41.506],
      name: 'W. 69th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-amst'},
        {dir: 'south', id: '68-amst'},
        {dir: 'east', id: '69-broa'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '68-amst',
      coord: [53.616, -41.481],
      name: 'W. 68th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '69-amst'},
        {dir: 'south', id: '67-amst'},
        {dir: 'east', id: '68-broa'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '67-amst',
      coord: [52.505, -41.442],
      name: 'W. 67th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '68-amst'},
        {dir: 'south', id: '66-amst'},
        {dir: 'east', id: '67-broa'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '66-amst',
      coord: [51.295, -41.386],
      name: 'W. 66th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '67-amst'},
        {dir: 'south', id: '65-amst'},
        {dir: 'east', id: '66-broa'},
        {dir: 'west', id: '66-wend'},
      ]
    },
    {
      id: '65-amst',
      coord: [49.973, -41.361],
      name: 'W. 65th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '66-amst'},
        {dir: 'south', id: '64-amst'},
        {dir: 'east', id: '65-broa'},
        {dir: 'west', id: '65-wend'},
      ]
    },
    {
      id: '64-amst',
      coord: [48.651, -41.329],
      name: 'W. 64th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '65-amst'},
        {dir: 'south', id: '62-amst'},
        {dir: 'east', id: '64-colu'},
        {dir: 'west', id: '64-wend'},
      ]
    },
    {
      id: '62-amst',
      coord: [46.275, -41.265],
      name: 'W. 62nd St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-amst'},
        {dir: 'south', id: '61-amst'},
        {dir: 'east', id: '62-colu'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '61-amst',
      coord: [44.898, -41.234],
      name: 'W. 61st St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '62-amst'},
        {dir: 'south', id: '60-amst'},
        {dir: 'east', id: '61-colu'},
        {dir: 'west', id: '61-wend'},
      ]
    },
    {
      id: '60-amst',
      coord: [43.475, -41.212],
      name: 'W. 60th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-amst'},
        {dir: 'south', id: '59-amst'},
        {dir: 'east', id: '60-colu'},
        {dir: 'west', id: '60-wend'},
      ]
    },
    {
      id: '59-amst',
      coord: [41.959, -41.146],
      name: 'W. 59th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '60-amst'},
        {dir: 'south', id: '58-10'},
        {dir: 'east', id: '59-colu'},
        {dir: 'west', id: '59-wend'},
      ]
    },
    {
      id: '110-colu',
      coord: [80.885, -35.429],
      name: 'W. 110th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-colu'},
        {dir: 'east', id: '110-manh'},
        {dir: 'west', id: '110-amst'},
      ]
    },
    {
      id: '109-colu',
      coord: [80.598, -35.421],
      name: 'W. 109th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-colu'},
        {dir: 'south', id: '108-colu'},
        {dir: 'east', id: '109-manh'},
        {dir: 'west', id: '109-amst'},
      ]
    },
    {
      id: '108-colu',
      coord: [80.297, -35.411],
      name: 'W. 108th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-colu'},
        {dir: 'south', id: '107-colu'},
        {dir: 'east', id: '108-manh'},
        {dir: 'west', id: '108-amst'},
      ]
    },
    {
      id: '107-colu',
      coord: [79.966, -35.396],
      name: 'W. 107th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-colu'},
        {dir: 'south', id: '106-colu'},
        {dir: 'east', id: '107-manh'},
        {dir: 'west', id: '107-amst'},
      ]
    },
    {
      id: '106-colu',
      coord: [79.638, -35.366],
      name: 'W. 106th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-colu'},
        {dir: 'south', id: '105-colu'},
        {dir: 'east', id: '106-manh'},
        {dir: 'west', id: '106-amst'},
      ]
    },
    {
      id: '105-colu',
      coord: [79.299, -35.377],
      name: 'W. 105th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-colu'},
        {dir: 'south', id: '104-colu'},
        {dir: 'east', id: '105-manh'},
        {dir: 'west', id: '105-amst'},
      ]
    },
    {
      id: '104-colu',
      coord: [78.925, -35.353],
      name: 'W. 104th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-colu'},
        {dir: 'south', id: '100-colu'},
        {dir: 'east', id: '104-manh'},
        {dir: 'west', id: '104-amst'},
      ]
    },
    {
      id: '100-colu',
      coord: [77.313, -35.311],
      name: 'W. 100th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-colu'},
        {dir: 'south', id: '97-colu'},
        {dir: 'east', id: '100-manh'},
        {dir: 'west', id: '100-amst'},
      ]
    },
    {
      id: '97-colu',
      coord: [75.986, -35.283],
      name: 'W. 97th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '100-colu'},
        {dir: 'south', id: '96-colu'},
        {dir: 'east', id: '97-cpkw'},
        {dir: 'west', id: '97-amst'},
      ]
    },
    {
      id: '96-colu',
      coord: [75.501, -35.259],
      name: 'W. 96th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '97-colu'},
        {dir: 'south', id: '95-colu'},
        {dir: 'east', id: '96-cpkw'},
        {dir: 'west', id: '96-amst'},
      ]
    },
    {
      id: '95-colu',
      coord: [74.989, -35.259],
      name: 'W. 95th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-colu'},
        {dir: 'south', id: '94-colu'},
        {dir: 'east', id: '95-cpkw'},
        {dir: 'west', id: '95-amst'},
      ]
    },
    {
      id: '94-colu',
      coord: [74.489, -35.238],
      name: 'W. 94th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-colu'},
        {dir: 'south', id: '93-colu'},
        {dir: 'east', id: '94-cpkw'},
        {dir: 'west', id: '94-amst'},
      ]
    },
    {
      id: '93-colu',
      coord: [73.951, -35.207],
      name: 'W. 93rd St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-colu'},
        {dir: 'south', id: '92-colu'},
        {dir: 'east', id: '93-cpkw'},
        {dir: 'west', id: '93-amst'},
      ]
    },
    {
      id: '92-colu',
      coord: [73.439, -35.245],
      name: 'W. 92nd St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-colu'},
        {dir: 'south', id: '91-colu'},
        {dir: 'east', id: '92-cpkw'},
        {dir: 'west', id: '92-amst'},
      ]
    },
    {
      id: '91-colu',
      coord: [72.909, -35.206],
      name: 'W. 91st St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-colu'},
        {dir: 'south', id: '90-colu'},
        {dir: 'east', id: '91-cpkw'},
        {dir: 'west', id: '91-amst'},
      ]
    },
    {
      id: '90-colu',
      coord: [72.337, -35.189],
      name: 'W. 90th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-colu'},
        {dir: 'south', id: '89-colu'},
        {dir: 'east', id: '90-cpkw'},
        {dir: 'west', id: '90-amst'},
      ]
    },
    {
      id: '89-colu',
      coord: [71.802, -35.196],
      name: 'W. 89th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-colu'},
        {dir: 'south', id: '88-colu'},
        {dir: 'east', id: '89-cpkw'},
        {dir: 'west', id: '89-amst'},
      ]
    },
    {
      id: '88-colu',
      coord: [71.189, -35.182],
      name: 'W. 88th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-colu'},
        {dir: 'south', id: '87-colu'},
        {dir: 'east', id: '88-cpkw'},
        {dir: 'west', id: '88-amst'},
      ]
    },
    {
      id: '87-colu',
      coord: [70.573, -35.156],
      name: 'W. 87th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-colu'},
        {dir: 'south', id: '86-colu'},
        {dir: 'east', id: '87-cpkw'},
        {dir: 'west', id: '87-amst'},
      ]
    },
    {
      id: '86-colu',
      coord: [69.858, -35.156],
      name: 'W. 86th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '87-colu'},
        {dir: 'south', id: '85-colu'},
        {dir: 'east', id: '86-cpkw'},
        {dir: 'west', id: '86-amst'},
      ]
    },
    {
      id: '85-colu',
      coord: [69.218, -35.112],
      name: 'W. 85th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-colu'},
        {dir: 'south', id: 'epoe-colu'},
        {dir: 'east', id: '85-cpkw'},
        {dir: 'west', id: '85-amst'},
      ]
    },
    {
      id: 'epoe-colu',
      coord: [68.476, -35.105],
      name: 'Edgar Allen Poe St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-colu'},
        {dir: 'south', id: '83-colu'},
        {dir: 'east', id: 'epoe-cpkw'},
        {dir: 'west', id: 'epoe-amst'},
      ]
    },
    {
      id: '83-colu',
      coord: [67.796, -35.123],
      name: 'W. 83rd St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'epoe-colu'},
        {dir: 'south', id: '82-colu'},
        {dir: 'east', id: '83-cpkw'},
        {dir: 'west', id: '83-amst'},
      ]
    },
    {
      id: '82-colu',
      coord: [67.050, -35.115],
      name: 'W. 82nd St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-colu'},
        {dir: 'south', id: '81-colu'},
        {dir: 'east', id: '82-cpkw'},
        {dir: 'west', id: '82-amst'},
      ]
    },
    {
      id: '81-colu',
      coord: [66.227, -35.072],
      name: 'W. 81st St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-colu'},
        {dir: 'south', id: '80-colu'},
        {dir: 'east', id: '81-cpkw'},
        {dir: 'west', id: '81-amst'},
      ]
    },
    {
      id: '80-colu',
      coord: [65.409, -35.078],
      name: 'W. 80th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-colu'},
        {dir: 'south', id: '79-colu'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '80-amst'},
      ]
    },
    {
      id: '79-colu',
      coord: [64.523, -35.006],
      name: 'W. 79th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '80-colu'},
        {dir: 'south', id: '78-colu'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '79-amst'},
      ]
    },
    {
      id: '78-colu',
      coord: [63.699, -34.990],
      name: 'W. 78th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-colu'},
        {dir: 'south', id: '77-colu'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '78-amst'},
      ]
    },
    {
      id: '77-colu',
      coord: [62.838, -34.927],
      name: 'W. 77th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-colu'},
        {dir: 'south', id: '76-colu'},
        {dir: 'east', id: '77-cpkw'},
        {dir: 'west', id: '77-amst'},
      ]
    },
    {
      id: '76-colu',
      coord: [61.862, -34.901],
      name: 'W. 76th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-colu'},
        {dir: 'south', id: '75-colu'},
        {dir: 'east', id: '76-cpkw'},
        {dir: 'west', id: '77-amst'},
      ]
    },
    {
      id: '75-colu',
      coord: [60.892, -34.842],
      name: 'W. 75th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-colu'},
        {dir: 'south', id: '74-colu'},
        {dir: 'east', id: '75-cpkw'},
        {dir: 'west', id: '75-amst'},
      ]
    },
    {
      id: '74-colu',
      coord: [59.938, -34.798],
      name: 'W. 74th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-colu'},
        {dir: 'south', id: '73-colu'},
        {dir: 'east', id: '74-cpkw'},
        {dir: 'west', id: '74-amst'},
      ]
    },
    {
      id: '73-colu',
      coord: [58.972, -34.755],
      name: 'W. 73rd St. and Columbus Ave.',
      desc: 'You see an alley here that seems to be used for making deliveries to the Dakota.',
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-colu'},
        {dir: 'south', id: '72-colu'},
        {dir: 'east', id: '73-cpkw'},
        {dir: 'west', id: '73-amst'},
        {dir: 'alley', block: `You have the sense that from somewhere in the building someone is looking at you. Not wanting to gain the attention of the police, you hurry back to the street.`}
      ]
    },
    {
      id: '72-colu',
      coord: [57.961, -34.710],
      name: 'W. 72nd St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-colu'},
        {dir: 'south', id: '71-colu'},
        {dir: 'east', id: '72-cpkw'},
        {dir: 'west', id: '72-amst'},
      ]
    },
    {
      id: '71-colu',
      coord: [56.869, -34.678],
      name: 'W. 71st St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-colu'},
        {dir: 'south', id: '70-colu'},
        {dir: 'east', id: '71-cpkw'},
        {dir: 'west', id: '71-amst'},
      ]
    },
    {
      id: '70-colu',
      coord: [55.748, -34.597],
      name: 'W. 70th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '71-colu'},
        {dir: 'south', id: '69-colu'},
        {dir: 'east', id: '71-cpkw'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '69-colu',
      coord: [54.757, -34.604],
      name: 'W. 69th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-colu'},
        {dir: 'south', id: '68-colu'},
        {dir: 'east', id: '69-cpkw'},
        {dir: 'west', id: '69-broa'},
      ]
    },
    {
      id: '68-colu',
      coord: [53.620, -34.534],
      name: 'W. 68th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '69-colu'},
        {dir: 'south', id: '67-colu'},
        {dir: 'east', id: '68-cpkw'},
        {dir: 'west', id: '68-broa'},
      ]
    },
    {
      id: '67-colu',
      coord: [52.516, -34.511],
      name: 'W. 67th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '68-colu'},
        {dir: 'south', id: '66-colu'},
        {dir: 'east', id: '67-cpkw'},
        {dir: 'west', id: '67-broa'},
      ]
    },
    {
      id: '66-colu',
      coord: [51.323, -34.463],
      name: 'W. 66th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '67-colu'},
        {dir: 'south', id: '65-colu'},
        {dir: 'east', id: '66-cpkw'},
        {dir: 'west', id: '66-broa'},
      ]
    },
    {
      id: '65-colu',
      coord: [50.043, -34.401],
      name: 'W. 65th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '66-colu'},
        {dir: 'south', id: 'broa-colu'},
        {dir: 'east', id: '65-cpkw'},
        {dir: 'west', id: '65-broa'},
      ]
    },
    {
      id: 'broa-colu',
      coord: [49.057, -34.388],
      name: 'Broadway and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '65-colu'},
        {dir: 'south', id: '64-colu'},
        {dir: 'east', id: '64-broa'},
        {dir: 'west', id: '65-broa'},
      ]
    },
    {
      id: '64-colu',
      coord: [48.616, -34.408],
      name: 'W. 64th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broa-colu'},
        {dir: 'south', id: '63-colu'},
        {dir: 'east', id: '64-broa'},
        {dir: 'west', id: '64-amst'},
      ]
    },
    {
      id: '63-colu',
      coord: [47.574, -34.416],
      name: 'W. 63rd St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-colu'},
        {dir: 'south', id: '62-colu'},
        {dir: 'east', id: '63-broa'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '62-colu',
      coord: [46.327, -34.369],
      name: 'W. 62nd St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-colu'},
        {dir: 'south', id: '61-colu'},
        {dir: 'east', id: '62-broa'},
        {dir: 'west', id: '62-amst'},
      ]
    },
    {
      id: '61-colu',
      coord: [44.969, -34.371],
      name: 'W. 61st St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '62-colu'},
        {dir: 'south', id: '60-colu'},
        {dir: 'east', id: '61-broa'},
        {dir: 'west', id: '61-amst'},
      ]
    },
    {
      id: '60-colu',
      coord: [43.510, -34.316],
      name: 'W. 60th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-colu'},
        {dir: 'south', id: '59-colu'},
        {dir: 'east', id: '60-broa'},
        {dir: 'west', id: '60-amst'},
      ]
    },
    {
      id: '59-colu',
      coord: [41.980, -34.311],
      name: 'W. 59th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '60-colu'},
        {dir: 'south', id: '58-9'},
        {dir: 'east', id: '59-broa'},
        {dir: 'west', id: '59-amst'},
      ]
    },
    {
      id: '110-manh',
      coord: [80.885, -32.710],
      name: 'W. 110th St. and Manhattan Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-manh'},
        {dir: 'east', id: '110-cpkw'},
        {dir: 'west', id: '110-colu'},
      ]
    },
    {
      id: '109-manh',
      coord: [80.594, -32.631],
      name: 'W. 109th St. and Manhattan Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-manh'},
        {dir: 'south', id: '108-manh'},
        {dir: 'east', id: '109-cpkw'},
        {dir: 'west', id: '109-colu'},
      ]
    },
    {
      id: '108-manh',
      coord: [80.286, -32.631],
      name: 'W. 108th St. and Manhattan Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-manh'},
        {dir: 'south', id: '107-manh'},
        {dir: 'east', id: '108-cpkw'},
        {dir: 'west', id: '108-colu'},
      ]
    },
    {
      id: '107-manh',
      coord: [79.955, -32.631],
      name: 'W. 107th St. and Manhattan Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-manh'},
        {dir: 'south', id: '106-manh'},
        {dir: 'east', id: '107-cpkw'},
        {dir: 'west', id: '107-colu'},
      ]
    },
    {
      id: '106-manh',
      coord: [79.629, -32.610],
      name: 'W. 106th St. and Manhattan Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-manh'},
        {dir: 'south', id: '105-manh'},
        {dir: 'east', id: '106-cpkw'},
        {dir: 'west', id: '106-colu'},
      ]
    },
    {
      id: '105-manh',
      coord: [79.302, -32.610],
      name: 'W. 105th St. and Manhattan Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-manh'},
        {dir: 'south', id: '104-manh'},
        {dir: 'east', id: '105-cpkw'},
        {dir: 'west', id: '105-colu'},
      ]
    },
    {
      id: '104-manh',
      coord: [78.925, -32.610],
      name: 'W. 104th St. and Manhattan Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-manh'},
        {dir: 'south', id: '103-manh'},
        {dir: 'east', id: '104-cpkw'},
        {dir: 'west', id: '104-colu'},
      ]
    },
    {
      id: '103-manh',
      coord: [78.528, -32.596],
      name: 'W. 103rd St. and Manhattan Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-manh'},
        {dir: 'south', id: '102-manh'},
        {dir: 'east', id: '103-cpkw'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '102-manh',
      coord: [78.129, -32.625],
      name: 'W. 102nd St. and Manhattan Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-manh'},
        {dir: 'south', id: '101-manh'},
        {dir: 'east', id: '102-cpkw'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '101-manh',
      coord: [77.742, -32.615],
      name: 'W. 101st St. and Manhattan Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-manh'},
        {dir: 'south', id: '100-manh'},
        {dir: 'east', id: '101-cpkw'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '100-manh',
      coord: [77.322, -32.594],
      name: 'W. 100th St. and Manhattan Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-manh'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '100-cpkw'},
        {dir: 'west', id: '100-colu'},
      ]
    },  {
      id: '110-cpkw',
      coord: [80.891, -28.798],
      name: 'W. 110th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-cpkw'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '110-manh'},
      ]
    },
    {
      id: '109-cpkw',
      coord: [80.592, -28.814],
      name: 'W. 109th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-cpkw'},
        {dir: 'south', id: '108-cpkw'},
        {dir: 'east', id: '109-7'},
        {dir: 'west', id: '109-manh'},
      ]
    },
    {
      id: '108-cpkw',
      coord: [80.288, -28.793],
      name: 'W. 108th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-cpkw'},
        {dir: 'south', id: '107-cpkw'},
        {dir: 'east', id: '108-7'},
        {dir: 'west', id: '108-manh'},
      ]
    },
    {
      id: '107-cpkw',
      coord: [79.962, -28.801],
      name: 'W. 107th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-cpkw'},
        {dir: 'south', id: '106-cpkw'},
        {dir: 'east', id: '107-7'},
        {dir: 'west', id: '107-manh'},
      ]
    },
    {
      id: '106-cpkw',
      coord: [79.631, -28.763],
      name: 'W. 106th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-cpkw'},
        {dir: 'south', id: '105-cpkw'},
        {dir: 'east', id: '106-7'},
        {dir: 'west', id: '106-manh'},
      ]
    },
    {
      id: '105-cpkw',
      coord: [79.297, -28.754],
      name: 'W. 105th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-cpkw'},
        {dir: 'south', id: '104-cpkw'},
        {dir: 'east', id: '105-7'},
        {dir: 'west', id: '105-manh'},
      ]
    },
    {
      id: '104-cpkw',
      coord: [78.921, -28.740],
      name: 'W. 104th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-cpkw'},
        {dir: 'south', id: '103-cpkw'},
        {dir: 'east', id: '104-7'},
        {dir: 'west', id: '104-manh'},
      ]
    },
    {
      id: '103-cpkw',
      coord: [78.524, -28.692],
      name: 'W. 103rd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-cpkw'},
        {dir: 'south', id: '102-cpkw'},
        {dir: 'east', id: '103-7'},
        {dir: 'west', id: '103-manh'},
      ]
    },
    {
      id: '102-cpkw',
      coord: [78.123, -28.689],
      name: 'W. 102nd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-cpkw'},
        {dir: 'south', id: '101-cpkw'},
        {dir: 'east', id: '102-7'},
        {dir: 'west', id: '102-manh'},
      ]
    },
    {
      id: '101-cpkw',
      coord: [77.732, -28.696],
      name: 'W. 101st St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-cpkw'},
        {dir: 'south', id: '100-cpkw'},
        {dir: 'east', id: '101-7'},
        {dir: 'west', id: '101-manh'},
      ]
    },
    {
      id: '100-cpkw',
      coord: [77.307, -28.639],
      name: 'W. 100th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-cpkw'},
        {dir: 'south', id: '97-cpkw'},
        {dir: 'east', id: '100-7'},
        {dir: 'west', id: '100-manh'},
      ]
    },
    {
      id: '97-cpkw',
      coord: [75.996, -28.594],
      name: 'W. 97th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '100-cpkw'},
        {dir: 'south', id: '96-cpkw'},
        {dir: 'east', id: '97-7'},
        {dir: 'west', id: '97-colu'},
      ]
    },
    {
      id: '96-cpkw',
      coord: [75.501, -28.579],
      name: 'W. 96th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '97-cpkw'},
        {dir: 'south', id: '95-cpkw'},
        {dir: 'east', id: '96-7'},
        {dir: 'west', id: '96-colu'},
      ]
    },
    {
      id: '95-cpkw',
      coord: [75.004, -28.539],
      name: 'W. 95th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-cpkw'},
        {dir: 'south', id: '94-cpkw'},
        {dir: 'east', id: '95-7'},
        {dir: 'west', id: '95-colu'},
      ]
    },
    {
      id: '94-cpkw',
      coord: [74.482, -28.529],
      name: 'W. 94th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-cpkw'},
        {dir: 'south', id: '93-cpkw'},
        {dir: 'east', id: '94-7'},
        {dir: 'west', id: '94-colu'},
      ]
    },
    {
      id: '93-cpkw',
      coord: [73.950, -28.557],
      name: 'W. 93rd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-cpkw'},
        {dir: 'south', id: '92-cpkw'},
        {dir: 'east', id: '93-7'},
        {dir: 'west', id: '93-colu'},
      ]
    },
    {
      id: '92-cpkw',
      coord: [73.443, -28.525],
      name: 'W. 92nd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-cpkw'},
        {dir: 'south', id: '91-cpkw'},
        {dir: 'east', id: '92-7'},
        {dir: 'west', id: '92-colu'},
      ]
    },
    {
      id: '91-cpkw',
      coord: [72.892, -28.514],
      name: 'W. 91st St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-cpkw'},
        {dir: 'south', id: '90-cpkw'},
        {dir: 'east', id: '91-7'},
        {dir: 'west', id: '91-colu'},
      ]
    },
    {
      id: '90-cpkw',
      coord: [72.333, -28.493],
      name: 'W. 90th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-cpkw'},
        {dir: 'south', id: '89-cpkw'},
        {dir: 'east', id: '90-7'},
        {dir: 'west', id: '90-colu'},
      ]
    },
    {
      id: '89-cpkw',
      coord: [71.819, -28.438],
      name: 'W. 89th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-cpkw'},
        {dir: 'south', id: '88-cpkw'},
        {dir: 'east', id: '89-7'},
        {dir: 'west', id: '89-colu'},
      ]
    },
    {
      id: '88-cpkw',
      coord: [71.189, -28.431],
      name: 'W. 88th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-cpkw'},
        {dir: 'south', id: '87-cpkw'},
        {dir: 'east', id: '88-7'},
        {dir: 'west', id: '88-colu'},
      ]
    },
    {
      id: '87-cpkw',
      coord: [70.589, -28.430],
      name: 'W. 87th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-cpkw'},
        {dir: 'south', id: '86-cpkw'},
        {dir: 'east', id: '87-7'},
        {dir: 'west', id: '87-colu'},
      ]
    },
    {
      id: '86-cpkw',
      coord: [69.844, -28.404],
      name: 'W. 86th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '87-cpkw'},
        {dir: 'south', id: '85-cpkw'},
        {dir: 'east', id: '86-7'},
        {dir: 'west', id: '86-colu'},
      ]
    },
    {
      id: '85-cpkw',
      coord: [69.210, -28.408],
      name: 'W. 85th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-cpkw'},
        {dir: 'south', id: 'epoe-cpkw'},
        {dir: 'east', id: '85-7'},
        {dir: 'west', id: '85-colu'},
      ]
    },
    {
      id: 'epoe-cpkw',
      coord: [68.452, -28.356],
      name: 'Edgar Allen Poe St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-cpkw'},
        {dir: 'south', id: '83-cpkw'},
        {dir: 'east', id: 'epoe-7'},
        {dir: 'west', id: 'epoe-colu'},
      ]
    },
    {
      id: '83-cpkw',
      coord: [67.803, -28.358],
      name: 'W. 83rd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'epoe-cpkw'},
        {dir: 'south', id: '82-cpkw'},
        {dir: 'east', id: '83-7'},
        {dir: 'west', id: '83-colu'},
      ]
    },
    {
      id: '82-cpkw',
      coord: [67.028, -28.349],
      name: 'W. 82nd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-cpkw'},
        {dir: 'south', id: '81-cpkw'},
        {dir: 'east', id: '82-7'},
        {dir: 'west', id: '82-colu'},
      ]
    },
    {
      id: '81-cpkw',
      coord: [66.248, -28.302],
      name: 'W. 81st St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-cpkw'},
        {dir: 'south', id: '77-cpkw'},
        {dir: 'east', id: '81-7'},
        {dir: 'west', id: '81-colu'},
      ]
    },
    {
      id: '77-cpkw',
      coord: [62.844, -28.270],
      name: 'W. 77th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-cpkw'},
        {dir: 'south', id: '76-cpkw'},
        {dir: 'east', id: '77-7'},
        {dir: 'west', id: '77-colu'},
      ]
    },
    {
      id: '76-cpkw',
      coord: [61.884, -28.210],
      name: 'W. 76th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-cpkw'},
        {dir: 'south', id: '75-cpkw'},
        {dir: 'east', id: '76-7'},
        {dir: 'west', id: '76-colu'},
      ]
    },
    {
      id: '75-cpkw',
      coord: [60.915, -28.210],
      name: 'W. 75th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-cpkw'},
        {dir: 'south', id: '74-cpkw'},
        {dir: 'east', id: '75-7'},
        {dir: 'west', id: '75-colu'},
      ]
    },
    {
      id: '74-cpkw',
      coord: [59.958, -28.197],
      name: 'W. 74th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-cpkw'},
        {dir: 'south', id: '73-cpkw'},
        {dir: 'east', id: '74-7'},
        {dir: 'west', id: '74-colu'},
      ]
    },
    {
      id: '73-cpkw',
      coord: [59.043, -28.148],
      name: 'W. 73rd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-cpkw'},
        {dir: 'south', id: '72-cpkw'},
        {dir: 'east', id: '73-7'},
        {dir: 'west', id: '73-colu'},
      ]
    },
    {
      id: '72-cpkw',
      coord: [57.944, -28.158],
      name: 'W. 72nd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-cpkw'},
        {dir: 'south', id: '71-cpkw'},
        {dir: 'east', id: '72-7'},
        {dir: 'west', id: '72-colu'},
      ]
    },
    {
      id: '71-cpkw',
      coord: [56.878, -28.115],
      name: 'W. 71st St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-cpkw'},
        {dir: 'south', id: '70-cpkw'},
        {dir: 'east', id: '71-7'},
        {dir: 'west', id: '71-colu'},
      ]
    },
    {
      id: '70-cpkw',
      coord: [55.801, -28.109],
      name: 'W. 70th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '71-cpkw'},
        {dir: 'south', id: '69-cpkw'},
        {dir: 'east', id: '70-7'},
        {dir: 'west', id: '70-colu'},
      ]
    },
    {
      id: '69-cpkw',
      coord: [54.760, -28.092],
      name: 'W. 69th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-cpkw'},
        {dir: 'south', id: '68-cpkw'},
        {dir: 'east', id: '69-7'},
        {dir: 'west', id: '69-colu'},
      ]
    },
    {
      id: '68-cpkw',
      coord: [53.638, -28.084],
      name: 'W. 68th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '69-cpkw'},
        {dir: 'south', id: '67-cpkw'},
        {dir: 'east', id: '68-7'},
        {dir: 'west', id: '68-colu'},
      ]
    },
    {
      id: '67-cpkw',
      coord: [52.524, -28.045],
      name: 'W. 67th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '68-cpkw'},
        {dir: 'south', id: '66-cpkw'},
        {dir: 'east', id: '67-7'},
        {dir: 'west', id: '67-colu'},
      ]
    },
    {
      id: '66-cpkw',
      coord: [51.356, -28.030],
      name: 'W. 66th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '67-cpkw'},
        {dir: 'south', id: '65-cpkw'},
        {dir: 'east', id: '66-7'},
        {dir: 'west', id: '66-colu'},
      ]
    },
    {
      id: '65-cpkw',
      coord: [50.055, -28.034],
      name: 'W. 65th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '66-cpkw'},
        {dir: 'south', id: '64-cpkw'},
        {dir: 'east', id: '65-7'},
        {dir: 'west', id: '65-colu'},
      ]
    },
    {
      id: '64-cpkw',
      coord: [48.800, -27.988],
      name: 'W. 64th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '65-cpkw'},
        {dir: 'south', id: '63-cpkw'},
        {dir: 'east', id: '64-7'},
        {dir: 'west', id: '64-broa'},
      ]
    },
    {
      id: '63-cpkw',
      coord: [47.557, -27.981],
      name: 'W. 63rd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-cpkw'},
        {dir: 'south', id: '62-cpkw'},
        {dir: 'east', id: '63-7'},
        {dir: 'west', id: '63-broa'},
      ]
    },
    {
      id: '62-cpkw',
      coord: [46.392, -27.981],
      name: 'W. 62nd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-cpkw'},
        {dir: 'south', id: '61-cpkw'},
        {dir: 'east', id: '62-7'},
        {dir: 'west', id: '62-broa'},
      ]
    },
    {
      id: '61-cpkw',
      coord: [44.963, -27.946],
      name: 'W. 61st St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '62-cpkw'},
        {dir: 'south', id: '60-cpkw'},
        {dir: 'east', id: '61-7'},
        {dir: 'west', id: '61-broa'},
      ]
    },
    {
      id: '60-cpkw',
      coord: [43.524, -27.924],
      name: 'W. 60th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-cpkw'},
        {dir: 'south', id: '59-cpkw'},
        {dir: 'east', id: '60-7'},
        {dir: 'west', id: '60-broa'},
      ]
    },
    {
      id: '59-cpkw',
      coord: [42.031, -27.892],
      name: 'W. 59th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '60-cpkw'},
        {dir: 'south', id: '58-8'},
        {dir: 'east', id: '59-7'},
        {dir: 'west', id: '59-broa'},
      ]
    },
    /****************/
   /* Central Park */
  /****************/
      {
      id: '60-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: `According to the plaque in front of it this is a genuine Egyptian obelisk. It even has its own name -- Cleopatra's Needle.`, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-amer'},
        {dir: 'south', id: '60-amer'},
				{dir: 'east', id: '60-5'},
				{dir: 'west', id: '60-7'},
      ]
    },
    {
      id: '61-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '62-amer'},
        {dir: 'south', id: '60-amer'},
				{dir: 'east', id: '61-5'},
				{dir: 'west', id: '61-7'},
      ]
    },
    {
      id: '62-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-amer'},
        {dir: 'south', id: '61-amer'},
				{dir: 'east', id: '62-5'},
				{dir: 'west', id: '62-7'},
      ]
    },
    {
      id: '63-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: `You've entered the Central Park zoo. All of the cages are empty. The thought of prison suddenly takes over your imagination completely... There's Fifth Avenue just beyond the entrance to the zoo.`, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-amer'},
        {dir: 'south', id: '62-amer'},
				{dir: 'east', id: '63-5'},
				{dir: 'west', id: '63-7'},
      ]
    },
    {
      id: '64-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '65-amer'},
        {dir: 'south', id: '63-amer'},
				{dir: 'east', id: '64-5'},
				{dir: 'west', id: '64-7'},
      ]
    },
    {
      id: '65-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '66-amer'},
        {dir: 'south', id: '64-amer'},
				{dir: 'east', id: '65-5'},
				{dir: 'west', id: '65-7'},
      ]
    },
    {
      id: '66-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '67-amer'},
        {dir: 'south', id: '65-amer'},
				{dir: 'east', id: '66-5'},
				{dir: 'west', id: '66-7'},
      ]
    },
    {
      id: '67-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '68-amer'},
        {dir: 'south', id: '66-amer'},
				{dir: 'east', id: '67-5'},
				{dir: 'west', id: '67-7'},
      ]
    },
    {
      id: '68-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '69-amer'},
        {dir: 'south', id: '67-amer'},
				{dir: 'east', id: '68-5'},
				{dir: 'west', id: '68-7'},
      ]
    },
    {
      id: '69-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-amer'},
        {dir: 'south', id: '68-amer'},
				{dir: 'east', id: '69-5'},
				{dir: 'west', id: '69-7'},
      ]
    },
    {
      id: '70-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '71-amer'},
        {dir: 'south', id: '69-amer'},
				{dir: 'east', id: '70-5'},
				{dir: 'west', id: '70-7'},
      ]
    },
    {
      id: '71-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-amer'},
        {dir: 'south', id: '70-amer'},
				{dir: 'east', id: '71-5'},
				{dir: 'west', id: '71-7'},
      ]
    },
    {
      id: '72-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-amer'},
        {dir: 'south', id: '71-amer'},
				{dir: 'east', id: '72-5'},
				{dir: 'west', id: '72-7'},
      ]
    },
    {
      id: '73-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-amer'},
        {dir: 'south', id: '72-amer'},
				{dir: 'east', id: '73-5'},
				{dir: 'west', id: '73-7'},
      ]
    },
    {
      id: '74-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-amer'},
        {dir: 'south', id: '73-amer'},
				{dir: 'east', id: '74-5'},
				{dir: 'west', id: '74-7'},
      ]
    },
    {
      id: '75-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-amer'},
        {dir: 'south', id: '74-amer'},
				{dir: 'east', id: '75-5'},
				{dir: 'west', id: '75-7'},
      ]
    },
    {
      id: '76-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-amer'},
        {dir: 'south', id: '75-amer'},
				{dir: 'east', id: '76-5'},
				{dir: 'west', id: '76-7'},
      ]
    },
    {
      id: '77-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-amer'},
        {dir: 'south', id: '76-amer'},
				{dir: 'east', id: '77-5'},
				{dir: 'west', id: '77-7'},
      ]
    },
    {
      id: '78-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-amer'},
        {dir: 'south', id: '77-amer'},
				{dir: 'east', id: '78-5'},
				{dir: 'west', id: '78-7'},
      ]
    },
    {
      id: '79-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '80-amer'},
        {dir: 'south', id: '78-amer'},
				{dir: 'east', id: '79-5'},
				{dir: 'west', id: '79-7'},
      ]
    },
    {
      id: '80-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: `You see an empty bandshell with rows of empty green benches facing it attentively.\nMonday 2:00PM\n
            You see an empty bandshell with rows of empty green benches facing it attentively. In the bandshell there are three teenagers practicing break-dancing to the loud blare of a ghetto blaster. Just behind you , scowling at this performance, is a giantic bronze bust of Ludwig von, Roll over, Beethoven!`, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-amer'},
        {dir: 'south', id: '79-amer'},
				{dir: 'east', id: '80-5'},
				{dir: 'west', id: '80-7'},
      ]
    },
    {
      id: '81-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-amer'},
        {dir: 'south', id: '80-amer'},
				{dir: 'east', id: '81-5'},
				{dir: 'west', id: '81-7'},
      ]
    },
    {
      id: '82-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-amer'},
        {dir: 'south', id: '81-amer'},
				{dir: 'east', id: '82-5'},
				{dir: 'west', id: '82-7'},
      ]
    },
    {
      id: '83-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: 'epoe-amer'},
        {dir: 'south', id: '82-amer'},
        {dir: 'east', id: '83-5'},
				{dir: 'west', id: '83-7'},
      ]
    },
    {
      id: 'epoe-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: `A steady procession of joggers are jogging around the cyclone-fenced waters of the Croton Reservoir. Adidas, Puma, Spalding, Nike -- all the brand names flash by. You feel your own muscles hungering for the same exercise.`, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-amer'},
        {dir: 'south', id: '83-amer'},
        {dir: 'east', id: '84-5'},
        {dir: 'west', id: 'epoe-7'}
      ]
    },
    {
      id: '85-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-amer'},
        {dir: 'south', id: 'epoe-amer'},
        {dir: 'east', id: '85-5'},
        {dir: 'west', id: '85-7'},
      ]
    },
    {
      id: '86-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '87-amer'},
        {dir: 'south', id: '85-amer'},
        {dir: 'east', id: '86-5'},
        {dir: 'west', id: '86-7'}
      ]
    },
    {
      id: '87-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-amer'},
        {dir: 'south', id: '86-amer'},
				{dir: 'east', id: '87-5'},
				{dir: 'west', id: '87-7'},
      ]
    },
    {
      id: '88-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-amer'},
        {dir: 'south', id: '87-amer'},
				{dir: 'east', id: '88-5'},
				{dir: 'west', id: '88-7'},
      ]
    },
    {
      id: '89-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-amer'},
        {dir: 'south', id: '88-amer'},
				{dir: 'east', id: '89-5'},
				{dir: 'west', id: '89-7'},
      ]
    },
    {
      id: '90-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-amer'},
        {dir: 'south', id: '899-amer'},
				{dir: 'east', id: '90-5'},
				{dir: 'west', id: '90-7'},
      ]
    },
    {
      id: '91-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-amer'},
        {dir: 'south', id: '90-amer'},
				{dir: 'east', id: '91-5'},
				{dir: 'west', id: '91-7'},
      ]
    },
    {
      id: '92-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-amer'},
        {dir: 'south', id: '91-amer'},
				{dir: 'east', id: '92-5'},
				{dir: 'west', id: '92-7'},
      ]
    },
    {
      id: '93-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-amer'},
        {dir: 'south', id: '92-amer'},
				{dir: 'east', id: '93-5'},
				{dir: 'west', id: '93-7'},
      ]
    },
    {
      id: '94-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-amer'},
        {dir: 'south', id: '93-amer'},
				{dir: 'east', id: '94-5'},
				{dir: 'west', id: '94-7'},
      ]
    },
    {
      id: '95-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-amer'},
        {dir: 'south', id: '94-amer'},
				{dir: 'east', id: '95-5'},
				{dir: 'west', id: '95-7'},
      ]
    },
    {
      id: '96-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '97-amer'},
        {dir: 'south', id: '95-amer'},
				{dir: 'east', id: '96-5'},
				{dir: 'west', id: '96-7'},
      ]
    },
    {
      id: '97-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-amer'},
        {dir: 'south', id: '96-amer'},
				{dir: 'east', id: '97-5'},
				{dir: 'west', id: '97-7'},
      ]
    },
    {
      id: '98-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '99-amer'},
        {dir: 'south', id: '97-amer'},
				{dir: 'east', id: '98-5'},
				{dir: 'west', id: '98-7'},
      ]
    },
    {
      id: '99-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '100-amer'},
        {dir: 'south', id: '98-amer'},
				{dir: 'east', id: '98-5'},
				{dir: 'west', id: '99-7'},
      ]
    },
    {
      id: '100-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-amer'},
        {dir: 'south', id: '99-amer'},
				{dir: 'east', id: '100-5'},
				{dir: 'west', id: '100-7'},
      ]
    },
    {
      id: '101-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-amer'},
        {dir: 'south', id: '100-amer'},
				{dir: 'east', id: '101-5'},
				{dir: 'west', id: '101-7'},
      ]
    },
    {
      id: '102-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-amer'},
        {dir: 'south', id: '101-amer'},
				{dir: 'east', id: '102-5'},
				{dir: 'west', id: '102-7'},
      ]
    },
    {
      id: '103-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-amer'},
        {dir: 'south', id: '102-amer'},
				{dir: 'east', id: '103-5'},
				{dir: 'west', id: '103-7'},
      ]
    },
    {
      id: '104-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-amer'},
        {dir: 'south', id: '103-amer'},
				{dir: 'east', id: '104-5'},
				{dir: 'west', id: '104-7'},
      ]
    },
    {
      id: '105-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-amer'},
        {dir: 'south', id: '104-amer'},
				{dir: 'east', id: '105-5'},
				{dir: 'west', id: '105-7'},
      ]
    },
    {
      id: '106-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-amer'},
        {dir: 'south', id: '105-amer'},
				{dir: 'east', id: '106-5'},
				{dir: 'west', id: '106-7'},
      ]
    },
    {
      id: '107-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-amer'},
        {dir: 'south', id: '106-amer'},
				{dir: 'east', id: '107-5'},
				{dir: 'west', id: '107-7'},
      ]
    },
    {
      id: '108-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-amer'},
        {dir: 'south', id: '107-amer'},
        {dir: 'east', id: '108-5'},
        {dir: 'west', id: '108-7'}
      ]
    },
    {
      id: '109-amer',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can go no further in the park.`},
        {dir: 'south', id: '108-amer'},
        {dir: 'east', id: '109-5'},
        {dir: 'west', id: '109-7'}
      ]
    },
        //7th Avenue
    {
      id: '60-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-7'},
        {dir: 'south', id: '59-7'},
        {dir: 'east', id: '60-amer'},
        {dir: 'west', id: '60-cpkw'}
      ]
    },
    {
      id: '61-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '62-7'},
        {dir: 'south', id: '60-7'},
        {dir: 'east', id: '61-amer'},
        {dir: 'west', id: '61-cpkw'}
      ]
    },
    {
      id: '62-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-7'},
        {dir: 'south', id: '61-7'},
        {dir: 'east', id: '62-amer'},
        {dir: 'west', id: '62-cpkw'},
      ]
    },
    {
      id: '63-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-7'},
        {dir: 'south', id: '62-7'},
        {dir: 'east', id: '63-amer'},
        {dir: 'west', id: '63-cpkw'},
      ]
    },
    {
      id: '64-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '65-7'},
        {dir: 'south', id: '63-7'},
        {dir: 'east', id: '64-amer'},
        {dir: 'west', id: '64-cpkw'},
      ]
    },
    {
      id: '65-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '66-7'},
        {dir: 'south', id: '64-7'},
        {dir: 'east', id: '65-amer'},
        {dir: 'west', id: '65-cpkw'},
      ]
    },
    {
      id: '66-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '67-7'},
        {dir: 'south', id: '65-7'},
        {dir: 'east', id: '66-amer'},
        {dir: 'west', id: '66-cpkw'},
      ]
    },
    {
      id: '67-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '68-7'},
        {dir: 'south', id: '66-7'},
        {dir: 'east', id: '67-amer'},
        {dir: 'west', id: '67-cpkw'},
      ]
    },
    {
      id: '68-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '69-7'},
        {dir: 'south', id: '67-7'},
        {dir: 'east', id: '68-amer'},
        {dir: 'west', id: '68-cpkw'},
      ]
    },
    {
      id: '69-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-7'},
        {dir: 'south', id: '68-7'},
        {dir: 'east', id: '69-amer'},
        {dir: 'west', id: '69-cpkw'},
      ]
    },
    {
      id: '70-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: `You come upon an avenue of weathered bronze statues of famous long-ago statesmen, generals, and public benefactors. All have become victims of history's king-size amnesia. Or maybe American History was never your subject.`, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '71-7'},
        {dir: 'south', id: '69-7'},
        {dir: 'east', id: '70-amer'},
        {dir: 'west', id: '70-cpkw'},
      ]
    },
    {
      id: '71-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: `"Strawberry Fields forever..."`, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-7'},
        {dir: 'south', id: '70-7'},
        {dir: 'east', id: '71-amer'},
        {dir: 'west', id: '71-cpkw'},
      ]
    },
    {
      id: '72-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-7'},
        {dir: 'south', id: '71-7'},
        {dir: 'east', id: '72-amer'},
        {dir: 'west', id: '72-cpkw'},
      ]
    },
    {
      id: '73-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-7'},
        {dir: 'south', id: '72-7'},
        {dir: 'east', id: '73-amer'},
        {dir: 'west', id: '73-cpkw'},
      ]
    },
    {
      id: '74-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-7'},
        {dir: 'south', id: '73-7'},
        {dir: 'east', id: '74-amer'},
        {dir: 'west', id: '74-cpkw'},
      ]
    },
    {
      id: '75-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-7'},
        {dir: 'south', id: '74-7'},
        {dir: 'east', id: '75-amer'},
        {dir: 'west', id: '75-cpkw'},
      ]
    },
    {
      id: '76-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-7'},
        {dir: 'south', id: '75-7'},
        {dir: 'east', id: '76-amer'},
        {dir: 'west', id: '76-cpkw'},
      ]
    },
    {
      id: '77-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-7'},
        {dir: 'south', id: '76-7'},
        {dir: 'east', id: '77-amer'},
        {dir: 'west', id: '77-cpkw'},
      ]
    },
    {
      id: '78-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '80-7'},
        {dir: 'south', id: '77-7'},
        {dir: 'east', id: '78-amer'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '79-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '80-7'},
        {dir: 'south', id: '78-7'},
        {dir: 'east', id: '79-amer'},
        {dir: 'west', block: `You can't go that way.`},//blocked
      ]
    },
    {
      id: '80-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-7'},
        {dir: 'south', id: '79-7'},
        {dir: 'east', id: '80-amer'},
        {dir: 'west', block: `You can't go that way.`}//blocked
      ]
    },
    {
      id: '81-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-7'},
        {dir: 'south', id: '80-7'},
        {dir: 'east', id: '81-amer'},
        {dir: 'west', id: '81-cpkw'},
      ]
    },
    {
      id: '82-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-7'},
        {dir: 'south', id: '81-7'},
        {dir: 'east', id: '82-amer'},
        {dir: 'west', id: '82-cpkw'},
      ]
    },
    {
      id: '83-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: 'epoe-7'},
        {dir: 'south', id: '82-7'},
        {dir: 'east', id: '83-amer'},
        {dir: 'west', id: '83-cpkw'},
      ]
    },
    {
      id: 'epoe-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: `A steady procession of joggers are jogging around the cyclone-fenced waters of the Croton Reservoir. Adidas, Puma, Spalding, Nike -- all the brand names flash by. You feel your own muscles hungering for the same exercise.`, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-7'},
        {dir: 'south', id: '83-7'},
        {dir: 'east', id: 'epoe-amer'},
        {dir: 'west', id: 'epoe-cpkw'},
      ]
    },
    {
      id: '85-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-7'},
        {dir: 'south', id: 'epoe-7'},
        {dir: 'east', id: '85-amer'},
        {dir: 'west', id: '85-cpkw'},
      ]
    },
    {
      id: '86-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '87-7'},
        {dir: 'south', id: '85-7'},
        {dir: 'east', id: '86-amer'},
        {dir: 'west', id: '86-cpkw'},
      ]
    },
    {
      id: '87-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-7'},
        {dir: 'south', id: '86-7'},
        {dir: 'east', id: '87-amer'},
        {dir: 'west', id: '87-cpkw'},
      ]
    },
    {
      id: '88-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-7'},
        {dir: 'south', id: '87-7'},
        {dir: 'east', id: '88-amer'},
        {dir: 'west', id: '88-cpkw'},
      ]
    },
    {
      id: '89-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-7'},
        {dir: 'east', id: '89-amer'},
        {dir: 'south', id: '89-7'}
      ]
    },
    {
      id: '90-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-7'},
        {dir: 'south', id: '89-7'},
        {dir: 'east', id: '90-amer'},
        {dir: 'west', id: '90-cpkw'},
      ]
    },
    {
      id: '91-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-7'},
        {dir: 'south', id: '90-7'},
        {dir: 'east', id: '91-amer'},
        {dir: 'west', id: '91-cpkw'},
      ]
    },
    {
      id: '92-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-7'},
        {dir: 'south', id: '91-7'},
        {dir: 'east', id: '92-amer'},
        {dir: 'west', id: '92-cpkw'},
      ]
    },
    {
      id: '93-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-7'},
        {dir: 'south', id: '92-7'},
        {dir: 'east', id: '93-amer'},
        {dir: 'west', id: '93-cpkw'},
      ]
    },
    {
      id: '94-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-7'},
        {dir: 'south', id: '93-7'},
        {dir: 'east', id: '94-amer'},
        {dir: 'west', id: '94-cpkw'},
      ]
    },
    {
      id: '95-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-7'},
        {dir: 'south', id: '94-7'},
        {dir: 'east', id: '95-amer'},
        {dir: 'west', id: '95-cpkw'},
      ]
    },
    {
      id: '96-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '97-7'},
        {dir: 'south', id: '95-7'},
        {dir: 'east', id: '96-amer'},
        {dir: 'west', id: '96-cpkw'},
      ]
    },
    {
      id: '97-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-7'},
        {dir: 'south', id: '96-7'},
        {dir: 'east', id: '97-amer'},
        {dir: 'west', id: '97-cpkw'},
      ]
    },
    {
      id: '98-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '99-7'},
        {dir: 'south', id: '97-7'},
        {dir: 'east', id: '98-amer'},
        {dir: 'west', id: '97-cpkw'},
      ]
    },
    {
      id: '99-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '100-7'},
        {dir: 'south', id: '98-7'},
        {dir: 'east', id: '99-amer'},
        {dir: 'west', id: '100-cpkw'},
      ]
    },
    {
      id: '100-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-7'},
        {dir: 'south', id: '99-7'},
        {dir: 'east', id: '100-amer'},
        {dir: 'west', id: '100-cpkw'},
      ]
    },
    {
      id: '101-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-7'},
        {dir: 'south', id: '100-7'},
        {dir: 'east', id: '101-amer'},
        {dir: 'west', id: '101-cpkw'},
      ]
    },
    {
      id: '102-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-7'},
        {dir: 'south', id: '101-7'},
        {dir: 'east', id: '102-amer'},
        {dir: 'west', id: '102-cpkw'},
      ]
    },
    {
      id: '103-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-7'},
        {dir: 'south', id: '102-7'},
        {dir: 'east', id: '103-amer'},
        {dir: 'west', id: '103-cpkw'},
      ]
    },
    {
      id: '104-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-7'},
        {dir: 'south', id: '103-7'},
        {dir: 'east', id: '104-amer'},
        {dir: 'west', id: '104-cpkw'},
      ]
    },
    {
      id: '105-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-7'},
        {dir: 'south', id: '104-7'},
        {dir: 'east', id: '105-amer'},
        {dir: 'west', id: '105-cpkw'},
      ]
    },
    {
      id: '106-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-7'},
        {dir: 'south', id: '105-7'},
        {dir: 'east', id: '106-amer'},
        {dir: 'west', id: '106-cpkw'},
      ]
    },
    {
      id: '107-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-7'},
        {dir: 'south', id: '106-7'},
        {dir: 'east', id: '107-amer'},
        {dir: 'west', id: '107-cpkw'},
      ]
    },
    {
      id: '108-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-7'},
        {dir: 'south', id: '107-7'},
        {dir: 'east', id: '108-amer'},
        {dir: 'west', id: '108-cpkw'}
      ]
    },
    {
      id: '109-7',
      coord: [66.303, -18.099],
      name: 'Somewhere in Central Park',
      desc: ``, 
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can go no further in the park.`},
        {dir: 'south', id: '108-7'},
        {dir: 'east', id: '109-amer'},
        {dir: 'west', id: '109-cpkw'}
      ]
    },
     /************/
    /* Eastside */ 
   /************/
    {
      id: '59-5',
      coord: [],
      name: 'Central Park S. and 5th Ave',
      desc: `There is a subway entrance at this corner.`,
      hSubway: true,
      isStreet : true,
      exits: [
        {dir: 'north', id: '60-5'},
        {dir: 'south', id: '58-5'},
        {dir: 'east', id: '59-madi'},
        {dir: 'west', id: '59-amer'},
      ],    
    },
    {
      id: '60-5',
      coord: [],
      name: 'E. 60th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-5'},
        {dir: 'south', id: '59-5'},
        {dir: 'east', id: '60-madi'},
        {dir: 'west', id: '60-amer'},
      ],      
    },
    {
      id: '61-5',
      coord: [],
      name: 'E. 61st St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '62-5'},
        {dir: 'south', id: '60-5'},
        {dir: 'east', id: '61-madi'},
        {dir: 'west', id: '61-amer'},
      ],          
    },
    {
      id: '62-5',
      coord: [],
      name: 'E. 62nd St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-5'},
        {dir: 'south', id: '61-5'},
        {dir: 'east', id: '62-madi'},
        {dir: 'west', id: '63-amer'},
      ],          
    },
    {
      id: '63-5',
      coord: [],
      name: 'E. 63rd St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-5'},
        {dir: 'south', id: '62-5'},
        {dir: 'east', id: '63-madi'},
        {dir: 'west', id: '63-amer'},
      ],          
    },
    {
      id: '64-5',
      coord: [],
      name: 'E. 64th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '65-5'},
        {dir: 'south', id: '63-5'},
        {dir: 'east', id: '64-madi'},
        {dir: 'west', id: '64-amer'},
      ],          
    },
    {
      id: '65-5',
      coord: [],
      name: 'E. 65th St. and 5th Ave.',
      desc: `Here you see the Temple Emanuel. It resembles an elaborately carved chunk of fog, though closer examination shows it to be of grey limestone.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '66-5'},
        {dir: 'east', id: '65-madi'},
        {dir: 'west', id: '65-amer'},
        {dir: ['inside', 'temple'], id: '64-5', block: `There's no point in going there.`},
      ],          
    },
    {
      id: '66-5',
      coord: [],
      name: 'E. 66th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '67-5'},
        {dir: 'south', id: '65-5'},
        {dir: 'east', id: '66-madi'},
        {dir: 'west', id: '66-amer'},
      ],          
    },
    {
      id: '67-5',
      coord: [],
      name: 'E. 67th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '68-5'},
        {dir: 'south', id: '66-5'},
        {dir: 'east', id: '67-madi'},
        {dir: 'west', id: '67-amer'},
      ],          
    },
    {
      id: '68-5',
      coord: [],
      name: 'E. 68th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '69-5'},
        {dir: 'south', id: '67-5'},
        {dir: 'east', id: '68-madi'},
        {dir: 'west', id: '68-amer'},
      ],  
    },
    {
      id: '69-5',
      coord: [],
      name: 'E. 69th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-5'},
        {dir: 'south', id: '68-5'},
        {dir: 'east', id: '69-madi'},
        {dir: 'west', id: '69-amer'},
      ],
    }, 
    {
      id: '70-5',
      coord: [],
      name: 'E. 70th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '71-5'},
        {dir: 'south', id: '69-5'},
        {dir: 'east', id: '70-madi'},
        {dir: 'west', id: '70-amer'},
      ],
    }, 
    {
      id: '71-5',
      coord: [],
      name: 'E. 71st St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-5'},
        {dir: 'south', id: '70-5'},
        {dir: 'east', id: '71-madi'},
        {dir: 'west', id: '71-amer'},
      ],
    }, 
    {
      id: '72-5',
      coord: [],
      name: 'E. 72nd St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-5'},
        {dir: 'south', id: '71-5'},
        {dir: 'east', id: '72-madi'},
        {dir: 'west', id: '72-amer'},
      ],
    }, 
    {
      id: '73-5',
      coord: [],
      name: 'E. 73rd St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-5'},
        {dir: 'south', id: '72-5'},
        {dir: 'east', id: '73-madi'},
        {dir: 'west', id: '73-amer'},
      ],
    }, 
    {
      id: '74-5',
      coord: [],
      name: 'E. 74th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-5'},
        {dir: 'south', id: '73-5'},
        {dir: 'east', id: '74-madi'},
        {dir: 'west', id: '74-amer'},
      ],
    }, 
    {
      id: '75-5',
      coord: [],
      name: 'E. 75th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-5'},
        {dir: 'south', id: '74-5'},
        {dir: 'east', id: '75-madi'},
        {dir: 'west', id: '75-amer'},
      ],
    }, 
    {
      id: '76-5',
      coord: [],
      name: 'E. 76th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-5'},
        {dir: 'south', id: '75-5'},
        {dir: 'east', id: '76-madi'},
        {dir: 'west', id: '76-amer'},
      ],
    }, 
    {
      id: '77-5',
      coord: [],
      name: 'E. 77th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-5'},
        {dir: 'south', id: '76-5'},
        {dir: 'east', id: '77-madi'},
        {dir: 'west', id: '77-amer'},
      ],
    }, 
    {
      id: '78-5',
      coord: [],
      name: 'E. 78th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-5'},
        {dir: 'south', id: '77-5'},
        {dir: 'east', id: '78-madi'},
        {dir: 'west', id: '78-amer'},
      ],
    }, 
    {
      id: '79-5',
      coord: [],
      name: 'E. 79th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '80-5'},
        {dir: 'south', id: '78-5'},
        {dir: 'east', id: '79-madi'},
        {dir: 'west', id: '79-amer'},
      ],
    }, 
    {
      id: '80-5',
      coord: [],
      name: 'E. 80th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-5'},
        {dir: 'south', id: '79-5'},
        {dir: 'east', id: '80-madi'},
        {dir: 'west', id: '80-amer'},
      ],
    }, 
    {
      id: '81-5',
      coord: [],
      name: 'E. 81st St. and 5th Ave.',
      desc: `There's the Metropolitan Museum, three long city blocks of Greek-styled marble sheathing a few thousand years of pots, paintings, armor, and assorted gew-gaws.`,
      isStreet: true,
      onEnter : () =>{
        reenableInput();
      },
      exits: [
        {dir: 'north', id: '82-5'},
        {dir: 'south', id: '80-5'},
        {dir: 'east', id: '81-madi'},
        {dir: 'west', id: '81-amer'},
        {dir: ['inside', 'museum'], id: 'met-mus', block: 'The museum is closed on Sundays'}, // ONLY OPEN DURING MUSEUM HOURS, AND DAYS THAT ARE NOT SUNDAY
      ],
    }, 
    {
      id: 'met-mus', // Inside the Metropolitan Museum, brief interaction
      name: 'Museum',
      desc: `You enter the museum, and spend a pleasant hour enjoying the exhibits on display.\n When you've seen enough of the display, you leAve.`,
      onEnter: () => {
        pressEnter('81-5');
      },
    },
    {
      id: '82-5',
      coord: [],
      name: 'E. 82nd St. and 5th Ave.',
      isStreet: true,
      desc: ``,
      exits: [
        {dir: 'north', id: '83-5'},
        {dir: 'south', id: '81-5'},
        {dir: 'east', id: '82-madi'},
        {dir: 'west', id: '82-amer'},
      ],
    }, 
    {
      id: '83-5',
      coord: [],
      name: 'E. 83rd St. and 5th Ave.',
      isStreet: true,
      desc: ``,
      exits: [
        {dir: 'north', id: '84-5'},
        {dir: 'south', id: '82-5'},
        {dir: 'east', id: '83-madi'},
        {dir: 'west', id: '83-amer'},
      ],
    }, 
    {
      id: '84-5',
      coord: [],
      name: 'E. 84th St. and 5th Ave.',
      isStreet: true,
      desc: ``,
      exits: [
        {dir: 'north', id: '85-5'},
        {dir: 'south', id: '83-5'},
        {dir: 'east', id: '84-madi'},
        {dir: 'west', id: 'epoe-amer'},
      ],
    }, 
    {
      id: '85-5',
      coord: [],
      name: 'E. 85th St. and 5th Ave.',
      isStreet: true,
      desc: ``,
      exits: [
        {dir: 'north', id: '86-5'},
        {dir: 'south', id: '84-5'},
        {dir: 'east', id: '85-madi'},
        {dir: 'west', id: '85-amer'},
      ],
    }, 
    {
      id: '86-5',
      coord: [],
      name: 'E. 86th St. and 5th Ave',
      isStreet: true,
      desc: ``,
      exits: [
        {dir: 'north', id: '87-5'},
        {dir: 'south', id: '85-5'},
        {dir: 'east', id: '86-madi'},
        {dir: 'west', id: '86-amer'},
      ],
    }, 
    {
      id: '87-5',
      coord: [],
      name: 'E. 87th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-5'},
        {dir: 'south', id: '86-5'},
        {dir: 'east', id: '87-madi'},
        {dir: 'west', id: '87-amer'},
      ],
    }, 
    {
      id: '88-5',
      coord: [],
      name: 'E. 88th St. and 5th Ave.',
      desc: `From a distance, the Guggenheim Museum might be a gigantic of modern sculpture -- perhaps some demented artist's version of a thunderstorm. Even up close, its huge spiral is enough to make you dizzy for a moment.`,
      isStreet: true,
      onEnter : () =>{
        reenableInput();
      }, 
      exits: [
        {dir: 'north', id: '89-5'},
        {dir: 'south', id: '87-5'},
        {dir: 'east', id: '88-madi'},
        {dir: 'west', id: '88-amer'},
        {dir: ['inside', 'museum'], id: 'gug-mus', block: 'The museum is closed on Sundays'},    // ONLY OPEN DURING MUSEUM HOURS, AND DAYS THAT ARE NOT SUNDAY
      ],
    }, 
    {
      id: 'gug-mus',// Inside the Gugenhiem Museum, brief interaction
      name: 'Museum',
      desc: `You enter the museum, and spend a pleasant hour enjoying the exhibits on display.\n When you've seen enough of the display, you leave`,
      onEnter: () => {
        pressEnter('88-5');
      },
    },
    {
      id: '89-5',
      coord: [],
      name: 'E. 89th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-5'},
        {dir: 'south', id: '88-5'},
        {dir: 'east', id: '89-madi'},
        {dir: 'west', id: '89-amer'},
      ],
    }, 
    {
      id: '90-5',
      coord: [],
      name: 'E. 90th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-5'},
        {dir: 'south', id: '89-5'},
        {dir: 'east', id: '90-madi'},
        {dir: 'west', id: '90-amer'},
      ],
    }, 
    {
      id: '91-5',
      coord: [],
      name: 'E. 91st St. and 5th Ave.',
      desc: `Accustomed to the towering, relatively featureless blocks of Manhattan apartment houses, you are startled to see what appears to be a mansion with a generous garden. It's not a private residence, however, but the Cooper-Hewitt Museum.`,
      isStreet: true,
      onEnter : () => {
        reenableInput();
      },
      exits: [
        {dir: 'north', id: '92-5'},
        {dir: 'south', id: '90-5'},
        {dir: 'east', id: '91-madi'},
        {dir: 'west', id: '91-amer'},
        {dir: ['inside', 'museum'], id: 'coo-mus', block: 'The museum is closed on Sundays'}, // ONLY OPEN DURING MUSEUM HOURS, AND DAYS THAT ARE NOT SUNDAY
      ],
    }, 
    {
      id: 'coo-mus',  // Inside the Cooper-Hewitt Museum, brief interaction
      name: 'Museum',
      desc: `You enter the museum, and spend a pleasant hour enjoying the exhibits on display.\n When you've seen enough of the display, you leave`,
      isStreet: true,
      onEnter : () => {
        pressEnter('91-5');
      },
    },
    {
      id: '92-5',
      coord: [],
      name: 'E. 92nd St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-5'},
        {dir: 'south', id: '91-5'},
        {dir: 'east', id: '92-madi'},
        {dir: 'west', id: '92-amer'},
      ],
    }, 
    {
      id: '93-5',
      coord: [],
      name: 'E. 93rd St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-5'},
        {dir: 'south', id: '92-5'},
        {dir: 'east', id: '93-madi'},
        {dir: 'west', id: '93-amer'},
      ],
    }, 
    {
      id: '94-5',
      coord: [],
      name: 'E. 94th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-5'},
        {dir: 'south', id: '93-5'},
        {dir: 'east', id: '94-madi'},
        {dir: 'west', id: '94-amer'},
      ],
    }, 
    {
      id: '95-5',
      coord: [],
      name: 'E. 95th St. and 5th Ave.',
      desc: `There is a luncheonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-5'},
        {dir: 'south', id: '94-5'},
        {dir: 'east', id: '95-madi'},
        {dir: 'west', id: '95-amer'},
        {dir: ['inside', 'luncheonette', 'restaurant'], id: 'lun-95-5'},
      ],
    }, 
// LUNCHEONETTE GOES HERE * DEPENDING ON HOW WE HANDLE IT
    {
      id: '96-5',
      coord: [],
      name: 'E. 96th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '97-5'},
        {dir: 'south', id: '95-5'},
        {dir: 'east', id: '96-madi'},
        {dir: 'west', id: '96-amer'},
      ],
    }, 
    {
      id: '97-5',
      coord: [],
      name: 'E. 97th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-5'},
        {dir: 'south', id: '96-5'},
        {dir: 'east', id: '97-madi'},
        {dir: 'west', id: '97-amer'},
      ],
    }, 
    {
      id: '98-5',
      coord: [],
      name: 'E. 98th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-5'},
        {dir: 'south', id: '97-5'},
        {dir: 'east', id: '98-madi'},
        {dir: 'west', id: '98-amer'},
      ],
    }, 
    {
      id: '101-5',
      coord: [],
      name: 'E. 101st St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-5'},
        {dir: 'south', id: '98-5'},
        {dir: 'east', id: '101-madi'},
        {dir: 'west', id: '101-amer'},
      ],
    }, 
    {
      id: '102-5',
      coord: [],
      name: 'E. 102nd St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-5'},
        {dir: 'south', id: '101-5'},
        {dir: 'east', id: '102-madi'},
        {dir: 'west', id: '102-amer'},
      ],
    }, 
    {
      id: '103-5',
      coord: [],
      name: 'E. 103rd St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-5'},
        {dir: 'south', id: '102-5'},
        {dir: 'east', id: '103-madi'},
        {dir: 'west', id: '103-amer'},
      ],
    }, 
    {
      id: '104-5',
      coord: [],
      name: 'E. 104th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-5'},
        {dir: 'south', id: '103-5'},
        {dir: 'east', id: '104-madi'},
        {dir: 'west', id: '104-amer'},
      ],
    }, 
    {
      id: '105-5',
      coord: [],
      name: 'E. 105th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-5'},
        {dir: 'south', id: '104-5'},
        {dir: 'east', id: '105-madi'},
        {dir: 'west', block: `You can't go that way.`},
      ],
    }, 
    {
      id: '106-5',
      coord: [],
      name: 'E. 106th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-5'},
        {dir: 'south', id: '105-5'},
        {dir: 'east', id: '106-madi'},
        {dir: 'west', id: '106-amer'},
      ],
    }, 
    {
      id: '107-5',
      coord: [],
      name: 'E. 107th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-5'},
        {dir: 'south', id: '106-5'},
        {dir: 'east', id: '107-madi'},
        {dir: 'west', id: '107-amer'},
      ],
    }, 
    {
      id: '108-5',
      coord: [],
      name: 'E. 108th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-5'},
        {dir: 'south', id: '107-5'},
        {dir: 'east', id: '108-madi'},
        {dir: 'west', id: '108-amer'},
      ],
    }, 
    {
      id: '109-5',
      coord: [],
      name: 'E. 109th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-5'},
        {dir: 'south', id: '108-5'},
        {dir: 'east', id: '109-madi'},
        {dir: 'west', id: '109-amer'},
      ],
    }, 
    {
      id: '110-5',
      coord: [],
      name: 'E. 110th St. and 5th Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-5', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-5'}, 
        {dir: 'east', id: '110-madi'},
        {dir: 'west', id: '109-amer'},
      ],
    }, 
// madiDISON AVE STREETS 
    {
      id: '60-madi',
      coord: [],
      name: 'E. 60th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-madi'},
        {dir: 'south', id: '59-madi'},
        {dir: 'east', id: '60-park'},
        {dir: 'west', id: '60-5'},
      ],      
    },
    {
      id: '61-madi',
      coord: [],
      name: 'E. 61st St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '62-madi'},
        {dir: 'south', id: '60-madi'},
        {dir: 'east', id: '61-park'},
        {dir: 'west', id: '61-5'},
      ],          
    },
    {
      id: '62-madi',
      coord: [],
      name: 'E. 62nd St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-madi'},
        {dir: 'south', id: '61-madi'},
        {dir: 'east', id: '62-park'},
        {dir: 'west', id: '62-5'},
      ],          
    },
    {
      id: '63-madi',
      coord: [],
      name: 'E. 63rd St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-madi'},
        {dir: 'south', id: '62-madi'},
        {dir: 'east', id: '63-park'},
        {dir: 'west', id: '63-5'},
      ],          
    },
    {
      id: '64-madi',
      coord: [],
      name: 'E. 64th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '65-madi'},
        {dir: 'south', id: '63-madi'},
        {dir: 'east', id: '64-park'},
        {dir: 'west', id: '64-5'},
      ],          
    },
    {
      id: '65-madi',
      coord: [],
      name: 'E. 65th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '66-madi'},
        {dir: 'south', id: '64-madi'},
        {dir: 'east', id: '65-park'},
        {dir: 'west', id: '65-5'},
      ],          
    },
    {
      id: '66-madi',
      coord: [],
      name: 'E. 66th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '67-madi'},
        {dir: 'south', id: '65-madi'},
        {dir: 'east', id: '66-park'},
        {dir: 'west', id: '66-5'},
      ],          
    },
    {
      id: '67-madi',
      coord: [],
      name: 'E. 67th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '68-madi'},
        {dir: 'south', id: '66-madi'},
        {dir: 'east', id: '67-park'},
        {dir: 'west', id: '67-5'},
      ],          
    },
    {
      id: '68-madi',
      coord: [],
      name: 'E. 68th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '69-madi'},
        {dir: 'south', id: '67-madi'},
        {dir: 'east', id: '68-park'},
        {dir: 'west', id: '68-5'},
      ],  
    },
    {
      id: '69-madi',
      coord: [],
      name: 'E. 69th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-madi'},
        {dir: 'south', id: '68-madi'},
        {dir: 'east', id: '69-park'},
        {dir: 'west', id: '69-5'},
      ],
    }, 
    {
      id: '70-madi',
      coord: [],
      name: 'E. 70th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '71-madi'},
        {dir: 'south', id: '69-madi'},
        {dir: 'east', id: '70-park'},
        {dir: 'west', id: '70-5'},
      ],
    }, 
    {
      id: '71-madi',
      coord: [],
      name: 'E. 71st St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-madi'},
        {dir: 'south', id: '70-madi'},
        {dir: 'east', id: '71-park'},
        {dir: 'west', id: '71-5'},
      ],
    }, 
    {
      id: '72-madi',
      coord: [],
      name: 'E. 72nd St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-madi'},
        {dir: 'south', id: '71-madi'},
        {dir: 'east', id: '72-park'},
        {dir: 'west', id: '72-5'},
      ],
    }, 
    {
      id: '73-madi',
      coord: [],
      name: 'E. 73rd St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-madi'},
        {dir: 'south', id: '72-madi'},
        {dir: 'east', id: '73-park'},
        {dir: 'west', id: '73-5'},
      ],
    }, 
    {
      id: '74-madi', // Museum Spot
      coord: [],
      name: 'E. 74th St. and Madison Ave.',
      desc: `You don't even notice that you've come to the Whitney Museum till you've come to the moat, where the sidewalk looks down to the basement sculpture garden, where a boy and a girl have taken some time off from modern art to make love unseen by anyone but you.`,
      isStreet: true,
      onEnter : () => {
        reenableInput();
      },
      exits: [
        {dir: 'north', id: '75-madi'},
        {dir: 'south', id: '73-madi'},
        {dir: 'east', id: '74-park'},
        {dir: 'west', id: '74-5'},
        {dir: ['inside', 'museum'], id: 'whit-mus', block: `The museum is closed on Sundays.`},  // Add time block.ext removal later
      ],
    }, 
    {
      id: `whit-mus`,   //Whitney Museum
      name: 'Whitney Museum',
      desc: `You enter the museum, and spend a pleasant hour enjoying the exhibits on display. When you've seen enough of the display, you leave.`,
      onEnter: () => {
        pressEnter('74-madi');
      },
    },
    {
      id: '75-madi',
      coord: [],
      name: 'E. 75th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-madi'},
        {dir: 'south', id: '74-madi'},
        {dir: 'east', id: '75-park'},
        {dir: 'west', id: '75-5'},
      ],
    }, 
    {
      id: '76-madi',
      name: 'E. 76th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-madi'},
        {dir: 'south', id: '75-madi'},
        {dir: 'east', id: '76-park'},
        {dir: 'west', id: '76-5'},
      ],
    }, 
    {
      id: '77-madi',
      coord: [],
      name: 'E. 77th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-madi'},
        {dir: 'south', id: '76-madi'},
        {dir: 'east', id: '77-park'},
        {dir: 'west', id: '77-5'},
      ],
    }, 
    {
      id: '78-madi',
      coord: [],
      name: 'E. 78th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-madi'},
        {dir: 'south', id: '77-madi'},
        {dir: 'east', id: '78-park'},
        {dir: 'west', id: '78-5'},
      ],
    }, 
    {
      id: '79-madi',
      coord: [],
      name: 'E. 79th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '80-madi'},
        {dir: 'south', id: '78-madi'},
        {dir: 'east', id: '79-park'},
        {dir: 'west', id: '79-5'},
      ],
    }, 
    {
      id: '80-madi',
      coord: [],
      name: 'E. 80th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-madi'},
        {dir: 'south', id: '79-madi'},
        {dir: 'east', id: '80-park'},
        {dir: 'west', id: '80-5'},
      ],
    }, 
    {
      id: '81-madi',
      coord: [],
      name: 'E. 81st St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-madi'},
        {dir: 'south', id: '80-madi'},
        {dir: 'east', id: '81-park'},
        {dir: 'west', id: '81-5'},
      ],
    }, 
    {
      id: '82-madi',
      coord: [],
      name: 'E. 82nd St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-madi'},
        {dir: 'south', id: '81-madi'},
        {dir: 'east', id: '82-park'},
        {dir: 'west', id: '82-5'},
      ],
    }, 
    {
      id: '83-madi',
      coord: [],
      name: 'E. 83rd St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '84-madi'},
        {dir: 'south', id: '82-madi'},
        {dir: 'east', id: '83-park'},
        {dir: 'west', id: '83-5'},
      ],
    }, 
    {
      id: '84-madi',
      coord: [],
      name: 'E. 84th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-madi'},
        {dir: 'south', id: '83-madi'},
        {dir: 'east', id: '84-park'},
        {dir: 'west', id: '84-5'},
      ],
    }, 
    {
      id: '85-madi',
      coord: [],
      name: 'E. 85th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-madi'},
        {dir: 'south', id: '84-madi'},
        {dir: 'east', id: '85-park'},
        {dir: 'west', id: '85-5'},
      ],
    }, 
    {
      id: '86-madi',
      coord: [],
      name: 'E. 86th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '87-madi'},
        {dir: 'south', id: '85-madi'},
        {dir: 'east', id: '86-park'},
        {dir: 'west', id: '86-5'},
      ],
    }, 
    {
      id: '87-madi',
      coord: [],
      name: 'E. 87th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-madi'},
        {dir: 'south', id: '86-madi'},
        {dir: 'east', id: '87-park'},
        {dir: 'west', id: '87-5'},
      ],
    }, 
    {
      id: '88-madi',
      coord: [],
      name: 'E. 88th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-madi'},
        {dir: 'south', id: '87-madi'},
        {dir: 'east', id: '88-park'},
        {dir: 'west', id: '88-5'},
      ],
    }, 
    {
      id: '89-madi',
      coord: [],
      name: 'E. 89th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-madi'},
        {dir: 'south', id: '88-madi'},
        {dir: 'east', id: '89-park'},
        {dir: 'west', id: '89-5'},
      ],
    }, 
    {
      id: '90-madi',
      coord: [],
      name: 'E. 90th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-madi'},
        {dir: 'south', id: '89-madi'},
        {dir: 'east', id: '90-park'},
        {dir: 'west', id: '90-5'},
      ],
    }, 
    {
      id: '91-madi',
      coord: [],
      name: 'E. 91st St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-madi'},
        {dir: 'south', id: '90-madi'},
        {dir: 'east', id: '91-park'},
        {dir: 'west', id: '91-5'},
      ],
    }, 
    {
      id: '92-madi',
      coord: [],
      name: 'E. 92nd St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-madi'},
        {dir: 'south', id: '91-madi'},
        {dir: 'east', id: '92-park'},
        {dir: 'west', id: '92-5'},
      ],
    }, 
    {
      id: '93-madi',
      coord: [],
      name: 'E. 93rd St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-madi'},
        {dir: 'south', id: '92-madi'},
        {dir: 'east', id: '93-park'},
        {dir: 'west', id: '93-5'},
      ],
    }, 
    {
      id: '94-madi',
      coord: [],
      name: 'E. 94th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-madi'},
        {dir: 'south', id: '93-madi'},
        {dir: 'east', id: '94-park'},
        {dir: 'west', id: '94-5'},
      ],
    }, 
    {
      id: '95-madi',
      coord: [],
      name: 'E. 95th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-madi'},
        {dir: 'south', id: '94-madi'},
        {dir: 'east', id: '95-park'},
        {dir: 'west', id: '95-5'},
      ],
    }, 
    {
      id: '96-madi',
      coord: [],
      name: 'E. 96th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '97-madi'},
        {dir: 'south', id: '95-madi'},
        {dir: 'east', id: '96-park'},
        {dir: 'west', id: '96-5'},
      ],
    }, 
    {
      id: '97-madi',
      coord: [],
      name: 'E. 97th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-madi'},
        {dir: 'south', id: '96-madi'},
        {dir: 'east', id: '97-park'},
        {dir: 'west', id: '97-5'},
      ],
    }, 
    {
      id: '98-madi',
      coord: [],
      name: 'E. 98th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '99-madi'},
        {dir: 'south', id: '97-madi'},
        {dir: 'east', id: '98-park'},
        {dir: 'west', id: '98-5'},
      ],
    }, 
    {
      id: '99-madi',
      coord: [],
      name: 'E. 99th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-madi'},
        {dir: 'south', id: '98-madi'},
        {dir: 'east', id: '99-park'},
        {dir: 'west', id: '98-5'},
      ],
    }, 
    {
      id: '101-madi',
      coord: [],
      name: 'E. 101st St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-madi'},
        {dir: 'south', id: '98-madi'},
        {dir: 'east', id: '101-park'},
        {dir: 'west', id: '101-5'},
      ],
    }, 
    {
      id: '102-madi',
      coord: [],
      name: 'E. 102nd St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-madi'},
        {dir: 'south', id: '101-madi'},
        {dir: 'east', id: '102-park'},
        {dir: 'west', id: '102-5'},
      ],
    }, 
    {
      id: '103-madi',
      coord: [],
      name: 'E. 103rd St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-madi'},
        {dir: 'south', id: '102-madi'},
        {dir: 'east', id: '103-park'},
        {dir: 'west', id: '103-5'},
      ],
    }, 
    {
      id: '104-madi',
      coord: [],
      name: 'E. 104th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-madi'},
        {dir: 'south', id: '103-madi'},
        {dir: 'east', id: '104-park'},
        {dir: 'west', id: '104-5'},
      ],
    }, 
    {
      id: '105-madi',
      coord: [],
      name: 'E. 105th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-madi'},
        {dir: 'south', id: '104-madi'},
        {dir: 'east', id: '105-park'},
        {dir: 'west', id: '105-5'},
      ],
    }, 
    {
      id: '106-madi',
      coord: [],
      name: 'E. 106th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-madi'},
        {dir: 'south', id: '105-madi'},
        {dir: 'east', id: '106-park'},
        {dir: 'west', id: '106-5'},
      ],
    }, 
    {
      id: '107-madi',
      coord: [],
      name: 'E. 107th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-madi'},
        {dir: 'south', id: '106-madi'},
        {dir: 'east', id: '107-park'},
        {dir: 'west', id: '107-5'},
      ],
    }, 
    {
      id: '108-madi',
      coord: [],
      name: 'E. 108th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-madi'},
        {dir: 'south', id: '107-madi'},
        {dir: 'east', id: '108-park'},
        {dir: 'west', id: '108-5'},
      ],
    }, 
    {
      id: '109-madi',
      coord: [],
      name: 'E. 109th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-madi'},
        {dir: 'south', id: '108-madi'},
        {dir: 'east', id: '109-park'},
        {dir: 'west', id: '109-5'},
      ],
    }, 
    {
      id: '110-madi',
      coord: [],
      name: 'E. 110th St. and Madison Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-madi', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-madi'},
        {dir: 'east', id: '110-park'},
        {dir: 'west', id: '110-5'},
      ],
    }, 
// PARK AVE STREETS
    {
      id: '59-park',
      coord: [],
      name: 'E. 59th St. and Park Ave.',
      desc: `There is a restaurant called Nedicks here.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '60-park'},
        {dir: 'south', id: '58-park'},
        {dir: 'east', id: '59-lexi'},
        {dir: 'west', id: '59-madi'},
        {dir: ['inside', 'nedicks', 'restaraunt'], id: '59-nedick'},
      ],
    }, 
    {
      id: '60-park',
      coord: [],
      name: 'E. 60th St. and Park Ave.',
      desc: `Bloomingdales!`,         // Bloomingdales!
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-park'},
        {dir: 'south', id: '59-park'},
        {dir: 'east', id: '60-lexi'},
        {dir: 'west', id: '60-madi'},
        {dir: ['inside', 'bloomingdales'], id: '60-park', block: `There's no point in going there`},
      ],                  
    },
    {
      id: '61-park',
      coord: [],
      name: 'E. 61st St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '62-park'},
        {dir: 'south', id: '60-park'},
        {dir: 'east', id: '61-lexi'},
        {dir: 'west', id: '61-madi'},
      ],                      
    },
    {
      id: '62-park',
      coord: [],
      name: 'E. 62nd St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-park'},
        {dir: 'south', id: '61-park'},
        {dir: 'east', id: '62-lexi'},
        {dir: 'west', id: '62-madi'},
      ],                      
    },
    {
      id: '63-park',
      coord: [],
      name: 'E. 63rd St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-park'},
        {dir: 'south', id: '62-park'},
        {dir: 'east', id: '63-lexi'},
        {dir: 'west', id: '63-madi'},
      ],                      
    },
    {
      id: '64-park',
      coord: [],
      name: 'E. 64th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '65-park'},
        {dir: 'south', id: '63-park'},
        {dir: 'east', id: '64-lexi'},
        {dir: 'west', id: '64-madi'},
      ],                      
    },
    {
      id: '65-park',
      coord: [],
      name: 'E. 65th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '66-park'},
        {dir: 'south', id: '64-park'},
        {dir: 'east', id: '65-lexi'},
        {dir: 'west', id: '65-madi'},
      ],                      
    },
    {
      id: '66-park',
      coord: [],
      name: 'E. 66th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '67-park'},
        {dir: 'south', id: '65-park'},
        {dir: 'east', id: '66-lexi'},
        {dir: 'west', id: '66-madi'},
      ],                      
    },
    {
      id: '67-park',
      coord: [],
      name: 'E. 67th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '68-park'},
        {dir: 'south', id: '66-park'},
        {dir: 'east', id: '67-lexi'},
        {dir: 'west', id: '67-madi'},
      ],                      
    },
    {
      id: '68-park',
      coord: [],
      name: 'E. 68th St. and Park Ave.',
      desc: `The Union Club's grey and white exterior suggests its age.`,   // Union Club
      isStreet: true,
      exits: [
        {dir: 'north', id: '69-park'},
        {dir: 'south', id: '67-park'},
        {dir: 'east', id: '68-lexi'},
        {dir: 'west', id: '68-madi'},
        {dir: ['inside', 'union'], id: '68-park', block: `There's no point in going there`}, // two word arguement situation, if the player types go to union club
      ],
    },
    {
      id: '69-park',
      coord: [],
      name: 'E. 69th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-park'},
        {dir: 'south', id: '68-park'},
        {dir: 'east', id: '69-lexi'},
        {dir: 'west', id: '69-madi'},
      ],
    }, 
    {
      id: '70-park',
      coord: [],
      name: 'E. 70th St. and Park Ave.',
      desc: `If it rested on its side, this building might be the steps to a giant's doorstep: standing as it is, the modern-looking structure of the Asia House.`,
      isStreet: true,
      onEnter : () =>{
        reenableInput();
      },
      exits: [
        {dir: 'north', id: '71-park'},
        {dir: 'south', id: '69-park'},
        {dir: 'east', id: '70-lexi'},
        {dir: 'west', id: '70-madi'},
        {dir: ['inside', 'asia', 'house'], id: 'asia-mus', block: 'The museum is closed on Sundays'}, // two word arguement situation, if the player types asia house
      ],
    }, 
    {
      id: `asia-mus`,
      name: `Asia House`,
      desc: `You enter the museum, and spend a plasant hour enjoying the exhibits on display. \n When you've seen enough of the display, you leave.`,
      onEnter: () =>{
        pressEnter('70-park');
      },
    },
    {
      id: '71-park',
      coord: [],
      name: 'E. 71st St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-park'},
        {dir: 'south', id: '70-park'},
        {dir: 'east', id: '71-lexi'},
        {dir: 'west', id: '71-madi'},
      ],
    }, 
    {
      id: '72-park',
      coord: [],
      name: 'E. 72nd St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-park'},
        {dir: 'south', id: '71-park'},
        {dir: 'east', id: '72-lexi'},
        {dir: 'west', id: '72-madi'},
      ],
    }, 
    {
      id: '73-park',
      coord: [],
      name: 'E. 73rd St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-park'},
        {dir: 'south', id: '72-park'},
        {dir: 'east', id: '73-lexi'},
        {dir: 'west', id: '73-madi'},
      ],
    }, 
    {
      id: '74-park',
      coord: [],
      name: 'E. 74th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-park'},
        {dir: 'south', id: '73-park'},
        {dir: 'east', id: '74-lexi'},
        {dir: 'west', id: '74-madi'},
      ],
    }, 
    {
      id: '75-park',
      coord: [],
      name: 'E. 75th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-park'},
        {dir: 'south', id: '74-park'},
        {dir: 'east', id: '75-lexi'},
        {dir: 'west', id: '75-madi'},
      ],
    }, 
    {
      id: '76-park',
      coord: [],
      name: 'E. 76th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-park'},
        {dir: 'south', id: '75-park'},
        {dir: 'east', id: '76-lexi'},
        {dir: 'west', id: '76-madi'},
      ],
    }, 
    {
      id: '77-park',
      coord: [],
      name: 'E. 77th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-park'},
        {dir: 'south', id: '76-park'},
        {dir: 'east', id: '77-lexi'},
        {dir: 'west', id: '77-madi'},
      ],
    }, 
    {
      id: '78-park',
      coord: [],
      name: 'E. 78th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-park'},
        {dir: 'south', id: '77-park'},
        {dir: 'east', id: '78-lexi'},
        {dir: 'west', id: '78-madi'},
      ],
    }, 
    {
      id: '79-park',
      coord: [],
      name: 'E. 79th St. and Park Ave.',

      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '80-park'},
        {dir: 'south', id: '78-park'},
        {dir: 'east', id: '79-lexi'},
        {dir: 'west', id: '79-madi'},
      ],
    }, 
    {
      id: '80-park',
      coord: [],
      name: 'E. 80th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-park'},
        {dir: 'south', id: '79-park'},
        {dir: 'east', id: '80-lexi'},
        {dir: 'west', id: '80-madi'},
      ],
    }, 
    {
      id: '81-park',
      coord: [],
      name: 'E. 81st St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-park'},
        {dir: 'south', id: '80-park'},
        {dir: 'east', id: '81-lexi'},
        {dir: 'west', id: '81-madi'},
      ],
    }, 
    {
      id: '82-park',
      coord: [],
      name: 'E. 82nd St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-park'},
        {dir: 'south', id: '81-park'},
        {dir: 'east', id: '82-lexi'},
        {dir: 'west', id: '82-madi'},
      ],
    }, 
    {
      id: '83-park',
      coord: [],
      name: 'E. 83rd St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '84-park'},
        {dir: 'south', id: '82-park'},
        {dir: 'east', id: '83-lexi'},
        {dir: 'west', id: '83-madi'},
      ],
    }, 
    {
      id: '84-park',
      coord: [],
      name: 'E. 84th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-park'},
        {dir: 'south', id: '83-park'},
        {dir: 'east', id: '84-lexi'},
        {dir: 'west', id: '84-madi'},
      ],
    }, 
    {
      id: '85-park',
      coord: [],
      name: 'E. 85th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-park'},
        {dir: 'south', id: '84-park'},
        {dir: 'east', id: '85-lexi'},
        {dir: 'west', id: '85-madi'},
      ],
    }, 
    {
      id: '86-park',
      coord: [],
      name: 'E. 86th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '87-park'},
        {dir: 'south', id: '85-park'},
        {dir: 'east', id: '86-lexi'},
        {dir: 'west', id: '86-madi'},
      ],
    }, 
    {
      id: '87-park',
      coord: [],
      name: 'E. 87th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-park'},
        {dir: 'south', id: '86-park'},
        {dir: 'east', id: '87-lexi'},
        {dir: 'west', id: '87-madi'},
      ],
    }, 
    {
      id: '88-park',
      coord: [],
      name: 'E. 88th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-park'},
        {dir: 'south', id: '87-park'},
        {dir: 'east', id: '88-lexi'},
        {dir: 'west', id: '88-madi'},
      ],
    }, 
    {
      id: '89-park',
      coord: [],
      name: 'E. 89th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-park'},
        {dir: 'south', id: '88-park'},
        {dir: 'east', id: '89-lexi'},
        {dir: 'west', id: '89-madi'},
      ],
    }, 
    {
      id: '90-park',
      coord: [],
      name: 'E. 90th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-park'},
        {dir: 'south', id: '89-park'},
        {dir: 'east', id: '90-lexi'},
        {dir: 'west', id: '90-madi'},
      ],
    }, 
    {
      id: '91-park',
      coord: [],
      name: 'E. 91st St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-park'},
        {dir: 'south', id: '90-park'},
        {dir: 'east', id: '91-lexi'},
        {dir: 'west', id: '91-madi'},
      ],
    }, 
    {
      id: '92-park',
      coord: [],
      name: 'E. 92nd St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-park'},
        {dir: 'south', id: '91-park'},
        {dir: 'east', id: '92-lexi'},
        {dir: 'west', id: '92-madi'},
      ],
    }, 
    {
      id: '93-park',
      coord: [],
      name: 'E. 93rd St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-park'},
        {dir: 'south', id: '92-park'},
        {dir: 'east', id: '93-lexi'},
        {dir: 'west', id: '93-madi'},
      ],
    }, 
    {
      id: '94-park',
      coord: [],
      name: 'E. 94th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-park'},
        {dir: 'south', id: '93-park'},
        {dir: 'east', id: '94-lexi'},
        {dir: 'west', id: '94-madi'},
      ],
    }, 
    {
      id: '95-park',
      coord: [],
      name: 'E. 95th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-park'},
        {dir: 'south', id: '94-park'},
        {dir: 'east', id: '95-lexi'},
        {dir: 'west', id: '95-madi'},
      ],
    }, 
    {
      id: '96-park',
      coord: [],
      name: 'E. 96th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '97-park'},
        {dir: 'south', id: '95-park'},
        {dir: 'east', id: '96-lexi'},
        {dir: 'west', id: '96-madi'},
      ],
    }, 
    {
      id: '97-park',
      coord: [],
      name: 'E. 97th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-park'},
        {dir: 'south', id: '96-park'},
        {dir: 'east', id: '97-lexi'},
        {dir: 'west', id: '97-madi'},
      ],
    }, 
    {
      id: '98-park',
      coord: [],
      name: 'E. 98th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '99-park'},
        {dir: 'south', id: '97-park'},
        {dir: 'east', id: '98-lexi'},
        {dir: 'west', id: '98-madi'},
      ],
    }, 
    {
      id: '99-park',
      coord: [],
      name: 'E. 99th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-park'},
        {dir: 'south', id: '98-park'},
        {dir: 'east', id: '99-lexi'},
        {dir: 'west', id: '99-madi'},
      ],
    },
    {
      id: '101-park',
      coord: [],
      name: 'E. 101st St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-park'},
        {dir: 'south', id: '98-park'},
        {dir: 'east', id: '101-lexi'},
        {dir: 'west', id: '101-madi'},
      ],
    }, 
    {
      id: '102-park',
      coord: [],
      name: 'E. 102nd St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-park'},
        {dir: 'south', id: '101-park'},
        {dir: 'east', id: '102-lexi'},
        {dir: 'west', id: '102-madi'},
      ],
    }, 
    {
      id: '103-park',
      coord: [],
      name: 'E. 103rd St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-park'},
        {dir: 'south', id: '102-park'},
        {dir: 'east', id: '103-lexi'},
        {dir: 'west', id: '103-madi'},
      ],
    }, 
    {
      id: '104-park',
      coord: [],
      name: 'E. 104th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-park'},
        {dir: 'south', id: '103-park'},
        {dir: 'east', id: '104-lexi'},
        {dir: 'west', id: '104-madi'},
      ],
    }, 
    {
      id: '105-park',
      coord: [],
      name: 'E. 105th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-park'},
        {dir: 'south', id: '104-park'},
        {dir: 'east', id: '105-lexi'},
        {dir: 'west', id: '105-madi'},
      ],
    }, 
    {
      id: '106-park',
      coord: [],
      name: 'E. 106th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-park'},
        {dir: 'south', id: '105-park'},
        {dir: 'east', id: '106-lexi'},
        {dir: 'west', id: '106-madi'},
      ],
    }, 
    {
      id: '107-park',
      coord: [],
      name: 'E. 107th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-park'},
        {dir: 'south', id: '106-park'},
        {dir: 'east', id: '107-lexi'},
        {dir: 'west', id: '107-madi'},
      ],
    }, 
    {
      id: '108-park',
      coord: [],
      name: 'E. 108th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-park'},
        {dir: 'south', id: '107-park'},
        {dir: 'east', id: '108-lexi'},
        {dir: 'west', id: '108-madi'},
      ],
    }, 
    {
      id: '109-park',
      coord: [],
      name: 'E. 109th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-park'},
        {dir: 'south', id: '108-park'},
        {dir: 'east', id: '109-lexi'},
        {dir: 'west', id: '109-madi'},
      ],
    }, 
    {
      id: '110-park',
      coord: [],
      name: 'E. 110th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-park', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-park'},
        {dir: 'east', id: '110-lexi'},
        {dir: 'west', id: '110-madi'},
      ],
    }, 
// LEXINGTON AVE STREETS
    {
      id: '60-lexi',
      coord: [],
      name: 'E. 60th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-lexi'},
        {dir: 'south', id: '59-lexi'},
        {dir: 'east', id: '60-3'},
        {dir: 'west', id: '60-park'},
      ],                      
    },
    {
      id: '61-lexi',
      coord: [],
      name: 'E. 61st St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '62-lexi'},
        {dir: 'south', id: '60-lexi'},
        {dir: 'east', id: '61-3'},
        {dir: 'west', id: '61-park'},
      ],   
    },
    {
      id: '62-lexi',
      coord: [],
      name: 'E. 62nd St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-lexi'},
        {dir: 'south', id: '61-lexi'},
        {dir: 'east', id: '62-3'},
        {dir: 'west', id: '62-park'},
      ],   
    },
    {
      id: '63-lexi',   //Barbizon location
      coord: [],
      name: 'E. 63rd St. and Lexington Ave.',
      desc: `Barbizon: This towering structure of brick and arches looks like a cross between a townhouse and a cathedral.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-lexi'},
        {dir: 'south', id: '62-lexi'},
        {dir: 'east', id: '63-3'},
        {dir: 'west', id: '63-park'},
        {dir: ['inside', 'barbizon'], id: '62-barb', block: 'This office building is closed on Sundays'  // Able to access if not on sunday
      },
      ],   
    },
    {
      id: '64-lexi',
      coord: [],
      name: 'E. 64th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '65-lexi'},
        {dir: 'south', id: '63-lexi'},
        {dir: 'east', id: '64-3'},
        {dir: 'west', id: '64-park'},
      ],   
    },
    {
      id: '65-lexi',// Russian delegation to the U.N
      coord: [],
      name: 'E. 65th St. and Lexington Ave.',
      desc: `Two stoical policemen are stationed outside the non-descript entrance of a small brick fortress, supervising the slow, revolving march of some twenty protestors, all carrying placards denouncing whom? You walk closer till you can read the placards. Ah yes, this is the Russian delegation to the U.N.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '66-lexi'},
        {dir: 'south', id: '64-lexi'},
        {dir: 'east', id: '65-3'},
        {dir: 'west', id: '65-park'},
        {dir: ['inside', 'russian'], id: '65-lexi', block: 'You cannot go in there.'},
      ],   
    },
    {
      id: '66-lexi',
      coord: [],
      name: 'E. 66th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '67-lexi'},
        {dir: 'south', id: '65-lexi'},
        {dir: 'east', id: '66-3'},
        {dir: 'west', id: '66-park'},
      ],   
    },
    {
      id: '67-lexi',
      coord: [],
      name: 'E. 67th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '68-lexi'},
        {dir: 'south', id: '66-lexi'},
        {dir: 'east', id: '67-3'},
        {dir: 'west', id: '67-park'},
      ],   
    },
    {
      id: '68-lexi',
      coord: [],
      name: 'E. 68th St. and Lexington Ave.',
      desc: ``,
      isStreet : true,
      hSubway: true,
      exits: [
        {dir: 'north', id: '69-lexi'},
        {dir: 'south', id: '67-lexi'},
        {dir: 'east', id: '68-3'},
        {dir: 'west', id: '68-park'},
      ],  
    },
    {
      id: '69-lexi',
      coord: [],
      name: 'E. 69th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-lexi'},
        {dir: 'south', id: '68-lexi'},
        {dir: 'east', id: '69-3'},
        {dir: 'west', id: '69-park'},
      ],
    }, 
    {
      id: '70-lexi',
      coord: [],
      name: 'E. 70th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '71-lexi'},
        {dir: 'south', id: '69-lexi'},
        {dir: 'east', id: '70-3'},
        {dir: 'west', id: '70-park'},
      ],
    }, 
    {
      id: '71-lexi',
      coord: [],
      name: 'E. 71st St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-lexi'},
        {dir: 'south', id: '70-lexi'},
        {dir: 'east', id: '71-3'},
        {dir: 'west', id: '71-park'},
      ],
    }, 
    {
      id: '72-lexi',
      coord: [],
      name: 'E. 72nd St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-lexi'},
        {dir: 'south', id: '71-lexi'},
        {dir: 'east', id: '72-3'},
        {dir: 'west', id: '72-park'},
      ],
    }, 
    {
      id: '73-lexi',
      coord: [],
      name: 'E. 73rd St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-lexi'},
        {dir: 'south', id: '72-lexi'},
        {dir: 'east', id: '73-3'},
        {dir: 'west', id: '73-park'},
      ],
    }, 
    {
      id: '74-lexi',             // Luncheonette location
      coord: [],
      name: 'E. 74th St. and Lexington Ave.',
      desc: `There is a luncheonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-lexi'},
        {dir: 'south', id: '73-lexi'},
        {dir: 'east', id: '74-3'},
        {dir: 'west', id: '74-park'},
        {dir: ['inside', 'luncheonette', 'restaurant'], id: 'lun-74-lexi'},
      ],
    }, 
    {
      id: '75-lexi',
      coord: [],
      name: 'E. 75th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-lexi'},
        {dir: 'south', id: '74-lexi'},
        {dir: 'east', id: '75-3'},
        {dir: 'west', id: '75-park'},
      ],
    }, 
    {
      id: '76-lexi',
      coord: [],
      name: 'E. 76th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-lexi'},
        {dir: 'south', id: '75-lexi'},
        {dir: 'east', id: '76-3'},
        {dir: 'west', id: '76-park'},
      ],
    }, 
    {
      id: '77-lexi',
      coord: [],
      name: 'E. 77th St. and Lexington Ave.',
      desc: `There is a subway entrance at this corner.`,
      isStreet : true,
      hSubway: true,
      exits: [
        {dir: 'north', id: '78-lexi'},
        {dir: 'south', id: '76-lexi'},
        {dir: 'east', id: '77-3'},
        {dir: 'west', id: '77-park'},
      ],
    }, 
    {
      id: '78-lexi',
      coord: [],
      name: 'E. 78th St. and Lexington Ave.',
      desc: `There is a luncheonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-lexi'},
        {dir: 'south', id: '77-lexi'},
        {dir: 'east', id: '78-3'},
        {dir: 'west', id: '78-park'},
        {dir: ['inside', 'luncheonette', 'restaurant'], id: 'lun-78-lexi'},
      ],
    }, 
    {
      id: '79-lexi',
      coord: [],
      name: 'E. 79th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '80-lexi'},
        {dir: 'south', id: '78-lexi'},
        {dir: 'east', id: '79-3'},
        {dir: 'west', id: '79-madi'},
      ],
    }, 
    {
      id: '80-lexi',
      coord: [],
      name: 'E. 80th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-lexi'},
        {dir: 'south', id: '79-lexi'},
        {dir: 'east', id: '80-3'},
        {dir: 'west', id: '80-park'},
      ],
    }, 
    {
      id: '81-lexi',
      coord: [],
      name: 'E. 81st St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-lexi'},
        {dir: 'south', id: '80-lexi'},
        {dir: 'east', id: '81-3'},
        {dir: 'west', id: '81-park'},
      ],
    }, 
    {
      id: '82-lexi',
      coord: [],
      name: 'E. 82nd St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-lexi'},
        {dir: 'south', id: '81-lexi'},
        {dir: 'east', id: '82-3'},
        {dir: 'west', id: '82-park'},
      ],
    }, 
    {
      id: '83-lexi',
      coord: [],
      name: 'E. 83rd St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '84-lexi'},
        {dir: 'south', id: '82-lexi'},
        {dir: 'east', id: '83-3'},
        {dir: 'west', id: '83-park'},
      ],
    }, 
    {
      id: '84-lexi',
      coord: [],
      name: 'E. 84th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-lexi'},
        {dir: 'south', id: '83-lexi'},
        {dir: 'east', id: '84-3'},
        {dir: 'west', id: '84-park'},
      ],
    }, 
    {
      id: '85-lexi',
      coord: [],
      name: 'E. 85th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-lexi'},
        {dir: 'south', id: '84-lexi'},
        {dir: 'east', id: '85-3'},
        {dir: 'west', id: '85-park'},
      ],
    }, 
    {
      id: '86-lexi',
      coord: [],
      name: 'E. 86th St. and Lexington Ave.',
      desc: `There is a subway entrance at this corner.`,
      isStreet : true,
      hSubway: true,
      exits: [
        {dir: 'north', id: '87-lexi'},
        {dir: 'south', id: '85-lexi'},
        {dir: 'east', id: '86-3'},
        {dir: 'west', id: '86-park'},
      ],
    }, 
    {
      id: '87-lexi',
      coord: [],
      name: 'E. 87th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-lexi'},
        {dir: 'south', id: '86-lexi'},
        {dir: 'east', id: '87-3'},
        {dir: 'west', id: '87-park'},
      ],
    }, 
    {
      id: '88-lexi',
      coord: [],
      name: 'E. 88th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-lexi'},
        {dir: 'south', id: '87-lexi'},
        {dir: 'east', id: '88-3'},
        {dir: 'west', id: '88-park'},
      ],
    }, 
    {
      id: '89-lexi',
      coord: [],
      name: 'E. 89th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-lexi'},
        {dir: 'south', id: '88-lexi'},
        {dir: 'east', id: '89-3'},
        {dir: 'west', id: '89-park'},
      ],
    }, 
    {
      id: '90-lexi',
      coord: [],
      name: 'E. 90th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-lexi'},
        {dir: 'south', id: '89-lexi'},
        {dir: 'east', id: '90-3'},
        {dir: 'west', id: '90-park'},
      ],
    }, 
    {
      id: '91-lexi',
      coord: [],
      name: 'E. 91st St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-lexi'},
        {dir: 'south', id: '90-lexi'},
        {dir: 'east', id: '91-3'},
        {dir: 'west', id: '91-park'},
      ],
    }, 
    {
      id: '92-lexi',
      coord: [],
      name: 'E. 92nd St. and Lexington Ave.',
      desc: `There is a subway entrance at this corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-lexi'},
        {dir: 'south', id: '91-lexi'},
        {dir: 'east', id: '92-3'},
        {dir: 'west', id: '92-park'},
        {dir: ['inside', 'luncheonette', 'restaurant'], id: 'lun-92-lexi'},
      ],
    }, 
    {
      id: '93-lexi',
      coord: [],
      name: 'E. 93rd St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-lexi'},
        {dir: 'south', id: '92-lexi'},
        {dir: 'east', id: '93-3'},
        {dir: 'west', id: '93-park'},
      ],
    }, 
    {
      id: '94-lexi',
      coord: [],
      name: 'E. 94th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-lexi'},
        {dir: 'south', id: '93-lexi'},
        {dir: 'east', id: '94-3'},
        {dir: 'west', id: '94-park'},
      ],
    }, 
    {
      id: '95-lexi',
      coord: [],
      name: 'E. 95th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-lexi'},
        {dir: 'south', id: '94-lexi'},
        {dir: 'east', id: '95-3'},
        {dir: 'west', id: '95-park'},
      ],
    }, 
    {
      id: '96-lexi',
      coord: [],
      name: 'E. 96th St. and Lexington Ave.',
      desc: `There is a subway entrance at this corner.`,
      isStreet : true,
      hSubway: true,
      exits: [
        {dir: 'north', id: '97-lexi'},
        {dir: 'south', id: '95-lexi'},
        {dir: 'east', id: '96-3'},
        {dir: 'west', id: '96-park'},
      ],
    }, 
    {
      id: '97-lexi',
      coord: [],
      name: 'E. 97th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-lexi'},
        {dir: 'south', id: '96-lexi'},
        {dir: 'east', id: '97-3'},
        {dir: 'west', id: '97-park'},
      ],
    }, 
    {
      id: '98-lexi',
      coord: [],
      name: 'E. 98th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '99-lexi'},
        {dir: 'south', id: '97-lexi'},
        {dir: 'east', id: '98-3'},
        {dir: 'west', id: '98-park'},
      ],
    }, 
    {
      id: '99-lexi',
      coord: [],
      name: 'E. 99th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-lexi'},
        {dir: 'south', id: '98-lexi'},
        {dir: 'east', id: '99-3'},
        {dir: 'west', id: '99-park'},
      ],
    },
    {
      id: '101-lexi',
      coord: [],
      name: 'E. 101st St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-lexi'},
        {dir: 'south', id: '98-lexi'},
        {dir: 'east', id: '101-3'},
        {dir: 'west', id: '101-park'},
      ],
    }, 
    {
      id: '102-lexi',
      coord: [],
      name: 'E. 102nd St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-lexi'},
        {dir: 'south', id: '101-lexi'},
        {dir: 'east', id: '102-3'},
        {dir: 'west', id: '102-park'},
      ],
    }, 
    {
      id: '103-lexi',
      coord: [],
      name: 'E. 103rd St. and Lexington Ave.',
      desc: `There is a subway entrance at this corner.`,
      isStreet : true,
      hSubway: true,
      exits: [
        {dir: 'north', id: '104-lexi'},
        {dir: 'south', id: '102-lexi'},
        {dir: 'east', id: '103-3'},
        {dir: 'west', id: '103-park'},
      ],
    }, 
    {
      id: '104-lexi',
      coord: [],
      name: 'E. 104th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-lexi'},
        {dir: 'south', id: '103-lexi'},
        {dir: 'east', id: '104-3'},
        {dir: 'west', id: '104-park'},
      ],
    }, 
    {
      id: '105-lexi',
      coord: [],
      name: 'E. 105th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-lexi'},
        {dir: 'south', id: '104-lexi'},
        {dir: 'east', id: '105-3'},
        {dir: 'west', id: '105-park'},
      ],
    }, 
    {
      id: '106-lexi',
      coord: [],
      name: 'E. 106th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-lexi'},
        {dir: 'south', id: '105-lexi'},
        {dir: 'east', id: '106-3'},
        {dir: 'west', id: '106-park'},
      ],
    }, 
    {
      id: '107-lexi',
      coord: [],
      name: 'E. 107th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-lexi'},
        {dir: 'south', id: '106-lexi'},
        {dir: 'east', id: '107-3'},
        {dir: 'west', id: '107-park'},
      ],
    }, 
    {
      id: '108-lexi',
      coord: [],
      name: 'E. 108th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-lexi'},
        {dir: 'south', id: '107-lexi'},
        {dir: 'east', id: '108-3'},
        {dir: 'west', id: '108-park'},
      ],
    }, 
    {
      id: '109-park',
      coord: [],
      name: 'E. 109th St. and Park Ave.',
      desc: `There is a subway entrance at this corner.`,
      isStreet : true,
      hSubway: true,
      exits: [
        {dir: 'north', id: '110-lexi'},
        {dir: 'south', id: '108-lexi'},
        {dir: 'east', id: '109-3'},
        {dir: 'west', id: '109-park'},
      ],
    }, 
    {
      id: '110-lexi',
      coord: [],
      name: 'E. 110th St. and Lexington Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-lexi', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-lexi'},
        {dir: 'east', id: '110-3'},
        {dir: 'west', id: '110-park'},
      ],
    }, 
// 3rd Ave. Streets
    {
      id: '60-3',
      coord: [],
      name: 'E. 60th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-3'},
        {dir: 'south', id: '59-3'},
        {dir: 'east', id: 'quen-2'},
        {dir: 'west', id: '60-lexi'},
      ],   
    },
    {
      id: '61-3',
      coord: [],
      name: 'E. 61st St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '62-3'},
        {dir: 'south', id: '60-3'},
        {dir: 'east', id: '61-2'},
        {dir: 'west', id: '61-lexi'},
      ],   
    },
    {
      id: '62-3',
      coord: [],
      name: 'E. 62nd St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-3'},
        {dir: 'south', id: '61-3'},
        {dir: 'east', id: '62-2'},
        {dir: 'west', id: '62-lexi'},
      ],   
    },
    {
      id: '63-3',
      coord: [],
      name: 'E. 63rd St. and 3rd Ave.',
      desc: `There is a luncheonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-3'},
        {dir: 'south', id: '62-3'},
        {dir: 'east', id: '63-2'},
        {dir: 'west', id: '63-lexi'},
        {dir: ['inside', 'luncheonette', 'restaurant'], id: 'lun-63-3'},
      ],   
    },
    {
      id: '64-3',
      coord: [],
      name: 'E. 64th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '65-3'},
        {dir: 'south', id: '63-3'},
        {dir: 'east', id: '64-2'},
        {dir: 'west', id: '64-lexi'},
      ],   
    },
    {
      id: '65-3',
      coord: [],
      name: 'E. 65th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '66-3'},
        {dir: 'south', id: '64-3'},
        {dir: 'east', id: '65-2'},
        {dir: 'west', id: '65-lexi'},
      ],   
    },
    {
      id: '66-3',
      coord: [],
      name: 'E. 66th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '67-3'},
        {dir: 'south', id: '65-3'},
        {dir: 'east', id: '66-2'},
        {dir: 'west', id: '66-lexi'},
      ],   
    },
    {
      id: '67-3',
      coord: [],
      name: 'E. 67th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '68-3'},
        {dir: 'south', id: '66-3'},
        {dir: 'east', id: '67-2'},
        {dir: 'west', id: '67-lexi'},
      ],   
    },
    {
      id: '68-3',
      coord: [],
      name: 'E. 68th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '69-3'},
        {dir: 'south', id: '67-3'},
        {dir: 'east', id: '68-2'},
        {dir: 'west', id: '68-lexi'},
      ],  
    },
    {
      id: '69-3',
      coord: [],
      name: 'E. 69th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-3'},
        {dir: 'south', id: '68-3'},
        {dir: 'east', id: '69-2'},
        {dir: 'west', id: '69-lexi'},
      ],
    }, 
    {
      id: '70-3',
      coord: [],
      name: 'E. 70th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '71-3'},
        {dir: 'south', id: '69-3'},
        {dir: 'east', id: '70-2'},
        {dir: 'west', id: '70-lexi'},
      ],
    }, 
    {
      id: '71-3',
      coord: [],
      name: 'E. 71st St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-3'},
        {dir: 'south', id: '70-3'},
        {dir: 'east', id: '71-2'},
        {dir: 'west', id: '71-lexi'},
      ],
    }, 
    {
      id: '72-3',
      coord: [],
      name: 'E. 72nd St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-3'},
        {dir: 'south', id: '71-3'},
        {dir: 'east', id: '72-2'},
        {dir: 'west', id: '72-lexi'},
      ],
    }, 
    {
      id: '73-3',
      coord: [],
      name: 'E. 73rd St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-3'},
        {dir: 'south', id: '72-3'},
        {dir: 'east', id: '73-2'},
        {dir: 'west', id: '73-lexi'},
      ],
    }, 
    {
      id: '74-3',
      coord: [],
      name: 'E. 74th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-3'},
        {dir: 'south', id: '73-3'},
        {dir: 'east', id: '74-2'},
        {dir: 'west', id: '74-lexi'},
      ],
    }, 
    {
      id: '75-3',
      coord: [],
      name: 'E. 75th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-3'},
        {dir: 'south', id: '74-3'},
        {dir: 'east', id: '75-2'},
        {dir: 'west', id: '75-lexi'},
      ],
    }, 
    {
      id: '76-3',
      coord: [],
      name: 'E. 76th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-3'},
        {dir: 'south', id: '75-3'},
        {dir: 'east', id: '76-2'},
        {dir: 'west', id: '76-lexi'},
      ],
    }, 
    {
      id: '77-3',
      coord: [],
      name: 'E. 77th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-3'},
        {dir: 'south', id: '76-3'},
        {dir: 'east', id: '77-2'},
        {dir: 'west', id: '77-lexi'},
      ],
    }, 
    {
      id: '78-3',
      coord: [],
      name: 'E. 78th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-3'},
        {dir: 'south', id: '77-3'},
        {dir: 'east', id: '78-2'},
        {dir: 'west', id: '78-lexi'},
      ],
    }, 
    {
      id: '79-3',
      coord: [],
      name: 'E. 79th St. and 3rd Ave.',
      desc: `A plaque outside this little limestone palace explains that this was the first of the city's Carnegie Libraries.`,
      isStreet: true,
      onEnter : () =>{
        reenableInput();
      },
      exits: [
        {dir: 'north', id: '80-3'},
        {dir: 'south', id: '78-3'},
        {dir: 'east', id: '79-2'},
        {dir: 'west', id: '79-lexi'},
        {dir: ['inside', 'libraries'], id: 'car-mus'},
      ],
    }, 
    {
      id: 'car-mus',// Inside the Carnegie Libraries, brief interaction
      name: 'Museum',
      desc: `You enter the museum, and spend a pleasant hour enjoying the exhibits on display.\n When you've seen enough of the display, you leave`,
      onEnter: () => {
        pressEnter('79-3');
      },
    },
    {
      id: '80-3',
      coord: [],
      name: 'E. 80th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-3'},
        {dir: 'south', id: '79-3'},
        {dir: 'east', id: '80-2'},
        {dir: 'west', id: '80-lexi'},
      ],
    }, 
    {
      id: '81-3',
      coord: [],
      name: 'E. 81st St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-3'},
        {dir: 'south', id: '80-3'},
        {dir: 'east', id: '81-2'},
        {dir: 'west', id: '81-lexi'},
      ],
    }, 
    {
      id: '82-3',
      coord: [],
      name: 'E. 82nd St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-3'},
        {dir: 'south', id: '81-3'},
        {dir: 'east', id: '82-2'},
        {dir: 'west', id: '82-lexi'},
      ],
    }, 
    {
      id: '83-3',
      coord: [],
      name: 'E. 83rd St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '84-3'},
        {dir: 'south', id: '82-3'},
        {dir: 'east', id: '83-2'},
        {dir: 'west', id: '83-lexi'},
      ],
    }, 
    {
      id: '84-3',
      coord: [],
      name: 'E. 84th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-3'},
        {dir: 'south', id: '83-3'},
        {dir: 'east', id: '84-2'},
        {dir: 'west', id: '84-lexi'},
      ],
    }, 
    {
      id: '85-3',
      coord: [],
      name: 'E. 85th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-3'},
        {dir: 'south', id: '84-3'},
        {dir: 'east', id: '85-2'},
        {dir: 'west', id: '85-lexi'},
      ],
    }, 
    {
      id: '86-3',
      coord: [],
      name: 'E. 86th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '87-3'},
        {dir: 'south', id: '85-3'},
        {dir: 'east', id: '86-2'},
        {dir: 'west', id: '86-lexi'},
      ],
    }, 
    {
      id: '87-3',
      coord: [],
      name: 'E. 87th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-3'},
        {dir: 'south', id: '86-3'},
        {dir: 'east', id: '87-2'},
        {dir: 'west', id: '87-lexi'},
      ],
    }, 
    {
      id: '88-3',
      coord: [],
      name: 'E. 88th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-3'},
        {dir: 'south', id: '87-3'},
        {dir: 'east', id: '88-2'},
        {dir: 'west', id: '88-lexi'},
      ],
    }, 
    {
      id: '89-3',
      coord: [],
      name: 'E. 89th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-3'},
        {dir: 'south', id: '88-3'},
        {dir: 'east', id: '89-2'},
        {dir: 'west', id: '89-lexi'},
      ],
    }, 
    {
      id: '90-3',
      coord: [],
      name: 'E. 90th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-3'},
        {dir: 'south', id: '89-3'},
        {dir: 'east', id: '90-2'},
        {dir: 'west', id: '90-lexi'},
      ],
    }, 
    {
      id: '91-3',
      coord: [],
      name: 'E. 91st St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-3'},
        {dir: 'south', id: '90-3'},
        {dir: 'east', id: '91-2'},
        {dir: 'west', id: '91-lexi'},
      ],
    }, 
    {
      id: '92-3',
      coord: [],
      name: 'E. 92nd St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-3'},
        {dir: 'south', id: '91-3'},
        {dir: 'east', id: '92-2'},
        {dir: 'west', id: '92-lexi'},
      ],
    }, 
    {
      id: '93-3',
      coord: [],
      name: 'E. 93rd St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-3'},
        {dir: 'south', id: '92-3'},
        {dir: 'east', id: '93-2'},
        {dir: 'west', id: '93-lexi'},
      ],
    }, 
    {
      id: '94-3',
      coord: [],
      name: 'E. 94th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-3'},
        {dir: 'south', id: '93-3'},
        {dir: 'east', id: '94-2'},
        {dir: 'west', id: '94-lexi'},
      ],
    }, 
    {
      id: '95-3',
      coord: [],
      name: 'E. 95th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-3'},
        {dir: 'south', id: '94-3'},
        {dir: 'east', id: '95-2'},
        {dir: 'west', id: '95-lexi'},
      ],
    }, 
    {
      id: '96-3',
      coord: [],
      name: 'E. 96th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '97-3'},
        {dir: 'south', id: '95-3'},
        {dir: 'east', id: '96-2'},
        {dir: 'west', id: '96-lexi'},
      ],
    }, 
    {
      id: '97-3',
      coord: [],
      name: 'E. 97th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-3'},
        {dir: 'south', id: '96-3'},
        {dir: 'east', id: '97-2'},
        {dir: 'west', id: '97-lexi'},
      ],
    }, 
    {
      id: '98-3',
      coord: [],
      name: 'E. 98th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '99-3'},
        {dir: 'south', id: '97-3'},
        {dir: 'east', id: '98-2'},
        {dir: 'west', id: '98-lexi'},
      ],
    }, 
    {
      id: '99-3',
      coord: [],
      name: 'E. 99th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-3'},
        {dir: 'south', id: '98-3'},
        {dir: 'east', id: '99-2'},
        {dir: 'west', id: '99-lexi'},
      ],
    },
    {
      id: '101-3',
      coord: [],
      name: 'E. 101st St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-3'},
        {dir: 'south', id: '98-3'},
        {dir: 'east', id: '101-2'},
        {dir: 'west', id: '101-lexi'},
      ],
    }, 
    {
      id: '102-3',
      coord: [],
      name: 'E. 102nd St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-3'},
        {dir: 'south', id: '101-3'},
        {dir: 'east', id: '102-2'},
        {dir: 'west', id: '102-lexi'},
      ],
    }, 
    {
      id: '103-3',
      coord: [],
      name: 'E. 103rd St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-3'},
        {dir: 'south', id: '102-3'},
        {dir: 'east', id: '103-2'},
        {dir: 'west', id: '103-lexi'},
      ],
    }, 
    {
      id: '104-3',
      coord: [],
      name: 'E. 104th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-3'},
        {dir: 'south', id: '103-3'},
        {dir: 'east', id: '104-2'},
        {dir: 'west', id: '104-lexi'},
      ],
    }, 
    {
      id: '105-3',
      coord: [],
      name: 'E. 105th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-3'},
        {dir: 'south', id: '104-3'},
        {dir: 'east', id: '105-2'},
        {dir: 'west', id: '105-lexi'},
      ],
    }, 
    {
      id: '106-3',
      coord: [],
      name: 'E. 106th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-3'},
        {dir: 'south', id: '105-3'},
        {dir: 'east', id: '106-2'},
        {dir: 'west', id: '106-lexi'},
      ],
    }, 
    {
      id: '107-3',
      coord: [],
      name: 'E. 107th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-3'},
        {dir: 'south', id: '106-3'},
        {dir: 'east', id: '107-2'},
        {dir: 'west', id: '107-lexi'},
      ],
    }, 
    {
      id: '108-3',
      coord: [],
      name: 'E. 108th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-3'},
        {dir: 'south', id: '107-3'},
        {dir: 'east', id: '108-2'},
        {dir: 'west', id: '108-lexi'},
      ],
    }, 
    {
      id: '109-3',
      coord: [],
      name: 'E. 109th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-3'},
        {dir: 'south', id: '108-3'},
        {dir: 'east', id: '109-2'},
        {dir: 'west', id: '109-lexi'},
      ],
    }, 
    {
      id: '110-3',
      coord: [],
      name: 'E. 110th St. and 3rd Ave',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-3', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-3'},
        {dir: 'east', id: '110-2'},
        {dir: 'west', id: '110-lexi'},
      ], 
    },
    // 2nd Ave. Streets
    {
      id: 'quen-2',// 2nd Ave. and Queensboro Bridge
      coord: [],
      name: '2nd Ave. and Queensboro Bridge',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '60-2'},
        {dir: 'south', id: '59-2'},
        {dir: 'east', id: '60-quen'},
        {dir: 'west', id: '60-3'},
      ],
    },
    {
      id: '60-2',
      coord: [],
      name: 'E. 60th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-2'},
        {dir: 'south', id: 'quen-2'},
        {dir: 'east', id: '60-quen'},
        {dir: 'west', id: '60-3'},
      ],
    },
    {
      id: '61-2',
      coord: [],
      name: 'E. 61st St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '62-2'},
        {dir: 'south', id: '61-1'},
        {dir: 'east', id: '61-quen'},
        {dir: 'west', id: '61-3'},
      ],
    },
    {
      id: '62-2',
      coord: [],
      name: 'E. 62nd St. and 2nd Ave.',
      desc: `There is a luncheonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-2'},
        {dir: 'south', id: '61-2'},
        {dir: 'east', id: '62-quen'},
        {dir: 'west', id: '62-3'},
        {dir: ['inside', 'luncheonette', 'restaurant'], id: 'lun-63-2'},
      ],
    },
    {
      id: '63-2',
      coord: [],
      name: 'E. 63rd St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-2'},
        {dir: 'south', id: '62-2'},
        {dir: 'east', id: '63-quen'},
        {dir: 'west', id: '63-3'},
      ],
    },
    {
      id: '64-2',
      coord: [],
      name: 'E. 64th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '65-2'},
        {dir: 'south', id: '63-2'},
        {dir: 'east', id: '64-1'},
        {dir: 'west', id: '64-3'},
      ],
    },
    {
      id: '65-2',
      coord: [],
      name: 'E. 65th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '66-2'},
        {dir: 'south', id: '64-2'},
        {dir: 'east', id: '65-1'},
        {dir: 'west', id: '65-3'},
      ],
    },
    {
      id: '66-2',
      coord: [],
      name: 'E. 66th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '67-2'},
        {dir: 'south', id: '65-2'},
        {dir: 'east', id: '66-1'},
        {dir: 'west', id: '66-3'},
      ],
    },
    {
      id: '67-2',
      coord: [],
      name: 'E. 67th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '68-2'},
        {dir: 'south', id: '66-2'},
        {dir: 'east', id: '67-1'},
        {dir: 'west', id: '67-3'},
      ],
    },
    {
      id: '68-2',
      coord: [],
      name: 'E. 68th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '69-2'},
        {dir: 'south', id: '67-2'},
        {dir: 'east', id: '68-1'},
        {dir: 'west', id: '68-3'},
      ],  
    },
    {
      id: '69-2',
      coord: [],
      name: 'E. 69th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-2'},
        {dir: 'south', id: '68-2'},
        {dir: 'east', id: '69-1'},
        {dir: 'west', id: '69-3'},
      ],
    }, 
    {
      id: '70-2',
      coord: [],
      name: 'E. 70th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '71-2'},
        {dir: 'south', id: '69-2'},
        {dir: 'east', id: '70-1'},
        {dir: 'west', id: '70-3'},
      ],
    }, 
    {
      id: '71-2',
      coord: [],
      name: 'E. 71st St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-2'},
        {dir: 'south', id: '70-2'},
        {dir: 'east', id: '71-1'},
        {dir: 'west', id: '71-3'},
      ],
    }, 
    {
      id: '72-2',
      coord: [],
      name: 'E. 72nd St. and 2nd Ave.',
      desc: `There is a luncheonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-2'},
        {dir: 'south', id: '71-2'},
        {dir: 'east', id: '72-1'},
        {dir: 'west', id: '72-3'},
        {dir: ['inside', 'luncheonette', 'restaurant'], id: 'lun-72-2'},
      ],
    }, 
    {
      id: '73-2',
      coord: [],
      name: 'E. 73rd St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-2'},
        {dir: 'south', id: '72-2'},
        {dir: 'east', id: '73-1'},
        {dir: 'west', id: '73-3'},
      ],
    }, 
    {
      id: '74-2',
      coord: [],
      name: 'E. 74th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-2'},
        {dir: 'south', id: '73-2'},
        {dir: 'east', id: '74-1'},
        {dir: 'west', id: '74-3'},
      ],
    }, 
    {
      id: '75-2',
      coord: [],
      name: 'E. 75th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-2'},
        {dir: 'south', id: '74-2'},
        {dir: 'east', id: '75-1'},
        {dir: 'west', id: '75-3'},
      ],
    }, 
    {
      id: '76-2',
      coord: [],
      name: 'E. 76th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-2'},
        {dir: 'south', id: '75-2'},
        {dir: 'east', id: '76-1'},
        {dir: 'west', id: '76-3'},
      ],
    }, 
    {
      id: '77-2',
      coord: [],
      name: 'E. 77th St. and 2nd Ave.',
      desc: `There is a pizzeria here.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-2'},
        {dir: 'south', id: '76-2'},
        {dir: 'east', id: '77-1'},
        {dir: 'west', id: '77-3'},
        {dir: ['inside', 'pizzaeria', 'restaurant'], id: 'piz-95-5'},
      ],
    }, 
    {
      id: '78-2',
      coord: [],
      name: 'E. 78th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-2'},
        {dir: 'south', id: '77-2'},
        {dir: 'east', id: '78-1'},
        {dir: 'west', id: '78-3'},
      ],
    }, 
    {
      id: '79-2',
      coord: [],
      name: 'E. 79th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '80-2'},
        {dir: 'south', id: '78-2'},
        {dir: 'east', id: '79-1'},
        {dir: 'west', id: '79-3'},
      ],
    }, 
    {
      id: '80-2',
      coord: [],
      name: 'E. 80th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-2'},
        {dir: 'south', id: '79-2'},
        {dir: 'east', id: '80-1'},
        {dir: 'west', id: '80-3'},
      ],
    }, 
    {
      id: '81-2',
      coord: [],
      name: 'E. 81st St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-2'},
        {dir: 'south', id: '80-2'},
        {dir: 'east', id: '81-1'},
        {dir: 'west', id: '81-3'},
      ],
    }, 
    {
      id: '82-2',
      coord: [],
      name: 'E. 82nd St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-2'},
        {dir: 'south', id: '81-2'},
        {dir: 'east', id: '82-1'},
        {dir: 'west', id: '82-3'},
      ],
    }, 
    {
      id: '83-2',
      coord: [],
      name: 'E. 83rd St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '84-2'},
        {dir: 'south', id: '82-2'},
        {dir: 'east', id: '83-1'},
        {dir: 'west', id: '83-3'},
      ],
    }, 
    {
      id: '84-2',
      coord: [],
      name: 'E. 84th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-2'},
        {dir: 'south', id: '83-2'},
        {dir: 'east', id: '84-1'},
        {dir: 'west', id: '84-3'},
      ],
    }, 
    {
      id: '85-2',
      coord: [],
      name: 'E. 85th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-2'},
        {dir: 'south', id: '84-2'},
        {dir: 'east', id: '85-1'},
        {dir: 'west', id: '85-3'},
      ],
    }, 
    {
      id: '86-2',
      coord: [],
      name: 'E. 86th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '87-2'},
        {dir: 'south', id: '85-2'},
        {dir: 'east', id: '86-1'},
        {dir: 'west', id: '86-3'},
      ],
    }, 
    {
      id: '87-2',
      coord: [],
      name: 'E. 87th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-2'},
        {dir: 'south', id: '86-2'},
        {dir: 'east', id: '87-1'},
        {dir: 'west', id: '87-3'},
      ],
    }, 
    {
      id: '88-2',
      coord: [],
      name: 'E. 88th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-2'},
        {dir: 'south', id: '87-2'},
        {dir: 'east', id: '88-1'},
        {dir: 'west', id: '88-3'},
      ],
    }, 
    {
      id: '89-2',
      coord: [],
      name: 'E. 89th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-2'},
        {dir: 'south', id: '88-2'},
        {dir: 'east', id: '89-1'},
        {dir: 'west', id: '89-3'},
      ],
    }, 
    {
      id: '90-2',
      coord: [],
      name: 'E. 90th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-2'},
        {dir: 'south', id: '89-2'},
        {dir: 'east', id: '90-1'},
        {dir: 'west', id: '90-3'},
      ],
    }, 
    {
      id: '91-2',
      coord: [],
      name: 'E. 91st St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-2'},
        {dir: 'south', id: '90-2'},
        {dir: 'east', id: '91-1'},
        {dir: 'west', id: '91-3'},
      ],
    }, 
    {
      id: '92-2',
      coord: [],
      name: 'E. 92nd St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-2'},
        {dir: 'south', id: '91-2'},
        {dir: 'east', id: '92-1'},
        {dir: 'west', id: '92-3'},
      ],
    }, 
    {
      id: '93-2',
      coord: [],
      name: 'E. 93rd St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-2'},
        {dir: 'south', id: '92-2'},
        {dir: 'east', id: '93-1'},
        {dir: 'west', id: '93-3'},
      ],
    }, 
    {
      id: '94-2',
      coord: [],
      name: 'E. 94th St. and 2nd Ave.',
      desc: `There is a luncheonette on the corner.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-2'},
        {dir: 'south', id: '93-2'},
        {dir: 'east', id: '94-1'},
        {dir: 'west', id: '94-3'},
        {dir: ['inside', 'luncheonette', 'restaurant'], id: 'lun-94-2'},
      ],
    }, 
    {
      id: '95-2',
      coord: [],
      name: 'E. 95th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-2'},
        {dir: 'south', id: '94-2'},
        {dir: 'east', id: '95-1'},
        {dir: 'west', id: '95-3'},
      ],
    }, 
    {
      id: '96-2',
      coord: [],
      name: 'E. 96th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '97-2'},
        {dir: 'south', id: '95-2'},
        {dir: 'east', id: '96-1'},
        {dir: 'west', id: '96-3'},
      ],
    }, 
    {
      id: '97-2',
      coord: [],
      name: 'E. 97th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-2'},
        {dir: 'south', id: '96-2'},
        {dir: 'east', id: '97-1'},
        {dir: 'west', id: '97-3'},
      ],
    }, 
    {
      id: '98-2',
      coord: [],
      name: 'E. 98th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '99-2'},
        {dir: 'south', id: '97-2'},
        {dir: 'east', id: '98-1'},
        {dir: 'west', id: '98-3'},
      ],
    }, 
    {
      id: '99-2',
      coord: [],
      name: 'E. 99th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-2'},
        {dir: 'south', id: '98-2'},
        {dir: 'east', id: '99-1'},
        {dir: 'west', id: '99-3'},
      ],
    },
    {
      id: '101-2',
      coord: [],
      name: 'E. 101st St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-2'},
        {dir: 'south', id: '98-2'},
        {dir: 'east', id: '101-1'},
        {dir: 'west', id: '101-3'},
      ],
    }, 
    {
      id: '102-2',
      coord: [],
      name: 'E. 102nd St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-2'},
        {dir: 'south', id: '101-2'},
        {dir: 'east', id: '102-1'},
        {dir: 'west', id: '102-3'},
      ],
    }, 
    {
      id: '103-2',
      coord: [],
      name: 'E. 103rd St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-2'},
        {dir: 'south', id: '102-2'},
        {dir: 'east', id: '103-1'},
        {dir: 'west', id: '103-3'},
      ],
    }, 
    {
      id: '104-2',
      coord: [],
      name: 'E. 104th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-2'},
        {dir: 'south', id: '103-2'},
        {dir: 'east', id: '104-1'},
        {dir: 'west', id: '104-3'},
      ],
    }, 
    {
      id: '105-2',
      coord: [],
      name: 'E. 105th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-2'},
        {dir: 'south', id: '104-2'},
        {dir: 'east', id: '105-1'},
        {dir: 'west', id: '105-3'},
      ],
    }, 
    {
      id: '106-2',
      coord: [],
      name: 'E. 106th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-2'},
        {dir: 'south', id: '105-2'},
        {dir: 'east', id: '106-1'},
        {dir: 'west', id: '106-3'},
      ],
    }, 
    {
      id: '107-2',
      coord: [],
      name: 'E. 107th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-2'},
        {dir: 'south', id: '106-2'},
        {dir: 'east', id: '107-1'},
        {dir: 'west', id: '107-3'},
      ],
    }, 
    {
      id: '108-2',
      coord: [],
      name: 'E. 108th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-2'},
        {dir: 'south', id: '107-2'},
        {dir: 'east', id: '108-1'},
        {dir: 'west', id: '108-3'},
      ],
    }, 
    {
      id: '109-2',
      coord: [],
      name: 'E. 109th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-2'},
        {dir: 'south', id: '108-2'},
        {dir: 'east', id: '109-1'},
        {dir: 'west', id: '109-3'},
      ],
    }, 
    {
      id: '110-2',
      coord: [],
      name: 'E. 110th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-2', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-2'},
        {dir: 'east', id: '110-1'},
        {dir: 'west', id: '110-3'},
      ],
    }, 
    {
      id: '60-quen', // Queensboro Bridge Nodes
      coord: [],
      name: 'E. 60th and Queensboro Bridge OUT',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-quen'},
        {dir: 'south', id: '59-quen'},
        {dir: 'east', id: '60-1'},
        {dir: 'west', id: 'quen-2'},
      ],
    },
    {
      id: '61-quen',
      coord: [],
      name: 'E. 61st St. and Queensboro Bridge OUT',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '62-quen'},
        {dir: 'south', id: '60-quen'},
        {dir: 'east', id: '61-1'},
        {dir: 'west', id: '61-3'},
      ],
    },
    {
      id: '62-quen',
      coord: [],
      name: 'E. 62nd St. and Queensboro Bridge OUT',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-quen'},
        {dir: 'south', id: '61-quen'},
        {dir: 'east', id: '62-1'},
        {dir: 'west', id: '62-2'},
      ],
    },
    {
      id: '63-quen',
      coord: [],
      name: 'E. 63rd St. and Queensboro Bridge OUT',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-2', block: 'You cannot go that way'},
        {dir: 'south', id: '62-quen'},
        {dir: 'east', id: '63-1'},
        {dir: 'west', id: '63-2'},
      ],
    },
// 1st Ave Streets
    {
      id: '60-1',
      coord: [],
      name: 'E. 60th St. and 1st Ave.',
      desc: `Dangling high above the traffic on the street are the steel cables and the gondolas of the aerial tramway to Roosevelt Island. It looks almost as much fun as a ferris wheel.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-1'},
        {dir: 'south', id: '59-1'},
        {dir: 'east', id: '60-york'},
        {dir: 'west', id: '60-quee'},
      ],
    },
    {
      id: '61-1',
      coord: [],
      name: 'E. 61st St. and 1st Ave.',
      desc: `Dangerfields -- This looks like a perfectly reasonable night club, but somehow you just don't respect it.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '62-1'},
        {dir: 'south', id: '60-1'},
        {dir: 'east', id: '61-york'},
        {dir: 'west', id: '61-quen'},
        {dir: ['inside', 'dangerfields'], id: '61-1', block: 'You cannot go there'},
      ],
    },
    {
      id: '62-1',
      coord: [],
      name: 'E. 62nd St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-1'},
        {dir: 'south', id: '61-1'},
        {dir: 'east', id: '62-york'},
        {dir: 'west', id: '62-quee'},
      ],
    },
    {
      id: '63-1',
      coord: [],
      name: 'E. 63rd St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-1'},
        {dir: 'south', id: '62-1'},
        {dir: 'east', id: '63-york'},
        {dir: 'west', id: '63-2'},
      ],
    },
    {
      id: '64-1',
      coord: [],
      name: 'E. 64th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '65-1'},
        {dir: 'south', id: '63-1'},
        {dir: 'east', id: '64-york'},
        {dir: 'west', id: '64-2'},
    ],
    },
    {
      id: '65-1',
      coord: [],
      name: 'E. 65th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '66-1'},
        {dir: 'south', id: '64-1'},
        {dir: 'east', id: '65-york'},
        {dir: 'west', id: '65-2'},
      ],
    },
    {
      id: '66-1',
      coord: [],
      name: 'E. 66th St. and 1st Ave.',
      desc: `There is a pizzeria here.`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '67-1'},
        {dir: 'south', id: '65-1'},
        {dir: 'east', id: '66-york'},
        {dir: 'west', id: '66-2'},
      ],
    },
    {
      id: '67-1',
      coord: [],
      name: 'E. 67th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '68-1'},
        {dir: 'south', id: '66-1'},
        {dir: 'east', id: '67-york'},
        {dir: 'west', id: '67-2'},
      ],
    },
    {
      id: '68-1',
      coord: [],
      name: 'E. 68th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '69-1'},
        {dir: 'south', id: '67-1'},
        {dir: 'east', id: '68-york'},
        {dir: 'west', id: '68-2'},
      ],  
    },
    {
      id: '69-1',
      coord: [],
      name: 'E. 69th St. and 1st Ave.',
      desc: `Occupying half the street-frontage of a medium-new brick and glass condo is a night club called the F. B. I. Glit-lettering on the plate glass window explains that the F. B. I. is "Manhattan's most authentic imitation speakeasy" and "New York's answer to Colonial Williamsburg."`,
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-1'},
        {dir: 'south', id: '68-1'},
        {dir: 'east', id: '69-york'},
        {dir: 'west', id: '69-2'},
        {dir: ['inside', 'fbi'], id: '68-1', block: 'You cannot go in there'},
      ],
    }, 
    {
      id: '70-1',
      coord: [],
      name: 'E. 70th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '71-1'},
        {dir: 'south', id: '69-1'},
        {dir: 'east', id: '70-york'},
        {dir: 'west', id: '70-2'},
      ],
    }, 
    {
      id: '71-1',
      coord: [],
      name: 'E. 71st St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-1'},
        {dir: 'south', id: '70-1'},
        {dir: 'east', id: '71-york'},
        {dir: 'west', id: '71-2'},
      ],
    }, 
    {
      id: '72-1',
      coord: [],
      name: 'E. 72nd St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-1'},
        {dir: 'south', id: '71-1'},
        {dir: 'east', id: '72-york'},
        {dir: 'west', id: '72-2'},
      ],
    }, 
    {
      id: '73-1',
      coord: [],
      name: 'E. 73rd St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-1'},
        {dir: 'south', id: '72-1'},
        {dir: 'east', id: '73-york'},
        {dir: 'west', id: '73-2'},
      ],
    }, 
    {
      id: '74-1',
      coord: [],
      name: 'E. 74th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-1'},
        {dir: 'south', id: '73-1'},
        {dir: 'east', id: '74-york'},
        {dir: 'west', id: '74-2'},
      ],
    }, 
    {
      id: '75-1',
      coord: [],
      name: 'E. 75th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-1'},
        {dir: 'south', id: '74-1'},
        {dir: 'east', id: '75-york'},
        {dir: 'west', id: '75-2'},
      ],
    }, 
    {
      id: '76-1',
      coord: [],
      name: 'E. 76th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-1'},
        {dir: 'south', id: '75-1'},
        {dir: 'east', id: '76-york'},
        {dir: 'west', id: '76-2'},
      ],
    }, 
    {
      id: '77-1',
      coord: [],
      name: 'E. 77th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-1'},
        {dir: 'south', id: '76-1'},
        {dir: 'east', id: '77-york'},
        {dir: 'west', id: '77-2'},
      ],
    }, 
    {
      id: '78-1',
      coord: [],
      name: 'E. 78th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-1'},
        {dir: 'south', id: '77-1'},
        {dir: 'east', id: '78-york'},
        {dir: 'west', id: '78-2'},
      ],
    }, 
    {
      id: '79-1',
      coord: [],
      name: 'E. 79th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '80-1'},
        {dir: 'south', id: '78-1'},
        {dir: 'east', id: '79-york'},
        {dir: 'west', id: '79-2'},
      ],
    }, 
    {
      id: '80-1',
      coord: [],
      name: 'E. 80th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-1'},
        {dir: 'south', id: '79-1'},
        {dir: 'east', id: '80-york'},
        {dir: 'west', id: '80-2'},
      ],
    }, 
    {
      id: '81-1',
      coord: [],
      name: 'E. 81st St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-1'},
        {dir: 'south', id: '80-1'},
        {dir: 'east', id: '81-york'},
        {dir: 'west', id: '81-2'},
      ],
    }, 
    {
      id: '82-1',
      coord: [],
      name: 'E. 82nd St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-1'},
        {dir: 'south', id: '81-1'},
        {dir: 'east', id: '82-york'},
        {dir: 'west', id: '82-2'},
      ],
    }, 
    {
      id: '83-1',
      coord: [],
      name: 'E. 83rd St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '84-1'},
        {dir: 'south', id: '82-1'},
        {dir: 'east', id: '83-york'},
        {dir: 'west', id: '83-2'},
      ],
    }, 
    {
      id: '84-1',
      coord: [],
      name: 'E. 84th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-1'},
        {dir: 'south', id: '83-1'},
        {dir: 'east', id: '84-york'},
        {dir: 'west', id: '84-2'},
      ],
    }, 
    {
      id: '85-1',
      coord: [],
      name: 'E. 85th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-1'},
        {dir: 'south', id: '84-1'},
        {dir: 'east', id: '85-york'},
        {dir: 'west', id: '85-2'},
      ],
    }, 
    {
      id: '86-1',
      coord: [],
      name: 'E. 86th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '87-1'},
        {dir: 'south', id: '85-1'},
        {dir: 'east', id: '86-york'},
        {dir: 'west', id: '86-2'},
      ],
    }, 
    {
      id: '87-1',
      coord: [],
      name: 'E. 87th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-1'},
        {dir: 'south', id: '86-1'},
        {dir: 'east', id: '87-york'},
        {dir: 'west', id: '87-2'},
      ],
    }, 
    {
      id: '88-1',
      coord: [],
      name: 'E. 88th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-1'},
        {dir: 'south', id: '87-1'},
        {dir: 'east', id: '88-york'},
        {dir: 'west', id: '88-2'},
      ],
    }, 
    {
      id: '89-1',
      coord: [],
      name: 'E. 89th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-1'},
        {dir: 'south', id: '88-1'},
        {dir: 'east', id: '89-york'},
        {dir: 'west', id: '89-2'},
      ],
    }, 
    {
      id: '90-1',
      coord: [],
      name: 'E. 90th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-1'},
        {dir: 'south', id: '89-1'},
        {dir: 'east', id: '90-york'},
        {dir: 'west', id: '90-2'},
      ],
    }, 
    {
      id: '91-1',
      coord: [],
      name: 'E. 91st St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-1'},
        {dir: 'south', id: '90-1'},
        {dir: 'east', id: '91-york'},
        {dir: 'west', id: '91-2'},
      ],
    }, 
    {
      id: '92-1',
      coord: [],
      name: 'E. 92nd St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-1'},
        {dir: 'south', id: '91-1'},
        {dir: 'east', id: '92-york'},
        {dir: 'west', id: '92-2'},
      ],
    }, 
    {
      id: '93-1',
      coord: [],
      name: 'E. 93rd St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-1'},
        {dir: 'south', id: '92-1'},
        {dir: 'east', id: '93-fdrd'},
        {dir: 'west', id: '93-2'},
      ],
    }, 
    {
      id: '94-1',
      coord: [],
      name: 'E. 94th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-1'},
        {dir: 'south', id: '93-1'},
        {dir: 'east', id: '94-fdrd'},
        {dir: 'west', id: '94-2'},
      ],
    }, 
    {
      id: '95-1',
      coord: [],
      name: 'E. 95th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-1'},
        {dir: 'south', id: '94-1'},
        {dir: 'east', id: '95-fdrd'},
        {dir: 'west', id: '95-2'},
      ],
    }, 
    {
      id: '96-1',
      coord: [],
      name: 'E. 96th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '97-1'},
        {dir: 'south', id: '95-1'},
        {dir: 'east', id: '96-fdrd'},
        {dir: 'west', id: '96-2'},
      ],
    }, 
    {
      id: '97-1',
      coord: [],
      name: 'E. 97th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-1'},
        {dir: 'south', id: '96-1'},
        {dir: 'east', id: '97-fdrd'},
        {dir: 'west', id: '97-2'},
      ],
    }, 
    {
      id: '98-1',
      coord: [],
      name: 'E. 98th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '99-1'},
        {dir: 'south', id: '97-1'},
        {dir: 'east', id: '98-fdrd'},
        {dir: 'west', id: '98-2'},
      ],
    }, 
    {
      id: '99-1',
      coord: [],
      name: 'E. 99th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '100-1'},
        {dir: 'south', id: '98-1'},
        {dir: 'east', id: '99-fdrd'},
        {dir: 'west', id: '99-2'},
      ],
    }, 
    {
      id: '100-1',
      coord: [],
      name: 'E. 100th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-1'},
        {dir: 'south', id: '99-1'},
        {dir: 'east', id: '100-fdrd'},
        {dir: 'west', id: '99-2'},
      ],
    }, 
    {
      id: '101-1',
      coord: [],
      name: 'E. 101st St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-1'},
        {dir: 'south', id: '100-1'},
        {dir: 'east', id: '101-york', block: `You can't go that way.`},
        {dir: 'west', id: '101-2'},
      ],
    }, 
    {
      id: '102-1',
      coord: [],
      name: 'E. 102nd St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-1'},
        {dir: 'south', id: '101-1'},
        {dir: 'east', id: '102-fdrd'},
        {dir: 'west', id: '102-2'},
      ],
    }, 
    {
      id: '103-1',
      coord: [],
      name: 'E. 103rd St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-1'},
        {dir: 'south', id: '102-1'},
        {dir: 'east', id: '103-york', block: `You can't go that way.`},
        {dir: 'west', id: '103-2'},
      ],
    }, 
    {
      id: '104-1',
      coord: [],
      name: 'E. 104th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-1'},
        {dir: 'south', id: '103-1'},
        {dir: 'east', id: '104-york', block: `You can't go that way.`},
        {dir: 'west', id: '104-2'},
      ],
    }, 
    {
      id: '105-1',
      coord: [],
      name: 'E. 105th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-1'},
        {dir: 'south', id: '104-1'},
        {dir: 'east', id: '105-fdrd'},
        {dir: 'west', id: '105-2'},
      ],
    }, 
    {
      id: '106-1',
      coord: [],
      name: 'E. 106th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-1'},
        {dir: 'south', id: '105-1'},
        {dir: 'east', id: '106-fdrd'},
        {dir: 'west', id: '106-2'},
      ],
    }, 
    {
      id: '107-1',
      coord: [],
      name: 'E. 107th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-1'},
        {dir: 'south', id: '106-1'},
        {dir: 'east', id: '107-york', block: `You can't go that way.`},
        {dir: 'west', id: '107-2'},
      ],
    }, 
    {
      id: '108-1',
      coord: [],
      name: 'E. 108th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-1'},
        {dir: 'south', id: '107-1'},
        {dir: 'east', id: '108-york', block: `You can't go that way.`},
        {dir: 'west', id: '108-2'},
      ],
    }, 
    {
      id: '109-1',
      coord: [],
      name: 'E. 109th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-1'},
        {dir: 'south', id: '108-1'},
        {dir: 'east', id: '109-york', block: `You can't go that way.`},
        {dir: 'west', id: '109-2'},
      ],
    }, 
    {
      id: '110-1',
      coord: [],
      name: 'E. 110th St. and 1st Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-1', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-1'},
        {dir: 'east', id: '110-fdrd'},
        {dir: 'west', id: '110-2'},
      ],
    }, 
// York Ave. Streets
    {
      id: '60-york',
      coord: [],
      name: '60th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-york'},
        {dir: 'south', id: '59-sutt'},
        {dir: 'east', id: '60-york', block: `You can't go that way.`},
        {dir: 'west', id: '60-1'},
      ],
    },
    {
      id: '61-york',
      coord: [],
      name: 'E. 61st St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '62-york'},
        {dir: 'south', id: '60-york'},
        {dir: 'east', id: '61-york', block: `You can't go that way.`},
        {dir: 'west', id: '61-1'},
      ],
    },
    {
      id: '62-york',
      coord: [],
      name: 'E. 62nd St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-york'},
        {dir: 'south', id: '61-york'},
        {dir: 'east', id: '62-york', block: `You can't go that way.`},
        {dir: 'west', id: '62-1'},
      ],
    },
    {
      id: '63-york',
      coord: [],
      name: 'E. 63rd St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-york'},
        {dir: 'south', id: '62-york'},
        {dir: 'east', id: '63-york', block: `You can't go that way.`},
        {dir: 'west', id: '63-1'},
      ],
    },
    {
      id: '64-york',
      coord: [],
      name: 'E. 64th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '65-york'},
        {dir: 'south', id: '63-york'},
        {dir: 'east', id: '64-york', block: `You can't go that way.`},
        {dir: 'west', id: '64-1'},
      ],
    },
    {
      id: '65-york',
      coord: [],
      name: 'E. 65th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '66-york'},
        {dir: 'south', id: '64-york'},
        {dir: 'east', id: '65-york', block: `You can't go that way.`},
        {dir: 'west', id: '65-1'},
      ],
    },
    {
      id: '66-york',
      coord: [],
      name: 'E. 66th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '67-york'},
        {dir: 'south', id: '65-york'},
        {dir: 'east', id: '66-york', block: `You can't go that way.`},
        {dir: 'west', id: '66-1'},
      ],                   
    },
    {
      id: '67-york',
      coord: [],
      name: 'E. 67th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '68-york'},
        {dir: 'south', id: '66-york'},
        {dir: 'east', id: '67-york', block:'You cannot go there'},
        {dir: 'west', id: '67-1'},
      ],                   
    },
    {
      id: '68-york',
      coord: [],
      name: 'E. 68th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '69-york'},
        {dir: 'south', id: '67-york'},
        {dir: 'east', id: '68-york', block: `You can't go that way.`},
        {dir: 'west', id: '68-1'},
      ],  
    },
    {
      id: '69-york',
      coord: [],
      name: 'E. 69th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-york'},
        {dir: 'south', id: '68-york'},
        {dir: 'east', id: '69-york', block: `You can't go that way.`},
        {dir: 'west', id: '69-1'},
      ],
    }, 
    {
      id: '70-york',
      coord: [],
      name: 'E. 70th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '71-york'},
        {dir: 'south', id: '69-york'},
        {dir: 'east', id: '70-york', block: `You can't go that way.`},
        {dir: 'west', id: '70-1'},
      ],
    }, 
    {
      id: '71-york',
      coord: [],
      name: 'E. 71st St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-york'},
        {dir: 'south', id: '70-york'},
        {dir: 'east', id: '71-fdrd'},
        {dir: 'west', id: '71-1'},
      ],
    }, 
    {
      id: '72-york',
      coord: [],
      name: 'E. 72nd St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-york'},
        {dir: 'south', id: '71-york'},
        {dir: 'east', id: '72-fdrd'},
        {dir: 'west', id: '72-1'},
      ],
    }, 
    {
      id: '73-york',
      coord: [],
      name: 'E. 73rd St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-york'},
        {dir: 'south', id: '72-york'},
        {dir: 'east', id: '73-fdrd'},
        {dir: 'west', id: '73-1'},
      ],
    }, 
    {
      id: '74-york',
      coord: [],
      name: 'E. 74th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-york'},
        {dir: 'south', id: '73-york'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '74-1'},
      ],
    }, 
    {
      id: '75-york',
      coord: [],
      name: 'E. 75th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-york'},
        {dir: 'south', id: '74-york'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '75-1'},
      ],
    }, 
    {
      id: '76-york',
      coord: [],
      name: 'E. 76th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-york'},
        {dir: 'south', id: '75-york'},
        {dir: 'east', id: '76-cher'},
        {dir: 'west', id: '76-1'},
      ],
    }, 
    {
      id: '77-york',
      coord: [],
      name: 'E. 77th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-york'},
        {dir: 'south', id: '76-york'},
        {dir: 'east', id: '77-fdrd', block: 'You cannot go that way'},
        {dir: 'west', id: '77-1'},
      ],
    }, 
    {
      id: '78-york',
      coord: [],
      name: 'E. 78th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-york'},
        {dir: 'south', id: '77-york'},
        {dir: 'east', id: '78-cher'},
        {dir: 'west', id: '78-1'},
      ],
    }, 
    {
      id: '79-york',
      coord: [],
      name: 'E. 79th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '80-york'},
        {dir: 'south', id: '78-york'},
        {dir: 'east', id: '79-fdrd'},
        {dir: 'west', id: '79-1'},
      ],
    }, 
    {
      id: '80-york',
      coord: [],
      name: 'E. 80th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-york'},
        {dir: 'south', id: '79-york'},
        {dir: 'east', id: 'end-fdrd'},
        {dir: 'west', id: '80-1'},
      ],
    }, 
    {
      id: '81-york',
      coord: [],
      name: 'E. 81st St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-york'},
        {dir: 'south', id: '80-york'},
        {dir: 'east', id: '81-fdrd', block: `You can't go that way.`},
        {dir: 'west', id: '81-1'},
      ],
    }, 
    {
      id: '82-york',
      coord: [],
      name: 'E. 82nd St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-york'},
        {dir: 'south', id: '81-york'},
        {dir: 'east', id: '82-york', block: `You can't go that way.`},
        {dir: 'west', id: '82-1'},
      ],
    }, 
    {
      id: '83-york',
      coord: [],
      name: 'E. 83rd St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '84-york'},
        {dir: 'south', id: '82-york'},
        {dir: 'east', id: '83-york', block: `You can't go that way.`},
        {dir: 'west', id: '83-1'},
      ],
    }, 
    {
      id: '84-york',
      coord: [],
      name: 'E. 84th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-york'},
        {dir: 'south', id: '83-york'},
        {dir: 'east', id: '84-york', block: `You can't go that way.`},
        {dir: 'west', id: '84-1'},
      ],
    }, 
    {
      id: '85-york',
      coord: [],
      name: 'E. 85th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-york'},
        {dir: 'south', id: '84-york'},
        {dir: 'east', id: '85-york', block: `You can't go that way.`},
        {dir: 'west', id: '85-1'},
      ],
    }, 
    {
      id: '86-york',
      coord: [],
      name: 'E. 86th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '87-york'},
        {dir: 'south', id: '85-york'},
        {dir: 'east', id: '86-york', block: `You can't go that way.`},
        {dir: 'west', id: '86-1'},
      ],
    }, 
    {
      id: '87-york',
      coord: [],
      name: 'E. 87th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-york'},
        {dir: 'south', id: '86-york'},
        {dir: 'east', id: '87-york', block: `You can't go that way.`},
        {dir: 'west', id: '87-1'},
      ],
    }, 
    {
      id: '88-york',
      coord: [],
      name: 'E. 88th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-york'},
        {dir: 'south', id: '87-york'},
        {dir: 'east', id: '88-york', block: `You can't go that way.`},
        {dir: 'west', id: '88-1'},
      ],
    }, 
    {
      id: '89-york',
      coord: [],
      name: 'E. 89th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-york'},
        {dir: 'south', id: '88-york'},
        {dir: 'east', id: '89-fdrd', block: `You can't go that way.`},
        {dir: 'west', id: '89-1'},
      ],
    }, 
    {
      id: '90-york',
      coord: [],
      name: 'E. 90th St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-york'},
        {dir: 'south', id: '89-york'},
        {dir: 'east', id: '90-york', block: `You can't go that way.`},
        {dir: 'west', id: '90-1'},
      ],
    }, 
    {
      id: '91-york',
      coord: [],
      name: 'E. 91st St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-york'},
        {dir: 'south', id: '90-york'},
        {dir: 'east', id: '91-york', block: `You can't go that way.`},
        {dir: 'west', id: '91-1'},
      ],
    }, 
    {
      id: '92-york',
      coord: [],
      name: 'E. 92nd St. and York Ave.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-1', block: 'You cannot go that way'},
        {dir: 'south', id: '91-york'},
        {dir: 'east', id: '92-york', block: 'You cannot go that way'},
        {dir: 'west', id: '92-1'},
      ],
    },
// Cherokee Pl
    {
      id: '78-cher',
      coord: [],
      name: 'E. 78th St. and Cherokee Pl.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '77-cher'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '78-york'},
      ],
    }, 
    {
      id: '77-cher',
      coord: [],
      name: 'E. 77th St. and Cherokee Pl.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-cher'},
        {dir: 'south', id: '76-cher'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '77-york'},
      ],
    }, 
    {
      id: '76-cher',
      coord: [],
      name: 'E. 76th St. and Cherokee Pl.',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-cher'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '76-york'},
      ],
    }, 
// FDR Streets
    {
      id: '71-fdrd',
      coord: [],
      name: 'E. 71st St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-fdrd'},
        {dir: 'south', id: '93-1', block: 'You cannot go that way'},
        {dir: 'east', id: '94-fdrd', block: 'You cannot go that way'},
        {dir: 'west', id: '71-york'},
      ],
    }, 
    {
      id: '72-fdrd',
      coord: [],
      name: 'E. 72nd St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-fdrd'},
        {dir: 'south', id: '71-fdrd'},
        {dir: 'east', id: '95-fdrd', block: `You can't go that way.`},
        {dir: 'west', id: '72-york'},
      ],
    }, 
    {
      id: '73-fdrd',
      coord: [],
      name: 'E. 73rd St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-fdrd'},
        {dir: 'south', id: '72-fdrd'},
        {dir: 'east', id: '96-fdrd', block: `You can't go that way.`},
        {dir: 'west', id: '73-york'},
      ],
    }, 
    {
      id: '79-fdrd',
      coord: [],
      name: 'E. 79th St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: 'end-fdrd'},
        {dir: 'south', id: '73-fdrd'},
        {dir: 'east', id: '97-fdrd', block: `You can't go that way.`},
        {dir: 'west', id: '79-york'},
      ],
    }, 
    {
      id: 'end-fdrd',
      coord: [],
      name: 'East End Ave. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-fdrd'},
        {dir: 'south', id: '79-fdrd'},
        {dir: 'east', id: '98-fdrd', block: `You can't go that way.`},
        {dir: 'west', id: '80-york'},
      ],
    }, 
    {
      id: '93-fdrd',
      coord: [],
      name: 'E. 93th St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-fdrd'},
        {dir: 'south', id: 'end-fdrd'},
        {dir: 'east', id: '99-fdrd', block: `You can't go that way.`},
        {dir: 'west', id: '93-1'},
      ],
    }, 
    {
      id: '94-fdrd',
      coord: [],
      name: 'E. 94th St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-fdrd'},
        {dir: 'south', id: '93-fdrd'},
        {dir: 'east', id: '100-fdrd', block: 'You cannot go that way'},
        {dir: 'west', id: '94-1'},
      ],
    }, 
    {
      id: '95-fdrd',
      coord: [],
      name: 'E. 95th St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-fdrd'},
        {dir: 'south', id: '94-fdrd'},
        {dir: 'east', id: '101-york', block: `You can't go that way.`},
        {dir: 'west', id: '96-1'},
      ],
    }, 
    {
      id: '96-fdrd',
      coord: [],
      name: 'E. 96th St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '97-fdrd'},
        {dir: 'south', id: '95-fdrd'},
        {dir: 'east', id: '102-fdrd', block: `You can't go that way.`},
        {dir: 'west', id: '96-1'},
      ],
    }, 
    {
      id: '97-fdrd',
      coord: [],
      name: 'E. 97th St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-fdrd'},
        {dir: 'south', id: '96-fdrd'},
        {dir: 'east', id: '103-york', block: 'You cannot go that way'},
        {dir: 'west', id: '97-1'},
      ],
    }, 
    {
      id: '98-fdrd',
      coord: [],
      name: 'E. 98th St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '99-fdrd'},
        {dir: 'south', id: '97-fdrd'},
        {dir: 'east', id: '104-york', block: 'You cannot go that way'},
        {dir: 'west', id: '98-1'},
      ],
    }, 
    {
      id: '99-fdrd',
      coord: [],
      name: 'E. 99th St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '100-fdrd'},
        {dir: 'south', id: '98-fdrd'},
        {dir: 'east', id: '105-fdrd', block: `You can't go that way.`},
        {dir: 'west', id: '100-1'},
      ],
    }, 
    {
      id: '100-fdrd',
      coord: [],
      name: 'E. 100th St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-fdrd'},
        {dir: 'south', id: '99-fdrd'},
        {dir: 'east', id: '106-fdrd', block: `You can't go that way.`},
        {dir: 'west', id: '100-1'},
      ],
    }, 
    {
      id: '102-fdrd',
      exits: [
        {dir: 'north', id: '105-fdrd'},
        {dir: 'south', id: '100-fdrd'},
        {dir: 'east', id: '107-york', block: `You can't go that way.`},
        {dir: 'west', id: '102-1'},
      ],
    }, 
    {
      id: '105-fdrd',
      coord: [],
      name: 'E. 105th St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-fdrd'},
        {dir: 'south', id: '102-fdrd'},
        {dir: 'east', id: '108-york', block: `You can't go that way.`},
        {dir: 'west', id: '105-1'},
      ],
    }, 
    {
      id: '106-fdrd',
      coord: [],
      name: 'E. 106th St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-fdrd'},
        {dir: 'south', id: '105-fdrd'},
        {dir: 'east', id: '109-york', block: `You can't go that way.`},
        {dir: 'west', id: '106-1'},
      ],
    }, 
    {
      id: '110-fdrd',
      coord: [],
      name: 'E. 110th St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-1', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then the Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '106-fdrd'},
        {dir: 'east', id: '110-fdrd', block: 'You cannot go that way'},
        {dir: 'west', id: '110-1'},
      ],
    },
  ]
}