/** Overall, looks like you have a really well structured game. You have some really creative ideas and are using objects and classes in the correct way.
 *  Really cool and fun idea with the girl scout walking through an office trying to sell cookies. When you have extra files that are unused, or have files that
 *  you are testing concepts and ideas in, remember to remove them from the repository or add them to your .gitignore file so that they are not tracked by git.
 *  Also, if you have multiple files, be clear which one should be run to start your program. I like that you have a girlscoutcookies.txt file that outlines
 *  your game and the direction you wanted to go, and I like that you used it to split up tasks. This is a great strategy, but should be in your gitignore. Some
 *  of the stuff in this file are good things you could have in a readme file: the game description, what file to run to start your game. Other than that,
 *  your organization and readability are good. There is some funky stuff happening when you start your program, check out the comments around your play and
 *  start game function for more info. It looks like you put a lot of time and thought into this program, once you work out some of the big bugs causing it to
 *  crash, you will be right where you need to be! **/
//Zorkington Project by Brook and Rob
//Due 2.17.20
//"Chemistry: It's just like cooking, but don't lick the spoon."

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


//****GLOBAL VARIABLES *******************/
/**Since this is associated with a Human, this can be a property in the human class instead of a global variable that will be accessed by every human */
let boxesBought = 0;
/** The same applies to boxesSold, this can be a property of your girlscout object */
let boxesSold = 0;
const min = 0;  /** unused at the time of this submission */

//--------------------------Classes Initialization -------------------------------
class Room {
    constructor(title, descript, inventory, north, south, east, west, sign, locked) {
        this.title = title || 'the title of the room'
        this.descript = descript || 'a basic room'
        this.inventory = inventory || []
        this.north = north || null
        this.south = south || null
        this.east = east || null
        this.west = west || null
        this.sign = sign
        this.locked = false
    }
}
//end of Room class construct -------------------beginning of Inventory class

/** maybe a better name for this would be 'Item'? Then, instead of this.item, maybe this.name? Other than this, really good use of classes to create different
 *  objects, rooms, people, etc, that you can interact with in your code.  **/
class Inventory {
    constructor(item, description, isPortable, placeToHoldThings, value, ) {
        this.item = item || 'It\'s like, one of those thingamabobbers that you used to get in cereal boxes.'
        this.description = description || 'It\'s a thing only a mother could love.'
        this.isPortable = isPortable || true
        this.placeToHoldThings = []
        this.value = value || 0 //if someobdy offers to trade for a box of cookies, is it worth it?
    }

}
//end of Inventory class construct ------------------- beginning of Cookie class

class IsCookie {
    constructor(item, cost, description, isPortable, texture, shape, numberInBox, initialInventory, glutenFree, organic, gmoFree) {
        this.name = item || 'cookie'
        this.cost = 5
        this.flavor = description || 'way too sweet'
        this.texture = texture || 'like stale cardboard'
        this.shape = shape || 'an amorphous blob'
        this.numberInBox = numberInBox || 0
        this.initialInventory = initialInventory // how many boxes girl scout starts with
        this.glutenFree = glutenFree || false
        this.organic = organic || false
        this.gmoFree = gmoFree || false
    }



}

//------end of Cookie class construct ------------------- beginning of Human class

class Characters {
    constructor(firstName, description, health, age, inventory, currentRoom) {
        this.firstName = firstName || ''
        this.description = description || 'one of the finest in the land'
        this.initialHealth = health || 10
        this.currentHealth = health
        this.age = age || 'Older than the girl scout'
        this.inventory = inventory || []//POTENTIAL TO SET MAX NUMBER THINGS CAN CARRY
        this.currentRoom = currentRoom || foyer
    }
    outcomeGenerator(min, max) {

        this.max = 10
        outcome = parseInt(Math.floor(Math.random() * (max - min + 1)) + min)
        {
            if (outcome > 7) {
                return true //this means action will happen
            } else if (outcome <= 7) {
                return false
            }
        }
    }

    healthStatus() {
        if (this.currentHealth === 0) {
            console.log('You died')
        }
        console.log('you\'re still alive ' + this.currentHealth)
    }

    /** Remove these extra spaces at the end of classes and chunks of code to save lines and shorten your file length as well as increase readability**/
}


class Human extends Characters {
    constructor(firstName, description, initialHealth, currentHealth, inventory, age, currentRoom, hasGender) {
        super(firstName, description, 10, currentHealth, age, inventory, currentRoom)
        this.hasGender = hasGender
    }
    howManyBoxes() {
        let min = 1
        let max = 15
        boxesBought = (Math.floor(Math.random() * (max - min + 1)) + min)
        boxesSold += boxesBought
        return boxesSold
    }
    totalCost(boxesBought) {
        this.totalCost = boxesBought * this.value
        return (this.boxesBought + ' boxes will cost you $' + this.totalCost)
    }
    pickup(item) {
        currentRoom.inventory.pop(item)
        this.inventory.push(item)
        console.log("You have picked up the " + item)
    }

}

