//Begin Chapel
//Begin Starting Chapel Section

const lobby = {
    roomId: 'chapel',
    rooms: [
      {
        id: 'chap-1',
        name: 'All-Faith Chapel',
        desc: '',
        onEnter: () => {
          println(`You are standing before a large rosewood door bearing a mottled brass nameplate declaring this to be the ALL-FAITH CHAPEL.`);
          pressEnter('chap-2');
        }
      },

      { 
        id: 'chap-2',
        desc: `You enter the chapel, which is dim and fragrant with the mingled scents of flowers and candlewax. It seems to be deserted.`,
  
        onLook: () => {
          const room = getRoom('chap-2');
          room.desc = `The chapel is about twenty feet square, windowless, with a high coffered ceiling and a terracotta floor. In the center of the room is a large round slab of marble too low to dine at but too high to be a coffee table. Grouped about it on three sides are pews of blond wood. Behind it is a lectern flanked by a vase of wilting gladiolas on a free­standing marble column and a large candelabra, its candles burned down to the sockets. The general effect is that of a funeral parlor without a corpse.
          
          High up on three of the walls, forming a kind of frieze, is the All-Faith Chapel's chief claim to distinction, a much-darkened mural representing all the faiths of mankind worshipping the Supreme Being, painted (a plaque behind the lectern informs you) in 1938 by Maxfield Parrish. Christ, Moses, Mohammed, Buddha, Confucius, Martin Luther, and Mary Baker Eddy are represented sitting down at or standing about a table and waving their arms, all seeming to be alarmed by the gold-and-violet sunset sky painted on the wall to their right or by the magenta dawn to their left, or possibly by the simultaneity of these events, although the servants who are waiting on this distinguished gathering seem entirely unperturbed.`;
        },
  
        exits: [
          {
            dir: ['leave', 'back', 'exit', 'return'],
            id: 'chap-4',
          },
          {
            dir: 'pray',
            id: 'chap-3',
          },
        ],  
      },

      { 
        id: 'chap-3',
        desc: `You enter one of the pews nearest the central marble slab and kneel on the padded kneeler. You fold your hands and bow your head and close your eyes. You’re all ready to say a prayer--but what do you want to say a prayer for?`,
  
        exits: [
          {
            dir: ['leave', 'back', 'exit', 'return'],
            id: 'chap-4',
          },
          {
            dir: ['memory','my memory', 'memories', 'past', 'remember', 'cure', 'cure amnesia'],
            id: 'chap-3A',
          },
        ],  
      },

      { 
        id: 'chap-3A',
        desc: `You pray to have your memory restored--if not in whole, then for the least scrap of your past, a flashback from childhood, a face, a voice, a feeling--anything authentically belonging to your mislaid identity. And then you wait, trying to make your mind receptively blank. But a blank mind is hard to maintain. 
        
        You begin to imagine memories you would like to have--your first communion, your bar mitzvah, your wedding day--and the image of each is so vivid that you might be seeing it in an album of family photographs.`,
        onLook: () => {
          const room = getRoom('chap-3A');
          room.desc = `The chapel is about twenty feet square, windowless, with a high coffered ceiling and a terracotta floor. In the center of the room is a large round slab of marble too low to dine at but too high to be a coffee table. Grouped about it on three sides are pews of blond wood. Behind it is a lectern flanked by a vase of wilting gladiolas on a free­standing marble column and a large candelabra, its candles burned down to the sockets. The general effect is that of a funeral parlor without a corpse.
          
          High up on three of the walls, forming a kind of frieze, is the All-Faith Chapel's chief claim to distinction, a much-darkened mural representing all the faiths of mankind worshipping the Supreme Being, painted (a plaque behind the lectern informs you) in 1938 by Maxfield Parrish. Christ, Moses, Mohammed, Buddha, Confucius, Martin Luther, and Mary Baker Eddy are represented sitting down at or standing about a table and waving their arms, all seeming to be alarmed by the gold-and-violet sunset sky painted on the wall to their right or by the magenta dawn to their left, or possibly by the simultaneity of these events, although the servants who are waiting on this distinguished gathering seem entirely unperturbed.`;
        },
  
        exits: [
          {
            dir: ['leave', 'back', 'exit',],
            id: 'chap-4',
          },
        ],  
      },
//End Starting Chapel Section

//Begin Alice Chapel Section
      { 
        id: 'chap-4',
        desc: `Just as you decide to leave the empty chapel, the door opens behind you, and a woman’s voice exclaims, "John! Oh my darling, you're here!" You spin around to confront the figure of a woman in a bridal gown.`,
        onLook: () => {
          const room = getRoom('chap-4');
          room.desc = `She is wearing a floor-length gown of creamed white satin trimmed with lace and taffeta. A veil of yellowed lace obscures her face. She is of average height and has a well- proportioned figure--or a good dressmaker. Really, there’s more of the wedding gown and veil in evidence than of the woman.`;
        },
        exits: [
          {//If response is "Who are you?"
            dir: ['who', 'who are you', 'you are'],
            id: 'chap-5',
          },
          {//If response is "Ask woman/Alice about Luke"
            dir: ['ask about luke', 'luke'],
            id: 'chap-6',
          },
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: ['ask marriage', 'marriage', 'wedding', 'ask wedding'],
            id: 'chap-7',
          },
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chap-9',
          },
          {//Tell Alice about amnesia
            dir: ['amnesia', 'cant remember', 'i have amnesia', 'dont remember',],
            id: 'chap-11',
          },
          {//Ask about Australia
            dir: 'australia',
            id: 'chap-13',
          },
          {//Ask about Texas
            dir: 'texas',
            id: 'chap-14',
          },
          {//Ask about Jail
            dir: ['jail', 'prison'],
            id: 'chap-15',
          },
          {//Attempt to leave the Chapel after Alice arrives
            dir: ['leave', 'leave chapel', 'back', 'exit', 'go away', 'goodbye', 'say goodbye',],
            id: 'chap-16',
          },
        ],  
      },

 //Begin Alice Chapel Questions
      { //"Who are you?"
        id: 'chap-5',
        desc: `In answer to your question she laughs--and lifts her bridal bouquet to screen her already veiled face. "I am… a woman of mystery." Her Garbo imitation is first-rate.`,
        onLook: () => {
          const room = getRoom('chap-5');
          room.desc = `She is wearing a floor-length gown of creamed white satin trimmed with lace and taffeta. A veil of yellowed lace obscures her face. She is of average height and has a well- proportioned figure--or a good dressmaker. Really, there’s more of the wedding gown and veil in evidence than of the woman.`;
        },
        exits: [
          {//If response is "Ask woman/Alice about Luke"
            dir: ['ask about luke', 'ask about man', 'luke'],
            id: 'chap-6',
          },
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: ['ask marriage', 'marriage', 'wedding', 'ask wedding'],
            id: 'chap-7',
          },
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chap-9',
          },
          {//Tell Alice about amnesia
            dir: ['amnesia', 'cant remember', 'i have amnesia', 'dont remember',],
            id: 'chap-11',
          },
          {//Ask about Australia
            dir: 'australia',
            id: 'chap-13',
          },
          {//Ask about Texas
            dir: 'texas',
            id: 'chap-14',
          },
          {//Ask about Jail
            dir: ['jail', 'prison'],
            id: 'chap-15',
          },
          {//Attempt to leave the Chapel after Alice arrives
            dir: ['leave', 'leave chapel', 'back', 'exit', 'go away', 'goodbye', 'say goodbye',],
            id: 'chap-16',
          },
        ],  
      },
  
      {//"Ask woman/Alice about Luke"
        id: 'chap-6',
        desc: `"Oh darling, don't make me get into all that again. Can I help it if the man is my father? Once we're in Australia he can't bother us anymore."`,
        exits: [
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: ['ask marriage', 'marriage', 'wedding', 'ask wedding'],
            id: 'chap-7',
          },
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chap-9',
          },
          {//Tell Alice about amnesia
            dir: ['amnesia', 'cant remember', 'i have amnesia', 'dont remember',],
            id: 'chap-11',
          },
          {//Ask about Australia
            dir: 'australia',
            id: 'chap-13',
          },
          {//Ask about Texas
            dir: 'texas',
            id: 'chap-14',
          },
          {//Ask about Jail
            dir: ['jail', 'prison'],
            id: 'chap-15',
          },
          {//Attempt to leave the Chapel after Alice arrives
            dir: ['leave', 'leave chapel', 'back', 'exit', 'go away', 'goodbye', 'say goodbye',],
            id: 'chap-16',
          },
        ],  
      },

      {//"Ask woman/Alice about marriage/wedding"
        id: 'chap-7',
        desc: `"Isn't it wonderful? I've always wanted to be married in full bridal regalia, and even if there's not to be a great crowd to see us, it's so much more solemn like this. And more fun too. It's so sweet of you to go along with my whims. And I promise that tonight I'll go along with all of yours. Oh my darling, take me in your arms! Kiss me! Make me yours!"`,
  
        onLook: () => {
          const room = getRoom('chap-7');
          room.desc = `She is wearing a floor-length gown of creamed white satin trimmed with lace and taffeta. A veil of yellowed lace obscures her face. She is of average height and has a well- proportioned figure--or a good dressmaker. Really, there’s more of the wedding gown and veil in evidence than of the woman.`;
        },
        exits: [
          {//If response is "Ask woman/Alice about Luke"
            dir: ['ask about luke', 'ask about man', 'luke'],
            id: 'chap-6',
          },
          {//If response is "Lift Veil"
            dir: 'lift veil',
            id: 'chap-8',
          },
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chap-9',
          },
          {//Tell Alice about amnesia
            dir: ['amnesia', 'cant remember', 'i have amnesia', 'dont remember',],
            id: 'chap-11',
          },
          {//Ask about Australia
            dir: 'australia',
            id: 'chap-13',
          },
          {//Ask about Texas
            dir: 'texas',
            id: 'chap-14',
          },
          {//Ask about Jail
            dir: ['jail', 'prison'],
            id: 'chap-15',
          },
          {//Attempt to leave the Chapel after Alice arrives
            dir: ['leave', 'leave chapel', 'back', 'exit', 'go away', 'goodbye', 'say goodbye',],
            id: 'chap-16',
          },
        ],  
      },

      { //Lifting the veil
        id: 'chap-8',
        desc: `You grasp the lower edge of the veil with a gentle firmness and raise it slowly--to reveal a pale, pretty, and slightly frightened face. Her eyes are fixed on yours imploringly, but she bites her lower lip, as though to keep herself from asking aloud the question that is in her eyes. But the eyes need no interpreters. Do you love me? they ask. Will you love me? Can you love me?`,
        onLook: () => {
          const room = getRoom('chap-8');
          room.desc = `She is wearing a floor-length gown of creamed white satin trimmed with lace and taffeta. She is of average height and has a well- proportioned figure--or a good dressmaker. Really, there’s more of the wedding gown in evidence than of the woman.`;
        },
        exits: [
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chap-9',
          },
          {//If response is "Ask woman/Alice about Luke"
            dir: ['ask about luke', 'ask about man', 'luke'],
            id: 'chap-6',
          },
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: ['ask marriage', 'marriage', 'wedding', 'ask wedding'],
            id: 'chap-7',
          },
          {//Tell Alice about amnesia
            dir: ['amnesia', 'cant remember', 'i have amnesia', 'dont remember',],
            id: 'chap-11',
          },
          {//Ask about Australia
            dir: 'australia',
            id: 'chap-13',
          },
          {//Ask about Texas
            dir: 'texas',
            id: 'chap-14',
          },
          {//Ask about Jail
            dir: ['jail', 'prison'],
            id: 'chap-15',
          },
          {//Refuse to Marry, or attempt to leave the Chapel after Alice arrives. Probably any response other than yes
            dir: ['no', 'sorry', 'i cant', 'no way','leave', 'leave chapel', 'back', 'exit', 'go away', 'goodbye', 'say goodbye',],
            id: 'chap-16',
          },
        ],  
      },

      {//"I love you".
        id: 'chap-9',
        desc: `"Oh my darling, I love you too. More than anything in the whole world. You are my world. You're everything to me. Oh my love--kiss me!"`,
  
        onLook: () => {
          const room = getRoom('chap-9');
          room.desc = `She is wearing a floor-length gown of creamed white satin trimmed with lace and taffeta. She is of average height and has a well- proportioned figure--or a good dressmaker. Really, there’s more of the wedding gown in evidence than of the woman.`;
        },
  
        exits: [
          {//Kiss Alice (Veil raised)
            dir: 'kiss',
            id: 'chap-10',
          },
          {//Refuse to Kiss, or attempt to leave the Chapel after Alice arrives
            dir: ['no', 'sorry', 'i cant', 'no way','leave', 'leave chapel', 'back', 'exit', 'go away', 'goodbye', 'say goodbye',],
            id: 'chap-16',
          },
          {//If response is "Ask woman/Alice about Luke"
            dir: ['ask about luke', 'ask about man', 'luke'],
            id: 'chap-6',
          },
          {//Tell Alice about amnesia.
            dir: ['amnesia', 'cant remember', 'i have amnesia', 'dont remember',],
            id: 'chap-11',
          },
          {//Ask about Australia
            dir: 'australia',
            id: 'chap-13',
          },
          {//Ask about Texas
            dir: 'texas',
            id: 'chap-14',
          },
          {//Ask about Jail
            dir: ['jail', 'prison'],
            id: 'chap-15',
          },
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: ['ask marriage', 'marriage', 'wedding', 'ask wedding'],
            id: 'chap-7',
          },
        ],  
      },

      {//Kiss Alice (Veil raised)
        id: 'chap-10',
        desc: `Her lips meet yours eagerly, and the satin of her gown is crushed to the polyester of your tux. The invitation is irresistible. The kiss intensifies from perhaps to entirely. Something phony may be going on, but a kiss like this doesn't leave any room to doubt one thing--this woman wants you.`,
    
        exits: [
          {//If response is "Ask woman/Alice about Luke"
            dir: ['ask about luke', 'ask about man', 'luke'],
            id: 'chap-6',
          },
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chap-9',
          },
          {//Tell Alice about amnesia
            dir: ['amnesia', 'cant remember', 'i have amnesia', 'dont remember',],
            id: 'chap-11',
          },
          {//Ask about Australia
            dir: 'australia',
            id: 'chap-13',
          },
          {//Ask about Texas
            dir: 'texas',
            id: 'chap-14',
          },
          {//Ask about Jail
            dir: ['jail', 'prison'],
            id: 'chap-15',
          },
          {//Attempt to leave the Chapel after Alice arrives
            dir: ['no', 'sorry', 'i cant', 'no way','leave', 'leave chapel', 'back', 'exit', 'go away', 'goodbye', 'say goodbye',],
            id: 'chap-16',
          },
        ],  
      },

      {//Kiss Alice (Veil down)
        id: 'chap-10A',
        desc: `You place your hands on her shoulders and incline your head until your lips meet… the yellowed lace of the wedding veil. It has a dusty smell with a faint overtone of mothballs.`,
        exits: [
          {//If response is "Ask woman/Alice about Luke"
            dir: ['ask about luke', 'ask about man', 'luke'],
            id: 'chap-6',
          },
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chap-9',
          },
          {//Tell Alice about amnesia
            dir: ['amnesia', 'cant remember', 'i have amnesia', 'dont remember',],
            id: 'chap-11',
          },
          {//Ask about Australia
            dir: 'australia',
            id: 'chap-13',
          },
          {//Ask about Texas
            dir: 'texas',
            id: 'chap-14',
          },
          {//Ask about Jail
            dir: ['jail', 'prison'],
            id: 'chap-15',
          },
          {//Attempt to leave the Chapel after Alice arrives
            dir: ['no', 'sorry', 'i cant', 'no way','leave', 'leave chapel', 'back', 'exit', 'go away', 'goodbye', 'say goodbye',],
            id: 'chap-16',
          },
        ],  
      },

      {//Telling Alice about amnesia
        id: 'chap-11',
        desc: `She laughs. "Well, that’s nothing to worry about, darling. If you had herpes, that would be something else again." When she sees that you don't laugh at her joke, she fingers her bridal veil nervously. "You're not serious, are you?"`,
        exits: [
          {//Yes, serious about amnesia
            dir: ['yes', 'serious', 'i am'],
            id: 'chap-11A',
          },
          {//If response is "Ask woman/Alice about Luke"
            dir: ['ask about luke', 'ask about man', 'luke'],
            id: 'chap-6',
          },
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: ['ask marriage', 'marriage', 'wedding', 'ask wedding'],
            id: 'chap-7',
          },
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chap-9',
          },
          {//Ask about Australia
            dir: 'australia',
            id: 'chap-13',
          },
          {//Ask about Texas
            dir: 'texas',
            id: 'chap-14',
          },
          {//Ask about Jail
            dir: ['jail', 'prison'],
            id: 'chap-15',
          },
          {//Attempt to leave the Chapel after Alice arrives
            dir: ['leave', 'leave chapel', 'back', 'exit', 'go away', 'goodbye', 'say goodbye',],
            id: 'chap-16',
          },
          //Needs something for a No answer.
        ],  
      },

      {//Answering yes, serious about amnesia
        id: 'chap-11A',
        desc: `When you assure her that you are perfectly serious and that you're suffering from total amnesia and have no idea who she is, she smiles grimly, lifts her satin-gloved hand and slaps your face. "John Cameron, you are the most despicable liar I've ever known, and if you think you can worm your way out of our getting married this time, you are mistaken."`,
        exits: [
          {//If response is "Ask woman/Alice about Luke"
            dir: ['ask about luke', 'ask about man', 'luke'],
            id: 'chap-6',
          },
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chap-9',
          },
          {//Ask about Australia
            dir: 'australia',
            id: 'chap-13',
          },
          {//Ask about Texas
            dir: 'texas',
            id: 'chap-14',
          },
          {//Ask about Jail
            dir: ['jail', 'prison'],
            id: 'chap-15',
          },
          {//Attempt to leave the Chapel after Alice arrives
            dir: ['no', 'sorry', 'i cant', 'no way','leave', 'leave chapel', 'back', 'exit', 'go away', 'goodbye', 'say goodbye',],
            id: 'chap-16',
          },
        ],  
      },

      {//Asking about self (1st time)
        id: 'chap-12',
        desc: `"What a strange question. What can I tell you about yourself that you don't know already? You're good-looking, but I guess you know that. You're a great lover--but I'm not going to make comparisons. And you’ve told me you love me-­ and I've believed you."`,   
        exits: [
          {//If response is "Ask woman/Alice about Luke"
            dir: ['ask about luke', 'ask about man', 'luke'],
            id: 'chap-6',
          },
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: ['ask marriage', 'marriage', 'wedding', 'ask wedding'],
            id: 'chap-7',
          },
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chap-9',
          },
          {//Tell Alice about amnesia
            dir: ['amnesia', 'cant remember', 'i have amnesia', 'dont remember',],
            id: 'chap-11',
          },
          {//Ask about Australia
            dir: 'australia',
            id: 'chap-13',
          },
          {//Ask about Texas
            dir: 'texas',
            id: 'chap-14',
          },
          {//Ask about Jail
            dir: ['jail', 'prison'],
            id: 'chap-15',
          },
          {//Attempt to leave the Chapel after Alice arrives
            dir: ['no', 'sorry', 'i cant', 'no way','leave', 'leave chapel', 'back', 'exit', 'go away', 'goodbye', 'say goodbye',],
            id: 'chap-16',
          },
        ],  
      },

      {//Asking about self (2nd time)
        id: 'chap-12A',
        desc: `"Are you serious? Maybe you think I blame you for what happened in Texas. But I know that wasn't your fault. You had to get away from that jail. It would have destroyed your soul. You simply have to stop thinking about all that-­ and think about Australia instead."`,
        exits: [
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: ['ask marriage', 'marriage', 'wedding', 'ask wedding'],
            id: 'chap-7',
          },
          {//If response is "Ask woman/Alice about Luke"
            dir: ['ask about luke', 'ask about man', 'luke'],
            id: 'chap-6',
          },
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chap-9',
          },
          {//Tell Alice about amnesia
            dir: ['amnesia', 'cant remember', 'i have amnesia', 'dont remember',],
            id: 'chap-11',
          },
          {//Ask about Australia
            dir: 'australia',
            id: 'chap-13',
          },
          {//Ask about Texas
            dir: 'texas',
            id: 'chap-14',
          },
          {//Ask about Jail
            dir: ['jail', 'prison'],
            id: 'chap-15',
          },
          {//Attempt to leave the Chapel after Alice arrives
            dir: ['no', 'sorry', 'i cant', 'no way','leave', 'leave chapel', 'back', 'exit', 'go away', 'goodbye', 'say goodbye',],
            id: 'chap-16',
          },
        ],  
      },

      {//Asking about self (3rd time)
        id: 'chap-12B',
        desc: `"What a vain creature you are, John! Why don't we talk about me for a change? How I feel about sacrificing my career for your sake? Do you realize I could go to jail for helping you get out of the country?"`,
        exits: [
          {//If response is "Ask woman/Alice about Luke"
            dir: ['ask about luke', 'ask about man', 'luke'],
            id: 'chap-6',
          },
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: ['ask marriage', 'marriage', 'wedding', 'ask wedding'],
            id: 'chap-7',
          },
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chap-9',
          },
          {//Tell Alice about amnesia
            dir: ['amnesia', 'cant remember', 'i have amnesia', 'dont remember',],
            id: 'chap-11',
          },
          {//Ask about Australia
            dir: 'australia',
            id: 'chap-13',
          },
          {//Ask about Texas
            dir: 'texas',
            id: 'chap-14',
          },
          {//Ask about Jail
            dir: ['jail', 'prison'],
            id: 'chap-15',
          },
          {//Attempt to leave the Chapel after Alice arrives
            dir: ['leave', 'leave chapel', 'back', 'exit', 'go away', 'goodbye', 'say goodbye',],
            id: 'chap-16',
          },
        ],  
      },

      {//Asking about self (4th+ time)
        id: 'chap-12C',
        desc: `In reply to your repeated question, she will only shake her head, as though at the annoyance of a persistent fly.`,
        exits: [
          {//If response is "Ask woman/Alice about Luke"
            dir: ['ask about luke', 'ask about man', 'luke'],
            id: 'chap-6',
          },
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: ['ask marriage', 'marriage', 'wedding', 'ask wedding'],
            id: 'chap-7',
          },
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chap-9',
          },
          {//Tell Alice about amnesia
            dir: ['amnesia', 'cant remember', 'i have amnesia', 'dont remember',],
            id: 'chap-11',
          },
          {//Ask about Australia
            dir: 'australia',
            id: 'chap-13',
          },
          {//Ask about Texas
            dir: 'texas',
            id: 'chap-14',
          },
          {//Ask about Jail
            dir: ['jail', 'prison'],
            id: 'chap-15',
          },
          {//Attempt to leave the Chapel after Alice arrives
            dir: ['no', 'sorry', 'i cant', 'no way','leave', 'leave chapel', 'back', 'exit', 'go away', 'goodbye', 'say goodbye',],
            id: 'chap-16',
          },
        ],  
      },

      {//Asking about Austrailia
        id: 'chap-13',
        desc: `"Oh, we're going to be so happy in Australia, John--I know we wil1. It may be hard at first, since we don’t either of us know anything about sheep ranches--or are they called farms?--but we're young and strong and healthy, and our love will see us through our trials."`,
        exits: [
          {//If response is "Ask woman/Alice about Luke"
            dir: ['ask about luke', 'ask about man', 'luke'],
            id: 'chap-6',
          },
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: ['ask marriage', 'marriage', 'wedding', 'ask wedding'],
            id: 'chap-7',
          },
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chap-9',
          },
          {//Tell Alice about amnesia
            dir: ['amnesia', 'cant remember', 'i have amnesia', 'dont remember',],
            id: 'chap-11',
          },
          {//Ask about Texas
            dir: 'texas',
            id: 'chap-14',
          },
          {//Ask about Jail
            dir: ['jail', 'prison'],
            id: 'chap-15',
          },
          {//Attempt to leave the Chapel after Alice arrives
            dir: ['no', 'sorry', 'i cant', 'no way','leave', 'leave chapel', 'back', 'exit', 'go away', 'goodbye', 'say goodbye',],
            id: 'chap-16',
          },
        ],  
      },

      {//Asking about Texas
        id: 'chap-14',
        desc: `"John, you must try and forget about all that. Oh, I really wish you did have amnesia, so that you'd never be haunted by those terrible memories. Forget Texas, John. Pretend it never happened."`,
        exits: [
          {//If response is "Ask woman/Alice about Luke"
            dir: ['ask about luke', 'ask about man', 'luke'],
            id: 'chap-6',
          },
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: ['ask marriage', 'marriage', 'wedding', 'ask wedding'],
            id: 'chap-7',
          },
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chap-9',
          },
          {//Tell Alice about amnesia
            dir: ['amnesia', 'cant remember', 'i have amnesia', 'dont remember',],
            id: 'chap-11',
          },
          {//Ask about Australia
            dir: 'australia',
            id: 'chap-13',
          },
          {//Ask about Jail
            dir: ['jail', 'prison'],
            id: 'chap-15',
          },
          {//Attempt to leave the Chapel after Alice arrives
            dir: ['no', 'sorry', 'i cant', 'no way','leave', 'leave chapel', 'back', 'exit', 'go away', 'goodbye', 'say goodbye',],
            id: 'chap-16',
          },
        ],  
      },

      {//Asking about Jail
        id: 'chap-15',
        desc: `"Oh John, please, this is our wedding day. It's not a time to talk about these morbid matters. That's over and done with. Try to forget. Try!"`,
        exits: [
          {
            dir: 'Text',
            id: 'chap-#',
          },
          {//If response is "Ask woman/Alice about Luke"
            dir: ['ask about luke', 'ask about man', 'luke'],
            id: 'chap-6',
          },
          {//If response is "Ask woman/Alice about marriage/wedding"
            dir: ['ask marriage', 'marriage', 'wedding', 'ask wedding'],
            id: 'chap-7',
          },
          {//If response is "I love you"
            dir: 'i love you',
            id: 'chap-9',
          },
          {//Tell Alice about amnesia
            dir: ['amnesia', 'cant remember', 'i have amnesia', 'dont remember',],
            id: 'chap-11',
          },
          {//Ask about Australia
            dir: 'australia',
            id: 'chap-13',
          },
          {//Ask about Texas
            dir: 'texas',
            id: 'chap-14',
          },
          {//Attempt to leave the Chapel after Alice arrives
            dir: ['no', 'sorry', 'i cant', 'no way','leave', 'leave chapel', 'back', 'exit', 'go away', 'goodbye', 'say goodbye',],
            id: 'chap-16',
          },
        ],  
      },

 //End Alice Chapel Questions

 {//When attempting to leave the chapel after Alice has appeared. Also when responding to Alice's questions with: go away/ask her to go/say goodbye/I will not marry you or similar response
  id: 'chap-16',
  desc: `"John!" the woman in the bridal dress shrieks, "please don't abandon me like this. I'll die of shame if you leave me now. Surely, whatever reason you may have for changing your mind, it's something we can talk about it. It's Daddy, isn't it? He's such a bully, I know. But once you get to know him he's really a sweet person, and in any case, John, once we're in Australia he won't be able to bother us anymore." She throws herself on her knees before you and lifts up her arms (the same gesture in which you can see Mary Baker Eddy worshipping the Supreme Being in the chapel's mural) imploringly. "Please John. Please say you'll marry me."`,

  exits: [
    {//Refuse to marry, or make a weird response
      dir: ['no', 'sorry', 'i cant', 'no way', 'leave', 'go away', 'goodbye', 'say goodbye',],
      id: 'chap-17',
    },
    {//Agree to marry
      dir: ['yes', 'okay', 'sure', 'i will', 'i do', 'marry',],
      id: 'marr-1',
    },
  ],  
},

