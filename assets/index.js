$(".fas").on("click", function () {
    console.log("clicked")
    var text = $(this).parent().prev().val()
    console.log(text)
})