const lobby = {
  roomId: 'lobb-1',
  rooms: [
    
//Begin Lobby
    {
      id: 'lobb-1',
      name: 'The Lobby',
      desc: `You step out of the elevator into the lobby of the Sunderland Hotel, and the first thing you see is yourself looking elegantly sheepish in your white tuxedo, for the doors of the facing elevator are made of mirror-glass.`, 
      

      onLook: () => { // Looking around the Lobby.
        const room = getRoom('lobb-1');
        room.desc = `Mirrors seem to be the prevailing theme at the Sunderland--at least since the latest decorator got hold of it. There are mirrors on the walls, and mirrors encase the free-standing columns, and the three chandeliers that hang above the main reception area are formed of mirrors instead of crystal.  Reflected and multiplied in all this silvered glass, the small body of the hotel's clientele become a multitude. To your right is the registration desk, and beyond it the exit to 53rd Street; to your left a news-stand and gift shop, and then a large curving staircase going up to the second floor. Beside the staircase a hand-lettered sign says:
        The Sunderland Hotel
        is happy to welcome
        The Noise Abatement League
        to the Big Apple.
        Beyond the staircase, at the end of a mirror-lined corridor, is an entrance to the Rathskeller Bar and Grill, and at the far end of the corridor is the exit to 52nd St.
        Directly in front of the elevator alcove in which you're standing is the main reception area. In the far corner of the reception area a lonely TV mutely displays the evening news to a man slumped in a wing-back chair. The man, who is dressed like a Texas businessman in suit and tie, with boots and Stetson, tilts back his hat to look at you. Then he stands up, smiling, and gestures for you to come to him.`;
      },
      

      exits: [
        { // If the player is wearing the Tux and goes to Luke
          dir: ['w', 'west',],
          id: 'lobb-3', 
        },

        { // If the player is NOT wearing the Tux and goes to Luke
          dir: 'tuxless', //Temporary dir, used to access the tuxless path.
          id: 'lobb-8', 
        },

      ],
    },

//Begin Lobby Wandering Section

    //In the manuscript, the player has the option to move around a little before talking to Luke. However, unlike later during Lobby Revisited, there isn't really anything you can look at. Original game just jumps to Luke, and we may want to do that here too.

//End Lobby Wandering Section
  //Once the player talks to Luke, they won't be able to walk around the Lobby anymore until they return later.

//Begin Tuxedo Lobby Section
  
    {//talking to Luke while wearing the tux
      id: 'lobb-3',
      desc: `"Johnny my boy!" booms the man in the Stetson, in a voice as abrasive as desert sand. "Wouldn't your dear old mother -God rest her gentle soul!--be proud to see you now?" He advances toward you grinning like a friendly skull, with his long, thin arms extended to embrace you, and before you can back away or offer any other protest the embrace is completed. 
      
      Not what you'd call warm, just a short symbolic collision between your torso and his, with him maintaining the same cadaverous grin all the while. "Well, my boy," he says, releasing you, "how are you feeling after your big toot?"`,
      exits: [
        { // Answering in confirmation, goes to 4.
          dir: ['fine', 'okay', 'good'],
          id: 'lobb-4',
        },

        { // Answering negativley, goes to 4A. Anything that isn't a yes or question goes here.
          dir: ['bad', 'horrible', 'sick', 'unwell', 'tired', 'sleepy'],
          id: 'lobb-4A',
        },

        {// Asking 'Who are you?' or something similar.
          dir: ['who are you','who', 'what', 'where', 'why',],
          id: 'lobb-4B',
        },
      ],  
    },

    {
      id: 'lobb-4',
      desc: `"Wish I could say the same for myself, but that's no matter now. Say, why that funny look? Something wrong with what I'm wearing?" You shake your head and go on wondering how anyone who'd ever met this man--as you must have in the life you can't remember--could ever forget him. For he is memorably ugly.`,
      exits: [
        {// Asking 'Who are you?' or something similar.
          dir: ['who are you','who', 'what', 'where', 'why',],
          id: 'lobb-4B',
        },
        {// Saying anything else
          dir: ['who are you','who', 'what', 'where', 'why',],
          id: 'lobb-4C',
        },
      ],  
    },

    {//Player answered anything else
      id: 'lobb-4A',
      onEnter: () => {
        println(`"I'm feeling just fine myself, but that's no matter now."`);
        pressEnter('lobb-4C');
     },
    },

    {//Manuscript text, if player had asked a question
      id: 'lobb-4B',
      onEnter: () => {
        println(`"Hey, Johnny boy, this is no time for dumb questions like that. I gotta go down to this here rats' cellar and fetch back that preacher. Meanwhile you'd better go up to the chapel on the next floor and smooth things over with the little lady. `);
        pressEnter('lobb-4D');
     },
    },

    {//Game text, if player does anything else
      id: 'lobb-4C',
      onEnter: () => {
        println(`"Hey, Johnny boy, this is no time for any funny business. I gotta go down to this here rats' cellar and fetch back that preacher. Meanwhile you'd better go up to the chapel on the next floor and smooth things over with the little lady.`);
        pressEnter('lobb-4D');
     },
    },

    {
      id: 'lobb-4D',
      onEnter: () => {
        println(`I think she was starting to worry that you was going to leave her standing at the altar a second time, but I told her, 'Honey, I said, just joking like, 'if that Cameron boy walks out on you this time with another dumb excuse like the last one, he's going to have to answer to your daddy.'`);
        pressEnter('lobb-4E');
     },
    },

    {
      id: 'lobb-4E',
      onEnter: () => {
        println(`And then, Johnny, I showed her what I was packing--" The man holds open the jacket of his suit to reveal a shoulder holster from which the butt of a small handgun projects. "--and that seemed to ease her worrying a whole lot. Nuff said, my boy? Do you take my meaning?"`);
        pressEnter('lobb-4F');
     },
    },

    {
      id: 'lobb-4F',
      onEnter: () => {
        println(`You shake your head, and go on wondering how anyone who'd ever met this man -- as you must have in the life you can't remember -- could ever forget him, for he is memorably ugly.`);
        pressEnter('lobb-5');
     },
    },

    { 
      id: 'lobb-5',
      desc: `"Glad to hear it. Cause I wouldn't want to have to do anything to make my little cactus blossom unhappy. You've given that poor gal enough trouble to last her a lifetime, and from here on out, Mr. Know-It-All Cameron the Third, you're going to do right by my little Alice--or my name ain't Luke Dudley. 
      
      Now scoot on up those stairs and give her some of that sweet talk that got the two of you into this situation.'`,
      
      onLook: () => { // (6) Looking at Luke
        const room = getRoom('lobb-5');
        room.desc = `He is a tall thin man with an expression of "good humor" so forced that his smile seems to be achieved the way some facelifts are, with little fishhooks pulling the flesh into place. His black suit hangs loosely on his spare frame, and the few strands of hair that have escaped the band of his black Stetson are the color of dirty khaki. His eyes are small and he has a tendency to squint. The buckle of his belt spells out his name in big brass capitals: LUKE.`;
      },
      exits: [
        { // Leads straight to chapel
          dir: 'stairs',
          id: 'lobb-17',
        },
        { // Anything except leaving to the chapel
          dir: 'what',
          id: 'lobb-7',
        },
      ],  
    },

    { 
      id: 'lobb-7',
      desc: `Luke pats his concealed pistol. "I said 'scoot,' boy, and when I say 'scoot' I'm not talking about by-and-by. I'm saying 'scoot now.'"`,

      exits: [
        {// responding 'go to stairs"
          dir: 'stairs',
          id: 'lobb-17',
        },

        {// if player tries to go east past the stairs towards the street exit
          dir: 'east',
          id: 'lobb-18',
        },

        {// if player tries to go west past the stairs towards the street exit
          dir: 'west',
          id: 'lobb-18A',
        },

      ],  
    },
//End Tuxedo Lobby Section

//Begin Tuxless Lobby Section

    { //if attempting to talk to Luke without wearing the Tuxedo from earlier.
      id: 'lobb-8',
      desc: `"Well, god damn," swears the man in the Stetson hat loud enough to be heard from the other side of the reception area. He strides toward you with an angry glint in his beady eyes. "Now where in tarnation is that white suit. I ain't shelling out five hundred bucks to get my little Alice looking like a proper bride and then have you showing up looking like a pig farmer. No siree!" He lays a hand on your shoulder and pushed you back toward the elevator alcove. "We are going right back to your room, and you are going to get dressed in your bridegroom uniform, and then by God you're going to do the right thing by my little Alice. Now get inside that elevator."`,

      exits: [
        {// Responding by going to the elevator.
          dir: 'elevator',
          id: 'lobb-9',
        },

        {// Anything else but going to the elevator
          dir: 'no',
          id: 'lobb-10',
        },

      ],  
    },

    { 
      id: 'lobb-9',
      desc: `The man in the Stetson--his brass belt-buckle identifies him as 'LUKE'--follows you into the elevator and pushes the button for 15. The doors whoosh close and the elevator starts to go up.`,

      exits: [
        {// Attempting to ask a question
          dir: 'what',
          id: 'lobb-10A',
        },

      ],  
    },

    { // entering from lobb-8
      id: 'lobb-10',
      desc: `The man spreads back the lapel of his suitcoat to reveal a shoulder holster from which the butt of a small handgun projects. "Now I don't want any trouble out of you, Mr. smarty-pants Cameron the Third. This ain't going to be no shotgun wedding, but it might turn out to be a .38 caliber wedding, if you insist on it."
      
      You are persuaded by his eloquence and get in the elevator. He follows after you and pushes the button for 15. The doors whoosh closed and the elevator starts to go up.`,

      exits: [
        {// any response except 'take gun' or 'fight man/Luke'
          dir: 'any',
          id: 'lobb-11',
        },

        {// responding 'take gun' or 'fight man/Luke'
          dir: 'fight',
          id: 'lobb-13',
        },

      ],  
    },

    { // entering from lobby-9
      id: 'lobb-10A',
      desc: `The man spreads back the lapel of his suitcoat to reveal a shoulder holster from which the butt of a small handgun projects. "Now I don't want any trouble out of you, Mr. smarty-pants Cameron the Third. This ain't going to be no shotgun wedding, but it might turn out to be a .38 caliber wedding, if you insist on it."`,

      exits: [
        {// any response except 'take gun' or 'fight man/Luke'
          dir: 'any',
          id: 'lobb-11',
        },

        {// responding 'take gun' or 'fight man/Luke'
          dir: 'fight',
          id: 'lobb-13',
        },
      ],  
    },

    { 
      id: 'lobb-11',
      desc: `The man pats his concealed weapon significantly and gives you a grin like a skull trying to be friendly. The elevator arrives at 15 and the doors open. He motions for you to get out, and then follows you to the door of Room 1502. "Now give me the key," he demands.`,

      exits: [
        {// responding 'give man/Luke room key'
         dir: 'give key',
         id: 'lobb-14',
        },

        {// if the player either didn't take the key from the room, or says: "I don't have key/I can't"
          dir: 'no',
          id: 'lobb-12',
        },
      ],  
    },

    { 
      id: 'lobb-12',
      desc: `"You didn’t take your room key when you left your room? God-damn, but you are a turkey.  Johnny boy, I think you just plain aren't good enough for my little Alice, so say your prayers and make them quick." And with no more preface than that, the man in the Stetson takes the .38 caliber revolver from his shoulder holster and shoots you between the eyes.`,

      exits: [
        { // leads to the same 'Hell' ending as the suicide from earlier.
          dir: 'dead',
          id: 'hell-1',
        },
      ],  
    },

    { 
      id: 'lobb-13',
      desc: `Unwisely you try to take the man’s revolver by force. He proves to be much stronger than his spare frame would suggest. Instead of the gun, you have to make do with a single bullet--right between the eyes.`,

      exits: [
        { // leads to the same 'Hell' ending as the suicide from earlier.
          dir: 'dead',
          id: 'hell-1',
        },
      ],  
    },

    { 
      id: 'lobb-14',
      desc: `He takes the key from you and unlocks the door to Room 1502. "Now you get in there and change into that white monkey suit on the double--and then like the song says, you're going to the chapel and you're going to get married." He chuckles and adds: "Going to the Chapel of Love!"`,

      exits: [
        {// responding "enter room"
          dir: 'enter',
          id: 'lobb-16',
        },

        {// any response but "enter room"
          dir: 'no',
          id: 'lobb-15',
        },
      ],  
    },

    { 
      id: 'lobb-15',
      desc: `"God-damn, but you are a turkey. Johnny boy, I think you just plain aren't good enough for my little Alice, so say your prayers and make them quick." And with no more preface than that, the man in the Stetson takes the .38 caliber revolver from his shoulder holster and shoots you between the eyes.`,

      exits: [
        {// leads to the same 'Hell' ending as the suicide from earlier.
          dir: 'dead',
          id: 'hell-1',
        },
      ],  
    },

    { 
      id: 'lobb-16',
      desc: `You quickly change into the white tuxedo, put the clothes you were wearing into the gym bag, and return with the bag under your arm to where your would-be father-in-law is waiting in the corridor. "Now that looks a whole lot nicer," he says when you're back in the elevator, "and I'll bet it feels more comfortable too, don’t it?" He presses the button for 2, and the elevator takes you to the second floor--and the entrance to the All-Faith Chapel. "Now you go in the chapel," Luke says, "and start getting into a romantic mood. I got to go down to that rats' cellar they got here and fetch back that preacher. Damned if this ain't more work than rounding up pigs from a corn patch!" You step out of the elevator, and the doors close behind you.`,

      exits: [
        { // Leads straight to chapel
          dir: 'chapel',
          id: 'chap-1',
        },
      ],  
    },
//End Tuxless Section

//Begin Lobby Stairs Section
    { 
      id: 'lobb-17',
      desc: `Halfway up the stairs a woman in a bright blue dress insists on giving you a mimeographed flyer with the headline: TOO MUCH NOISE CAN DRIVE YOU CRAZY!!! A large yellow button pinned to her dress shows her to be a member of the New York City Chapter of the Noise Abatement League. "The next presentation will be in just a minute or two!" she calls after you as you continue up the staircase. At the top you take your direction from an arrow pointing you to the All­-Faith Chapel.`,

      exits: [
        { // Leads straight to chapel
          dir: 'enter',
          id: 'chap-1',
        },

      ],  
    },

    { //East from (lobby-7)
      id: 'lobb-18',
      desc: `You walk on past the stairs towards the 52nd Street exit, but you’ve not gone more than a few yards before you feel Luke's hand on your shoulder--and his revolver pressed into the small of your back. "Lost your way?" he asks sarcastically. You let him conduct you to the foot of the stairs without protest. "To the chapel!" Luke advises, prodding at your back with the revolver.`,

      exits: [
        {// responding 'go to stairs"
          dir: 'stairs',
          id: 'lobb-17',
        },

      ],  
    },

    { //West from (7)
      id: 'lobb-18A',
      desc: `Instead of heading toward the stairs, you turn left toward the 53rd Street exit, but you’ve not gone more than a few yards before you feel Luke's hand on your shoulder--and his revolver pressed into the small of your back. "Lost your way?" he asks sarcastically. You let him conduct you to the foot of the stairs without protest. "To the chapel!" Luke advises, prodding at your back with the revolver.`,

      exits: [
        {// responding 'go to stairs"
          dir: 'stairs',
          id: 'lobb-17',
        },

      ],  
    },

//End Lobby Stairs Section

//End Lobby

//Begin Lobby Notes
    //In the beginning of the Lobby section, the manuscript mentions letting the player walk around before talking to Luke, but there isn't much to see and you can't interact with anything. The original game moves straight onto Luke. And also proceeds to describe him in detail, which I feel is a smoother explanation than letting the player guess.

    //When speaking to Luke, (Lobb-4B) He asks: "Do you take my meaning?" There is no negative response to this question, and in the original game it makes your character automatically answer yes.
    
    //Needs to adjust rooms for compass direction movements. This allows for access to stairs from room 7. And probably a few other things too.
    //properly name the dir for navigation. Will need to happen once we have an array of words that will work.
    //adding in specific look functions for the room, and for Luke
    //Fix desc for 18 and 18A. Check where they should properly happen.
    //Manuscript text for 4 and 5 have some diolouge shifted around. Original game skips this issue by forcing you onto a path.
    //Connect any sections that shoul auto-advance to the next ones, such as those leading to hell or the chapel.
    //Organize the code a little bit so it's easier to tell the wearing-tux rooms from the non-wearing-tux rooms
    //Last updated 10/9/2021

//End Lobby Notes

// Start Templates
    // Templates for quick & easy copy/paste use. These will be deleted when the work is finished.

    // Basic template for a new room, looking around, and it's exits.
    { 
      id: '#',
      desc: `Text`,

      onLook: () => {
        const room = getRoom('name');
        room.desc = `Description`;
      },

      exits: [
        {
          dir: 'Text',
          id: '#',
        },
      ],  
    },

// End Templates

  ],
};
