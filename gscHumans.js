class Human {
    constructor(firstName, lastName, age, health = 10) {
        this.firstName = firstName || ''
        this.lastName = lastName || ''
        this.age = age || 'Older than the girlscout'
        this.health = health

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

let girlScout = new Human('Zoiks', '', 12, 10)
let securityOfficer = new Human('Tony', 'Crippled ex-Meter Reader', 54)
let employee1 = new Human('Mr.')
let employee2 = new Human('Ms.')

//**What do these characters need to do */
//girl scout = player, need info from player, name








