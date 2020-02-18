
/*******GLOBAL VARIABLES     */
const min = 0;
/***GLOBAL FUNCTION */
function outcomeGenerator() {
    min = 1;
    max = 10;
    return outcome = (Math.floor(Math.random() * (max - min + 1)) + min);
} 

/**HUMANS    */
class Human {
    constructor(name, currentRoom, health, thingsYouCanPickUp, bag, description, ) {
        this.Name = name || "Your parents thought they were doing you a favor by pickiing such a special name"
        this.currentRoom = currentRoom || 'foyer'
        this.initialHealth = health || 10
        this.currentHealth = health
        this.thingsYouCanPickUp = []
        this.bag = [] //it could be a drawer or a backpack or, if it's before july 1 2020 a single use plastic bag.
        this.description = description || 'one of the finest in the land'
    }
    healthStatus(outcome) {
        this.currentHealth = this.currentHealth-outcome
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
}
const girlScout2 = new Human()
class IsCookie {
    constructor(aThingYouPickUp, initialInventory, canPickup=true, description, texture, shape, numberInBox,  glutenFree, organic, gmoFree, costOfBox,) {
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
const hillFarmer = new IsCookie('Hill Farmer', 10, 'maple oatmeal', 'crunchy', 'lacy round wafers', 16,  true, true, true)
const samoas = new IsCookie('Samoas', 20,'caramel and toasted coconut-covered cookies', 'crisp and chewy', 'round', 14 )
const montpeculiar = new IsCookie('Montpeculiar',5, 'sweet and grassy,these cbd infused hemp seed and date cookies will remind you of rolling down a hill on a warm summer day', '', '', 'more than 8 fewer than 14', true, true, true)

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
    name: null,
    inventory: [],
    currentRoom: 'foyer',
    initialHealth: 10,
    boxesSold: 0,

    totalCost(boxesBought) {
        this.totalCost = boxesBought * this.value
        return (this.boxesBought + ' boxes will cost you $' + this.totalCost)
    },

    pickup: function () {
        while (bag.length < 5 && (canPickup === true)) {
            theThingYouPickUp = thingsYouCanPickUp.pop()
            console.log('You put ' + theThingYouPickUp + ' in your bag.')
            bag.push(theThingYouPickUp);
        }
        console.log('Why would you do that?')
    }



    //lookAround(currentRoom) {
    //  return this.currentRoom.description
    //},
}
//     remainingBoxes() {

//         remainingBoxes = this.howManyBoxes - boxesSold;
//         if (boxesSold > this.howManyBoxes) {
//             return 'Oh, I\'m sorry, I only have ' + this.howManyBoxes + ' left.'
//         } else {
//             this.placeToHoldThings.push[boxesBought]
//         }

//   }
//  }

// let securityOfficer = new Human('Tony', 10, "Manzello", "Crippled ex-Meter Reader", "55", 0, 0, 100, foyer)
// let employeeNectars = new Human('John Q.', 10, 'Barman', "A guy with a trimmed beard and long hair: The bar manager for Nectar's.", 35, 0, 0, 150, nectars)
// let employeeTrump = new Human('Suzy', 10, 'Trump', 'A blonde woman with spray-on tan.', 25, 0, 0, 2000, trumpCodeAcademy)
// let employeeTrump2 = new Human('Jimbo', 10, 'Barr', "A middle-aged guy wearing sunglasses and carrying a briefcase.", 55, 0, 0, 150, trumpCodeAcademy)
// let employeeAsure1 = new Human("Kip", 10, "Steele", "An energetic man with a big smile.", 46, 0, 0, 75, asureSoftware)
// let employeeAsure2 = new Human("Lana", 10, "Potter", "A woman with brown hair and a big smile.", 32, 0, 0, 175, asureSoftware)

console.log(girlScout2)
