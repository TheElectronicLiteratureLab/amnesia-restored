const anns_house = {
    roomId:'ann-1',
    rooms:[
        {
            id:'ann-1',
            name:`Ann's House`,
            desc:`You find 25 West 19th Street in the middle of the block on the uptown side of the street.`,
            exits: [
                {dir:['look'],id:'ann-2'},
                {dir:['enter'],id:'ann-3'}
            ]
        },
        {
            id:'ann-1',
            name:'',
            desc:`25 West 11th St. is a five-story brownstone about thirty feet wide that stands between a parking lot and a taller but almost equally narrow office building. Its first story is occupied by a beauty salon in a state of advanced redecoration. A broad flight of steps, flanked by wrought-iron balustrades, mounts steeply to the carved entrance portico. To the right of the entrance is a wide bay formed by two large plate-glass windows hung with white lace curtains.`,
            exits:[
                {dir:['enter'],id:'ann-3'}
            ]
        },
        {
            id:'ann-2',
            name:'',
            desc:``,
        }
    ]
}