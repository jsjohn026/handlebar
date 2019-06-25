const {getObjectId, getObjectIds, mapToEntities} = require('../../helpers/index')

// const fakeProducts = ["Ipod Nano", "Portable Phone Charger", "Mystery Food X", "Cookies", "???????", ]

const products = [
    {
        id: getObjectId('Ipod Nano'),
        name: "Ipod Nano",
        price: 100.23,
        description: "A compact mp3 player",
        owner: getObjectId("Jimmy"),
        genre: getObjectId("electronics"),
        date: new Date(),
        image_url: "https://upload.wikimedia.org/wikipedia/commons/7/77/IPod_nano_5G.png"
    },
    {
        id: getObjectId('Portable Phone Charger'),
        name: "Portable Phone Charger",
        price: 40.50,
        description: "Usb charger charges your phone on the go!",
        owner: getObjectId("Jimmy"),
        genre: getObjectId("electronics"),
        date: new Date(),
        image_url: "https://www.boschautoparts.com/documents/101512/146323/T4Lft_Desktop.png/213e40da-7852-4535-9d55-59450c3bc801?t=1470940975428"
    },
    {
        id: getObjectId('Mystery Food X'),
        name: "Mystery Food X",
        price: 10.01,
        description: "What the heck is in Mystery Food X?!?!",
        owner: getObjectId("Anne"),
        genre: getObjectId("foods and beverages"),
        date: new Date(),
        image_url: "http://upload.wikimedia.org/wikipedia/commons/e/e6/Foodlogo_question_mark.png"
    },
    {
        id: getObjectId('Cookies'),
        name: "Cookies",
        price: 5.00,
        description: "Better than girl scouts",
        owner: getObjectId("Marge"),
        genre: getObjectId("foods and beverages"),
        date: new Date(),
        image_url: "https://thedessertstand.com/wp-content/uploads/2016/03/p-12117-ChocolateChipCookies__48364.1340983937.1280.1280.gif"
    },
    {
        id: getObjectId('???????'),
        name: "???????",
        price: 100.23,
        description: "???????",
        owner: getObjectId("Betty"),
        genre: getObjectId("genreless"),
        date: new Date(),
        image_url: "https://image.flaticon.com/icons/png/512/36/36601.png"
    },
    {
        id: getObjectId('Toilet Paper'),
        name: "Toilet Paper",
        price: 2.00,
        description: "Wow, this is quailty toilet paper.",
        owner: getObjectId("Jimmy"),
        genre: getObjectId("cool"),
        date: new Date(),
        image_url: "https://www.sccpre.cat/mypng/full/128-1282914_toilet-paper-png-image-toilet-paper-clipart-transparent.png"
    },
    {
        id: getObjectId('Water Gun'),
        name: "Nerf Water Gun",
        price: 6.00,
        description: "More fun than using the garden hose",
        owner: getObjectId("Anne"),
        genre: getObjectId("cool"),
        date: new Date(),
        image_url: "https://images-na.ssl-images-amazon.com/images/I/71mwVAx1TBL._SX466_.jpg"
    },
    
]

// mapToEntities(fakeProducts);

module.exports = products;