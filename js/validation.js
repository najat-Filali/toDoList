
document.forms.formId.addEventListener(
    'submit',
    function(e){
        e.preventDefault(); 

        if(this.identifiant.value ==="naj" 
        && this.mdp.value ==="123"){
            RedirectionJavascript(); 
        }else{
            alert('erreur dans vos identifiants, réessayez');
        }
    }
);