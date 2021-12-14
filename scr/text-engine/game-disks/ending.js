const ending = {
    roomId: 'cathe-1',
    rooms: [
    {
      id: 'cathe-1',
      coord: [],
      name: `St. Patricks Cathedral`,
      desc: `The moment you enter the cathedral a strange feeling comes over you. A combination of peace and uneasiness and guilt. But how can you feel guilty over a past you can't remember?\n
      The cathedral provides no answer to that question, but the feeling grows stronger. Waves of vertigo assail you. You'll have to sit in one of the pews -- or leave at once.`,
        onBlock: () => {
        if(prevInput === 'sit'){ // **We'll need a command for answering the phone
            enterRoom('cathe-2');
        }else{
            println(`You feel compelled to leave the chapel at once by a feeling so strong it almost scares you.`);
            pressEnter('51-5');
        }
      },
      exits: [
        {
            dir: ['leave'],
            id : '51-5'  
        }, 
            ],
    },
    {
        id: 'cathe-2',
        coord: [],
        name: `St. Patricks Cathedral`,
        desc: `As you collapse into one of the pews, a prayer rises from your sinful heart like a flame leaping from the wick of a candle.\n

        You realize that the world is nothing but a maze of wickedness and folly, a snare. You understand your true vocation and thank the Lord for your amnesia, which has freed you from a past life that must certainly have been sinful.\n
        
        To the East, before the alter of the cathedral, is a priest. To the West the door stands open onto the blare of 5th Ave.`,
        exits: [
          {
              dir: ['leave'],
              id : '51-5'     
          },
          {
            dir: ['east'],
            id : 'cathe-3'     
        },
        ],
      },
      {
        id: 'cathe-3', // Trappist Monk ending
        coord: [],
        name: `St. Patricks Cathedral`,
        desc: `You go to the priest so that you may offer the Church the rest of your life in service as a Trappist monk, dedicated to silence, chastity, poverty, and worship.\n
        Your problems are over. Holy Mother Church has accepted you into the Trappist order, and for the rest of your long, devout, and holy life you will raise vegetables and praise God at a monastery in rural Vermonnt. Congratulations on your escape from a world of sin!`,
        onEnter: () =>{
            playerC.sScore = 700;
            playerC.dScore = 0;
            playerC.cScore = 0;
            emptEnli = true;
            updateEndings();
            slideRightIn('achieve-display', 'achieve-text-container');
            pressEnter('game-over');
        },
      },
      {
        id: 'aust-1',
        coord: [],
        name: `Alls-Faith-Chapel`,
        desc: `She lifts the veil, revealing a smile that seems more triumphant than blissful, but the kiss you then exchange has a wordless way of saying that you will soon be rewarded for your submission to the yoke of marriage.`,
        onEnter: () =>{
            pressEnter('aust-2');

        },
      },
      {
        id: 'aust-2',
        coord: [],
        name: `Qantas Flight 461`,
        desc: `And so you are. That night, after a small wedding dinner in the Rathskellar, you enjoy that reward and cemet the bond of marriage in Room 1502.`,
        onEnter: () =>{
          playerC.sScore = 700;
            playerC.dScore = 0;
            playerC.cScore = 0;
            pressEnter('aust-3');
        },
      },
      {
        id: 'aust-3',
        coord: [],
        name: `Qantas Flight 461`,
        desc: `The next morning Luke arrives with a great deal of luggage and drives you to JFK airport, where you board a Qantas jet for Melbourne, Australia.`,
        onEnter: () =>{
            pressEnter('aust-4');
        },
      },
      {
        id: 'aust-4',
        coord: [],
        name: ``,
        desc: `Within a week you have established your residence at the modest sheep ranch that Alice brings as her dowry. It is a hard but ultimately satisfying life, and your marriage is blessed with a son, whom you decide name Hogan.`,
        onEnter: () =>{
            pressEnter('aust-5');
        },
      },
      {
        id: 'aust-5',
        coord: [],
        name: ``,
        desc: `A year later Alice gives birth to your first daughter, and her name is Ahria.`,
        onEnter: () =>{
            pressEnter('aust-6');
        },
      },
      {
        id: 'aust-6', // hehe 
        coord: [],
        name: ``,
        desc: `Then come the quints, and their names are: Natalie, Charlie, Craig, Arlo, Dene, Andrew, and Greg. `,
        onEnter: () =>{
            pressEnter('aust-7');
        },
      },
      {
        id: 'aust-7', 
        coord: [],
        name: ``,
        desc: `You live on, a prosperous hardworking sheep rancher, for many years, and gradually the feeling that there is a blank at the center of your life fades away. You almost forget the amnesia you suffered from so many years ago, and you no longer ask Alice questions about your earlier life, questions she coyly avoids answering. `,
        onEnter: () =>{
            pressEnter('aust-8');
        },
      },
      {
        id: 'aust-8', 
        coord: [],
        name: ``,
        desc: `"You don't really want to know about those things, John," she would tell you, and then turn away to call the children: "Come get your supper while it's hot!" On your deathbed you are still wondering who you are and what you'd done and what your life might have been like if you hadn't married darling Alice and devoted your life to the breeding of sheep.`,
        onEnter: () =>{
          theShep = true;
          updateEndings();
          slideRightIn('achieve-display', 'achieve-text-container');
          pressEnter('game-over');
        },
      },
    ],
}