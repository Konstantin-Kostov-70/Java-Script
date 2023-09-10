const database = require('../util/database')
const catalog = (items)  =>`
    <div>
        <h1>Catalog page</h1>
        <h2>Hello from Catalog page</h2>
        <form method="POST" action="/create">   
            <label>Name:<input type="text" name="name"/></label>
            <label>S/N:<input type="text" name="serial"/></label>
            <input type="submit" value="Create item"/>
        </form>
        <ul>
           ${items.map(([id, item]) => `<li id="${id}">${item.name}-${item.serial}: <a href="/delete?id=${id}">Delete</a></li>`).join('')}  
        </ul>
    </div>
`;
const layout = require('../views/layout');

module.exports = (req ,res) => {
    res.write(layout(catalog(Object.entries(database.database)), 'Catalog'));
    res.end();
};