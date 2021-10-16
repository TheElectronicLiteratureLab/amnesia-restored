// This simple game disk can be used as a starting point to create a new adventure.
// Change anything you want, add new rooms, etc.
const healClubDisk = {
  roomId: 'heal-club', // Set this to the ID of the room you want the player to start in.
  rooms: [
    {
      id: 'heal-club', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'Health Club Reception Room', // Displayed each time the player enters the room.
      desc: `The door opens with a creak, and you step into a small reception area furnished with cast-iron and vinyl armchairs, a water cooler with paper cups, a small Formica desk with a stack of application forms, and faded posters of once famous bodybuilders. A sign on the Formica desk promises that someone will be “Back in 10 Minutes.”
      
      The elevators open into the reception area from a hallway on one wall. There are two doors behind the desk. the one on the left is marked "Dolls," the one on the right "Guys."`, // Displayed when the player first enters the room.
      exits: [
        {
          dir: ['left', 'dolls', 'girls', 'girls', `women's`, 'womens'], // "dir" can be anything. If it's north, the player will type "go north" to get to the room called "A Forest Clearing".
          id: 'heal-club1',
        },
        {
          dir: ['right', 'guys', 'mens', 'boys', `boy's`, `men's`],
          id: 'heal-club5',
        },
        {
          dir: ['leave'],
          id: 'cor-?'
        }
      ],
    },
    {
      id: 'heal-club1',
      name: `Women's Locker Room`,
      desc: `You enter the women’s locker room, and a woman who seems to be in training for the Olympic hammer throw looks at you with the joy of combat already glistening in her eyes. 
      
      “Not here, buddy,” she informs you in a low voice. “This is the women’s locker room. And you--correct me if I’m wrong--belong in the men’s locker room.” 
      
      She points the direction with her thumb. “That way.”`,
      
      exits: [
        {
          dir: ['leave', 'exit'],
          id: 'heal-club',
        },
        {
          dir: [],
          id: 'heal-club2',
          
        }
      ],
      
    },
    {
      onBlock: () => {
        if (prevInput !== 'leave' || 'exit') {
          enterRoom('heal-club2');
        } else {
          enterRoom('heal-club');
        }
      },
    },
    {
      id: 'heal-club2',
      name: ``,
      desc: `"I'm warning you, Bozo: Out of here!`,
      
      exits: [
        {
          dir: ['leave', 'exit'],
          id: 'heal-club',
        },
        {
          dir: [],
          id: 'heal-club3'
        }        
      ],
      
    },
    {
      id: 'heal-club3',
      name: `Women's Locker Room`,
      desc: `"Okay, that's it." 
      With a single, simple flowing motion remarkable in a woman of such size and strength, she springs up and lays you flat with a judicious karate chop to the side of your neck.`,
      onEnter: () => {
        pressEnter('deat-1')
      }
    },
    {
      id: 'heal-club5',
      name: `Men's Locker Room`,
      desc: `You are in the men’s locker room. 
      To your right are two changing areas formed by free-standing metal lockers. To your left are some sinks and a large mirror, with doors on either side. The door on the right is marked “Sauna,” that on the left “Massage.” Directly ahead are the showers, and beyond these a sign points the way to the weight room.`,
      exits: [
        {
          dir: ['leave', 'exit'],
          id: 'heal-club',
        },
        {
          dir: ['right', 'lockers'],
          id: 'heal-club6'
        },
        {
          dir: ['left door', 'massage'],
          id: 'heal-club7'
        },
        {
          dir: ['right door', 'sauna'],
          id: 'heal-club8'
        }, 
        {
          dir: ['showers', 'shower'],
          id: 'heal-club9'
        },
        {
          dir: ['weight room', 'weights'],
          id: 'heal-club10'
        }
      ],
    },
    {
      id: 'heal-club6',
      name: `Men's Locker Room`,
      desc: `You try and wedge yourself intop one of the metal lockers but clearly they weren't intended for this purpose -- or you weren't. There must be somewhere else you can hide`,
      onLook: () => {
        const room = getRoom('heal-club6');
        const room2 = getRoom('heal-club');
        room.desc = `You take a quick tour of the lockers, opening and closing the metal doors quietly, hoping to find a forgotten or abandoned piece of clothing. Your search of the first alcove yields slim pickings: a plastic bag from a bookstore, a white sock with holes in both toe and heel, a broken shoelace, and a small brass key. Four of the lockers are padlocked. Yanking at the handles accomplishes nothing.
        You check out the second alcove of lockers and the fourth locker along the row produces the equivalent, in clothing, of a Minimum Daily Requirement: sweatpants, a Mickey Mouse T-shirt with its sleeves chopped off, and a pair of shower slippers.
        Just as you are about to slip into this outfit you hear the voices of two men entering the locker room from the direction of the weight room. You feel a panicky certainty that these clothes belong to one of them, and you stuff them in the plastic bookstore bag. You wish you could crawl into the bag yourself, so strong is your impulse to hide from these approaching strangers.`;
        room2.block = `As you open the door to return to the reception area you can hear a woman’s voice, and then a man’s, discussing the relative merits of different brands of sneakers. Whoever had left the sign saying they’d be back in ten minutes has come back. 
        Realizing that you can’t leave the health club in the makeshift clothes you wore when you arrived, you close the door quietly--and feel again the same unreasoning dread, the same need not to be seen.`
      },
    },
    {
      id: 'heal-club7',
      name: `Men's Locker Room`,
      desc: '',
      block: 'The door to that room is locked.'
    },
    {
      id: 'heal-club9',
      name: `Men's Locker Room`,
      desc: '',
      block: `There is a woman in the weight room who looks like she is in training for the olympic hammer throw. You take one look at her decidedly hostile expression, and decide you are in less trouble in the locker room`,

    },
    {
      id: 'heal-club8',
      name: `Men's Locker Room`,
      desc: `As you enter the sauna a blast of superheated air wraps your body in what feels like a suit of flames. Your heartbeat quickens, and the narrow confines of the steamy, pine-paneled cell bend and warp and tilt. 
      You are barely able to keep yourself from falling against the iron stove and its pile of heated rocks. You crumble onto the bench of wooden slats, and then…`,
      exits: [
        {
          dir: [],
          id: 'heal-club11'
        }
      ]
    },
    {
      id: 'heal-club11',
      name: `Men's Locker Room`,
      desc: `But this 'then' is like no other then. It does not follow the time that's gone before. Like a fluid under tremendous pressure, the memories suppressed by your amnesia overwhelm you. At some cue supplied by this hot dark cubbyhole, your past supplants your present life. 
      You are experiencing . . . DEJA-VU!`,
      exits: [
        {
          dir: [],
          id: 'deja-vu'
        }
      ],
    },//BELOW HERE IS AFTER DEJA-VU
    {
      id: 'heal-club12',
      name: 'Massage Room',
      desc: `“Mr. Cameron, are you conscious, can you hear me?”
      A man’s face is bending down close to your own. You do not recognize him. Gradually you realize that you are no longer in the sauna, but in another small room, where you are lying on your back on a masseur’s table. The massage room, this must be.
      “He’s opened his eyes,” another voice says.
      “Yes,” says the man standing above you, “but there’s this funny dazed look in his eyes. The same thing happened when he went into the sauna last night, and I thought it was from drinking too much. We had to carry him down to his room.
      But maybe he just can’t take the heat in that sauna. Some guys can’t.”
      He turns his attention back to you. “Hey, Mr. Cameron—are you alright?”`,
      exits: [
        {
          dir: [],
          id: 'heal-club13'
        },
      ],
    },
    {
      id: 'heal-club13',
      name: 'Massage Room',
      desc: `“He’s trying to say something,” the other voice observes, “but the words are so slurred. Do you think he’s still drunk?”  The man above you bends over to sniff your breath. “Doesn’t seem to be. No, I figure it’s just heat prostration. Tell you what, Buddy, you mop up around the pool, and I’ll give Cameron here a once-over-lightly, then help him into some clothes. There must be something he can wear in his locker. After that I’d appreciate it if you would steer him back to his room.  Confidentially-” He lowers his voice to a whisper, but you are still able to hear what he says.  “--if there is something seriously wrong with him, I don’t want him shipped off to a hospital from here. It doesn’t look good for a gym to have people leaving it on stretchers.” “Right, boss, I get your message. If I have to, I can carry the guy down there. Does he have his room key on him?” The man nods. “It was on the floor of the sauna.”
      `,
      exits: [
          {
            dir: [],
            id: 'heal-club14'
          },
      ],
    },
    {
        id: 'heal-club14',
        name: 'Massage Room',
        desc: `The man who’d done most of the talking now begins to give you a very gentle massage. You find it strangely soothing. It’s as though he were smoothing tensions from your mind and your muscles at the same time. You begin to be able to think more clearly. Now at least you have a reasonable explanation of how you came to be in Room 1502 without any clothes. Apparently you’ve been a long-term member of this gym, for the masseur spoke of “your” locker.
        He rolls you over onto your stomach but instead of continuing the massage he turns on the sunlamp and leaves you alone in the room. The warmth of the lamp fills you with a strange peaceful passivity. You listen to the unmistakable crunch of steel through steel, and a moment later the masseur returns with a pair of metal cutters in one hand and a green canvas gym in the other. “Sorry to have to cut through your padlock, Mr. Cameron. But I remember how frustrated you got last night trying to remember the combination. I would have cut off the lock then, but you’d passed out in the sauna first. You feeling a little better now?”`,
        exits: [
            {
                dir:[],
                id: 'heal-club15'
            },
        ],
    },
    {
        id: 'heal-club15',
        name: 'Massage Room'
    }
  ],
};

