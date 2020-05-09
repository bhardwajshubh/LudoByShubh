'use strict';
const { Strategy , ExtractJwt } = require('passport-jwt');
const Users = require('./../models/Users');

module.exports = function(passport){
   const options = {};
   options.secretOrKey = process.env.JWT_SECTET;
   options.jwtFromRequest = function(req) {
       let token = null;
       if (req && req.cookies)
       {
           token = req.cookies['authorization'];
       }
       return token;
   };

   options.passReqToCallback = true;
   passport.use(new Strategy(options , async function(req , payload , done) {
       let token = req.cookies.authorization;
       let auth_token;
       try {
          auth_token = await Users.query().where('id' , payload.id).andWhere('token' , token).first();
       } catch (e) {
           console.log(`passportConfig Middleware ${e}`);
           return done(e);
       }
       if(!auth_token){
          return done(null , false);
       }
       return done(null , auth_token);
   }));

}

