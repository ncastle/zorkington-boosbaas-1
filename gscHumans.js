//the number of boxes purchased will always be a random number between 1 and 15
const boxesBought = howManyBoxes(1, 15)

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
        this.room = room || street
    }
    purchaseAmount = function(min, max) {
        max = this.money / 5
        min = 0
        outcome = parseInt(Math.floor(Math.random() * (max.round() - min + 1)) + min)
        if (outcome > 5) {
                return ' the answer is yes. I\'ll buy '+ howManyBoxes() + 'boxes'
            } else if (outcome <= 5) {
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

function howManyBoxes(min, max) {
    soldAmount = (Math.floor(Math.random() * (max - min + 1)) + min)
    girlScout.boxesSold = girlScout.boxesSold + soldAmount
    console.log("You've now sold " + girlScout.boxesSold + " boxes")
    return soldAmount
    }

let totalCost = howManyBoxes() * 5
    


let girlScout = new Human("null", 10, "null", 12, 0, 0, 25, street)
let securityOfficer = new Human('Tony', 10, "Manzello", "Crippled ex-Meter Reader", "55", 0, 0, 100, foyer)
let employeeNectars = new Human('John Q.', 10, 'Barman', "A guy with a trimmed beard and long hair: The bar manager for Nectar's.", 35, 0, 0, 150, nectars)
let employeeTrump = new Human('Suzy', 10, 'Trump', 'A blonde woman with spray-on tan.', 25, 0, 0, 2000, trumpCodeAcademy)
let employeeTrump2 = new Human('Jimbo', 10, 'Barr', "A middle-aged guy wearing sunglasses and carrying a briefcase.", 55, 0, 0, 150, trumpCodeAcademy)
let employeeAsure1 = new Human("Kip", 10, "Steele", "An energetic man with a big smile.", 46, 0, 0, 75, asureSoftware)
let employeeAsure2 = new Human("Lana", 10, "Potter", "A woman with brown hair and a big smile.", 32, 0, 0, 175, asureSoftware)

//**What do these characters need to do */
//girl scout = player, need info from player, name