//****end Characters begin Furniture and Office Supplies */
class Furniture extends Inventory {
    constructor(item, description, isPortable, isEdible, isHuman, isStuff, value, isOpen, conductsElectricity) {
        super(item, description, isPortable, false, false, '', '')
        this.isOpen = isOpen || false
        this.conductsElectricity = conductsElectricity || false
    }
}

class Supplies extends Inventory {
    constructor(item, description, isPortable, isEdible, isHuman, isStuff, value, isFlammable) {
        super(item, description, true, isEdible, false, '', '')
        this.isFlammable = isFlammable || false

    }


}
//----------------------Constructors---------------------------------------
/** Good use of comments throughout your code to separate out sections **/

//****STUFF */
const deskFoyer = new Furniture('', 'dark pressboard desk. Has computer, telephone and an insulated coffee mug on top', false, false, false, [], 50, false, false)
const signStreet = new Supplies('', 'No Soliciting', true, false, false, '', 0, false)
const paperFoyer = new Supplies('', 'Security Guard\'s daily "to-do" list. Has code for front door keypad written on it.', true, false, false, '', 0, true)
const signFoyer = new Supplies('', 'Office directory', false, false, false, '', 0, false)
const pen = new Supplies('', 'basic Bic. Black Ink. It writes.', true, false, false, '', 0, false)
const doorknobMeth = new Furniture('', '', false, false, false, '', 0, false, true)
const deskMeth = new Furniture('', 'a battered grey desk, covered in old stickers', false, false, false, '', 50, false, true)
const newspaper = new Supplies('', 'Last week\'s copy of "Hometown", wet and crumpled', true, false, false, '', 0, true)

//Room builders
//title, descript, inventory, north, south, east, west, sign, locked//
const street = new Room("Main Street at No. 182", "You look at the entrance, which has a sign reading 'No Soliciting' taped to its window.\nA security guard sits behind a desk within view of the door. ", [paperFoyer.description], "North across the street you see another building.", "The office building is in front of you.", "You look east up the hill toward UVM.", "You look west toward Lake Champlain.", "The sign says 'no soliciting.", "false")
const foyer = new Room("This is the foyer", "You are in a room.", [newspaper.description, deskFoyer.description, signFoyer.description, pen.description], "You are facing north", "You are facing south", "You are facing east", "you are facing west", "This is a directory.", false)
const elevator = new Room("Elevator", "You are in the building elevator", [], "", "", "", "", "Stair directory reads:\nFirst Floor: Security, Nectar's\nSecond Floor: Trump Code Academy, Asure Software\nThird Floor: ??", false)
const stairs = new Room("Stairway", "The stairs connect all three floors.", [], "", "", "", "", "Stair directory reads:\nFirst Floor: Security, Nectar's\nSecond Floor: Trump Code Academy, Asure Software\nThird Floor: ??", false)
const nectars = new Room("Nectar's Bar & Lounge", "You are in the business office of the famed Nectar's Bar.", ["six-pack of beer", "broom"], "", "", "", "", "", false)
const secondFloor = new Room("Second Floor Foyer")
const trumpCodeAcademy = new Room("Trump Code Academy")//ICE !!!!
const asureSoftware = new Room("Asure Software", "The office of software company Asure Software.", [], "", "", "", "", "Asure Software", false)
const thirdFloor = new Room("Third Floor Foyer", "You are in the third floor foyer. There is a door labeled 'Roof Access' across from the stairs", [], "", "", "", "", false)
const roof = new Room("Roof", "You are on the building roof. The door inside is shut and locked behind you.", ["rocks", "antenna"], "To the north you see the door into the building.", "You're looking off the edge of the roof.", "You're looking off the edge of the roof.", "You're looking off the edge of the roof.", "A sign on the building door says 'NO ADMITTANCE'.", true)

//*****COOKIES */
const thinMint = new IsCookie('thin mints', 'mint-flavored cookies with a delicious chocolaty coating', 'crunchy', 'round', 32, 30)
const hillFarmer = new IsCookie('Hill Farmer', 'maple oatmeal', 'crunchy', 'lacy round wafers', 16, 10, true, true, true)
const samoas = new IsCookie('Samoas', 'caramel and toasted coconut-covered cookies', 'crisp and chewy', 'round', 14, 20)
const montpeculiar = new IsCookie('Montpeculiar', 'sweet and grassy, cbd, hemp and date cookies will remind you of rolling down a hill on a warm summer day', '', '', 'more than 8 fewer than 14', '', true, true, true)

