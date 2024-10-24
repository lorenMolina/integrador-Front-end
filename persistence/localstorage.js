/* LocalStorage */

//Traer productos de LocalStorage
export const handleGetProductLocalStorage = () => {
  const products = JSON.parse(localStorage.getItem("products"));

  if (products) {
    return products;
  } else {
    return [];
  }
};

//Guardar en LocalStorage
//Recibir un producto
export const setInLocalStorage = (productIn) => {
  //Traer los elementos
  let productsInLocal = handleGetProductLocalStorage();

  const existingIndex = productsInLocal.findIndex((productsLocal) => {
    productsLocal.id === productIn.id;
  });
  //Verificar si el elemento existe
  if (existingIndex !== -1) {
    //Si existe debe reemplazarse
    productsInLocal[existingIndex] = productIn;
  } else {
    //Si no existe debe agregarse
    productsInLocal.push(productIn);
  }

  localStorage.setItem("products", JSON.parse(productsInLocal));
};
