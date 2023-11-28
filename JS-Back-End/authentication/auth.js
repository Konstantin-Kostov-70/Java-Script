const bcrypt = require('bcrypt');
const uniqId = require('uniqid');

module.exports = () => {
    const users = {
        '8d0rgh5j8lphirdb8': {
            id: '8d0rgh5j8lphirdb8',
            hashPassword: '$2b$10$ZN/QTK67eEqqojfPcDxLGOenOfjOKVU/gamgTbWeAOZQm2z6a8tkm',
            username: 'Peter'
        }
    };

    return (req, res, next) => {

        req.auth = {
            login,
            register
        }

        next();

        async function login(username, password) {
            const user = Object.values(users).find(u => u.username == username);
            if (user && await bcrypt.compare(password, user.hashPassword)) {
                console.log('Successful login');
                req.session.user = user;
                return true
            }
            return
        };

        async function register(username, password) {
            if (Object.values(users).find(u => u.username == username) == undefined) {


                const hashPassword = await bcrypt.hash(password, 10);
                const id = uniqId();
                const user = {
                    id,
                    username,
                    hashPassword
                }
                users[id] = user;
                req.session.user = user;
                console.log('Register: ' + req.body.username);
                return true
            }
            return
        }
    }
}