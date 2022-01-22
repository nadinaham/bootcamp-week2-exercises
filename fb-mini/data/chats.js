const casual = require('casual')
const userData = require('./users')

casual.define('chats', ({ member }) => ({
  id: casual.uuid,
  title: casual.title,
  member: member,
  status: casual.random_element(['admin', 'member']),
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const chatData = []

for (let i = 0; i < 20; ++i) {
    member = casual.random_element(userData).id
    chatData.push(casual.chats({member}))
}

module.exports = chatData