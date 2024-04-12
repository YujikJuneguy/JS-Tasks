const url = 'http://localhost:3000/products';


const productContainer = document.querySelector('.products')
const writeData = (data) => {
    data.forEach(({id,brand,price,status,image}) => {
        productContainer.innerHTML += `<div class="guitars">
        <img src="${image}" alt="">
        <h2>${brand}</h2>
        <p>${price}</p>
        <p>${status}</p>
        <button class="btn">Add to Favorites</button>
        <button class="btn btn-danger" onclick="deleteGood('${id}')"> Sold <button>
    </div>`;
    });
};

// deleteItem

const deleteGood = (id) => {
    Swal.fire({
        title: "This Babe has been SOLD",
        showClass: {
          popup: `
            animate__animated
            animate__fadeInUp
            animate__faster
          `
        },
        hideClass: {
          popup: `
            animate__animated
            animate__fadeOutDown
            animate__faster
          `
        }
      }).then((result) => {
        axios.delete(`${url}/${id}`)
      }).finally(() => { 
          location.reload();
      })     
        } 
      
    // getItem
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
