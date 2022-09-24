// Geting data API

const backendURL = 'https://fakestoreapi.com';

async function sendRequest(url) {
  try {
    const response = await fetch(backendURL + url);
    const data = await response.json();
    return data;
  } catch (err) {
    return Promise.reject(err);
  }
}

const getProducts = filter => {
  return sendRequest(filter ? `/products/category/${filter}` : '/products');
};

const getProductInfo = id => {
  return sendRequest("/products/" + id);
}