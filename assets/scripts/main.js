var RandomQuotes = quotes[Math.floor(Math.random() * quotes.length)];

$(document).ready(function() {

  $("#random-quote").prepend("<p>" + RandomQuotes + "</p>")
  $('#random-quote').click(function() {
    var RandomQuotes = quotes[Math.floor(Math.random() * quotes.length)];
    $("#random-quote").text(RandomQuotes)

  })


});

// document.getElementById("random-quote").innerHTML = RandomQuotes;
