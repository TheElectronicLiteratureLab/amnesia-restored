const suicideAtSunderland = {
    roomId: 'hell-1', // Starting the node with hell, accessible only in room 1502
    rooms: [
      {
        id: 'hell-1', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
        name: 'Lethe', // Displayed each time the player enters the room.
        desc: `Now you are dead--but that isn’t the end of your problems. Because it turns out that there is an afterlife--and you are there. It is highly unpleasant, though strictly speaking it isn’t hell. Not yet. You and a few thousand other naked anxious souls are standing on the bank of a misty black river, being stung by mosquitoes and bitten by large centipedes.`, // Displayed when the player first enters the room.
        onEnter: () =>{
            pressEnter('hell-2');
            
        }
        },
        {
        id: 'hell-2',
        name: '',
        desc: `Every few years a kind of canoe comes up to the shore, and an old man with a long white beard and eyes that glow like a battery-operated jack-o-lantern offers the waiting throng a chance to get into the canoe and be taken to the seat of the Last Judgement. But first, you have to tell him your name. And you--and all these others--are the poor souls who died in a state of amnesia. You can’t remember your names, and you can’t get either to heaven or to hell until this old geezer, whose name is Charon, has checked you off his list. Each time he returns you have one chance to tell him what you think your name might be.`,
        onEnter: () =>{
            pressEnter('hell-3');
        },
    },
        {
        id: 'hell-3',
        name: '',
        count: 0,
        desc: `Then if you’re wrong, you’ve got a few years to think of another name that might be yours. Eventually in the course of all eternity, you’ll probably come up with the name that corresponds to the name on his list. So, here’s your first chance. Charon hands you your Emigration Card, and there’s the blank you’ve got to fill in.\n PRINT YOUR NAME HERE`,
        onEnter: () =>{
            reenableInput();
            },  
        onBlock: () => {
            let room = getRoom('hell-3');
            println('“Sorry,” says Charon, handing you back your Emigration Card. “I’ve got no pick-up order for anyone by this name. Better luck next time.” Charon picks up his oar, and swats away the other lost souls gathered about his boat. You join in their collective groan as Charon’s ferryboat vanishes into the mists of the river Styx.\n Five Years have gone by. Charon has returned in a mood of angry impatience. You fill out the Emigration Card. \n PRINT YOUR NAME HERE.');
            room.count++;
            if (room.count === 5){
              enterRoom('hell-5');
            }
        },
        exits: [
          {
            dir: ('hollings', 'xavier'),
            id: 'hell-4',
          },
        ],
      },  
    {
        id: 'hell-4',
        name: '',
        desc: `Charon examines your card, scratches his head, and hands it back. “So tell me, Xavier,” he says, “what’s your middle name?”`,
        onBlock: () => {
          println(`"Sorry, that's not right. Better luck next time."`);
          pressEnter(loaddisk(gameOver));
          },
      },
     
    ],
    
  };