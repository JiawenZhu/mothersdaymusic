var song = new Audio();
song.src = "./周杰倫聽媽媽的話歌詞.mp3";
window.onload = song.play();

function playOrPauseSong(){
  if(song.paused){
    song.play();
    document.getElementById("playOrPause").src = 
    "https://img.icons8.com/android/15/000000/pause.png"
  }
  else{
    song.pause();
    document.getElementById("playOrPause").src = 
    "https://img.icons8.com/ios/15/000000/play.png"
  }
}
song.addEventListener('timeupdate', ()=>{
  var position = song.currentTime / song.duration ;
  document.getElementById("range").style.width = position * 100 + '%';
})