// Event, Selector

// get elements

// let domEl = document.getElementsByClassName('boc'); // array
// let singleBox = document.getElementById('box');

// singleBox.addEventListener('dblclick', function(){
//     console.log('id check')
// })


// domEl[0].textContent = 'blablba';

// domEl[2].onclick = function

// for(let i = 0; i < domEl.length; i++){
//     domEl[i].addEventListener('mouseenter', function(){
//         domEl[i].classList.add('active');
//     });

//     domEl[i].addEventListener('mouseleave', function(){
//         domEl[i].classList.remove('active');
//     });
// }




// const btn = document.getElementById('modal');
// const modal = document.querySelector('.modal--container');
// const modalBox = document.querySelector('.modal__box');
// const close = document.querySelector('#close');

// btn.addEventListener('click', function(){
//     modal.classList.add('open');
//     modalBox.style.transform = 'translateY(0)';
// });

// close.addEventListener('click', function(){
//     modalBox.style.transform = 'translateY(-100px)';
//     modal.classList.remove('open');
// })


const imgBoxes = document.querySelectorAll('.box');
const modal = document.querySelector('.modal--container');
const img = document.querySelector('#img');

imgBoxes.forEach((el, index) => {
    el.addEventListener('click', function(){
        img.src = `./images/big/${index}.jpg`;
        modal.classList.add('open');
    })
});

modal.addEventListener('click', function(e){
    if(e.target.classList.contains('open')){
        e.target.classList.remove('open');
    }
})