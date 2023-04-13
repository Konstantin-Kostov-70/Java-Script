var rootElement = document.getElementById('root');
var root = ReactDOM.createRoot(rootElement);

// const headingElement = React.createElement('h1', {}, 'Hello from React');
// const secondElement = React.createElement('h2', {}, 'Some slogan here');
// const headerElement = React.createElement('header', {}, headingElement, secondElement);
// Use JSX Syntax

var headerElement = React.createElement(
    'div',
    null,
    React.createElement(
        'h3',
        null,
        'This is wrapper'
    ),
    React.createElement(
        'header',
        null,
        React.createElement(
            'h1',
            null,
            'Hello from React'
        ),
        React.createElement(
            'h2',
            null,
            'Some slogan here'
        ),
        React.createElement(
            'p',
            null,
            'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam assumenda natus, consequuntur soluta alias ea esse! Nobis voluptatibus consectetur eligendi dolorum! Commodi et atque mollitia delectus nisi rerum earum?'
        )
    ),
    React.createElement(
        'button',
        null,
        'Click me'
    )
);

root.render(headerElement);