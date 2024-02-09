const refTimeValue = document.querySelector(".totalTimeValue");

const refStartBtn = document.querySelector(".startBtn");

let  ms = 0;
let  ss = 0;
let  mm = 0;
let  hh = 0;

// const cronometro = function ()
// {
//     const time = new Date();
//     let ms = time.getMilliseconds(); 
//     if(ms>999)
//     {
//         ss+=1;
//         if(ss==60)
//         {
//             ss=0;
//             mm+=1;
//             if(mm==60)
//             {
//                 mm=0;
//                 hh+=1;
//                 if(hh==60)
//                 {
//                     hh=0;
//                 }
//             }
//         }
//     }    
//     console.log(`${hh}:${mm}:${ss}`);
//     console.log(ss);
// }


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

const cronoMs = setInterval(updateMs,1)
const cronoSs = setInterval(updateSs,1000)
const cronoMm = setInterval(updateMm,60000)
const cronoHh = setInterval(updateHh,3600000)

const showTime = () => console.log(`Milisegundos: ${ms} Segundos: ${ss} Minutos: ${mm} Horas: ${hh}`)

const crono = setInterval(showTime,1000);




refStartBtn.addEventListener("click",function () {
    clearInterval(crono)
    clearInterval(cronoMs)
    clearInterval(cronoSs)
    clearInterval(cronoMm)
    clearInterval(cronoHh)
})