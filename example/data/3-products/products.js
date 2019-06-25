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
        image_url: ""
    },
    {
        id: getObjectId('Portable Phone Charger'),
        name: "Portable Phone Charger",
        price: 40.50,
        description: "Usb charger charges your phone on the go!",
        owner: getObjectId("Jimmy"),
        genre: getObjectId("electronics"),
        date: new Date(),
        image_url: ""
    },
    {
        id: getObjectId('Mystery Food X'),
        name: "Mystery Food X",
        price: 10.01,
        description: "What the heck is in Mystery Food X?!?!",
        owner: getObjectId("Anne"),
        genre: getObjectId("foods and beverages"),
        date: new Date(),
        image_url: ""
    },
    {
        id: getObjectId('Cookies'),
        name: "Cookies",
        price: 5.00,
        description: "Better than girl scouts",
        owner: getObjectId("Marge"),
        genre: getObjectId("foods and beverages"),
        date: new Date(),
        image_url: ""
    },
    {
        id: getObjectId('???????'),
        name: "???????",
        price: 100.23,
        description: "???????",
        owner: getObjectId("Betty"),
        genre: getObjectId("genreless"),
        date: new Date(),
        image_url: ""
    },
    {
        id: getObjectId('Toilet Paper'),
        name: "Toilet Paper",
        price: 2.00,
        description: "Wow, this is quailty toilet paper.",
        owner: getObjectId("Jimmy"),
        genre: getObjectId("cool"),
        date: new Date(),
        image_url: ""
    },
    
]

// mapToEntities(fakeProducts);

module.exports = products;