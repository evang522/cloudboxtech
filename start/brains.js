    
    let setTime = () => {
        let timeP = new Date;
        let zeroVar = timeP.getMinutes().toString();
        if (zeroVar.length == 1) {
            zeroVar = "0" + zeroVar;
        }
        document.getElementById('time').innerHTML = `${timeP.toDateString()} <br> ${timeP.getHours()}:${zeroVar}`;
        // test to ensure interval is executing
        // console.log('timeproof');
    }
    
    let doMagic = () => {
        let today = new Date;
        let stat = today.getHours();
        // test to ensure interval is executing
        // console.log('proof');

        if (stat >= 4 && stat < 12) {
            document.body.style.backgroundImage = "url('./files/morning.jpg')";
            document.getElementById('greeting').innerHTML = "Guten Morgen";
        } else if (stat >= 12 && stat <= 17) {
            document.body.style.backgroundImage = "url('./files/afternoon.jpg')";
            document.getElementById('greeting').innerHTML = "Guten Tag";
        } else if (stat > 17 && stat < 24 || stat >0 && stat < 4) {
            document.body.style.backgroundImage = "url('./files/evening.jpg')";
            document.getElementById('greeting').innerHTML = "Guten Abend";
        }

    };

setTime();
doMagic();    
window.setInterval(setTime, 1000);
window.setInterval(doMagic, 1000);