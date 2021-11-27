function firstVariable(a, b) {
    if (b == 1) {
        return a;
    } else {
        return firstVariable(a + 1, b - 1)
    }
}

function secondVariable(a, b) {
    if (a == b) {
        return a
    } else if (a < b) {
    return secondVariable(a + 1, b)
    } else if (a > b) {
        return secondVariable(a - 1, b)
    }
}

/* ================================================================================================== */

let clockDiv = document.getElementById("clock")
let btn = document.getElementById("button")

function clock() {
        
    let date = new Date();
   
    let hour = (date.getHours() < 10) ? '0' + date.getHours() : date.getHours();
    let minute = (date.getMinutes() < 10) ? '0' + date.getMinutes() : date.getMinutes();
    let sec = (date.getSeconds() < 10) ? '0' + date.getSeconds() : date.getSeconds();
   
    clockDiv.innerHTML = `${hour}:${minute}` + `<span>:${sec}</span> `;
}
    btn.addEventListener('click', (e) => {
        let target = e.target
        if (target !== clockDiv) {
            toggleSeconds(clockDiv)
        }
    })

    const toggleSeconds = (elem) => elem.classList.toggle("off")
   

    
    setInterval(clock, 250)


