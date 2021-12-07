const gameOver = {
    roomId: 'game-over',
    rooms: [
        {
            id: 'game-over',
            name: 'Game Over',
            desc:`Your scores are as follows:\n
            As a detective: ${playChar.dScore}\n
            As a character: ${playChar.cScore}\n
            As a survivor: ${playChar.sScore}\n
            \n
            Your total score is ${playChar.tScore}\n
            Your score ranks you as occasionally absent-minded.\n
            \n
            You've reached the end of your adventure. To begin your next application, insert the desired disk in drive A:, or leave the drive the drive door open and your hard drive disk will be booked. Then, follow your machine's warm boot procedure (ie: CTRL-ALT-DELETE).`,
        },

    ],
}; 