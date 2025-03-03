let cartDate = JSON.parse(localStorage.getItem("DataCart")) ||[];
showCartItems(cartDate);
function showCartItems(cartDate){
    let container = document.getElementById("products");
    container.innerHTML = "";

    let countItem = document.getElementById('count-item');
    if(cartDate.length === 0){
        countItem.innerText = "";
    }
    else{
        countItem.innerText = cartDate.length;
    }

    cartDate.forEach((el,index) => {
        box=document.createElement('div');
        box.className="product-box";
    
        let h2=document.createElement("h2");
        h2.innerText=el.name;
        let p1=document.createElement('p');
        p1.innerText=el.category;
    
        let p2=document.createElement('p');
        p2.innerText = `$${el.price}`;
    
        let p3=document.createElement('p');
        p3.innerText = `⭐ ${el.rating}`;
    
        let img=document.createElement('img');
        img.src=el.image;
        img.className = "product-image";
    
        let button=document.createElement('button');
        button.innerText="Delete from Cart";
        button.className = "delete-to-cart-btn";
    
        button.addEventListener('click',()=>{
            deleteToCart(index);
            alert("Item removed from cart");
        });
    
        box.append(h2,img,p1,p2,p3,button);
        document.getElementById("products").append(box);
    });
}


function deleteToCart(index){
    let arr = JSON.parse(localStorage.getItem("DataCart")) || [];

    // let updatedData = arr.filter((data) =>data.id !== el.id);
    
    arr.splice(index,1);
    
    localStorage.setItem("DataCart",JSON.stringify(arr));
    showCartItems(arr);
}
