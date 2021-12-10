const phoneCalls = {
    roomId: 'phone-1',
    rooms: [
        {
            id: 'phone-1',
            name: 'Front Desk',
            desc:`You've reached the front desk.`,
        },
        {
            id: 'phone-2',
            name: 'Room Service',
            desc: `After five rings a tired voice says, "Room Service. Your room number please?"`,
        },
        {
            id: 'phone-9',
            name: 'Roe & Harpmeister',
            desc: `The phone rings repeatedly. But no one's home. Finally you hang up. Your moment clinks into the coint slot, and you scoop it out.`,
            onEnter: () => {
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-10',
            name: `Rolo's Pizzeria`,
            desc: `You recieve a busy signal. You put back the reciever and your money drops into the coins slot. You scoop out your change.`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-11',
            name: `Koch's Florist`,
            desc: `You get a busy signal and hang up. Your money clinks into the coin slot, and you scoop it out.`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-12',
            name: `JA`,
            desc: `Jane Adams here. Sorry I'm not at home. If you'd like to leave a message, do so at the beep. And Bob, if this is you, you can get the contracts to me at five o'clock tomorrow outside the New York Stock Exchange.`,
            onEnter: () => {
                pressEnter('phone-12-2')
            },
        },
        {
            id: 'phone-12',
            name: `JA`,
            desc: `Jane Adams here. Sorry I'm not at home. If you'd like to leave a message, do so at the beep. And Bob, if this is you, you can get the contracts to me at five o'clock tomorrow outside the New York Stock Exchange.`,
            onEnter: () => {
                pressEnter('phone-12-2');
            },
        },
        {
            id: 'phone-12-2',
            name: `JA`,
            desc: `At the beep you leave a simple sincere message: "Hi, Jane. You'll never guess who this is. But I'll try and be there at five. Hope to see you,. Bye for now." You put back the receiver and as you do, your money clinks and rattles as it drops into the coin box.`,
            onEnter: () => {
                reenableInput();
                playerC.money += 0.25;
                const room = getRoom('phone-12');
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-13',
            name: `Wit's End`,
            desc: `The phone rings repeatedly. But no one's home. Finally you hang up. Your money clinks into the coin slot, and you scoop it out.`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-14',
            name: `FBI`,
            desc: `A tape recorded message answers the phone: "This is the F.B.I., the Art Deco hot spot that NEW YORK Magazine has called 'the Colonial Williamsburg of the Honkytonk Era.' Half price admission to all guys in Fedorasm and free admission to dolls in fur coats.`,
            onEnter: () => {
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
                pressEnter('phone-14-2');
            },
        },
        {
            id: 'phone-14-2',
            name: `FBI`,
            desc: `"The F.B.I., located at 69th and 1st, is open for business, and our roster of entertainers will include the sensational new comedian, Jerry Ackermann." The message is followed by a few bars of the march that had been the theme-song of the Forties radio program, THE F.B.I. IN PEACE AND WAR. You put back the receiver and as you do, your money clinks and rattles as it drops into the coin box.`,
            onEnter: () => {
                reenableInput();
                playerC.money += 0.25;
                const room = getRoom('phone-14');
                room.enteredFrom = lastRoom.id;
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-15',
            name: `E.H`,
            desc: `After the second ring, a woman's voice answers the phone. "Hi!" she says brightly, "I'm not here right now. This is my answering machine. Just leave a message for me at the blip, along with your number and I'll get in touch as soon as I can -- unless it's you, Zane.\n
            We have nothing more to discuss, so don't waste your damn quarters. Just go to hell."\n
            A moment later there is a blip. Got a message for the answering machine?`,
            onEnter: () => {
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            onBlock: () =>{
                if(prevInput === 'zane'){
                    enterRoom('phone-15-2');
                }else{
                    enterRoom('phone-15-2');
                } // any input will take you to phone-15-2
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-15-2',
            name: `E.H`,
            desc: `You put back the receiver and as you do, your money clinks and rattles as it drops into the coin box."`,
            onEnter: () => {
                reenableInput();
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-16',
            name: `Lila T.`,
            desc: `The phone rings such a long time that you have almost decided to hang up, when a woman answers. "Yes? Who is it?`,
            onEnter: () => {
                reenableInput();
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            onBlock: () =>{
                if(prevInput === 'hollings'){
                    enterRoom('phone-16-2');
                }else{
                    enterRoom('phone-16-2');
                } // any input will take you to phone-16-2
            },
        },
        {
            id: 'phone-16-2',
            name: `Lila T.`,
            desc: `"Sorry, your name doesn't ring a bell. You must have dialed a wrong number." Before you can contradict her, she has hung up and all you hear is dial tone. You putback the receiver and as you do, your money clinks and rattles as it drops into the coin box.`,
            onEnter: () => {
                reenableInput();
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-17',
            name: `Sue G.`,
            desc: `The phone rings repeatedly. But no one's home. Finally you hang up. Your money clinks into the coin slot, and you scoop it out.`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-18',
            name: `Chelsea H.`,
            desc: `"Hello, this is the Chelsea Hotel. How can I help you?" You ask to speak to a guest -- giving the first name that comes into your head -- and are told there is no one by that name presently residing at the hotel. That was not a lot of information for a quarter. You put back the receiver and as you do, your money clinks and rattles as it drops into the coin box.`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-19',
            name: `SEX`,
            desc: `The phone is answered by a womans voice. This voice seems to be calm, even business-like though in a friendly way: "Hello, this is Wanda's Erotic Answering Service meeting all Manhattan's needs for aural sex since 1978.`,
            onEnter: () => {
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
                pressEnter('phone-19-2');
            },
        },
        {
            id: 'phone-19-2',
            name: `SEX`,
            desc: `"Wanda is busy right now, but if you will leave your name, telephone number, and MasterCard or Visa number at the next beep, Wanda will return your call at the first opportunity.\n
            Have a real hot time, and don't do anything Wanda wouldn't do!" There is a beep.\n
            After giving your message, you hear a dial tone. You put back the receiver and as you do, your money clinks and rattles as it drops into the coin box.`,
            onEnter: () => {
                reenableInput();
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-20',
            name: `Kvetch`,
            desc: `The phone rings repeatedly. But no one's home. Finally you hang up. Your money clinks into the coin slot, and you scoop it out.`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-21',
            name: `AA`,
            desc: `You breathe a sigh of relief at knowing that the A.A. listing in the address book is not the number of Alcoholics Anonymous, as for a moment you'd feared it might be. You put back the receiver and as you do, your money clinks and rattles as it drops into the coin box.`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-22',
            name: `Interlude`,
            desc: `"Hello", says an answering machine, in a deliberately mechanical voice, like Hal in 2001. "This is the New Theatre of Silliness at Christopher and Hudson Streets. Tonight's performance in Serbo-Croatian of Eugene O'Neill's STRANGE INTERLUDE has been vilified by Frank Rich of the New York Times as 'Tasteless, incoherent, and strangely affecting.'`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
                pressEnter('phone-22-2')
            },
        },
        {
            id: 'phone-22-2',
            name: `Interlude`,
            desc: `"Tickets cost $2, and you must arrive between 7 and 8 PM." You put back the receiver and as you do, your money clinks and rattles as it drops `,
            onEnter: () => {
                reenableInput();
                playerC.money += 0.25;
                const room = getRoom('phone-22');
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-23',
            name: `TTTT`,
            desc: `Hi, this is Tiny Tykes Talent Town, New York's newest and most successful Children's Modelling Agency. WE can't answer the phone right now, but please leave a message after the beep.`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
                pressEnter('phone-23-2');
            },
        },
        {
            id: 'phone-23-2',
            name: `TTTT`,
            desc: `"We're located at 25 W. 19th and provide free-of-charge evaluations of your Tiny Tyke's modelling potential."\n
            Unfortunately, You haven't any tiny tyke available for evaluation. You put back the receiver and as you do, your money clinks and rattles as it drops into the coin box."`,
            onEnter: () => {
                reenableInput();
                playerC.money += 0.25;
                const room = getRoom('phone-23');
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-24',
            name: `DRUGS`,
            desc: `The phone rings repeatedly. But no one's home. Finally you hang up. Your money clinks into the coin slot, and you scoop it out.`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-25',
            name: `R + J`,
            desc: `"Hello," says a man's tape recorded voice. "This is Ray. I'm not here right now. Billym if this is you, try and remember to record the Met's game tonight." The line goes dead without giving you an opportunity to leave a message. You put back the receiver and as you do, your money clinks and rattles as it drops into the coin box.`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-26',
            name: `J.L.`,
            desc: `The phone is answered after a single ring. "11th Street Gallery." a woman's voice announces matter-of-factly. "Miss Lind speaking.`,
            onEnter: () => {
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
                pressEnter('phone-26-2');
            },
        },
        {
            id: 'phone-26-2',
            name: `J.L.`,
            desc: `"Um. . . Hello, This is John Cameron," you say. " I don't know if you remember me . . . ."`,
            onEnter: () => {
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
                pressEnter('phone-26-3');
            },
        },
        {
            id: 'phone-26-3',
            name: `J.L.`,
            desc: `"This elicts a hoot of laughter. Then: "'Remember you? I think the real question is whether you remember me. But I won't compain. And I will pay back that fifty dollars anytime you care to drop around. Just give me some warning in advance so I can get to the bank."`,
            onEnter: () => {
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
                pressEnter('phone-26-4');
            },
        },
        {
            id: 'phone-26-4',
            name: `J.L.`,
            desc: `"Take care, okay?"`,
            onEnter: () => {
                reenableInput();
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            onBlock: () => {
                if(prevInput === 'ok'){
                    enterRoom('phone-26-5')
                }else{
                    enterRoom('phone-26-5')
                } // Any input takes you to phone-26-5
            },
        },
        {
            id: 'phone-26-5',
            name: `J.L`,
            desc: `You realize you are talking to a dial tone. You put back the receiver and as you do, your moneyclinks and rattles as it drops into the coin box.`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom('phone-26');
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-27',
            name: `SOFT`,
            desc: `You get a busy signal and hang up. Your money clinks into the coin slot, and you scoop it out.`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom('phone-27');
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
        {
            id: 'phone-28',
            name: `F`,
            desc: `"For tomorrow nothing but sunshine, pleasant temperatures, lower humidity all day long, highs around 78. On the sound ond south shore coastal waters wind is from the northwest, increasing from 10 to 15 this afternoon, wave heights at one to 2 feet on the ocean and one foot or less across the sound, the ocean water temperature standing at 71 degrees. Thank you for calling!" You get a dial tone. You put back the receiver and as you do, your money clinks and rattles as it drops into the coin box.`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom('phone-27');
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
            },
            exists: [
                {dir: 'leave', id: room.enteredFrom},
            ],
        },
    ], // closes phoneCalls rooms
}; // closes const phoneCalls