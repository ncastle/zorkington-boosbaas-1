// a way to determine what nonplayer characters do. if it's greater than 5 the answer is yes, 5 or less, no.
function outcomeGenerator(min, max) {
    min = 0
    max = 10
    outcome = parseInt(Math.floor(Math.random() * (max - min + 1)) + min)
    {
        let whatHappens
        if (outcome > 5) {
            whatHappens = " so, the answer is yes";

        } else if (outcome <= 5) {

            whatHappens = ' so, the answer is no'

        }
        console.log(outcome + whatHappens)
    }
}
outcomeGenerator()
//once somebody has agreed to buy cookies a random way to figure out how many boxes they buy
let boxesSold = [];
function howManyBoxes(min, max) {
    
    return (Math.floor(Math.random() * (max - min + 1)) + min)
    
}
const boxesBought= howManyBoxes(1,15)
console.log('I\'ll buy ' + boxesSold + ' How much will it cost?')


let totalCost = howManyBoxes() * 5

boxesSold.push(boxesBought)

console.log(boxesSold) //REMOVE THIS

console.log('$' + totalCost)

let totalBoxesSold = 

while (series.length < 5) {
    let lastInArray = (series.length - 1);
    console.log('pop1 = ' + lastInArray);
    let firstInArray = (series.length - 2)
    console.log('pop2 = ' + firstInArray)
    fibo = lastInArray + firstInArray;
    console.log('fibo = ' + fibo);
    series.push(fibo);
}
console.log(series)