const alisonsdeathbed = {
    roomId: 'dakota-alley',
    rooms: [
        {
          id: 'dakota-alley', 
          name: 'Dakota Alley', // Displayed each time the player enters the room.
          desc: `You are in the service alley of the Dakota. To the west, behind you, is the exit onto Columbus Avenue and 73rd Street. Climbing the north side of the building to your left are metal firestairs, and on the opposite side, to your right, is a large trash dumpster. You see a tire iron lying under the dumpster.`,
          exits: [
            {
                dir: 'north', 
                id: 'dakota-alley',
                block: `You can't go that way.`
            },
            {
                dir: 'east', 
                id: 'dakota-alley',
                block: `You can't go that way.`
            },
            {
                dir: ['west', 'leave'], 
                id: '73-colu',
            },
            {
                dir: 'climb', 
                id: 'dakota-alley-1',
            },
          ],
        },
        {
            id: 'dakota-alley-1', 
            name: 'Dakota Alley', // Displayed each time the player enters the room.
            desc: `Cautiously, you climb the steep and slippery firestairs. Guessing at the approximate location of apartment 44, you stop on the fourth floor in front of a small window.`,
            onBlock: () => {
                if(prevInput === 'break'){
                    enterRoom('dakota-alley-window');
                }else if(prevInput === 'open'){
                    enterRoom('dakota-alley-open');
                }else if(prevInput === 'enter'){
                    enterRoom('dakota-alley-enter');
                }else{
                    enterRoom('dakota-alley-zane');
                }
            },
            exits: [
              {
                  dir: ['south', 'leave'], 
                  id: 'dakota-alley',
              }
            ],
        },
        {
            id: 'dakota-alley-window', 
            name: 'Dakota Alley', // Displayed each time the player enters the room.
            desc: `You manage to smash the window through the protective grating. Glass Fragments shower the interior of the room on the other side.`,
            onBlock: () => {
                if(prevInput === 'open'){
                    enterRoom('dakota-alley-open');
                }else if(prevInput === 'enter'){
                    enterRoom('dakota-alley-enter');
                }else{
                    enterRoom('dakota-alley-zane');
                }
            },
            exits: [
              {
                  dir: ['south', 'leave'], 
                  id: 'dakota-alley',
              }
            ],
        },
        {
            id: 'dakota-alley-open', 
            name: 'Dakota Alley', // Displayed each time the player enters the room.
            desc: `The grating on the window prevents you from doing so.`,
            onBlock: () => {
                if(prevInput === 'break'){
                    enterRoom('dakota-alley-window');
                }else if(prevInput === 'enter'){
                    enterRoom('dakota-alley-enter');
                }else{
                    enterRoom('dakota-alley-zane');
                }
            },
            exits: [
              {
                  dir: ['south', 'leave'], 
                  id: 'dakota-alley',
              }
            ],
        },
        {
            id: 'dakota-alley-enter', 
            name: 'Dakota Alley', // Displayed each time the player enters the room.
            desc: `The grating on the window prevents you from trying.`,
            onBlock: () => {
                if(prevInput === 'open'){
                    enterRoom('dakota-alley-open');
                }else if(prevInput === 'enter'){
                    enterRoom('dakota-alley-enter');
                }else{
                    enterRoom('dakota-alley-zane');
                }
            },
            exits: [
              {
                  dir: ['south', 'leave'], 
                  id: 'dakota-alley',
              }
            ],
        },
        {
            id: 'dakota-alley-zane', 
            name: 'Dakota Alley', // Displayed each time the player enters the room.
            desc: `The curtains over the window are suddenly pulled apart, as if they were the last shroud covering an immense treasure. Behind them is the man who is, quite simply, you. Zane smiles broadly.`,
            onEnter: () => {
                pressEnter('dakota-alley-zane-2');
            },
        },
        {
            id: 'dakota-alley-zane-2', 
            name: 'Dakota Alley', // Displayed each time the player enters the room.
            desc: `Without pausing for even a moment, he seems to turn sideways, then unleashes a kick that dislodges the grating covering the window and sends it flying directly into your face. The impact lands you squarely on your back on the firestairs, staring up at the thin band of blue sky through the bars of the metal grating that comes to rest on top of you.`,
            onEnter: () => {
                pressEnter('dakota-alley-zane-3');
            },
        },
        {
            id: 'dakota-alley-zane-3', 
            name: 'Dakota Alley', // Displayed each time the player enters the room.
            desc: `Your last conscious thought is to wonder if it is he who is breaking out of the cage or if it is you who is breaking in.`,
            onEnter: () => {
                pressEnter('alisonsdeath-1');
            },
        },
        {
            id: 'alisonsdeath-1', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `You begin to stir. You become aware of a general pain that seems portioned out to each limb and organ with complete fairness, making each equally miserable. Then your head begins to throb with a special focused aching that sets it apart as your worst and most unbearable pain.`,
            onEnter: () => {
                pressEnter('alisonsdeath-2');
            },
        },
        {
            id: 'alisonsdeath-2', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Without willing it you find that you are crying. You force the tears to stop. You grit your teeth and try to think your way to the other side of the pain. You hear a low moaning sound. You’re not sure whether it’s you who’s moaning or someone else. “God damn,” you manage to whisper. It makes you feel marginally better. \n
            Your eyes are closed, and your eyelids feel almost as though it's be too painful to open them..`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'open'){
                    enterRoom('alisonsdeath-3');
                }else{
                    enterRoom('alisonsdeath-4');
                }
            },
        },
        {
            id: 'alisonsdeath-3', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `You open your eyes, painful though it is`,
            onEnter: () => {
                pressEnter('alisonsdeath-5');
            },
        },
        {
            id: 'alisonsdeath-4', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Your eyes are closed, and your eyelids feel almost as though it's be too painful to open them.`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'open'){
                    enterRoom('alisonsdeath-3');
                }else{
                    enterRoom('alisonsdeath-4');
                }
            },
        },
        {
            id: 'alisonsdeath-5', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Your vision slowly slides into focus as the person next to you draws a labored breath. She tries to move the hand that’s cuffed to yours, but she is so weak that only the feeblest impulse is conveyed by the short steel chain that links you. And even that effort is too much for her. Her hand falls limp upon the bloodstained sheet`,
            onEnter: () => {
                pressEnter('alisonsdeath-6');
            },
        },
        {
            id: 'alisonsdeath-6', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `You realize you don’t know if her real name is Alice or Alison. You whisper to her..’ `,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {    //Any result will take you to the next room
                if(prevInput === 'alison'){
                    enterRoom('alisonsdeath-7');
                }else{
                    enterRoom('alisonsdeath-7');
                }
            },
        },
        {
            id: 'alisonsdeath-7', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Alice cracks a feeble smile, which seems to require as much effort as a bench press. She lifts her free hand toward her throat and whispers words you cannot understand. The hand falls limply to her chest. Wide strips of gauze are wrapped about her lower ribcage to form a makeshift bandage `,
            onEnter: () => {
                pressEnter('alisonsdeath-8');
            },
        },
        {
            id: 'alisonsdeath-8', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `There is a bloodstain on the bandage at the level of the lowest rib. It is about the size of a silver dollar.`,
            onEnter: () => {
                pressEnter('alisonsdeath-9');
            },
        },
        {
            id: 'alisonsdeath-9', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `She speaks a few faltering words, too soft for you to understand more than a phrase or two:  `,
            onEnter: () => {
                pressEnter('alisonsdeath-10');
            },
        },
        {
            id: 'alisonsdeath-10', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `‘... never meant to . . . can you forgive . . .’ Sensing that you have not understood her, again she raises her hand toward her mouth, beckoning you to come closer.`,
            onEnter: () => {
                pressEnter('alisonsdeath-11');
            },
        },
        {
            id: 'alisonsdeath-11', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Awkwardly, because of the handcuffs, you twist around so as to be nearer Alice and better able to hear her. She touches your lips lightly as if sealing them to silence, and then her eyes close and her head falls back against the pillow`,
            onEnter: () => {
                pressEnter('alisonsdeath-12');
            },
        },
        {
            id: 'alisonsdeath-12', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `‘Xavier,’ she whispers. ‘I tried to save you. Now they’ll murder both of us. Forgive me if you can.’ `,
            onEnter: () => {
                pressEnter('alisonsdeath-13');
            },
        },
        {
            id: 'alisonsdeath-13', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `She seems thoroughly exhausted, but your curiosity grows keener by the second. Should you let her rest, or ask her to tell you what happened? ’ `,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {  
                if(prevInput === 'ask'){
                    enterRoom('alisonsdeath-explain');
                }else{
                    enterRoom('alisonsdeath-hollings-3');
                }
            },
        },
        {
            id: 'alisonsdeath-explain', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `‘I’m not really Alice Dudley, you know. All that – the wedding, what I told you in the museum – that was all lies. My real name is Alison Abrams. I was your secretary at Hollings Pharmaceutical, though my title -- ‘At the cost of a deep shuddering breath, she manages to smile, then goes on:  \n
            ‘-- my title was Executive Associate. I was never your fiancé. I never let you know how much I wanted to be, either. Not until your amnesia began to take hold. I thought then I could deceive you into loving me. Try and forgive me. I did love you. I still do’`,
            onEnter: () => {
                pressEnter('alisonsdeath-explain-2');
            },
        },
        {
            id: 'alisonsdeath-explain-2', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `After some moments of silence, Alice summons enough energy to talk.`,
            onEnter: () => {
                pressEnter('alisonsdeath-explain-3');
            },
        }, 
        {
            id: 'alisonsdeath-explain-3', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `‘Your amnesia was caused by a chemical agent that you isolated and called Letheum, after the river in Hades whose waters cause forgetfulness. You first got on the track of the chemical when you read in some weekly tabloid about this Texas town called Santa Candelaria where some local people had claimed there was an epidemic of amnesia.’ `,
            onEnter: () => {
                pressEnter('alisonsdeath-explain-4');
            },
        },    
        {
            id: 'alisonsdeath-explain-4', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `‘You went there and tracked down the culprit. It was the decay product of a dishwashing detergent called Shimmer. When Shimmer is stored at very high temperatures it degrades into Letheum. The people who’d used the Shimmer that had been kept in one particular warehouse and who weren’t careful about rinsing their dishes were the ones who started to develop amnesia.’`,
            onEnter: () => {
                pressEnter('alisonsdeath-explain-5');
            },
        },  
        {
            id: 'alisonsdeath-explain-5', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `‘No one ever had total amnesia like yours – because no one was systematically doctoring their food with it – as I was doing with yours after you came back to New York and asked me to help you. Before that you’d had only minor bouts of forgetfulness from your exposure to the drug from your research.’`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {    
                if(prevInput === 'wound'){
                    enterRoom('alisonsdeath-wound');
                }else{
                    enterRoom('alisonsdeath-wound');
                }
            },
        }, 
        {
            id: 'alisonsdeath-wound', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `‘When you first announced your engagement to Denise I almost stopped working for you. I knew she was a cynical, manipulative little golddigger. But she was also an accomplished sexual athlete, and so long as you were ‘training’ with her, she had you jumping through hoops.’ `,
            onEnter: () => {
                pressEnter('alisonsdeath-wound-2');
            },
        }, 
        {
            id: 'alisonsdeath-wound-2', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `‘But after you switched places with Zane, and he’d gone to Texas to be tried and serve your sentence, you started tomcatting around, answering personal ads in the Village Voice, and joining video dating clubs, and in the process you met Bette Binet.’`,
            onEnter: () => {
                pressEnter('alisonsdeath-wound-3');
            },
        }, 
        {
            id: 'alisonsdeath-wound-3', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `‘Falling in love with Bette finally opened your eyes to what a bitch Denise is, and when you dumped her, she proved it. She went down to the prison where Zane was serving your term and got him to marry her, so that legally she had your name – and bank account.’ `,
            onEnter: () => {
                pressEnter('alisonsdeath-wound-4');
            },
        }, 
        {
            id: 'alisonsdeath-wound-4', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `‘Any further effort at all seems both to exhaust and exalt Alice. She has fallen into a kind of faint. After some time has gone by, you manage to revive her. When she is again fully alert, she askes you, ‘Do you know who John Cameron REALLY is?’`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {    // any response will take you to the same room
                if(prevInput === 'me'){
                    enterRoom('alisonsdeath-cameron');
                }else{
                    enterRoom('alisonsdeath-cameron');
                }
            },
        }, 
        {
            id: 'alisonsdeath-cameron', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `‘There was a real John Cameron, or so I was told. He died in a swimming accident, and his father, who was some kind of small time gangster, sold me his identity so I could help you stay hidden in New York while Zane was in prison. You told me you couldn't stand to go back to that prison, and you had enough money you didn’t have to. The nightmares you used to have . . .’ `,
            onEnter: () => {
                pressEnter('alisonsdeath-cameron-1');
            },
        },
        {
            id: 'alisonsdeath-cameron-1', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `‘Do you remember anything about Hollings Pharmaceutical?’ Alice asks.  `,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {    // any response will take you to the same room
                if(prevInput === 'no'){
                    enterRoom('alisonsdeath-hollings');
                }else if (prevInput === 'yes'){
                    enterRoom('alisonsdeath-hollings-3');
                }else{
                    enterRoom('alisonsdeath-hollings-4');
                }
            },
        },
        {
            id: 'alisonsdeath-hollings', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `‘Your father’s fortune came from a patent for a popular sedative, Bromonine, but eventually his company produced a great range of pharmaceuticals. He died when you were ten, and the money went into a trust that provided a very nice income.’`,
            onEnter: () => {
                pressEnter('alisonsdeath-hollings-1');
            },
        },
        {
            id: 'alisonsdeath-hollings-1', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `‘The family fortune wasn’t yours until your mother passed on. You’ve worked in the Research Division of Hollings Pharmaceutical since you got your doctorate at Harvard. Everyone seemed to think the laboratory was just a very expensive playground the company provided to keep you out of management’s hair.’`,
            onEnter: () => {
                pressEnter('alisonsdeath-hollings-2');
            },
        },
        {
            id: 'alisonsdeath-hollings-2', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `‘You didn’t let anyone but me know about your work refining Letheum in Santa Candelaria, And it is potentially worth a fortune. You did it all in a little hotel room. But before you could bring the formula back, something happened with you and the sheriff’s daughter, and he trumped up something . . .`,
            onEnter: () => {
                pressEnter('alisonsdeath-hollings-3');
            },
        },
        {
            id: 'alisonsdeath-hollings-3', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `‘Alice, who had seemed to be getting stronger and stronger, stopped speaking abruptly, like a radio that’s had its dial twisted to an empty station. Her eyes star vacantly at the ceiling. Is she dead? You feel for a pulse in her wrist. There is none. Her own hand, cuffed to yours, dangles limply as you place your hand on her chest to see if her heart still beats. `,
            onEnter: () => {
                pressEnter('alisonsdeath-hollings-4');
            },
        },
        {
            id: 'alisonsdeath-hollings-4', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `There is no heartbeat either.`,
            onEnter: () => {
                pressEnter('alisonsdeath-hollings-5');
            },
        },
        {
            id: 'alisonsdeath-hollings-5', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `She is dead.`,
            onEnter: () => {
                pressEnter('alisonsdeath-emotions');
            },
        },
        {
            id: 'alisonsdeath-emotions', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `You are emotionally drained and lie on the bed, almost lifeless as the corpse beside you, except for the tears that well up from time to time.  `,
            onEnter: () => {
                pressEnter('alisonsdeath-emotions-1');
            },
        },
        {
            id: 'alisonsdeath-emotions-1', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `You are unaware of how much time has gone by. You can hear voices in the outer corridor, and footsteps. The nausea you felt earlier is almost gone. A doorbell rings, or maybe it’s a telephone. A moment later the door of the room is opened.`,
            onEnter: () => {
                pressEnter('alisonsdeath-emotions-2');
            },
        },
        {
            id: 'alisonsdeath-emotions-2', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Zane comes into the room. He removes the handcuffs and lifts you roughly to your feet, then marches you into a room furnished with a desk and some chrome-and-leather chairs.`,
            onEnter: () => {
                pressEnter('alisonsdeath-denise');
            },
        },
        {
            id: 'alisonsdeath-denise', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `In a moment they have you bound securely to one of the chairs with a piece of rope.`,
            onEnter: () => {
                pressEnter('alisonsdeath-denise-1');
            },
        },
        {
            id: 'alisonsdeath-denise-1', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"Someone should bring our other guest in to enjoy the party," Denise comments. "Would you gentlemen be so kind?`,
            onEnter: () => {
                pressEnter('alisonsdeath-denise-2');
            },
        },
        {
            id: 'alisonsdeath-denise-2', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `When Luke and Zane have left the room, she turns to you. "My advice to you, Xavier, is to speak only when spoken to. Zane has been abusing a controlled substance, and he's not quite in his right mind. He may explode over a trifle."`,
            onEnter: () => {
                pressEnter('alisonsdeath-denise-3');
            },
        },
        {
            id: 'alisonsdeath-denise-3', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `A moment later Bette enters the room, with Zane behind her. Zane has a gun in his right hand, and a faraway look in his eyes.`,
            onEnter: () => {
                pressEnter('alisonsdeath-denise-4');
            },
        },
        {
            id: 'alisonsdeath-denise-4', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `When she sees you, Bette rushes forward to embrace your bound body. "John! John, thank heavens, it's you! When that other man came to the door, I thought for one awful moment that he was you, and that you'd lost your memory again, or that I'd lost my mind."`,
            onEnter: () => {
                pressEnter('alisonsdeath-denise-5');
            },
        },
        {
            id: 'alisonsdeath-denise-5', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"Where is your father?" Denise asks. \n
            "In the bedroom, mopping up." Zane replies.`,
            onEnter: () => {
                pressEnter('alisonsdeath-denise-7');
            },
        },
        {
            id: 'alisonsdeath-denise-7', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"Good," she replies as she takes out the disk. "While I boot this, would you see that Miss Binet is comfortable?"`,
            onEnter: () => {
                pressEnter('alisonsdeath-denise-8');
            },
        },
        {
            id: 'alisonsdeath-denise-8', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"Be comfortable," Zane says, waving the gun at Bette, "have a seat".\n
            Bette whispers that she loves you, then sits in the chair nearest you.`,
            onEnter: () => {
                pressEnter('alisonsdeath-denise-9');
            },
        },
        {
            id: 'alisonsdeath-denise-9', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Denise turns to you and says, "All you have to do is give us the information we want, and you'll both be released unharmed. Will you cooperate?`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'yes'){
                    enterRoom('alisonsdeath-coop');
                }else if(prevInput === 'no'){
                    enterRoom('alisonsdeath-nocoop');
                }else{
                    enterRoom('alisonsdeath-nocoop');
                }
            },
        },
        {
            id: 'alisonsdeath-coop', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"A wise decision, Xavier," says Denise.`,
            onEnter: () => {
                pressEnter('alisonsdeath-disk');
            },
        },
        {
            id: 'alisonsdeath-nocoop', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"Don't you trust us?" asks Denise sweetly. "Really, why should we kill any more people than necessary? It's not easy to dispose of corpses`,
            onEnter: () => {
                pressEnter('alisonsdeath-disk');
            },
        },
        {
            id: 'alisonsdeath-disk', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Denise stares at the screen for a while, tapping the keyboard periodically. "Our plans require that we access the data on the disk."`,
            onEnter: () => {
                pressEnter('alisonsdeath-disk-1');
            },
        },
        {
            id: 'alisonsdeath-disk-1', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"You've encrypted the files, and use riddles to control access to them. If you cooperate by providing the answers to the riddles, we'll let you and Miss Binet use the false passports the late Miss Abrams obtained for you to go off with her to Austrailia."`,
            onEnter: () => {
                pressEnter('alisonsdeath-disk-2');
            },
        },
        {
            id: 'alisonsdeath-disk-2', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"Isn't that right, Zane?"\n
            Zane nods happily, "Sure, why not? Me and Xavier were good friends in college. I don't want to murder the bastard if I don't have to."`,
            onEnter: () => {
                pressEnter('alisonsdeath-disk-3');
            },
        },
        {
            id: 'alisonsdeath-disk-3', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Zane winks. With his free hand he helps himself to a sniff of the cocaine that has put him, momentarily, into such a good mood. "This is really dynamite stuff. I'd share it with you, for old times sake, but you better keep your head straight for those riddles, pal. Sorry if that seems unfriendly."`,
            onEnter: () => {
                pressEnter('alisonsdeath-disk-4');
            },
        },
        {
            id: 'alisonsdeath-disk-4', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Denise smiles with satisfaction. "So you see, Xavier, how much there is to be gained if you'll only be trusting and cooperative. Now let's being, shall we?"`,
            onEnter: () => {
                pressEnter('alisonsdeath-disk-5');
            },
        },
        {
            id: 'alisonsdeath-disk-5', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Denise inserts the disk into the drive. It whirrs and the first block of text appears on the screen. Denise asks "Are you near enough the screen to read the first riddle?"`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'yes'){
                    enterRoom('alisonsdeath-riddle');
                }else if(prevInput === 'no'){
                    enterRoom('alisonsdeath-disk-6');
                }else{
                    enterRoom('alisonsdeath-riddle');
                }
            },
        },
        {
            id: 'alisonsdeath-disk-6', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Zane pushes the chair you're bound to nearer to the monitor of the computer until the words come into focus.\n
            "Now." Denise demands, "read what's there and tell me what the answer is."`,
            onBlock: () => {
                if(prevInput === 'read'){
                    enterRoom('alisonsdeath-riddle');
                }else{ 
                    enterRoom('alisonsdeath-disk-6');
                }
            },
        },
        {
            id: 'alisonsdeath-disk-6', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"Zane, please help your friend develop a more cooperative attitude."\n
            Four strong backhands across your face persuade you to read the text.`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle');
            },
        },
        {
            id: 'alisonsdeath-riddle', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Although I talk of no one and\n
            Of nothing else but me and mine,\n
            I hope you will not understand\n
            Just who I am until the line\n
            Revealing all my taradiddle\n
            as the substance of - ------\n
            "Well," says Denise, "whats the answer?`,
            onBlock: () => {
                if(prevInput === 'riddle'){
                    enterRoom('alisonsdeath-riddle-1');
                }else{ 
                    enterRoom('alisonsdeath-wrong-1');
                }
            },
        },
        {
            id: 'alisonsdeath-riddle-1', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"Yes," Dennise agrees. "It's pretty obvious. I hope they're all so easy." She types the anser on the keyboard and a large block of text appears on the screen`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-2');
            },
        },
        {
            id: 'alisonsdeath-wrong-1', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Denise shakes her head. "Don't mess with fate, John. The answer is obviously "A RIDDLE." She types it on the keyboard, and a large block of text appears on the screen.`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-2');
            },
        },
        {
            id: 'alisonsdeath-riddle-2', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `The text seems to have to do with your staying at the Sunderland Hotel -- it is hard to read all of it, as Dennise scrolls through the text quickly\n
            The text on the screen breaks off, and is replaced by a second riddle:`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-3');
            },
        },
        {
            id: 'alisonsdeath-riddle-3', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `With every question that I pose,\n
            The keenner curiosity grows.\n
            How come? And when?\n
            And where's our waiter?\n
            What am I?\n
            Denise turns to you. "The answer, please.`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'question'){
                    enterRoom('alisonsdeath-riddle-3');
                }else{ 
                    enterRoom('alisonsdeath-wrong-2');
                }
            },
        },
        {
            id: 'alisonsdeath-riddle-3', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"Mm-hm," says Denise, and types: ?\n
            It is the correct answer, annd the monitor responds with annother long unscrolling of text`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-4');
            },
        },
        {
            id: 'alisonsdeath-wrong-2', // If the player gets the riddle wrong you get one more chance
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Denise mulls over your suggestion, shrugs, and types it on the keyboard. The monitor declares:\n
            INVALID PASSWORD.`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-3-2');
            },
        },
        {
            id: 'alisonsdeath-riddle-3-2', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `With every question that I pose,\n
            The keenner curiosity grows.\n
            How come? And when?\n
            And where's our waiter?\n
            What am I?\n
            Denise turns to you. "The answer, please.`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'question'){
                    enterRoom('alisonsdeath-riddle-3');
                }else{ 
                    enterRoom('alisonsdeath-wrong-3');
                }
            },
        },
        {
            id: 'alisonsdeath-wrong-3', // If the player gets the riddle wrong you get one more chance
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Denise looks even more doubtful. As she poises her hand over the keyboard, Bette speaks. "No, wait, I think I know what the answer is. A question mark!"\n
            Denise nods agreement, and types: ?"\n
            It is the correct answer, and the monitor responds with another long unscrolling of text.`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-5');
            },
        },
        {
            id: 'alisonsdeath-riddle-4', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"Mm-hm," says Denise, and types: ?\n
            It is the correct answer, annd the monitor responds with annother long unscrolling of text`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-5');
            },
        },
        {
            id: 'alisonsdeath-riddle-5', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Denise reads through this body of text, but cannot find what she is looking for.\n
            The text on the screen breaks off, and is replaced by a third riddle:\n
            I am Evolution's way\n
            Of saying:\n
            "You've had long enough to play."\n
            I'm the unveiling of the skull,\n
            The barancles sheered off the hull\n
            To show the noble wreck beneath,\n
            As all shall learn who feel my teeth.\n
            What am I?`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-6');
            },
        },
        {
            id: 'alisonsdeath-riddle-6', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Denise says, "Good God, that's nothing but poetry! It doesn't make sense."\n
            "Read it aloud," Zane suggests.\n
            Denise reads the riddle aloud.\n
            "You know what it could be," Zane says. "It could be Nemesis."\n
            "Nemesis," Denise repeats.`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-7');
            },
        },
        {
            id: 'alisonsdeath-riddle-7', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Zane nods, "Sure, it's the comet that killed all the dinosaurs. I'll bet that's what it is."\n
            Denise asks you: "Do you have a better idea?" Clearly, she doesn't set much stock in "Nemesis."`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'bald'){
                    enterRoom('alisonsdeath-riddle-8');
                }else if(prevInput === 'nemesis'){ 
                    enterRoom('alisonsdeath-nemesis'); // The covetted nemesis ending
                }else{
                    enterRoom('alisonsdeath-nemesis');
                }
            },
        },
        {
            id: 'alisonsdeath-nemesis', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Denise goes ahead and types in "Nemesis." The computer responds with the computer equivalent of a Bronx cheer. Quietly, Bette suggests "Baldness." It works.`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-9');
            },
        },
        {
            id: 'alisonsdeath-riddle-8', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Your answer works.`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-9');
            },
        },
        {
            id: 'alisonsdeath-riddle-9', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Denise scans the text with mounting exasperation, and mutters "Damn, no formula." She goes to the next file, which is protected by yet annother riddle. Denise reads it aloud:`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-10');
            },
        },
        {
            id: 'alisonsdeath-riddle-10', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Without and within\n
            I am skin after skin\n
            Core I have none,
            And I shall be undone\n
            By the slice of your knfie.\n
            It's a hell of a life.\n
            Who am I?`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-11');
            },
        },
        {
            id: 'alisonsdeath-riddle-11', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"This one's obvious," Zane says. "The answer is HOOKER, right?"\n
            "What?" responds Denise.\n
            "Well, it's a hell of a life when you come downn to it, and getting knifed is almost what you'd call an occupationnal hazard."`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-12');
            },
        },
        {
            id: 'alisonsdeath-riddle-12', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Denise gives Zane a peculiar look, then turns to you: "Do you have a better answer to the riddle, Xavier?"`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'onion'){
                    enterRoom('alisonsdeath-riddle-13');
                }else if(prevInput === 'hooker'){ 
                    enterRoom('alisonsdeath-hooker');
                }else{
                    enterRoom('alisonsdeath-hooker');
                }
            },
        },
        {
            id: 'alisonsdeath-hooker', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"Well I do!"`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-13');
            },
        },
        {
            id: 'alisonsdeath-riddle-13', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Denise types "ONION," and another installment of your memoirs scrolls down the screen.\n
            "Son of a bitch," says Zane angrily. "Where's the frigging formula?"`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-14');
            },
        },
        {
            id: 'alisonsdeath-riddle-14', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Denise calls up the fifth and final riddle, which is prefaced by a preliminary warning:\n
            -- CAUTION --\n
            Acess to File 5 is controlled by the two letter answer to the following riddle. If a wrong answer if given, File 5 will self destruct.`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-15');
            },
        },
        {
            id: 'alisonsdeath-riddle-15', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `At the end of struggle\n
            I give peace,\n
            A chance to breathe,\n
            another lease\n
            On life.\n
            Recieve me and achieve surcease,\n
            For I am sweet AMNES--.`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-16');
            },
        },
        {
            id: 'alisonsdeath-riddle-16', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Denise frowns. "It seems too easy. There must be a trick." She turns round to look at you intently. "What are the two letters, Xavier?"\n
            You hesitate, fearful of what Denise and Zane will do once they have access to the last file and you've lost your usefulness to them.`,
            onEnter: () => {
                pressEnter('alisonsdeath-riddle-17');
            },
        },
        {
            id: 'alisonsdeath-riddle-17', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Zane places the pistol against your head and releases the safety. "Answer the lady's question, or I am going to blow your head off! What ARE the two letters?"`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'ia'){
                    enterRoom('alisonsdeath-ending');
                }else if(prevInput === 'ty'){ 
                    enterRoom('alisonsdeath-ty-ending');
                }else{
                    enterRoom('alisonsdeath-warning');
                }
            },
        },
        {
            id: 'alisonsdeath-warning', // You can't get a game over this way.
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"Answer the lady's question, or I am going to blow your head off! What ARE the two letters?"`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'ia'){
                    enterRoom('alisonsdeath-ending');
                }else if(prevInput === 'ty'){ 
                    enterRoom('alisonsdeath-ty-ending');
                }else{
                    enterRoom('alisonsdeath-warning');
                }
            },
        },
        {
            id: 'alisonsdeath-ty-ending', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"Amnesty, yes, it makes as much sense as the other."\n
            "More really," you insist. "I haven't had that much peace as a result of amnesia."\n
            Zane lowers the gun and walks over to the monitor. He bends down and squints at the screen. After much blinking, he asks Denise to read the riddle out loud.`, // Did the protagonist just talk???
            onEnter: () => {
                pressEnter('alisonsdeath-ending-3');
            },
        },
        {
            id: 'alisonsdeath-ending', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Yes, but it seems so obvious," says Denise. "I keep thinking it must be a trick."`,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-1');
            },
        },
        {
            id: 'alisonsdeath-ending-1', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Bette speaks up. "The answer could also be T and Y -- AMNESTY. It makes just as much sense. More sense, really. I wouldn't say that amnesia has been a very great source of peace in the present case.`,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-2');
            },
        },
        {
            id: 'alisonsdeath-ending-2', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Zane lowers the gun and walks over to the monitor. He bends down and squints at the screen. After much blinking, he asks Denise to read the riddle aloud.\n
            She reads:`,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-3');
            },
        },
        {
            id: 'alisonsdeath-ending-3', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `-- CAUTION --\n
            Access to File 5 is controlled by the two letter answer to the following riddle. If a wrong answer if given, File 5 will self destruct.`,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-4');
            },
        },
        {
            id: 'alisonsdeath-ending-4', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `At the end of struggle\n
            I give peace,\n
            A chance to breathe,\n
            another lease\n
            On life.\n
            Recieve me and achieve surcease,\n
            For I am sweet AMNES--.`,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-5');
            },
        },
        {
            id: 'alisonsdeath-ending-5', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"And the wrong answer makes the whole thing blow up?" he asks. "Is there dynamite in it, or what? It doesn't make sense."\n
            "A wrong answer." Denise explains patiently, "will cause file five to be erased."\n
            "And that file probably has the formula for the drug that gave him amnesia." Zane realizes.`,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-6');
            },
        },
        {
            id: 'alisonsdeath-ending-6', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `He turns to you. "You better produce the right answer, friend, or I'll give you peace." He brandishes his pistol. "A piece of lead."`,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-7');
            },
        },
        {
            id: 'alisonsdeath-ending-7', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"Which is it, Xavier?" Denise insists. "I-A or T-Y?"`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'ia'){
                    enterRoom('alisonsdeath-ending-8');
                }else if(prevInput === 'ty'){ 
                    enterRoom('alisonsdeath-ty-ending-1');
                }else{
                    enterRoom('alisonsdeath-ending-8');
                }
            },
        },
        {
            id: 'alisonsdeath-ty-ending-1', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Denise considers your response, and smiles craftily. "Do you really think I'd be so foolish as to fall into your trap? AMNESTY might be the right answer in other circumstances than this. But surely the name of the game is "AMNESIA"."\n
            She types the letters I and A. The screen displays a ranndom pattern of X's and O's, annd then a message appears:\n
            -- FILE 5 ERASED. -- `,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-9');
            },
        },
        {
            id: 'alisonsdeath-ending-8', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Denise considers your response, and smiles craftily. "Do you really think I'd be so foolish as to fall into your trap? AMNESIA's the obvious answer, and so--"\n
            She types the letters T and Y. The screen displays a ranndom pattern of X's and O's, annd then a message appears:\n
            -- FILE 5 ERASED. -- `,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-9');
            },
        },
        {
            id: 'alisonsdeath-ending-9', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"Bitch!" Zane screams enraged. "He tells you the right answer and you've got to type in the opposite. God damn you!"\n
            His hands clench, and the pistol, its safety released, fires. The screen of the computer shatters, as Denise slumps forward.`,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-10');
            },
        },
        {
            id: 'alisonsdeath-ending-10', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `A moment later the door to the room is thrown open and Luke bursts into the room with a gun drawn. "What in the hell is --"`,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-11');
            },
        },
        {
            id: 'alisonsdeath-ending-11', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Zane spins around with his neurons -- and his gun -- firing. His second bullet, as deadly as the first, hits Luke neatly between the eyes. Luke's body smashes back against the doorframe, then rebounds forward. The gun falls from Luke's hand and skitters across the floor, within inches of where Bette sits frozen in horror.`,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-12');
            },
        },
        {
            id: 'alisonsdeath-ending-12', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Zane's connsciousness catches up with his reflexes annd he moans, "Daddy! Daddy! I'm sorry!" He sinks to his knees beside his father's corpse, and begins to cry.`,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-13');
            },
        },
        {
            id: 'alisonsdeath-ending-13', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Very slowly, as though she were reaching forward to feed a squirrel that might suddenly take fright and bound away, Bette bends forward and reaches for the gun that lies on the floor. When the gun is in her hand, she stands -- annd Zane, with tears still in his eyes, but a strange smile on his lips, stands up too.`,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-14');
            },
        },
        {
            id: 'alisonsdeath-ending-14', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Zane holds out his free hand, as though he genuinely expects Bette to hand him back the gun. The white powder that inspired his violennt impuses is still percolating through his system. Bette trembles as she watches Zane's hand slowly rising like a cobra's head.`,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-15');
            },
        },
        {
            id: 'alisonsdeath-ending-15', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `Bette fires.`,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-16');
            },
        },
        {
            id: 'alisonsdeath-ending-16', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `The bullet strikes Zane low in his chest. A thoughtful expression comes over his face, as though he'd been stopped not by a bullet but a new idea. "You did it!" he says wonderingly. "You won! Son of a bitch! I didn't think -- " He staggers toward the desk.`,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-17');
            },
        },
        {
            id: 'alisonsdeath-ending-17', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `"For me this is . . . a genuine surprise ending." He touches his wound, and looks a the blood on his fingertips with fascination. Then he crumples, as Bette unties the ropes that bound you.`,
            onEnter: () => {
                pressEnter('alisonsdeath-ending-18');
            },
        },
        {
            id: 'alisonsdeath-ending-18', 
            name: 'The Dakota', // Displayed each time the player enters the room.
            desc: `You annd Bette head for the back window. No one sees you take the fire escape down to the alley and out onto 73rd Street. The nightmare is over, and you're still alive. Bette takes your hand.`,
            onEnter: () => {
                pressEnter('epil-1'); // You reached the epilouge!
            },
        },
    ],
}