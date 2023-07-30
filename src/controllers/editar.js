import {clientServices} from "../services/httpClient.js";

const obtenerValorParametro = (nombreParametro) => {
    const urlParams = new URLSearchParams(window.location.search);
    return urlParams.get(nombreParametro);
  };
const url =document.querySelector("[data-url]");
const categoria = document.querySelector("[data-categoria]");
const producto = document.querySelector("[data-producto]");
const precio = document.querySelector("[data-precio]");
const description = document.querySelector("[data-descripcion]");
const btn = document.querySelector("[data-save]");

var productodetalle = await clientServices.detalleProductos(obtenerValorParametro('id'));
url.value=productodetalle.urlImg;
categoria.value=productodetalle.categoria;
precio.value=productodetalle.precio;
producto.value=productodetalle.nombre;
description.value = productodetalle.descripcion

btn.addEventListener("click", e => {
    e.preventDefault();
    console.log("hohoa");
    var product = {
        id:obtenerValorParametro('id'),
        url: url.value,
        categoria: categoria.value,
        precio: precio.value,
        nombre: producto.value,
        description: description.value
    }
    console.log(product);
    var respose =   clientServices.updateProductos(product);
  
})


