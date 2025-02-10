var xhr = new XMLHttpRequest(), ua = navigator.userAgent;

document.addEventListener("DOMContentLoaded", function(){

   xhr.open("GET", "server.php?ua=" + encodeURIComponent(ua));
   xhr.send();
});
