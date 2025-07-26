const input1 = document.getElementById("input1")
const input2 = document.getElementById("input2")
const input3 = document.getElementById("input3")
const btn1 = document.querySelector(".btn1")

const API = "https://65ab6a1efcd1c9dcffc659a4.mockapi.io/api/v1/greenshop"


async function createProduct () {
  const payload = {
    title: input1.value,
    price: input2.value,
    image: input3.value,

  }
  console.log(JSON.stringify(payload));
  
    try {
        const res = await fetch(API, {
            method: "POST", 
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(payload)
        })
        const data = res.json()

        console.log(data);
        
    } catch (error) {
        console.log(error);
        
    }
}

btn1.onclick = createProduct