function start() {
  // getProduct(function(product) {
  //     renderProduct(product);
  // })
  getProduct(renderProduct);
  // getProduct(renderifProduct);
}

start();

function getProduct(cb) {
  fetch("https://639d3ca91ec9c6657ba69562.mockapi.io/products")
    .then((res) => res.json())
    // .then(json=>console.log(json))
    .then(cb);
}

function renderProduct(products) {
  var listProduct = document.querySelector(".product-list");

  var htmls = products.map(function(product) {
    return `
        <div class="col l-2 m-4 c-6 product__all-list">
        <a href="./product.html" id="${product.id}" class="home-product-items">
          <img class="home-product-items__img" src="${product.image}"></img>

          <h4 class="home-product-items__name">${product.title}</h4>
          <div class="home-product-items__price">
            <span class="home-product-items__price-old">${product.sale}đ</span>
            <span class="home-product-items__price-current">${product.price}đ</span>
          </div>

          <div class="home-product-items__action">
            <span class="home-product-items__like home-product-items__like--liked">
              <i class="home-product-items__like-icons-empty far fa-heart"></i>
              <i class="home-product-items__like-icons-fill fas fa-heart"></i>
            </span>
            <div class="home-product-items__raiting">
              <i class="produce-items__raiting--gold far fa-star"></i>
              <i class="produce-items__raiting--gold far fa-star"></i>
              <i class="produce-items__raiting--gold far fa-star"></i>
              <i class="produce-items__raiting--gold far fa-star"></i>
              <i class="far fa-star"></i>
            </div>

            <span class="home-product-items__sold">${product.sold} đã bán</span>
          </div>

          <div class="home-product-items__favourite">
            <i class="fas fa-check"></i>
            <span>Yêu thích</span>
          </div>

          <div class="home-product-items__sale-off">
            <span class="home-product-items__sale-off-percent">${product.percent}%</span>
            <span class="home-product-items__sale-off-lable">GIẢM</span>
          </div>

          <div class="product__all-show-more">
            Tìm sản phẩm tương tự
          </div>
        </a>
        </div>
      `;
    });
    listProduct.innerHTML = htmls.join('')
}

// function renderifProduct(products) {
//   products.map((product) => {
//     fetch("https://639d3ca91ec9c6657ba69562.mockapi.io/products/1")
//     .then((res) => res.json())
//     .then(json=>console.log(json))
//   });
// }