// ^ ====== dark and light mode =======
const toggle = document.getElementById("toggle");

toggle.addEventListener("click", () => {
    document.body.classList.toggle("dark");
    toggle.classList.toggle("active-theme");

    if (document.body.classList.contains("dark")) {
        localStorage.setItem("mode", "dark");
    } else {
        localStorage.setItem("mode", "light");
    }
});

if (localStorage.getItem("mode") === "dark") {
    document.body.classList.toggle("dark");
    toggle.classList.toggle("active-theme");
}

// ^ ======= menu navbar =======
const menu = document.getElementById("menuu");
let links = document.querySelector(".links ul");

menu.addEventListener("click", () => {
    links.classList.toggle("open");
});

// ^ ======= loader =======
let loader = document.getElementById("loader");

window.addEventListener("load", () => {
    setTimeout(() => {
        loader.style.display = "none";
    }, 250);
});

// ^ ====== product list ======
let menuSection = document.querySelector(".items-menu");
let quantity = document.querySelector(".quantity");


//^ ==== main array of objects ====

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


// ^ ==== Check in Local Storage ====
let basket = JSON.parse(localStorage.getItem("products")) || [];


if (!Array.isArray(basket)) {
    basket = [];
}


// ^ ==== show products function ====

let showProduct = () => {
    menuSection.innerHTML = products.map((product) => {
    
        return `
            <div id="item-${product.id}" class="item-menu">
                <img src="${product.img}" alt="${product.name}">
                <h3>${product.name}</h3>
                <p>${product.description}</p>
                <span>$${product.price}</span>
              <i onclick="addToCart(${product.id}); showToast()" class='bx bx-cart-alt'></i>

            </div>
        `;
    }).join("");
};

showProduct();




// ^ ===== addCart Function ======
let addToCart = (id) => {
    let search = basket.find((x) => x.id === id);

    if (search === undefined) {
        basket.push({
            id: id,
            item: 1
        });
    } else {
        search.item += 1;
    }

    calculation();
    localStorage.setItem("products", JSON.stringify(basket));
};




// ^ Calculation Function
let calculation = () => {
    let calc = basket.map((x) => x.item).reduce((x, y) => x + y, 0);
    quantity.innerHTML = calc;
};

calculation();





// ^ ======= Show Toast Notification ==========

let toastBox = document.getElementById("toastBox")

let showToast = ()=>{
    
    let toast = document.createElement("div");
    toast.classList.add("toast")
    toast.innerHTML = "<i class='bx bxs-check-circle'></i> Product added successfully"

    toastBox.appendChild(toast)

    setTimeout(() => {
        toast.remove()
    }, 3000);
}



// ^ ====== Scroll up ======


const upButton = document.getElementById('up');


let aboutSection = document.getElementById("about");

window.addEventListener("scroll" , ()=>{

    let windowHeight = window.innerHeight;
    let windowScrollTop = window.scrollY;
    
    
    if (windowScrollTop >= windowHeight -100) {
        upButton.style.opacity = "1";
    } else {
          upButton.style.opacity = "0";

    }
    
})





// ^ ===== Click Any Where To Out Side To Close Toggle Menu ===== 

window.addEventListener("click" , (e)=>{
    if(!menu.contains(e.target) && !links.contains(e.target)) {
        if (links.classList.contains("open")){
            links.classList.toggle("open")
        }
    }
    
})






//^ ====== ScrollReveal configuration ======

ScrollReveal().reveal('.info h1', { 
    origin: 'left', 
    distance: '30px', 
    duration: 1000, 
    delay: 200,
    reset: true 
  });

  ScrollReveal().reveal('.info p', { 
    origin: 'left', 
    distance: '30px', 
    duration: 1000, 
    delay: 400,
    reset: true 
  });


  
  ScrollReveal().reveal('.info .view-menu', { 
    origin: 'left', 
    distance: '30px', 
    duration: 1000, 
    delay: 600,
    reset: true 
  });


  ScrollReveal().reveal('.img-home', { 
    origin: 'top', 
    distance: '30px', 
    duration: 1000, 
    delay: 800,
    reset: true 
  });





ScrollReveal().reveal('.info-about, .img-about', { 
    origin: 'left', 
    distance: '30px', 
    duration: 1000, 
    delay: 200,
    reset: true 
  });

  
  ScrollReveal().reveal('.items-services .item', { 
    origin: 'bottom', 
    distance: '30px', 
    duration: 1000, 
    interval: 200,
    reset: true 
  });


  ScrollReveal().reveal('.items-menu', { 
    origin: 'left', 
    distance: '30px', 
    duration: 1000, 
    interval: 200,
    reset: true 
  });




  ScrollReveal().reveal(".right-app" , {
    origin :"right",
    distance:"30px",
    duration : 1400,
    delay : 400,
    reset : true
  })

  ScrollReveal().reveal(".left-app" , {
    origin :"left",
    distance:"30px",
    duration : 1200,
    delay : 200,
    reset : true
  })
  
  ScrollReveal().reveal('.right-contact', { 
    origin: 'right', 
    distance: '30px', 
    duration: 1100, 
    delay: 300,
    reset: true 
  });

  ScrollReveal().reveal('.left-contact', { 
    origin: 'left', 
    distance: '30px', 
    duration: 1100, 
    delay: 300,
    reset: true 
  });
  
  ScrollReveal().reveal('.footer', { 
    origin: 'bottom', 
    distance: '100px', 
    duration: 1200, 
    delay: 300,
    reset: true 
  });
  


//   ^ ====== typed js ======
const typed = new Typed('.type-text', {
    strings: ['Food'], 
    typeSpeed: 200, 
    backSpeed: 200, 
    loop: true, 
    showCursor : false
  });