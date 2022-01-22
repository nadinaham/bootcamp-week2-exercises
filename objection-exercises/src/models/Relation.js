// Write your relation model here!

const { HasManyRelation } = require('objection')
const BaseModel = require('./BaseModel')
const User = require('./User')
const Pet = require('./Pet')

class Relation extends BaseModel {
  static get tableName() {
    return 'relations'
  }

  static get relationMappings() {
    return {
        // parents: {
        //     relation: HasManyRelation,
        //     modelClass: User,
        //     join: {
        //       from: 'relations.parentId',
        //       to: 'users.id'
        //     }
        //   },
    
        //   children: {
        //      relation: HasManyRelation,
        //      modelClass: User,
        //      join: {
        //        from: 'relations.childId',
        //        to: 'users.id'
        //      }
        //    }
        }
    }
  }

module.exports = Relation
