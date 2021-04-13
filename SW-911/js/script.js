// whiteKeys
const cKey = document.querySelector('#c');
const dKey = document.querySelector('#d');
const eKey = document.querySelector('#e');
const fKey = document.querySelector('#f');
const gKey = document.querySelector('#g');
const aKey = document.querySelector('#a');
const bKey = document.querySelector('#b');
const whiteKeys = document.querySelectorAll('.white__Btn');

// blackKeys
const blackKeys = document.querySelectorAll('.blackBtn');
const cbKey = document.querySelector('#cb');
const dbKey = document.querySelector('#db');
const fbKey = document.querySelector('#fb');
const gbKey = document.querySelector('#gb');
const abKey = document.querySelector('#ab');

// Notes
const cNote = document.querySelector('#cNote');
const dNote = document.querySelector('#dNote');
const eNote = document.querySelector('#eNote');
const fNote = document.querySelector('#fNote');
const gNote = document.querySelector('#gNote');
const aNote = document.querySelector('#aNote');
const bNote = document.querySelector('#bNote');

const cbNote = document.querySelector('#cbNote');
const dbNote = document.querySelector('#dbNote');
const fbNote = document.querySelector('#fbNote');
const gbNote = document.querySelector('#gbNote');
const abNote = document.querySelector('#abNote');

const noteKeys = document.querySelectorAll('.notes');

document.addEventListener('keydown', e => {
    if(e.keyCode === 90){
        cKey.classList.add('pressed');
        cNote.play();
    }
    if(e.keyCode === 88){
        dKey.classList.add('pressed');
        dNote.play();
    }
    if(e.keyCode === 67){
        eKey.classList.add('pressed');
        eNote.play();
    }
    if(e.keyCode === 86){
        fKey.classList.add('pressed');
        fNote.play();
    }
    if(e.keyCode === 66){
        gKey.classList.add('pressed');
        gNote.play();
    }
    if(e.keyCode === 78){
        aKey.classList.add('pressed');
        aNote.play();
    }
    if(e.keyCode === 77){
        bKey.classList.add('pressed');
        bNote.play();
    }
    
    if(e.keyCode === 83){
        cbKey.classList.add('pressed');
        cbNote.play();
    }

    if(e.keyCode === 68){
        dbKey.classList.add('pressed');
        dbNote.play();
    }

    if(e.keyCode === 71){
        fbKey.classList.add('pressed');
        fbNote.play();
    }

    if(e.keyCode === 72){
        gbKey.classList.add('pressed');
        gbNote.play();
    }

    if(e.keyCode === 74){
        abKey.classList.add('pressed');
        abNote.play();
    }
});

document.addEventListener('keyup', function(){
    whiteKeys.forEach((el, index) => {
        el.classList.remove('pressed');
    });

    blackKeys.forEach(el => {
        el.classList.remove('pressed');
    });

    // noteKeys.forEach(el => {
    //     el.pause();
    //     el.currentTime = 0;
    // })
});
