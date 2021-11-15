const sketchbook ={
// A text on the sketchbook item needs to say "Only in Washington Square Park" when it is opened anywhere else but Wash. Sq. Park.
    roomId: 'book-1',
    rooms:[
        {   //First Sketch
            id:'book-1',
            name:'',
            desc:``,
            onEnter: () => {
                println(`You open the sketchpad to the page bearing the hand-lettered sign: \n\nYOUR PORTRAIT
                \n\nIN CHARCOAL\n\n 5.00\n\nYou prop the sketchpad against the back of the bench, assume an artistic expression, and wait for a fish to take the bait. A few people glance your sign as they pass by, but none even slow down. Then there's a nibble\n\nA pair of teenagers, one blonde, the other brunette, comes to a halt some few feet from the bench and confers in whispers. 'Can we see one of your sketches?'`)
            },
            exits:[
                {dir:['yes'],id:'book-2'},
                {dir:['no'],id:'book-3'}
            ]
        },
        {
            id:'book-2',
            name:'',
            desc:`You show them the sketch you'd done of Tony, and they confer again. The brunette seems eager to have you do her portrait, but she hasn't enough money. Reluctantly her friend loans her five dollars. 'Okay,' the brunette says, and sits down stiffly on the edge of the bench to pose. 'But if I don't like it, I don't have to buy it. Okay?' You nod your acquiescence. 'Should i smile?'`,
            exits:[
                {dir:['yes'],id:'book-5'},
                {dir:['no'],id:'book-8'}
            ]
        },
        {
            id:'book-3',
            name:'',
            desc:`Oh, don't be so modest!' the blonde says, taking up your sketchpad with a laugh, and opening it to the sketch you'd done of Tony. 'You did this?' she asks. You nod, and they confer again. The brunette seems eager to have you do her portrait, but she hasn't enough money. Reluctantly her friend loans her five dollars. 'Okay,' the brunette says, and sits down stiffly on the edge of the bench to pose. 'But if I don't like it, I don't have to buy it. Okay?' You nod your acquiescence. 'Should I smile?`,
            exits:[
                {dir:['no'],id:'book-7'},
                {dir:['yes'],id:'book-5'},
                {dir:['take'],id:'book-4'}
            ]
        },
        {
            id:'book-4',
            id:'',
            desc:`You open the sketchpad to a fresh sheet and take a stick of charcoal in your right hand. You consider the features of your sitter.`,
            onBlock: () => {
                if(prevInput === 'draw girl' || 'draw' || 'sketch'){
                    enterRoom('book-6')
                }else{
                    println(`Can you rephrase that please?`)
                }
            }
        },
        {
            id:'book-5',
            name:'',
            desc:``,
            onEnter: () => {
                println(`Yes, smile if you like,' you tell her. At one her face freezes into the grimace such as usually only dentist is given to know. She's ready for you to do her portrait.`);
                pressEnter('book-6')
                
            }
        },
        {
            id:'book-6',
            name:'',
            desc:``,
            onEnter: () => {
                println(`You draw exactly what you see, and the more exact your drawing, the more certain you are that it is not a salable commodity. This girl needs to go to modeling school. Or discover mirrors. Or stop smiling. But you might as well tell a skull to stop grinning. That smile is frozen in place. You finish the drawing, and she asks to see it.`);
                pressEnter('book-7')
            }
        },
        {
            id:'book-7',
            name:'',
            desc:`She reacts to her portrait with a gasp of unbelieving horror -- and rips it out of the sketchpad. Her friend insists on seeing it and bursts into giggles. You politely ask for you $5, and the girl's response is to tear the portrait into pieces and throws them at you. 'You've got some nerve, asking money for that!' the brunette shouts at you. She hurries from the bench, and her friend follows her.`,
            onEnter: () =>{
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'wait'){
                    enterRoom('book-11')
                }else{
                    //player can exit to go spend the money they made returing to the streets.
                }
            }
        },
        {
            id:'book-8',
            name:'',
            desc:``,
            onEnter: () => {
                println(`She complies with a nod, and slowly her face relaxes into an expression of dreamy tranquility. It is the face of an angel. `),
                pressEnter('book-9')
            }

        },
        {
            id:'book-9',
            name:'',
            desc:``,
            onEnter: () => {
                println(`You rapidly sketch the brunette's angelic face, capturing the essence of her dreamy beauty. The result is somewhere between a Raphael and a very expensive Valentine's Day card. You finish the drawing with a flourish, and she asks to see it. `),
                pressEnter('book-11')
            }
        },
        {
            id:'book-10',
            name:'',
            desc:`She reacts to her portrait with an exclamation of pleasure. 'It's wonderful! It looks just like me, doesn't it, Jill?' The blonde takes the sketch. 'Not bad,' she concedes grudgingly. You ask for you $5 and get it -- with a $1.50 tip besides. 'Thanks so much,' the brunette says. 'I'm going to have it framed and give it to my fiance for his birthday.' The two girls leave you, and you remain on the bench, aglow with a sense of professional accomplishment.`,
            onEnter: () =>{
                reenableInput();
            },
            onBlock: () => {
                if(prevInput === 'wait'){
                    enterRoom('book-11')
                }else{
                    //Washington Square Park
                }
            }
        },
        {
            id:'book-11',
            name:'',
            desc:`You open the sketchpad to the page bearing the hand lettered sign:\n\nYOUR PORTRAIT IN CHARCOAL\n\n$10\n\nYou prop the sketchpad against the back of the bench, cross your fingers, and pray that the arts will continue to be supported. Fifteen minutes go by, and so do a hundred or so people, but only a couple of them so much as glance at your sign.
            `,//need to figure out how to keep track of what the last number entered was and how to edit this text to match what the previous number was. Is this going to be to complex to worry about?//
            onBlock: () => {
                if(prevInput === 'Change $10 to $5'){
                    println(`You decide to lower your asking price and methodically erase the numeral 10 and write in its place $5.`)
                }else if(prevInput === 'Change $10 to 15$' || 'Change $10 to 20$'){
                    if(prevInput === 'Change $10 to 15$'){
                        println(`You decide to raise your asking price and methodically erase the numeral 10 and write in its place $15.`)}
                    else{
                        println(`You decide to raise your asking price and methodically erase the numeral 10 and write in its place $20.`)
                    }
                }else{
                    println(`You decide to raise your asking price and methodically erase the numeral 10 and write in its place .`);
                    pressEnter('book-12')
                }
            }

        },
        {
            id:'book-11',
            name:'',
            desc:`A few people glance your sign as they pass by, but none even slow down. `,
            //need to add a function to choose between two random text options and the two random sitters.\
            onEnter: () => {
                pressEnter();{
                randomRoom = () => {
                    roomNumber = Math.floor(Math.random() * 4);
                    if(roomNumber === 1){
                        enterRoom('')
                    }if(roomNumber === 2){
                        enterRoom('')
                    }if(roomNumber === 3){
                        enterRoom('')
                    }if(roomNumber === 4){
                        enterRoom('')
                    }
                  }
                }
            },
            onBlock: () => {
                const room1 = getRoom('book-12');
                const room2 = getRoom('book-18');
                if(room1.visits >=1 && room2.visits >=1){
                    enterRoom('')
                }
            }
        },
        {
            id:'book-12',
            name:'',
            desc:``,
            onEnter: () => {
                println(`You do pore-traits?' a twangy voice inquires, rousing you from a half-doze. You look up into the wizened face of a man wearing a tarboosh-style hat with the emblem of the Fraternal order of Shriners and his hometown embroidered on it -- St. Paul Minnesota. He is dressed in a bright plaid jacket and red Bermuda shorts, and the name badge on the lapel of his jacket says, 'Hi My Name Is Bud!' You assure him you do portraits, and he takes a seat on the bench. 'Well, I could use the rest,' he says with a sigh. 'I tied one on last night. You New Yorkers sure know how to have a good time. Well, what are you waiting for -- do my pore-trait.'`),
                pressEnter('book-13')
            }
        },
        {
            id:'book-13',
            name:'',
            desc:`You begin to do his portrait but have only set down the first few lines defining the volumes of his head when his eyes slowly droop closed and he begins quietly to snore. His head remains erect, and you are able to continue drawing him. The wrinkles present an interesting technical problem but you manage to render them realistically without making him look like a giant prune. Finally only the eyes are left to draw. Should you draw him as he is now, with his eyes closed, or should they be open?`,
            onBlock: () => {
                if(prevInput === 'open' || 'with eyes open'){
                    enterRoom('book-14')
                }else{
                    enterRoom('book-16')
                }
            }
        },
        {
            id:'book-14',
            name:'',
            desc:``,
            onEnter: () => {
                println(`You decide to draw him as though he were awake, but you have difficulty drawing what you can't see. You erase your first attempt, but the second is no better. Before you can start over again, he wakes up, blinks away his confusion, and asks to see what you've done.`),
                pressEnter('book-15')
            }
        },
        {
            id:'book-15',
            name:'',
            desc:``,
            //activates the other portrait scene or activates Bette's Protrait
            OnEnter: () => {
                println(`'What in the hell is this!' he says indignantly. Is this your idea of a practical joke? Well, it's not funny, not funny at all.' He gets up from the bench and totters off in a huff.`)
                pressEnter('book-11')
                Const.room = getRoom(disk.roomId);
                room.visits++ ;
                },
        },
        {
            id:'book-16',
            name:'',
            desc:``,
            onEnter: () => {
                println(`You decide to draw just what you see. The result is a good drawing but rather comical in its effect. As you put in the finishing touches, he wakes up, blinks away his confusion, and asks to see what you've done.`),
                pressEnter('book-17')
            }

        },
        {
            id:'book-17',
            name:'',
            desc:`'`,
            //activates the other portrait scene or Bette's portrait
            OnEnter: () => {
                println(`Why, it looks just like me!' he says admiringly. 'Maybe you went a bit overboard on the wrinkles, but you did the eyes just the way they were! Here's your money,' He takes $5 from his wallet and gives it to you in exchange for the rolled-up sketch. 'Thank you young fella, this will make a fine souvenir of New York City,' he says as he leaves the park.`)
                pressEnter('book-11')
                Const.room = getRoom(disk.roomId);
                room.visits++ ;
                },
        },
        {
            id:'book-18',
            name:'',
            desc:`Finally one of the denizens of Washington Square pauses before your bench to ponder your sign. He is about forty years old, and about that many pounds overweight, and he's dressed like Roy Rogers. His cowboy hat alone must have cost $100 and the deaths of a large family of rabbits. 'Howdy,' he says. 'Think you could do MY portrait, pardner?'`,
            onBlock: () => {
                if(prevInput === 'yes'){
                    enterRoom('book-19')
                }else if(prevInput === 'no' || 'sit down, pardner'){
                    enterRoom('book-20')
                }else{
                    println('Can you rephrase that please?')
                }
            }
        },
        {
            id:'book-19',
            name:'',
            desc:`The urban cowboy takes a seat at the other end of the bench and adjusts the brim of his hat. 'Ya want to have me lookin' right at ya, pardner, or ya want my profile?' he asks.`,
            onBlock: () => {
                if(prevInput === 'right at me'){
                    enterRoom('book-21')
                }else if(prevInput === 'profile'){
                    enterRoom('book-24')
                }else{
                    println('Can you rephrase that please?')
                }
                
            }
        },
        {
            id:'book-20',
            name:'',
            desc:`The urban cowboy considers whether to take this as an insult, then spits neatly at a nearby pigeon, and saunters off in the direction of the chess tables, out of your sight.`,
            OnEnter: () => {
                println(``)
                pressEnter('book-11')
                Const.room = getRoom(disk.roomId);
                room.visits++ ;
                },
        },
        {
            id:'book-21',
            name:'',
            desc:``,
            onEnter: () => {
                println(`He faces you and assumes a poker-faced expression.`),
                pressEnter('book-22')
            }
        },
        {
            id:'book-22',
            name:'',
            desc:``,
            onEnter: () => {
                println(`You decide to draw him warts and all. You do try to make the broad curve of his chin a graceful curve that complements the curve of his Stetson -- though it's no compliment to him. You finish the drawing and he asks to see it.`),
                pressEnter('book-23')
            }
        },
        {
            id:'book-23',
            name:'',
            desc:`His first reaction to your portrait is ill-concealed dismay, but then he picks up the sketchpad to study it more carefully. 'Well, pardner, I could wish I had a different shape of chin, but I reckon that's my own lookout. The drawin' itself ain't half bad. Here.' He peels off a single ten dollar bill from a thick roll. 'Keep the change. Ya look like you can use it.' He takes the sketch and walks off, fingering his flabby chin with a thoughtful expression.`,
            //Next Portrait or Bette's Portrait.
            OnEnter: () => {
                println(``)
                pressEnter('book-11')
                Const.room = getRoom(disk.roomId);
                room.visits++ ;
                },               
        },
        {
            id:'book-24',
            name:'',
            desc:``,
            onEnter: () => {
                println(`He faces the dry fountain at the center of the square, giving you a profile view of his face. You note the well-tended sideburns that extend down to the base of his jaw -- and a double chin that bears no resemblance to Roy Rogers' or any other famous cowboy's.`),
                pressEnter('book-25')
            }
        },
        {
            id:'book-25',
            name:'',
            desc:``,
            onEnter: () => {
                println(`You draw him, concentrating on his hat and his sideburns, and leaving the features of his face as God made them, a bit amorphous and unformed. You do get his hat down pat. You finish the drawing and he asks to see it.`),
                pressEnter('book-26')
            }
        },
        {
            id:'book-26',
            name:'',
            desc:`He reacts to your portrait with a derisive snort. 'Well, pardner, I'll give ya this. Ya can draw hats real purty, but ya got a lot to learn about drawin' faces. Here's for the paper.' he peels off a single dollar bill from a thick roll. 'Adios, pardner, and vaya con dios!' You pocket the dollar bill, chagrined but not angry. You know he was right.`,
            //Bette's portrait or the other portrait.
            OnEnter: () => {
                println(``)
                pressEnter('book-11')
                Const.room = getRoom(disk.roomId);
                room.visits++ ;
                },  
        },
        {
            id:'book-27',
            name:'',
            desc:``,
            onEnter: () => {
                println(`While you are waiting for another customer, you become awake that you are being scrutinized intently by a woman standing some twenty feet away.\n She comes closer. You smile, and that seems to stop her in her tracks.`)
                pressEnter('book-28')
            }
        },
        {
            id:'book-28',
            name:'',
            desc:`You say hello. At your words of greeting, she smiles uncertainly and comes a few steps nearer the bench.\n'You...draw portraits?' she asks in the tone of voice of someone first arriving at Oz.`,
            onEnter: () => {
                reenableInput();
            },
            exits:[
                {dir:['yes'],id:'book-29'},
                {dir:['no'],id:'book-30'}
            ]
        },
        {
            id:'book-29',
            name:'',
            desc:``,
            onEnter: () => {
                println(`She sits at the other end of the bench and regards you wonderingly. 'Very well, then draw me. I will sit here and not says a word.' She takes off the camera that she had been carrying by a strap round her neck and places it beside her on the bench.`);
                pressEnter('book-31')
            }
        },
        {
            id:'book-30',
            name:'',
            desc:``,
            onEnter: () => {
                println(`'But your sign,' she insists, 'says otherwise.' She sits at the other end of the bench and regards you defiantly. 'Draw me! Go ahead. I will sit here and not say a word. Draw me!' She takes off the camera that she had been carrying by a strap round her neck and places it beside her on the bench.`),
                pressEnter('book-31')
            }
        },
        {
            id:'book-31',
            name:'',
            desc:``,
            onEnter: () => {
                println(`You open the sketchpad to a fresh sheet and take the stick of charcoal in your right hand. You notice that your hand is trembling, and that your forehead has broken out in a cold sweat. You look at the woman before you and feel an indescribable sweetness.`),
                pressEnter('book-32')
            }
        },
        {
            id:'room-32',
            name:'',
            desc:``,
            onEnter: () => {
                println(`You place each line upon the paper as carefully as if your life depended on it, as if it were a tightrope on which you were balanced above an abyss. Slowly a likeness forms upon the sheet of paper. But it is no more than that, an amateurish scrawl, and the wild hope that first inspired you begins to fade--\n\n-- the hope that she will see in what you draw the same pale reflection of these extraordinary feelings, this wonderful sweetness that can be, you realize, described -- and by a single word.\n\nThe stick of charcoal snaps in your fingers, and you drop the pad and the charcoal, and at just that moment she bursts into tears. 'John!' she cries aloud. 'Dear living love! It is you! Oh, John, I thought you'd left me. I thought you were dead. But you're alive!'`),
                pressEnter('book-33')
            }
        },
        {
            id:'book-33',
            name:'',
            desc:``,
            onEnter: () => {
                println(`You ask her name.\n\n'My name?' Her delight is clouded with bewilderment. 'It's the same name it's always been, Bette Binet! You don't suppose that I'd have married since...you went away. Where have you been, John? Why didn't you call? I've been so worried. And seeing you like this, drawing portraits on the street. I don't understand.' `),
                pressEnter('book-34')
            }
        },
        {
            id:'book-34',
            name:'',
            desc:``,
            onEnter: () => {
                println(`Without elaborating on all the vicissitudes you've been through, you tell Bette about your amnesia. She is astonished, but not skeptical.\n\n
                She stands up decisively from the bench and slings her camera back around her neck. 'We'll go to the place I've sublet on Gramercy Park. It's only a studio, I'm afraid, and you'll have to sleep on a convertible sofa. It's so strange having to explain all this to you. When I think of all the times that we--' She breaks off, blushing, and then laughs aloud. 'But I'm so happy! Come on--' She holds her hand out to you. 'Let's stroll back to my place.'`)
                pressEnter('book-35')
            }
        },
        {
            id:'book-35',
            name:'',
            desc:``,
            onEnter: () => {
                println(`She takes your hand and leads you from the square. On the way to Gramercy Park Bette dismisses all your questions with her kisses.\n\n
                'What's so wonderful,' she says as you arrive at her address, 'is that you've fallen in love with me at first sight -- for the second time!'`),
                pressEnter('')//enters Noblese Lobby
            }
        }
    ]
}
//notes:
/*Need to add random chance for which of the portraits shows up first.
Need to add block for coming back after meeting Bette.

Need ad an if/else statement to the sketchpad item
if(getRoom.roomid='book-7' || 'book-10'){
    enterRoom('')}
else{
    enterRoom('book-1')
} or something that notes if the player has been to room book-7 or book-10.
*/
