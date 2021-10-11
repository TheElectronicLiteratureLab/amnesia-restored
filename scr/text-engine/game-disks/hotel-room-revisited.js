const hotelroomRevisted = {
    roomId: 'hote-revi', // this is the Hotel Room 1502 revisited node, entered from Sunderland Health Club node
    rooms: [
        {
            id: 'hote-revi', // unique ID for this room
            name: 'Hotel Room', // room name (displayed to player)
            desc: `The first thing you notice is the late afternoon light streaming across the skyscrapers of the city, flashing from windows and walls of glass. It is late in the day, and the sun is low in the sky.
            
            You see a tuxedo lying on your bed.`, // text that appears when player first enters the room

            onLook: () => {
                const room = getRoom('hote-revi');
                room.desc = `You take a deep breath -- and a long look about the hotel room, starting with the writing pad on the dresser, where a sheet of the hotel's stationery informs you that you're a guest of the Sunderland Hotel.`, `To pass the time the hotel offers a television.`;
                let keyDesc = ``;
                
                if (disk.inventory.items !== metalkey) {
                    return room.desc + keyDesc;
                } // checks if Player has 1502 Room Key in inventory

            }, // closes onLook function
        }, 
    ], // end of rooms  
}