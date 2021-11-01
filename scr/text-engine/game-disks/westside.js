const westside = {
  roomId: '',
  rooms: [
    {
      id: '96-hhpw',
      coord: [],
      name: 'W. 96th St. and Henry Hudson Parkway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '', block: `You can't go that way.`},
        {dir: 'south', id: '79-hhpw'},
        {dir: 'east', id: '96-rive'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '79-hhpw',
      coord: [],
      name: 'W. 79th St. and Henry Hudson Parkway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-hhpw'},
        {dir: 'south', id: '72-hhpw'},
        {dir: 'east', id: '79-rive'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '72-hhpw',
      coord: [],
      name: 'W. 72nd St. and Henry Hudson Parkway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-hhpw'},
        {dir: 'south', id: '57-hhpw'},
        {dir: 'east', id: '72-rive'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    //Riverside Drive
    {
      id: '110-rive',
      coord: [],
      name: 'W. 110th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-rive'},
        {dir: 'east', id: '110-broa'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '109-rive',
      coord: [],
      name: 'W. 109th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-rive'},
        {dir: 'south', id: '108-rive'},
        {dir: 'east', id: '109-broa'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '108-rive',
      coord: [],
      name: 'W. 108th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-rive'},
        {dir: 'south', id: '107-rive'},
        {dir: 'east', id: '108-broa'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '107-rive',
      coord: [],
      name: 'W. 107th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-rive'},
        {dir: 'south', id: '106-rive'},
        {dir: 'east', id: '107-broa'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '106-rive',
      coord: [],
      name: 'W. 106th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-rive'},
        {dir: 'south', id: '106-rive'},
        {dir: 'east', id: '106-broa'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '105-rive',
      coord: [],
      name: 'W. 105th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-rive'},
        {dir: 'south', id: '104-rive'},
        {dir: 'east', id: '105-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '104-rive',
      coord: [],
      name: 'W. 104th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-rive'},
        {dir: 'south', id: '103-rive'},
        {dir: 'east', id: '104-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '103-rive',
      coord: [],
      name: 'W. 103th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-rive'},
        {dir: 'south', id: '102-rive'},
        {dir: 'east', id: '103-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '102-rive',
      coord: [],
      name: 'W. 102nd St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-rive'},
        {dir: 'south', id: '101-rive'},
        {dir: 'east', id: '102-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '101-rive',
      coord: [],
      name: 'W. 101st St. and Riverside Dr. ',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-rive'},
        {dir: 'south', id: '100-rive'},
        {dir: 'east', id: '101-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '100-rive',
      coord: [],
      name: 'W. 100th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-rive'},
        {dir: 'south', id: '99-rive'},
        {dir: 'east', id: '100-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '99-rive',
      coord: [],
      name: 'W. 99th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '100-rive'},
        {dir: 'south', id: '98-rive'},
        {dir: 'east', id: '99-rive'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '98-rive',
      coord: [],
      name: 'W. 98th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '99-rive'},
        {dir: 'south', id: '97-rive'},
        {dir: 'east', id: '98-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '97-rive',
      coord: [],
      name: 'W. 97th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-rive'},
        {dir: 'south', id: '96-rive'},
        {dir: 'east', id: '97-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '96-rive',
      coord: [],
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
      coord: [],
      name: 'W. 95th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-rive'},
        {dir: 'south', id: '94-rive'},
        {dir: 'east', id: '95-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '94-rive',
      coord: [],
      name: 'W. 94th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-rive'},
        {dir: 'south', id: '93-rive'},
        {dir: 'east', id: '94-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '93-rive',
      coord: [],
      name: 'W. 93rd St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-rive'},
        {dir: 'south', id: '92-rive'},
        {dir: 'east', id: '93-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '92-rive',
      coord: [],
      name: 'W. 92nd St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-rive'},
        {dir: 'south', id: '91-rive'},
        {dir: 'east', id: '92-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '91-rive',
      coord: [],
      name: 'W. 91st St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-rive'},
        {dir: 'south', id: '90-rive'},
        {dir: 'east', id: '91-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '90-rive',
      coord: [],
      name: 'W. 90th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-rive'},
        {dir: 'south', id: '89-rive'},
        {dir: 'east', id: '90-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '89-rive',
      coord: [],
      name: 'W. 89th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-rive'},
        {dir: 'south', id: '88-rive'},
        {dir: 'east', id: '89-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '88-rive',
      coord: [],
      name: 'W. 88th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-rive'},
        {dir: 'south', id: '87-rive'},
        {dir: 'east', id: '88-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '87-rive',
      coord: [],
      name: 'W. 87th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-rive'},
        {dir: 'south', id: '86-rive'},
        {dir: 'east', id: '87-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '86-rive',
      coord: [],
      name: 'W. 86th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '87-rive'},
        {dir: 'south', id: '85-rive'},
        {dir: 'east', id: '86-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '85-rive',
      coord: [],
      name: 'W. 85th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-rive'},
        {dir: 'south', id: 'epoe-rive'},
        {dir: 'east', id: ''},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: 'epoe-rive',
      coord: [],
      name: 'Edgar Allen Poe St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-rive'},
        {dir: 'south', id: '83-rive'},
        {dir: 'east', id: 'epoe-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '83-rive',
      coord: [],
      name: 'W. 83rd St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'epoe-rive'},
        {dir: 'south', id: '82-rive'},
        {dir: 'east', id: '83-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '82-rive',
      coord: [],
      name: 'W. 82nd St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-rive'},
        {dir: 'south', id: '81-rive'},
        {dir: 'east', id: '82-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '81-rive',
      coord: [],
      name: 'W. 81st St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-rive'},
        {dir: 'south', id: '80-rive'},
        {dir: 'east', id: '81-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '80-rive',
      coord: [],
      name: 'W. 80th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-rive'},
        {dir: 'south', id: '79-rive'},
        {dir: 'east', id: '80-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '79-rive',
      coord: [],
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
      coord: [],
      name: 'W. 78th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-rive'},
        {dir: 'south', id: '77-rive'},
        {dir: 'east', id: '78-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '77-rive',
      coord: [],
      name: 'W. 77th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-rive'},
        {dir: 'south', id: '76-rive'},
        {dir: 'east', id: '77-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '76-rive',
      coord: [],
      name: 'W. 76th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-rive'},
        {dir: 'south', id: '75-rive'},
        {dir: 'east', id: '76-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '75-rive',
      coord: [],
      name: 'W. 75th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-rive'},
        {dir: 'south', id: '74-rive'},
        {dir: 'east', id: '75-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '74-rive',
      coord: [],
      name: 'W. 74th St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-rive'},
        {dir: 'south', id: '73-rive'},
        {dir: 'east', id: '74-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '73-rive',
      coord: [],
      name: 'W. 73rd St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-rive'},
        {dir: 'south', id: '72-rive'},
        {dir: 'east', id: '73-wend'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '72-rive',
      coord: [],
      name: 'W. 72nd St. and Riverside Dr.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-rive'},
        {dir: 'south', id: '', block: `You can't go that way.`},
        {dir: 'east', id: '72-wend'},
        {dir: 'west', id: '72-hhpw'},
      ]
    },
    {
      id: '105-wend',
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
      name: 'W. 102nd St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-wend'},
        {dir: 'south', id: '105-wend'},
        {dir: 'east', id: '102-broa'},
        {dir: 'west', id: '102-rive'},
      ]
    },
    {
      id: '101-wend',
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
      name: 'W. 97th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-wend'},
        {dir: 'south', id: '96-wend'},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: '97-rive'},
      ]
    },
    {
      id: '96-wend',
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
      name: 'W. 85th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-wend'},
        {dir: 'south', id: '86-wend'},
        {dir: 'east', id: '85-broa'},
        {dir: 'west', id: '85-rive'},
      ]
    },
    {
      id: 'epoe-wend',
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
      name: 'W. 71st St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-wend'},
        {dir: 'south', id: '70-wend'},
        {dir: 'east', id: '71-broa'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '70-wend',
      coord: [],
      name: 'W. 70th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '71-wend'},
        {dir: 'south', id: '69-wend'},
        {dir: 'east', id: '70-amst'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '66-wend',
      coord: [],
      name: 'W. 66th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-wend'},
        {dir: 'south', id: '65-wend'},
        {dir: 'east', id: '66-amst'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '65-wend',
      coord: [],
      name: 'W. 65th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '66-wend'},
        {dir: 'south', id: '64-wend'},
        {dir: 'east', id: '65-amst'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '64-wend',
      coord: [],
      name: 'W. 64th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '65-wend'},
        {dir: 'south', id: '63-wend'},
        {dir: 'east', id: '64-amst'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '63-wend',
      coord: [],
      name: 'W. 63rd St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-wend'},
        {dir: 'south', id: '61-wend'},
        {dir: 'east', id: '63-amst'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '61-wend',
      coord: [],
      name: 'W. 61st St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-wend'},
        {dir: 'south', id: '60-wend'},
        {dir: 'east', id: '61-amst'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '60-wend',
      coord: [],
      name: 'W. 60th St. and West End Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-wend'},
        {dir: 'south', id: '59-wend'},
        {dir: 'east', id: '60-amst'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '59-wend',
      coord: [],
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
    {
      id: '110-broa',
      coord: [],
      name: 'W. 110th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-broa'},
        {dir: 'east', id: '110-amst'},
        {dir: 'west', id: '110-rive'},
      ]
    },
    {
      id: '109-broa',
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
      name: 'W. 106th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-broa'},
        {dir: 'south', id: '105-broa'},
        {dir: 'east', id: '106-amst'},
        {dir: 'west', id: '106-rive'},
      ]
    },
    //COME BACK HERE
    {
      id: 'wend-broa',
      coord: [],
      name: 'West End Ave. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-broa'},
        {dir: 'south', id: '105-wend'},
        {dir: 'east', id: '105-broa'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '105-broa',
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
      name: 'W. 97th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-broa'},
        {dir: 'south', id: '96-broa'},
        {dir: 'east', id: '97-amst'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '96-broa',
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
      name: 'W. 85th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-broa'},
        {dir: 'south', id: '84-broa'},
        {dir: 'east', id: '85-amst'},
        {dir: 'west', id: '85-wend'},
      ]
    },
    {
      id: '84-broa',
      coord: [],
      name: 'W. 84th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-broa'},
        {dir: 'south', id: '83-broa'},
        {dir: 'east', id: '84-amst'},
        {dir: 'west', id: '84-wend'},
      ]
    },
    {
      id: '83-broa',
      coord: [],
      name: 'W. 83rd St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '84-broa'},
        {dir: 'south', id: '82-broa'},
        {dir: 'east', id: '83-amst'},
        {dir: 'west', id: '83-wend'},
      ]
    },
    {
      id: '82-broa',
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
      name: 'W. 72nd St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-broa'},
        {dir: 'south', id: '71-broa'},
        {dir: 'east', id: '72-amst'},
        {dir: 'west', id: '72-wend'},
      ]
    },
    {
      id: '71-broa',
      coord: [],
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
      coord: [],
      name: 'W. 70th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '', block: `You can't go that way.`},
        {dir: 'south', id: '69-broa'},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: '70-amst'},
      ]
    },
    {
      id: '69-broa',
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
      name: 'W. 64th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'broa-colu'},
        {dir: 'south', id: '63-broa'},
        {dir: 'east', id: '64-cprk'},
        {dir: 'west', id: '64-colu'},
      ]
    },
    {
      id: '63-broa',
      coord: [],
      name: 'W. 64th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-broa'},
        {dir: 'south', id: '62-broa'},
        {dir: 'east', id: '63-cprk'},
        {dir: 'west', id: '63-colu'},
      ]
    },
    {
      id: '62-broa',
      coord: [],
      name: 'W. 62nd St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '63-broa'},
        {dir: 'south', id: '61-broa'},
        {dir: 'east', id: '62-cprk'},
        {dir: 'west', id: '62-colu'},
      ]
    },
    {
      id: '61-broa',
      coord: [],
      name: 'W. 61st St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '62-broa'},
        {dir: 'south', id: '60-broa'},
        {dir: 'east', id: '61-cprk'},
        {dir: 'west', id: '61-colu'},
      ]
    },
    {
      id: '60-broa',
      coord: [],
      name: 'W. 60th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '61-broa'},
        {dir: 'south', id: '59-broa'},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: '60'},
      ]
    },
    {
      id: '59-broa',
      coord: [],
      name: 'W. 59th St. and Broadway',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '60-broa'},
        {dir: 'south', id: 'broa-8'},
        {dir: 'east', id: '59-cprk'},
        {dir: 'west', id: '59-colu'},
      ]
    },
    {
      id: '110-amst',
      coord: [],
      name: 'W. 110th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-amst'},
        {dir: 'east', id: '110-colu'},
        {dir: 'west', id: '110-broa'},
      ]
    },
    {
      id: '109-amst',
      coord: [],
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
      coord: [],
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
      coord: [],
      name: 'W. 107th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-amst'},
        {dir: 'south', id: '106-amst'},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: '107-broa'},
      ]
    },
    {
      id: '106-amst',
      coord: [],
      name: 'W. 106th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-amst'},
        {dir: 'south', id: '105-amst'},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: '106-broa'},
      ]
    },
    {
      id: '105-amst',
      coord: [],
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
      coord: [],
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
      coord: [],
      name: 'W. 103rd St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-amst'},
        {dir: 'south', id: '102-amst'},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: '103-broa'},
      ]
    },
    {
      id: '102-amst',
      coord: [],
      name: 'W. 102nd St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-amst'},
        {dir: 'south', id: '101-amst'},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: '102-broa'},
      ]
    },
    {
      id: '101-amst',
      coord: [],
      name: 'W. 101st St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-amst'},
        {dir: 'south', id: '100-amst'},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: '101-broa'},
      ]
    },
    {
      id: '100-amst',
      coord: [],
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
      coord: [],
      name: 'W. 99th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '100-amst'},
        {dir: 'south', id: '98-amst'},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: '99-broa'},
      ]
    },
    {
      id: '98-amst',
      coord: [],
      name: 'W. 98th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '99-amst'},
        {dir: 'south', id: '97-amst'},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: '98-broa'},
      ]
    },
    {
      id: '97-amst',
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
      name: 'W. 70th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '-amst'},
        {dir: 'south', id: '69-amst'},
        {dir: 'east', id: '70-broa'},
        {dir: 'west', id: '70-wend'},
      ]
    },
    {
      id: '69-amst',
      coord: [],
      name: 'W. 69th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-amst'},
        {dir: 'south', id: '68-amst'},
        {dir: 'east', id: '69-broa'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '68-amst',
      coord: [],
      name: 'W. 68th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '69-amst'},
        {dir: 'south', id: '67-amst'},
        {dir: 'east', id: '68-broa'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '67-amst',
      coord: [],
      name: 'W. 67th St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '68-amst'},
        {dir: 'south', id: '66-amst'},
        {dir: 'east', id: '67-broa'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '66-amst',
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
      name: 'W. 62nd St. and Amsterdam Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-amst'},
        {dir: 'south', id: '61-amst'},
        {dir: 'east', id: '62-colu'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '61-amst',
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
      name: 'W. 110th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-colu'},
        {dir: 'east', id: '110-manh'},
        {dir: 'west', id: '110-amst'},
      ]
    },
    {
      id: '109-colu',
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
      name: 'W. 97th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '100-colu'},
        {dir: 'south', id: '96-colu'},
        {dir: 'east', id: '97-cprk'},
        {dir: 'west', id: '97-amst'},
      ]
    },
    {
      id: '96-colu',
      coord: [],
      name: 'W. 96th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '97-colu'},
        {dir: 'south', id: '95-colu'},
        {dir: 'east', id: '96-cprk'},
        {dir: 'west', id: '96-amst'},
      ]
    },
    {
      id: '95-colu',
      coord: [],
      name: 'W. 95th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '96-colu'},
        {dir: 'south', id: '94-colu'},
        {dir: 'east', id: '95-cprk'},
        {dir: 'west', id: '95-amst'},
      ]
    },
    {
      id: '94-colu',
      coord: [],
      name: 'W. 94th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-colu'},
        {dir: 'south', id: '93-colu'},
        {dir: 'east', id: '94-cprk'},
        {dir: 'west', id: '94-amst'},
      ]
    },
    {
      id: '93-colu',
      coord: [],
      name: 'W. 93rd St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-colu'},
        {dir: 'south', id: '92-colu'},
        {dir: 'east', id: '93-cprk'},
        {dir: 'west', id: '93-amst'},
      ]
    },
    {
      id: '92-colu',
      coord: [],
      name: 'W. 92nd St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-colu'},
        {dir: 'south', id: '91-colu'},
        {dir: 'east', id: '92-cprk'},
        {dir: 'west', id: '92-amst'},
      ]
    },
    {
      id: '91-colu',
      coord: [],
      name: 'W. 91st St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-colu'},
        {dir: 'south', id: '90-colu'},
        {dir: 'east', id: '91-cprk'},
        {dir: 'west', id: '91-amst'},
      ]
    },
    {
      id: '90-colu',
      coord: [],
      name: 'W. 90th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-colu'},
        {dir: 'south', id: '89-colu'},
        {dir: 'east', id: '90-cprk'},
        {dir: 'west', id: '90-amst'},
      ]
    },
    {
      id: '89-colu',
      coord: [],
      name: 'W. 89th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-colu'},
        {dir: 'south', id: '88-colu'},
        {dir: 'east', id: '89-cprk'},
        {dir: 'west', id: '89-amst'},
      ]
    },
    {
      id: '88-colu',
      coord: [],
      name: 'W. 88th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-colu'},
        {dir: 'south', id: '87-colu'},
        {dir: 'east', id: '88-cprk'},
        {dir: 'west', id: '88-amst'},
      ]
    },
    {
      id: '87-colu',
      coord: [],
      name: 'W. 87th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-colu'},
        {dir: 'south', id: '86-colu'},
        {dir: 'east', id: '87-cprk'},
        {dir: 'west', id: '87-amst'},
      ]
    },
    {
      id: '86-colu',
      coord: [],
      name: 'W. 86th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '87-colu'},
        {dir: 'south', id: '85-colu'},
        {dir: 'east', id: '86-cprk'},
        {dir: 'west', id: '86-amst'},
      ]
    },
    {
      id: '85-colu',
      coord: [],
      name: 'W. 85th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-colu'},
        {dir: 'south', id: 'epoe-colu'},
        {dir: 'east', id: '85-cprk'},
        {dir: 'west', id: '85-amst'},
      ]
    },
    {
      id: 'epoe-colu',
      coord: [],
      name: 'Edgar Allen Poe St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-colu'},
        {dir: 'south', id: '83-colu'},
        {dir: 'east', id: 'epoe-cprk'},
        {dir: 'west', id: 'epoe-amst'},
      ]
    },
    {
      id: '83-colu',
      coord: [],
      name: 'W. 83rd St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'epoe-colu'},
        {dir: 'south', id: '82-colu'},
        {dir: 'east', id: '83-cprk'},
        {dir: 'west', id: '83-amst'},
      ]
    },
    {
      id: '82-colu',
      coord: [],
      name: 'W. 82nd St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-colu'},
        {dir: 'south', id: '81-colu'},
        {dir: 'east', id: '82-cprk'},
        {dir: 'west', id: '82-amst'},
      ]
    },
    {
      id: '81-colu',
      coord: [],
      name: 'W. 81st St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-colu'},
        {dir: 'south', id: '80-colu'},
        {dir: 'east', id: '81-cprk'},
        {dir: 'west', id: '81-amst'},
      ]
    },
    {
      id: '80-colu',
      coord: [],
      name: 'W. 80th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '81-colu'},
        {dir: 'south', id: '79-colu'},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: '80-amst'},
      ]
    },
    {
      id: '79-colu',
      coord: [],
      name: 'W. 79th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '80-colu'},
        {dir: 'south', id: '78-colu'},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: '79-amst'},
      ]
    },
    {
      id: '78-colu',
      coord: [],
      name: 'W. 78th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '79-colu'},
        {dir: 'south', id: '77-colu'},
        {dir: 'east', id: '', block: `You can't go that way.`},
        {dir: 'west', id: '78-amst'},
      ]
    },
    {
      id: '77-colu',
      coord: [],
      name: 'W. 77th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-colu'},
        {dir: 'south', id: '76-colu'},
        {dir: 'east', id: '77-cprk'},
        {dir: 'west', id: '77-amst'},
      ]
    },
    {
      id: '76-colu',
      coord: [],
      name: 'W. 76th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-colu'},
        {dir: 'south', id: '75-colu'},
        {dir: 'east', id: '76-cprk'},
        {dir: 'west', id: '77-amst'},
      ]
    },
    {
      id: '75-colu',
      coord: [],
      name: 'W. 75th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-colu'},
        {dir: 'south', id: '74-colu'},
        {dir: 'east', id: '75-cprk'},
        {dir: 'west', id: '75-amst'},
      ]
    },
    {
      id: '74-colu',
      coord: [],
      name: 'W. 74th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-colu'},
        {dir: 'south', id: '73-colu'},
        {dir: 'east', id: '74-cprk'},
        {dir: 'west', id: '74-amst'},
      ]
    },
    {
      id: '73-colu',
      coord: [],
      name: 'W. 73rd St. and Columbus Ave.',
      desc: 'You see an alley here that seems to be used for making deliveries to the Dakota.',
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-colu'},
        {dir: 'south', id: '72-colu'},
        {dir: 'east', id: '73-cprk'},
        {dir: 'west', id: '73-amst'},
        {dir: 'alley', id: '', block: `You have the sense that from somewhere in the building someone is looking at you. Not wanting to gain the attention of the police, you hurry back to the street.`}
      ]
    },
    {
      id: '72-colu',
      coord: [],
      name: 'W. 72nd St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-colu'},
        {dir: 'south', id: '71-colu'},
        {dir: 'east', id: '72-cprk'},
        {dir: 'west', id: '72-amst'},
      ]
    },
    {
      id: '71-colu',
      coord: [],
      name: 'W. 71st St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-colu'},
        {dir: 'south', id: '70-colu'},
        {dir: 'east', id: '71-cprk'},
        {dir: 'west', id: '71-amst'},
      ]
    },
    {
      id: '70-colu',
      coord: [],
      name: 'W. 70th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '71-colu'},
        {dir: 'south', id: '69-colu'},
        {dir: 'east', id: '71-cprk'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '69-colu',
      coord: [],
      name: 'W. 69th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-colu'},
        {dir: 'south', id: '68-colu'},
        {dir: 'east', id: '69-cprk'},
        {dir: 'west', id: '69-broa'},
      ]
    },
    {
      id: '68-colu',
      coord: [],
      name: 'W. 68th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '69-colu'},
        {dir: 'south', id: '67-colu'},
        {dir: 'east', id: '68-cprk'},
        {dir: 'west', id: '68-broa'},
      ]
    },
    {
      id: '67-colu',
      coord: [],
      name: 'W. 67th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '68-colu'},
        {dir: 'south', id: '66-colu'},
        {dir: 'east', id: '67-cprk'},
        {dir: 'west', id: '67-broa'},
      ]
    },
    {
      id: '66-colu',
      coord: [],
      name: 'W. 66th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '67'},
        {dir: 'south', id: '65'},
        {dir: 'east', id: '66-cprk'},
        {dir: 'west', id: '66-broa'},
      ]
    },
    {
      id: '65-colu',
      coord: [],
      name: 'W. 65th St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '66-colu'},
        {dir: 'south', id: 'broa-colu'},
        {dir: 'east', id: '65-cprk'},
        {dir: 'west', id: '65-broa'},
      ]
    },
    {
      id: 'broa-colu',
      coord: [],
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
      coord: [],
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
      coord: [],
      name: 'W. 63rd St. and Columbus Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '64-colu'},
        {dir: 'south', id: '62-colu'},
        {dir: 'east', id: '63-broa'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '62-colu',
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
      name: 'W. 110th St. and ',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-manh'},
        {dir: 'east', id: '110-cprk'},
        {dir: 'west', id: '110-colu'},
      ]
    },
    {
      id: '109-manh',
      coord: [],
      name: 'W.  St. and ',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-manh'},
        {dir: 'south', id: '108-manh'},
        {dir: 'east', id: '109-cprk'},
        {dir: 'west', id: '109-colu'},
      ]
    },
    {
      id: '108-manh',
      coord: [],
      name: 'W. 108th St. and ',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-manh'},
        {dir: 'south', id: '107-manh'},
        {dir: 'east', id: '108-cprk'},
        {dir: 'west', id: '108-colu'},
      ]
    },
    {
      id: '107-manh',
      coord: [],
      name: 'W. 107th St. and ',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-manh'},
        {dir: 'south', id: '106-manh'},
        {dir: 'east', id: '107-cprk'},
        {dir: 'west', id: '107-colu'},
      ]
    },
    {
      id: '106-manh',
      coord: [],
      name: 'W. 106th St. and ',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-manh'},
        {dir: 'south', id: '105-manh'},
        {dir: 'east', id: '106-cprk'},
        {dir: 'west', id: '106-colu'},
      ]
    },
    {
      id: '105-manh',
      coord: [],
      name: 'W. 105th St. and ',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-manh'},
        {dir: 'south', id: '104-manh'},
        {dir: 'east', id: '105-cprk'},
        {dir: 'west', id: '105-colu'},
      ]
    },
    {
      id: '104-manh',
      coord: [],
      name: 'W. 104th St. and ',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-manh'},
        {dir: 'south', id: '103-manh'},
        {dir: 'east', id: '104-cprk'},
        {dir: 'west', id: '104-colu'},
      ]
    },
    {
      id: '103-manh',
      coord: [],
      name: 'W. 103rd St. and ',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-manh'},
        {dir: 'south', id: '102-manh'},
        {dir: 'east', id: '103-cprk'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '102-manh',
      coord: [],
      name: 'W. 102nd St. and ',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-manh'},
        {dir: 'south', id: '101-manh'},
        {dir: 'east', id: '102-cprk'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '101-manh',
      coord: [],
      name: 'W. 101st St. and ',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-manh'},
        {dir: 'south', id: '100-manh'},
        {dir: 'east', id: '101-cprk'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '100-manh',
      coord: [],
      name: 'W. 100th St. and ',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-manh'},
        {dir: 'south', id: '', block: `You can't go that way.`},
        {dir: 'east', id: '100-cprk'},
        {dir: 'west', id: '100-colu'},
      ]
    },  {
      id: '110-cprk',
      coord: [],
      name: 'W. 110th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '', block: `North of here is Harlem, or Columbia, and north of those is the Bronx, and north of the Bronx is Yonkers, and then Catskills, the Adirondacks, Montreal, the Arctic Circle, and finally the North Pole itself, but you decide, wisely, that venturing any further north in search of your identity or even a pleasanter life would be wasted effort. Wasn't it Horace Greely who said, "Go south, young man"?`},
        {dir: 'south', id: '109-cprk'},
        {dir: 'east', id: '110-'},
        {dir: 'west', id: '110-manh'},
      ]
    },
    {
      id: '109-cprk',
      coord: [],
      name: 'W. 109th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '110-cprk'},
        {dir: 'south', id: '108-cprk'},
        {dir: 'east', id: '109'},
        {dir: 'west', id: '109-manh'},
      ]
    },
    {
      id: '108-cprk',
      coord: [],
      name: 'W. 108th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '109-cprk'},
        {dir: 'south', id: '107-cprk'},
        {dir: 'east', id: '108-'},
        {dir: 'west', id: '108-manh'},
      ]
    },
    {
      id: '107-cprk',
      coord: [],
      name: 'W. 107th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '108-cprk'},
        {dir: 'south', id: '106-cprk'},
        {dir: 'east', id: '107-'},
        {dir: 'west', id: '107-manh'},
      ]
    },
    {
      id: '106-cprk',
      coord: [],
      name: 'W. 106th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '107-cprk'},
        {dir: 'south', id: '105-cprk'},
        {dir: 'east', id: '106-'},
        {dir: 'west', id: '106-manh'},
      ]
    },
    {
      id: '105-cprk',
      coord: [],
      name: 'W. 105th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '106-cprk'},
        {dir: 'south', id: '104-cprk'},
        {dir: 'east', id: '105-'},
        {dir: 'west', id: '105-manh'},
      ]
    },
    {
      id: '104-cprk',
      coord: [],
      name: 'W. 104th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '105-cprk'},
        {dir: 'south', id: '103-cprk'},
        {dir: 'east', id: '104-'},
        {dir: 'west', id: '104-manh'},
      ]
    },
    {
      id: '103-cprk',
      coord: [],
      name: 'W. 103rd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '104-cprk'},
        {dir: 'south', id: '102-cprk'},
        {dir: 'east', id: '103-'},
        {dir: 'west', id: '103-manh'},
      ]
    },
    {
      id: '102-cprk',
      coord: [],
      name: 'W. 102nd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '103-cprk'},
        {dir: 'south', id: '101-cprk'},
        {dir: 'east', id: '102-'},
        {dir: 'west', id: '102-manh'},
      ]
    },
    {
      id: '101-cprk',
      coord: [],
      name: 'W. 101st St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '102-cprk'},
        {dir: 'south', id: '100-cprk'},
        {dir: 'east', id: '101-'},
        {dir: 'west', id: '101-manh'},
      ]
    },
    {
      id: '100-cprk',
      coord: [],
      name: 'W. 100th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '101-cprk'},
        {dir: 'south', id: '99-cprk'},
        {dir: 'east', id: '100-'},
        {dir: 'west', id: '100-manh'},
      ]
    },
    {
      id: '99-cprk',
      coord: [],
      name: 'W. 99th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '100-cprk'},
        {dir: 'south', id: '98-cprk'},
        {dir: 'east', id: '99-'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '98-cprk',
      coord: [],
      name: 'W. 98th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '99-cprk'},
        {dir: 'south', id: '97-cprk'},
        {dir: 'east', id: '98-'},
        {dir: 'west', id: '', block: `You can't go that way.`},
      ]
    },
    {
      id: '97-cprk',
      coord: [],
      name: 'W. 97th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '98-cprk'},
        {dir: 'south', id: '96-cprk'},
        {dir: 'east', id: '97-'},
        {dir: 'west', id: '97-colu'},
      ]
    },
    {
      id: '96-cprk',
      coord: [],
      name: 'W. 96th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '97-cprk'},
        {dir: 'south', id: '95-cprk'},
        {dir: 'east', id: '96-'},
        {dir: 'west', id: '96-colu'},
      ]
    },
    {
      id: '95-cprk',
      coord: [],
      name: 'W. 95th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '96'},
        {dir: 'south', id: '94'},
        {dir: 'east', id: '95-'},
        {dir: 'west', id: '95-colu'},
      ]
    },
    {
      id: '94-cprk',
      coord: [],
      name: 'W. 94th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '95-cprk'},
        {dir: 'south', id: '93-cprk'},
        {dir: 'east', id: '94-'},
        {dir: 'west', id: '94-colu'},
      ]
    },
    {
      id: '93-cprk',
      coord: [],
      name: 'W. 93rd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '94-cprk'},
        {dir: 'south', id: '92-cprk'},
        {dir: 'east', id: '93-'},
        {dir: 'west', id: '93-colu'},
      ]
    },
    {
      id: '92-cprk',
      coord: [],
      name: 'W. 92nd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '93-cprk'},
        {dir: 'south', id: '91-cprk'},
        {dir: 'east', id: '92-'},
        {dir: 'west', id: '92-colu'},
      ]
    },
    {
      id: '91-cprk',
      coord: [],
      name: 'W. 91st St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '92-cprk'},
        {dir: 'south', id: '90-cprk'},
        {dir: 'east', id: '91-'},
        {dir: 'west', id: '91-colu'},
      ]
    },
    {
      id: '90-cprk',
      coord: [],
      name: 'W. 90th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '91-cprk'},
        {dir: 'south', id: '89-cprk'},
        {dir: 'east', id: '90-'},
        {dir: 'west', id: '90-colu'},
      ]
    },
    {
      id: '89-cprk',
      coord: [],
      name: 'W. 89th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '90-cprk'},
        {dir: 'south', id: '88-cprk'},
        {dir: 'east', id: '89-'},
        {dir: 'west', id: '89-colu'},
      ]
    },
    {
      id: '88-cprk',
      coord: [],
      name: 'W. 88th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '89-cprk'},
        {dir: 'south', id: '87-cprk'},
        {dir: 'east', id: '88-'},
        {dir: 'west', id: '88-colu'},
      ]
    },
    {
      id: '87-cprk',
      coord: [],
      name: 'W. 87th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '88-cprk'},
        {dir: 'south', id: '86-cprk'},
        {dir: 'east', id: '87-'},
        {dir: 'west', id: '87-colu'},
      ]
    },
    {
      id: '86-cprk',
      coord: [],
      name: 'W. 86th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '87-cprk'},
        {dir: 'south', id: '85-cprk'},
        {dir: 'east', id: '86-'},
        {dir: 'west', id: '86-colu'},
      ]
    },
    {
      id: '85-cprk',
      coord: [],
      name: 'W. 85th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '86-cprk'},
        {dir: 'south', id: 'epoe-cprk'},
        {dir: 'east', id: '85-'},
        {dir: 'west', id: '85-colu'},
      ]
    },
    {
      id: 'epoe-cprk',
      coord: [],
      name: 'Edgar Allen Poe St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '85-cprk'},
        {dir: 'south', id: '83-cprk'},
        {dir: 'east', id: '84-'},
        {dir: 'west', id: '84-colu'},
      ]
    },
    {
      id: '83-cprk',
      coord: [],
      name: 'W. 83rd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: 'epoe-cprk'},
        {dir: 'south', id: '82-cprk'},
        {dir: 'east', id: '83-'},
        {dir: 'west', id: '83-colu'},
      ]
    },
    {
      id: '82-cprk',
      coord: [],
      name: 'W. 82nd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '83-cprk'},
        {dir: 'south', id: '81-cprk'},
        {dir: 'east', id: '82-'},
        {dir: 'west', id: '82-colu'},
      ]
    },
    {
      id: '81-cprk',
      coord: [],
      name: 'W. 81st St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '82-cprk'},
        {dir: 'south', id: '80-cprk'},
        {dir: 'east', id: '81-'},
        {dir: 'west', id: '81-colu'},
      ]
    },
    {
      id: '77-cprk',
      coord: [],
      name: 'W. 77th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '78-cprk'},
        {dir: 'south', id: '76-cprk'},
        {dir: 'east', id: '77-'},
        {dir: 'west', id: '77-colu'},
      ]
    },
    {
      id: '76-cprk',
      coord: [],
      name: 'W. 76th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '77-cprk'},
        {dir: 'south', id: '75-cprk'},
        {dir: 'east', id: '76-'},
        {dir: 'west', id: '76-colu'},
      ]
    },
    {
      id: '75-cprk',
      coord: [],
      name: 'W. 75th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '76-cprk'},
        {dir: 'south', id: '74-cprk'},
        {dir: 'east', id: '75-'},
        {dir: 'west', id: '75-colu'},
      ]
    },
    {
      id: '74-cprk',
      coord: [],
      name: 'W. 74th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '75-cprk'},
        {dir: 'south', id: '73-cprk'},
        {dir: 'east', id: '74-'},
        {dir: 'west', id: '74-colu'},
      ]
    },
    {
      id: '73-cprk',
      coord: [],
      name: 'W. 73rd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '74-cprk'},
        {dir: 'south', id: '72-cprk'},
        {dir: 'east', id: '73-'},
        {dir: 'west', id: '73-colu'},
      ]
    },
    {
      id: '72-cprk',
      coord: [],
      name: 'W. 72nd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '73-cprk'},
        {dir: 'south', id: '71-cprk'},
        {dir: 'east', id: '72-'},
        {dir: 'west', id: '72-colu'},
      ]
    },
    {
      id: '71-cprk',
      coord: [],
      name: 'W. 71st St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '72-cprk'},
        {dir: 'south', id: '70-cprk'},
        {dir: 'east', id: '71-'},
        {dir: 'west', id: '71-colu'},
      ]
    },
    {
      id: '70-cprk',
      coord: [],
      name: 'W. 70th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '71-cprk'},
        {dir: 'south', id: '69-cprk'},
        {dir: 'east', id: '70-'},
        {dir: 'west', id: '70-colu'},
      ]
    },
    {
      id: '69-cprk',
      coord: [],
      name: 'W. 69th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '70-cprk'},
        {dir: 'south', id: '68-cprk'},
        {dir: 'east', id: '69-'},
        {dir: 'west', id: '69-colu'},
      ]
    },
    {
      id: '68-cprk',
      coord: [],
      name: 'W. 68th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '69-cprk'},
        {dir: 'south', id: '67-cprk'},
        {dir: 'east', id: '68-'},
        {dir: 'west', id: '68-colu'},
      ]
    },
    {
      id: '67-cprk',
      coord: [],
      name: 'W. 67th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '68-cprk'},
        {dir: 'south', id: '66-cprk'},
        {dir: 'east', id: '67-'},
        {dir: 'west', id: '67-colu'},
      ]
    },
    {
      id: '66-cprk',
      coord: [],
      name: 'W. 66th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '67-cprk'},
        {dir: 'south', id: '65-cprk'},
        {dir: 'east', id: '66-'},
        {dir: 'west', id: '66-colu'},
      ]
    },
    {
      id: '65-cprk',
      coord: [],
      name: 'W. 65th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '66-cprk'},
        {dir: 'south', id: '64-cprk'},
        {dir: 'east', id: '65-'},
        {dir: 'west', id: '65-colu'},
      ]
    },
    {
      id: '64-cprk',
      coord: [],
      name: 'W. 64th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '65-cprk'},
        {dir: 'south', id: '63'},
        {dir: 'east', id: '64-'},
        {dir: 'west', id: '64-broa'},
      ]
    },
    {
      id: '63-cprk',
      coord: [],
      name: 'W. 63rd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '64'},
        {dir: 'south', id: '62'},
        {dir: 'east', id: '63-'},
        {dir: 'west', id: '63-broa'},
      ]
    },
    {
      id: '62-cprk',
      coord: [],
      name: 'W. 62nd St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '63'},
        {dir: 'south', id: '61'},
        {dir: 'east', id: '62-'},
        {dir: 'west', id: '62-broa'},
      ]
    },
    {
      id: '61-cprk',
      coord: [],
      name: 'W. 61st St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '62'},
        {dir: 'south', id: '60'},
        {dir: 'east', id: '61-'},
        {dir: 'west', id: '61-broa'},
      ]
    },
    {
      id: '59-cprk',
      coord: [],
      name: 'W. 59th St. and Central Park W.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '60-cprk'},
        {dir: 'south', id: '58-8'},
        {dir: 'east', id: '59-'},
        {dir: 'west', id: '59-broa'},
      ]
    }
  ]
}