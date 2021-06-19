// const carrito = document.getElementById('carrito');
// const cursos = document.getElementById('lista__cursos');
// const listaCursos = Document.querySelector('#listaCarrito tbody');
// const vaciarCarro = document.getElementById('vaciarCarro');

// cargarListeners();

// // Listeners
// function cargarListeners() {
//     cursos.addEventListener('click', comprarCurso);

//     // Eliminar Curso del DOM
//     carrito.addEventListener('click', eliminarCurso);

//     // Limpiar el carrito
//     vaciarCarro.addEventListener('click', vaciarCarrito);

//     // Pintar Info de LocalStorage
//     document.addEventListener('DOMContentLoaded', leerLocalStorage);
// }

// // Funciones

// function comprarCurso(e) {
//     e.preventDefauld();

//     // Delegation Cursos
//     if (e.target.classList.contains('agregar__carrito')) {
//         let curso = e.target.parentElement.parentElement;

//         leerDatosCurso(curso);
//     }
// };

const AddCar = document.querySelectorAll('.Agregar');
AddCar.forEach(AddCarrito => {
    AddCarrito.addEventListener('click', AddCarClicker);
});

const rowCarContainer = document.querySelector('.tabla tbody');

function AddCarClicker(e) {
    const button = e.target;
    const item = button.closest('.hijo');

    const itemTittle = item.querySelector('.hijo__tittle').textContent;
    const itemPrice = item.querySelector('.hijo__precio').textContent;
    const itemImage = item.querySelector('.hijo__img').src;
    

    addItemCar(itemTittle, itemPrice, itemImage);
}

function addItemCar(itemTittle, itemPrice, itemImage){
    const rowCar = document.createElement('div');
    const rowCarContent = `
    <div class="item">
    <div class="item__img">
        <img src="${itemImage}" alt="">
    </div>
    <div class="item__tittle">
        <h3>${itemTittle}</h3>
    </div>
    <div class="item__price">
        <span>${itemPrice}</span>
    </div>
    <div class="item__btn">
        <button class="item__btnn">X</button>
    </div>
</div>
    `;
    rowCar.innerHTML = rowCarContent;
    rowCarContainer.append(rowCar);

    rowCar.querySelector('.item__btnn').addEventListener('click', removeRowCar);

    const borrar = document.getElementById('borrar');
    borrar.addEventListener('click', () => {
        rowCar.remove();
    });

}

function removeRowCar(e) {
    const buttonclicker = e.target;
    buttonclicker.closest('.item').remove();
};


// function removeRowAll(e) {
//     const buttonRemove = e.target;
//     buttonRemove.closest().remove();
// }