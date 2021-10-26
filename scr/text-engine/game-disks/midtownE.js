const midtownEast = {
    roomId: 'hote-exit',
    currPos: [],
    rooms: [
        {
            id: 'hote-exit',
            name: 'Sunderland Hotel Lobby',
            desc: `You exit the Sunderland with a feeling a POW must have when he cuts through the last strands of barbed wire separating him from freedom. It feels great to be a single faceless, nameless atom among the million others churning about in the grid of Manhattan's streets. It feels safe.`,
            onEnter: () => {
                pressEnter('hote-exit1');
            },
            exits: []
        },
        {
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
            id: 'hote-exit2',
            name: 'Sunderland Hotel Lobby',
            desc: `As you approach Fifth Avenue, the brief buoyancy of feeling free gives way to ordinary what-now anxieties. You've got no money, no credit card, nowhere to sleep (you certainly can't stay on at the Sunderland), and no visible means of support.`,
            onEnter: () => {
                pressEnter('hote-exit3');
            },
            exits: []
        },
        {
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
                  dir: ['Subway'],
                  id: '????',
                },
            ]
        },
        {
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
            id: 'plaz-hote',
            name: 'Lobby of the Plaza Hotel',
            desc: `You enter the Plaza, and the lobby is more splendid than the facade. Marble, gilt, carpets, chandeliers, potted palms--the works. A voice deep inside you says you belong here, but the look on the face of the liveried security guard says that you don’t. You ignore the voice deep inside and leave with a sigh of regret.`,
            exits:[],
            onEnter: () => {
                pressEnter('58-5')
            },
        },
        {
            id: '59-5',
            name: 'Central Park S. and 5th Ave',
            desc: `There is a subway entrance at this corner.`,
            exits: [
                {
                  dir: ['north'],
                  id: '???',
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
            id: '59-madi',
            name: 'E. 59th St. and Madison Ave',
            desc: ``,
            exits: [
                {
                  dir: ['north'],
                  id: '???',
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
            id: '58-madi',
            name: 'E. 58th St. and Madison Ave',
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
            id: '57-madi',
            name: 'E. 57th St. and Madison Ave',
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
            id: '56-madi',
            name: 'E. 56th St. and Madison Ave',
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
            id: '56-madi',
            name: 'E. 56th St. and Madison Ave',
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
            id: '55-madi',
            name: 'E. 55th St. and Madison Ave',
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
            id: '54-madi',
            name: 'E. 54th St. and Madison Ave',
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
            id: '53-madi',
            name: 'E. 53rd St. and Madison Ave',
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
            id: '52-madi',
            name: 'E. 52nd St. and Madison Ave',
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
            id: '51-madi',
            name: 'E. 51st St. and Madison Ave',
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
            id: '50-madi',
            name: 'E. 50th St. and Madison Ave',
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
            id: '49-madi',
            name: 'E. 49th St. and Madison Ave',
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
            id: '48-madi',
            name: 'E. 48th St. and Madison Ave',
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
            id: '47-madi',
            name: 'E. 47th St. and Madison Ave',
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
            id: '46-madi',
            name: 'E. 46th St. and Madison Ave',
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
            id: '45-madi',
            name: 'E. 45th St. and Madison Ave',
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
            id: '44-madi',
            name: 'E. 44th St. and Madison Ave',
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
            id: '43-madi',
            name: 'E. 43rd St. and Madison Ave',
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
            id: '42-madi',
            name: 'E. 42nd St. and Madison Ave',
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
            id: '41-madi',
            name: 'E. 41st St. and Madison Ave',
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
            id: '40-madi',
            name: 'E. 40th St. and Madison Ave',
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
            id: '39-madi',
            name: 'E. 39th St. and Madison Ave',
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
            id: '39-madi',
            name: 'E. 39th St. and Madison Ave',
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
            id: '38-madi',
            name: 'E. 38th St. and Madison Ave',
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
            id: '37-madi',
            name: 'E. 37th St. and Madison Ave',
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
            id: '36-madi',
            name: 'E. 36th St. and Madison Ave',
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
            id: '35-madi',
            name: 'E. 35th St. and Madison Ave',
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
            id: '34-madi',
            name: 'E. 34th St. and Madison Ave',
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
            id: '34-5',
            name: 'W. 34th St. and 5th Ave',
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
            id: '35-5',
            name: 'W. 35th St. and 5th Ave',
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
            id: '36-5',
            name: 'W. 36th St. and 5th Ave',
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
            id: '37-5',
            name: 'W. 37th St. and 5th Ave',
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
            id: '38-5',
            name: 'W. 38th St. and 5th Ave',
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
            id: '38-5',
            name: 'W. 38th St. and 5th Ave',
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
            id: '39-5',
            name: 'W. 39th St. and 5th Ave',
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
            id: '40-5',
            name: 'W. 40th St. and 5th Ave',
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
            id: '41-5',
            name: 'W. 41st St. and 5th Ave',
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
            id: '42-5',
            name: 'W. 42nd St. and 5th Ave',
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
            id: '43-5',
            name: 'W. 43rd St. and 5th Ave',
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
            id: '44-5',
            name: 'W. 44th St. and 5th Ave',
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
            id: '45-5',
            name: 'W. 45th St. and 5th Ave',
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
            id: '46-5',
            name: 'W. 46th St. and 5th Ave',
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
            id: '47-5',
            name: 'W. 47th St. and 5th Ave',
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
            id: 'bren',
            name: '',
            desc: '',
            exits:[]
        },
        {
            id: '48-5',
            name: 'W. 48th St. and 5th Ave',
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
            id: 'barn-nobl',
            name: '',
            desc: '',
            exits:[]
        },
        {
            id: 'scri',
            name: '',
            desc: '',
            exits:[]
        },
        {
            id: '49-5',
            name: 'W. 49th St. and 5th Ave',
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
            id: '50-5',
            name: 'W. 50th St. and 5th Ave',
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
            id: '51-5',
            name: 'W. 51st St. and 5th Ave',
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
            id: '52-5',
            name: 'W. 52nd St. and 5th Ave',
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
            id: '59-park',
            name: 'E. 59th St. and Park Ave',
            desc: `There is a restaurant called Nedicks here.`,
            exits: [
                {
                  dir: ['north'],
                  id: '????',
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
            id: '58-park',
            name: 'E. 58th St. and Park Ave',
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
            id: '57-park',
            name: 'E. 57th St. and Park Ave',
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
            id: '56-park',
            name: 'E. 56th St. and Park Ave',
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
            id: '55-park',
            name: 'E. 55th St. and Park Ave',
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
            id: '54-park',
            name: 'E. 54th St. and Park Ave',
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
            id: '53-park',
            name: 'E. 53rd St. and Park Ave',
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
            id: '52-park',
            name: 'E. 52nd St. and Park Ave',
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
            id: '51-park',
            name: 'E. 51st St. and Park Ave',
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
            id: '50-park',
            name: 'E. 50th St. and Park Ave',
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
            id: '49-park',
            name: 'E. 49th St. and Park Ave',
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
            id: '48-park',
            name: 'E. 48th St. and Park Ave',
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
            id: '47-park',
            name: 'E. 47th St. and Park Ave',
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
            id: '47-vand',
            name: 'E. 47th St. and Vanderbilt Ave',
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
            id: '46-vand',
            name: 'E. 46th St. and Vanderbilt Ave',
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
            id: '45-vand',
            name: 'E. 45th St. and Vanderbilt Ave',
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
            id: '44-vand',
            name: 'E. 44th St. and Vanderbilt Ave',
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
            id: '43-vand',
            name: 'E. 43rd St. and Vanderbilt Ave',
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
            id: '42-vand',
            name: 'E. 42nd St. and Vanderbilt Ave',
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
            id: '46-park',
            name: 'E. 46th St. and Park Ave',
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
            id: '45-park',
            name: 'E. 45th St. and Park Ave',
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
            id: '42-park',
            name: 'E. 42nd St. and Park Ave',
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
            id: '41-park',
            name: 'E. 41st St. and Park Ave',
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
            id: '41-park',
            name: 'E. 41st St. and Park Ave',
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
            id: '40-park',
            name: 'E. 40th St. and Park Ave',
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
            id: '39-park',
            name: 'E. 39th St. and Park Ave',
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
            id: '38-park',
            name: 'E. 38th St. and Park Ave',
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
            id: '37-park',
            name: 'E. 37th St. and Park Ave',
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
            id: '37-park',
            name: 'E. 37th St. and Park Ave',
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
    ],

}

//desc: `There is a subway entrance at this corner.`,
