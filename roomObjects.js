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
    constructor(title, descript, inventory, north, south, east, west, sign, locked) {
        this.title = title
        this.descript = descript
        this.inventory = inventory
        this.north = north
        this.south = south
        this.east = east
        this.west = west
        this.sign = sign
        this.locked = locked
    }

} //end of Room class construct -------------------
//----------------------Constructors---------------------------------------
const street = new Room("Main Street at No. 182", "You look at the entrance, which has a sign taped to its window.\nA security guard sits behind a desk within view of the door. ", ["paper"], "North across the street you see another building.", "The office building is in front of you.", "You look east up the hill toward UVM.", "You look west toward Lake Champlain.", "The sign says 'no soliciting.", "false")
const foyer = new Room("This is the foyer", "You are in a room.", ["newspaper"], "You are facing north", "You are facing south", "You are facing east", "you are facing west", "This is a directory.", "false")
const elevator = new Room()
const stairs = new Room()
const nectars = new Room()
const secondFloorFoyer = new Room()
const trumpCodeAcademy = new Room("ICE")
const asureSoftware = new Room("Meth lab")
const thirdFloorFoyer = new Room()
const roof = new Room()

//------------------------------console log tests----------------------------------
const player = {
    boxesSold: 0,
    moneyMade: 0,
    inventory: [],
    roomStart: street,
    playerName: null
}

let currentRoom = player.roomStart;
let playerLose = false
console.log("north: " + currentRoom.north)
console.log("south: " + currentRoom.south)
console.log("east: " + currentRoom.east)
console.log("west: " + currentRoom.west)
console.log("You are standing in: " + currentRoom.title)
console.log("Room description: " + currentRoom.descript)
console.log("Sign says: " + currentRoom.sign)
console.log("Room Inventory includes: " + currentRoom.inventory)
console.log("You can move to: " + currentRoom.canMoveTo + "\n")




//--------------------------play begins---------------------------------------

//---------------start game function--------------------------------------
async function startGame() {
    let playerName = null;
    playerName = await ask("What is your name? \n>_")
    console.log("Hello " + playerName +" \n")
    console.log("You are selling girl scout cookies. \nTo win the game you need to sell 100 or more boxes.\nTo check how many you've sold, type [i]\nTo move around use [move][direction]")
    init = await ask("Are you ready to start?\n>_")
    if (init === "y" || "yes") {
        play();
    } else 
    console.log('Sorry to see you go')
    process.exit()
}

async function play() {
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

startGame()

//----------------------------------------------------------------------------


function changeRoom(newRoom) {
    let validMoves = rooms[currentRoom].canChangeTo;
    if (validMoves.includes(newRoom)) {
        currentRoom = newRoom;
    } else {
        console.log("Sorry, you can't move from " + currentState + " to " + newstate);
    }
}


//---------------------read sign loop -----------------------//
if (command.includes() === ("read" || "look") && (command.includes() === "sign")) {
    console.log(currentRoom.sign)
}