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
//*****COOKIES */
const thinMint = new IsCookie('thin mints', 'mint-flavored cookies with a delicious chocolaty coating', 'crunchy', 'round', 32, 30)
const hillFarmer = new IsCookie('Hill Farmer', 'maple oatmeal', 'crunchy', 'lacy round wafers', 16, 10, true, true, true)
const samoas = new IsCookie('Samoas', 'caramel and toasted coconut-covered cookies', 'crisp and chewy', 'round', 14, 20)
const montpeculiar = new IsCookie('Montpeculiar', 'sweet and grassy, cbd, hemp and date cookies will remind you of rolling down a hill on a warm summer day', '', '', 'more than 8 fewer than 14', '', true, true, true)

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

let securityOfficer = new Human('Tony', 10, "Manzello", "Crippled ex-Meter Reader", "55", 0, 0, 100, foyer)
let employeeNectars = new Human('John Q.', 10, 'Barman', "A guy with a trimmed beard and long hair: The bar manager for Nectar's.", 35, 0, 0, 150, nectars)
let employeeTrump = new Human('Suzy', 10, 'Trump', 'A blonde woman with spray-on tan.', 25, 0, 0, 2000, trumpCodeAcademy)
let employeeTrump2 = new Human('Jimbo', 10, 'Barr', "A middle-aged guy wearing sunglasses and carrying a briefcase.", 55, 0, 0, 150, trumpCodeAcademy)
let employeeAsure1 = new Human("Kip", 10, "Steele", "An energetic man with a big smile.", 46, 0, 0, 75, asureSoftware)
let employeeAsure2 = new Human("Lana", 10, "Potter", "A woman with brown hair and a big smile.", 32, 0, 0, 175, asureSoftware)


