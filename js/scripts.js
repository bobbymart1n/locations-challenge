//business logic
function Location(place, date, landmark, climate) {
  this.placeName = place;
  this.timeOfYear = date;
  this.landmark = landmark;
  this.weather = climate;

}
//user interface logic
$(document).ready(function () {
  $("#place").submit(function(event) {
    event.preventDefault();
    var inputtedPlace = $("#locationName").val();
    var inputtedDate = $("#date").val();
    var inputtedLandmark = $("#landmark").val();
    var inputtedClimate = $("#climate").val();

    var newLocation = new Location(inputtedPlace, inputtedDate, inputtedLandmark, inputtedClimate);
    $("#output ul").append("<li><span class='location'>" + newLocation.placeName +"</span></li>")

    $("#output").last().click(function() {
      $("#show-location").show();
      $("#show-location h2").text(newLocation.placeName);
      $(".date").text(newLocation.timeOfYear);
      $(".landmark").text(newLocation.landmark);
      $(".climate").text(newLocation.weather);
    });
  });
});
