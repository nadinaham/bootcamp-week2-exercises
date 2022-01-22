const casual = require('casual')
const userData = require('./users')

casual.define('reports', ({ reporter, reportedUser }) => ({
  id: casual.uuid,
  reporter: reporter,
  reportedUser: reportedUser,
  reason: casual.random_element(['inappropriate language', 'fake account', 'other']),
  status: casual.random_element(['approved', 'rejected', 'pending']),
  created_at: casual.moment,
  updated_at: casual.moment,
}))

const reportData = []

for (let i = 0; i < 20; ++i) {
    reporter = casual.random_element(userData).id
    reportedUser = casual.random_element(userData).id
    reportData.push(casual.reports({reporter, reportedUser}))
}

module.exports = reportData