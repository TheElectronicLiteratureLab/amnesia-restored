const midtownEast = {
  roomId: '54-5',
  currPos: [],
  rooms: [
    {
      id: 'hote-exit',
      coord: [],
      name: 'Sunderland Hotel Lobby',
      desc: `You exit the Sunderland with a feeling a POW must have when he cuts through the last strands of barbed wire separating him from freedom. It feels great to be a single faceless, nameless atom among the million others churning about in the grid of Manhattan's streets. It feels safe.`,
      isStreets: true,
      onEnter: () => {
        pressEnter('hote-exit1');
      },
      exits: []
    },
    {
      id: 'hote-exit1',
      coord: [],
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
      coord: [],
      name: 'Sunderland Hotel Lobby',
      desc: `As you approach Fifth Avenue, the brief buoyancy of feeling free gives way to ordinary what-now anxieties. You've got no money, no credit card, nowhere to sleep (you certainly can't stay on at the Sunderland), and no visible means of support.`,
      isStreets: true,
      onEnter: () => {
        pressEnter('hote-exit3');
      },
      exits: []
    },
    {
      id: 'hote-exit3',
      coord: [],
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
      coord: [],
      name: 'W. 53rd St, and 5th Ave.',
      desc: `On 53rd Street stands the Sunderland hotel. Across the street, a glass tower rises above the Museum of Modern Art == New York's big MOMA.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '54-5'},
        {dir: 'south', id: '52-5'},
        {dir: 'east', id: '53-madi'},
        {dir: 'west', id: '53-amer'}, 
        {dir: ['Sunderland', 'hotel'], id: '????'},
      ]
    },
    {
      id: '54-5',
      coord: [],
      name: 'W. 54th St, and 5th Ave.',
      desc: `There is a subway entrance at this corner.`,
      isStreets: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '55-5'},
        {dir: 'south', id: '53-5'},
        {dir: 'east', id: '54-madi'},
        {dir: 'west', id: '54-amer'}, 
        {dir: ['subway'], id: '????'},
      ]
    },
    {
      id: '55-5',
      coord: [],
      name: 'W. 55th St, and 5th Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '56-5'},
        {dir: 'south', id: '54-5'},
        {dir: 'east', id: '55-madi'},
        {dir: 'west', id: '55-amer'}, 
      ]
    },
    {
      id: '56-5',
      coord: [],
      name: 'W. 56th St, and 5th Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '57-5'},
        {dir: 'south', id: '55-5'},
        {dir: 'east', id: '56-madi'},
        {dir: 'west', id: '56-amer'}, 
      ]
    },
    {
      id: '57-5',
      coord: [],
      name: 'W. 57th St, and 5th Ave.',
      desc: `Every block, every shop front, in this part of town seems to bear another Famous Name. This corner, which from a distance looked like a large granite tombstone, turns out on closer inspection to be none other than that celebrated breakfast club, Tiffany’s. Inside each of the tiny windows in the fortress-like facade is a modest bouquet of tea-roses, each held together by about $50,000 worth of diamonds, pearls, emeralds, and rubies. An ideal low-cholesterol breakfast.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '58-5'},
        {dir: 'south', id: '56-5'},
        {dir: 'east', id: '57-madi'},
        {dir: 'west', id: '57-amer'}, 
      ]
    },
    {
      id: '58-5',
      coord: [],
      name: 'W. 58th St, and 5th Ave.',
      desc: `There are certain buildings--the Pyramids, St. Peter’s in Rome, the White House--that even an amnesiac would probably recognize. And here’s another--the Plaza Hotel. One limousine after another pulls up to the brazen art nouveau canopy, like filings of money drawn irresistibly to a great Money Magnet.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '59-5'},
        {dir: 'south', id: '57-5'},
        {dir: 'east', id: '58-madi'},
        {dir: 'west', id: '58-amer'},
        {dir: ['plaza', 'hotel'], id: 'plaz-hote'}
      ]
    },
    {
      id: 'plaz-hote',
      coord: [],
      name: 'Lobby of the Plaza Hotel',
      desc: `You enter the Plaza, and the lobby is more splendid than the facade. Marble, gilt, carpets, chandeliers, potted palms--the works. A voice deep inside you says you belong here, but the look on the face of the liveried security guard says that you don’t. You ignore the voice deep inside and leave with a sigh of regret.`,
      isStreets: true,
      exits:[],
      onEnter: () => {
        pressEnter('58-5')
      },
    },
    {
      id: '59-5',
      coord: [],
      name: 'Central Park S. and 5th Ave.',
      desc: `There is a subway entrance at this corner.`,
      isStreets: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '60-5'},
        {dir: 'south', id: '58-5'},
        {dir: 'east', id: '59-madi'},
        {dir: 'west', id: '59-amer'},
        {dir: ['subway'], id: '???'}
      ]
    },
    {
      id: '59-madi',
      coord: [],
      name: 'E. 59th St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '60-madi'},
        {dir: 'south', id: '58-madi'},
        {dir: 'east', id: '59-park'},
        {dir: 'west', id: '59-5'},
      ]
    },
    {
      id: '58-madi',
      coord: [],
      name: 'E. 58th St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '59-madi'},
        {dir: 'south', id: '57-madi'},
        {dir: 'east', id: '58-park'},
        {dir: 'west', id: '58-5'},
      ]
    },
    {
      id: '57-madi',
      coord: [],
      name: 'E. 57th St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '58-madi'},
        {dir: 'south', id: '56-madi'},
        {dir: 'east', id: '57-park'},
        {dir: 'west', id: '57-5'},
      ]
    },
    {
      id: '56-madi',
      coord: [],
      name: 'E. 56th St. and Madison Ave.',
      desc: `The sign above the store's front window, written in letters that imitate a dot-matrix printout, says: User-Friendly Computer Store.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '57-madi'},
        {dir: 'south', id: '55-madi'},
        {dir: 'east', id: '56-park'},
        {dir: 'west', id: '56-5'},
        {dir: ['computer', 'store'], id: 'user-frie'}
      ]
    },
    {
      id: '56-madi',
      coord: [],
      name: 'E. 56th St. and Madison Ave.',
      desc: `As you come to the corner of Madison Avenue, you notice, halfway down the block a shop front that seems somehow familiar. The sign above the front window, written in letters that imitate a dot-matrix printout, says:

            USER-FRIENDLY

            COMPUTER STORE.`,
      exits: [
        {dir: 'north', id: '57-madi'},
        {dir: 'south', id: '55-madi'},
        {dir: 'east', id: '56-park'},
        {dir: 'west', id: '56-5'},
        {dir: ['computer', 'store', 'user', 'friendly'], id: 'user-frie'}
      ]
    },
    {
      id: '55-madi',
      coord: [],
      name: 'E. 55th St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '56-madi'},
        {dir: 'south', id: '54-madi'},
        {dir: 'east', id: '55-park'},
        {dir: 'west', id: '55-5'},
      ]
    },
    {
      id: '54-madi',
      coord: [],
      name: 'E. 54th St. and Madison Ave.',
      desc: `There is a chock Full-O-Nuts at this intersection.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '55-madi'},
        {dir: 'south', id: '53-madi'},
        {dir: 'east', id: '54-park'},
        {dir: 'west', id: '54-5'},
        {dir: ['chock', 'full-o-nuts'], id: 'choc-nuts'}
      ]
    },
    {
      id: '53-madi',
      coord: [],
      name: 'E. 53rd St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '54-madi'},
        {dir: 'south', id: '52-madi'},
        {dir: 'east', id: '53-park'},
        {dir: 'west', id: '53-5'},
      ]
    },
    {
      id: '52-madi',
      coord: [],
      name: 'E. 52nd St. and Madison Ave.',
      desc: `Park Plaza – In the sterile griminess of New York, a patch of green is good to see – but this 50-story glass structure does not remind you of meadows or forests; it is more like congealed lake water. `,
      isStreets: true,
      exits: [
        {dir: 'north', id: '53-madi'},
        {dir: 'south', id: '51-madi'},
        {dir: 'east', id: '52-park'},
        {dir: 'west', id: '52-5'},
        {dir: ['park', 'plaza'], id: 'park-plaz'},
      ]
    },
    {
      id: '51-madi',
      coord: [],
      name: 'E. 51st St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '52-madi'},
        {dir: 'south', id: '50-madi'},
        {dir: 'east', id: '51-park'},
        {dir: 'west', id: '51-5'},
      ]
    },
    {
      id: '50-madi',
      coord: [],
      name: 'E. 50th St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '51-madi'},
        {dir: 'south', id: '49-madi'},
        {dir: 'east', id: '50-park'},
        {dir: 'west', id: '50-5'},
      ]
    },
    {
      id: '49-madi',
      coord: [],
      name: 'E. 49th St. and Madison Ave.',
      desc: `There is a chock Full-O-Nuts at this intersection.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '50-madi'},
        {dir: 'south', id: '48-madi'},
        {dir: 'east', id: '49-park'},
        {dir: 'west', id: '49-5'},
        {dir: ['chock', 'full-o-nuts',], id: 'choc-nuts'}
      ]
    },
    {
      id: '48-madi',
      coord: [],
      name: 'E. 48th St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '49-madi'},
        {dir: 'south', id: '47-madi'},
        {dir: 'east', id: '48-park'},
        {dir: 'west', id: '48-5'},
      ]
    },
    {
      id: '47-madi',
      coord: [],
      name: 'E. 47th St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '48-madi'},
        {dir: 'south', id: '46-madi'},
        {dir: 'east', id: '47-vand'},
        {dir: 'west', id: '47-5'},
      ]
    },
    {
      id: '46-madi',
      coord: [],
      name: 'E. 46th St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '47-madi'},
        {dir: 'south', id: '45-madi'},
        {dir: 'east', id: '46-vand'},
        {dir: 'west', id: '46-5'},
      ]
    },
    {
      id: '45-madi',
      coord: [],
      name: 'E. 45th St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '46-madi'},
        {dir: 'south', id: '44-madi'},
        {dir: 'east', id: '45-vand'},
        {dir: 'west', id: '45-5'},
      ]
    },
    {
      id: '44-madi',
      coord: [],
      name: 'E. 44th St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '45-madi'},
        {dir: 'south', id: '43-madi'},
        {dir: 'east', id: '44-vand'},
        {dir: 'west', id: '44-5'},
      ]
    },
    {
      id: '43-madi',
      coord: [],
      name: 'E. 43rd St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '44-madi'},
        {dir: 'south', id: '42-madi'},
        {dir: 'east', id: '43-vand'},
        {dir: 'west', id: '43-5'},
      ]
    },
    {
      id: '42-madi',
      coord: [],
      name: 'E. 42nd St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '43-madi'},
        {dir: 'south', id: '41-madi'},
        {dir: 'east', id: '42-vand'},
        {dir: 'west', id: '42-5'},
      ]
    },
    {
      id: '41-madi',
      coord: [],
      name: 'E. 41st St. and Madison Ave.',
      desc: `There is a chock Full-O-Nuts at this intersection.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '42-madi'},
        {dir: 'south', id: '40-madi'},
        {dir: 'east', id: '41-park'},
        {dir: 'west', id: '41-5'},
        {dir: ['chock', 'full-o-nuts', 'enter'], id: 'choc-nuts'}
      ]
    },
    {
      id: '40-madi',
      coord: [],
      name: 'E. 40th St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '41-madi'},
        {dir: 'south', id: '39-madi'},
        {dir: 'east', id: '40-park'},
        {dir: 'west', id: '40-5'},
      ]
    },
    {
      id: '39-madi',
      coord: [],
      name: 'E. 39th St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '40-madi'},
        {dir: 'south', id: '38-madi'},
        {dir: 'east', id: '39-park'},
        {dir: 'west', id: '39-5'},
      ]
    },
    {
      id: '39-madi',
      coord: [],
      name: 'E. 39th St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '40-madi'},
        {dir: 'south', id: '38-madi'},
        {dir: 'east', id: '39-park'},
        {dir: 'west', id: '39-5'},
      ]
    },
    {
      id: '38-madi',
      coord: [],
      name: 'E. 38th St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '39-madi'},
        {dir: 'south', id: '37-madi'},
        {dir: 'east', id: '38-park'},
        {dir: 'west', id: '38-5'},
      ]
    },
    {
      id: '37-madi',
      coord: [],
      name: 'E. 37th St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '38-madi'},
        {dir: 'south', id: '36-madi'},
        {dir: 'east', id: '37-park'},
        {dir: 'west', id: '37-5'},
      ]
    },
    {
      id: '36-madi',
      coord: [],
      name: 'E. 36th St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '37-madi'},
        {dir: 'south', id: '35-madi'},
        {dir: 'east', id: '36-park'},
        {dir: 'west', id: '36-5'},
      ]
    },
    {
      id: '35-madi',
      coord: [],
      name: 'E. 35th St. and Madison Ave.',
      desc: `Somewhere in Manhattan there seems to be a piece of architecture corresponding to every period in history. This one here is definitely the High Renaissance. Lorenzo de Medici couldn’t have asked for a nobler palazzo. Until you’re right up beside it you would even guess that all these columns and cornices were the wrappings of a department store--because Altman’s doesn’t believe in vulgar ostentation like signs. Neither did Lorenzo the Magnificent, probably.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '36-madi'},
        {dir: 'south', id: '34-madi'},
        {dir: 'east', id: '35-park'},
        {dir: 'west', id: '35-5'},
        {dir: [`Altman's`,], id: '????'},
      ]
    },
    {
      id: '34-madi',
      coord: [],
      name: 'E. 34th St. and Madison Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '35-madi'},
        {dir: 'south', id: '33-madi'},
        {dir: 'east', id: '34-park'},
        {dir: 'west', id: '34-5'},
      ]
    },
    {
      id: '34-5',
      coord: [],
      name: 'W. 34th St. and 5th Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '35-5'},
        {dir: 'south', id: '33-5'},
        {dir: 'east', id: '34-madi'},
        {dir: 'west', id: '34-amer'},
      ]
    },
    {
      id: '35-5',
      coord: [],
      name: 'W. 35th St. and 5th Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '36-5'},
        {dir: 'south', id: '34-5'},
        {dir: 'east', id: '35-madi'},
        {dir: 'west', id: '35-amer'},
      ]
    },
    {
      id: '36-5',
      coord: [],
      name: 'W. 36th St. and 5th Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '37-5'},
        {dir: 'south', id: '35-5'},
        {dir: 'east', id: '36-madi'},
        {dir: 'west', id: '36-amer'},
      ]
    },
    {
      id: '37-5',
      coord: [],
      name: 'W. 37th St. and 5th Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '38-5'},
        {dir: 'south', id: '36-5'},
        {dir: 'east', id: '37-madi'},
        {dir: 'west', id: '37-amer'},
      ]
    },
    {
      id: '38-5',
      coord: [],
      name: 'W. 38th St. and 5th Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '39-5'},
        {dir: 'south', id: '37-5'},
        {dir: 'east', id: '38-madi'},
        {dir: 'west', id: '38-amer'},
      ]
    },
    {
      id: '38-5',
      coord: [],
      name: 'W. 38th St. and 5th Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '39-5'},
        {dir: 'south', id: '37-5'},
        {dir: 'east', id: '38-madi'},
        {dir: 'west', id: '38-amer'},
      ]
    },
    {
      id: '39-5',
      coord: [],
      name: 'W. 39th St. and 5th Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '40-5'},
        {dir: 'south', id: '38-5'},
        {dir: 'east', id: '39-madi'},
        {dir: 'west', id: '39-amer'},
      ]
    },
    {
      id: '40-5',
      coord: [],
      name: 'W. 40th St. and 5th Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '41-5'},
        {dir: 'south', id: '39-5'},
        {dir: 'east', id: '40-madi'},
        {dir: 'west', id: '40-amer'},
      ]
    },
    {
      id: '41-5',
      coord: [],
      name: 'W. 41st St. and 5th Ave.',
      desc: `Two large, smug lions flank the steps that lead up to the monumental triple triumphant arch of the main branch of the Public Library. This has got to be the world’s classiest set of bookshelves.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '42-5'},
        {dir: 'south', id: '40-5'},
        {dir: 'east', id: '41-madi'},
        {dir: 'west', id: '41-amer'},
        {dir: ['public', 'library',], id: 'publ-libr'}
      ]
    },
    {
      id: '42-5',
      coord: [],
      name: 'W. 42nd St. and 5th Ave.',
      desc: `There is a subway entrance at this corner.`,
      isStreets: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '43-5'},
        {dir: 'south', id: '41-5'},
        {dir: 'east', id: '42-madi'},
        {dir: 'west', id: '42-amer'},
        {dir: ['Subway'], id: '????'},
      ]
    },
    {
      id: '43-5',
      coord: [],
      name: 'W. 43rd St. and 5th Ave.',
      desc: `here is the Princeton Club - distinctly a members only institution.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '44-5'},
        {dir: 'south', id: '42-5'},
        {dir: 'east', id: '43-madi'},
        {dir: 'west', id: '43-amer'},
        {dir: ['Princeton', 'Health', 'Club',], id: '????'},
      ]
    },
    {
      id: '44-5',
      coord: [],
      name: 'W. 44th St. and 5th Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '45-5'},
        {dir: 'south', id: '43-5'},
        {dir: 'east', id: '44-madi'},
        {dir: 'west', id: '44-amer'},
      ]
    },
    {
      id: '45-5',
      coord: [],
      name: 'W. 45th St. and 5th Ave.',
      desc: `An ideal spot for a would-be traveler. This block is lined with offices of Qantas, British Airways, Northwest Orient, and Aeroflot.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '46-5'},
        {dir: 'south', id: '44-5'},
        {dir: 'east', id: '45-madi'},
        {dir: 'west', id: '45-amer'},
        {dir: ['qantas', 'british', 'airways', 'northwest', 'orient', 'aeroflot'], id: '????'}
      ]
    },
    {
      id: '46-5',
      coord: [],
      name: 'W. 46th St. and 5th Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '47-5'},
        {dir: 'south', id: '45-5'},
        {dir: 'east', id: '46-madi'},
        {dir: 'west', id: '46-amer'},
      ]
    },
    {
      id: '47-5',
      coord: [],
      name: 'W. 47th St. and 5th Ave.',
      desc: `You pause to consider the hollow hulk of a store that was once called Brentano's`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '48-5'},
        {dir: 'south', id: '46-5'},
        {dir: 'east', id: '47-madi'},
        {dir: 'west', id: '47-amer'},
        {dir: [`Brentano's`, `Brentano`, `Brentanos`], id: 'bren', block: '????'}
      ]
    },
    {
      id: 'bren',
      coord: [],
      name: '',
      desc: ``,
      isStreets: true,
      exits:[]
    },
    {
      id: '48-5',
      coord: [],
      name: 'W. 48th St. and 5th Ave.',
      desc: `Here is Barnes-Nobles – a store filled with what appears to be thousands and thousands of books. Across the street is Scribner’s. Looking through the windows, you cannot be certain whether it is a retail establishment or a library of some exclusive club .`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '49-5'},
        {dir: 'south', id: '47-5'},
        {dir: 'east', id: '48-madi'},
        {dir: 'west', id: '48-amer'},
        {dir: [`barnes`, `nobles`], id: 'barn-nobl', block: '????'},
        {dir: [`scriber's`, 'scribners'], id: 'scri',coord: [], block: '????'}
      ]
    },
    {
      id: 'barn-nobl',
      coord: [],
      name: '',
      desc: ``,
      isStreets: true,
      exits:[]
    },
    {
      id: 'scri',
      coord: [],
      name: '',
      desc: ``,
      isStreets: true,
      exits:[]
    },
    {
      id: '49-5',
      coord: [],
      name: 'W. 49th St. and 5th Ave.',
      desc: `A statue of Atlas bearing the burden of the world reflects on your own mood as you pass the entrance to Rockefeller plaza.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '50-5'},
        {dir: 'south', id: '48-5'},
        {dir: 'east', id: '48-madi'},
        {dir: 'west', id: '48-amer'},
        {dir: [`rockefeller`, `plaza`], id: 'rock-plaz', block: '????'}
      ]
    },
    {
      id: 'rock-plaz',
      coord: [],
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
      coord: [],
      name: 'W. 50th St. and 5th Ave.',
      desc: `There is a chock Full-O-Nuts at this intersection.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '51-5'},
        {dir: 'south', id: '49-5'},
        {dir: 'east', id: '50-madi'},
        {dir: 'west', id: '50-amer'},
        {dir: ['chock', 'full-o-nuts'], id: 'choc-nuts'}
      ]
    },
    {
      id: '51-5',
      coord: [],
      name: 'W. 51st St. and 5th Ave.',
      desc: `Like a ghost from across the ocean a genuine gothic cathedral rears up out of the welter of midtown hustle and bustle, looking dark and spiky and disapproving of everything going on around it. The center door stands open, where an occasional worshipper--or sightseer--slips in or out.
            `,
      exits: [
        {dir: 'north', id: '52-5'},
        {dir: 'south', id: '50-5'},
        {dir: 'east', id: '51-madi'},
        {dir: 'west', id: '51-amer'},
        {
                    dir: ['st.', 'saint', 'patrick', `patrick's`, 'cathedral'],
                    id: '????'}
      ]
    },
    {
      id: '52-5',
      coord: [],
      name: 'W. 52nd St. and 5th Ave.',
      desc: `Midway down the block, across from the Sunderland, plaster jockeys mark the 21 club, home of the most expensive hamburger in New York City. 

            There is a poster here which catches your eye. It announces a series of organ recitals at St. Patrick’s Cathedral in memory of James Renwick, the architect.`,
      exits: [
        {dir: 'north', id: '53-5'},
        {dir: 'south', id: '51-5'},
        {dir: 'east', id: '51-madi'},
        {dir: 'west', id: '51-amer'},
        {dir: ['21', 'club'], id: '????'}
      ]
    },
    {
      id: '59-park',
      coord: [],
      name: 'E. 59th St. and Park Ave.',
      desc: `There is a restaurant called Nedicks here.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '60-park'},
        {dir: 'south', id: '58-park'},
        {dir: 'east', id: '59-lexi'},
        {dir: 'west', id: '59-madi'},
        {dir: ['nedick', 'restaurant', `nedick's`], id: 'nedi'}
      ]
    },
    {
      id: '58-park',
      coord: [],
      name: 'E. 58th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '59-park'},
        {dir: 'south', id: '57-park'},
        {dir: 'east', id: '58-lexi'},
        {dir: 'west', id: '58-madi'},
      ]
    },
    {
      id: '57-park',
      coord: [],
      name: 'E. 57th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '58-park'},
        {dir: 'south', id: '56-park'},
        {dir: 'east', id: '57-lexi'},
        {dir: 'west', id: '57-madi'},
      ]
    },
    {
      id: '56-park',
      coord: [],
      name: 'E. 56th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '57-park'},
        {dir: 'south', id: '55-park'},
        {dir: 'east', id: '56-lexi'},
        {dir: 'west', id: '56-madi'},
      ]
    },
    {
      id: '55-park',
      coord: [],
      name: 'E. 55th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '56-park'},
        {dir: 'south', id: '54-park'},
        {dir: 'east', id: '55-lexi'},
        {dir: 'west', id: '55-madi'},
      ]
    },
    {
      id: '54-park',
      coord: [],
      name: 'E. 54th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '55-park'},
        {dir: 'south', id: '53-park'},
        {dir: 'east', id: '54-lexi'},
        {dir: 'west', id: '54-madi'},
      ]
    },
    {
      id: '53-park',
      coord: [],
      name: 'E. 53rd St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '54-park'},
        {dir: 'south', id: '52-park'},
        {dir: 'east', id: '53-lexi'},
        {dir: 'west', id: '53-madi'},
      ]
    },
    {
      id: '52-park',
      coord: [],
      name: 'E. 52nd St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '53-park'},
        {dir: 'south', id: '51-park'},
        {dir: 'east', id: '52-lexi'},
        {dir: 'west', id: '52-madi'},
      ]
    },
    {
      id: '51-park',
      coord: [],
      name: 'E. 51st St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '52-park'},
        {dir: 'south', id: '50-park'},
        {dir: 'east', id: '51-lexi'},
        {dir: 'west', id: '51-madi'},
      ]
    },
    {
      id: '50-park',
      coord: [],
      name: 'E. 50th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '51-park'},
        {dir: 'south', id: '49-park'},
        {dir: 'east', id: '50-lexi'},
        {dir: 'west', id: '50-madi'},
      ]
    },
    {
      id: '49-park',
      coord: [],
      name: 'E. 49th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '50-park'},
        {dir: 'south', id: '48-park'},
        {dir: 'east', id: '49-lexi'},
        {dir: 'west', id: '49-madi'},
      ]
    },
    {
      id: '48-park',
      coord: [],
      name: 'E. 48th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '49-park'},
        {dir: 'south', id: '47-park'},
        {dir: 'east', id: '48-lexi'},
        {dir: 'west', id: '48-madi'},
      ]
    },
    {
      id: '47-park',
      coord: [],
      name: 'E. 47th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '48-park'},
        {dir: 'south', id: '46-park'},
        {dir: 'east', id: '47-lexi'},
        {dir: 'west', id: '47-vand'},
      ]
    },
    {
      id: '47-vand',
      coord: [],
      name: 'E. 47th St. and Vanderbilt Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '46-vand'},
        {dir: 'east', id: '47-park'},
        {dir: 'west', id: '47-madi'},
      ]
    },
    {
      id: '46-vand',
      coord: [],
      name: 'E. 46th St. and Vanderbilt Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '47-vand'},
        {dir: 'south', id: '45-vand'},
        {dir: 'east', id: '46-park'},
        {dir: 'west', id: '46-madi'},
      ]
    },
    {
      id: '45-vand',
      coord: [],
      name: 'E. 45th St. and Vanderbilt Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '46-vand'},
        {dir: 'south', id: '44-vand'},
        {dir: 'east', id: '45-park'},
        {dir: 'west', id: '45-madi'},
      ]
    },
    {
      id: '44-vand',
      coord: [],
      name: 'E. 44th St. and Vanderbilt Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '45-vand'},
        {dir: 'south', id: '43-vand'},
        {dir: 'east', id: '44-park'},
        {dir: 'west', id: '44-madi'},
      ]
    },
    {
      id: '43-vand',
      coord: [],
      name: 'E. 43rd St. and Vanderbilt Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '44-vand'},
        {dir: 'south', id: '42-vand'},
        {dir: 'east', id: '43-park'},
        {dir: 'west', id: '43-madi'},
      ]
    },
    {
      id: '42-vand',
      coord: [],
      name: 'E. 42nd St. and Vanderbilt Ave.',
      desc: `Mobil Building – Nothing this tall could be made of silver, but you are tempted to think so. It is hard to realize that such a gleam can come from a metal as mundane as stainless steel.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '43-vand'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '42-park'},
        {dir: 'west', id: '42-madi'},
        {dir: ['mobil', 'building'], id: '????'}
      ]
    },
    {
      id: '46-park',
      coord: [],
      name: 'E. 46th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '47-park'},
        {dir: 'south', id: '45-park'},
        {dir: 'east', id: '46-depe'},
        {dir: 'west', id: '46-vand'},
      ]
    },
    {
      id: '45-park',
      coord: [],
      name: 'E. 45th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '46-park'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '45-depe'},
        {dir: 'west', id: '45-vand'},
      ]
    },
    {
      id: '42-park',
      coord: [],
      name: 'E. 42nd St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '41-park'},
        {dir: 'east', id: '42-depe'},
        {dir: 'west', id: '42-vand'},
      ]
    },
    {
      id: '41-park',
      coord: [],
      name: 'E. 41st St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '42-park'},
        {dir: 'south', id: '40-park'},
        {dir: 'east', id: '41-lexi'},
        {dir: 'west', id: '41-madi'},
      ]
    },
    {
      id: '41-park',
      coord: [],
      name: 'E. 41st St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '42-park'},
        {dir: 'south', id: '40-park'},
        {dir: 'east', id: '41-lexi'},
        {dir: 'west', id: '41-madi'},
      ]
    },
    {
      id: '40-park',
      coord: [],
      name: 'E. 40th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '41-park'},
        {dir: 'south', id: '39-park'},
        {dir: 'east', id: '40-lexi'},
        {dir: 'west', id: '40-madi'},
      ]
    },
    {
      id: '39-park',
      coord: [],
      name: 'E. 39th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '40-park'},
        {dir: 'south', id: '38-park'},
        {dir: 'east', id: '39-lexi'},
        {dir: 'west', id: '39-madi'},
      ]
    },
    {
      id: '38-park',
      coord: [],
      name: 'E. 38th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '39-park'},
        {dir: 'south', id: '37-park'},
        {dir: 'east', id: '38-lexi'},
        {dir: 'west', id: '38-madi'},
      ]
    },
    {
      id: '37-park',
      coord: [],
      name: 'E. 37th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '38-park'},
        {dir: 'south', id: '36-park'},
        {dir: 'east', id: '37-lexi'},
        {dir: 'west', id: '37-madi'},
      ]
    },
    {
      id: '36-park',
      coord: [],
      name: 'E. 36th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '37-park'},
        {dir: 'south', id: '35-park'},
        {dir: 'east', id: '36-lexi'},
        {dir: 'west', id: '36-madi'},
      ]
    },
    {
      id: '35-park',
      coord: [],
      name: 'E. 35th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '36-park'},
        {dir: 'south', id: '34-park'},
        {dir: 'east', id: '35-lexi'},
        {dir: 'west', id: '35-madi'},
      ]
    },
    {
      id: '34-park',
      coord: [],
      name: 'E. 34th St. and Park Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '35-park'},
        {dir: 'south', id: '33-park'},
        {dir: 'east', id: '34-lexi'},
        {dir: 'west', id: '34-madi'},
      ]
    },
    {
      id: '34-lexi',
      coord: [],
      name: 'E. 34th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '35-lexi'},
        {dir: 'south', id: '33-lexi'},
        {dir: 'east', id: '34-3'},
        {dir: 'west', id: '34-park'},
      ]
    },
    {
      id: '35-lexi',
      coord: [],
      name: 'E. 35th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '36-lexi'},
        {dir: 'south', id: '34-lexi'},
        {dir: 'east', id: '35-3'},
        {dir: 'west', id: '35-park'},
      ]
    },
    {
      id: '36-lexi',
      coord: [],
      name: 'E. 36th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '37-lexi'},
        {dir: 'south', id: '35-lexi'},
        {dir: 'east', id: '36-3'},
        {dir: 'west', id: '36-park'},
      ]
    },
    {
      id: '37-lexi',
      coord: [],
      name: 'E. 37th St. and Lexington Ave.',
      desc: `There is a luncheonette on the corner.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '38-lexi'},
        {dir: 'south', id: '36-lexi'},
        {dir: 'east', id: '37-3'},
        {dir: 'west', id: '37-park'},
        {dir: ['luncheonette', 'lunch'], id: '????'}
      ]
    },
    {
      id: '38-lexi',
      coord: [],
      name: 'E. 38th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '39-lexi'},
        {dir: 'south', id: '37-lexi'},
        {dir: 'east', id: '38-3'},
        {dir: 'west', id: '38-park'},
      ]
    },
    {
      id: '39-lexi',
      coord: [],
      name: 'E. 39th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '40-lexi'},
        {dir: 'south', id: '38-lexi'},
        {dir: 'east', id: '39-3'},
        {dir: 'west', id: '39-park'},
      ]
    },
    {
      id: '40-lexi',
      coord: [],
      name: 'E. 40th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '41-lexi'},
        {dir: 'south', id: '39-lexi'},
        {dir: 'east', id: '40-3'},
        {dir: 'west', id: '40-park'},
      ]
    },
    {
      id: '41-lexi',
      coord: [],
      name: 'E. 41st St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '42-lexi'},
        {dir: 'south', id: '40-lexi'},
        {dir: 'east', id: '41-3'},
        {dir: 'west', id: '41-park'},
      ]
    },
    {
      id: '42-lexi',
      coord: [],
      name: 'E. 42nd St. and Lexington Ave.',
      desc: `You are stopped in your tracks by the Marlene Dietrich of New York’s skyscrapers. It’s the Chrysler building swathed in stainless steel, and Art Deco trimmings. It still looks like a million.  `,
      isStreets: true,
      exits: [
        {dir: 'north', id: '43-lexi'},
        {dir: 'south', id: '41-lexi'},
        {dir: 'east', id: '42-3'},
        {dir: 'west', id: '41-depe'},
      ]
    },
    {
      id: '42-depe',
      coord: [],
      name: 'E. 2nd St. and Depew Pl.',
      desc: `Grand Central Station. Crossroads of a million people. What are your chances, you wonder, of meeting someone who used to know you back in your real life? You loiter for a while, waiting for someone to come along, clap you on the shoulder, and say, ‘John Cameron, you old son of a gun – nice to see you again!’ `,
      isStreets: true,
      exits: [
        {dir: 'north', id: '44-depe'},
        {dir: 'south', id: '', oord: [], block: `You can't go that way.`},
        {dir: 'east', id: '42-lexi'},
        {dir: 'west', id: '42-park'},
        {id: ['grand', 'central', 'station', 'subway'], id: 'gran-cent'}
      ]
    },
    {
      id: '44-depe',
      coord: [],
      name: 'E. 44th St. and Depew Pl.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '45-depe'},
        {dir: 'south', id: '42-depe'},
        {dir: 'east', id: '44-lexi'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '45-depe',
      coord: [],
      name: 'E. 45th St. and Depew Pl.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '46-depe'},
        {dir: 'south', id: '44-depe'},
        {dir: 'east', id: '45-lexi'},
        {dir: 'west', id: '45-park'},
      ]
    },
    {
      id: '46-depe',
      coord: [],
      name: 'E. 46th St. and Depew Pl.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '45-depe'},
        {dir: 'east', id: '46-lexi'},
        {dir: 'west', id: '46-park'},
      ]
    },
    {
      id: '43-lexi',
      coord: [],
      name: 'E. 43rd St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '44-lexi'},
        {dir: 'south', id: '42-lexi'},
        {dir: 'east', id: '43-3'},
        {dir: 'west', block: `You can't go that way.`},
      ]
    },
    {
      id: '44-lexi',
      coord: [],
      name: 'E. 44th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '45-lexi'},
        {dir: 'south', id: '43-lexi'},
        {dir: 'east', id: '44-3'},
        {dir: 'west', id: '44-depe'},
      ]
    },
    {
      id: '45-lexi',
      coord: [],
      name: 'E. 45th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '46-lexi'},
        {dir: 'south', id: '44-lexi'},
        {dir: 'east', id: '45-3'},
        {dir: 'west', id: '45-depe'},
      ]
    },
    {
      id: '46-lexi',
      coord: [],
      name: 'E. 46th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '47-lexi'},
        {dir: 'south', id: '45-lexi'},
        {dir: 'east', id: '46-3'},
        {dir: 'west', id: '46-depe'},
      ]
    },
    {
      id: '47-lexi',
      coord: [],
      name: 'E. 47th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '48-lexi'},
        {dir: 'south', id: '46-lexi'},
        {dir: 'east', id: '47-3'},
        {dir: 'west', id: '47-park'},
      ]
    },
    {
      id: '48-lexi',
      coord: [],
      name: 'E. 48th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '49-lexi'},
        {dir: 'south', id: '47-lexi'},
        {dir: 'east', id: '48-3'},
        {dir: 'west', id: '48-park'},
      ]
    },
    {
      id: '49-lexi',
      coord: [],
      name: 'E. 49th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '50-lexi'},
        {dir: 'south', id: '48-lexi'},
        {dir: 'east', id: '49-3'},
        {dir: 'west', id: '49-park'},
      ]
    },
    {
      id: '50-lexi',
      coord: [],
      name: 'E. 50th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '51-lexi'},
        {dir: 'south', id: '49-lexi'},
        {dir: 'east', id: '50-3'},
        {dir: 'west', id: '50-park'},
      ]
    },
    {
      id: '51-lexi',
      coord: [],
      name: 'E. 51st St. and Lexington Ave.',
      desc: `There is a subway entrance at this corner.`,
      isStreets: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '52-lexi'},
        {dir: 'south', id: '50-lexi'},
        {dir: 'east', id: '51-3'},
        {dir: 'west', id: '51-park'},
        {dir: ['subway'], id: '????'}
      ]
    },
    {
      id: '52-lexi',
      coord: [],
      name: 'E. 52nd St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '53-lexi'},
        {dir: 'south', id: '51-lexi'},
        {dir: 'east', id: '52-3'},
        {dir: 'west', id: '52-park'},
      ]
    },
    {
      id: '53-lexi',
      coord: [],
      name: 'E. 53rd St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '54-lexi'},
        {dir: 'south', id: '52-lexi'},
        {dir: 'east', id: '53-3'},
        {dir: 'west', id: '53-park'},
      ]
    },
    {
      id: '54-lexi',
      coord: [],
      name: 'E. 54th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '55-lexi'},
        {dir: 'south', id: '53-lexi'},
        {dir: 'east', id: '54-3'},
        {dir: 'west', id: '54-park'},
      ]
    },
    {
      id: '55-lexi',
      coord: [],
      name: 'E. 55th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '56-lexi'},
        {dir: 'south', id: '54-lexi'},
        {dir: 'east', id: '55-3'},
        {dir: 'west', id: '55-park'},
      ]
    },
    {
      id: '56-lexi',
      coord: [],
      name: 'E. 56th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '57-lexi'},
        {dir: 'south', id: '55-lexi'},
        {dir: 'east', id: '56-3'},
        {dir: 'west', id: '56-park'},
      ]
    },
    {
      id: '57-lexi',
      coord: [],
      name: 'E. 57th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '58-lexi'},
        {dir: 'south', id: '56-lexi'},
        {dir: 'east', id: '57-3'},
        {dir: 'west', id: '57-park'},
      ]
    },
    {
      id: '58-lexi',
      coord: [],
      name: 'E. 58th St. and Lexington Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '59-lexi'},
        {dir: 'south', id: '57-lexi'},
        {dir: 'east', id: '58-3'},
        {dir: 'west', id: '58-park'},
      ]
    },
    {
      id: '59-lexi',
      coord: [],
      name: 'Central Park S. and Lexington Ave.',
      desc: `There is a subway entrance at this corner.`,
      isStreets: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '60-lexi'},
        {dir: 'south', id: '58-lexi'},
        {dir: 'east', id: '59-3'},
        {dir: 'west', id: '59-park'},
      ]
    },
    {
      id: '59-3',
      coord: [],
      name: 'Central Park S. and 3rd Ave.',
      desc: `There is a subway entrance at this corner.`,
      isStreets: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '60-3'},
        {dir: 'south', id: '58-3'},
        {dir: 'east', id: '59-2'},
        {dir: 'west', id: '59-lexi'},
      ]
    },
    {
      id: '58-3',
      coord: [],
      name: 'E. 58th St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '59-3'},
        {dir: 'south', id: '57-3'},
        {dir: 'east', id: '58-2'},
        {dir: 'west', id: '58-lexi'},
      ]
    },
    {
      id: '57-3',
      coord: [],
      name: 'E. 57th St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '58-3'},
        {dir: 'south', id: '56-3'},
        {dir: 'east', id: '57-2'},
        {dir: 'west', id: '57-lexi'},
      ]
    },
    {
      id: '56-3',
      coord: [],
      name: 'E. 56th St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '57-3'},
        {dir: 'south', id: '55-3'},
        {dir: 'east', id: '56-2'},
        {dir: 'west', id: '56-lexi'},
      ]
    },
    {
      id: '55-3',
      coord: [],
      name: 'E. 55th St. and 3rd Ave.',
      desc: `There is a luncheonette on the corner`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '56-3'},
        {dir: 'south', id: '54-3'},
        {dir: 'east', id: '55-2'},
        {dir: 'west', id: '55-lexi'},
        {dir: ['luncheonette'], id: 'lunc'}
      ]
    },
    {
      id: '54-3',
      coord: [],
      name: 'E. 54th St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '55-3'},
        {dir: 'south', id: '53-3'},
        {dir: 'east', id: '54-2'},
        {dir: 'west', id: '54-lexi'},
      ]
    },
    {
      id: '53-3',
      coord: [],
      name: 'E. 53rd St. and 3rd Ave.',
      desc: `There is a subway entrance at this corner`,
      isStreets: true,
      hasSubway: true,
      exits: [
        {dir: 'north', id: '54-3'},
        {dir: 'south', id: '52-3'},
        {dir: 'east', id: '53-2'},
        {dir: 'west', id: '53-lexi'},
        {dir: ['subway'], id: '????'}
      ]
    },
    {
      id: '52-3',
      coord: [],
      name: 'E. 52nd St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '53-3'},
        {dir: 'south', id: '51-3'},
        {dir: 'east', id: '52-2'},
        {dir: 'west', id: '52-lexi'},
      ]
    },
    {
      id: '51-3',
      coord: [],
      name: 'E. 51st St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '52-3'},
        {dir: 'south', id: '50-3'},
        {dir: 'east', id: '51-2'},
        {dir: 'west', id: '51-lexi'},
      ]
    },
    {
      id: '50-3',
      coord: [],
      name: 'E. 50th St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '51-3'},
        {dir: 'south', id: '49-3'},
        {dir: 'east', id: '50-2'},
        {dir: 'west', id: '50-lexi'},
      ]
    },
    {
      id: '49-3',
      coord: [],
      name: 'E. 49th St. and 3rd Ave.',
      desc: `There is a luncheonette on the corner.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '50-3'},
        {dir: 'south', id: '48-3'},
        {dir: 'east', id: '49-2'},
        {dir: 'west', id: '49-lexi'},
        {dir: ['luncheonette'], id: 'lunc'}
      ]
    },
    {
      id: '48-3',
      coord: [],
      name: 'E. 48th St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '49-3'},
        {dir: 'south', id: '47-3'},
        {dir: 'east', id: '48-2'},
        {dir: 'west', id: '48-lexi'},
      ]
    },
    {
      id: '47-3',
      coord: [],
      name: 'E. 47th St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '48-3'},
        {dir: 'south', id: '46-3'},
        {dir: 'east', id: '47-2'},
        {dir: 'west', id: '47-lexi'},
      ]
    },
    {
      id: '46-3',
      coord: [],
      name: 'E. 46th St. and 3rd Ave.',
      desc: `There is a lunchonette on the corner.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '47-3'},
        {dir: 'south', id: '45-3'},
        {dir: 'east', id: '46-2'},
        {dir: 'west', id: '46-lexi'},
        {dir: ['luncheonette'], id: 'lunc'}
      ]
    },
    {
      id: '45-3',
      coord: [],
      name: 'E. 45th St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '46-3'},
        {dir: 'south', id: '44-3'},
        {dir: 'east', id: '45-2'},
        {dir: 'west', id: '45-lexi'},
      ]
    },
    {
      id: '44-3',
      coord: [],
      name: 'E. 44th St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '45-3'},
        {dir: 'south', id: '43-3'},
        {dir: 'east', id: '44-2'},
        {dir: 'west', id: '44-lexi'},
      ]
    },
    {
      id: '43-3',
      coord: [],
      name: 'E. 43rd St. and 3rd Ave.',
      desc: `The glass and steel case of the Ford Foundation Building resembles an aquarium that any tropical fish might envy. Humans are kept in their ‘natural habitat’ here: a lush indoor park complete with trees and flowers.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '44-3'},
        {dir: 'south', id: '42-3'},
        {dir: 'east', id: '43-2'},
        {dir: 'west', id: '43-lexi'},
        {dir: ['ford', 'foundation','building'], id: '????'}
      ]
    },
    {
      id: '42-3',
      coord: [],
      name: 'E. 42nd St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '43-3'},
        {dir: 'south', id: '41-3'},
        {dir: 'east', id: '42-2'},
        {dir: 'west', id: '42-lexi'},
      ]
    },
    {
      id: '41-3',
      coord: [],
      name: 'E. 41st St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '42-3'},
        {dir: 'south', id: '40-3'},
        {dir: 'east', id: '41-2'},
        {dir: 'west', id: '41-lexi'},
      ]
    },
    {
      id: '40-3',
      coord: [],
      name: 'E. 40th St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '41-3'},
        {dir: 'south', id: '39-3'},
        {dir: 'east', id: '40-2'},
        {dir: 'west', id: '40-lexi'},
      ]
    },
    {
      id: '39-3',
      coord: [],
      name: 'E. 39th St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '40-3'},
        {dir: 'south', id: '38-3'},
        {dir: 'east', id: '39-qout'},
        {dir: 'west', id: '39-lexi'},
      ]
    },
    {
      id: '38-3',
      coord: [],
      name: 'E. 38th St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '39-3'},
        {dir: 'south', id: '37-3'},
        {dir: 'east', id: '38-qout'},
        {dir: 'west', id: '38-lexi'},
      ]
    },
    {
      id: '37-3',
      coord: [],
      name: 'E. 37th St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '38-3'},
        {dir: 'south', id: '36-3'},
        {dir: 'east', id: '37-qout'},
        {dir: 'west', id: '37-lexi'},
      ]
    },
    {
      id: '36-3',
      coord: [],
      name: 'E. 36th St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '37-3'},
        {dir: 'south', id: '35-3'},
        {dir: 'east', id: '36-qout'},
        {dir: 'west', id: '36-lexi'},
      ]
    },
    {
      id: '35-3',
      coord: [],
      name: 'E. 35th St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '36-3'},
        {dir: 'south', id: '34-3'},
        {dir: 'east', id: '35-qout'},
        {dir: 'west', id: '35-lexi'},
      ]
    },
    {
      id: '34-3',
      coord: [],
      name: 'E. 34th St. and 3rd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '35-3'},
        {dir: 'south', id: '33-3'},
        {dir: 'east', id: '34-qout'},
        {dir: 'west', id: '34-lexi'},
      ]
    },
    {
      id: '34-qout',
      coord: [],
      name: 'E. 34th St. and Queens Tunnel out',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '35-qout'},
        {dir: 'south', id: '????'},
        {dir: 'east', id: '34-2'},
        {dir: 'west', id: '34-3'},
      ]
    },
    {
      id: '35-qout',
      coord: [],
      name: 'E. 35th St. and Queens Tunnel out',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '36-qout'},
        {dir: 'south', id: '34-qout'},
        {dir: 'east', id: '35-2'},
        {dir: 'west', id: '35-3'},
      ]
    },
    {
      id: '36-qout',
      coord: [],
      name: 'E. 36th St. and Queens Tunnel out',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '37-qout'},
        {dir: 'south', id: '35-qout'},
        {dir: 'east', id: '36-2'},
        {dir: 'west', id: '36-3'},
      ]
    },
    {
      id: '37-qout',
      coord: [],
      name: 'E. 36th St. and Queens Tunnel out',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '38-qout'},
        {dir: 'south', id: '36-qout'},
        {dir: 'east', id: '37-2'},
        {dir: 'west', id: '37-3'},
      ]
    },
    {
      id: '38-qout',
      coord: [],
      name: 'E. 38th St. and Queens Tunnel out',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '39-qout'},
        {dir: 'south', id: '37-qout'},
        {dir: 'east', id: '38-2'},
        {dir: 'west', id: '38-3'},
      ]
    },
    {
      id: '39-qout',
      coord: [],
      name: 'E. 39th St. and Queens Tunnel out',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '38-qout'},
        {dir: 'east', id: '39-2'},
        {dir: 'west', id: '39-3'},
      ]
    },
    {
      id: '34-2',
      coord: [],
      name: 'E. 34th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '35-2'},
        {dir: 'south', id: '33-2'},
        {dir: 'east', id: '34-qin'},
        {dir: 'west', id: '34-qout'},
      ]
    },
    {
      id: '35-2',
      coord: [],
      name: 'E. 35th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', d: '36-2'},
        {dir: 'south', id: '34-2'},
        {dir: 'east', id: '35-qin'},
        {dir: 'west', id: '35-qout'},
      ]
    },
    {
      id: '36-2',
      coord: [],
      name: 'E. 36th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '37-2'},
        {dir: 'south', id: '35-2'},
        {dir: 'east', id: '36-qin'},
        {dir: 'west', id: '36-qout'},
      ]
    },
    {
      id: '37-2',
      coord: [],
      name: 'E. 37th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '38-2'},
        {dir: 'south', id: '36-2'},
        {dir: 'east', id: '37-qin'},
        {dir: 'west', id: '37-qout'},
      ]
    },
    {
      id: '38-2',
      coord: [],
      name: 'E. 38th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '39-2'},
        {dir: 'south', id: '37-2'},
        {dir: 'east', id: '38-1'},
        {dir: 'west', id: '38-qout'},
      ]
    },
    {
      id: '39-2',
      coord: [],
      name: 'E. 39th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '40-2'},
        {dir: 'south', id: '38-2'},
        {dir: 'east', id: '39-tudo'},
        {dir: 'west', id: '39-qout'},
      ]
    },
    {
      id: '40-2',
      coord: [],
      name: 'E. 40th St. and 2nd Ave.',
      desc: `There is a luncheonette on the corner`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '41-2'},
        {dir: 'south', id: '39-2'},
        {dir: 'east', id: '40-tudo'},
        {dir: 'west', id: '40-3'},
        {dir: ['luncheonette', 'lunch'], id: '????'}
        ]
    },
    {
      id: '41-2',
      coord: [],
      name: 'E. 41st St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '42-2'},
        {dir: 'south', id: '40-2'},
        {dir: 'east', id: '41-tudo'},
        {dir: 'west', id: '41-3'},
      ]
    },
    {
      id: '42-2',
      coord: [],
      name: 'E. 42nd St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '43-2'},
        {dir: 'south', id: '41-2'},
        {dir: 'east', id: '42-tudo'},
        {dir: 'west', id: '42-3'},
      ]
    },
    {
      id: '43-2',
      coord: [],
      name: 'E. 43rd St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '44-2'},
        {dir: 'south', id: '42-2'},
        {dir: 'east', id: '43-tudo'},
        {dir: 'west', id: '43-3'},
      ]
    },
    {
      id: '44-2',
      coord: [],
      name: 'E. 44th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '45-2'},
        {dir: 'south', id: '43-2'},
        {dir: 'east', id: '44-1'},
        {dir: 'west', id: '44-3'},
      ]
    },
    {
      id: '45-2',
      coord: [],
      name: 'E. 45th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '46-2'},
        {dir: 'south', id: '44-2'},
        {dir: 'east', id: '45-1'},
        {dir: 'west', id: '45-3'},
      ]
    },
    {
      id: '46-2',
      coord: [],
      name: 'E. 46th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '47-2'},
        {dir: 'south', id: '45-2'},
        {dir: 'east', id: '46-1'},
        {dir: 'west', id: '46-3'},
      ]
    },
    {
      id: '47-2',
      coord: [],
      name: 'E. 47th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '48-2'},,
        {dir: 'south', id: '46-2'},
        {dir: 'east', id: '47-1'},
        {dir: 'west', id: '47-3'},
      ]
    },
    {
      id: '48-2',
      coord: [],
      name: 'E. 48th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '49-2'},,
        {dir: 'south', id: '47-2'},
        {dir: 'east', id: '48-1'},
        {dir: 'west', id: '48-3'},
      ]
    },
    {
      id: '49-2',
      coord: [],
      name: 'E. 49th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '50-2'},,
        {dir: 'south', id: '48-2'},
        {dir: 'east', id: '49-1'},
        {dir: 'west', id: '49-3'},
      ]
    },
    {
      id: '50-2',
      coord: [],
      name: 'E. 50th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '51-2'},,
        {dir: 'south', id: '49-2'},
        {dir: 'east', id: '50-1'},
        {dir: 'west', id: '50-3'},
      ]
    },
    {
      id: '51-2',
      coord: [],
      name: 'E. 51st St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '52-2'},,
        {dir: 'south', id: '50-2'},
        {dir: 'east', id: '51-1'},
        {dir: 'west', id: '51-3'},
      ]
    },
    {
      id: '52-2',
      coord: [],
      name: 'E. 52nd St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '53-2'},,
        {dir: 'south', id: '51-2'},
        {dir: 'east', id: '52-1'},
        {dir: 'west', id: '52-3'},
      ]
    },
    {
      id: '53-2',
      coord: [],
      name: 'E. 53rd St. and 2nd Ave.',
      desc: `There is a luncheonette on the corner.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '54-2'},,
        {dir: 'south', id: '52-2'},
        {dir: 'east', id: '53-1'},
        {dir: 'west', id: '53-3'},
      ]
    },
    {
      id: '54-2',
      coord: [],
      name: 'E. 54th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '55-2'},,
        {dir: 'south', id: '53-2'},
        {dir: 'east', id: '54-1'},
        {dir: 'west', id: '54-3'},
      ]
    },
    {
      id: '55-2',
      coord: [],
      name: 'E. 55th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '56-2'},,
        {dir: 'south', id: '54-2'},
        {dir: 'east', id: '55-1'},
        {dir: 'west', id: '55-3'},
      ]
    },
    {
      id: '56-2',
      coord: [],
      name: 'E. 56th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '57-2'},,
        {dir: 'south', id: '55-2'},
        {dir: 'east', id: '56-1'},
        {dir: 'west', id: '56-3'},
      ]
    },
    {
      id: '57-2',
      coord: [],
      name: 'E. 57th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '58-2'},,
        {dir: 'south', id: '56-2'},
        {dir: 'east', id: '57-quen'},
        {dir: 'west', id: '57-3'},
      ]
    },
    {
      id: '58-2',
      coord: [],
      name: 'E. 58th St. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '59-2'},,
        {dir: 'south', id: '57-2'},
        {dir: 'east', id: '58-quen'},
        {dir: 'west', id: '58-3'},
      ]
    },
    {
      id: '59-2',
      coord: [],
      name: 'Central Park S. and 2nd Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: 'quee-2'},,
        {dir: 'south', id: '58-2'},
        {dir: 'east', id: '59-quen'},
        {dir: 'west', id: '59-3'},
      ]
    },
    {
      id: '59-quen',
      coord: [],
      name: 'E. 59th St. and Queensboro Bridge In',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '60-quee'},,
        {dir: 'south', id: '58-quen'},
        {dir: 'east', id: '59-1'},
        {dir: 'west', id: '59-2'},
      ]
    },
    {
      id: '58-quen',
      coord: [],
      name: 'E. 58th St. and Queensboro Bridge In',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '59-quen'},,
        {dir: 'south', id: '57-quen'},
        {dir: 'east', id: '58-1'},
        {dir: 'west', id: '58-2'},
      ]
    },
    {
      id: '57-quen',
      coord: [],
      name: 'E. 57th St. and Queensboro Bridge In',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '58-quen'},,
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '57-1'},
        {dir: 'west', id: '57-2'},
      ]
    },
    {
      id: '59-1',
      coord: [],
      name: 'Central Park S. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '60-1'},,
        {dir: 'south', id: '58-1'},
        {dir: 'east', id: '59-sutt'},
        {dir: 'west', id: '59-quen'},
      ]
    },
    {
      id: '58-1',
      coord: [],
      name: 'E. 58th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '59-1'},,
        {dir: 'south', id: '57-1'},
        {dir: 'east', id: '58-sutt'},
        {dir: 'west', id: '58-quen'},
      ]
    },
    {
      id: '57-1',
      coord: [],
      name: 'E. 57th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '58-1'},,
        {dir: 'south', id: '56-1'},
        {dir: 'east', id: '57-sutt'},
        {dir: 'west', id: '57-quen'},
      ]
    },
    {
      id: '56-1',
      coord: [],
      name: 'E. 56th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '57-1'},,
        {dir: 'south', id: '55-1'},
        {dir: 'east', id: '56-sutt'},
        {dir: 'west', id: '56-2'},
      ]
    },
    {
      id: '55-1',
      coord: [],
      name: 'E. 55th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '56-1'},,
        {dir: 'south', id: '54-1'},
        {dir: 'east', id: '55-sutt'},
        {dir: 'west', id: '55-2'},
      ]
    },
    {
      id: '54-1',
      coord: [],
      name: 'E. 54th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '55-1'},
        {dir: 'south', id: '53-1'},
        {dir: 'east', id: '54-sutt'},
        {dir: 'west', id: '54-2'},
      ]
    },
    {
      id: '53-1',
      coord: [],
      name: 'E. 53rd St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '54-1'},
        {dir: 'south', id: '52-1'},
        {dir: 'east', id: '53-sutt'},
        {dir: 'west', id: '53-2'},
      ]
    },
    {
      id: '52-1',
      coord: [],
      name: 'E. 52nd St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '53-1'},
        {dir: 'south', id: '51-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '52-2'},
      ]
    },
    {
      id: '51-1',
      coord: [],
      name: 'E. 51st St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '52-1'},
        {dir: 'south', id: '50-1'},
        {dir: 'east', id: '51-beek'},
        {dir: 'west', id: '51-2'},
      ]
    },
    {
      id: '50-1',
      coord: [],
      name: 'E. 50th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '51-1'},
        {dir: 'south', id: '49-1'},
        {dir: 'east', id: '50-beek'},
        {dir: 'west', id: '50-2'},
      ]
    },
    {
      id: '49-1',
      coord: [],
      name: 'E. 49th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '50-1'},
        {dir: 'south', id: '48-1'},
        {dir: 'east', id: '49-beek'},
        {dir: 'west', id: '49-2'},
      ]
    },
    {
      id: '48-1',
      coord: [],
      name: 'E. 48th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '49-1'},
        {dir: 'south', id: '47-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '48-2'},
      ]
    },
    {
      id: '47-1',
      coord: [],
      name: 'E. 47th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '48-1'},
        {dir: 'south', id: '46-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '47-2'},
      ]
    },
    {
      id: '46-1',
      coord: [],
      name: 'E. 46th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '47-1'},
        {dir: 'south', id: '45-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '46-2'},
      ]
    },
    {
      id: '45-1',
      coord: [],
      name: 'E. 45th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '46-1'},
        {dir: 'south', id: '44-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '45-2'},
      ]
    },
    {
      id: '44-1',
      coord: [],
      name: 'E. 44th St. and 1st Ave.',
      desc: `The great green glass slab of the UN Secretariat looms over the swooping shape of the General Assembly Building. Flags of member nations snap in the wind that comes in from the East River. For a moment you wish you could be just an ordinary tourist so you could enjoy the vista the way it deserves. But the vista includes twenty assorted policemen, and you get the feeling this is nowhere to loiter.`,
      isStreets: true,
      exits: [
        {dir: 'north', id: '45-1'},
        {dir: 'south', id: '43-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '44-2'},
        {dir: ['UN', 'building', 'secretariat'], block: 'There is no point in going there.',
            },
      ]
    },
    {
      id: '42-1',
      coord: [],
      name: 'E. 42nd St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '44-1'},
        {dir: 'south', id: '41-1'},
        {dir: 'east', id: '42-fdrd'},
        {dir: 'west', id: '42-tudo'},
      ]
    },
    {
      id: '41-1',
      coord: [],
      name: 'E. 41st St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '42-1'},
        {dir: 'south', id: '40-1'},
        {dir: 'east', id: '41-fdrd'},
        {dir: 'west', id: '41-tudo'},
      ]
    },
    {
      id: '40-1',
      coord: [],
      name: 'E. 40th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '41-1'},
        {dir: 'south', id: '39-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '40-tudo'},
      ]
    },
    {
      id: '39-1',
      coord: [],
      name: 'E. 39th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '40-1'},
        {dir: 'south', id: '38-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '39-tudo'},
      ]
    },
    {
      id: '38-1',
      coord: [],
      name: 'E. 38th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '39-1'},
        {dir: 'south', id: '37-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '38-2'},
      ]
    },
    {
      id: '37-1',
      coord: [],
      name: 'E. 37th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '38-1'},
        {dir: 'south', id: '36-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '37-qin'},
      ]
    },
    {
      id: '36-1',
      coord: [],
      name: 'E. 36th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '37-1'},
        {dir: 'south', id: '35-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '36-qin'},
      ]
    },
    {
      id: '35-1',
      coord: [],
      name: 'E. 35th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '36-1'},
        {dir: 'south', id: '34-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '35-qin'},
      ]
    },
    {
      id: '34-1',
      coord: [],
      name: 'E. 34th St. and 1st Ave.',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '35-1'},
        {dir: 'south', id: '33-1'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '34-qin'},
      ]
    },
    {
      id: '39-tudo',
      coord: [],
      name: 'E. 39th St. and Tudor Place',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '40-tudo'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', id: '39-1'},
        {dir: 'west', id: '39-2'},
      ]
    },
    {
      id: '40-tudo',
      coord: [],
      name: 'E. 40th St. and Tudor Place',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '41-tudo'},
        {dir: 'south', id: '39-tudo'},
        {dir: 'east', id: '40-1'},
        {dir: 'west', id: '40-2'},
      ]
    },
    {
      id: '41-tudo',
      coord: [],
      name: 'E. 41st St. and Tudor Place',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '42-tudo'},
        {dir: 'south', id: '40-tudo'},
        {dir: 'east', id: '41-1'},
        {dir: 'west', id: '41-2'},
      ]
    },
    {
      id: '42-tudo',
      coord: [],
      name: 'E. 42nd St. and Tudor Place',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '43-tudo'},
        {dir: 'south', id: '41-tudo'},
        {dir: 'east', id: '42-1'},
        {dir: 'west', id: '42-2'},
      ]
    },
    {
      id: '43-tudo',
      coord: [],
      name: 'E. 40th St. and Tudor Place',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '42-tudo'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '43-2'},
      ]
    },
    {
      id: '41-fdrd',
      coord: [],
      name: 'E. 41st St. and FDR Drive',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '????'},
        {dir: 'south', id: '????'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '41-1'},
      ]
    },
    {
      id: '42-fdrd',
      coord: [],
      name: 'E. 42nd St. and FDR Drive',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '????'},
        {dir: 'south', id: '41-fdrd'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '42-1'},
      ]
    },
    {
      id: '49-beek',
      coord: [],
      name: 'E. 49th St. and Beekman Place',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '50-beek'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '49-1'},
      ]
    },
    {
      id: '50-beek',
      coord: [],
      name: 'E. 50th St. and Beekman Place',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '51-beek'},
        {dir: 'south', id: '49-beek'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '50-1'},
      ]
    },
    {
      id: '51-beek',
      coord: [],
      name: 'E. 51st St. and Beekman Place',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', block: `You can't go that way.`},
        {dir: 'south', id: '50-beek'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '51-1'},
      ]
    },
    {
      id: '53-sutt',
      coord: [],
      name: 'E. 53rd St. and Sutton Place',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '54-sutt'},
        {dir: 'south', block: `You can't go that way.`},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '53-1'},
      ]
    },
    {
      id: '54-sutt',
      coord: [],
      name: 'E. 54th St. and Sutton Place',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '55-sutt'},
        {dir: 'south', id: '53-sutt'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '54-1'},
      ]
    },
    {
      id: '55-sutt',
      coord: [],
      name: 'E. 55th St. and Sutton Place',
      desc: `In a city of strange sights this has to be one of the strangest.  A gigantic office building in the shape of a chest of drawers has come to rest on what seems to be a gigantic pagan temple, complete with gilded idol. But who is the god being worshipped here? \n\nHe carries a bundle of lightning bolts, but he’s too slim for Zeus. `,
      exits: [
        {dir: 'north', id: '56-sutt'},
        {dir: 'south', id: '54-sutt'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '55-1'},
        {dir: ['office', 'building', 'drawers', 'drawer'], block: `Finally you have to ask one of the attendants of the shrine, who stands behind the marble altar to INFORMATION. He gives you a fishy look and tells you to keep moving.`}
        ]
    },
    {
      id: '56-sutt',
      coord: [],
      name: 'E. 56th St. and Sutton Place',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '57-sutt'},
        {dir: 'south', id: '55-sutt'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '56-1'},
      ]
    },
    {
      id: '57-sutt',
      coord: [],
      name: 'E. 57th St. and Sutton Place',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '58-sutt'},
        {dir: 'south', id: '56-sutt'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '57-1'},
      ]
    },
    {
      id: '58-sutt',
      coord: [],
      name: 'E. 58th St. and Sutton Place',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '59-sutt'},
        {dir: 'south', id: '57-sutt'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '58-1'},
      ]
    },
    {
      id: '59-sutt',
      coord: [],
      name: 'Central Park S. and Sutton Place',
      desc: ``,
      isStreets: true,
      exits: [
        {dir: 'north', id: '????'},
        {dir: 'south', id: '58-sutt'},
        {dir: 'east', block: `You can't go that way.`},
        {dir: 'west', id: '59-1'},
      ]
    },
    ],

}

//desc: `There is a subway entrance at this corner.`,
