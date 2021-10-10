const lobby = {
    roomId: 'chapel',
    rooms: [
      {
        id: 'chapel-1',
        name: 'All-Faith Chapel',
        desc: `You are standing before a large rosewood door bearing a mottled brass nameplate declaring this to be the ALL-FAITH CHAPEL.`, 
           
        exits: [
          { // comment
            dir: 'text',
            id: 'chapel-#', 
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