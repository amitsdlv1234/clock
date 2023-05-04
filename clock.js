setInterval(()=> {
    let d=new Date();
     let htime=d.getHours();
     let mtime=d.getMinutes();
     let stime=d.getSeconds();
     let hrotetion=30*htime+mtime/2;
     let mrotetion=6*mtime;
     let srotetion = 6*stime;
     hour.style.transform=`rotate(${hrotetion}deg)`;
     min.style.transform=`rotate(${mrotetion}deg)`;
     second.style.transform=`rotate(${srotetion}deg)`;
}, 1000)