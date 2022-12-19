let products = [
  {
    price: "250.000",
    image: "https://cf.shopee.vn/file/1666ecb5ce9d06325073d24e3dafdb70_tn",
    kpi: 10,
    sale: 10,
  },
  {
    price: "100.000",
    image: "https://cf.shopee.vn/file/6f0c8489fb8884667d2c7a5bac606585_tn",
    kpi: 150,
    sale: 40,
  },
  {
    price: "850.000",
    image: "	https://cf.shopee.vn/file/89f2091460724f54890cc21e00e13d52_tn",
    kpi: 15,
    sale: 20,
  },
  {
    price: "800.000",
    image: "https://cf.shopee.vn/file/01853e425348eee59e5d385b2a4e81f1_tn",
    kpi: 5,
    sale: 50,
  },
  {
    price: "135.000",
    image: "	https://cf.shopee.vn/file/sg-11134201-22110-b11t7ooy3wjv30_tn",
    kpi: 60,
    sale: 25,
  },
  {
    price: "999.000",
    image: "https://cf.shopee.vn/file/sg-11134201-22120-z7psbn2vutkvff_tn",
    kpi: 90,
    sale: 30,
  },
  {
    price: "200.000",
    image: "https://cf.shopee.vn/file/15827a23c85ab57d02195e9a00de725a_tn",
    kpi: 69,
    sale: 10,
  },
  {
    price: "199.000",
    image: "https://cf.shopee.vn/file/42238573a3d9045ceabb62a017ec3b18_tn",
    kpi: 8,
    sale: 10,
  },
  {
    price: "130.000",
    image: "	https://cf.shopee.vn/file/7bc9733dc1619615795de2f3911dea7f_tn",
    kpi: 100,
    sale: 10,
  },
  {
    price: "135.000",
    image: "	https://cf.shopee.vn/file/sg-11134201-22110-b11t7ooy3wjv30_tn",
    kpi: 60,
    sale: 25,
  },
  {
    price: "135.000",
    image: "	https://cf.shopee.vn/file/sg-11134201-22110-b11t7ooy3wjv30_tn",
    kpi: 60,
    sale: 25,
  },
  {
    price: "135.000",
    image: "	https://cf.shopee.vn/file/sg-11134201-22110-b11t7ooy3wjv30_tn",
    kpi: 60,
    sale: 25,
  },
];

const flashSaleAll = document.querySelector(".flash__sale-product-1");

function renderUI(arr) {
  flashSaleAll.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    const p = arr[i];

    flashSaleAll.innerHTML += `
        <a href="./shop.html" class="flash__sale-items col l-2 m-3">
            <div class="label-sale">
                <img src="${p.image}"></img>
            </div>
            <div class="flash__sale-price">
                <span class="flash__sale-price-vnd">đ</span>
                ${p.price}
            </div>
            <div class="flash__sale-kpi">
                Đã Bán ${p.kpi}
            </div>
            <div class="flash__sale-items__sale-off">
                <span class="flash__sale-items__sale-off-percent">${p.sale}%</span>
                <span class="flash__sale__sale-off-lable">GIẢM</span>
            </div>
        </a>
    `;
  }
}

window.onload = renderUI(products);

// Home page mall start

let productmalls = [
  {
    name: "Săn voucher 499k",
    image: "https://cf.shopee.vn/file/7a4a104804adb001eac2e736654bccf0_xhdpi",
  },
  {
    name: "Săn voucher 499k",
    image: "https://cf.shopee.vn/file/3cf1bb9bf661dc96e8f5c6f06ce8d0ff_xhdpi",
  },
  {
    name: "Săn voucher 499k",
    image: "https://cf.shopee.vn/file/f5d908768d8133eaf83d9644f453c4e7_xhdpi",
  },
  {
    name: "Săn voucher 499k",
    image: "https://cf.shopee.vn/file/57cd2e3c8f6b33302f0edc8663784d60_xhdpi",
  },
  {
    name: "Săn voucher 499k",
    image: "https://cf.shopee.vn/file/57cd2e3c8f6b33302f0edc8663784d60_xhdpi",
  },
  {
    name: "Săn voucher 499k",
    image: "https://cf.shopee.vn/file/57cd2e3c8f6b33302f0edc8663784d60_xhdpi",
  },
  {
    name: "Săn voucher 499k",
    image: "https://cf.shopee.vn/file/62365a9a0b9ec535cfa2affe7b631e3c_xhdpi",
  },
  {
    name: "Săn voucher 499k",
    image: "https://cf.shopee.vn/file/ee4b16b2037af8bd183bec99645c9f28_xhdpi",
  },
  {
    name: "Săn voucher 499k",
    image: "https://cf.shopee.vn/file/7a4a104804adb001eac2e736654bccf0_xhdpi",
  },
  {
    name: "Săn voucher 499k",
    image: "https://cf.shopee.vn/file/3cf1bb9bf661dc96e8f5c6f06ce8d0ff_xhdpi",
  },
  {
    name: "Săn voucher 499k",
    image: "https://cf.shopee.vn/file/f5d908768d8133eaf83d9644f453c4e7_xhdpi",
  },
  {
    name: "Săn voucher 499k",
    image: "https://cf.shopee.vn/file/57cd2e3c8f6b33302f0edc8663784d60_xhdpi",
  },
  {
    name: "Săn voucher 499k",
    image: "https://cf.shopee.vn/file/57cd2e3c8f6b33302f0edc8663784d60_xhdpi",
  },
  {
    name: "Săn voucher 499k",
    image: "https://cf.shopee.vn/file/1666ecb5ce9d06325073d24e3dafdb70_tn",
  },
  {
    name: "Săn voucher 499k",
    image: "https://cf.shopee.vn/file/1666ecb5ce9d06325073d24e3dafdb70_tn",
  },
  {
    name: "Săn voucher 499k",
    image: "https://cf.shopee.vn/file/1666ecb5ce9d06325073d24e3dafdb70_tn",
  },
];

const productHomeMall = document.querySelector(".homepage__mall-products");

function renderHomemallU(arr) {
  productHomeMall.innerHTML = "";

  for (let i = 0; i < arr.length; i++) {
    const m = arr[i];
    productHomeMall.innerHTML += `
    <div class="homepage__mall-products-list l-3">
      <div class="homepage__mall-products-item">
        <div class="homepage__mall-products-image">
          <img src="${m.image}" alt="" class="homepage__mall-products-img">
        </div>
        <div class="homepage__mall-products-title">Săn voucher 499k</div>
      </div>
      <div class="homepage__mall-products-item">
        <div class="homepage__mall-products-image">
          <img src="${m.image}" alt="" class="homepage__mall-products-img">
        </div>
        <div class="homepage__mall-products-title">${m.name}</div>
      </div>
    </div>
    `;
  }
}
window.onload = renderHomemallU(productmalls)

{/* <div class="homepage__mall-products-list l-3">
              <div class="homepage__mall-products-item">
                <div class="homepage__mall-products-image">
                  <img src="https://cf.shopee.vn/file/57cd2e3c8f6b33302f0edc8663784d60_xhdpi" alt="" class="homepage__mall-products-img">
                  <div class="homepage__mall-products-title">Săn voucher 499k</div>
                </div>
              </div>
              <div class="homepage__mall-products-item">              
                  <div class="homepage__mall-products-title-all">Xem Tất Cả</div>
              </div>
            </div> */}