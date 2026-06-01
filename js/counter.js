var user = {
        agent: window.navigator.userAgent,
        date: new Date().getDate()+"-"+(new Date().getMonth()+1)+" / "+new Date().getHours()+":"+new Date().getMinutes()
    };
var timer = 0;

var action = new XMLHttpRequest();
action.open("post", "http://www.fin-finder.website", true);
action.setRequestHeader("Content-Type", "application/json");
action.send(JSON.stringify(user));

// setInterval(() => {
//             timer++;
//             action.open("post", "", true);
//             action.setRequestHeader("Content-Type", "text/plain");
//             action.send(timer);
//         }, 2000);
        
