const passport = require("passport");
const passportJwt = require('passport-jwt');
const ExtractJwt = passportJwt.ExtractJwt;
const StrategyJwt = passportJwt.Strategy;
const db = require("../models");

passport.use('userStrategy',
    new StrategyJwt({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.jwt_secret,
    },
    (jwtPayload, done) => {
        return  db.User.findOne({ where: { uuid: jwtPayload.uuid }}).then(user => {
            return done(null, user);
        }).catch(err => {
            return done(err);
        })
    })
)

passport.use('businessStrategy',
    new StrategyJwt({
        jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
        secretOrKey: process.env.jwt_secret,
    },
    (jwtPayload, done) => {
        return  db.Business.findOne({ where: { uuid: jwtPayload.uuid }}).then(user => {
            return done(null, user);
        }).catch(err => {
            return done(err);
        })
    })
)