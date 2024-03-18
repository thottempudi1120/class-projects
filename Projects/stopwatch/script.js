
let display=document.getElementById('display')
let startTime;
let running=false;
function startwatch(){
    if(!running){
        startTime=new Date().getTime();
        running=true;
        updateDisplay();
    }
}
    function stopwatch(){
        running=false;
    }
    function resetwatch(){
        running=false;
        display.textContent='00:00:00'
    }
    function updateDisplay(){
        if (running){
            let currentTime=new Date().getTime();
            let elapsedTime=new Date(currentTime-startTime);

            let hours=elapsedTime.getUTCHours().toString().padStart(2,'0');
            let minutes=elapsedTime.getUTCMinutes().toString().padStart(2,'0');
            let seconds=elapsedTime.getUTCSeconds().toString().padStart(2,'0');
        
        display.textContent=`${hours}:${minutes}:${seconds}`;
        setTimeout(updateDisplay,1000);
        
        }
    }
