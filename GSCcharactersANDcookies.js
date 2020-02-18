



/***GLOBAL FUNCTION */
//random number generator, need to give outcome a min and max when calling it.
let outcome = function outcomeGenerator(min, max) {
    return outcome = parseInt(Math.floor(Math.random() * (max - min + 1)) + min);
}

/**HUMANS    */
class Human {
    constructor(name, currentRoom, health, thingsYouCanPickUp, bag, money, description, sold) {
        this.Name = name || "Your parents thought they were doing you a favor by pickiing such a special name"
        this.currentRoom = currentRoom || 'foyer'
        this.currentHealth = health
        this.thingsYouCanPickUp = []
        this.bag = [] //it could be a drawer or a backpack or, if it's before july 1 2020 a single use plastic bag.
        this.moneyBeforeBuy = money //gotta pay for the cookies
        this.moneyAfterBuy = money // how much you have left
        this.description = description || 'one of the finest in the land'
        this.sold = 0; // only for the girl scout if >=25, they win

    }
    healthStatus(outcome) {
        let damageDone = outcome;
        this.currentHealth = (this.currentHealth - damageDone)
        if (this.currentHealth <= 0) {
            console.log('You died')
        } else {
            console.log('you\'re still alive ' + this.currentHealth)
            return this.currentHealth
        }
    }
    howManyBoxes() {
        let min = 1
        let max = 15
        boxesBought = (Math.floor(Math.random() * (max - min + 1)) + min)
        return boxesSold
    }
    totalCost(boxesBought) {
        this.totalCost = boxesBought * costOfBox
        return (this.boxesBought + ' boxes will cost you $' + this.totalCost)
    }
    // pickup(item) {
    //     currentRoom.inventory.pop(item)
    //     this.inventory.push(item)
    //     console.log("You have picked up the " + item)
    // },
    pickup() {
        while (bag.length < 5 && (canPickup === true)) {
            aThingYouPickUp = thingsYouCanPickUp.pop()
            console.log('You picked up the ' + aThingYouPickUp + ' .')
            bag.push(aThingYouPickUp);
        }
        console.log('Why would you do that?')

    }
    totalSold(boxesBought) {
        sold += boxesBought
        leftToSell = 25 - sold
        if (sold > 25) {
            console.log('You win!!!!! Unicorns swoop down to take you a girl scout heaven')
        } else {
            console.log('You\'re getting there! Only ' + leftToSell + ' to go.')
        } return sold
    }
}

class IsCookie {
    constructor(aThingYouPickUp, initialInventory, canPickup = true, description, texture, shape, numberInBox, glutenFree, organic, gmoFree, costOfBox, ) {
        this.nameofCookie = aThingYouPickUp || 'cookie'
        this.initialInventory = 0 // how many boxes girl scout starts with
        this.flavor = description || 'way too sweet'
        this.texture = texture || 'like stale cardboard'
        this.shape = shape || 'an amorphous blob'
        this.numberInBox = numberInBox || 0
        this.glutenFree = glutenFree || false
        this.organic = organic || false
        this.gmoFree = gmoFree || false
        this.costOfBox = 5
    }



}


//------end of Cookie class construct ------------------- beginning of Human class

//*****COOKIES */
const thinMint = new IsCookie('thin mints', 30, 'mint-flavored cookies with a delicious chocolaty coating', 'crunchy', 'round', 32)
const hillFarmer = new IsCookie('Hill Farmer', 10, 'maple oatmeal', 'crunchy', 'lacy round wafers', 16, true, true, true)
const samoas = new IsCookie('Samoas', 20, 'caramel and toasted coconut-covered cookies', 'crisp and chewy', 'round', 14)
const montpeculiar = new IsCookie('Montpeculiar', 5, 'sweet and grassy,these cbd infused hemp seed and date cookies will remind you of rolling down a hill on a warm summer day', '', '', 'more than 8 fewer than 14', true, true, true)

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





//lookAround(currentRoom) {
//  return this.currentRoom.description
//},

//     remainingBoxes() {

//         remainingBoxes = this.howManyBoxes - boxesSold;
//         if (boxesSold > this.howManyBoxes) {
//             return 'Oh, I\'m sorry, I only have ' + this.howManyBoxes + ' left.'
//         } else {
//             this.placeToHoldThings.push[boxesBought]
//         }

//   }
//  }
const girlScout = new Human('', 'foyer', 10, [], [hillFarmer.initialInventory], 0, '')
const securityOfficer = new Human('Tony', 'foyer', 10, [], [], 100, "Crippled ex-Meter Reader")
// let employeeNectars = new Human('John Q.', 10, 'Barman', "A guy with a trimmed beard and long hair: The bar manager for Nectar's.", 35, 0, 0, 150, nectars)
// let employeeTrump = new Human('Suzy', 10, 'Trump', 'A blonde woman with spray-on tan.', 25, 0, 0, 2000, trumpCodeAcademy)
// let employeeTrump2 = new Human('Jimbo', 10, 'Barr', "A middle-aged guy wearing sunglasses and carrying a briefcase.", 55, 0, 0, 150, trumpCodeAcademy)
// let employeeAsure1 = new Human("Kip", 10, "Steele", "An energetic man with a big smile.", 46, 0, 0, 75, asureSoftware)
// let employeeAsure2 = new Human("Lana", 10, "Potter", "A woman with brown hair and a big smile.", 32, 0, 0, 175, asureSoftware)

console.log(' girl scout health ' + girlScout.healthStatus(1,5) + ' security guard health ' + securityOfficer.healthStatus((1,5)))
console.log(' girl scout health ' + girlScout.healthStatus(1, 5) + ' security guard health ' + securityOfficer.healthStatus((1, 5)))