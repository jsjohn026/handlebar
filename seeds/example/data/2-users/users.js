const {getObjectId, getObjectIds, mapToEntities} = require('../../helpers/index')
const bcrypt = require('bcryptjs')


let samePass = bcrypt.hashSync("123456", 10)

const users = [
    {
        id: getObjectId('Jimmy'),
        name: "Jimmy",
        email: "jimmy@jimmy.com",
        password: samePass,
        date: new Date(),
        products: getObjectIds(["Ipod Nano","Portable Phone Charger", "Toilet Paper"])
    },
    {
        id: getObjectId('Anne'),
        name: "Anne",
        email: "Anne@Anne.com",
        password: samePass,
        date: new Date(),
        products: getObjectIds(["Mystery Food X","Water Gun"])
    },
    {
        id: getObjectId('Betty'),
        name: "Betty",
        email: "Betty@Betty.com",
        password: samePass,
        date: new Date(),
        products: getObjectIds(["???????"])
    },
    {
        id: getObjectId('Marge'),
        name: "Marge",
        email: "Marge@Marge.com",
        password: samePass,
        date: new Date(),
        products: getObjectIds(["Cookies"])
    },
]


module.exports = users;