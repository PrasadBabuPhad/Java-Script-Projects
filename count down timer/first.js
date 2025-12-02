
setInterval(()=>{
    const result=document.getElementById('result');
    const currentTime=Date.now(); //millisecond time

    const olympicTime = new Date(2028,6,14).getTime();

    let timer =olympicTime-currentTime;

    //milllisecond

    const day=Math.floor((timer)/(1000*60*60*24));
    timer%=1000*60*60*24;
    const hour=Math.floor((timer)/(1000*60*60));
    timer%=1000*60*60;
    const min=Math.floor((timer)/(1000*60));
    timer%=1000*60;
    const sec=Math.floor((timer)/(1000));
    timer%=1000;


    result.textContent=`${day}: Days  ${hour}: Hour    ${min}: Minutes    ${sec}: Seconds`;
},1000)