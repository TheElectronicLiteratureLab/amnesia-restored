const lowerEast = {
    roomId: '',
    currPos: [],
    rooms: [
        {
            isStreets: true,
            coord: [],
            id: 'hous-bowe',
            name: 'E. Houston St. and Bowery St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '1-bowe' },
                { dir: ['south'], id: 'stan-bowe' },
                { dir: ['east'], id: 'hous-chry' },
                { dir: ['west'], id: 'hous-eliz'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-chry',
            name: 'E. Houston St. and Chrystie Ave.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '1-chry' },
                { dir: ['south'], id: 'stan-chry' },
                { dir: ['east'], id: 'hou-fors' },
                { dir: ['west'], id: 'hous-bowe'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-fors',
            name: 'E. Houston St. and Forsyth St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'stan-fors' },
                { dir: ['east'], id: 'hous-eldr' },
                { dir: ['west'], id: 'hous-chry'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-eldr',
            name: 'E. Houston St. and Eldridge St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'stan-fors' },
                { dir: ['east'], id: 'hous-alle' },
                { dir: ['west'], id: 'hous-fors'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-alle',
            name: 'E. Houston St. and Allen St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '1-alle' },
                { dir: ['south'], id: 'stan-alle' },
                { dir: ['east'], id: 'hous-orch' },
                { dir: ['west'], id: 'hous-eldr'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-orch',
            name: 'E. Houston St. and Orchard St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'stan-orch' },
                { dir: ['east'], id: 'hous-1' },
                { dir: ['west'], id: 'hous-alle'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-1',
            name: 'E. Houston St. and E. 1st St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '1-1' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'hous-ludl' },
                { dir: ['west'], id: 'hous-orch'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-ludl',
            name: 'E. Houston St. and Ludlow St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'stan-ludl' },
                { dir: ['east'], id: 'hous-esse' },
                { dir: ['west'], id: 'hous-1'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-esse',
            name: 'E. Houston St. and Essex St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '2-avea' },
                { dir: ['south'], id: 'stan-esse' },
                { dir: ['east'], id: 'hous-norf' },
                { dir: ['west'], id: 'hous-ludl'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-norf',
            name: 'E. Houston St. and Norfolk St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'stan-norf' },
                { dir: ['east'], id: 'hous-suff' },
                { dir: ['west'], id: 'hous-esse'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-suff',
            name: 'E. Houston St. and Suffolk St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'stan-suff' },
                { dir: ['east'], id: 'hous-clin' },
                { dir: ['west'], id: 'hous-norf'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-clin',
            name: 'E. Houston St. and Clinton St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '2-aveb' },
                { dir: ['south'], id: 'stan-clin' },
                { dir: ['east'], id: 'hous-atto' },
                { dir: ['west'], id: 'hous-suff'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-atto',
            name: 'E. Houston St. and Attorney St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'stan-atto' },
                { dir: ['east'], id: 'hous-ridg' },
                { dir: ['west'], id: 'hous-clin'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-ridg',
            name: 'E. Houston St. and Ridge St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'stan-ridg' },
                { dir: ['east'], id: 'hous-2' },
                { dir: ['west'], id: 'hous-atto'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-2',
            name: 'E. Houston St. and E 2nd St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '2-aveb' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'hous-pitt' },
                { dir: ['west'], id: 'hous-ridg'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-pitt',
            name: 'E. Houston St. and Pitt St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '3-avec' },
                { dir: ['south'], id: 'stan-pitt' },
                { dir: ['east'], id: 'hous-colu' },
                { dir: ['west'], id: 'hous-2'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-colu',
            name: 'E. Houston St. and Columbia St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '3-aved' },
                { dir: ['south'], id: 'rivi-colu' },
                { dir: ['east'], id: 'hous-baru' },
                { dir: ['west'], id: 'hous-pitt'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-baru',
            name: 'E. Houston St. and Baruch Pl.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'new-baru' },
                { dir: ['east'], id: 'hous-mang' },
                { dir: ['west'], id: 'hous-colu'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-mang',
            name: 'E. Houston St. and Mangin St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'new-mang' },
                { dir: ['east'], id: 'hous-fdrd' },
                { dir: ['west'], id: 'hous-baru'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hous-fdrd',
            name: 'E. Houston St. and FDR Drive',
            desc: ``,
            exits: [
                { dir: ['north'], id: '6-fdrd' },
                { dir: ['south'], id: 'dela-fdrd' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'hous-mang'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-bowe',
            name: 'Stanton St. and Bowery St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-bowe' },
                { dir: ['south'], id: 'prin-bowe' },
                { dir: ['east'], id: 'stan-chry' },
                { dir: ['west'], id: '', block: `You can't go that way.` }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-chry',
            name: 'Stanton St. and Chrystie Ave.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-chry' },
                { dir: ['south'], id: 'rivi-chry' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'stan-bowe'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-fors',
            name: 'Stanton St. and Forsyth St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hous-fors' },
                { dir: ['south'], id: 'rivi-fors' },
                { dir: ['east'], id: 'stan-eldr' },
                { dir: ['west'], id: '', block: `You can't go that way.` }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'stan-eldr',
            name: 'Stanton St. and Eldridge St.',
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
            name: 'Stanton St. and Allen St.',
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
            name: 'Stanton St. and Orchard St.',
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
            name: 'Stanton St. and Ludlow St. ',
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
            name: 'Stanton St. and Essex St.',
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
            name: 'Stanton St. and Norfolk St. ',
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
            name: 'Stanton St. and Suffolk St.',
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
            name: 'Stanton St. and Clinton St.',
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
            name: 'Stanton St. and Attorney St.',
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
            name: 'Stanton St. and Ridge St.',
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
            name: 'Stanton St. and Pitt St.',
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
            name: 'New St. and Baruch P1.',
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
            name: 'New St. and Mangin St.',
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
            name: 'Prince St. and Bowery St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'stan-bowe' },
                { dir: ['south'], id: 'rivi-bowe' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'prin-eliz'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-bowe',
            name: 'Rivington St. and Bowery St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'prin-bowe' },
                { dir: ['south'], id: 'spri-bowe' },
                { dir: ['east'], id: 'rivi-chry' },
                { dir: ['west'], id: '', block: `You can't go that way.` }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-chry',
            name: 'Rivington St. and Chrystie Ave.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'stan-chry' },
                { dir: ['south'], id: 'dela-chry' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'rivi-bowe'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-fors',
            name: 'Rivington St. and Forsyth St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'stan-fors' },
                { dir: ['south'], id: 'dela-fors' },
                { dir: ['east'], id: 'rivi-eldr' },
                { dir: ['west'], id: '', block: `You can't go that way.` }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rivi-eldr',
            name: 'Rivington St. and Eldridge St.',
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
            name: 'Rivington St. and Allen St.',
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
            name: 'Rivington St. and Orchard St.',
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
            name: 'Rivington St. and Ludlow St. ',
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
            name: 'Rivington St. and Essex St.',
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
            name: 'Rivington St. and Norfolk St. ',
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
            name: 'Rivington St. and Suffolk St.',
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
            name: 'Rivington St. and Clinton St.',
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
            name: 'Rivington St. and Attorney St.',
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
            name: 'Rivington St. and Ridge St.',
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
            name: 'Rivington St. and Pitt St.',
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
            name: 'Rivington St. and Columbia St.',
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
            name: 'Spring St. and Bowery St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'rivi-bowe' },
                { dir: ['south'], id: 'kenm-bowe' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'spri-eliz'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'kenm-bowe',
            name: 'Kenmare St. and Bowery St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'spri-bowe' },
                { dir: ['south'], id: 'broo-bowe' },
                { dir: ['east'], id: 'dela-chry ' },
                { dir: ['west'], id: 'kenm-eliz'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'dela-chry',
            name: 'Delancy St. and Chrystie Ave.',
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
            name: 'Delancy St. and Forsyth St.',
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
            name: 'Delancy St. and Eldridge St.',
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
            name: 'Delancy St. and Allen St.',
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
            name: 'Delancy St. and Orchard St.',
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
            name: 'Delancy St. and Ludlow St. ',
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
            name: 'Delancy St. and Essex St.',
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
            name: 'Delancy St. and Norfolk St. ',
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
            name: 'Delancy St. and Suffolk St.',
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
            name: 'Delancy St. and Clinton St.',
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
            name: 'Delancy St. and Attorney St.',
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
            name: 'Delancy St. and Ridge St.',
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
            name: 'Delancy St. and Pitt St.',
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
            name: 'Delancy St. and Columbia St.',
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
            name: 'Delancy St. and ',
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
            name: 'Williamsburg Brg. and Clinton St.',
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
            name: 'New St. and Clinton St.',
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
            name: 'New St. and Ridge St.',
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
            name: 'New St. and Pitt St.',
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
            name: 'New St. and Willet St.',
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
            name: 'New St. and Columbia St.',
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
            name: 'New St. and Lewis St.',
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
            name: 'New St. and South St.',
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
            name: 'Broome St. and Bowery St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'kenm-bowe' },
                { dir: ['south'], id: 'gran-bowe' },
                { dir: ['east'], id: 'broo-chry' },
                { dir: ['west'], id: 'broo-eliz' }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broo-chry',
            name: 'Broome St. and Chrystie Ave.',
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
            name: 'Broome St. and Forsyth St.',
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
            name: 'Broome St. and Eldridge St.',
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
            name: 'Broome St. and Allen St.',
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
            name: 'Broome St. and Orchard St.',
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
            name: 'Broome St. and Ludlow St. ',
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
            name: 'Broome St. and Essex St.',
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
            name: 'Broome St. and Norfolk St. ',
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
            name: 'Broome St. and Suffolk St.',
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
            name: 'Broome St. and Clinton St.',
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
            name: 'Broome St. and Ridge St.',
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
            name: 'Broome St. and Pitt St.',
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
            name: 'Broome St. and Willet St.',
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
            name: 'Broome St. and Columbia St.',
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
            name: 'Grand St. and Bowery St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broo-bowe' },
                { dir: ['south'], id: 'hest-bowe' },
                { dir: ['east'], id: 'gran-chry' },
                { dir: ['west'], id: 'gran-eliz'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gran-chry',
            name: 'Grand St. and Chrystie Ave.',
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
            name: 'Grand St. and Forsyth St.',
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
            name: 'Grand St. and Eldridge St.',
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
            name: 'Grand St. and Allen St.',
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
            name: 'Grand St. and Orchard St.',
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
            name: 'Grand St. and Ludlow St. ',
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
            name: 'Grand St. and Essex St.',
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
            name: 'Grand St. and Norfolk St. ',
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
            name: 'Grand St. and Suffolk St.',
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
            name: 'Grand St. and Clinton St.',
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
            name: 'Grand St. and Ridge St.',
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
            name: 'Grand St. and Pitt St.',
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
            name: 'Grand St. and Willet St.',
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
            name: 'Grand St. and ',
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
            name: 'Grand St. and Columbia St.',
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
            name: 'Grand St. and ',
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
            name: 'Grand St. and Jackson St.',
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
            id: 'gran-lewi',
            name: 'Grand St. and Lewis St.',
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
            name: 'Grand St. and ',
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
            name: 'Grand St. and South St.',
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
            name: 'Hester St. and Bowery St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'gran-bowe' },
                { dir: ['south'], id: 'cana-bowe' },
                { dir: ['east'], id: 'hest-chry' },
                { dir: ['west'], id: 'hest-eliz'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'hest-chry',
            name: 'Hester St. and Chrystie Ave.',
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
            name: 'Hester St. and Forsyth St.',
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
            name: 'Hester St. and Eldridge St.',
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
            name: 'Hester St. and Allen St.',
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
            name: 'Hester St. and Orchard St.',
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
            name: 'Hester St. and Ludlow St. ',
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
            name: 'Hester St. and Essex St.',
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
            name: 'Canal St. and Bowery St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hest-bowe' },
                { dir: ['south'], id: 'baya-bowe' },
                { dir: ['east'], id: 'cana-chry' },
                { dir: ['west'], id: 'cana-eliz'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'cana-chry',
            name: 'Canal St. and Chrystie Ave.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hest-chry' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'cana-fors' },
                { dir: ['west'], id: 'cana-bowe'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'cana-fors',
            name: 'Canal St. and Forsyth St.',
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
            name: 'Canal St. and Eldridge St.',
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
            name: 'Canal St. and Allen St.',
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
            name: 'Canal St. and Orchard St.',
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
            name: 'Canal St. and Ludlow St. ',
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
            name: 'Canal St. and Division St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: '????' },
                { dir: ['east'], id: 'cana-rutg' },
                { dir: ['west'], id: 'cana-ludl'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'cana-rutg',
            name: 'Canal St. and Rutgers St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'hest-rutg' },
                { dir: ['south'], id: '????' },
                { dir: ['east'], id: 'broa-cana' },
                { dir: ['west'], id: 'cana-divi'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broa-cana',
            name: 'E. Broadway and Canal St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'henr-rutg' },
                { dir: ['east'], id: 'broa-jeff' },
                { dir: ['west'], id: 'cana-rutg'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broa-jeff',
            name: 'E. Broadway and Jefferson St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'henr-jeff', },
                { dir: ['east'], id: 'broa-clin' },
                { dir: ['west'], id: 'broa-cana'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broa-clin',
            name: 'E. Broadway and Clinton St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'gran-clin' },
                { dir: ['south'], id: 'henr-clin' },
                { dir: ['east'], id: 'broa-mont' },
                { dir: ['west'], id: 'broa-jeff'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broa-mont',
            name: 'E. Broadway and Montgomery St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'henr-mont' },
                { dir: ['east'], id: 'broa-pitt' },
                { dir: ['west'], id: 'broa-clin'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broa-pitt',
            name: 'E. Broadway and Pitt St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'gran-pitt' },
                { dir: ['south'], id: 'henr-pitt' },
                { dir: ['east'], id: 'broa-will' },
                { dir: ['west'], id: 'broa-mont'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'broa-will',
            name: 'E. Broadway and Willet St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'henr-will' },
                { dir: ['east'], id: 'gran-broa' },
                { dir: ['west'], id: 'broa-pitt'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'henr-pike',
            name: 'Henry St. and Pike St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broa-pike' },
                { dir: ['south'], id: 'madi-pike' },
                { dir: ['east'], id: 'henr-rutg' },
                { dir: ['west'], id: 'fors-henr'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'henr-rutg',
            name: 'Henry St. and Rutgers St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broa-cana' },
                { dir: ['south'], id: 'madi-rutg' },
                { dir: ['east'], id: 'henr-jeff' },
                { dir: ['west'], id: 'henr-pike'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'henr-jeff',
            name: 'Henry St. and Jefferson St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broa-jeff' },
                { dir: ['south'], id: 'madi-jeff' },
                { dir: ['east'], id: 'henr-clin' },
                { dir: ['west'], id: 'henr-rutg'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'henr-clin',
            name: 'Henry St. and Clinton St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broa-clin' },
                { dir: ['south'], id: 'madi-clin' },
                { dir: ['east'], id: 'henr-mont' },
                { dir: ['west'], id: 'henr-jeff'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'henr-mont',
            name: 'Henry St. and Montgomery St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broa-mont' },
                { dir: ['south'], id: 'madi-mont' },
                { dir: ['east'], id: 'henr-pitt' },
                { dir: ['west'], id: 'henr-clin'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'henr-pitt',
            name: 'Henry St. and Pitt St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broa-pitt' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'henr-will' },
                { dir: ['west'], id: 'henr-mont'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'henr-will',
            name: 'Henry St. and Willet St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'broa-will' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'gran-henr' },
                { dir: ['west'], id: 'henr-pitt'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'madi-pike',
            name: 'Madison St. and Pike St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'henr-pike' },
                { dir: ['south'], id: 'monr-pike' },
                { dir: ['east'], id: 'madi-rutg' },
                { dir: ['west'], id: 'fors-madi'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'madi-rutg',
            name: 'Madison St. and Rutgers St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'henr-rutg' },
                { dir: ['south'], id: 'cherr-rutg' },
                { dir: ['east'], id: 'madi-jeff' },
                { dir: ['west'], id: 'madi-pike'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'madi-jeff',
            name: 'Madison St. and Jefferson St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'henr-jeff' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'madi-clin' },
                { dir: ['west'], id: 'madi-rutg'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'madi-clin',
            name: 'Madison St. and Clinton St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'henr-clin' },
                { dir: ['south'], id: 'cherr-clin' },
                { dir: ['east'], id: 'madi-mont' },
                { dir: ['west'], id: 'madi-jeff'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'madi-mont',
            name: 'Madison St. and Montgomery St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'henr-mont' },
                { dir: ['south'], id: 'cherr-mont' },
                { dir: ['east'], id: 'madi-gouv' },
                { dir: ['west'], id: 'madi-clin'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'madi-gouv',
            name: 'Madison St. and Gouverneur St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way` },
                { dir: ['south'], id: 'gouv-gouvS' },
                { dir: ['east'], id: 'madi-jack' },
                { dir: ['west'], id: 'madi-mont'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'madi-jack',
            name: 'Madison St. and Jackson St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'gran-jack' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'gran-madi' },
                { dir: ['west'], id: 'madi-gouv'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'monr-pike',
            name: 'Monroe St. and Pike St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'madi-pike' },
                { dir: ['south'], id: 'cherr-pike' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'monr-chry'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'cherr-pike',
            name: 'Cherry St. and Pike St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'monr-pike' },
                { dir: ['south'], id: 'wate-pike' },
                { dir: ['east'], id: 'cherr-rutg' },
                { dir: ['west'], id: 'cherr-chry'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'cherr-rutg',
            name: 'Cherry St. and Rutgers St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'madi-rutg' },
                { dir: ['south'], id: 'wate-rutg' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'cherr-pike' }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'cherr-clin',
            name: 'Cherry St. and Clinton St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'madi-clin' },
                { dir: ['south'], id: 'sout-clin' },
                { dir: ['east'], id: 'cherr-mont' },
                { dir: ['west'], id: '', block: `You can't go that way.` }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'cherr-mont',
            name: 'Cherry St. and Montgomery St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'madi-mont' },
                { dir: ['south'], id: 'gouv-mont' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'cherr-clin' }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'wate-pike',
            name: 'Water St. and Pike St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'cherr-pike' },
                { dir: ['south'], id: 'sout-pike' },
                { dir: ['east'], id: 'wate-rutg' },
                { dir: ['west'], id: 'wate-chry' }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'wate-rutg',
            name: 'Water St. and Rutgers St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'cherr-rutg' },
                { dir: ['south'], id: 'sout-rutg' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'wate-pike' }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'sout-pike',
            name: 'South St. and Pike St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'wate-pike' },
                { dir: ['south'], id: 'chry-erdr' },
                { dir: ['east'], id: 'sout-rutg' },
                { dir: ['west'], id: 'cout-chry'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'sout-rutg',
            name: 'South St. and Rutgers St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'wate-rutg' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'sout-clin' },
                { dir: ['west'], id: 'sout-pike'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'sout-clin',
            name: 'South St. and Clinton St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'cherr-clin' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'sout-mont' },
                { dir: ['west'], id: 'sout-rutg' }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'sout-mont',
            name: 'South St. and Montgomery St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'gouv-mont' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'sout-gouv' },
                { dir: ['west'], id: 'sout-clin' }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gouv-mont',
            name: 'Gouverneur Gdns. and Montgomery St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'cherr-mont' },
                { dir: ['south'], id: 'sout-mont' },
                { dir: ['east'], id: 'gouv-gouvW' },
                { dir: ['west'], id: '', block: `You can't go that way.` }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gouv-gouvW',
            name: 'Gouverneur Gdns. and Gouverneur Slip W',
            desc: ``,
            exits: [
                { dir: ['north'], id: '', block: `You can't go that way.` },
                { dir: ['south'], id: 'sout-gouv' },
                { dir: ['east'], id: 'gouv-gouvS' },
                { dir: ['west'], id: 'gouv-mont'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gouv-gouvS',
            name: 'Gouverneur Gdns. and Gouverneur St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: '' },
                { dir: ['south'], id: '' },
                { dir: ['east'], id: 'gouv-gouvE' },
                { dir: ['west'], id: 'gouv-gouvW'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gouv-gouvE',
            name: 'Gouverneur Gdns. and Gouverneur Slip E',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'madi-gouv' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'gouv-jack' },
                { dir: ['west'], id: 'gouv-gouvS'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'gouv-jack',
            name: 'Gouverneur Gdns. and Jackson St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'sout-jack2' },
                { dir: ['south'], id: 'sout-jack1' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'gouv-gouvE'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'sout-gouvW',
            name: 'South St. and Gouverneur Slip W',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'gouv-gouvW' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'sout-gouvE' },
                { dir: ['west'], id: 'sout-mont'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'sout-gouvE',
            name: 'South St. and Gouverneur Slip E',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'gouv-gouvE' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: 'sout-jack1' },
                { dir: ['west'], id: 'sout-gouvW'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'sout-jack1',
            name: 'South St. and Jackson St.',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'gouv-jack' },
                { dir: ['south'], id: '', block: `You can't go that way.` },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'sout-gouvE'}, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'sout-jack2',
            name: 'South St. and Jackson St. Ste. #2',
            desc: ``,
            exits: [
                { dir: ['north'], id: 'gran-sout' },
                { dir: ['south'], id: 'gouv-jack' },
                { dir: ['east'], id: '', block: `You can't go that way.` },
                { dir: ['west'], id: 'madi-jack'}, 
            ]
        },
                
    ]
    
}