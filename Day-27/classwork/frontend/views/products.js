let currentPage = 1; // Track current page
const limit = 10; // Number of items per page
let isFeathing = false;

const fetchData = async (page = 1) => {
    // if(isFeathing) return;
    // isFeathing = true;
    try {
        const res = await fetch(`http://localhost:3001/register/login/get/product?page=${page}&limit=${limit}`);
        const data = await res.json();
        console.log("Fetched Data:", data);
        console.log("Products:", data.product);
        showData(data.product);
        updatePagination(data.page, data.total);
    } catch (error) {
        console.error("Error fetching data:", error);
    }
};

const showData = (arr) => {
    let div = document.getElementById('container');
    div.innerHTML = "";

    arr.forEach((val, index) => {
        let box = document.createElement('div');
        box.className = 'box';

        let name = document.createElement('p');
        name.className = 'category';
        name.innerHTML = val.name;

        let category = document.createElement('p');
        category.className = 'category';
        category.innerHTML = val.category;

        let img = document.createElement("img");
        img.src = val.image;
        img.alt = val.name;

        let desc = document.createElement('p');
        desc.className = 'category';
        desc.innerHTML = val.desc;

        let price = document.createElement('p');
        price.className = 'price';
        price.innerHTML = `$${val.price}`;

        let addBtn = document.createElement('button');
        addBtn.className = 'addBtn';
        addBtn.innerText = 'Add to Cart';
        addBtn.addEventListener('click', () => {
            handleAddBtn(index, val.name);
        });

        box.append(name, category, img, desc, price, addBtn);
        div.append(box);
    });
};

const handleAddBtn = (index, name) => {
    Toastify({
        text: `${name} is added to cart`,
        duration: 3000,
        close: true,
        gravity: "top",
        position: "right",
        stopOnFocus: true,
        style: {
            background: "linear-gradient(to right, #00b09b, #96c93d)",
        },
    }).showToast();
};

// window scroll and api call;
// window.addEventListener("scroll", () => {
//     if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 100 ) {
//         currentPage += 1;
//         isFeathing = false;
//         fetchData(currentPage); // Load more products when scrolling reaches bottom
//     }
// });

// Function to create and update pagination buttons
const updatePagination = (page, total) => {
    let paginationDiv = document.getElementById("pagination");
    paginationDiv.innerHTML = "";
    let totalPages = Math.ceil(total / limit);

    let prevBtn = document.createElement("button");
    prevBtn.innerText = "Previous";
    prevBtn.classList.add("pagination-btn");
    prevBtn.disabled = page === 1;
    prevBtn.addEventListener("click", () => {
        if (currentPage > 1) {
            currentPage--;
            fetchData(currentPage);
        }
    });

    let nextBtn = document.createElement("button");
    nextBtn.innerText = "Next";
    nextBtn.classList.add("pagination-btn");
    nextBtn.disabled = page >= totalPages;
    nextBtn.addEventListener("click", () => {
        if (currentPage < totalPages) {
            currentPage++;
            fetchData(currentPage);
        }
    });

    let pageInfo = document.createElement("span");
    pageInfo.innerText = ` Page ${page} of ${totalPages} `;
    pageInfo.classList.add("pagination-info");

    paginationDiv.append(prevBtn, pageInfo, nextBtn);
};


fetchData(currentPage);
