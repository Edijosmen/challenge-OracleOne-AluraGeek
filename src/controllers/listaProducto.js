import {clientServices} from "../services/httpClient.js";
const listProducts = await clientServices.listaProductos();

var listConsole =listProducts.filter((product) => product.categoria === "Consola");
var listSome =listProducts.filter((product) => product.categoria === "Diversos");
var listStarwars = listProducts.filter((product) => product.categoria === "StarWars");

var starwars = listStarwars.slice(0,5);
var consoles = listConsole.slice(0,5);
var somes = listSome.slice(0,5);

const containerStarwars = document.querySelector(".starwars__container");

const containerConsole = document.querySelector(".console__container");
const containerSome = document.querySelector(".some__container");

const seeAllStarwars = document.querySelector(".starwars__link");
const seeAllSconsole = document.querySelector(".console__link");
const seeAllSome = document.querySelector(".some__link");

const createEtiqueta =({urlImg,nombre,precio})=>{
    const tags = document.createElement("div");
    tags.classList.add("container__item");
    const items =`
        <img src="${urlImg}" alt="">
        <span class="item__name">${nombre}</span>
        <span class="item__precie">$ ${precio}</span>
       
    `
    tags.innerHTML = items;
    return tags;
}



starwars.forEach(product => {
    let tag = createEtiqueta(product);
    containerStarwars.appendChild(tag);
});
consoles.forEach( console =>{
    let tag = createEtiqueta(console);
    containerConsole.appendChild(tag);
});
somes.forEach(some =>{
    let tag = createEtiqueta(some);
    containerSome.appendChild(tag);
});

seeAllStarwars.addEventListener("click",e =>{
    const children = containerStarwars.querySelectorAll(".container__item");
    console.log(children);
    children.forEach(element => {
        element.remove();
    });
    console.log(listStarwars);
    listStarwars.forEach(starwars => {
        let tag = createEtiqueta(starwars);
        containerStarwars.appendChild(tag);
    });
});
seeAllSconsole.addEventListener("click",e =>{
    const children = containerConsole.querySelectorAll(".container__item");
    children.forEach(element => {
        element.remove();
    });
    listConsole.forEach(console => {
        let tag = createEtiqueta(console);
        containerConsole.appendChild(tag);
    });
});
seeAllSome.addEventListener("click",e =>{
    const children = containerSome.querySelectorAll(".container__item");
    children.forEach(element => {
        element.remove();
    });
    listSome.forEach(some => {
        let tag = createEtiqueta(some);
        containerSome.appendChild(tag);
    });
});

  


