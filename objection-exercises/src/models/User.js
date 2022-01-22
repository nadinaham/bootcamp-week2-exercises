const { ManyToManyRelation, HasManyRelation, BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')
const Pet = require('./Pet')
const Relation = require('./Relation')

class User extends BaseModel {
  static get tableName() {
    return 'users'
  }

  static get relationMappings() {
    return {
      owned_pets: {
        relation: HasManyRelation,
        modelClass: Pet,
        join: {
            from: 'users.id',
            to: 'pets.ownerId',
        },
      },
      
      parents: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.childId',
            to: 'relations.parentId'
          },
          to: 'users.id',
        },
      },

      children: {
        relation: ManyToManyRelation,
        modelClass: User,
        join: {
          from: 'users.id',
          through: {
            from: 'relations.parentId',
            to: 'relations.childId'
          },
          to: 'users.id',
        },
      },

    }
  }

  static get virtualAttributes() {
    return ['fullName', 'overEighteen']
  }

  fullName() {
    return `${this.firstName} ${this.lastName}`
  }

  overEighteen () {
    return this.age > 18
  }
}

module.exports = User
