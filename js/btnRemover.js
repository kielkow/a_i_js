let remove = document.querySelector('#tabela-pacientes')
remove.addEventListener('dblclick', function(event){
    event.target.parentNode.classList.add('fadeout')

    setTimeout(function(){
        event.target.parentNode.remove()
    }, 500)

})