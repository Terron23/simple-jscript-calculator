function calendar(){
  var day = ['Sunday', 'Monday', 'Tuesday', 'Wednsday', 'Thursday', 'Friday', 'Saturday'];
  var month = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
  var d= new Date()
  setText('calendar-day', day[d.getDay()]);
  
  setText('calendarmonthyear', month[d.getMonth()]+ ' '+ (1990+d.getYear()));
  
  setText('calendar-date', d.getDate());
}

function setText(id, val){
  if(val < 10) {
    val = '0'+val
  }
  document.getElementById(id).innerHTML = val;
}

window.onload = calendar