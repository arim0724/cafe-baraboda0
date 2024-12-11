
//depth2
$(".gnb > li ").hover(function () {
  $(this).find(".depth2").stop().fadeToggle();
});


//search
$(".search").hide();
$(".btn_search").click(function () {
  $(".search").fadeIn();
  $("body").css({ "overflow": "hidden" })
});

$(".search_close").click(function () {
  $(".search").fadeOut();
  $("body").css({ "overflow": "auto" })
});

//ham
$(".ham").click(function () {
  $(".dim").fadeIn();
  $(".mgnb_wrap").animate({
    "right": "0"
  })
});

$(".mgnb_close").click(function () {
  $(".dim").fadeOut();
  $(".mgnb_wrap").animate({
    "right": "-100%"
  })
});



$(".mgnb > li").click(function () {
  $(this).find(".mdepth2").stop().slideToggle();
  $(this).siblings.find(".mdepth2").stop().sildeUp();
});



//비주얼슬라이드
const visual_list = new Swiper('.visual_list', {
  //autoplay: {
  // delay: 3000,
  //disableOnInteraction: false,
  //},
  effect: "fade", /* 페이드효과 */
  fadeEffect: {
    crossFade: true
  },
  speed: 1000,
  loop: true, //기본값은 false 슬라이드 반복
  navigation: {
    nextEl: ".swiper-button-next",//다음
    prevEl: ".swiper-button-prev",//이전
  }, /* 노션에 정리해두면 좋아  */
  pagination: {
    el: ".swiper-pagination",
    type: "fraction",
  },
});





//왼쪽
const coffee_txt_list = new Swiper('.coffee_txt_list', {
  effect: "fade", /* 페이드효과 */
  fadeEffect: {
    crossFade: true
  },

});


//오른쪽
const coffee_img_list = new Swiper('.coffee_img_list', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
  pagination: {
    el: ".swiper-pagination",
    type: "bullets",
  },
});

coffee_txt_list.controller.control = coffee_img_list
coffee_img_list.controller.control = coffee_txt_list



//비주얼슬라이드
const prd_list = new Swiper('.prd_list', {
  autoplay: {
    delay: 3000,
    disableOnInteraction: false,
  },
  speed: 1000,
  centeredSlides: true,
  loop: true,
  navigation: {
    nextEl: ".swiper-button-next",//다음
    prevEl: ".swiper-button-prev",//이전
  },
  breakpoints: {
    0: {
      slidesPerView: 1.5,
    },
    768: {
      slidesPerView: 2,
    },
    1200: {
      slidesPerView: 4,
    }

  }
});


/* 아코디언 */
$(".gallery ul li:nth-child(1)").addClass("active");
$(".gallery ul li").click(function () {
  $(this).toggleClass("active");
  $(this).siblings().removeClass("active");
});



