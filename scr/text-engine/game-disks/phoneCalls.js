const phoneCalls = {
    roomId: 'phone-1',
    rooms: [
        {
            id: 'phone-1',
            name: 'Front Desk',
            desc:`"Hello. this is the front desk. Can I help you?"`,
            onEnter: () =>{
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastroom.id;
            },
            onBlock: () =>{
                if(prevInput === 'yes'){
                    enterRoom('phone-1-2');
                }else{
                    enterRoom('phone-1-2');
                } // any response will take you to phone-1-2
            },
        },
        {
            id: 'phone-1-2',
            name: 'Front Desk',
            desc: `"Hey , Buddy, this is not an information service you're talking to here.`,
            onBlock: () =>{
                if(prevInput === 'yes'){
                    enterRoom('phone-1-3');
                }else{
                    enterRoom('phone-1-3');
                } // any response will take you to phone-1-3
            },
        },
        {
            id: 'phone-1-3',
            name: 'Front Desk',
            desc: `"I'm not sure I know what it is you want, sir`,
            onBlock: () =>{
                if(prevInput === 'yes'){
                    enterRoom('phone-1-4');
                }else{
                    enterRoom('phone-1-4');
                } // any response will take you to phone-1-4
            },
        },
        {
            id: 'phone-1-4',
            name: 'Front Desk',
            desc: `"Look, I'm a busy person, so stop busting my chops!`,
            onBlock: () =>{
                if(prevInput === 'yes'){
                    enterRoom('phone-1-5');
                }else{
                    enterRoom('phone-1-5');
                } // any response will take you to phone-1-5
            },
        },
        {
            id: 'phone-1-5',
            name: 'Front Desk',
            desc: `Finding by your conversation incomprehensible, the party rudely hangs up.`,
            onEnter: () =>{
                const room = getRoom('phone-1');
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-2',
            name: 'Room Service',
            desc: `After five rings a tired voice says, "Room Service. Your room number please?"`,
            onEnter: () =>{
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastroom.id;
            },
            onBlock: () =>{
                if(prevInput === 'hamburger'){
                    enterRoom('phone-2-2');
                }else if(prevInput === 'hotdog'){
                    enterRoom('phone-2-3');
                }else if(prevInput === 'egg'){
                    enterRoom('phone-2-4');
                }else if(prevInput === 'appletorte'){
                    enterRoom('phone-2-5');
                }else if(prevInput === 'coffee'){
                    enterRoom('phone-2-6');
                }else{
                    enterRoom('phone-2-reject');
                } 
            },
        },
        {
            id: 'phone-2-reject', // Don't waste the room service person's time.
            name: 'Room Service',
            desc: `"I don't mean to be rude, sir, but this IS room service, and the menu of the foods we serve is in the hotel's brochure, which you'll find in your room. Good day." The party hangs up"`,
            onEnter: () =>{
                const room = getRoom('phone-2');
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-2-2', // Hamburger
            name: 'Room Service',
            desc: `"Got the hamburger?"\n
            "Thank you for your order. Your food will be up shortly."\n
            The person on the other end hangs up.\n
            There is a knock on the door, and without further ado a bellboy enters with your order. The bellboy places the tray of food on top of the dresser and then pauses long enough to say, "Don't bother with a tip, Bud. It's included in the cost of the food."\n
            The bellboy leaves you to the enjoyment of the Rathskellar's cuisine.\n
            You eat it.`,
            onEnter: () =>{
                const room = getRoom('phone-2');
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-2-3', // Hotdog
            name: 'Room Service',
            desc: `"An order of hotdog."\n
            "Thank you for your order. Your food will be up shortly."\n
            The person on the other end hangs up.\n
            There is a knock on the door, and without further ado a bellboy enters with your order. The bellboy places the tray of food on top of the dresser and then pauses long enough to say, "Don't bother with a tip, Bud. It's included in the cost of the food."\n
            The bellboy leaves you to the enjoyment of the Rathskellar's cuisine.\n
            You eat it.`,
            onEnter: () =>{
                const room = getRoom('phone-2');
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-2-4', // Egg
            name: 'Room Service',
            desc: `"Allright, egg."\n
            "Thank you for your order. Your food will be up shortly."\n
            The person on the other end hangs up.\n
            There is a knock on the door, and without further ado a bellboy enters with your order. The bellboy places the tray of food on top of the dresser and then pauses long enough to say, "Don't bother with a tip, Bud. It's included in the cost of the food."\n
            The bellboy leaves you to the enjoyment of the Rathskellar's cuisine.\n
            You eat it.`,
            onEnter: () =>{
                const room = getRoom('phone-2');
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-2-5', // Apple Pie
            name: 'Room Service',
            desc: `"Ok, an order of apple pie."\n
            "Thank you for your order. Your food will be up shortly."\n
            The person on the other end hangs up.\n
            There is a knock on the door, and without further ado a bellboy enters with your order. The bellboy places the tray of food on top of the dresser and then pauses long enough to say, "Don't bother with a tip, Bud. It's included in the cost of the food."\n
            The bellboy leaves you to the enjoyment of the Rathskellar's cuisine.\n
            You eat it.`,
            onEnter: () =>{
                const room = getRoom('phone-2');
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-2-6', // Coffee
            name: 'Room Service',
            desc: `"Allright, coffee."\n
            "Thank you for your order. Your food will be up shortly."\n
            The person on the other end hangs up.\n
            There is a knock on the door, and without further ado a bellboy enters with your order. The bellboy places the tray of food on top of the dresser and then pauses long enough to say, "Don't bother with a tip, Bud. It's included in the cost of the food."\n
            The bellboy leaves you to the enjoyment of the Rathskellar's cuisine.\n
            You eat it.`,
            onEnter: () =>{
                const room = getRoom('phone-2');
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-3',
            name: 'Valet',
            desc:`A woman's voice answers the phone: "Yeah, what is it?"`,
            onEnter: () =>{
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastroom.id;
            },
            onBlock: () =>{
                if(prevInput === 'yes'){
                    enterRoom('phone-3-2');
                }else{
                    enterRoom('phone-3-2');
                } // any response will take you to phone-3-2
            },
        },
        {
            id: 'phone-3-2', 
            name: 'Valet',
            desc: `There is a long pause, and then, in a considered, not unfriendly tone of voice, the woman says, "Don't bother me, I'm busy," and hangs up.`,
            onEnter: () =>{
                const room = getRoom('phone-3');
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-4', 
            name: 'Bellman',
            desc: `The phone rings repeatedly, but no one answers..`,
            onEnter: () =>{
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastroom.id;
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-5', 
            name: 'Security',
            desc: `At the third ring the phone is answered and a deep male voice rumbles the word, "Security."`,
            onEnter: () =>{
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastroom.id;
            },
            onBlock: () =>{
                if(prevInput === 'yes'){
                    enterRoom('phone-5-2');
                }else{
                    enterRoom('phone-5-2');
                } // any response will take you to phone-5-2
            },
        },
        {
            id: 'phone-5-2',
            name: 'Security',
            desc: `"Hey, Buddy, this is not an information service you're talking to here.`,
            onBlock: () =>{
                if(prevInput === 'yes'){
                    enterRoom('phone-5-3');
                }else{
                    enterRoom('phone-5-3');
                } // any response will take you to phone-1-3
            },
        },
        {
            id: 'phone-5-3',
            name: 'Security',
            desc: `"I'm not sure I know what it is you want, sir`,
            onBlock: () =>{
                if(prevInput === 'yes'){
                    enterRoom('phone-5-4');
                }else{
                    enterRoom('phone-5-4');
                } // any response will take you to phone-1-4
            },
        },
        {
            id: 'phone-5-4',
            name: 'Security',
            desc: `"Look, I'm a busy person, so stop busting my chops!`,
            onBlock: () =>{
                if(prevInput === 'yes'){
                    enterRoom('phone-5-5');
                }else{
                    enterRoom('phone-5-5');
                } // any response will take you to phone-1-5
            },
        },
        {
            id: 'phone-5-5',
            name: 'Security',
            desc: `Finding by your conversation incomprehensible, the party rudely hangs up.`,
            onEnter: () =>{
                const room = getRoom('phone-5');
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-6',
            name: 'Other Rooms',
            desc:`You receive a special dial tone which signals you to dial the number of the room you wish to reach.`,
            onEnter: () =>{
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastroom.id;
            },
            onBlock: () =>{
                if(prevInput === '1509'){
                    enterRoom('phone-6-2');
                }else{
                    enterRoom('phone-6-2');
                } // any response will take you to phone-6-2
            },
        },
        {
            id: 'phone-6-2',
            name: 'Other Rooms',
            desc: `You get the Sunderland Hotel phone system's version of a busy signal. You immediately hang up.`,
            onEnter: () =>{
                const room = getRoom('phone-6');
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-8',
            name: '911',
            desc: `It occurs to you, seeing the telephone, that the simplest solution to your problem might be to dial 911, the general number for all kinds of emergencies. Surely somewhere there is an organization equipped to clothe naked amnesiacs.\n
            Or would the cops throw you in jail? Or worse, in the booby hatch? You reconsider and hang up.`,
            onEnter: () =>{
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastroom.id;
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-9',
            name: 'Roe & Harpmeister',
            desc: `The phone rings repeatedly. But no one's home. Finally you hang up. Your moment clinks into the coint slot, and you scoop it out.`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
                pressEnter(room.enteredFrom);
            },
         
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
                pressEnter(room.enteredFrom);
            },
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
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-12',
            name: `JA`,
            desc: `Jane Adams here. Sorry I'm not at home. If you'd like to leave a message, do so at the beep. And Bob, if this is you, you can get the contracts to me at five o'clock tomorrow outside the New York Stock Exchange.`,
            onEnter: () => {
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
                pressEnter('phone-12-2');
            },
        },
        {
            id: 'phone-12-2',
            name: `JA`,
            desc: `At the beep you leave a simple sincere message: "Hi, Jane. You'll never guess who this is. But I'll try and be there at five. Hope to see you,. Bye for now." You put back the receiver and as you do, your money clinks and rattles as it drops into the coin box.`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom('phone-12');
                console.log(room.enteredFrom);
                pressEnter(room.enteredFrom);
            },
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
                pressEnter(room.enteredFrom);
            },
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
                pressEnter(room.enteredFrom);
            },
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
        },
        {
            id: 'phone-15-2',
            name: `E.H`,
            desc: `You put back the receiver and as you do, your money clinks and rattles as it drops into the coin box."`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom('phone-15');
                console.log(room.enteredFrom);
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-16',
            name: `Lila T.`,
            desc: `The phone rings such a long time that you have almost decided to hang up, when a woman answers. "Yes? Who is it?`,
            onEnter: () => {
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
                playerC.money += 0.25;
                const room = getRoom('phone-16');
                console.log(room.enteredFrom);
                pressEnter(room.enteredFrom);
            },
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
                pressEnter(room.enteredFrom);
            },
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
                pressEnter(room.enteredFrom);
            },
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
                playerC.money += 0.25;
                const room = getRoom('phone-19');
                console.log(room.enteredFrom);
                pressEnter(room.enteredFrom);
            },
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
                pressEnter(room.enteredFrom);
            },
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
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-22',
            name: `Interlude`,
            desc: `"Hello", says an answering machine, in a deliberately mechanical voice, like Hal in 2001. "This is the New Theatre of Silliness at Christopher and Hudson Streets. Tonight's performance in Serbo-Croatian of Eugene O'Neill's STRANGE INTERLUDE has been vilified by Frank Rich of the New York Times as 'Tasteless, incoherent, and strangely affecting.'`,
            onEnter: () => {
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
                pressEnter('phone-22-2');
            },
        },
        {
            id: 'phone-22-2',
            name: `Interlude`,
            desc: `"Tickets cost $2, and you must arrive between 7 and 8 PM." You put back the receiver and as you do, your money clinks and rattles as it drops `,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom('phone-22');
                console.log(room.enteredFrom);
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-23',
            name: `TTTT`,
            desc: `Hi, this is Tiny Tykes Talent Town, New York's newest and most successful Children's Modelling Agency. WE can't answer the phone right now, but please leave a message after the beep.`,
            onEnter: () => {
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
                playerC.money += 0.25;
                const room = getRoom('phone-23');
                console.log(room.enteredFrom);
                pressEnter(room.enteredFrom);
            },
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
                pressEnter(room.enteredFrom);
            },
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
                pressEnter(room.enteredFrom);
            },
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
                pressEnter('phone-26-3');
            },
        },
        {
            id: 'phone-26-3',
            name: `J.L.`,
            desc: `"This elicts a hoot of laughter. Then: "'Remember you? I think the real question is whether you remember me. But I won't compain. And I will pay back that fifty dollars anytime you care to drop around. Just give me some warning in advance so I can get to the bank."`,
            onEnter: () => {
                pressEnter('phone-26-4');
            },
        },
        {
            id: 'phone-26-4',
            name: `J.L.`,
            desc: `"Take care, okay?"`,
            onEnter: () => {
                reenableInput();
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
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-27',
            name: `SOFT`,
            desc: `You get a busy signal and hang up. Your money clinks into the coin slot, and you scoop it out.`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
                pressEnter(room.enteredFrom);
            },
        },
        {
            id: 'phone-28',
            name: `F`,
            desc: `"For tomorrow nothing but sunshine, pleasant temperatures, lower humidity all day long, highs around 78. On the sound ond south shore coastal waters wind is from the northwest, increasing from 10 to 15 this afternoon, wave heights at one to 2 feet on the ocean and one foot or less across the sound, the ocean water temperature standing at 71 degrees. Thank you for calling!" You get a dial tone. You put back the receiver and as you do, your money clinks and rattles as it drops into the coin box.`,
            onEnter: () => {
                playerC.money += 0.25;
                const room = getRoom(disk.roomId);
                room.enteredFrom = lastRoom.id;
                console.log(room.enteredFrom);
                pressEnter(room.enteredFrom);
            },
        },
    ], // closes phoneCalls rooms
}; // closes const phoneCalls