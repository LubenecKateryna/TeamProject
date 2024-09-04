// script.js
const productsContainer = document.querySelector('#products_witOut_discount');
const discountProductsContainer = document.querySelector('#products_with_discount');

class Product {
  constructor(discount, img, name, description, oldPrice, price, textWithPrice) {
    this.discount = discount;
    this.img = img;
    this.name = name;
    this.description = description;
    this.oldPrice = oldPrice;
    this.price = price;
    this.textWithPrice = textWithPrice;
  }
}
const products = [
    new Product("TOOP","png/cabage_8.png", "Капуста", "Капуста звичайна 1 шт","",43.90, "грн/кг"),
    new Product("TOOP","png/carrot.png", "Морква", "Морква рання","",40.70, "грн/кг"),
    new Product("TOOP","png/grapes.png", "Лохина", "Лохина 1 гат","",189.95, "грн/кг"),
    new Product("TOOP","png/lemon.png", "Лимон", "Лимон звичайний","",62.95, "грн/кг"),
    new Product("TOOP","png/luck.png", "Вітамінний пучок 1 гат", "100 г(кріп,петрушка,цибуля)","",42.90, "грн/шт"),
    new Product("TOOP","png/peach.png", "Персик", "Персик 1 гат","",65.95, "грн/кг"),
    new Product("TOOP","png/potato.png", "Картопля", "Картопля молода 1 гат","",32.50, "грн/кг"),
    new Product("TOOP","png/tomato.png", "Помідори", "Томати тепличні","",60.30, "грн/кг"),
    new Product("TOOP","png/watermelon.png", "Кавун", "Кавун безнасінний","",27.59, "грн/кг"),
    new Product("TOOP","png/grapes.png", "Лохина", "Лохина 1 гат","",189.95, "грн/кг"),
];
const dicountProducts = [
    new Product("- 5%","png/ice_cream_2.png", "Морозиво", "Київський пломбір 80 г",36.90,26.80, "грн/шт"),
    new Product("- 45%","png/ice_cream.png", "Морозиво LIMO", "LIMO ICE CREAM 80 г",132.90,21.90, "грн/шт"),
    new Product("- 8%","png/kasha.png", "Каша", "Каша 340 г горохова",54.90,37.30, "грн/шт"),
    new Product("- 28%","png/scirok.png", "Сир", "Сир плавленний 70 г",17.60,12.90, "грн/шт"),
    new Product("- 9%","png/coffee.png", "Кава", "Jacobs Cronat gold 75 г",159.70,96.60, "грн/шт"),
    new Product("- 36%","png/mango.png", "Маска", "Маска для обличчя 1 шn",30.90,20.60, "грн/шт"),
    new Product("- 5%","png/ice_cream_2.png", "Морозиво", "Київський пломбір 80 г",36.90,26.80, "грн/шт"),
    new Product("- 45%","png/ice_cream.png", "Морозиво LIMO", "LIMO ICE CREAM 80 г",132.90,21.90, "грн/шт"),
    new Product("- 8%","png/kasha.png", "Каша", "Каша 340 г горохова",54.90,37.30, "грн/шт"),
    new Product("- 28%","png/scirok.png", "Сир", "Сир плавленний 70 г",17.60,12.90, "грн/шт"),
];
/*PRODUCTS*/
function updateProducts(productsList) {
  productsContainer.innerHTML = "";

  productsList.forEach((product) => {
    const productElement = document.createElement("div");
    productElement.classList.add("product-item");

    /* !!! ПРОБЛЕМА - DIV НЕ ХОЧЕТ ОТОБРАЖАТСЯ  => (ИСПРАВЛЕНО)*/
    productElement.innerHTML = `
        <div class="catalog_item_top">
            <div class="catalog_item_TOOP">
                <a href="#TOOP_box" class="catalog_item_discount_a">${product.discount}</a>
            </div>
            <img src="png/heart_dark.png" class="add_to_favourite_button"></img>
        </div>
        <div class="catalog_item_photo">
            <img src="${product.img}" alt="${product.name}" class="product_img">
        </div>
        <div class="catalog_item_info">
            <span class="catalog_item_title">${product.name}</span>
            <span class="catalog_item_discription">${product.description}</span>
        </div>
        <div class="catalog_item_bottom">
            <span class="catalog_item_price_wrapper">
                <sup class="old_price_text"><s>${product.oldPrice}</s></sup>
                <span class="current_prise_text">${product.price}</span> <span class="text_near_price_text">${product.textWithPrice}</span>
            </span>
            <button class="add_to_cart" title="у кошик">+</button>
        </div>
    `;


      const addToCartButton = productElement.querySelector('.add_to_cart');
      addToCartButton.addEventListener('click', () => addToCart(product));


      productsContainer.appendChild(productElement);
  });
}
updateProducts(products);