{//Refusing to marry
  id: 'chap-17',
  desc: `Considering her almost hysterical manner up till now, she accepts your refusal with surprising dignity. "Very well then, I won't argue. But promise me at least this--promise that we can meet again tomorrow--just to talk. We can't talk now. Daddy will be here at any moment. I must go out and tell him you've left me standing at the altar once again. I expect he'll be very mad for a while, so please stay in the chapel for another half hour or so, till we’re out of the hotel. And then tomorrow at noon I'll meet you in that lovely hall of Tiffany lamps at the New York Historical Society. It will be a sort of anniversary for us. Please be there, John." She turns to leave, and then turns round again to hand you a small blue box bearing the words "Tiffany & Co." "Speaking of Tiffany," she says with a sad smile, "I almost forgot to give you this. I bought it with your money, so it belongs to you--until you decide that you want to put it on my finger."`,
  onLook: () => {//looking at the box
    println(`It is nearly cubical. It is dark blue with silver lettering that says TIFFANY & CO.`)
  },
  exits: [
    {//Take the Box
      dir: 'take box',
      id: 'chap-18',
    },
    {//Don't take the Box
      dir: 'no',
      id: 'chap-18A',
    },
  ],  
},

{//Take the box
  id: 'chap-18',
  desc: `You accept the box from her, and then in a flash of white satin and yellow lace she is out the door of the chapel.`,
  onLook: () => {//looking at the box
    println(`It is nearly cubical. It is dark blue with silver lettering that says TIFFANY & CO.`)
  },
  exits: [
    {//open the box
      dir: 'open box',
      id: 'chap-19',
    },
    {//Attempt to follow Alice
      dir: ['leave', 'follow', 'follow alice', 'chase', 'chase alice', 'exit',],
      id: 'chap-19',
    },
  ],  
},

