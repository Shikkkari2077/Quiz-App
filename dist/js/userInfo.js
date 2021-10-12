let urname = sessionStorage.getItem('name')
let points = sessionStorage.getItem('points')
let user_time = sessionStorage.getItem('time')

document.querySelector(".name").innerHTML = urname
document.querySelector(".points").innerHTML = points
document.querySelector(".time").innerHTML = user_time

function back(){
    location.href="/index.html"
}