const { getObjectId, getObjectIds} = require("../../helpers/index")

// const genres = ['electronics', 'foods and beverages', 'genreless', 'cool']

const genres = [
        {
            id: getObjectId('electronics'),
            name: "electronics",
            products: getObjectIds(["Ipod Nano","Portable Phone Charger"]),
            image_url: "https://www.allelectronics.com/mas_assets/cache/image/4/6/5/3/480x480-18003.Jpg"
        },
        {
            id: getObjectId('foods and beverages'),
            name: "foods and beverages",
            products: getObjectIds(["Mystery Food X","Cookies"]),
            image_url: "https://cdn.shopify.com/s/files/1/2580/7148/products/Liteful-Foods-Jalapeno-Cornbread-thumb2_324x324.png?v=1549402785"
        },
        {
            id: getObjectId('genreless'),
            name: "genreless",
            products: getObjectIds(["???????"]),
            image_url: "https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Arabic_Question_mark_%28RTL%29.svg/320px-Arabic_Question_mark_%28RTL%29.svg.png?1561519724569"
        },
        {
            id: getObjectId('cool'),
            name: "cool",
            products: getObjectIds(["Toilet Paper","Water Gun"]),
            image_url: "https://www.inventicons.com//uploads/iconset/121/wm/512/Hipster-4-17.png"
        },
]

module.exports = genres