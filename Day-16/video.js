let divcontainde = document.querySelector('.video');

let data = JSON.parse(localStorage.getItem("videoData"));
showData(data.id.videoId);
async function showData(videoId) {

    let box = document.createElement('div');

    let iframe = document.createElement("iframe");
    iframe.src = `https://www.youtube.com/embed/${videoId}`;
    iframe.height = "500px";
    iframe.width = "800px";
    iframe.allowFullscreen = true;
    iframe.allow = "accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture";

    box.append(iframe);
    divcontainde.append(box);    
}
