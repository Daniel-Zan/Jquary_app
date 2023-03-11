$(document).ready(function () {
  $(".acordeon li article").hide();
  $(".acordeon li button").click((e) => {
    var idBtn= e.target.id;
    var idArticle = idBtn.replace('Btn', '')
   $("#" + idArticle).toggle();
  });
});
