function checkValue() {
  var text;
  var lang = document.getElementById("inputValue").value;

  switch(lang) {
    case "Strong":
      text = "Hopefully";
      break;
    case "intelligent;":
      text = "Maybe";
      break;
    case "Rich":
      text = "Of course";
      break;

    // add case Here

    default:
      text = "Wrong answer!";
  }
  document.getElementById("displayText").innerHTML = text;
}
