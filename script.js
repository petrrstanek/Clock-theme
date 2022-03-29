const months = ['Led', 'Úno', 'Bře', 'Dub', 'Kvě', 'Čer', 'Čvn', 'Srp', 'Zář', 'Říj', 'Lis', 'Pro'];
const days = ['Pondělí', 'Úterý', 'Středa', 'Čtvrtek', 'Pátek', 'Sobota', 'Neděle'];

const btnDark = document.querySelector('.toggler-dark');
const btnLight = document.querySelector('.toggler-light');
const buttons = document.querySelectorAll('.toggler');
const date = document.querySelector('.date');
const time = document.querySelector('.time');
const secHand = document.querySelector('.second-hand');
const minHand = document.querySelector('.min-hand');
const hourHand = document.querySelector('.hour-hand');

let clicker = 1;
buttons.forEach(button => {
    button.addEventListener('click', (e) => {
        const body = document.body
        body.classList.toggle('dark-mode')
        clicker++;
        if(clicker % 2 == 0){
            btnLight.style.display = 'block';
            btnDark.style.display = 'none';
        } else {
            btnLight.style.display = 'none';
            btnDark.style.display = 'block'
        }
    })
})

function runClock() {
    const srcd = new Date();
    const seconds = srcd.getSeconds();
    const mins = srcd.getMinutes();
    const hour = srcd.getHours();

    const secRotate = ((seconds / 60) * 360) + 90;
    const minRotate = ((mins / 60) * 360) + ((seconds / 60) * 6) + 90;
    const hourRotate = ((hour / 12) * 360) + ((mins / 60) * 30) + 90;

    if(seconds == 0){
      secHand.classList.add('no-transition')
    } else{
      secHand.classList.remove('no-transition')
    }

    minHand.style.transform = `rotate(${minRotate}deg)`;
    secHand.style.transform = `rotate(${secRotate}deg)`;
    hourHand.style.transform = `rotate(${hourRotate}deg)`;
}

function updateTime(){
    const srcd = new Date();
    const numDay = srcd.getDate();
    const month = months[srcd.getMonth()];
    const nameDay = days[srcd.getDay() - 1];
    const string = `${nameDay}, ${month} ${numDay}`;
    let minutes = srcd.getMinutes();
    let hours = srcd.getHours();
    
    if(minutes < 10){
        minutes = '0' + minutes;
    }
    if(hours < 10){
        hours = '0' + hours;
    }

    let now = `${hours}:${minutes}`;
    date.innerHTML= `${nameDay}, ${month} <span class="circle">${numDay}</span>`;
    time.innerText = now;
}

setInterval(runClock, 1000)
setInterval(updateTime, 1000)