const player = require('play-sound')(opts = {})

const filePath = "C:/Users/shonh/LineProject/DemoStore/Assets/beep-04.mp3"

const playSound =()=>{
    
    player.play(filePath, { timeout: 300 }, function(err){
        if (err) console.log(err)
      })
}

module.exports = playSound