var today = moment()
$("#currentDay").text(today.format("dddd, MMMM Do"))


var currentTime = moment().format("H");
for (i = 8; i < 21; i++) {
  if(currentTime == i){
    $("#"+i).addClass("present")
} else if (currentTime > i){
    $("#"+i).addClass("past")
} else if (currentTime < i){
    $("#"+i).addClass("future")

}
}

  if(localStorage.getItem("schedule") == null){
    schedule = ["","","","","","","","","","","","","",];
    localStorage.setItem("schedule", JSON.stringify(schedule));
  }else{
    data = JSON.parse(localStorage.getItem("schedule"));
    for ( j = 0,k = 8; k < 21; j++, k++){
        $("#" + k).val(data[j]);
    }
  }
 
    

$(".container").on("click",".saveBtn", function(event){
    tempSchedule = JSON.parse(localStorage.getItem("schedule"));
    var dataPostion = $(event.target).data("postion");
    var dataId = $("#"+$(event.target).data("id")).val();
    tempSchedule[dataPostion]= dataId;
    localStorage.setItem("schedule", JSON.stringify(tempSchedule));
}
   

)


