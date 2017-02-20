const Authentication = require('./controllers/authentication');
const passportService = require('./services/passport');
const passport = require('passport');

/** When user is authenticated don't try to make a session for them
 * By default, passport wants to make a cookie based session for this request
 * since we are using tokens we don't want to do that => session: false
 */
const requireAuth = passport.authenticate('jwt', { session: false });
const requireSignin = passport.authenticate('local', { session: false });

module.exports = function(app) {
    app.get('/', requireAuth, function(req, res) {
        res.send({ hi: 'there' });
    });
    app.post('/signin', requireSignin, Authentication.signin); // first authenticate before hitting the router
    app.post('/signup', Authentication.signup);
}