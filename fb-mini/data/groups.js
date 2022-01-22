const casual = require('casual')
const userData = require('./users')

casual.define('groups', ({ member }) => ({
  id: casual.uuid,
  name: casual.title,
  member: member,
  status: casual.random_element(['admin', 'moderator', 'member']),
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const groupData = []

for (let i = 0; i < 20; ++i) {
    member = casual.random_element(userData).id
    groupData.push(casual.groups({member}))
}

module.exports = groupData
