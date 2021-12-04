const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

let playFat = 100;
let playHung = 100;

let playMon = 1.00; 

let detScore = 0;
let charScore = 0;
let survScore = 0;
let totalScore = (detScore + charScore + survScore);
let moveCount = 0;
let orderTotal = 0.00; // Creating a variable to store the order total
let energyTotal = 0.00; // The total amount of energy gained from their order
let playCoord = [];
let playCloth = {
    top: [],
    bottom: [],
    head: [],
    feet: [],
  };
let firstDial = false;

let lastRoom;

const playerC ={

    id: 'playChar',
    clothes: playCloth,
    fatigue: playFat,
    hunger: playHung,
    money: playMon,
    dScore: detScore,
    cScore: charScore,
    sScore: survScore,
    tScore: totalScore,
    pCoords: playCoord

};

let tenementSpawned = false;

//variables needed for updating time, also have them start at the starting point
let xMinutes = 1;
let yHours = 8;
let zDays = 0;
let qMeridiem = 0

//variables needed for beg command
let caughtCoords1;
let caughtCoords2;
let policeCaught = false;


//difficulty levels stuff
const difficultyLevels = ['easy', 'medium', 'hard']; 
let difficulty;

//x street indexer stuff
const xStreetNumber = [
  {name: '0-199', value: [104,29,23,16,46,67,14,84,110,121,82,12,90,10,65] },
  {name: '200-299', value: [68,30,89,32,106,58,47,40,36,98,81,80,107,95,122] }, 
  {name: '300-399', value: [16,46,67,14,84,110,121,82,12,90,10,65,44,93,52] },
  {name: '400-499', value: [32,106,58,47,40,36,98,81,80,107,95,122,22,64,109] },
  {name: '500-599', value: [14,84,110,121,82,12,90,10,65,44,93,52,9,78,38] },
  {name: '600-699', value: [47,40,36,98,81,80,107,95,122,22,64,109,94,72,51] },
  {name: '700-799', value: [121,82,12,90,10,65,44,93,512,9,78,38,11,96,39] },
  {name: '800-899', value: [98,81,80,107,985,122,22,64,109,94,72,51,13,56,6] },
  {name: '900-999', value: [90,10,65,44,93,52,9,78,38,11,96,39,119,75,43] },
  {name: '1000-1099', value: [107,95,122,22,64,109,94,72,51,13,56,6,41,83,74] },
  {name: '1100-1199', value: [44,93,52,9,78,38,11,96,39,119,75,43,34,4,126] },
  {name: '1200-1299', value: [22,64,109,94,72,51,13,56,6,41,83,74,61,35,33] },
  {name: '1300-1399', value: [9,78,38,11,96,39,119,75,43,34,4,126,54,115,7] },
  {name: '1400-1499', value: [94,72,51,13,56,6,41,83,74,61,35,33,71,125,101] },
  {name: '1500-1599', value: [11,96,39,119,75,43,34,4,126,54,115,7,48,99,116] },
  {name: '1600-1699', value: [13,56,6,41,83,74,61,35,33,71,125,101,63,18,120] },
  {name: '1700-1799', value: [119,75,43,34,4,126,54,115,7,48,99,116,49,70,112] },
  {name: '1800-1899', value: [41,83,74,61,35,33,71,125,101,63,18,120,26,50,91] },
  {name: '1900-1999', value: [34,4,126,54,115,7,48,99,116,49,70,112,103,28,20] },
  {name: '2000-2099', value: [61,35,33,71,125,101,63,18,120,26,50,91,124,117,17] },
  {name: '2100-2199', value: [54,115,7,48,99,116,49,70,112,103,28,20,87,2,114] },
  {name: '2200-2299', value: [71,125,101,63,18,120,26,50,91,124,117,7,25,5,86] },
  {name: '2300-2399', value: [48,99,116,49,70,112,103,28,20,87,2,114,104,29,23] },
  {name: '2400-2499', value: [63,18,120,26,50,91,124,117,17,25,5,86,68,30,89] },
  {name: '2500-2599', value: [49,70,112,103,28,20,87,2,114,104,29,23,16,46,67] },
  {name: '2600-2699', value: [26,50,91,124,117,17,25,5,86,68,30,89,32,106,58] },
  {name: '2700-2799', value: [103,28,20,87,2,114,104,29,23,16,46,67,14,84,110] },
  {name: '2800-2899', value: [124,117,17,25,5,86,68,30,89,32,106,58,47,40,36] },
  {name: '2900-2999', value: [87,2,114,104,29,23,16,46,67,14,84,110,121,82,12] },
  {name: '3000-3099', value: [25,5,86,68,30,89,32,106,58,47,40,36,98,81,80] },
];

