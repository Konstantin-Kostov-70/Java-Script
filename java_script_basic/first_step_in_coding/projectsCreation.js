function projectsCreation(input){
    let name = input[0]
    let numProject = Number(input[1])
    let needHours = numProject * 3
    console.log(`The architect ${name} will need ${needHours} hours to complete ${numProject} project/s.`)
}

projectsCreation(["George ", "4 "])