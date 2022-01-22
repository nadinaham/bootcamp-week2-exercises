const casual = require('casual')
const userData = require('./users')
const postData = require('./posts')

casual.define('comments', ({ commenter, post }) => ({
  id: casual.uuid,
  commenter: commenter,
  post: post,
  content: casual.text,
  numLikes: casual.integer(0),
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const commentData = []

for (let i = 0; i < 20; i++) {
    commenter = casual.random_element(userData).id
    post = casual.random_element(postData).id
    commentData.push(casual.comments({commenter, post}))
}

module.exports = commentData
