var countDownDate=new Date("Oct 16,2023 00:00:00").getTime();
var x=setInterval(function(){
    var now=new Date().getTime();
    var distance=countDownDate-now;
    var days=Math.floor(distance/(1000*60*60*24));
    var hrs=Math.floor((distance%(1000*60*60*24))/(1000*60*60));
    var mins=Math.floor((distance%(1000*60*60))/(1000*60));
    var secs=Math.floor((distance%(1000*60))/(1000));

    document.getElementById("days").innerHTML=days;
    document.getElementById("hrs").innerHTML=hrs;
    document.getElementById("mins").innerHTML=mins;
    document.getElementById("secs").innerHTML=secs;

    if(distance<0)
    {
        clearInterval(x);
        document.getElementById("days").innerHTML="00";
    document.getElementById("hrs").innerHTML="00";
    document.getElementById("mins").innerHTML="00";
    document.getElementById("secs").innerHTML="00";
    }
},1000);