{//Refuse to take the box
  id: 'chap-18A',
  desc: ``,
  onEnter: () => {
    println(`When you do not at once accept the box from her, she mutters a fervent, "Oh, damn you!" and throws it at your feet. Then in a flash of white satin and yellow lace she is out the door of the chapel.`);
    pressEnter('chap-20');
  },  
},

{//Open the box
  id: 'chap-19',
  desc: ``,
  onEnter: () => {
    println(`You tilt back the hinged lid of the box and find, nestled in white velvet, a thick golden wedding band. An engraver has written in miniscule script within the band: "To my beloved wife Alice, from John."`);
    pressEnter('chap-20');
  },  
},
//End Alice Chapel Section

//Begin Exiting Chapel Section
{//When attempting to follow Alice
  id: 'chap-20',
  desc: `After a moment’s hesitation, you spring forward to pursue her--and fall to the terra cotta floor, tripped by a kneeling pad. As you push yourself up from the dark tiles, a familiar vertigo overcomes you. Your body seems much too heavy a weight for your arms to raise and you slump back to the floor, watching the great octagons of terracotta bend and warp, waver and grow black. Your last conscious thought is that you may be the first bridegroom ever to have fainted when left standing at the altar.`,
  exits: [
    {
      dir: 'get up',
      id: 'chap-21',
    },
  ],  
},

