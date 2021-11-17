const anns_house = {
    roomId:'ann-1',
    rooms:[
        {
            id:'ann-1',
            name:`Ann's House`,
            desc:`You find 25 West 19th Street in the middle of the block on the uptown side of the street.`,
            exits: [
                {dir:['look'],id:'ann-2'},
                {dir:['brownstone','building'],id:'ann-3'}
            ],
        },
        {
            id:'ann-2',
            name:'',
            desc:`25 West 11th St. is a five-story brownstone about thirty feet wide that stands between a parking lot and a taller but almost equally narrow office building. Its first story is occupied by a beauty salon in a state of advanced redecoration. A broad flight of steps, flanked by wrought-iron balustrades, mounts steeply to the carved entrance portico. To the right of the entrance is a wide bay formed by two large plate-glass windows hung with white lace curtains.`,
            exits:[
                {dir:['brownstone','building'],id:'ann-3'}
            ],
        },
        {
            id:'ann-3',
            name:'',
            desc:`You climb the steps to the entrance portico, where there is a row of doorbells each with a plastic nameplate beside it. The nameplate for the topmost doorbell reads NEW THEATER OF SILLINESS.`,
            exits:[
                {dir:['doorbell'],id:'ann-4'}
            ],
        },
        {
            id:'ann-4',
            name:'',
            desc:`You ring the doorbell, and after a short wait the buzzer sounds.`,
            //there is supposed to be a timer to get the player to enter the input in a limited amount of time. Does the engine we use allow that?
            onEnter: () => {
                pressEnter('ann-6');
            },
        },
        {
            id:'ann-5',
            name:'',
            desc:`You try to open the door but you’re too late; the buzzer’s stopped buzzing.`,
            exits:[
                {dir:['doorbell'],id:'ann-4'},
            ],
        },
        {
            id:'ann-6',
            name:'',
            desc:`You enter and find yourself at the foot of another flight of stairs. A voice calls down, pipingly, “Who’s there?”`,
            onEnter: () => {
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'john'){
                    enterRoom('ann-7');
                }else if(prevInput === 'john cameron'){
                    enterRoom('ann-7')
                }
                else{
                    enterRoom('ann-8');
                }
            },
        },
        {
            id:'ann-7', 
            name:'',
            desc:`“Oh, John, how nice. Mummy is in the bathtub, and I’m making imaginary cookies. I’ll go tell her you’re here.”`,
            exits: [
                {dir:['upstairs','climb'],id:'ann-9'},
            ],
        },
        {
            id:'ann-8',
            name:'',
            desc:`“Oh, John, you can’t fool me, I know your voice. Mummy is in the bathtub, and I’m making imaginary cookies. I’ll go tell her you’re here.”`,
            exits: [
                {dir:['upstairs','climb'],id:'ann-9'},
            ],
        },
        {
            id:'ann-9',
            name:'',
            desc:`You climb the stairs to the second floor landing, where the door to apartment B has been left ajar.`,
            exits:[
                {dir:['apartment','room'],id:'ann-10'},
            ]
        },
        {
            id:'ann-10',
            name:'',
            desc:`You enter a large loftlike space, in which the elements of a kitchen, a living room, and a toyshop are mingled in one bright-colored jumble. From another room, muffled, another voice calls to you: “I just got into the tub. Do be a dear, John, and read Cecily that nice book you got her. I won’t be long.” A moment later, from behind a room-dividing bookshelf, Cecily appears with an aluminum cookie sheet full of imaginary cookies.`,
            onBlock: () => {
                if(prevInput === 'look Cecily' || prevInput === 'look at Cecily'){
                    enterRoom('ann-11');
                }else{
                    println(`Can you rephrase that please?`);
                }
            },
        },
        {
            id:'ann-11',
            name:'',
            desc:`Cecily is at the age when children glow brightest--four or maybe five years old. She has that air of privileged playfulness that bright children share with royalty, a cheerful awareness that children are supposed to have fun, be coddled, and admired, and call the shots. She holds out the cookie sheet and offers you a choice between an imaginary chocolate-chip cookie and an imaginary sprinkle cookie.`,
            onBlock: () => {
                if(prevInput === 'take cookie'|| prevInput === 'take chocolate cookie' || prevInput === 'take sprinkle cookie'){
                    enterRoom('ann-12');
                }else{
                    println(`Can you rephrase that please?`);
                }
            },
        },
        {
            id:'ann-12',
            name:'',
            desc:``,
            onEnter: () => {
                println(`After a polite show of hesitation, you take one of the imaginary cookies and profess an exaggerated satisfaction.
                “Have another cookie,” Cecily insists. “I can always pretend to bake some more.”`)
                reenableInput();
            },
            exits:[
                {dir:['yes','thanks'],id:'ann-12'},
                {dir:['no'],id:'ann-13'}
            ]
        },
        {
            id:'ann-13',
            name:'',
            desc:`“Now that you’ve had your fill,” Cecily says, “I’ll entertain you. Do you remember the book you gave me for Christmas with all the riddles in it? Well, you will have to answer three riddles before I let Mummy come out of the bathtub. Okay?`,
            onBlock: () => {
                if(prevInput === 'yes' || 'okay' || 'answer riddles'){
                    enterRoom('ann-15')
                }else{
                    enterRoom('ann-14')
                }
            }
        },
        {
            id:'ann-14',
            name:'',
            desc:`Cecily stamps her foot with beguiling petulance. “The riddles have to come first. That is the rule. Now, here is the first riddle.\n\nAs I was going to St. Ives, I met a man with seven wives. Each wife had seven sacks. Each sack had seven cats. Each cat had seven kits. Kits, cats, sacks, and wives: How many were going to St. Ives?”`,
            onBlock: () => {
                if(prevInput === '1' || prevInput === 'one'){
                    enterRoom('ann-17')
                }else{
                    enterRoom('ann-16')
                }
            }
        },
        {
            id:'ann-15',
            name:'',
            desc:`“Very well! Here is the first riddle. She closes her eyes for better concentration, and recites: \n\nAs I was going to St. Ives, I met a man with seven wives. Each wife had seven sacks. Each sack had seven cats. Each cat had seven kits. Kits, cats, sacks, and wives: How many were going to St. Ives?”`,
            onBlock: () => {
                if(prevInput === '1' || prevInput === 'one'){
                    enterRoom('ann-17')
                }else{
                    enterRoom('ann-16')
                }
            }
        },
        {
            id:'ann-16',
            name:'',
            desc:`“You’re wrong!” Cecily shrieks gleefully. “You’re wrong, you’re wrong, you’re wrong! There’s only one going TO St. Ives, all the others are coming FROM there. That one fools everyone so don’t be disappointed. Okay, here’s one that’s even harder: \n\n“There was a girl in our town, silk an’ satin was her gown, silk an’ satin, gold an’ velvet, Guess her name, three times I’ve telled it.”`,
            onBlock: () => {
                if(prevInput === 'ann' || prevInput === 'anne'){
                    enterRoom('ann-19')
                }else{
                    enterRoom('ann-18')
                }
            }
        },
        {
            id:'ann-17',
            name:'',
            desc:`Cecily pouts becomingly. Ooh, you KNEW the answer. You probably read the whole book before you gave it to me. Well, I’ll ask you one from another book then. \n\n“There was a girl in our town, silk an’ satin was her gown, silk an’ satin, gold an’ velvet, Guess her name, three times I’ve telled it.”`,
            onBlock: () => {
                if(prevInput === 'ann' || prevInput ==='anne'){
                    enterRoom('ann-19')
                }else{
                    enterRoom('ann-18')
                }
            }
        },
        {
            id:'ann-18',
            name:'',
            desc:`“You’re wrong! You’re wrong, you’re wrong, you’re wrong. The right answer is Ann, the same as Mummy’s name. Silk AN’ satin, gold AN’ velvet, get it? Well, you’re no good at riddles, I can see that. I’ll go bake some more cookies. You can just go sit and read the newspaper or watch TV. I don’t care.”`,
            onBlock: () => {
                if(prevInput === 'ask Cecily about ann' || prevInput === 'ask Cecily about mother'){
                    enterRoom('ann-20')
                }else if(prevInput === 'look room' || prevInput ==='look bookshelves'){
                    enterRoom('ann-21')
                }else{
                    println(`Can you rephrase that please?`)
                }
            }
        },
        {
            id:'ann-19',
            name:'',
            desc:`“Oh, you knew that one because Mummy’s name is Ann. You’re no fun to play with at all. I’m going to bake some more cookies. You can just go sit and read the newspaper or watch the TV. I don’t care.”`,
        },
        {
            id:'ann-20',
            name:'',
            desc:`“I told you Mummy is taking a bath. Now don’t bother me, this is a complicated recipe, and it takes my full concentration.” Cecily scampers off to her own private space behind the bookshelves.`,
        },
        {
            id:'ann-21',
            name:'',
            desc:`The one stable and somber note among the apartment’s happy jumble are its tall bookshelves. You consider some of the titles of the exposed spines, and recognize many titles and authors that seem familiar, but only as the fame of a foreign city can be familiar though you’ve never visited it. And then you do find one book, and a very thick one, that you can dimly remember having read, or at least begun. There was a beautiful girl in it, the daughter of a man who carved tombstones. Gerta her name was. You look inside the book--it is called WOLF SOLENT--and find the name on the first page you skim. You feel a fierce glow of accomplishment at having remembered something, even if it was only a character in a book. You continue paging through the long novel until a woman’s voice addresses you: “John Cameron! This is a surprise.”`,
        },
        {
            id:'ann-22',
            name:'',
            desc:``,
        },
        {
            id:'ann-23',
            name:'',
            desc:``,
        },
        {
            id:'ann-24',
            name:'',
            desc:``,
        },

    ]
}