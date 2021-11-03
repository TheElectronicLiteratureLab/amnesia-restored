/*
Red - Normal Streets
Bright Red - Subway Entrances
Blue - Little Italy Streets
Pink - Soho Streets
Purple - Lower East Side Streets
Green - Lower Manhattan Streets
*/
const chinaTown = {
  roomId: 'lisp-broa',
  rooms: [
    {
      id: 'lisp-broa',
      coord: [],
      name: 'Lispenard St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'cana-broa'},
        {dir: 'south', id: 'walk-broa'},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: ''},
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
        {dir: 'west', id: ''},
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
        {dir: 'west', id: ''},
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
        {dir: 'west', id: ''},
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
        {dir: 'south', id: ''},
        {dir: 'east', id: 'leon-bens'},
        {dir: 'west', id: ''},
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
        {dir: 'south', id: '', block: `You can't go that way.`},
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
        {dir: 'north', id: '', block: `You can't go that way.`},
        {dir: 'south', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'south', id: ''},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'west', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'south', id: ''},
        {dir: 'east', id: 'wort-park'},
        {dir: 'west', id: ''},
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
        {dir: 'south', id: ''},
        {dir: 'east', id: 'wort-mulb'},
        {dir: 'west', id: 'wort-baxt'},
      ]
    },
    {
      id: 'wort-mulb',
      coord: [],
      name: 'Worth St. and Mulberry St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'park-mulb'},
        {dir: 'south', id: ''},
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
        {dir: 'west', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'south', id: '', block: `You can't go that way.`},
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
        {dir: 'south', id: ''},
        {dir: 'east', id: 'broa-stja'},
        {dir: 'west', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'south', id: ''},
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
        {dir: 'west', id: ''},
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
        {dir: 'south', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: ''},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'north', id: '', block: `You can't go that way.`},
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
        {dir: 'west', id: '', block: `You can't go that way.`},
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
        {dir: 'north', id: '', block: `You can't go that way.`},
        {dir: 'south', id: '', block: `You can't go that way.`},
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
        {dir: 'south', id: '', block: `You can't go that way.`},
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
        {dir: 'south', id: ''},
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
        {dir: 'south', id: ''},
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
        {dir: 'south', id: ''},
        {dir: 'east', id: 'henr-mark'},
        {dir: 'west', id: ''},
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
        {dir: 'south', id: '', block: `You can't go that way.`},
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
        {dir: 'south', id: ''},
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
        {dir: 'south', id: '', block: `You can't go that way.`},
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
        {dir: 'north', id: '', block: `You can't go that way.`},
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
        {dir: 'south', id: '', block: `You can't go that way.`},
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
        {dir: 'south', id: ''},
        {dir: 'east', id: 'henr-jeff'},
        {dir: 'west', id: 'henr-pike'},
      ]
    },
  ]
}