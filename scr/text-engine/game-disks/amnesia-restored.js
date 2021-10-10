let hairlength = '';


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
        let char = getCharacter('__charCreationMirror__');
        console.log(char);
        char.onTalk();
      }
    },
  ],
  characters: [
    {
      name: '__charCreationMirror__',
      roomId: 'hote-room-2',
      topics: [
        {
          option: 'Is your hair short or long?',
          removeOnRead: true,
          keyword: 'short',
          onSelected: () => {
            console.log(getCharacter('__charCreationMirror__').topics[0].keyword);
            
            println('Your hair is long!')
            hairlength = 'long';
            
          }
          

        }
      ],
      onTalk: () => {
        
      }
    }
  ]
};
