function RedirectionJavascript(){
    document.location.href="./maTodoList.html";
  }

function createTodo(todoTxt){ 
//generer tout ca ds une string
// backtics permettent saut de ligne, injecter des variables, faire des etiquettes
const todoHTML =` 
    <div class="todo">
        <input type="checkbox" id="checkbox-${cpt}">
        <label for="checkbox-${cpt}">${todoTxt.label}</label>
        <button onclick="closeTodo(this.previousElementSibling.previousElementSibling,
            this.parentNode)" class="bt-close">&times;</button>
    </div>
`; 
    document.querySelector('#todoList').innerHTML += todoHTML;   //ajout ds html
}

function checkValue(val){
    return val.length > 2; 
}

function closeTodo(checkboxTag, todoTag){
    const response =confirm("Veux tu vraiment supprimer cette tache ?"); 
    if (checkboxTag.checked) {
        if (!response) return; 
        document.querySelector('#todoList').removeChild(todoTag);  
    }else {
        if (!response) return; 
        document.querySelector('#todoList').removeChild(todoTag);  
    }
}