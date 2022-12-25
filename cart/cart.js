let carts = [
    {
        price: "250.000",
        title: "Áo hoodie zip có khoá và không khoá mẫu levents basic chất liệu nỉ",
        image: "https://cf.shopee.vn/file/1666ecb5ce9d06325073d24e3dafdb70_tn",
        sale: "300.000",
        shop: "Lemon Store99 ",
        type: "Trắng-Trơn, M (45kg-55kg)",
        voucher: 15,
        totalsale: 5000
    }
]

const totalPrice = document.querySelector(".body-container");

function renderUiCart(arr) {
  totalPrice.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    const c = arr[i];

    totalPrice.innerHTML += `
        <div class="free-ship row">
        <i class="fa-solid fa-truck-arrow-right right-icon"></i>
        Nhấn vào mục mã giảm giá ở cuối trang để hưởng miễn phí vận chuyển bạn nhé!
        </div>
    <div class="product-check">
        <div class="check-left">
            <input name="ids[]" type="checkbox" class="product__all">
            <div class="product__all-title">
                Sản phẩm
            </div>
        </div>
        <div class="product-__nav">
            <div class="product__nav-price">Đơn giá</div>
            <div class="product__nav-quantity">số lượng</div>
            <div class="total-price">số tiền</div>
            <div class="manipulation">thao tác</div>
        </div>
    </div>
    <div class="cart__product-container">
        <div class="cart-namepage">
            <input name="ids[]" type="checkbox" id="nameshop">
            <div class="shop-like">yêu thích</div>
            <div class="shop">${c.shop}</div>
        </div>
        <div class="home__cart-container">
          <div class="view-home">
            <div class="cart-body">
                <span class="combo">combo khuyến mãi</span>
                <span class="title">mua 2 giảm đ ${c.totalsale}</span>
                <span class="more">thêm
                    <i class="fa-solid fa-angle-right"></i>
                </span>
            </div>
            <div class="cart-home">
                <input name="ids[]" type="checkbox" id="cart-1">
                <img src="${c.image}" alt="" class="cart-img">
                <div class="cart-home-if">
                <div class="cart-title">${c.title}</div>
                <div class="type__product">
                    <div class="product-type">phân loại hàng</div>
                    <div class="type-list">${c.type}</div>
                </div>
                <div class="price-list">
                    <div class="price-sale">đ ${c.sale}</div>
                    <div class="price-real">${c.price}</div>
                </div>
                <div class="quantity-edt">
                    <button class="down">-</button>
                    <input name="ids[]" type="text" class="value-number" placeholder="1">
                    <button class="up">+</button>
                </div>
                <div class="total__price">${(c.price * 1000).toLocaleString('de-DE')}</div>
                <div class="delete-product">
                    <div class="del-title">xoá</div>
                    <div class="list-more"> Tìm thêm sản phẩm tương tự </div>
                </div>
                </div>
            </div>
        </div>
        </div>
        <div class="voucher">
            <div class="voucher-shop">Shop voucher giảm đến ${c.voucher} k</div>
            <div class="voucher-view">Xem thêm voucher</div>
        </div>
    </div>
    <div class="buying-product">
      <div class="buy-left">
        <input name="ids[]" type="checkbox" value="all" id="all" onchange="checkAll(this)">
        <div class="check-all">chọn tất cả 
        <span class="total-all">(1)</span>
      </div>
      <div class="del-product">xoá</div>
      </div>
      <div class="buy-right">
        <div class="total-all-sub">Tổng: </div>
        <div class="total-all">Tổng thanh toán <span class="total-product">(1 sản phẩm):</span></div>
        <div class="price-all"></div>
        <button class="btn-buy">mua hàng</button>
      </div>
    </div>
    `;
  }
}

window.onload = renderUiCart(carts)

const up = document.querySelector(".up")
const down = document.querySelector(".down")
const valueNumber = document.querySelector(".value-number")
const total = document.querySelector(".total__price")
const price = document.querySelector(".price-real")
let quantityIndex = 1
let priceReal = price.innerHTML
let totalAll = 0;

function totalMoney() {
    totalAll = quantityIndex*priceReal*1000;
    total.innerHTML = totalAll.toLocaleString('de-DE');
}

function likeDown() {
    if(quantityIndex <= 0) {
        return;
    }
    quantityIndex-= 1;
    valueNumber.value = quantityIndex;
    totalMoney()
}

function likeUp() {
    quantityIndex+=1;
    valueNumber.value = quantityIndex;
    totalMoney()
}

up.addEventListener("click", likeUp)
down.addEventListener("click", likeDown)

// sử lý checkbox froduct start

var checkboxs = document.querySelectorAll("input[type = 'checkbox']");

function checkAll(myCheckbox) {
    if(myCheckbox.checked == true) {
        checkboxs.forEach(function(checkbox) {
            checkbox.checked = true;
        });
    }
    else {
        checkboxs.forEach(function(checkbox) {
            checkbox.checked = false;
        })
    }
}


var checkEnd = document.querySelector("#all")
const priceNet = document.querySelector(".price-all")

document.getElementById('all').onclick = function(e){
    if (this.checked){
        priceNet.innerHTML = totalAll.toLocaleString('de-DE')
    }
}
