// This simple game disk can be used as a starting point to create a new adventure.
// Change anything you want, add new rooms, etc.
const dejaVuDisk = {
  roomId: 'deja-vu', // Set this to the ID of the room you want the player to start in.
  rooms: [
    {
      id: 'deja-vu', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: '', // Displayed each time the player enters the room.
      desc: `You are locked in a cell. It is bare and dark and smells of lives gone sour. The only light is a feeble fluorescent glow that slants in through the louvred grill in the iron door. You know the door is iron because you have been beating on it. Your hands are sore, and your right eye is swollen shut. You ache all over.
      Worse than the ache is the hunger, and worse than the hunger is the fear that you will never leave this cell alive. You begin to scream. You know it will do no good. You’ll probably be beaten again--but you can’t help yourself. You scream the same few senseless words over and over, a litany of terror:`,
      exits: [
        {
          dir: [], 
          id: 'deja-vu1',
        },
      ],
    },
    {
      id: 'deja-vu1',
      name: '',
      desc: `At last, your screams attract the attention of your jailer. The grill of the door is pushed aside, and his face appears, leering, in the aperture. “What’s the matter, Juanito?” he asks in a drawling, twanging, Texas voice.
      You ask for food. His eyes shrink to pinponts of sadistic pleasure. "Why sure, Juanito, you'll get fed -- just as soon as you ask for it so's I can hear you. There's just two little words you got to say, and I'll bring you a nice big bowl of five=alarm chili.'
      He waits for you to say the two words that will get you fed.`,
      exits: [
        {
          dir: [],
          id: 'deja-vu2'
        },
        {
          dir: [],
          id: 'deja-vu3'
        }
      ],
    },
    {
      id: 'deja-vu2',
      name: '',
      desc: `“Sorry, Juanito,” your jailer says, and slams the grill shut. You think: this is not possible, it is not legal, it can’t go on. Not even the state of Texas can a prisoner be treated like this. You have not been charged with any crime. There has been no trial. One minute you were driving your car home, and the next a motorcycle cop was signaling for you to pull off to the side of the road. The worst of it is that no one knows you’re here, in Santa Candelaria, and so no one will think to report you missing. Suddenly you understand the meaning of hell. There is no way out.`,
      exits: [
        {
          dir: [],
          id: 'deja-vu4'
        },
        
      ],
    },
    {
      id: 'deja-vu3',
      name: '',
      desc: `The jailer favors you with a gap-toothed smile. “You’re learning quick, Juanito.” He goes off and returns in a few minutes with the promised bowl of chili, which he hands you through the aperture in the door. Your mouth waters, and your hand is trembling as you dip the plastic spoon into the lukewarm chili. And then you see the large dead tarantula with which the jailer has garnished your dinner. You laugh, thinking of the classic line, “Waiter, there’s a fly in my soup!” And then you flip the dead tarantula off the chili and wolf down the congealed mixture voraciously.
      When the last smear of spicy grease has been licked from the bowl there are tears in your eyes. Tears of thankfulness for being fed, of shame for being reduced to such a condition.`,
      exits: [
        {
          dir: [],
          id: 'deja-vu5'
        },
      ],
    },
    {
      id: 'deja-vu4',
      name: '',
      desc: `And then, sudden as waking from a nightmare, this mind e­xplosion of memory is over. But was it really a memory--couldn’t it have been, instead, some kind of waking nightmare? Aside from this one lurid glimpse of what may have been your past life, you are able to remember nothing else about yourself or that prison. If that was what your life was like, maybe you shouldn’t try to remember it. Maybe your amnesia is a blessing in disguise.`,
      exits: [
        {
          dir: [],
          id: 'heal-club12'
        },
      ],
    },
    {
      id: 'deja-vu5',
      name: '',
      desc: `You think: this is not possible, it is not legal, it can’t go on. Not even the state of Texas can a prisoner be treated like this. You have not been charged with any crime. There has been no trial. One minute you were driving your car home, and the next a motorcycle cop was signaling for you to pull off to the side of the road. The worst of it is that no one knows you’re here, in Santa Candelaria, and so no one will think to report you missing. Suddenly you understand the meaning of hell. There is no way out.`,
      exits: [
        {
          dir: [],
          id: 'deja-vu4'
        },
      ],
    },
  ],
};

