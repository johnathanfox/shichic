$('.scroll a[href^="#"]').on("click", function(t) {
    t.preventDefault();
    var o = $(this).attr("href")
      , e = $(o).offset().top;
    $("html, body").animate({
        scrollTop: e - +200
    }, 500)
});
