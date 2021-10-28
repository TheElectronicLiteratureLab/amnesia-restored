const littleItaly = {
    roomId: 'hous-broa',
    rooms: [
        {
            id: 'hous-broa',
			coord: [],
            name: 'W. Houston St. and Broadway',
            desc: '',
            isStreet: true,
            exits: [
                {dir: 'north', id: ''},
                {dir: 'south', id: 'prin-broa'},
                {dir: 'east', id: 'hous-cros'},
                {dir: 'west', id: ''},
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
                {dir: 'west', id: ''},
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
                {dir: 'west', id: ''},
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
                {dir: 'west', id: ''},
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
                {dir: 'west', id: ''},
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
                {dir: 'west', id: ''},
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
                {dir: 'south', id: ''},
                {dir: 'east', id: 'cana-cort'},
                {dir: 'west', id: ''},
            ]
        },
        {
            id: 'hous-cros',
			coord: [],
            name: 'E. Houston St. and Crosby St.',
            desc: '',
            isStreet: true,
            exits: [
                {dir: 'north', id: ''},
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
                {dir: 'west', id: ''},
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
                {dir: 'south', id: ''},
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
                {dir: 'north', id: ''},
                {dir: 'south', id: ''},
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
                {dir: 'north', id: ''},
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
                {dir: 'west', id: ''},
            ]
        },
        {
            id: 'broo-lafa',
			coord: [],
            name: 'Broome St. and Lafayette St.',
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
            id: 'gran-lafa',
			coord: [],
            name: 'Grand St. and Lafayette St.',
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
            id: 'howa-lafa',
			coord: [],
            name: 'Howard St. and Lafayette St.',
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
            id: 'cana-lafa',
			coord: [],
            name: 'Canal St. and Lafayette St.',
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
            id: 'spri-cent',
			coord: [],
            name: 'Spring St. and Centre St.',
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
            id: 'kenm-cent',
			coord: [],
            name: 'Kenmare St. and Centre St.',
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
            id: 'broo-cent',
			coord: [],
            name: 'Broome St. and Centre St.',
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
            id: 'gran-cent',
			coord: [],
            name: 'Grand St. and Centre St.',
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
            id: 'howa-cent',
			coord: [],
            name: 'Howard St. and Centre St.',
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
            id: 'hest-cent',
			coord: [],
            name: 'Hester St. and Centre St.',
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
            id: 'cana-cent',
			coord: [],
            name: 'Canal St. and Centre St.',
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
            id: 'broo-baxt',
			coord: [],
            name: 'Broome St. and Baxter St.',
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
            id: 'gran-baxt',
			coord: [],
            name: 'Grand St. and Baxter St.',
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
            id: 'hest-baxt',
			coord: [],
            name: 'Hester St. and Baxter St.',
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
            id: 'cana-baxt',
			coord: [],
            name: 'Canal St. and Baxter St.',
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
            id: 'hous-mulb',
			coord: [],
            name: 'E. Houston St. and Mulberry St.',
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
            id: 'jers-mulb',
			coord: [],
            name: 'Jersey St. and Mulberry St.',
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
            id: 'prin-mulb',
			coord: [],
            name: 'Prince St. and Mulberry St.',
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
            id: 'spri-mulb',
			coord: [],
            name: 'Spring St. and Mulberry St.',
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
            id: 'kenm-mulb',
			coord: [],
            name: 'Kenmare St. and Mulberry St.',
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
            id: 'broo-mulb',
			coord: [],
            name: 'Broome St. and Mulberry St.',
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
            id: 'gran-mulb',
			coord: [],
            name: 'Grand St. and Mulberry St.',
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
            id: 'hest-mulb',
			coord: [],
            name: 'Hester St. and Mulberry St.',
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
            id: 'cana-mulb',
			coord: [],
            name: 'Canal St. and Mulberry St.',
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
            id: 'hous-mott',
			coord: [],
            name: 'E. Houston St. and Mott St.',
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
            id: 'prin-mott',
			coord: [],
            name: 'Prince St. and Mott St.',
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
            id: 'spri-mott',
			coord: [],
            name: 'Spring St. and Mott St.',
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
            id: 'kenm-mott',
			coord: [],
            name: 'Kenmare St. and Mott St.',
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
            id: 'broo-mott',
			coord: [],
            name: 'Broome St. and Mott St.',
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
            id: 'gran-mott',
			coord: [],
            name: 'Grand St. and Mott St.',
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
            id: 'hest-mott',
			coord: [],
            name: 'Hester St. and Mott St.',
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
            id: 'cana-mott',
			coord: [],
            name: 'Canal St. and Mott St.',
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
            id: 'hous-eliz',
			coord: [],
            name: 'E. Houston St and Elizabeth St.',
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
            id: 'prin-eliz',
			coord: [],
            name: 'Prince St. and Elizabeth St.',
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
            id: 'spri-eliz',
			coord: [],
            name: 'Spring St. and Elizabeth St.',
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
            id: 'kenm-eliz',
			coord: [],
            name: 'Kenmare St. and Elizabeth St.',
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
            id: 'broo-eliz',
			coord: [],
            name: 'Broome St. and Elizabeth St.',
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
            id: 'gran-eliz',
			coord: [],
            name: 'Grand St. and Elizabeth St.',
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
            id: 'hous-bowe',
			coord: [],
            name: 'E. Houston St. and Bowery St.',
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
            id: 'stan-bowe',
			coord: [],
            name: 'Stanton St. and Bowery St.',
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
            id: 'prin-bowe',
			coord: [],
            name: 'Prince St. and Bowery St.',
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
            id: 'rivi-bowe',
			coord: [],
            name: 'Rivington St. and Bowery St.',
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
            id: 'spri-bowe',
			coord: [],
            name: 'Spring St. and Bowery St.',
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
            id: 'kenm-bowe',
			coord: [],
            name: 'Kenmare St. and Bowery St.',
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
            id: 'broo-bowe',
			coord: [],
            name: 'Broome St. and Bowery St.',
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
            id: 'gran-bowe',
			coord: [],
            name: 'Grand St. and Bowery St.',
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