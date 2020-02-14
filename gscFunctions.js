// a way to determine what nonplayer characters do. if it's greater than 5 the answer is yes, 5 or less, no.
function outcomeGenerator(min, max) {
    min = 0
    max = 10
    outcome = parseInt(Math.floor(Math.random() * (max - min + 1)) + min)
    {
        
        if (outcome > 5) {
           return " the the answer is yes";

        } else if (outcome <= 5) {

            return 'absolutely not'

        }
        
    }
}
console.log('this is the outcome generator ' +outcomeGenerator())
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