let encounterStreetNumber;
let encounterStreetName;
let encounterAnswer;
let xStreetC;
let xStreetD; 
let firstEncounter = false;

const xStreetName = ['riverside','park','madison','lexington','broadway','10th','9th','8th','7th','6th','5th','4th','3rd','2nd','1st'];

const xStreetNameComplete = ['Riverside drive','Park Avenue','Madison Avenue','Lexington Avenue','Broadway','10th Avenue','9th Avenue','8th Avenue','7th Avenue','6th Avenue','5th Avenue','4th Avenue','3rd Avenue','2nd Avenue','1st Avenue'];


//time stuff
const minutes = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
const hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const amPm = ['AM', 'PM']


//random encounter stuff
let choice1;
let choice2;
let choice3;
let choice4;

const chelseaEncounters = [ //coord locations between lat -2/-36 , lon -55/-12
  {
    desc: `You're on a street that is slowly but surely being gentrified. ${choice1} has moved in between ${choice2} and ${choice3}.`,
    choices1: [`An antique store specializing in 50's bad taste`, `A punk hairn stylist`, `A restuarant lit by pink neon`, `A shop selling nothing but popcorn in various colors`],
    choices2: [`a Hispanic barber shop`, `a laundromat`, `a beer-and-potato-chips grocery store`, `the parlor of a “Reader and Advisor” that’s been left in charge of a fat black cat`],
    choices3: [`a fish store with a special on salted cod.`, `a bar that’s been closed by the Board of Health.`, `a store dealing in used office furniture.`, `a coffee shop with a dusty sign asking you go be patient until its renovation is complete.`]
  }, 
  {
    desc: `You are on a street of brownstone apartment houses, most of them in good trim. In the middle of the street ${choice1}`,
    choices1: [`a game of stickball is in progress.`, `a work crew is filling in a large pothole with asphalt.`, `a tall skinny black woman in a red bikini is doing some fancy roller-skating.`, `a single pigeon investigates the remnants of a pizza crust.`]
  },
  {
    desc: `Outside of ${choice1} a street-singer has spread open ${choice2} guitar case to receive contributions and ${choice3}`,
    choices1: [`a brightly-lit pizzeria`, `the Rose of Erin bar`, `a fortune-telling parlor`, `a news vendor’s shop`],
    choices2: [`his`, `her`],
    choices3:[`is belting out Broadway show tunes with professional pizazz.`, `is singing “Where Have All the Flowers Gone” in a tone of whining self-pity.`, `is doing a creditable imitation of Boy George.`, `is counting up the quarters accumulated so far.`]
  },
  {
    desc: `${choice1} ${choice2} is ${choice3}`,
    choices1: [`On the stoop of an old brownstone`, `On the sheet-metal platform outside a warehouse`, `Outside a Puerto Rican grocery`, `Inside a van parked along the curb`],
    choices2: [`a boy in a black mesh shirt`, `a man in a hard-hat`, `an Archie Bunker type`, `a black teenager in a Michael Jackson tee-shirt`],
    choices3: [`keeping time to a song on the radio.`, `crushing a beer can very, very slowly.`, `yelling angrily at someone on the other side of the street.`, `kissing a girl who is losing her Dolly Parton wig.`]
  },
  {
    desc: `${choice1} with ${choice2} and wearing ${choice3} is sitting on the steps of a brownstone ${choice4}`,
    choices1: [`A teenager `, `A fat man`, `A Puerto Rican`, `A bodybuilder `],
    choices2: [`terrible acne`, `a thin mustache`, `his arm in a sling`, `a cut lip `],
    choices3: [`a black beret`, `no shoes`, `khaki shorts`, `a Village People tank top`],
    choices4: [`half-asleep.`, `reading the Daily News.`, `Smoking a cigarette.`, `Wiping sweat from his forehead with a red bandana.`]
  },
  {
    desc: `${choice1} with ${choice2} ${choice3} hair goes by, looking ${choice4}`,
    choices1: [`A girl`, `A woman`, `A boy`, `A man`],
    choices2: [`short`, `long`, `curly`, `bushy`],
    choices3: [`chestnut`, `red`, `auburn`, `black`],
    choices4: [`like an ad for a new shampoo.`, `woeful.`, `for a dog called Chief.`, `very spaced out.`]
  }, 
  {
    desc: `${choice1} are standing in front of a brownstone carrying on a polite conversation, as their leashed ${choice2} develop a more intimate acquaintanceship, which the dogs’ owners studiously ignore.`,
    choices1: [`A pair of elderly gents`, `A boy and a girl`, `Two young men`, `Two old ladies`,],
    choices2: [`poodles`,`beagles`,`mongrels`,`wire-haired terriers`]
  },
  {
    desc: `${choice1} ${choice2} is sitting ${choice3} reading ${choice4}`,
    choices1: [`A fat woman`,`A young black girl`,`A bald man`,`A thin kid`],
    choices2: [`with thick eyeglasses`,`in garish clothes`,`in a bathing suit`,`with a “No Nukes” tee shirt`],
    choices3: [`on an aluminum beach chair`,`on the steps of a brownstone`,`on a pile of bundled newspapers`,`on the fender of a parked car`],
    choices4: [`a paperback copy of The Name of the Rose.`,`a copy of Newsweek.`,`The Wall Street Journal.`,`a copy of a computer magazine.`]
  },
  {
    desc: `More signs of gentrification. A shop that sells nothing but popcorn in various decorator colors, and across the street a restaurant with its name spelled out in giant pink neon letters: NEW COOKING.`,
  },
  {
    desc: `A vandalized car rests on its wheelless axles outside a beer-and-potato-chips grocery store.`,
  },
  {
    desc: `In the window of a shoe repair shop you see, taped to the soot-freckled glass, a postcard that seems strangely, even disturbingly, familiar. “Welcome to—" and then in very large letters--“SANTA CANDELARIA!” Behind the letters you can glimpse a couple palm trees and a Mission-style church. You find you’re having trouble breathing, and your legs are turning to silly putty. You’d go in the shop and ask them about this Santa Candelaria but a sign next to the postcard explains that the shop is no longer in business, and it gives a number to phone for rental inquiries.`,
  },
];