{//Attempt to get up (1st attempt)
  id: 'chap-21',
  desc: `A dim faraway voice seems to be telling you to do something. But it is so far away, and you are so comfortable, and there is a sunset above you, all with stripes of gold and indigo.`,
  exits: [
    {
      dir: 'get up',
      id: 'chap-21A',
    },
  ],  
},

{//Attempt to get up (2nd attempt)
  id: 'chap-21A',
  desc: `The same voice calls to you. It is nearer now, an annoying buzz. You blink your eyes and shift your head--and see that a magenta dawn is silhouetting the poplars.`,
  exits: [
    {
      dir: 'get up',
      id: 'chap-21B',
    },
  ],  
},

{//Attempt to get up (3rd attempt)
  id: 'chap-21B',
  desc: `You wake up with a strange pain in your left arm. You realize that you have been lying on the terracotta tiles for some time staring in a daze at the two wings of the mural frieze by Maxfield Parrish.

  There is blood on the tiles where you were lying.`,
  exits: [
    {
      dir: ['examine arm', 'check arm', 'look arm', 'arm',],
      id: 'chap-22',
    },
  ],
},

{//Anything except trying to get up
  id: 'chap-21C',
  desc: ``,
  onEnter: () => {
    println(`You can't do that. You're lying unconscious on the floor.`);
    pressEnter('chap-21A'); //Should return the player to whatever get-up attempt they were on. For now it leads to the 1st attempt.
  },
},

