
const reportData = require('../data/reports')

exports.seed = knex => knex('reports').del()
  .then(() => knex('reports').insert(reportData))
