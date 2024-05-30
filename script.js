let songIndex = 0;
let audioElement = new Audio('song/1.mp3');
let mesterPlay = document.getElementById('masterPlay')
let progressBar = document.getElementById('progressBar')
let gif = document.getElementById('gif');
let songItem = Array.from(document.getElementsByClassName("songItem"))

let songs =[
    {songName:"Lkhao salam",filePath:"songs/1.mp3",coverPath:"covers/1.jpg"},
    {songName:"One Night in Dubai",filePath:"songs/2.mp3",coverPath:"covers/2.jpg"},
    {songName:"Sajnire",filePath:"songs/3.mp3",coverPath:"covers/3.jpg"}
]

//Handle Paly/pause click
mesterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play()
        mesterPlay.classList.remove('fa-paly-circle');
        mesterPlay.classList.add("fa-pause-circle")
        gif.style.opacity=1;
    }else{
        audioElement.pause()
        mesterPlay.classList.add('fa-paly-circle');
        mesterPlay.classList.remove("fa-pause-circle");
        gif.style.opacity= 0;
    }
})

songItem.forEach((element, i )=> {
    console.log(element, i);
    element.getElementBytagName("img")[0].src = songs[i].filePath;
});

 //Listen to Events 
 audioElement.addEventListener('timeupdate',()=>{
    //Update Seekbar 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    console.log(progress);
    progressBar.value= progress
 })


 progressBar.addEventListener('change',()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100
 })