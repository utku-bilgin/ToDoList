let textToDo = document.getElementById('textToDo')
let addToDoButton = document.getElementById('addToDo');
let clearToDoButton = document.getElementById('clearToDo')
let containerToDo = document.getElementById('containerToDo')

addToDoButton.addEventListener('click', function(){

    let textList = document.createElement('p');
    containerToDo.appendChild(textList);
    textList.classList.add('textListStyle')
    textList.innerHTML = textToDo.value;
    textToDo.value = "" ;

    textList.addEventListener('click', function(){
        textList.style.textDecoration = 'line-through'
    })

    textList.addEventListener('dblclick', function(){
        containerToDo.removeChild(textList);
    })

    clearToDoButton.addEventListener('click', function(){
        textList.remove();
    })


})