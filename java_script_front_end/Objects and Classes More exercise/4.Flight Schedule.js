function solve(input) {
    let flights = {};
    let [flightsInfo, flightsStatus, data] = input;
    let status = data[0];

    for (let info of flightsInfo) {
        info = info.split(' ');
        let num = info.shift()
        let destination = info.join(' ');

        flights[num] = {
            Destination: destination,
            Status: ''
        }
    }

    for (let statusInfo of flightsStatus) {
        let [flightNum, flightStatus] = statusInfo.split(' ');
        if (flights.hasOwnProperty(flightNum)) {
            flights[flightNum]['Status'] = flightStatus;
        }
    }

    for (key in flights) {
        switch (status) {
            case 'Cancelled':
                if (flights[key]['Status'] === status) {
                    console.log(flights[key]);
                }
                break;
            
            default:
                if (flights[key]['Status'] === '') {
                    flights[key]['Status'] = status;
                    console.log(flights[key]);
                }
                break;
        }
    }
}

// solve([['WN269 Delaware',
// 'FL2269 Oregon',
//  'WN498 Las Vegas',
//  'WN3145 Ohio',
//  'WN612 Alabama',
//  'WN4010 New York',
//  'WN1173 California',
//  'DL2120 Texas',
//  'KL5744 Illinois',
//  'WN678 Pennsylvania'],
//  ['DL2120 Cancelled',
//  'WN612 Cancelled',
//  'WN1173 Cancelled',
//  'SK430 Cancelled'],
//  ['Cancelled']
// ]
// )

solve([['WN269 Delaware',
'FL2269 Oregon',
 'WN498 Las Vegas',
 'WN3145 Ohio',
 'WN612 Alabama',
 'WN4010 New York',
 'WN1173 California',
 'DL2120 Texas',
 'KL5744 Illinois',
 'WN678 Pennsylvania'],
 ['DL2120 Cancelled',
 'WN612 Cancelled',
 'WN1173 Cancelled',
 'SK330 Cancelled'],
 ['Ready to fly']
]
)