exports.up = async knex => knex.schema.createTable('friends', table => {
  table
      .uuid('id')
      .primary()
      .notNullable()
      .defaultTo(knex.raw('uuid_generate_v4()'))  
      
  table
      .uuid('userId1')
      .references('users.id')
      .notNullable()
  
    table
      .uuid('userId2')
      .references('users.id')
      .notNullable()
    
    table
      .enum('status', ['accepted', 'rejected', 'pending'])
      .notNullable()
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('friends')
  