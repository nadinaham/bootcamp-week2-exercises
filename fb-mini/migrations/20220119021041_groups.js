exports.up = async knex => knex.schema.createTable('groups', table => {
    table
      .uuid('id')
      .notNullable()
      .primary()
      .defaultTo(knex.raw('uuid_generate_v4()'))
  
    table
      .string('name')
      .notNullable()
      .defaultTo('New Group')

    table
      .uuid('member')
      .notNullable()
      .references('users.id')
    
    table
      .enum('status', ['admin', 'moderator', 'member' ])
      .notNullable()
    
    table.timestamps(true)
  })
  
  exports.down = async knex => knex.schema.dropTableIfExists('groups')
  