const lowerEast = {
    roomId: '',
    currPos: [],
    rooms: [
        {
            isStreets: true,
            coord: [],
            id: 'hous-bowe',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'stan-bowe' },
                { dir: ['east'], id: 'hous-chry' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-chry',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'stan-chry' },
                { dir: ['east'], id: 'hou-fors' },
                { dir: ['west'], id: 'hous-bowe'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-fors',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'stan-fors' },
                { dir: ['east'], id: 'hous-eldr' },
                { dir: ['west'], id: 'hous-chry'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-eldr',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'stan-fors' },
                { dir: ['east'], id: 'hous-alle' },
                { dir: ['west'], id: 'hous-fors'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-alle',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'stan-alle' },
                { dir: ['east'], id: 'hous-orch' },
                { dir: ['west'], id: 'hous-eldr'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-orch',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'stan-orch' },
                { dir: ['east'], id: 'hous-1' },
                { dir: ['west'], id: 'hous-alle'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-1',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'hous-ludl' },
                { dir: ['west'], id: 'hous-orch'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-ludl',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'stan-ludl' },
                { dir: ['east'], id: 'hous-esse' },
                { dir: ['west'], id: 'hous-1'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-esse',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'stan-esse' },
                { dir: ['east'], id: 'hous-norf' },
                { dir: ['west'], id: 'hous-ludl'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-norf',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'stan-norf' },
                { dir: ['east'], id: 'hous-suff' },
                { dir: ['west'], id: 'hous-esse'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-suff',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'stan-suff' },
                { dir: ['east'], id: 'hous-clin' },
                { dir: ['west'], id: 'hous-norf'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-clin',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'stan-clin' },
                { dir: ['east'], id: 'hous-atto' },
                { dir: ['west'], id: 'hous-suff'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-atto',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'stan-atto' },
                { dir: ['east'], id: 'hous-ridg' },
                { dir: ['west'], id: 'hous-clin'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-ridg',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'stan-ridg' },
                { dir: ['east'], id: 'hous-2' },
                { dir: ['west'], id: 'hous-atto'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-2',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'hous-pitt' },
                { dir: ['west'], id: 'hous-ridg'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-pitt',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'stan-pitt' },
                { dir: ['east'], id: 'hous-colu' },
                { dir: ['west'], id: 'hous-2'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-colu',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'rivi-colu' },
                { dir: ['east'], id: 'hous-baru' },
                { dir: ['west'], id: 'hous-pitt'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-baru',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'new-baru' },
                { dir: ['east'], id: 'hous-mang' },
                { dir: ['west'], id: 'hous-colu'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-mang',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'new-mang' },
                { dir: ['east'], id: 'hous-fdrd' },
                { dir: ['west'], id: 'hous-baru'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-fdrd',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '????' },
                { dir: ['south'], id: 'dela-fdrd' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'hous-mang'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-bowe',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-bowe' },
                { dir: ['south'], id: 'prin-bowe' },
                { dir: ['east'], id: 'stan-chry' },
                { dir: ['west'], id: '????'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-chry',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-chry' },
                { dir: ['south'], id: 'rivi-chry' },
                { dir: ['east'], id: 'stan-fors' },
                { dir: ['west'], id: 'stan-bowe'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-fors',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-fors' },
                { dir: ['south'], id: 'rivi-fors' },
                { dir: ['east'], id: 'stan-eldr' },
                { dir: ['west'], id: 'stan-chry'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-eldr',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-eldr' },
                { dir: ['south'], id: 'rivi-eldr' },
                { dir: ['east'], id: 'stan-alle' },
                { dir: ['west'], id: 'stan-fors'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-alle',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-alle' },
                { dir: ['south'], id: 'rivi-alle' },
                { dir: ['east'], id: 'stan-orch' },
                { dir: ['west'], id: 'stan-eldr'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-orch',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-orch' },
                { dir: ['south'], id: 'rici-orch' },
                { dir: ['east'], id: 'stan-ludl' },
                { dir: ['west'], id: 'stan-alle'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-ludl',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-ludl' },
                { dir: ['south'], id: 'rivi-ludl' },
                { dir: ['east'], id: 'stan-esse' },
                { dir: ['west'], id: 'stan-orch'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-esse',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-esse' },
                { dir: ['south'], id: 'rivi-esse' },
                { dir: ['east'], id: 'stan-norf' },
                { dir: ['west'], id: 'stan-ludl'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-norf',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-norf' },
                { dir: ['south'], id: 'rivi-norf' },
                { dir: ['east'], id: 'stan-suff' },
                { dir: ['west'], id: 'stan-esse'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-suff',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-suff' },
                { dir: ['south'], id: 'rivi-suff' },
                { dir: ['east'], id: 'stan-clin' },
                { dir: ['west'], id: 'stan-norf'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-clin',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-clin' },
                { dir: ['south'], id: 'rivi-clin' },
                { dir: ['east'], id: 'stan-atto' },
                { dir: ['west'], id: 'stan-suff'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-atto',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-atto' },
                { dir: ['south'], id: 'rivi-atto' },
                { dir: ['east'], id: 'stan-ridg' },
                { dir: ['west'], id: 'stan-clin'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-ridg',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-ridg' },
                { dir: ['south'], id: 'rivi-ridg' },
                { dir: ['east'], id: 'stan-pitt' },
                { dir: ['west'], id: 'stan-atto'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-pitt',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-pitt' },
                { dir: ['south'], id: 'rivi-pitt' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'stan-ridg'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'new-baru',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-baru' },
                { dir: ['south'], id: '', block: `You can't go that way` },
                { dir: ['east'], id: 'new-mang', },
                { dir: ['west'], id: '', block: `You can't go that way` }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'new-mang',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-mang' },
                { dir: ['south'], id: '', block: `You can't go that way` },
                { dir: ['east'], id: '', block: `You can't go that way` },
                { dir: ['west'], id: 'new-baru'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'prin-bowe',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'stan-bowe' },
                { dir: ['south'], id: 'rivi-bowe' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: '????'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-bowe',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'prin-bowe' },
                { dir: ['south'], id: 'spri-bowe' },
                { dir: ['east'], id: 'rivi-chrys' },
                { dir: ['west'], id: '????'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-chry',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'stan-chry' },
                { dir: ['south'], id: 'dela-chry' },
                { dir: ['east'], id: 'rivi-fors' },
                { dir: ['west'], id: 'rivi-bowe'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-fors',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'stan-fors' },
                { dir: ['south'], id: 'dela-fors' },
                { dir: ['east'], id: 'rivi-eldr' },
                { dir: ['west'], id: 'rivi-chrys'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-eldr',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'stan-eldr' },
                { dir: ['south'], id: 'dela-eldr' },
                { dir: ['east'], id: 'rivi-alle' },
                { dir: ['west'], id: 'rivi-fors'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-alle',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'stan-alle' },
                { dir: ['south'], id: 'dela-alle' },
                { dir: ['east'], id: 'rivi-orch' },
                { dir: ['west'], id: 'rivi-eldr'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-orch',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'stan-orch' },
                { dir: ['south'], id: 'dela-orch' },
                { dir: ['east'], id: 'rivi-ludl' },
                { dir: ['west'], id: 'rivi-alle'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-ludl',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'stan-ludl' },
                { dir: ['south'], id: 'dela-ludl' },
                { dir: ['east'], id: 'rivi-esse' },
                { dir: ['west'], id: 'rivi-orch'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-esse',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'stan-esse' },
                { dir: ['south'], id: 'dela-esse' },
                { dir: ['east'], id: 'rivi-norf' },
                { dir: ['west'], id: 'rivi-ludl'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-norf',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'stan-norf' },
                { dir: ['south'], id: 'dela-norf' },
                { dir: ['east'], id: 'rivi-suff' },
                { dir: ['west'], id: 'rivi-esse'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-suff',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'stan-suff' },
                { dir: ['south'], id: 'dela-suff' },
                { dir: ['east'], id: 'rivi-clin' },
                { dir: ['west'], id: 'rivi-norf'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-clin',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'stan-clin' },
                { dir: ['south'], id: 'dela-clin' },
                { dir: ['east'], id: 'rivi-atto' },
                { dir: ['west'], id: 'rivi-suff'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-atto',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'stan-atto' },
                { dir: ['south'], id: 'dela-atto' },
                { dir: ['east'], id: 'rivi-ridg' },
                { dir: ['west'], id: 'rivi-clin'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-ridg',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'stan-ridg' },
                { dir: ['south'], id: 'dela-ridg' },
                { dir: ['east'], id: 'rivi-pitt' },
                { dir: ['west'], id: 'rivi-atto'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-pitt',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'stan-pitt' },
                { dir: ['south'], id: 'dela-pitt' },
                { dir: ['east'], id: 'rivi-colu' },
                { dir: ['west'], id: 'rivi-ridg'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-colu',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-colu' },
                { dir: ['south'], id: 'dela-colu' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: '', block: `You can't go that way.`}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'spri-bowe',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'rivi-bowe' },
                { dir: ['south'], id: 'kenm-bowe' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: '????'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'kenm-bowe',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'spri-bowe' },
                { dir: ['south'], id: 'broo-bowe' },
                { dir: ['east'], id: 'dela-chry ' },
                { dir: ['west'], id: '????'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'dela-chry',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'rivi-chry' },
                { dir: ['south'], id: 'broo-chry' },
                { dir: ['east'], id: 'dela-fors' },
                { dir: ['west'], id: 'kenm-bowe' }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'dela-fors',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'rivi-fors' },
                { dir: ['south'], id: 'broo-fors' },
                { dir: ['east'], id: 'dela-eldr' },
                { dir: ['west'], id: 'dela-chry'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'dela-eldr',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'rivi-eldr' },
                { dir: ['south'], id: 'broo-eldr' },
                { dir: ['east'], id: 'dela-alle' },
                { dir: ['west'], id: 'dela-fors'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'dela-alle',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'rivi-alle' },
                { dir: ['south'], id: 'broo-alle' },
                { dir: ['east'], id: 'dela-orch' },
                { dir: ['west'], id: 'dela-eldr'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'dela-orch',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'rivi-orch' },
                { dir: ['south'], id: 'broo-orch' },
                { dir: ['east'], id: 'dela-ludl' },
                { dir: ['west'], id: 'dela-alle'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'dela-ludl',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'rivi-ludl' },
                { dir: ['south'], id: 'broo-ludl' },
                { dir: ['east'], id: 'dela-esse' },
                { dir: ['west'], id: 'dela-orch'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'dela-esse',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'rivi-esse' },
                { dir: ['south'], id: 'broo-esse' },
                { dir: ['east'], id: 'dela-norf' },
                { dir: ['west'], id: 'dela-ludl'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'dela-norf',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'rivi-norf' },
                { dir: ['south'], id: 'broo-norf' },
                { dir: ['east'], id: 'dela-suff' },
                { dir: ['west'], id: 'dela-esse'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'dela-suff',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'rivi-suff' },
                { dir: ['south'], id: 'broo-suff' },
                { dir: ['east'], id: 'will-clin' },
                { dir: ['west'], id: 'dela-norf'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'dela-clin',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'rivi-clin' },
                { dir: ['south'], id: 'will-clin' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'dela-suff'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'dela-atto',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'rivi-atto' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'dela-ridg' },
                { dir: ['west'], id: 'dela-clin'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'dela-ridg',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'rivi-ridg' },
                { dir: ['south'], id: 'new-ridg' },
                { dir: ['east'], id: 'dela-pitt' },
                { dir: ['west'], id: 'dela-atto'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'dela-pitt',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'rivi-pitt' },
                { dir: ['south'], id: 'new-pitt' },
                { dir: ['east'], id: 'dela-colu' },
                { dir: ['west'], id: 'dela-ridg'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'dela-colu',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'rivi-colu' },
                { dir: ['south'], id: 'new-colu' },
                { dir: ['east'], id: 'dela-fdrd' },
                { dir: ['west'], id: 'dela-pitt'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'dela-fdrd',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-fdrd' },
                { dir: ['south'], id: 'new-sout' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'dela-colu'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'will-clin',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'dela-clin' },
                { dir: ['south'], id: 'new-clin' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'dela-suff'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'new-clin',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'will-clin' },
                { dir: ['south'], id: 'broo-clin' },
                { dir: ['east'], id: 'new-ridg' },
                { dir: ['west'], id: '', block: `You can't go that way.`}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'new-ridg',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'dela-ridg' },
                { dir: ['south'], id: 'broo-ridg' },
                { dir: ['east'], id: 'new-pitt' },
                { dir: ['west'], id: 'new-clin'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'new-pitt',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'dela-pitt' },
                { dir: ['south'], id: 'broo-pitt' },
                { dir: ['east'], id: 'new-will' },
                { dir: ['west'], id: 'new-ridg'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'new-will',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'broo-will' },
                { dir: ['east'], id: 'new-colu' },
                { dir: ['west'], id: 'new-pitt'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'new-colu',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'dela-colu' },
                { dir: ['south'], id: 'broo-colu' },
                { dir: ['east'], id: 'new-lewi' },
                { dir: ['west'], id: 'new-will'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'new-lewi',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'gran-lewi' },
                { dir: ['east'], id: 'new-sout' },
                { dir: ['west'], id: 'new-colu'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'new-sout',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'dela-fdrd' },
                { dir: ['south'], id: 'gran-sout' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'new-lewi' }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broo-bowe',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'kenm-bowe' },
                { dir: ['south'], id: 'gran-bowe' },
                { dir: ['east'], id: 'broo-chry' },
                { dir: ['west'], id: '????' }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broo-chry',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'dela-chry' },
                { dir: ['south'], id: 'gran-chry' },
                { dir: ['east'], id: 'broo-fors' },
                { dir: ['west'], id: 'broo-bowe'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broo-fors',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'dela-fors' },
                { dir: ['south'], id: 'gran-fors' },
                { dir: ['east'], id: 'broo-eldr' },
                { dir: ['west'], id: 'broo-chry'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broo-eldr',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'dela-eldr' },
                { dir: ['south'], id: 'gran-eldr' },
                { dir: ['east'], id: 'broo-alle' },
                { dir: ['west'], id: 'broo-fors'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broo-alle',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'dela-alle' },
                { dir: ['south'], id: 'gran-alle' },
                { dir: ['east'], id: 'broo-orch' },
                { dir: ['west'], id: 'broo-eldr'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broo-orch',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'dela-orch' },
                { dir: ['south'], id: 'gran-orch' },
                { dir: ['east'], id: 'broo-ludl' },
                { dir: ['west'], id: 'broo-alle'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broo-ludl',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'dela-ludl' },
                { dir: ['south'], id: 'gran-ludl' },
                { dir: ['east'], id: 'broo-esse' },
                { dir: ['west'], id: 'broo-orch'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broo-esse',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'dela-esse' },
                { dir: ['south'], id: 'gran-esse' },
                { dir: ['east'], id: 'broo-norf' },
                { dir: ['west'], id: 'broo-ludl'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broo-norf',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'dela-norf' },
                { dir: ['south'], id: 'gran-norf' },
                { dir: ['east'], id: 'broo-suff' },
                { dir: ['west'], id: 'broo-esse'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broo-suff',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'dela-suff' },
                { dir: ['south'], id: 'gran-suff' },
                { dir: ['east'], id: 'broo-clin' },
                { dir: ['west'], id: 'broo-norf'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broo-clin',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'new-clin' },
                { dir: ['south'], id: 'gran-clin' },
                { dir: ['east'], id: 'broo-ridg' },
                { dir: ['west'], id: 'broo-suff'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broo-ridg',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'new-ridg' },
                { dir: ['south'], id: 'gran-ridg', },
                { dir: ['east'], id: 'broo-pitt' },
                { dir: ['west'], id: 'broo-clin'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broo-pitt',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'new-pitt' },
                { dir: ['south'], id: 'gran-pitt' },
                { dir: ['east'], id: 'broo-will' },
                { dir: ['west'], id: 'broo-ridg'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broo-will',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'new-will' },
                { dir: ['south'], id: 'gran-will' },
                { dir: ['east'], id: 'broo-colu' },
                { dir: ['west'], id: 'bro-pitt'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broo-colu',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'new-colu' },
                { dir: ['south'], id: 'gran-colu' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'broo-will'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-bowe',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broo-bowe' },
                { dir: ['south'], id: 'hest-bowe' },
                { dir: ['east'], id: 'gran-chry' },
                { dir: ['west'], id: '????'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-chry',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broo-chrys' },
                { dir: ['south'], id: 'hest-chry' },
                { dir: ['east'], id: 'gran-fors' },
                { dir: ['west'], id: 'gran-bowe'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-fors',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broo-fors' },
                { dir: ['south'], id: 'hest-fors' },
                { dir: ['east'], id: 'gran-eldr' },
                { dir: ['west'], id: 'gran-chry'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-eldr',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broo-eldr' },
                { dir: ['south'], id: 'hest-eldr' },
                { dir: ['east'], id: 'gran-alle' },
                { dir: ['west'], id: 'gran-fors'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-alle',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broo-alle' },
                { dir: ['south'], id: 'hest-alle' },
                { dir: ['east'], id: 'gran-orch' },
                { dir: ['west'], id: 'gran-eldr'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-orch',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broo-orch' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: 'gran-ludl' },
                { dir: ['west'], id: 'gran-alle'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-ludl',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broo-ludl' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: 'gran-esse' },
                { dir: ['west'], id: 'gran-orch'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-esse',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broo-esse' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: 'gran-norf' },
                { dir: ['west'], id: 'gran-ludl'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-norf',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broo-norf' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: 'gran-suff' },
                { dir: ['west'], id: 'gran-esse'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-suff',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broo-suff' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: 'gran-clin' },
                { dir: ['west'], id: 'gran-norf'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-clin',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broo-clin' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: 'gran-ridg' },
                { dir: ['west'], id: 'gran-suff'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-ridg',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broo-ridg' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: 'gran-pitt' },
                { dir: ['west'], id: 'gran-clin'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-pitt',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broo-pitt' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: 'gran-will' },
                { dir: ['west'], id: 'gran-ridg'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-will',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broo-will' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: 'gran-broa' },
                { dir: ['west'], id: 'gran-pitt'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-broa',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'broa-will', },
                { dir: ['east'], id: 'gran-colu' },
                { dir: ['west'], id: 'gran-will'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-colu',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broo-colu' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'gran-henr' },
                { dir: ['west'], id: 'gran-broa'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-henr',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'henr-will' },
                { dir: ['east'], id: 'gran-jack' },
                { dir: ['west'], id: 'gran-colu'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-jack',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'madi-jack' },
                { dir: ['east'], id: 'gran-lwei' },
                { dir: ['west'], id: 'gran-henr'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-lwei',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'new-lewi' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'gran-madi' },
                { dir: ['west'], id: 'gran-jack'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-madi',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'madi-jack' },
                { dir: ['east'], id: 'gran-sout' },
                { dir: ['west'], id: 'gran-lwei'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-sout',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'new-sout' },
                { dir: ['south'], id: 'sout-jack' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'gran-madi'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hest-bowe',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'gran-bowe' },
                { dir: ['south'], id: 'cana-bowe' },
                { dir: ['east'], id: 'hest-chry' },
                { dir: ['west'], id: '????'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hest-chry',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'gran-chry' },
                { dir: ['south'], id: 'cana-chry' },
                { dir: ['east'], id: 'hest-fors' },
                { dir: ['west'], id: 'hest-bowe'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hest-fors',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'gran-fors' },
                { dir: ['south'], id: 'cana-fors' },
                { dir: ['east'], id: 'hest-eldr' },
                { dir: ['west'], id: 'hest-chry'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hest-eldr',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'gran-eldr' },
                { dir: ['south'], id: 'cana-eldr' },
                { dir: ['east'], id: 'hest-alle' },
                { dir: ['west'], id: 'hest-fors'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hest-alle',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'gran-alle' },
                { dir: ['south'], id: 'cana-alle' },
                { dir: ['east'], id: 'hest-orch' },
                { dir: ['west'], id: 'hest-eldr'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hest-orch',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'gran-orch' },
                { dir: ['south'], id: 'cana-orch' },
                { dir: ['east'], id: 'hest-ludl' },
                { dir: ['west'], id: 'hest-alle'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hest-ludl',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'gran-ludl' },
                { dir: ['south'], id: 'cana-ludl' },
                { dir: ['east'], id: 'hest-esse' },
                { dir: ['west'], id: 'hest-orch'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hest-esse',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'gran-esse' },
                { dir: ['south'], id: 'cana-esse' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'hest-ludl'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'cana-bowe',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hest-bowe' },
                { dir: ['south'], id: '????' },
                { dir: ['east'], id: 'cana-chry' },
                { dir: ['west'], id: '????'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'cana-chry',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hest-chry' },
                { dir: ['south'], id: '????' },
                { dir: ['east'], id: 'cana-fors' },
                { dir: ['west'], id: 'cana-bowe'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'cana-fors',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hest-fors' },
                { dir: ['south'], id: '????' },
                { dir: ['east'], id: 'cana-eldr' },
                { dir: ['west'], id: 'cana-chry'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'cana-eldr',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hest-eldr' },
                { dir: ['south'], id: '????' },
                { dir: ['east'], id: 'cana-alle' },
                { dir: ['west'], id: 'cana-fors'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'cana-alle',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hest-alle' },
                { dir: ['south'], id: '????' },
                { dir: ['east'], id: 'cana-orch' },
                { dir: ['west'], id: 'cana-eldr'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'cana-orch',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hest-orch' },
                { dir: ['south'], id: '????' },
                { dir: ['east'], id: 'cana-ludl' },
                { dir: ['west'], id: 'cana-alle'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'cana-ludl',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hest-ludl' },
                { dir: ['south'], id: '????' },
                { dir: ['east'], id: 'cana-divi' },
                { dir: ['west'], id: 'cana-orch'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'cana-divi',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hest-divi' },
                { dir: ['south'], id: '????' },
                { dir: ['east'], id: 'cana-rutg' },
                { dir: ['west'], id: 'cana-ludl'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'cana-rutg',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hest-rutg' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: 'broa-cana' },
                { dir: ['west'], id: 'cana-divi'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broa-cana',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: 'cana-rutg'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broa-jeff',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        
    ]
    
}