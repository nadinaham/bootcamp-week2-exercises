exports.up = async knex => knex.schema.createTable('messages', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .uuid('chat')
      .notNullable()
      .references('chats.id')

    table
      .uuid('sender')
      .notNullable()
      .references('users.id')
    
    table
      .text('content')
      .notNullable()
    
    table.timestamps(true)
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('messages')
  