//Zorkington Project by Brook and Rob
//Due 2.17.20

//--------------------sets up readline interface and async ask function-----//
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
//******************GAME BEGINS HERE */
// Our fearless GIRLSCOUT(aka Player) needs to sell 100 boxes of girl scout cookies to win the game.

//How to play - what are acceptable commands 

// Need - function for listing INVENTORY in room.  
//variables 

//--------------------------Classes Initialization -------------------------------
class Room {
    constructor(title, descript, inventory, humans, north, south, east, west, sign, locked) {
        this.title = title
        this.descript = descript
        this.inventory = inventory
        this.humans = humans
        this.north = north
        this.south = south
        this.east = east
        this.west = west
        this.sign = sign
        this.locked = locked
    }

}
//end of Room class construct -------------------beginning of Inventory class

class Inventory {
    constructor(isPortable, isEdible, value, inventory, misc) {
        this.isPortable = isPortable || true
        this.isEdible = isEdible || true
        this.value = value || 0 //if someobdy offers to trade for a box of cookies, is it worth it?
        this.inventory = inventory || []
        this.misc = misc //to give a category for things that are specific to object
    }
}
//end of Inventory class construct ------------------- beginning of Cookie class

class IsCookie {
    constructor(name, flavor, texture, shape, numberInBox, howManyBoxes, glutenFree, organic, gmoFree, ) {
        this.Name = name || 'cookie'
        this.flavor = flavor || 'way too sweet'
        this.texture = texture || 'like stale cardboard'
        this.shape = shape || 'an amorphous blob'
        this.numberInBox = numberInBox || 0
        this.howManyBoxes = howManyBoxes || 10 //how many boxes is girlscout actually carrying.  Need to be able to update
        this.glutenFree = glutenFree || false
        this.organic = organic || false
        this.gmoFree = gmoFree || false

    }
    cost = (howManyBoxes) => {
        price = howManyBoxes * 5
        return (howManyBoxes + 'will cost you' + price)
    }
    remainingBoxes = () => {
        remainingBoxes = this.howManyBoxes - boxesSold;
        if (boxesSold > this.howManyBoxes) {
            return 'Oh, I\'m sorry, I only have ' + this.howManyBoxes + ' left.'
        }

    }


}
//------end of Cookie class construct ------------------- beginning of Human class
class Human {
    constructor(firstName, health, lastName, description, age, boxesSold, boxesBought, money, room) {
        this.firstName = firstName || ''
        this.health = health || 10
        this.lastName = lastName || ''
        this.description = description || "A character"
        this.age = age || 'Older than the girlscout'
        this.boxesSold = boxesSold || 0
        this.boxesBought = boxesBought || 0
        this.money = money || 25
        this.room = room || street

    }
    //i need help with this loop
    //subtracts 2 health points if person says "no"
    healthStatus(health) {
        howHealthy = this.health
        while (howHealthy < 1) {
            console.log("You ran out of energy and can\'t sell any more cookies.")
            process.exit()
        }
        console.log('You\'ve still got energy to keep going: ' + this.health + " out of 10.")
        return howHealthy
    }
}


//**What do these characters need to do */

