let mili = 0;
let seco = 0;
let minu = 0;
let hour = 0;
let timer=false;


function stopwatch() 
{
    if (timer) 
    { 
            mili++;
            if (mili == 100) 
            {
                mili = 0;
                seco++;

            }
           

            if (seco == 60) {
                seco = 0;
                minu++;
            }
            
            if (minu == 60) {
                minu = 0;
                hour++;

            }
              
            document.querySelector(".hrs").innerHTML = hour;
            document.querySelector(".min").innerHTML = minu;
            document.querySelector(".sec").innerHTML = seco;
            document.querySelector(".mil").innerHTML = mili;

            setTimeout(stopwatch,10);
        }
  
}
document.querySelector("#startb").addEventListener("click", function () {
    timer=true;
    stopwatch();
})
document.querySelector("#stopb").addEventListener("click", function () 
{
    timer = false;
})
document.querySelector("#reset").addEventListener("click", function () 
{
    hour=0;
    minu=0;
    seco=0;
    mili=0;
            document.querySelector(".hrs").innerHTML = hour;
            document.querySelector(".min").innerHTML = minu;
            document.querySelector(".sec").innerHTML = seco;
            document.querySelector(".mil").innerHTML = mili;

    timer=false
});