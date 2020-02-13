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
//--------------------------Classes Initialization -------------------------------
class Room {
    constructor(title, north, south, east, west, descript, sign, canChangeTo) {
        this.title = title || "Room"
        this.descript = descript || "This is a room."
        this.north = north || "You are looking at a blank wall to the north."
        this.south = south || "You are looking at a blank wall to the south."
        this.east = east || "You are looking at a blank wall to the east."
        this.west = west || "You are looking at a blank wall to the west."
        this.sign = sign || "Sign"
        this.canChangeTo = canChangeTo
    }
    locked: false,

} //end of Room class construct -------------------

const street = new Room("On Main Street at No. 182",
    "You are looking across the street at the courthouse.",
    "You are looking at the door of 182 Main Street.",
    "You are looking east up the hill toward UVM.",
    "You are looking west toward the lake.",
    "You are standing on a city street in Burlington.",
    "The sign lists several businesses at 182 Main Street.",
    ["foyer"])
const foyer = new Room("182 Main Street foyer",
    "You are looking out at Main Street.",
    "There is a man sitting at a reception desk to your front,\nwith a staircase visible behind him. He is smiling.",
    "You are looking at an elevator with three floors listed, and a building directory posted on the wall next to it.",
    "You see the door to a business, with the name 'Nectar's' stenciled on the door.",
    "You are standing in the foyer of an office building in downtown Burlington.\nThere's a reception desk, elevator, stairway and entrance to a business\nvisible.",
    ["street", "elevator", "stairs", "nectars"])
const elevator = new Room("title",
    "north",
    "south",
    "east",
    "west",
    "descript",
    "sign",
    ["foyer", "2ndFloorFoyer", "3rdFloorFoyer"])
const stairs = new Room("title",
    "north",
    "south",
    "east",
    "west",
    "descript",
    "sign",
    ["foyer", "2ndFloorFoyer", "3rdFloorFoyer"])
const nectars = new Room("title",
    "north",
    "south",
    "east",
    "west",
    "descript",
    "sign",
    ["foyer"])
const secondFloorFoyer = new Room("title",
    "north",
    "south",
    "east",
    "west",
    "descript",
    "sign",
    ["stairs", "elevator", "trumpCodeAcademy", "asureSoftware"])
const trumpCodeAcademy = new Room("title",
    "north",
    "south",
    "east",
    "west",
    "descript",
    "sign",
    ["secondFloorFoyer"])
const asureSoftware = new Room("title",
    "north",
    "south",
    "east",
    "west",
    "descript",
    "sign",
    ["secondFloorFoyer"])
const thirdFloorFoyer = new Room("title",
    "north",
    "south",
    "east",
    "west",
    "descript",
    "sign",
    ["roof"])
const roof = new Room("title",
    "north",
    "south",
    "east",
    "west",
    "descript",
    "sign",
    ["thirdFloorFoyer"])


//--------------------------------------------------------------------------
let currentRoom = foyer;
console.log("north " + currentRoom.north)
console.log("south " + currentRoom.south)
console.log("east " + currentRoom.east)
console.log("west " + currentRoom.west)
console.log("You are standing in: " + currentRoom.title)
console.log("Room description " + currentRoom.descript)
console.log("sign " + currentRoom.sign)
console.log("You can move to: " + currentRoom.canMoveTo[])

//---------------------------------------------------------------------------
async function play() {
    console.log("test")
    let userInput = await ask(">_")
    if (userInput.includes("look")) {
        if (userInput.includes("north")) {
            console.log(currentRoom.north);
        } else if (userInput.includes("south")) {
            console.log(currentRoom.south);
        } else if (userInput.includes("east")) {
            console.log(currentRoom.east);
        } else if (userInput.includes("west")) {
            console.log(currentRoom.west);
        } else if (userInput.includes("sign")) {
            console.log(currentRoom.sign);
        }
        else console.log("I'm not sure where you want me to look.")
    }
} //end bracket for ask function

play()
//----------------------------------------------------------------------------


function changeRoom(newRoom) {
    let validMoves = rooms[currentRoom].canChangeTo;
    if (validMoves.includes(newRoom)) {
        currentRoom = newRoom;
    } else {
        console.log("Sorry, you can't move from " + currentState + " to " + newstate);
    }
}