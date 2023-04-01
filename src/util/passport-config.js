const localStratregy = require("passport-local").Strategy
const bcrypt = require("bcrypt")
// const Admin = require("./src/models/");

function initialize(passport, getUserByEmail, getUserById){
    // Function to authenticate users
    const authenticateUsers = async(email, password, done) => {
        // Get users by email
        const admin = getUserByEmail(email)
        if (admin == null) {
            return done(null, false, {message: "Admin was not found!"})
        }
        try {
            if (await bcrypt.compare(password, admin.password)) {
                return done (null, admin)
            }
            else {
                return done (null, false, {message: "Password incorrect, try again!"})
            }
        }
        catch (e) {
            console.log(e);
            return done(e)
        }
    }
    passport.use(new localStratregy({ usernameField: "email" }, authenticateUsers));
    passport.serializeUser((user, done) => done(null, user.id))
    passport.deserializeUser((id, done) => {
        return done(null, getUserById(id))
    })
}

module.exports = initialize