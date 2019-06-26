var positions = [];
var slideWidth = 920;
var index = 1;
var $menuButtons = $(".menu button.menuItem");

$("#slides .slide").each(function(i) {
  console.log(i);
  positions[i] = -(slideWidth * i);
})

$.each(($menuButtons), (i,menuDom) => {
  $(menuDom).on("click", slidesMove)
})

var timer = setInterval(()=> {
  $($menuButtons[index]).trigger("click", [true]);
  index = (index + 1) % $menuButtons.length;
}, 3000);

function slidesMove(e, keepScroll) {
  $(slides).css({
    transform: `translateX(${positions[$menuButtons.index(e.currentTarget)]}px)`
  });
  $(e.currentTarget).removeClass("inactive").addClass("active").siblings().removeClass("active").addClass("inactive");
  if(!keepScroll) window.clearInterval(timer);
}
