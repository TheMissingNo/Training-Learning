function getTimeFromSeconds(seconds){
    const data = new Date(seconds*1000);
    return data.toLocaleTimeString('pt-PT',{
        hour12: false,
        timeZone: 'UTC'
    })
}

const clock = document.querySelector('.timer');
const startclock = document.querySelector('.start');
const pauseclock = document.querySelector('.pause');
const stopclock = document.querySelector('.stop');
let seconds = 0;
let timer;

function startClock(){
    timer =setInterval(function(){
        seconds++;
        clock.innerHTML= getTimeFromSeconds(seconds);
    }, 1000);
}

document.addEventListener('click', function(e){
    const el = e.target;
    if(clock.innerHTML != "00:00:00"){
        startclock.innerHTML='Resume';
    }
    if(el.classList.contains('stop')){
        clearInterval(timer);
        clock.innerHTML = "00:00:00";
        seconds=0;
        startclock.innerHTML='Start';
    }
    else if(el.classList.contains('pause')){
        clearInterval(timer);
        startclock.classList.toggle("hidden");
        pauseclock.classList.toggle("hidden");
    }
    else if (el.classList.contains('start')){
        clearInterval(timer);
        startClock();
        startclock.classList.toggle("hidden");
        pauseclock.classList.toggle("hidden");
    }
});
/*
var contentContainer = document.getElementById('contentContainer');

fetch('index.html')
  .then(function(response) {
    return response.text();
  })
  .then(function(data) {
    contentContainer.innerHTML = data;
  })
  .catch(function(error) {
    console.log('Error:', error);
  });
  */