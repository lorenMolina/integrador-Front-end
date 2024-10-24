import { renderCategories } from "./src/services/categories";
import './style.css';

renderCategories();

/* Product */

const buttonAdd = document.getElementById("buttonAddElement");

buttonAdd.addEventListener('click', () => {
   openModal();
});


/* PopUp */

const cancelButton = document.getElementById("cancelButton");
cancelButton.addEventListener('click', ()=>{
    handleCancelButton();
});

const handleCancelButton = ()=>{
    closeModal();
};

 // Funciones abrir y cerrar modal
const openModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "flex";
};

const closeModal = ()=>{
    const modal = document.getElementById("modalPopUp");
    modal.style.display = "none";
};


//Guardar o modificar elementos
const acceptButton = document.getElementById("acceptButton");
acceptButton.addEventListener('click', ()=>{
    handleSaveOrModifyElements();
});

const handleSaveOrModifyElements = ()=>{

    const nombre = document.getElementById("nombre").value,
    imagen = document.getElementById("img").value,
    precio = document.getElementById("precio").value,
    categoria = document.getElementById("categoria").value;

    console.log({
        nombre,
        imagen,
        precio,
        categoria,
    });
    
    closeModal();

};