//state machine 2.14.20
//to test room transitions

//---------- set readline interface----------------------------------------------
const readline = require('readline')
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//---------- ask function ---------------------------------------------------
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
    // roomStates = {
    //     "street" : {canChangeTo: ["foyer"]},
    //     "foyer": {canChangeTo: ["street", "elevator"]},
    //     "elevator" : {canChangeTo: ["secondFloor","foyer"]},
    //     "secondFloor": {canChangeTo: ["elevator"]},
    // }

} //end of Room class construct -------------------

//----------------------Constructors---------------------------------------

const street = new Room("Main Street at No. 182", "You see ", ["foyer"], "You are facing north", "You are facing south", "You are facing east", "you are facing west", "This is a directory.", "false")
const foyer = new Room("This is the foyer", "You are in a room.", ["newspaper"], "You are facing north", "You are facing south", "You are facing east", "you are facing west", "This is a directory.", "false")
const elevator = new Room("Elevator", "This is a building elevator",[], "You are looking at the elevator door.", "You are looking at the other elevator door.", "elevator wall.", "elevator wall", "floor directory lists 1st floor, second floor and third floor.", false )
const secondFloor = new Room("Second Floor Foyer", "This is an empty room")

//--------------------------------------------------------------------------

street.canChangeTo = ["foyer"]
foyer.canChangeTo = ["street", "elevator"]
elevator.canChangeTo = ["foyer", "secondFloor"]
secondFloor.canChangeTo = ["elevator"]

let currentRoom = street;
console.log(currentRoom.title)

async function changeRoom(change) {
    await ask("You are " + currentRoom.title + "\nWhere do you want to go?\n>_")
    if(currentRoom.canChangeTo.includes(change)){
        console.log("You are moving from " + currentRoom.title)
        currentRoom = change;
        console.log("Into: " + currentRoom + "\n")
    } else
    console.log("Sorry, you can't get thar from heah.\n")
}
changeRoom()