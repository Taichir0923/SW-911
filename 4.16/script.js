const input = document.querySelector('#input');
const insertBtn = document.querySelector('#insertBtn');
const taskContainer = document.querySelector('#container');

const tasks = [];
let id = 0;

insertBtn.addEventListener('click', () => {
    let task = {
        ajil: input.value,
        status: false,
        deleted: false,
        id: id
    }

    tasks.push(task);

    displayTasks(task);

    id++;
});

function displayTasks(task){
    taskContainer.insertAdjacentHTML('beforeend', `
        <div class="w-full transition duration-400 hover:bg-black hover:bg-opacity-50 p-3 hover:text-white cursor-pointer rounded-2xl font-bold flex justify-between items-center overflow-hidden taskContainer">
            <p class="taskDescription">${task.ajil}</p>
            <button class="w-8 h-8 focus:outline-none transition duration-500 hover:bg-red-500 rounded-full font-bold border border-white bg-black bg-opacity-50 text-white transform translate-x-12" id="btn">&times;</button>
        </div>
    `)
}

document.addEventListener('click', e => {
    if(e.target.classList.contains('taskDescription')){
        e.target.classList.add('line-through');

        let olson = tasks.find(el => el.ajil === e.target.textContent);
        olson.status = true;
        console.log(olson);
    }
})

document.addEventListener('click', e => {
    if(e.target.id === 'btn'){
        e.target.parentNode.remove();
    }
})