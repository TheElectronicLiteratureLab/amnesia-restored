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
            exits: [
                {dir: ['apartment'], id: 'nobe-2'},
            ]
        },
        {
            id: 'nobe-2',
            name: '',
            desc: `You enter her apartment and Bette follows you inside. “Welcome home. Now, why don't you sit down and ask all those questions you're obviously bursting with. But first, do you want a drink?”`,
            exits: [
                {dir: ['sit'], id: 'nobe-4'},
                {dir: ['yes','please'], id: 'nobe-5'},
                {dir: ['no'], id: 'nobe-6'},
            ],
        },
        {
            id: 'nobe-3',
            name: '',
            desc: `Bette notices your hesitation to enter the apartment and enters ahead of you. “Come in,” she insists. “There's no point standing in the hall to talk. Sit down and ask all those questions you’re obviously bursting with. But first do you want a drink?” You enter the apartment.`,
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
                    desc: `Betty's studio apartment represents, spatially, the Minimum Daily Requirement for a civilized life. It is not much bigger than your room at the Sunderland Hotel. It has a single large window with a view, striped by the open blinds, of Gramercy Park. The kitchenette in the far corner is equipped with a small refrigerator surmounted by a microwave oven. In the same corner is a round glass topped table with two ice-cream-parlor chairs. The table clearly doubles as a desk, for it is strewn with letters, bills, and contact sheets and glossy prints of photos, just as the sofa doubles as a bed when it is folded out. There is a large walk-in closet facing the entrance of the apartment, its door partly ajar, and another door to the left of that: the bathroom, presumably. There is a dresser to the left of the window, a tv facing the sofa, but the most notable piece of furniture in the room is a baby grand piano, its gleaming ebony lid raised high. It dominates the space as completely as an elephant would dominate a sheepfold.`,
                    onLook: () => {
                        enterRoom('nobe-7');
                    },
                },
            ],
        },
        {
            id: 'nobe-5',
            name: '',
            desc: `“I can't offer more than a glass of wine, I'm afraid,” Bette says, crossing the room to the kitchenette in the far corner. She takes a bottle of white wine from the refrigerator and two wine glasses from the cupboard above. She pours the wine into the glasses and brings them to where you’ve taken a seat on a sofa stacked high with pillows. She gives you one of the glasses and sits beside you. “Well, what do you think of this place. Would you believe it sublets for twelve hundred a month? I’ve had to learn to believe it.”`,
            items: [
                {
                    itemId: 'apartment',
                    name: ['Apartment','Room','apartment','room'],
                    desc: `Betty's studio apartment represents, spatially, the Minimum Daily Requirement for a civilized life. It is not much bigger than your room at the Sunderland Hotel. It has a single large window with a view, striped by the open blinds, of Gramercy Park. The kitchenette in the far corner is equipped with a small refrigerator surmounted by a microwave oven. In the same corner is a round glass topped table with two ice-cream-parlor chairs. The table clearly doubles as a desk, for it is strewn with letters, bills, and contact sheets and glossy prints of photos, just as the sofa doubles as a bed when it is folded out. There is a large walk-in closet facing the entrance of the apartment, its door partly ajar, and another door to the left of that: the bathroom, presumably. There is a dresser to the left of the window, a tv facing the sofa, but the most notable piece of furniture in the room is a baby grand piano, its gleaming ebony lid raised high. It dominates the space as completely as an elephant would dominate a sheepfold.`,
                    onLook: () => {
                        enterRoom('nobe-7');
                    }
                },
            ],
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
                    },
                },
            ],
        },
        {
            id: 'nobe-7',
            name: '',
            desc: `Bette notices that the piano has captured your attention. “Isn’t it lovely?” she says. “It makes we wish I could play, but I can’t at all. And the terms of the sublet are that the piano is not to go into storage, so there it stands, my mute baby grand. Do you play?”`,
            exits: [
                {dir: ['yes'], id: 'nobe-8'},
                {dir: ['no'], id: 'nobe-9'},
                {dir: ['maybe'], id: 'nobe-10'},
            ],
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
                println(`You take a seat at the piano and place your hands on the keyboard. You let your mind go blank, and then like water rising from some deep arterial spring, the music wells from you, filling the small apartment with a soaring melody. “John!” Bette exclaims. “Do you know what that music is?” You assure her you have no idea.\n
                “It’s the part of the Rachmaninoff piece that we played over and over on my stereo till the record was worn out. ‘Polichinelle,” that’s the name of it. You know what that means, don’t you? Your memories aren’t lost, they’re just buried deep inside of you.” At just that moment the phone rings, and Bette excuses herself to answer it. It is the editor of a magazine she is doing work for. “This may take a moment, John. Make yourself at home. Have a bath if you like. Or if you’re very tired, the sofa folds out into a bed.” Bette takes the cordless phone to the table where the prints and contact sheets are spread and begins to talk business with her editor.`);
                pressEnter('nobe-12');
            },
        },

