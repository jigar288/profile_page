
function alerting(){
  alert("this");

}

function hidehead() {

  $("h1").fadeOut();

}

function hidePs(){
  $("p").fadeOut();


}

function moveText() {
  var input_text = $('input').val();
  $('#result').text(input_text);
  alert(input_text);

}

function submitbtn() {
  $('#submitbutton').click(moveText);

}

function load() {
//setTimeout(alerting, 3000);
//  hidePs();
$("button").hover(hidehead);
submitbtn();

}

$(document).ready(load);




function disappear() {
  $(".disappear-div").toggleClass("hidden");
}

$(document).ready(function() {

    $("#disappear-btn").click(disappear);
  //$("#disappear-div").hide();
  //$(".paragraph").fadeOut(1000);


  }

$('#pickdate').datetimepicker({
  format: 'Y-m-d H:s',
  minDate: 0,
  disabledWeekDays: [3], // this will disable Wednesday
  allowTimes: new Date().getDay() == 2 ? ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00'] : ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00'], // this we show 8am-2pm if today day is Tuesday
  onChangeDateTime:function(dp,$input){ // this will switch available time when choose the day
   	if (dp.getDay() == 2) {
    	this.setOptions({
        allowTimes: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00']
      });
    } else {
    	this.setOptions({
        allowTimes: ['08:00', '09:00', '10:00', '11:00', '12:00', '13:00', '14:00', '15:00', '16:00', '17:00', '18:00']
      });
    }
   }
}




)
