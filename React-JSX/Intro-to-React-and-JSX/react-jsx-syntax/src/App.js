const rootElement = document.getElementById('root');
const root = ReactDOM.createRoot(rootElement);

// const headingElement = React.createElement('h1', {}, 'Hello from React');
// const secondElement = React.createElement('h2', {}, 'Some slogan here');
// const headerElement = React.createElement('header', {}, headingElement, secondElement);
// Use JSX Syntax

const Heading = (props) => {
    return <h1>Hello from {props.title}</h1>
}

const headerElement = (
    <div>
        <h3>This is wrapper</h3>
        <header>
            <Heading title={'React app'} />
            <h2>Some slogan here</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero laboriosam assumenda natus, consequuntur soluta alias ea esse! Nobis voluptatibus consectetur eligendi dolorum! Commodi et atque mollitia delectus nisi rerum earum?</p>
        </header>
        <button>Click me</button>
    </div>

)

root.render(headerElement);