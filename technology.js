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
    new Product("TOOP","png/black_washing_mackhine.png", "Сушильна машина", "Samsung DV90TA040AX/UA","",27599, "грн/шт"),
    new Product("TOOP","png/blu_washing_machine.png", "Пральна машина", "Whlrlpool WRBSB 6228 B UA","",13777, "грн/шт"),
    new Product("TOOP","png/cooker.png", "Сушарка для фруктів", "WMF 415250011 KITCHENminis","",4999, "грн/шт"),
    new Product("TOOP","png/photo_camera.png", "Фотокамера Canon", "Бездзеркальна EOS R8 24-50","",58999, "грн/шт"),
    new Product("TOOP","png/PLATA.png", "Материнська плата", "Asus TUF CAMING B550M-PLUS","",4799, "грн/шт"),
    new Product("TOOP","png/pots.png", "Набір посуду", "Asus TUF CAMING B550M-PLUS","",4799, "грн/шт"),
    new Product("TOOP","png/router.png", "Маршрутизатор", "WiFi6 Asus RT-AX53U","",2449, "грн/шт"),
    new Product("TOOP","png/water_store.png", "Водонагрівач (1200W)", "Atlantic Round Eco VMR 80","",3888, "грн/шт"),
    new Product("TOOP","png/black_washing_mackhine.png", "Сушильна машина", "Samsung DV90TA040AX/UA","",27599, "грн/шт"),
    new Product("TOOP","png/blu_washing_machine.png", "Пральна машина", "Whlrlpool WRBSB 6228 B UA","",13777, "грн/шт"),
];
const dicountProducts = [
    new Product("-28%","png/Airpost.png", "Навушники", "TWS OPPO Enco Buds2 (W14)",1999.0,899.99, "грн/шт"),
    new Product("-12%","png/microWawe.png", "Мікрохвильова піч", "Samsung MS20A3010Al/UA",4499.20,2299.0, "грн/шт"),
    new Product("- 23%","png/Phone_nomberOne.png", "Смартфон Apple", "Apple iPhone 15 Pro 128Gb",47999.0,45999.30, "грн/шт"),
    new Product("- 32%","png/shoes.png", "Губка", "Губка-блиск 1 шт",132.90,20.60, "грн/шт"),
    new Product("- 43%","png/smart_watch.png", "Фітнес-браслет", "Xiaomi Mi Smart Band 8",17990.0,299.60, "грн/шт"),
    new Product("- 29%","png/TVONE.png", "Монітор ігровий", "QE5560DAUXUA", 37999.40,9999.99, "грн/шт"),
    new Product("- 18%","png/TVSecond.png", "Телевізор Samsung", "Київський пломбір 80 г",11899.90,26.80, "грн/шт"),
    new Product("- 5%","png/Scovorotka.png", "Сковорідки Tefal", "C2959053 Recource 24/28см",4320.60,1899.90, "грн/шт"),
    new Product("- 12%","png/Airpost.png", "Навушники", "TWS OPPO Enco Buds2 (W14)",1999.0,899.99, "грн/шт"),
    new Product("- 50%","png/microWawe.png", "Мікрохвильова піч", "Samsung MS20A3010Al/UA",4499.20,2299.0, "грн/шт"),
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