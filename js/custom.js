var hr = $('#hour');
var min = $('#minute');
var sec = $('#second');
var fill = $('.fill');

function $(selector){
    return document.querySelector(selector);
}
function clock(){
    var date = new Date();
    let hour = date.getHours();
    var minute = date.getMinutes();
    var second = date.getSeconds();
    hr.textContent = hour;
    min.textContent = minute;
    sec.textContent = second;
    fill.style.width = second*100/60 + '%';

}
setInterval(clock, 1000);