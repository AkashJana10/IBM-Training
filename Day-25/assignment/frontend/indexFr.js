
document.getElementById('registerForm')?.addEventListener('submit', async(e) => { 
    e.preventDefault(); 
    const name = document.getElementById('name').value; 
    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value; 
    console.log(name,email,password);
    const res = await fetch('http://localhost:3000/api/auth/register', {
             
        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ name, email, password }) 
    }); 
    const data = await res.json(); 
    alert(data.message); 
}); 


document.getElementById('loginForm')?.addEventListener('submit', async (e) => { 
    e.preventDefault(); 
    const email = document.getElementById('email').value; 
    const password = document.getElementById('password').value; 
    const res = await fetch('http://localhost:3000/api/auth/login', {

        method: 'POST', 
        headers: { 'Content-Type': 'application/json' }, 
        body: JSON.stringify({ email, password }) 
    }); 
    const data = await res.json(); 
    if (data.token) 
    { 
        localStorage.setItem('token', data.token); 
        window.location.href = 'views/dashboard.html'; 
    } else 
    { 
        alert('Login failed'); 
    } 
}); 

document.getElementById('submit').addEventListener('click', async()=>{
    const name = document.getElementById('name').value;
    const category = document.getElementById('category').value;
    const desc = document.getElementById('desc').value;
    const price = document.getElementById('price').value;
    const image = document.getElementById('img').value;

    const obj = {name,category,desc,price,image};
    console.log(obj);

    const res = await fetch('http://localhost:3000/api/auth/products-register', {

        method:"POST",
        headers: { 'Content-Type': 'application/json' },
        body:JSON.stringify(obj)
    });
    const data = await res.json(); 
    alert(data.message); 
});