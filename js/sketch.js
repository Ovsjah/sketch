$div = $("#wrapper");

function gridder(squares) {
  for (i = 0; i < squares; i++) {
    $div.append("<div></div>");
  };
  for (j = 0; j < squares; j++) {
    $("#wrapper > div").append("<div></div>");
  };
  
  $("#wrapper div div").hover(function() {
    $(this).addClass("color");
    var color = `#${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}${Math.floor(Math.random() * 9)}`
    $(this).css("background-color", color); 
  });
  
  $div.prepend('<button type="button">Clear Grid</button>');
  
  $("button").click(function() {
    var squares = prompt("How many squares per side to make the new grid?");
    if (squares == 0) {
      $("div").empty();
      gridder(squares = 16);
    } else {
      $("div").empty(); // empty() removes all child nodes and content from the selected elements
      gridder(squares);
    };
  });
};

$(document).ready(gridder(squares = 16));
