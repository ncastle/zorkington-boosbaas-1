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


// Need - function for listing INVENTORY in room.  
//variables 

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
    constructor(description, isPortable, isEdible, isHuman, isStuff, value, ) {
        this.description = description || 'It\'s a thing only a mother could love.'
        this.isPortable = isPortable || true
        this.isEdible = isEdible || true
        this.isHuman = isHuman || false
        this.isStuff = isStuff || [] // a place to store objects acquired during game play
        this.value = value || 0 //if someobdy offers to trade for a box of cookies, is it worth it?

    }
}
//end of Inventory class construct ------------------- beginning of Cookie class

class IsCookie extends Inventory {
    constructor(description,isPortable, isEdible, isStuff, value, name, flavor, texture, shape, numberInBox, initialInventory, glutenFree, organic, gmoFree) {
        super('',true, true, false, '', 5)
        this.name = name || 'cookie'
        this.flavor = flavor || 'way too sweet'
        this.texture = texture || 'like stale cardboard'
        this.shape = shape || 'an amorphous blob'
        this.numberInBox = numberInBox || 0
        this.initialInventory = 20 // how many boxes girl scout starts with
        this.glutenFree = glutenFree || false
        this.organic = organic || false
        this.gmoFree = gmoFree || false
    }
    howManyBoxesSold = (min, max) => {

        return (Math.floor(Math.random() * (max - min + 1)) + min)
    }


    totalCost = (howManyBoxesSold) => {
        this.totalCost = this.howManyBoxesSold * this.value
        return (this.howManyBoxesSold + ' boxes will cost you $' + this.totalCost)
    }

    remainingBoxes = () => {
        let boxesSold = 12 //Have to replace this with function that returns number of boxes left
        remainingBoxes = this.howManyBoxes - boxesSold;
        if (boxesSold > this.howManyBoxes) {
            return 'Oh, I\'m sorry, I only have ' + this.howManyBoxes + ' left.'
        } else {
            this.isStuff.push[boxesBought]

        }
    }


}

//------end of Cookie class construct ------------------- beginning of Human class

class Characters {
    constructor(firstName, description, initialHealth, currentHealth, age, inventory, currentRoom) {
        this.firstName = firstName || ''
        this.description = description || 'one of the finest in the land'
        this.initialHealth = initialHealth || 10
        this.currentHealth = currentHealth
        this.age = age || 'Older than the girlscout'
        this.inventory = inventory || []//POTENTIAL TO SET MAX NUMBER THINGS CAN CARRY
        this.currentRoom = currentRoom || foyer
    }

    /*healthStatus() {
         howHealthy = this.currentHealth
         while (howHealthy === 0) {
             console.log('You died')
 
         }
         console.log('you\'re still alive ' + this.currentHealth)
         return howHealthy-
         */
}
class Human extends Characters {
    constructor(firstName, description, initialHealth, currentHealth, age, inventory, currentRoom, hasGender) {
        super(firstName, description, 10, currentHealth, age, inventory, currentRoom)
        this.hasGender = hasGender
    }

}

//****end Characters begin Furniture and Office Supplies */

class Furniture extends Inventory {
    constructor(description,isPortable, isEdible, isHuman, isStuff, value, isOpen, conductsElectricity) {
        super(description,isPortable, false, false, '', '')
        this.isUnlocked = isUnlocked || false
        this.conductsElectricity = conductsElectricity || false
    }
}