{//Examine arm (After getting up)
  id: 'chap-22',
  desc: `High on your left arm, near the padded shoulder of the tuxedo jacket, the white polyester has been torn and blotched with blood that is still damp to the touch. When you remove the jacket to examine the wound there is a sharp twinge of pain in your shoulder. There is a larger blotch on the frilly shirt.`,
  exits: [
    {//Attempt to remove shirt
      dir: ['take off shirt', 'remove shirt'],
      id: 'chap-23',
    },
  ],  
},

{//Remove shirt
  id: 'chap-23',
  desc: `You take off the ruined shirt as well and see, to your relief that the source of these bloodstains is a superficial wound--an inch-long line drawn across the smooth flesh as though by a ruler. It represents, you realize, the path of a bullet. And though you did not see or hear that bullet fired you have no doubt at all that it was Luke who shot at you. Perhaps, if you had not stumbled over the kneeler, his bullet might have had a deadlier result.
  
  Tentatively you move your arm. Any pronounced movement from the shoulder seems to start the blood flowing freshly from the wound.`,
  exits: [
    {//Attempt to bandage the wound
      dir: ['bandage', 'bandage wound', 'bandage shoulder'],
      id: 'chap-24',
    },
  ],  
},

{//Bandage wound (With what?)
  id: 'chap-24',
  desc: `Good idea, but what to use for a bandage?`,
  exits: [
    {//Use Frilly Shirt
      dir: ['shirt', 'use shirt', 'frilly shirt',],
      id: 'chap-24A',
    },
    {//Use T-Shirt
      dir: ['t-shirt', 't shirt', 'tee shirt', 'tee',],
      id: 'chap-24B',
    },
    {//Use Mickey Mouse T-Shirt
      dir: ['mickey mouse shirt', 'mouse shirt', 'mickey shirt',],
      id: 'chap-24C',
    },
    {//Use Red T-Shirt
      dir: ['red shirt', 'red t-shirt', 'red t shirt', 'red tee shirt', 'red tee',],
      id: 'chap-24D',
    },
  ],  
},

