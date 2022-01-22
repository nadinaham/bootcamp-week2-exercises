const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  /**
    Create a transaction. It should (without using insertGraph): create a new
    user with returning(), give that user a pet, and fetch the total number of
    pets. If that total number exceeds 15, it should delete all BIRDS. Test
    the transaction by throwing an error: throw new Error("This is an error").
   */

  const newUser = await User.transaction(async trx => {
    const hadine = await User
      .query(trx)
      .insert({ 
        firstName: "hadine", 
        lastName: "ban", 
        email: "totallynotnadine@gmail.com", 
        age: "52",
      })
      .returning('*')
    
    const billy = await hadine
      .$relatedQuery('owned_pets', trx)
      .insert({
        name: "billy", 
        type: "CAT",
      })

    // throw new Error ("error!!!! >:(")

    const petNumber = await Pet.query(trx).resultSize()

    if (petNumber > 15) {
      const removeBirbs = await Pet
        .query(trx)
        .delete()
        .where({type: "BIRD"})
    }

    console.log(hadine)
    console.log(billy)
  })

  // -----
  cleanup()
}

run()
