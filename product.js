const demoImage = document.querySelector(".demo__img")
const imgItems = document.querySelectorAll(".demo__img-item")
let currentIndex = 0
let imgLength = imgItems.length

imgItems.forEach((img,index)=> {
    img.addEventListener("mousemove",()=> {
        currentIndex = index
        showGallery()
    })
})

function showGallery() {
    demoImage.src = imgItems[currentIndex].src
}

// Total　like start

const iconHeart = document.querySelector(".fa-heart")
const totalLike = document.querySelector(".like-total")
let like = 10
totalLike.innerHTML = like;

iconHeart.addEventListener("click", handleLike)

function handleLike() {
    like+= 1;
    totalLike.innerHTML = like;
}

const up = document.querySelector(".up")
const down = document.querySelector(".down")
const valueNumber = document.querySelector(".value-number")
let quantityIndex = Number(valueNumber.value)


function likeDown() {
    if(quantityIndex <= 0) {
        return;
    }
    quantityIndex-= 1;
    valueNumber.value = quantityIndex;
}

function likeUp() {
    quantityIndex+=1;
    valueNumber.value = quantityIndex;
}

up.addEventListener("click", likeUp)
down.addEventListener("click", likeDown)

// Total like end

// add product start

const img = document.querySelector(".demo__img").src
const name = document.querySelector(".info-title").innerText
const price = document.querySelector(".price").innerText
const add = document.querySelector(".add-card")
const cart = document.querySelector(".header__cart-list-item")
const notation = document.querySelector(".header__cart-notice") 
const itemCart = document.querySelector(".header__cart-item")
const noCart = document.querySelector(".header__cart-no-cart-img")
const heading = document.querySelector(".header__cart-heading");
const btn =document.querySelector(".header__cart-view-cart")
const closeProduct = document.querySelector(".header__cart-item-remove");
const add2 = document.querySelector(".add-card-2")


function addProduct() {
    if(quantityIndex===0) {
        notation.style =`display: none`;
        // noCart.style=`display: inline-block`;
        heading.style=`display: none`;
        btn.style=`display: none`;
        alert("Bạn chưa chọn số lượng sản phẩm.")
    }
    else {
    notation.innerHTML = quantityIndex;
    notation.style =`display: block`;
    noCart.style=`display: none`;
    heading.style=`display: block`;
    // btn.style=`display: block`;
    alert("Thêm vào giỏ hàng thành công!")     

    cart.innerHTML = `
    <li class="header__cart-item">
    <img src="${img}" alt="" class="header__cart-img">
    <div class="header__cart-item-info">
      <div class="header__cart-item-head">
        <h5 class="header__cart-item-name">${name}</h5>
        <div class="header__cart-item-price-wrap">
          <span class="header__cart-item-price">${price}đ</span>
          <span class="header__cart-item-multiply">x</span>
          <span class="header__cart-item-quantity">${quantityIndex}</span>
        </div>
      </div>

      <div class="header__cart-item-body">
        <span class="header__cart-item-description">Phân loại hàng: Bạc</span>
        <span class="header__cart-item-remove">Xóa</span>
      </div>
    </div>
    </li>
    `
    }
    // closeProduct.addEventListener("click", ()=>{
    //     confirm("Bạn có muốn xoá sản phẩm");
    //     itemCart.style=`display:none`;
    // })
}

add.addEventListener("click", ()=> {
    addProduct()
})

add2.addEventListener("click", ()=> {
    addProduct()
})

// add product end


