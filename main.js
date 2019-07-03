let textInput = document.querySelector('.itemInput');
let tasks = document.querySelector('.tasks');

 // ajout de la tache 
textInput.addEventListener('keyup', addTask, false);

function addTask(event) {
    if (event.keyCode === 13 && textInput.value.trim().length) {
        const taskText = document.createTextNode(textInput.value);
        const li = document.createElement('li');
        const a = document.createElement('a');
        const icone = document.createElement('i');

        li.appendChild(taskText);
        tasks.appendChild(li);
        li.className="createdli"
        li.appendChild(a);
        icone.className="fas fa-trash-alt";
        a.appendChild(icone);

        textInput.value = '';
    }
}

//tache est barrée lorsque l'on clique sur l'element
tasks.addEventListener('click', function (event) {
    const elem = event.target;

    if (elem.tagName === 'LI') {
        elem.style.textDecoration = 'line-through';
    }
});

// suppression de la tache 
let itemlist =document.querySelector('.createdli');

tasks.addEventListener('click',function(event){
    const element = event.target;
    if(element.tagName==="I"){
        tasks.removeChild(element.parentNode.parentNode);
    } else if(element.tagName === 'A'){
        tasks.removeChild(element.parentNode);
    } 
})



