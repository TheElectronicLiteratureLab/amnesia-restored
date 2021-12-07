const gameOver = {
    roomId: 'game-over',
    rooms: [
        {
            id: 'game-over',
            name: 'Game Over',
            desc:`Your scores are as follows:\n
            As a detective: ${playerC.dScore}\n
            As a character: ${playerC.cScore}\n
            As a survivor: ${playerC.sScore}\n
            \n
            Your total score is ${playerC.tScore}\n
            Your score ranks you as occasionally absent-minded.\n
            \n
            You've reached the end of your adventure. To begin your next application, insert the desired disk in drive A:, or leave the drive the drive door open and your hard drive disk will be booked. Then, follow your machine's warm boot procedure (ie: CTRL-ALT-DELETE).`,
        },
        {
            id: 'credits',
            name: 'You Won!',
            desc:`Your scores are as follows:\n
            As a detective: ${playerC.dScore}\n
            As a character: ${playerC.cScore}\n
            As a survivor: ${playerC.sScore}\n
            \n
            Your total score is ${playerC.tScore}\n
            Your score ranks you as occasionally absent-minded.\n
            \n
            You've reached the end of your adventure. To begin your next application, insert the desired disk in drive A:, or leave the drive the drive door open and your hard drive disk will be booked. Then, follow your machine's warm boot procedure (ie: CTRL-ALT-DELETE).`,
        },

    ],
}; 