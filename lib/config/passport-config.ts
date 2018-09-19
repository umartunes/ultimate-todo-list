import * as passport from 'passport'
import * as FacebookTokenStrategy from 'passport-facebook-token'

import Users from '../models/model-users'
import client from '../config/db-config'

const clientID = process.env.fbClientId || "1988058381486259"
const clientSecret = process.env.fbClientSecret || "e40b11fb78d7191f137af4f39be37f16"

passport.use(new FacebookTokenStrategy({

    clientID: clientID,
    clientSecret: clientSecret

}, function (accessToken, refreshToken, profile: any, next) {
    let { id } = profile.id
    const query = {
        text: 'SELECT * FROM users WHERE _id = ($1) ',
        values: [id]

    }
    client.query(query, (err, user: any) => {
        if (err) { return next(err) }
        if (user) {

            next(null, user)
        }
        else {

            let randomString = Math.random().toString(36).substring(3);

            const queryInsert = {
                text: 'INSERT INTO users( username, password,email,name, nickName,firstName, lastName, fbAccessToken, fbId,fbEmail,fbPhoto,fbData ) VALUES($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11, $12)',
                values: [profile.id, profile.id, profile._json.email, profile._json.name, profile.name.givenName, profile._json.first_name, profile._json.last_name, accessToken, profile.id, profile._json.email, profile.photos[0].value, JSON.stringify(profile),],
            }
            client.query(queryInsert, (err, user) => {
                if (err) { return next(err) }

                next( null, user )
              })
        }
    })

    // Users.findOne({ fbId: profile.id }, function (err, user) {

    //     if (err) { return next(err) }

    //     if( user ){

    //         next( null, user )

    //     }else{

    //         // let randomString = Math.random().toString(36).substring(3);

    //         let newUser = new Users({ 
    //             username: profile.id, 
    //             password: profile.id, 
    //             // email:  randomString + '@mymail.com', 
    //             email: profile._json.email, 
    //             name: profile._json.name,
    //             nickName: profile.name.givenName,
    //             firstName: profile._json.first_name,
    //             lastName: profile._json.last_name,
    //             fbAccessToken: accessToken,
    //             fbId: profile.id,
    //             fbEmail: profile._json.email, 
    //             fbPhoto: profile.photos[0].value, 
    //             fbData: JSON.stringify( profile ), 
    //         });

    //         newUser.save(function (err, user) {

    //             if (err) { return next(err) }

    //             next( null, user )

    //         })

    //     }

    // })

}
))

passport.serializeUser<any, any>((user, next) => {

    next(null, user._id)

})

passport.deserializeUser((userId, next) => {

    // Users.findById( userId, 'username, email, registered, name, nickName, fbId, fbPhoto' )
    //     .exec( function (err, user) {
    //     if (err) { return next(err); }
    //     if (!user) { return next(null, false); }
    //     return next(null, user);
    // })
    const queryOneTodo = {
        text: 'SELECT * FROM users WHERE _id = ($1) RETURNING *',
        values: [userId]

    }
    client.query(queryOneTodo, (err, user: any) => {
        if (err) { 
            return next(err); 
        }
        if (!user) {
             return next(null, false); 
            }
        return next(null, user);
    })

    // Users.findOne({ _id: userId }).exec(function (err, user) {
    //     if (err) { return next(err); }
    //     if (!user) { return next(null, false); }
    //     return next(null, user);
    // })

})