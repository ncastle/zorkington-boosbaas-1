class Human {
    constructor(firstName, health, lastName, description, age, boxesSold, boxesBought, money, room) {
        this.firstName = firstName || ''
        this.health = health || 10
        this.lastName = lastName || ''
        this.description = description || "A character"
        this.age = age || 'Older than the girlscout'
        this.boxesSold = boxesSold || 0
        this.boxesBought = boxesBought || 0
        this.money = money || 25
        this.room = room || street

    }
    //i need help with this loop
    healthStatus(health) {
        howHealthy = this.health
        while (howHealthy < 1) {
            console.log("You ran out of energy and can\'t sell any more cookies.")
            process.exit()
        }
        console.log('You\'ve still got energy to keep going: ' + this.health + " out of 10.")
        return howHealthy
    }
}

let girlScout = new Human(null, 10, null, 12, 0, 0, 25, street)
let securityOfficer = new Human('Tony', 10, "Manzello", "Crippled ex-Meter Reader", "55", 0, 0, 50, foyer)
let employeeNectars = new Human('John Q.', 10, 'Barman', "A guy with a trimmed beard and long hair: The bar manager for Nectar's.", 35, 0, 0, 150, nectars)
let employeeTrump = new Human('Suzy', 10, 'Trump', 'A blonde woman with spray-on tan.', 25, 0, 0, 10, trumpCodeAcademy)
let employeeTrump2 = new Human('Jimbo', 10, 'Barr', "A middle-aged guy wearing sunglasses and carrying a briefcase.", 55, 0, 0, 50, trumpCodeAcademy)
let employeeAsure1 = new Human("Kip", 10, "Steele", "An energetic man with a big smile.", 46, 0, 0, 75, asureSoftware)


//**What do these characters need to do */
//girl scout = player, need info from player, name








