exports.up = async knex => knex.schema.createTable('chats', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .string('title')
      .notNullable()
      .defaultTo('New Chat')

    table
      .uuid('member')
      .notNullable()
      .references('users.id')
    
    table
      .enum('status', ['admin', 'member'])
      .notNullable()

    table.timestamps(true)
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('chats')
  