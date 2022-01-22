const cleanup = require('../lib/cleanup')
const User = require('../models/User')
// Import models

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert a new person name Peter Bynum with two pet DOGs named Rocco & Rosey
  const peterBynum = await User.query().insertGraph({ 
    firstName: "Peter",
    lastName: "Bynum",
    email: "peterbynum@gmail.com",
    owned_pets: [
      {
        name: "Rocco?!?! Rocco's a rock! Rocco's not alive!",
        type: "DOG",
      },
      {
        name: "Rosey",
        type: "DOG",
      },
    ]
  }).returning('*')

  console.log(peterBynum)
  // -----
  cleanup()
}

run()
