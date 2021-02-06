// main.js

// TODO
let sound = document.getElementById('horn-sound');
let volNum = document.getElementById('volume-number');
let volSli = document.getElementById('volume-slider');

volNum.addEventListener('input', changeVolumeTxt);
volSli.addEventListener('input', changeVolumeSli);

function changeVolumeTxt(){
    vol = volNum.value;
    sound.volume = vol/100;
    volSli.value = vol;
    changeVolImg(vol);
}

function changeVolumeSli(){
    vol = volSli.value;
    sound.volume = vol/100;
    volNum.value = vol;
    changeVolImg(vol);
}

let volImg = document.getElementById('volume-image');
let play = document.getElementById('honk-btn');

play.addEventListener('click', function(event) {
    event.preventDefault();
    sound.play();
})

function changeVolImg(v){
    if (v==0){
        volImg.src='./assets/media/icons/volume-level-0.svg';
        play.disabled = true;
    }
    else if (v <= 33) {
        volImg.src='./assets/media/icons/volume-level-1.svg';
        play.disabled = false;
    }
    else if (v <= 66) {
        volImg.src='./assets/media/icons/volume-level-2.svg';
        play.disabled = false;
    }
    else {
        volImg.src='./assets/media/icons/volume-level-3.svg';
        play.disabled = false;
    }
}

let soundImg = document.getElementById('sound-image');
let selection = document.getElementsByName('radio-sound');

selection[0].addEventListener('change', function() {
    sound.src = './assets/media/audio/air-horn.mp3';
    soundImg.src = './assets/media/images/air-horn.svg';
    soundImg.alt = 'Air Horn';
})
selection[1].addEventListener('change', function() {
    sound.src = './assets/media/audio/car-horn.mp3';
    soundImg.src = './assets/media/images/car.svg';
    soundImg.alt = 'Car';
})
selection[2].addEventListener('change', function() {
    sound.src = './assets/media/audio/party-horn.mp3';
    soundImg.src = './assets/media/images/party-horn.svg';
    soundImg.alt = 'Party Horn';
})