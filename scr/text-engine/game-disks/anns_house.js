const anns_house = {
    roomId:'ann-1',
    rooms:[
        {
            id:'ann-1',
            name:`Ann's House`,
            desc:`You can see a large brownstone at 25 W. 19th St. It is just a few steps from the corner.`,
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
                {dir:['doorbell','bell'],id:'ann-4'}
            ],
        },
        {
            id:'ann-4',
            name:'',
            desc:`You ring the doorbell, and after a short wait the buzzer sounds.`,
            onEnter: () => {
                annTimer = setTimeout(() =>{enterRoom('ann-5')}, 1500);
            },
            onBlock: () => {
                if(prevInput === 'open'){
                    clearTimeout(annTimer);
                    enterRoom('ann-6');
                }else{
                    println(`try again`);
                }
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
                    enterRoom('ann-7');
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
            exits: [
                {dir:['cecily'],id:'ann-11'},
            ],
            items: [
                {
                    itemId: 'cecily',
                    name: ['Cecily', 'cecily'],
                    onLook: () => {
                        enterRoom('ann-11')
                    },
                }
            ]
        },
        {
            id:'ann-11',
            name:'',
            desc:`Cecily is at the age when children glow brightest--four or maybe five years old. She has that air of privileged playfulness that bright children share with royalty, a cheerful awareness that children are supposed to have fun, be coddled, and admired, and call the shots. She holds out the cookie sheet and offers you a choice between an imaginary chocolate-chip cookie and an imaginary sprinkle cookie.`,
            onBlock: () => {
                //might be better to use the onTake function here.
                if(prevInput === 'grab cookie'){
                    enterRoom('ann-12');
                }else if(prevInput === 'grab chocolate cookie'){
                    enterRoom('ann-12');
                }else if(prevInput ==='grab sprinkle cookie'){
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
                println(`After a polite show of hesitation, you take one of the imaginary cookies and profess an exaggerated satisfaction.\n\n“Have another cookie,” Cecily insists. “I can always pretend to bake some more.”`)
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
                    enterRoom('ann-15');
                }else{
                    enterRoom('ann-14');
                }
            },
        },
        {
            id:'ann-14',
            name:'',
            desc:`Cecily stamps her foot with beguiling petulance. “The riddles have to come first. That is the rule. Now, here is the first riddle.\n\nAs I was going to St. Ives, I met a man with seven wives. Each wife had seven sacks. Each sack had seven cats. Each cat had seven kits. Kits, cats, sacks, and wives: How many were going to St. Ives?”`,
            onBlock: () => {
                if(prevInput === '1' || prevInput === 'one'){
                    enterRoom('ann-17');
                }else{
                    enterRoom('ann-16');
                }
            },
        },
        {
            id:'ann-15',
            name:'',
            desc:`“Very well! Here is the first riddle. She closes her eyes for better concentration, and recites: \n\nAs I was going to St. Ives, I met a man with seven wives. Each wife had seven sacks. Each sack had seven cats. Each cat had seven kits. Kits, cats, sacks, and wives: How many were going to St. Ives?”`,
            onBlock: () => {
                if(prevInput === '1' || prevInput === 'one'){
                    enterRoom('ann-17');
                }else{
                    enterRoom('ann-16');
                }
            },
        },
        {
            id:'ann-16',
            name:'',
            desc:`“You’re wrong!” Cecily shrieks gleefully. “You’re wrong, you’re wrong, you’re wrong! There’s only one going TO St. Ives, all the others are coming FROM there. That one fools everyone so don’t be disappointed. Okay, here’s one that’s even harder: \n\n“There was a girl in our town, silk an’ satin was her gown, silk an’ satin, gold an’ velvet, Guess her name, three times I’ve telled it.”`,
            onBlock: () => {
                if(prevInput === 'ann' || prevInput === 'anne'){
                    enterRoom('ann-19');
                }else{
                    enterRoom('ann-18');
                }
            },
        },
        {
            id:'ann-17',
            name:'',
            desc:`Cecily pouts becomingly. Ooh, you KNEW the answer. You probably read the whole book before you gave it to me. Well, I’ll ask you one from another book then. \n\n“There was a girl in our town, silk an’ satin was her gown, silk an’ satin, gold an’ velvet, Guess her name, three times I’ve telled it.”`,
            onBlock: () => {
                if(prevInput === 'ann' || prevInput ==='anne'){
                    enterRoom('ann-19');
                }else{
                    enterRoom('ann-18');
                }
            },
        },
        {
            id:'ann-18',
            name:'',
            desc:`“You’re wrong! You’re wrong, you’re wrong, you’re wrong. The right answer is Ann, the same as Mummy’s name. Silk AN’ satin, gold AN’ velvet, get it? Well, you’re no good at riddles, I can see that. I’ll go bake some more cookies. You can just go sit and read the newspaper or watch TV. I don’t care.”`,
            onBlock: () => {
                if(prevInput === 'ask about ann' || prevInput === 'ask cecily about ann'){
                    enterRoom('ann-20');
                }else if(prevInput === 'look room' || prevInput ==='look bookshelves'){
                    enterRoom('ann-21');
                }else{
                    println(`Can you rephrase that please?`);
                }
            },
            items: [
                {
                    itemId: 'bookshelf',
                    name: ['Bookshelf', 'bookshelf'],
                    onLook: () => {
                        enterRoom('ann-21')
                    },
                }
            ]
        },
        {
            id:'ann-19',
            name:'',
            desc:`“Oh, you knew that one because Mummy’s name is Ann. You’re no fun to play with at all. I’m going to bake some more cookies. You can just go sit and read the newspaper or watch the TV. I don’t care.”`,
            onBlock: () => {
                if(prevInput === 'ask about ann' || prevInput === 'ask cecily about ann'){
                    enterRoom('ann-20');
                }else if(prevInput === 'look room' || prevInput ==='look bookshelves'){
                    enterRoom('ann-21');
                }else{
                    println(`Can you rephrase that please?`);
                }
            },
            items: [
                {
                    itemId: 'bookshelf',
                    name: ['Bookshelf', 'bookshelf'],
                    onLook: () => {
                        enterRoom('ann-21')
                    },
                }
            ]
        },
        {
            id:'ann-20',
            name:'',
            desc:`“I told you Mummy is taking a bath. Now don’t bother me, this is a complicated recipe, and it takes my full concentration.” Cecily scampers off to her own private space behind the bookshelves.`,
            items: [
                {
                    itemId: 'bookshelf',
                    name: ['Bookshelf', 'bookshelf'],
                    onLook: () => {
                        enterRoom('ann-21')
                    },
                }
            ]
        },
        {
            id:'ann-21',
            name:'',
            desc:`The one stable and somber note among the apartment’s happy jumble are its tall bookshelves. You consider some of the titles of the exposed spines, and recognize many titles and authors that seem familiar, but only as the fame of a foreign city can be familiar though you’ve never visited it. And then you do find one book, and a very thick one, that you can dimly remember having read, or at least begun. There was a beautiful girl in it, the daughter of a man who carved tombstones. Gerta her name was. You look inside the book--it is called WOLF SOLENT--and find the name on the first page you skim. You feel a fierce glow of accomplishment at having remembered something, even if it was only a character in a book. You continue paging through the long novel until a woman’s voice addresses you: “John Cameron! This is a surprise.”`,
            onBlock: () => {
                if(prevInput === 'hello ann' || prevInput === 'hi ann'){
                    enterRoom('ann-22');
                }else if(prevInput === 'ask about new theater of silliness' || prevInput === 'ask ann about new theater of silliness'){
                    enterRoom('ann-23');
                }else if(prevInput === 'ask ann about cecily' || prevInput === 'ask about cecily'){
                    enterRoom('ann-24');
                }
            },
        },
        {
            id:'ann-22',
            name:'',
            desc:`“Hello yourself.”`,
            onBlock: () => {
                if(prevInput ==='ask about new theater of silliness' || prevInput === 'ask ann about new theater of silliness'){
                    enterRoom('ann-23');
                }else if(prevInput === 'ask ann about cecily' || prevInput === 'ask about cecily'){
                    enterRoom('ann-24');
                }
            },
        },
        {
            id:'ann-23',
            name:'',
            desc:`“Oh, that’s pretty well defunct now, but we keep the apartment and the phone listed that way because my accountant says Cecily won’t have to pay such high taxes if she’s a corporation instead of an individual. And she likes being a corporation. It gives her something to brag about.”`,
            onBlock: () => {
                if(prevInput === 'ask ann about cecily' || prevInput === 'ask about cecily'){
                    enterRoom('ann-24');
                }
            },
        },
        {
            id:'ann-24',
            name:'',
            desc:`“She’s been having a few problems at school. One of her classmates has dyslexia and Cecily is jealous. She wants to be dyslexic too. Were you able to answer her riddles?”`,
            onBlock: () => {
                if(prevInput === ''){
                    enterRoom('ann-25');
                }
            },
        },
        {
            id:'ann-25',
            name:'',
            desc:`She turns away from you, indifferent to your riddle-answering prowess, and begins vigorously to dry her hair with the bath towel that was her turban. After it is all fluffed out into a great halo of damp blonde curls, she opens a cupboard compartment underneath the tv, takes out two brandy glasses and a bottle of brandy. She appraises the level of the bottle’s contents. “There’s just enough to finish off what we started,” she announces, and pours the brandy into the glasses. She hands you one of the snifters and then holds up her own in a toast: “To what we started!”`,
            onBlock: () => {
                if(prevInput === 'ask about what we started' || prevInput === 'to what we started' || prevInput === 'kiss ann' || prevInput === 'i love you'){
                    enterRoom('ann-26');
                }else{
                    println(`Can you rephrase that please?`);
                }
            },
        },
        {
            id:'ann-26',
            name:'',
            desc:`“Don’t think, John Cameron, that what we started is still happening. You’ve had your chance. I’m after a long-term relationship. Not one where you pop up with a smile on your face looking for a free dinner and a place to crash and then disappear for a month. I’m not blaming you-- you never pretended to be anything you’re not. But you’re a bum--a good­looking, personable sort of bum, but a bum for all that. Have you eaten? If you’re hungry there’s a big hunk of brie in the icebox. I carted it home from a party last night, so have all you want, it was free. Now excuse me a moment, I’ve got to put the Little Princess to bed. She’s got a makeup call for six a.m.”`,
            onEnter: () =>{
                if(playHung <= 25){
                    println(`The mention of the brie starts you salivating like one of Pavlov’s dogs. You may have amnesia, but your tastebuds don’t.`);
                }
            },
            onBlock: () => {
                if(prevInput === 'get brie' || prevInput === 'eat brie'){
                    println(`Ann said the brie is in the icebox. Why not start there?`);
                }else if(prevInput === 'go to icebox' || prevInput === 'open icebox'){
                    enterRoom('ann-27');
                }
            },
        },
        {
            id:'ann-27',
            name:'',
            desc:`You go across the room to a corner that is predominantly kitcheny without quite becoming a kitchen, open the icebox and encounter a truly monumental wedge of brie gleaming in wrinkly plastic wrap.`,
            onBlock: () => {
                if(prevInput ==='eat brie'){
                    enterRoom('ann-28');
                }else if(prevInput === 'unwrap brie'){
                    enterRoom('ann-29');
                }else if(prevInput === 'slice brie'){
                    enterRoom('ann-30');
                }else{
                    println(`Can you rephrase that please?`);
                }
            },
        },
        {
            id:'ann-28',
            name:'',
            desc:`Sure enough--as soon as the plastic wrap is off.`,
            onBlock: () => {
                if(prevInput === 'eat brie'){
                    enterRoom('ann-31');
                }else{
                    println(`Can you rephrase that please?`);
                }
            },
        },
        {
            id:'ann-29',
            name:'',
            desc:`The brie is unwrapped, but even so it’s too cold to release a really knockdown aroma`,
            onBlock: () => {
                if(prevInput === 'eat brie'){
                    enterRoom('ann-31');
                }else{
                    println(`Can you rephrase that please?`);
                }
            },
        },
        {
            id:'ann-30',
            name:'',
            desc:` You find a knife on a nearby counter and slice off a sizable triangle of cold brie.`,
            onBlock: () => {
                if(prevInput === 'eat brie'){
                    enterRoom('ann-31');
                }else{
                    println(`Can you rephrase that please?`);
                }
            },
        },
        {
            id:'ann-31',
            name:'',
            desc:`Even cold it is delicious. For a moment, your whole life--both the life you’ve forgotten and the one you are blundering about it now--seems like one long detour from a worthwhile life devoted to making cheese. You eat some more, for it is truly a fine cheese, and Ann is a fine woman for letting you have some.
            Just as you think this grateful thought, she returns from putting to Cecily to bed.`,
            onEnter: () => {
                playHung(+50)
            },
            onBlock: () => {
                if(prevInput === 'ask ann about'){
                    enterRoom('ann-34');
                }else{
                    println(`Can you rephrase that please?`);
                }
            },
            items: [
                {
                    itemId: 'ann',
                    name: ['Ann', 'ann'],
                    onLook: () => {
                        enterRoom('ann-32')
                    },
                }
            ]
        },
        {
            id:'ann-32',
            name:'',
            desc:`She is beautiful with the beauty of the Ideal Housewife to be seen in advertisements for cooking oil and detergents, a bland, unglamorous beauty that can neither be envied nor denied. She is the sort of woman whose single marital status (she’s not wearing a wedding ring) seems like a freak of nature.`,
            onBlock: () => {
                if(prevInput === 'propose' || prevInput === 'propose to ann' || prevInput === 'i love you' || prevInput ==='kiss ann'){
                    enterRoom('ann-33');
                }else if(prevInput === 'ask ann about'){
                    enterRoom('ann-34');
                }else{
                    println(`Can you rephrase that please?`);
                }
            },
        },
        {
            id:'ann-33',
            name:'',
            desc:`“John, you’re a darling, and you know how fond I am of you, but you must accept the fact that as lovers we belong in the past tense. It’s over, and I’m engaged to another man, as you very well know, and he is jealous of you, and I don’t blame him, so you see, you simply must stop coming round here. In fact, I’ll have to ask you to leave now, since Jeff is coming over to watch an old Bergman movie on the Betamax.”`,
            onBlock: () => {
                if(prevInput === 'ask ann about'){
                    enterRoom('ann-34');
                }
            },
        },
        {
            id:'ann-34',
            name:'',
            desc:`“Oh, John, next you’ll want to know why the sky is blue. No more questions. But in one way I am glad you came, since it gives me an opportunity to give you this.” She holds out a slip of paper. “It’s from a woman named Denise. She wouldn’t give her last name, and she wouldn’t explain how she got my number. But she was very insistent that if I should hear from you, to tell get in touch with her. So I wrote down her number. Though I do think supplying you with a new phone number is a little like carrying coal to Newcastle.”`,
            onBlock: () => {
                if(prevInput === 'take paper'){
                    enterRoom('ann-35');
                }else{
                    println(`Can you rephrase that please?`);
                }
            },
            items: [
                {
                    itemId: 'anns_note',
                    name: ['note', 'Note'],
                    onTake: () => {
                        enterRoom('ann-35');
                    }
                }
            ]
        },
        {
            id:'ann-35',
            name:'',
            desc:`You take the slip of paper and glance at the number Ann has written down. KL5-5413. It seems vaguely familiar.
            Ann goes to the door and holds it open, inviting your departure with a bittersweet smile.`,
            onBlock: () => {
                if(prevInput === 'leave apartment' || prevInput === 'leave building'){
                    enterRoom('ann-37');
                }else{
                    enterRoom('ann-36');
                }
            },
        },
        {
            id:'ann-36',
            name:'',
            desc:`“John, please, don’t make a scene. Jeff will be here any moment.”\n\nReluctantly you gather up your things and go out the door she is holding open. She watches you go down the stairs and doesn’t close the door until she has heard the door to the main entrance close and knows you are out on the street.`
            //exits back to streets
        },
        {
            id:'ann-37',
            name:'',
            desc:`You say good-bye, gather up your things, and leave. `
            //exits back to streets
        },
    ]
}

//Might be best to make Cecily and Ann into characters to take advantage of onLook function for descriptions needed when the player "looks" at them.