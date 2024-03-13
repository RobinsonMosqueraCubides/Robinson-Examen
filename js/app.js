import './webComponent.js'
let inicio = document.getElementById('btnEmpezar');
inicio.addEventListener('click', function(){
    limpiador();

})
function limpiador() {
    let title = document.querySelector('.titulo');
    let info = document.querySelector('.informacion');
    info.innerHTML = '';
    title.innerHTML = '<mi-componenete></mi-componenete>';
}
