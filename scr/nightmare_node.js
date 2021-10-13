const nightmare = {

    roomId: 'nightmare',
    rooms: [
            {
                id: 'nightmareIntro',
                name:'Nightmare',
                desc: `You are dreaming that you have been asleep and that you wake to find yourself in a strange hotel. The only light in the room comes from the hotel’s gigantic neon light that glows a baleful red outside the window. “X,” a voice whispers in the crimson twilight, “X, are you there?” You know that you are X and that you must answer the voice truthfully, but your mouth is dry, your tongue paralyzed with fear. “Come here, X,” the voice insists. “Come here to me, in the mirror.”`,
                onEnter: () =>{
                    reenableInput();
                        if(applyInput === 'Go to mirror'){
                            enterRoom('goToMirror');
                        }else{
                            enterRoom('dreamPara');
                        }
                
                    }

            },
            {
                //if player does anything but look into the mirror, need to figure out how to paste the previous text entery into the engine's response here. 
                id: 'dreamPara',
                name: 'Nightmare',
                desc: `You tell yourself to 
                [Quote response to 1 >],
                but something prevents you. Your acts seem not to be your own. And the voice repeats its command: “Come here, X. Come here to me, in the mirror.”`,
                //previous room replays, this loops until the player goes to the mirror.
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'Go to mirror'){
                        enterRoom('goToMirror');
                    }else{
                        enterRoom('nightmareIntro');
                    }
                    
                }
            },
            {
                id: 'goToMirror',
                name: 'Nightmare',
                desc: `Obedient to the voice, you go to the mirror. The figure in the mirror leans forward to peer at you intently. He is dressed all in white, like a bridegroom or a ghost. And though he has no face--only eyes that stare anxiously from the smooth ovoid of his head--he smiles, recognizing you. “Excellent,” he whispers. “Now come with me--before the store closes.” In the mirror you see him turn away from you and walk toward the door of the room, where he pauses to look back at you, and to beckon, with his raised hand, for you to follow.`,
                //if any other response is given but enter mirror go to dreamPara
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'Walk through mirror'){
                        enterRoom('enterNightmare');
                    }else{
                        enterRoom('dreamPara');
                    }
                    
                }
            },
            {
                id: 'enterMirror',
                name: 'Nightmare',
                desc: `As you enter the mirror, the beckoning figure vanishes. You follow him out of the room and catch another glimpse of him at the far end of the corridor. You run toward him and reach his side just as the subway is pulling into the station. The doors open with a shudder. “Come,” says the faceless figure, putting his arm about your shoulder. “You mustn’t be late your first day at work.” If you wished to, you could not resist his greater strength. You enter the empty subway car. “Quickly!” Your companion hands you a spray can of black enamel. “Before the police come and you’re arrested--write a graffito. Quickly!” You aim the can at the one window of the subway car that is not already a palimpsest of disposable identities. Then you press the nozzle and write:`,
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'explictive'){
                        enterRoom('goodGraffiti');
                    }else{
                        enterRoom('xGraffiti');
                    }
                    
                }
            },
            {
                id: 'goodGraffiti',
                name:'Nightmare',
                desc: 'No sooner have you sprayed your offensive message on the subway car’s window, than Mayor Koch bursts upon the scene, with an entourage including two policemen, a press photographer, and the head of the Mayor’s Commission to Keep the Subways Clean, who is no less a celebrity than ____________',
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'commissoner name'){
                        enterRoom('goodGraffiti')
                    }else if(applyInput === 'x'){
                        enterRoom('xGraffiti');
                    }else{
                        enterRoom('otherGraffiti');
                    }
                    
                }
            },
            {
                id: 'caught',
                name: 'Nightmare',
                desc: 'The press photographer takes a picture of you standing handcuffed between the two policemen in front of the offending graffito “Ladies and gentlemen,” the Mayor announces. “Today we eliminate once and for all the problem of graffiti in our subways. Commissioner [Last Name from 4>], please take the guilty party away.',
                onEnter:() =>{
                    printIn('Press ENTER to continue');
                    pressEnter('tattooed');
                }
            },
            {
                id:'tattooed',
                name: 'Nightmare',
                desc: 'Commissioner [Last Name from 4>] and the two policemen assist you out of the subway car and down several flights of foul-smelling steps to the underground tattoo parlor of Tarantula Jack. There, as the policemen hold you down, Commissioner [Last Name from 4>] tells Tarantula Jack that your forehead is to be tattooed with the same words you sprayed on the window of the subway car. Your struggles are useless as the tattooist’s buzzing needle sets forth its everlasting reminder of a punishment truly suited to its crime. When the work is done, Commissioner [Last Name from 4>] holds up a mirror to your face--and you wake, screaming.',
                onEnter:() =>{
                    printIn('Press ENTER to continue');
                    pressEnter('exitDream');
                    //this room exits to wherever the player entered into the nightmare node.
                }

            },
            {
                id:'xGraffiti',
                name:'Nightmare',
                desc:'You spray a giant X across the window of the subway car, then return the spray can to the figure who had given it to you--and who is no longer faceless. Yet the face he now has is somehow more frightening than his earlier facelessness--for it is your own face.<br> He has taken it from you, along with your name, and left you nothing but this scrawl on the subway window. You press your hands to the featureless ovoid that grows from the stalk of your neck and try, mouthlessly, to scream. You wake, trembling and covered with sweat.',
                onEnter:() =>{
                    printIn('Press ENTER to continue');
                    pressEnter('exitDream');
                }
            },
            {
                id: 'otherGraffiti',
                name: 'Nightmare',
                desc: 'The subway car screeches to a stop at 34th STREET, where you are able to enter Oldman’s Department Store directly from the subway platform. “I’ll have to leave you here,” your companion tells you, “but the Personnel Office is on the 13th f1oor. And there--” His featureless head nods toward the purring escalator at the center of the deserted sales floor. ”-is the escalator. See you later X.”',
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'go to escalator'){
                        enterRoom('upEscalator');
                    }else{
                        enterRoom('escalatorError');
                    }
                    
                }
            },
            {
                id: 'escalatorError',
                name: 'Nightmare',
                desc: 'You try to [Quote response to 7>]--but you can’t. Your acts don’t seem to be under your own control. An elderly floorman approaches you and asks if you are looking for the escalator. You nod. He points his bony finger toward the purring, gliding steps. “It’s right there, sir,” he informs you.',
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'Use Escalator'){
                        enterRoom('salesFloor');
                    //need an else statement here to repeat text.
                    }
                }
            },
            {
                id: 'salesFloor',
                name: '',
                desc: 'You take the escalator up to the main sales floor, which smells rather cloyingly of perfume. An elderly saleswoman smiles at you from behind a cosmetics counter--and points at the ascending escalator.',
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'Use Escalator'){
                        enterRoom('secondFloor');
                    }else{
                        enterRoom('escalatorError');
                    }
                }

            },
            {
                id: 'secondFloor',
                name: '',
                desc: 'You take the escalator to the second floor, where four female manikins have been grouped in a tableau representing an outing to the beach. Each of the manikins has lifted her plaster hand to point to the upward-bound escalator.',
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'Use Escalator'){
                        enterRoom('thirdFloor');
                    }else{
                        enterRoom('escalatorError');
                    }
                }
     
     
            },
            {
                id:'thirdFloor',
                name:'',
                desc: 'You take the escalator to the third floor, which is devoted to displays of men’s fashions. On the counter just before you a single leather glove on sale for $12.95 points to the Up escalator.',
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'Use Escalator'){
                        enterRoom('fourthFloor');
                    }else{
                        enterRoom('escalatorError');
                    }
                }
            },
            {
                id:'fourthFloor',
                name: '',
                desc: 'You take the escalator to the fourth floor, where a placard informs you that the Les Delices has been closed for renovation. Another placard shows a hand pointing, with no explanation, toward the Up escalator.',
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'Use Escalator'){
                        enterRoom('fifthFloor');
                    }else{
                        enterRoom('escalatorError');
                    }
                }
            },
            {
                id:'fifthFloor',
                name: '',
                desc:'You take the escalator to the fifth floor, where a white­haired salesman stands daydreaming behind a counter displaying all kinds of cutlery. “Could I interest you in a knife, Sir?” he asks wistfully.',
                //need to make sure this yes or no question is coded correctly
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'Yes'){
                        enterRoom('buyKnife');
                    }else(applyInput === 'no');{
                        enterRoom('declineKnife');
                    }
                }
            },
            {
                id:'buyKnife',
                name:'',
                desc:'“Very good, Sir. This--” He holds a knife with an 8-inch stainless steel blade to your throat. “--is our very best all-purpose carving knife. And this--” The carving knife drops from his hand, and he takes another, smaller knife from the counter. “This is a superb knife for boning chicken.” He lunges at you with the knife, which makes a long gash in the sleeve of your white coat--but does no more significant harm.',
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'Use Escalator'){
                        enterRoom('sixthFloor');
                    }else{
                        enterRoom('escalatorError');
                    }
                }
                
            },
            {
                id: 'declineKnife',
                name: '',
                desc: '“No? You won’t even look at my knives?” The white-haired salesman sighs. “I don’t know why I waste my time. All these years, and all these knives, and never once … never once … “He picks up the largest of the knives from the counter and, with a really remarkable steadiness of purpose, slowly positions it over the left-hand breast pocket of his suit and commits suicide. “I’m sorry,” he says, with his last dying breath. “I tried to be a good salesman. I did … my level … best.”',
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'Use Escalator'){
                        enterRoom('sixthFloor');
                    }else{
                        enterRoom('escalatorError');
                    }
                }
            },
            {
                id:'sixthFloor',
                name:'',
                desc:'You take the escalator to the sixth floor, where the management of Oldman’s announces, on a large poster that it is proud to be selling, in cooperation with the Sistine Chapel, a collection of priceless Fine Art Reproductions, including a gigantic full-color reproduction of the Hand of God from the ceiling of the Sistine Chapel. The Hand of God is pointing to the Up escalator.',
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'Use Escalator'){
                        enterRoom('seventhFloor');
                    }else{
                        enterRoom('escalatorError');
                    }
                }
            },
            {
                id:'seventhFloor',
                name:'',
                desc:'You take the escalator to the seventh floor, which seems to be an empty warehouse. Luxuriant growths of cobwebs festoon the light fixtures. Unmarked boxes and bundles are piled everywhere. The disembodied arm of a mannequin lies in the dust, its finger pointing with modest insistence to the UP escalator.',
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'Use Escalator'){
                        enterRoom('eighthFloor');
                    }else{
                        enterRoom('escalatorError');
                    }
                }
            },
            {
                id:'eighthFloor',
                name:'',
                desc:'You take the escalator to the eighth floor, where Oldman’s Hair-Styling Saloon is situated. “Hello!” says the chief hair stylist, an elderly man with a waxed mustache like the artist Salvador Dali. - “I see we have our work cut out for us today! Sit down, please.” He gestures toward a low chair next to the shampooing sink. You shake your head. You don’t want a shampoo. The hair stylist insists.',
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'sit','sit in chair','get shampoo'){
                        enterRoom('shampoo');
                    }else(applyInput === 'use escalator');{
                        enterRoom('ninthFloor');
                    }
                }
            },
            {
                id:'shampoo',
                name:'',
                desc:'“This won’t take more than five or six hours,” the aged hair stylist assures you. “We simply have to remove all these facial growths and seal these unsightly pores with sealing wax and then fill in these repulsive cavities. My, what large nostrils you have! But with your nose removed they won’t be a problem any longer. Then we’ll take care of your eyes with some industrial-strength eye-cover. The better stores these days prefer mannequins with perfectly blank faces. Eyes are out, didn’t you know that?”',
                onEnter:() =>{
                    printIn('Press ENTER to continue');
                    pressEnter('shampoo2');
                }

                
            },
            {
                id:'shampoo2',
                name: '',
                desc:'While the old hair stylist chattered away, his clippers and trimmers and gougers and sanders and sealers clipped and trimmed and gouged and sanded and sealed until, just as he’d promised, you have been completely remodeled in the new blank style. “Now, isn’t that a lot better,” the old man says, holding up a mirror for you to see your now so much more geometrical face. “I’m sure the Personnel Department will hire you right off the bat--and assign you to work in one of the front windows. Well, have a nice day.” And he points you toward the Up escalator.',
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'Use Escalator'){
                        enterRoom('ninthFloor');
                    }else{
                        enterRoom('escalatorError');
                    }
                }
            },
            {
                id: 'ninthFloor',
                name: '',
                desc: 'You take the escalator up to the ninth floor, where ar1 elderly salesman insists on giving you a demonstration of the [Name of computer for which the disc is adapted] computer. The salesman shows you how easy it is to boot a disc, and then some words flicker down the face of the screen. “That is a riddle,” the salesman explains, “and you must solve it.” The lines on the screen are:',
                onEnter:() =>{
                    printIn('Press ENTER to continue');
                    pressEnter('riddle');
                }
                
            },
            {
                id:'riddle',
                name:'',
                desc:'Although I talk of no one and Of nothing else but me and mine, <br> I hope you will not understand <br> Just who I am until the line <br> Revealing all my taradiddle <br> As the substance of ________.',
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'riddle'){
                        enterRoom('riddleRight');
                    }else{
                        enterRoom('riddleWrong');
                    }
                }
            },
            {
                id: 'riddleWrong',
                name:'',
                desc:'I’m afraid that’s not the answer. It’s a very simple riddle really. Almost everyone gets it right away. Keep trying.',
                onEnter: () =>{
                    reenableInput();
                    if(applyInput === 'riddle'){
                        enterRoom('riddleRight');
                    }else{
                        enterRoom('riddleWrong');
                    }
                }
            },
            {
                id:'riddleRight',
                name:'',
                desc:'“Very good! You see how easy it is to use a computer? And when you’ve finished, just remove the disc from the disc drive, like so--” But instead of removing the computer’s disc, his fingers open a flap in your right side, just beneath your liver, and he removes your own software. “The program stays on ROM--that is, on Read-Only Memory--until you throw the switch. Now, where do they put the switch on this model?”',
                
            },
   
    ],




},
