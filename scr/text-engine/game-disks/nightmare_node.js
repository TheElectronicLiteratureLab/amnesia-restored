const nightmare = {
    roomId: 'nigh-1',//starting room
    rooms: [
      {
        id: 'nigh-1',
        name:'Nightmare',
        desc: `You are dreaming that you have been asleep and that you wake to find yourself in a strange hotel. The only light in the room comes from the hotel’s gigantic neon light that glows a baleful red outside the window. “X,” a voice whispers in the crimson twilight, “X, are you there?” You know that you are X and that you must answer the voice truthfully, but your mouth is dry, your tongue paralyzed with fear. “Come here, X,” the voice insists. “Come here to me, in the **mirror**.”`,
        onBlock: () => {
            if(prevInput !== 'mirror'){
                println(`You tell yourself to ${prevInput} but something prevents you. Your acts seem not to be your own. And the voice repeats its command: “Come here, X. Come here to me, in the mirror.”`)
            }
        },

        exits:[
            {
                dir:['mirror'],
                id: 'nigh-3'
            },
            
        ],
      },
      { 
          id: 'nigh-2',
          name: '',
          desc: `You tell yourself to [Quote response to 1 >], but something prevents you. Your acts seem not to be your own. And the voice repeats its command: “Come here, X. Come here to me, in the mirror.”`,
          //previous room replays, this loops until the player goes to the mirror.
          onEnter: () =>{
              reenableInput();
              },
          
          exits:[
            {
                dir:['mirror'],
                id: 'nigh-3'
            },
            
        ],
      },
      {
          id: 'nigh-3',
          name: '',
          desc: `Obedient to the voice, you go to the mirror. The figure in the mirror leans forward to peer at you intently. He is dressed all in white, like a bridegroom or a ghost. And though he has no face--only eyes that stare anxiously from the smooth ovoid of his head--he smiles, recognizing you. “Excellent,” he whispers. “Now come with me--before the store closes.” In the mirror you see him turn away from you and walk toward the door of the room, where he pauses to look back at you, and to beckon, with his raised hand, for you to follow.`,


              
          exits:[
            {
                dir:['walk'],
                id: 'nigh-4'
            },
            
        ],
      },
      {
          id: 'nigh-4',
          name: '',
          desc: `As you enter the mirror, the beckoning figure vanishes. You follow him out of the room and catch another glimpse of him at the far end of the corridor. You run toward him and reach his side just as the subway is pulling into the station. The doors open with a shudder. “Come,” says the faceless figure, putting his arm about your shoulder. “You mustn’t be late your first day at work.” If you wished to, you could not resist his greater strength. You enter the empty subway car. “Quickly!” Your companion hands you a spray can of black enamel. “Before the police come and you’re arrested--write a graffito. Quickly!” You aim the can at the one window of the subway car that is not already a palimpsest of disposable identities. Then you press the nozzle and write:`,
          onEnter: () =>{
              reenableInput();
              
          },
          exits:[
            {
                dir:['fuck'],
                id: 'nigh-5'
            },
            {
                dir:['x'],
                id:'nigh-8'
            },
            {
                dir:['thing'],
                id:'nigh-9',
            },
            
        ],
      },
      {
          id: 'nigh-5',
          name:'',
          desc: `No sooner have you sprayed your offensive message on the subway car’s window, than Mayor Koch bursts upon the scene, with an entourage including two policemen, a press photographer, and the head of the Mayor’s Commission to Keep the Subways Clean, who is no less a celebrity than ____________`,
          //need to add a way for this text to be added to a list then recalled later in the text.
          onEnter: () =>{
              reenableInput();

              
          },

          
            exits:[
            {
                dir:['name'],
                id: 'nigh-6',
            }
          ],
      },
      {
          id: 'nigh-6',
          name: '',
          desc: `The press photographer takes a picture of you standing handcuffed between the two policemen in front of the offending graffito “Ladies and gentlemen,” the Mayor announces. “Today we eliminate once and for all the problem of graffiti in our subways. Commissioner [prevInput], please take the guilty party away.`,
          onEnter:() =>{
              pressEnter('nigh-7');
          },
          exits:[
              {
                  dir:['ENTER'],
                  id:'nigh-7',
              }
          ],
      },
      {
          id:'nigh-7',
          name: '',
          desc: `Commissioner [prevInput] and the two policemen assist you out of the subway car and down several flights of foul-smelling steps to the underground tattoo parlor of Tarantula Jack. There, as the policemen hold you down, Commissioner [Last Name from 4>] tells Tarantula Jack that your forehead is to be tattooed with the same words you sprayed on the window of the subway car. Your struggles are useless as the tattooist’s buzzing needle sets forth its everlasting reminder of a punishment truly suited to its crime. When the work is done, Commissioner [Last Name from 4>] holds up a mirror to your face--and you wake, screaming.`,
          onEnter:() =>{
              pressEnter('nigh-10');
              //this node exits to wherever the player entered into the nightmare node.
          },
          exits:[
            {
                dir:['ENTER'],
                id:'nigh-10',
            }
        ],

      },
      {
          id:'nigh-8',
          name:'',
          desc:`You spray a giant X across the window of the subway car, then return the spray can to the figure who had given it to you--and who is no longer faceless. Yet the face he now has is somehow more frightening than his earlier facelessness--for it is your own face.<br> He has taken it from you, along with your name, and left you nothing but this scrawl on the subway window. You press your hands to the featureless ovoid that grows from the stalk of your neck and try, mouthlessly, to scream. You wake, trembling and covered with sweat.`,
          onEnter:() =>{
              pressEnter('nigh-10');
          },
          exits:[
            {
                dir:['ENTER'],
                id:'nigh-10',
            }
        ],
      },
      {
          id: 'nigh-9',
          name: '',
          desc: `The subway car screeches to a stop at 34th STREET, where you are able to enter Oldman’s Department Store directly from the subway platform. “I’ll have to leave you here,” your companion tells you, “but the Personnel Office is on the 13th f1oor. And there--” His featureless head nods toward the purring escalator at the center of the deserted sales floor. ”-is the escalator. See you later X.”`,
          onEnter: () =>{
              reenableInput();
              /*if(applyInput === 'go to escalator'){
                  enterRoom('nigh-sale');
              }else{
                  println('You try to [prevInput] but you can’t. Your acts don’t seem to be under your own control. An elderly floorman approaches you and asks if you are looking for the escalator. You nod. He points his bony finger toward the purring, gliding steps. “It’s right there, sir,” he informs you.');
                  
              }*/    
          },
          exits:[
              {
                  dir:['escalator'],
                  id:'nigh-sale',
              }
          ],
      },
      {
          id: 'nigh-sale',
          name: '',
          desc: `You take the escalator up to the main sales floor, which smells rather cloyingly of perfume. An elderly saleswoman smiles at you from behind a cosmetics counter--and points at the ascending escalator.`,
          onEnter: () =>{
              reenableInput();
          },
          exits:[
            {
                dir:['escalator'],
                id:'nigh-sale2',
            }
          ],
      },
      {
          id: 'nigh-sale-2',
          name: '',
          desc: `You take the escalator to the second floor, where four female manikins have been grouped in a tableau representing an outing to the beach. Each of the manikins has lifted her plaster hand to point to the upward-bound escalator.`,
          onEnter: () =>{
              reenableInput();
          },
          exits:[
            {
                dir:['escalator'],
                id:'nigh-sale-3',
            }
          ],


      },
      {
          id:'nigh-sale-3',
          name:'',
          desc: `You take the escalator to the third floor, which is devoted to displays of men’s fashions. On the counter just before you a single leather glove on sale for $12.95 points to the Up escalator.`,
          onEnter: () =>{
              reenableInput();
          },
          exits:[
            {
                dir:['escalator'],
                id:'nigh-sale-4',
            }
          ],
      },
      {
          id:'nigh-sale-4',
          name: '',
          desc: `You take the escalator to the fourth floor, where a placard informs you that the Les Delices has been closed for renovation. Another placard shows a hand pointing, with no explanation, toward the Up escalator.`,
          onEnter: () =>{
              reenableInput();
          },
          exits:[
            {
                dir:['escalator'],
                id:'nigh-sale-5',
            }
          ],
      },
      {
          id:'nigh-sale-5',
          name: '',
          desc:`You take the escalator to the fifth floor, where a white­haired salesman stands daydreaming behind a counter displaying all kinds of cutlery. “Could I interest you in a knife, Sir?” he asks wistfully.`,
          //need to make sure this yes or no question is coded correctly
          onEnter: () =>{
              reenableInput();

          },
          exits:[
              {
                  dir:['yes'],
                  id:'knif-sale'
              },
              {
                  dir:['no'],
                  id:'knif-sale-2'
              }
          ],
      },
      {
          id:'knif-sale',
          name:'',
          desc:`“Very good, Sir. This--” He holds a knife with an 8-inch stainless steel blade to your throat. “--is our very best all-purpose carving knife. And this--” The carving knife drops from his hand, and he takes another, smaller knife from the counter. “This is a superb knife for boning chicken.” He lunges at you with the knife, which makes a long gash in the sleeve of your white coat--but does no more significant harm.`,
          onEnter: () =>{
              reenableInput();
          },
          exits:[
            {
                dir:['escalator'],
                id:'nigh-sale-6',
            }
          ],
          
      },
      {
          id: 'knif-sale-2',
          name: '',
          desc: `“No? You won’t even look at my knives?” The white-haired salesman sighs. “I don’t know why I waste my time. All these years, and all these knives, and never once … never once … “He picks up the largest of the knives from the counter and, with a really remarkable steadiness of purpose, slowly positions it over the left-hand breast pocket of his suit and commits suicide. “I’m sorry,” he says, with his last dying breath. “I tried to be a good salesman. I did … my level … best.”`,
          onEnter: () =>{
              reenableInput();
          },
          exits:[
            {
                dir:['escalator'],
                id:'nigh-sale-6',
            }
          ],
      },
      {
          id:'nigh-sale-6',
          name:'',
          desc:`You take the escalator to the sixth floor, where the management of Oldman’s announces, on a large poster that it is proud to be selling, in cooperation with the Sistine Chapel, a collection of priceless Fine Art Reproductions, including a gigantic full-color reproduction of the Hand of God from the ceiling of the Sistine Chapel. The Hand of God is pointing to the Up escalator.`,
          onEnter: () =>{
              reenableInput();
          },
          exits:[
            {
                dir:['escalator'],
                id:'nigh-sale-7',
            }
          ],
      },
      {
          id:'nigh-sale-7',
          name:'',
          desc:`You take the escalator to the seventh floor, which seems to be an empty warehouse. Luxuriant growths of cobwebs festoon the light fixtures. Unmarked boxes and bundles are piled everywhere. The disembodied arm of a mannequin lies in the dust, its finger pointing with modest insistence to the UP escalator.`,
          onEnter: () =>{
              reenableInput();
          },
          exits:[
            {
                dir:['escalator'],
                id:'nigh-sale-8',
            }
          ],
      },
      {
          id:'nigh-sale-8',
          name:'',
          desc:`You take the escalator to the eighth floor, where Oldman’s Hair-Styling Saloon is situated. “Hello!” says the chief hair stylist, an elderly man with a waxed mustache like the artist Salvador Dali. - “I see we have our work cut out for us today! Sit down, please.” He gestures toward a low chair next to the shampooing sink. You shake your head. You don’t want a shampoo. The hair stylist insists.`,
          onEnter: () =>{
                pressEnter('sham-sale');
          },
          exits:[
                {
                  dir:['ENTER'],
                  id:'sham-sale',
                }
          ],
      },
      {
          id:'sham-sale',
          name:'',
          desc:`“This won’t take more than five or six hours,” the aged hair stylist assures you. “We simply have to remove all these facial growths and seal these unsightly pores with sealing wax and then fill in these repulsive cavities. My, what large nostrils you have! But with your nose removed they won’t be a problem any longer. Then we’ll take care of your eyes with some industrial-strength eye-cover. The better stores these days prefer mannequins with perfectly blank faces. Eyes are out, didn’t you know that?”`,
          onEnter:() =>{
              pressEnter('sham-sale2');
          },
          exits:[
            {
              dir:['ENTER'],
              id:'sham-sale-2',
            }
      ],

          
      },
      {
          id:'sham-sale-2',
          name: '',
          desc:`While the old hair stylist chattered away, his clippers and trimmers and gougers and sanders and sealers clipped and trimmed and gouged and sanded and sealed until, just as he’d promised, you have been completely remodeled in the new blank style. “Now, isn’t that a lot better,” the old man says, holding up a mirror for you to see your now so much more geometrical face. “I’m sure the Personnel Department will hire you right off the bat--and assign you to work in one of the front windows. Well, have a nice day.” And he points you toward the Up escalator.`,
          onEnter: () =>{
              reenableInput();
              /*if(applyInput === 'Use Escalator'){
                  enterRoom('nigh-sale9');
              }else{
                  enterRoom('escl-erro');
              }*/
          },
          exits:[
            {
                dir:['escalator'],
                id:'nigh-sale-9',
            }
          ],
      },
      {
          id: 'nigh-sale-9',
          name: '',
          desc: `You take the escalator up to the ninth floor, where ar1 elderly salesman insists on giving you a demonstration of the [Name of computer for which the disc is adapted] computer. The salesman shows you how easy it is to boot a disc, and then some words flicker down the face of the screen. “That is a riddle,” the salesman explains, “and you must solve it.” The lines on the screen are:`,
          onEnter:() =>{
              printIn('Press ENTER to continue');
              pressEnter('ridd-1');
          },
          exits:[
            {
              dir:['ENTER'],
              id:'ridd-1',
            }
      ],
          
      },
      {
          id:'ridd-1',
          name:'',
          desc:`Although I talk of no one and Of nothing else but me and mine, \n I hope you will not understand \n Just who I am until the line \n Revealing all my taradiddle \n As the substance of ________.`,
          onEnter: () =>{
              getInput();
                if(getInput === 'a riddle'){
                    enterRoom('ridd-2')
                }
                else{
                    println(`I’m afraid that’s not the answer. It’s a very simple riddle really. Almost everyone gets it right away. Keep trying.`)
                }
          },

          exits:[
              {
                  dir:['riddle'],
                  id:'ridd-2',
              }
          ],
      },
      /*{
          id: 'ridd-2',
          name:'',
          desc:`I’m afraid that’s not the answer. It’s a very simple riddle really. Almost everyone gets it right away. Keep trying.`,
          onEnter: () =>{
              reenableInput();
                if(applyInput === 'riddle'){
                  enterRoom('ridd-3');
                }else{
                  enterRoom('ridd-2');
              }
          }
        },*/
      {
          id:'ridd-2',
          name:'',
          desc:`“Very good! You see how easy it is to use a computer? And when you’ve finished, just remove the disc from the disc drive, like so--” But instead of removing the computer’s disc, his fingers open a flap in your right side, just beneath your liver, and he removes your own software. “The program stays on ROM--that is, on Read-Only Memory--until you throw the switch. Now, where do they put the switch on this model?”`,
        
          exits:[
            {
                dir:['switch'],
                id:'ridd-4',
            },
            {
                dir:['escalator'],
                id:'nigh-sale10',
            }
        ],
      },
      {
          id:'nigh-sale-10',
          name:'',
          desc: ``,
          onEnter: () => {
              println('You take the escalator up to the tenth floor, which seems to be an assembly area for the store mannequins. Some stand in front of full-length mirrors trying on and taking off differ rent styles and positions of limbs. “Hello,” says one particularly attractive blonde, jutting her hip to the side in a traditional posture of greeting. “My name’s Hugette, what’s yours?” You try to answer her question, but you appear to have lost the use of your voice. Hugette seems not to notice. “My full name,” she continues, “is Hugette Wadju­Paiffer, with a hyphen. You have a very attractive head. Do you mind if I try it on?”')
              pressEnter('nigh-sale11');
              
          },
          exits:[
            {
              dir:['ENTER'],
              id:'nigh-sale-11',
            }
        ],
      },
      {
        id:'nigh-sale-11',
        name:'',
        desc: `Taking your silence as her permission, Hugette takes a good grip on your head and slowly unscrews it from your neck. Then she gives it to you to hold while she tries to unscrew her own head. “Oh dear,” she complains. “It’s stuck! Help me, won’t you?” You set your head down on the counter behind you and take a firm grip on Hugette’s head and try to twist it loose, but it’s stuck to her neck as solidly as the cap on a jar of pickles. “Stop!” she shrieks. You stop twisting-­ and then realize she did not mean you. She was yelling at the mannequin who has taken your head from the counter while your back was turned and is now running away with it up the escalator.`,  
        //add ride to one argument commands
        exits:[
            {
                dir:['escalator'],
                id:'nigh-sale-12',
            }
        ],

      },
      {
        id:'nigh-sale-12',
        name:'',
        desc:`You run up the escalator’s moving steps to the eleventh floor and arrive on the sales floor just in time to see the mannequin with your head under his arm taking the steps of the upbound escalator two at a time. A burglar alarm begins to shriek. An aged security officer catches hold of your wrist and asks you where the fire is. The only answer you can give, voiceless as you are, is to point to the escalator where the thieving mannequin bears away your head in triumph. “I’m sorry, young man,” says the security officer. “But we can’t have people going about the store without their heads or their shoes. That’s the rule here at Oldman’s. You’ll have to come along with me.”`,
        onEnter: () => {
            getInput();
            if(getInput === ['no','ride escalator','refuse']){
                enterRoom('nigh-sale-13')}
            else(getInput === ['follow security officer'])
                {enterRoom('nigh-sale-14')}
            }
      },
      {
        id:'nigh-sale13',
        name: '',
        desc:`The security officer takes you to a fitting room at the side of the sales floor and deftly fits a spare head into the empty socket in your neck. You look at yourself in the mirror. To your surprise you are now a man of sixty or seventy years, and a cousin if not the twin of the security officer, who welcomes you with a smile to your new place of employment. At last, you have a mouth and are able--even as you wake from the nightmare--to scream.`,
        //exits nightmare
        
      },
      {
        id:'nigh-sale14',
        name: '',
        desc:`“You won’t? You won’t!” he shouts at you. But you’ve already broken his grip and are running up the escalator to the twelfth floor, which is given over to Oldman’s Shipping Department. None of the department’s staff is anywhere in sight. You are standing in the midst of hundreds of boxes of all shapes and colors, each stamped with Oldman’s ornate monogram. Faintly, from one of those boxes, you can hear your head calling to you: “Help! Help me get out of this box. I’m suffocating. Help!” Your voice grows weaker, and your own strength is ebbing rapidly. It seems so unfair--to have got this close to the Personnel Department and then to fail. You tell yourself you must find your head and take it up the last flight of steps to be interviewed.`,
      onEnter: () => {
          getInput();
          if(getInput === ['open box','look for head','search for head']){
              enterRoom('nigh-sale-15')
          }

      },
      exits:[
        {
          dir:['box','head'],
          id:'nigh-sale-15',
        }
        ],
    },
    {
        id:'nigh-sale-15',
        name: '',
        desc:`You open the box nearest at hand. It contains a ceramic vase, jade green with dark specklings. It won’t do for a head.`,
        onEnter: () => {
            getInput();
            if(getInput === ['open box','look for head','search for head']){
                enterRoom('nigh-sale16')
            }
  
          },
          exits:[
            {
              dir:['box','head'],
              id:'nigh-sale-16',
            }
            ],
    },
    {
        id:'nigh-sale-16',
        name: '',
        desc:`You open another box. It contains a basket imported from Thailand. It’s just about the right size for carrying your head, once you find it, but that’s small consolation.`,
        onEnter: () => {
            getInput();
            if(getInput === ['open box','look for head','search for head']){
                enterRoom('nigh-sale-17')
            }
  
          },
          exits:[
            {
              dir:['box','head'],
              id:'nigh-sale-17',
            }
            ],
    },
    {
        id:'nigh-sale-17',
        name: '',
        desc:`You open a third box. It contains a large Gouda cheese from the Gourmet Grocery Department.`,
        onEnter: () => {
            getInput();
            if(getInput === ['open box','look for head','search for head']){
                enterRoom('nigh-sale-18')
            }
  
          },
          exits:[
            {
              dir:['box','head'],
              id:'nigh-sale-18',
            }
            ],
    },
    {
        id:'nigh-sale-18',
        name: '',
        desc:`You open yet another box. It contains lingerie in a style you would not have supposed Oldman’s would stock. You begin to feel discouraged. It’s been several minutes since you’ve heard so much as a whimper from your detached cranium.`,
        onEnter: () => {
            getInput();
            if(getInput === ['open box','look for head','search for head']){
                enterRoom('nigh-sale-19')
            }
  
          }
    },
    {
        id:'nigh-sale-19',
        name: '',
        desc:`You open a fifth box, which seems too small to contain your head. But there it is, still alive! Its eyes look up to you gratefully. Its lips smile. And then, with horror, you realize your mistake. This isn’t your own head. It’s an identical head that’s been substituted for your own. This head belongs to ... to … His name is on the tip of your tongue. But of course, without a head you are also without a tongue. You wake, gasping for breath, and instantly the nightmare fades from your memory.`,
        //exit nightmare node
    },
    

   
    ],




}
//prevInput command to remember reply and recall it in the text.
//possibly move the escalatorError room into a printIn in the else statement to avoid having to remember the room number.