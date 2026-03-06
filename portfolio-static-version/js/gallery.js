let images = document.querySelectorAll(".col img");
let currentIndex = 0;

function myFunction(img) {
  var popup = document.getElementById("popup");
  var popupImg = document.getElementById("lastImg");
  
  popup.style.display = "flex";  
  popupImg.src = img.src;

    images.forEach((image, index) => {
    if(image === img){
      currentIndex = index;
    }
  });
}

function changeImg(direction){

  currentIndex += direction;

  if(currentIndex < 0){
    currentIndex = images.length - 1;
  }

  if(currentIndex >= images.length){
    currentIndex = 0;
  }

  document.getElementById("lastImg").src = images[currentIndex].src;

}

const bigImg = document.getElementById("lastImg");

if(bigImg){
  bigImg.addEventListener("wheel", function(e){

    e.preventDefault();

    let scale = this.dataset.scale
      ? parseFloat(this.dataset.scale)
      : 1;

    if(e.deltaY < 0){
      scale += 0.1;
    } else {
      scale -= 0.1;
    }

    scale = Math.min(Math.max(scale, 1), 3);

    this.style.transform = `scale(${scale})`;
    this.dataset.scale = scale;

  });
}



bigImg.addEventListener("mousedown",(e)=>{

  isDragging = true;

  startX = e.clientX - translateX;
  startY = e.clientY - translateY;

  bigImg.style.cursor = "grabbing";

});

document.addEventListener("mousemove",(e)=>{

  if(!isDragging) return;

  translateX = e.clientX - startX;
  translateY = e.clientY - startY;

  bigImg.style.transform =
    `translate(${translateX}px,${translateY}px) scale(${scale})`;

});

document.addEventListener("mouseup",()=>{
  isDragging = false;
  bigImg.style.cursor = "grab";
});


bigImg.addEventListener("touchmove",(e)=>{

  if(e.touches.length === 1){

    let touch = e.touches[0];

    translateX = touch.clientX;
    translateY = touch.clientY;

    bigImg.style.transform =
      `translate(${translateX}px,${translateY}px) scale(${scale})`;

  }

});


function closePopup(){
  document.getElementById("popup").style.display = "none";
}

document.addEventListener("keydown", function(e){

  if(e.key === "Escape"){
    closePopup();
  }

  if(e.key === "ArrowRight"){
    changeImg(1);
  }

  if(e.key === "ArrowLeft"){
    changeImg(-1);
  }

});
