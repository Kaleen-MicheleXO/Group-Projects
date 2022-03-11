document.querySelector("#firstNote").addEventListener("click", music1)
document.querySelector("#secondNote").addEventListener("click", music2)
document.querySelector("#secondNote").addEventListener("click", music3)
document.querySelector("#secondNote").addEventListener("click", music4)
document.querySelector("#secondNote").addEventListener("click", music5)
document.querySelector("#secondNote").addEventListener("click", music6)
document.querySelector("#secondNote").addEventListener("click", music7)

function music1(){
  let audio = document.getElementById("audio");
  //let audio = new Audio("https://cdn.glitch.global/9db1163b-024c-40fd-b302-a4340985e8af/bobs-burgers-supercut-all-of-tinas-moans.mp3?v=1646962641994");
  audio.play();
  if (audio.paused){
    audio.play();
  } else{
    audio.pause();
    audio.currentTime = 0;
  }
}
function music2(){
  let audio = document.getElementById("secondNote");
  if (audio.paused){
    audio.play();
  } else{
    audio.pause();
    audio.currentTime = 0;
  }
}
function music7(){
  let audio = document.getElementById("seventhNote");
  if (audio.paused){
    audio.play();
  } else{
    audio.pause();
    audio.currentTime = 0;
  }
}



// https://cdn.glitch.global/9db1163b-024c-40fd-b302-a4340985e8af/movie_1.mp3?v=1646962857615



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