const cleanup = require('../lib/cleanup')
// Import models
const User = require('../models/User')
const Pet = require('../models/Pet')


const run = async () => {
  // Write Queries and Logs Here !!!

  // Get all users with a specific name (pick it from your database)
  const allSpecificName = await User.query().where({ firstName: 'Hailee' })
  console.log(allSpecificName)
  // Do the same with object notation 
  // NADINE'S NOTE: i'm assuming this is referring to using SQL?

  const database = {
    users: [
      {
        id: 'a69060de-5d04-4023-bdb8-fe1aaebe202d',
        email: 'Destini.VonRueden@yahoo.com',
        firstName: 'Christy',
        lastName: 'Stamm',
        age: 76,
        created_at: '1995-01-08T13:53:15.000Z',
        updated_at: '1987-01-16T16:39:42.000Z' },
      {
        id: '5c330718-3125-4577-8e40-f729ff82f901',
        email: 'Upton_Kaitlyn@Tromp.org',
        firstName: 'Kaley',
        lastName: 'Weissnat',
        age: 68,
        created_at: '2002-04-25T21:43:13.000Z',
        updated_at: '1990-09-14T09:12:45.000Z' },
      {
        id: '19b7744b-817c-4113-ba9b-44f52ebd3758',
        email: 'Gregory.Bechtelar@Emmanuelle.org',
        firstName: 'Kadin',
        lastName: 'Cummings',
        age: 24,
        created_at: '1999-08-07T11:24:28.000Z',
        updated_at: '1973-03-17T13:52:19.000Z' },
      {
        id: '9357ea3c-9b44-4825-bfc5-0fd20527b867',
        email: 'Lonie_Dickens@Fay.com',
        firstName: 'Jayden',
        lastName: 'Moen',
        age: 25,
        created_at: '2015-01-30T11:34:28.000Z',
        updated_at: '1991-03-02T13:43:25.000Z' },
      {
        id: 'bc61fb4f-21ea-49f1-a686-884a733e9740',
        email: 'Deckow_Dino@hotmail.com',
        firstName: 'Liliana',
        lastName: 'Marks',
        age: 2,
        created_at: '2007-01-03T23:40:40.000Z',
        updated_at: '2016-04-22T22:41:59.000Z' },
      {
        id: 'aadac95b-4b05-47f1-99fd-6a3bfe0daaef',
        email: 'Bailey.Adela@Mills.io',
        firstName: 'Marc',
        lastName: 'Hermann',
        age: 19,
        created_at: '1991-02-24T15:20:59.000Z',
        updated_at: '1984-01-29T18:10:56.000Z' },
      {
        id: '49ddf4a5-8362-47ee-86a3-e6b11c83fcc1',
        email: 'Luz.Bergstrom@yahoo.com',
        firstName: 'Luna',
        lastName: 'Dooley',
        age: 85,
        created_at: '1976-10-21T05:24:52.000Z',
        updated_at: '1987-01-08T20:20:56.000Z' },
      {
        id: 'cef992c8-b6d6-438c-9a60-3684a83fc584',
        email: 'Gutmann.Carolanne@Trisha.net',
        firstName: 'Trystan',
        lastName: 'Funk',
        age: 3,
        created_at: '1976-03-10T12:16:09.000Z',
        updated_at: '1997-06-08T11:42:36.000Z' },
      {
        id: 'efbe56ee-b180-418d-b402-e15112b4152e',
        email: 'Katarina.Sanford@Alia.ca',
        firstName: 'Hailee',
        lastName: 'Mitchell',
        age: 98,
        created_at: '2002-11-07T04:28:08.000Z',
        updated_at: '2006-06-12T05:35:33.000Z' },
      {
        id: '9dbfef0a-c34b-4810-9005-f19341f5fe38',
        email: 'Verlie_Reinger@Cassandre.name',
        firstName: 'Zena',
        lastName: 'Lakin',
        age: 73,
        created_at: '1978-12-11T07:12:12.000Z',
        updated_at: '1986-12-10T03:28:48.000Z' }
    ],
  }

  let {
    users
  } = database

  const specificNameSQL = users.filter(entry => entry.firstName === 'Hailee')
  console.log(specificNameSQL)

  // Get all DOGS and BIRDS
  const allDogsBirds = await Pet.query().where({ type: 'DOG' }).orWhere({ type: 'BIRD' })
  console.log(allDogsBirds)

  // -----
  cleanup()
}

run()
