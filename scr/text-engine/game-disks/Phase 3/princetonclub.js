const princetonclub = {
  roomId: 'prin-club-1',
  rooms: [
    {
      id: 'prin-club-1',
      coord: [],
      name: 'The Princeton Club',
      desc: `You enter the lobby, fully convinced on the evidence of the empty matchbook, that you are an alumnus of the university and a member of the club. You take a quick scan of the interior and make a mental note to write the Club's Board of Directors on the subject of the dangers of creeping seediness.`,
      onEnter: () => {
        pressEnter('prin-club-2');
      },
      exits: []
    },
    {
      id: 'prin-club-2',
      coord: [],
      name: '',
      desc: `Surely, such a venerable institution should not be allowed to sag into such a state of shabbiness. Perhaps contributions should be solicited for a Redecorating Fund. Just as you’ve begun mentally to frame this appeal, the doorman asks you what your business is. You explain that you believe yourself to be a member.`,
      onEnter: () => {
        pressEnter('prin-club-3');
      },
      exits: []
    },
    {
      id: 'prin-club-3',
      coord: [],
      name: '',
      desc: `He assures you that he has an infallible memory for faces and that you are not.  you are not. You insist on seeing a list of the membership. When that list has proven that there is no John Cameron among the members of the Princeton Club, the doorman escorts you out to the street and bids you goodbye with a smile of withering condescension.`,
      onEnter: () => {
        pressEnter('prin-club-4');
      },
      exits: []
    },
    {
      id: 'prin-club-4',
      coord: [],
      name: '',
      desc: `You feel as though you’d been expelled from the university on the first day of your freshman year: it was a very brief career.`,
      onEnter: () => {
        pressEnter(`prin-club-5`);
      },
      exits: []
    },
    {
      id: 'prin-club-5',
      coord: [],
      name: '',
      desc: `“John Cameron!” \n\nYou look round to see who has called you in that deep, cracked voice. She calls again and you spot her, an immense woman wearing layer upon layer of dirty rags. She is sitting on the sidewalk across the street from the Princeton Club, surrounding by shopping bags.`,
      onEnter: () => {
        pressEnter('prin-club-6');
      },
      exits: []
    },
    {
      id: 'prin-club-6',
      coord: [],
      name: '',
      desc: `You cross the street and ask the woman how she comes to know you. “We were lovers, honey,” she confides with a sly smile. “Don’t you remember?” \n“I’m afraid I don’t remember anything,” you reply. “I have amnesia.”`,
      onEnter: () => {
        pressEnter('prin-club-7');
      },
      exits: []
    },
    {
      id: 'prin-club-7',
      coord: [],
      name: '',
      desc: `She confesses that she knows about your amnesia, for two weeks earlier you’d had a long conversation with her about it right here at her post of duty. At that time, you’d given her a letter that she was to give you if you ever turned up again--as you have now, thanks to the matchbook from the Princeton Club.`,
      onEnter: () => {
        pressEnter('prin-club-8')
      },
      exits: []
    },
    {
      id: 'prin-club-8',
      coord: [],
      name: '',
      desc: `After some minutes of polite conversation about the perils and pleasures of being destitute in the world’s greatest city, you take your leave of the shopping bag lady and open the letter you’d written to yourself:`,
      onEnter: () => {
        pressEnter('prin-club-9');
      },
      exits: []
    },
    {
      id: 'prin-club-9',
      coord: [],
      name: '',
      desc: `“Dear Self,” it says. “In case you haven’t been able to get into your safe deposit box at the hotel, the password comes from the first lines of the Gospel According to John. “In the beginning was the word, and the Word was with God.” Get it? With God. You will need what’s in that box. So get it. Fond regards from Guess Who.”`,
      onEnter: () => {
        pressEnter('prin-club-10');
      },
      exits: []
    },
    {
      id: 'prin-club-10',
      coord: [],
      name: '',
      desc: `Congratulating yourself on your foresight you tear up the note and throw it away. Only you will have the password.`,
      onEnter: () => {
        pressEnter('43-5');
      },
      exits: []
    },
  ]
}