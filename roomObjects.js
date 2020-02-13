//2.12.20 Project Zorkington
// rob building room object class(es)
const readline = require('readline')
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
};

async function play() {
    
}

class Room {
    constructor(title, north, south, east, west, descript, sign) {
        this.title = title
        this.descript = descript
        this.north = north
        this.south = south
        this.east = east
        this.west = west
        this.sign = sign
    }

}


const foyer = new Room ("182 Main Street", "You are looking at the street.", "There is a man sitting at a reception desk to your front.","You are standing in the foyer of an office building. \nTo the east is an elevator, and behind the reception desk is a staircase going up. \nTo the west is the entrance to a business.")


//state machine for rooms

let rooms = {
    "street": {canChangeTo: ["foyer"]},
    "foyer": {canChangeTo: ["street","elevator", "stairs", "nectars"]},
    "elevator": {canChangeTo: ["foyer", "2ndFloorFoyer", "3rdFloorFoyer"]},
    "stairs": {canChangeTo: ["foyer", "2ndFloorFoyer", "3rdFloorFoyer"]},
    "nectars": {canChangeTo: ["foyer"]},
    "2ndFloorFoyer": {canChangeTo: ["stairs", "elevator", "trumpCodeAcademy","asureSoftware"]},
    "trumpCodeAcademy": {canChangeTo: ["2ndFloorFoyer"]},
    "asureSoftware": {canChangeTo: ["2ndFloorFoyer"]},
    "3rdFloorFoyer": {canChangeTo: ["elevator", "stairs", "roof"]},
}

let currentRoom = "street";
  
function changeRoom(newRoom) {
    let validMoves = rooms[currentRoom].canChangeTo;
    if (validMoves.includes(newRoom)) {
        currentRoom = newRoom;
    } else {
        console.log("Sorry, you can't move from " + currentState + " to " + newstate);
    }
}