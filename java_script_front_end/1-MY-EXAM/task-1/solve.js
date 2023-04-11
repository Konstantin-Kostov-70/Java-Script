function solve(input) {
   let allTasks = {}
   let num = Number(input.shift())
   for (let index = 0; index < num; index++) {
      let [assignee, taskId, title, status, points] = input.shift().split(':')
      if (!allTasks.hasOwnProperty(assignee)) {
        allTasks[assignee] = []
      }
      allTasks[assignee].push({
        taskId,
        title,
        status,
        points: Number(points)
      })
   }
   for (let line of input ) {
    line = line.split(':')
    let command = line[0]
    let assignee = line[1]
    switch (command) {
        case 'Add New':
            let taskId = line[2]
            let title = line[3]
            let status = line[4]
            let points = Number(line[5])
            if (allTasks.hasOwnProperty(assignee)) {
                allTasks[assignee].push({
                    taskId,
                    title,
                    status,
                    points
                })
            }
            else {
                console.log(`Assignee ${assignee} does not exist on the board!`)
            }
            break;

        case 'Change Status':
            let searchTaskId = line[2]
            let newStatus = line[3]
            if (allTasks.hasOwnProperty(assignee)) {
               let searchObj = allTasks[assignee].find(obj => obj['taskId'] === searchTaskId)
               if(searchObj) {
                  searchObj['status'] = newStatus
               }
               else {
                console.log(`Task with ID ${searchTaskId} does not exist for ${assignee}!`)
               }
            }
            else {
                console.log(`Assignee ${assignee} does not exist on the board!`)
            }
            break;
    
        default:
            let index = Number(line[2])
            if (allTasks.hasOwnProperty(assignee)) {
               if (index >= 0 && index < allTasks[assignee].length) {
                   allTasks[assignee].splice(index, 1)
               }
               else {
                console.log("Index is out of range!")
               }
            }
            else {
                console.log(`Assignee ${assignee} does not exist on the board!`)
            }
            break;
    }
   }

   let todo = 0
   let inProgress = 0
   let review = 0
   let done = 0

   for (assignee in allTasks) {
      for (obj of allTasks[assignee]) {
        if (obj['status'] === 'Done') {
            done += obj['points']
        }
        else if (obj['status'] === 'ToDo') {
            todo += obj['points']
        }
        else if (obj['status'] === 'In Progress') {
            inProgress += obj['points']
        }
        else if (obj['status'] === 'Code Review') {
            review += obj['points']
        }
        
      }
   }

   console.log(`ToDo: ${todo}pts`)
   console.log(`In Progress: ${inProgress}pts`)
   console.log(`Code Review: ${review}pts`)
   console.log(`Done Points: ${done}pts`)

   let notDoneTasks = todo + inProgress + review

   if (done >= notDoneTasks) {
    console.log('Sprint was successful!')
   }
   else {
    console.log('Sprint was unsuccessful...')
   }
   
}

solve([
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
]
)