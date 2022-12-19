// Banner quảng cáo

// const $ = document.querySelector.bind(document)
// const $$ = document.querySelectorAll.bind(document)

const modal = document.querySelector(".banner__ads-modal");
const iconCloseModal = document.querySelector(".close");

function toggleModal() {
    modal.classList.toggle("hide");
}

iconCloseModal.addEventListener("click", toggleModal)

modal.addEventListener("click", function(e) {
    if(e.target == e.currentTarget) toggleModal();
});


// slider image start

const slider = document.querySelector(".banner__list-images");
const carouselSlider = document.querySelector(".content-carousel__items-list");
const contentCarousel = document.querySelectorAll(".content-carousel__item");
const carouselLength = contentCarousel.length;
const nextBtn = document.querySelector(".next-btn");
const prevBtn = document.querySelector(".prev-btn");
const slides = document.querySelectorAll(".image");
const slideIcons = document.querySelectorAll(".radio-check-items");
const numberOfSlides = slides.length;
// const sliderItemHeight = slides[0].offsetHeight;
const sliderCarouselWidth = contentCarousel[0].offsetWidth;
const sliderItemHeight = 240 
const slidesLength = slides.length;
var slideNumber = 0;
var carouselNumber = 0;

// // button next image
nextBtn.addEventListener("click", () => {
    next();
  });
  function next() {
    if(slideNumber < slidesLength -1) {
      slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
      });
      slideNumber ++
      slideIcons[slideNumber].classList.add("active");
    } else {
      slideNumber = 0
    }
    slider.style = `transform: translateY(-${sliderItemHeight*slideNumber}px)`;
  }

function nextCarousel() {
  if(carouselNumber < carouselLength -1) {
    carouselNumber++
  }
  else {
    carouselNumber = 0
  }
  carouselSlider.style = `transform: translateX(-${sliderCarouselWidth*carouselNumber}px)`;
}

// button prev image
prevBtn.addEventListener("click", () => {
    prev();
  });

  function prev() {
    if(slideNumber === 0) {
      slideNumber = slidesLength -1;
    } else {
      slideIcons.forEach((slideIcon) => {
      slideIcon.classList.remove("active");
      });
      slideNumber --;
      slideIcons[slideNumber].classList.add("active");
    }
    slider.style = `transform: translateY(-${sliderItemHeight*slideNumber}px)`;
  }

  setInterval(()=> {
    next();
    nextCarousel();
  },2*1000)

// slider image end

// next product start

const backProduct = document.querySelector(".back__product")
const nextProduct = document.querySelector(".next__product")
const categoryItem = document.querySelectorAll(".category-item")
const categoryContainer = document.querySelector(".category__container")
const categoryLength = categoryItem.length
const itemWidth = categoryItem[0].offsetWidth;

function backArrow() {
  categoryContainer.style = `transform: translateX(0px)`
  backProduct.style = `display: none`
  nextProduct.style = `display: block`
}

function nextArrow() {
  categoryContainer.style = `transform: translateX(-${itemWidth*3}px)`
  backProduct.style = `display: block`
  nextProduct.style = `display: none`
}

nextProduct.addEventListener("click", ()=> {
  nextArrow()
})

backProduct.addEventListener("click", ()=> {
  backArrow()
})

const homepageMall = document.querySelector(".homepage__mall-products")
const homepageMallList = document.querySelectorAll(".homepage__mall-products-list");
const homepageMallItem = document.querySelector(".homepage__mall-products-item");
const homeMallLength = homepageMallList.length;
const backHomepage = document.querySelector(".back__homepage");
const nexthomepage = document.querySelector(".next__homepage");
// const homeMallWidth = homepageMallList[0].offsetWidth; 
const homeMallWidth = 246;

function nextMall() {
  homepageMall.style = `transform: translateX(-${homeMallWidth*4}px)`
}

function backMall() {
  homepageMall.style = `transform: translateX(0px)`
}

nexthomepage.addEventListener("click", ()=> {
  nextMall()
})

backHomepage.addEventListener("click", ()=> {
  backMall()
})

const flashProduct = document.querySelector(".flash__sale-product");
const flashItems = document.querySelectorAll(".flash__sale-items-1");
const flashItemWidth = flashItems[0].offsetWidth;
const nextProductSale = document.querySelector(".next__product-sale");
const backProductSale = document.querySelector(".back__product-sale");
var currentNumber = 0;

function nextTopProduct() {
  if(currentNumber === 12) {
    return
  }
  currentNumber += 6;
  flashProduct.style = `transform: translateX(-${flashItemWidth*currentNumber}px)`
}

function backTopProduct() {
  if(currentNumber === 0) {
    return;
  }
  currentNumber -= 6;
  flashProduct.style = `transform: translateX(-${flashItemWidth*currentNumber}px)`
}

nextProductSale.addEventListener("click", ()=> {
  nextTopProduct()
})

backProductSale.addEventListener("click", ()=> {
  backTopProduct()
})
// next product end


const backFlash = document.querySelector(".back__flash-sale");
const nextFlash = document.querySelector(".next_flash-sale");
const flashContainer = document.querySelector(".flash__sale-container");
// const flashItem = document.querySelectorAll(".flash__sale-items");
// const falshWidth = flashItem[0].offsetWidth;
const falshWidth = 200;

function backSale() {
  flashContainer.style = `transform: translateX(0px)`;
  backFlash.style = `display: none`;
  nextFlash.style = `display: block`;
}

function nextSale() {
  flashContainer.style = `transform: translateX(-${falshWidth*6}px)`;
  backFlash.style = `display: block`;
  nextFlash.style = `display: none`;
}

backFlash.addEventListener("click", ()=> {
  backSale()
})

nextFlash.addEventListener("click", ()=> {
  nextSale()
})