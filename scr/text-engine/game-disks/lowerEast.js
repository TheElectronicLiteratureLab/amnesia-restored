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
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'spri-bowe',
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
            id: 'kenm-bowe',
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
            id: 'dela-chry',
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
            id: 'dela-fors',
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
            id: 'dela-eldr',
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
            id: 'dela-alle',
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
            id: 'dela-orch',
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
            id: 'dela-ludl',
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
            id: 'dela-esse',
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
            id: 'dela-norf',
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
            id: 'dela-suff',
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
            id: 'dela-clin',
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
            id: 'dela-atto',
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
            id: 'dela-ridg',
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
            id: 'dela-pitt',
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
            id: 'dela-colu',
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
            id: 'dela-fdrd',
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
            id: 'will-clin',
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
            id: 'new-clin',
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
            id: 'new-ridg',
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
            id: 'new-pitt',
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
            id: 'new-will',
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
            id: 'new-colu',
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
            id: 'new-lewi',
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
            id: 'new-sout',
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
            id: 'broo-bowe',
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
            id: 'broo-chry',
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
            id: 'broo-fors',
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
            id: 'broo-eldr',
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
            id: 'broo-alle',
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
            id: 'broo-orch',
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
            id: 'broo-ludl',
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
            id: 'broo-esse',
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
            id: 'broo-norf',
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
            id: 'broo-suff',
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
            id: 'broo-clin',
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
            id: 'broo-ridg',
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
            id: 'broo-pitt',
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
            id: 'broo-will',
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
            id: 'broo-colu',
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
            id: 'gran-bowe',
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
            id: 'gran-chry',
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
            id: 'gran-fors',
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
            id: 'gran-eldr',
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
            id: 'gran-alle',
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
            id: 'gran-orch',
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
            id: 'gran-ludl',
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
            id: 'gran-esse',
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
            id: 'gran-norf',
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
            id: 'gran-suff',
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
            id: 'gran-clin',
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
            id: 'gran-ridg',
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
            id: 'gran-pitt',
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
            id: 'gran-will',
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
            id: 'gran-broa',
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
            id: 'gran-colu',
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
            id: 'gran-henr',
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
            id: 'gran-jack',
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
            id: 'gran-lwei',
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
            id: 'gran-madi',
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
            id: 'gran-sout',
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
            id: 'hest-bowe',
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
            id: 'hest-chry',
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
            id: 'hest-fors',
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
            id: 'hest-eldr',
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
            id: 'hest-alle',
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
            id: 'hest-orch',
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
            id: 'hest-ludl',
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
            id: 'hest-esse',
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
            id: 'cana-bowe',
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
            id: 'cana-chry',
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
            id: 'cana-fors',
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
            id: 'cana-eldr',
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
            id: 'cana-alle',
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
            id: 'cana-orch',
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
            id: 'cana-ludl',
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
            id: 'cana-divi',
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
            id: 'cana-rutg',
            name: '',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: '' },
                { dir: ['west'], id: ''}, 
            ]
        },
        {//asking arlo about how he set up broadway
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