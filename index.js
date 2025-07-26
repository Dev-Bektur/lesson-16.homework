// CRUD
// C - create POST
// R - read GET
// U - update PUT, PATCH
// D - Delete DELETE

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/greenshop"
const result = document.querySelector(".result")

async function getProduct() {
    try {
        const res = await fetch(API) 
        // console.log(res);
        const data = await res.json()
        // console.log(data);
        showProduct(data)
    } catch (error) {
        result.innerHTML = "404 NOT FOUND"
        console.log(error.message);
    }
} 

getProduct()


function showProduct(list) {
    console.log("wait");
    console.log(list);
    
    result.innerHTML = list.map((item) => {
        return`
        <div class="card">
        <img src="${item.image}"/>
        <div class="name">
        <h2>${item.title}</h2>
        <p class="price">${item.price}</p>
        </div>

        <div class="btns">
        <a href="./create.html"><button class="btn-1">Update</button></a>
        <button class="btn-2">Delete</button>
        </div>
        </div>
        `
    }).join()
}
