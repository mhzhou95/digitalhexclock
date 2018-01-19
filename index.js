setInterval(function(){
  var d = new Date();
  var h = d.getHours();
  var m = d.getMinutes();
  var s = d.getSeconds();
  if (h>10) {
    hours.innerHTML = h
  }else {
    hours.innerHTML = "0" + h
  }
  if (m>10) {
    minutes.innerHTML = m
  }else {
  minutes.innerHTML = "0" + m
  }
  if (s>10) {
    seconds.innerHTML = s
  }else {
      seconds.innerHTML = "0" + s
  }
}, 1000);

setInterval(function() {
  var hex = hours.innerHTML + minutes.innerHTML + seconds.innerHTML;
  document.getElementById('body').style.backgroundColor = "#" + hex;
}, 2000)
