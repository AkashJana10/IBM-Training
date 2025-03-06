// let name = "Syncronous";
// console.log(name);
// let surName = "Code";
// console.log(surName);
// setTimeout(()=>{
//     console.log("Set time out invok - 1");
// },2000);
// setTimeout(()=>{
//     console.log("Set time out invok - 2");
// },3000);
// setTimeout(()=>{
//     console.log("Set time out invok - 3");
// },1000);

// queueMicrotask(()=>{
//     console.log("queue microtask execute - 1");
// });
// console.log(name+surName);

// async function fetchData() {
//     let data = await fetch("https://fakestoreapi.com/products");
//     let ans = await data.json();
//     console.log(data);
//     console.log(ans);
// }
// fetchData();
// async function fetchData() {
//   try {
//     let data = await fetch("https://fakestoreapi.com/products");
//     let ans = await data.json();
//     console.log(data);
//     console.log(ans);
//   } catch (error) {
//     console.log(error);
//   }
// }
// fetchData();

const fetchData = async() => {
    try {
      let data = await fetch("https://fakestoreapi.com/products");
      let ans = await data.json();
      console.log(data);
      console.log(ans);
    } catch (error) {
      console.log(error);
    }
}
fetchData();