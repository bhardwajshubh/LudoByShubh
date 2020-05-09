const { Model } = require('objection')

class Rooms extends Model {
    static get tableName() {
        return 'rooms';
    }

    static get jsonSchema() {
        return {
            type : 'object',
            properties : {
                roomNo : {type : 'integer'}
            }
        }
    }

    static get relationMapping() {
        const Users = require('./Users')
        return {
            users : {
                relation : Model.HasManyRelation,
                modelClass : Users,
                join : {
                    from : rooms.id,
                    to : users.roomId
                }
            }
        }
    }
}

module.exports = Rooms;