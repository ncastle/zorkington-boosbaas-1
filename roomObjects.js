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
const street = new Room("on Main Street at No. 182", "You see ", ["paper"], "You are facing north", "You are facing south", "You are facing east", "you are facing west", "This is a directory.", "false")
const foyer = new Room("This is the foyer", "You are in a room.", ["newspaper"], "You are facing north", "You are facing south", "You are facing east", "you are facing west", "This is a directory.", "false")
const elevator = new Room()
const stairs = new Room()
const nectars = new Room()
const secondFloorFoyer = new Room()
const trumpCodeAcademy = new Room()
const asureSoftware = new Room()
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
console.log("You can move to: " + currentRoom.canMoveTo)

//--------------------------play begins---------------------------------------

async function play() {
    if (player.playerName === null) {
        player.playerName = await ask("What is your name?")
        console.log("Hello " + player.playerName)
        console.log("You are selling girl scout cookies. \nTo win the game you need to sell 100 or more boxes.\nTo check how many you've sold, type [i]\nTo move around use [move][direction]")
    } else if (player.boxesSold >= 100 || player.moneyMade >= 500) { //win check
        console.log("Congratulations! You sold enough boxes! You win!");
        process.exit();
    } else if (playerLose != true) {
        console.log("You are" + currentRoom.title)
        console.log(currentRoom.descript)
        let userInput = await ask(">_")
        if (userInput.includes("look")) {
            if (userInput.includes("north")) {
                console.log(currentRoom.north);
                play();
            } else if (userInput.includes("south")) {
                console.log(currentRoom.south);
                play();
            } else if (userInput.includes("east")) {
                console.log(currentRoom.east);
                play();
            } else if (userInput.includes("west")) {
                console.log(currentRoom.west);
                play();
            } else if (userInput.includes("sign")) {
                console.log(currentRoom.sign);
                play();
            }
            else console.log("I'm not sure where you want me to look.")
            play();
        }
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