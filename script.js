
setInterval(() => {
var current = new Date();
var hours = current.getHours();
var minutes = current.getMinutes();
var seconds = current.getSeconds();
let hour = document.getElementById("hrs")
let minute  = document.getElementById("min")
let second = document.getElementById("sec")


hour.innerHTML = (hours<10?"0":'') + hours
minute.innerHTML = (minutes<10?"0":'') + minutes
second.innerHTML = (seconds<10?"0":'') + seconds
    
}, 1000);
