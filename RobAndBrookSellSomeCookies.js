//Zorkington Project by Brook and Rob
//Due 2.17.20


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

let desk = {
    drawers: true,
    cluttered: false,

}


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
    constructor(firstName, health = 10, lastName, age) {
        this.firstName = firstName || ''
        this.health = health
        this.lastName = lastName || ''
        this.age = age || 'Older than the girlscout'
        

    }
    //i need help with this loop
    healthStatus() {
        howHealthy = this.health
        while (howHealthy === 0) {
            console.log('You died')

        }
        console.log('you\'re still alive ' + this.health)
        return howHealthy--
    }
}


//----------------------Constructors---------------------------------------
//title, descript, inventory, north, south, east, west, sign, locked//
const street = new Room("Main Street at No. 182", "You look at the entrance, which has a sign reading 'No Soliciting' taped to its window.\nA security guard sits behind a desk within view of the door. ", ["paper"], "North across the street you see another building.", "The office building is in front of you.", "You look east up the hill toward UVM.", "You look west toward Lake Champlain.", "The sign says 'no soliciting.", "false")
const foyer = new Room("This is the foyer", "You are in a room.", ["newspaper"], "You are facing north", "You are facing south", "You are facing east", "you are facing west", "This is a directory.", "false")
const elevator = new Room("Elevator", "You are in the building elevator", [],"You are looking at the elevator door.")
const stairs = new Room()
const nectars = new Room()
const secondFloorFoyer = new Room()
const trumpCodeAcademy = new Room("ICE")
const asureSoftware = new Room("Meth lab")
const thirdFloorFoyer = new Room()
const roof = new Room("Roof", "You are on the building roof. The door inside is shut and locked behind you.",["rocks", "antenna"], "To the north you see the door into the building.","You're looking off the edge of the roof.", "You're looking off the edge of the roof.", "You're looking off the edge of the roof.", "A sign on the building door says 'NO ADMITTANCE'.", true)

const girlScout = new Human('', )
const securityOfficer = new Human('Tony','', 'Crippled ex-Meter Reader' )
const employee1 = new Human('Mr.')
const employee2 = new Human('Ms.')

const thinMint = new IsCookie('thin mints', 'mint-flavored cookies with a delicious chocolaty coating', 'crunchy', 'round', 32, 30)
const hillFarmer = new IsCookie('Hill Farmer', 'maple oatmeal', 'crunchy', 'lacy round wafers', 16, 10, true, true, true)
const samoas = new IsCookie('Samoas', 'caramel and toasted coconut-covered cookies', 'crisp and chewy', 'round', 14, 20)
const montpeculiar = new IsCookie('Montpeculiar', 'sweet and grassy, cbd, hemp and date cookies will remind you of rolling down a hill on a warm summer day', '', '', 'more than 8 fewer than 14', '', true, true, true)


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

const commands = {
    
}


//----------------FUNCTIONS-------------

// a way to determine what nonplayer characters do. if it's greater than 5 the answer is yes, 5 or less, no.
function outcomeGenerator(min, max) {
    min = 0
    max = 10
    outcome = parseInt(Math.floor(Math.random() * (max - min + 1)) + min)
    {        if (outcome > 5) {
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


//----------------------------start game function ------------------------
async function startGame() {
    girlScout.firstName = await ask("What is your name? \n>_")
    console.log("Hello " + girlScout.firstName +" \n")
    console.log("You are selling girl scout cookies. \nTo win the game you need to sell 100 or more boxes.\nTo check how many you've sold, type [i]\nTo move around use [move][direction]")
    let init = await ask("Are you ready to start?\n>_")
        if (init === "y" || "yes") {
            play();
        } else 
    console.log('Sorry to see you go')
    process.exit()
}


startGame()







































































