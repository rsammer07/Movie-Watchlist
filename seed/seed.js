const User = require("../models/userModel")
const userData = require("../seed/user.json")

User.deleteMany({})
    .then(() => {
        return User.insertMany(userData)
    })
    .then(console.log)
    .catch(console.error)
    .finally(() => {
        process.exit();
    })
