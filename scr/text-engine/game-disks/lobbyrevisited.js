const lobbyRevisited = {
    roomId = 'lobb-revi', //this is the Lobby Revisited Node, entered from the Chapel node
    rooms: [
        {
            roomId: 'lobb-revi',
            name: 'The Lobby',
            desc: ``,
            
            onLook: () => {
                const room = getRoom('lobb-revi');
                room.desc = `Mirrors seem to be the prevailing theme at the Sunderland-- at least since the latest decorator got hold of it. There are mirrors on the walls, and mirrors encase the free-standing columns, and the three chandeliers that hang above the main reception area are formed of mirrors instead of crystal. Reflected and muliplied in all this silvered glass, the small body of the hotel's clientele become a multitude. To your right is the registration desk, and beyond it the exit to 53rd street; to your left a news-stand and gift shop, and then a large curving staircase going up to the second floor. 
                
                Beside the staircase a hand-lettered sign says:
                
                The Sunderland Hotel
                is happy to welcome
                The Noise Abatment League
                to the Big Apple.

                Beyond the staircase, at the end of a mirror-lined corridor, is an entrance to the Rathskeller Bar and Grill, and at the far end of the corridor is the exit to 52nd St.

                Directly in front of the elevator alcove in which you're standing is the main reception area. In the far corner of the reception area a lonely TV mutely displays the evening news. Near the TV area is a large couch and table, which serves as a lounge. 
                
                There is also a door between the reception desk and the 53rd St. exit, that leads to a cubicle of safe deposit boxes.`;
            }, //maybe change this to being the desc by default without player needing to command look? Lobby Revisited doesn't have a room line introduction
            
            items: [
                {

                }
            ],//
        },//end of lobb-revi room
        {
            id: 'lobb-revi-1',
            name: 'Newsstand',
            desc: `The upper part of the newsstand us given order to a display of gum and candy. The newspapers are stacked up to knee-height beneath this display. The New York Times has a headline about a terrorist bombing in the Middle East. The Post's headline is ***MOB BOSS IN CASINO SLAYING***. The headline on the Daily News is ***SUBWAY STRIKERS BATTLE POLICE***.`,
            
            items: [
                {

                }
            ],//
        },//end of lobb-revi-1 room
        {
            id: 'lobb-revi-2',
            name: 'Giftshop',
            desc: ``,
            
            items: [
                {

                }
            ],//
        },//end of lobb-revi-2 room
        {
            id: 'lobb-revi-3',
            name: 'Second Floor Staircase',
            desc: ``,
            
            items: [
                {

                }
            ],//
        },//end of lobb-revi-3 room
        {
            id: 'lobb-revi-4',
            name: 'Rathskeller Bar and Grill',
            desc: ``,
            
            items: [
                {

                }
            ],//
        },//end of lobb-revi-4 room
        {
            id: 'lobb-revi-5',
            name: '52nd Street Exit',
            desc: ``,
            
            items: [
                {

                }
            ],//
        },//end of lobb-revi-5 room
        {
            id: 'lobb-revi-6',
            name: 'Registration Desk',
            desc: ``,
            
            items: [
                {

                }
            ],//
        },//end of lobb-revi-6 room
        {
            id: 'lobb-revi-7',
            name: 'Safe Deposit Cubicle',
            desc: ``,
            
            items: [
                {

                }
            ],//
        },//end of lobb-revi-7 room
        {
            id: 'lobb-revi-8',
            name: '53rd Street Exit',
            desc: ``,
            
            items: [
                {

                }
            ],//
        },//end of lobb-revi-8 room
        {
            id: 'lobb-revi-9',
            name: 'Reception Area',
            desc: ``,
            
            items: [
                {

                }
            ],//
        },//end of lobb-revi-9 room
        {
            id: 'lobb-revi-10',
            name: 'Lounge',
            desc: ``,
            
            items: [
                {

                }
            ],//
        },//end of lobb-revi-10 room
    ], //end of lobb-revi rooms
};//end of const lobbyRevisited 