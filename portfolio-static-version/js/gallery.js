function myFunction(img) {
  var popup = document.querySelector(".click");
  var popupImg = document.getElementById("lastImg");
  
  popup.style.display = "flex";  
  popupImg.src = img.src;
}
