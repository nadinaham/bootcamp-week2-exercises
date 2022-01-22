const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')

const run = async () => {
  // Write Queries and Logs Here !!!

  // Insert yourself in the users table
  const insertNadine = await User.query().insert({
    email: 'nhan@college.harvard.edu',
    firstName: 'Nadine',
    lastName: 'Han',
    age: 18,
  }).returning('*')

  console.log(insertNadine)

  // Insert a pet belonging to you (get your ID from Postico or DBeaver)
  const insertMimi = await Pet.query().insert({
    ownerId: '5ac12c2b-027d-4be5-ba43-507c1bb3a63a',
    type: 'CAT',
    name: 'Mimi',
  }).returning('*')

  console.log(insertMimi)

  // -----
  cleanup()
}

run()