//----------------------Constructors---------------------------------------
//title, descript, inventory, humans, north, south, east, west, sign, locked//
const street = new Room("Main Street at No. 182", "You look at the entrance, which has a sign reading 'No Soliciting' taped to its window.\nThere is a piece of paper on the steps to the building with what looks like a number on it.\nA security guard sits behind a desk within view of the door. ", ["paper", "quarter"], [], "North across the street you see another building.", "The office building is in front of you.", "You look east up the hill toward UVM.", "You look west toward Lake Champlain.", "The sign says 'no soliciting.", "false")
const foyer = new Room("This is the foyer", "You are in a room.", ["newspaper"], [], "You your north is the street.", "To your south is the security console and the stairway.", "To your east is an elevator.","To your west is the door to a business, with 'Nectar's Business Office' written on it.", "The building directory says:\nFirst Floor - Nectar's Business Office\nSecond Floor - Trump Code Academy, Asure Software\nThird Floor - Roof Access.", false)
const elevator = new Room("Elevator", "You are in the building elevator", [], "", "", "", "", "Stair directory reads:\nFirst Floor: Security, Nectar's\nSecond Floor: Trump Code Academy, Asure Software\nThird Floor: ??", false)
const stairs = new Room("Stairway", "The stairs connect all three floors.", [], "", "", "", "", "Stair directory reads:\nFirst Floor: Security, Nectar's\nSecond Floor: Trump Code Academy, Asure Software\nThird Floor: ??", false)
const nectars = new Room("Nectar's Bar & Lounge", "You are in the business office of the famed Nectar's Bar.", ["six-pack of beer", "broom"], "", "", "", "", "", false)
const secondFloor = new Room("Second Floor Foyer")
const trumpCodeAcademy = new Room("Trump Code Academy")//ICE !!!!
const asureSoftware = new Room("Asure Software", "The office of software company Asure Software.",[], "", "", "", "","Asure Software", false )
const thirdFloor = new Room("Third Floor Foyer", "You are in the third floor foyer. There is a door labeled 'Roof Access' across from the stairs",[], "", "", "", "", false)
const roof = new Room("Roof", "You are on the building roof. The door inside is shut and locked behind you.", ["rocks", "antenna"], "To the north you see the door into the building.", "You're looking off the edge of the roof.", "You're looking off the edge of the roof.", "You're looking off the edge of the roof.", "A sign on the building door says 'NO ADMITTANCE'.", true)
//****CHARACTERS */
let girlScout = new Human(null, 10, null, 12, 0, 0, 25, street)
let securityOfficer = new Human('Tony', 10, "Manzello", "Crippled ex-Meter Reader", "55", 0, 0, 50, foyer)
let employeeNectars = new Human('John Q.', 10, 'Barman', "A guy with a trimmed beard and long hair: The bar manager for Nectar's.", 35, 0, 0, 150, nectars)
let employeeTrump = new Human('Suzy', 10, 'Trump', 'A blonde woman with spray-on tan.', 25, 0, 0, 10, trumpCodeAcademy)
let employeeTrump2 = new Human('Jimbo', 10, 'Barr', "A middle-aged guy wearing sunglasses and carrying a briefcase.", 55, 0, 0, 50, trumpCodeAcademy)
let employeeAsure1 = new Human("Kip", 10, "Steele", "An energetic man with a big smile.", 46, 0, 0, 75, asureSoftware)
let employeeAsure2 = new Human("Lana", 10, "Potter", "A woman with brown hair and a big smile.", 32, 0, 0, 40, asureSoftware)
//****STUFF */
const deskFoyer = new Inventory(false, false, 'battered wood', 150, ['drawers', 'cluttered'])
const signStreet = new Inventory(false, false)
const paperFoyer = new Inventory(true, false, 'coffee stained paper')
const signFoyer = new Inventory(false, false)
const pen = new Inventory(true, false)
const doorknob = new Inventory(false, false, 'metal')
const deskMeth = new Inventory(false, false, "metal")
//*****COOKIES */
const thinMint = new IsCookie('thin mints', 'mint-flavored cookies with a delicious chocolaty coating', 'crunchy', 'round', 32, 30)
const hillFarmer = new IsCookie('Hill Farmer', 'maple oatmeal', 'crunchy', 'lacy round wafers', 16, 10, true, true, true)
const samoas = new IsCookie('Samoas', 'caramel and toasted coconut-covered cookies', 'crisp and chewy', 'round', 14, 20)
const montpeculiar = new IsCookie('Montpeculiar', 'sweet and grassy, cbd, hemp and date cookies will remind you of rolling down a hill on a warm summer day', '', '', 'more than 8 fewer than 14', '', true, true, true)

let desk = {
    drawers: true,
    cluttered: false,
}

//-------------------Lookup tables

const obCookies = {
    'thin mint': thinMint,
    'thin mints': thinMint,
    'hill farmer': hillFarmer,
    'hillfarmer': hillFarmer,
    'samoa': samoas,
    'samoas': samoas,
    'montpeculiar': montpeculiar,
    'montpelier': montpeculiar

}

// const commands = {

//     "sell":sell
// //     "look": look,
// //     "see": look,
// //     "pick up": pickup,
// //     "pickup": pickup,
// //     "get": pickup,
// //     "drop": drop,
// //     "unlock": unlock,
// //     "speak": speak,
// //     "ask": speak,
// //     "show": show 
// }

