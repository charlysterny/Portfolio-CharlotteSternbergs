// creo la estructura par abrir el menu con icono en formato mobile de la navbar de el header de la web//

const toggleBtn = document.querySelector('.toggle_btn')
const toggleBtnIcon = document.querySelector('.toggle_btn i')
const bajaMenu = document.querySelector('.baja_menu')

toggleBtn.onclick = function(){
    bajaMenu.classList.toggle('abrir')
    const puedeAbrir = bajaMenu.classList.contains('Abrir')

    toggleBtnIcon.classList = puedeAbrir
    ?'fa-solid fa-xmark'
    :'fa-solid fa-bars'
}