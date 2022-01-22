const casual = require('casual')
const userData = require('./users')
const groupData = require('./groups')

casual.define('posts', ({ poster, group }) => ({
  id: casual.uuid,
  title: casual.title,
  poster: poster,
  group: group,
  content: casual.text,
  numLikes: casual.integer(0),
  numComments: casual.integer(0),
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const postData = []

for (let i = 0; i < 20; ++i) {
    poster = casual.random_element(userData).id
    group = casual.random_element(groupData).id
    postData.push(casual.posts({poster, group}))
}

module.exports = postData