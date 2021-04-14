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


// const imgBoxes = document.querySelectorAll('.box');
// const modal = document.querySelector('.modal--container');
// const img = document.querySelector('#img');

// imgBoxes.forEach((el, index) => {
//     el.addEventListener('click', function(){
//         img.src = `./images/big/${index}.jpg`;
//         modal.classList.add('open');
//     })
// });

// modal.addEventListener('click', function(e){
//     if(e.target.classList.contains('open')){
//         e.target.classList.remove('open');
//     }
// })


// let bla = /$[a-z]/


// Create and deleting Dom elements

// append - child element gargaj ogno

// remove - ustgana
// rgb(0-255,0-255,0-255)

// insertAdjacentHTML

const addBtn = document.querySelector('#addBox');
const container = document.createElement('div');
const modalBox = document.querySelector('.modalBox');
container.className = "container";
document.body.appendChild(container);



let boxNum = 0;
addBtn.onclick = function(){
    let rNumber = Math.trunc(Math.random() * 256);
    let gNumber = Math.trunc(Math.random() * 256);
    let bNumber = Math.trunc(Math.random() * 256);
    
    let newBox = document.createElement('div');
    let deleteBtn = document.createElement('button');
    deleteBtn.className = "deleteBtn";
    deleteBtn.textContent = 'x';
    newBox.className = `box box-${boxNum}`;
    newBox.style.backgroundColor = `rgb(${rNumber}, ${gNumber}, ${bNumber})`;
    newBox.appendChild(deleteBtn);
    container.appendChild(newBox);
    boxNum++;



    newBox.addEventListener('click', function(e){
        if(e.target.classList.contains('deleteBtn')){
            e.target.parentNode.remove();
        } else {
            modalBox.children[0].style.backgroundColor = e.target.style.backgroundColor;
            modalBox.classList.add('open');
        }
    })
}

document.addEventListener('click', function(e){
    if(e.target.classList.contains('open')){
        modalBox.classList.remove('open');
    }
})

