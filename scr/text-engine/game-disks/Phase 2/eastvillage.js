const eastVillage = {
  roomId: '',
  rooms: [
    {
      id: '14-broa',
      coord: [],
      name: 'E. 14th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: ''},
        {dir: 'south', id: '13-broa'},
        {dir: 'east', id: '14-4'},
        {dir: 'west', id: ''},
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
        {dir: 'west', id: ''},
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
        {dir: 'west', id: ''},
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
        {dir: 'west', id: ''},
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
        {dir: 'west', id: ''},
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
        {dir: 'west', id: ''},
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
        {dir: 'east', id: ''},
        {dir: 'west', id: ''},
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
        {dir: 'east', id: ''},
        {dir: 'west', id: ''},
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
        {dir: 'east', id: ''},
        {dir: 'west', id: ''},
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
        {dir: 'east', id: ''},
        {dir: 'west', id: ''},
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
        {dir: 'east', id: ''},
        {dir: 'west', id: ''},
      ]
    },
    {
      id: '3-broa',
      coord: [],
      name: 'W. 3rd St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '4-broa'},
        {dir: 'south', id: 'bond-broa'},
        {dir: 'east', id: ''},
        {dir: 'west', id: ''},
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
        {dir: 'east', id: ''},
        {dir: 'west', id: ''},
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
        {dir: 'west', id: ''},
      ]
    },
    {
      id: 'blee-cros',
      coord: [],
      name: 'Bleecker St. and Crosby St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '', block: `You can't go that way.`},
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
        {dir: 'north', id: '', block: `You can't go that way.`},
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
        {dir: 'west', id: '', block: `You can't go that way.`},
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
        {dir: 'south', id: ''},
        {dir: 'east', id: 'hous-mott'},
        {dir: 'west', id: 'hous-lafa'},
      ]
    },
    {
      id: 'blee-mott',
      coord: [],
      name: 'Bleecker St. and Lafayette St.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '', block: `You can't go that way.`},
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
        {dir: 'north', id: '', block: `You can't go that way.`},
        {dir: 'south', id: 'hous-eliz'},
        {dir: 'east', id: 'blee-bowe'},
        {dir: 'west', id: 'blee-mott'},
      ]
    },
    {
      id: '14-4',
      coord: [],
      name: 'E. 14th St. and 4th Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: ''},
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
        {dir: 'north', id: ''},
        {dir: 'south', id: '', block: `You can't go that way.`},
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
        {dir: 'north', id: '', block: `You can't go that way.`},
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
      exits: [
        {dir: 'north', id: ''},
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
        {dir: 'west', id: '', block: `You can't go that way.`},
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
        {dir: 'west', id: '', block: `You can't go that way.`},
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
        {dir: 'west', id: '', block: `You can't go that way.`},
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
        {dir: 'west', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '14-2',
      coord: [],
      name: 'E. 14th St. and 2nd Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: ''},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
      exits: [
        {dir: 'north', id: ''},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '1-1'},
        {dir: 'south', id: ''},
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
        {dir: 'north', id: '', block: `You can't go that way.`},
        {dir: 'south', id: ''},
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
        {dir: 'north', id: '', block: `You can't go that way.`},
        {dir: 'south', id: ''},
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
        {dir: 'north', id: '???'},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'west', id: '', block: `You can't go that way.`},
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
        {dir: 'south', id: ''},
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
        {dir: 'north', id: '', block: `You can't go that way.`},
        {dir: 'south', id: ''},
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
        {dir: 'north', id: '', block: `You can't go that way.`},
        {dir: 'south', id: ''},
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
        {dir: 'north', id: '???'},
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
        {dir: 'west', id: '', block: `You can't go that way.`},
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
        {dir: 'west', id: '', block: `You can't go that way.`},
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
        {dir: 'west', id: '', block: `You can't go that way.`},
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
        {dir: 'south', id: ''},
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
        {dir: 'north', id: '', block: `You can't go that way.`},
        {dir: 'south', id: ''},
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
        {dir: 'north', id: '', block: `You can't go that way.`},
        {dir: 'south', id: ''},
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
        {dir: 'north', id: '', block: `You can't go that way.`},
        {dir: 'south', id: ''},
        {dir: 'east', id: 'hous-pitt'},
        {dir: 'west', id: '2-aveb'},
      ]
    },
    {
      id: '14-avec',
      coord: [],
      name: 'E. 14th and Ave. C',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: ''},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
      desc: '',
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
      desc: '',
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
      exits: [
        {dir: 'north', id: '3-avec'},
        {dir: 'south', id: ''},
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
        {dir: 'north', id: '15-aved'},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'south', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'south', id: ''},
        {dir: 'east', id: 'hous-baru'},
        {dir: 'west', id: 'hous-pitt'},
      ]
    },
    {
      id: 'hous-brau',
      coord: [],
      name: 'E. Houston St. and Baruch Pl.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '', block: `You can't go that way.`},
        {dir: 'south', id: ''},
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
        {dir: 'north', id: '', block: `You can't go that way.`},
        {dir: 'south', id: ''},
        {dir: 'east', id: 'hous-fdrd'},
        {dir: 'west', id: ''},
      ]
    },
    {
      id: '15-aved',
      coord: [],
      name: 'E. 15th St. and Ave. D',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '16-aved'},
        {dir: 'south', id: '14-aved'},
        {dir: 'east', id: '15-fdrd'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '16-aved',
      coord: [],
      name: 'E. 16th St. and Ave. D',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: ''},
        {dir: 'south', id: '15-aved'},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '15-fdrd',
      coord: [],
      name: 'E. 15th St. and FDR Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: ''},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'south', id: '', block: `You can't go that way.`},
        {dir: 'east', id: '', block: `You can't go that way.`},
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
        {dir: 'north', id: ''},
        {dir: 'south', id: '10-erdr'},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: '15-fdrd'},
      ]
    },
    {
      id: '10-erdr',
      coord: [],
      name: 'E. 15th St. and East River Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '15-erdr'},
        {dir: 'south', id: ''},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: '10-fdrd'},
      ]
    }
  ]
}