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

async function getCategory(filter) {
  const data = await sendRequest(`/products/category/${filter}`);
  processData(data);
  console.log(data);
}

// getCategory('jewelery');


const getAllProducts = async () => {
  const data = await sendRequest('/products');
  processData(data);
};

getAllProducts();

