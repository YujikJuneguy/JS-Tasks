// const url = "http://localhost:3000/products"
// const guitarsContainer = document.querySelector('.products')

// const writeData = async() => {
//     const {data} = await axios(url)
//     data.forEach(({brand,rating,price,status,image}) => {
//         guitarsContainer.innerHTML += ` <div class="guitars">
//         <img src="${image}" alt="">
//         <h2>${brand}</h2>
//         <h2>${rating}</h2>
//         <span class="fa fa-star checked"></span>
//         <span class="fa fa-star checked"></span>
//         <span class="fa fa-star checked"></span>
//         <span class="fa fa-star checked"></span> 
//         <span class="fa fa-star"></span>
//         <p>${price}</p>
//         <p>${status}</p>
//         <button class="btn">Add to Favorites</button>
//      </div>`
//     });
// }
// writeData()  

//****************************************************Fetch */ 


const url = "http://localhost:3000/products"
const guitarsContainer = document.querySelector('.products')

const writeData =() => {
    fetch(url)
    .then((result) => {
        return result.json();
    })
    .then(({products}) => {
          products.forEach((guitars) => {
            guitarsContainer.innerHTML += ` <div class="guitars">
            <img src="${image}" alt="">
            <h2>${brand}</h2>
            <h2>${rating}</h2>
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span> 
            <span class="fa fa-star checked"></span>
            <span class="fa fa-star checked"></span> 
            <span class="fa fa-star"></span> 
            <p>${price}</p>
            <p>${status}</p>
            <button class="btn">Add to Favorites</button>
         </div>`;
          });
    });
    
};

writeData();