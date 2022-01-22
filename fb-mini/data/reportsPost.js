const casual = require('casual')
const userData = require('./users')
const postData = require('./posts')

casual.define('reportsPost', ({ reporter, reportedPost }) => ({
  id: casual.uuid,
  reporter: reporter,
  reportedPost: reportedPost,
  reason: casual.random_element(['inappropriate language', 'fake account', 'other']),
  status: casual.random_element(['approved', 'rejected', 'pending']),
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const reportPostData = []

for (let i = 0; i < 20; ++i) {
    reporter = casual.random_element(userData).id
    reportedPost = casual.random_element(postData).id
    reportPostData.push(casual.reportsPost({reporter, reportedPost}))
}

module.exports = reportPostData