const epilogue = {
    roomId: 'epil-1',
    rooms: [
    {
      id: 'epil-1',
      coord: [],
      name: `Bette's Apartment`,
      desc: `You wake up the next morning to the ringing of the cordless phone. You have been asleep on the sofa bed in Bette’s apartment.`,
      onLook: () =>
      {
        const room = getRoom('epil-1');
        room.desc = `The apartment is just as you last left it. The drapes are fluttering in the breeze from the open window. The phone continues ringing. It is placed on the floor just beside the sofa bed.`
      },
      onBlock: () => 
      {
        if(prevInput === 'phone'){ // **We'll need a command for answering the phone
            enterRoom('epil-2');
        }else{
            println(`The phone continues ringing.`);
        }
      },
    },
    {
        id: 'epil-2',
        coord: [],
        name: `Bette's Apartment`,
        desc: `You pick up the phone and say, "Hello."\n
        "I'm sorry to wake you darling," Bette's voice replies, "but I simply had to call as soon as I saw the headline in the DAILY NEWS."`,
        onEnter: () => 
        {
            pressEnter('epil-3');
        },
    },
    {
        id: 'epil-3',
        coord: [],
        name: `Bette's Apartment`,
        desc: `'It covers the entire front page, in gigantic letters: SLAUGHTER ON 8TH AVENUE! Then in a smaller headline under that: FOUR DEATHS IN BIZARRE LOVE NEST TRAGEDY. Story on Page Three. Do you want me to read you the story?"`,
        onEnter: () => 
        {
            reenableInput();
        },
        onBlock: () => 
        {
          if(prevInput === 'yes' || 'headline'){
              enterRoom('epil-4');
          }else{
              println(`"Darling, you simply have to hear this! It seems that Zane didn't die the moment we left. He managed to record a kind of confession -- and he made out a will. I'll just read that part -- listen!"`);
              pressEnter('epil-4');

          }
        },
    },
    {
        id: 'epil-4',
        coord: [],
        name: `Bette's Apartment`,
        desc: `"On a cassette recorder in his office, where he lay dying amid these scenes of carnage, Xavier Hollings describes how his confederate, Luke Bester, under the influence of drugs, had first murdered Miss Abrams in an effort to extort from her the whereabouts of moneys she purportedly sequestered from earlier drug transactions. Failing to do so, Bester is said to have threatened Hollings and his wife with a gun."\n

        "A wild gunbattle ensued, in which both Bester and Mrs. Hollings were killed, and Hollings himself was mortally wounded."\n
        
        "In the last moments before he died, Hollings wrote a brief account of these terrible events, and then went on to dictate a will bequeathing his entire estate to MIT, for the special purpose of doing research into the process of memory in worms, rats, and salamanders, an area in which Hollings felt a special interest."`,
        onEnter: () => 
        {
            pressEnter('epil-5');
        },
    },
    {
        id: 'epil-5',
        coord: [],
        name: `Bette's Apartment`,
        desc: `"Since the death of Hollings' mother four months ago, at a time when Hollings was already a fugitive from justice, Hollings; estate is estimated to be worth some forty million dollars. Hollings is not known to have other living heirs, and his bequest to MIT is not likely to be challenged in court."\n
        Bette pauses breathlessly, and then asks: “You’re not disappointed, are you? I mean about the money. Forty million dollars is such a lot, but then it’s not as you’ll suffer from the painful memories of your former affluence. And you’re quite bright enough, even without a degree, to earn good money as John Cameron, and with what I make we’ll soon be able to afford more than a studio, especially if you’re willing to live somewhere besides Manhattan. I mean don’t you think love is more important than money?”`,
        onEnter: () => 
        {
            reenableInput();
        },
        onBlock: () => 
        {
          if(prevInput === 'yes'){
              enterRoom('epil-6');
          }else{
              enterRoom('epil-6');

          }
        },
    },
    {
        id: 'epil-6',
        coord: [],
        name: `Bette's Apartment`,
        desc: `Bette laughs cheerfully, and says, "I knew you'd say something like that. Don't leave bed. I'll be right home with the newspaper and a pint of Haagen-Daaz. What's your favorite flavor? No, don't tell me. I know."`,
        onEnter: () => 
        {
            pressEnter('credits'); // Or whatever the last screen of the game is
        },
    },
    ],
}