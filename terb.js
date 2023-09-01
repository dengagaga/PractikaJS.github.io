const inputOne = document.getElementById('title')
const btnAdd = document.getElementById('create')
const listElement = document.getElementById('list')
const notes = [
    {
        title: 'Записать блок про массивы',
        completed: false,
    },
    {
        title: 'Рассказать теорию про объекты',
        completed: true,
    },
]

function render() {
    listElement.innerHTML = ''
    for (let i = 0; i < notes.length; i++) {
        listElement.insertAdjacentHTML('beforeend', 
        getNoteTemplete(notes[i], i))
    }
    // listElement.innerHTML = Полностью переписывает весь HTML
    inputOne.value = ''
}
render()

btnAdd.onclick = function () {
    if (inputOne.value.length === 0 ) {
        return  
    } 
    const newNote = {
        title: inputOne.value,
        completed: false,
    }
    notes.push(newNote)
    render()
    inputOne.value = ''


    // listElement.innerHTML = Полностью переписывает весь HTML
}

listElement.onclick = function (event) {
   if (event.target.dataset.index) {
        const index = Number(event.target.dataset.index)
        const type = event.target.dataset.type
        if (type === 'toggle') {
            notes[index].completed = !notes[index].completed
        } else if (type === 'delete') {
            notes.splice(index, 1)
        }
        render()
    } 
}



function getNoteTemplete(i, index) {
    
    return `<li class="list-group-item d-flex justify-content-between align-items-center">
        <span class="${i.completed ? 'text-decoration-line-through' : ''}">${i.title}</span>
        <span>
            <span class="btn btn-small btn-success" data-index="${index}" data-type="toggle">&check;</span>
            <span class="btn btn-small btn-danger" data-type="delete" data-index="${index}">&times;</span>
        </span>
    </li>`
}




