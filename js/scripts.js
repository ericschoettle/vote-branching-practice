$(document).ready(function() {
  var age = parseFloat(prompt("Enter your age"));
  if (age<18) {
    $("#learn").show();
  } else {
    var registered = confirm("are you registered to vote?");

      if (registered) {
        $("#polling-places").show();
      } else {
        $("#register").show();
        $("#now-registered").click(function(){
          $("#register").hide();
          $("#polling-places").show();
        })
    }
  }
});
