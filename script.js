document.querySelector("#firstNote").addEventListener("click", music)

function music(){
  let audio = document.getElementById("firstNote");
  if (audio.paused){
    audio.play();
  } else{
    audio.pause();
    audio.currentTime = 0;
  }
}





// https://cdn.glitch.global/9db1163b-024c-40fd-b302-a4340985e8af/bobs-burgers-supercut-all-of-tinas-moans.mp3?v=1646962641994



// <audio src="${ song.url }" id="audio"></audio>
// <i class="glyphicon glyphicon-play-circle b-play" id="play" onclick="play()"></i>

// <script>
//     function play() {
//         var audio = document.getElementById('audio');
//         if (audio.paused) {
//             audio.play();
//             $('#play').removeClass('glyphicon-play-circle')
//             $('#play').addClass('glyphicon-pause')
//         }else{
//             audio.pause();
//             audio.currentTime = 0
//             $('#play').addClass('glyphicon-play-circle')
//             $('#play').removeClass('glyphicon-pause')
//         }
//     }
// </script>