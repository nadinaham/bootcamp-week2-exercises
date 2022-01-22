const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')
const Relation = require('../models/Relation')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get an instance of a user using findById(<YOUR_ID>) - NADINE'S NOTE: took some random person kadin bc my entry does not have children lol
  const kadin = await User.query().findById("19b7744b-817c-4113-ba9b-44f52ebd3758")
  console.log(kadin)

  // Use that instance to create a new pet related that user
  const kadinNewPet = await kadin
    .$relatedQuery('owned_pets')
    .insert({
      name: "Joe",
      type: 'CAT',
    }).returning('*')
  
  console.log(kadinNewPet)

  // Use that instance to get all of the user's pets and children
  // Hint -- use $fetchGraph
  // https://vincit.github.io/objection.js/api/model/instance-methods.html#fetchgraph

  const kadinPetChild = await kadin
    .$fetchGraph('[owned_pets, children]')

  console.log(kadinPetChild)

  // -----
  cleanup()
}

run()