class Supplies extends Inventory{
    constructor(description, isPortable, isEdible, isHuman, isStuff, value, isFlammable) {
        super(description, true, isEdible, false, '', '')
        this.isFlammable=isFlammable || false
        
    }

}
//----------------------Constructors---------------------------------------
//title, descript, inventory, north, south, east, west, sign, locked//
const street = new Room("Main Street at No. 182", "You look at the entrance, which has a sign reading 'No Soliciting' taped to its window.\nA security guard sits behind a desk within view of the door. ", ["paper"], "North across the street you see another building.", "The office building is in front of you.", "You look east up the hill toward UVM.", "You look west toward Lake Champlain.", "The sign says 'no soliciting.", "false")
const foyer = new Room("This is the foyer", "You are in a room.", [newspaper.description], "You are facing north", "You are facing south", "You are facing east", "you are facing west", "This is a directory.", false)
const elevator = new Room("Elevator", "You are in the building elevator", [], "", "", "", "", "Stair directory reads:\nFirst Floor: Security, Nectar's\nSecond Floor: Trump Code Academy, Asure Software\nThird Floor: ??", false)
const stairs = new Room("Stairway", "The stairs connect all three floors.", [], "", "", "", "", "Stair directory reads:\nFirst Floor: Security, Nectar's\nSecond Floor: Trump Code Academy, Asure Software\nThird Floor: ??", false)
const nectars = new Room("Nectar's Bar & Lounge", "You are in the business office of the famed Nectar's Bar.", ["six-pack of beer", "broom"], "", "", "", "", "", false)
const secondFloor = new Room("Second Floor Foyer")
const trumpCodeAcademy = new Room("Trump Code Academy")//ICE !!!!
const asureSoftware = new Room("Asure Software", "The office of software company Asure Software.", [], "", "", "", "", "Asure Software", false)
const thirdFloor = new Room("Third Floor Foyer", "You are in the third floor foyer. There is a door labeled 'Roof Access' across from the stairs", [], "", "", "", "", false)
const roof = new Room("Roof", "You are on the building roof. The door inside is shut and locked behind you.", ["rocks", "antenna"], "To the north you see the door into the building.", "You're looking off the edge of the roof.", "You're looking off the edge of the roof.", "You're looking off the edge of the roof.", "A sign on the building door says 'NO ADMITTANCE'.", true)

//****CHARACTERS */
const girlScout = new Human('')
const securityOfficer = new Human('Tony')
const employee1 = new Human('Mr.')
const employee2 = new Human('Ms.')
const employee3 = new Human('Mr.')
const employee4 = new Human('Ms.')

//****STUFF */
const deskFoyer = new Furniture('dark pressboard desk. Has computer, telephone and an insulated coffee mug on top', false, false, false, '', 50, false, false)
const signStreet = new Supplies('No Soliciting', true, false, false, '', 0, false)
const paperFoyer = new Supplies('Security Guard\'s daily "to-do" list. Has code for front door keypad written on it.', true, false, false, '', 0, true)
const signFoyer = new Supplies('Office directory', false, false, false, '', 0, false)
const pen = new Supplies('basic Bic. Black Ink. It writes.',true, false, false, '', 0, false)
const doorknobMeth = new Furniture('', false, false, false, '',0,false,true )
const deskMeth = new Furniture('a battered grey desk, covered in old stickers',false,false,false,'',50,false,true)
const newspaper = new Supplies('Last week\'s copy of "Hometown", wet and crumpled',true,false,false,'',0,true)



//*****COOKIES */
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

// const commands = {
//     "yes": yes,
//     "no": no,
//     "go": move,
//     "move": move,
//     "look": look,
//     "see": look,
//     "pick up": pickup,
//     "pickup": pickup,
//     "get": pickup,
//     "drop": drop,
//     "unlock": unlock,
//     "speak": speak,
//     "ask": speak,
//     "show": show
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

async function changeRoom() {
    if (currentState === "thirdFloor") {
        console.log("Congrats! You made it to " + currentRoom.descript + ".")
        process.exit();
    } else {
        let change = await ask("which room do you want to go to?")
        if (states[currentState].canChangeTo.includes(change)) {
            console.log('Going from room: ' + currentState)
            currentState = change
            currentRoom = roomLookup[currentState]
            console.log('Current state is: ' + currentState)
            console.log('Current room is: ' + currentRoom.descript)
        } else {
            console.log('Sorry, you can\'t get thar from heah')
            console.log('Current state is: ' + currentState)
        }
    } changeRoom()
}
changeRoom()

//----------------------------start game  ------------------------

console.log('You, in the guise of a fearless GIRLSCOUT, need to sell 100 boxes of girl scout cookies while keeping your spirits above zero to win this game. Along the way you will encounter surly employees and unforeseen situations.\nYour adventure begins one chilly morning in the booming metropolis of Burlington.  You are standing outside 182 Main Street wearing your sash with all its neatly sewn merit badges carrying boxes of cookies, forms and other random things.')
console.log('Adventures, like life have rules. Here they are: ')


//How to play - what are acceptable commands 

async function startGame() {
    girlScout.firstName = await ask("What is your name? \n>_")
    console.log("Hello " + girlScout.firstName + " \n")
    console.log("You are selling girl scout cookies. \nTo win the game you need to sell 100 or more boxes.\nTo check how many you've sold, type [i]\nTo move around use [move][direction]")
    let init = await ask("Are you ready to start?\n>_")
    if (init === "y" || "yes") {
        play();
    } else
        console.log('Sorry to see you go')
    process.exit()

}

startGame()
boxesSold.push(boxesBought)