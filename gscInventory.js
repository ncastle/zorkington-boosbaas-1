class Inventory {
    constructor(isPortable, isEdible, value, inventory, misc) {
        this.isPortable = isPortable || true
        this.isEdible = isEdible || true
        this.value = value || 0 //if someobdy offers to trade for a box of cookies, is it worth it?
        this.inventory = inventory|| []
        this.misc = misc //to give a category for things that are specific to object
    }
}

class IsCookie {
    constructor(name, flavor, texture, shape, numberInBox, howManyBoxes, glutenFree, organic, gmoFree,) {
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
        console.log(cost(5))
        return (howManyBoxes + 'will cost you' + price)
}

}

let desk = {
    drawers: true,
    cluttered: false,

}

const thinMint = new IsCookie('thin mints','mint-flavored cookies with a delicious chocolaty coating', 'crunchy','round',32,30,)
const hillFarmer = new IsCookie('Hill Farmer','maple oatmeal', 'crunchy', 'lacy round wafers', 16,10, true, true, true)
const samoas = new IsCookie('Samoas','caramel and toasted coconut-covered cookies', 'crisp and chewy', 'round', 14,20)
const montpeculiar = new IsCookie('Montpeculiar','sweet and grassy, cbd, hemp and date cookies will remind you of rolling down a hill on a warm summer day', '', '', 'more than 8 fewer than 14','', true, true, true)

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

console.log(montpeculiar)
