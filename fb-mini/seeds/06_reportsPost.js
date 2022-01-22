
const reportPostData = require('../data/reportsPost')

exports.seed = knex => knex('reportsPost').del()
  .then(() => knex('reportsPost').insert(reportPostData))
