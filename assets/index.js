$(".fas").on("click", function () {
    console.log("clicked")
    var text = $(this).parent().prev().val()
    console.log("this", $(this))
    console.log("parent", $(this).parent())
    console.log("prev", $(this).parent().prev())

    var timeSlot = $(this).parent().prev().prev().text()
    console.log("timeSlot", timeSlot)
    console.log("timeSlot", tasks[timeSlot])

    tasks[timeSlot] = text
    setTasks()
    console.log(text)
})

var currentDay = moment().format("dddd LL");
$("#currentDay").append(currentDay);

var currentTime = moment().format("LT");
$("#currentTime").append(currentTime);





var tasks = {
    "9am": "",
    "10am": "",
    "11am": "",
    "12am": "",
    "1pm": "",
    "2pm": "",
    "3pm": "",
    "4pm": "",
    "5pm": "",
    "6pm": ""
};

var setTasks = function () {
    /* add tasks to localStorage */
    localStorage.setItem("tasks", JSON.stringify(tasks));
}
getTasks()
function getTasks() {
    /* load the tasks from localStorage and create tasks in the right row */

    var loadedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (loadedTasks) {
        tasks = loadedTasks
        console.log(Object.keys(loadedTasks).length)
        for (const [key, value] of Object.entries(loadedTasks)) {
            console.log(`${key}: ${value}`);

        }
    }
    var loadedTasks = ({
        "9am": "",
        "10am": "",
        "11am": "",
        "12am": "",
        "1pm": "",
        "2pm": "",
        "3pm": "",
        "4pm": "",
        "5pm": "",
        "6pm": ""
    })


    //loop over all loaded tasks
    //place the value of each task into the id of that time




    // // for each key/value pair in tasks, create a task
    // $.each(tasks, function (hour, task) {
    //     var hourDiv = $("#" + hour);
    //     createTask(task, hourDiv);
    // })

}