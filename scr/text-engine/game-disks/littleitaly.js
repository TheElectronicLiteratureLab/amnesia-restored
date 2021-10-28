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
                {dir: 'south', id: ''},
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
                {dir: 'north', id: ''},
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
                {dir: 'east', id: ''},
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
                {dir: 'north', id: 'hest-cent'},
                {dir: 'south', id: ''},
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
                {dir: 'north', id: ''},
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
                {dir: 'south', id: ''},
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
                {dir: 'north', id: ''},
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
                {dir: 'east', id: ''},
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
                {dir: 'south', id: ''},
                {dir: 'east', id: 'cana-mot'},
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
                {dir: 'north', id: ''},
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
                {dir: 'east', id: ''},
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
                {dir: 'south', id: ''},
                {dir: 'east', id: ''},
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
                {dir: 'north', id: ''},
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
                {dir: 'south', id: ''},
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
                {dir: 'north', id: ''},
                {dir: 'south', id: 'stan-bowe'},
                {dir: 'east', id: ''},
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
                {dir: 'north', id: 'stan-bow'},
                {dir: 'south', id: 'rivi-bowe'},
                {dir: 'east', id: ''},
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
                {dir: 'north', id: 'rivi-bowe'},
                {dir: 'south', id: 'kenm-bowe'},
                {dir: 'east', id: ''},
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
                {dir: 'south', id: ''},
                {dir: 'east', id: ''},
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
                {dir: 'east', id: ''},
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
                {dir: 'south', id: ''},
                {dir: 'east', id: ''},
                {dir: 'west', id: 'gran-eliz'},
            ]
        }
    ]
}