exports.up = async knex => knex.schema.createTable('posts', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .string('title')
      .notNullable()

    table
      .uuid('poster')
      .notNullable()
      .references('users.id')
    
    table
      .uuid('group')
      .references('groups.id')
    
    table
      .text('content')
      .notNullable()
    
    table
      .text('numLikes')
      .notNullable()
    
    table
      .text('numComments')
      .notNullable()
    
    table.timestamps(true)

  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('posts')
  