const lobbyRevisited = {
    roomId: 'lobb-revi', // this is the Lobby Revisited Node, entered from the Chapel node
    
    rooms: [
        {
            id: 'lobb-revi',
            name: 'The Lobby',
            desc: `You are now in the lobby.`, // player is in the Elevator Alcove
            onBlock: () =>{
                if(tipBellboy === false){
                    // add check if movecount has increased by 2
                    enterRoom('lobb-revi-20')
                }
            },
            onLook: () => {
                const room = getRoom('lobb-revi');
                room.desc = `Mirrors seem to be the prevailing theme at the Sunderland-- at least since the latest decorator got hold of it. There are mirrors on the walls, and mirrors encase the free-standing columns, and the three chandeliers that hang above the main reception area are formed of mirrors instead of crystal. Reflected and muliplied in all this silvered glass, the small body of the hotel's clientele become a multitude. To your right is the registration desk, and beyond it the exit to 53rd street; to your left a news-stand and gift shop, and then a large curving staircase going up to the second floor. 
                
                Beside the staircase a hand-lettered sign says:
                
                The Sunderland Hotel
                is happy to welcome
                The Noise Abatment League
                to the Big Apple.

                Beyond the staircase, at the end of a mirror-lined corridor, is an entrance to the Rathskeller Bar and Grill, and at the far end of the corridor is the exit to 52nd St.

                You're standing directly in front of the elevator alcove, across from you is the main reception area. In the far corner of the reception area a lonely TV mutely displays the late news to an empty wingback chair. Near the TV area is a large couch and table, which serves as a lounge. 
                
                There is also a door between the reception desk and the 53rd St. exit, that leads to a cubicle of safe deposit boxes.`;
            }, 
            
            exits: [
                {dir: ['n', 'north'], id: 'lobb-revi-6'}, // go to reception desk
                {dir: ['s', 'south'], id: 'lobb-revi-1'}, // go to newsstand
                {dir: ['e', 'east'], block: `lobb-revi-17`}, // no where to go
                {dir: ['w', 'west'], id: 'lobb-revi-9'} // go to reception area
            ]
        },// closes lobb-revi room
        {
            id: 'lobb-revi-1',
            name: 'Newsstand',
            desc: `The upper part of the newsstand us given order to a display of gum and candy. Beneath this display there are a few remaining copies of the New York Post, and on either side of this are small hand-lettered signs explaining that the Times and Daily News are sold out. The Post's headline is ***MOB BOSS IN CASINO SLAYING***.`,
            
            items: [
                {
                    itemId: 'post',
                    name: ['The Post', 'Post', 'Newspaper', 'Paper'],
                    desc: '',
                    isTakeable: true,
                    onTake: () => println(`You pick up a copy of the Post, as though to study the picture of the slain mob boss, and when you are certain the newsstand attendant has not noticed, you roll it up and put it under your arm.`),
                    isDroppable: true,
                    onLook: () => {
                       println(`The moment you shake out the newspaper to its full size a woman in a fur coat walks by, hitting the opened paper with her shoudler and knocking it to the floor. "Really!" she remarks with an offended look. "Must you stand right in the middle of the lobby with your paper?" She stomps away. 
                       
                       You bend down and pick up the paper from the lobby's carpet.`);
                       pressEnter('lobb-revi-14');
                    }
                }
            ],
            exits: [
                {dir: ['n', 'north'], id: 'lobb-revi-13'}, // go to elevator alcove
                {dir: ['s', 'south'], id: 'lobb-revi-2'}, // go to giftshop
                {dir: ['e', 'east'], block: `You can't go that way.`}, // no where to go
                {dir: ['w', 'west'], id: 'lobb-revi-9' } // go to reception area
            ]
        },// closes lobb-revi-1 room
        {
            id: 'lobb-revi-2',
            name: 'Giftshop',
            desc: `The giftshop is closed. The front window shows a pretty display of books, multiple copies stacked with the book propped up on a metal stand. The titles read: ***The Genocides***, ***Camp Concentration***, ***334***, and ***On Wings of Song***. All books are by the same author, Thomas M. Disch.`,
            
            exits: [
                {dir: ['n', 'north'], id: 'lobb-revi-1'}, // go to newsstand
                {dir: ['s', 'south'], id: 'lobb-revi-3'}, // go to second floor staircase
                {dir: ['e', 'east'],block: `You can't go that way.`}, // no where to go
                {dir: ['w', 'west'], id: 'lobb-revi-9'} // go to reception area
            ]
        },// closes lobb-revi-2 room
        {
            id: 'lobb-revi-3',
            name: 'Second Floor Staircase',
            desc: `There is a thick velvet rope strung across the stairs closing them off, and a hand-lettered sign explaining that the Noise Abatment League has ended its sessions for the day and that the convention suites are therefore closed for the evening.`,
            
            exits: [
                {dir: ['n', 'north'], id: 'lobb-revi-2'}, // go to giftshop
                {dir: ['s', 'south'], id: 'lobb-revi-4'}, // go to rathskeller bar and grill
                {dir: ['e', 'east'], block: `There is a thick velvet rope strung across the stairs closing them off. You cannot go up them.`}, // cannot go up stairs
                {dir: ['w', 'west'], id: 'lobb-revi-9'} // go to reception area
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
                {dir: ['n', 'north'], id: 'lobb-revi-3'}, // go to second floor staircase
                {dir: ['s', 'south'], id: 'lobb-revi-5'}, // go to 52nd street exit
                {dir: ['e', 'east'], block: `You can't go that way.`}, // no where to go
                {dir: ['w', 'west'], id: 'lobb-revi-9'} // go to reception area
            ]
        },// closes lobb-revi-4 room
        {
            id: 'lobb-revi-5',
            name: '52nd Street Exit',
            desc: `This is the 52nd Street Exit.`,
            onEnter: () => {
                const room = getRoom('hote-exit');

                room.streetExit = '52-5'; 
            },
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
                        println(`You sit in the chair where you found the newspaper and read various stories in the paper, with a growing sense that in some ways your amnesia must extend beyond the realm of your private life. So much of the world, as it is described in the news, seems strange past all belief. What kind of people would commit such atrocious crimes? The city seems like a pool of frenzied sharks, at least according to the Post. Has the world always been like this, and you'd just not known? You fold these questions so unsettling that you fold up the newspaper and put it in a trash receptacle.`);
                        // IF player hasn't spoken to bellboy add this to paper desc. "As you do, you catch a glimpse, in the mirrored wall, of the bellboy who has been watching TV-- but who is now watching you."
                    }
                }
            ],
            exits: [
                {dir: ['n', 'north'], id: 'lobb-revi-4'}, // go to rathskeller bar and grill
                {dir: ['s', 'south', 'leave'], id: 'hote-exit'}, // exit building
                {dir: ['e', 'east'], block: `You can't go that way.`}, // no where to go
                {dir: ['w', 'west'], id: 'lobb-revi-9'} // go to reception area
            ]
        },// closes lobb-revi-5 room
        {
            id: 'lobb-revi-6',
            name: 'Registration Desk',
            desc: '',
            onEnter: () => {
                const room = getRoom('lobb-revi-6');
                console.log(room.visits);
                if(room.visits === 0){
                    println(`As you walk pass the recpetion desk, the clerk behind the desk smiles: "Mr. Cameron, I thought I should tell you that a woman came to the desk about an hour ago and was very insistent that she be allowed to examine your **safe deposit box**. She said she was your wife, but she had no identification, and you weren't in your room, and at last she went away. I hope-- if she was indeed your wife-- that she was not too much inconvenienced. But we really can't allow anyone to have access to the safe deposit boxes except those who've signed for them."`);
                }
                room.visits++;
                console.log(room.visits);
                if(room.visits >= 2){
                    println(`You walk over to the registration desk, where the **clerk** is patiently going about his duties.`);
                    room.desc = room.desc.replace('', `The **clerk** is patiently going about his duties.`);
                }
            },
            onBlock: () => {
                const room = getRoom('lobb-revi-6');
                if(prevInput === 'ask about woman' || prevInput === 'ask about wife'){
                    println(`"I thought her a very attractive woman and quite smartly dressed. Of course, I did feel suspicious, having earlier spoken to the young lady, Miss Dudley, who had reserved the All-Faith Chapel for your wedding and whom I understood to be your intended bride. Of course, none of this is my business."`);
                }
                delete room.onBlock;

            },
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
                {dir: ['n', 'north'], id: 'lobb-revi-7', block: 'The deposit boxes are closed at the moment.'}, // go to safe deposit boxes
                {dir: ['s', 'south'], id: 'lobb-revi-13'}, // go to elevator alcove
                {dir: ['e', 'east'], block: `You can't go that way.`}, // no where to go
                {dir: ['w', 'west'], id: 'lobb-revi-9'} // go to reception area
            ]
        },// closes lobb-revi-6 room
        {
            id: 'lobb-revi-7',
            name: 'Safe Deposit Cubicle',
            desc: `The desk clerk unlocks the metal door of a cubbyhole of a room, and you follow him inside. Two of the walls are given over to steel safe deposit boxes of various sizes. There is a small table with a wooden chair by it. On the table is a computer keyboard and a small monitor, which connects by a black electric cord to a kind of dashboard projecting from the wall.
            
            "What is the number of your box, Mr. Cameron?"`,

            onBlock: () => {
                if(prevInput === ['I forgot',  `I don't know`, `I can't remember`]){
                    println(`"That's all right," the clerk says. "I can easily look up the number of the box in the register at the desk. But I hope you haven't forgetten the password. The box can't be opened unless you type in the original password you entered into the computer. Now if you'll give me just a moment to look in the register..." The clerk leaves you along for just a moment and returns to tell you that the number of your safe deposit box is 334.
                    
                    He shows you where your box is, switches on the computer, types a few instructions on keyboard, and leaves the room with this parting advice: "The security system will make allowance for as many as four errors-- so do type carefully. Remember, the computer understands a blank space as another letter. If I can be of further assistance, I'll be at the desk outside." He leaves you in the small safe deposit vault, facing the alert-looking monitor of the computer, with its cursor blinking in front of the blank space where you are supposed to type in the password:
                    
                    YOUR PASSWORD IS _ _ _ _  _ _ _`);
                    enterRoom('lobb-revi-18');
                } else if(prevInput === '334'){
                    println(`"Very good," says the clerk. He shows you the position of the box you've named, switches on the computer, types a few instructions on keyboard, and leaves the room with this parting advice: "The security system will make allowance for as many as four errors-- so do type carefully. Remember, the computer understands a blank space as another letter. If I can be of further assistance, I'll be at the desk outside." He leaves you in the small safe deposit vault, facing the alert-looking monitor of the computer, with its cursor blinking in front of the blank space where you are supposed to type in the password:
                    
                    YOUR PASSWORD IS _ _ _ _  _ _ _`);
                    enterRoom('lobb-revi-18');
                } else {
                    println(`"What is the number of your box, Mr. Cameron? Do you remember it?`);
                    enterRoom('lobb-revi-18');
                }
            },

            exits: [
                {dir: ['n', 'north'], id: 'lobb-revi-8'}, // go to 53rd street exit
                {dir: ['s', 'south'], id: 'lobb-revi-6'}, // go to reception desk
                {dir: ['e', 'east'], block: `You can't go that way.`}, // no where to go
                {dir: ['w', 'west'], id: 'lobb-revi-9'} // go to reception area
            ]
        },// closes lobb-revi-7 room
        {
            id: 'lobb-revi-8',
            name: '53rd Street Exit',
            desc: `On a table just to the left of the revolving doors exiting to 53rd St. there is a stack of maps, each bearing the title STREETWISE MANHATTAN. A small pastaboard sign beside the stack of ***maps*** invites the guests of the hotel to take one of the maps with the compliments of the management. On the edge of the table is a folded ***Times***`,
            onEnter: () => {
                const room = getRoom('hote-exit');

                room.streetExit = '53-5'; 
            },
            onLook: () => {
                println(`Just outside the hotel a taxi has drawn up to the curb and the doorman is helping onload luggage from its trunk.`);
            },
            items: [
                {
                    itemId: 'map',
                    name: 'map',
                    desc: `It is an accordion fold map printed on stiff paper. Parklands are indicated by fuchsia, the surrounding Hudson and East Rivers by a dark shade of the green favored by mentholated cigarettes, and the city itself by a tannish gray crisscrossed by a white mesh of streets and avenues. This, then, is the haystack in which you are the needle.`, // check what the colors are on the map that Wesley is designing and match them in the description. 
                    isTakeable: true,
                    onTake: () => {
                        println(`You take the map and slip it into your left hip pocket.`);
                    },
                    onDrop: () => {
                        println(`You shouldn't drop that. It might be important.`);
                    }
                },
                {
                   itemId: 'times',
                   name: ['times', 'New York Times', 'times newsspaper'],
                   desc: `You skim through the news and reviews and ads in the paper, looking always for some hint of who you are-- some special knowledge, some keenness of interest or hunger that would be a clue to the life you've forgotten. But all the news and reviews seem equally interesting and equally irrelevant. The baseball news evokes no sense of partisanship for one city's team more than another's. From reading through the financial pages, it seems pretty certain that you are not a banker or stockbroker, since there are many entire articles that make no sense to you at all. On the other hand, you do seem to know something about computers, to judge by your response to various ads for computer hardware and software.` 
                }
            ],
            exits: [
                {dir: ['n', 'north', 'leave'], id: 'hote-exit'}, // exit onto streets
                {dir: ['s', 'south'], id: 'lobb-revi-7', block: 'The deposit boxes are closed at the moment.'}, // go to safe deposit boxes
                {dir: ['e', 'east'], block: `You can't go that way.`}, // no where to go
                {dir: ['w', 'west'], id: 'lobb-revi-9'} // go to reception area
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
                {dir: ['n', 'north'], id: 'lobb-revi-15'},
                {dir: ['s', 'south'], id: 'lobb-revi-15'},
                {dir: ['e', 'east'], id: 'lobb-revi-15', // need to print an exit line `You rise from the sofa, making the vinyl cushions sigh, and return to the newsstand in the lobby.`
                },
                {dir: ['w', 'west'], id: 'lobb-revi-15'}
            ]
        },// closes lobb-revi-9 room
        {
            id: `lobb-revi-10`,
            name: '',
            desc: '',
            onEnter: () => {
                println(`Momentarily your attention is diverted by the shouts of the contending factions of the caucus of the Noise Abatement League. When you look back at the TV you think you see your own face on the screen. The hair is shorter, and you seem very unhappy. Small wonder, for this fleeting portrait is framed, at the top of the screen, by the word WANTED, and at the bottom by a string of numerals. You strain to hear the announcer's voice and catch only the end of the report:
                
                "...killed during his escape from the Texas State Penitentiary at Revoltillo, where the prisoner was serving a two-year sentence for the possession of an illegal substance. He is beleived to be armed and should be considered dangerous." This caution is followed by the weather report. Tomorrow will be another sunny day.`);
                pressEnter('lobb-revi-9');
            }
        }, // closes lobb-revi-10 room (watching TV continuation)
        {
            id: `lobb-revi-11`,
            name: '',
            desc: `You rise from the sofa, making the vinyl cushions sign, and walk toward the large curtained windows overlooking Fifth Avenue. Because it is dark outside and bright within the hotel, the window glass acts as yet one more mirror in the lobby's maze of mirrors.`,
            onBlock: () => {
                if(prevInput === 'mirror'){
                    const listClothes = playCloth;
                    println(`You look at your reflection and see that you are wearing:
                    
                    ${listClothes}`);

                    // create a look in mirror command that runs a function that lists line above and clothing worn. 
                }
            },
            exits: [
                {dir: ['n', 'north'], block: `You can't go that way.`},
                {dir: ['s', 'south'], block: `You can't go that way.`},
                {dir: ['w', 'west'], block: `You can't go that way.`}, 
                {dir: ['e', 'east'], id: 'lobb-revi-9'}
            ]  
        }, // closes lobb-revi-11 room (windows of reception area)
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
                {dir: ['n', 'north'], id: 'lobb-revi-6'}, // go to reception desk
                {dir: ['s', 'south'], id: 'lobb-revi-1'}, // go to newsstand
                {dir: ['e', 'east'], block: `You can't go that way.`}, // no where to go
                {dir: ['w', 'west'], id: 'lobb-revi-9'} // go to reception area
            ]
        }, // closes lobb-revi-13
        {
            id: 'lobb-revi-14',
            name: '',
            desc: '',
            onEnter: () => {
                println(`You shake out the newspaper, uninterrupted this time.
                
                You skim the tabloid-size pages quickly, looking for clues to your own identity in the ads and photos. Were you ever the sort of person who would want to wear this 100% acrylic leisure suit with see-through mesh panels around the waist (only $49.95 while the supply lasts)? Or would you be more comfortable in this 3-piece pinstripe suit? Do gold nexk chains appeal to you?
                
                This series of rather idle questions comes to an abrupt end as you turn to page 17 and see a blurry picture of your own scowling face. The hair is shorter, but there's no mistaking that face as anyone's but yours. The caption under the photo reads: 
                
                SEARCH CONTINUES FOR ESCAPED CONVICT
                
                Authorities in the Metropolitan area continue to look for Xaiver Hollings, wanted in connection with the slaying of a guard while Hollings escaped two months ago from the Texas State Penitentiary at Revoltillo. Hollings, sentenced to two years at hard labor for possession of illegal substances, is believed to be armed and is considered dangerous.`);
                pressEnter('lobb-revi-1');
            }
        }, // closes lobb-revi-14 (post continuation)
        {
            id: 'lobb-revi-15',
            name: '',
            desc: '',
            onEnter: () => {
                const room = getRoom('lobb-revi-9');
                delete room.exits[0].id;
                room.exits[0].block = `You can't go that way.`;
                delete room.exits[1].id;
                room.exits[1].block = `You can't go that way.`;
                room.exits[2].id = 'lobb-revi-1';
                room.exits[3].id = 'lobb-revi-11';

                println(`Just as you are about to retreat the bellboy comes toward you. "Mr. Hollings?", he inquires with a smile of professional deference. "Are you Xavier Hollings?"`);
            },
            onBlock: () => {
                if(prevInput === ('yes' || 'maybe' || `I don't know.`)){
                    println(`"You should be more caerful, Mr. Hollings. I mean, a white suit is kind of conspicuous for a man on the lam from a murder rap. The police have already been round once showing that same picture. You're lucky nobody but me recognized you. But I wouldn't push my luck staying on in...wasn't it Room 1502?" You are too startled to reply, and the bellboy goes on: "There was nothing about a reward for turning you in, so I didn't say anything then. I figured I'd wait round and talk to you first. Maybe you could help me forget I saw you."
                    
                    You realize you are being blackmailed.`);
                    if(getItemInInventory('ring') && prevInput === 'give ring to bellboy'){
                        println(`Quickly the bellboy flips open the lid of the box. "Thanks, Mr. Hollings. Or I guess I should say Mr. Cameron. Thanks a whole lot. I served time in the slammer myself, so I wish you the best of luck."`);
                        pressEnter('lobb-revi-9');
                    } else {
                        println(`"Gee, Mr. Hollings, I'm sorry to see you take that attitude." The bellboy strides across the reception area to the house phone. He dials a number and waits for an answer.`);
                        pressEnter('lobb-revi-16');
                    }
                } else {
                    println(`"Gee, Mr. Hollings, I'm sorry to see you take that attitude." The bellboy strides across the reception area to the house phone. He dials a number and waits for an answer.`);
                    pressEnter('lobb-revi-16');
                }
            }
        }, // closes lobb-revi-15 (bellboy confrontation)
        {
            id: 'lobb-revi-16',
            name: '',
            desc: '',
            onEnter: () => {
                println(`You follow the bellboy and while you stand undecided whether to speak to him, he gets a reply on the telephone and begins mumbling into the receiver. He hangs up, and disappears through a door behind the reception desk. The clerk at the desk notices you and calls out, "Mr. Camerom, would you come here a moment please?"`);
                enterRoom('lobb-revi-6');
            }
        }, // closes lobb-revi-16
        {   
            id: 'lobb-revi-17',
            name: 'Elevator Alcove',
            desc: `There are four elevators opening into the lobby. On the wall is a panel with an UP and DOWN button on it.`,
            elevatorcount: 0,

            items: [
                {
                    itemId: 'elevator',
                    name: 'elevator',
                    desc: 'There are four elevators opening into the lobby. On the wall is a panel with an UP and DOWN button on it.',
                            
                    onBlock: () => {
                        let room = getRoom('lobb-revi-17')
                            if(room.elevatorCount === 0){
                                if(prevInput === ('press up' || 'press down' || 'down' || 'up' || 'use elevator')){
                                    println(`You press the button to call for the elevator, intending to return to your room and enjoy the benefit of a night's rest, or at least of some peace and quiet, but while you wai tin the alcove a pair of policemen appear. One of them also presses the button summoning the elevator. The other, meanwhile, regards you curiously. And why shouldn't he? Your clothes would inspire anyone's curiosity. The elevator arrives, and the cops get in. "Going up?" the second cop asks, holding the elevator door open.`);
                                    elevatorCount++;
                                    if(prevInput === 'yes'){
                                        enterRoom('lobb-revi-19');
                                    } else if(prevInput === 'no'){
                                        println(`The doors of the elevator close, and you breathe a sigh of relief. You watch as the indicator lights trace the elevators ascent to the 15th floor, where it stops.`);
                                    }
                                }
                            }

                            if(room.elevatorCount !== 0){
                                println(`You wait some time for another elevator, and when it arrives the same two policemen get out. "Just the man we were looking for," says the first policeman with satisfaction. "Cuff him Louie, and I'll read him his rights." As the policeman finishes cuffing you, your rights have been read to you. You are not actually JOhn Cameron III, as it turns out, but Xavier Hollings, and you are wanted by the state of Texas for murdering a prison guard while escaping from the state penitentiary at Revoltillo.`);
                                pressEnter('deat-1'); // sends player to death and texas
                            }

                    
                    }   
                }
            ],
        }, // closes lobb-revi-17
        {
            id: 'lobb-revi-18',
            name: '',
            desc: '',
            passwordCount: 0,
            onBlock: () => {
                if(prevInput === 'with god'){
                    println(`With a click of instant recognition, the little metal door of Box 334 springs open, and a message appears on the monitor before you:
                    
                    YOUR SAFETY DEPOSIT BOX IS NOW OPEN FOR EXAMINATION.`);
                } else if(passwordCount === 0 && prevInput !== 'with god'){
                    passwordCount++;
                    println(`There is a delicate grinding sound from the console on the wall and then the screen of the monitor flashes this message at you: 
                    
                    I'M SORRY. THAT IS NOT THE PASSWORD THAT WILL OPEN YOUR BOX.
                    
                    PLEASE TRY TO REMEMBER THE EXACT WORD OR WORDS OR NUMERALS THAT YOU CHOSE TO BE THE PASSWORD.
                    
                    The screen blanks out for a moment, and then offers you another opportunity:
                    
                    YOUR PASSWORD IS _ _ _ _  _ _ _`);
                } else if(passwordCount === 1 && prevInput !== 'with god'){
                    passwordCount++;
                    println(`The screen blanks out for a moment, and you recall having read, earlier in the day, something that may have a hint specific to your present dilemma. But what was it? Something about "doubt and uncertainty." The cursor on the monitor before winks on and off, indifferent to your dilemma:
                    
                    YOUR PASSWORD IS _ _ _ _  _ _ _`);
                } else if(passwordCount === 2 && prevInput !== 'with god'){
                    passwordCount++;
                    println(`The screen blanks out, and now you remember that it was when you'd looked at the Gideon Bible's lists of chapter-and-verses to be read by those with particular needs. the text commended to those "in doubt and uncertainity" had been crossed out and another text number hand-written in its place. You certainly qualify on the score of doubt and uncertainty. What was that text?`);
                
                    if(prevInput === 'look at bible' && getItemInInventory('bible')){
                        println(`You take the Bible from your gym bag and find the page of recommended texts. Those in doubt and uncertainty are advised to read John I. You turn to the Gospel according to St. John, first chapter, first verse: "In the beginning was the Word, and the word was with God, and the word was God."
                        
                        The monitor is still winking its cursor at you, waiting for you to fill in the blank:
                        
                        YOUR PASSWORD IS _ _ _ _  _ _ _`);
                    } else {
                        println(`The monitor is still winking its cursor at you, waiting for you to fill in the blank:
                        
                        YOUR PASSWORD IS _ _ _ _  _ _ _`);
                    }
                } else if(passwordCount === 3 && prevInput !== 'with god'){
                    println(`Your fourth hunch is as wrong as the rest. The screen goes completely blank, and a buzzer softly bleeps. A moment later the desk clerk steps into the room. "I'm sorry, Mr. Cameron, but I'll have to ask you to step back out into the lobby. If you still can't remember your password, you'll have to speak with the manager tomorrow. He's the only one empowered to circumvent the password system. Sometimes these modern improvments are more trouble than they're worth." Reluctantly you return to the lobby, and the clerk locks the door to the safe deposit room.`);
                    enterRoom('lobb-revi');
                }
            },
            items: [
                {
                    itemId: 'safebox',
                    name: ['safe deposit box', 'deposit box'],
                    desc: ``,
                    onLook: () => {
                        const room = getRoom('lobb-revi-18');
                        println(`You life the gray metal lid of the box. the box contains a single 5 and 1/4-inch floppy disc in a plain paper sleeve. You feel equal pangs of curiousity and of disappointment. The disc may well have the answer to your basic question of WHO AM I? But money would have been more immediately useful. You feel like a kid who's unwrapped a Christmas present and has to say thank you for new underwear.`);

                        room.items.push({
                            itemId: 'floppydisk',
                            name: ['floppy disk', '5 and 1/4-inch floppy disk', 'disk'],
                            isTakeable: true,
                            onTake: () => println(`You take the disc and put it in the gym bag.`),
                            onDrop: () => println(`You shouldn't drop that. It might be important.`)
                        })
                    }       
                },
            ],
            exits: {dir: 'w', id: 'lobb-revi'} // can we print a line here saying `When you return to the lobby, the clerk looks up from the desk. You thank him and explain that you will have no further need for the safe deposit box.`
        }, // closes lobb-revi-18
        {
            id: 'lobb-revi-19',
            name: 'In Elevator',
            desc: '',
            onEnter: () => {
                println(`You get into the elevator and the doors close. "What floor?" the first cop asks you, his hand hovering over the double row of buttons`);
            },
            onBlock: () => {
                if(prevInput === ['fifteen', '15']){
                    println(`"Pardon me," says the second cop, "but would your name be...He consults a slip of paper he takes from the jacket pocket of his uniform. "...John Cameron?"`);
                    if(prevInput === ['yes', `I don't know`]){
                        println(`"Well, that is a real convenience," he says. Then, turning to his partner. "Cuff him, Louie, and I'll read him his rights." By the time the elevator has gone up to 7 and down again to the lobby, you have been handcuffed and your rights have been read to you. You are not actually John Cameron III, as it turns out, but Xavier Hollings, and you are wanted by the state of Texas for murdering a prison guard while escaping from the state penitentiary at Revoltillo.`);
                        pressEnter('deat-1');
                    } else if(prevInput === 'no'){
                        println(`"Well, then I guess your name must be Xavier Hollings, and it just so happens we've got a warrant for your arrest. Cuff him, Louie, and I'll read him his rights." By the time the elevator has gone up to 7 and down again to the lobby, you have been handcuffed and your rights have been read to you. You are not actually John Cameron III, as it turns out, but Xavier Hollings, and you are wanted by the state of Texas for murdering a prison guard while escaping from the state penitentiary at Revoltillo.`);
                        pressEnter('deat-1');
                    }
                } else {
                    println(`The policeman presses the button for the floor you've named, and the elevator doors close. As the elevator rises, he asks you, "Pardon me, sir, but would you name be John Cameron?"`);
                    if(prevInput === ['yes', `I don't know`]){
                        println(`"Well, that is a real convenience," he says. Then, turning to his partner. "Cuff him, Louie, and I'll read him his rights." By the time the elevator has gone up to 7 and down again to the lobby, you have been handcuffed and your rights have been read to you. You are not actually John Cameron III, as it turns out, but Xavier Hollings, and you are wanted by the state of Texas for murdering a prison guard while escaping from the state penitentiary at Revoltillo.`);
                        pressEnter('deat-1');
                    } else if(prevInput === 'no'){
                        println(`"Well, then I guess your name must be Xavier Hollings, and it just so happens we've got a warrant for your arrest. Cuff him, Louie, and I'll read him his rights." By the time the elevator has gone up to 7 and down again to the lobby, you have been handcuffed and your rights have been read to you. You are not actually John Cameron III, as it turns out, but Xavier Hollings, and you are wanted by the state of Texas for murdering a prison guard while escaping from the state penitentiary at Revoltillo.`);
                        pressEnter('deat-1');
                    }
                }
            }
        }, // closes lobb-revi-19
        {
            id: 'lobb-revi-20',
            name: '',
            desc: '',
            onEnter: () => {
                println(`A short distance away, half-concealed by one of the mirror-encased columns, is the bellboy who earlier had brought the credit-slip to your room. He sees you and raises his hand as though in greeting. Considering that you stiffed him of his tip, this seems very friendly of him, and you lift your hand to wave back. As you do so, you hear the snick and feel the embrace of handcuffs about your wrist. 
                
                "Xaiver Hollings," says the arresting officer, "you're under arrest. Please come with me." You realize the bellboy wasn't greeting you, but pointing you out to the pair of policemen who now escort you from the hotel. "Thanks for the tip," one of the cops says to the bellboy.
                
                "It's ironic," the bellboy observes in a tone of philosophic vindictiveness, "but if I'd been able to say the same thing to that cheapskate, I probably would have forgot his face right away and never have made any connection to his picture in the newpaper." The bellboy regards you with a happy sneer. "Maybe next time you're in a situation liek this, you'll rememebr to tip, huh? Schmuck!`);
                pressEnter('deat-1');
            }
        }
    ], // closes lobb-revi rooms
    characters: [
        {
            name: ['clerk', 'registration clerk', 'desk clerk'],
            roomId: 'lobb-revi-6',
            desc: '',
            onLook: () => {
                const clerk = getCharactersInRoom('lobb-revi-6');
                clerk.desc = `The desk clerk is a blond young man, probably in his mid-20's, who has gone prematurely bald and tries to disguise the fact by combing his side hair over the bald spot. It only makes his baldness more noticeable and pathertic. Is there (you wonder) some evolutionary reason for baldness? If not, why do genes do it?`;

                if(prevInput === `I don't know`){
                    println(`That's all right-- neither does Science.`);
                }
            },
            onTalk: () => println(`"Hello, Mr. Cameron. How may I help you?`),

            topics: [
                {
                    option: ['Ask clerk about **woman**', 'Ask clerk about **wife**'],
                    line: `"I thought her a very attractive woman and quite smartly dressed. Of course, I did feel suspicious, having earlier spoken to the young lady, Miss Dudley, who had reserved the All-Faith Chapel for your wedding and whom I understood to be your intended bride. Of course, none of this is my business."`,
                },
                {
                    option: 'Ask clerk about **safe deposit box**.',
                    line: `"I can assure you that no one has had access to your box since you last locked it yourself. However, as to your getting something out of it today, I'm sorry to have to tell you that the computer controlling the vault's security system has crashed and won't be working again until tomorrow. I do apologize for whatever inconvenience that may represent."`, 
                    // IF 24 hours has past change line to `"I can assure you that no one has had access to your box since you last locked it yourself. But if you would like to check for yourself, just step this way."`
                    onBlock: () => {
                        if(prevInput === 'follow clerk'){
                            enterRoom('lobb-revi-7');
                        }
                    }  
                },
                {
                    option: 'Ask clerk to **see a manager**.',
                    line: `"I can assure you, Mr. Cameron, that the manager can tell you no more than I have. Whatever is in your safe deposit box will still be there tomorrow or any later day. Be sure, in the meantime, not to forget your password."
                    
                    At the other end of the counter, the bell captain signals urgently to the desk clerk, who goes off with a final cringe of apology.`,
                    prereqs: ['safe deposit box']
                },
                {
                    option: 'Ask clerk about **room**.',
                    line: `"Your room is number 1502, sir."`
                }
           ],
        },
    ], //closes lobb-revi characters
};// closes const lobbyRevisited 