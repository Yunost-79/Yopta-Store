async function renderProductInfo() {
  const params = new URLSearchParams(window.location.search);
  const id = params.get("id");
  const data = await getProductInfo(id);

  document.querySelector(".detail-title").innerHTML = data.title;
  document.querySelector(".detail-rate").innerHTML += data.rating.rate;
  document.querySelector(".detail-category").innerHTML += data.category;
  document.querySelector(".detail-price").innerHTML += data.price + "&#32;&#8364;";
  document.querySelector(".detail-description").innerHTML += data.description;
  document.querySelector(".detail-count").innerHTML += data.rating.count;

  const imageItem = document.querySelector(".detail-image-item");
  imageItem.src = data.image;
}

renderProductInfo();
