const dakota = {
    roomId: '72-cent',
    rooms: [
    {
      id: '72-cent',
      coord: [],
      name: `W. 72nd St. and Central Pk. W.`,
      desc: `You walk into the gate house.`,
      onEnter: () => 
      {
        pressEnter('dakota-1');  
      },
    },
    {
      id: 'dakota-1', // Guard stops to ask who you want to see
      name: `The Dakota`,
      desc: `"Stop right there," the guard advises you, as you step into the shadow of the tunnel entrance. "Visitors have be announced. Who are you here to see?"`,
      onEnter: () => 
      {
        reenableInput();  
      },
      onBlock: () => 
      {
        if(prevInput === 'colby'){ //colby is the correct anwser, leading to the entrance
          enterRoom('dakota-2a');
        }else {
          enterRoom('dakota-2b');
        }
      },
    },
    {
      id: 'dakota-2a',
      name: `The Dakota`,
      desc: `"And your name?"`,
      onBlock: () => 
      {
        if(prevInput === 'hollings'){
          enterRoom('dakota-4');
        }else if(prevInput === 'xavier'){
          enterRoom('dakota-4');
        }else if(prevInput === 'john' ){
          enterRoom('dakota-3');
        }else if(prevInput === 'cameron'){
          enterRoom('dakota-3');
        }else{
          enterRoom('dakota-2b');
        }
      },
    },
    {
      id: 'dakota-2b', // Leads to death and texas
      name: `The Dakota`,
      desc: `"Sorry, there is no one here by that name, and I would suggest that you leave." With this the guard retires into a kind of sentry box and begins speaking into a telephone, glancing at you from time to time.`,
      onBlock: () =>
      {
        if(prevInput === 'leave'){ // this ensures no matter what you type your going to death and texas path
          enterRoom('dakota-death');
        }else{
          enterRoom('dakota-death');
        }
      },
      exits: [
        {
            dir: ['leave'],
            id : 'dakota-death'
        },
      ],
    },
    {
      id: 'dakota-death', // Leads to death and texas
      name: `The Dakota`,
      desc: `The guard picks up a newspaper and ignores you. As you stand there, feeling resentful and frustrated, you feel a tap on your shoulder. You turn around to confront two policemen.\n  

      'We'd like to see some identification,' says the younger policeman.`,
      onEnter: () =>
      {
        pressEnter('dakota-death-2');
      },
    },
    {
      id: 'dakota-death-2', // Leads to death and texas
      name: `The Dakota`,
      desc: `Before you can invent an excuse, the older policeman smiles. 'No need for ID. I recognize him. This is Xavier Hollings. Am I right, Mr. Hollings?`,
      onEnter: () =>
      {
        pressEnter('dakota-death-3');
      },
    },
    {
      id: 'dakota-death-3', // Leads to death and texas
      name: `The Dakota`,
      desc: `Protest is unavailing. You are handcuffed and led to the squad car, where the arresting officer asks you, in a tone of idle curiosity, the means of execution administered by the state of Texas.`,
      onEnter: () =>
      {
        pressEnter('deat-1'); // Proceed to death and texas
      },
    },
    {
      id: 'dakota-3', // If the player gets here too early and doesn't know his name is xavier hollings
      name: `The Dakota`,
      desc: `The guard darts into a kind of a sentry box, where you can see him speaking on a phone. He returns and says, 'Sorry, that party is not at home. Try again later.' You leave.`,
      onEnter: () => 
      {
        pressEnter('72-cent');
      },
    },
    {
      id: 'dakota-4', 
      name: `The Dakota`,
      desc: `The guard darts into a kind of sentry box, where you can see him speaking on a phone. He returns and grudgingly lets you enter the Dakota. 'It's Apartment 44," he says, and gives you directions.`,
      onEnter: () => 
      {
        pressEnter('dakota-5');
      },
    },
    {
      id: 'dakota-5', 
      name: `The Dakota`,
      desc: `You cross the inner courtyard to the building's northeast tower-block, and after waiting for an elevator that clicks and buzzes but never arrives, you mount a long staircase.`,
      onEnter: () => 
      {
        pressEnter('dakota-6');
      },
    },
    {
      id: 'dakota-6', 
      name: `The Dakota`,
      desc: `By the time you reach the third floor, you're breathing hard. You pause beside the open doorway of a vacant apartment that is being painted, then continue up to the fourth floor when you've caught your breath.`,
      onEnter: () => 
      {
        pressEnter('dakota-7');
      },
    },
    {
      id: 'dakota-7', 
      name: `The Dakota`,
      desc: `You enter apartment 41.`,
      onEnter: () => 
      {
        pressEnter('dakota-8');
      },
    },
    {
      id: 'dakota-8', 
      name: `The Dakota`,
      desc: `You are in the entryway of apartment 44. Before you is a Chinese table supporting a large yellow ginger jar. To your right is a partly opened double doorway from which bright light spills into the hallway. To your left is another door.`,
      onEnter: () => 
      {
        reenableInput();
      },
      items: [
        {
          itemId: 'jar',
          name: ['yellow ginger jar', 'jar', 'yellow jar', 'large jar', 'large yellow ginger jar', 'large ginger jar'],
          desc: 'It is a massive Chinese ginger jar',
          isTakeable: false,
          onTake: () => {
            println(`It's too big.`);
          }
        },
        {
          itemId: 'table',
          name: ['table', 'chinese table'],
          desc: `The table is ebony and elaborately carved.`,
          isTakeable: false,
          onTake: () => {
            println(`It's too heavy.`);
          }
        },
      ],
      exits: [
        {
          dir: 'north',
          id: 'dakota-8',
          block: `You can't go that way.`
        },
        {
          dir: ['west', 'left'],
          id: 'dakota-8',
          block: `You can't go that way.`
        },
        {
          dir: ['right', 'east'],
          id : 'dakota-denise-1'
        },
        {
          dir: 'south',
          id : 'dakota-8',
          block: `You can't go that way.`
        },
        {
          dir: 'leave',
          id : 'dakota-leave'
        },
      ],
    },
    {
      id: 'dakota-leave', 
      name: `The Dakota`,
      desc: `You return to the street outside the Dakota.`,
      onEnter: () => 
      {
        pressEnter('72-cent');
      },
    },
    {
      id: 'dakota-denise-1', 
      name: `The Dakota`,
      desc: `You are in a room decorated with money -- not in its raw form but in fabric and wood equivalents. A few spindly antique chairs are aswim on a swirling sea of Persian carpeting.\n
      The wood-paneled walls are a hymn to money declaring itself spent, and four chandeliers hang from the ceiling with the same purpose in mind. \n
      All sense of individuality or personality has been scrupulously avoided. A bank lobby could not be more completely consecrated to its own inordinate expense.`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-2');
      },
    },
    {
      id: 'dakota-denise-2', // Introducing Denise outside of Death and Texas
      name: `The Dakota`,
      desc: `Through a doorway concealed in the wood paneling a woman enters the room. "John," she says. "My husband! At last we meet. You look quite well."`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-3');
      },
    },
    {
      id: 'dakota-denise-3', // Introducing Denise outside of Death and Texas
      name: `The Dakota`,
      desc: `You look at the woman who says she's your wife. She is beautiful, there's no getting around the fact. It's a beautiful that has nothing to do with character. It's not her eyes, or grace, or warmth. She's beautiful the way the sky is blue or blood is red.`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-4');
      },
    },
    {
      id: 'dakota-denise-4', // Introducing Denise outside of Death and Texas
      name: `The Dakota`,
      desc: `She reaches into the concealed bar and pulls out a small, sleek automatic pistol which she points at the center of your chest.`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-5');
      },
    },
    {
      id: 'dakota-denise-5', // Introducing Denise outside of Death and Texas
      name: `The Dakota`,
      desc: `Smiling, she says, "So my dear husband, we're together again. It's so nice of you to drop over like this when we'd lost all track of you and just didn't know where to look. I've invited a few people to help us celebrate our reunion. Sit back and relax while we wait for them."`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-6');
      },
    },
    {
      id: 'dakota-denise-6', // Introducing Denise outside of Death and Texas
      name: `The Dakota`,
      desc: `"First, of course, there are the other women in your life. Alison, your ex-assistant. Tell me, Why didn't you marry the poor, pathetic creature?"`,
      onEnter: () =>{
        reenableInput();
      },
      onBlock: () =>
      {
        if(prevInput === 'bette'){ // this ensures no matter what you type your going to dakota-denise-8
          enterRoom('dakota-denise-7a');
        }else if(prevInput === 'fight'){
          enterRoom('dakota-denise-7b');
        }else{
          enterRoom('dakota-denise-7a');
        }
      },
    },
    {
      id: 'dakota-denise-7a',
      name: `The Dakota`,
      desc: `"I told her you would never go along with her ridiculous scheme -- but I hoped you might, since otherwise how were we to get around killing you? She does love you in her own misguided way."`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-8');
      },
    },
    {
      id: 'dakota-denise-7b', // If you try to fight
      name: `The Dakota`,
      desc: `A sense of self-preservation forces you not to provoke anyone pointing a gun at you.\n
      "I told her you would never go along with her ridiculous scheme -- but I hoped you might, since otherwise how were we to get around killing you? She does love you in her own misguided way."`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-8');
      },
    },
    {
      id: 'dakota-denise-8',
      name: `The Dakota`,
      desc: `"Alison was the one who -- at least temporarily -- convinced us that rather than murder you we should let you go to Australia as Mr. and Mrs. Cameron. That's why we put on our little drama at the Sunderland."`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-9');
      },
    },
    {
      id: 'dakota-denise-9',
      name: `The Dakota`,
      desc: `"Since we failed to convince you, of course, we've had to return to our first plan, which is to kill you and pass it off as suicide."`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-10');
      },
    },
    {
      id: 'dakota-denise-10',
      name: `The Dakota`,
      desc: `"Then, of course, there is your photographer bitch -- Bette, I believe her name is. I haven't invited her yet, but I think we should have her here, don't you? Tell me, do you love her?"`,
      onEnter: () => 
      {
        reenableInput();
      },
      onBlock: () =>
      {
        if(prevInput === 'no'){ // Unique dialogue
          enterRoom('dakota-denise-11a');
        }else if(prevInput === 'yes'){
          enterRoom('dakota-denise-11b');
        }else if(prevInput === 'fight'){
          enterRoom('dakota-denise-11c');
        }else{
          enterRoom('dakota-denise-12');
        }
      },
    },
    {
      id: 'dakota-denise-11a',
      name: `The Dakota`,
      desc: `"No?" Denise seems surprised. "That's not what you said the last time we met, lover. Then you were coming on like that damned radio station that plays love songs, nothing but love songs, all day long."`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-12');
      },
    },
    {
      id: 'dakota-denise-11b',
      name: `The Dakota`,
      desc: `"Then you should be able, having loved at least once in your life, to face death with equanimity. Even nobility. So I've read. I couldn't tell you from personal experience.`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-12');
      },
    },
    {
      id: 'dakota-denise-11c',
      name: `The Dakota`,
      desc: `A sense of self-preservation forces you not to provoke anyone pointing a gun at you.`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-12');
      },
    },
    {
      id: 'dakota-denise-12',
      name: `The Dakota`,
      desc: `She finishes her martini, and looks up with an expression of polite interest, as though she were working at the information booth of a good department store. "Would you like me to pour some more drinks?"`,
      onEnter: () => 
      {
        reenableInput();
      },
      onBlock: () =>
      {
        if(prevInput === 'no'){ // Unique dialogue
          enterRoom('dakota-denise-13a');
        }else if(prevInput === 'yes'){
          enterRoom('dakota-denise-13b');
        }else if(prevInput === 'fight'){
          enterRoom('dakota-denise-13c');
        }
      },
    },
    {
      id: 'dakota-denise-13a',
      name: `The Dakota`,
      desc: `Well, I can really use one."`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-13b');
      },
    },
    {
      id: 'dakota-denise-13b',
      name: `The Dakota`,
      desc: `"Oh yes, I'm an alcoholic. Alcoholics usually deny they're alcoholics, but I freely admit it."\n
      "Getting back to our party, the third guest is Luke, whom I'm sure you remember. He's a dreadfully coarse man and I've made it clear that I will not have anything to do with him once we've completed our undertaking -- to prepare you, dear one, for the undertaker."
      "We thought he'd accomplished that little task back at the chapel in the Sunderland. But in any event, I'm sure we'll relish the opportunity to try again."`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-14');
      },
    },
    {
      id: 'dakota-denise-13c',
      name: `The Dakota`,
      desc: `A sense of self-preservation forces you not to provoke anyone pointing a gun at you.\n
      "Oh yes, I'm an alcoholic. Alcoholics usually deny they're alcoholics, but I freely admit it."\n
      "Getting back to our party, the third guest is Luke, whom I'm sure you remember. He's a dreadfully coarse man and I've made it clear that I will not have anything to do with him once we've completed our undertaking -- to prepare you, dear one, for the undertaker."
      "We thought he'd accomplished that little task back at the chapel in the Sunderland. But in any event, I'm sure we'll relish the opportunity to try again."`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-14');
      },
    },
    {
      id: 'dakota-denise-14',
      name: `The Dakota`,
      desc: `"So tell me, how did you get my number?"`,
      onEnter: () => 
      {
        reenableInput();
      },
      onBlock: () =>
      {
        if(prevInput === 'bette'){ // Unique dialogue
          enterRoom('dakota-denise-15a');
        }else if(prevInput === 'fight'){
          enterRoom('dakota-denise-15c');
        }else{
          enterRoom('dakota-denise-15b');
        }
      },
    },
    {
      id: 'dakota-denise-15a',
      name: `The Dakota`,
      desc: `"Miss Binet is so helpful."\n
      You decide that perhaps telling Denise what she wants to know will give you an opportunity to find some point of weakness, some detail you can use to persuade her that your murder isn't necessary after all. You launch into the tale of your amnesial awakening at the Sunderland.`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-16');
      },
    },
    {
      id: 'dakota-denise-15b',
      name: `The Dakota`,
      desc: `You decide that perhaps telling Denise what she wants to know will give you an opportunity to find some point of weakness, some detail you can use to persuade her that your murder isn't necessary after all. You launch into the tale of your amnesial awakening at the Sunderland.`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-16');
      },
    },
    {
      id: 'dakota-denise-15c',
      name: `The Dakota`,
      desc: `A sense of self-preservation forces you not to provoke anyone pointing a gun at you.\n
      You decide that perhaps telling Denise what she wants to know will give you an opportunity to find some point of weakness, some detail you can use to persuade her that your murder isn't necessary after all. You launch into the tale of your amnesial awakening at the Sunderland.`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-16');
      },
    },
    {
      id: 'dakota-denise-16',
      name: `The Dakota`,
      desc: `She listens to your tale with growing impatience, and finally interrupts: "That's all very fascinating, I'm sure, and it will make for an unusual autobiography. But tell it to your ghostwriter."`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-17');
      },
    },
    {
      id: 'dakota-denise-17',
      name: `The Dakota`,
      desc: `"Personally, I'm skeptical about your case. It seems so convenient. There are days when I'd like nothing better than to erase my past. But I must make do with this." She glances down at her martini glass.`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-18');
      },
    },
    {
      id: 'dakota-denise-18',
      name: `The Dakota`,
      desc: `She refills it and looks admiringly around the expensive room. "You really set me up in style and I thank you.`,
      onEnter: () => 
      {
        reenableInput();
      },
      onBlock: () =>
      {
        if(prevInput === 'anything'){ // Doesn't matter what you say
          enterRoom('dakota-denise-19');
        }else if(prevInput === 'fight'){ // unqiue dialogue
          enterRoom('dakota-denise-19b')
        }else {
          enterRoom('dakota-denise-19');
        }
      },
    },
    {
      id: 'dakota-denise-19',
      name: `The Dakota`,
      desc: `"You once said to me that my life seemed 'frivolous.' I think you meant that I didn't have a job. I still don't, and I don't want one. Why should I? I have all the money I need, thanks to your unwitting generosity."`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-20');
      },
    },
    {
      id: 'dakota-denise-19b',
      name: `The Dakota`,
      desc: `A sense of self-preservation forces you not to provoke anyone pointing a gun at you.\n
      "You once said to me that my life seemed 'frivolous.' I think you meant that I didn't have a job. I still don't, and I don't want one. Why should I? I have all the money I need, thanks to your unwitting generosity."`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-20');
      },
    },
    {
      id: 'dakota-denise-20',
      name: `The Dakota`,
      desc: `"The Dakota is a good address, though of course it's on the wrong side of the park. With what I can save by living here I can afford my little condo at Vail. It would be nice never to have to budget, but on the whole I can't complain.`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-21');
      },
    },
    {
      id: 'dakota-denise-21',
      name: `The Dakota`,
      desc: `She takes a sip of her martini and comments, 'Most people fear too much vermouth, but I believe in a four-to-one ratio. Otherwise one might as well drink raw gin. Would you like another?`,
      onEnter: () => 
      {
        reenableInput();
      },
      onBlock: () =>
      {
        if(prevInput === 'no'){ // Unique dialogue
          enterRoom('dakota-denise-22a');
        }else if(prevInput === 'yes'){
          enterRoom('dakota-denise-22b');
        }else{
          enterRoom('dakota-denise-22b');
        }
      },
    },
    {
      id: 'dakota-denise-22a', // If you answer yes to filling your glass
      name: `The Dakota`,
      desc: `"Good idea. Drinking can shorten your life."\n "Poor darling. You look really confused. Do you want me to explain what happened in Texas?`,
      onEnter: () => 
      {
        reenableInput();
      },
      onBlock: () =>
      {
        if(prevInput === 'no'){ // Unique dialogue
          enterRoom('dakota-denise-23a');
        }else if(prevInput === 'yes'){
          enterRoom('dakota-denise-23b');
        }else{
          enterRoom('dakota-denise-23b')
        }
      },
    },
    {
      id: 'dakota-denise-22b', // If you answer yes to filling your glass
      name: `The Dakota`,
      desc: `She fills your glass.\n "Poor darling. You look really confused. Do you want me to explain what happened in Texas?`,
      onEnter: () => 
      {
        reenableInput();
      },
      onBlock: () =>
      {
        if(prevInput === 'no'){ // Unique dialogue
          enterRoom('dakota-denise-23a');
        }else if(prevInput === 'yes'){
          enterRoom('dakota-denise-23b');
        }else{
          enterRoom('dakota-denise-23b')
        }
      },
    },
    {
      id: 'dakota-denise-23a',
      name: `The Dakota`,
      desc: `"Another drink?" Denise asks once more.`,
      onBlock: () =>
      {
        if(prevInput === 'no'){ // Unique dialogue
          enterRoom('dakota-denise-nodrink');
        }else if(prevInput === 'yes'){
          enterRoom('dakota-denise-yesdrink');
        }else{
          enterRoom('dakota-denise-23b')
        }
      },
    },
    {
      id: 'dakota-denise-nodrink',
      name: `The Dakota`,
      desc: `"Very well, then we'll proceed to the business at hand.`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-35'); // skip straight to 35
      },
    },
    {
      id: 'dakota-denise-yesdrink',
      name: `The Dakota`,
      desc: `She pours what is left of the martinis into the two glasses, and empties her own glass with a gulp and a wince. You follow suit and drink yours down. "Now then, let's proceed to business."`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-35'); // skip straight to 35
      },
    },
    {
      id: 'dakota-denise-23b',
      name: `The Dakota`,
      desc: `"You really don't remember a thing, do you? Well, it's a familiar tale. Boy meets girl, boy woos girl, girl says yes, boy throws over girl. There, however, our tale took a twist, since at the time you announced to me that Bette had taken over my position as your fiancee, you were officially in prison."`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-24');
      },
    },
    {
      id: 'dakota-denise-24',
      name: `The Dakota`,
      desc: `"'Meaning Zane was. You were paying him some outrageous price to serve your time on a drug bust while you were enjoying yourself as John Cameron. When you gave me my walking papers, I packed my bag, flew down to Texas, and got married to my convict fiance. Zane was delighted to go along with the joke. After all, he was allowed a week's conjugal privileges."`,
      onEnter: () => 
      {
        pressEnter('dakota-denise-25');
      },
    },
    {
      id: 'dakota-denise-25',
      name: `The Dakota`,
      desc: `"I might add that he was great in the sack, although that wouldn't concern you."`, // Gross dude.
      onEnter: () => 
      {
        pressEnter('dakota-denise-26');
      },
    },
    {
      id: 'dakota-denise-26',
      name: `The Dakota`,
      desc: `"I've wondered myself a what point Zane decided to escape. If he'd broken out before I flew down there and we got married, he could have returned to being himself, the police would have been looking for Xavier Hollings, and you'd never have been able to resume your real identity or inherit the Hollings fortune."`, 
      onEnter: () => 
      {
        pressEnter('dakota-denise-27');
      },
    },
    {
      id: 'dakota-denise-27',
      name: `The Dakota`,
      desc: `"But then I showed up, and we struck our deal. If I became Mrs. Hollings, I could inherit as your next-of-kin. That's assuming, of course, that you'd be dead. Zane felt it'd be easy to manage your 'suicide.' After he escaped we tracked you down through Alison, who was helping you while you were in hiding."`, 
      onEnter: () => 
      {
        pressEnter('dakota-denise-28');
      },
    },
    {
      id: 'dakota-denise-28',
      name: `The Dakota`,
      desc: `"But then I showed up, and we struck our deal. If I became Mrs. Hollings, I could inherit as your next-of-kin. That's assuming, of course, that you'd be dead. Zane felt it'd be easy to manage your 'suicide.' After he escaped we tracked you down through Alison, who was helping you while you were in hiding."`, 
      onEnter: () => 
      {
        pressEnter('dakota-denise-29');
      },
    },
    {
      id: 'dakota-denise-29',
      name: `The Dakota`,
      desc: `"Can you imagine the expression on her face when she opened the door and saw Zane and I standing there, with Luke leering behind us like some malnourished vulture?"`, 
      onEnter: () => 
      {
        reenableInput();
      },
      onBlock: () =>
      {
        if(prevInput === 'no'){ // Saying anything takes you to the next room.
          enterRoom('dakota-denise-30');
        }else{
          enterRoom('dakota-denise-30')
        }
      },
    },
    {
      id: 'dakota-denise-30',
      name: `The Dakota`,
      desc: `"You were off galavanting around the city, and before you got home -- fortunately for you -- Alison persuaded us that, thanks to your convenient amnesial condition, she could not only solve our problem of the two Xavier Hollings, but provide us with an even larger fortune in the process."`, 
      onEnter: () => 
      {
        pressEnter('dakota-denise-31');
      },
    },
    {
      id: 'dakota-denise-31',
      name: `The Dakota`,
      desc: `"She would acquire from you the formula for your Texas-style wonder-drug, which she would in turn pass along to us. She would persuade you to marry her, and, as Mr. and Mrs. John Cameron, the two of you would ride out of our lives and into the Australian sunset. And we -- I -- would persuade Luke and Zane to let you go."`, 
      onEnter: () => 
      {
        pressEnter('dakota-denise-32');
      },
    },
    {
      id: 'dakota-denise-32',
      name: `The Dakota`,
      desc: `"The poor thing thought she'd have you docile as a lamb in three or four days. After four weeks, you not only didn't know the formula for the drug, you still refused to marry her and exit gracefully, even when Luk threatened you at the hotel."`, 
      onEnter: () => 
      {
        pressEnter('dakota-denise-33');
      },
    },
    {
      id: 'dakota-denise-33',
      name: `The Dakota`,
      desc: `Denise falls silent for a moment and stares into her martini glass intently, as though it were a cup of tea-leaves with your fortune in it. "Sometimes I do reproach myself for having taken the side of the bad guys in all this. You're obviously a NICER person than Zane, and usually as good or better a lay. My only excuse is self-interest."`, 
      onEnter: () => 
      {
        pressEnter('dakota-denise-34');
      },
    },
    {
      id: 'dakota-denise-33',
      name: `The Dakota`,
      desc: `"And I truly didn't want to have to kill you. The logic of the situation simply requires it. Once Zane killed that guard during the escape, and Alison's plan failed, there were no other options."\n
      "Another drink?"`, 
      onEnter: () => 
      {
        reenableInput();
      },
      onBlock: () =>
      {
        if(prevInput === 'no'){ // Saying anything takes you to the next room.
          enterRoom('dakota-denise-34a');
        }else if(prevInput === 'yes'){
          enterRoom('dakota-denise-34b');
        }else{
          enterRoom('dakota-denise-34b')
        }
      },
    },
    {
      id: 'dakota-denise-34b',
      name: `The Dakota`,
      desc: `She pours what is left of the martinis into the two glasses, and empties her own glass with a gulp and a wince. You follow suit and rink yours down. "Now then, let's proceed to business"`, 
      onEnter: () => 
      {
        pressEnter('dakota-denise-35');
      },
    },
    {
      id: 'dakota-denise-35',
      name: `The Dakota`,
      desc: `"We want the floppy disk you stored in the strongbox at the Sunderland Hotel, and your help in reading it. We assume that on it, under various layers of your amnesial ponderings, we'll find the formula of the drug that caused your amnesia."`, 
      onEnter: () => 
      {
        pressEnter('dakota-denise-36');
      },
    },
    {
      id: 'dakota-denise-36',
      name: `The Dakota`,
      desc: `"And what a wonder drug it is. It's commercial potentials are staggering. Think what it could do for prison reform. Or for victims of abuse or accidents."`, 
      onEnter: () => 
      {
        pressEnter('dakota-denise-37');
      },
    },
    {
      id: 'dakota-denise-37',
      name: `The Dakota`,
      desc: `"But I keep saying 'we' -- and you don't yet know who 'we' all are. Let me introduce you, then, to an old friend you may have forgotten." She raises her voice: "Zane, you may come in now."`, 
      onEnter: () => 
      {
        pressEnter('dakota-zane-1'); // Enter Zane
      },
    },
    {
      id: 'dakota-zane-1',
      name: `The Dakota`,
      desc: `A man enters the room; you turn to look into the face of Zane Bester -- and it is like looking into a mirror. He has his hair styled exactly like yours. His skin may be a shade paler, and his chin a bit slacker, but otherwise you might be identical twins. The crucial difference between the two of you at this moment, however, is the expression on your faces.`, 
      onEnter: () => 
      {
        pressEnter('dakota-zane-2');
      },
    },
    {
      id: 'dakota-zane-2',
      name: `The Dakota`,
      desc: `His is a look of cruel amusement; yours (though you can't see it, you can feel it in the form of trickles of sweat) a look of fear. \n
      Suddenly Zane tenses, your discomfort banished form his mind.\n
      "Somebody's outside!"`, 
      onEnter: () => 
      {
        pressEnter('dakota-zane-3');
      },
    },
    {
      id: 'dakota-zane-3',
      name: `The Dakota`,
      desc: `"It's just Luke," Denise tells him.\n
      "No, it's not. He went to the Sunderland to wait for Hollings. Besides, that's not his walk, I can her it isn't him."`, 
      onEnter: () => 
      {
        pressEnter('dakota-zane-4');
      },
    },
    {
      id: 'dakota-zane-4',
      name: `The Dakota`,
      desc: `He pulls a wicked-looking pistol from his waistband and opens the door of the room. After glancing down the hallway, ready to fire at the slightest sound or movement, he crosses to unlock the door on the other side. To his surprise, it is already unlocked.`, 
      onEnter: () => 
      {
        pressEnter('dakota-zane-5');
      },
    },
    {
      id: 'dakota-zane-5',
      name: `The Dakota`,
      desc: `Denise calls out to him, "Be careful, Zane," but it is more the voice of a cautious supervisor than a concerned friend.\n
      He ignores her, and creeps into the room across the hall like a spider that senses it has trapped a fly, vanishing from your view as he closes the door behind him.`, 
      onEnter: () => 
      {
        pressEnter('dakota-zane-6');
      },
    },
    {
      id: 'dakota-zane-6',
      name: `The Dakota`,
      desc: `CRACK! CRACK!\n
      The sound of gunfire is followed by that of breaking glass and crashing furniture. Denise's face pales, and she runs for the concealed door, her alcohol-numbed hands struggling for a moment before she can trip the hidden catch. You hear the 'click!' as she locks the door behind her.\n
      You are quite alone in the room. You see no sign of Zane across the hall, although various thumps and rustling noises continue to come from the room.`, 
      onEnter: () => 
      {
        reenableInput();
      },
      onBlock: () =>
      {
        if(prevInput === 'leave'){ // Saying anything takes you to the next room.
          enterRoom('dakota-zane-7');
        }else if(prevInput === 'fight'){
          enterRoom('dakota-zane-death');
        }else{
          enterRoom('dakota-zane-7');
        }
      },
    },
    {
      id: 'dakota-zane-death',
      name: `The Dakota`,
      desc: `Zane returns to the room, seeming both distrubed and somehow smugly satisfied. He looks at you oddly and shrugs his shoulders.`, 
      onEnter: () => 
      {
        pressEnter('dakota-zane-death-2');
      },
    },
    {
      id: 'dakota-zane-death-2',
      name: `The Dakota`,
      desc: `The pistol in his hand fires. Everything goes black.`, 
      onEnter: () => 
      {
        pressEnter('dakota-zane-death-3');
      },
    },
    {
      id: 'dakota-zane-death-3',
      name: `The Dakota`,
      desc: `You are lying on your back, and your heart is pumping your blood out of your body instead of through it. You hear a voice, Zane's asking, ever so faintly, "Is this as much fun for you as it is for me?"`, 
      onEnter: () => 
      {
        pressEnter('dakota-zane-death-4');
      },
    },
    {
      id: 'dakota-zane-death-4',
      name: `The Dakota`,
      desc: `You are dead.`, 
      onEnter: () => 
      {
        pressEnter('game-over'); // Game over screen
      },
    },
    {
      id: 'dakota-zane-7',
      name: `The Dakota`,
      desc: `You dash out of the room, through the hallway, out the front door and down the steep stairs, running so fast as to risk disaster but certain that to hesitate holds greater danger still.`, 
      onEnter: () => 
      {
        pressEnter('dakota-zane-8');
      },
    },
    {
      id: 'dakota-zane-8',
      name: `The Dakota`,
      desc: `The guard at the entrance calls out to you as you run by, but makes no move to stop you. Crossing the street into the park, you take a succession of paths, trying to turn randomly to frustrate any followers, then collapse to rest for a moment behind the trunk of a large tree.`, 
      onEnter: () => 
      {
        pressEnter('dakota-zane-9');
      },
    },
    {
      id: 'dakota-zane-9',
      name: `The Dakota`,
      desc: `No one has followed you.`, 
      onEnter: () => 
      {
        pressEnter('dakota-zane-10');
      },
    },
    {
      id: 'dakota-zane-10',
      name: `The Dakota`,
      desc: `With an air of exultation you realize that you are close to solving the riddle of your amnesia. Denise's explanation has filled most of the gaps in your memory; now you can tell Bette what really happened and together the two of you can formulate a plan.`, 
      onEnter: () => 
      {
        pressEnter('67-amer');
      },
    },
  ],
}