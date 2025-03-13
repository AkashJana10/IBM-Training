let parent = document.getElementById("parent");
async function getData() {
  let data = await fetch(`http://localhost:3000/posts`);
  let res = await data.json();
  showData(res);
  console.log(res);
}
// getData(); // calling by default 1 time to show the data
async function showData(array) {
  parent.innerHtml = "";

  array.forEach((el, index) => {
    let box = document.createElement("div");
    box.className = "box";

    let title = document.createElement("p");
    title.innerText = el.title;

    let views = document.createElement("p");
    views.innerText = el.views;

    let updateBtn = document.createElement("button");
    updateBtn.innerText = "UpdateValue";
    updateBtn.id = "update-btn";
    updateBtn.addEventListener("click", () => {
      handleUpdateBtn(el.id);
    });

    let deleteBtn = document.createElement("button");
    deleteBtn.innerText = "DeleteValue";
    deleteBtn.id = "delete-btn";
    deleteBtn.addEventListener("click", () => {
      handleDeleteBtn(el.id);
    });

    box.append(title, views, updateBtn, deleteBtn);
    parent.append(box);
  });
}

let clickBtn = document.getElementById("btn");
clickBtn.addEventListener("click", async () => {
  let value = document.getElementById("input").value;
  let obj = {
    title: value,
    views: Math.floor(Math.random() * 500),
  };
  try {
    let res = await fetch(`http://localhost:3000/posts`, {
      method: "POST",
      Headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    if (res) {
      alert("Data save successfuly");
      getData();
    }
    let responce = res.json();
    console.log(responce);
  } catch (error) {
    console.log(error);
  }
});

async function handleUpdateBtn(id) {
  let value = prompt("Enter new value");
  let obj = {
    title: value,
    views: Math.floor(Math.random() * 500),
  };
  try {
    let res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "PUT",
      Headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(obj),
    });
    if (res) {
      alert("Data update successfuly");
      getData();
    }
    let responce = res.json();
    console.log(responce);
  } catch (error) {
    console.log(error);
  }
}

async function handleDeleteBtn(id) {
  try {
    let res = await fetch(`http://localhost:3000/posts/${id}`, {
      method: "DELETE",
    });
    if (res) {
      alert("Data delete successfuly");
      getData();
    }
    let responce = res.json();
    console.log(responce);
  } catch (error) {
    console.log(error);
  }
}
