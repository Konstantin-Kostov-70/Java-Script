const about = `
    <div>
        <h1>About page</h1>
        <h2>Hello from About page</h2>
    </div>
`;
const layout = require('../views/layout');

module.exports = (req ,res) => {
    res.write(layout(about, 'About'));
    res.end();
};