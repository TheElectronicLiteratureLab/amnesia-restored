const lowerEast = {
  roomId: '',
  currPos: [],
  rooms: [
    {
      id: 'hous-bowe',
      coord: [],
      name: 'E. Houston St. and Bowery St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'stan-bowe' },
        { dir: ['east'], id: 'hous-chry' },
        { dir: ['west'], id: ''}, 
      ]
    },
    {
      id: 'hous-chry',
      coord: [],
      name: 'E. Houston St. and Chrystie Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'stan-chry' },
        { dir: ['east'], id: 'hou-fors' },
        { dir: ['west'], id: 'hous-bowe'}, 
      ]
    },
    {
      id: 'hous-fors',
      coord: [],
      name: 'E. Houston St. and Forsyth St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'stan-fors' },
        { dir: ['east'], id: 'hous-eldr' },
        { dir: ['west'], id: 'hous-chry'}, 
      ]
    },
    {
      id: 'hous-eldr',
      coord: [],
      name: 'E. Houston St. and Eldridge St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'stan-fors' },
        { dir: ['east'], id: 'hous-alle' },
        { dir: ['west'], id: 'hous-fors'}, 
      ]
    },
    {
      id: 'hous-alle',
      coord: [],
      name: 'E. Houston St. and Allen St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'stan-alle' },
        { dir: ['east'], id: 'hous-orch' },
        { dir: ['west'], id: 'hous-eldr'}, 
      ]
    },
    {
      id: 'hous-orch',
      coord: [],
      name: 'E. Houston St. and Orchard St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'stan-orch' },
        { dir: ['east'], id: 'hous-1' },
        { dir: ['west'], id: 'hous-alle'}, 
      ]
    },
    {
      id: 'hous-1',
      coord: [],
      name: 'E. Houston St. and E. 1st St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: '', block: `You can't go that way.` },
        { dir: ['east'], id: 'hous-ludl' },
        { dir: ['west'], id: 'hous-orch'}, 
      ]
    },
    {
      id: 'hous-ludl',
      coord: [],
      name: 'E. Houston St. and Ludlow St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'stan-ludl' },
        { dir: ['east'], id: 'hous-esse' },
        { dir: ['west'], id: 'hous-1'}, 
      ]
    },
    {
      id: 'hous-esse',
      coord: [],
      name: 'E. Houston St. and Essex St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'stan-esse' },
        { dir: ['east'], id: 'hous-norf' },
        { dir: ['west'], id: 'hous-ludl'}, 
      ]
    },
    {
      id: 'hous-norf',
      coord: [],
      name: 'E. Houston St. and Norfolk St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'stan-norf' },
        { dir: ['east'], id: 'hous-suff' },
        { dir: ['west'], id: 'hous-esse'}, 
      ]
    },
    {
      id: 'hous-suff',
      coord: [],
      name: 'E. Houston St. and Suffolk St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'stan-suff' },
        { dir: ['east'], id: 'hous-clin' },
        { dir: ['west'], id: 'hous-norf'}, 
      ]
    },
    {
      id: 'hous-clin',
      coord: [],
      name: 'E. Houston St. and Clinton St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'stan-clin' },
        { dir: ['east'], id: 'hous-atto' },
        { dir: ['west'], id: 'hous-suff'}, 
      ]
    },
    {
      id: 'hous-atto',
      coord: [],
      name: 'E. Houston St. and Attorney St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'stan-atto' },
        { dir: ['east'], id: 'hous-ridg' },
        { dir: ['west'], id: 'hous-clin'}, 
      ]
    },
    {
      id: 'hous-ridg',
      coord: [],
      name: 'E. Houston St. and Ridge St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'stan-ridg' },
        { dir: ['east'], id: 'hous-2' },
        { dir: ['west'], id: 'hous-atto'}, 
      ]
    },
    {
      id: 'hous-2',
      coord: [],
      name: 'E. Houston St. and E 2nd St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: '', block: `You can't go that way.` },
        { dir: ['east'], id: 'hous-pitt' },
        { dir: ['west'], id: 'hous-ridg'}, 
      ]
    },
    {
      id: 'hous-pitt',
      coord: [],
      name: 'E. Houston St. and Pitt St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'stan-pitt' },
        { dir: ['east'], id: 'hous-colu' },
        { dir: ['west'], id: 'hous-2'}, 
      ]
    },
    {
      id: 'hous-colu',
      coord: [],
      name: 'E. Houston St. and Columbia St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'rivi-colu' },
        { dir: ['east'], id: 'hous-baru' },
        { dir: ['west'], id: 'hous-pitt'}, 
      ]
    },
    {
      id: 'hous-baru',
      coord: [],
      name: 'E. Houston St. and Baruch P1.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'new-baru' },
        { dir: ['east'], id: 'hous-mang' },
        { dir: ['west'], id: 'hous-colu'}, 
      ]
    },
    {
      id: 'hous-mang',
      coord: [],
      name: 'E. Houston St. and Mangin St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'new-mang' },
        { dir: ['east'], id: 'hous-fdrd' },
        { dir: ['west'], id: 'hous-baru'}, 
      ]
    },
    {
      id: 'hous-fdrd',
      coord: [],
      name: 'E. Houston St. and FDR Drive',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'dela-fdrd' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: 'hous-mang'}, 
      ]
    },
    {
      id: 'stan-bowe',
      coord: [],
      name: 'Stanton St. and Bowery St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-bowe' },
        { dir: ['south'], id: 'prin-bowe' },
        { dir: ['east'], id: 'stan-chry' },
        { dir: ['west'], id: '????'}, 
      ]
    },
    {
      id: 'stan-chry',
      coord: [],
      name: 'Stanton St. and Chrystie Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-chry' },
        { dir: ['south'], id: 'rivi-chry' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: 'stan-bowe'}, 
      ]
    },
    {
      id: 'stan-fors',
      coord: [],
      name: 'Stanton St. and Forsyth St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-fors' },
        { dir: ['south'], id: 'rivi-fors' },
        { dir: ['east'], id: 'stan-eldr' },
        { dir: ['west'], id: '', block: `You can't go that way.` }, 
      ]
    },
    {
      id: 'stan-eldr',
      coord: [],
      name: 'Stanton St. and Eldridge St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-eldr' },
        { dir: ['south'], id: 'rivi-eldr' },
        { dir: ['east'], id: 'stan-alle' },
        { dir: ['west'], id: 'stan-fors'}, 
      ]
    },
    {
      id: 'stan-alle',
      coord: [],
      name: 'Stanton St. and Allen St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-alle' },
        { dir: ['south'], id: 'rivi-alle' },
        { dir: ['east'], id: 'stan-orch' },
        { dir: ['west'], id: 'stan-eldr'}, 
      ]
    },
    {
      id: 'stan-orch',
      coord: [],
      name: 'Stanton St. and Orchard St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-orch' },
        { dir: ['south'], id: 'rici-orch' },
        { dir: ['east'], id: 'stan-ludl' },
        { dir: ['west'], id: 'stan-alle'}, 
      ]
    },
    {
      id: 'stan-ludl',
      coord: [],
      name: 'Stanton St. and Ludlow St. ',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-ludl' },
        { dir: ['south'], id: 'rivi-ludl' },
        { dir: ['east'], id: 'stan-esse' },
        { dir: ['west'], id: 'stan-orch'}, 
      ]
    },
    {
      id: 'stan-esse',
      coord: [],
      name: 'Stanton St. and Essex St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-esse' },
        { dir: ['south'], id: 'rivi-esse' },
        { dir: ['east'], id: 'stan-norf' },
        { dir: ['west'], id: 'stan-ludl'}, 
      ]
    },
    {
      id: 'stan-norf',
      coord: [],
      name: 'Stanton St. and Norfolk St. ',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-norf' },
        { dir: ['south'], id: 'rivi-norf' },
        { dir: ['east'], id: 'stan-suff' },
        { dir: ['west'], id: 'stan-esse'}, 
      ]
    },
    {
      id: 'stan-suff',
      coord: [],
      name: 'Stanton St. and Suffolk St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-suff' },
        { dir: ['south'], id: 'rivi-suff' },
        { dir: ['east'], id: 'stan-clin' },
        { dir: ['west'], id: 'stan-norf'}, 
      ]
    },
    {
      id: 'stan-clin',
      coord: [],
      name: 'Stanton St. and Clinton St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-clin' },
        { dir: ['south'], id: 'rivi-clin' },
        { dir: ['east'], id: 'stan-atto' },
        { dir: ['west'], id: 'stan-suff'}, 
      ]
    },
    {
      id: 'stan-atto',
      coord: [],
      name: 'Stanton St. and Attorney St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-atto' },
        { dir: ['south'], id: 'rivi-atto' },
        { dir: ['east'], id: 'stan-ridg' },
        { dir: ['west'], id: 'stan-clin'}, 
      ]
    },
    {
      id: 'stan-ridg',
      coord: [],
      name: 'Stanton St. and Ridge St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-ridg' },
        { dir: ['south'], id: 'rivi-ridg' },
        { dir: ['east'], id: 'stan-pitt' },
        { dir: ['west'], id: 'stan-atto'}, 
      ]
    },
    {
      id: 'stan-pitt',
      coord: [],
      name: 'Stanton St. and Pitt St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-pitt' },
        { dir: ['south'], id: 'rivi-pitt' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: 'stan-ridg'}, 
      ]
    },
    {
      id: 'new-baru',
      coord: [],
      name: 'New St. and Baruch P1.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-baru' },
        { dir: ['south'], id: '', block: `You can't go that way` },
        { dir: ['east'], id: 'new-mang', },
        { dir: ['west'], id: '', block: `You can't go that way` }, 
      ]
    },
    {
      id: 'new-mang',
      coord: [],
      name: 'New St. and Mangin St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-mang' },
        { dir: ['south'], id: '', block: `You can't go that way` },
        { dir: ['east'], id: '', block: `You can't go that way` },
        { dir: ['west'], id: 'new-baru'}, 
      ]
    },
    {
      id: 'prin-bowe',
      coord: [],
      name: 'Prince St. and Bowery St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'stan-bowe' },
        { dir: ['south'], id: 'rivi-bowe' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: '????'}, 
      ]
    },
    {
      id: 'rivi-bowe',
      coord: [],
      name: 'Rivington St. and Bowery St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'prin-bowe' },
        { dir: ['south'], id: 'spri-bowe' },
        { dir: ['east'], id: 'rivi-chry' },
        { dir: ['west'], id: '????'}, 
      ]
    },
    {
      id: 'rivi-chry',
      coord: [],
      name: 'Rivington St. and Chrystie Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'stan-chry' },
        { dir: ['south'], id: 'dela-chry' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: 'rivi-bowe'}, 
      ]
    },
    {
      id: 'rivi-fors',
      coord: [],
      name: 'Rivington St. and Forsyth St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'stan-fors' },
        { dir: ['south'], id: 'dela-fors' },
        { dir: ['east'], id: 'rivi-eldr' },
        { dir: ['west'], id: '', block: `You can't go that way.` }, 
      ]
    },
    {
      id: 'rivi-eldr',
      coord: [],
      name: 'Rivington St. and Eldridge St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'stan-eldr' },
        { dir: ['south'], id: 'dela-eldr' },
        { dir: ['east'], id: 'rivi-alle' },
        { dir: ['west'], id: 'rivi-fors'}, 
      ]
    },
    {
      id: 'rivi-alle',
      coord: [],
      name: 'Rivington St. and Allen St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'stan-alle' },
        { dir: ['south'], id: 'dela-alle' },
        { dir: ['east'], id: 'rivi-orch' },
        { dir: ['west'], id: 'rivi-eldr'}, 
      ]
    },
    {
      id: 'rivi-orch',
      coord: [],
      name: 'Rivington St. and Orchard St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'stan-orch' },
        { dir: ['south'], id: 'dela-orch' },
        { dir: ['east'], id: 'rivi-ludl' },
        { dir: ['west'], id: 'rivi-alle'}, 
      ]
    },
    {
      id: 'rivi-ludl',
      coord: [],
      name: 'Rivington St. and Ludlow St. ',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'stan-ludl' },
        { dir: ['south'], id: 'dela-ludl' },
        { dir: ['east'], id: 'rivi-esse' },
        { dir: ['west'], id: 'rivi-orch'}, 
      ]
    },
    {
      id: 'rivi-esse',
      coord: [],
      name: 'Rivington St. and Essex St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'stan-esse' },
        { dir: ['south'], id: 'dela-esse' },
        { dir: ['east'], id: 'rivi-norf' },
        { dir: ['west'], id: 'rivi-ludl'}, 
      ]
    },
    {
      id: 'rivi-norf',
      coord: [],
      name: 'Rivington St. and Norfolk St. ',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'stan-norf' },
        { dir: ['south'], id: 'dela-norf' },
        { dir: ['east'], id: 'rivi-suff' },
        { dir: ['west'], id: 'rivi-esse'}, 
      ]
    },
    {
      id: 'rivi-suff',
      coord: [],
      name: 'Rivington St. and Suffolk St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'stan-suff' },
        { dir: ['south'], id: 'dela-suff' },
        { dir: ['east'], id: 'rivi-clin' },
        { dir: ['west'], id: 'rivi-norf'}, 
      ]
    },
    {
      id: 'rivi-clin',
      coord: [],
      name: 'Rivington St. and Clinton St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'stan-clin' },
        { dir: ['south'], id: 'dela-clin' },
        { dir: ['east'], id: 'rivi-atto' },
        { dir: ['west'], id: 'rivi-suff'}, 
      ]
    },
    {
      id: 'rivi-atto',
      coord: [],
      name: 'Rivington St. and Attorney St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'stan-atto' },
        { dir: ['south'], id: 'dela-atto' },
        { dir: ['east'], id: 'rivi-ridg' },
        { dir: ['west'], id: 'rivi-clin'}, 
      ]
    },
    {
      id: 'rivi-ridg',
      coord: [],
      name: 'Rivington St. and Ridge St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'stan-ridg' },
        { dir: ['south'], id: 'dela-ridg' },
        { dir: ['east'], id: 'rivi-pitt' },
        { dir: ['west'], id: 'rivi-atto'}, 
      ]
    },
    {
      id: 'rivi-pitt',
      coord: [],
      name: 'Rivington St. and Pitt St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'stan-pitt' },
        { dir: ['south'], id: 'dela-pitt' },
        { dir: ['east'], id: 'rivi-colu' },
        { dir: ['west'], id: 'rivi-ridg'}, 
      ]
    },
    {
      id: 'rivi-colu',
      coord: [],
      name: 'Rivington St. and Columbia St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-colu' },
        { dir: ['south'], id: 'dela-colu' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: '', block: `You can't go that way.`}, 
      ]
    },
    {
      id: 'spri-bowe',
      coord: [],
      name: 'Spring St. and Bowery St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'rivi-bowe' },
        { dir: ['south'], id: 'kenm-bowe' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: '????'}, 
      ]
    },
    {
      id: 'kenm-bowe',
      coord: [],
      name: 'Kenmare St. and Bowery St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'spri-bowe' },
        { dir: ['south'], id: 'broo-bowe' },
        { dir: ['east'], id: 'dela-chry ' },
        { dir: ['west'], id: '????'}, 
      ]
    },
    {
      id: 'dela-chry',
      coord: [],
      name: 'Delancy St. and Chrystie Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'rivi-chry' },
        { dir: ['south'], id: 'broo-chry' },
        { dir: ['east'], id: 'dela-fors' },
        { dir: ['west'], id: 'kenm-bowe' }, 
      ]
    },
    {
      id: 'dela-fors',
      coord: [],
      name: 'Delancy St. and Forsyth St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'rivi-fors' },
        { dir: ['south'], id: 'broo-fors' },
        { dir: ['east'], id: 'dela-eldr' },
        { dir: ['west'], id: 'dela-chry'}, 
      ]
    },
    {
      id: 'dela-eldr',
      coord: [],
      name: 'Delancy St. and Eldridge St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'rivi-eldr' },
        { dir: ['south'], id: 'broo-eldr' },
        { dir: ['east'], id: 'dela-alle' },
        { dir: ['west'], id: 'dela-fors'}, 
      ]
    },
    {
      id: 'dela-alle',
      coord: [],
      name: 'Delancy St. and Allen St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'rivi-alle' },
        { dir: ['south'], id: 'broo-alle' },
        { dir: ['east'], id: 'dela-orch' },
        { dir: ['west'], id: 'dela-eldr'}, 
      ]
    },
    {
      id: 'dela-orch',
      coord: [],
      name: 'Delancy St. and Orchard St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'rivi-orch' },
        { dir: ['south'], id: 'broo-orch' },
        { dir: ['east'], id: 'dela-ludl' },
        { dir: ['west'], id: 'dela-alle'}, 
      ]
    },
    {
      id: 'dela-ludl',
      coord: [],
      name: 'Delancy St. and Ludlow St. ',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'rivi-ludl' },
        { dir: ['south'], id: 'broo-ludl' },
        { dir: ['east'], id: 'dela-esse' },
        { dir: ['west'], id: 'dela-orch'}, 
      ]
    },
    {
      id: 'dela-esse',
      coord: [],
      name: 'Delancy St. and Essex St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'rivi-esse' },
        { dir: ['south'], id: 'broo-esse' },
        { dir: ['east'], id: 'dela-norf' },
        { dir: ['west'], id: 'dela-ludl'}, 
      ]
    },
    {
      id: 'dela-norf',
      coord: [],
      name: 'Delancy St. and Norfolk St. ',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'rivi-norf' },
        { dir: ['south'], id: 'broo-norf' },
        { dir: ['east'], id: 'dela-suff' },
        { dir: ['west'], id: 'dela-esse'}, 
      ]
    },
    {
      id: 'dela-suff',
      coord: [],
      name: 'Delancy St. and Suffolk St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'rivi-suff' },
        { dir: ['south'], id: 'broo-suff' },
        { dir: ['east'], id: 'will-clin' },
        { dir: ['west'], id: 'dela-norf'}, 
      ]
    },
    {
      id: 'dela-clin',
      coord: [],
      name: 'Delancy St. and Clinton St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'rivi-clin' },
        { dir: ['south'], id: 'will-clin' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: 'dela-suff'}, 
      ]
    },
    {
      id: 'dela-atto',
      coord: [],
      name: 'Delancy St. and Attorney St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'rivi-atto' },
        { dir: ['south'], id: '', block: `You can't go that way.` },
        { dir: ['east'], id: 'dela-ridg' },
        { dir: ['west'], id: 'dela-clin'}, 
      ]
    },
    {
      id: 'dela-ridg',
      coord: [],
      name: 'Delancy St. and Ridge St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'rivi-ridg' },
        { dir: ['south'], id: 'new-ridg' },
        { dir: ['east'], id: 'dela-pitt' },
        { dir: ['west'], id: 'dela-atto'}, 
      ]
    },
    {
      id: 'dela-pitt',
      coord: [],
      name: 'Delancy St. and Pitt St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'rivi-pitt' },
        { dir: ['south'], id: 'new-pitt' },
        { dir: ['east'], id: 'dela-colu' },
        { dir: ['west'], id: 'dela-ridg'}, 
      ]
    },
    {
      id: 'dela-colu',
      coord: [],
      name: 'Delancy St. and Columbia St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'rivi-colu' },
        { dir: ['south'], id: 'new-colu' },
        { dir: ['east'], id: 'dela-fdrd' },
        { dir: ['west'], id: 'dela-pitt'}, 
      ]
    },
    {
      id: 'dela-fdrd',
      coord: [],
      name: 'Delancy St. and ',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hous-fdrd' },
        { dir: ['south'], id: 'new-sout' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: 'dela-colu'}, 
      ]
    },
    {
      id: 'will-clin',
      coord: [],
      name: 'Williamsburg Brg. and Clinton St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'dela-clin' },
        { dir: ['south'], id: 'new-clin' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: 'dela-suff'}, 
      ]
    },
    {
      id: 'new-clin',
      coord: [],
      name: 'New St. and Clinton St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'will-clin' },
        { dir: ['south'], id: 'broo-clin' },
        { dir: ['east'], id: 'new-ridg' },
        { dir: ['west'], id: '', block: `You can't go that way.`}, 
      ]
    },
    {
      id: 'new-ridg',
      coord: [],
      name: 'New St. and Ridge St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'dela-ridg' },
        { dir: ['south'], id: 'broo-ridg' },
        { dir: ['east'], id: 'new-pitt' },
        { dir: ['west'], id: 'new-clin'}, 
      ]
    },
    {
      id: 'new-pitt',
      coord: [],
      name: 'New St. and Pitt St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'dela-pitt' },
        { dir: ['south'], id: 'broo-pitt' },
        { dir: ['east'], id: 'new-will' },
        { dir: ['west'], id: 'new-ridg'}, 
      ]
    },
    {
      id: 'new-will',
      coord: [],
      name: 'New St. and Willet St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '', block: `You can't go that way.` },
        { dir: ['south'], id: 'broo-will' },
        { dir: ['east'], id: 'new-colu' },
        { dir: ['west'], id: 'new-pitt'}, 
      ]
    },
    {
      id: 'new-colu',
      coord: [],
      name: 'New St. and Columbia St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'dela-colu' },
        { dir: ['south'], id: 'broo-colu' },
        { dir: ['east'], id: 'new-lewi' },
        { dir: ['west'], id: 'new-will'}, 
      ]
    },
    {
      id: 'new-lewi',
      coord: [],
      name: 'New St. and Lewis St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '', block: `You can't go that way.` },
        { dir: ['south'], id: 'gran-lewi' },
        { dir: ['east'], id: 'new-sout' },
        { dir: ['west'], id: 'new-colu'}, 
      ]
    },
    {
      id: 'new-sout',
      coord: [],
      name: 'New St. and South St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'dela-fdrd' },
        { dir: ['south'], id: 'gran-sout' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: 'new-lewi' }, 
      ]
    },
    {
      id: 'broo-bowe',
      coord: [],
      name: 'Broome St. and Bowery St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'kenm-bowe' },
        { dir: ['south'], id: 'gran-bowe' },
        { dir: ['east'], id: 'broo-chry' },
        { dir: ['west'], id: '????' }, 
      ]
    },
    {
      id: 'broo-chry',
      coord: [],
      name: 'Broome St. and Chrystie Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'dela-chry' },
        { dir: ['south'], id: 'gran-chry' },
        { dir: ['east'], id: 'broo-fors' },
        { dir: ['west'], id: 'broo-bowe'}, 
      ]
    },
    {
      id: 'broo-fors',
      coord: [],
      name: 'Broome St. and Forsyth St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'dela-fors' },
        { dir: ['south'], id: 'gran-fors' },
        { dir: ['east'], id: 'broo-eldr' },
        { dir: ['west'], id: 'broo-chry'}, 
      ]
    },
    {
      id: 'broo-eldr',
      coord: [],
      name: 'Broome St. and Eldridge St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'dela-eldr' },
        { dir: ['south'], id: 'gran-eldr' },
        { dir: ['east'], id: 'broo-alle' },
        { dir: ['west'], id: 'broo-fors'}, 
      ]
    },
    {
      id: 'broo-alle',
      coord: [],
      name: 'Broome St. and Allen St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'dela-alle' },
        { dir: ['south'], id: 'gran-alle' },
        { dir: ['east'], id: 'broo-orch' },
        { dir: ['west'], id: 'broo-eldr'}, 
      ]
    },
    {
      id: 'broo-orch',
      coord: [],
      name: 'Broome St. and Orchard St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'dela-orch' },
        { dir: ['south'], id: 'gran-orch' },
        { dir: ['east'], id: 'broo-ludl' },
        { dir: ['west'], id: 'broo-alle'}, 
      ]
    },
    {
      id: 'broo-ludl',
      coord: [],
      name: 'Broome St. and Ludlow St. ',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'dela-ludl' },
        { dir: ['south'], id: 'gran-ludl' },
        { dir: ['east'], id: 'broo-esse' },
        { dir: ['west'], id: 'broo-orch'}, 
      ]
    },
    {
      id: 'broo-esse',
      coord: [],
      name: 'Broome St. and Essex St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'dela-esse' },
        { dir: ['south'], id: 'gran-esse' },
        { dir: ['east'], id: 'broo-norf' },
        { dir: ['west'], id: 'broo-ludl'}, 
      ]
    },
    {
      id: 'broo-norf',
      coord: [],
      name: 'Broome St. and Norfolk St. ',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'dela-norf' },
        { dir: ['south'], id: 'gran-norf' },
        { dir: ['east'], id: 'broo-suff' },
        { dir: ['west'], id: 'broo-esse'}, 
      ]
    },
    {
      id: 'broo-suff',
      coord: [],
      name: 'Broome St. and Suffolk St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'dela-suff' },
        { dir: ['south'], id: 'gran-suff' },
        { dir: ['east'], id: 'broo-clin' },
        { dir: ['west'], id: 'broo-norf'}, 
      ]
    },
    {
      id: 'broo-clin',
      coord: [],
      name: 'Broome St. and Clinton St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'new-clin' },
        { dir: ['south'], id: 'gran-clin' },
        { dir: ['east'], id: 'broo-ridg' },
        { dir: ['west'], id: 'broo-suff'}, 
      ]
    },
    {
      id: 'broo-ridg',
      coord: [],
      name: 'Broome St. and Ridge St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'new-ridg' },
        { dir: ['south'], id: 'gran-ridg', },
        { dir: ['east'], id: 'broo-pitt' },
        { dir: ['west'], id: 'broo-clin'}, 
      ]
    },
    {
      id: 'broo-pitt',
      coord: [],
      name: 'Broome St. and Pitt St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'new-pitt' },
        { dir: ['south'], id: 'gran-pitt' },
        { dir: ['east'], id: 'broo-will' },
        { dir: ['west'], id: 'broo-ridg'}, 
      ]
    },
    {
      id: 'broo-will',
      coord: [],
      name: 'Broome St. and Willet St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'new-will' },
        { dir: ['south'], id: 'gran-will' },
        { dir: ['east'], id: 'broo-colu' },
        { dir: ['west'], id: 'bro-pitt'}, 
      ]
    },
    {
      id: 'broo-colu',
      coord: [],
      name: 'Broome St. and Columbia St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'new-colu' },
        { dir: ['south'], id: 'gran-colu' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: 'broo-will'}, 
      ]
    },
    {
      id: 'gran-bowe',
      coord: [],
      name: 'Grand St. and Bowery St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broo-bowe' },
        { dir: ['south'], id: 'hest-bowe' },
        { dir: ['east'], id: 'gran-chry' },
        { dir: ['west'], id: '????'}, 
      ]
    },
    {
      id: 'gran-chry',
      coord: [],
      name: 'Grand St. and Chrystie Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broo-chrys' },
        { dir: ['south'], id: 'hest-chry' },
        { dir: ['east'], id: 'gran-fors' },
        { dir: ['west'], id: 'gran-bowe'}, 
      ]
    },
    {
      id: 'gran-fors',
      coord: [],
      name: 'Grand St. and Forsyth St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broo-fors' },
        { dir: ['south'], id: 'hest-fors' },
        { dir: ['east'], id: 'gran-eldr' },
        { dir: ['west'], id: 'gran-chry'}, 
      ]
    },
    {
      id: 'gran-eldr',
      coord: [],
      name: 'Grand St. and Eldridge St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broo-eldr' },
        { dir: ['south'], id: 'hest-eldr' },
        { dir: ['east'], id: 'gran-alle' },
        { dir: ['west'], id: 'gran-fors'}, 
      ]
    },
    {
      id: 'gran-alle',
      coord: [],
      name: 'Grand St. and Allen St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broo-alle' },
        { dir: ['south'], id: 'hest-alle' },
        { dir: ['east'], id: 'gran-orch' },
        { dir: ['west'], id: 'gran-eldr'}, 
      ]
    },
    {
      id: 'gran-orch',
      coord: [],
      name: 'Grand St. and Orchard St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broo-orch' },
        { dir: ['south'], id: '' },
        { dir: ['east'], id: 'gran-ludl' },
        { dir: ['west'], id: 'gran-alle'}, 
      ]
    },
    {
      id: 'gran-ludl',
      coord: [],
      name: 'Grand St. and Ludlow St. ',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broo-ludl' },
        { dir: ['south'], id: '' },
        { dir: ['east'], id: 'gran-esse' },
        { dir: ['west'], id: 'gran-orch'}, 
      ]
    },
    {
      id: 'gran-esse',
      coord: [],
      name: 'Grand St. and Essex St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broo-esse' },
        { dir: ['south'], id: '' },
        { dir: ['east'], id: 'gran-norf' },
        { dir: ['west'], id: 'gran-ludl'}, 
      ]
    },
    {
      id: 'gran-norf',
      coord: [],
      name: 'Grand St. and Norfolk St. ',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broo-norf' },
        { dir: ['south'], id: '' },
        { dir: ['east'], id: 'gran-suff' },
        { dir: ['west'], id: 'gran-esse'}, 
      ]
    },
    {
      id: 'gran-suff',
      coord: [],
      name: 'Grand St. and Suffolk St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broo-suff' },
        { dir: ['south'], id: '' },
        { dir: ['east'], id: 'gran-clin' },
        { dir: ['west'], id: 'gran-norf'}, 
      ]
    },
    {
      id: 'gran-clin',
      coord: [],
      name: 'Grand St. and Clinton St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broo-clin' },
        { dir: ['south'], id: '' },
        { dir: ['east'], id: 'gran-ridg' },
        { dir: ['west'], id: 'gran-suff'}, 
      ]
    },
    {
      id: 'gran-ridg',
      coord: [],
      name: 'Grand St. and Ridge St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broo-ridg' },
        { dir: ['south'], id: '' },
        { dir: ['east'], id: 'gran-pitt' },
        { dir: ['west'], id: 'gran-clin'}, 
      ]
    },
    {
      id: 'gran-pitt',
      coord: [],
      name: 'Grand St. and Pitt St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broo-pitt' },
        { dir: ['south'], id: '' },
        { dir: ['east'], id: 'gran-will' },
        { dir: ['west'], id: 'gran-ridg'}, 
      ]
    },
    {
      id: 'gran-will',
      coord: [],
      name: 'Grand St. and Willet St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broo-will' },
        { dir: ['south'], id: '' },
        { dir: ['east'], id: 'gran-broa' },
        { dir: ['west'], id: 'gran-pitt'}, 
      ]
    },
    {
      id: 'gran-broa',
      coord: [],
      name: 'Grand St. and ',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '', block: `You can't go that way.` },
        { dir: ['south'], id: 'broa-will', },
        { dir: ['east'], id: 'gran-colu' },
        { dir: ['west'], id: 'gran-will'}, 
      ]
    },
    {
      id: 'gran-colu',
      coord: [],
      name: 'Grand St. and Columbia St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broo-colu' },
        { dir: ['south'], id: '', block: `You can't go that way.` },
        { dir: ['east'], id: 'gran-henr' },
        { dir: ['west'], id: 'gran-broa'}, 
      ]
    },
    {
      id: 'gran-henr',
      coord: [],
      name: 'Grand St. and ',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '', block: `You can't go that way.` },
        { dir: ['south'], id: 'henr-will' },
        { dir: ['east'], id: 'gran-jack' },
        { dir: ['west'], id: 'gran-colu'}, 
      ]
    },
    {
      id: 'gran-jack',
      coord: [],
      name: 'Grand St. and Jackson St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '', block: `You can't go that way.` },
        { dir: ['south'], id: 'madi-jack' },
        { dir: ['east'], id: 'gran-lwei' },
        { dir: ['west'], id: 'gran-henr'}, 
      ]
    },
    {
      id: 'gran-lewi',
      coord: [],
      name: 'Grand St. and Lewis St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'new-lewi' },
        { dir: ['south'], id: '', block: `You can't go that way.` },
        { dir: ['east'], id: 'gran-madi' },
        { dir: ['west'], id: 'gran-jack'}, 
      ]
    },
    {
      id: 'gran-madi',
      coord: [],
      name: 'Grand St. and ',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '', block: `You can't go that way.` },
        { dir: ['south'], id: 'madi-jack' },
        { dir: ['east'], id: 'gran-sout' },
        { dir: ['west'], id: 'gran-lwei'}, 
      ]
    },
    {
      id: 'gran-sout',
      coord: [],
      name: 'Grand St. and South St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'new-sout' },
        { dir: ['south'], id: 'sout-jack' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: 'gran-madi'}, 
      ]
    },
    {
      id: 'hest-bowe',
      coord: [],
      name: 'Hester St. and Bowery St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'gran-bowe' },
        { dir: ['south'], id: 'cana-bowe' },
        { dir: ['east'], id: 'hest-chry' },
        { dir: ['west'], id: '????'}, 
      ]
    },
    {
      id: 'hest-chry',
      coord: [],
      name: 'Hester St. and Chrystie Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'gran-chry' },
        { dir: ['south'], id: 'cana-chry' },
        { dir: ['east'], id: 'hest-fors' },
        { dir: ['west'], id: 'hest-bowe'}, 
      ]
    },
    {
      id: 'hest-fors',
      coord: [],
      name: 'Hester St. and Forsyth St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'gran-fors' },
        { dir: ['south'], id: 'cana-fors' },
        { dir: ['east'], id: 'hest-eldr' },
        { dir: ['west'], id: 'hest-chry'}, 
      ]
    },
    {
      id: 'hest-eldr',
      coord: [],
      name: 'Hester St. and Eldridge St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'gran-eldr' },
        { dir: ['south'], id: 'cana-eldr' },
        { dir: ['east'], id: 'hest-alle' },
        { dir: ['west'], id: 'hest-fors'}, 
      ]
    },
    {
      id: 'hest-alle',
      coord: [],
      name: 'Hester St. and Allen St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'gran-alle' },
        { dir: ['south'], id: 'cana-alle' },
        { dir: ['east'], id: 'hest-orch' },
        { dir: ['west'], id: 'hest-eldr'}, 
      ]
    },
    {
      id: 'hest-orch',
      coord: [],
      name: 'Hester St. and Orchard St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'gran-orch' },
        { dir: ['south'], id: 'cana-orch' },
        { dir: ['east'], id: 'hest-ludl' },
        { dir: ['west'], id: 'hest-alle'}, 
      ]
    },
    {
      id: 'hest-ludl',
      coord: [],
      name: 'Hester St. and Ludlow St. ',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'gran-ludl' },
        { dir: ['south'], id: 'cana-ludl' },
        { dir: ['east'], id: 'hest-esse' },
        { dir: ['west'], id: 'hest-orch'}, 
      ]
    },
    {
      id: 'hest-esse',
      coord: [],
      name: 'Hester St. and Essex St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'gran-esse' },
        { dir: ['south'], id: 'cana-esse' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: 'hest-ludl'}, 
      ]
    },
    {
      id: 'cana-bowe',
      coord: [],
      name: 'Canal St. and Bowery St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hest-bowe' },
        { dir: ['south'], id: '????' },
        { dir: ['east'], id: 'cana-chry' },
        { dir: ['west'], id: '????'}, 
      ]
    },
    {
      id: 'cana-chry',
      coord: [],
      name: 'Canal St. and Chrystie Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hest-chry' },
        { dir: ['south'], id: '????' },
        { dir: ['east'], id: 'cana-fors' },
        { dir: ['west'], id: 'cana-bowe'}, 
      ]
    },
    {
      id: 'cana-fors',
      coord: [],
      name: 'Canal St. and Forsyth St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hest-fors' },
        { dir: ['south'], id: '????' },
        { dir: ['east'], id: 'cana-eldr' },
        { dir: ['west'], id: 'cana-chry'}, 
      ]
    },
    {
      id: 'cana-eldr',
      coord: [],
      name: 'Canal St. and Eldridge St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hest-eldr' },
        { dir: ['south'], id: '????' },
        { dir: ['east'], id: 'cana-alle' },
        { dir: ['west'], id: 'cana-fors'}, 
      ]
    },
    {
      id: 'cana-alle',
      coord: [],
      name: 'Canal St. and Allen St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hest-alle' },
        { dir: ['south'], id: '????' },
        { dir: ['east'], id: 'cana-orch' },
        { dir: ['west'], id: 'cana-eldr'}, 
      ]
    },
    {
      id: 'cana-orch',
      coord: [],
      name: 'Canal St. and Orchard St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hest-orch' },
        { dir: ['south'], id: '????' },
        { dir: ['east'], id: 'cana-ludl' },
        { dir: ['west'], id: 'cana-alle'}, 
      ]
    },
    {
      id: 'cana-ludl',
      coord: [],
      name: 'Canal St. and Ludlow St. ',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hest-ludl' },
        { dir: ['south'], id: '????' },
        { dir: ['east'], id: 'cana-divi' },
        { dir: ['west'], id: 'cana-orch'}, 
      ]
    },
    {
      id: 'cana-divi',
      coord: [],
      name: 'Canal St. and Division St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '', block: `You can't go that way.` },
        { dir: ['south'], id: '????' },
        { dir: ['east'], id: 'cana-rutg' },
        { dir: ['west'], id: 'cana-ludl'}, 
      ]
    },
    {
      id: 'cana-rutg',
      coord: [],
      name: 'Canal St. and Rutgers St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'hest-rutg' },
        { dir: ['south'], id: '????' },
        { dir: ['east'], id: 'broa-cana' },
        { dir: ['west'], id: 'cana-divi'}, 
      ]
    },
    {
      id: 'broa-cana',
      coord: [],
      name: 'E. Broadway and Canal St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '', block: `You can't go that way.` },
        { dir: ['south'], id: 'henr-rutg' },
        { dir: ['east'], id: 'broa-jeff' },
        { dir: ['west'], id: 'cana-rutg'}, 
      ]
    },
    {
      id: 'broa-jeff',
      coord: [],
      name: 'E. Broadway and Jefferson St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '', block: `You can't go that way.` },
        { dir: ['south'], id: 'henr-jeff', },
        { dir: ['east'], id: 'broa-clin' },
        { dir: ['west'], id: 'broa-cana'}, 
      ]
    },
    {
      id: 'broa-clin',
      coord: [],
      name: 'E. Broadway and Clinton St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'gran-clin' },
        { dir: ['south'], id: 'henr-clin' },
        { dir: ['east'], id: 'broa-mont' },
        { dir: ['west'], id: 'broa-jeff'}, 
      ]
    },
    {
      id: 'broa-mont',
      coord: [],
      name: 'E. Broadway and Montgomery St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '', block: `You can't go that way.` },
        { dir: ['south'], id: 'henr-mont' },
        { dir: ['east'], id: 'broa-pitt' },
        { dir: ['west'], id: 'broa-clin'}, 
      ]
    },
    {
      id: 'broa-pitt',
      coord: [],
      name: 'E. Broadway and Pitt St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'gran-pitt' },
        { dir: ['south'], id: 'henr-pitt' },
        { dir: ['east'], id: 'broa-will' },
        { dir: ['west'], id: 'broa-mont'}, 
      ]
    },
    {
      id: 'broa-will',
      coord: [],
      name: 'E. Broadway and Willet St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '', block: `You can't go that way.` },
        { dir: ['south'], id: 'henr-will' },
        { dir: ['east'], id: 'gran-broa' },
        { dir: ['west'], id: 'broa-pitt'}, 
      ]
    },
    {
      id: 'henr-pike',
      coord: [],
      name: 'Henry St. and Pike St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '????' },
        { dir: ['south'], id: 'madi-pike' },
        { dir: ['east'], id: 'henr-rutg' },
        { dir: ['west'], id: '????'}, 
      ]
    },
    {
      id: 'henr-rutg',
      coord: [],
      name: 'Henry St. and Rutgers St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broa-cana' },
        { dir: ['south'], id: 'madi-rutg' },
        { dir: ['east'], id: 'henr-jeff' },
        { dir: ['west'], id: 'henr-pike'}, 
      ]
    },
    {
      id: 'henr-jeff',
      coord: [],
      name: 'Henry St. and Jefferson St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broa-jeff' },
        { dir: ['south'], id: 'madi-jeff' },
        { dir: ['east'], id: 'henr-clin' },
        { dir: ['west'], id: 'henr-rutg'}, 
      ]
    },
    {
      id: 'henr-clin',
      coord: [],
      name: 'Henry St. and Clinton St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broa-clin' },
        { dir: ['south'], id: 'madi-clin' },
        { dir: ['east'], id: 'henr-mont' },
        { dir: ['west'], id: 'henr-jeff'}, 
      ]
    },
    {
      id: 'henr-mont',
      coord: [],
      name: 'Henry St. and Montgomery St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broa-mont' },
        { dir: ['south'], id: 'madi-mont' },
        { dir: ['east'], id: 'henr-pitt' },
        { dir: ['west'], id: 'henr-clin'}, 
      ]
    },
    {
      id: 'henr-pitt',
      coord: [],
      name: 'Henry St. and Pitt St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broa-pitt' },
        { dir: ['south'], id: '', block: `You can't go that way.` },
        { dir: ['east'], id: 'henr-will' },
        { dir: ['west'], id: 'henr-mont'}, 
      ]
    },
    {
      id: 'henr-will',
      coord: [],
      name: 'Henry St. and Willet St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'broa-will' },
        { dir: ['south'], id: '', block: `You can't go that way.` },
        { dir: ['east'], id: 'gran-henr' },
        { dir: ['west'], id: 'henr-pitt'}, 
      ]
    },
    {
      id: 'madi-pike',
      coord: [],
      name: 'Madison St. and Pike St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'henr-pike' },
        { dir: ['south'], id: 'monr-pike' },
        { dir: ['east'], id: 'madi-rutg' },
        { dir: ['west'], id: '????'}, 
      ]
    },
    {
      id: 'madi-rutg',
      coord: [],
      name: 'Madison St. and Rutgers St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'henr-rutg' },
        { dir: ['south'], id: 'cherr-rutg' },
        { dir: ['east'], id: 'madi-jeff' },
        { dir: ['west'], id: 'madi-pike'}, 
      ]
    },
    {
      id: 'madi-jeff',
      coord: [],
      name: 'Madison St. and Jefferson St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'henr-jeff' },
        { dir: ['south'], id: '', block: `You can't go that way.` },
        { dir: ['east'], id: 'madi-clin' },
        { dir: ['west'], id: 'madi-rutg'}, 
      ]
    },
    {
      id: 'madi-clin',
      coord: [],
      name: 'Madison St. and Clinton St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'henr-clin' },
        { dir: ['south'], id: 'cherr-clin' },
        { dir: ['east'], id: 'madi-mont' },
        { dir: ['west'], id: 'madi-jeff'}, 
      ]
    },
    {
      id: 'madi-mont',
      coord: [],
      name: 'Madison St. and Montgomery St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'henr-mont' },
        { dir: ['south'], id: 'cherr-mont' },
        { dir: ['east'], id: 'madi-gouv' },
        { dir: ['west'], id: 'madi-clin'}, 
      ]
    },
    {
      id: 'madi-gouv',
      coord: [],
      name: 'Madison St. and Gouverneur St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '', block: `You can't go that way` },
        { dir: ['south'], id: 'gouv-gouvS' },
        { dir: ['east'], id: 'madi-jack' },
        { dir: ['west'], id: 'madi-mont'}, 
      ]
    },
    {
      id: 'madi-jack',
      coord: [],
      name: 'Madison St. and Jackson St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'gran-jack' },
        { dir: ['south'], id: '', block: `You can't go that way.` },
        { dir: ['east'], id: 'gran-madi' },
        { dir: ['west'], id: 'madi-gouv'}, 
      ]
    },
    {
      id: 'monr-pike',
      coord: [],
      name: 'Madison St. and Pike St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'madi-pike' },
        { dir: ['south'], id: 'cherr-pike' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: '????'}, 
      ]
    },
    {
      id: 'cherr-pike',
      coord: [],
      name: 'Cherry St. and Pike St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'monr-pike' },
        { dir: ['south'], id: 'wate-pike' },
        { dir: ['east'], id: 'cherr-rutg' },
        { dir: ['west'], id: '????'}, 
      ]
    },
    {
      id: 'cherr-rutg',
      coord: [],
      name: 'Cherry St. and Rutgers St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'madi-rutg' },
        { dir: ['south'], id: 'wate-rutg' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: 'cherr-pike' }, 
      ]
    },
    {
      id: 'cherr-clin',
      coord: [],
      name: 'Cherry St. and Clinton St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'madi-clin' },
        { dir: ['south'], id: 'sout-clin' },
        { dir: ['east'], id: 'cherr-mont' },
        { dir: ['west'], id: '', block: `You can't go that way.` }, 
      ]
    },
    {
      id: 'cherr-mont',
      coord: [],
      name: 'Cherry St. and Montgomery St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'madi-mont' },
        { dir: ['south'], id: 'gouv-mont' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: 'cherr-clin' }, 
      ]
    },
    {
      id: 'wate-pike',
      coord: [],
      name: 'Water St. and Pike St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'cherr-pike' },
        { dir: ['south'], id: 'sout-pike' },
        { dir: ['east'], id: 'wate-rutg' },
        { dir: ['west'], id: '????' }, 
      ]
    },
    {
      id: 'wate-rutg',
      coord: [],
      name: 'Water St. and Rutgers St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'cherr-rutg' },
        { dir: ['south'], id: 'sout-rutg' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: 'wate-pike' }, 
      ]
    },
    {
      id: 'sout-pike',
      coord: [],
      name: 'South St. and Pike St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'wate-pike' },
        { dir: ['south'], id: '????' },
        { dir: ['east'], id: 'sout-rutg' },
        { dir: ['west'], id: '????'}, 
      ]
    },
    {
      id: 'sout-rutg',
      coord: [],
      name: 'South St. and Rutgers St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'wate-rutg' },
        { dir: ['south'], id: '????' },
        { dir: ['east'], id: 'sout-clin' },
        { dir: ['west'], id: 'sout-pike'}, 
      ]
    },
    {
      id: 'sout-clin',
      coord: [],
      name: 'South St. and Clinton St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'cherr-clin' },
        { dir: ['south'], id: '????' },
        { dir: ['east'], id: 'sout-mont' },
        { dir: ['west'], id: 'sout-rutg' }, 
      ]
    },
    {
      id: 'sout-mont',
      coord: [],
      name: 'South St. and Montgomery St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'gouv-mont' },
        { dir: ['south'], id: '????' },
        { dir: ['east'], id: 'sout-gouv' },
        { dir: ['west'], id: 'sout-clin' }, 
      ]
    },
    {
      id: 'gouv-mont',
      coord: [],
      name: 'Gouverneur Gdns. and Montgomery St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'cherr-mont' },
        { dir: ['south'], id: 'sout-mont' },
        { dir: ['east'], id: 'gouv-gouvW' },
        { dir: ['west'], id: '', block: `You can't go that way.` }, 
      ]
    },
    {
      id: 'gouv-gouvW',
      coord: [],
      name: 'Gouverneur Gdns. and Gouverneur Slip W',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '', block: `You can't go that way.` },
        { dir: ['south'], id: 'sout-gouv' },
        { dir: ['east'], id: 'gouv-gouvS' },
        { dir: ['west'], id: 'gouv-mont'}, 
      ]
    },
    {
      id: 'gouv-gouvS',
      coord: [],
      name: 'Gouverneur Gdns. and Gouverneur St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: '' },
        { dir: ['south'], id: '' },
        { dir: ['east'], id: 'gouv-gouvE' },
        { dir: ['west'], id: 'gouv-gouvW'}, 
      ]
    },
    {
      id: 'gouv-gouvE',
      coord: [],
      name: 'Gouverneur Gdns. and Gouverneur Slip E',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'madi-gouv' },
        { dir: ['south'], id: '', block: `You can't go that way.` },
        { dir: ['east'], id: 'gouv-jack' },
        { dir: ['west'], id: 'gouv-gouvS'}, 
      ]
    },
    {
      id: 'gouv-jack',
      coord: [],
      name: 'Gouverneur Gdns. and Jackson St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'sout-jack2' },
        { dir: ['south'], id: 'sout-jack1' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: 'gouv-gouvE'}, 
      ]
    },
    {
      id: 'sout-gouvW',
      coord: [],
      name: 'South St. and Gouverneur Slip W',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'gouv-gouvW' },
        { dir: ['south'], id: '????' },
        { dir: ['east'], id: 'sout-gouvE' },
        { dir: ['west'], id: 'sout-mont'}, 
      ]
    },
    {
      id: 'sout-gouvE',
      coord: [],
      name: 'South St. and Gouverneur Slip E',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'gouv-gouvE' },
        { dir: ['south'], id: '', block: `You can't go that way.` },
        { dir: ['east'], id: 'sout-jack1' },
        { dir: ['west'], id: 'sout-gouvW'}, 
      ]
    },
    {
      id: 'sout-jack1',
      coord: [],
      name: 'South St. and Jackson St.',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'gouv-jack' },
        { dir: ['south'], id: '????' },
        { dir: ['east'], id: '', block: `You can't go that way.` },
        { dir: ['west'], id: 'sout-gouvE'}, 
      ]
    },
    {
      id: 'sout-jack2',
      coord: [],
      name: 'South St. and Jackson St. Ste. #2',
      desc: ``,
      isStreets: true,
      exits: [
        { dir: ['north'], id: 'gran-sout' },
        { dir: ['south'], id: 'gouv-jack' },
        { dir: ['east'], id: '????' },
        { dir: ['west'], id: 'madi-jack'}, 
      ]
    },
        
    ]
    
}