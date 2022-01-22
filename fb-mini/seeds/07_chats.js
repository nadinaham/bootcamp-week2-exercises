
const chatData = require('../data/chats')

exports.seed = knex => knex('chats').del()
  .then(() => knex('chats').insert(chatData))
