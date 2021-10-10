const amnesiaRestored = {
  roomId: 'hote-room-1', // Set this to the ID of the room you want the player to start in.
  currPos: [],
  rooms: [
    {
      id: 'hote-room-1', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
      name: 'Hotel Room', // Displayed each time the player enters the room.
      desc: `What's a person to do in such a situation? \n\nWhat YOU do is...`, // Displayed when the player first enters the room.
      items: [
        {
          name: 'up',
          onTake: () => {
            enterRoom('hote-room-2');
          }
        }
      ]
    },
    {
      id: 'hote-room-2',
      name: '',
      desc: "You get out of bed, and as you do, you realize, from a glance at your naked body, that you are white, male, and reasonably well-put-together. But what about your face? That’s part of anyone’s identity that should be proof against amnesia. The mirror over the dresser is angled so you can’t see yourself from where you stand. So you decide to take a simple test, closing your eyes and taking an inventory of how you think you ought to look.",
      onEnter: () => {
        println('Your hair--is it light or dark?');
      }
    },
    {
      id: 'hote-room-3',
      name: '',
      desc: '',
      onEnter: () => {
        println('Long or short?');
      }
    },
    {
      id: 'hote-room-4',
      name: '',
      desc: '',
      onEnter: () => {
        println('Do you have a beard? Or a mustache? or neither?');
      }
    },
    {
      id: 'hote-room-5',
      name: '',
      desc: '',
      onEnter: () => {
        println('What is the color of your eyes?');
      }
    },
    {
      id: 'hote-room-6',
      name: '',
      desc: '',
      onEnter: () => {
        println(`You could hardly be more completely mistaken! For when you look in the mirror, the stranger you see there has ${hairLength}, ${hairColor} hair. He has ${hairFace}. And his eyes are emphatically ${eyeColor}.`);
      }
    },
    
  ],
  characters: []
};
