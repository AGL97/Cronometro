const refStartBtn = document.querySelector(".buttons.divStartBtn");

const refTotalLabelValue = document.querySelector(".totalTimeValue");

const refPartialBtn = document.querySelector(".buttons.divPartialBtn");

const refPartialLabelValue = document.querySelector(".partialTimeValue");

const refScores = document.querySelector(".mediciones");

/*Valores Totales*/
let  ms = 0;
let  ss = 0;
let  mm = 0;
let  hh = 0;

/*Valores parciales*/

let ms_partial = 0;
let ss_partial = 0;
let mm_partial = 0;
let hh_partial = 0;

/*Bandera de habilitacion de boton Parcial*/
let isMainTimerRunning = false;

/*Bandera de reinicio de 2do timer*/
let isSecondaryTimerRunning = false;

let cont=0;

/*seccion Empezar cuenta*/

function updateMs() {
    ms+=1;
    if(ms===1000)
    {
        ms=0;
    }
}

function updateSs() {
    ss+=1;
    if(ss===60)
    {
        ss=0;
    }   
}

function updateMm() {
    mm+=1;
    if(mm===60)
    {
        mm=0;
    }
}

function updateHh() {
    hh+=1;
    if(hh===60)
    {
        hh=0;
    }
}

/*Seccion cuenta secundaria*/
function updateMs_partial() {
    ms_partial+=1;
    if(ms_partial===1000)
    {
        ms_partial=0;
    }
}

function updateSs_partial() {
    ss_partial+=1;
    if(ss_partial===60)
    {
        ss_partial=0;
    }   
}

function updateMm_partial() {
    mm_partial+=1;
    if(mm_partial===60)
    {
        mm_partial=0;
    }
}

function updateHh_partial() {
    hh_partial+=1;
    if(hh_partial===60)
    {
        hh_partial=0;
    }
}

/*Actualizar label de cuenta principal*/

refStartBtn.addEventListener("click",()=>
{
    const cronoMs = setInterval(updateMs,1)
    const cronoSs = setInterval(updateSs,1000)
    const cronoMm = setInterval(updateMm,60000)
    const cronoHh = setInterval(updateHh,3600000)

const showTime = () => 
{
    console.log(`Milisegundos: ${ms} Segundos: ${ss} Minutos: ${mm} Horas: ${hh}`)
    refTotalLabelValue.textContent=`${hh}:${mm}:${ss}:${ms}`;
}


/*
refStartBtn.addEventListener("click",function () {
    clearInterval(crono);
    clearInterval(cronoMs);
    clearInterval(cronoSs);
    clearInterval(cronoMm);
    clearInterval(cronoHh);
})
*/
const crono = setInterval(showTime,100);

})




/*Tomar Valor Parcial*/
refPartialBtn.addEventListener("click",()=>{
    if(isMainTimerRunning)
    {
        if(!refScores.classList.contains("relleno"))
        {
            refScores.classList.add("relleno");
        }

        var newScore  = document.createElement("label");

        newScore.textContent=`${hh_partial}:${mm_partial}:${ss_partial}:${ms_partial}`;

        refScores.append(newScore);

        const cronoMs_partial = setInterval(updateMs_partial,1)
        const cronoSs_partial = setInterval(updateSs_partial,1000)
        const cronoMm_partial = setInterval(updateMm_partial,60000)
        const cronoHh_partial = setInterval(updateHh_partial,3600000) 

        if(isSecondaryTimerRunning)
        {           
            clearInterval(cronoMs_partial);
            clearInterval(cronoSs_partial);
            clearInterval(cronoMm_partial);
            clearInterval(cronoHh_partial);
            ms_partial = 0;
            ss_partial = 0;
            mm_partial = 0;
            hh_partial = 0;
            isSecondaryTimerRunning=false
        }
    
        isSecondaryTimerRunning=true;
        
        const secondTime = setInterval(() => {
            refPartialLabelValue.textContent=`${hh_partial}:${mm_partial}:${ss_partial}:${ms_partial}`
        }, 100);
    }
})






