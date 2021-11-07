const chelsea = {
  roomId: '34-12',//unique room identifier
  rooms: [
    {
      id: '34-hhpw',
      coord: [],
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
      coord: [],
      name: '',
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
      coord: [],
      name: '',
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
      coord: [],
      name: 'W. 34th St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '39-12'},
        {dir: 'south', id: '33-12'},
        {dir: 'east', id: '34-11'},
        {dir: 'west', id: '34-hhpw'}
      ],
    },
    {
      id: '33-12',
      coord: [],
      name: 'W. 33rd St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '34-12'},
        {dir: 'south', id: '30-12'},
        {dir: 'east', id: '33-11'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '30-12',
      coord: [],
      name: 'W. 30th St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '33-12'},
        {dir: 'south', id: '29-12'},
        {dir: 'east', id: '30-11'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '29-12',
      coord: [],
      name: 'W. 29th St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '30-12'},
        {dir: 'south', id: '28-12'},
        {dir: 'east', id: '29-11'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '28-12',
      coord: [],
      name: 'W. 28th St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '29-12'},
        {dir: 'south', id: '27-12'},
        {dir: 'east', id: '28-11'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },      
    {
      id: '27-12',
      coord: [],
      name: 'W. 27th St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '28-12'},
        {dir: 'south', id: '26-12'},
        {dir: 'east', id: '27-11'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '26-12',
      coord: [],
      name: 'W. 26th St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '27-12'},
        {dir: 'south', id: '25-12'},
        {dir: 'east', id: '26-11'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '24-12',
      coord: [],
      name: 'W. 24th St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '26-12'},
        {dir: 'south', id: '23-12'},
        {dir: 'east', id: '24-11'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '23-12',
      coord: [],
      name: 'W. 23rd St. and 12th Ave.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '24-12'},
        {dir: 'south', id: '22-12'},
        {dir: 'east', id: '23-11'},
        {dir: 'west', id: '23-hhpw'}
      ],
    },
    {
      id: '22-12',
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      coord: [],
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
      id: '34-11',
      coord: [],
      name: 'W. 34th St. and 11th Ave.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '35-11'},
        {dir: 'south', id: '33-11'},
        {dir: 'east', id: '34-10'},
        {dir: 'west', id: '34-12'}
      ],
    },
    {
      id: '33-11',
      coord: [],
      name: 'W. 33rd St. and 11th Ave.',
      desc: ``,
      isStreet: true,
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
        {dir: 'north', id: '23-11'},
        {dir: 'south', id: '12-12'},
        {dir: 'east', id: '22-10'},
        {dir: 'west', id: '23-12'}
      ],
    },
        //10th Ave
    {
      id: '34-10',
      coord: [],
      name: 'W. 34th St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '35-10'},
        {dir: 'south', id: '33-10'},
        {dir: 'east', id: '34-9'},
        {dir: 'west', id: '34-11'},
      ],
    },
    {
      id: '33-10',
      coord: [],
      name: 'W. 33rd St. and 10th Ave.',
      desc: ``,
      isStreet: true,
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
        {dir: 'north', id: '15-10'},
        {dir: 'south', id: '13-10'},
        {dir: 'east', id: '14-9'},
        {dir: 'west', id: '14-12'},
      ],
    },
        //9th Ave
    {
      id: '34-dyer',
      coord: [],
      name: 'W. 34th St. and Dyer Ave.',
      desc: '',
      isStreet: true,
      exits: [
        {dir: 'north', id: '35-dyer'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '34-9'},
        {dir: 'west', id: '34-10'},
      ]
    },        
    {
      id: '34-9',
      coord: [],
      name: 'W. 34th St. and 9th Ave.',
      desc: `There is a restaurant called Nedicks here.`,
      isStreet: true,
      exits:[
        {dir: 'north', id: '35-9'},
        {dir: 'south', id: '33-9'},
        {dir: 'east', id: '34-8'},
        {dir: 'west', id: '34-dyer'}
      ],
    },
    {
      id: '33-9',
      coord: [],
      name: 'W. 33rd St. and 9th Ave.',
      desc: ``,
      isStreet: true,
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
        {dir: 'north', id: '15-9'},
        {dir: 'south', id: '13-9'},
        {dir: 'east', id: '14-8'},
        {dir: 'west', id: '14-10'},
      ],
    },
        //8th Ave
    {
      id: '34-8',
      coord: [],
      name: 'W. 34th St. and 8th Ave.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '35-8'},
        {dir: 'south', id: '33-8'},
        {dir: 'east', id: '34-7'},
        {dir: 'west', id: '34-9'}
      ],
    },
    {
      id: '33-8',
      coord: [],
      name: 'W. 33rd St. and 8th Ave.',
      desc: ``,
      isStreet: true,
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      id: '34-7',
      coord: [],
      name: 'W. 34th St. and 7th Ave.',
      desc: `The 34 ST-7 AV Station entrance is at this corner.`,
      isStreet: true,
      exits:[
        {dir: 'north', id: '35-7'},
        {dir: 'south', id: '33-7'},
        {dir: 'east', id: '34-broa'},
        {dir: 'west', id: '34-8'}
      ],
    },
    {
      id: '33-7',
      coord: [],
      name: 'W. 33rd St. and 7th Ave.',
      desc: `You face the block-long staircase and colonnade of the main Post Office. The famous motto is carved in stone all the way from 32nd Street To 33rd: NEITHER SNOW NOR RAIN NOR HEAT NOR GLOOM OF NIGHT STAYS THESE COURIERS FROM THE SWIFT COMPLETION OF THEIR APPOINTED ROUNDS.`,
      isStreet: true,
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
        {dir: 'north', id: 'amer-broa'},
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
        {dir: 'north', id: '19-broa'},
        {dir: 'south', id: '17-broa'},
        {dir: 'east', id: '18-park'},
        {dir: 'west', id: '18-5'},
      ],
    },
    {
      id: '17-broa',
      coord: [],
      name: 'W. 17th St. and Broadway',
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
        {dir: 'north', id: '24-5'},
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
        {dir: 'north', id: '23-madi'},
        {dir: 'south', id: '25-madi'},
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
      exits:[
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
      name: 'W. 17th St. and Union Square W.',
      desc: ``,
      isStreet: true,
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
        {dir: 'north', id: '15-usqe'},
        {dir: 'south', id: '14-usqe'},
        {dir: 'east', id: '14-4'},
        {dir: 'west', block: `You can't go that way.`}
      ],
    },
    {
      id: '14-usqe',
      coord: [],
      name: 'E. 14th St. and Union Square E.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '4-usqe'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '14-irvi'},
        {dir: 'west', id: '14-broa'}
      ],
    },

    //Park Ave
    {
      id: '34-park',
      coord: [],
      name: 'E. 34th St. and Park Ave.',
      desc: ``,
      isStreet: true,
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      desc: `Ther is a luncheonette on the corner.`,
      isStreet: true,
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
        {dir: 'north', id: '19-park'},
        {dir: 'south', id: '17-unio-2'},
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
        {dir: 'north', id: '16-irvi'},
        {dir: 'south', id: '14-irvi'},
        {dir: 'east', id: '15-3'},
        {dir: 'west', id: '15-usqe'}
      ],
    },
    {
      id: '14-irvi',
      coord: [],
      name: 'E. 14th St. and Irving Pl.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '15-irvi'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '14-3'},
        {dir: 'west', id: '14-4'}
      ],
    },
        //3rd Ave
    {
      id: '34-3',
      coord: [],
      name: 'E. 34th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '35-3'},
        {dir: 'south', id: '33-3'},
        {dir: 'east', id: '34-qtou'},
        {dir: 'west', id: '34-lexi'}
      ],
    },
    {
      id: '33-3',
      coord: [],
      name: 'E. 33rd St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
        {dir: 'north', id: '16-3'},
        {dir: 'south', id: '14-3'},
        {dir: 'east', id: '15-ruth'},
        {dir: 'west', id: '15-irvi'}
      ],
    },
    {
      id: '14-3',
      coord: [],
      name: 'E. 14th St. and 3rd Ave.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '15-3'},
        {dir: 'south', id: '13-3'},
        {dir: 'east', id: '14-2'},
        {dir: 'west', id: '14-irvi'}
      ],
    },
        //2nd Ave
    {
      id: '34-2',
      coord: [],
      name: 'E. 34th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '35-2'},
        {dir: 'south', id: '33-2'},
        {dir: 'east', id: '34-qtin'},
        {dir: 'west', id: '34-qtou'},
      ],
    },
    {
      id: '33-2',
      coord: [],
      name: 'E. 33rd St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
        {dir: 'north', id: '17-2'},
        {dir: 'south', id: '14-2'},
        {dir: 'east', id: '15-perl'},
        {dir: 'west', id: '15-ruth'},
      ],
    },
    {
      id: '14-2',
      coord: [],
      name: 'E. 14th St. and 2nd Ave.',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '15-2'},
        {dir: 'south', id: '13-2'},
        {dir: 'east', id: '14-1'},
        {dir: 'west', id: '14-3'},
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
        {dir: 'north', id: '16-1'},
        {dir: 'south', id: '14-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '15-perl'}
      ],
    },
    {
      id: '14-1',
      coord: [],
      name: 'W. 14th St. and 1st Ave.',
      desc: `The 14 ST-1 AV Station entrance is at this corner.`,
      isStreet: true,
      exits:[
        {dir: 'north', id: '15-1'},
        {dir: 'south', id: '13-1'},
        {dir: 'east', id: '14-avea'},
        {dir: 'west', id: '14-2'}
      ],
    },
        //Misc streets E. side of map
    {
      id: '34-qtou',
      coord: [],
      name: 'E. 34th St. and Queens Tunnel OUT',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '35-qtou'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '34-2' },
        {dir: 'west', id: '34-3'}
      ],
    },
    {
      id: '34-qtin',
      coord: [],
      name: 'E. 34th St. and Queens Tunnel IN',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '35-qtin'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '34-1'},
        {dir: 'west', id: '34-2'}
      ],
    },
    {
      id: '34-fdrd',
      coord: [],
      name: 'E. 34th St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits:[
        {dir: 'north', id: '41-fdrd'},
        {dir: 'south', id: '25-fdrd'},
        {dir: 'east', id: `You can't go that way.`},
        {dir: 'west', id: '34-1'}
      ],
    },
    {
      id: '25-fdrd',
      coord: [],
      name:'E. 25th St. and FDR Drive',
      desc: ``,
      isStreet: true,
      exits:[
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
      exits:[
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
      exits:[
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
      exits:[
        {dir: 'north', id: '25-asse'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'west', id: '23-1'},
        {dir: 'east', id: '23-fdrd'}
      ],
    }
  ],
}