//Place where player can sleep nobe-15 and nobe-19 goes to nobe-20 if the player has the floppy disk or nobe-21 if the player does not have the floppy disk, player can sleep in nobe-27 and goes to nobe-35, as well as in nobe-38 which loops back to nobe-27 after they sleep.

//Counter not working properly, need to troubleshoot

        {
            id: 'nobe-12',
            name: '',
            desc: ``,
            hasEntered: false,
            onEnter: () => {
                const room = getRoom(disk.roomId);

                if(room.hasEntered === false ) {
                    room.hasEntered === true;
                    betteCounter = 0;
                }

            },
        
            onBlock: () => {
                if(prevInput){
                    betteCounter++;
                    console.log('+1');
                }else{}
                if(betteCounter === 3){
                    enterRoom('nobe-19')
                }else if(prevInput === 'open blinds'){
                    enterRoom('nobe-13');
                }else if( prevInput === 'kiss bette'){
                    enterRoom('nobe-17');
                    }
            },
            items: [
                //open sofa not working
                {
                    itemId: 'sofa-bed',
                    name: [`sofa`, `sofabed`, `sofa-bed`],
                    desc: `At first glance it appears to be a regular living room sofa but upon further inspection you can see that the sofa opens up into a bed.`,
                    isOpen: false
                },
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
        //Should I cut having to open the blinds? It might be best to do this rather than try and get around the open command. Opening blinds isn't intuitive.
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
                        enterRoom('nobe-12');
                    }

                },
            ],
        },
        {
            id: 'nobe-14',
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
                    zRandomEncounter = math.floor(math.random()* 3);
                    if(zRandomEncounter === 0) {
                        println(`The look Bette is giving you is like a written invitation, and you answer it with your own best body english. Her arms slip around your body. Your tongues take taste tests of each other's flesh. The temperature rises, the beat quickens, and one thing leads to another.`);
                        pressEnter('nobe-12');
                        //need to change time according to what encounter is rolled.
                    }else if(zRandomEncounter === 1){
                        println(`Impulsively you kiss Bette, and she responds like a dam bursting. Her fingers claw your back, tangle in your hair, and touch all your buttons. Sensuality and love fuse into a single rocket to the moon. Woosh! And then you land on the moon and pick the flowers growing there and whisper endearment for who knows how long until it's time to return to the rocket and jet back to Earth for a soft landing in the tangled sheets of the unfolded sofabed.`);
                        pressEnter('nobe-12');
                    }else if(zRandomEncounter === 2){
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
            //If 10 moves are made within the apartment this line triggers
            id: 'nobe-19',
            name: '',
            desc:`Bette declares that she must be up early the next day for work. After you've each had a shower, you go to bed together on the unfolded sofa and are soon asleep.\n\n When you awake, you find Bette is almost ready to depart for the day.`,
            hasBed: true,
            onEnter: () => {
                slept();
                if(getItemInInventory === 'floppy disk'){
                    enterRoom('nobe-20');
                }else{
                    enterRoom('nobe-21');
                }
            },
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
            exits: [
                {dir: ['bathroom'], id: 'nobe-25'},
            ],
        },
        {
            id: 'nobe-25',
            name: '',
            desc: `You're in Bette's bathroom. It is tiled in light beige with chocolate brown fixtures. There is no tub, but a large stall shower, a toilet, and a towel rack with a large bath towl.`,
            onBlock: () => {
                if(prevInput === 'take a shower' || 'take shower'){
                    enterRoom('nobe-26');
                }
            },
        },
        {
            id: 'nobe-26',
            name: '',
            desc: `You step into the shower, slide the door shut, adjust the temperature to your liking, and take a nice long lathery shower. Not that you really needed one that badly, but cleanliness is next to godliness after all. You dry off with a big fluffy towel.`,
            //pcommand leave needs to be changed or this input needs to be changed.
            onBlock: () => {
                if(prevInput === 'leave bathroom'){
                    println(`You leave the bathroom and return to the main living area.`);
                    enterRoom('nobe-27');
                }else{
                    println(`Can you rephrase that please?`)
                }
            },
        },
        //Living room post shower
        {
            id: 'nobe-27',
            name: '',
            desc: ``,
            hasBed: true,
            onEnter: () => {
                slept();

                numbers.push(
                    {number:'555-0042', roomid:'phone-29', contactName: 'Bette'},);

                    const room = getRoom(disk.roomId);

                    if(room.hasEntered === false ) {
                        room.hasEntered === true;
                        bettesHome = 0;
                    }
                    
                    if(qMeridiem === 1 & zHours === 5){
                        bettesHome ++;
                    }
                    if(bettesHome === 1){
                        enterRoom('nobe-36');
                    }else if(bettesHome === 2){
                        enterRoom('nobe-40');
                    }else if(bettesHome === 3){
                        enterRoom('nobe-44');
                    }else if(bettesHome === 4){
                        enterRoom('nobe-47');
                    }else if(bettesHome >= 5){
                        println(`Bette arrives back from work.`);
                        if(meridam === 1 & zHours === 11){
                            enterRoom('nobe-39');
                        }//do I need an else statement here?
                    }

            },
            onBlock: () => {
                if(prevInput){
                    betteCounter++;
                }
                if(prevInput === 'turn on tv'){
                    enterRoom('nobe-28');
                }else if(prevInput === 'open fridge' || prevInput === 'eat'){
                    if(xMeridam >= 1 & zHours >= 5){
                        enterRoom('nobe-30');
                        }
                    else{
                        enterRoom('nobe-32');
                        }
                }else if(prevInput === 'leave'){
                    enterRoom('nobe-34');
                }
            },
            exits: [
                {dir: ['kitchen'], id: 'nobe-29'},
            ],
            items: [
                {
                    itemId: 'sofa-bed',
                    name: [`sofa`, `sofabed`, `sofa-bed`],
                    desc: `At first glance it appears to be a regular living room sofa but upon further inspection you can see that the sofa opens up into a bed.`,
                    isOpen: false
                },  
                {
                    itemId: 'apartment',
                    name: ['Apartment','Room','apartment','room'],
                    desc: `Betty’s studio apartment represents, spatially, the Minimum Daily Requirement for a civilized life. It is not much bigger than your room at the Sunderland Hotel. It has a single large window with a view, striped by the open blinds, of Gramercy Park. The kitchenette in the far corner is equipped with a small refrigerator surmounted by a microwave oven. In the same corner is a round glass topped table with two ice-cream-parlor chairs. The table clearly doubles as a desk, for it is strewn with letters, bills, and contact sheets and glossy prints of photos, just as the sofa doubles as a bed when it is folded out. There is a large walk-in closet facing the entrance of the apartment, its door partly ajar, and another door to the left of that: the bathroom, presumably. There is a dresser to the left of the window, a tv facing the sofa, but the most notable piece of furniture in the room is a baby grand piano, its gleaming ebony lid raised high. It dominates the space as completely as an elephant would dominate a sheepfold.`,
                },
                {
                    itemId: 'letter',
                    name: ['Letter', 'letter', 'Mail', 'mail'],
                    desc: `Bette's mail is her personal business -- leave it alone.`,
                },
                {
                    itemId: 'dresser',
                    name: ['dresser','Dresser'],
                    desc: `The dresser contains a jumble of socks, pantyhose, and daintier underthings, all jumbled together in a great tangle direct from the laundry bag to the drawer.`,
                }
            ],
        },
        {
            id: 'nobe-28',
            name: '',
            desc: `You turn on the TV`,
            onBlock: () => {
                println(`You flip through the channels on the TV, but find nothing appealing during the daytime hours. Frustrated, you turn the TV off.`)
                enterRoom('nobe-27');
            },
        },
        //eating dinner 1st day
        {
            id: 'nobe-29',
            name: '',
            desc: `You walk over to the kitchen area.`,
            onEnter: () => {
                enterRoom('nobe-27');
            },
        },
        {
            id: 'nobe-30',
            name: '',
            desc: `Bette says that she'll have one of whatever you're having. You look at all of the choices before you, and see Veal Chasseur, Duck a L'Orange, Chicken Veronique, Escargots au Beurre, and Quiche Lorraine. What is your pleasure?`,
            onBlock: () => {
                if(prevInput === 'veal chasseur' || prevInput === `duck l'orang` || prevInput === 'chicken veronique' || prevInput === 'escargot au reurre' || prevInput === 'quiche lorraine'){
                    enterRoom('nobe-31');
                }else{
                    println(`Can you rephrase that please?`);
                }
            },
        },
        {
            id: 'nobe-31',
            name: '',
            desc: ``,
            onEnter: () => {
                if(prevInput === 'veal casseur'){
                    println(`Veal it is.\n\n You take two packages out of the icebox, one for yourself and one for Bette. After reading the instructions on the backs of the packages, you pop them in the microwave, take them out, and dig up some plastic silverware.\n\nThe veal is sliced so thin it's a wonder it simply doesn't dissolve into the mushroom sauce.\n\n You enjoy the meal thoroughly. When you are done, the dishes and utensils go in the garbage. Ecologically unsound but undeniably convenient.`);
                    enterRoom('nobe-27');
                }else if(prevInput === `duck l'orang`){
                    println(`Duck it is.\n\n You take two packages out of the icebox, one for yourself and one for Bette. After reading the instructions on the backs of the packages, you pop them in the microwave, take them out, and dig up some plastic silverware.\n\n Somewhere under a thin slice of orange and on top of the bed of rice is supposed to be a boneless breast of duck. And here it is! You slice it into two mouthfuls to make it last.\n\nYou enjoy the meal thoroughly. When you are done, the dishes and utensils go in the garbage. Ecologically unsound but undeniably convenient.`);
                    enterRoom('nobe-27');
                }else if(prevInput === 'chicken veronique'){
                    println(`Duck it is.\n\n You take two packages out of the icebox, one for yourself and one for Bette. After reading the instructions on the backs of the packages, you pop them in the microwave, take them out, and dig up some plastic silverware.\n\n Somewhere under a thin slice of orange and on top of the bed of rice is supposed to be a boneless breast of duck. And here it is! You slice it into two mouthfuls to make it last.\n\n You enjoy the meal thoroughly. When you are done, the dishes and utensils go in the garbage. Ecologically unsound but undeniably convenient.`);
                    enterRoom('nobe-27');
                }else if(prevInput === 'escargot au reurre'){
                    println(`Snails it is.\n\n You take two packages out of the icebox, one for yourself and one for Bette. After reading the instructions on the backs of the packages, you pop them in the microwave, take them out, and dig up some plastic silverware.\n\n There are six snails in their own wee shells, and a thin slice of bread to sop up the garlic butter. 'Would you believe only a hundred and eighty calories?' the empty carton asks. You would.\n\n You enjoy the meal thoroughly. When you are done, the dishes and utensils go in the garbage. Ecologically unsound but undeniably convenient.`);
                    enterRoom('nobe-27');
                }else if(prevInput === 'quiche lorraine'){
                    println(`Quiche it is.\n\nYou take two packages out of the icebox, one for yourself and one for Bette. After reading the instructions on the backs of the packages, you pop them in the microwave, take them out, and dig up some plastic silverware.\n\n Quiche! And not just a mangy calorie-counted quiche, but a quiche of weight and substance.\n\n You enjoy the meal thoroughly. When you are done, the dishes and utensils go in the garbage. Ecologically unsound but undeniably convenient.`);
                    enterRoom('nobe-27');
                }
            }
        },
        {
            id: 'nobe-32',
            name: '',
            desc: `Bette isn't here, so you don't have to worry about her. You look at all of the choices before you, and see Veal Chasseur, Duck a L'Orange, Chicken Veronique, Escargots au Beurre, and Quiche Lorraine. What is your pleasure?`,
            onBlock: () => {
                if(prevInput === 'veal chasseur' || prevInput === `duck l'orang` || prevInput === 'chicken veronique' || prevInput === 'escargot au reurre' || prevInput === 'quiche lorraine'){
                    enterRoom('nobe-33');
                }else{
                    println(`Can you rephrase that please?`);
                }
            },
        },
        {
            id: 'nobe-33',
            name: '',
            desc: ``,
            onEnter: () => {
                if(prevInput === 'veal casseur'){
                    println(`Veal it is.\n\n You take your meal out of the icebox, read the cooking instructions, pop it in the microwave, take it out, and dig up some plastic silverware.\n\nThe veal is sliced so thin it's a wonder it simply doesn't dissolve into the mushroom sauce.\n\n You enjoy the meal thoroughly. When you are done, the dishes and utensils go in the garbage. Ecologically unsound but undeniably convenient.`);
                    enterRoom('nobe-27');
                }else if(prevInput === `duck l'orang`){
                    println(`Duck it is.\n\n You take your meal out of the icebox, read the cooking instructions, pop it in the microwave, take it out, and dig up some plastic silverware.\n\n Somewhere under a thin slice of orange and on top of the bed of rice is supposed to be a boneless breast of duck. And here it is! You slice it into two mouthfuls to make it last.\n\nYou enjoy the meal thoroughly. When you are done, the dishes and utensils go in the garbage. Ecologically unsound but undeniably convenient.`);
                    enterRoom('nobe-27');
                }else if(prevInput === 'chicken veronique'){
                    println(`Duck it is.\n\n You take your meal out of the icebox, read the cooking instructions, pop it in the microwave, take it out, and dig up some plastic silverware.\n\n Somewhere under a thin slice of orange and on top of the bed of rice is supposed to be a boneless breast of duck. And here it is! You slice it into two mouthfuls to make it last.\n\n You enjoy the meal thoroughly. When you are done, the dishes and utensils go in the garbage. Ecologically unsound but undeniably convenient.`);
                    enterRoom('nobe-27');
                }else if(prevInput === 'escargot au reurre'){
                    println(`Snails it is.\n\n You take your meal out of the icebox, read the cooking instructions, pop it in the microwave, take it out, and dig up some plastic silverware.\n\n There are six snails in their own wee shells, and a thin slice of bread to sop up the garlic butter. 'Would you believe only a hundred and eighty calories?' the empty carton asks. You would. \n\nYou enjoy the meal thoroughly. When you are done, the dishes and utensils go in the garbage. Ecologically unsound but undeniably convenient.`);
                    enterRoom('nobe-27');
                }else if(prevInput === 'quiche lorraine'){
                    println(`Quiche it is.\n\nYou take your meal out of the icebox, read the cooking instructions, pop it in the microwave, take it out, and dig up some plastic silverware.\n\nQuiche! And not just a mangy calorie-counted quiche, but a quiche of weight and substance.\n\n You enjoy the meal thoroughly. When you are done, the dishes and utensils go in the garbage. Ecologically unsound but undeniably convenient.`);
                    enterRoom('nobe-27');
                }
            }
        },
        {
            id: 'nobe-34',
            name: '',
            desc: `You leave Bette's apartment.\n\n Bette's apartment building sits at this corner. `,
            onEnter: () => {
                pressEnter('20-irvi');
                //player needs to be able to enter bettes apartment after the first time they have visited. 
            }
        },
        //player sleeps here.
        {
            id: 'nobe-35',
            name: '',
            desc: `You lie down and proceed to take a restful nap.`,
            onEnter: () => {
                if(xMeridam >= 1 & zHours >= 5){
                    println(`'You're going to bed -- at this hour? We'll never get to sleep. Here, read a book.'\n\n She hands you a copy of a marvelous novel called 'LITTLE, BIG,' and it keeps you up till long after midnight. That night your dreams all happen in the world of 'LITTLE, BIG.'\n\n The next morning you awake to find Bette completing her mourning ritual.`);
                    xMeridam === 0 & zHours === 6;
                    playFat === 100;
                }else{
                    xMeridam === 0 & zHours === 6;
                    playFat === 100;
                }
            },
        },
        //Bette's First Arrival
        {
            id: 'nobe-36',
            name: '',
            desc: `Bette enters the apartment with a Macy's shopping bag, inside of which is a box. 'I got you something new. I just couldn't stand seeing you wearing that old black turtleneck any longer. And I also thought, what if today's his birthday? You can't be sure it isn't after all. Go ahead open it.`,
            onBlock: () => {
                if(prevInput === 'open it' || prevInput === 'open box' || prevInput === 'open'){
                    enterRoom('nobe-38');
                }else if(prevInput === 'no'){
                    enterRoom('nobe-37');
                }else{
                    println(`Can you rephrase that please?`);
                }
            },
        },
        {
            id: 'nobe-37',
            name: '',
            desc: ``,
            onEnter: () => {
                println(`'Oh, don't be such a prude,' says Bette. 'Open it!'\n\n You comply with her wish.`);
                pressEnter('nobe-38');
            },
        },
        {
            id: 'nobe-38',
            name: '',
            desc: `In the box is a black turtleneck sweater. With a Ralph Lauren label. Bette looks dismayed. 'Oh dear, I told Ned to get anything BUT a black turtleneck. He must have misheard me.' She blushes. 'Ned's my assistant, and he loves to shop for clothes, so I sent him to Macy's with the shopping list.\n\n I'll take it back and get you something else.'\n\n You give her the box back and she puts it and the Macy's bag away.`,
            //after 10 prompts go to nobe-39
            onEnter: () => {
                
                //if player has been to user friendly computer store, and read the floppy disk, go to room phone call sequence that leads to the dakota

                const room = getRoom(disk.roomId);

                if(room.hasEntered === false ) {
                    room.hasEntered === true;
                    betteCounter = 0;
                }
                
                if(prevInput){
                    betteCounter ++;
                }
            },
            onBlock: () => {
                if(betteCounter === 10){
                    enterRoom('nobe-39')
                }else if(prevInput === 'leave'){
                    println(`Bette says: 'I wish you didn't need to go out, John. I'm terrified something will happen to you.' She kisses you goodbye.`)
                    enterRoom('nobe-34')
                }
            },
        },
        //player sleeps here.
        {
            id: 'nobe-39',
            name: '',
            desc: ``,
            hasBed: true,
            onEnter: () => {
                slept();
                if(getItemInInventory === 'floppy disk'){
                    println(`As though responding to a cue, the telephone rings. Bette walks over to the phone and answers it. It is an editor, who requires her immediate presence in a Chelsea studio. As she fills a nylon bag with camera equipment, she apologizes for having to leave you alone. 'I'll be back as soon as I can, probably around six.`)
                    pressEnter('nobe-49')
                }else{
                println(`Bette declares that she must be up early the next day for work. After you've each had a shower, you go to bed together on the unfolded sofa and are soon asleep.\n\n When you awake, you find Bette is almost ready to depart for the day.\n\n As she fills a nylon bag with camera equipment, she apologizes for having to leave you alone. 'I'll be back as soon as I can, probably around six.`);
                enterRoom('nobe-27');
                }
            },
        },
        //Bette's second arrival
        {
            id: 'nobe-40',
            name: '',
            desc: `Bette comes home with a package from Woolworth's. She won't let you see what it is till after dinner, which you are delegated to select and prepare from the choices available in the freezer.`,
            onEnter: () => {
                println(`Bette comes home with a package from Woolworth's. She won't let you see what it is till after dinner, which you are delegated to select and prepare from the choices available in the freezer.`);
                pressEnter('nobe-41');
            },
        },
        {
            id: 'nobe-41',
            name: '',
            desc: `After dinner Bette banishes you to the bathroom for five minutes, and when you come out you find she's spread the pieces of an enormous jigsaw puzzle over the glass-topped table. 'You used to love to do jig-saws,' she explains, 'and you said it was because they put you into a kind of trance state. This is a 2000 piece set that we've worked once already.\n\n But don't look at the picture on the box. My idea was that you might stir some of your buried memories by our working it together again. Do you want to try it?'`,
            exits: [
                {dir: ['yes'], id: 'nobe-42'},
                {dir: ['no'], id: 'nobe-43'},
            ],
        },
        {
            id: 'nobe-42',
            name: '',
            desc: ``,
            hasBed: true,
            //player sleeps after this
            onEnter: () => {
                println(`With Bette's help, you turn all the pieces right-side up, sorting out the edge pieces, and joining those together first. At the moment the frame is complete, you suddenly are able to envision the completed jigsaw and you describe it in detail to Bette:\n\n There are rowboats in the foreground clustered round a dock; the dark rippled water of a harbor or moat, and beyond the water a square-towered castle that must be somewhere in Europe, since it seems the genuine medieval article, and a great quantity of cloudless blue sky.\n\n\ Bette shows you the picture on the box, and it's all there just as you've described it.\n\n You continue working the puzzle till well past midnight, and though you find it a pleasant pastime you uncover no further buried memories. You go to bed with Bette and dream of jigsaw puzzles.\n\n When you awake late in the morning, Bette has already left for work.`)
                pressEnter('nobe-27')
            }
        },
        {
            id: 'nobe-43',
            name: '',
            desc: ``,
            onEnter: () => {
                println(`'That's fine by me,' says Bette, sweeping the pieces into the Woolworth's bag and depositing it in the garbage. 'Personally I can't think of a duller way to spend an evening.'\n\n She takes the bag of jigsaw piece out into the hall and deposits it in the incinerator chute. As she goes by with it, you look at the picture on the side of the box. It registers a zero on the seismograph of your memory.`);
                enterRoom('nobe-27');
            }
        },
        //Bette's third arrival
        {
            id: 'nobe-44',
            name: '',
            desc: `'Anyone hungry for Chinese food?' Bette calls out as she enters the apartment. 'I've butterfly shrimp, wor shu op, and chicken with almonds.' What do you want to start with?'`,
            onBlock: () => {
                if(prevInput){
                    enterRoom('nobe-45');
                }else{}
            },
        },
        {
            id: 'nobe-45',
            name: '',
            desc: `As you eat your Chinese dinner, Bette says: 'For dessert, instead of fortune cookies, which I never get because I'm too superstitious, I rented a cassette of a Hitchcock movie that we almost went out to see at a revival house back when we first started going out. But then a job came up, and I couldn't, and you seemed so disappointed. So tonight we'll see it. Would you like that?'`,
            exits: [
                {dir: ['yes'], id: 'nobe-46'},
                {dir: ['no'], id: 'nobe-47'},
            ]
        },
        {
            id: 'nobe-46',
            name: '',
            desc: `After dinner Bette puts the rented cassette in the VCR that lives under the tv and you settle beside her on the sofa to watch Hitchcock's SPELLBOUND. Gregory Peck plays a man suffering from amnesia, and Ingrid Bergman is a psychoanalyst trying to restore his memory. You and Bette begin to get the giggles halfway through the store, and by the end you are both weak with laughter.\n\n 'It does make you think, though,' Bette says, wiping away her tears of laughter. 'I mean, you were so anxious to see just that movie. Which means that for some reason you must have been interested in amnesia even then. I wonder why.'`,
            onBlock: () => {
                if(prevInput){
                    enterRoom('nobe-39')
                }
            }
        },
        //Bette's fourth arrival
        {
            id: 'nobe-47',
            name: '',
            desc: ``,
            //player sleeps here
            onEnter: () => {
                println(`Bette arrives home to announce that she is suffering a PMS headache of monstrous proportions. She takes two aspirins, covers her eyes with a small black sleep-mask ('So you can stay up and read, darling,' she explains.), gets into the unfolded sofabed, and falls into an uneasy sleep. You read a couple of back issues of 'The New Yorker' until you've developed a headache in sympathy with her's.\n\n Then you get ready to call it a night. 'We're becoming a couple,' you think happily as you drift off to sleep. 'We get sick together!'\n\n You both drift off to sleep.`);
                pressEnter('nobe-48');
            },
        },
        {
            id: 'nobe-48',
            name: '',
            desc: ``,
            onEnter: () => {
                slept();
                println(`The next morning, you awake to find that Bette has already left for work.`);
                enterRoom('nobe-27');
            },
        },
        {
            id: 'nobe-49',
            name: '',
            desc: `The phone rings`,
            onBlock: () => {
                if(prevInput === 'answer phone'){
                    enterRoom('nobe-50');
                }else{
                    println(`The phone keeps ringing.`)
                }
            },
        },
        {
            id: 'nobe-50',
            name: '',
            desc: `'John,' says Bette excitedly, when you pick up the phone. 'I've discovered a clue! Isn't that wonderful?'`,
            exits: [
                {dir: ['no'], id: 'nobe-51'},
                {dir: ['yes'], id: 'nobe-52'},
            ],
        },
        {
            id: 'nobe-51',
            name: '',
            desc: ``,
            onEnter: () => {
                println(`'Well, then nuts to you too! I'm going to tell you about my discovering anyhow.'`);
                pressEnter('nobe-52')
            },
        },
        {
            id: 'nobe-53',
            name: '',
            desc: `“Do you know that picture of you that’s on the dresser, the one with you looking so elegant against that dismal wallpaper in the abandoned building? Well, Ned was just packing up some of the clothes from that shooting to send them back to the designers, and he found this paperback mystery in the right front pocket of the suit you were wearing that day. It’s a reprint of an old thriller by Cornell Woolrich called THE BLACK CURTAIN, and it’s about amnesia. But that’s not the Clue. On the inside back cover of the book, you’ve written the phone number of someone called Denise, and I don’t remember there being any Denise in your Address Book. But I’m sure it’s your handwriting. Do you have a pencil to write down the number? Or can you remember it?”`,
            onBlock: () => {
                if(prevInput === 'find pencil'){
                    enterRoom('nobe-54');
                }else if(prevInput === 'remember it'){
                    enterRoom('nobe-55');
                }
            },
        },
        {
            id: 'nobe-54',
            name: '',
            desc: `You find a pencil and a scrap of paper and return to the phone. Bette reads out the number, and makes you repeat it to be sure it’s correct: 555-5413. “I hope it’s not Another Woman,” she adds, with a nervous laugh, “but I’ll have to wait till tonight to find out. We’ll be shooting all day on Liberty Island. Models in swimwear climbing around on the scaffolding that the statue is wrapped in. VOGUE is thinking of doing a patriotic issue. Ah, here’s the bunting now. Talk to you later.” She hangs up.`,
            onEnter: () => {
                numbers.push(
                    {number:'555-5413', roomid:'phone-30', contactName: 'Denise'}
                  );
            }
        },
        {
            id: 'nobe-55',
            name: '',
            desc: `“The number is 555-5413.”  She makes you repeat it to be sure it’s correct. “I hope it’s not Another Woman,” she adds, with a nervous laugh, “but I’ll have to wait till tonight to find out. We’ll be shooting all day on Liberty Island. Models in swimwear climbing around on the scaffolding that the statue is wrapped in. VOGUE is thinking of doing a patriotic issue. Ah, here’s the bunting now. Talk to you later.” She hangs up.`,
            //player has to call Denise.
            onEnter: () => {
                numbers.push(
                    {number:'555-5413', roomid:'phone-30', contactName: 'Denise'}
                  );
            },
        },


//Phone call to Denise
        {
            id: 'phone-30',
            name: '',
            desc: `The phone is answered at the third ring by a woman with an agreeable, low-pitched voice, who says, 'Hello, Mrs. Hollings here.'\n\n At last -- a bonafide connection to your past life! In your excitement you're momentarily at a loss for words, and the woman asks, 'Who is this?'`,
            onBlock: () => {
                if(prevInput === 'john' || prevInput === 'xavier' || 'zane'){
                    enterRoom('phone-31')
                }else{
                    println(`Can you rephrase that please?`)
                }
            },
        },
        {
            id: 'phone-31',
            name: '',
            desc: `The voice gasps as if you had just repeated her darkest secret. In the briefest of moments, she recovers. \n\n 'I must see you at once, there's much to explain, but you can't come here right now. The servants would recognize you, and they'll probably call the police. Wait a half-hour, and I'll give the servants a few hours off.\n\n You'll find me at the Dakota on the corner of Central Park West and 72nd street. Tell the guard at the door you want to see Colby. Do you need money?`,
            onBlock: () => {
                if(prevInput === 'yes'){
                    enterRoom('phone-33');
                }else if(prevInput === 'no'){
                    enterRoom('phone-32');
                }else{
                    println(`Before you've said two words, she interrupts. 'Darling, it's really not safe to talk on the phone. But we can speak privately at the Dakota. Remember, the name to give the guard is Colby. Take care.' She hangs up fore you can get in another word. You put down the receiver.`);
                    pressEnter('return to previous room(either nobe-55 or nobe-54)')
                }
            },
        },
        {
            id: 'phone-32',
            name: '',
            desc: ``,
            onEnter: () => {
                println(`Good, then I won't bother making a trip to the bank. Do hurry! See you!' She hangs up before you can get in another word. You put down the receiver.`);
                pressEnter('return to nobe-55 or nobe-54')
            },
        },
        {
            id: 'phone-33',
            name: '',
            desc: ``,
            onEnter: () => {
                println(`'I'll bring what I can scrape together in the house. A thousand anyhow. Do hurry! I'm so glad to hear your voice. Take care.' She hangs up before you can get in another word. You put down the receiver.`);
                pressEnter('return to previous room either nobe-54 or nobe-55')
            }
        },
        //if player tries to call Denise again after this
        {
            id: 'phone-34',
            name: '',
            desc: ``,
            onEnter: () => {
                println(`'I'll bring what I can scrape together in the house. A thousand anyhow. Do hurry! I'm so glad to hear your voice. Take care.' She hangs up before you can get in another word. You put down the receiver.`);
                pressEnter('previous room')
            }
        },
    ],


    characters: [
        {
            name: ['Bette', 'bette'],
            roomId: 'nobe-12',//can this be an array?
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
//How do we get the game to remember what room the player was in when they leave and return to Bette's Apartment?

/*numbers.push(
    {number:'555-0042', roomid:'phone-29', contactName: 'Bette'},
    {number:'555-5413', roomid:'phone-30', 'contactName: 'Denise'}
  );*/
