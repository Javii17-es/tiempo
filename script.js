let timer;
let hours = 0;
let minutes = 0;
let seconds = 0;

function startTimer() {
    timer = setInterval(updateTimer, 1000);
}

function stopTimer() {
    clearInterval(timer);
}

function resetTimer() {
    stopTimer();
    hours = 0;
    minutes = 0;
    seconds = 0;
    updateTimer();
}

function updateTimer() {
    const formattedHours = pad(hours);
    const formattedMinutes = pad(minutes);
    const formattedSeconds = pad(seconds);

    document.getElementById('hours').innerText = formattedHours;
    document.getElementById('minutes').innerText = formattedMinutes;
    document.getElementById('seconds').innerText = formattedSeconds;

    updatePageTitle();

    if (hours === 0 && minutes === 0 && seconds === 0) {
        stopTimer();
    } else {
        if (seconds === 0) {
            if (minutes === 0) {
                hours--;
                minutes = 59;
                seconds = 59;
            } else {
                minutes--;
                seconds = 59;
            }
        } else {
            seconds--;
        }
    }
}

function pad(value) {
    return value < 10 ? `0${value}` : value;
}

function setTime(unit) {
    let unitName;

    switch (unit) {
        case 'hours':
            unitName = 'horas';
            break;
        case 'minutes':
            unitName = 'minutos';
            break;
        case 'seconds':
            unitName = 'segundos';
            break;
        default:
            unitName = '';
    }

    const newValue = prompt(`Ingresa los ${unitName}:`);
    const numericValue = parseInt(newValue, 10);

    if (!isNaN(numericValue) && numericValue >= 0) {
        if (unit === 'hours') {
            hours = numericValue;
        } else if (unit === 'minutes') {
            minutes = numericValue;
        } else if (unit === 'seconds') {
            seconds = numericValue;
        }
        updateTimer();
    }
}

function updatePageTitle() {
    const formattedHours = pad(hours);
    const formattedMinutes = pad(minutes);
    const formattedSeconds = pad(seconds);

    document.title = `Temporizador - ${formattedHours}:${formattedMinutes}:${formattedSeconds}`;
}

function toggleSettingsMenu() {
    const settingsMenu = document.getElementById('settingsMenu');
    settingsMenu.style.display = settingsMenu.style.display === 'none' ? 'flex' : 'none';
}

function changeBackgroundColor() {
    const colorPicker = document.getElementById('colorPicker');
    document.body.style.backgroundColor = colorPicker.value;
}

function openColorPicker() {
    const colorPicker = document.getElementById('colorPicker');
    colorPicker.click();
}

function showCreatorInfo() {
    alert('Creador: Javi\nInsta: _javii_.17');
}
