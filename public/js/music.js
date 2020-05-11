var song = new Audio();
song.src = "../周杰倫聽媽媽的話歌詞.mp3";
window.onload = song.play();
var image = ["../image_file/mothersday001.jpg", "../image_file/mothersday13.jpg", "../image_file/mothersday6.jpg","../image_file/mothersday33.jpeg"]

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

  if (position <= 1/4){
    document.getElementById("mothers_image").src = image[0];
  }
  else if(position <= 1/2){
    document.getElementById("mothers_image").src = image[1];
  }
  else if(position <= 3/4){
    document.getElementById("mothers_image").src = image[2];
  }
  else{
    document.getElementById("mothers_image").src = image[3];
  }
})