const Users = require('./../models/Users');
const Rooms = require('./../models/Rooms');

exports.gamePage = async (req , res) => {
    const user = req.user;
    let  rooms;
    try {
        rooms = await Rooms.query().select('roomNo').where('id' , user.roomId).first()
    } catch (e) {
        console.log(`gameController gamePage ${e}`)
        return res.send("<h1> 400 : Something went wrong </h1>")
    }
    res.render('game' , { room : rooms.roomNo });
}