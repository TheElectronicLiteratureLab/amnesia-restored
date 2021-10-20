const corridor1502 = {
    roomId: 'corridor-1502', // Set this to the ID of the room you want the player to start in.
    rooms: [
      {
        id: 'corridor-1502', // Unique identifier for this room. Entering a room will set the disk's roomId to this.
        name: '15th Floor Hallway', // Displayed each time the player enters the room.
        desc: `You are now in a long corridor made to seem still longer by a wallpaper design of continuous horizontal stripes of chocolate brown and dusky orange. To the west, just after the door to your own room, is a door with a lighted EXIT sign above it. On along the corridor to the east the numbers of the rooms increase by increments of one.\n

        Halfway down the corridor there is a branching northward and and an arrow directing you to a bank of elevators. For the moment, the hallway is desered save for a maid's laundry trolley some five doors away and yourself.`,
        removeOnRead: true,
        
        items: [
            {
                name: 'room', // If the player tries to go back to room 1502
                desc: `You are standing in front of the doors to rooms 1502.`,
                onUse: () => {
                    const room1502 = getRoom('corridor-1502');
                    const exit = getExitDir('hote-room-1', room1502.exits);
                    if ((getItemInRoom('roomkey') || getItemInInventory('roomkey'))) {
                      delete exit.block;
                    } else {
                      println('You try to return to your room, but the door locked automatically when it was closed.');
                    }
                  },
            },

        ],
        exits: [
          {
            dir: ['leave', '1502'], 
            id: 'hote-room-1',
            block: 'You try to return to your room, but the door locked automatically when it was closed.'
          },
          {
            dir: ['east', 'right', '1503'], 
            id: 'corridor-1503',
          },
          {
            dir: ['west', 'left', '1501'], 
            id: 'corridor-1501',
          },
          {
            dir: ['elevator'], 
            id: 'corridor-elevator15',
          },
          {
            dir: ['stairwell', 'stairs', 'exit'], 
            id: 'corridor-stairwell15',
          },
        ],
      },
      {
        id: 'corridor-1501',
        name: '15th Floor Hallway',
        desc: `You are standing in the front of the door with the lighted EXIT sign over it. This must be the stairway.`,
        onEnter: () =>{
            const room =getRoom('corridor-1502');
            if((getItemInRoom('towel') || getItemInInventory('towel'))){
                room.desc = `Despite the fact you are not wearing a stitch, you go out into the corridor. You're at one end of it, near a lighted EXIT sign. Facing you is the door to Room 1501. On along the corridor, the numbers of the rooms increase by increments of one. Some five doors away the maid's laundry trolley is parked, but the maid is not in sight. Farther down the corridor an arrow points left toward a bank of elevators.`
            }else{
                room.desc = `Despite the fact you are not wearing a stitch, you go out into the corridor. You're at one end of it, near a lighted EXIT sign. Facing you is the door to Room 1501. On along the corridor, the numbers of the rooms increase by increments of one. Some five doors away the maid's laundry trolley is parked, but the maid is not in sight. Farther down the corridor an arrow points left toward a bank of elevators.`
            }
        },
        exits: [
         {
            dir: ['east', 'right'], 
            id: 'corridor-1502',
         },
         {
            dir: ['west', 'left', 'stairwell', 'exit'], 
            id: 'corridor-stairwell15',
        },
        {
            dir: ['elevator'], 
            id: 'corridor-elevator15',
          },
        ],
      },
      {
        id: 'corridor-1503',
        name: '15th Floor Hallway',
        desc: `To your west is room 1502 and beyond that, the stairway. Right now you are standing in front of the doors to 1503 and 1504.`,
        exits: [
         {
            dir: ['east', 'right'], 
            id: 'corridor-1509',
         },
         {
            dir: ['west', 'left'], 
            id: 'corridor-1502',
        },
        {
            dir: ['stairs', 'stairwell'], 
            id: 'corridor-stairwell15',
        },
        {
            dir: ['elevator'], 
            id: 'corridor-elevator15',
          },
        ],
      },
      {
        id: 'corridor-1509',
        name: '15th Floor Hallway',
        desc: `You are standing in front of the doors to rooms 1509 and 1510. The door to room 1509 stands slightly ajar. Inside you can hear the purr of a vacuum cleaner. The trolley has a single large bed blanket, a stock of supplies, and various bottles, a brush, and a rag for cleaning.`,
        items: [
            {
                name: 'trolley', // If the player tries to go back to room 1502
                desc: `The trolley has a single large bed blanket, a stock of supplies, and various bottles, a brush, and a rag for cleaning.`,
                onUse: () => {
                    const room1502 = getRoom('corridor-1509');
                    const exit = getExitDir('hote-room-1', room1502.exits);
                    if ((getItemInRoom('roomkey') || getItemInInventory('roomkey'))) {
                      delete exit.block;
                    } else {
                      println('You try to return to your room, but the door locked automatically when it was closed.');
                    }
                  },
                   // when player looks at the plant, they discover a shiny object which turns out to be a key
          onLook: () => {
            if (getItemInRoom('towel', 'bedsheet') || getItemInInventory('towel')) {
              // the key is already in the pot or the player's inventory
              println(`You're already wearing a towel.`);
              return;
            }
            const corridor = getRoom('corridor-1509');
            // put the silver key in the pot
            corridor.items.push({
              name: ['towel', 'blanket', 'bed'],
              desc: `The trolley has a single large bed blanket, a stock of supplies, and various bottles, a brush, and a rag for cleaning.`,
              onLook: () => {
                const towel = getItemInInventory('trolley') || getItemInRoom('trolley', '1509');

                // now that we know it's a towel, place that name first so the engine calls it by that name
                towel.name.unshift('towel');

                // let's also update the description
                towel.desc = `A single large bed blanket`;

                // remove this method (we don't need it anymore)
                delete towel.onLook;
              },
              isTakeable: true,
              onTake: () => {
                println(`You took it.`);
                // update the monstera's description, removing everything starting at the line break
                const plant = getItemInRoom('towel');
                plant.desc = plant.desc.slice(0, plant.desc.indexOf('\n'));
              },
              isWearable: true,
            });
          },
            },

        ],
        exits: [
         {
            dir: ['1509', 'room 1509', 'inside'], 
            id: 'corridor-1509inside',
         },
         {
            dir: ['west', 'left', ], 
            id: 'corridor-1503',
        },
        {
            dir: ['elevator', 'east', 'right'], 
            id: 'corridor-elevator15',
          },
        ],
      },
      {
        id: 'corridor-1509inside',
        name: 'Room 1509',
        desc: `You enter room 1509, where the maid who earlier came to clean your own room is busy vacuuming the carpet.

        "Excuse me, sir" she says as she turns off the vacuum. "No one is allowed in empty hotel rooms at the Sunderland except the staff. I'm afraid you'll have to leave.`,
        onEnter: () => {
            pressEnter('corridor-1509outside');
        },
      },
      {
        id: 'corridor-1509outside',
        name: '15th Floor Hallway',
        desc: `Not wishing to make a scene, you quietly withdraw from the room and go back to the hallway. \nYou are standing in front of the doors to rooms 1509 and 1510. The door to room 1509 stands slightly ajar. Inside you can hear the purr of a vacuum cleaner.`,
        onEnter: () => {
            reenableInput();
        },
        exits: [
            {
               dir: ['1509', 'room 1509', 'inside'], 
               id: 'corridor-1509inside',
               block: ''
            },
            {
               dir: ['west', 'left', ], 
               id: 'corridor-1503',
           },
           {
               dir: ['elevator', 'east', 'right'], 
               id: 'corridor-elevator15',
             },
           ],
      },
      {
        id: 'corridor-elevator15',
        name: '15th Floor Hallway',
        desc: `You are down the hall from your room. Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        onEnter: () => {
            const room=getRoom('corridor-elevator15');
            if((!getItemInRoom('towel') || !getItemInInventory('towel'))){
                room.desc`You run down the corridor to where there is a bank of four elevators. Just as you get there the doors of one of the elevators whooshes open, and a women and a bellhop regard you wth expressions of dismay and amusement, respectively. The woman beings to scream. The bellboy reaches forward to press the button that closes the elevator door. Everything seems to happen slowly, as though you were moving under water. You realize that in coming out into the corridor without clothes you have acted irrationally, and now you can't seem to control your actions at all. You stand rooted to the carpet, waiting for the inevitable, which arrives, quite soon, in the form of two uniformed security guards. The guards handcuff you and throw a sheet over your shoulders. Then you are hustled into a utility elevator and taken to a small room in the sub-basement of the hotel, where you are left to wait the arrival of the police. When the police do arrive, there is a small altercation between them and the security guards as to whether you are to be allowed to leave the hotel wrapped in one of its sheets.`,
                goDir('corridor-security');
            };

        },
        exits: [
            {
               dir: ['up', 'down', 'penthouse'], 
               id: 'corridor-elevatorbellboy',
              
            },
            {
               dir: ['west', 'left', ], 
               id: 'corridor-1503',
           },
           {
               dir: ['elevator', 'east', 'right'], 
               id: 'corridor-elevator15',
             },
           ],
      },
      {
        id: 'corridor-elevatorbellboy',
        name: '15th Floor Hallway',
        desc: `You call for the elevator -- and a moment later the doors of one of the elevators whoosh open, and a woman in a floppy hat and a bellboy regard you with expressions of disdain and amusement, respectively. "Really!" the woman protests as you step toward the elevator.

        The bellboy holds up his hand in friendly warning. "We're going down, buddy," he explains. "The gym is up on 20 -- and I'd suggest you use the stairs, until you've got some more clothes." The elevator doors close with a dull chunk.`,
        
        exits: [
            {
               dir: ['up', 'down', 'penthouse'], 
               id: 'corridor-elevator',
            
            },
            {
               dir: ['west', 'left', ], 
               id: 'corridor-1503',
           },
           {
               dir: ['elevator', 'east', 'right'], 
               id: 'corridor-elevator15',
               
             },
           ],
      },
      {
        id: 'corridor-elevator',
        name: 'Elevator',
        desc: `After a short interval an elevator arrives. You enter, and see, by the indicator light that it is going up. There are twenty buttons on the aluminum panel -- the lowest marked L for Lobby, the uppermost PH for PENTHOUSE, and the others numbered 2 through 19.`,
        
        exits: [ // These need to be specified with the press command
            {
                dir: ['l'], // This is the letter L, for lobby
                id: 'corridor-elevatorlobby',
                
             },
            {
               dir: ['2'], 
               id: 'corridor-elevator2',
               
            },
            {
                dir: ['3'], 
                id: 'corridor-elevator3',
                
            },
            {
                dir: ['4'], 
                id: 'corridor-elevator4',
                
            },
            {
                dir: ['5'], 
                id: 'corridor-elevator5',
                
            },
            {
                dir: ['6'], 
                id: 'corridor-elevator6',
                
            },
            {
                dir: ['7'], 
                id: 'corridor-elevator7',
                
            },
            {
                dir: ['8'], 
                id: 'corridor-elevator8',
                
            },
            {
                dir: ['9'], 
                id: 'corridor-elevator9',
                
            },
            {
                dir: ['10'], 
                id: 'corridor-elevator10',
                
            },
            {
                dir: ['11'], 
                id: 'corridor-elevator11',
                
            },
            {
                dir: ['12'], 
                id: 'corridor-elevator12',
                
             },
             {
                 dir: ['13'], 
                 id: 'corridor-elevator13',
                 
             },
             {
                 dir: ['14'], 
                 id: 'corridor-elevator14',
                 
             },
             {
                 dir: ['15'], 
                 id: 'corridor-elevator15',
                 
             },
             {
                 dir: ['16'], 
                 id: 'corridor-elevator16',
                 
             },
             {
                 dir: ['17'], 
                 id: 'corridor-elevator17',
                 
             },
             {
                 dir: ['18'], 
                 id: 'corridor-elevator18',
                 
             },
             {
                 dir: ['19'], 
                 id: 'corridor-elevator19',
                 
             },
             {
                dir: ['ph'], 
                id: 'corridor-elevatorph',
                
            },
           ],
      },
      {
        id: 'corridor-hostileelevator', // Random Event if the player is pressing buttons on the elevator
        name: 'Elevator',
        desc: `The doors close. You wait for something to happen. Nothing happens. You continue to wait, and nothing continues to happen. Clearly, this is a hostile elevator. You push the button marked OPEN DOOR. Zilch.

        The elevator begins to perform a very subdued string-orchestra rendition of "Put on a Happy Face." One of the buttons you still haven't tried is the red button marked ALARM.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['ph',], 
               id: 'corridor-elevatorph',
               
            },
            {
                dir: ['alarm'], 
                id: 'corridor-alarm',
                
            },
           ],
      },
      {
        id: 'corridor-alarm', // Pressing alarm triggers death and texas
        name: 'Elevator',
        desc: `At the first touch of your finger to the red button, a siren begins to wail, and the doors of the elevator open -- to the astonishment of a pair of nuns carrying large canvas suitcases. At this moment, your makeshift costume comes undone and falls to the floor of the elevator. As you stoop to retrieve it, the elevator doors close again, though the siren continues its shrill summons. It is fully five minutes before the doors of the elevator open again, but this time it is not the nuns you confront but two of the hotel's security guards, who have a pair of handcuffs ready. You protest your innocence as they lead you, handcuffed, to the utility elevator, then down to a small room in the sub-basement where you await the arrival of the police to the same Muzak medley that began in the elevator.`,
        
        onEnter: () => {
            pressEnter('deat-1');
        }
      },
      {
        id: 'corridor-elevator2', // Player presses 2
        name: '2nd Floor Hallway',
        desc: `You press the button for 2. After a lurch and some movement, the elevator arrives at the 2nd floor, the doors open, and you walk out into the hallway.

        Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west','left'], 
               id: 'corridor-210',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-212',
                
            },
            {
                dir: ['up','down', 'elevator'], 
                id: 'corridor-elevator',
                
            },
            {
                dir: ['north'], 
                id: 'corridor-215',
                block: 'You cannot go that way.',
                
            },

           ],
      },
      {
        id: 'corridor-212', // Player presses 2
        name: '2nd Floor Hallway',
        desc: `You are now a few steps to the east of the elevators, and are standing in front of rooms 212 and 213. The door to room 213 is ajar.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-210',
               
            },
            {
                dir: ['inside', '213', 'up'], 
                id: 'corridor-213',
                
            },
            {
                dir: ['east','left'], 
                id: 'corridor-214',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-215',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-213', // Player gopes into 213, goes to death and texas/ There is a Room 13 fail state on every floor
        name: 'Room 213',
        desc: `You walk into the room, and almost immediately, a woman walks out of the bathroom still wet from a shower. Dropping her towel, she screams at the top of her lungs.\n Within 15 seconds, two armed security guards are on the scene and don't even bother to ask the woman what you've done. You are whisked to the basement and put in a holding room while the guards discuss the charge of indecent exposure and trespassing with the local authorities.`,
        onEnter: () => {
            pressEnter('deat-1)');
        },
      },
      {
        id: 'corridor-214', // 
        name: '2nd Floor Hallway',
        desc: `To the east is the end of the hallway, and on either side of you are the doors to rooms 214 and 215.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-212',
               
            },
            {
                dir: ['inside', '213', 'up'], 
                id: 'corridor-213',
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-2end',
                
            },
            {
                dir: ['214', '215'], 
                id: 'corridor-315',
                block: 'The door is locked',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-215',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-2end', // End of the hallway
        name: '2nd Floor Hallway',
        desc: `You are at the easterly end of the hallway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-214',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-2end',
                lock: 'You cannot go that way.',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-215',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      
      {
        id: 'corridor-210', 
        name: '2nd Floor Hallway',
        desc: `You are standing in front of the doors to rooms 209 and 210.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-208',
               
            },
            {
                dir: ['inside', '209', '210' ,'up'], 
                id: 'corridor-210',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-212',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-210',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-208', 
        name: '2nd Floor Hallway',
        desc: `You are standing betwixt rooms 207 and 208`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-204',
               
            },
            {
                dir: ['inside', '207', '208' ,'up'], 
                id: 'corridor-208',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-210',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-210',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-204', 
        name: '2nd Floor Hallway',
        desc: `To your west are the doors for rooms 204 through 201, and beyond them, the stairway. Right now, you are standing in front of the doors to 203 and 204.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-stairwell2',
               
            },
            {
                dir: ['inside', '204', '203', '202', '201' ,'up'], 
                id: 'corridor-204',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-208',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-204',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-stairwell2', 
        name: '2nd Floor Hallway',
        desc: `You are standing just down from the stairway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left' ,'inside', 'stairs' , 'stairwell' ], 
               id: 'corridor-stairwell15',
               
            },
            {
                dir: ['inside',  ,'up'], 
                id: 'corridor-stairwell2',
                block: "Your're still outside the stairwell."
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-204',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-204',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-elevator3', // Player presses 3
        name: '3rd Floor Hallway',
        desc: `You press the button for 3. After a lurch and some movement, the elevator arrives at the 3rd floor, the doors open, and you walk out into the hallway.

        Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west','left'], 
               id: 'corridor-310',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-312',
                
            },
            {
                dir: ['up','down', 'elevator'], 
                id: 'corridor-elevator',
                
            },
            {
                dir: ['north'], 
                id: 'corridor-315',
                block: 'You cannot go that way.',
                
            },

           ],
      },
      {
        id: 'corridor-312', 
        name: '3rd Floor Hallway',
        desc: `You are now a few steps to the east of the elevators, and are standing in front of rooms 312 and 313. The door to room 313 is ajar.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-310',
               
            },
            {
                dir: ['inside', '313', 'up'], 
                id: 'corridor-313',
                
            },
            {
                dir: ['east','left'], 
                id: 'corridor-314',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-315',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-313', // Player goes into 313, goes to death and texas/ There is a Room 13 fail state on every floor
        name: 'Room 313',
        desc: `You walk into the room, and almost immediately, a woman walks out of the bathroom still wet from a shower. Dropping her towel, she screams at the top of her lungs.\n Within 15 seconds, two armed security guards are on the scene and don't even bother to ask the woman what you've done. You are whisked to the basement and put in a holding room while the guards discuss the charge of indecent exposure and trespassing with the local authorities.`,
        onEnter: () => {
            pressEnter('deat-1)');
        },
      },
      {
        id: 'corridor-314', // 
        name: '3rd Floor Hallway',
        desc: `To the east is the end of the hallway, and on either side of you are the doors to rooms 314 and 315.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-312',
               
            },
            {
                dir: ['inside', '313', 'up'], 
                id: 'corridor-313',
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-3end',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-315',
                block: 'You cannot go that way.',
                
            },
            {
                dir: ['314', '315'], 
                id: 'corridor-315',
                block: 'The door is locked',
                
            },
           ],
           
      },
      {
        id: 'corridor-3end', // End of the hallway
        name: '3rd Floor Hallway',
        desc: `You are at the easterly end of the hallway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-314',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-3end',
                lock: 'You cannot go that way.',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-315',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      
      {
        id: 'corridor-310', 
        name: '3rd Floor Hallway',
        desc: `You are standing in front of the doors to rooms 309 and 310.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-308',
               
            },
            {
                dir: ['inside', '309', '310' ,'up'], 
                id: 'corridor-310',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-312',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-310',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-308', 
        name: '3rd Floor Hallway',
        desc: `You are standing betwixt rooms 307 and 308`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-304',
               
            },
            {
                dir: ['inside', '307', '308' ,'up'], 
                id: 'corridor-308',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-310',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-310',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-304', 
        name: '3nd Floor Hallway',
        desc: `To your west are the doors for rooms 304 through 301, and beyond them, the stairway. Right now, you are standing in front of the doors to 303 and 304.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-stairwell3',
               
            },
            {
                dir: ['inside', '304', '303', '302', '301' ,'up'], 
                id: 'corridor-304',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-308',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-304',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-stairwell3', 
        name: '3rd Floor Hallway',
        desc: `You are standing just down from the stairway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left' ,'inside', 'stairs' , 'stairwell' ], 
               id: 'corridor-stairwell15',
               
            },
            {
                dir: ['inside',  ,'up'], 
                id: 'corridor-stairwell3',
                block: "Your're still outside the stairwell."
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-304',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-304',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-elevator4', // Player presses 4
        name: '4th Floor Hallway',
        desc: `You press the button for 4. After a lurch and some movement, the elevator arrives at the 4th floor, the doors open, and you walk out into the hallway.

        Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west','left'], 
               id: 'corridor-410',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-412',
                
            },
            {
                dir: ['up','down', 'elevator'], 
                id: 'corridor-elevator',
                
            },
            {
                dir: ['north'], 
                id: 'corridor-415',
                block: 'You cannot go that way.',
                
            },

           ],
      },
      {
        id: 'corridor-412', 
        name: '4th Floor Hallway',
        desc: `You are now a few steps to the east of the elevators, and are standing in front of rooms 412 and 413. The door to room 413 is ajar.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-410',
               
            },
            {
                dir: ['inside', '413', 'up'], 
                id: 'corridor-413',
                
            },
            {
                dir: ['east','left'], 
                id: 'corridor-414',
                
            },
            {
                dir: ['414', '415'], 
                id: 'corridor-315',
                block: 'The door is locked',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-415',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-413', // Player gopes into 213, goes to death and texas/ There is a Room 13 fail state on every floor
        name: 'Room 413',
        desc: `You walk into the room, and almost immediately, a woman walks out of the bathroom still wet from a shower. Dropping her towel, she screams at the top of her lungs.\n Within 15 seconds, two armed security guards are on the scene and don't even bother to ask the woman what you've done. You are whisked to the basement and put in a holding room while the guards discuss the charge of indecent exposure and trespassing with the local authorities.`,
        onEnter: () => {
            pressEnter('deat-1)');
        },
      },
      {
        id: 'corridor-414', // 
        name: '4th Floor Hallway',
        desc: `To the east is the end of the hallway, and on either side of you are the doors to rooms 414 and 415.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-412',
               
            },
            {
                dir: ['inside', '413', 'up'], 
                id: 'corridor-413',
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-4end',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-415',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-4end', // End of the hallway
        name: '4th Floor Hallway',
        desc: `You are at the easterly end of the hallway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-414',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-4end',
                lock: 'You cannot go that way.',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-415',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      
      {
        id: 'corridor-410', 
        name: '4th Floor Hallway',
        desc: `You are standing in front of the doors to rooms 409 and 410.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-408',
               
            },
            {
                dir: ['inside', '409', '410' ,'up'], 
                id: 'corridor-410',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-412',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-410',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-408', 
        name: '4th Floor Hallway',
        desc: `You are standing betwixt rooms 407 and 408`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-404',
               
            },
            {
                dir: ['inside', '407', '408' ,'up'], 
                id: 'corridor-408',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-410',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-410',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-404', 
        name: '4th Floor Hallway',
        desc: `To your west are the doors for rooms 404 through 401, and beyond them, the stairway. Right now, you are standing in front of the doors to 403 and 404.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-stairwell4',
               
            },
            {
                dir: ['inside', '404', '403', '402', '401' ,'up'], 
                id: 'corridor-404',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-408',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-404',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-stairwell4', 
        name: '4th Floor Hallway',
        desc: `You are standing just down from the stairway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left' ,'inside', 'stairs' , 'stairwell' ], 
               id: 'corridor-stairwell15',
               
            },
            {
                dir: ['inside',  ,'up'], 
                id: 'corridor-stairwell4',
                block: "Your're still outside the stairwell."
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-404',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-404',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-elevator5', // Player presses 5
        name: '5th Floor Hallway',
        desc: `You press the button for 5. After a lurch and some movement, the elevator arrives at the 5th floor, the doors open, and you walk out into the hallway.

        Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west','left'], 
               id: 'corridor-510',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-512',
                
            },
            {
                dir: ['up','down', 'elevator'], 
                id: 'corridor-elevator',
                
            },
            {
                dir: ['north'], 
                id: 'corridor-515',
                block: 'You cannot go that way.',
                
            },

           ],
      },
      {
        id: 'corridor-512', 
        name: '5th Floor Hallway',
        desc: `You are now a few steps to the east of the elevators, and are standing in front of rooms 512 and 513. The door to room 513 is ajar.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-510',
               
            },
            {
                dir: ['inside', '453', 'up'], 
                id: 'corridor-513',
                
            },
            {
                dir: ['east','left'], 
                id: 'corridor-514',
                
            },
            {
                dir: ['514', '515'], 
                id: 'corridor-515',
                block: 'The door is locked',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-515',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-513', // Player gopes into 213, goes to death and texas/ There is a Room 13 fail state on every floor
        name: 'Room 513',
        desc: `You walk into the room, and almost immediately, a woman walks out of the bathroom still wet from a shower. Dropping her towel, she screams at the top of her lungs.\n Within 15 seconds, two armed security guards are on the scene and don't even bother to ask the woman what you've done. You are whisked to the basement and put in a holding room while the guards discuss the charge of indecent exposure and trespassing with the local authorities.`,
        onEnter: () => {
            pressEnter('deat-1)');
        },
      },
      {
        id: 'corridor-514', // 
        name: '5th Floor Hallway',
        desc: `To the east is the end of the hallway, and on either side of you are the doors to rooms 514 and 515.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-512',
               
            },
            {
                dir: ['inside', '513', 'up'], 
                id: 'corridor-513',
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-5end',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-515',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-5end', // End of the hallway
        name: '5th Floor Hallway',
        desc: `You are at the easterly end of the hallway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-514',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-5end',
                lock: 'You cannot go that way.',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-515',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      
      {
        id: 'corridor-510', 
        name: '5th Floor Hallway',
        desc: `You are standing in front of the doors to rooms 509 and 510.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-508',
               
            },
            {
                dir: ['inside', '509', '510' ,'up'], 
                id: 'corridor-510',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-512',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-510',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-508', 
        name: '5th Floor Hallway',
        desc: `You are standing betwixt rooms 507 and 508`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-504',
               
            },
            {
                dir: ['inside', '507', '508' ,'up'], 
                id: 'corridor-508',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-510',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-510',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-504', 
        name: '5th Floor Hallway',
        desc: `To your west are the doors for rooms 504 through 501, and beyond them, the stairway. Right now, you are standing in front of the doors to 503 and 504.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-stairwell5',
               
            },
            {
                dir: ['inside', '504', '503', '502', '501' ,'up'], 
                id: 'corridor-504',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-508',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-504',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-stairwell5', 
        name: '5th Floor Hallway',
        desc: `You are standing just down from the stairway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left' ,'inside', 'stairs' , 'stairwell' ], 
               id: 'corridor-stairwell15',
               
            },
            {
                dir: ['inside',  ,'up'], 
                id: 'corridor-stairwell5',
                block: "Your're still outside the stairwell."
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-504',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-504',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-elevator6', // Player presses 6
        name: '6th Floor Hallway',
        desc: `You press the button for 6. After a lurch and some movement, the elevator arrives at the 6th floor, the doors open, and you walk out into the hallway.

        Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west','left'], 
               id: 'corridor-610',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-612',
                
            },
            {
                dir: ['up','down', 'elevator'], 
                id: 'corridor-elevator',
                
            },
            {
                dir: ['north'], 
                id: 'corridor-615',
                block: 'You cannot go that way.',
                
            },

           ],
      },
      {
        id: 'corridor-612', 
        name: '6th Floor Hallway',
        desc: `You are now a few steps to the east of the elevators, and are standing in front of rooms 612 and 613. The door to room 613 is ajar.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-610',
               
            },
            {
                dir: ['inside', '613', 'up'], 
                id: 'corridor-613',
                
            },
            {
                dir: ['east','left'], 
                id: 'corridor-614',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-615',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-613', // Player gopes into 613, goes to death and texas/ There is a Room 13 fail state on every floor
        name: 'Room 613',
        desc: `You walk into the room, and almost immediately, a woman walks out of the bathroom still wet from a shower. Dropping her towel, she screams at the top of her lungs.\n Within 15 seconds, two armed security guards are on the scene and don't even bother to ask the woman what you've done. You are whisked to the basement and put in a holding room while the guards discuss the charge of indecent exposure and trespassing with the local authorities.`,
        onEnter: () => {
            pressEnter('deat-1)');
        },
      },
      {
        id: 'corridor-614', // 
        name: '6th Floor Hallway',
        desc: `To the east is the end of the hallway, and on either side of you are the doors to rooms 614 and 615.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-612',
               
            },
            {
                dir: ['inside', '613', 'up'], 
                id: 'corridor-613',
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-6end',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-615',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-6end', // End of the hallway
        name: '6th Floor Hallway',
        desc: `You are at the easterly end of the hallway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-614',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-6end',
                lock: 'You cannot go that way.',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-6end',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      
      {
        id: 'corridor-610', 
        name: '6th Floor Hallway',
        desc: `You are standing in front of the doors to rooms 609 and 610.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-608',
               
            },
            {
                dir: ['inside', '609', '610' ,'up'], 
                id: 'corridor-610',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-612',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-610',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-608', 
        name: '6th Floor Hallway',
        desc: `You are standing betwixt rooms 607 and 608`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-604',
               
            },
            {
                dir: ['inside', '607', '608' ,'up'], 
                id: 'corridor-608',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-610',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-610',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-604', 
        name: '6th Floor Hallway',
        desc: `To your west are the doors for rooms 604 through 601, and beyond them, the stairway. Right now, you are standing in front of the doors to 603 and 604.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-stairwell6',
               
            },
            {
                dir: ['inside', '604', '603', '602', '601' ,'up'], 
                id: 'corridor-604',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-608',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-604',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-stairwell6', 
        name: '6th Floor Hallway',
        desc: `You are standing just down from the stairway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left' ,'inside', 'stairs' , 'stairwell' ], 
               id: 'corridor-stairwell15',
               
            },
            {
                dir: ['inside', 'up'], 
                id: 'corridor-stairwell6',
                block: "Your're still outside the stairwell."
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-604',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-604',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-elevator7', // Player presses 7
        name: '7th Floor Hallway',
        desc: `You press the button for 7. After a lurch and some movement, the elevator arrives at the 7th floor, the doors open, and you walk out into the hallway.

        Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west','left'], 
               id: 'corridor-710',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-712',
                
            },
            {
                dir: ['up','down', 'elevator'], 
                id: 'corridor-elevator',
                
            },
            {
                dir: ['north'], 
                id: 'corridor-715',
                block: 'You cannot go that way.',
                
            },

           ],
      },
      {
        id: 'corridor-712', 
        name: '7th Floor Hallway',
        desc: `You are now a few steps to the east of the elevators, and are standing in front of rooms 712 and 713. The door to room 713 is ajar.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-710',
               
            },
            {
                dir: ['inside', '713', 'up'], 
                id: 'corridor-713',
                
            },
            {
                dir: ['east','left'], 
                id: 'corridor-714',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-715',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-713', // Player gopes into 713, goes to death and texas/ There is a Room 13 fail state on every floor
        name: 'Room 713',
        desc: `You walk into the room, and almost immediately, a woman walks out of the bathroom still wet from a shower. Dropping her towel, she screams at the top of her lungs.\n Within 15 seconds, two armed security guards are on the scene and don't even bother to ask the woman what you've done. You are whisked to the basement and put in a holding room while the guards discuss the charge of indecent exposure and trespassing with the local authorities.`,
        onEnter: () => {
            pressEnter('deat-1)');
        },
      },
      {
        id: 'corridor-714', // 
        name: '7th Floor Hallway',
        desc: `To the east is the end of the hallway, and on either side of you are the doors to rooms 714 and 715.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-712',
               
            },
            {
                dir: ['inside', '713', 'up'], 
                id: 'corridor-713',
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-7end',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-715',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-7end', // End of the hallway
        name: '7th Floor Hallway',
        desc: `You are at the easterly end of the hallway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-714',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-7end',
                lock: 'You cannot go that way.',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-7end',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      
      {
        id: 'corridor-710', 
        name: '7th Floor Hallway',
        desc: `You are standing in front of the doors to rooms 709 and 710.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-708',
               
            },
            {
                dir: ['inside', '709', '710' ,'up'], 
                id: 'corridor-710',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-712',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-710',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-708', 
        name: '7th Floor Hallway',
        desc: `You are standing betwixt rooms 707 and 708`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-704',
               
            },
            {
                dir: ['inside', '707', '708' ,'up'], 
                id: 'corridor-708',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-710',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-710',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-704', 
        name: '7th Floor Hallway',
        desc: `To your west are the doors for rooms 604 through 601, and beyond them, the stairway. Right now, you are standing in front of the doors to 703 and 704.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-stairwell7',
               
            },
            {
                dir: ['inside', '704', '703', '702', '701' ,'up'], 
                id: 'corridor-674',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-708',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-704',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-stairwell7', 
        name: '7th Floor Hallway',
        desc: `You are standing just down from the stairway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left' ,'inside', 'stairs' , 'stairwell' ], 
               id: 'corridor-stairwell15',
               
            },
            {
                dir: ['inside', 'up'], 
                id: 'corridor-stairwell7',
                block: "Your're still outside the stairwell."
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-704',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-704',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-elevator8', // Player presses 8
        name: '8th Floor Hallway',
        desc: `You press the button for 8. After a lurch and some movement, the elevator arrives at the 8th floor, the doors open, and you walk out into the hallway.

        Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west','left'], 
               id: 'corridor-810',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-812',
                
            },
            {
                dir: ['up','down', 'elevator'], 
                id: 'corridor-elevator',
                
            },
            {
                dir: ['north'], 
                id: 'corridor-815',
                block: 'You cannot go that way.',
                
            },

           ],
      },
      {
        id: 'corridor-812', 
        name: '8th Floor Hallway',
        desc: `You are now a few steps to the east of the elevators, and are standing in front of rooms 812 and 813. The door to room 813 is ajar.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-810',
               
            },
            {
                dir: ['inside', '813', 'up'], 
                id: 'corridor-813',
                
            },
            {
                dir: ['east','left'], 
                id: 'corridor-814',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-815',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-813', // Player gopes into 813, goes to death and texas/ There is a Room 13 fail state on every floor
        name: 'Room 813',
        desc: `You walk into the room, and almost immediately, a woman walks out of the bathroom still wet from a shower. Dropping her towel, she screams at the top of her lungs.\n Within 15 seconds, two armed security guards are on the scene and don't even bother to ask the woman what you've done. You are whisked to the basement and put in a holding room while the guards discuss the charge of indecent exposure and trespassing with the local authorities.`,
        onEnter: () => {
            pressEnter('deat-1)');
        },
      },
      {
        id: 'corridor-814', // 
        name: '8th Floor Hallway',
        desc: `To the east is the end of the hallway, and on either side of you are the doors to rooms 814 and 815.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-812',
               
            },
            {
                dir: ['inside', '813', 'up'], 
                id: 'corridor-813',
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-8end',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-815',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-8end', // End of the hallway
        name: '8th Floor Hallway',
        desc: `You are at the easterly end of the hallway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-814',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-8end',
                lock: 'You cannot go that way.',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-8end',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      
      {
        id: 'corridor-810', 
        name: '8th Floor Hallway',
        desc: `You are standing in front of the doors to rooms 809 and 810.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-808',
               
            },
            {
                dir: ['inside', '809', '810' ,'up'], 
                id: 'corridor-810',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-812',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-810',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-808', 
        name: '8th Floor Hallway',
        desc: `You are standing betwixt rooms 807 and 808`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-804',
               
            },
            {
                dir: ['inside', '807', '808' ,'up'], 
                id: 'corridor-808',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-810',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-810',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-804', 
        name: '8th Floor Hallway',
        desc: `To your west are the doors for rooms 804 through 801, and beyond them, the stairway. Right now, you are standing in front of the doors to 803 and 804.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-stairwell8',
               
            },
            {
                dir: ['inside', '804', '803', '802', '801' ,'up'], 
                id: 'corridor-874',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-808',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-804',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-stairwell8', 
        name: '8th Floor Hallway',
        desc: `You are standing just down from the stairway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left' ,'inside', 'stairs' , 'stairwell' ], 
               id: 'corridor-stairwell15',
               
            },
            {
                dir: ['inside', 'up'], 
                id: 'corridor-stairwell8',
                block: "Your're still outside the stairwell."
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-804',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-804',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-elevator9', // Player presses 9
        name: '9th Floor Hallway',
        desc: `You press the button for 9. After a lurch and some movement, the elevator arrives at the 9th floor, the doors open, and you walk out into the hallway.

        Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west','left'], 
               id: 'corridor-910',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-912',
                
            },
            {
                dir: ['up','down', 'elevator'], 
                id: 'corridor-elevator',
                
            },
            {
                dir: ['north'], 
                id: 'corridor-915',
                block: 'You cannot go that way.',
                
            },

           ],
      },
      {
        id: 'corridor-912', 
        name: '9th Floor Hallway',
        desc: `You are now a few steps to the east of the elevators, and are standing in front of rooms 912 and 913. The door to room 913 is ajar.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-910',
               
            },
            {
                dir: ['inside', '913', 'up'], 
                id: 'corridor-913',
                
            },
            {
                dir: ['east','left'], 
                id: 'corridor-914',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-915',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-913', // Player gopes into 913, goes to death and texas/ There is a Room 13 fail state on every floor
        name: 'Room 913',
        desc: `You walk into the room, and almost immediately, a woman walks out of the bathroom still wet from a shower. Dropping her towel, she screams at the top of her lungs.\n Within 15 seconds, two armed security guards are on the scene and don't even bother to ask the woman what you've done. You are whisked to the basement and put in a holding room while the guards discuss the charge of indecent exposure and trespassing with the local authorities.`,
        onEnter: () => {
            pressEnter('deat-1)');
        },
      },
      {
        id: 'corridor-914', // 
        name: '9th Floor Hallway',
        desc: `To the east is the end of the hallway, and on either side of you are the doors to rooms 914 and 915.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-912',
               
            },
            {
                dir: ['inside', '713', 'up'], 
                id: 'corridor-913',
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-9end',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-915',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-9end', // End of the hallway
        name: '9th Floor Hallway',
        desc: `You are at the easterly end of the hallway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-914',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-9end',
                lock: 'You cannot go that way.',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-9end',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      
      {
        id: 'corridor-910', 
        name: '9th Floor Hallway',
        desc: `You are standing in front of the doors to rooms 909 and 910.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-908',
               
            },
            {
                dir: ['inside', '909', '910' ,'up'], 
                id: 'corridor-910',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-912',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-910',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-908', 
        name: '9th Floor Hallway',
        desc: `You are standing betwixt rooms 907 and 908`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-904',
               
            },
            {
                dir: ['inside', '907', '908' ,'up'], 
                id: 'corridor-908',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-910',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-910',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-904', 
        name: '9th Floor Hallway',
        desc: `To your west are the doors for rooms 904 through 901, and beyond them, the stairway. Right now, you are standing in front of the doors to 903 and 904.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-stairwell9',
               
            },
            {
                dir: ['inside', '904', '903', '902', '901' ,'up'], 
                id: 'corridor-904',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-908',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-904',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-stairwell9', 
        name: '9th Floor Hallway',
        desc: `You are standing just down from the stairway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left' ,'inside', 'stairs' , 'stairwell' ], 
               id: 'corridor-stairwell15',
               
            },
            {
                dir: ['inside', 'up'], 
                id: 'corridor-stairwell9',
                block: "Your're still outside the stairwell."
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-904',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-904',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-elevator10', // Player presses 10
        name: '10th Floor Hallway',
        desc: `You press the button for 10. After a lurch and some movement, the elevator arrives at the 10th floor, the doors open, and you walk out into the hallway.

        Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west','left'], 
               id: 'corridor-1010',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1012',
                
            },
            {
                dir: ['up','down', 'elevator'], 
                id: 'corridor-elevator',
                
            },
            {
                dir: ['north'], 
                id: 'corridor-1015',
                block: 'You cannot go that way.',
                
            },

           ],
      },
      {
        id: 'corridor-1012', 
        name: '10th Floor Hallway',
        desc: `You are now a few steps to the east of the elevators, and are standing in front of rooms 1012 and 1013. The door to room 1013 is ajar.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1010',
               
            },
            {
                dir: ['inside', '613', 'up'], 
                id: 'corridor-1013',
                
            },
            {
                dir: ['east','left'], 
                id: 'corridor-1014',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1015',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1013', // Player gopes into 713, goes to death and texas/ There is a Room 13 fail state on every floor
        name: 'Room 1013',
        desc: `You walk into the room, and almost immediately, a woman walks out of the bathroom still wet from a shower. Dropping her towel, she screams at the top of her lungs.\n Within 15 seconds, two armed security guards are on the scene and don't even bother to ask the woman what you've done. You are whisked to the basement and put in a holding room while the guards discuss the charge of indecent exposure and trespassing with the local authorities.`,
        onEnter: () => {
            pressEnter('deat-1)');
        },
      },
      {
        id: 'corridor-1014', // 
        name: '10th Floor Hallway',
        desc: `To the east is the end of the hallway, and on either side of you are the doors to rooms 1014 and 1015.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1012',
               
            },
            {
                dir: ['inside', '1013', 'up'], 
                id: 'corridor-1013',
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-10end',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1015',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-10end', // End of the hallway
        name: '10th Floor Hallway',
        desc: `You are at the easterly end of the hallway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1014',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-10end',
                lock: 'You cannot go that way.',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-10end',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      
      {
        id: 'corridor-1010', 
        name: '10th Floor Hallway',
        desc: `You are standing in front of the doors to rooms 1009 and 1010.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1008',
               
            },
            {
                dir: ['inside', '1009', '1010' ,'up'], 
                id: 'corridor-1010',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1012',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1010',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-708', 
        name: '10th Floor Hallway',
        desc: `You are standing betwixt rooms 1007 and 1008`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1004',
               
            },
            {
                dir: ['inside', '1007', '1008' ,'up'], 
                id: 'corridor-1008',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1010',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1010',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1004', 
        name: '10th Floor Hallway',
        desc: `To your west are the doors for rooms 604 through 601, and beyond them, the stairway. Right now, you are standing in front of the doors to 1003 and 1004.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-stairwell10',
               
            },
            {
                dir: ['inside', '1004', '1003', '1002', '1001' ,'up'], 
                id: 'corridor-1074',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1008',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1004',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-stairwell10', 
        name: '10th Floor Hallway',
        desc: `You are standing just down from the stairway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left' ,'inside', 'stairs' , 'stairwell' ], 
               id: 'corridor-stairwell15',
               
            },
            {
                dir: ['inside', 'up'], 
                id: 'corridor-stairwell10',
                block: "Your're still outside the stairwell."
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1004',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1004',
                block: 'You cannot go that way.',
                
            },

           ],
           
      }, // FLOORS 11-19 ****************************************************************
      {
        id: 'corridor-elevator11', // Player presses 11
        name: '11th Floor Hallway',
        desc: `You press the button for 11. After a lurch and some movement, the elevator arrives at the 11thd floor, the doors open, and you walk out into the hallway.

        Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west','left'], 
               id: 'corridor-1110',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1112',
                
            },
            {
                dir: ['up','down', 'elevator'], 
                id: 'corridor-elevator',
                
            },
            {
                dir: ['north'], 
                id: 'corridor-1115',
                block: 'You cannot go that way.',
                
            },

           ],
      },
      {
        id: 'corridor-1112', // Player presses 2
        name: '11th Floor Hallway',
        desc: `You are now a few steps to the east of the elevators, and are standing in front of rooms 1112 and 1113. The door to room 1113 is ajar.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1110',
               
            },
            {
                dir: ['inside', '1113', 'up'], 
                id: 'corridor-1113',
                
            },
            {
                dir: ['east','left'], 
                id: 'corridor-1114',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1115',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1113', // Player goes into 1113, goes to death and texas/ There is a Room 13 fail state on every floor
        name: 'Room 1113',
        desc: `You walk into the room, and almost immediately, a woman walks out of the bathroom still wet from a shower. Dropping her towel, she screams at the top of her lungs.\n Within 15 seconds, two armed security guards are on the scene and don't even bother to ask the woman what you've done. You are whisked to the basement and put in a holding room while the guards discuss the charge of indecent exposure and trespassing with the local authorities.`,
        onEnter: () => {
            pressEnter('deat-1)');
        },
      },
      {
        id: 'corridor-1114', // 
        name: '11th Floor Hallway',
        desc: `To the east is the end of the hallway, and on either side of you are the doors to rooms 1114 and 1115.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1112',
               
            },
            {
                dir: ['inside', '1113', 'up'], 
                id: 'corridor-1113',
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-11end',
                
            },
            {
                dir: ['1114', '1115'], 
                id: 'corridor-1115',
                block: 'The door is locked',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1115',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-11end', // End of the hallway
        name: '11th Floor Hallway',
        desc: `You are at the easterly end of the hallway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1114',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-11end',
                lock: 'You cannot go that way.',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1115',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      
      {
        id: 'corridor-1110', 
        name: '2nd Floor Hallway',
        desc: `You are standing in front of the doors to rooms 1109 and 1110.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1108',
               
            },
            {
                dir: ['inside', '1109', '1110' ,'up'], 
                id: 'corridor-1110',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1112',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1110',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1108', 
        name: '11th Floor Hallway',
        desc: `You are standing betwixt rooms 1107 and 1108`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1104',
               
            },
            {
                dir: ['inside', '1107', '1108' ,'up'], 
                id: 'corridor-1108',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1110',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-210',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1104', 
        name: '11th Floor Hallway',
        desc: `To your west are the doors for rooms 1104 through 1101, and beyond them, the stairway. Right now, you are standing in front of the doors to 1103 and 1104.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-stairwell11',
               
            },
            {
                dir: ['inside', '1104', '1103', '1102', '1101' ,'up'], 
                id: 'corridor-1104',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1108',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1104',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-stairwell11', 
        name: '11th Floor Hallway',
        desc: `You are standing just down from the stairway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left' ,'inside', 'stairs' , 'stairwell' ], 
               id: 'corridor-stairwell15',
               
            },
            {
                dir: ['inside',  ,'up'], 
                id: 'corridor-stairwell11',
                block: "Your're still outside the stairwell."
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1104',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1104',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-elevator12', // Player presses 12
        name: '12th Floor Hallway',
        desc: `You press the button for 2. After a lurch and some movement, the elevator arrives at the 12th floor, the doors open, and you walk out into the hallway.

        Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west','left'], 
               id: 'corridor-1210',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1212',
                
            },
            {
                dir: ['up','down', 'elevator'], 
                id: 'corridor-elevator',
                
            },
            {
                dir: ['north'], 
                id: 'corridor-1215',
                block: 'You cannot go that way.',
                
            },

           ],
      },
      {
        id: 'corridor-1212', // Player presses 2
        name: '12th Floor Hallway',
        desc: `You are now a few steps to the east of the elevators, and are standing in front of rooms 1212 and 1213. The door to room 1213 is ajar.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1210',
               
            },
            {
                dir: ['inside', '213', 'up'], 
                id: 'corridor-1213',
                
            },
            {
                dir: ['east','left'], 
                id: 'corridor-1214',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1215',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1213', // Player gopes into 213, goes to death and texas/ There is a Room 13 fail state on every floor
        name: 'Room 1213',
        desc: `You walk into the room, and almost immediately, a woman walks out of the bathroom still wet from a shower. Dropping her towel, she screams at the top of her lungs.\n Within 15 seconds, two armed security guards are on the scene and don't even bother to ask the woman what you've done. You are whisked to the basement and put in a holding room while the guards discuss the charge of indecent exposure and trespassing with the local authorities.`,
        onEnter: () => {
            pressEnter('deat-1)');
        },
      },
      {
        id: 'corridor-1214', // 
        name: '12nd Floor Hallway',
        desc: `To the east is the end of the hallway, and on either side of you are the doors to rooms 1214 and 1215.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1212',
               
            },
            {
                dir: ['inside', '1213', 'up'], 
                id: 'corridor-1213',
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-12end',
                
            },
            {
                dir: ['1214', '1215'], 
                id: 'corridor-1215',
                block: 'The door is locked',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1215',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-12end', // End of the hallway
        name: '12th Floor Hallway',
        desc: `You are at the easterly end of the hallway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1214',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-12end',
                lock: 'You cannot go that way.',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1215',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      
      {
        id: 'corridor-1210', 
        name: '12th Floor Hallway',
        desc: `You are standing in front of the doors to rooms 1209 and 1210.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1208',
               
            },
            {
                dir: ['inside', '1209', '1210' ,'up'], 
                id: 'corridor-1210',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1212',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1210',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1208', 
        name: '12th Floor Hallway',
        desc: `You are standing betwixt rooms 1207 and 1208`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1204',
               
            },
            {
                dir: ['inside', '1207', '1208' ,'up'], 
                id: 'corridor-1208',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1210',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1210',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1204', 
        name: '12th Floor Hallway',
        desc: `To your west are the doors for rooms 1204 through 1201, and beyond them, the stairway. Right now, you are standing in front of the doors to 1203 and 1204.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-stairwell12',
               
            },
            {
                dir: ['inside', '1204', '1203', '1202', '1201' ,'up'], 
                id: 'corridor-1204',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1208',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1204',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-stairwell12', 
        name: '12th Floor Hallway',
        desc: `You are standing just down from the stairway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left' ,'inside', 'stairs' , 'stairwell' ], 
               id: 'corridor-stairwell15',
               
            },
            {
                dir: ['inside' ,'up'], 
                id: 'corridor-stairwell12',
                block: "Your're still outside the stairwell."
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1204',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1204',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-elevator13', // Player presses 13
        name: '13th Floor Hallway',
        desc: `You press the button for 13. After a lurch and some movement, the elevator arrives at the 13th floor, the doors open, and you walk out into the hallway.

        Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west','left'], 
               id: 'corridor-1310',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1312',
                
            },
            {
                dir: ['up','down', 'elevator'], 
                id: 'corridor-elevator',
                
            },
            {
                dir: ['north'], 
                id: 'corridor-1315',
                block: 'You cannot go that way.',
                
            },

           ],
      },
      {
        id: 'corridor-1312', 
        name: '13th Floor Hallway',
        desc: `You are now a few steps to the east of the elevators, and are standing in front of rooms 1312 and 1313. The door to room 1313 is ajar.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1310',
               
            },
            {
                dir: ['inside', '1313', 'up'], 
                id: 'corridor-1313',
                
            },
            {
                dir: ['east','left'], 
                id: 'corridor-1314',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1315',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1313', // Player goes into 313, goes to death and texas/ There is a Room 13 fail state on every floor
        name: 'Room 1313',
        desc: `You walk into the room, and almost immediately, a woman walks out of the bathroom still wet from a shower. Dropping her towel, she screams at the top of her lungs.\n Within 15 seconds, two armed security guards are on the scene and don't even bother to ask the woman what you've done. You are whisked to the basement and put in a holding room while the guards discuss the charge of indecent exposure and trespassing with the local authorities.`,
        onEnter: () => {
            pressEnter('deat-1)');
        },
      },
      {
        id: 'corridor-1314', // 
        name: '13th Floor Hallway',
        desc: `To the east is the end of the hallway, and on either side of you are the doors to rooms 1314 and 1315.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1312',
               
            },
            {
                dir: ['inside', '1313', 'up'], 
                id: 'corridor-1313',
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-13end',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1315',
                block: 'You cannot go that way.',
                
            },
            {
                dir: ['1314', '1315'], 
                id: 'corridor-1315',
                block: 'The door is locked',
                
            },
           ],
           
      },
      {
        id: 'corridor-13end', // End of the hallway
        name: '13th Floor Hallway',
        desc: `You are at the easterly end of the hallway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1314',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-13end',
                lock: 'You cannot go that way.',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1315',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      
      {
        id: 'corridor-1310', 
        name: '13th Floor Hallway',
        desc: `You are standing in front of the doors to rooms 1309 and 1310.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1308',
               
            },
            {
                dir: ['inside', '1309', '1310' ,'up'], 
                id: 'corridor-1310',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1312',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1310',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1308', 
        name: '13th Floor Hallway',
        desc: `You are standing betwixt rooms 1307 and 1308`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1304',
               
            },
            {
                dir: ['inside', '1307', '1308' ,'up'], 
                id: 'corridor-1308',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1310',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1310',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1304', 
        name: '13th Floor Hallway',
        desc: `To your west are the doors for rooms 1304 through 1301, and beyond them, the stairway. Right now, you are standing in front of the doors to 1303 and 1304.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-stairwell13',
               
            },
            {
                dir: ['inside', '1304', '1303', '1302', '1301' ,'up'], 
                id: 'corridor-1304',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1308',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1304',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-stairwell13', 
        name: '13th Floor Hallway',
        desc: `You are standing just down from the stairway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left' ,'inside', 'stairs' , 'stairwell' ], 
               id: 'corridor-stairwell15',
               
            },
            {
                dir: ['inside',  ,'up'], 
                id: 'corridor-stairwell13',
                block: "Your're still outside the stairwell."
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1304',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1304',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-elevator14', // Player presses 14
        name: '14th Floor Hallway',
        desc: `You press the button for 14. After a lurch and some movement, the elevator arrives at the 14th floor, the doors open, and you walk out into the hallway.

        Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west','left'], 
               id: 'corridor-1410',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1412',
                
            },
            {
                dir: ['up','down', 'elevator'], 
                id: 'corridor-elevator',
                
            },
            {
                dir: ['north'], 
                id: 'corridor-1415',
                block: 'You cannot go that way.',
                
            },

           ],
      },
      {
        id: 'corridor-1412', 
        name: '14th Floor Hallway',
        desc: `You are now a few steps to the east of the elevators, and are standing in front of rooms 1412 and 1413. The door to room 1413 is ajar.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1410',
               
            },
            {
                dir: ['inside', '413', 'up'], 
                id: 'corridor-1413',
                
            },
            {
                dir: ['east','left'], 
                id: 'corridor-1414',
                
            },
            {
                dir: ['1414', '1415'], 
                id: 'corridor-1415',
                block: 'The door is locked',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1415',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1413', // Player gopes into 213, goes to death and texas/ There is a Room 13 fail state on every floor
        name: 'Room 1413',
        desc: `You walk into the room, and almost immediately, a woman walks out of the bathroom still wet from a shower. Dropping her towel, she screams at the top of her lungs.\n Within 15 seconds, two armed security guards are on the scene and don't even bother to ask the woman what you've done. You are whisked to the basement and put in a holding room while the guards discuss the charge of indecent exposure and trespassing with the local authorities.`,
        onEnter: () => {
            pressEnter('deat-1)');
        },
      },
      {
        id: 'corridor-1414', // 
        name: '14th Floor Hallway',
        desc: `To the east is the end of the hallway, and on either side of you are the doors to rooms 1414 and 1415.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1412',
               
            },
            {
                dir: ['inside', '1413', 'up'], 
                id: 'corridor-1413',
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-14end',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1415',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-14end', // End of the hallway
        name: '14th Floor Hallway',
        desc: `You are at the easterly end of the hallway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1414',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-14end',
                lock: 'You cannot go that way.',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1415',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      
      {
        id: 'corridor-1410', 
        name: '14th Floor Hallway',
        desc: `You are standing in front of the doors to rooms 1409 and 1410.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1408',
               
            },
            {
                dir: ['inside', '1409', '1410' ,'up'], 
                id: 'corridor-1410',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1412',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1410',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1408', 
        name: '4th Floor Hallway',
        desc: `You are standing betwixt rooms 1407 and 1408`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1404',
               
            },
            {
                dir: ['inside', '1407', '1408' ,'up'], 
                id: 'corridor-1408',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1410',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1410',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1404', 
        name: '4th Floor Hallway',
        desc: `To your west are the doors for rooms 1404 through 1401, and beyond them, the stairway. Right now, you are standing in front of the doors to 1403 and 1404.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-stairwell14',
               
            },
            {
                dir: ['inside', '1404', '1403', '1402', '1401' ,'up'], 
                id: 'corridor-1404',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1408',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1404',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-stairwell14', 
        name: '14th Floor Hallway',
        desc: `You are standing just down from the stairway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left' ,'inside', 'stairs' , 'stairwell' ], 
               id: 'corridor-stairwell15',
               
            },
            {
                dir: ['inside',  ,'up'], 
                id: 'corridor-stairwell14',
                block: "Your're still outside the stairwell."
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1404',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1404',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-elevator16', // Player presses 16
        name: '16th Floor Hallway',
        desc: `You press the button for 16. After a lurch and some movement, the elevator arrives at the 16th floor, the doors open, and you walk out into the hallway.

        Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west','left'], 
               id: 'corridor-1610',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1612',
                
            },
            {
                dir: ['up','down', 'elevator'], 
                id: 'corridor-elevator',
                
            },
            {
                dir: ['north'], 
                id: 'corridor-1615',
                block: 'You cannot go that way.',
                
            },

           ],
      },
      {
        id: 'corridor-1612', 
        name: '6th Floor Hallway',
        desc: `You are now a few steps to the east of the elevators, and are standing in front of rooms 1612 and 1613. The door to room 1613 is ajar.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1610',
               
            },
            {
                dir: ['inside', '1613', 'up'], 
                id: 'corridor-1613',
                
            },
            {
                dir: ['east','left'], 
                id: 'corridor-1614',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1615',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1613', // Player gopes into 613, goes to death and texas/ There is a Room 13 fail state on every floor
        name: 'Room 1613',
        desc: `You walk into the room, and almost immediately, a woman walks out of the bathroom still wet from a shower. Dropping her towel, she screams at the top of her lungs.\n Within 15 seconds, two armed security guards are on the scene and don't even bother to ask the woman what you've done. You are whisked to the basement and put in a holding room while the guards discuss the charge of indecent exposure and trespassing with the local authorities.`,
        onEnter: () => {
            pressEnter('deat-1)');
        },
      },
      {
        id: 'corridor-1614', // 
        name: '16th Floor Hallway',
        desc: `To the east is the end of the hallway, and on either side of you are the doors to rooms 1614 and 1615.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1612',
               
            },
            {
                dir: ['inside', '1613', 'up'], 
                id: 'corridor-1613',
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-16end',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1615',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-16end', // End of the hallway
        name: '16th Floor Hallway',
        desc: `You are at the easterly end of the hallway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1614',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-16end',
                lock: 'You cannot go that way.',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-16end',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      
      {
        id: 'corridor-1610', 
        name: '16th Floor Hallway',
        desc: `You are standing in front of the doors to rooms 1609 and 1610.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1608',
               
            },
            {
                dir: ['inside', '1609', '1610' ,'up'], 
                id: 'corridor-1610',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1612',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1610',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1608', 
        name: '16th Floor Hallway',
        desc: `You are standing betwixt rooms 1607 and 1608`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1604',
               
            },
            {
                dir: ['inside', '1607', '1608' ,'up'], 
                id: 'corridor-1608',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1610',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1610',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1604', 
        name: '16th Floor Hallway',
        desc: `To your west are the doors for rooms 1604 through 1601, and beyond them, the stairway. Right now, you are standing in front of the doors to 1603 and 1604.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-stairwell16',
               
            },
            {
                dir: ['inside', '1604', '1603', '1602', '1601' ,'up'], 
                id: 'corridor-1604',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1608',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1604',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-stairwell16', 
        name: '16th Floor Hallway',
        desc: `You are standing just down from the stairway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left' ,'inside', 'stairs' , 'stairwell' ], 
               id: 'corridor-stairwell15',
               
            },
            {
                dir: ['inside', 'up'], 
                id: 'corridor-stairwell16',
                block: "Your're still outside the stairwell."
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1604',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1604',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-elevator17', // Player presses 17
        name: '17th Floor Hallway',
        desc: `You press the button for 17. After a lurch and some movement, the elevator arrives at the 17th floor, the doors open, and you walk out into the hallway.

        Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west','left'], 
               id: 'corridor-1710',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1712',
                
            },
            {
                dir: ['up','down', 'elevator'], 
                id: 'corridor-elevator',
                
            },
            {
                dir: ['north'], 
                id: 'corridor-1715',
                block: 'You cannot go that way.',
                
            },

           ],
      },
      {
        id: 'corridor-1712', 
        name: '17th Floor Hallway',
        desc: `You are now a few steps to the east of the elevators, and are standing in front of rooms 1712 and 1713. The door to room 1713 is ajar.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1710',
               
            },
            {
                dir: ['inside', '1713', 'up'], 
                id: 'corridor-1713',
                
            },
            {
                dir: ['east','left'], 
                id: 'corridor-1714',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1715',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1713', // Player gopes into 1713, goes to death and texas/ There is a Room 13 fail state on every floor
        name: 'Room 1713',
        desc: `You walk into the room, and almost immediately, a woman walks out of the bathroom still wet from a shower. Dropping her towel, she screams at the top of her lungs.\n Within 15 seconds, two armed security guards are on the scene and don't even bother to ask the woman what you've done. You are whisked to the basement and put in a holding room while the guards discuss the charge of indecent exposure and trespassing with the local authorities.`,
        onEnter: () => {
            pressEnter('deat-1)');
        },
      },
      {
        id: 'corridor-1714', // 
        name: '17th Floor Hallway',
        desc: `To the east is the end of the hallway, and on either side of you are the doors to rooms 1714 and 1715.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1712',
               
            },
            {
                dir: ['inside', '1713', 'up'], 
                id: 'corridor-1713',
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-17end',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1715',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-17end', // End of the hallway
        name: '17th Floor Hallway',
        desc: `You are at the easterly end of the hallway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1714',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-17end',
                lock: 'You cannot go that way.',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-17end',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      
      {
        id: 'corridor-1710', 
        name: '17th Floor Hallway',
        desc: `You are standing in front of the doors to rooms 1709 and 1710.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1708',
               
            },
            {
                dir: ['inside', '1709', '1710' ,'up'], 
                id: 'corridor-1710',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1712',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1710',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1708', 
        name: '17th Floor Hallway',
        desc: `You are standing betwixt rooms 1707 and 1708`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1704',
               
            },
            {
                dir: ['inside', '1707', '1708' ,'up'], 
                id: 'corridor-1708',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1710',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1710',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1704', 
        name: '17th Floor Hallway',
        desc: `To your west are the doors for rooms 1704 through 1701, and beyond them, the stairway. Right now, you are standing in front of the doors to 1703 and 1704.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-stairwell17',
               
            },
            {
                dir: ['inside', '1704', '1703', '1702', '1701' ,'up'], 
                id: 'corridor-1704',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1708',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1704',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-stairwell17', 
        name: '17th Floor Hallway',
        desc: `You are standing just down from the stairway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left' ,'inside', 'stairs' , 'stairwell' ], 
               id: 'corridor-stairwell15',
               
            },
            {
                dir: ['inside', 'up'], 
                id: 'corridor-stairwell17',
                block: "Your're still outside the stairwell."
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1704',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1704',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-elevator8', // Player presses 18
        name: '18th Floor Hallway',
        desc: `You press the button for 18. After a lurch and some movement, the elevator arrives at the 18th floor, the doors open, and you walk out into the hallway.

        Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west','left'], 
               id: 'corridor-1810',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1812',
                
            },
            {
                dir: ['up','down', 'elevator'], 
                id: 'corridor-elevator',
                
            },
            {
                dir: ['north'], 
                id: 'corridor-1815',
                block: 'You cannot go that way.',
                
            },

           ],
      },
      {
        id: 'corridor-1812', 
        name: '18th Floor Hallway',
        desc: `You are now a few steps to the east of the elevators, and are standing in front of rooms 1812 and 1813. The door to room 1813 is ajar.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1810',
               
            },
            {
                dir: ['inside', '1813', 'up'], 
                id: 'corridor-1813',
                
            },
            {
                dir: ['east','left'], 
                id: 'corridor-1814',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1815',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1813', // Player gopes into 1813, goes to death and texas/ There is a Room 13 fail state on every floor
        name: 'Room 1813',
        desc: `You walk into the room, and almost immediately, a woman walks out of the bathroom still wet from a shower. Dropping her towel, she screams at the top of her lungs.\n Within 15 seconds, two armed security guards are on the scene and don't even bother to ask the woman what you've done. You are whisked to the basement and put in a holding room while the guards discuss the charge of indecent exposure and trespassing with the local authorities.`,
        onEnter: () => {
            pressEnter('deat-1)');
        },
      },
      {
        id: 'corridor-1814', // 
        name: '18th Floor Hallway',
        desc: `To the east is the end of the hallway, and on either side of you are the doors to rooms 1814 and 1815.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1812',
               
            },
            {
                dir: ['inside', '1813', 'up'], 
                id: 'corridor-1813',
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-18end',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1815',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-18end', // End of the hallway
        name: '18th Floor Hallway',
        desc: `You are at the easterly end of the hallway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1814',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-18end',
                lock: 'You cannot go that way.',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-18end',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      
      {
        id: 'corridor-1810', 
        name: '18th Floor Hallway',
        desc: `You are standing in front of the doors to rooms 1809 and 1810.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1808',
               
            },
            {
                dir: ['inside', '1809', '1810' ,'up'], 
                id: 'corridor-1810',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1812',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1810',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1808', 
        name: '18th Floor Hallway',
        desc: `You are standing betwixt rooms 1807 and 1808`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1804',
               
            },
            {
                dir: ['inside', '1807', '1808' ,'up'], 
                id: 'corridor-1808',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1810',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1810',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1804', 
        name: '18th Floor Hallway',
        desc: `To your west are the doors for rooms 1804 through 1801, and beyond them, the stairway. Right now, you are standing in front of the doors to 1803 and 1804.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-stairwell8',
               
            },
            {
                dir: ['inside', '1804', '1803', '1802', '1801' ,'up'], 
                id: 'corridor-1874',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1808',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1804',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-stairwell18', 
        name: '18th Floor Hallway',
        desc: `You are standing just down from the stairway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left' ,'inside', 'stairs' , 'stairwell' ], 
               id: 'corridor-stairwell15',
               
            },
            {
                dir: ['inside', 'up'], 
                id: 'corridor-stairwell18',
                block: "Your're still outside the stairwell."
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1804',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1804',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-elevator19', // Player presses 19
        name: '19th Floor Hallway',
        desc: `You press the button for 19. After a lurch and some movement, the elevator arrives at the 19th floor, the doors open, and you walk out into the hallway.

        Four elevators are to the north of you. Between each pair of elevators is a panel with buttons to summon either a DOWN or an UP elevator.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west','left'], 
               id: 'corridor-1910',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1912',
                
            },
            {
                dir: ['up','down', 'elevator'], 
                id: 'corridor-elevator',
                
            },
            {
                dir: ['north'], 
                id: 'corridor-1915',
                block: 'You cannot go that way.',
                
            },

           ],
      },
      {
        id: 'corridor-1912', 
        name: '19th Floor Hallway',
        desc: `You are now a few steps to the east of the elevators, and are standing in front of rooms 1912 and 1913. The door to room 1913 is ajar.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1910',
               
            },
            {
                dir: ['inside', '1913', 'up'], 
                id: 'corridor-1913',
                
            },
            {
                dir: ['east','left'], 
                id: 'corridor-1914',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1915',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1913', // Player gopes into 1913, goes to death and texas/ There is a Room 13 fail state on every floor
        name: 'Room 1913',
        desc: `You walk into the room, and almost immediately, a woman walks out of the bathroom still wet from a shower. Dropping her towel, she screams at the top of her lungs.\n Within 15 seconds, two armed security guards are on the scene and don't even bother to ask the woman what you've done. You are whisked to the basement and put in a holding room while the guards discuss the charge of indecent exposure and trespassing with the local authorities.`,
        onEnter: () => {
            pressEnter('deat-1)');
        },
      },
      {
        id: 'corridor-1914', // 
        name: '19th Floor Hallway',
        desc: `To the east is the end of the hallway, and on either side of you are the doors to rooms 914 and 915.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1912',
               
            },
            {
                dir: ['inside', '713', 'up'], 
                id: 'corridor-1913',
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-19end',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1915',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-19end', // End of the hallway
        name: '19th Floor Hallway',
        desc: `You are at the easterly end of the hallway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1914',
               
            },
            {
                dir: ['east','right'], 
                id: 'corridor-19end',
                lock: 'You cannot go that way.',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-19end',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      
      {
        id: 'corridor-1910', 
        name: '19th Floor Hallway',
        desc: `You are standing in front of the doors to rooms 1909 and 1910.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1908',
               
            },
            {
                dir: ['inside', '1909', '1910' ,'up'], 
                id: 'corridor-1910',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1912',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1910',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1908', 
        name: '19th Floor Hallway',
        desc: `You are standing betwixt rooms 1907 and 1908`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-1904',
               
            },
            {
                dir: ['inside', '1907', '1908' ,'up'], 
                id: 'corridor-1908',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1910',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1910',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-1904', 
        name: '19th Floor Hallway',
        desc: `To your west are the doors for rooms 1904 through 1901, and beyond them, the stairway. Right now, you are standing in front of the doors to 1903 and 1904.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left'], 
               id: 'corridor-stairwell19',
               
            },
            {
                dir: ['inside', '1904', '1903', '1902', '1901' ,'up'], 
                id: 'corridor-1904',
                block: "The door is locked",
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1908',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1904',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
      {
        id: 'corridor-stairwell19', 
        name: '19th Floor Hallway',
        desc: `You are standing just down from the stairway.`,
        
        exits: [ // These need to be specified with the press command
            {
               dir: ['west', 'left' ,'inside', 'stairs' , 'stairwell' ], 
               id: 'corridor-stairwell15',
               
            },
            {
                dir: ['inside', 'up'], 
                id: 'corridor-stairwell19',
                block: "Your're still outside the stairwell."
                
            },
            {
                dir: ['east','right'], 
                id: 'corridor-1904',
                
            },
            {
                dir: ['north', 'south'], 
                id: 'corridor-1904',
                block: 'You cannot go that way.',
                
            },

           ],
           
      },
     // 
      {
        id: 'corridor-security', // Proceeding to Death and Texas, discovered without clothes
        name: '15th Floor Hallway',
        desc: `Hotel security has obviously been alerted to your running about naked.\n
        All at once, they are on you. Your arms are whipped behind your back, and handcuffs are snapped about your writs.
        You realize that any further resistance is useless, and you submit to being led by the two security guards down the entire length of the staircase to the hotel's sub-basement, where you await the arrival of the police in a room the size of a broom closet.`,
        onEnter: () => {
            pressEnter('deat-1'); // proceed to death and texas
        }
      },
      {
        id: 'corridor-stairwell15', // Stairway on 15th floor
        name: 'Firestairs',
        desc: `The door opens onto the landing of a wide stairwell. The concrete steps and walls are painted battleship grey.`,
        exits: [
          {
            dir: ['up', 'ascend'], // PROBLEM - the two word command as written doesn't discriminate with the first word, in this case it matters if they type up or down
            id: 'corridor-stairwellph'
          },
          {
            dir: ['down', 'descend'],
            id: 'corridor-stairwellde'
          },
          {
            dir: ['exit', 'leave'],
            id: 'corridor-1501'
          },
        ],
      },
      {
        id: 'corridor-stairwellph', // To the health club
        name: '',
        desc: `You mount the stairs slowly to the next landing. The concrete feels cold under your bare feet. You climb, in all, five flights of steps--and find yourself, at last, before a door marked SUNDERLAND HEALTH CLUB, Authorized Personnel Only.`,
        onEnter: () => {
            pressEnter('corridor-rooftop');
        },
      },
      {
        id: 'corridor-elevatorph', // Player presses ph, to the health club
        name: '',
        desc: `The doors close, and the elevator rises with a little lurch. Its progress is marked by red lights that wink on and off behind the numbers above the door: 16, 17, 18, 19, and your destination, the Penthouse floor. The door opens and you step out into a narrow corridor. A sign in front of the elevator directs you (by an arrow pointing to the right) to the entrance of the Sunderland Sauna and Health Club. The door of the elevator closes behind you.`,
        onEnter: () => {
            pressEnter('corridor-rooftop');
        },
      },
      {
        id: 'corridor-rooftop',
        name: 'Roof of the Sunderland',
        desc: `You find yourself on a gravel rooftop. Immediately in front of you is a drained swimming pool surrounded by deck chairs made of brightly colored metal tubing.

        Beyond the pool is the penthouse proper, a flat-roofed, windowless brick structure with a metal door from which the weather has almost entirely peeled away the lettering:
        S DE AND SAU   & HE LT   LUB`,
        onEnter: () => {
            reenableInput();
        },
        items: [
            {
                name: 'door', // If the player tries to go back to room 1502
                desc: `You are now standing in front of the metal door.`,
                onUse: () => {
                      goDir( 'heal-club');
                  },
            }
        ],
        exits: [
          {
            dir: ['inside', ' health club', 'enter'],
            id: 'heal-club'
          },
          {
            dir: ['leave', 'descend'],
            id: 'corridor-stairwell15'
          },
        ],
      },
      {
        id: 'corridor-stairwellde',
        name: 'Firestairs',
        desc: `You go down the steps. At the next floor landing, you feel an odd vertiginous feeling. Foolishly you ignore the feeling, and as you approach the landing of still another floor you lose all sense of balance. 

        The stairwell whirls about you. You clutch for the railing and collapse on the landing where you lie, an inert and unconscious heap.`,
       onEnter: () =>{
           pressEnter('nightmare'); // change to whatever the room id of the nightmare is
       },
      },
      {
        id: 'nyu-medical1', // After the nightmare, proceeding to death and texas
        name: 'NYU Medical Center',
        desc: `You awaken not where you fell, on the landing of the Sunderland's firestairs, but in a hospital bed. Your arms have been fastened to the sides of the bed by canvas restraining straps. After you have struggled a little while, a nurse enters with a hypodermic. "Now, now, Mr. Hollings, none of that or I will have to sedate you."`,
        exits: [
            {
              dir: ['fight', 'protest', 'scream', 'struggle', 'kill','nurse', 'hollings'],
              id: 'nyu-medical2'
            },
            {
              dir: ['explain', 'explaination', 'you'],
              id: 'nyu-medical3'
            },
          ],
    },
    {
        id: 'nyu-medical2', // Proceed to Death and Texas
        name: 'NYU Medical Center',
        desc: `Protests and struggle are unavailing. Your restraints are strong, and the nurse remains unsympathetic. With a grim smile, she plunges the hypodermic into your arm.`,
       onEnter: () =>{
           pressEnter('deat-1'); 
       },
    },
    {
        id: 'nyu-medical3', // Proceed to Death and Texas
        name: 'NYU Medical Center',
        desc: `"There's really no much to explain, Mr. Hollings. You were found in the stairwell of the Sunderland Hotel, naked and unconscious, and taken here to Bellevue. Our security staff did a routine check to find out who you were -- and when we discovered you were wanted on a murder charge in Texas, naturally we informed the police. I'm told you can expect to be here another day, and then the extradition papers will be ready."`,
       onEnter: () =>{
           pressEnter('deat-1'); 
       },
    },
    ],
  };