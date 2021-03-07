$(".fas").on("click", function () {
    console.log("clicked")
    var text = $(this).parent().prev().val()
    console.log(text)
})

var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);

  
  