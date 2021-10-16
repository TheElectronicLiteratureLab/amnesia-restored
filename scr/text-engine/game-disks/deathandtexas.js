const deathAndTexas = {
    roomId: 'deat-1', // Set this to the ID of the room you want the player to start in.
    rooms: [ // LIST OF COMMANDS NEEDED [Lethal Injection, Firing Squad, Kiss, Catholic, Jewish, Protestant, Steak and Potatoes, Roasted Turkey, Barbebque Ribs]
      {
        id: 'deat-1', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
        name: '', // Displayed each time the player enters the room.
        desc: `Several months go by during which time you are brought to trial for the murder of the guard you are charged with killing while escaping the State Penitentiary in Revoltillo, Texas. The prosecuting attorney, the judge, the jury, and even F. Lee Bailey; whom you hire to defend you, seem to think your amnesia is an imposture, the desperate invention of a guilty man. The prosecution calls your own wife, a woman named Denise, to testify that during most of the period after your escape you lived in hiding in her New York apartment, and she is able to produce several witnesses to confirm this. You cannot positively contradict her. You are sentenced to be executed either by a firing squad or lethal injection. Which is it to be?`, // Displayed when the player first enters the room.
        // arguement for lethal injection or firing squad
        exits: [
          {
            dir: ['squad',], //Two word strings are not working, need to find out why
            id : 'deat-f3'
          },
          {
            dir: ['injection'],
            id : 'deat-le3'
          },
          {
            dir: ['appeal', 'fight', 'resist'],
            id : 'deat-3'
          },
          {
            dir: [''], //onExit command here
            id : 'deat-2'
          },
        ],
      },
      {
        id: 'deat-2', // if the player doesn't pick firing squad or lethal injection
        name: '',
        desc: `You must make a decision: the firing squad or lethal injection, which will it be?`,
        exits: [
          {
            dir: ['firing', 'squad', 'firing squad'],
            id : 'deat-f3'
          },
          {
            dir: ['lethal', 'injection', 'lethal injection'],
            id : 'deat-le3'
          },
          {
            dir: [''], //onExit command here
            id : 'deat-2'
          },
        ],
      },
      
      {
        id: 'deat-f3', // if the player chooses firing squad
        name: '', // Displayed each time the player enters the room.
        desc: `On the morning of the day you are to be shot, a guard comes to your cell on Death Row and announces that you have a visitor. He takes you to the visiting room, and there, behind the wire mesh, already wearing the black dress and veil of her mourning, is your widow-soon-to-be, Denise. “Oh, Xavier!” she exclaims as you come into the room. “My poor darling! How shall I ever bear this loss?” She presses her face close to the wire mesh and awaits your kiss.`, // Displayed when the player first enters the room.
        onLook: () =>  {
          const room = getRoom('deat-f3');
          room.desc = `You search her face for some sign of genuine feeling but encounter a gaze of unyielding opacity. It is not that her eyes avoid yours; they are simply, and studiedly, noncommittal, like the eyes of a medical student performing an autopsy. For whose sake, you wonder, is she putting on this performance? Is she really your wife? And are you really guilty of the crime for which you’re to be executed? If only you could remember!`

        },
        exits: [
          {
            dir: ['kiss', 'hug', 'touch'], // second argument matters here
            id : 'deat-f4'
          },
          {
            dir: ['marriage', 'denise', 'who are you'], // second argument matters here
            id : 'deat-f7'
          },
          {
            dir: ['bite', 'spit', 'fuck', 'die'], // second argument matters here
            id : 'deat-f6'
          },
          {
            dir: ['xavier', 'hollings', 'xavier hollings', 'xav'], // second argument matters here
            id : 'deat-f8'
          },
          { 
            dir: [''], //onExit command here
            id : 'deat-f5'
          },
        ],
      },
      {
        id: 'deat-3', // if the player chooses to appeal the decision
        name: '', // Displayed each time the player enters the room.
        desc: `F. Lee Bailey takes your appeal to the highest court, but always the verdict and the sentence are sustained. At last, the dreaded day is at hand, and you must choose the means of your execution A firing squad or lethal injection--which is it?`, // Displayed when the player first enters the room.
        exits: [
          {
            dir: ['squad'],
            id : 'deat-f3'
          },
          {
            dir: ['injection'],
            id : 'deat-le3'
          },
          {
            dir: [''],
            id : 'deat-2'
          },
        ],
      },
      {
        id: 'deat-f4', // if Kiss, hug, or touch  Denise if firing squad selected
        name: '', // Displayed each time the player enters the room.
        desc: `Your lips meet hers in a kiss as chilly and formal as the swan carved from ice that appears at the end of a banquet. Yet when Denise draws back, she seems as pleased and replete as the proverbial cat that ate the canary. She wipes an imaginary tear from the corner of her eye with a cambric handkerchief embroidered with red and white roses.`, // Displayed when the player first enters the room.
        onEnter: () => {
            pressEnter('deat-f5');
        }
      },
      {
        id: 'deat-f5', // after Kiss, hug, or touch  Denise if firing squad selected
        name: '', // Displayed each time the player enters the room.
        desc: `Denise affects to wipe away a tear with her cambric handkerchief. “Xavier, forgive me, but I don’t think I can bear much more of this. My heart is simply breaking with the pity of it, and in any case I have to see the lawyers at three o’clock. It seems you won’t be able to cut me out of your will--as you’ve tried to do behind my back. I’ll inherit your estate willy-nilly--and your mother’s too, when she kicks the bucket. And I made the trip here today just to have the satisfaction of telling you myself.” She awaits your reaction with a taunting smile.`, // Displayed when the player first enters the room.
        onEnter: () => {
            pressEnter('deat-f9');
        }
      },
      {
        id: 'deat-f6', // if BITE/SPIT or any obscenity at Denise if firing squad selected
        name: '', // Displayed each time the player enters the room.
        desc: `It may be a small-minded satisfaction but you feel a genuine glow of pleasure at ruffling Denise’s black feathers. She hisses through the wire mesh that her revenge for this final insult will be to inform the reporters after your execution that you were sexually impotent, a drug addict, and that her chief conjugal responsibility was to read you a comic book each night before bed. She leaves the visiting room with a look of pure malice, and the guard escorts you back to your cell.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-f10');
      }
      },
      {
        id: 'deat-f7', // if ASK ABOUT DENISE or MARRIAGE or WHO ARE YOU if firing squad selected
        name: '', // Displayed each time the player enters the room.
        desc: `“It’s very brave of you, my dear, to stick to this silly story about your amnesia right to the bitter end, but surely with me there’s no need for such an imposture. You ask me about myself as though we were strangers. I’m your wife, the woman you love and to whom you confessed your guilt.”`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-f9');
        }
      },
      {
        id: 'deat-f8', // if ASK ABOUT XAVIER at DENISE if firing squad selected
        name: '', // Displayed each time the player enters the room.
        desc: `Denise sighs. “Xavier, I refuse to go through this foolish imposture with you. You know who you are. You know what you’ve done. And now you must face the fact that you must die. Do please try to die with some style. That’s all I have to say, except good-bye--and thank you for a huge inheritance. I’ll try and spend it the way you’d want me to--on big cars and lovely clothes and rubies and emeralds.” She leaves the visiting room with a flourish of her black crepe de chine mourning gown, and the guard leads you back to your cell on Death Row.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-f9');
        }
      },
      {
        id: 'deat-f9', // Proceeding to last meal node if firing squad selected
        name: '', // Displayed each time the player enters the room.
        desc: `Denise rises from her chair. “So long, sucker. Have a nice afterlife.” She leaves the room, and the guard escorts you back to your cell.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-f10');
          reenableInput();
        }
      },
      {
        id: 'deat-le3', // if the player chooses lethal injection
        name: '', // Displayed each time the player enters the room.
        desc: `On the morning of the day you are to be shot, a guard comes to your cell on Death Row and announces that you have a visitor. He takes you to the visiting room, and there, behind the wire mesh, already wearing the black dress and veil of her mourning, is your widow-soon-to-be, Denise. “Oh, Xavier!” she exclaims as you come into the room. “My poor darling! How shall I ever bear this loss?” She presses her face close to the wire mesh and awaits your kiss.`, // Displayed when the player first enters the room.
        onLook: () =>  {
          const room = getRoom('deat-le3');
        room.desc = `You search her face for some sign of genuine feeling but encounter a gaze of unyielding opacity. It is not that her eyes avoid yours; they are simply, and studiedly, noncommittal, like the eyes of a medical student performing an autopsy. For whose sake, you wonder, is she putting on this performance? Is she really your wife? And are you really guilty of the crime for which you’re to be executed? If only you could remember!`

      },
       exits: [
        {
          dir: ['kiss', 'hug', 'touch'],
          id : 'deat-le4'
        },
        {
          dir: ['marriage', 'denise', 'who are you'],
          id : 'deat-le7'
        },
        {
          dir: ['bite', 'spit', 'fuck', 'die'],
          id : 'deat-le6'
        },
        {
          dir: ['xavier', 'hollings', 'xavier hollings', 'xav'],
          id : 'deat-le8'
        },
        { //Anything other than the directions, wonder how to do that
          dir: [''],
          id : 'deat-le5' //onExit here
        },
      ],
    },
    {
      id: 'deat-le4', // if Kiss, hug, or touch  Denise if lethal injection selected
      name: '', // Displayed each time the player enters the room.
      desc: `Your lips meet hers in a kiss as chilly and formal as the swan carved from ice that appears at the end of a banquet. Yet when Denise draws back, she seems as pleased and replete as the proverbial cat that ate the canary. She wipes an imaginary tear from the corner of her eye with a cambric handkerchief embroidered with red and white roses.`, // Displayed when the player first enters the room.
      onEnter: () => {
          pressEnter('deat-le5');
      }
    },
    {
      id: 'deat-le5', // after Kiss, hug, or touch  Denise if lethal injection selected
      name: '', // Displayed each time the player enters the room.
      desc: `Denise affects to wipe away a tear with her cambric handkerchief. “Xavier, forgive me, but I don’t think I can bear much more of this. My heart is simply breaking with the pity of it, and in any case I have to see the lawyers at three o’clock. It seems you won’t be able to cut me out of your will--as you’ve tried to do behind my back. I’ll inherit your estate willy-nilly--and your mother’s too, when she kicks the bucket. And I made the trip here today just to have the satisfaction of telling you myself.” She awaits your reaction with a taunting smile.`, // Displayed when the player first enters the room.
      onEnter: () => {
          pressEnter('deat-le9');
      }
    },
    {
      id: 'deat-le6', // if BITE/SPIT or any obscenity at Denise if lethal injection selected
      name: '', // Displayed each time the player enters the room.
      desc: `It may be a small-minded satisfaction but you feel a genuine glow of pleasure at ruffling Denise’s black feathers. She hisses through the wire mesh that her revenge for this final insult will be to inform the reporters after your execution that you were sexually impotent, a drug addict, and that her chief conjugal responsibility was to read you a comic book each night before bed. She leaves the visiting room with a look of pure malice, and the guard escorts you back to your cell.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-le10');
    }
    },
    {
      id: 'deat-le7', // if ASK ABOUT DENISE or MARRIAGE or WHO ARE YOU if lethal injection selected
      name: '', // Displayed each time the player enters the room.
      desc: `“It’s very brave of you, my dear, to stick to this silly story about your amnesia right to the bitter end, but surely with me there’s no need for such an imposture. You ask me about myself as though we were strangers. I’m your wife, the woman you love and to whom you confessed your guilt.”`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-le9');
      }
    },
    {
      id: 'deat-le8', // if ASK ABOUT XAVIER at DENISE if firing squad selected
      name: '', // Displayed each time the player enters the room.
      desc: `Denise sighs. “Xavier, I refuse to go through this foolish imposture with you. You know who you are. You know what you’ve done. And now you must face the fact that you must die. Do please try to die with some style. That’s all I have to say, except good-bye--and thank you for a huge inheritance. I’ll try and spend it the way you’d want me to--on big cars and lovely clothes and rubies and emeralds.” She leaves the visiting room with a flourish of her black crepe de chine mourning gown, and the guard leads you back to your cell on Death Row.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-le9');
      }
    },
    {
      id: 'deat-le9', // Proceeding to last meal node if firing squad selected
      name: '', // Displayed each time the player enters the room.
      desc: `Denise rises from her chair. “So long, sucker. Have a nice afterlife.” She leaves the room, and the guard escorts you back to your cell.`, // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-le10');
      }
    },
    {
      id: 'deat-le10', // last meal node if lethal injection squad
      name: '', // Displayed each time the player enters the room. 
      desc: `Back in your cell you await the hour of execution. The warden asks what you would like for your last meal. Your first request shocks the warden, who is a man of simple, unsophisticated tastes. He explains that all previous condemned men have ordered either steak and potatoes for their last meal, or barbecued ribs, or roast turkey with stuffing. “So, which of those three will it be?”`, // Displayed when the player first enters the room.
     // argument made and stored for either ribs, turkey, steak
     onEnter: () =>{
      document.querySelector('input').disabled = false;
      document.getElementById('arrow').innerHTML = '>';
     },
     exits: [
      {
        dir: ['steak', 'potatoes', 'steak and potatoes'], // two word arguement
        id : 'deat-lesp'
      },
      {
        dir: ['barbecue', 'ribs', 'barbecue ribs'], // two word arguement
        id : 'deat-lebr'
      },
      {
        dir: ['roasted', 'turkey', 'roasted turkey'], // two word arguement
        id : 'deat-lert'
      },
      {
        dir: [''], // If no input
        id : 'deat-letar'
      },
    ],
    },
    {
      id: 'deat-f10', // last meal node if firing squad
      name: '', // Displayed each time the player enters the room. 
      desc: `Back in your cell you await the hour of execution. The warden asks what you would like for your last meal. Your first request shocks the warden, who is a man of simple, unsophisticated tastes. He explains that all previous condemned men have ordered either steak and potatoes for their last meal, or barbecued ribs, or roast turkey with stuffing. “So, which of those three will it be?”`, // Displayed when the player first enters the room.
     // argument made and stored for either ribs, turkey, steak
     onEnter: () => {
        document.querySelector('input').disabled = false;
        document.getElementById('arrow').innerHTML = '>';
       },
     exits: [
      {
        dir: ['steak', 'potatoes', 'steak and potatoes'], // two word arguement
        id : 'deat-fsp'
      },
      {
        dir: ['barbecue', 'ribs', 'barbecue ribs'], // two word arguement
        id : 'deat-fbr'
      },
      {
        dir: ['roasted', 'turkey', 'roasted turkey'], // two word arguement
        id : 'deat-frt'
      },
      {
        dir: [''], // If no input
        id : 'deat-ftar'
      },
    ],
    },
    {
      id: 'deat-fsp', // religious node if firing squad and steak and potatoes
      name: '', // Displayed each time the player enters the room.
      desc: `“You’ll probably want to see a clergyman now. I forget: are you Catholic, Protestant, or Jewish?”`, // Displayed when the player first enters the room.
     // argument made and stored for either ribs, turkey, steak
     exits: [
      {
        dir: ['jewish'], 
        id : 'deat-fspj'
      },
      {
        dir: ['catholic'], 
        id : 'deat-fspc'
      },
      {
        dir: ['protestant'], 
        id : 'deat-fspp'
      },
      {
        dir: [''], // If no input
        id : 'deat-fsp1'
      },
    ],
    },
    {
      id: 'deat-fbr', // religious node if firing squad and barbeque ribs
      name: '', // Displayed each time the player enters the room.
      desc: `“You’ll probably want to see a clergyman now. I forget: are you Catholic, Protestant, or Jewish?”`, // Displayed when the player first enters the room.
     // argument made and stored for either ribs, turkey, steak
     exits: [
      {
        dir: ['jewish'], 
        id : 'deat-fbrj'
      },
      {
        dir: ['catholic'], 
        id : 'deat-fbrc'
      },
      {
        dir: ['protestant'], 
        id : 'deat-fbrp'
      },
      {
        dir: [''], // If no input
        id : 'deat-fbr1'
      },
    ],
    },
    {
      id: 'deat-frt', // religious node if firing quad and roasted turkey
      name: '', // Displayed each time the player enters the room.
      desc: `“You’ll probably want to see a clergyman now. I forget: are you Catholic, Protestant, or Jewish?”`, // Displayed when the player first enters the room.
     // argument made and stored for either ribs, turkey, steak
     exits: [
      {
        dir: ['jewish'], 
        id : 'deat-frtj'
      },
      {
        dir: ['catholic'], 
        id : 'deat-frtc'
      },
      {
        dir: ['protestant'], 
        id : 'deat-frtp'
      },
      {
        dir: [''], // If no input
        id : 'deat-frt1'
      },
    ],
    },
    {
      id: 'deat-ftar', // religious node if firing squad and no meal selected
      name: '', // Displayed each time the player enters the room.
      desc: `“You’ll probably want to see a clergyman now. I forget: are you Catholic, Protestant, or Jewish?”`, // Displayed when the player first enters the room.
     // argument made and stored for either ribs, turkey, steak
     exits: [
      {
        dir: ['jewish'], 
        id : 'deat-ftarj'
      },
      {
        dir: ['catholic'], 
        id : 'deat-ftarc'
      },
      {
        dir: ['protestant'], 
        id : 'deat-ftarp'
      },
      {
        dir: [''], // If no input
        id : 'deat-ftar1'
      },
    ],
    },
      {
        id: 'deat-lesp', // religious node if lethal injection and steak and potatoes
        name: '', // Displayed each time the player enters the room.
        desc: `“You’ll probably want to see a clergyman now. I forget: are you Catholic, Protestant, or Jewish?”`, // Displayed when the player first enters the room.
       // argument made and stored for either ribs, turkey, steak
       exits: [
        {
          dir: ['jewish'], 
          id : 'deat-lespj'
        },
        {
          dir: ['catholic'], 
          id : 'deat-lespc'
        },
        {
          dir: ['protestant'], 
          id : 'deat-lespp'
        },
        {
          dir: [''], // If no input
          id : 'deat-lesp1'
        },
      ],
      },
      {
        id: 'deat-lebr', // religious node if lethal injection and barbeque ribs
        name: '', // Displayed each time the player enters the room.
        desc: `“You’ll probably want to see a clergyman now. I forget: are you Catholic, Protestant, or Jewish?”`, // Displayed when the player first enters the room.
       // argument made and stored for either ribs, turkey, steak
       exits: [
        {
          dir: ['jewish'], 
          id : 'deat-lebrj'
        },
        {
          dir: ['catholic'], 
          id : 'deat-lebrc'
        },
        {
          dir: ['protestant'], 
          id : 'deat-lebrp'
        },
        {
          dir: [''], // If no input
          id : 'deat-lebr1'
        },
      ],
      },
      {
        id: 'deat-lert', // religious node if lethal injection and roasted turkey
        name: '', // Displayed each time the player enters the room.
        desc: `“You’ll probably want to see a clergyman now. I forget: are you Catholic, Protestant, or Jewish?”`, // Displayed when the player first enters the room.
       // argument made and stored for either ribs, turkey, steak
       exits: [
        {
          dir: ['jewish'], 
          id : 'deat-lertj'
        },
        {
          dir: ['catholic'], 
          id : 'deat-lertc'
        },
        {
          dir: ['protestant'], 
          id : 'deat-lertp'
        },
        {
          dir: [''], // If no input
          id : 'deat-lert1'
        },
      ],
      },
      {
        id: 'deat-letar', // religious node if lethal injection and no meal selected
        name: '', // Displayed each time the player enters the room.
        desc: `“You’ll probably want to see a clergyman now. I forget: are you Catholic, Protestant, or Jewish?”`, // Displayed when the player first enters the room.
       // argument made and stored for either ribs, turkey, steak
       exits: [
        {
          dir: ['jewish'], 
          id : 'deat-letarj'
        },
        {
          dir: ['catholic'], 
          id : 'deat-letarc'
        },
        {
          dir: ['protestant'], 
          id : 'deat-letarp'
        },
        {
          dir: [''], // If no input
          id : 'deat-letar1'
        },
      ],
      },
      {
        id: 'deat-letarj', // If JEWISH, lethal injection & no meal selected
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-letar2');
        }
      },
      {
        id: 'deat-letarc', // If CATHOLIC & lethal injection & no meal selected
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-letar2');
        }
      },
      {
        id: 'deat-letarp', // If Protestant & lethal injection & no meal selected
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-letar2');
        }
      },
      {
        id: 'deat-letar1', // If none or go away, lethal injection & no meal selected
        name: '', // Displayed each time the player enters the room.
        desc: `“That’s about what I figured,” the warden says, and bids you good day.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-letar2');
        }
      },
      {
        id: 'deat-letar2', // lethal injection & no meal cont
        name: '', // Displayed each time the player enters the room.
        desc: `You spend the next hour preparing to face death and debating with yourself the pros and cons of capital punishment. If you could be sure you’d killed a guard while trying to escape from this prison, you’d feel less of two minds. Since you’re not sure, you feel it isn’t really fair to be executed. How much more humane, you think, to induce amnesia like your own instead of condemning men to death. On the other hand, given a choice between a quick and painless death and a lifetime of dying slowly here in Revoltillo…
        Your gloomy meditations are interrupted by the arrival of a guard with a covered tray. “Your last meal,” he announces, placing the tray on a table. “Enjoy it.” The guard leaves you alone. You uncover the dish and regard the last meal you’re to enjoy in this life.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-letar3');
        }
      },
      {
        id: 'deat-letar3', //  lethal injection & no meal cont
        name: '', // Displayed each time the player enters the room.
        desc: 'You are confronted with a bowl of cold chili garnished with a large dead hairy tarantula. An unsigned note accompanying this entree says: “We didn’t want you to die without a chance to sample our famous Texas chili!”', // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-letar4');
        }
      },
      {
        id: 'deat-letar4', //  lethal injection & no meal cont
        name: '', // Displayed each time the player enters the room.
        desc: `The guard looks in through the bars of your cell and sees you are not eating your last meal. “Come on, Hollings,” he says encouragingly. “You’re holding everything up. Eat your last meal so we can get this show on the road.” The guard goes away before you can make any reply, and you look down at the food on the plate. You begin, despite yourself, to salivate.\n
        You begin to eat your last meal. It is delicious! No, that is probably the wrong word. Objectively it is probably at the level of an average roadside diner. But subjectively it seems incredibly significant. You finish the last morsel on your plate--and then, like a bolt from the blue, it hits you--a memory from your past life. A memory that makes you realize that you must be innocent of the crime for which you are dying.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-letar5');
        }
      },
      {
        id: 'deat-letar5', // lethal injection & no meal cont
        name: '', // Displayed each time the player enters the room.
        desc: 'Balefully you regard this last sadistic prank of the staff of Revoltillo State Penitentiary, and briefly you consider ways of disposing of the chili in a spirit of reciprocal spite. But then, to your dismay and astonishment, you experience a voracious hunger for the cold, congealed chili before you. Your mouth waters like a faucet, and every cell of your body screams: “Feed me! Feed me!” like the voices of a rioting cellblock.\n You look down at the dead tarantula, which you’d removed from the chili before eating it, and remember your first experience of prison. In Santa Candelaria, where, investigating the rumors of a plague of amnesia that had been reported in a weekly tabloid paper, you had incurred the enmity of the local sheriff. He’d framed you on drug charges, imprisoned you with a flagrant disregard of all your legal rights, and made you the butt of endless sadistic jokes, such as serving you just such a bowl of tarantula-garnished chili. The horror of that squalid jail cell! The horror of it!', // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lelw');
        }
      },
      {
        id: 'deat-letarj', // If JEWISH, lethal injection & no meal selected
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-letar2');
        }
      },
      {
        id: 'deat-letarc', // If CATHOLIC & lethal injection & no meal selected
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-letar2');
        }
      },
      {
        id: 'deat-letarp', // If Protestant & lethal injection & no meal selected
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-letar2');
        }
      },
      {
        id: 'deat-lesp1', // If none or go away, lethal injection & Steak and Potatoes
        name: '', // Displayed each time the player enters the room.
        desc: `“That’s about what I figured,” the warden says, and bids you good day.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lesp2');
        }
      },
      {
        id: 'deat-lesp2', // lethal injection & steak and potatoes
        name: '', // Displayed each time the player enters the room.
        desc: `You spend the next hour preparing to face death and debating with yourself the pros and cons of capital punishment. If you could be sure you’d killed a guard while trying to escape from this prison, you’d feel less of two minds. Since you’re not sure, you feel it isn’t really fair to be executed. How much more humane, you think, to induce amnesia like your own instead of condemning men to death. On the other hand, given a choice between a quick and painless death and a lifetime of dying slowly here in Revoltillo…
        Your gloomy meditations are interrupted by the arrival of a guard with a covered tray. “Your last meal,” he announces, placing the tray on a table. “Enjoy it.” The guard leaves you alone. You uncover the dish and regard the last meal you’re to enjoy in this life.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lesp3');
        }
      },
      {
        id: 'deat-lesp3', //  lethal injection & steak and potatoes
        name: '', // Displayed each time the player enters the room.
        desc: 'A large sirloin steak confronts you, together with an abundance of french fries, and a single lettuce leaf symbolizing salad.', // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lesp4');
        }
      },
      {
        id: 'deat-lesp4', //  lethal injection & steak and potatoes
        name: '', // Displayed each time the player enters the room.
        desc: `The guard looks in through the bars of your cell and sees you are not eating your last meal. “Come on, Hollings,” he says encouragingly. “You’re holding everything up. Eat your last meal so we can get this show on the road.” The guard goes away before you can make any reply, and you look down at the food on the plate. You begin, despite yourself, to salivate.\n
        You begin to eat your last meal. It is delicious! No, that is probably the wrong word. Objectively it is probably at the level of an average roadside diner. But subjectively it seems incredibly significant. You finish the last morsel on your plate--and then, like a bolt from the blue, it hits you--a memory from your past life. A memory that makes you realize that you must be innocent of the crime for which you are dying.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lesp5');
        }
      },
      {
        id: 'deat-lesp5', // lethal injection & steak and potatoes
        name: '', // Displayed each time the player enters the room.
        desc: 'You remember an earlier steak dinner you had with Denise. You remember the care and deliberation with which she cut into her own steak with the steak knife after you had told her that you had fallen in love with another woman and that your engagement was over. You remember her look of rage and her quick recovery as she told you that she understood and wished you every happiness with your new love.', // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lelw');
        }
      },
      {
        id: 'deat-lespj', // If JEWISH, lethal injection & steak and potatoes
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lesp2');
        }
      },
      {
        id: 'deat-lespc', // If CATHOLIC & lethal injection & steak and potatoes
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lesp2');
        }
      },
      {
        id: 'deat-lespp', // If Protestant & lethal injection & steak and potatoes
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lesp2');
        }
      },
      {
        id: 'deat-lebr1', // If none or go away, lethal injection & Barbecue Ribs
        name: '', // Displayed each time the player enters the room.
        desc: `“That’s about what I figured,” the warden says, and bids you good day.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lebr2');
        }
      },
      {
        id: 'deat-lebr2', // lethal injection & Barbecue Ribs
        name: '', // Displayed each time the player enters the room.
        desc: `You spend the next hour preparing to face death and debating with yourself the pros and cons of capital punishment. If you could be sure you’d killed a guard while trying to escape from this prison, you’d feel less of two minds. Since you’re not sure, you feel it isn’t really fair to be executed. How much more humane, you think, to induce amnesia like your own instead of condemning men to death. On the other hand, given a choice between a quick and painless death and a lifetime of dying slowly here in Revoltillo…
        Your gloomy meditations are interrupted by the arrival of a guard with a covered tray. “Your last meal,” he announces, placing the tray on a table. “Enjoy it.” The guard leaves you alone. You uncover the dish and regard the last meal you’re to enjoy in this life.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lebr3');
        }
      },
      {
        id: 'deat-lebr3', //  lethal injection & Barbecue Ribs
        name: '', // Displayed each time the player enters the room.
        desc: 'The barbecue sauce on the slab of ribs is charred to the brown nearest black. There is a mound of french fries and a small paper cup of coleslaw.', // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lebr4');
        }
      },
      {
        id: 'deat-lebr4', //  lethal injection & Barbecue Ribs
        name: '', // Displayed each time the player enters the room.
        desc: `The guard looks in through the bars of your cell and sees you are not eating your last meal. “Come on, Hollings,” he says encouragingly. “You’re holding everything up. Eat your last meal so we can get this show on the road.” The guard goes away before you can make any reply, and you look down at the food on the plate. You begin, despite yourself, to salivate.\n
        You begin to eat your last meal. It is delicious! No, that is probably the wrong word. Objectively it is probably at the level of an average roadside diner. But subjectively it seems incredibly significant. You finish the last morsel on your plate--and then, like a bolt from the blue, it hits you--a memory from your past life. A memory that makes you realize that you must be innocent of the crime for which you are dying.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lebr5');
        }
      },
      {
        id: 'deat-lebr5', // lethal injection & Barbecue Ribs
        name: '', // Displayed each time the player enters the room.
        desc: 'You remember an earlier dinner of barbecue ribs you had at a diner somewhere in Texas.  On the outskirts of a town called Santa Candelaria.  From your table you could see back into the kitchen, where a fat counterman was sprinkling soap into an antique dishwasher. It was then you’d had the sense of Eureka, and the pieces of the puzzle had fit together. You remember the Odd Lots Discount Store and its great stacks of the detergent that had failed its test marketing and was being remaindered here and perhaps nowhere else. Shimmer the soap was called--you’d seen the bright blue package in every one of the homes you’d been allowed to investigate. It had only been a hunch, but it had proved correct. It was Shimmer, or one of its decay-products, that had been responsible for Santa Candelaria’s plague of amnesia!.', // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lelw');
        }
      },
      {
        id: 'deat-lebrj', // If JEWISH, lethal injection & Barbecue Ribs
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lebr2');
        }
      },
      {
        id: 'deat-lebrc', // If CATHOLIC & lethal injection & Barbecue Ribs
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lebr2');
        }
      },
      {
        id: 'deat-lebrp', // If Protestant & lethal injection & Barbecue Ribs
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lebr2');
        }
      },
      {
        id: 'deat-lert1', // If none or go away, lethal injection & Roasted Turkey
        name: '', // Displayed each time the player enters the room.
        desc: `“That’s about what I figured,” the warden says, and bids you good day.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lert2');
        }
      },
      {
        id: 'deat-lert2', // lethal injection & roasted turkey
        name: '', // Displayed each time the player enters the room.
        desc: `You spend the next hour preparing to face death and debating with yourself the pros and cons of capital punishment. If you could be sure you’d killed a guard while trying to escape from this prison, you’d feel less of two minds. Since you’re not sure, you feel it isn’t really fair to be executed. How much more humane, you think, to induce amnesia like your own instead of condemning men to death. On the other hand, given a choice between a quick and painless death and a lifetime of dying slowly here in Revoltillo…
        Your gloomy meditations are interrupted by the arrival of a guard with a covered tray. “Your last meal,” he announces, placing the tray on a table. “Enjoy it.” The guard leaves you alone. You uncover the dish and regard the last meal you’re to enjoy in this life.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lert3');
        }
      },
      {
        id: 'deat-lert3', //  lethal injection & roasted turkey
        name: '', // Displayed each time the player enters the room.
        desc: 'Several slices of turkey breast are surmounted with a perfect sphere of stuffing over which has been ladled a great deal of thick pale gravy. A squat, neat cylinder of cranberry sauce accompanies this holiday dinner..', // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lert4');
        }
      },
      {
        id: 'deat-lert4', //  lethal injection & roasted turkey
        name: '', // Displayed each time the player enters the room.
        desc: `The guard looks in through the bars of your cell and sees you are not eating your last meal. “Come on, Hollings,” he says encouragingly. “You’re holding everything up. Eat your last meal so we can get this show on the road.” The guard goes away before you can make any reply, and you look down at the food on the plate. You begin, despite yourself, to salivate.\n
        You begin to eat your last meal. It is delicious! No, that is probably the wrong word. Objectively it is probably at the level of an average roadside diner. But subjectively it seems incredibly significant. You finish the last morsel on your plate--and then, like a bolt from the blue, it hits you--a memory from your past life. A memory that makes you realize that you must be innocent of the crime for which you are dying.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lert5');
        }
      },
      {
        id: 'deat-lert5', // lethal injection & roasted turkey
        name: '', // Displayed each time the player enters the room.
        desc: 'You remember a holiday dinner years ago. It was your first Christmas home from college. After the dinner you had mustered up the courage to ask your mother (your father was already dead then) if you were an adopted child. She had denied it emphatically, and asked you how you had come to have such a suspicion. You had not told her, then, about Zane. Only years later, when she had put up the bail to release you from the nightmarish prison cell in Santa Candelaria, only then did you tell her that you had, if not an identical twin, a doppelganger, and even then she had denied you could be Zane’s twin. “You’re my son!” she insisted almost hysterically. “I will not have you suppose otherwise!”', // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lelw');
        }
      },
      {
        id: 'deat-lertj', // If JEWISH, lethal injection & roasted turkey
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lert2');
        }
      },
      {
        id: 'deat-lertc', // If CATHOLIC & lethal injection & roasted turkey
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lert2');
        }
      },
      {
        id: 'deat-lertp', // If Protestant & lethal injection & roasted turkey
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lert2');
        }
      },
      {
        id: 'deat-ftarj', // If JEWISH, firing squad & no meal selected
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-ftar2');
        }
      },
      {
        id: 'deat-ftarc', // If CATHOLIC & firing squad & no meal selected
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-ftar2');
        }
      },
      {
        id: 'deat-ftarp', // If Protestant & firing squad & no meal selected
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-ftar2');
        }
      },
      {
        id: 'deat-ftar1', // If none or go away, firing squad & no meal selected
        name: '', // Displayed each time the player enters the room.
        desc: `“That’s about what I figured,” the warden says, and bids you good day.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-ftar2');
        }
      },
      {
        id: 'deat-ftar2', // firing squad & no meal cont
        name: '', // Displayed each time the player enters the room.
        desc: `You spend the next hour preparing to face death and debating with yourself the pros and cons of capital punishment. If you could be sure you’d killed a guard while trying to escape from this prison, you’d feel less of two minds. Since you’re not sure, you feel it isn’t really fair to be executed. How much more humane, you think, to induce amnesia like your own instead of condemning men to death. On the other hand, given a choice between a quick and painless death and a lifetime of dying slowly here in Revoltillo…
        Your gloomy meditations are interrupted by the arrival of a guard with a covered tray. “Your last meal,” he announces, placing the tray on a table. “Enjoy it.” The guard leaves you alone. You uncover the dish and regard the last meal you’re to enjoy in this life.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-ftar3');
        }
      },
      {
        id: 'deat-ftar3', //  lethal injection & no meal cont
        name: '', // Displayed each time the player enters the room.
        desc: 'You are confronted with a bowl of cold chili garnished with a large dead hairy tarantula. An unsigned note accompanying this entree says: “We didn’t want you to die without a chance to sample our famous Texas chili!”', // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-ftar4');
        }
      },
      {
        id: 'deat-ftar4', //  firing squad & no meal cont
        name: '', // Displayed each time the player enters the room.
        desc: `The guard looks in through the bars of your cell and sees you are not eating your last meal. “Come on, Hollings,” he says encouragingly. “You’re holding everything up. Eat your last meal so we can get this show on the road.” The guard goes away before you can make any reply, and you look down at the food on the plate. You begin, despite yourself, to salivate.\n
        You begin to eat your last meal. It is delicious! No, that is probably the wrong word. Objectively it is probably at the level of an average roadside diner. But subjectively it seems incredibly significant. You finish the last morsel on your plate--and then, like a bolt from the blue, it hits you--a memory from your past life. A memory that makes you realize that you must be innocent of the crime for which you are dying.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-ftar5');
        }
      },
      {
        id: 'deat-ftar5', // firing squad & no meal cont
        name: '', // Displayed each time the player enters the room.
        desc: 'Balefully you regard this last sadistic prank of the staff of Revoltillo State Penitentiary, and briefly you consider ways of disposing of the chili in a spirit of reciprocal spite. But then, to your dismay and astonishment, you experience a voracious hunger for the cold, congealed chili before you. Your mouth waters like a faucet, and every cell of your body screams: “Feed me! Feed me!” like the voices of a rioting cellblock.\n You look down at the dead tarantula, which you’d removed from the chili before eating it, and remember your first experience of prison. In Santa Candelaria, where, investigating the rumors of a plague of amnesia that had been reported in a weekly tabloid paper, you had incurred the enmity of the local sheriff. He’d framed you on drug charges, imprisoned you with a flagrant disregard of all your legal rights, and made you the butt of endless sadistic jokes, such as serving you just such a bowl of tarantula-garnished chili. The horror of that squalid jail cell! The horror of it!', // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-flw');
        }
      },
      {
        id: 'deat-ftarj', // If JEWISH, firing squad & no meal selected
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-letar2');
        }
      },
      {
        id: 'deat-ftarc', // If CATHOLIC & firing squad & no meal selected
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-letar2');
        }
      },
      {
        id: 'deat-ftarp', // If Protestant & firing squad & no meal selected
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-ftar2');
        }
      },
      {
        id: 'deat-fsp1', // If none or go away, firing squad & Steak and Potatoes
        name: '', // Displayed each time the player enters the room.
        desc: `“That’s about what I figured,” the warden says, and bids you good day.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-fsp2');
        }
      },
      {
        id: 'deat-fsp2', // firing squad & steak and potatoes
        name: '', // Displayed each time the player enters the room.
        desc: `You spend the next hour preparing to face death and debating with yourself the pros and cons of capital punishment. If you could be sure you’d killed a guard while trying to escape from this prison, you’d feel less of two minds. Since you’re not sure, you feel it isn’t really fair to be executed. How much more humane, you think, to induce amnesia like your own instead of condemning men to death. On the other hand, given a choice between a quick and painless death and a lifetime of dying slowly here in Revoltillo…
        Your gloomy meditations are interrupted by the arrival of a guard with a covered tray. “Your last meal,” he announces, placing the tray on a table. “Enjoy it.” The guard leaves you alone. You uncover the dish and regard the last meal you’re to enjoy in this life.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-fsp3');
        }
      },
      {
        id: 'deat-fsp3', //  firing squad & steak and potatoes
        name: '', // Displayed each time the player enters the room.
        desc: 'A large sirloin steak confronts you, together with an abundance of french fries, and a single lettuce leaf symbolizing salad.', // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-fsp4');
        }
      },
      {
        id: 'deat-fsp4', //  firing squad & steak and potatoes
        name: '', // Displayed each time the player enters the room.
        desc: `The guard looks in through the bars of your cell and sees you are not eating your last meal. “Come on, Hollings,” he says encouragingly. “You’re holding everything up. Eat your last meal so we can get this show on the road.” The guard goes away before you can make any reply, and you look down at the food on the plate. You begin, despite yourself, to salivate.\n
        You begin to eat your last meal. It is delicious! No, that is probably the wrong word. Objectively it is probably at the level of an average roadside diner. But subjectively it seems incredibly significant. You finish the last morsel on your plate--and then, like a bolt from the blue, it hits you--a memory from your past life. A memory that makes you realize that you must be innocent of the crime for which you are dying.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-fsp5');
        }
      },
      {
        id: 'deat-fsp5', // firing squad & steak and potatoes
        name: '', // Displayed each time the player enters the room.
        desc: 'You remember an earlier steak dinner you had with Denise. You remember the care and deliberation with which she cut into her own steak with the steak knife after you had told her that you had fallen in love with another woman and that your engagement was over. You remember her look of rage and her quick recovery as she told you that she understood and wished you every happiness with your new love.', // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-flw');
        }
      },
      {
        id: 'deat-fspj', // If JEWISH, firing squad & steak and potatoes
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-fsp2');
        }
      },
      {
        id: 'deat-fspc', // If CATHOLIC & firing squad & steak and potatoes
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-fsp2');
        }
      },
      {
        id: 'deat-fspp', // If Protestant & firing squad & steak and potatoes
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-fsp2');
        }
      },
      {
        id: 'deat-fbr1', // If none or go away, firing squad & Barbecue Ribs
        name: '', // Displayed each time the player enters the room.
        desc: `“That’s about what I figured,” the warden says, and bids you good day.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-fbr2');
        }
      },
      {
        id: 'deat-fbr2', // firing squad & Barbecue Ribs
        name: '', // Displayed each time the player enters the room.
        desc: `You spend the next hour preparing to face death and debating with yourself the pros and cons of capital punishment. If you could be sure you’d killed a guard while trying to escape from this prison, you’d feel less of two minds. Since you’re not sure, you feel it isn’t really fair to be executed. How much more humane, you think, to induce amnesia like your own instead of condemning men to death. On the other hand, given a choice between a quick and painless death and a lifetime of dying slowly here in Revoltillo…
        Your gloomy meditations are interrupted by the arrival of a guard with a covered tray. “Your last meal,” he announces, placing the tray on a table. “Enjoy it.” The guard leaves you alone. You uncover the dish and regard the last meal you’re to enjoy in this life.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-fbr3');
        }
      },
      {
        id: 'deat-fbr3', //  firing squad & Barbecue Ribs
        name: '', // Displayed each time the player enters the room.
        desc: 'The barbecue sauce on the slab of ribs is charred to the brown nearest black. There is a mound of french fries and a small paper cup of coleslaw.', // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-fbr4');
        }
      },
      {
        id: 'deat-fbr4', //  firing squad & Barbecue Ribs
        name: '', // Displayed each time the player enters the room.
        desc: `The guard looks in through the bars of your cell and sees you are not eating your last meal. “Come on, Hollings,” he says encouragingly. “You’re holding everything up. Eat your last meal so we can get this show on the road.” The guard goes away before you can make any reply, and you look down at the food on the plate. You begin, despite yourself, to salivate.\n
        You begin to eat your last meal. It is delicious! No, that is probably the wrong word. Objectively it is probably at the level of an average roadside diner. But subjectively it seems incredibly significant. You finish the last morsel on your plate--and then, like a bolt from the blue, it hits you--a memory from your past life. A memory that makes you realize that you must be innocent of the crime for which you are dying.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-fbr5');
        }
      },
      {
        id: 'deat-fbr5', // firing squad & Barbecue Ribs
        name: '', // Displayed each time the player enters the room.
        desc: 'You remember an earlier dinner of barbecue ribs you had at a diner somewhere in Texas.  On the outskirts of a town called Santa Candelaria.  From your table you could see back into the kitchen, where a fat counterman was sprinkling soap into an antique dishwasher. It was then you’d had the sense of Eureka, and the pieces of the puzzle had fit together. You remember the Odd Lots Discount Store and its great stacks of the detergent that had failed its test marketing and was being remaindered here and perhaps nowhere else. Shimmer the soap was called--you’d seen the bright blue package in every one of the homes you’d been allowed to investigate. It had only been a hunch, but it had proved correct. It was Shimmer, or one of its decay-products, that had been responsible for Santa Candelaria’s plague of amnesia!.', // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-flw');
        }
      },
      {
        id: 'deat-fbrj', // If JEWISH, firing squad & Barbecue Ribs
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-fbr2');
        }
      },
      {
        id: 'deat-fbrc', // If CATHOLIC & firing squad& Barbecue Ribs
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-fbr2');
        }
      },
      {
        id: 'deat-fbrp', // If Protestant & firing squad & Barbecue Ribs
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-fbr2');
        }
      },
      {
        id: 'deat-frt1', // If none or go away, firing squad& Roasted Turkey
        name: '', // Displayed each time the player enters the room.
        desc: `“That’s about what I figured,” the warden says, and bids you good day.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-frt2');
        }
      },
      {
        id: 'deat-frt2', // firing squad & roasted turkey
        name: '', // Displayed each time the player enters the room.
        desc: `You spend the next hour preparing to face death and debating with yourself the pros and cons of capital punishment. If you could be sure you’d killed a guard while trying to escape from this prison, you’d feel less of two minds. Since you’re not sure, you feel it isn’t really fair to be executed. How much more humane, you think, to induce amnesia like your own instead of condemning men to death. On the other hand, given a choice between a quick and painless death and a lifetime of dying slowly here in Revoltillo…
        Your gloomy meditations are interrupted by the arrival of a guard with a covered tray. “Your last meal,” he announces, placing the tray on a table. “Enjoy it.” The guard leaves you alone. You uncover the dish and regard the last meal you’re to enjoy in this life.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-frt3');
        }
      },
      {
        id: 'deat-frt3', //  firing squad & roasted turkey
        name: '', // Displayed each time the player enters the room.
        desc: 'Several slices of turkey breast are surmounted with a perfect sphere of stuffing over which has been ladled a great deal of thick pale gravy. A squat, neat cylinder of cranberry sauce accompanies this holiday dinner..', // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-frt4');
        }
      },
      {
        id: 'deat-frt4', //  firing squad & roasted turkey
        name: '', // Displayed each time the player enters the room.
        desc: `The guard looks in through the bars of your cell and sees you are not eating your last meal. “Come on, Hollings,” he says encouragingly. “You’re holding everything up. Eat your last meal so we can get this show on the road.” The guard goes away before you can make any reply, and you look down at the food on the plate. You begin, despite yourself, to salivate.\n
        You begin to eat your last meal. It is delicious! No, that is probably the wrong word. Objectively it is probably at the level of an average roadside diner. But subjectively it seems incredibly significant. You finish the last morsel on your plate--and then, like a bolt from the blue, it hits you--a memory from your past life. A memory that makes you realize that you must be innocent of the crime for which you are dying.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-lert5');
        }
      },
      {
        id: 'deat-frt5', // firing squad & roasted turkey
        name: '', // Displayed each time the player enters the room.
        desc: 'You remember a holiday dinner years ago. It was your first Christmas home from college. After the dinner you had mustered up the courage to ask your mother (your father was already dead then) if you were an adopted child. She had denied it emphatically, and asked you how you had come to have such a suspicion. You had not told her, then, about Zane. Only years later, when she had put up the bail to release you from the nightmarish prison cell in Santa Candelaria, only then did you tell her that you had, if not an identical twin, a doppelganger, and even then she had denied you could be Zane’s twin. “You’re my son!” she insisted almost hysterically. “I will not have you suppose otherwise!”', // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-flw');
        }
      },
      {
        id: 'deat-frtj', // If JEWISH, firing squad & roasted turkey
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a rabbi comes to your cell. He recites two or three of the more consoling Psalms, in Hebrew, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-frt2');
        }
      },
      {
        id: 'deat-lertc', // If CATHOLIC & firing squad & roasted turkey
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Catholic priest comes to your cell. He hears your confession, and offers spiritual counsels suited to your circumstances.`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-frt2');
        }
      },
      {
        id: 'deat-frtp', // If Protestant & firing squad & roasted turkey
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-frt2');
        }
      },
      {
        id: 'deat-fbad', // If you swear at the guard firing squad
        name: '', // Displayed each time the player enters the room.
        desc: `The warden bids you good-day, and a little later a Protestant minister comes to your cell. He reads passages from the New Testament to you, and offers spiritual counsels suited to your circumstances`, // Displayed when the player first enters the room.
        onEnter: () => {
          pressEnter('deat-fgo');
        }
      },
    {
      id: 'deat-lebad', // if you swear at the guard lethal injection
      name: '', // Displayed each time the player enters the room.
      desc: 'The warden regards you with contempt and disbelief. “Come on, Hollings. You’ve only got a few minutes left. Try and show some dignity.” You are led, protesting your innocence, to the place of execution.', // Displayed when the player first enters the room.
      onEnter: () => {
        pressEnter('deat-fgo');
      }
    },
    {
      id: 'deat-lelw', // Last Words lethal injection route
      name: '', // Displayed each time the player enters the room.
      desc: `And then it all comes back in a rush, everything you’d forgotten, the entire tangle of events your amnesia had erased. And you realize that you are innocent! It wasn’t you who murdered the guard. It wasn’t you who escaped from Revoltillo. You’re innocent of those crimes.
      But this realization comes too late, for it is just then that the warden comes to your cell with the guards who are to ready you for your execution.
      “Xavier Hollings,” the warden asks solemnly, “do you have any last words?”`, // Displayed when the player first enters the room.
      // if anything
      onEnter: () =>{
        document.querySelector('input').disabled = false;
        document.getElementById('arrow').innerHTML = '>';
       },
      exits: [
        {
          dir: ['no', '', 'yes'], //Two word strings are not working, need to find out why
          id : 'deat-lego'
        },
        {
          dir: ['fuck', 'shit', 'die'], //Two word strings are not working, need to find out why
          id : 'deat-lebad'
        },
      ],
    },
    {
      id: 'deat-flw', // Last Words firing squad route
      name: '', // Displayed each time the player enters the room.
      desc: `And then it all comes back in a rush, everything you’d forgotten, the entire tangle of events your amnesia had erased. And you realize that you are innocent! It wasn’t you who murdered the guard. It wasn’t you who escaped from Revoltillo. You’re innocent of those crimes.
      But this realization comes too late, for it is just then that the warden comes to your cell with the guards who are to ready you for your execution.
      “Xavier Hollings,” the warden asks solemnly, “do you have any last words?”`, // Displayed when the player first enters the room.
      // if anything
      onEnter: () =>{
        document.querySelector('input').disabled = false;
        document.getElementById('arrow').innerHTML = '>';
       },
      exits: [
        {
          dir: ['no', '', 'yes'], //Two word strings are not working, need to find out why
          id : 'deat-fgo'
        },
        {
          dir: ['fuck', 'shit', 'die'], //Two word strings are not working, need to find out why
          id : 'deat-fbad'
        },
      ],
    },
    {
      id: 'deat-fgo', // If Firing Squad
      name: '', // Displayed each time the player enters the room.
      desc: `A stake has been placed in the courtyard of the prison, and you are bound to it. A chaplain appears to offer you some last words of comfort, and he too refuses to listen to your protests, as does the guard who offers you a blindfold and a last cigarette.
      “It’s just as well you don’t smoke,” he says, as he walks toward the group of six marksmen standing at the ready some ten yards away. “It’s bad for your health. Says so right on the package.”
      The marksmen laugh appreciatively at his joke.
      They take aim. You close your eyes. The order to Fire! is given.
      You die.`, // Displayed when the player first enters the room.
      // Go to Game Over
    },
    {
      id: 'deat-lego', // If lethal injection
      name: '', // Displayed each time the player enters the room.
      desc: `It is a small room glaringly lighted with about 500 watts of fluorescent light. The light gives a surreal intensity to the room’s single item of furniture, a kind of dentist’s chair that has been modified with a panoply of leather and canvas restraints. You are made to sit in the chair, and a guard secures the restraints.
      “This is the first time we’ve ever done a lethal injection here in Texas. They say it’s the wave of the future, but I don’t know. I think there’s something to be said for the traditional way of doing these things. What do you think?”\n
      The guard frowns thoughtfully at your protests of innocence and your frenzied attempt to explain the bizarre events that got you into this fix. “There’s nothing I can do to help you, fellow. Talk to the chaplain.”\n
      The chaplain assures you that only God can help you now. The chaplain leaves.\n
      A medical attendant enters the room. He makes a tourniquet below your biceps with a length of rubber tubing, and then when he has found a vein, he injects the poison.
      There is a tingling along your arm, a pain in your chest, followed by a sense of wonderful relaxation. You feel you still have breath enough to speak a single word that will be your last. You say it:`, // Displayed when the player first enters the room.
      onEnter: () =>{
        document.querySelector('input').disabled = false;
        document.getElementById('arrow').innerHTML = '>';
       },
      exits: [
        {
          dir: [''], //Two word strings are not working, need to find out why
          id : 'deat-ledie'
        },
      ],
      // if anything
      // println('And then you die'
      //pressEnter('gameover?')
    },
    {
      id: 'deat-ledie', // If lethal injection
      name: '', // Displayed each time the player enters the room.
      desc: `And then you die`, // Displayed when the player first enters the room.
      exits: [
        {
          dir: [''], //Two word strings are not working, need to find out why
          id : 'deat-ledie'
        },
      ],
      // if anything
      // println('And then you die'
      //pressEnter('gameover?')
    },
    ],
  };