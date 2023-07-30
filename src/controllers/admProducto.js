
import {clientServices} from "../services/httpClient.js";
const listProducts = await clientServices.listaProductos();

const containerProducto = document.querySelector(".producto__container");
const createEtiqueta =({id,urlImg,nombre,precio})=>{
    const tags = document.createElement("div");
    tags.classList.add("container__item");
    const items =`
        <img class="img" src="${urlImg}" alt="">
        <span class="item__name">${nombre}</span>
        <span class="item__precie">$ ${precio}</span>
        <div class="options">
            <button  onclick="redirigir('${id}')" class="btnopt">Editar</button>
            <button  class="btnopt">Eliminar</button>
        </div>
    `
    tags.innerHTML = items;
    return tags;
}

listProducts.forEach(product => {
    let tag = createEtiqueta(product);
    containerProducto.appendChild(tag);
});

