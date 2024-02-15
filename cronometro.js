import {Timer} from "./timer.js";

const refStartBtn = document.querySelector(".buttons.divStartBtn");

const refConvertToImgPause = document.querySelector(".startBtn");

const refLabelPause = document.querySelector(".buttons.divStartBtn .labelsBtn");

const refTotalLabelValue = document.querySelector(".totalTimeValue");

const refPartialBtn = document.querySelector(".buttons.divPartialBtn");

const refPartialLabelValue = document.querySelector(".partialTimeValue");

const refScores = document.querySelector(".mediciones");

const refResetBtn = document.querySelector(".buttons.divResetBtn");

const refCleanBtn = document.querySelector(".buttons.divCleanButton");

const principalTimer = new Timer();

const partialTimer = new Timer();

let cont = 0;

let cronoPartial = 0;

let isMainTimerRunning=false;

refStartBtn.addEventListener("click",()=>
{
    let cronoPrincipal = 0
    refConvertToImgPause.classList.toggle("pauseBtn")
    if (refConvertToImgPause.classList.contains("pauseBtn")) 
    {  
        refLabelPause.textContent=`Pausar`; 
        principalTimer.start();
        cronoPrincipal = setInterval(()=>
        {
            refTotalLabelValue.textContent = principalTimer.now();
        },100)
        isMainTimerRunning=true;
    }
    else
    {       
        refLabelPause.textContent=`Empezar`;
        principalTimer.stop();
        partialTimer.stop();
        clearInterval(cronoPrincipal);
        isMainTimerRunning=false;  
    }
})

refPartialBtn.addEventListener("click",()=>
{
    if (isMainTimerRunning) {
        
            partialTimer.stop();
            partialTimer.reset();
            partialTimer.start();

            cronoPartial = setInterval(()=>
            {
                refPartialLabelValue.textContent = partialTimer.now();                
                
            },100);

            var newScore  = document.createElement("label");
        
            newScore.textContent = `${cont++} -) ${refPartialLabelValue.textContent}`;
            if(refPartialLabelValue.textContent==="00:00:00"||refPartialLabelValue.textContent==="0:0:0:0")
            {
                newScore.textContent = `${cont++} - ) ${principalTimer.now()}`;
            }
            if(!refScores.classList.contains("relleno"))
            {
                refScores.classList.add("relleno");
            }
            refScores.append(newScore);
    }    
    
})

refResetBtn.addEventListener("click",()=>
{    
    principalTimer.reset();
    partialTimer.reset();
    
})

refCleanBtn.addEventListener("click",()=>
{
    if(isMainTimerRunning===false)
    {
        var labels = refScores.querySelectorAll("label");
        labels.forEach(label=>{label.remove()});
        refScores.classList.remove("relleno"); 
    }
    cont=0;
})