const midtownEncounters= [ //coord location lat 13/42, long -55/28
  {
    desc: `${choice1} is double parked outside ${choice2}, and the traffic bottlenecked behind it is hoking passionately.`,
    choices1: [`A Black Cadillac`, `A delivery truck` ,`A car with diplomatic plates`,`A police car`,],
    choices2: [`a French restaurant`,`a branch of Citibank`,`a coffee shop`,`a Jewish deli`,]
  },
  { 
    desc: `A brand new ${choice1} has been wedged into a narrow space betweem ${choice2} and ${choice3}`,
    choices1: [`high-rise`, `apartment building`,`office tower`,],
    choices2: [`a Burger-King`,`a 4-story garage`,`an elegant townhouse`,`an old brownstone`,],
    choices3: [`a decrepit residence hotel.`,`a vest-pocket park.`,`a grim soot-blackened church.`,`a fire station.`,]
  },
  { 
    desc: `You are on a street of shops and small businesses: there’s ${choice1} on the corner, then ${choice2} ${choice3} and ${choice4}`,
    choices1: [`a drug store a deli`,`a luggage store` ,`an OTB office`],
    choices2: [`a liquor store,`,`a beauty shop,`,`a cigar store,`,`a bookstore,`],
    choices3: [`a bakery with twelve varieties of croissants,`,`a florist with a small jungle of sickly spider plants,`,`a hardware store with a frayed and faded Grand Opening banner flapping over the doorway,`,`a Xerox copy shop,`],
    choices4: [`a seafood restaurant.`,`a branch of Fanny Farmer.`,`a Federal Express office.`,`the main lobby of the office building housing this miscellany of shops.`]
  },
  { 
    desc: `You are almost run over by a bicyclist speeding east on a street that goes One Way in the other direction. Better pay more attention to the traffic and less to the architecture. The traffic in midtown can be lethal.`,
  },
  {
    desc: `Bending over to tie ${choice1} shoelace, you realize that the sidewalk in front of this office building has been paved with ${choice2} instead of ordinary concrete`,
    choices1: [`your right`,`your left`],
    choices2: [`octagons of terracotta`,`massive blocks of slate`,`bricks in a herringbone pattern`,`a kind of synthetic terrazzo`,]
  },
  { 
    desc: `${choice1} is having a heated argument with a policeman over the question of whether as a United States citizen one does or does not have the right to plunk down when and where one likes--even in front of ${choice2} if that’s where one’s feet give out. The policeman takes strong exception to this view. You decide that this dispute is none of your business and move along.`,
    choices1: [`A shopping bag lady`,`A derelict`,`A three-card monte player`,`A hot dog vendor`],
    choices2: [`a jewelry store,`,`a bar,`,`a bank entrance,`,`a Porsche showroom,`]
  },
  {
    desc: `You hear what sounds like gunshots and look up and down the street with consternation. ${choice1} notices your alarm and gives you a knowing smile. “That’s just a truck backfiring.” You remain convinced, even so, that it was gunshots.`,
    choices1: [`A stylish woman`,`A businessman`,`A pizza delivery boy` ,`A massage parlor tout`]
  },
  { 
    desc: `${choice1} man ${choice2} stops in the recess of a doorway to light ${choice3}`,
    choices1: [`A well- dressed`,`A bearded`,`A black`,`A tall dark`],
    choices2: [`carrying an attaché case`,`with close-cropped hair`,`in a Panama hat`,`with a scar on his left cheek`],
    choices3: [`his pipe`,`a cigarette.`,`a dead cigar.`]
  },
  {
    desc: `${choice1} woman ${choice2} is standing in front of a window display of ${choice3} carrying on conversation with ${choice4}`,
    choices1: [`An elderly`,`An obese`, `An anxious`,`An obviously disturbed`],
    choices2: [`with hair dyed bright orange`,`with an armful of packages`,`in a red dress`,`in a Salvation Army uniform`],
    choices3: [`summer clothes`,`stationery supplies`,`imported hand soaps`,`bestsellers`],
    choices4: [`a derelict.`,`herself.`,`a toy poodle`,`a child in a wheelchair.`]
  },
  {
    desc: `${choice1} ${choice2} walks by, ${choice3}`,
    choices1: [`A boy`,`A girl`,`A young man`,`A young woman`],
    choices2: [`in color-coordinated gym clothes`,`with a baby riding in a canvas sling`,`in a Fiorucci tee shirt`,`wearing a New York Yankees baseball cap`],
    choices3: [`whistling “Celeste Aida”.`,`engrossed in a paperback copy of The Queen’s Gambit.`,`carrying a radio playing disco music at top volume.`,`licking an ice cream cone.`]
  },
  { 
    desc: `${choice1} stands on the corner soliciting contributions ${choice2} `,
    choices1: [`A nun in dark glasses` ,`A blind man`,`A Mondale campaign worker`,`A gypsyish-looking woman with a sick child`],
    choices2: [`in a loud, whining voice.`,`half-heartedly.`,`with fierce insistence.`,`by banging a tambourine.`]
  },
  {
    desc: `${choice1} teenager with ${choice2} asks you for ${choice2}
      You pretend to not understand him, and he walks away without a backward glance.`,
    choices1: [`A Puerto Rican`,`A black`,`A leather-jacketed`,`A Chinese`],
    choices2: [`a punk haircut`,`a hunting knife on his belt`,`a broken front tooth`,`mirror sunglasses`],
    choices3: [`a quarter.`,`a match.`,`the time.`,`all the money you’ve got.`]
  },
  {
    desc: `${choice1} with a ${choice2} tattooed on his right forearm, is leaning against a lamppost, chewing expertly on a wooden matchstick.`,
    choices1: [`A construction worker`,`A bus driver`,`An Arnold Schwarzenegger lookalike`,`A teenager in a black tee shirt`],
    choices2: [`rose`,`Harley emblem`,`mermaid`,`eagle`]
  },
  {
    desc: `A group of ${choice1} is coming at you, filling up the entire sidewalk and spilling over into the street.
    They walk on by, paying you no more heed than a stream gives to one of the rocks in its path.`,
    choices1: [`elderly tourists`,`Japanese businessmen`,`foreign sailors`,`screaming children`]
  },
];

