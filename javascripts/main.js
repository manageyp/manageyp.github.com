$(document).ready(function(){
  var height = $(window).outerHeight();
  var max_top = height - $("#rocket").outerHeight();
  var max_scroll = $(document).outerHeight() - $(window).outerHeight();

  $("#rocket").click(function() {
    $("#rocket_wing").show();

    $("#rocket").animate({ "top": "0px" }, 1000);

    $("body, html").animate({ scrollTop: 0 }, 1000, function(){
      $("#rocket_wing").hide();
    });
  });
});