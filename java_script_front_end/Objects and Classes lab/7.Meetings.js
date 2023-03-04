function solve(array) {
    let meeting = {}

    array.forEach(info => {
        info = info.split(' ');
        let day = info[0];
        let name = info[1];

        if (meeting.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        }
        else {
            meeting[day] = name
            console.log(`Scheduled for ${day}`)
        }
    });

    Object
    .keys(meeting)
    .forEach(key => console.log(`${key} -> ${meeting[key]}`))
}

solve(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)