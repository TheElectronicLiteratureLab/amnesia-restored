const lobby = {
    roomId: 'chapel',
    rooms: [
      {
        id: 'chapel-1',
        name: 'All-Faith Chapel',
        desc: `You are standing before a large rosewood door bearing a mottled brass nameplate declaring this to be the ALL-FAITH CHAPEL.`, 
           
        exits: [
          { //Any direction or "enter chapel" will result in entering the chapel.
            dir: 'enter',
            id: 'chapel-2', 
          },
  
        ],
      },

      { 
        id: 'chapel-2',
        desc: `You enter the chapel, which is dim and fragrant with the mingled scents of flowers and candlewax. It seems to be deserted.`,
  
        onLook: () => {
          const room = getRoom('chapel-2');
          room.desc = `The chapel is about twenty feet square, windowless, with a high coffered ceiling and a terracotta floor. In the center of the room is a large round slab of marble too low to dine at but too high to be a coffee table. Grouped about it on three sides are pews of blond wood. Behind it is a lectern flanked by a vase of wilting gladiolas on a free­standing marble column and a large candelabra, its candles burned down to the sockets. The general effect is that of a funeral parlor without a corpse.
          High up on three of the walls, forming a kind of frieze, is the All-Faith Chapel's chief claim to distinction, a much-darkened mural representing all the faiths of mankind worshipping the Supreme Being, painted (a plaque behind the lectern informs you) in 1938 by Maxfield Parrish. Christ, Moses, Mohammed, Buddha, Confucius, Martin Luther, and Mary Baker Eddy are represented sitting down at or standing about a table and waving their arms, all seeming to be alarmed by the gold-and-violet sunset sky painted on the wall to their right or by the magenta dawn to their left, or possibly by the simultaneity of these events, although the servants who are waiting on this distinguished gathering seem entirely unperturbed.`;
        },
  
        exits: [
          {
            dir: 'leave',
            id: 'chapel-4',
          },
          {
            dir: 'pray',
            id: 'chapel-3',
          },
        ],  
      },

      { 
        id: 'chapel-3',
        desc: `You enter one of the pews nearest the central marble slab and kneel on the padded kneeler. You fold your hands and bow your head and close your eyes. You’re all ready to say a prayer--but what do you want to say a prayer for?`,
  
        exits: [
          {
            dir: 'leave',
            id: 'chapel-4',
          },
          {
            dir: 'memory',
            id: 'chapel-3A',
          },
        ],  
      },

      { 
        id: 'chapel-3A',
        desc: `You pray to have your memory restored--if not in whole, then for the least scrap of your past, a flashback from childhood, a face, a voice, a feeling--anything authentically belonging to your mislaid identity. And then you wait, trying to make your mind receptively blank. But a blank mind is hard to maintain. You begin to imagine memories you would like to have--your first communion, your bar mitzvah, your wedding day--and the image of each is so vivid that you might be seeing it in an album of family photographs.`,
  
        onLook: () => {
          const room = getRoom('chapel-#');
          room.desc = `Description`;
        },
  
        exits: [
          {
            dir: 'leave',
            id: 'chapel-4',
          },
        ],  
      },
//End Starting Chapel Section

//Begin Alice Chapel Section
      { 
        id: 'chapel-4',
        desc: `Just as you decide to leave the empty chapel, the door opens behind you, and a woman’s voice exclaims, "John! Oh my darling, you're here!" You spin around to confront the figure of a woman in a bridal gown.`,
  
        onLook: () => {
          const room = getRoom('chapel-4');
          room.desc = `She is wearing a floor-length gown of creamed white satin trimmed with lace and taffeta. A veil of yellowed lace obscures her face. She is of average height and has a well- proportioned figure--or a good dressmaker. Really, there’s more of the wedding gown and veil in evidence than of the woman.`;
        },
  
        exits: [
          {//If response is "Who are you?"
            dir: 'who',
            id: 'chapel-5',
          },
          {//If response is "Ask woman/Alice about Luke"
            dir: 'ask luke',
            id: 'chapel-6',
          },
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: 'ask marriage',
            id: 'chapel-7',
          },
        ],  
      },

 //Alice Chapel Questions
      { //"Who are you?"
        id: 'chapel-5',
        desc: `In answer to your question she laughs--and lifts her bridal bouquet to screen her already veiled face. "I am… a woman of mystery." Her Garbo imitation is first-rate.`,
  
        onLook: () => {
          const room = getRoom('chapel-5');
          room.desc = `She is wearing a floor-length gown of creamed white satin trimmed with lace and taffeta. A veil of yellowed lace obscures her face. She is of average height and has a well- proportioned figure--or a good dressmaker. Really, there’s more of the wedding gown and veil in evidence than of the woman.`;
        },
  
        exits: [
          {//If response is "Ask woman/Alice about Luke"
            dir: 'ask luke',
            id: 'chapel-6',
          },
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: 'ask marriage',
            id: 'chapel-7',
          },
        ],  
      },
  
      {//"Ask woman/Alice about Luke"
        id: 'chapel-6',
        desc: `"Oh darling, don't make me get into all that again. Can I help it if the man is my father? Once we're in Australia he can't bother us anymore."`,
  
        onLook: () => {
          const room = getRoom('chapel-6');
          room.desc = `She is wearing a floor-length gown of creamed white satin trimmed with lace and taffeta. A veil of yellowed lace obscures her face. She is of average height and has a well- proportioned figure--or a good dressmaker. Really, there’s more of the wedding gown and veil in evidence than of the woman.`;
        },
  
        exits: [
          {//If response is "Who are you?"
            dir: 'who',
            id: 'chapel-5',
          },
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: 'ask marriage',
            id: 'chapel-7',
          },
        ],  
      },

      {//"Ask woman/Alice about marriage/wedding"
        id: 'chapel-7',
        desc: `"Isn't it wonderful? I've always wanted to be married in full bridal regalia, and even if there's not to be a great crowd to see us, it's so much more solemn like this. And more fun too. It's so sweet of you to go along with my whims. And I promise that tonight I'll go along with all of yours. Oh my darling, take me in your arms! Kiss me! Make me yours!"`,
  
        onLook: () => {
          const room = getRoom('chapel-7');
          room.desc = `She is wearing a floor-length gown of creamed white satin trimmed with lace and taffeta. A veil of yellowed lace obscures her face. She is of average height and has a well- proportioned figure--or a good dressmaker. Really, there’s more of the wedding gown and veil in evidence than of the woman.`;
        },
  
        exits: [
          {//If response is "Who are you?"
            dir: 'who',
            id: 'chapel-5',
          },
          {//If response is "Ask woman/Alice about Luke"
            dir: 'ask luke',
            id: 'chapel-6',
          },
          {//If response is "Lift Veil"
            dir: 'lift veil',
            id: 'chapel-8',
          },
        ],  
      },
