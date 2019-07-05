let remove = document.querySelectorAll('#tabela-pacientes')

remove.forEach(element => {
    element.addEventListener('dblclick', function(){
        console.log(this)
        this.remove()
    })
});