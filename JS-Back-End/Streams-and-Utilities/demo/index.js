const events = require('events');
const publisher = new events.EventEmitter()

const raiseEvents = () => {
    console.log('before:');
    publisher.emit('ping', 'Hello World!');
    console.log('after:');
    publisher.emit('ping', 'Hello Again');
    publisher.emit('pong', 7, 9);
}

module.exports = {
    publisher,
    raiseEvents
}