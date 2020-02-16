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

class Human {
    constructor(firstName, health, lastName, description, age, boxesSold, boxesBought, money, room) {
        this.firstName = firstName || ''
        this.health = health || 10
        this.lastName = lastName || ''
        this.description = description || "A character"
        this.age = age || 'Older than the girlscout'
        this.boxesSold = boxesSold || 0
        this.boxesBought = boxesBought || 0
        this.money = money || 50
        this.room = room || "street"
    }
    purchaseAmount = function (min, max) {
        max = this.money / 5
        min = 0
        outcome = parseInt(Math.floor(Math.random() * (max.round() - min + 1)) + min)
        if (outcome > 5) {
            return ' the answer is yes. I\'ll buy ' + howManyBoxes() + 'boxes'
        } else if (outcome <= 5) {
            this.healthStatus(this.health)
            return 'absolutely not'
        }
        console.log('this is the outcome generator ' + purchaseAmount())
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

const foyer = new Room("This is the foyer", "You are in a room.", ["newspaper"], [], "You your north is the street.", "To your south is the security console and the stairway.", "To your east is an elevator.", "To your west is the door to a business, with 'Nectar's Business Office' written on it.", "The building directory says:\nFirst Floor - Nectar's Business Office\nSecond Floor - Trump Code Academy, Asure Software\nThird Floor - Roof Access.", false)
let currentRoom = foyer
let securityOfficer = new Human('Tony', 10, "Manzello", "Crippled ex-Meter Reader", "55", 0, 0, 50, foyer)
let girlScout = new Human(null, 10, null, 12, 0, 0, 25, foyer)
currentRoom.humans = [securityOfficer, girlScout]
console.log("You have sold " + girlScout.boxesSold + " boxes.")
console.log(securityOfficer.firstName + " has purchased " + securityOfficer.boxesBought + " boxes.")

async function sellBoxes() {
    let actionState = await ask("what do you want to do?")
    if (actionState.toString() === "sell") {
        girlScout.purchaseAmount(0, currentRoom.Human.money)
    } else console.log("I'm sorry, I don't understand.")
}

sellBoxes()
