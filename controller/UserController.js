const User = require('./../models/Users');
const Room = require('./../models/Rooms');
const { transaction } = require('objection');
// const { promisify } = require();
exports.createRoom = async (req , res) => {
        res.render('createRoom');
};

exports.addNewRoom = async (req , res) => {
        let roomNo;
        while(true){
                roomNo = genRandomNumber();
                let roomFound = await Room.query().where('roomNo' , roomNo);
                if(roomFound.length === 0){
                        break;
                }
        }
        try {
                const user = await transaction(Room, User , async (Room , User) => {
                        const returnValue = await Room.query().insert({"roomNo" : roomNo}).returning("id");
                        return User.query().insert({name : req.body.name , roomId : returnValue.id}).returning('*');
                })
                const token =await user.getJWT();
                res.cookie('authorization', token , { maxAge: (1000*60*60*60*1.5), httpOnly: true });
                await User.query().patch({ 'token' : token }).where('id' , user.id);

        } catch (e) {
                console.log(`UserController addNewRoom ${e}`)
                return res.status(400).json({
                        status : 'failure',
                        message : 'somthing went wrong'
                })
        }
        res.redirect('/app/game');

}

exports.joinRoom = async (req , res) => {
        res.render('joinRoom');
};
