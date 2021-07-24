let left1 = document.getElementById('left1');

let play = document.getElementById('play');

play.addEventListener('click',function(){

    left1.innerHTML = null;

    let iframe = document.createElement('iframe');

    iframe.src = "preview.mp4";

    iframe.style.width = "100%";
    iframe.style.height = "100%";
    iframe.style.border = "transparent";

    left1.append(iframe);
    console.log(left1);

})

function courseview() {
    window.location.href = "courses.html"
}