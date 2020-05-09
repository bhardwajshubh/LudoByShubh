const { Model } = require('objection');
const jwt = require('jsonwebtoken');
class Users extends Model {
    static get tableName() {
        return 'users'
    }

    static get jsonSchema () {
        return {
            type : 'object',
            required : ['roomId'],
            properties : {
                id : { type : 'integer' },
                name : { type : 'string' },
                roomId : {type : 'integer' }
            }
        }
    }

    static get relationMapping() {
        const Rooms = require('./Rooms');
        return {
            room : {
                relation : Model.BelongsToOneRelation,
                modelClass : Rooms,
                join : {
                    from : users.roomId,
                    to : rooms.id
                }
            }
        }
    }

    async getJWT() {
        return await jwt.sign({
            id : this.id
        }, process.env.JWT_SECTET , { expiresIn : process.env.JWT_EXPIRES_IN });
    }

}

module.exports = Users;