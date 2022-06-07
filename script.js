setInterval(setClock, 1000);

const hourHand = document.querySelector('[data-hour-hand]');
const minuteHand = document.querySelector('[data-minute-hand]');
const secondHand = document.querySelector('[data-second-hand]');

function setClock() {
    // Get current date
    const currentDate = new Date()
    // Assign second / 60
    const seconds = currentDate.getSeconds() / 60;
    // Assign minutes / 60
    const minutes = (seconds + currentDate.getMinutes()) / 60;
    // Assign hours / 12
    const hours = (minutes + currentDate.getHours()) / 12;

    setRotation(secondHand, seconds);
    setRotation(minuteHand, minutes);
    setRotation(hourHand, hours);
    // Square Clock
    const squareClockSecond = document.querySelector('#squareSecond');
    squareClockSecond.innerText = currentDate.getUTCSeconds();
    
    const squareClockMinute = document.querySelector('#squareMinute');
    squareClockMinute.innerText = currentDate.getUTCMinutes();

    const squareClockHour = document.querySelector('#squareHour');
    squareClockHour.innerText = currentDate.getHours();
}

// function to rotate the hands
function setRotation(element, rotation) {
    element.style.setProperty('--rotation', rotation * 360) // Get --rotation var to CSS
}

setClock(); // SO that when it load it will set to corresponding time

