class Inventory {
    constructor(isPortable, isEdible, madeOutOf,value, misc) {
        this.isPortable = isPortable || true
        this.isEdible = isEdible || true
        this.madeOutOf = madeOutOf || '' //so the desk in the meth lab can be made out of metal and the static electric spark blows things up.
        this.value = value || 0 //if someobdy offers to trade for a box of cookies, is it worth it?
        this.misc = misc || ''//to give a category for things that are specific to object
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
        return (howManyBoxes + 'will cost you' + price)
    }
    remainingBoxes = () => {
        remainingBoxes = this.howManyBoxes - boxesSold;
        if (boxesSold > this.howManyBoxes) {
            return 'Oh, I\'m sorry, I only have ' + this.howManyBoxes +' left.'
        }
        
    }
   

} 

const deskFoyer = new Inventory(false,false,'battered wood',150,['drawers', 'cluttered'])
const signStreet = new Inventory(false, false)
const paperFoyer = new Inventory(true, false, 'coffee stained paper')
const signFoyer = new Inventory(false,false)
const pen = new Inventory(true, false)
const doorknob = new Inventory(false, false, 'metal')
const deskMeth = new Inventory(false,false,"metal")


const thinMint = new IsCookie('thin mints','mint-flavored cookies with a delicious chocolaty coating', 'crunchy','round',32,30,)
const hillFarmer = new IsCookie('Hill Farmer','maple oatmeal', 'crunchy', 'lacy round wafers', 16,10, true, true, true)
const samoas = new IsCookie('Samoas','caramel and toasted coconut-covered cookies', 'crisp and chewy', 'round', 14,20)
const montpeculiar = new IsCookie('Montpeculiar','sweet and grassy,these cbd, hemp and date cookies will remind you of rolling down a hill on a warm summer day', '', '', 'more than 8 fewer than 14','', true, true, true)

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


