//try again 2.14.20

let roomOne = {
    desc: 'the first room'
  }
  ​
  let roomTwo = {
    desc: 'the second room'
  }
  ​
  let roomThree = {
    desc: 'the third room'
  }
  ​
  let states = {
    roomOne: {canChangeTo:['roomTwo']},
    roomTwo: {canChangeTo: ['roomOne', 'roomThree']},
    roomThree: {canChangeTo: ['roomTwo']}
  } 
  ​
  let roomLookup = {
    'roomOne': roomOne,
    'roomTwo': roomTwo,
    'roomThree': roomThree
  }
  ​
  let currentState = 'roomOne'
  let currentRoom = roomLookup[currentState]
  ​
  function changeRoom(change) {
    //if(userInput.includes('xyzzy')) {
    //  console.log('Okay cheater enjoy your new room')
    //  currentState = prisonCell
    //  currentRoom = roomLookup[currentState]
    //}
    if (states[currentState].canChangeTo.includes(change)) {
      console.log('Changing from state: ' + currentState)
      currentState = change
      currentRoom = roomLookup[currentState]
      console.log('Current state is: ' + currentState)
      console.log('Current room is: ' + currentRoom.desc)
    } else {
      console.log('invalid state transition attempted')
      console.log('Current state is: ' + currentState)
    }
  }
  ​
  changeRoom('roomTwo')
  changeRoom('roomThree')
  