//----------------FUNCTIONS-------------
// a way to determine what nonplayer characters do. if it's greater than 5 the answer is yes, 5 or less, no.
function outcomeGenerator(min, max) {
    min = 0
    max = 10
    outcome = parseInt(Math.floor(Math.random() * (max - min + 1)) + min)
    {
        if (outcome > 5) {
            return " the the answer is yes";

        } else if (outcome <= 5) {

            return 'absolutely not'
        }

    }
}
console.log('this is the outcome generator ' + outcomeGenerator())

//once somebody has agreed to buy cookies a random way to figure out how many boxes they buy
let boxesSold = [];
function howManyBoxes(min, max) {

    return (Math.floor(Math.random() * (max - min + 1)) + min)

}
const boxesBought = howManyBoxes(1, 15)
console.log('I\'ll buy ' + boxesSold + ' How much will it cost?')
let totalCost = howManyBoxes() * 5
boxesSold.push(boxesBought)

let states = {
    street: { canChangeTo: ['foyer'] },
    foyer: { canChangeTo: ['street', 'stairs', 'elevator', 'nectars'] },
    stairs: { canChangeTo: ['foyer', 'thirdFloor', 'secondFloor'] },
    elevator: { canChangeTo: ['foyer', 'thirdFloor', 'secondFloor'] },
    secondFloor: { canChangeTo: ['elevator', 'stairs', 'trumCodeAcademy', 'asureSoftware'] },
    nectars: { canChangeTo: ['foyer'] },
    trumpCodeAcademy: { canChangeTo: ['secondFloor'] },
    asureSoftware: { canChangeTo: ['secondFloor'] },
    thirdFloor: { canChangeTo: ["roof"] }
}

let roomLookup = {
    'street': street,
    'foyer': foyer,
    'stair': stairs,
    'stairs': stairs,
    'elevator': elevator,
    'secondFloor': secondFloor,
    'second floor': secondFloor,
    'secondfloor': secondFloor,
    'asure software': asureSoftware,
    'trump': trumpCodeAcademy,
    'trump code': trumpCodeAcademy,
    'trump code academy': trumpCodeAcademy,
    'nectar': nectars,
    'nectars': nectars,
    'asure': asureSoftware,
    'third floor': thirdFloor,
    'thirdfloor': thirdFloor,
    'thirdFloor': thirdFloor
}
let currentState = 'street'
let currentRoom = roomLookup[currentState]
//let roomInventory = currentRoom.inventory

//----------------------------start game function ------------------------

async function startGame() {
    girlScout.firstName = await ask("What is your name? \n>_")
    console.log("Hello " + girlScout.firstName + " \n")
    console.log("You are selling girl scout cookies. \nTo win the game you need to sell 25 or more boxes.\nTo check how many you've sold, type [i]\nTo see what is in the room, type [j]\nTo move around use [move][direction]\nTo sell cookies, type [sell].")
    console.log("\n")
    let init = await ask("Are you ready to start?\n>_")
    if (init === "y" || "yes") {
        let gameStatus = "playing"
        play()
    } else
        console.log('Sorry to see you go')
    process.exit()
}

async function play() {
    if (girlScout.boxesSold >= 25) {
        console.log("Congrats! You sold " + girlScout.boxesSold + " and you've won the game! A beautiful winged unicorn swoops down to fly you away.")
        process.exit();
    } else if (girlScout.health < 10) {
        console.log("Oh no! you've totally run out of energy and you've lost the game.")
    } else {
        console.log()
        let change = await ask("You are standing in the "+ currentRoom.title + "\n" + currentRoom.descript + "\n" + currentRoom.north + "\n" +currentRoom.south + "\n" + currentRoom.east + "\n" + currentRoom.west + "\nWhat do you want to do?")
        if (states[currentState].canChangeTo.includes(change)) {
            console.log('Going from room: ' + currentState)
            currentState = change
            currentRoom = roomLookup[currentState]
            console.log('Current room is: ' + currentState)
            console.log('Current room is: ' + currentRoom.descript)
            console.log('This room contains ' + currentRoom.inventory)
        } else {
            console.log('Sorry, you can\'t get thar from heah')
            console.log('Current state is: ' + currentState)
        }
    } play()
}
startGame()

function pickup(item){
    currentRoom.inventory.pop(item)
    girlScout.inventory.push(item)
    console.log("You have picked up the " + item)
}



