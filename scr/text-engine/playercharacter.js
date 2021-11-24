const formatter = new Intl.NumberFormat('en-US', {
  style: 'currency',
  currency: 'USD',
  minimumFractionDigits: 2
});

let playFat = 100;
let playHung = 100;
let playMon = 1.00; // Setting to 25 for testing purposes
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
]

const xStreetName = ['riverside','park','madison','lexington','broadway','10th','9th','8th','7th','6th','5th','4th','3rd','2nd','1st']

const minutes = ['00', '05', '10', '15', '20', '25', '30', '35', '40', '45', '50', '55'];
const hours = ['1', '2', '3', '4', '5', '6', '7', '8', '9','10','11','12'];
const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
const amPm = ['AM', 'PM']