const homePage = `
    <div>
        <h1>Home page</h1>
        <h2>Hello Server</h2>
    </div>
`;
const layout = require('../views/layout');


module.exports = (req,res) => {
    res.write(layout(homePage, 'Home'));
    res.end();
};
