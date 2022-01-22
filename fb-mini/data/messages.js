const casual = require('casual')
const userData = require('./users')
const chatData = require('./chats')

casual.define('messages', ({ chat, sender }) => ({
  id: casual.uuid,
  chat: chat,
  sender: sender,
  content: casual.text,
  numReacts: casual.integer(0),
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const messageData = []

for (let i = 0; i < 20; ++i) {
    chat = casual.random_element(chatData).id
    sender = casual.random_element(userData).id
    messageData.push(casual.messages({chat, sender}))
}

module.exports = messageData