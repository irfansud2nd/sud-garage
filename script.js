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
  $(window).scrollTo($(this.hash), {
    duration: 1000,
    onAfter: () => {
      if (window.scrollY !== $(this.hash).offset().top) {
        $(window).scrollTo($(this.hash), {
          duration:
            (($(this.hash).offset().top - window.scrollY) /
              $(this.hash).offset().top) *
            1000,
        });
      }
    },
  });
  $("#active").animate(
    { left: $(this).position().left - 13.5, width: $(this).width() + 47 },
    { duration: 1000 }
  );
  if (this.hash == "#services") {
    $("#services .show .caption").css("animation", "fadeIn 1s .5s forwards");
  } else {
    $("#services .show .caption").css("animation", "fadeOut 1s forwards");
  }
});

$(".control>div").on("click", function (event) {
  let target = event.target.dataset.target;
  if (!$(`#${target}`).hasClass("show")) {
    $("#services .show .caption").css("animation", "fadeOut 1s forwards");
    $(".show").removeClass("show");
    $(`#${target}`).addClass("show");
    $(`#${target}`).css("top", "100%");
    $(`#${target}`).animate({ top: 0 }, 500);
    let x = $(".image").filter(function () {
      return $(this).hasClass("show") == false;
    });
    setTimeout(() => {
      x.css("top", "100%");
    }, 500);
    $("#services .show .caption").css("animation", "fadeIn 1s .4s forwards");
  }
  if (!$(`#${target}`).hasClass("active-control")) {
    $(".active-control").removeClass("active-control");
    $(this).addClass("active-control");
    console.log(this);
  }
});

function alertsucces(e) {
  e.preventDefault();
  swal({
    title: "Succes!",
    text: "its just a dummy form :)",
    icon: "success",
  }).then(() => {
    $("form>div>input,form>div>textarea").val("");
    console.log(window.scrollY, $("#contact").offset().top);
  });
  return false;
}
