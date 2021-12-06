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
            desc: `You take a seat at the piano and place your hands on the keyboard. You let your mind go blank, and then like water rising from some deep arterial spring, the music wells from you, filling the small apartment with a soaring melody. “John!” Bette exclaims. “Do you know what that music is?” You assure her you have no idea.
            “It’s the part of the Rachmaninoff piece that we played over and over on my stereo till the record was worn out. ‘Polichinelle,” that’s the name of it. You know what that means, don’t you? Your memories aren’t lost, they’re just buried deep inside of you.” At just that moment the phone rings, and Bette excuses herself to answer it. It is the editor of a magazine she is doing work for. “This may take a moment, John. Make yourself at home. Have a bath if you like. Or if you’re very tired, the sofa folds out into a bed.” Bette takes the cordless phone to the table where the prints and contact sheets are spread and begins to talk business with her editor.`,
        },
    ]
}
//add bette as a character