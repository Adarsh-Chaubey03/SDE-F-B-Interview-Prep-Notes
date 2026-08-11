// setTimeout() - execute fn once after every specific delays
// setInterval() - execute fn repeatedly after every specific delays

//  const timerId = setTimeout(()=>{
//     console.log("Hello after 2 seconds")
// },2000);


  const timerId = setInterval (()=>{
    console.log(" every 2 seconds")
},2000);



setTimeout(()=>{
    clearInterval(timerId);
},16000
);
