module.exports = () => {
    const users = {
        'Peter': {
            password: '123qwe',
            username: 'Peter'
        }
    };

    return (req, res, next) => {

        req.auth = {
            login,
            register
        }

        next();

        function login(username, password) {
            const user = users[username];
            if (user && password == user.password) {
                console.log('Successful login');
                console.log(users);
                req.session.user = user;
                return true
            }
            return
        };

        function register(username, password) {
            const user = {
                username,
                password
            }
            users[username] = user;
            console.log('Register: ' + req.body.username);
            return true
        }
    }
}