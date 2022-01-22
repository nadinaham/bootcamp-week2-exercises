const casual = require('casual')
const userData = require('./users')

casual.define('friends', ({userId1, userId2}) => ({
  id: casual.uuid,
  userId1: userId1,
  userId2: userId2,
  status: casual.random_element(['accepted', 'rejected', 'pending']),
}))

const friendData = []

for (let i = 0; i < 20; i++) {
    userId1 = casual.random_element(userData).id
    userId2 = casual.random_element(userData).id
    friendData.push(casual.friends({userId1, userId2}))
}

module.exports = friendData
