$(".fas").on("click", function () {
    console.log("clicked")
    var text = $(this).parent().prev().val()
    console.log(text)
})

var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);





var tasks = {
    "9": [],
    "10": [],
    "11": [],
    "12": [],
    "13": [],
    "14": [],
    "15": [],
    "16": [],
    "17": []
};

var setTasks = function () {
    /* add tasks to localStorage */
    localStorage.setItem("tasks", JSON.stringify(tasks));
}

var getTasks = function () {
    /* load the tasks from localStorage and create tasks in the right row */

    var loadedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (loadedTasks) {
        tasks = loadedTasks

        // for each key/value pair in tasks, create a task
        $.each(tasks, function (hour, task) {
            var hourDiv = $("#" + hour);
            createTask(task, hourDiv);
        })
    }
}
