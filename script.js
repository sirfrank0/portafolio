let menuVisible = false;
//Función que oculta o muestra el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList ="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList ="responsive";
        menuVisible = true;
    }
}


const $form = document.querySelector('#form')

$form.addEventListener('submit', handleSubmit)

async function handleSubmit(event){
    event.preventDefault()
    const form = new FormData(this)
    const await = fetch(this.action,
    method: this.method,
    body: form,
    headers: {
        'Accept': 'application/json'
    })

    if (response.ok){
        this.reset
        alert('Gracias por contactarme')
    }
}