// Note 1
function playTRex() {
  var audio = new Audio('https://interactive-examples.mdn.mozilla.net/media/cc0-audio/t-rex-roar.mp3');
  audio.play();
}

// Note 2
function playPianoNote() {
  var audio = new Audio('https://cdn.glitch.global/9db1163b-024c-40fd-b302-a4340985e8af/notes_A.mp3?v=1646964279079');
  audio.play();
}

// Note 3
function playLetsGo() {
  var audio = new Audio('https://cdn.glitch.global/9db1163b-024c-40fd-b302-a4340985e8af/Lets%20Go.m4a?v=1646963856385');
  audio.play();
}

// Note 4
function playBruh() {
  var audio = new Audio('https://cdn.glitch.global/9db1163b-024c-40fd-b302-a4340985e8af/movie_1.mp3?v=1646962857615');
  audio.play();
}

// Note 5
function playBaddie() {
  var audio = new Audio('https://cdn.glitch.global/9db1163b-024c-40fd-b302-a4340985e8af/bobs-burgers-supercut-all-of-tinas-moans.mp3?v=1646962641994');
  audio.play();
}

// Note 6
function playBoatsAndLogs() {
  var audio = new Audio('https://cdn.glitch.global/9db1163b-024c-40fd-b302-a4340985e8af/boats%20and%20logs.m4a?v=1646965006611');
  audio.play();
}

// Note 7
function play() {
  var audio = new Audio('');
  audio.play();
}





// https://cdn.glitch.global/9db1163b-024c-40fd-b302-a4340985e8af/movie_1.mp3?v=1646962857615    THIS IS THE BRUH sound



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