const rushHourEncounters= [//these are time locked
  {
    desc: `As the offices begin to empty of their workers and the stores of their shoppers, the sidewalks fill to overflowing.`
  },
  {
    desc: `Gridlock: uptown and downtown and crosstown east and west, as far as you can see in all direction, the traffic is snarled into one honking, fuming, immobilized tangle. Only pedestrians can get anywhere.`
  },
  {
    desc: `Through the crush of the rush hour a blind man moves forward slowly, rattling coins in a paper cup.`
  },
  {
    desc: `A policeman stands in the middle of the snarled rush hour traffic, blowing a whistle and waving his arms with no discernible effect.`
  },
  {
    desc: `A large crowd gathered at one corner peers into the stream of traffic inching its way past them and hopes their bus will soon appear upstream.`
  },
  {
    desc: `A woman loaded with shopping bags stands at the corner waving at taxis that already have fares.`
  },
  {
    desc: `High above the bustle of rush hour traffic, looking calm and philosophical, floats the beautiful Goodyear blimp.`
  },
  { 
    desc: `Like a tortoise on a racetrack full of hares, a tired pretzel vendor wheels his umbrellaed cart back to the warehouse.`
  }
];

const greenwichEncounters = [//coord location lat -36/-58, long 5/-42
  { 
    desc: `Bending over to tie ${choice1} shoelace, you realize that the sidewalk in front of this office building has been paved with ${choice2} instead of ordinary concrete`,
    choices1: [`your right`,`your left`],
    choices2: [`octagons of terracotta`,`massive blocks of slate`,`bricks in a herringbone pattern`,`a kind of synthetic terrazzo`,]
  },
  { 
    desc: `You hear what sounds like gunshots and look up and down the street with consternation. ${choice1} notices your alarm and gives you a knowing smile. “That’s just a truck backfiring.” You remain convinced, even so, that it was gunshots.`,
    choices1: [`A stylish woman`,`A businessman`,`A pizza delivery boy` ,`A massage parlor tout`]
  },
  { 
    desc: `You are on a street of shops and small businesses: there’s ${choice1} on the corner, then ${choice2} ${choice3} and ${choice4}`,
    choices1: [`a drug store a deli`,`a luggage store` ,`an OTB office`,],
    choices2: [`a liquor store,`,`a beauty shop,`,`a cigar store,`,`a bookstore,`],
    choices3: [`a bakery with twelve varieties of croissants,`,`a florist with a small jungle of sickly spider plants,`,`a hardware store with a frayed and faded Grand Opening banner flapping over the doorway,`,`a Xerox copy shop,`],
    choices4: [`a seafood restaurant.`,`a branch of Fanny Farmer.`,`a Federal Express office.`,`the main lobby of the office building housing this miscellany of shops.`]
  },
  { 
    desc: `${choice1} is double parked outside ${choice2}, and the traffic bottlenecked behind it is hoking passionately.`,
    choices1: [`A Black Cadillac`, `A delivery truck` ,`A car with diplomatic plates`,`A police car`,],
    choices2: [`a French restaurant`,`a branch of Citibank`,`a coffee shop`,`a Jewish deli`,]
  },
  { 
    desc: `You pass by a townhouse with a doorway of exotic wood that is as beautiful as a painting.`
  },
  { 
    desc: `An imitation Hell’s Angel roars by on a gigantic Honda.`
  },
  { 
    desc: `Across the street a good Samaritan is trying to prop an unconscious derelict upright against the side of a building, but the derelict keeps slumping over.`
  },
  { 
    desc: `You catch a powerful whiff of baking bread and feel the sluggish stirrings of memory. Then the smell is gone, and your past remains unrecaptured.`
  },
  { 
    desc: `Two shirtless joggers in matching red jogging shorts with matching sculptured physiques go bounding by in the opposite direction.`
  },
  {
    desc: `A bevy of schoolkids is being herded by two teachers in the direction of a vest-pocket playground.`
  },
  { 
    desc: `A young woman in an Adidas gym suit whizzes by in the middle of the street, and a few moments later a second roller-skater, male, whizzes after her.`
  },
  { 
    desc: `An old woman totters along on an aluminum walker, carrying a sack of groceries, looking very determined. She gives you a smile, refuses your offer of help, and totters on her way.`
  },
];

