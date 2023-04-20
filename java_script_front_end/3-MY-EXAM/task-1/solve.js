function solve(input) {
    let num = Number(input.shift());
    let allTask = {}
    for (let index = 0; index < num; index++) {

        let [assignee, taskId, title, status, estimatePoints] = input.shift().split(':')
        if (!allTask.hasOwnProperty(assignee)) {
            allTask[assignee] = []
        }
        allTask[assignee].push({
            taskId,
            title,
            status,
            estimatePoints: Number(estimatePoints)
        })
    }

    for (let line of input) {
        line = line.split(':')
        let command = line[0]
        let assignee = line[1]

        switch (command) {
            case 'Add New':
                let taskId = line[2]
                let title = line[3]
                let status = line[4]
                let estimatePoints = Number(line[5])

                if (!allTask.hasOwnProperty(assignee)) {
                    console.log(`Assignee ${assignee} does not exist on the board!`)
                }
                else {
                    allTask[assignee].push({
                        taskId,
                        title,
                        status,
                        estimatePoints: Number(estimatePoints)
                    })
                }
                break;

            case 'Change Status':
                let idTask = line[2]
                let newStatus = line[3]

                if (!allTask.hasOwnProperty(assignee)) {
                    console.log(`Assignee ${assignee} does not exist on the board!`)
                }
                else {
                    let currentObj = allTask[assignee].find(obj => obj.taskId === idTask)
                    if (currentObj) {
                        currentObj['status'] = newStatus
                    }
                    else {
                        console.log(`Task with ID ${idTask} does not exist for ${assignee}!`)
                    }
                }

                break;

            default:
                let index = Number(line[2])
                if (!allTask.hasOwnProperty(assignee)) {
                    console.log(`Assignee ${assignee} does not exist on the board!`)
                }
                else {
                    if (index < 0 || index >= allTask[assignee].length) {
                        console.log("Index is out of range!")
                    }
                    else {
                        allTask[assignee].splice(index, 1)
                    }
                }
                break;
        }
    }

    let todo = 0
    let inProgress = 0
    let codeReview = 0
    let done = 0

    for (let assignee in allTask) {
        for (let task of allTask[assignee]) {
            let status = task['status']
            switch (status) {
                case 'ToDo':
                    todo += task['estimatePoints']
                    break;
                case 'In Progress':
                    inProgress += task['estimatePoints']
                    break;

                case 'Code Review':
                    codeReview += task['estimatePoints']
                    break;

                default:
                    done += task['estimatePoints']
                    break;
            }
        }
    }
    console.log(`ToDo: ${todo}pts`)
    console.log(`In Progress: ${inProgress}pts`)
    console.log(`Code Review: ${codeReview}pts`)
    console.log(`Done Points: ${done}pts`)

    let points = todo + inProgress + codeReview

    if (done >= points) {
        console.log('Sprint was successful!')
    }
    else {
        console.log('Sprint was unsuccessful...')
    }

}

solve(['4',
'Kiril:BOP-1213:Fix Typo:Done:1',
'Peter:BOP-1214:New Products Page:In Progress:2',
'Mariya:BOP-1215:Setup Routing:ToDo:8',
'Georgi:BOP-1216:Add Business Card:Code Review:3',
'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
'Change Status:Georgi:BOP-1216:Done',
'Change Status:Will:BOP-1212:In Progress',
'Remove Task:Georgi:3',
'Change Status:Mariya:BOP-1215:Done',
])