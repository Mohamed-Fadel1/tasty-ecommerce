
// ! ====== dark and light mode =======
const toggle = document.getElementById("toggle");

toggle.addEventListener("click" , ()=>{
    document.body.classList.toggle("dark");
    toggle.classList.toggle("active-theme");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("mode" , "dark");
    } else {
        localStorage.setItem("mode" , "light");
    }

})


if (localStorage.getItem("mode") === "dark") {
    document.body.classList.toggle("dark");
    toggle.classList.toggle("active-theme");
}



//! ==== main array of objects ====

let products = [
    {
        id: 1,
        name: "Barbecue Salad",
        img: "./imgs/plate1.png",
        price: "22.22",
        description: "Delicious dish"
    },
    {
        id: 2,
        name: "Salad with fish",
        img: "./imgs/plate2.png",
        price: "12.00",
        description: "Delicious dish"
    },
    {
        id: 3,
        name: "Spinach Salad",
        img: "./imgs/plate3.png",
        price: "9.50",
        description: "Delicious dish"
    },
    {
        id: 4,
        name: "Italian Salad",
        img: "./imgs/5.png",
        price: "10.",
        description: "Delicious dish"
    },
    {
        id: 5,
        name: " Pasta Salad",
        img: "./imgs/1.png",
        price: "15.25",
        description: "Delicious dish"
    },
    {
        id: 6,
        name: "Chicken Spicy ",
        img: "./imgs/2.png",
        price: "14.75",
        description: "Delicious dish"
    },
    {
        id: 7,
        name: "Chicken Salad",
        img: "./imgs/3.png",
        price: "11.50",
        description: "Delicious dish"
    },
    {
        id: 8,
        name: "Lentil Soup",
        img: "./imgs/4.png",
        price: "7",
        description: "Delicious dish"
    },
    
];

// ! ==== Check in Local Storage ====


let basket = JSON.parse(localStorage.getItem("products")) || [];


if (!Array.isArray(basket)) {
    basket = [];
}


let cartProducts = document.querySelector(".cart-products");
let label = document.querySelector(".label-cart");
let quantity = document.querySelector(".quantity");


// ! ==== showCart Function ====

let showCart = () => {
    if (basket.length !== 0) {
        cartProducts.innerHTML = basket.map((product) => {

            let search = products.find((x) => x.id === product.id);
            return `
                <div class="cart-item">
                    <img src="${search.img}" alt="${search.name}">
                    <div class="details">
                        <div class="name-price">
                            <p>${search.name}</p>
                            <span>$${search.price}</span>
                            <i onclick="closeItem(${product.id}); showToastt()" class='bx bx-x close'></i>
                        </div>
                        <div class="buttons">
                    
                            <i onclick = "decrement(${product.id})" class='bx bx-minus'></i>
                            <i>${product.item}</i>
                            <i onclick="increment(${product.id})" class='bx bx-plus'></i>
                        </div>
                        <h3>$${search.price*product.item}</h3>
                    </div>
                </div>
            `;
        }).join("");  
    } else {
        cartProducts.innerHTML = `
            <h1>Cart Is Empty</h1>
            <a href="index.html"><button class="btn-home">Back To Home</button></a>
        `;
    }
};
showCart();



// ! ==== Calculation Function ====
let calculation = () => {
    let calc = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
    quantity.innerHTML = calc;
};


calculation();


// ! ==== Increment Function ====

let increment = (id)=>{
    let search = basket.find((x)=>x.id === id)


   if (search === undefined) {
    basket.push({
        id:id ,
        item :1 ,
    })
   } else {
    search.item+=1
   }

  
showCart()
calculation();
totalBill()

localStorage.setItem("products", JSON.stringify(basket));
    
}


// ! ==== Decrement Fanction ====

let decrement = (id)=>{
    let search = basket.find((x)=>x.id === id)

if (search === undefined) return
  else  if (search.item === 0) {
   return
    } else {
     search.item-=1
    }


   basket = basket.filter((x)=> x.item !==0)
   
 
 
 showCart()
 calculation();
totalBill()
 localStorage.setItem("products", JSON.stringify(basket));
}


// ! ==== Close Item ====

let closeItem = (id)=>{
   basket = basket.filter((x)=>x.id !== id)
   showCart()
   calculation()
   totalBill()
   localStorage.setItem("products", JSON.stringify(basket));
    
}

// ! ==== total bill Function ====

let totalBill = ()=>{
    
    if (basket.length !==0){
        let amount = basket.map((x)=>{
            let search = products.find((y)=> y.id === x.id)
            return search.price*x.item
        }).reduce((x,y)=> x + y)
        
    
        label.innerHTML = `
             <h2 class="amount">Total Bill : $ ${amount}</h2>
                <button class="check">checkout</button>
                <button onclick="clearAll()" onclick="clearAllCart()" class="clear">Clear Out</button>
        `
    } else {
        label.innerHTML = "";
    }

}

totalBill()


// ! ==== Clear All Items ====

let clearAll = ()=>{
basket = [];
showCart()
calculation()
totalBill()
localStorage.setItem("products", JSON.stringify(basket));

}



// ^ ======= Show Toast Notification ==========

let toastBox = document.getElementById("toastBoxx");
let closeError = "Product removed successfully";

let showToastt = () => {
    let toastt = document.createElement("div");
    toastt.classList.add("toastt");
    toastt.innerHTML = "<i class='bx bxs-check-circle'></i> " + closeError;

    toastBox.appendChild(toastt);

    setTimeout(() => {
        toastt.remove();
    }, 3000);
};


// ^ ======= loader =======
let loader = document.getElementById("loader");

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 250);
});
