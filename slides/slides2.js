
var $imagesWrapper = $(".images");
var $images = $(".images img");
var $buttons = $("#buttonWrapper");
var current = 0;

init();
bindEvents.call();

var timer = setInterval(()=> {
  goToSlide(current + 1 >= $images.length ? 0 : current + 1);
}, 3000);

$("main").on("mouseenter", ()=>{
  window.clearInterval(timer);
}).on("mouseleave", ()=> {
  timer = setInterval(() => {
    goToSlide(current + 1 >= $images.length ? 0 : current + 1);
  }, 3000);
})

$(next).on("click", ()=> {
  goToSlide(current + 1 >= $images.length ? 0 : current + 1);
})
$(previous).on("click", ()=> {
  goToSlide(current - 1 < 0 ? $images.length -1 : current - 1);
})


document.addEventListener("visibilitychange", (e) => {
  if (document.hidden) {
    window.clearInterval(timer);
  } else {
    timer = setInterval(() => {
      goToSlide(current + 1 >= $images.length ? 0 : current + 1);
    }, 3000);
  }
})




function init(){
  $imagesWrapper.append($images.eq(0).clone(true));
  $imagesWrapper.prepend($images.eq($images.length - 1).clone(true));
  $imagesWrapper.css({transform:'translateX(-400px)'});
}


function bindEvents() {
  $("#buttonWrapper").on("click", "button", (e)=> {
    goToSlide($(e.currentTarget).index());
  })
}

function goToSlide(index) {
  console.log(current,"==", $images.length - 1, index ,"==", 1);

  if (current === 0 && index === $images.length-1) {
    $imagesWrapper.css({
        transform: "translateX(0)"
    }).one("transitionend", () => {
      $imagesWrapper.hide().offset();
      $imagesWrapper.css({
        transform: `translateX(${-400 * (index + 1)}px)`
      });
      $imagesWrapper.show();
    });
  } else if(current === $images.length-1 && index === 0) {
    $imagesWrapper.css({
      transform: `translateX(${-400 * ($images.length + 1)}px)`
    }).one("transitionend", () => {
      $imagesWrapper.hide().offset();
      $imagesWrapper.css({
        transform: `translateX(${-400 * (index + 1)}px)`
      }).show();
    });
  } else {
    $imagesWrapper.css({
      transform: `translateX(${-400 * (index + 1)}px)`
    })
  }
  current = index;
}
