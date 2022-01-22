// Write your Pet model here!
const { BelongsToOneRelation } = require('objection')
const BaseModel = require('./BaseModel')
const User = require('./User')

class Pet extends BaseModel {
  static get tableName() {
    return 'pets'
  }

  static get relationMappings() {
    return {
        owned_pets: {
            relation: BelongsToOneRelation,
            modelClass: User,
            join: {
                from: 'pets.ownerId',
                to: 'users.id',
            }
        }
    }
  }

  static get virtualAttributes() {
    return ['isDog']
  }

  isDog() {
    return this.type === "DOG"
  }
  
}

module.exports = Pet
