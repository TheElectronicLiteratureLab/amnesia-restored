let time = new Date('May 4, 1986 09:05:00')
let playFat = 100;
let playHung = 100;
let playMon = 25.00; // Setting to 25 for testing purposes
let detScore = 0;
let charScore = 0;
let survScore = 0;
let totalScore = (detScore + charScore + survScore);
let moveCount = 0;
let orderTotal = 0; // Creating a variable to store the order total
let energyTotal = 0; // The total amount of energy gained from their order
let playCoord = [];
let playCloth = {
    top: [],
    bottom: [],
    head: [],
    feet: [],
  };
  

const playerc ={

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