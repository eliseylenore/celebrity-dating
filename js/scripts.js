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

  $("#hairButton").click(function(event){
    $(".hideMe").hide();
    event.preventDefault();
    var hair = $("input:radio[name=hair]:checked").val();
    if (hair === "receding") {
      $("#jerry").show();
    } else if (hair === "curly") {
      $("#john").show();
    } else if (hair === "bald") {
      $("#david").show();
    } else {
      alert("If you don't choose a hairstyle you will be alone forever.")
    }
  });

  $("#buttButton").click(function(event){
    $(".hideMe").hide();

    event.preventDefault();
    var butt = $("#buttSize").val();
    console.log(butt);
    if (butt === "small") {
      $("#zooey").show();
    } else if (butt === "medium"){
      $("#sophia").show();
    } else if (butt === "large") {
      $("#nicki").show();
    } else {
      alert("Pick a butt size, come on!")
    }
  });
});
