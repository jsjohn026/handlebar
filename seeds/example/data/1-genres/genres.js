const { getObjectId, getObjectIds} = require("../../helpers/index")

// const genres = ['electronics', 'foods and beverages', 'genreless', 'cool']

const genres = [
        {
            id: getObjectId('electronics'),
            name: "electronics",
            products: getObjectIds(["Ipod Nano","Portable Phone Charger"])
        },
        {
            id: getObjectId('foods and beverages'),
            name: "foods and beverages",
            products: getObjectIds(["Mystery Food X","Cookies"])
        },
        {
            id: getObjectId('genreless'),
            name: "genreless",
            products: getObjectIds(["???????"])
        },
        {
            id: getObjectId('cool'),
            name: "cool",
            products: getObjectIds(["Toilet Paper","Water Gun"])
        },
]

module.exports = genres