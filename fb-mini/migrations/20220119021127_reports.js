exports.up = async knex => knex.schema.createTable('reports', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .uuid('reporter')
      .notNullable()
      .references('users.id')
    
    table
      .uuid('reportedUser')
      .references('users.id')
      .notNullable()

    table
      .enum('reason', ['inappropriate language', 'fake account', 'other'])
      .notNullable()
    
    table
      .enum('status', ['approved', 'rejected', 'pending' ])
      .notNullable()
 
    table.timestamps(true)
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('reports')
  