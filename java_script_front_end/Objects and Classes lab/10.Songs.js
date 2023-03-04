function solve(array1) {
   class Song {
    constructor(typeList, name, time) {
        this.typeList = typeList;
        this.name = name;
        this.time = time;
    }

    print() {
        console.log(this.name);
    }
   }

   let num = array1.shift();
   let typeList = array1.pop();
   
   for (let i = 0; i < num; i++) {
     let songData = array1[i].split('_');
     let songType = songData[0];
     let songName = songData[1];
     let songTime = songData[2];

     if (songType === typeList || typeList === "all") {
        let song = new Song(songType, songName, songTime) 
        song.print()
     }

   }
}

solve([3,
    'favourite_DownTown_3:14',
    'favourite_Kiss_4:16',
    'favourite_Smooth Criminal_4:01',
    'favourite']
    )

console.log('---------------------------------------------')

solve([4,
    'favourite_DownTown_3:14',
    'listenLater_Andalouse_3:24',
    'favourite_In To The Night_3:58',
    'favourite_Live It Up_3:48',
    'listenLater']
    )

console.log('-----------------------------------------------')

solve([2,
    'like_Replay_3:15',
    'ban_Photoshop_3:48',
    'all']
    )