// a way to determine what nonplayer characters do. if it's greater than 5 the answer is yes, 5 or less, no.
const min = 1
const max = 10

let isUnlocked = false //TESTING ONLY NEED TO REPLACE AS CLASS VALUE
let outcome = outcomeGenerator(min,max)
const key = outcomeGenerator(min, max)
function outcomeGenerator(min, max) {
   
    let outcome = (Math.floor(Math.random() * (max - min + 1)) + min)
    {
        if (outcome > 7) {
           return " the the answer is yes";
        } else if (outcome <= 7) {
            return 'absolutely not'
        }
    }
}
console.log('this is the outcome generator ' + outcome)



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
//once somebody has agreed to buy cookies a random way to figure out how many boxes they buy
let boxesSold = [];
function howManyBoxes(min, max) {
    
    return (Math.floor(Math.random() * (max - min + 1)) + min)
    
}
const boxesBought= howManyBoxes(1,15)
console.log('I\'ll buy ' + boxesSold + ' How much will it cost?')


let totalCost = howManyBoxes() * 5

boxesSold.push(boxesBought)

console.log('this is boxes sold ' +boxesSold) //REMOVE THIS

console.log('$' + totalCost)

//let totalBoxesSold = 

