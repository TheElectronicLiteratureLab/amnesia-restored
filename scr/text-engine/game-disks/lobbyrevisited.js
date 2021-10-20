const lobbyRevisited = {
    roomId: 'lobb-revi', //this is the Lobby Revisited Node, entered from the Chapel node
    rooms: [
        {
            roomId: 'lobb-revi',
            name: 'The Lobby',
            desc: `You are now in the lobby.`,
            
            onLook: () => {
                const room = getRoom('lobb-revi');
                room.desc = `Mirrors seem to be the prevailing theme at the Sunderland-- at least since the latest decorator got hold of it. There are mirrors on the walls, and mirrors encase the free-standing columns, and the three chandeliers that hang above the main reception area are formed of mirrors instead of crystal. Reflected and muliplied in all this silvered glass, the small body of the hotel's clientele become a multitude. To your right is the registration desk, and beyond it the exit to 53rd street; to your left a news-stand and gift shop, and then a large curving staircase going up to the second floor. 
                
                Beside the staircase a hand-lettered sign says:
                
                The Sunderland Hotel
                is happy to welcome
                The Noise Abatment League
                to the Big Apple.

                Beyond the staircase, at the end of a mirror-lined corridor, is an entrance to the Rathskeller Bar and Grill, and at the far end of the corridor is the exit to 52nd St.

                Directly in front of the elevator alcove in which you're standing is the main reception area. In the far corner of the reception area a lonely TV mutely displays the late news to an empty wingback chair. Near the TV area is a large couch and table, which serves as a lounge. 
                
                There is also a door between the reception desk and the 53rd St. exit, that leads to a cubicle of safe deposit boxes.`;
            }, 
            
            items: [
                {

                }
            ],
        },// closes lobb-revi room
        {
            id: 'lobb-revi-1',
            name: 'Newsstand',
            desc: `The upper part of the newsstand us given order to a display of gum and candy. Beneath this display there are a few remaining copies of the New York Post, and on either side of this are small hand-lettered signs explaining that the Times and Daily News are sold out. The Post's headline is ***MOB BOSS IN CASINO SLAYING***.`,
            
            items: [
                {

                }
            ],
        },// closes lobb-revi-1 room
        {
            id: 'lobb-revi-2',
            name: 'Giftshop',
            desc: ``,
            
            items: [
                {

                }
            ],
        },// closes lobb-revi-2 room
        {
            id: 'lobb-revi-3',
            name: 'Second Floor Staircase',
            desc: ``,
            
            items: [
                {

                }
            ],
        },// closes lobb-revi-3 room
        {
            id: 'lobb-revi-4',
            name: 'Rathskeller Bar and Grill',
            desc: ``,
            
            items: [
                {

                }
            ],
        },// closes lobb-revi-4 room
        {
            id: 'lobb-revi-5',
            name: '52nd Street Exit',
            desc: ``,
            
            items: [
                {

                }
            ],
        },// closes lobb-revi-5 room
        {
            id: 'lobb-revi-6',
            name: 'Registration Desk',
            desc: ``,
            
            items: [
                {

                }
            ],
        },// closes lobb-revi-6 room
        {
            id: 'lobb-revi-7',
            name: 'Safe Deposit Cubicle',
            desc: ``,
            
            items: [
                {

                }
            ],
        },// closes lobb-revi-7 room
        {
            id: 'lobb-revi-8',
            name: '53rd Street Exit',
            desc: ``,
            
            items: [
                {

                }
            ],
        },// closes lobb-revi-8 room
        {
            id: 'lobb-revi-9',
            name: ['Reception Area', 'Lounge'],
            desc: `You enter the reception area and find that you can't resist the invitation to relax offered by a large womblike sofa. Some yards away the TV makes a gentle, meaningless murmur, like the water of a brook. You notice that the bellboy who had brought the credit slip to your room is standing half-hidden by the draperies of a window alcove, watching the TV.`,
            
            items: [
                {
                    itemId: 'lobbytv',
                    name: ['TV', 'Television'],
                    desc: ``,
                    onLook: () => {
                        println(`You watch a news program that is in progress-- but you can't be said to listen to it, for a caucus of dissident members of the Noise Abatement League is carrying on a rather noisy argument over the League's platform, and the sound on the TV has been turned quite low.
                            
                        You see a smiling reporter with a microphone standing outside a large stone building. Someone entering a limousine refuses to talk with him. Then there is a picture of a burning apartment building being doused by the Fire Department. Then an advertisement for Total (which seems as familiar to you as the face of the Mona Lisa; your amnesia doesn't extend to television ads, apparently), and another advertisement for fur coats.`);
                        pressEnter('lobb-revi-10');
                    }
                }     
            ],
            exits: [
                {
                    dir: ['e', 'east'],
                    id: 'lobb-revi-1',

                    // need to print an exit line `You rise from the sofa, making the vinyl cushions sigh, and return to the newsstand in the lobby.`
                },
                {
                    dir: ['w', 'west'],
                    id: 'lobb-revi-11'
                }
            ]
        },// closes lobb-revi-9 room
        {
            id: `lobb-revi-10`,
            name: '',
            desc: '',
            onEnter: () => {
                println(`Momentarily your attention is diverted by the shouts of the contending factions of the caucus of the Noise Abatement League. When you look back at the TV you think you see your own face on the screen. The hair is shorter, and you seem very unhappy. Small wonder, for this fleeting portrait is framed, at the top of the screen, by the word WANTED, and at the bottom by a string of numerals. You strain to hear the announcer's voice and catch only the end of the report:
                
                "...killed during his escape from the Texas State Penitentiary at Revoltillo, where the prisoner was serving a two-year sentence for the possession of an illegal substance. He is beleived to be armed and should be considered dangerous." This caution is followed by the weather report. Tomorrow will be another sunny day.`);
                pressEnter('lobb-revi-10');
            }
        }, // closes lobb-revi-10 room (watching TV continuation)
        {
            id: `lobb-revi-11`,
            name: '',
            desc: `You rise from the sofa, making the vinyl cushions sign, and walk toward the large curtained windows overlooking Fifth Avenue. Because it is dark outside and bright within the hotel, the window glass acts as yet one more mirror in the lobby's maze of mirrors.`,
            
            exits: {
                dir: ['e', 'east'],
                id: 'lobb-revi-9'
            }
        }
    ], // closes lobb-revi rooms
};// closes const lobbyRevisited 