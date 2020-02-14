class Human {
    constructor(firstName, health = 10, lastName, age ) {
        this.firstName = firstName || ''
        this.health = health
        this.lastName = lastName || ''
        this.age = age || 'Older than the girlscout'
       

    }
    //i need help with this loop
    healthStatus() {
        howHealthy = this.health
        while (howHealthy === 0) {
            console.log('You died')

        }
        console.log('you\'re still alive ' + this.health)
        return howHealthy--
    }
}

let girlScout = new Human('Zoiks')
let securityOfficer = new Human('Tony', '','Crippled ex-Meter Reader', )
let employee1 = new Human('Mr.')
let employee2 = new Human('Ms.')

//**What do these characters need to do */
//girl scout = player, need info from player, name








