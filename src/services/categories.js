//render de la vista categorías
export const renderCategories = ()=>{
    //Tomamos elementos de la lista en el html
    const ulList = document.getElementById("listFilter");
    //Creamos esos elementos dentro de la lista
    ulList.innerHTML = `
    <li id="Todo">Todos los productos</li>
    <li id="Hamburguesas">Hamburguesas</li>
    <li id="Papas">Papas</li>
    <li id="Gaseosas">Gaseosas</li>
    <li id="mayorPrecio">Mayor Precio</li>
    <li id="menorPrecio">Menor Precio</li>

    `;
    //Añadimos dinámicamente el evento click
    const liElements = ulList.querySelectorAll("li");
    liElements.forEach((liElement)=>{
        liElement.addEventListener("click", ()=>{
            handleClick(liElement)
        });
    });
    //verificamos y manejamos el estilo del elemento activo
    const handleClick = (elemento) =>{
        liElements.forEach((el)=>{
            if(el.classList.contains('liActive')){
                el.classList.remove("liActive");
            }else{
                if(elemento === el){
                    el.classList.add("liActive");
                }
            }
        })
    }


};