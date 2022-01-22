exports.up = async knex => knex.schema.createTable('reportsPost', table => {
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
      .uuid('reportedPost')
      .references('posts.id')
      .notNullable()

    table
      .enum('reason', ['inappropriate language', 'fake account', 'other'])
      .notNullable()
    
    table
      .enum('status', ['approved', 'rejected', 'pending' ])
      .notNullable()
    
    table.timestamps(true)
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('reportsPost')
  