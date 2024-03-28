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


// const url = 'https://dummyjson.com/products';
// const container = document.querySelector('.cards');

// fetch(url)
//   .then(response => response.json())
//   .then(data => {
//     const { products } = data;
//     products.forEach(({ title, description, price, discountPercentage, brand, thumbnail }) => {
//       container.innerHTML += `
//         <div class="card">
//           <img src="${thumbnail}" alt="${title}" class="card-img">
//           <div class="card-body">
//             <h2 class="card-title">${title}</h2>
//             <p class="card-description">${description}</p>
//             <p class="card-price">$${price.toFixed(2)}</p>
//             <p class="card-discount">Discount: ${discountPercentage}%</p>
//             <p class="card-brand">Brand: ${brand}</p>
//           </div>
//         </div>
//       `;
//     });
//   })
//   .catch(error => console.error('Error fetching data:', error));




     // const parentElement =document.createElement('div')
            // parentElement.classList.add('card')
            // const h2 = document.createComment ('h2')
            // h2.innerText = title;

            // const h3 = document.createComment ('h')
            // h2.innerText = description;

            // parentElement.append(h2,h3)
            // container.append(parentElement)