{//Bandage wound with frilly shirt
  id: 'chap-24A',
  desc: `Carefully you tear off the left arm of the bloodstained shirt and wrap it about the wound as a crude bandage. Your arm hurts but not much more than if you'd had a shot at a doctor’s office.
  Now to get dressed again. Except that it's missing its left arm the frilly shirt is still wearable. Or there are the T-shirts in the gym bag--the plain red T-shirt or the Mickey Mouse T-shirt.`,
  exits: [
    {//Leads to the same text either way. Game should keep track of what the player is wearing
      dir: ['shirt', 'use shirt', 'frilly shirt', 't-shirt', 't shirt', 'tee shirt', 'tee', 'mickey mouse shirt', 'mouse shirt', 'mickey shirt','red shirt', 'red t-shirt', 'red t shirt', 'red tee shirt', 'red tee',],
      id: 'chap-25',
    },
  ],  
},

{//Bandage wound with shirt (Which shirt?)
  id: 'chap-24B',
  desc: `Which T-shirt--the Mickey Mouse T-shirt or the red T-shirt?`,
  exits: [
    {//Use Mickey Mouse T-Shirt
      dir: ['mickey mouse shirt', 'mouse shirt', 'mickey shirt',],
      id: 'chap-24C',
    },
    {//Use Red T-Shirt
      dir: ['red shirt', 'red t-shirt', 'red t shirt', 'red tee shirt', 'red tee',],
      id: 'chap-24D',
    },
  ],  
},