/*DICOUNT PRODUCTS*/
function updateDiscountProducts(productsList) {
    discountProductsContainer.innerHTML = "";

    productsList.forEach((product) => {
      const discoutProductElement = document.createElement("div");
      discoutProductElement.classList.add("product-item");

      discoutProductElement.innerHTML = `
          <div class="catalog_item_top">
              <div class="catalog_item_discount">
                  <a href="#TOOP" class="catalog_item_discount_a"> ${product.discount}</a>
              </div>
              <img src="png/heart_dark.png" class="add_to_favourite_button"></img>
          </div>
          <div class="catalog_item_photo">
              <img src="${product.img}" alt="${product.name}" class="product_img">
          </div>
          <div class="catalog_item_info">
              <span class="catalog_item_title">${product.name}</span>
              <span class="catalog_item_discription">${product.description}</span>
          </div>
          <div class="catalog_item_bottom">
              <span class="catalog_item_price_wrapper">
                  <sup class="old_price_text"><s>${product.oldPrice}</s></sup>
                  <span class="current_discountPrise_text">${product.price}</span> <span class="text_near_price_text">${product.textWithPrice}</span>
              </span>
              <button class="add_to_cart" title="у кошик">+</button>
          </div>
      `;


        const addToCartButton = discoutProductElement.querySelector('.add_to_cart');
        addToCartButton.addEventListener('click', () => addToCart(product));

      discountProductsContainer.appendChild(discoutProductElement);
    });
  }
  updateDiscountProducts(dicountProducts);

/*continue*/
const main_scroll_to_top = document.querySelector('.scroll_to_top_button')
window.addEventListener('scroll', function(){
    if(window.scrollY < 500){
        document.querySelector(".scroll_to_top_button").classList.remove("scroll_btn_visibility")
    }else{
        main_scroll_to_top.classList.add("scroll_btn_visibility")
    }
})

document.querySelector(".scroll_to_top_button").onclick = function() {
    window.scrollTo( 0, 0)
}

document.querySelector(".top_scroll_to_products").onclick = function() {
    window.scrollTo(0,240)
}

document.querySelector(".middle_scroll_to_DiscountProducts").onclick = function() {
    window.scrollTo(0,240)
}

document.querySelector(".TOOP_content_title_BG").onclick = function() {
    window.scrollTo(0,100)
}

let clock = document.querySelector('.time')

setInterval(function() {
    let currentTime = new Date().toLocaleTimeString()

    updateTime(currentTime)
}, 1000)

function updateTime(time) {
    clock.innerHTML = time
}

document.getElementById('menu-icon').addEventListener('click', function() {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('show-menu');
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

function addToCart(product) {
    console.log(product);

    let cart = JSON.parse(localStorage.getItem('cart')) || [];
    console.log('caca',cart);
    const existingProductIndex = cart.findIndex(item => item.name === product.name);

    console.log('ext', existingProductIndex)

    if (existingProductIndex !== -1) {
        cart[existingProductIndex].quantity += 1; // Увеличиваем количество, если товар уже есть в корзине
    } else {
        cart.push({ ...product, quantity: 1 }); // Добавляем новый товар с количеством 1
    }

    localStorage.setItem('cart', JSON.stringify(cart));
    updateCartBadge();

    // Анимация увеличения значка корзины
    const cartIcon = document.getElementById('cart-icon');
    cartIcon.classList.add('pulse');
    setTimeout(() => cartIcon.classList.remove('pulse'), 300);
}


const cartIcon = document.getElementById('cart-icon');
const cartPopup = document.getElementById('cart-popup');
const cartItemsContainer = document.getElementById('cart-items');
const closeBtn = document.querySelector('.close-btn');

cartIcon.addEventListener('click', () => {
    showCartPopup();
});

closeBtn.addEventListener('click', () => {
    cartPopup.classList.add('hidden');
    cartPopup.classList.remove('visible');
});

function showCartPopup() {
    cartPopup.classList.remove('hidden');
    cartPopup.classList.add('visible');

    const cart = JSON.parse(localStorage.getItem('cart')) || [];

    console.log('cart', cart)

    cartItemsContainer.innerHTML = '';

    cart.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.classList.add('cart-item');
        itemElement.innerHTML = `
            <span>${item.name}</span>
            <span>${item.quantity} x ${item.price} грн</span>
        `;
        cartItemsContainer.appendChild(itemElement);
    });
}

function updateCartBadge() {
    const cart = JSON.parse(localStorage.getItem('cart')) || [];
    const totalItems = cart.reduce((total, item) => total + item.quantity, 0);
    const badge = document.getElementById('cart-badge');
    badge.textContent = totalItems;
}

// Обновляем значок корзины при загрузке страницы
document.addEventListener('DOMContentLoaded', updateCartBadge);

document.getElementById('checkout-button').addEventListener('click', () => {
    // Очистка корзины
    localStorage.removeItem('cart');
    updateCartBadge(); // Обновляем бейдж, чтобы он стал "0"

    // Закрытие попапа
    const cartPopup = document.getElementById('cart-popup');
    cartPopup.classList.add('hidden');
    cartPopup.classList.remove('visible');
});
