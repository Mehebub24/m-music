let songIndex = 1;
let audioElement = new Audio('songs/1.mp3');
let mesterPlay = document.getElementById('masterPlay')
let progressBar = document.getElementById('progressBar')
let gif = document.getElementById('gif');
let masterPlayName = document.getElementById('masterPlayName');
let songItem = Array.from(document.getElementsByClassName("songItem"))

let songs =[
    {songName:"Lkhao salam",filePath:"songs/1.mp3",coverPath:"cover/1.gif"},
    {songName:"One Night 2 in Dubai",filePath:"songs/2.mp3",coverPath:"cover/2.gif"},
    {songName:"Sajnire",filePath:"songs/3.mp3",coverPath:"cover/1.gif"},
    {songName:"I am Raider ",filePath:"songs/4.mp3",coverPath:"cover/2.gif"},
    {songName:"Hi helo",filePath:"songs/5.mp3",coverPath:"cover/1.gif"},
    {songName:"In The End",filePath:"songs/6.mp3",coverPath:"cover/2.gif"},
    {songName:"I am Raider 7",filePath:"songs/7.mp3",coverPath:"cover/2.gif"},
    {songName:"One Night 8 in Dubai",filePath:"songs/8.mp3",coverPath:"cover/1.gif"},
    {songName:"One Night 9 in Dubai",filePath:"songs/9.mp3",coverPath:"cover/2.gif"},
    
]

//Handle Paly/pause click
mesterPlay.addEventListener('click',()=>{
    if(audioElement.paused||audioElement.currentTime<=0){
        audioElement.play()
        mesterPlay.classList.remove('fa-paly-circle');
        mesterPlay.classList.add("fa-pause-circle");
        gif.style.opacisongIndex
    }else{
        audioElement.pause()
        mesterPlay.classList.add('fa-paly-circle');
        mesterPlay.classList.remove("fa-pause-circle");
        gif.style.opacity= 0;
    }
})

songItem.forEach((element, i )=> { 
    element.getElementsByTagName("img")[0].src = songs[i].coverPath;
    element.getElementsByClassName("songName")[0].innerHTML = songs[i].songName;
    //element.getElementsByClassName("timeStamp")[0].innerHTML = songs[i].
});

 //Listen to Events 
 audioElement.addEventListener('timeupdate',()=>{
    //console.log(timeupdate);
    //Update Seekbar 
    progress = parseInt((audioElement.currentTime/audioElement.duration)*100)
    //console.log(progress);
    progressBar.value= progress
 })


 progressBar.addEventListener('change',()=>{
    audioElement.currentTime = progressBar.value * audioElement.duration/100
 })

const mskeAllpalys = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
        element.classList.remove('fa-pause-circle');
        element.classList.add('fa-play-circle');
    })
}

Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click',(e)=>{
        mskeAllpalys();
        songIndex = parseInt(e.target.id);
        masterPlayName.innerText = songs[songIndex].songName;
        e.target.classList.remove('fa-paly-circle');
        e.target.classList.add('fa-pause-circle');
        audioElement.src = `songs/${songIndex + 1}.mp3`;
        audioElement.currentTime = 0;
        audioElement.play();
        gif.style.opacity= 0;
        mesterPlay.classList.add('fa-pause-circle');
        mesterPlay.classList.remove("fa-paly-circle");
    })
})

document.getElementById("next").addEventListener('click',()=>{
    if(songIndex>=9){
        songIndex = 0;
    }else{
        songIndex +=1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterPlayName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play()
    mesterPlay.classList.remove("fa-paly-circle");
    mesterPlay.classList.add('fa-pause-circle');
    
})


document.getElementById("previous").addEventListener('click',()=>{
    if(songIndex<=0){
        songIndex = 0;
    }else{
        songIndex -=1;
    }
    audioElement.src = `songs/${songIndex + 1}.mp3`;
    masterPlayName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0;
    audioElement.play()
    mesterPlay.classList.remove("fa-paly-circle");
    mesterPlay.classList.add('fa-pause-circle');
    
})  