const deathAndTexas = {
    roomId: 'deat-1', // Set this to the ID of the room you want the player to start in.
    rooms: [ // LIST OF COMMANDS NEEDED [Lethal Injection, Firing Squad, Kiss, Catholic, Jewish, Protestant, Steak and Potatoes, Roasted Turkey, Barbebque Ribs]
      {
        id: 'deat-1', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
        name: '', // Displayed each time the player enters the room.
        desc: `Several months go by during which time you are brought to trial for the murder of the guard you are charged with killing while escaping the State Penitentiary in Revoltillo, Texas. The prosecuting attorney, the judge, the jury, and even F. Lee Bailey; whom you hire to defend you, seem to think your amnesia is an imposture, the desperate invention of a guilty man. The prosecution calls your own wife, a woman named Denise, to testify that during most of the period after your escape you lived in hiding in her New York apartment, and she is able to produce several witnesses to confirm this. You cannot positively contradict her. You are sentenced to be executed either by a firing squad or lethal injection. Which is it to be?`, // Displayed when the player first enters the room.
        // arguement for lethal injection or firing squad
        onEnter: () =>{
          let firingSquad = false;
          let lethalInjection = false;
          const execution = [ 'Firing Squad', 'Lethal Injection'];
          if(prevInput == execution.indexOf('Firing Squad')){
            firingSquad = true;
            enterRoom('deat-4');
          }else if(prevInput == execution.indexOf('Lethal Injection')){
            lethalInjection = true;
            enterRoom('deat-3')
          }else{
            enterRoom('deat-2');
          }
        }
      },
      {
        id: 'deat-2', // if the player doesn't pick firing squad or lethal injection
        name: '',
        desc: `You must make a decision: the firing squad or lethal injection, which will it be?`,
        // arguement for lethal injection or firing squad
      },
      {
        id: 'deat-3', // if the player chooses lethal injection
        name: '', // Displayed each time the player enters the room.
        desc: `On the morning of the day you are to receive the lethal injection, a guard comes to your cell on Death Row and announces that you have a visitor. He takes you to the visiting room, and there, behind the wire mesh, already wearing the black dress and veil of her mourning, is your widow-soon-to-be, Denise. “Oh, Xavier!” she exclaims as you come into the room. “My poor darling! How shall I ever bear this loss?” She presses her face close to the wire mesh and awaits your kiss.`, // Displayed when the player first enters the room.
        onLook: () =>  {
          const room = getRoom('deat-4');
          room.desc = `You search her face for some sign of genuine feeling but encounter a gaze of unyielding opacity. It is not that her eyes avoid yours; they are simply, and studiedly, noncommittal, like the eyes of a medical student performing an autopsy. For whose sake, you wonder, is she putting on this performance? Is she really your wife? And are you really guilty of the crime for which you’re to be executed? If only you could remember!`

        },
      },
      {
        id: 'deat-4', // if the player chooses firing squad
        name: '', // Displayed each time the player enters the room.
        desc: `On the morning of the day you are to be shot, a guard comes to your cell on Death Row and announces that you have a visitor. He takes you to the visiting room, and there, behind the wire mesh, already wearing the black dress and veil of her mourning, is your widow-soon-to-be, Denise. “Oh, Xavier!” she exclaims as you come into the room. “My poor darling! How shall I ever bear this loss?” She presses her face close to the wire mesh and awaits your kiss.`, // Displayed when the player first enters the room.
        onLook: () =>  {
          const room = getRoom('deat-4');
          room.desc = `You search her face for some sign of genuine feeling but encounter a gaze of unyielding opacity. It is not that her eyes avoid yours; they are simply, and studiedly, noncommittal, like the eyes of a medical student performing an autopsy. For whose sake, you wonder, is she putting on this performance? Is she really your wife? And are you really guilty of the crime for which you’re to be executed? If only you could remember!`

        },
      },
      {
        id: 'deat-5', // if the player chooses to appeal the decision
        name: '', // Displayed each time the player enters the room.
        desc: `F. Lee Bailey takes your appeal to the highest court, but always the verdict and the sentence are sustained. At last, the dreaded day is at hand, and you must choose the means of your execution A firing squad or lethal injection--which is it?`, // Displayed when the player first enters the room.
        // Need arguement here for firing squad or lethal injection
      },
      {
        id: 'deat-6', // if BITE/SPIT or any obscenity at Denise
        name: '', // Displayed each time the player enters the room.
        desc: `It may be a small-minded satisfaction but you feel a genuine glow of pleasure at ruffling Denise’s black feathers. She hisses through the wire mesh that her revenge for this final insult will be to inform the reporters after your execution that you were sexually impotent, a drug addict, and that her chief conjugal responsibility was to read you a comic book each night before bed. She leaves the visiting room with a look of pure malice, and the guard escorts you back to your cell.`, // Displayed when the player first enters the room.
        
      },
      {
        id: 'deat-7', // if ASK ABOUT DENISE or MARRIAGE or WHO ARE YOU
        name: '', // Displayed each time the player enters the room.
        desc: `“It’s very brave of you, my dear, to stick to this silly story about your amnesia right to the bitter end, but surely with me there’s no need for such an imposture. You ask me about myself as though we were strangers. I’m your wife, the woman you love and to whom you confessed your guilt.”`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-9');
        }
      },
      {
        id: 'deat-8', // if ASK ABOUT XAVIER at DENISE
        name: '', // Displayed each time the player enters the room.
        desc: `Denise sighs. “Xavier, I refuse to go through this foolish imposture with you. You know who you are. You know what you’ve done. And now you must face the fact that you must die. Do please try to die with some style. That’s all I have to say, except good-bye--and thank you for a huge inheritance. I’ll try and spend it the way you’d want me to--on big cars and lovely clothes and rubies and emeralds.” She leaves the visiting room with a flourish of her black crepe de chine mourning gown, and the guard leads you back to your cell on Death Row.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-10')
        }
      },
      {
        id: 'deat-9', // Proceeding to last meal node
        name: '', // Displayed each time the player enters the room.
        desc: `Denise rises from her chair. “So long, sucker. Have a nice afterlife.” She leaves the room, and the guard escorts you back to your cell.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-10');
        }
      },
      {
        id: 'deat-10', // last meal node
        name: '', // Displayed each time the player enters the room.
        desc: `Back in your cell you await the hour of execution. The warden asks what you would like for your last meal. Your first request shocks the warden, who is a man of simple, unsophisticated tastes. He explains that all previous condemned men have ordered either steak and potatoes for their last meal, or barbecued ribs, or roast turkey with stuffing. “So, which of those three will it be?”`, // Displayed when the player first enters the room.
       // argument made and stored for either ribs, turkey, steak
      },
      {
        id: 'deat-11', // religious node
        name: '', // Displayed each time the player enters the room.
        desc: `“You’ll probably want to see a clergyman now. I forget: are you Catholic, Protestant, or Jewish?””`, // Displayed when the player first enters the room.
       // argument made and stored for either ribs, turkey, steak
      },
      {
        id: 'deat-12', // If none or go away
        name: '', // Displayed each time the player enters the room.
        desc: `“That’s about what I figured,” the warden says, and bids you good day.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-15');
        }
      },
      {
        id: 'deat-13', // If JEWISH
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-16');
        }
      },
      {
        id: 'deat-14', // If PROTESTANT
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-16');
        }
      },
      {
        id: 'deat-15', // If CATHOLIC
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-16');
        }
      },
      {
        id: 'deat-16', // Last meal continued 
        name: '', // Displayed each time the player enters the room.
        desc: `You spend the next hour preparing to face death and debating with yourself the pros and cons of capital punishment. If you could be sure you’d killed a guard while trying to escape from this prison, you’d feel less of two minds. Since you’re not sure, you feel it isn’t really fair to be executed. How much more humane, you think, to induce amnesia like your own instead of condemning men to death. On the other hand, given a choice between a quick and painless death and a lifetime of dying slowly here in Revoltillo…
        Your gloomy meditations are interrupted by the arrival of a guard with a covered tray. “Your last meal,” he announces, placing the tray on a table. “Enjoy it.” The guard leaves you alone. You uncover the dish and regard the last meal you’re to enjoy in this life.`, // Displayed when the player first enters the room.
        // IF Steak and Potatoes
        // const room = getRoom('deat-16')
        // room.desc = "A large sirloin steak confronts you, together with an abundance of french fries, and a single lettuce leaf symbolizing salad."
        //IF Roasted Turkey
        // const room = getRoom('deat-16')
        // room.desc = "Several slices of turkey breast are surmounted with a perfect sphere of stuffing over which has been ladled a great deal of thick pale gravy. A squat, neat cylinder of cranberry sauce accompanies this holiday dinner.."
        // IF Barbecue Ribs
        // const room = getRoom('deat-16')
        // room.desc = "The barbecue sauce on the slab of ribs is charred to the brown nearest black. There is a mound of french fries and a small paper cup of coleslaw."
        //else
        // const room = getRoom('deat-16')
        // room.desc = "You are confronted with a bowl of cold chili garnished with a large dead hairy tarantula. An unsigned note accompanying this entree says: “We didn’t want you to die without a chance to sample our famous Texas chili!”"
      },
      {
        id: 'deat-17', // LAst meal continued, tracking last input
        name: '', // Displayed each time the player enters the room.
        desc: `The guard looks in through the bars of your cell and sees you are not eating your last meal. “Come on, Hollings,” he says encouragingly. “You’re holding everything up. Eat your last meal so we can get this show on the road.” The guard goes away before you can make any reply, and you look down at the food on the plate. You begin, despite yourself, to salivate.


        You begin to eat your last meal. It is delicious! No, that is probably the wrong word. Objectively it is probably at the level of an average roadside diner. But subjectively it seems incredibly significant. You finish the last morsel on your plate--and then, like a bolt from the blue, it hits you--a memory from your past life. A memory that makes you realize that you must be innocent of the crime for which you are dying.`, // Displayed when the player first enters the room.
        // IF Steak and Potatoes
        // const room = getRoom('deat-17')
        // room.desc = "You remember an earlier steak dinner you had with Denise. You remember the care and deliberation with which she cut into her own steak with the steak knife after you had told her that you had fallen in love with another woman and that your engagement was over. You remember her look of rage and her quick recovery as she told you that she understood and wished you every happiness with your new love."
        //IF Roasted Turkey
        // const room = getRoom('deat-17')
        // room.desc = "You remember a holiday dinner years ago. It was your first Christmas home from college. After the dinner you had mustered up the courage to ask your mother (your father was already dead then) if you were an adopted child. She had denied it emphatically, and asked you how you had come to have such a suspicion. You had not told her, then, about Zane. Only years later, when she had put up the bail to release you from the nightmarish prison cell in Santa Candelaria, only then did you tell her that you had, if not an identical twin, a doppelganger, and even then she had denied you could be Zane’s twin. “You’re my son!” she insisted almost hysterically. “I will not have you suppose otherwise!”"
        // IF Barbecue Ribs
        // const room = getRoom('deat-17')
        // room.desc = "You remember an earlier dinner of barbecue ribs you had at a diner somewhere in Texas.  On the outskirts of a town called Santa Candelaria.  From your table you could see back into the kitchen, where a fat counterman was sprinkling soap into an antique dishwasher. It was then you’d had the sense of Eureka, and the pieces of the puzzle had fit together. You remember the Odd Lots Discount Store and its great stacks of the detergent that had failed its test marketing and was being remaindered here and perhaps nowhere else. Shimmer the soap was called--you’d seen the bright blue package in every one of the homes you’d been allowed to investigate. It had only been a hunch, but it had proved correct. It was Shimmer, or one of its decay-products, that had been responsible for Santa Candelaria’s plague of amnesia!."
        //else
        // const room = getRoom('deat-17')
        // room.desc = "Balefully you regard this last sadistic prank of the staff of Revoltillo State Penitentiary, and briefly you consider ways of disposing of the chili in a spirit of reciprocal spite. But then, to your dismay and astonishment, you experience a voracious hunger for the cold, congealed chili before you. Your mouth waters like a faucet, and every cell of your body screams: “Feed me! Feed me!” like the voices of a rioting cellblock. You look down at the dead tarantula, which you’d removed from the chili before eating it, and remember your first experience of prison. In Santa Candelaria, where, investigating the rumors of a plague of amnesia that had been reported in a weekly tabloid paper, you had incurred the enmity of the local sheriff. He’d framed you on drug charges, imprisoned you with a flagrant disregard of all your legal rights, and made you the butt of endless sadistic jokes, such as serving you just such a bowl of tarantula-garnished chili. The horror of that squalid jail cell! The horror of it!”
        onEnter: () => {
          pressEnter('deat-18');
      },
    },
    {
      id: 'deat-18', // Last Words
      name: '', // Displayed each time the player enters the room.
      desc: `And then it all comes back in a rush, everything you’d forgotten, the entire tangle of events your amnesia had erased. And you realize that you are innocent! It wasn’t you who murdered the guard. It wasn’t you who escaped from Revoltillo. You’re innocent of those crimes.
      But this realization comes too late, for it is just then that the warden comes to your cell with the guards who are to ready you for your execution.
      “Xavier Hollings,” the warden asks solemnly, “do you have any last words?”`, // Displayed when the player first enters the room.
      // if anything
      // println('The warden regards you with contempt and disbelief. “Come on, Hollings. You’ve only got a few minutes left. Try and show some dignity.” You are led, protesting your innocence, to the place of execution.');
      onEnter: () => {
        println('The warden regards you with contempt and disbelief. “Come on, Hollings. You’ve only got a few minutes left. Try and show some dignity.” You are led, protesting your innocence, to the place of execution.');
        if(!firingSquad){
          pressEnter('deat-19');
        }else{
          pressEnter('deat-20');
        }
      }
    },
    {
      id: 'deat-19', // If Firing Squad
      name: '', // Displayed each time the player enters the room.
      desc: `A stake has been placed in the courtyard of the prison, and you are bound to it. A chaplain appears to offer you some last words of comfort, and he too refuses to listen to your protests, as does the guard who offers you a blindfold and a last cigarette.
      “It’s just as well you don’t smoke,” he says, as he walks toward the group of six marksmen standing at the ready some ten yards away. “It’s bad for your health. Says so right on the package.”
      The marksmen laugh appreciatively at his joke.
      They take aim. You close your eyes. The order to Fire! is given.
      You die.`, // Displayed when the player first enters the room.
      // Go to Game Over
    },
    {
      id: 'deat-20', // If lethal injection
      name: '', // Displayed each time the player enters the room.
      desc: `It is a small room glaringly lighted with about 500 watts of fluorescent light. The light gives a surreal intensity to the room’s single item of furniture, a kind of dentist’s chair that has been modified with a panoply of leather and canvas restraints. You are made to sit in the chair, and a guard secures the restraints.
      “This is the first time we’ve ever done a lethal injection here in Texas. They say it’s the wave of the future, but I don’t know. I think there’s something to be said for the traditional way of doing these things. What do you think?”\n
      The guard frowns thoughtfully at your protests of innocence and your frenzied attempt to explain the bizarre events that got you into this fix. “There’s nothing I can do to help you, fellow. Talk to the chaplain.”\n
      The chaplain assures you that only God can help you now. The chaplain leaves.\n
      A medical attendant enters the room. He makes a tourniquet below your biceps with a length of rubber tubing, and then when he has found a vein, he injects the poison.
      There is a tingling along your arm, a pain in your chest, followed by a sense of wonderful relaxation. You feel you still have breath enough to speak a single word that will be your last. You say it:
      `, // Displayed when the player first enters the room.
      // if anything
      // println('And then you die'
      //pressEnter('gameover?')
    },
    ],
  };