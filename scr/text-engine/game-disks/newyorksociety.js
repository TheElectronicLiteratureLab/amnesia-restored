const nyhistorical = {
    roomId: 'nyhist-1',
    rooms: [
        {
          id: 'nyhist-1', // New York Historical Society entrance
          name: 'N.Y. Historical Society', // Displayed each time the player enters the room.
          desc: `Inside the revolving door there is a desk, where a large sign informs you of the admissions charges:\n
          Welcome to\n
          The\n
          New York\n
          Historical Society\n
          ADMISSION:\n
          \n
          Members                 FREE\n
          Adults                  2.00\n
          Senior Citizens         1.50\n
          Children (12 and Under) 0.75\n`,
          onEnter: () => 
          {

            const room = getRoom(lastRoom.id);

            room.onEnter = () => {
                room.onEnter() + (degradation = true);
            }

            degradation = !degradation
            
            playerC.dScore += 5; // Adding to Detective Score
            playerC.cScore += 2; // Adding to Character Score
            playerC.sScore += 5; // Adding to Survival Score
            console.log(playerC.dScore);
            console.log(playerC.cScore);
            console.log(playerC.sScore);
            pressEnter('nyhist-2');
          },
        },
        {
            id: 'nyhist-2', // New York Historical Society entrance
            name: 'N.Y. Historical Society', // Displayed each time the player enters the room.
            desc: `The ticket agent looks inquireingly from the paperback he was reading and says, "Would you like a ticket, sir?`,
            onEnter: () => {

                degradation = false;
              reenableInput();
            },
            onBlock: () => 
            {
            if(prevInput === "ticket"){ // If player buys a ticket to the historical society
                orderTotal += 2.00;
                enterRoom('nyhist-3');
                console.log("Order Total: " + orderTotal);
             }else if(prevInput === "yes"){
                orderTotal += 2.00;
             }else if(prevInput === "member"){
                enterRoom('nyhist-4');
             }
            },
        },
        {
            id: 'nyhist-3', // New York Historical Society entrance
            name: 'N.Y. Historical Society', // This room is only entered if the player wants to buy a ticket
            desc: ``,
            onEnter: () => 
            {
                const room = getRoom('nyhist-3');
                if(orderTotal <= playMon){
                    playMon - orderTotal;
                    println(`The ticket agent takes your money, and tears a ticket in half, putting it in a box by his side.\n
                    You see a large free-standing bulletin board which shows you the maps of each floor of the museum. There is a special exhibition of 19th century portraits of famous New Yorkers in the first floor galleries to the north and south. Ahead of you to the west is a broad double-staircase mounting to the second floor.`);
                }else{
                  println(`Realizing you do not have enough money, you elect to leave the museum before you attract any official attention.`);
                  pressEnter('nyhist-1');
                }
            },
            exits: 
            [
                { 
                    dir: ['leave'],
                    id : '76-cpkw'
                },
                { 
                    dir: ['north'],
                    id : 'nyhist-1f-1'
                },
                { 
                    dir: ['south'],
                    id : 'nyhist-1f-2'
                },
                { 
                    dir: ['east'],
                    id : '76-cpkw'
                },
                {
                    dir: ['west'],
                    id: 'nyhist-2f-1'
                }
            ],
        },
        {
            id: 'nyhist-4', // New York Historical Society entrance
            name: 'N.Y. Historical Society', // This room is only entered if the player boldly declaires himself a member
            desc: `"I'm sorry," the ticket agent says. "I didn't recognize you at first, Sir. Go right in."\n
            You see a large free-standing bulletin board which shows you the maps of each floor of the museum. There is a special exhibition of 19th century portraits of famous New Yorkers in the first floor galleries to the north and south.`,
            exits: 
            [
                { 
                    dir: ['leave'],
                    id : '76-cpkw'
                },
                { 
                    dir: ['north'],
                    id : 'nyhist-1f-1'
                },
                { 
                    dir: ['south'],
                    id : 'nyhist-1f-2'
                },
                { 
                    dir: ['south'],
                    id : 'nyhist-entrance'
                },
                { 
                    dir: ['east'],
                    id : '76-cpkw'
                },
                {
                    dir: ['west', 'upstairs'],
                    id: 'nyhist-2f-1'
                }
            ],
        },
        {
            id: 'nyhist-entrance', // New York Historical Society entrance
            name: 'N.Y. Historical Society', // This room is only entered if the player returns to the entrance from one of the galleries.
            desc: `You return to the gallery entrance.`,
            exits: 
            [
                { 
                    dir: ['leave'],
                    id : '76-cpkw'
                },
                { 
                    dir: ['north'],
                    id : 'nyhist-1f-1'
                },
                { 
                    dir: ['south'],
                    id : 'nyhist-1f-2'
                },
                { 
                    dir: ['east'],
                    id : '76-cpkw'
                },
                {
                    dir: ['west', 'upstairs'],
                    id: 'nyhist-2f-1'
                }
            ],
        },
        {
            id: 'nyhist-1f-1', // New York Historical Society entrance
            name: 'N.Y. Historical Society', 
            desc: `You enter a gallery hung with many portraits of famous New Yorkers.`,
            onLook: () => {
                const room = getRoom('nyhist-1f-1'); // if they look at the portraits
                room.desc = `Most of the portraits are of long-ago businessmen. They don't seem particularly happy to be assembled here in a public museum with only each other-and you- for company. Surely it was not for this they'd hired the most expensive and dullest painters of their day. You see nothing unusual.`;
            },
            exits: 
            [
                { 
                    dir: ['leave'],
                    id : '76-cpkw'
                },
                { 
                    dir: ['north'],
                    id : 'nyhist-1f-1',
                    block: 'You cannot go that way'
                },
                { 
                    dir: ['south'],
                    id : 'nyhist-1f-2'
                },
                { 
                    dir: ['east'],
                    id : '76-cpkw'
                },
                {
                    dir: ['west'],
                    id: 'nyhist-2f-1'
                }
            ],
        },
        {
            id: 'nyhist-1f-2', // New York Historical Society entrance
            name: 'N.Y. Historical Society', // This room is only entered if the player boldly declaires himself a member
            desc: `You enter a gallery hung with many portraits of famous New Yorkers.`,
            onLook: () => {
                const room = getRoom('nyhist-1f-2');
                room.desc = `Most of these paintings are of women wearing magnificent dresses and hung with several small fortunes in jewelry. Each of them seems to be sizing up the other disdainfully, except for Mrs. Aloysius D. Brouwer, who looks with perfect satisfaction into a full-length mirror. Whistler had her number, and no doubt about it.`;
            },
            exits: 
            [
                { 
                    dir: ['leave'],
                    id : '76-cpkw'
                },
                { 
                    dir: ['north'],
                    id : 'nyhist-1f-1'
                },
                { 
                    dir: ['south'],
                    id : 'nyhist-1f-2',
                    block: 'You cannot go that way.'
                },
                { 
                    dir: ['east'],
                    id : '76-cpkw'
                },
                {
                    dir: ['west'],
                    id: 'nyhist-2f-1'
                }
            ],
        },
        {
            id: 'nyhist-2f-1', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `You mount the staircase, which takes a ninety-degree twist to the left on the way. The second floor library is to the west, and the entrance to the Neustadt collection of Tiffany lamps is to the east. The stairway is behind you, to the south.`,
            onLook: () => {
                const room = getRoom('nyhist-2f-1');
                room.desc = `The second floor library is to the west, and the entrance to the Neustadt collection of Tiffany lamps is to the east. The stairway is behind you, to the south.`;
            },
            exits: 
            [
                { 
                    dir: ['leave'],
                    id : '76-cpkw'
                },
                { 
                    dir: ['north', 'upstairs'],
                    id : 'nyhist-1f-1',
                    block: "You cannot go that way."
                },
                { 
                    dir: ['south'],
                    id : '76-cpkw',
                },
                { 
                    dir: ['east'],
                    id : 'nyhist-alice-1'
                },
                {
                    dir: ['west'],
                    id: 'nyhist-2f-1',
                    block: "The door to the library is locked."
                }
            ],
        },
        {
            id: 'nyhist-alice-1', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `You enter the gallery devoted to the Neustadt Collection of Tiffany lamps.`,
            onEnter: () => {
                pressEnter('nyhist-alice-2');
            },
        },
        {
            id: 'nyhist-alice-2', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `It is a single high-ceilinged hall from which every trace of daylight has been excluded. Each stained glass lamp gives off its own multicolored glow. How can it be that so many lamps, all alight and crowded together, each so intense, don't flood the hall with their radience?\n
            But the darkness here seems to exist quite independently of the light, a force in its own right.`,
            onEnter: () => {
                pressEnter('nyhist-alice-3');
            },
        },
        {
            id: 'nyhist-alice-3', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            hasEntered: false,
            desc: `The lamps are beautiful in the self-evident way that a sunset is beautiful, or a coral reef, or water over rock. Each mortised piece of glass has its own focused loveliness, as a single flower does, or a single jewel. En masse, their effect is indescribable.`,
            onEnter: () => {
                reenableInput();
                const room = getRoom('nyhist-alice-3')
                if (room.hasEntered){
                    pressEnter('nyhist-alice-revisted');
                }
            },
            onBlock: () => {
                if(prevInput === "wait"){
                incrementHour();
                println(`You wait for an hour. Strangely, you don't feel any impatience, for the Tiffany lamps are an endless source of wonder.`);
                }
                if (qMeridiem === 1){
                    console.log(qMeridiem);
                    enterRoom('nyhist-alice-5');
                }else if(yHours === 0){
                    console.log(yHours);
                    enterRoom('nyhist-alice-5');
                }else if(yHours === 1){
                    console.log(yHours);     
                    enterRoom('nyhist-alice-5');
                }else if(yHours === 2){
                    console.log(yHours);     
                    enterRoom('nyhist-alice-5');
                }else{
                    console.log(yHours);
                }
                if(prevInput === "leave"){
                    enterRoom('nyhist-leave');
               }
            },
        },
        {
            id: 'nyhist-alice-revisted', //If the player already visited the previous room, and therefore already talked with Alice.
            name: 'N.Y. Historical Society', 
            desc: `You begin to feel as you did in the sauna, a giddiness and trembling, a sense of your mind speeding away from your will's control -- and then you faint. The guard seems amused at your susceptibility to the beauty of the Neustadt Collection, but he refrains from making any kind of comment as he helps you downstairs and out to the street.`,
            onEnter: () => {
                pressEnter('76-cpkw');
            },
        },
        {
            id: 'nyhist-leave', //If the player already visited the previous room, and therefore already talked with Alice.
            name: 'N.Y. Historical Society', 
            desc: `You leave the New York Historical Society.`,
            onEnter: () => {
                pressEnter('76-cpkw');
            },
        },
        {
            id: 'nyhist-alice-5', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `You begin to feel as you did on entering the sauna, a giddiness and trembling, a sense of your mind speeding away from your will's control with a purpose all on its own. But you don't faint.`,
            onEnter: () => {
                const room = getRoom('nyhist-alice-3') // Marking the intro room as visited, so that once we finish this sequence they can't repeat it.
                room.hasEntered = true;
                pressEnter('nyhist-alice-6');
            },
        },
        {
            id: 'nyhist-alice-6', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `You just stand there spellbound, until you hear, close at hand, a voice that whispers, 'John, darling John.' You turn around. It is Alice. 'Do you remember,' she asks you, 'the first time that I brought you here?'`,
            onLook: () => {
                const room = getRoom('nyhist-alice-6');
                room.desc = `"Don't be a pain in my side, John. Do you remember the first time I brought you here?'`;
            },
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === "yes"){
                    enterRoom('nyhist-alice-7');
                }else if(prevInput === "no"){
                    enterRoom('nyhist-alice-7');
                }else{
                    println(`"Don't be a pain in my side, John. Do you remember the first time I brought you here?'`);
                }
            },
        },
        {
            id: 'nyhist-alice-7', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `We kissed beside this very lamp that you've been standing here staring at so long. And the vow we swore.\n 

            She places her hands, gently, on your shoulders, and tilts her head back, closing her eyes as she does so. She waits for your kiss.`,
            onEnter: () => {
                pressEnter('nyhist-alice-8');
            },
        },
        {
            id: 'nyhist-alice-8', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `You kiss her and she yields to your lips.\n 
            'Does that mean what I hope it does?' She asks you when she has caught her breath. 'Will you marry me now?'`,
            onEnter: () => {
               reenableInput();
            },
            onBlock: () => {
                if(prevInput === "yes"){
                    enterRoom('nyhist-sheep-1'); // heading to the sheep ending
                }else if(prevInput === "no"){
                    enterRoom('nyhist-ask-1');
                }else{
                    enterRoom('nyhist-ask-1');
                }
            },
        },
        {
            id: 'nyhist-sheep-1', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `'Oh darling,' she whispers, 'we'll be so happy.`,
            onEnter: () => {
                pressEnter('nyhist-sheep-2');
            },
        },
        {
            id: 'nyhist-sheep-2', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `'Once you've decided to put your fate in Alice's hands, everything moves forward with a dreamlike ease and smoothness and speed. You're married that afternoon before a justice of the peace, and that evening you board a Qantas jet for Melbourne, Australia.`,
            onEnter: () => {
                pressEnter('sheep-ending'); //Goes directly to sheep ending
            },
        },
        {
            id: 'nyhist-ask-1', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `If looks could kill, the Neustadt Collection would just have acquired a corpse.\n

            'Damn you, John. I guess you're too confused to think straight. Let's talk it out. Ask me what you need to know.'`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'xavier'){
                    enterRoom('nyhist-ask-2');
                }else if(prevInput ==="hollings"){
                    enterRoom('nyhist-ask-2');
                }else if(prevInput === "zane"){
                    enterRoom('nyhist-zane-1');
                }else if(prevInput === 'luke'){
                    enterRoom('nyhist-luke-1');
                }else if(prevInput === 'amneisa'){
                    enterRoom('nyhist-amnesia-1');
                }else if(prevInput === 'murder'){
                    enterRoom('nyhist-murder-1');
                }else if(prevInput === 'Who am I?'){
                    enterRoom('nyhist-who-1');
                }else if(prevInput === 'ann'){
                    enterRoom('nyhist-ann-1');
                }else if(prevInput === 'lila'){
                    enterRoom('nyhist-lila-1');
                }else{
                    enterRoom('nyhist-denise-1');
                }
            },
        },
        {
            id: 'nyhist-ask-2', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `"Maybe Xavier Hollings is only a role you've played, one among many -- though I doubt that any of your other roles paid so well. It all started about a year ago when the real Xavier Hollings got busted for drugs. Between the bust and his trial, while he was out on bail, he contacted you and got you to agree to go down there and stand trail for him -- and serve his time, if you had to. `,
            onEnter: () => {
                pressEnter('nyhist-ask-3'); //Goes directly to sheep ending
            },
        },
        {
            id: 'nyhist-ask-3', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `"You took his place, and got sentenced to five years at Revoltillo. The idea for the switch came from when you'd been at college together and you'd substituted for him at some exams. Your physical resemblance must have been uncanny, but I've never laid eyes on the real Xavier Hollings."`,
            onEnter: () => {
                pressEnter('nyhist-ask-4'); //Goes directly to sheep ending
            },
        },
        {
            id: 'nyhist-ask-4', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `"As soon as you went to prison, he had to go into hiding, and then, when you escaped, killing a guard in the process, he was in a fix. And very pissed off with you, I would think. Anyhow now you know as much as I do about it. And you may appreciate a little better the wisdom of emigrating to Australia. How about it? Does a sheep ranch look more appealing now?"`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'yes'){
                    enterRoom('nyhist-sheep-1'); // takes you to sheep ending
                }else{
                    enterRoom('nyhist-ask-5');
                }
            },
        },
        {
            id: 'nyhist-ask-5', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `'Well, John, you cannot blame a girl for trying, says Alice, as tears begin to well up the recesses of her eyes.`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === "zane"){
                    enterRoom('nyhist-zane-1');
                }else if(prevInput === 'luke'){
                    enterRoom('nyhist-luke-1');
                }else if(prevInput === 'amneisa'){
                    enterRoom('nyhist-amnesia-1');
                }else if(prevInput === 'murder'){
                    enterRoom('nyhist-murder-1');
                }else if(prevInput === 'Who am I?'){
                    enterRoom('nyhist-who-1');
                }else if(prevInput === 'ann'){
                    enterRoom('nyhist-ann-1');
                }else if(prevInput === 'lila'){
                    enterRoom('nyhist-lila-1');
                }else{
                    enterRoom('nyhist-denise-1');
                }
            },
        },
        {
            id: 'nyhist-zane-1', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `She looks stunned at your question. 'How did you learn about -- ' Her surprise narrows to suspicion. 'Your memory is starting to come back, isn't it?' `,
            onEnter: () => {
                pressEnter('nyhist-zane-2'); //Goes directly to sheep ending
            },
        },
        {
            id: 'nyhist-zane-2', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `When you deny this, she takes a deep breath, squares her shoulders, and says, 'I promised myself I'd never tell you this, but I guess there's no point now in trying to spare you. You are Zane Bester. You got into the mess you're in now about a year ago when a man named Xavier Hollings, an old college buddy of yours, went down to Texas and got busted for drugs.`,
            onEnter: () => {
                pressEnter('nyhist-zane-3'); //Goes directly to sheep ending
            },
        },
        {
            id: 'nyhist-zane-3', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `Between the bust and his trial, while he was out on bail, he contacted you and got you to agree to go down there and stand trail for him -- and serve his time, if you had to. `,
            onEnter: () => {
                pressEnter('nyhist-zane-4'); //Goes directly to sheep ending
            },
        },
        {
            id: 'nyhist-zane-4', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `You took his place, and got sentenced to five years at Revoltillo. The idea for the switch came from when you'd been at college together and you'd substituted for him at some exams. Your physical resemblance must have been uncanny, but I've never laid eyes on the real Xavier Hollings.`,
            onEnter: () => {
                pressEnter('nyhist-zane-5'); //Goes directly to sheep ending
            },
        },
        {
            id: 'nyhist-zane-4', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `As soon as you went to prison, he had to go into hiding, and then, when you escaped, killing a guard in the process, he was in a fix. And very pissed off with you, I would think. Anyhow now you know as much as I do about it. And you may appreciate a little better the wisdom of emigrating to Australia. How about it? Does a sheep ranch look more appealing now?`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'yes'){
                    enterRoom('nyhist-sheep-1'); // takes you to sheep ending
                }else{
                    enterRoom('nyhist-ask-6');
                }
            },
        },
        {
            id: 'nyhist-ask-6', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `'Well, John, you cannot blame a girl for trying, says Alice, as tears begin to well up the recesses of her eyes.`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'xavier'){
                    enterRoom('nyhist-ask-2');
                }else if(prevInput ==="hollings"){
                    enterRoom('nyhist-ask-2');
                }else if(prevInput === 'luke'){
                    enterRoom('nyhist-luke-1');
                }else if(prevInput === 'amneisa'){
                    enterRoom('nyhist-amnesia-1');
                }else if(prevInput === 'murder'){
                    enterRoom('nyhist-murder-1');
                }else if(prevInput === 'Who am I?'){
                    enterRoom('nyhist-who-1');
                }else if(prevInput === 'ann'){
                    enterRoom('nyhist-ann-1');
                }else if(prevInput === 'lila'){
                    enterRoom('nyhist-lila-1');
                }else{
                    enterRoom('nyhist-denise-1');
                }
            },
        },
        {
            id: 'nyhist-luke-1', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `'He isn't really my father. I guess you sensed that, didn't you? I don't know that much more about him-- and I don't want to. The shotgun wedding scenario was all his idea. \n

            He said that with your amnesia getting worse every day that only an overt threat would get you moving. I was reluctant, but I went along with the idea for your sake, John. You've got to believe that.'`,
            onBlock: () => {
                if(prevInput === 'xavier'){
                    enterRoom('nyhist-ask-2');
                }else if(prevInput ==="hollings"){
                    enterRoom('nyhist-ask-2');
                }else if(prevInput === "zane"){
                    enterRoom('nyhist-zane-1');
                }else if(prevInput === 'amneisa'){
                    enterRoom('nyhist-amnesia-1');
                }else if(prevInput === 'murder'){
                    enterRoom('nyhist-murder-1');
                }else if(prevInput === 'Who am I?'){
                    enterRoom('nyhist-who-1');
                }else if(prevInput === 'ann'){
                    enterRoom('nyhist-ann-1');
                }else if(prevInput === 'lila'){
                    enterRoom('nyhist-lila-1');
                }else{
                    enterRoom('nyhist-denise-1');
                }
            },
        },
        {
            id: 'nyhist-amnesia-1', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `"You were already beginning to suffer the effects of it when we met, back in February. You told me then that you sort of enjoyed not having an identity. You said it was like skinny-dipping."`,
            onEnter: () => {
                pressEnter('nyhist-amnesia-2'); //Goes directly to sheep ending
            },
        },
        {
            id: 'nyhist-amnesia-2', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `"It was only when you started forgetting things that happened in the last week, or last night, that you started to worry, Some mornings I'd have to explain the whole situation to you like you were an actor coming in to audition for a part. At first I didn't believe you. I thought the amnesia was just a put-on, like your cock-and-bull story about being a helicopter pilot."`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'xavier'){
                    enterRoom('nyhist-ask-2');
                }else if(prevInput ==="hollings"){
                    enterRoom('nyhist-ask-2');
                }else if(prevInput === "zane"){
                    enterRoom('nyhist-zane-1');
                }else if(prevInput === 'luke'){
                    enterRoom('nyhist-luke-1');
                }else if(prevInput === 'murder'){
                    enterRoom('nyhist-murder-1');
                }else if(prevInput === 'Who am I?'){
                    enterRoom('nyhist-who-1');
                }else if(prevInput === 'ann'){
                    enterRoom('nyhist-ann-1');
                }else if(prevInput === 'lila'){
                    enterRoom('nyhist-lila-1');
                }else{
                    enterRoom('nyhist-denise-1');
                }
            },
        },
        {
            id: 'nyhist-murder-1', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `"First you were busted for drugs, now you're wanted for murder! That's the real reason for going to Australia. I can't tell you any more about your escape or the guard you killed. Anyhow by the time we met you only had a couple of memories left from that whole time. Something about a bowl of chili with a dead tarantula in it."`,
            onBlock: () => {
                if(prevInput === 'xavier'){
                    enterRoom('nyhist-ask-2');
                }else if(prevInput ==="hollings"){
                    enterRoom('nyhist-ask-2');
                }else if(prevInput === "zane"){
                    enterRoom('nyhist-zane-1');
                }else if(prevInput === 'amneisa'){
                    enterRoom('nyhist-amnesia-1');
                }else if(prevInput === 'Who am I?'){
                    enterRoom('nyhist-who-1');
                }else if(prevInput === 'ann'){
                    enterRoom('nyhist-ann-1');
                }else if(prevInput === 'lila'){
                    enterRoom('nyhist-lila-1');
                }else{
                    enterRoom('nyhist-denise-1');
                }
            },
        },
        {
            id: 'nyhist-who-1', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `"Who are you? Why you're whoever you say you are. John Cameron, the last time I heard. I hope you're not tired of that identity already."`,
            onBlock: () => {
                if(prevInput === 'xavier'){
                    enterRoom('nyhist-ask-2');
                }else if(prevInput ==="hollings"){
                    enterRoom('nyhist-ask-2');
                }else if(prevInput === "zane"){
                    enterRoom('nyhist-zane-1');
                }else if(prevInput === 'amneisa'){
                    enterRoom('nyhist-amnesia-1');
                }else if(prevInput === 'murder'){
                    enterRoom('nyhist-murder-1');
                }else if(prevInput === 'ann'){
                    enterRoom('nyhist-ann-1');
                }else if(prevInput === 'lila'){
                    enterRoom('nyhist-lila-1');
                }else{
                    enterRoom('nyhist-denise-1');
                }
            },
        },
        {
            id: 'nyhist-ann-1', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `"I don't know the woman from Eve. I found a letter she'd written to you once inside a desk drawer. I remember the name on the letterhead. Out of jealousy, I suppose. When we parted company in the chapel, I left notes for you everywhere I could think that you might show up. And the one I left with Ann was the one that got through."`,
            onBlock: () => {
                if(prevInput === 'xavier'){
                    enterRoom('nyhist-ask-2');
                }else if(prevInput ==="hollings"){
                    enterRoom('nyhist-ask-2');
                }else if(prevInput === "zane"){
                    enterRoom('nyhist-zane-1');
                }else if(prevInput === 'amneisa'){
                    enterRoom('nyhist-amnesia-1');
                }else if(prevInput === 'murder'){
                    enterRoom('nyhist-murder-1');
                }else if(prevInput === 'lila'){
                    enterRoom('nyhist-lila-1');
                }else{
                    enterRoom('nyhist-denise-1');
                }
            },
        },
        {
            id: 'nyhist-lila-1', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `Alice pretends to take an interest in one of the lamps, avoiding your gaze. I can't really say I know anyone by that name.`,
            onBlock: () => {
                if(prevInput === 'xavier'){
                    enterRoom('nyhist-ask-2');
                }else if(prevInput ==="hollings"){
                    enterRoom('nyhist-ask-2');
                }else if(prevInput === "zane"){
                    enterRoom('nyhist-zane-1');
                }else if(prevInput === 'amneisa'){
                    enterRoom('nyhist-amnesia-1');
                }else if(prevInput === 'murder'){
                    enterRoom('nyhist-murder-1');
                }else if(prevInput === 'lila'){
                    enterRoom('nyhist-lila-1');
                }else{
                    enterRoom('nyhist-denise-1');
                }
            },
        },
        {
            id: 'nyhist-denise-1', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `Alice ignores your question and gives you a cutting look. `,
            onEnter: () => {
                pressEnter('nyhist-denise-2'); //Goes directly to sheep ending
            },
        },
        {
            id: 'nyhist-denise-2', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `'All these questions, questions, questions are getting us nowhere. You really never loved anyone but...'\n

            She hesitates and then smiles. \m
            
            '...Denise. Good-bye and good riddance!' There are tears in her eyes as she turns and leaves the hall. `,
            onEnter: () => {
                pressEnter('nyhist-denise-3'); //Goes directly to sheep ending
            },
        },
        {
            id: 'nyhist-denise-3', // New York Historical 2nd floor
            name: 'N.Y. Historical Society', 
            desc: `You follow Alice, from a distance, down the staircase and out of the museum. She turns right and heads around a corner. You quicken your pace, but when you reach the corner she's turned, there is no sign of her anywhere in the street.`,
            onEnter: () => {
                pressEnter('76-cpkw'); //Goes directly to sheep ending
            },
        },
    ],
} 