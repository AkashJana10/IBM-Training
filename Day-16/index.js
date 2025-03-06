let API_KEY = "AIzaSyDXvFI5l8qC3vQLPo4hrORJfSp2fh7B7A4";
let videoContainer = document.querySelector(".video");

// Function to fetch videos from YouTube API
async function getData(searchTerm = "university") {
  try {
    let response = await fetch(
      `https://youtube.googleapis.com/youtube/v3/search?part=snippet&q=${searchTerm}&type=video&maxResults=20&key=${API_KEY}`
    );
    let data = await response.json();
    
    videoContainer.innerHTML = ""; 
    showVideoCards(data.items);
    console.log(data.items)
  } catch (error) {
    console.log("Error fetching data:", error);
  }
}

function showVideoCards(videos) {
  videoContainer.innerHTML = ""; // Clear previous results
  
  videos.forEach(({ snippet, id: { videoId } }) => {
    let div = document.createElement("div");
    div.className = "videos";

    let img = document.createElement("img");
    img.src = snippet.thumbnails.medium.url;
    img.alt = snippet.title;

    let title = document.createElement("p");
    title.innerText = snippet.title;

    let channelTitle = document.createElement("p");
    channelTitle.innerText = snippet.channelTitle;

    div.append(img, title, channelTitle);
    videoContainer.append(div);


    div.addEventListener("click", () => {
      let clickData = { snippet, id: { videoId } };
      localStorage.setItem("videoData", JSON.stringify(clickData));
      window.location.href = "video.html";
    });
  });
}

let searchBtn = document.querySelector(".search-btn");
searchBtn.addEventListener("click", () => {
  let searchInput = document.querySelector(".search-input").value.trim();
  if (searchInput) {
    getData(searchInput); 
  }
});

// getData();
