let div = document.getElementById('container');
const fatchData = async()=>{
    try {
        const res = await fetch('http://localhost:3000/api/auth/all-products');
        const data = await res.json();
        console.log(data);
        showData(data);
    } catch (error) {
        console.log(error);
    }
}
const showData = async(arr)=>{
    let div = document.getElementById('container');
    div.innerHTML = "";
    arr.forEach((val,index) => {
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
        img.alt = val.title;

        let desc = document.createElement('p');
        desc.className = 'category';
        desc.innerHTML = val.desc;

        let price = document.createElement('p');
        price.className = 'price';
        price.innerHTML = val.price;

        let addBtn = document.createElement('button');
        addBtn.className = 'addBtn';
        addBtn.innerText = 'Add to Cart';
        
        box.append(name,category,img,desc,price,addBtn);
        div.append(box);  
    });
}
fatchData();