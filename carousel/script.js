const images = document.getElementById("images");
const image = document.querySelectorAll("#images img");

let index = 0;

function next(){
    index++;
    if(index > image.length-1){
        index = 0;
    }

    images.style.transform = `translateX(${-index * 500}px)`;

}

setInterval(next, 2000);