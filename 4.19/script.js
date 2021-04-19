'use strict';
// Registrate
const username = document.querySelector('#username');
const age = document.querySelector('#age');
const number = document.querySelector('#number');
const select = document.querySelector('#select');
const email = document.querySelector('#email');
const registrate = document.querySelector('#registrate');

// Login
const loginEmail = document.querySelector('#loginEmail');
const loginPass = document.querySelector('#loginPass');
const loginBtn = document.querySelector('#loginBtn');

const users = [];

registrate.addEventListener('click', () => {
    let user = {
        username: username.value,
        age: age.value,
        sex: select.value,
        number: number.value,
        email: email.value,
        id: Math.random().toString().split('.')[1],
        genPass: function(){
            this.password;
            let firstLetter = this.username.toUpperCase()[0];
            this.password = firstLetter+this.number;
            return this.password;
        },
        displayUser: function(){
            const usernameContainer = document.createElement('h1');
            usernameContainer.textContent = this.username;
            usernameContainer.id = this.id;
            usernameContainer.className = 'username';
            document.body.appendChild(usernameContainer);
        }
    }

    user.genPass();
    
    users.push(user);

    user.displayUser();

    username.value = '';
    age.value = null;
    number.value = null;
    email.value = '';
    select.value = 'male';

});

document.addEventListener('click', e => {
    if(e.target.classList.contains('username')){
        let found = users.find(el => el.id === e.target.id);
        let index = users.findIndex(el => el.id === e.target.id);
        if(!found) return false;

        users.splice(index, 1);

        e.target.remove()
    }
})


// CRUD - Create, Read, Update, Delete

loginBtn.addEventListener('click', () => {
    const existingUser = users.find(el => el.email === loginEmail.value);
    if(!existingUser){
        alert('Хэрэглэгч олдсонгүй...'); 
        return false;
    }

    if(existingUser.password === loginPass.value && existingUser.email === loginEmail.value){
        alert(`Welcome ${existingUser.username}`);
    } else {
        alert('Имэйл эсвэл нууц үг буруу байна...')
    }
})

/**
 * 1. Front style /хэрэглэгч устгах/
 * 2. Бүртгэлтэй имэйл болон нууц үгийг шалгана...
 * 3. Хэрэглэгчийн датаг өөрчлөх /засах/
 */