//End Alice Questions

      { //Lifting the veil
        id: 'chapel-8',
        desc: `You grasp the lower edge of the veil with a gentle firmness and raise it slowly--to reveal a pale, pretty, and slightly frightened face. Her eyes are fixed on yours imploringly, but she bites her lower lip, as though to keep herself from asking aloud the question that is in her eyes. But the eyes need no interpreters. Do you love me? they ask. Will you love me? Can you love me?`,
  
        onLook: () => {
          const room = getRoom('chapel-8');
          room.desc = `She is wearing a floor-length gown of creamed white satin trimmed with lace and taffeta. She is of average height and has a well- proportioned figure--or a good dressmaker. Really, there’s more of the wedding gown in evidence than of the woman.`;
        },
  
        exits: [
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chapel-9',
          },
        ],  
      },

      {//"I love you"
        id: 'chapel-9',
        desc: `"Oh my darling, I love you too. More than anything in the whole world. You are my world. You're everything to me. Oh my love--kiss me!"`,
  
        onLook: () => {
          const room = getRoom('chapel-9');
          room.desc = `She is wearing a floor-length gown of creamed white satin trimmed with lace and taffeta. She is of average height and has a well- proportioned figure--or a good dressmaker. Really, there’s more of the wedding gown in evidence than of the woman.`;
        },
  
        exits: [
          {//Kiss Alice (Veil raised)
            dir: 'kiss',
            id: 'chapel-10',
          },
        ],  
      },
  
      // Start Templates
      // Templates for quick & easy copy/paste use. These will be deleted when the work is finished.
  
      // Basic template for a new room, looking around, and it's exits.
      { 
        id: 'chapel-#',
        desc: `Text`,
  
        onLook: () => {
          const room = getRoom('chapel-#');
          room.desc = `Description`;
        },
  
        exits: [
          {
            dir: 'Text',
            id: 'chapel-#',
          },
        ],  
      },
  
      // End Templates
  
      //Begin Notes
  
      //Started basic framework for chapel, time to do the rest
      //Last updated 10/9/2021
  
      //End Notes
  
    ],
  };