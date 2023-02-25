let timer=document.querySelector(".clock");
let timeNow;
let t=0;
let lapArray=[];
let laps=document.querySelector(".laps")

document.querySelector("#startb").addEventListener("click",function()
{
    timeNow = Date.now() - t;
    timeAt = setInterval(timeUpdate, 10);
});
document.querySelector("#stopb").addEventListener("click",function()
{
    clearInterval(timeAt)
    t=Date.now() - timeNow;
})
document.querySelector("#reset").addEventListener("click",function()
{
    clearInterval(timeAt)
    timer.textContent="00:00:00:00";
    laps.innerHTML="";
    t=0;
    lapArray=[];
});
function timeUpdate() {
    t = Date.now() - timeNow;
    let tdisplay = timeWritter(t);
    timer.textContent = tdisplay;
}

function timeWritter(time) {
    let date = new Date(time);
    let hour=date.getUTCHours();
    let min = date.getUTCMinutes();
    let sec = date.getUTCSeconds();
    let mili = Math.floor(date.getUTCMilliseconds() / 10);

    hour=(hour<10)?"0"+hour:hour;
    min =(min<10)?"0"+min:min;
    sec = (sec<10)?"0"+ sec:sec;
    mili =(mili <10)?"0"+mili:mili;

    return hour+":"+min+":"+sec +":"+mili;
}
document.querySelector("#lapset").addEventListener("click",function()
{
    let currLap=t;
    lapArray.push(currLap);
    lapUpdate();
})
function lapUpdate()
{
    laps.innerHTML="";
    for(let i=0;i<lapArray.length;i++)
    {
        currLap=lapArray[i];
        let lapDisplay=timeWritter(currLap);
        let newLap=document.createElement("div");
        newLap.textContent="Lap"+(i+1)+"-"+lapDisplay;
        laps.appendChild(newLap);
    }
}