{//Bandage wound with Mickey Mouse shirt
  id: 'chap-24C',
  desc: `You tear the Mickey Mouse T-shirt into strips and wrap them about the wound in a crude bandage. Your arm hurts but not much more than if you’d had a shot at the doctor’s office.
  Now to get dressed again. You could rip off the arm of the shirt you were wearing and put that on again. Or you could wear the other T-shirt under the jacket of the tux. It’s all up to your sense of what the well-dressed murder victim should appear in.`,
  exits: [
    {//Leads to the same text either way. Game should keep track of what the player is wearing
      dir: ['shirt', 'use shirt', 'frilly shirt', 't-shirt', 't shirt', 'tee shirt', 'tee', 'red shirt', 'red t-shirt', 'red t shirt', 'red tee shirt', 'red tee',],
      id: 'chap-25',
    },
  ],  
},

{//Bandage wound with red shirt
  id: 'chap-24D',
  desc: `You tear the red T-shirt into strips and wrap them about the wound in a crude bandage. Your arm hurts but not much more than if you’d had a shot at the doctor’s office.
  Now to get dressed again. You could rip off the arm of the shirt you were wearing and put that on again. Or you could wear the other T-shirt under the jacket of the tux. It’s all up to your sense of what the well-dressed murder victim should appear in.
  `,
  exits: [
    {//Leads to the same text either way. Game should keep track of what the player is wearing
      dir: ['shirt', 'use shirt', 'frilly shirt', 't-shirt', 't shirt', 'tee shirt', 'tee', 'mickey mouse shirt', 'mouse shirt', 'mickey shirt',],
      id: 'chap-25',
    },
  ],  
},

