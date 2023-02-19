function calculator(input){
    let name = input[0];
    let season = Number(input[1]);
    let episode = Number(input[2]);
    let timePerEpisode = Number(input[3]) * 1.20;
    let extraTime = season * 10
    let total = season * timePerEpisode * episode + extraTime

    console.log(`Total time needed to watch the ${name} series is ${Math.floor(total)} minutes.`)

}

calculator(["Lucifer",
"3",
"18",
"55"])