//****CHARACTERS */
const girlScout = {
    name: '',
    inventory: [],
    currentRoom: foyer,
    initialHealth: 10,
    boxesSold: 0,

    totalCost(boxesBought) {
        this.totalCost = boxesBought * this.value
        return (this.boxesBought + ' boxes will cost you $' + this.totalCost)
    },

    pickup(item) {
        this.inventory.push(item)
        console.log("You have picked up the " + item)
    },


    //lookAround(currentRoom) {
    //  return this.currentRoom.description
    //},

    remainingBoxes() {

        remainingBoxes = this.howManyBoxes - boxesSold;
        if (boxesSold > this.howManyBoxes) {
            return 'Oh, I\'m sorry, I only have ' + this.howManyBoxes + ' left.'
        } else {
            this.placeToHoldThings.push[boxesBought]
        }

    }
}
/** Is looks like these were declared, but are not being used throughout the rest of your code **/
const securityOfficer = new Human('Tony', 'a crippled ex-meter reader, he has a visceral dislike of young men in baseball caps', 10, [])
const employee1 = new Human('Mr.')
const employee2 = new Human('Ms.')
const employee3 = new Human('Mr.')
const employee4 = new Human('Ms.')

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

/** Remember to remove unused code for project submissions for better readability **/
 /*const commands = {
     "yes": yes,
     "no": no,
     "go": move,
     "move": move,
     "look": look,
     "see": look,
     "pick up": pickup,
     "pickup": pickup,
     "get": pickup,
     "drop": drop,
     "unlock": unlock,
     "speak": speak,
     "ask": speak,
     "show": show
 } */


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
let currentState = 'street' //sets room location
let currentRoom = roomLookup[currentState] //for updating room location



async function startGame() {
    girlScout.firstName = await ask("What is your name? \n>_")
    console.log("Hello " + girlScout.firstName + " \n")
    console.log("You are selling girl scout cookies. \nTo win the game you need to sell 25 or more boxes.\nTo check how many you've sold, type [i]\nTo move around use [move][direction]")
    /** I like that you give the user a list of commands that they can use, this is very helpful **/
    console.log('the other commands you will need are "yes", "no", "look" to see what\'s in your immediate surroundings, "get" to pickup an item,"drop" to drop it. ' +
        '"unlock" opens things, "speak" allows you to interact with another character and finally "show"')

    let init = await ask("Are you ready to start?\n>_")
    init.toLowerCase()
    /** The correct syntax here would be init === 'y' || init === 'yes'   The way this is written currently, it will check if init is equal to 'y' and if true,
     *  then great, you hit the play function, if not, then it will go to the other side of the OR operator and check the value of 'yes', and since a non-empty
     *  string is always truthy, this will always be true, no matter what the user inputs. **/
    if (init === "y" || "yes") {
        play();
    } else{    // missing curly braces
        console.log('Sorry to see you go')
        process.exit()}  /** Remember your curly braces after your else!! This causes your program to exit immediately after the user responds to the question 'are you ready to start?' **/
}
/** Since this function call starts your whole game, maybe think about moving it all the way to the bottom so that it doesn't get lost in your function definitions **/
startGame()

// // play function will set recursive loop that will run until the first or
// // second if check passes (either we sell more than 25 boxes, or health falls
// // below 1)

async function play() {
    if (girlScout.boxesSold > 25) { //Sets block check for winning condition
        console.log("Congrats! You won the game! A magnificent unicorn sweeps down out of the sky to carry you away.")
        process.exit();

    } else if (girlScout.health < 1) {
        console.log("Oh no! You've run out of energy and health! You lose.")
        process.exit()
    }
    else if (girlScout.boxesSold >= 0) {   //this else contains most of the game play
        /** I think you want to console.log the currentRoom.title here, this currently prints '[ object Object ]' to the console **/
        console.log("You are standing in " + currentRoom)
        let command = await ask("What do you want to do?\n>_")
        /** Is this supposed to be an if statement? This currently throws an error when starting your program **/
            // (states[currentState].canChangeTo.includes(command))     // this was uncommented
        console.log('You are going from: ' + currentState)
        currentState = command /** the this keyword should generally only be used when defining methods in an object, here you can just access the command variable declared a few lines above **/
        currentRoom = roomLookup[currentState]
        console.log('Current state is: ' + currentState)
        console.log('Current room description ' + currentRoom.descript)
    }
    else if (!states[currentState].canChangeto.includes(command)) {
        console.log("Sorry, you can\'t get thar from heah");
        console.log('Current state is: ' + currentState)
    }
    play()
}

/** Since you start the game with startGame() and you call play() inside of that, I don't think you need this here. It seems to be causing some issues when starting your program **/
// play()   // this was uncommented