{//Dressed again
  id: 'chap-25',
  desc: `You’re dressed again, and you’re steady on your legs.`,
  onLook: () => {
    const room = getRoom('chap-25');
    room.desc = `The chapel is about twenty feet square, windowless, with a high coffered ceiling and a terracotta floor. In the center of the room is a large round slab of marble too low to dine at but too high to be a coffee table. Grouped about it on three sides are pews of blond wood. Behind it is a lectern flanked by a vase of wilting gladiolas on a free­standing marble column and a large candelabra, its candles burned down to the sockets. The general effect is that of a funeral parlor without a corpse.
    
    High up on three of the walls, forming a kind of frieze, is the All-Faith Chapel's chief claim to distinction, a much-darkened mural representing all the faiths of mankind worshipping the Supreme Being, painted (a plaque behind the lectern informs you) in 1938 by Maxfield Parrish. Christ, Moses, Mohammed, Buddha, Confucius, Martin Luther, and Mary Baker Eddy are represented sitting down at or standing about a table and waving their arms, all seeming to be alarmed by the gold-and-violet sunset sky painted on the wall to their right or by the magenta dawn to their left, or possibly by the simultaneity of these events, although the servants who are waiting on this distinguished gathering seem entirely unperturbed.`;
  },
  //If the player hasn't taken the box, they should be able to pick it up off the floor here.
  exits: [
    {//leave Chapel
      dir: ['leave', 'leave chapel', 'exit chapel'],
      id: 'chap-27',
    },
  ],  
},

{//Attempting to leave before bandaging wound
  id: 'chap-26',
  desc: ``,
  onEnter: () => {
    println(`That wouldn't be advisable in your present condition.`);
    pressEnter('chap-24'); //Should return the player to whatever bandage point they were on. For now it leads to the question.
  },
},

{//Leaving the chapel
  id: 'chap-27',
  desc: ``,
  onEnter: () => {
    println(`You leave the Chapel, taking your gym bag, and at that very moment in the alcove just across the corridor the doors of a down-going elevator open. You take the elevator down to the lobby and get out.`);
    pressEnter('?-#');//Transitions to the Lobby Revisited Node
  },
},
//End Exiting Chapel Section
//End Chapel

//Begin Marriage Section (Chapel)
{//What is your name?
  id: 'marr-1',
  desc: `"Oh my darling!" she cries, leaping to her feet and embracing you with all of love's tender fury and then some. "Oh my sweet eternal love!" Her lips meet yours, preventing any reply but a kiss: and then another kiss, and then, as though he'd been waiting outside the door of the chapel for this cue, the father of the bride enters with a preacher and two witnesses in tow. You recognize both witnesses: one is the cleaning woman who entered Room 1502 without knocking just after you woke up ear1ier in the day, and the other is the man, Buddy, who took you from the penthouse health club and sauna back to Room 1502.
  
  The preacher, a thin white-haired man in a Roman collar, takes charge. He positions you and Alice before the marble slab of the altar. He directs Luke Dudley to stand behind his daughter--and to remove his Stetson, which he does with reluctance. Buddy and the cleaning woman take up a position in the center aisle, as though to be able to block you if you make a final bolt. The preacher begins to intone the wedding service from memory, only breaking stride to ask you your name.`,

  exits: [
    {//Respond with John Cameron, John Cameron III, or John
      dir: 'John',
      id: 'marr-2',
    },
    {//Fail to respond appropriately
      dir: 'Text',
      id: 'marr-1A',
    },
  ],  
},

{//Forced to respond with name
  id: 'marr-1A',
  desc: `"Very funny, Johnny-boy," Luke says to you. Then, to the preacher: "His name is John Cameron."`,

  exits: [
    {//Forced to next question
      dir: 'Text',
      id: 'marr-2',
    },
  ],  
},

{//Take as your wife?
  id: 'marr-2',
  desc: ``,
  exits: [
    {//Correct response
      dir: 'Text',
      id: 'marr-3',
    },
    {//Fail to respond appropriately
      dir: 'Text',
      id: 'marr-2A',
    },
  ],  
},

{//Forced to respond "I do"
  id: 'marr-2A',
  desc: ``,

  exits: [
    {
      dir: 'Text',
      id: 'marr-#',
    },
  ],  
},





//End Marriage Section







  
      // Start Templates
      // Templates for quick & easy copy/paste use. These will be deleted when the work is finished.
  
      // Basic template for a new room, looking around, and it's exits.
      {//
        id: 'chap-#',
        desc: `Text`,
    
        exits: [
          {
            dir: 'Text',
            id: 'chap-#',
          },
        ],  
      },
  
      // End Templates
  
      //Begin Notes
      //Variable for if the veil is raised or not. This will affect the "Lift Veil" and "Kiss Alice" exits. This also affects the look function, as Alice is normally wearing the veil.
      //Variable for how many times the player has asked "About myself." This will affect which response (chap-12, chap-12A, chap-12B, chap-12C) appears
      //Add in actual item variable for the box if the player chooses to take it.
      //When failing to type "get up" when on the floor, it should lead to lobb-21C. It will need to remember whatever get up attempt the player was on, then return them to it.
      //When failing to type appropriate response when bandaging wound, it should lead to lobb-26. It will need to remember whatever get up attempt the player was on, then return them to it.

      //Last updated 10/14/2021
  
      //End Notes
  
    ],
  };