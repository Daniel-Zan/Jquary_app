$(document).ready(function () {
  $(".acordeon li article").hide();
  $(".acordeon li button").click(() => {
    console.log($(this));
  //  $("acordeon li article").show();
  });
});
