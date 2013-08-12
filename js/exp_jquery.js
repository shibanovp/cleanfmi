$(function () {
  $("p.detailes").css("background-color", "yellow").show("fast");
  alert("now changing");
  $("p.detailes").text("Changed by jQuery");
});

/*(function(){
    window.onload = function(e){
        var divs = $("div");
        alert(divs[0]);
        $("p.detailes").css("background-color", "yellow").show("fast");
    }
})()*/
