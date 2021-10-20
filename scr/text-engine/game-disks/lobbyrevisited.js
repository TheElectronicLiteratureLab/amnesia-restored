const lobbyRevisited = {
    roomId: 'lobb-revi', //this is the Lobby Revisited Node, entered from the Chapel node
    rooms: [
        {
            roomId: 'lobb-revi',
            name: 'The Lobby',
            desc: `You are now in the lobby.`, // player is in the Elevator Alcove
            
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

            ],
            exits: [
                {
                    dir: ['n', 'north'],
                    id: 'lobb-revi-6'
                }, // go to reception desk
                {
                    dir: ['s', 'south'],
                    id: 'lobb-revi-1'
                }, // go to newsstand
                {
                    dir: ['e', 'east'],
                    block: `You can't go that way.`
                }, // no where to go
                {
                    dir: ['w', 'west'],
                    id: 'lobb-revi-9' 
                } // go to reception area
            ]
        },// closes lobb-revi room
        {
            id: 'lobb-revi-1',
            name: 'Newsstand',
            desc: `The upper part of the newsstand us given order to a display of gum and candy. Beneath this display there are a few remaining copies of the New York Post, and on either side of this are small hand-lettered signs explaining that the Times and Daily News are sold out. The Post's headline is ***MOB BOSS IN CASINO SLAYING***.`,
            
            items: [
                {

                }
            ],
            exits: [
                {
                    dir: ['n', 'north'],
                    id: 'lobb-revi-13'
                }, // go to elevator alcove
                {
                    dir: ['s', 'south'],
                    id: 'lobb-revi-2'
                }, // go to giftshop
                {
                    dir: ['e', 'east'],
                    block: `You can't go that way.`
                }, // no where to go
                {
                    dir: ['w', 'west'],
                    id: 'lobb-revi-9' 
                } // go to reception area
            ]
        },// closes lobb-revi-1 room
        {
            id: 'lobb-revi-2',
            name: 'Giftshop',
            desc: `The giftshop is closed. The front window shows a pretty display of books, multiple copies stacked with the book propped up on a metal stand. The titles read: ***The Genocides***, ***Camp Concentration***, ***334***, and ***On Wings of Song***. All books are by the same author, Thomas M. Disch.`,
            
            exits: [
                {
                    dir: ['n', 'north'],
                    id: 'lobb-revi-1'
                }, // go to newsstand
                {
                    dir: ['s', 'south'],
                    id: 'lobb-revi-3'
                }, // go to second floor staircase
                {
                    dir: ['e', 'east'],
                    block: `You can't go that way.`
                }, // no where to go
                {
                    dir: ['w', 'west'],
                    id: 'lobb-revi-9' 
                } // go to reception area
            ]
        },// closes lobb-revi-2 room
        {
            id: 'lobb-revi-3',
            name: 'Second Floor Staircase',
            desc: `There is a thick velvet rope strung across the stairs closing them off, and a hand-lettered sign explaining that the Noise Abatment League has ended its sessions for the day and that the convention suites are therefore closed for the evening.`,
            
            exits: [
                {
                    dir: ['n', 'north'],
                    id: 'lobb-revi-2'
                }, // go to giftshop
                {
                    dir: ['s', 'south'],
                    id: 'lobb-revi-4'
                }, // go to rathskeller bar and grill
                {
                    dir: ['e', 'east'],
                    block: `There is a thick velvet rope strung across the stairs closing them off. You cannot go up them.`
                }, // cannot go up stairs
                {
                    dir: ['w', 'west'],
                    id: 'lobb-revi-9' 
                } // go to reception area
            ]
        },// closes lobb-revi-3 room
        {
            id: 'lobb-revi-4',
            name: 'Rathskeller Bar and Grill',
            desc: `You proceed down the corridor as far as the double glass doors leading to the Rathskeller. Any impulse to sample the Rathskeller's cooking is nipped in the bud by the darkness behind the glass doors and a notice that the restaurant is closed.`,
            onLook: () => {
                println(`Only a short way ahead of you along the corridor are the revolving doors exiting to 52nd Street.`);
            },
            
            items: [
                {

                }
            ],
            exits: [
                {
                    dir: ['n', 'north'],
                    id: 'lobb-revi-3'
                }, // go to second floor staircase
                {
                    dir: ['s', 'south'],
                    id: 'lobb-revi-5'
                }, // go to 52nd street exit
                {
                    dir: ['e', 'east'],
                    block: `You can't go that way.`
                }, // no where to go
                {
                    dir: ['w', 'west'],
                    id: 'lobb-revi-9' 
                } // go to reception area
            ]
        },// closes lobb-revi-4 room
        {
            id: 'lobb-revi-5',
            name: '52nd Street Exit',
            desc: `This is the 52nd Street Exit.`,
            onLook: () => {
                println(`To either side of the exit are easy chairs. In one of them soneone has left a copy of the Daily News. Through the glass panels of the revolving doors, you can see the shifting lights of the evening traffic on 52nd Street and the occasional shadowy figure of a pedestrian walking past the hotel.`);
            },
            
            items: [
                {
                    itemId: 'dailynews',
                    name: 'Daily News',
                    desc: ``,
                    isTakeable: true,
                    isDroppable: true,
                    onLook: () => {
                        println(`You sit in the chair where you found the newspaper and skim the tabloid-size pages quickly, looking for clues to your own identity in the ads and photos. Were you ever the sort of person who would want to wear this 100% acrylic leisure suit with see-through mesh panels around the waist (only $49.95 while the supply lasts)? Or would you be more comfortable in this 3-piece pinstripe suit? Do gold neck chains appeal to you?`);
                        pressEnter('lobb-revi-12');
                    }
                }
            ],
            exits: [
                {
                    dir: ['n', 'north'],
                    id: 'lobb-revi-4'
                }, // go to rathskeller bar and grill
                {
                    dir: ['s', 'south'],
                    id: ''
                }, // exit building
                {
                    dir: ['e', 'east'],
                    block: `You can't go that way.`
                }, // no where to go
                {
                    dir: ['w', 'west'],
                    id: 'lobb-revi-9' 
                } // go to reception area
            ]
        },// closes lobb-revi-5 room
        {
            id: 'lobb-revi-6',
            name: 'Registration Desk',
            desc: `You walk over to the registration desk, where the **clerk** is patiently going about his duties.`,
            
            items: [
                {
                    itemId: `registrationdesk`,
                    name: [`Registration Desk`, 'desk'],
                    desc: `The registration desk, in keeping with the lobby's general insistence on mirrors, is formed of large sheets of black glass. The upper surface is kept tastefully bare except for a large bouguet of flowers so exotic only a florist would know their names and, just to the side of the bouquet, a stack of maps, each bearing the title ***STREETWISE MANHATTAN***. A small pasteboard sign beside the stack of maps invites the guests of the hotel to take one of the maps with the compliments of the management.`,
                },
                {
                    itemId: 'map',
                    name: 'map',
                    desc: `It is an accordion fold map printed on stiff paper. Parklands are indicated by fuchsia, the surrounding Hudson and East Rivers by a dark shade of the green favored by mentholated cigarettes, and the city itself by a tannish gray crisscrossed by a white mesh of streets and avenues. This, then, is the haystack in which you are the needle.`, // check what the colors are on the map that Wesley is designing and match them.
                    isTakeable: true,
                    onTake: () => {
                        println(`You take the map and slip it into your left hip pocket.`);
                    },
                    onDrop: () => {
                        println(`You shouldn't drop that. It might be important.`);
                    }
                }
            ],
            exits: [
                {
                    dir: ['n', 'north'],
                    id: 'lobb-revi-7'
                }, // go to safe deposit boxes
                {
                    dir: ['s', 'south'],
                    id: 'lobb-revi-13'
                }, // go to elevator alcove
                {
                    dir: ['e', 'east'],
                    block: `You can't go that way.`
                }, // no where to go
                {
                    dir: ['w', 'west'],
                    id: 'lobb-revi-9' 
                } // go to reception area
            ]
        },// closes lobb-revi-6 room
        {
            id: 'lobb-revi-7',
            name: 'Safe Deposit Cubicle',
            desc: ``,
            
            items: [
                {

                }
            ],
            exits: [
                {
                    dir: ['n', 'north'],
                    id: 'lobb-revi-8'
                }, // go to 53rd street exit
                {
                    dir: ['s', 'south'],
                    id: 'lobb-revi-6'
                }, // go to reception desk
                {
                    dir: ['e', 'east'],
                    block: `You can't go that way.`
                }, // no where to go
                {
                    dir: ['w', 'west'],
                    id: 'lobb-revi-9' 
                } // go to reception area
            ]
        },// closes lobb-revi-7 room
        {
            id: 'lobb-revi-8',
            name: '53rd Street Exit',
            desc: `You are at the 53rd Street Exit.`,
            onLook: () => {
                println(`Just outside the hotel a taxi has drawn up to the curb and the doorman is helping onload luggage from its trunk.`);
            },
            
            items: [
                {

                }
            ],
            exits: [
                {
                    dir: ['n', 'north'],
                    id: ''
                }, // exit onto streets
                {
                    dir: ['s', 'south'],
                    id: 'lobb-revi-7'
                }, // go to safe deposit boxes
                {
                    dir: ['e', 'east'],
                    block: `You can't go that way.`
                }, // no where to go
                {
                    dir: ['w', 'west'],
                    id: 'lobb-revi-9' 
                } // go to reception area
            ]
        },// closes lobb-revi-8 room
        {
            id: 'lobb-revi-9',
            name: 'Reception Area',
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
                    dir: ['n', 'north'],
                    block: `You can't go that way.`
                },
                {
                    dir: ['s', 'south'],
                    block: `You can't go that way.`
                },
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
            
            exits: [
                {
                    dir: ['n', 'north'],
                    block: `You can't go that way.`
                },
                {
                    dir: ['s', 'south'],
                    block: `You can't go that way.`
                },
                {
                    dir: ['e', 'east'],
                    id: 'lobb-revi-9'
                }
            ]  
        }, // closes lobb-revi-11 room (windows of reception area)
        {
            id: `lobb-revi-12`,
            name: '',
            desc: '',
            onEnter: () => {
                println(`This series of rather idle questions comes to an abrupt end as your turn to page 17 and see a blurry picture of your own scowling face. The hair is shorter, but there's no mistaking that face as anyone's but yours. The caption under the photo reads:
                
                ***SEARCH CONTINUES FOR ESCAPED CONVICT***
                
                Authorities in the Metropolitan area continue to look for Xaiver Hollings, wanted in connection with the slaying of a guard while Hollings escaped two months ago from the Texas State Penitentiary at Revoltillo. Hollings, sentenced to two years at hard labor for possession of illegal substances, is believed to be armed and is considered dangerous.`);
                pressEnter('lobb-revi-5');
            }
        }, // closes lobb-revi-12 room (daily news continuation)
        {
            id: 'lobb-revi-13',
            name: 'Elevator Alcove',
            desc: ``,

            items: [
                {
                    itemId: 'elevator',
                    name: ['elevators', 'elevator'],
                    desc: 'You are standing in front of the elevators. At the moment there are none available on the Lobby floor.',
                },
            ],
            exits: [
                {
                    dir: ['n', 'north'],
                    id: 'lobb-revi-6'
                }, // go to reception desk
                {
                    dir: ['s', 'south'],
                    id: 'lobb-revi-1'
                }, // go to newsstand
                {
                    dir: ['e', 'east'],
                    block: `You can't go that way.`
                }, // no where to go
                {
                    dir: ['w', 'west'],
                    id: 'lobb-revi-9' 
                } // go to reception area
            ]
        }, // closes lobb-revi-13
    ], // closes lobb-revi rooms
    characters: [
        {
            name: ['clerk', 'registration clerk', 'desk clerk'],
            roomId: 'lobb-revi-6',
            desc: `The desk clerk is a blond young man, probably in his mid-20's, who has gone prematurely bald and tries to disguise the fact by combing his side hair over the bald spot. It only makes his baldness more noticeable and pathertic. Is there (you wonder) some eveolutionary reason for baldness? If not, why do genes do it?`, // there's a response here, maybe this would be a block that prints a line if inputed...? Need to ask about blocks and placements. 
            onTalk: () => println(`"Hello, Mr. Cameron. How may I help you?`),

            topics: [
                {
                    option: 'Ask clerk about **safe deposit box**.',
                    line: `"I can assure you that no one has had access to your box since you last locked it yourself. However, as to your getting something out of it today, I'm sorry to have to tell you that the computer controlling the vault's security system has crashed and won't be working again until tomorrow. I do apologize for whatever inconvenience that may represent."`,   
                },
                {
                    option: 'Ask clerk to **see a manager**.',
                    line: `"I can assure you, Mr. Cameron, that the manager can tell you no more than I have. Whatever is in your safe deposit box will still be there tomorrow or any later day. Be sure, in the meantime, not to forget your password."`,
                    prereqs: ['safe deposit box']
                }
           ],
        },
    ], //closes lobb-revi characters
};// closes const lobbyRevisited 