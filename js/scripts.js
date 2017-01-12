$(document).ready(function(){
  $("#preferenceButton").click(function(event){
    $(".hideMe").hide();
    event.preventDefault();
    var preference = $("#gender").val();
    if (preference === "Male") {
      $("#maleOptions").show();
    } else if (preference === "Female") {
      $("#femaleOptions").show();
    } else {
      alert("Please select your prefered gender");
    }
  });

  $("hairButton").click(function(event){
    $(".hideMe").hide();
    event.preventDefault();
  });
});
