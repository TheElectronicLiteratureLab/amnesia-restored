const nobelesLobby = {
    roomId: 'nobe-1',
    rooms: [
        {
            id: 'nobe-1',
            name: 'Nobeles Lobby',
            desc: `You enter the lobby of a small apartment building identified by its canvas canopy as The Noblesse. You are introduced to the doorman as a houseguest who is to be admitted into the building at any time. \n\nIn the elevator going up to her fifth-floor apartment, your rediscovered beloved remembers that she has yet to tell you her name. She re-introduces herself, between kisses, as Bette Binet; single; age 28; a fashion photographer by profession; and a woman madly in love with a mysterious stranger, you. The elevator arrives at 5, and Bette leads the way to Apartment 5E, unlocks the door, opens it, and stands aside for you to enter.`,
            onBlock: () => {
                if(prevInput === 'enter apartment'){
                    enterRoom('nobe-2');
                }else{
                    enterRoom('nobe-3');
                }
            },
        },
        {
            id: 'nobe-2',
            name: '',
            desc: `You enter her apartment and Bette follows you inside. “Welcome home. Now, why don’t you sit down and ask all those questions you’re obviously bursting with. But first, do you want a drink?”`,
            exits: [
                {dir: ['sit'], id: 'nobe-4'},
                {dir: ['yes','please'], id: 'nobe-5'},
                {dir: ['no'], id: 'nobe-6'},
            ],
        },
        {
            id: 'nobe-3',
            name: '',
            desc: `Bette notices your hesitation to enter the apartment and enters ahead of you. “Come in,” she insists. “There’s no point standing in the hall to talk. Sit down and ask all those questions you’re obviously bursting with. But first do you want a drink?” You enter the apartment.`,
            exits: [
                {dir: ['sit'], id: 'nobe-4'},
                {dir: ['yes','please'], id: 'nobe-5'},
                {dir: ['no'], id: 'nobe-6'},
            ],
        },
        {
            id: 'nobe-4',
            name: '',
            desc: `You cross the room to a sofa stacked high with pillows and sit down. What a luxury to be safe and secure! Bette asks again if you would like a drink.`,
            exits: [
                {dir: ['yes','please'], id: 'nobe-5'},
                {dir: ['no'], id: 'nobe-6'},
            ],
            items: [
                {
                    itemId: 'apartment',
                    name: ['Apartment','Room','apartment','room'],
                    desc: `Betty’s studio apartment represents, spatially, the Minimum Daily Requirement for a civilized life. It is not much bigger than your room at the Sunderland Hotel. It has a single large window with a view, striped by the open blinds, of Gramercy Park. The kitchenette in the far corner is equipped with a small refrigerator surmounted by a microwave oven. In the same corner is a round glass topped table with two ice-cream-parlor chairs. The table clearly doubles as a desk, for it is strewn with letters, bills, and contact sheets and glossy prints of photos, just as the sofa doubles as a bed when it is folded out. There is a large walk-in closet facing the entrance of the apartment, its door partly ajar, and another door to the left of that: the bathroom, presumably. There is a dresser to the left of the window, a tv facing the sofa, but the most notable piece of furniture in the room is a baby grand piano, its gleaming ebony lid raised high. It dominates the space as completely as an elephant would dominate a sheepfold.`,
                    onLook: () => {
                        enterRoom('nobe-7');
                    }
                }
            ]
        },
        {
            id: 'nobe-5',
            name: '',
            desc: `“I can’t offer more than a glass of wine, I’m afraid,” Bette says, crossing the room to the kitchenette in the far corner. She takes a bottle of white wine from the refrigerator and two wine glasses from the cupboard above. She pours the wine into the glasses and brings them to where you’ve taken a seat on a sofa stacked high with pillows. She gives you one of the glasses and sits beside you. “Well, what do you think of this place. Would you believe it sublets for twelve hundred a month? I’ve had to learn to believe it.”`,
            items: [
                {
                    itemId: 'apartment',
                    name: ['Apartment','Room','apartment','room'],
                    desc: `Betty’s studio apartment represents, spatially, the Minimum Daily Requirement for a civilized life. It is not much bigger than your room at the Sunderland Hotel. It has a single large window with a view, striped by the open blinds, of Gramercy Park. The kitchenette in the far corner is equipped with a small refrigerator surmounted by a microwave oven. In the same corner is a round glass topped table with two ice-cream-parlor chairs. The table clearly doubles as a desk, for it is strewn with letters, bills, and contact sheets and glossy prints of photos, just as the sofa doubles as a bed when it is folded out. There is a large walk-in closet facing the entrance of the apartment, its door partly ajar, and another door to the left of that: the bathroom, presumably. There is a dresser to the left of the window, a tv facing the sofa, but the most notable piece of furniture in the room is a baby grand piano, its gleaming ebony lid raised high. It dominates the space as completely as an elephant would dominate a sheepfold.`,
                    onLook: () => {
                        enterRoom('nobe-7');
                    }
                }
            ]
        },
        {
            id: 'nobe-6',
            name: '',
            desc: ` You decline her offer, and together you sit down on a sofa piled high with pillows. “Well, what do you think of this place. Would you believe it sublets for twelve hundred a month? I’ve had to learn to believe it.”`,
            items: [
                {
                    itemId: 'apartment',
                    name: ['Apartment','Room','apartment','room'],
                    desc: `Betty’s studio apartment represents, spatially, the Minimum Daily Requirement for a civilized life. It is not much bigger than your room at the Sunderland Hotel. It has a single large window with a view, striped by the open blinds, of Gramercy Park. The kitchenette in the far corner is equipped with a small refrigerator surmounted by a microwave oven. In the same corner is a round glass topped table with two ice-cream-parlor chairs. The table clearly doubles as a desk, for it is strewn with letters, bills, and contact sheets and glossy prints of photos, just as the sofa doubles as a bed when it is folded out. There is a large walk-in closet facing the entrance of the apartment, its door partly ajar, and another door to the left of that: the bathroom, presumably. There is a dresser to the left of the window, a tv facing the sofa, but the most notable piece of furniture in the room is a baby grand piano, its gleaming ebony lid raised high. It dominates the space as completely as an elephant would dominate a sheepfold.`,
                    onLook: () => {
                        enterRoom('nobe-7');
                    }
                }
            ]
        },
        {
            id: 'nobe-7',
            name: '',
            desc: `Bette notices that the piano has captured your attention. “Isn’t it lovely?” she says. “It makes we wish I could play, but I can’t at all. And the terms of the sublet are that the piano is not to go into storage, so there it stands, my mute baby grand. Do you play?”`,
            exits: [
                {dir: ['yes'], id: 'nobe-8'},
                {dir: ['no'], id: 'nobe-9'},
                {dir: ['maybe'], id: 'nobe-10'},
            ]
        },
        {
            id: 'nobe-8',
            name: '',
            desc: ``,
            onEnter: () => {
                println(`“Wonderful! Play something, would you? I’d love to hear what my furniture sounds like.”`);
                pressEnter('nobe-11');
            },
        },
        {
            id: 'nobe-9',
            name: '',
            desc: ``,
            onEnter: () => {
                println(`"How can you be sure of that? Maybe you can but the amnesia’s made you forget that you can. I’ll bet it’s like riding a bicycle, though. Try it!”`);
                pressEnter('nobe-11');
            },
        },
        {
            id: 'nobe-10',
            name: '',
            desc: ``,
            onEnter: () => {
                println(`“Of course, with your amnesia you wouldn’t know until you actually try. Why don’t you try? I’ll bet it’s like riding a bicycle.”`);
                pressEnter('nobe-11');
            },
        },
        {
            id: 'nobe-11',
            name: '',
            desc: ``,
            onEnter: () => {
                println(`You take a seat at the piano and place your hands on the keyboard. You let your mind go blank, and then like water rising from some deep arterial spring, the music wells from you, filling the small apartment with a soaring melody. “John!” Bette exclaims. “Do you know what that music is?” You assure her you have no idea.
                “It’s the part of the Rachmaninoff piece that we played over and over on my stereo till the record was worn out. ‘Polichinelle,” that’s the name of it. You know what that means, don’t you? Your memories aren’t lost, they’re just buried deep inside of you.” At just that moment the phone rings, and Bette excuses herself to answer it. It is the editor of a magazine she is doing work for. “This may take a moment, John. Make yourself at home. Have a bath if you like. Or if you’re very tired, the sofa folds out into a bed.” Bette takes the cordless phone to the table where the prints and contact sheets are spread and begins to talk business with her editor.`);
                pressEnter('nobe-12');
            },
        },
        {
            id: 'nobe-12',
            name: '',
            desc: `Betty’s studio apartment represents, spatially, the Minimum Daily Requirement for a civilized life. It is not much bigger than your room at the Sunderland Hotel. It has a single large **window** with a view, striped by the open blinds, of Gramercy Park. The kitchenette in the far corner is equipped with a small refrigerator surmounted by a microwave oven. In the same corner is a round glass topped table with two ice-cream-parlor chairs. The table clearly doubles as a desk, for it is strewn with letters, bills, and contact sheets and glossy prints of photos, just as the sofa doubles as a bed when it is folded out. There is a large walk-in closet facing the entrance of the apartment, its door partly ajar, and another door to the left of that: the bathroom, presumably. There is a dresser to the left of the window, a tv facing the sofa, but the most notable piece of furniture in the room is a baby grand piano, its gleaming ebony lid raised high. It dominates the space as completely as an elephant would dominate a sheepfold.`,
            moveCount: 0,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === ''){
                    moveCount += 1
                }
                if(moveCount === 3){
                    enterRoom('nobe-19')
                }else{
                    if(prevInput === 'open blinds'){
                        enterRoom('nobe-13');
                    }else if (prevInput === 'sleep'){
                        enterRoom('nobe-14');
                    }else if( prevInput === 'kiss bette'){
                        enterRoom('nobe-17');
                    }else if(prevInput === 'Tell bette about address book'){
                        enterRoom('nobe-20')
                    }
                }
            },
            items: [
                {
                    itemId: 'apartment',
                    name: ['Apartment','Room','apartment','room'],
                    desc: `Betty’s studio apartment represents, spatially, the Minimum Daily Requirement for a civilized life. It is not much bigger than your room at the Sunderland Hotel. It has a single large window with a view, striped by the open blinds, of Gramercy Park. The kitchenette in the far corner is equipped with a small refrigerator surmounted by a microwave oven. In the same corner is a round glass topped table with two ice-cream-parlor chairs. The table clearly doubles as a desk, for it is strewn with letters, bills, and contact sheets and glossy prints of photos, just as the sofa doubles as a bed when it is folded out. There is a large walk-in closet facing the entrance of the apartment, its door partly ajar, and another door to the left of that: the bathroom, presumably. There is a dresser to the left of the window, a tv facing the sofa, but the most notable piece of furniture in the room is a baby grand piano, its gleaming ebony lid raised high. It dominates the space as completely as an elephant would dominate a sheepfold.`,
                },
                {
                    itemId: 'dres_phot',
                    name: ['picture', 'photo', 'Picture', 'Photo'],
                    desc: `The photo shows you in evening clothes standing before a wall from which the patterned paper is peeling. The contrast between your perfect formal attire and the dismal wallpaper is striking.\n\n Then you recognize the pattern of the wallpaper. You have seen those peagreen rosettes and khaki-colored leaves before. It is the hallway of the tenement where you'd slept and dreamt the dream that had faded from your memory till this moment.`,
                },
            ],
        },
        {
            id: 'nobe-13',
            name: '',
            desc: `You open the blinds`,
            items: [
                {
                    itemId: 'window',
                    name: ['window','Window'],
                    onLook: () => {
                        println(`Five stories below you can see the leaves of the tress in Gramercy Park shimmering in the lamplight.`);
                        enterRoom('nobe-13');
                    }

                },
            ],
        },
        {
            id: 'nobe-14',
            name: '',
            desc: `You had better open the sofabed first.`,
            onBlock: () => {
                if(prevInput === 'open sofabed' || prevInput === 'open bed'){
                    enterRoom('nobe 15');
                }else{
                    println(`Can you rephrase that please?`)
                }
            },
        },
        {
            id: 'nobe-15',
            name: '',
            desc: `You take the cushion off the sofa, and pull out the mattress.`,
            exits: [
                {dir: ['sleep'], id: 'nobe-16'}
            ],
        },
        {
            id: 'nobe-16',
            name: '',
            desc: `Bette says, 'Ah, bed, what a good idea! I've got to be up by six A.M., So I think I'll join you.' You both get cleaned up, and then retire for the evening. The next morning, you awake to find Bette finished with her preperations for going to work.`,
            onEnter: () => {
                if(getItemInInventory === 'floppy disk'){
                    pressEnter('nobe-20')
                }else{
                    pressEnter('nobe-21')
                }
            }
        },
        {
            id: 'nobe-17',
            name: '',
            desc: `Your lips meet softly in a sweet kiss.`,
            onBlock: () => {
                if(prevInput === 'make love to bette'){
                    enterRoom('nobe-18');
                }
            }
        },
        {
            id: 'nobe-18',
            name: '',
            desc: ``,
            onEnter: () => {
                whatEncounter = () => {
                    randomEncounter = math.floor(math.random()* 3);
                    if(randomEncounter === 0) {
                        println(`The look Bette is giving you is like a written invitation, and you answer it with your own best body english. Her arms slip around your body. Your tongues take taste tests of each other's flesh. The temperature rises, the beat quickens, and one thing leads to another.`);
                        pressEnter('nobe-12');
                        //need to change time according to what encounter is rolled.
                    }else if(randomEncounter === 1){
                        println(`Impulsively you kiss Bette, and she responds like a dam bursting. Her fingers claw your back, tangle in your hair, and touch all your buttons. Sensuality and love fuse into a single rocket to the moon. Woosh! And then you land on the moon and pick the flowers growing there and whisper endearment for who knows how long until it's time to return to the rocket and jet back to Earth for a soft landing in the tangled sheets of the unfolded sofabed.`);
                        pressEnter('nobe-12');
                    }else if(randomEncounter === 2){
                        println(` Bette responds to your kiss with the delicacy of a blossom opening at the pressure of the dawn's first light. Time stops and you seem, as your kiss continues, to take flight into the fifth dimension where size and color and rhythm all get synchronized and the usual chirping sounds that tell you you're happy become a whole symphony orchestra announcing the same fact, and you're Arturo Toscanini. You life your baton.`);
                        pressEnter('nobe-12');
                    }else{
                        println(`You kiss, and that kiss modulates into a kid of banquet, a love-feast, a smorgasboard that seems to be replenished by its own devourings. You understand why the word 'carnal' refers not only to the joy of sex but to the pleasure, as well, of being a carnivore. Meat! Bar-B-Q spare-ribs! Loin of pork and breast of veal! Flank steaks! Roast beef au jus! And ladles and ladles of hot gravy.`);
                        pressEnter('nobe-12');
                    }
                }
            },
        },
        {
            id: 'nobe-19',
            name: '',
            desc:`This means moveCount works!`,
        },
        {
            id: 'nobe-20',
            name: '',
            desc: `“How interesting,” she says. “And what a source of clues! Do you have it with you?”`,
            onBlock: () => {
                if(prevInput === 'no'){
                    enterRoom('nobe-21');
                }else if(prevInput === 'yes'){
                    enterRoom('nobe-22');
                }else if(prevInput === 'show bette address book'){
                    enterRoom('nobe-23');
                }else{
                    println(`Can you rephrase that please?`);
                }
            },
        },
        {
            id: 'nobe-21',
            name: '',
            desc: ``,
            onEnter: () => {
                println(`“What a pity. I hope you left it somewhere you can find it again. You ought to track down every person in that book. One of them is bound to know more about your pre-amnesia life than I do.”`);
                pressEnter('nobe-12');
            }
        },
        {
            id: 'nobe-22',
            name: '',
            desc: `“Can I see it?” she asks.`,
            exits: [
                {dir: ['yes'], id: 'nobe-23'},
            ],
        },
        {
            id: 'nobe-23',
            name: '',
            desc: `“I recognize this number. It’s Dial-a-Joke, isn’t it? I call it every week or so, to hear the latest tape that Jerry Ackerman does for them. I think he’s a scream. In fact, it was me who turned you on to Jerry Ackerman, and who gave you the Dial-a-Joke number. But none of the other numbers or names are familiar. Except SEX, that’s familiar, as an idea anyhow. You must try to get through to all the numbers you haven’t got a response from so far. The phone’s right there.” She nods toward the cordless telephone. “It’s at your disposal any time.”`,
        },




        {
            id: 'nobe-20',
            name: '',
            desc: `A thought strikes Bette as she gets ready to leave. 'Today, darling, you must try and do to that floppy disk whatever it is people do to floppy disks. Kick them? I'm sorry I don't have a computer you can kick your disk into, but there are stores in town where you can rent computers by the hour. I've seen ads for them.\n\n Bette announces that it is time for her to go to work, and that she'll be back around six. She gives you a kiss on her way out the door, then leaves. `,
            onEnter: () => {
                pressEnter('nobe-22');
            }
        },
        {
            id: 'nobe-21',
            name: '',
            desc: `As Bette prepares to leave, a thought strikes her. 'Didn't you tell me something about your having had a strongbox at the Sunderland Hotel? And if so, shouldn't you try to find out what's in it? Excuse my playing the private detective, darling. It's your amnesia, I shouldn't interfere. Bye for now.'\n\n Bette announces that it is time for her to go to work, and that she'll be back around six. She gives you a kiss on her way out the door, then leaves. `,
            onEnter: () => {
                pressEnter('nobe-22');
            }
        },
        {
            id: 'nobe-22',
            name: '',
            desc: `'Thank heaven,' Bette says, bursting into the room breathlessly. 'I thought of this before I got out of the lobby -- you might come down with a recurrance of your damned amnesia. And if you do, I don't want you to disappear again, darling. So roll up your sleeve, please. This won't hurt, I promise.'`,
            onBlock: () => {
                if(prevInput === 'roll up sleeve'){
                    enterRoom('nobe-24');
                }else if(prevInput === 'no'){
                    enterRoom('nobe-23');
                }else{
                    println(`can you rephrase that please?`)
                }
            },
        },
        {
            id: 'nobe-23',
            name: '',
            desc: `'Oh, don't be such a stick in the mud!' She takes a grip on your wrist and pushes up the sleeve. `,
            onEnter: () => {
                pressEnter ('nobe-24');
            }
        },
        {
            id: 'nobe-24',
            name: '',
            desc: `With a felt-tip marker Bette writes her telephone number in large letters on your left wrist: 555-0042. 'I've gotten this ink on my hands by accident a couple of times and it's nearly impossible to wash off.\n\n So there you are, tattooed with your old lady's phone number! How's that for romantic!'\n\n Bette promises not to surprise you again, then closes the door behind her on her way to work.`,

        },

    ],
    characters: [
        {
            name: ['Bette', 'bette'],
            roomId: 'nobe-12',
            topics: [
                {
                    option: '**PICTURE**',
                    line: `It was early last November, not long after we first met, at the F-Stop **Cafe**, that we discovered that derelict building and I took that lot of pictures.\n\n You were very reluctant to model for me, and it was only when I promised that the pictures would only go to magazines in Europe that you agreed.`,
                },
                {
                    option: '**CAFE**',
                    prereqs: ['picture'],
                    line: `'We met at a lunch at the F-stop Cafe in Chelsea. You'd come there with a model who was working with me that day. I rather moved in on her, though it was plain to see it was no very serious relationship.`,
                },
                {
                    option: '**JOHN**',
                    line: `'I could tell you many things about the man I fell in love with, and he went by the name of John Cameron, but I never learned very much about the life history of John Cameron. You said you went to school in Boston, but you didn't say at which university. \n\n You did seem to have all the time in the world. If you'd had a steady job anywhere you wouldn't have been able to do the modeling for me. But you also seemed fairly well-to-do. You picked up the tab at a lot of fairly swank restaurants, and you paid with a VISA card, so you did have some source of money.`,
                },
                {
                    option: '**XAVIER**',
                    line: `'You'll have to tell me about Xavier Hollings, I don't know anything about him.`,
                },
                {
                    option: '**MONEY**',
                    line: `Bette ashamedly replies, 'I'm sorry, John, but I forgot to go to the bank. I'll bring some cash home tomorrow.'`
                },
                {
                    option: '**HERSELF**',
                    line: `She gives a brief humorous description of her youth in the suburbs, her early marriage and divorce, and her career as a fashion photographer. 'Right now I'm about three rungs from the top of the ladder, but I doubt I'm ambitious enough to go all the way to the top. The best pictures I've had published so far are the pictures I took of you for MODA.'`
                }
            ],
        },
    ]
}
//add bette as a character