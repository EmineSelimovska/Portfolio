function myFunction(imgs) {
    var lastImg = document.getElementById("lastImg");
    var imgText = document.getElementById("imgText");
    lastImg.src = imgs.src;
    imgText.innerHTML = imgs.alt;
    lastImg.parentElement.style.display = "block";
  }