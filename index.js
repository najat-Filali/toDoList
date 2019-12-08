/*const divTodo = document.createElement('div'); 
const checkboxTodo = document.createElement('input'); 
const labelTextTodo = document.createElement('label'); 
const btCloseTodo = document.createElement('button'); 

divTodo.className = 'todo'; // ajout des propriétes
checkboxTodo.type = 'checkbox';
checkboxTodo.id = 'checkbox'; 
labelTextTodo.htmlFor = 'checkbox';
labelTextTodo.textContent = 'Lorem ipsum dolor sit amet.';
btCloseTodo.className = 'bt-close';

divTodo.appendChild(checkboxTodo); //imbrication ds div des éléménts
divTodo.appendChild(labelTextTodo); 
divTodo.appendChild(btCloseTodo); 

console.log(divTodo); // verfication de  l'imbrication
// equivalent HTML ci-dessous
/*
 <div class="todo">
 <input type="checkbox" id="checkbox">
 <label for="checkbox">Lorem ipsum dolor sit amet.</label>
 <button class="bt-close" >&times;</button>
</div>


// ajout des éléments ds html
document.querySelector('#todoList').appendChild(divTodo);

*/

//fonction pour eviter de repeter toute la structure du dessus 
// permet de dupliquer l'element en creant a chaque fois un nouvel élément
/*function createTodo(){
    const divTodo = document.createElement('div'); 
    const checkboxTodo = document.createElement('input'); 
    const labelTextTodo = document.createElement('label'); 
    const btCloseTodo = document.createElement('button'); 
    
    divTodo.className = 'todo'; // ajout des propriétes
    checkboxTodo.type = 'checkbox';
    checkboxTodo.id = 'checkbox'; 
    labelTextTodo.htmlFor = 'checkbox';
    labelTextTodo.textContent = 'Lorem ipsum dolor sit amet.';
    btCloseTodo.className = 'bt-close';
    
    divTodo.appendChild(checkboxTodo); //imbrication ds div des éléménts
    divTodo.appendChild(labelTextTodo); 
    divTodo.appendChild(btCloseTodo); 
    
    console.log(divTodo); // verfication de  l'imbrication
  
//generer tout ca ds une string
// backtic permettent saut de ligne, injecter des variables, faire des etiquettes
const todoHTML =` 
    <div class="todo">
        <input type="checkbox" id="checkbox">
        <label for="checkbox">Lorem ipsum dolor sit amet.</label>
        <button class="bt-close">&times;</button>
    </div>
`; 

    document.querySelector('#todoList').appendChild(divTodo);
}
/* acces au formulaire
document.forms[0]; //va chercher le formulaire a indice 0, soit le premier
document.forms['form-add-todo']; //autre facon d'acceder au form comme un objet
document.forms.formAddTodo; //autre facon d'acceder au form avec attribut "name" ds html(seulement avec camelCase)
*/
/*
document.forms['form-add-todo'].addEventListener( 
    'submit',               //événement que je veut écouter
    function() {            // comportement lors de l'evenement
        createTodo(); 
    }
);

*/


// la meme chose refactoré 

function createTodo(todoTxt){
  
//generer tout ca ds une string
// backtic permettent saut de ligne, injecter des variables, faire des etiquettes
const todoHTML =` 
    <div class="todo">
        <input type="checkbox" id="checkbox">
        <label for="checkbox">${todoTxt}</label>
        <button onclick="closeTodo(this.previousElementSibling.previousElementSibling,
            this.parentNode)" class="bt-close">&times;</button>
    </div>
`; 

    document.querySelector('#todoList').innerHTML += todoHTML;   //ajout de html
}

function checkValue(val){
    return val.length > 2; 
}

function closeTodo(checkboxTag, todoTag){
    if (checkboxTag.checked) {
        const response =confirm("Veux tu vraiment supprimer cette tache ?"); 
        if (!response) return; 
    }
    document.querySelector('#todoList').removeChild(todoTag);
}

document.forms['form-add-todo'].addEventListener( 
    'submit',               //événement que je veux écouter
    function(e) {           // comportement lors de l'evenement
        e.preventDefault();   
        if(checkValue(this.todoTxt.value)){
            createTodo(this.todoTxt.value); 
        } else{
            const errorTxt = document.querySelector('.error'); 
            errorTxt.style.display ='block'; 
            setTimeout(()=>{
                errorTxt.style.display = 'none';
            },2500); 
            }    
    }
);