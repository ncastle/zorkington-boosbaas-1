let isUnlocked = false
const min = 1
const max = 10
function keys (min, max) {
    return (Math.floor(Math.random() * (max - min + 1)) + min)
}

const key = keys(min, max)
console.log(key)
let unlockIt = () => {
    if (isUnlocked === true || key > 7) {
        console.log('Don\'t waste your time, it\'s already open' + 'value of  keys '+ key)
        return
    } else {
        let isUnlocked = true
       console.log('You\'re skills have paid off. The locked item is now unlocked. ' + key + isUnlocked)
       
    }

}
unlockIt()
console.log('this is isUnlocked value ' + isUnlocked)
   

