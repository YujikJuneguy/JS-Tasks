const url ='https://dummyjson.com/products'
const container =  document.querySelector('.cards')

const source = new XMLHttpRequest();
let users = [];
source.open("GET",url);
source.onreadystatechange = () => { 
    if (source.readyState === 4) {
        const {products} =JSON.parse(source.response);
        products.forEach(({ title, description, price, discountPercentage, brand, thumbnail }) => {
            container.innerHTML += `<div class="card">
            <h2>${title}</h2>
            <p>${description}</p>
            <p>${price}</p>
            <p>${discountPercentage}</p>
            <h3>${brand}</h3>
            <img src="${thumbnail}" alt="${title}">
            </div>`;
        });
            
        }
}
source.send() 


