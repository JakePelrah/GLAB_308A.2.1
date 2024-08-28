////////////////////// Part 1 ////////////////////// 
const adventurer = {
    name: "Robin",
    health: 10,
    inventory: ["sword", "potion", "artifact"],
    companion: {
        name: "Leo",
        type: "Cat",
        companion: {
            name: "Frank",
            type: "Flea",
            inventory: ["small hat", "sunglasses"]
        }
    },
    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}


// log inventory
// for (const item of adventurer.inventory) {
//     console.log(item)
// }
// // call roll a few times

// for (let i = 0; i < 3; i++) {
//     adventurer.roll()
// }


class Character {
    constructor(name) {
        this.name = name
        this.inventory = []
        this.health = 100
    }

    static health = 100

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        return result
    }
}


const robin = new Character('Robin')
robin.inventory = ['sword', 'potion', 'artifact']
robin.companion = new Character('Leo')
robin.companion.type = 'Cat'
robin.companion.companion = new Character('Frank')
robin.companion.companion.type = 'Flea'
robin.companion.companion.inventory = ['small hat', 'sunglasses']

// robin.roll()
// robin.companion.roll()
// robin.companion.companion.roll()



class Adventurer extends Character {
    constructor(name, role) {
        super(name)
        try {
            role = role.toLowerCase()
            if (!Adventurer.roles.map(role => role.toLowerCase()).
                includes(role))
                throw Error('Invalid Role')
            this.role = role
        }
        catch {
            console.log(`Role ${role} is invalid. Role must be one of Fighter, 
                Healer, or Wizard.`)
        }
        // adventurer default inventory
        this.inventory.push('bedroll', '50 gold coins')
    }

    static roles = ['Fighter', 'Healer', 'Wizard']

    scout() {
        console.log(`${this.name} is scouting ahead...`)
        super.roll()
    }

    duel(adventurer) {

        while (adventurer.health > 50 && this.health > 50) {
            const adventurerRoll = adventurer.roll()
            const thisRoll = this.roll()

            if(adventurerRoll < thisRoll){
                adventurer.health-=1
            }
            else if(adventurerRoll > thisRoll){
                this.health-=1
            }
        
            console.log(`
${adventurer.name} rolled a ${adventurerRoll}
${this.name} rolled a ${thisRoll}
${adventurer.name} health: ${adventurer.health}
${this.name} health: ${this.health}\n`)
        }


        const winner = adventurer.health > this.health ? adventurer : this
        console.log(`The winner with ${winner.health} health is ${winner.name}`)
    }
}

class Companion extends Character {
    constructor(name, type) {
        super(name)
        this.type = type
    }
}


const Robin = new Adventurer('Robin', 'Fighter')
const Batman = new Adventurer('Batman', 'Fighter')

Batman.duel(Robin)