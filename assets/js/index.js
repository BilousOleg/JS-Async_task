'use strict';

const listElement = document.querySelector('.products-list');

fetch('https://fakestoreapi.com/products')
  .then((response) => response.json())
  .then((data) => generateProductCards(data))
  .catch((error) => console.log(error));
