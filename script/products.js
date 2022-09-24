// Geting const with data from object
async function renderProducts(list) {
  const productClass = document.querySelector(".products");
  productClass.innerHTML = null;

  list.forEach((productData) => {
    //Create div with name .product
    const productBlock = document.createElement("div");
    productBlock.classList.add("product-block");
    productClass.append(productBlock);

    //Get Image
    const imageBlock = document.createElement("img");
    imageBlock.src = productData.image;
    imageBlock.classList.add("product-image");
    productBlock.append(imageBlock);

    const subContent = document.createElement("div");
    subContent.classList.add("product-sub-content");
    productBlock.append(subContent);

    //Get Titles

    const titleBlock = document.createElement("h3");
    titleBlock.textContent = productData.title;
    titleBlock.classList.add("product-title");
    subContent.append(titleBlock);

    //Get Price
    const priceBlock = document.createElement("span");
    priceBlock.textContent = productData.price + " €";
    priceBlock.classList.add("product-price");
    subContent.append(priceBlock);

    //Get Count
    const countBlock = document.createElement("span");
    countBlock.textContent = "In stock: " + productData.rating.count;
    countBlock.classList.add("product-count");
    subContent.append(countBlock);

    //Get Link on product
    const linkBlock = document.createElement("a");
    linkBlock.href = `./productDetails.html?id=${productData?.id}`;
    linkBlock.textContent = "Open Details";
    linkBlock.classList.add("product-link");
    subContent.append(linkBlock);
  });
}

// Must try in next time (to reduce Title, Price and Count)

// const createElement = (elName, elClass, elContent) => {
//   const element = document.createElement(elName);
//   element.classList.add(elClass);
//   element.textContent = elContent
//   return element;
// };

//Filter item

const select = document.querySelector("#filter");
select.addEventListener("change", async ({ target }) => {
  renderProducts(await getProducts(target.value === 'allCategories' ? null : target.value));
});

const loadAllData = async () => {
  renderProducts(await getProducts());
}

loadAllData();