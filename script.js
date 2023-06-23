$(window).scroll(() => {
  let val = window.scrollY;
  $("#car").css("top", val * 0.5 + "px");
  $("#title").css("top", val * 0.75 + "px");
});

$("#active").css("left", $("a[href='#home']").position().left - 13.5);
$("#active").width($("a[href='#home']").width() + 47);
$("#active").height($("a[href='#home']").height() + 11);

$("a[href^=\\#").on("click", function (event) {
  event.preventDefault();
  $("html,body").animate({ scrollTop: $(this.hash).offset().top }, 1000);
  $("#active").animate(
    { left: $(this).position().left - 13.5, width: $(this).width() + 47 },
    { duration: 1000 }
  );
});

$(".control button").on("click", function (event) {
  let target = event.target.dataset.target;
  if (!$(`#${target}`).hasClass("show")) {
    $(".show").removeClass("show");
    $(`#${target}`).addClass("show");
    $(`#${target}`).css("top", "100%");
    $(`#${target}`).animate({ top: 0 }, 500);
  }
});

// console.log($("#restore").css("top"));
