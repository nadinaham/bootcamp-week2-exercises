const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users and their pets
  const allUserPets = await User.query().withGraphFetched('owned_pets')
  console.log(allUserPets)
  // Get all users, their pets, AND their children
  const allUserPetsChildren = await User.query().withGraphFetched('[owned_pets, children]')
  console.log(allUserPetsChildren)
  // Get all users, their parents, and their grandparents
  const allUserParentGrand = await User.query().withGraphFetched('[parents.parents, parents]')
  console.log(allUserParentGrand)
  // Get all users, their pets, their chilren, and their childrens' pets
  const allUserPetsChildPets = await User.query().withGraphFetched('[owned_pets, children, children.owned_pets]')
  console.log(allUserPetsChildPets)

  // -----
  cleanup()
}

run()
