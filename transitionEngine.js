//state machine 2.14.20
//to test room transitions

//---------- set readline interface----------------------------------------------
const readline = require('readline')
const readlineInterface = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

//---------- ask function ---------------------------------------------------
function ask(questionText) {
  return new Promise((resolve, reject) => {
    readlineInterface.question(questionText, resolve);
  });
};
//try again 2.14.20

let street = {
  descript: 'the street',
  locked: false
}
let foyer = {
  descript: 'the foyer',
  locked: false
}
let stairs = {
  descript: 'the stairs',
  locked: false
}
let elevator = {
  descript: 'the elevator',
  locked: false
}
let secondFloor = {
  descript: 'the second floor',
  locked: false
}
let thirdFloor = {
  descript: 'the third floor',
  locked: false
}
let nectars = {
  descript: 'nectar\'s bar and grill',
  locked: false
}
let trumpCodeAcademy = {
  'trump code academy',
  locked: false
}
let asureSoftware = {
  'asure software',
  locked: false
}
let states = {
  street: { canChangeTo: ['foyer'] },
  foyer: { canChangeTo: ['street', 'stairs', 'elevator', 'nectars'] },
  stairs: { canChangeTo: ['foyer', 'thirdFloor', 'secondFloor'] },
  elevator: { canChangeTo: ['foyer', 'thirdFloor', 'secondFloor'] },
  secondFloor: { canChangeTo: ['elevator', 'stairs'] },
  nectars: { canChangeTo: ['foyer']},
  trumpCodeAcademy: {canChangeTo: ['secondFloor']},
  asureSoftware: {canChangeTo: ['secondFloor']},
  thirdFloor: {canChangeTo: ["roof"]}
}

let roomLookup = {
  'street': street,
  'foyer': foyer,
  'stairs': stairs,
  'elevator': elevator,
  'secondFloor': secondFloor,
  'second floor': secondFloor
}
let currentState = 'street'
let currentRoom = roomLookup[currentState]



async function changeRoom() {
  if (currentState === "secondFloor") {
    console.log("Congrats! You maed it to " + currentRoom.descript + ".")
    process.exit();
  } else {
    let change = await ask("which room do you want to go to?")
    if (states[currentState].canChangeTo.includes(change)) {
      console.log('Changing from state: ' + currentState)
      currentState = change
      currentRoom = roomLookup[currentState]
      console.log('Current state is: ' + currentState)
      console.log('Current room is: ' + currentRoom.descript)
    } else {
      console.log('invalid state transition attempted')
      console.log('Current state is: ' + currentState)
    } 
  }changeRoom()
}
changeRoom()