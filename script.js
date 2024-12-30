const fav = document.querySelectorAll("#fav");
let clicked = false;

const save = document.querySelectorAll("#save");
let saved = false;

fav.forEach(fav => {
  fav.addEventListener("click", function (e) {
    if(!clicked){
      e.target.src = "favorite_16dp_EA3323_FILL0_wght400_GRAD0_opsz20.svg";
      clicked = true;
    } else {
      e.target.src = "favorite_16dp_5F6368_FILL0_wght400_GRAD0_opsz20.svg";
      clicked = false;
    }
  });
});

save.forEach(save => {
  save.addEventListener("click", function(e){
    if(!saved){
      e.target.src = "bookmark_16dp_0000F5_FILL0_wght400_GRAD0_opsz20.svg";
      saved = true;
    }
    else{
      e.target.src = "bookmark_16dp_5F6368_FILL0_wght400_GRAD0_opsz20.svg"
      saved = false;
    }
  })
});
