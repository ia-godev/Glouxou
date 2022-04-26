let fullScrenImg = document.getElementById("fullScrenImg");
let body = document.getElementById("body");
let close_btn = document.getElementById("close_btn");
const imgs = document.querySelectorAll("img");

window.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && fullScrenImg.classList.contains("fullScren")) {
    closeFullScrenImg();
  }
});

close_btn.addEventListener("click", closeFullScrenImg);
for (let i = 1; i < imgs.length + 1; i++) {
  let img = document.getElementById("img" + i);
  img.addEventListener("click", () => {
    openFullScrenImg(img, i);
  });
}

function openFullScrenImg(img, i) {
  let new_img = img.cloneNode();
  fullScrenImg.classList.add("fullScren");
  close_btn.classList.add("active");
  body.style.overflow = "hidden";
  fullScrenImg.appendChild(new_img);
}

function closeFullScrenImg() {
  let img = fullScrenImg.lastElementChild;
  fullScrenImg.classList.remove("fullScren");
  close_btn.classList.remove("active");
  body.style.overflow = "auto";
  fullScrenImg.removeChild(img);
}
