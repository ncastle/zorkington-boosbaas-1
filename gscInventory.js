const min = 1
const max = 10

let isUnlocked = false //TESTING ONLY NEED TO REPLACE AS CLASS VALUE
let outcome = outcomeGenerator(min, max)
const key = outcomeGenerator(min, max)
let boxesSold = 0;

function outcomeGenerator(min, max) {

    let outcome = (Math.floor(Math.random() * (max - min + 1)) + min)
    {
        if (outcome > 7) {
            return
        } else if (outcome <= 7) {
            return
        }
    }
}
console.log('this is the outcome generator remove from final code ' + outcome) //FOR TESTING ONLY



let unlockIt = () => {
    if (isUnlocked === true || key > 7) {
        console.log('Don\'t waste your time, it\'s already open' + 'value of  keys ' + key)
        return
    } else {
        let isUnlocked = true
        console.log('You\'re skills have paid off. The locked item is now unlocked. ' + key + isUnlocked)

    }

}
unlockIt()




class Inventory {
    constructor(isPortable, isEdible, isHuman, isStuff, value, ) {
        this.isPortable = isPortable || true
        this.isEdible = isEdible || true
        this.isHuman = isHuman || false
        this.isStuff = isStuff || [] // a place to store objects acquired during game play
        this.value = value || 0 //if someobdy offers to trade for a box of cookies, is it worth it?

    }
}

class IsCookie extends Inventory {
    constructor(isPortable, isEdible, isStuff, value, name, flavor, texture, shape, numberInBox, initialInventory, glutenFree, organic, gmoFree) {
        super(true, true, false, '', 5)
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




const thinMint = new IsCookie('thin mints', 'mint-flavored cookies with a delicious chocolaty coating', 'crunchy', 'round', 32, 30)
const hillFarmer = new IsCookie('Hill Farmer', 'maple oatmeal', 'crunchy', 'lacy round wafers', 16, 10, true, true, true)
const samoas = new IsCookie('Samoas', 'caramel and toasted coconut-covered cookies', 'crisp and chewy', 'round', 14, 20)
const montpeculiar = new IsCookie('Montpeculiar', 'sweet and grassy, cbd, hemp and date cookies will remind you of rolling down a hill on a warm summer day', '', '', 'more than 8 fewer than 14', '', true, true, true)
console.log(hillFarmer)
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



//***************Other stuff**************** */

class Furniture extends Inventory {
    constructor(isPortable, isEdible, isHuman, isStuff, value, isOpen, conductsElectricity) {
        super(isPortable, false, false, '', '')
        this.isUnlocked = isUnlocked || false
        this.conductsElectricity = conductsElectricity || false
    }
}
const boxesBought = howManyBoxes(1, 15)
console.log('I\'ll buy ' + boxesSold + ' How much will it cost?')
