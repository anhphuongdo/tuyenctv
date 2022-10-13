$("#id1").height($("#id0").height());
var target_date = new Date().getTime() + (1000*3600*48); // set the countdown date
var days, hours, minutes; // variables for time units

var countdown = document.getElementById("tiles"); // get tag element

getCountdown();

setInterval(function () { getCountdown(); }, 1000);

function getCountdown(){

    // find the amount of "seconds" between now and target
    var current_date = new Date().getTime();
    var seconds_left = (target_date - current_date) / 1000;

    days = pad( parseInt(seconds_left / 86400) );
    seconds_left = seconds_left % 86400;
        
    hours = pad( parseInt(seconds_left / 3600) );
    seconds_left = seconds_left % 3600;
        
    minutes = pad( parseInt(seconds_left / 60) );

    // format countdown string + set tag value
    countdown.innerHTML = "<span>" + days + "</span> : <span>" + hours + "</span> : <span>" + minutes + "</span>"; 
}

function pad(n) {
    return (n < 10 ? '0' : '') + n;
}

/* Tuyển nhân sự */
var a = document.getElementById("multi-item-example1");
var b = document.getElementById("multi-item-example2");
var c = document.getElementById("multi-item-example3");
var d = document.getElementById("multi-item-example4");
var e = document.getElementById("multi-item-example5");
var f = document.getElementById("multi-item-example6");
var hr = document.getElementById("nhansu");
function showcreative() {
    var a = document.getElementById("multi-item-example1");
    var b = document.getElementById("multi-item-example2");
    var c = document.getElementById("multi-item-example3");
    var d = document.getElementById("multi-item-example4");
    var e = document.getElementById("multi-item-example5");
    var f = document.getElementById("multi-item-example6");
    var hr = document.getElementById("nhansu");
if (a.style.display === "none") {
    a.style.display = "block";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    hr.style.display = "none";

} else {
    a.style.display = "none";
}
}
function showcontent(){
    var a = document.getElementById("multi-item-example1");
var b = document.getElementById("multi-item-example2");
var c = document.getElementById("multi-item-example3");
var d = document.getElementById("multi-item-example4");
var e = document.getElementById("multi-item-example5");
var f = document.getElementById("multi-item-example6");
var hr = document.getElementById("nhansu");
    if (b.style.display === "none") {
        a.style.display = "none";
        b.style.display = "block";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    hr.style.display = "none";

    } else {
        b.style.display = "none";
    }
}
function showmedia(){
    var a = document.getElementById("multi-item-example1");
var b = document.getElementById("multi-item-example2");
var c = document.getElementById("multi-item-example3");
var d = document.getElementById("multi-item-example4");
var e = document.getElementById("multi-item-example5");
var f = document.getElementById("multi-item-example6");
var hr = document.getElementById("nhansu");

    if (c.style.display === "none") {
        c.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
    hr.style.display = "none";

        
    } else {
        c.style.display = "none";
    }
}
function showtalent(){
    var a = document.getElementById("multi-item-example1");
var b = document.getElementById("multi-item-example2");
var c = document.getElementById("multi-item-example3");
var d = document.getElementById("multi-item-example4");
var e = document.getElementById("multi-item-example5");
var f = document.getElementById("multi-item-example6");
var hr = document.getElementById("nhansu");

    if (d.style.display === "none") {
        d.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        e.style.display = "none";
        f.style.display = "none";
        hr.style.display = "none";
    } else {
        d.style.display = "none";
    }
}
function showtech(){
    var a = document.getElementById("multi-item-example1");
var b = document.getElementById("multi-item-example2");
var c = document.getElementById("multi-item-example3");
var d = document.getElementById("multi-item-example4");
var e = document.getElementById("multi-item-example5");
var f = document.getElementById("multi-item-example6");
var hr = document.getElementById("nhansu");

    if (e.style.display === "none") {
        e.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        f.style.display = "none";
        hr.style.display = "none";
    } else {
        e.style.display = "none";
    }
}
function showhr(){
    var a = document.getElementById("multi-item-example1");
var b = document.getElementById("multi-item-example2");
var c = document.getElementById("multi-item-example3");
var d = document.getElementById("multi-item-example4");
var e = document.getElementById("multi-item-example5");
var f = document.getElementById("multi-item-example6");
var hr = document.getElementById("nhansu");

    if (f.style.display === "none") {
        f.style.display = "block";
        a.style.display = "none";
        b.style.display = "none";
        c.style.display = "none";
        d.style.display = "none";
        e.style.display = "none";
    hr.style.display = "none";
    } else {
        f.style.display = "none";
    }
}
function hide(){
var a = document.getElementById("multi-item-example1");
var b = document.getElementById("multi-item-example2");
var c = document.getElementById("multi-item-example3");
var d = document.getElementById("multi-item-example4");
var e = document.getElementById("multi-item-example5");
var f = document.getElementById("multi-item-example6");
var hr = document.getElementById("nhansu");

    a.style.display = "none";
    b.style.display = "none";
    c.style.display = "none";
    d.style.display = "none";
    e.style.display = "none";
    f.style.display = "none";
    hr.style.display ="block";
}

/* thông tin chi tiết */
function Detail1() {
var x = document.getElementById("dt1");
if (x.style.display === "none") {
    x.style.display = "block";
} else {
    x.style.display = "none";
}
}

function Detail2() {
var y = document.getElementById("dt2");
if (y.style.display === "none") {
    y.style.display = "block";
} else {
    y.style.display = "none";
}
}

function Detail3() {
var z = document.getElementById("dt3");
if (z.style.display === "none") {
    z.style.display = "block";
} else {
    z.style.display = "none";
}
}
function hideDetail(){
var z = document.getElementById("dt3");
var x = document.getElementById("dt1");
var y = document.getElementById("dt2");
x.style.display = "none";
    z.style.display = "none";
    y.style.display = "none";
}
  
