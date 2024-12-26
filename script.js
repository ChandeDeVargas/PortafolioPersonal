function scrollToElement(elementSelector, instance = 0){
    //Seleccionar todos los elementos de ese macht con el selector
    const elements = document.querySelectorAll(elementSelector);
    if(elements.length > instance){
        //Si el elemento existe, lo selecciono y lo muevo a la vista
        elements[instance].scrollIntoView({behavior: 'smooth'});
    }

}
const link1 = document.getElementById("link1")
const link2 = document.getElementById("link2")
const link3 = document.getElementById("link3")

link1.addEventListener('click', () => {
    scrollToElement('.header');
});

link2.addEventListener('click', () => {
    scrollToElement('.header', 1);
});

link3.addEventListener('click', () => {
    scrollToElement('.column');
});