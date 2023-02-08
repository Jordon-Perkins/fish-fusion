// import and invoke function from fish monger
// define function to build HTML of the menu
// if fish monger has 5.00 of less will buy 50% of inventory
// if tuna is bought following will be on the menu tuna soup tune sandwich grilled tuna
// build HTML structure

const { mongerInventory } = require("./fishMonger.js")





// let fishMenu = []

const fishMenu = () => {    
    if (menu.price <= 5) {
        menu.amount = 5
    }
    let theMenu = "<h1>Menu</h1>"
    for (items of menu) {
        theMenu += `\n\n`
        theMenu += `<article class="menu">`
        theMenu += `<h2>${items.species}</h2>`
        theMenu += `<section class="menu_item">${items.species} Soup</section>`
        theMenu += `<section class="menu_item">${items.species} Sandwich</section>`
        theMenu += `<section class="menu_item">Grilled ${items.species}</section>`
        theMenu += `</article>`
    }
    return theMenu
}
const menu = mongerInventory()
let thisMenu = fishMenu()
// console.log(thisMenu)

module.exports = { fishMenu }

/*{ <h1>Menu</h1>
<article class="menu">
    <h2>Tuna</h2>
    <section class="menu__item">Tuna Soup</section>
    <section class="menu__item">Tuna Sandwich</section>
    <section class="menu__item">Grilled Tuna</section>
</article> }*/