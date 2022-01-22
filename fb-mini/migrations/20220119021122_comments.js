exports.up = async knex => knex.schema.createTable('comments', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .uuid('commenter')
      .notNullable()
      .references('users.id')
    
    table
      .uuid('post')
      .references('posts.id')
    
    table
      .text('content')
      .notNullable()
    
    table
      .text('numLikes')
      .notNullable()

    table.timestamps(true)
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('comments')
  