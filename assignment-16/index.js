let data = [];

async function fetchData() {
  try {
    let val = await fetch("https://fakestoreapi.com/products");
    data = await val.json();
    console.log("Fetched Data:", data);
    renderProducts(data);
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}
fetchData();

function renderProducts(productData) {
  let productsContainer = document.getElementById("products");
  productsContainer.innerHTML = "";

  productData.forEach((val) => {
    let box = document.createElement("div");
    box.className = "product-box";

    let h2 = document.createElement("h2");
    h2.innerText = val.title;

    let p1 = document.createElement("p");
    p1.innerText = val.category;

    let img = document.createElement("img");
    img.src = val.image;
    img.className = "product-image";

    let p2 = document.createElement("p");
    p2.innerText = `$${val.price}`;

    let p3 = document.createElement("p");
    p3.innerText = `⭐ ${val.rating.rate}`;

    let button = document.createElement("button");
    button.innerText = "Add to Cart";
    button.className = "add-to-cart-btn";

    box.append(h2, img, p1, p2, p3, button);
    productsContainer.append(box);
  });
}
let searchInput = document.getElementById("search");
let searchBtn = document.getElementById("search-btn");

searchBtn.addEventListener("click", () => handleSearch());
function handleSearch() {
  if (data.length === 0) {
    console.log("Data is empty. Waiting for fetch to complete...");
    return;
  }
  let searchTerm = searchInput.value.toLowerCase();
  let filteredProducts = data.filter((product) =>
    product.category.toLowerCase().includes(searchTerm)
  );
  renderProducts(filteredProducts);
}

let sortSelect = document.querySelector(".dropdown");
sortSelect.addEventListener("change", handleSort);
function handleSort() {
  let sortedProducts = [...data];
  let sortBy = sortSelect.value;

  if (sortBy === "priceLowHigh") {
    sortedProducts.sort((a, b) => a.price - b.price);
  } else if (sortBy === "priceHighLow") {
    sortedProducts.sort((a, b) => b.price - a.price);
  } else if (sortBy === "ratingHighLow") {
    sortedProducts.sort((a, b) => b.rating.rate - a.rating.rate);
  } else if (sortBy === "ratingLowHigh") {
    sortedProducts.sort((a, b) => a.rating.rate - b.rating.rate);
  }
  renderProducts(sortedProducts);
}
