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
for (const item of adventurer.inventory) {
    console.log(item)
}
// call roll a few times

for (let i = 0; i < 3; i++) {
    adventurer.roll()
}
console.log('////////////////////// Part 2 ////////////////////// \n')

////////////////////// Part 2 ////////////////////// 
class Character {
    constructor(name) {
        this.name = name
        this.health = 100
        this.inventory = []
    }

    roll(mod = 0) {
        const result = Math.floor(Math.random() * 20) + 1 + mod;
        console.log(`${this.name} rolled a ${result}.`)
    }
}


const robin = new Character('robin')
robin.inventory = ['sword', 'potion', 'artifact']
robin.companion = new Character('Leo')
robin.companion.type = 'Cat'
robin.companion.companion = new Character('Frank')
robin.companion.companion.type = 'Flea'
robin.companion.companion.inventory = ['small hat', 'sunglasses']

const LEO  = robin.companion
LEO.roll()
const Frank = LEO.companion
Frank.roll()