const itemproduct = document.querySelector(".home-product-items");
var id = itemproduct.getAttribute("href")
itemproduct.addEventListener("click",(e)=> {
    console.log(id)
})