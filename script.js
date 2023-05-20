const container= document.querySelector('.img_container');
const allimages= document.querySelectorAll('.thumb');
const onclickimg = document.querySelector('.img-item')
const diviimg = document.querySelectorAll('.divimg');
const imageitems = [];
let i = 0;

diviimg.forEach(function(item){
  imageitems.push(item.src);
})

diviimg.forEach(function(item){
  item.addEventListener("click", function(e){
let image = e.target.src;
onclickimg.style.backgroundImage = `url(${image})`;
        container.classList.add("show");
        i = imageitems.indexOf(image);
});

});

let lbtn = document.querySelector(".btnLeft");
let rbtn = document.querySelector(".btnRight");

rbtn.addEventListener("click",function() {
  ++i;
  if (i>imageitems.length-1) {
    i=0;
  }
  onclickimg.style.backgroundImage = `url(${imageitems[i]})`;
})

lbtn.addEventListener("click", function() {
  --i;
  if (i<0) {
    i=imageitems.length-1;
  }
  onclickimg.style.backgroundImage = `url(${imageitems[i]})`;
})

const cbtn = document.querySelector(".close");
cbtn.addEventListener("click",function() {
  container.classList.remove("show");
});
