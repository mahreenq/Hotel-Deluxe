
// Add to Cart - changes number in cart when addtocart button is clicked

var addCart = document.getElementsByClassName("addtocart");
    var cartNum = document.getElementById("cartTotalItems");


    for (var i = 0; i < addCart.length; i++) {
        addCart[i].onclick=function(){
        var count = cartNum.innerHTML;
        cartNum.innerHTML = parseInt(count) +1;
    }
}

// changes number of slides depending on width of screen on slider

if ($(window).width() < 600) {
    $('.bxSlider').bxSlider({
    maxSlides:1,
    minSlides:1,
    slideWidth: 400,
  });
} else if ($(window).width() < 1000){
  $('.bxSlider').bxSlider({
    maxSlides:2,
    minSlides:2,
    slideWidth: 400,
  });
} else {
  $('.bxSlider').bxSlider({
    maxSlides:4,
    minSlides:4,
    slideWidth: 400,
  });
}
