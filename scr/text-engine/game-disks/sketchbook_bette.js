const sketchbook ={
    onBlock: ()=> {
        //need to block if the player isnt in Washington Square Park.
        //if open sketchpad in Washginton Square park go to this room.
        //else say "Only in Washington Square Park"
    },
    roomId: 'book-1',
    rooms:[
        {
            id:'book-1',
            name:'',
            desc:``,
            onEnter: () => {
                println(`You open the sketchpad to the page bearing the hand-lettered sign: \nYOUR PORTRAIT
                \nIN CHARCOAL\n 5.00\nYou prop the sketchpad against the back of the bench, assume an artistic expression, and wait for a fish to take the bait. A few people glance your sign as they pass by, but none even slow down. Then there's a nibble\nA pair of teenagers, one blonde, the other brunette, comes to a halt some few feet from the bench and confers in whispers. 'Can we see one of your sketches?'`)
            },
            exits:[
                {dir:['yes'],id:'book-2'},
                {dir:['no'],id:'book-3'}
            ]
        },
        {
            id:'book-2',
            name:'',
            desc:`You show them the sketch you'd done of Tony, and they confer again. The brunette seems eager to have you do her portrait, but she hasn't enough money. Reluctantly her friend loans her five dollars. 'Okay,' the brunette says, and sits down stiffly on the edge of the bench to pose. 'But if I don't like it, I don't have to buy it. Okay?' You nod your acquiescence. 'Should i smile?'`,
            exits:[
                {dir:['yes'],id:'book-4'},
                {dir:['no'],id:'book-5'}
            ]
        },
        {
            id:'book-3',
            name:'',
            desc:`Oh, don't be so modest!' the blonde says, taking up your sketchpad with a laugh, and opening it to the sketch you'd done of Tony. 'You did this?' she asks. You nod, and they confer again. The brunette seems eager to have you do her portrait, but she hasn't enough money. Reluctantly her friend loans her five dollars. 'Okay,' the brunette says, and sits down stiffly on the edge of the bench to pose. 'But if I don't like it, I don't have to buy it. Okay?' You nod your acquiescence. 'Should I smile?`,
            exits:[
                {dir:['no'],id:'book-4'},
                {dir:['yes'],id:'book-5'}
            ]
        },
    ]
}