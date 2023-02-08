
// write a function mongerInventory
// it will return an arry of objects that is the inventory for the chefs of the resturant
// fish monger won't buy 7.50 or more
// chef will buy 5 or less
// fish monger buy 10 fish of inexspensive fish
// each new object should have a amount of 10
// Species, weight, price, amount
const { boatInventory } = require("./fishingBoat.js")


const fishMongerRequirementIsMet = (fish) => {
    return fish.price <= 7.50 && fish.amount >= 10
}

const chefRequirementIsMet = (fish) => {
    return fish.price <= 5
}


const mongerInventory = () => {
    let newInventory = []
    for (const item of boat) {
        if (fishMongerRequirementIsMet(item) && chefRequirementIsMet(item)){
            newInventory.push(item)   
            item.amount = 10
        } 
    }
    
    return newInventory
}


let boat = boatInventory()
let fish = mongerInventory()

// console.log(fish)



module.exports = { mongerInventory }






// let mongerInventory = []
// console.log(mongerInventory)









// const fishValue = (fish) => {
//     if (fish.price >= 7.50) {
//         return fish.price.push = mongerInventory
//     }
// }
// const  fishAmout = (fish) => {
//     if (fish.amount < 10) {
//         return fish.amount.push = mongerInventory
// }
// }