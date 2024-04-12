const url = 'http://localhost:3000/products';


const productContainer = document.querySelector('.products')
const writeData = (data) => {
    data.forEach(({brand,price,status,image}) => {
        productContainer.innerHTML += `<div class="guitars">
        <img src="${image}" alt="">
        <h2>${brand}</h2>
        <p>${price}</p>
        <p>${status}</p>
        <button class="btn">Add to Favorites</button>
        <button class="btn btn-danger" onclick="deleteGood()"> Sold <button>
    </div>`;
    });
};

const deleteGood = () => {
    Swal.fire({
        position: "top-end",
        icon: "success",
        title: "This Babe has been SOLD",
        showConfirmButton: false,
        timer: 1500
      });
}

 

// *************************************AXIOS AWAIT Keyword
const getAwaitAxios = async() => {
    const {data} = await axios (url)
    writeData(data);
};

getAwaitAxios()

// *************************************AXIOS THEN Keyword

// const AxiosThen = async () => {
//     const data = axios(url)
//     data.then(({data}) => {
//         writeData(data)
//     })
// };

// AxiosThen();

//****************************************************Fetch */ 

// const Fetch = () => {
//     fetch(url).then((response) => { 
//         return response.json()
//     }).then((data) => {
//         writeData(data)
//     }).catch((error) => {
//         alert("diqqetli OL!!!")
//     })
// }
// Fetch()
