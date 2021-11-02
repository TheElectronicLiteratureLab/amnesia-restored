const midtownEast = {
    roomId: '54-5',
    currPos: [],
    rooms: [
        {
            coord: [],
            id: 'hote-exit',
            name: 'Sunderland Hotel Lobby',
            desc: `You exit the Sunderland with a feeling a POW must have when he cuts through the last strands of barbed wire separating him from freedom. It feels great to be a single faceless, nameless atom among the million others churning about in the grid of Manhattan's streets. It feels safe.`,
            onEnter: () => {
                pressEnter('hote-exit1');
            },
            exits: []
        },
        {
            coord: [],
            id: 'hote-exit1',
            name: 'Sunderland Hotel Lobby',
            desc: `Here it is already night time, but the sidewalks are still teeming with people, and the streets are heavily trafficked, and bright with the sum-total wattage of so many streetlights, headlights, and lighted signs. In the windows of the darkened shopfronts, you see yourself mirrored and feel an utterly inappropiate glow of vanity.
            
            The white tux makes you look like a refugee from the chorus line of a Thirties musical comedy, and in a peculiar way it serves as camouflage. People stare, but they're staring at the tux, not at you.`,
            onEnter: () => {
                pressEnter('hote-exit2');
            },
            exits: []
        },
        {
            coord: [],
            id: 'hote-exit2',
            name: 'Sunderland Hotel Lobby',
            desc: `As you approach Fifth Avenue, the brief buoyancy of feeling free gives way to ordinary what-now anxieties. You've got no money, no credit card, nowhere to sleep (you certainly can't stay on at the Sunderland), and no visible means of support.`,
            onEnter: () => {
                pressEnter('hote-exit3');
            },
            exits: []
        },
        {
            coord: [],
            id: 'hote-exit3',
            name: 'Sunderland Hotel Lobby',
            desc:`At the corner you watch a blind man with a tin cup slowly progress down Fifth Avenue, rattling coins at the milling pedestrians. Most of them are too caught up in their own business even to notice the blind man. A few do see him and veer widely around him, as though fearing the rattle of his cup
            
            A black man pauses, considers, digs into his pocket, and drops a quarter in the cup. He notices you watching this act of charity, and as he walks by you a moment later, he says, "There but for the grace of God, eh?"
            
            You nod your head thoughtfully.`,
            onEnter: () => {
                pressEnter('53-5');
            },
            exits: []
        },
        {
            isStreets: true,
            coord: [],
            id: '53-5',
            name: 'W. 53rd St, and 5th Ave.',
            desc: `On 53rd Street stands the Sunderland hotel. Across the street, a glass tower rises above the Museum of Modern Art == New York's big MOMA.`,
            exits: [
                {
                  dir: ['north'], 
                  id: '54-5',
                },
                {
                  dir: ['south'],
                  id: '52-5'
                },
                {
                  dir: ['east'],
                  id: '53-madi',
                },
                {
                  dir: ['west'],
                  id: '53-amer'
                }, 
                {
                  dir: ['Sunderland', 'hotel'],
                  id: '????',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            hasSubway: true,
            id: '54-5',
            name: 'W. 54th St, and 5th Ave.',
            desc: `There is a subway entrance at this corner.`,
            exits: [
                {
                  dir: ['north'],
                  id: '55-5',
                },
                {
                  dir: ['south'],
                  id: '53-5'
                },
                {
                  dir: ['east'],
                  id: '54-madi',
                },
                {
                  dir: ['west'],
                  id: '54-amer'
                }, 
                {
                  dir: ['subway'],
                  id: '????',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '55-5',
            name: 'W. 55th St, and 5th Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '56-5',
                },
                {
                  dir: ['south'],
                  id: '54-5'
                },
                {
                  dir: ['east'],
                  id: '55-madi',
                },
                {
                  dir: ['west'],
                  id: '55-amer'
                }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '56-5',
            name: 'W. 56th St, and 5th Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '57-5',
                },
                {
                  dir: ['south'],
                  id: '55-5'
                },
                {
                  dir: ['east'],
                  id: '56-madi',
                },
                {
                  dir: ['west'],
                  id: '56-amer'
                }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '57-5',
            name: 'W. 57th St, and 5th Ave.',
            desc: `Every block, every shop front, in this part of town seems to bear another Famous Name. This corner, which from a distance looked like a large granite tombstone, turns out on closer inspection to be none other than that celebrated breakfast club, Tiffany’s. Inside each of the tiny windows in the fortress-like facade is a modest bouquet of tea-roses, each held together by about $50,000 worth of diamonds, pearls, emeralds, and rubies. An ideal low-cholesterol breakfast.`,
            exits: [
                {
                  dir: ['north'],
                  id: '58-5',
                },
                {
                  dir: ['south'],
                  id: '56-5'
                },
                {
                  dir: ['east'],
                  id: '57-madi',
                },
                {
                  dir: ['west'],
                  id: '57-amer'
                }, 
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '58-5',
            name: 'W. 58th St, and 5th Ave.',
            desc: `There are certain buildings--the Pyramids, St. Peter’s in Rome, the White House--that even an amnesiac would probably recognize. And here’s another--the Plaza Hotel. One limousine after another pulls up to the brazen art nouveau canopy, like filings of money drawn irresistibly to a great Money Magnet.`,
            exits: [
                {
                  dir: ['north'],
                  id: '59-5',
                },
                {
                  dir: ['south'],
                  id: '57-5'
                },
                {
                  dir: ['east'],
                  id: '58-madi',
                },
                {
                  dir: ['west'],
                  id: '58-amer'
                },
                {
                  dir: ['plaza', 'hotel'],
                  id: 'plaz-hote'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'plaz-hote',
            name: 'Lobby of the Plaza Hotel',
            desc: `You enter the Plaza, and the lobby is more splendid than the facade. Marble, gilt, carpets, chandeliers, potted palms--the works. A voice deep inside you says you belong here, but the look on the face of the liveried security guard says that you don’t. You ignore the voice deep inside and leave with a sigh of regret.`,
            exits:[],
            onEnter: () => {
                pressEnter('58-5')
            },
        },
        {
            isStreets: true,
            coord: [],
            hasSubway: true,
            id: '59-5',
            name: 'Central Park S. and 5th Ave.',
            desc: `There is a subway entrance at this corner.`,
            exits: [
                {
                  dir: ['north'],
                  id: '60-5',
                },
                {
                  dir: ['south'],
                  id: '58-5'
                },
                {
                  dir: ['east'],
                  id: '59-madi',
                },
                {
                  dir: ['west'],
                  id: '59-amer'
                },
                {
                  dir: ['subway'],
                  id: '???'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '59-madi',
            name: 'E. 59th St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '60-madi',
                },
                {
                  dir: ['south'],
                  id: '58-madi'
                },
                {
                  dir: ['east'],
                  id: '59-park',
                },
                {
                  dir: ['west'],
                  id: '59-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '58-madi',
            name: 'E. 58th St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '59-madi',
                },
                {
                  dir: ['south'],
                  id: '57-madi'
                },
                {
                  dir: ['east'],
                  id: '58-park',
                },
                {
                  dir: ['west'],
                  id: '58-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '57-madi',
            name: 'E. 57th St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '58-madi',
                },
                {
                  dir: ['south'],
                  id: '56-madi'
                },
                {
                  dir: ['east'],
                  id: '57-park',
                },
                {
                  dir: ['west'],
                  id: '57-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '56-madi',
            name: 'E. 56th St. and Madison Ave.',
            desc: `The sign above the store's front window, written in letters that imitate a dot-matrix printout, says: User-Friendly Computer Store.`,
            exits: [
                {
                  dir: ['north'],
                  id: '57-madi',
                },
                {
                  dir: ['south'],
                  id: '55-madi'
                },
                {
                  dir: ['east'],
                  id: '56-park',
                },
                {
                  dir: ['west'],
                  id: '56-5'
                },
                {
                  dir: ['computer', 'store'],
                  id: 'user-frie'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '56-madi',
            name: 'E. 56th St. and Madison Ave.',
            desc: `As you come to the corner of Madison Avenue, you notice, halfway down the block a shop front that seems somehow familiar. The sign above the front window, written in letters that imitate a dot-matrix printout, says:

            USER-FRIENDLY

            COMPUTER STORE.`,
            exits: [
                {
                  dir: ['north'],
                  id: '57-madi',
                },
                {
                  dir: ['south'],
                  id: '55-madi'
                },
                {
                  dir: ['east'],
                  id: '56-park',
                },
                {
                  dir: ['west'],
                  id: '56-5'
                },
                {
                  dir: ['computer', 'store', 'user', 'friendly'],
                  id: 'user-frie'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '55-madi',
            name: 'E. 55th St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '56-madi',
                },
                {
                  dir: ['south'],
                  id: '54-madi'
                },
                {
                  dir: ['east'],
                  id: '55-park',
                },
                {
                  dir: ['west'],
                  id: '55-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '54-madi',
            name: 'E. 54th St. and Madison Ave.',
            desc: `There is a chock Full-O-Nuts at this intersection.`,
            exits: [
                {
                  dir: ['north'],
                  id: '55-madi',
                },
                {
                  dir: ['south'],
                  id: '53-madi'
                },
                {
                  dir: ['east'],
                  id: '54-park',
                },
                {
                  dir: ['west'],
                  id: '54-5'
                },
                {
                  dir: ['chock', 'full-o-nuts'],
                  id: 'choc-nuts'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '53-madi',
            name: 'E. 53rd St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '54-madi',
                },
                {
                  dir: ['south'],
                  id: '52-madi'
                },
                {
                  dir: ['east'],
                  id: '53-park',
                },
                {
                  dir: ['west'],
                  id: '53-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '52-madi',
            name: 'E. 52nd St. and Madison Ave.',
            desc: `Park Plaza – In the sterile griminess of New York, a patch of green is good to see – but this 50-story glass structure does not remind you of meadows or forests; it is more like congealed lake water. `,
            exits: [
                {
                  dir: ['north'],
                  id: '53-madi',
                },
                {
                  dir: ['south'],
                  id: '51-madi'
                },
                {
                  dir: ['east'],
                  id: '52-park',
                },
                {
                  dir: ['west'],
                  id: '52-5'
                },
                {
                  dir: ['park', 'plaza'],
                  id: 'park-plaz'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '51-madi',
            name: 'E. 51st St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '52-madi',
                },
                {
                  dir: ['south'],
                  id: '50-madi'
                },
                {
                  dir: ['east'],
                  id: '51-park',
                },
                {
                  dir: ['west'],
                  id: '51-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '50-madi',
            name: 'E. 50th St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '51-madi',
                },
                {
                  dir: ['south'],
                  id: '49-madi'
                },
                {
                  dir: ['east'],
                  id: '50-park',
                },
                {
                  dir: ['west'],
                  id: '50-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '49-madi',
            name: 'E. 49th St. and Madison Ave.',
            desc: `There is a chock Full-O-Nuts at this intersection.`,
            exits: [
                {
                  dir: ['north'],
                  id: '50-madi',
                },
                {
                  dir: ['south'],
                  id: '48-madi'
                },
                {
                  dir: ['east'],
                  id: '49-park',
                },
                {
                  dir: ['west'],
                  id: '49-5'
                },
                {
                  dir: ['chock', 'full-o-nuts',],
                  id: 'choc-nuts'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '48-madi',
            name: 'E. 48th St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '49-madi',
                },
                {
                  dir: ['south'],
                  id: '47-madi'
                },
                {
                  dir: ['east'],
                  id: '48-park',
                },
                {
                  dir: ['west'],
                  id: '48-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '47-madi',
            name: 'E. 47th St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '48-madi',
                },
                {
                  dir: ['south'],
                  id: '46-madi'
                },
                {
                  dir: ['east'],
                  id: '47-vand',
                },
                {
                  dir: ['west'],
                  id: '47-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '46-madi',
            name: 'E. 46th St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '47-madi',
                },
                {
                  dir: ['south'],
                  id: '45-madi'
                },
                {
                  dir: ['east'],
                  id: '46-vand',
                },
                {
                  dir: ['west'],
                  id: '46-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '45-madi',
            name: 'E. 45th St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '46-madi',
                },
                {
                  dir: ['south'],
                  id: '44-madi'
                },
                {
                  dir: ['east'],
                  id: '45-vand',
                },
                {
                  dir: ['west'],
                  id: '45-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '44-madi',
            name: 'E. 44th St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '45-madi',
                },
                {
                  dir: ['south'],
                  id: '43-madi'
                },
                {
                  dir: ['east'],
                  id: '44-vand',
                },
                {
                  dir: ['west'],
                  id: '44-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '43-madi',
            name: 'E. 43rd St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '44-madi',
                },
                {
                  dir: ['south'],
                  id: '42-madi'
                },
                {
                  dir: ['east'],
                  id: '43-vand',
                },
                {
                  dir: ['west'],
                  id: '43-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '42-madi',
            name: 'E. 42nd St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '43-madi',
                },
                {
                  dir: ['south'],
                  id: '41-madi'
                },
                {
                  dir: ['east'],
                  id: '42-vand',
                },
                {
                  dir: ['west'],
                  id: '42-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '41-madi',
            name: 'E. 41st St. and Madison Ave.',
            desc: `There is a chock Full-O-Nuts at this intersection.`,
            exits: [
                {
                  dir: ['north'],
                  id: '42-madi',
                },
                {
                  dir: ['south'],
                  id: '40-madi'
                },
                {
                  dir: ['east'],
                  id: '41-park',
                },
                {
                  dir: ['west'],
                  id: '41-5'
                },
                {
                  dir: ['chock', 'full-o-nuts', 'enter'],
                  id: 'choc-nuts'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '40-madi',
            name: 'E. 40th St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '41-madi',
                },
                {
                  dir: ['south'],
                  id: '39-madi'
                },
                {
                  dir: ['east'],
                  id: '40-park',
                },
                {
                  dir: ['west'],
                  id: '40-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '39-madi',
            name: 'E. 39th St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '40-madi',
                },
                {
                  dir: ['south'],
                  id: '38-madi'
                },
                {
                  dir: ['east'],
                  id: '39-park',
                },
                {
                  dir: ['west'],
                  id: '39-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '39-madi',
            name: 'E. 39th St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '40-madi',
                },
                {
                  dir: ['south'],
                  id: '38-madi'
                },
                {
                  dir: ['east'],
                  id: '39-park',
                },
                {
                  dir: ['west'],
                  id: '39-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '38-madi',
            name: 'E. 38th St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '39-madi',
                },
                {
                  dir: ['south'],
                  id: '37-madi'
                },
                {
                  dir: ['east'],
                  id: '38-park',
                },
                {
                  dir: ['west'],
                  id: '38-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '37-madi',
            name: 'E. 37th St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '38-madi',
                },
                {
                  dir: ['south'],
                  id: '36-madi'
                },
                {
                  dir: ['east'],
                  id: '37-park',
                },
                {
                  dir: ['west'],
                  id: '37-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '36-madi',
            name: 'E. 36th St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '37-madi',
                },
                {
                  dir: ['south'],
                  id: '35-madi'
                },
                {
                  dir: ['east'],
                  id: '36-park',
                },
                {
                  dir: ['west'],
                  id: '36-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '35-madi',
            name: 'E. 35th St. and Madison Ave.',
            desc: `Somewhere in Manhattan there seems to be a piece of architecture corresponding to every period in history. This one here is definitely the High Renaissance. Lorenzo de Medici couldn’t have asked for a nobler palazzo. Until you’re right up beside it you would even guess that all these columns and cornices were the wrappings of a department store--because Altman’s doesn’t believe in vulgar ostentation like signs. Neither did Lorenzo the Magnificent, probably.`,
            exits: [
                {
                  dir: ['north'],
                  id: '36-madi',
                },
                {
                  dir: ['south'],
                  id: '34-madi'
                },
                {
                  dir: ['east'],
                  id: '35-park',
                },
                {
                  dir: ['west'],
                  id: '35-5'
                },
                {
                  dir: [`Altman's`,],
                  id: '????'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '34-madi',
            name: 'E. 34th St. and Madison Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '35-madi',
                },
                {
                  dir: ['south'],
                  id: '33-madi'
                },
                {
                  dir: ['east'],
                  id: '34-park',
                },
                {
                  dir: ['west'],
                  id: '34-5'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '34-5',
            name: 'W. 34th St. and 5th Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '35-5',
                },
                {
                  dir: ['south'],
                  id: '33-5'
                },
                {
                  dir: ['east'],
                  id: '34-madi',
                },
                {
                  dir: ['west'],
                  id: '34-amer'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '35-5',
            name: 'W. 35th St. and 5th Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '36-5',
                },
                {
                  dir: ['south'],
                  id: '34-5'
                },
                {
                  dir: ['east'],
                  id: '35-madi',
                },
                {
                  dir: ['west'],
                  id: '35-amer'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '36-5',
            name: 'W. 36th St. and 5th Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '37-5',
                },
                {
                  dir: ['south'],
                  id: '35-5'
                },
                {
                  dir: ['east'],
                  id: '36-madi',
                },
                {
                  dir: ['west'],
                  id: '36-amer'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '37-5',
            name: 'W. 37th St. and 5th Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '38-5',
                },
                {
                  dir: ['south'],
                  id: '36-5'
                },
                {
                  dir: ['east'],
                  id: '37-madi',
                },
                {
                  dir: ['west'],
                  id: '37-amer'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '38-5',
            name: 'W. 38th St. and 5th Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '39-5',
                },
                {
                  dir: ['south'],
                  id: '37-5'
                },
                {
                  dir: ['east'],
                  id: '38-madi',
                },
                {
                  dir: ['west'],
                  id: '38-amer'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '38-5',
            name: 'W. 38th St. and 5th Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '39-5',
                },
                {
                  dir: ['south'],
                  id: '37-5'
                },
                {
                  dir: ['east'],
                  id: '38-madi',
                },
                {
                  dir: ['west'],
                  id: '38-amer'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '39-5',
            name: 'W. 39th St. and 5th Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '40-5',
                },
                {
                  dir: ['south'],
                  id: '38-5'
                },
                {
                  dir: ['east'],
                  id: '39-madi',
                },
                {
                  dir: ['west'],
                  id: '39-amer'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '40-5',
            name: 'W. 40th St. and 5th Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '41-5',
                },
                {
                  dir: ['south'],
                  id: '39-5'
                },
                {
                  dir: ['east'],
                  id: '40-madi',
                },
                {
                  dir: ['west'],
                  id: '40-amer'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '41-5',
            name: 'W. 41st St. and 5th Ave.',
            desc: `Two large, smug lions flank the steps that lead up to the monumental triple triumphant arch of the main branch of the Public Library. This has got to be the world’s classiest set of bookshelves.`,
            exits: [
                {
                  dir: ['north'],
                  id: '42-5',
                },
                {
                  dir: ['south'],
                  id: '40-5'
                },
                {
                  dir: ['east'],
                  id: '41-madi',
                },
                {
                  dir: ['west'],
                  id: '41-amer'
                },
                {
                  dir: ['public', 'library',],
                  id: 'publ-libr'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            hasSubway: true,
            id: '42-5',
            name: 'W. 42nd St. and 5th Ave.',
            desc: `There is a subway entrance at this corner.`,
            exits: [
                {
                  dir: ['north'],
                  id: '43-5',
                },
                {
                  dir: ['south'],
                  id: '41-5'
                },
                {
                  dir: ['east'],
                  id: '42-madi',
                },
                {
                  dir: ['west'],
                  id: '42-amer'
                },
                {
                  dir: ['Subway'],
                  id: '????',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '43-5',
            name: 'W. 43rd St. and 5th Ave.',
            desc: `here is the Princeton Club - distinctly a members only institution.`,
            exits: [
                {
                  dir: ['north'],
                  id: '44-5',
                },
                {
                  dir: ['south'],
                  id: '42-5'
                },
                {
                  dir: ['east'],
                  id: '43-madi',
                },
                {
                  dir: ['west'],
                  id: '43-amer'
                },
                {
                  dir: ['Princeton', 'Health', 'Club',],
                  id: '????',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '44-5',
            name: 'W. 44th St. and 5th Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '45-5',
                },
                {
                  dir: ['south'],
                  id: '43-5'
                },
                {
                  dir: ['east'],
                  id: '44-madi',
                },
                {
                  dir: ['west'],
                  id: '44-amer'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '45-5',
            name: 'W. 45th St. and 5th Ave.',
            desc: `An ideal spot for a would-be traveler. This block is lined with offices of Qantas, British Airways, Northwest Orient, and Aeroflot.`,
            exits: [
                {
                  dir: ['north'],
                  id: '46-5',
                },
                {
                  dir: ['south'],
                  id: '44-5'
                },
                {
                  dir: ['east'],
                  id: '45-madi',
                },
                {
                  dir: ['west'],
                  id: '45-amer'
                },
                {
                  dir: ['qantas', 'british', 'airways', 'northwest', 'orient', 'aeroflot'],
                  id: '????'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '46-5',
            name: 'W. 46th St. and 5th Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '47-5',
                },
                {
                  dir: ['south'],
                  id: '45-5'
                },
                {
                  dir: ['east'],
                  id: '46-madi',
                },
                {
                  dir: ['west'],
                  id: '46-amer'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '47-5',
            name: 'W. 47th St. and 5th Ave.',
            desc: `You pause to consider the hollow hulk of a store that was once called Brentano's`,
            exits: [
                {
                  dir: ['north'],
                  id: '48-5',
                },
                {
                  dir: ['south'],
                  id: '46-5'
                },
                {
                  dir: ['east'],
                  id: '47-madi',
                },
                {
                  dir: ['west'],
                  id: '47-amer'
                },
                {
                  dir: [`Brentano's`, `Brentano`, `Brentanos`],
                  id: 'bren',
                  block: '????'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'bren',
            name: '',
            desc: '',
            exits:[]
        },
        {
            isStreets: true,
            coord: [],
            id: '48-5',
            name: 'W. 48th St. and 5th Ave.',
            desc: `Here is Barnes-Nobles – a store filled with what appears to be thousands and thousands of books. Across the street is Scribner’s. Looking through the windows, you cannot be certain whether it is a retail establishment or a library of some exclusive club .`,
            exits: [
                {
                  dir: ['north'],
                  id: '49-5',
                },
                {
                  dir: ['south'],
                  id: '47-5'
                },
                {
                  dir: ['east'],
                  id: '48-madi',
                },
                {
                  dir: ['west'],
                  id: '48-amer'
                },
                {
                  dir: [`barnes`, `nobles`],
                  id: 'barn-nobl',
                  block: '????'
                },
                {
                    dir: [`scriber's`, 'scribners'],
                    id: 'scri',
                    block: '????'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'barn-nobl',
            name: '',
            desc: '',
            exits:[]
        },
        {
            isStreets: true,
            coord: [],
            id: 'scri',
            name: '',
            desc: '',
            exits:[]
        },
        {
            isStreets: true,
            coord: [],
            id: '49-5',
            name: 'W. 49th St. and 5th Ave.',
            desc: `A statue of Atlas bearing the burden of the world reflects on your own mood as you pass the entrance to Rockefeller plaza.`,
            exits: [
                {
                  dir: ['north'],
                  id: '50-5',
                },
                {
                  dir: ['south'],
                  id: '48-5'
                },
                {
                  dir: ['east'],
                  id: '48-madi',
                },
                {
                  dir: ['west'],
                  id: '48-amer'
                },
                {
                  dir: [`rockefeller`, `plaza`],
                  id: 'rock-plaz',
                  block: '????'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: 'rock-plaz',
            name: 'Office Building Lobby',
            desc: `You walk through the revolving doors, and enter a lobby decorated in marble. A security check-point near the elevators makes you think twice about remaining. 
            
            you turn away quickly and leave`,
            onEnter: () => {
                pressEnter('49-5')
            }, 
            exits:[]
        },
        {
            isStreets: true,
            coord: [],
            id: '50-5',
            name: 'W. 50th St. and 5th Ave.',
            desc: `There is a chock Full-O-Nuts at this intersection.`,
            exits: [
                {
                  dir: ['north'],
                  id: '51-5',
                },
                {
                  dir: ['south'],
                  id: '49-5'
                },
                {
                  dir: ['east'],
                  id: '50-madi',
                },
                {
                  dir: ['west'],
                  id: '50-amer'
                },
                {
                    dir: ['chock', 'full-o-nuts'],
                    id: 'choc-nuts'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '51-5',
            name: 'W. 51st St. and 5th Ave.',
            desc: `Like a ghost from across the ocean a genuine gothic cathedral rears up out of the welter of midtown hustle and bustle, looking dark and spiky and disapproving of everything going on around it. The center door stands open, where an occasional worshipper--or sightseer--slips in or out.
            `,
            exits: [
                {
                  dir: ['north'],
                  id: '52-5',
                },
                {
                  dir: ['south'],
                  id: '50-5'
                },
                {
                  dir: ['east'],
                  id: '51-madi',
                },
                {
                  dir: ['west'],
                  id: '51-amer'
                },
                {
                    dir: ['st.', 'saint', 'patrick', `patrick's`, 'cathedral'],
                    id: '????'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '52-5',
            name: 'W. 52nd St. and 5th Ave.',
            desc: `Midway down the block, across from the Sunderland, plaster jockeys mark the 21 club, home of the most expensive hamburger in New York City. 

            There is a poster here which catches your eye. It announces a series of organ recitals at St. Patrick’s Cathedral in memory of James Renwick, the architect.`,
            exits: [
                {
                  dir: ['north'],
                  id: '53-5',
                },
                {
                  dir: ['south'],
                  id: '51-5'
                },
                {
                  dir: ['east'],
                  id: '51-madi',
                },
                {
                  dir: ['west'],
                  id: '51-amer'
                },
                {
                    dir: ['21', 'club'],
                    id: '????'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '59-park',
            name: 'E. 59th St. and Park Ave.',
            desc: `There is a restaurant called Nedicks here.`,
            exits: [
                {
                  dir: ['north'],
                  id: '60-park',
                },
                {
                  dir: ['south'],
                  id: '58-park'
                },
                {
                  dir: ['east'],
                  id: '59-lexi',
                },
                {
                  dir: ['west'],
                  id: '59-madi'
                },
                {
                    dir: ['nedick', 'restaurant', `nedick's`],
                    id: 'nedi'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '58-park',
            name: 'E. 58th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '59-park',
                },
                {
                  dir: ['south'],
                  id: '57-park'
                },
                {
                  dir: ['east'],
                  id: '58-lexi',
                },
                {
                  dir: ['west'],
                  id: '58-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '57-park',
            name: 'E. 57th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '58-park',
                },
                {
                  dir: ['south'],
                  id: '56-park'
                },
                {
                  dir: ['east'],
                  id: '57-lexi',
                },
                {
                  dir: ['west'],
                  id: '57-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '56-park',
            name: 'E. 56th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '57-park',
                },
                {
                  dir: ['south'],
                  id: '55-park'
                },
                {
                  dir: ['east'],
                  id: '56-lexi',
                },
                {
                  dir: ['west'],
                  id: '56-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '55-park',
            name: 'E. 55th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '56-park',
                },
                {
                  dir: ['south'],
                  id: '54-park'
                },
                {
                  dir: ['east'],
                  id: '55-lexi',
                },
                {
                  dir: ['west'],
                  id: '55-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '54-park',
            name: 'E. 54th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '55-park',
                },
                {
                  dir: ['south'],
                  id: '53-park'
                },
                {
                  dir: ['east'],
                  id: '54-lexi',
                },
                {
                  dir: ['west'],
                  id: '54-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '53-park',
            name: 'E. 53rd St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '54-park',
                },
                {
                  dir: ['south'],
                  id: '52-park'
                },
                {
                  dir: ['east'],
                  id: '53-lexi',
                },
                {
                  dir: ['west'],
                  id: '53-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '52-park',
            name: 'E. 52nd St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '53-park',
                },
                {
                  dir: ['south'],
                  id: '51-park'
                },
                {
                  dir: ['east'],
                  id: '52-lexi',
                },
                {
                  dir: ['west'],
                  id: '52-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '51-park',
            name: 'E. 51st St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '52-park',
                },
                {
                  dir: ['south'],
                  id: '50-park'
                },
                {
                  dir: ['east'],
                  id: '51-lexi',
                },
                {
                  dir: ['west'],
                  id: '51-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '50-park',
            name: 'E. 50th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '51-park',
                },
                {
                  dir: ['south'],
                  id: '49-park'
                },
                {
                  dir: ['east'],
                  id: '50-lexi',
                },
                {
                  dir: ['west'],
                  id: '50-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '49-park',
            name: 'E. 49th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '50-park',
                },
                {
                  dir: ['south'],
                  id: '48-park'
                },
                {
                  dir: ['east'],
                  id: '49-lexi',
                },
                {
                  dir: ['west'],
                  id: '49-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '48-park',
            name: 'E. 48th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '49-park',
                },
                {
                  dir: ['south'],
                  id: '47-park'
                },
                {
                  dir: ['east'],
                  id: '48-lexi',
                },
                {
                  dir: ['west'],
                  id: '48-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '47-park',
            name: 'E. 47th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '48-park',
                },
                {
                  dir: ['south'],
                  id: '46-park'
                },
                {
                  dir: ['east'],
                  id: '47-lexi',
                },
                {
                  dir: ['west'],
                  id: '47-vand'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '47-vand',
            name: 'E. 47th St. and Vanderbilt Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '',
                  block: `You can't go that way.`
                },
                {
                  dir: ['south'],
                  id: '46-vand'
                },
                {
                  dir: ['east'],
                  id: '47-park',
                },
                {
                  dir: ['west'],
                  id: '47-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '46-vand',
            name: 'E. 46th St. and Vanderbilt Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '47-vand',
                },
                {
                  dir: ['south'],
                  id: '45-vand'
                },
                {
                  dir: ['east'],
                  id: '46-park',
                },
                {
                  dir: ['west'],
                  id: '46-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '45-vand',
            name: 'E. 45th St. and Vanderbilt Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '46-vand',
                },
                {
                  dir: ['south'],
                  id: '44-vand'
                },
                {
                  dir: ['east'],
                  id: '45-park',
                },
                {
                  dir: ['west'],
                  id: '45-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '44-vand',
            name: 'E. 44th St. and Vanderbilt Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '45-vand',
                },
                {
                  dir: ['south'],
                  id: '43-vand'
                },
                {
                  dir: ['east'],
                  id: '44-park',
                },
                {
                  dir: ['west'],
                  id: '44-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '43-vand',
            name: 'E. 43rd St. and Vanderbilt Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '44-vand',
                },
                {
                  dir: ['south'],
                  id: '42-vand'
                },
                {
                  dir: ['east'],
                  id: '43-park',
                },
                {
                  dir: ['west'],
                  id: '43-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '42-vand',
            name: 'E. 42nd St. and Vanderbilt Ave.',
            desc: `Mobil Building – Nothing this tall could be made of silver, but you are tempted to think so. It is hard to realize that such a gleam can come from a metal as mundane as stainless steel.`,
            exits: [
                {
                  dir: ['north'],
                  id: '43-vand',
                },
                {
                  dir: ['south'],
                  id: '',
                  block: `You can't go that way.`
                },
                {
                  dir: ['east'],
                  id: '42-park',
                },
                {
                  dir: ['west'],
                  id: '42-madi'
                },
                {
                  dir: ['mobil', 'building'],
                  id: '????'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '46-park',
            name: 'E. 46th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '47-park',
                },
                {
                  dir: ['south'],
                  id: '45-park'
                },
                {
                  dir: ['east'],
                  id: '46-depe',
                },
                {
                  dir: ['west'],
                  id: '46-vand'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '45-park',
            name: 'E. 45th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '46-park',
                },
                {
                  dir: ['south'],
                  id: '',
                  block: `You can't go that way.`
                },
                {
                  dir: ['east'],
                  id: '45-depe',
                },
                {
                  dir: ['west'],
                  id: '45-vand'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '42-park',
            name: 'E. 42nd St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '',
                  block: `You can't go that way.`
                },
                {
                  dir: ['south'],
                  id: '41-park',
                },
                {
                  dir: ['east'],
                  id: '42-depe',
                },
                {
                  dir: ['west'],
                  id: '42-vand'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '41-park',
            name: 'E. 41st St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '42-park',
                },
                {
                  dir: ['south'],
                  id: '40-park',
                },
                {
                  dir: ['east'],
                  id: '41-lexi',
                },
                {
                  dir: ['west'],
                  id: '41-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '41-park',
            name: 'E. 41st St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '42-park',
                },
                {
                  dir: ['south'],
                  id: '40-park',
                },
                {
                  dir: ['east'],
                  id: '41-lexi',
                },
                {
                  dir: ['west'],
                  id: '41-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '40-park',
            name: 'E. 40th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '41-park',
                },
                {
                  dir: ['south'],
                  id: '39-park',
                },
                {
                  dir: ['east'],
                  id: '40-lexi',
                },
                {
                  dir: ['west'],
                  id: '40-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '39-park',
            name: 'E. 39th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '40-park',
                },
                {
                  dir: ['south'],
                  id: '38-park',
                },
                {
                  dir: ['east'],
                  id: '39-lexi',
                },
                {
                  dir: ['west'],
                  id: '39-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '38-park',
            name: 'E. 38th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '39-park',
                },
                {
                  dir: ['south'],
                  id: '37-park',
                },
                {
                  dir: ['east'],
                  id: '38-lexi',
                },
                {
                  dir: ['west'],
                  id: '38-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '37-park',
            name: 'E. 37th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '38-park',
                },
                {
                  dir: ['south'],
                  id: '36-park',
                },
                {
                  dir: ['east'],
                  id: '37-lexi',
                },
                {
                  dir: ['west'],
                  id: '37-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '36-park',
            name: 'E. 36th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '37-park',
                },
                {
                  dir: ['south'],
                  id: '35-park',
                },
                {
                  dir: ['east'],
                  id: '36-lexi',
                },
                {
                  dir: ['west'],
                  id: '36-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '35-park',
            name: 'E. 35th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '36-park',
                },
                {
                  dir: ['south'],
                  id: '34-park',
                },
                {
                  dir: ['east'],
                  id: '35-lexi',
                },
                {
                  dir: ['west'],
                  id: '35-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '34-park',
            name: 'E. 34th St. and Park Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '35-park',
                },
                {
                  dir: ['south'],
                  id: '33-park',
                },
                {
                  dir: ['east'],
                  id: '34-lexi',
                },
                {
                  dir: ['west'],
                  id: '34-madi'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '34-lexi',
            name: 'E. 34th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '35-lexi',
                },
                {
                  dir: ['south'],
                  id: '33-lexi',
                },
                {
                  dir: ['east'],
                  id: '34-3',
                },
                {
                  dir: ['west'],
                  id: '34-park'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '35-lexi',
            name: 'E. 35th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '36-lexi',
                },
                {
                  dir: ['south'],
                  id: '34-lexi',
                },
                {
                  dir: ['east'],
                  id: '35-3',
                },
                {
                  dir: ['west'],
                  id: '35-park'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '36-lexi',
            name: 'E. 36th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '37-lexi',
                },
                {
                  dir: ['south'],
                  id: '35-lexi',
                },
                {
                  dir: ['east'],
                  id: '36-3',
                },
                {
                  dir: ['west'],
                  id: '36-park'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '37-lexi',
            name: 'E. 37th St. and Lexington Ave.',
            desc: `There is a luncheonette on the corner.`,
            exits: [
                {
                  dir: ['north'],
                  id: '38-lexi',
                },
                {
                  dir: ['south'],
                  id: '36-lexi',
                },
                {
                  dir: ['east'],
                  id: '37-3',
                },
                {
                  dir: ['west'],
                  id: '37-park'
                },
                {
                  dir: ['luncheonette', 'lunch'],
                  id: '????'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '38-lexi',
            name: 'E. 38th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '39-lexi',
                },
                {
                  dir: ['south'],
                  id: '37-lexi',
                },
                {
                  dir: ['east'],
                  id: '38-3',
                },
                {
                  dir: ['west'],
                  id: '38-park'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '39-lexi',
            name: 'E. 39th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '40-lexi',
                },
                {
                  dir: ['south'],
                  id: '38-lexi',
                },
                {
                  dir: ['east'],
                  id: '39-3',
                },
                {
                  dir: ['west'],
                  id: '39-park'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '40-lexi',
            name: 'E. 40th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '41-lexi',
                },
                {
                  dir: ['south'],
                  id: '39-lexi',
                },
                {
                  dir: ['east'],
                  id: '40-3',
                },
                {
                  dir: ['west'],
                  id: '40-park'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '41-lexi',
            name: 'E. 41st St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '42-lexi',
                },
                {
                  dir: ['south'],
                  id: '40-lexi',
                },
                {
                  dir: ['east'],
                  id: '41-3',
                },
                {
                  dir: ['west'],
                  id: '41-park'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '42-lexi',
            name: 'E. 42nd St. and Lexington Ave.',
            desc: `You are stopped in your tracks by the Marlene Dietrich of New York’s skyscrapers. It’s the Chrysler building swathed in stainless steel, and Art Deco trimmings. It still looks like a million.  `,
            exits: [
                {
                  dir: ['north'],
                  id: '43-lexi',
                },
                {
                  dir: ['south'],
                  id: '41-lexi',
                },
                {
                  dir: ['east'],
                  id: '42-3',
                },
                {
                  dir: ['west'],
                  id: '41-depe'
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            hasSubway: true,
            id: '42-depe',
            name: 'E. 2nd St. and Depew Pl.',
            desc: `Grand Central Station. Crossroads of a million people. What are your chances, you wonder, of meeting someone who used to know you back in your real life? You loiter for a while, waiting for someone to come along, clap you on the shoulder, and say, ‘John Cameron, you old son of a gun – nice to see you again!’ `,
            exits: [
                {
                  dir: ['north'],
                  id: '44-depe',
                },
                {
                  dir: ['south'],
                  id: '',
                  block: `You can't go that way.`
                },
                {
                  dir: ['east'],
                  id: '42-lexi',
                },
                {
                  dir: ['west'],
                  id: '42-park'
                },
                {
                    id: ['grand', 'central', 'station', 'subway'],
                    id: 'gran-cent'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '44-depe',
            name: 'E. 44th St. and Depew Pl.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '45-depe',
                },
                {
                  dir: ['south'],
                  id: '42-depe',
                },
                {
                  dir: ['east'],
                  id: '44-lexi',
                },
                {
                  dir: ['west'],
                  id: '',
                  block: `You can't go that way.`
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '45-depe',
            name: 'E. 45th St. and Depew Pl.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '46-depe',
                },
                {
                  dir: ['south'],
                  id: '44-depe',
                },
                {
                  dir: ['east'],
                  id: '45-lexi',
                },
                {
                  dir: ['west'],
                  id: '45-park',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '46-depe',
            name: 'E. 46th St. and Depew Pl.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '',
                  block: `You can't go that way.`
                },
                {
                  dir: ['south'],
                  id: '45-depe',
                },
                {
                  dir: ['east'],
                  id: '46-lexi',
                },
                {
                  dir: ['west'],
                  id: '46-park',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '43-lexi',
            name: 'E. 43rd St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '44-lexi',
                },
                {
                  dir: ['south'],
                  id: '42-lexi',
                },
                {
                  dir: ['east'],
                  id: '43-3',
                },
                {
                  dir: ['west'],
                  id: '',
                  block: `You can't go that way.`
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '44-lexi',
            name: 'E. 44th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '45-lexi',
                },
                {
                  dir: ['south'],
                  id: '43-lexi',
                },
                {
                  dir: ['east'],
                  id: '44-3',
                },
                {
                  dir: ['west'],
                  id: '44-depe',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '45-lexi',
            name: 'E. 45th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '46-lexi',
                },
                {
                  dir: ['south'],
                  id: '44-lexi',
                },
                {
                  dir: ['east'],
                  id: '45-3',
                },
                {
                  dir: ['west'],
                  id: '45-depe',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '46-lexi',
            name: 'E. 46th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '47-lexi',
                },
                {
                  dir: ['south'],
                  id: '45-lexi',
                },
                {
                  dir: ['east'],
                  id: '46-3',
                },
                {
                  dir: ['west'],
                  id: '46-depe',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '47-lexi',
            name: 'E. 47th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '48-lexi',
                },
                {
                  dir: ['south'],
                  id: '46-lexi',
                },
                {
                  dir: ['east'],
                  id: '47-3',
                },
                {
                  dir: ['west'],
                  id: '47-park',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '48-lexi',
            name: 'E. 48th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '49-lexi',
                },
                {
                  dir: ['south'],
                  id: '47-lexi',
                },
                {
                  dir: ['east'],
                  id: '48-3',
                },
                {
                  dir: ['west'],
                  id: '48-park',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '49-lexi',
            name: 'E. 49th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '50-lexi',
                },
                {
                  dir: ['south'],
                  id: '48-lexi',
                },
                {
                  dir: ['east'],
                  id: '49-3',
                },
                {
                  dir: ['west'],
                  id: '49-park',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '50-lexi',
            name: 'E. 50th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '51-lexi',
                },
                {
                  dir: ['south'],
                  id: '49-lexi',
                },
                {
                  dir: ['east'],
                  id: '50-3',
                },
                {
                  dir: ['west'],
                  id: '50-park',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            hasSubway: true,
            id: '51-lexi',
            name: 'E. 51st St. and Lexington Ave.',
            desc: `There is a subway entrance at this corner.`,
            exits: [
                {
                  dir: ['north'],
                  id: '52-lexi',
                },
                {
                  dir: ['south'],
                  id: '50-lexi',
                },
                {
                  dir: ['east'],
                  id: '51-3',
                },
                {
                  dir: ['west'],
                  id: '51-park',
                },
                {
                    dir: ['subway'],
                    id: '????'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '52-lexi',
            name: 'E. 52nd St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '53-lexi',
                },
                {
                  dir: ['south'],
                  id: '51-lexi',
                },
                {
                  dir: ['east'],
                  id: '52-3',
                },
                {
                  dir: ['west'],
                  id: '52-park',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '53-lexi',
            name: 'E. 53rd St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '54-lexi',
                },
                {
                  dir: ['south'],
                  id: '52-lexi',
                },
                {
                  dir: ['east'],
                  id: '53-3',
                },
                {
                  dir: ['west'],
                  id: '53-park',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '54-lexi',
            name: 'E. 54th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '55-lexi',
                },
                {
                  dir: ['south'],
                  id: '53-lexi',
                },
                {
                  dir: ['east'],
                  id: '54-3',
                },
                {
                  dir: ['west'],
                  id: '54-park',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '55-lexi',
            name: 'E. 55th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '56-lexi',
                },
                {
                  dir: ['south'],
                  id: '54-lexi',
                },
                {
                  dir: ['east'],
                  id: '55-3',
                },
                {
                  dir: ['west'],
                  id: '55-park',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '56-lexi',
            name: 'E. 56th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '57-lexi',
                },
                {
                  dir: ['south'],
                  id: '55-lexi',
                },
                {
                  dir: ['east'],
                  id: '56-3',
                },
                {
                  dir: ['west'],
                  id: '56-park',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '57-lexi',
            name: 'E. 57th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '58-lexi',
                },
                {
                  dir: ['south'],
                  id: '56-lexi',
                },
                {
                  dir: ['east'],
                  id: '57-3',
                },
                {
                  dir: ['west'],
                  id: '57-park',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '58-lexi',
            name: 'E. 58th St. and Lexington Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '59-lexi',
                },
                {
                  dir: ['south'],
                  id: '57-lexi',
                },
                {
                  dir: ['east'],
                  id: '58-3',
                },
                {
                  dir: ['west'],
                  id: '58-park',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            hasSubway: true,
            id: '59-lexi',
            name: 'Central Park S. and Lexington Ave.',
            desc: `There is a subway entrance at this corner.`,
            exits: [
                {
                  dir: ['north'],
                  id: '60-lexi',
                },
                {
                  dir: ['south'],
                  id: '58-lexi',
                },
                {
                  dir: ['east'],
                  id: '59-3',
                },
                {
                  dir: ['west'],
                  id: '59-park',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '59-3',
            name: 'Central Park S. and 3rd Ave.',
            desc: `There is a subway entrance at this corner.`,
            exits: [
                {
                  dir: ['north'],
                  id: '60-3',
                },
                {
                  dir: ['south'],
                  id: '58-3',
                },
                {
                  dir: ['east'],
                  id: '59-2',
                },
                {
                  dir: ['west'],
                  id: '59-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '58-3',
            name: 'E. 58th St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '59-3',
                },
                {
                  dir: ['south'],
                  id: '57-3',
                },
                {
                  dir: ['east'],
                  id: '58-2',
                },
                {
                  dir: ['west'],
                  id: '58-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '57-3',
            name: 'E. 57th St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '58-3',
                },
                {
                  dir: ['south'],
                  id: '56-3',
                },
                {
                  dir: ['east'],
                  id: '57-2',
                },
                {
                  dir: ['west'],
                  id: '57-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '56-3',
            name: 'E. 56th St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '57-3',
                },
                {
                  dir: ['south'],
                  id: '55-3',
                },
                {
                  dir: ['east'],
                  id: '56-2',
                },
                {
                  dir: ['west'],
                  id: '56-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '55-3',
            name: 'E. 55th St. and 3rd Ave.',
            desc: `There is a luncheonette on the corner`,
            exits: [
                {
                  dir: ['north'],
                  id: '56-3',
                },
                {
                  dir: ['south'],
                  id: '54-3',
                },
                {
                  dir: ['east'],
                  id: '55-2',
                },
                {
                  dir: ['west'],
                  id: '55-lexi',
                },
                {
                    dir: ['luncheonette'],
                    id: 'lunc'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '54-3',
            name: 'E. 54th St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '55-3',
                },
                {
                  dir: ['south'],
                  id: '53-3',
                },
                {
                  dir: ['east'],
                  id: '54-2',
                },
                {
                  dir: ['west'],
                  id: '54-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            hasSubway: true,
            id: '53-3',
            name: 'E. 53rd St. and 3rd Ave.',
            desc: `There is a subway entrance at this corner`,
            exits: [
                {
                  dir: ['north'],
                  id: '54-3',
                },
                {
                  dir: ['south'],
                  id: '52-3',
                },
                {
                  dir: ['east'],
                  id: '53-2',
                },
                {
                  dir: ['west'],
                  id: '53-lexi',
                },
                {
                    dir: ['subway'],
                    id: '????'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '52-3',
            name: 'E. 52nd St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '53-3',
                },
                {
                  dir: ['south'],
                  id: '51-3',
                },
                {
                  dir: ['east'],
                  id: '52-2',
                },
                {
                  dir: ['west'],
                  id: '52-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '51-3',
            name: 'E. 51st St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '52-3',
                },
                {
                  dir: ['south'],
                  id: '50-3',
                },
                {
                  dir: ['east'],
                  id: '51-2',
                },
                {
                  dir: ['west'],
                  id: '51-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '50-3',
            name: 'E. 50th St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '51-3',
                },
                {
                  dir: ['south'],
                  id: '49-3',
                },
                {
                  dir: ['east'],
                  id: '50-2',
                },
                {
                  dir: ['west'],
                  id: '50-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '49-3',
            name: 'E. 49th St. and 3rd Ave.',
            desc: `There is a luncheonette on the corner.`,
            exits: [
                {
                  dir: ['north'],
                  id: '50-3',
                },
                {
                  dir: ['south'],
                  id: '48-3',
                },
                {
                  dir: ['east'],
                  id: '49-2',
                },
                {
                  dir: ['west'],
                  id: '49-lexi',
                },
                {
                    dir: ['luncheonette'],
                    id: 'lunc'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '48-3',
            name: 'E. 48th St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '49-3',
                },
                {
                  dir: ['south'],
                  id: '47-3',
                },
                {
                  dir: ['east'],
                  id: '48-2',
                },
                {
                  dir: ['west'],
                  id: '48-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '47-3',
            name: 'E. 47th St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '48-3',
                },
                {
                  dir: ['south'],
                  id: '46-3',
                },
                {
                  dir: ['east'],
                  id: '47-2',
                },
                {
                  dir: ['west'],
                  id: '47-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '46-3',
            name: 'E. 46th St. and 3rd Ave.',
            desc: `There is a lunchonette on the corner.`,
            exits: [
                {
                  dir: ['north'],
                  id: '47-3',
                },
                {
                  dir: ['south'],
                  id: '45-3',
                },
                {
                  dir: ['east'],
                  id: '46-2',
                },
                {
                  dir: ['west'],
                  id: '46-lexi',
                },
                {
                    dir: ['luncheonette'],
                    id: 'lunc'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '45-3',
            name: 'E. 45th St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '46-3',
                },
                {
                  dir: ['south'],
                  id: '44-3',
                },
                {
                  dir: ['east'],
                  id: '45-2',
                },
                {
                  dir: ['west'],
                  id: '45-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '44-3',
            name: 'E. 44th St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '45-3',
                },
                {
                  dir: ['south'],
                  id: '43-3',
                },
                {
                  dir: ['east'],
                  id: '44-2',
                },
                {
                  dir: ['west'],
                  id: '44-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '43-3',
            name: 'E. 43rd St. and 3rd Ave.',
            desc: `The glass and steel case of the Ford Foundation Building resembles an aquarium that any tropical fish might envy. Humans are kept in their ‘natural habitat’ here: a lush indoor park complete with trees and flowers.`,
            exits: [
                {
                  dir: ['north'],
                  id: '44-3',
                },
                {
                  dir: ['south'],
                  id: '42-3',
                },
                {
                  dir: ['east'],
                  id: '43-2',
                },
                {
                  dir: ['west'],
                  id: '43-lexi',
                },
                {
                    dir: ['ford', 'foundation','building'],
                    id: '????'
                }
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '42-3',
            name: 'E. 42nd St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '43-3',
                },
                {
                  dir: ['south'],
                  id: '41-3',
                },
                {
                  dir: ['east'],
                  id: '42-2',
                },
                {
                  dir: ['west'],
                  id: '42-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '41-3',
            name: 'E. 41st St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '42-3',
                },
                {
                  dir: ['south'],
                  id: '40-3',
                },
                {
                  dir: ['east'],
                  id: '41-2',
                },
                {
                  dir: ['west'],
                  id: '41-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '40-3',
            name: 'E. 40th St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '41-3',
                },
                {
                  dir: ['south'],
                  id: '39-3',
                },
                {
                  dir: ['east'],
                  id: '40-2',
                },
                {
                  dir: ['west'],
                  id: '40-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '39-3',
            name: 'E. 39th St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '40-3',
                },
                {
                  dir: ['south'],
                  id: '38-3',
                },
                {
                  dir: ['east'],
                  id: '39-qout',
                },
                {
                  dir: ['west'],
                  id: '39-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '38-3',
            name: 'E. 38th St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '39-3',
                },
                {
                  dir: ['south'],
                  id: '37-3',
                },
                {
                  dir: ['east'],
                  id: '38-qout',
                },
                {
                  dir: ['west'],
                  id: '38-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '37-3',
            name: 'E. 37th St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '38-3',
                },
                {
                  dir: ['south'],
                  id: '36-3',
                },
                {
                  dir: ['east'],
                  id: '37-qout',
                },
                {
                  dir: ['west'],
                  id: '37-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '36-3',
            name: 'E. 36th St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '37-3',
                },
                {
                  dir: ['south'],
                  id: '35-3',
                },
                {
                  dir: ['east'],
                  id: '36-qout',
                },
                {
                  dir: ['west'],
                  id: '36-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '35-3',
            name: 'E. 35th St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '36-3',
                },
                {
                  dir: ['south'],
                  id: '34-3',
                },
                {
                  dir: ['east'],
                  id: '35-qout',
                },
                {
                  dir: ['west'],
                  id: '35-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '34-3',
            name: 'E. 34th St. and 3rd Ave.',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '35-3',
                },
                {
                  dir: ['south'],
                  id: '33-3',
                },
                {
                  dir: ['east'],
                  id: '34-qout',
                },
                {
                  dir: ['west'],
                  id: '34-lexi',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '34-qout',
            name: 'E. 34th St. and Queens Tunnel out',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '35-qout',
                },
                {
                  dir: ['south'],
                  id: '????',
                },
                {
                  dir: ['east'],
                  id: '34-2',
                },
                {
                  dir: ['west'],
                  id: '34-3',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '35-qout',
            name: 'E. 35th St. and Queens Tunnel out',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '36-qout',
                },
                {
                  dir: ['south'],
                  id: '34-qout',
                },
                {
                  dir: ['east'],
                  id: '35-2',
                },
                {
                  dir: ['west'],
                  id: '35-3',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '36-qout',
            name: 'E. 36th St. and Queens Tunnel out',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '37-qout',
                },
                {
                  dir: ['south'],
                  id: '35-qout',
                },
                {
                  dir: ['east'],
                  id: '36-2',
                },
                {
                  dir: ['west'],
                  id: '36-3',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '37-qout',
            name: 'E. 36th St. and Queens Tunnel out',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '38-qout',
                },
                {
                  dir: ['south'],
                  id: '36-qout',
                },
                {
                  dir: ['east'],
                  id: '37-2',
                },
                {
                  dir: ['west'],
                  id: '37-3',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '38-qout',
            name: 'E. 38th St. and Queens Tunnel out',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '39-qout',
                },
                {
                  dir: ['south'],
                  id: '37-qout',
                },
                {
                  dir: ['east'],
                  id: '38-2',
                },
                {
                  dir: ['west'],
                  id: '38-3',
                },
            ]
        },
        {
            isStreets: true,
            coord: [],
            id: '39-qout',
            name: 'E. 39th St. and Queens Tunnel out',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '',
                  block: `You can't go that way.`
                },
                {
                  dir: ['south'],
                  id: '38-qout',
                },
                {
                  dir: ['east'],
                  id: '39-2',
                },
                {
                  dir: ['west'],
                  id: '39-3',
                },
            ]
        },
        {
          id: '34-2',
          name: 'E. 34th St. and 2nd Ave.',
          desc: ``,
          exits: [
              {
                dir: ['north'],
                id: '35-2',
              },
              {
                dir: ['south'],
                id: '33-2',
              },
              {
                dir: ['east'],
                id: '34-qin',
              },
              {
                dir: ['west'],
                id: '34-qout',
              },
          ]
      },
      {
        id: '35-2',
        name: 'E. 35th St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '36-2',
            },
            {
              dir: ['south'],
              id: '34-2',
            },
            {
              dir: ['east'],
              id: '35-qin',
            },
            {
              dir: ['west'],
              id: '35-qout',
            },
        ]
      },
      {
        id: '36-2',
        name: 'E. 36th St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '37-2',
            },
            {
              dir: ['south'],
              id: '35-2',
            },
            {
              dir: ['east'],
              id: '36-qin',
            },
            {
              dir: ['west'],
              id: '36-qout',
            },
        ]
      },
      {
        id: '37-2',
        name: 'E. 37th St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '38-2',
            },
            {
              dir: ['south'],
              id: '36-2',
            },
            {
              dir: ['east'],
              id: '37-qin',
            },
            {
              dir: ['west'],
              id: '37-qout',
            },
        ]
      },
      {
        id: '38-2',
        name: 'E. 38th St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '39-2',
            },
            {
              dir: ['south'],
              id: '37-2',
            },
            {
              dir: ['east'],
              id: '38-1',
            },
            {
              dir: ['west'],
              id: '38-qout',
            },
        ]
      },
      {
        id: '39-2',
        name: 'E. 39th St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '40-2',
            },
            {
              dir: ['south'],
              id: '38-2',
            },
            {
              dir: ['east'],
              id: '39-tudo',
            },
            {
              dir: ['west'],
              id: '39-qout',
            },
        ]
      },
      {
        id: '40-2',
        name: 'E. 40th St. and 2nd Ave.',
        desc: `There is a luncheonette on the corner`,
        exits: [
            {
              dir: ['north'],
              id: '41-2',
            },
            {
              dir: ['south'],
              id: '39-2',
            },
            {
              dir: ['east'],
              id: '40-tudo',
            },
            {
              dir: ['west'],
              id: '40-3',
            },
            {
              dir: ['luncheonette', 'lunch'],
              id: '????'
            }
        ]
      },
      {
        id: '41-2',
        name: 'E. 41st St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '42-2',
            },
            {
              dir: ['south'],
              id: '40-2',
            },
            {
              dir: ['east'],
              id: '41-tudo',
            },
            {
              dir: ['west'],
              id: '41-3',
            },
        ]
      },
      {
        id: '42-2',
        name: 'E. 42nd St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '43-2',
            },
            {
              dir: ['south'],
              id: '41-2',
            },
            {
              dir: ['east'],
              id: '42-tudo',
            },
            {
              dir: ['west'],
              id: '42-3',
            },
        ]
      },
      {
        id: '43-2',
        name: 'E. 43rd St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '44-2',
            },
            {
              dir: ['south'],
              id: '42-2',
            },
            {
              dir: ['east'],
              id: '43-tudo',
            },
            {
              dir: ['west'],
              id: '43-3',
            },
        ]
      },
      {
        id: '44-2',
        name: 'E. 44th St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '45-2',
            },
            {
              dir: ['south'],
              id: '43-2',
            },
            {
              dir: ['east'],
              id: '44-1',
            },
            {
              dir: ['west'],
              id: '44-3',
            },
        ]
      },
      {
        id: '45-2',
        name: 'E. 45th St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '46-2',
            },
            {
              dir: ['south'],
              id: '44-2',
            },
            {
              dir: ['east'],
              id: '45-1',
            },
            {
              dir: ['west'],
              id: '45-3',
            },
        ]
      },
      {
        id: '46-2',
        name: 'E. 46th St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '47-2',
            },
            {
              dir: ['south'],
              id: '45-2',
            },
            {
              dir: ['east'],
              id: '46-1',
            },
            {
              dir: ['west'],
              id: '46-3',
            },
        ]
      },
      {
        id: '47-2',
        name: 'E. 47th St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '48-2',
            },
            {
              dir: ['south'],
              id: '46-2',
            },
            {
              dir: ['east'],
              id: '47-1',
            },
            {
              dir: ['west'],
              id: '47-3',
            },
        ]
      },
      {
        id: '48-2',
        name: 'E. 48th St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '49-2',
            },
            {
              dir: ['south'],
              id: '47-2',
            },
            {
              dir: ['east'],
              id: '48-1',
            },
            {
              dir: ['west'],
              id: '48-3',
            },
        ]
      },
      {
        id: '49-2',
        name: 'E. 49th St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '50-2',
            },
            {
              dir: ['south'],
              id: '48-2',
            },
            {
              dir: ['east'],
              id: '49-1',
            },
            {
              dir: ['west'],
              id: '49-3',
            },
        ]
      },
      {
        id: '50-2',
        name: 'E. 50th St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '51-2',
            },
            {
              dir: ['south'],
              id: '49-2',
            },
            {
              dir: ['east'],
              id: '50-1',
            },
            {
              dir: ['west'],
              id: '50-3',
            },
        ]
      },
      {
        id: '51-2',
        name: 'E. 51st St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '52-2',
            },
            {
              dir: ['south'],
              id: '50-2',
            },
            {
              dir: ['east'],
              id: '51-1',
            },
            {
              dir: ['west'],
              id: '51-3',
            },
        ]
      },
      {
        id: '52-2',
        name: 'E. 52nd St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '53-2',
            },
            {
              dir: ['south'],
              id: '51-2',
            },
            {
              dir: ['east'],
              id: '52-1',
            },
            {
              dir: ['west'],
              id: '52-3',
            },
        ]
      },
      {
        id: '53-2',
        name: 'E. 53rd St. and 2nd Ave.',
        desc: `There is a luncheonette on the corner.`,
        exits: [
            {
              dir: ['north'],
            id: '54-2',
            },
            {
              dir: ['south'],
              id: '52-2',
            },
            {
              dir: ['east'],
              id: '53-1',
            },
            {
              dir: ['west'],
              id: '53-3',
            },
        ]
      },
      {
        id: '54-2',
        name: 'E. 54th St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '55-2',
            },
            {
              dir: ['south'],
              id: '53-2',
            },
            {
              dir: ['east'],
              id: '54-1',
            },
            {
              dir: ['west'],
              id: '54-3',
            },
        ]
      },
      {
        id: '55-2',
        name: 'E. 55th St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '56-2',
            },
            {
              dir: ['south'],
              id: '54-2',
            },
            {
              dir: ['east'],
              id: '55-1',
            },
            {
              dir: ['west'],
              id: '55-3',
            },
        ]
      },
      {
        id: '56-2',
        name: 'E. 56th St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '57-2',
            },
            {
              dir: ['south'],
              id: '55-2',
            },
            {
              dir: ['east'],
              id: '56-1',
            },
            {
              dir: ['west'],
              id: '56-3',
            },
        ]
      },
      {
        id: '57-2',
        name: 'E. 57th St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '58-2',
            },
            {
              dir: ['south'],
              id: '56-2',
            },
            {
              dir: ['east'],
              id: '57-quen',
            },
            {
              dir: ['west'],
              id: '57-3',
            },
        ]
      },
      {
        id: '58-2',
        name: 'E. 58th St. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '59-2',
            },
            {
              dir: ['south'],
              id: '57-2',
            },
            {
              dir: ['east'],
              id: '58-quen',
            },
            {
              dir: ['west'],
              id: '58-3',
            },
        ]
      },
      {
        id: '59-2',
        name: 'Central Park S. and 2nd Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: 'quee-2',
            },
            {
              dir: ['south'],
              id: '58-2',
            },
            {
              dir: ['east'],
              id: '59-quen',
            },
            {
              dir: ['west'],
              id: '59-3',
            },
        ]
      },
      {
        id: '59-quen',
        name: 'E. 59th St. and Queensboro Bridge In',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '60-quee',
            },
            {
              dir: ['south'],
              id: '58-quen',
            },
            {
              dir: ['east'],
              id: '59-1',
            },
            {
              dir: ['west'],
              id: '59-2',
            },
        ]
      },
      {
        id: '58-quen',
        name: 'E. 58th St. and Queensboro Bridge In',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '59-quen',
            },
            {
              dir: ['south'],
              id: '57-quen',
            },
            {
              dir: ['east'],
              id: '58-1',
            },
            {
              dir: ['west'],
              id: '58-2',
            },
        ]
      },
      {
        id: '57-quen',
        name: 'E. 57th St. and Queensboro Bridge In',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '58-quen',
            },
            {
              dir: ['south'],
              id: '',
              block: `You can't go that way.`
            },
            {
              dir: ['east'],
              id: '57-1',
            },
            {
              dir: ['west'],
              id: '57-2',
            },
        ]
      },
      {
        id: '59-1',
        name: 'Central Park S. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '60-1',
            },
            {
              dir: ['south'],
              id: '58-1',
            },
            {
              dir: ['east'],
              id: '59-sutt',
            },
            {
              dir: ['west'],
              id: '59-quen',
            },
        ]
      },
      {
        id: '58-1',
        name: 'E. 58th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '59-1',
            },
            {
              dir: ['south'],
              id: '57-1',
            },
            {
              dir: ['east'],
              id: '58-sutt',
            },
            {
              dir: ['west'],
              id: '58-quen',
            },
        ]
      },
      {
        id: '57-1',
        name: 'E. 57th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '58-1',
            },
            {
              dir: ['south'],
              id: '56-1',
            },
            {
              dir: ['east'],
              id: '57-sutt',
            },
            {
              dir: ['west'],
              id: '57-quen',
            },
        ]
      },
      {
        id: '56-1',
        name: 'E. 56th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '57-1',
            },
            {
              dir: ['south'],
              id: '55-1',
            },
            {
              dir: ['east'],
              id: '56-sutt',
            },
            {
              dir: ['west'],
              id: '56-2',
            },
        ]
      },
      {
        id: '55-1',
        name: 'E. 55th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
            id: '56-1',
            },
            {
              dir: ['south'],
              id: '54-1',
            },
            {
              dir: ['east'],
              id: '55-sutt',
            },
            {
              dir: ['west'],
              id: '55-2',
            },
        ]
      },
      {
        id: '54-1',
        name: 'E. 54th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '55-1',
            },
            {
              dir: ['south'],
              id: '53-1',
            },
            {
              dir: ['east'],
              id: '54-sutt',
            },
            {
              dir: ['west'],
              id: '54-2',
            },
        ]
      },
      {
        id: '53-1',
        name: 'E. 53rd St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '54-1',
            },
            {
              dir: ['south'],
              id: '52-1',
            },
            {
              dir: ['east'],
              id: '53-sutt',
            },
            {
              dir: ['west'],
              id: '53-2',
            },
        ]
      },
      {
        id: '52-1',
        name: 'E. 52nd St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '53-1',
            },
            {
              dir: ['south'],
              id: '51-1',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way.`
            },
            {
              dir: ['west'],
              id: '52-2',
            },
        ]
      },
      {
        id: '51-1',
        name: 'E. 51st St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '52-1',
            },
            {
              dir: ['south'],
              id: '50-1',
            },
            {
              dir: ['east'],
              id: '51-beek',
            },
            {
              dir: ['west'],
              id: '51-2',
            },
        ]
      },
      {
        id: '50-1',
        name: 'E. 50th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '51-1',
            },
            {
              dir: ['south'],
              id: '49-1',
            },
            {
              dir: ['east'],
              id: '50-beek',
            },
            {
              dir: ['west'],
              id: '50-2',
            },
        ]
      },
      {
        id: '49-1',
        name: 'E. 49th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '50-1',
            },
            {
              dir: ['south'],
              id: '48-1',
            },
            {
              dir: ['east'],
              id: '49-beek',
            },
            {
              dir: ['west'],
              id: '49-2',
            },
        ]
      },
      {
        id: '48-1',
        name: 'E. 48th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '49-1',
            },
            {
              dir: ['south'],
              id: '47-1',
            },
            {
              dir: ['east'],
              id: '',
              block: `You Can't go that way.`
            },
            {
              dir: ['west'],
              id: '48-2',
            },
        ]
      },
      {
        id: '47-1',
        name: 'E. 47th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '48-1',
            },
            {
              dir: ['south'],
              id: '46-1',
            },
            {
              dir: ['east'],
              id: '',
              block: `You Can't go that way.`
            },
            {
              dir: ['west'],
              id: '47-2',
            },
        ]
      },
      {
        id: '46-1',
        name: 'E. 46th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '47-1',
            },
            {
              dir: ['south'],
              id: '45-1',
            },
            {
              dir: ['east'],
              id: '',
              block: `You Can't go that way.`
            },
            {
              dir: ['west'],
              id: '46-2',
            },
        ]
      },
      {
        id: '45-1',
        name: 'E. 45th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '46-1',
            },
            {
              dir: ['south'],
              id: '44-1',
            },
            {
              dir: ['east'],
              id: '',
              block: `You Can't go that way.`
            },
            {
              dir: ['west'],
              id: '45-2',
            },
        ]
      },
      {
        id: '44-1',
        name: 'E. 44th St. and 1st Ave.',
        desc: `The great green glass slab of the UN Secretariat looms over the swooping shape of the General Assembly Building. Flags of member nations snap in the wind that comes in from the East River. For a moment you wish you could be just an ordinary tourist so you could enjoy the vista the way it deserves. But the vista includes twenty assorted policemen, and you get the feeling this is nowhere to loiter.`,
        exits: [
            {
              dir: ['north'],
              id: '45-1',
            },
            {
              dir: ['south'],
              id: '43-1',
            },
            {
              dir: ['east'],
              id: '',
              block: `You Can't go that way.`
            },
            {
              dir: ['west'],
              id: '44-2',
            },
            {
              dir: ['UN', 'building', 'secretariat'],
              id: '',
              block: 'There is no point in going there.',
            },
        ]
      },
      {
        id: '42-1',
        name: 'E. 42nd St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '44-1',
            },
            {
              dir: ['south'],
              id: '41-1',
            },
            {
              dir: ['east'],
              id: '42-fdrd',
            },
            {
              dir: ['west'],
              id: '42-tudo',
            },
        ]
      },
      {
        id: '41-1',
        name: 'E. 41st St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '42-1',
            },
            {
              dir: ['south'],
              id: '40-1',
            },
            {
              dir: ['east'],
              id: '41-fdrd',
            },
            {
              dir: ['west'],
              id: '41-tudo',
            },
        ]
      },
      {
        id: '40-1',
        name: 'E. 40th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '41-1',
            },
            {
              dir: ['south'],
              id: '39-1',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way.`
            },
            {
              dir: ['west'],
              id: '40-tudo',
            },
        ]
      },
      {
        id: '39-1',
        name: 'E. 39th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '40-1',
            },
            {
              dir: ['south'],
              id: '38-1',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way.`
            },
            {
              dir: ['west'],
              id: '39-tudo',
            },
        ]
      },
      {
        id: '38-1',
        name: 'E. 38th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '39-1',
            },
            {
              dir: ['south'],
              id: '37-1',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way.`
            },
            {
              dir: ['west'],
              id: '38-2',
            },
        ]
      },
      {
        id: '37-1',
        name: 'E. 37th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '38-1',
            },
            {
              dir: ['south'],
              id: '36-1',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way.`
            },
            {
              dir: ['west'],
              id: '37-qin',
            },
        ]
      },
      {
        id: '36-1',
        name: 'E. 36th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '37-1',
            },
            {
              dir: ['south'],
              id: '35-1',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way.`
            },
            {
              dir: ['west'],
              id: '36-qin',
            },
        ]
      },
      {
        id: '35-1',
        name: 'E. 35th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '36-1',
            },
            {
              dir: ['south'],
              id: '34-1',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way.`
            },
            {
              dir: ['west'],
              id: '35-qin',
            },
        ]
      },
      {
        id: '34-1',
        name: 'E. 34th St. and 1st Ave.',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '35-1',
            },
            {
              dir: ['south'],
              id: '33-1',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way.`
            },
            {
              dir: ['west'],
              id: '34-qin',
            },
        ]
      },
      {
        id: '39-tudo',
        name: 'E. 39th St. and Tudor Place',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '40-tudo',
            },
            {
              dir: ['south'],
              id: '',
              block: `You can't go that way.`
            },
            {
              dir: ['east'],
              id: '39-1',
            },
            {
              dir: ['west'],
              id: '39-2',
            },
        ]
      },
      {
        id: '40-tudo',
        name: 'E. 40th St. and Tudor Place',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '41-tudo',
            },
            {
              dir: ['south'],
              id: '39-tudo',
            },
            {
              dir: ['east'],
              id: '40-1',
            },
            {
              dir: ['west'],
              id: '40-2',
            },
        ]
      },
      {
        id: '41-tudo',
        name: 'E. 41st St. and Tudor Place',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '42-tudo',
            },
            {
              dir: ['south'],
              id: '40-tudo',
            },
            {
              dir: ['east'],
              id: '41-1',
            },
            {
              dir: ['west'],
              id: '41-2',
            },
        ]
      },
      {
        id: '42-tudo',
        name: 'E. 42nd St. and Tudor Place',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '43-tudo',
            },
            {
              dir: ['south'],
              id: '41-tudo',
            },
            {
              dir: ['east'],
              id: '42-1',
            },
            {
              dir: ['west'],
              id: '42-2',
            },
        ]
      },
      {
        id: '43-tudo',
        name: 'E. 40th St. and Tudor Place',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '',
              block: `You can't go that way.`
            },
            {
              dir: ['south'],
              id: '42-tudo',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way.`
            },
            {
              dir: ['west'],
              id: '43-2',
            },
        ]
      },
      {
        id: '41-fdrd',
        name: 'E. 41st St. and FDR Drive',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '????',
            },
            {
              dir: ['south'],
              id: '????',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way`
            },
            {
              dir: ['west'],
              id: '41-1',
            },
        ]
      },
      {
        id: '42-fdrd',
        name: 'E. 42nd St. and FDR Drive',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '????',
            },
            {
              dir: ['south'],
              id: '41-fdrd',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way`
            },
            {
              dir: ['west'],
              id: '42-1',
            },
        ]
      },
      {
        id: '49-beek',
        name: 'E. 49th St. and Beekman Place',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '50-beek',
            },
            {
              dir: ['south'],
              id: '',
              block: `You can't go that way`
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way`
            },
            {
              dir: ['west'],
              id: '49-1',
            },
        ]
      },
      {
        id: '50-beek',
        name: 'E. 50th St. and Beekman Place',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '51-beek',
            },
            {
              dir: ['south'],
              id: '49-beek',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way`
            },
            {
              dir: ['west'],
              id: '50-1',
            },
        ]
      },
      {
        id: '51-beek',
        name: 'E. 51st St. and Beekman Place',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '',
              block: `You can't go that way`
            },
            {
              dir: ['south'],
              id: '50-beek',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way`
            },
            {
              dir: ['west'],
              id: '51-1',
            },
        ]
      },
      {
        id: '53-sutt',
        name: 'E. 53rd St. and Sutton Place',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '54-sutt',
            },
            {
              dir: ['south'],
              id: '',
              block: `You can't go that way`
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way`
            },
            {
              dir: ['west'],
              id: '53-1',
            },
        ]
      },
      {
        id: '54-sutt',
        name: 'E. 54th St. and Sutton Place',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '55-sutt',
            },
            {
              dir: ['south'],
              id: '53-sutt',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way`
            },
            {
              dir: ['west'],
              id: '54-1',
            },
        ]
      },
      {
        id: '55-sutt',
        name: 'E. 55th St. and Sutton Place',
        desc: `In a city of strange sights this has to be one of the strangest.  A gigantic office building in the shape of a chest of drawers has come to rest on what seems to be a gigantic pagan temple, complete with gilded idol. But who is the god being worshipped here? 
        
        He carries a bundle of lightning bolts, but he’s too slim for Zeus. `,
        exits: [
            {
              dir: ['north'],
              id: '56-sutt',
            },
            {
              dir: ['south'],
              id: '54-sutt',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way`
            },
            {
              dir: ['west'],
              id: '55-1',
            },
            {
              dir: ['office', 'building', 'drawers', 'drawer'],
              id: '',
              block: `Finally you have to ask one of the attendants of the shrine, who stands behind the marble altar to INFORMATION. He gives you a fishy look and tells you to keep moving.`
            }
        ]
      },
      {
        id: '56-sutt',
        name: 'E. 56th St. and Sutton Place',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '57-sutt',
            },
            {
              dir: ['south'],
              id: '55-sutt',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way`
            },
            {
              dir: ['west'],
              id: '56-1',
            },
        ]
      },
      {
        id: '57-sutt',
        name: 'E. 57th St. and Sutton Place',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '58-sutt',
            },
            {
              dir: ['south'],
              id: '56-sutt',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way`
            },
            {
              dir: ['west'],
              id: '57-1',
            },
        ]
      },
      {
        id: '58-sutt',
        name: 'E. 58th St. and Sutton Place',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '59-sutt',
            },
            {
              dir: ['south'],
              id: '57-sutt',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way`
            },
            {
              dir: ['west'],
              id: '58-1',
            },
        ]
      },
      {
        id: '59-sutt',
        name: 'Central Park S. and Sutton Place',
        desc: ``,
        exits: [
            {
              dir: ['north'],
              id: '????',
            },
            {
              dir: ['south'],
              id: '58-sutt',
            },
            {
              dir: ['east'],
              id: '',
              block: `You can't go that way`
            },
            {
              dir: ['west'],
              id: '59-1',
            },
        ]
      },
    ],

}

//desc: `There is a subway entrance at this corner.`,
