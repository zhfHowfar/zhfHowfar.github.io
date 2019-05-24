
var cover = document.querySelector(".cover");

var td = document.getElementsByTagName("td");

var table = document.querySelector("table");

var revertime = document.getElementById("revertime");

var graed = document.getElementById("grade");

var minzl = document.getElementById("minzl");

var time = revertime.placeholder;
var scor = 0;
var sum = 0;
for (var i = 0; i < td.length; i++) {
    td[i].onmousedown = function () {

        table.style.cursor = "url(img/chuizi2.png),auto";
    }

    td[i].onmouseup = function () {
        sum++;
        table.style.cursor = "url(img/chuizi.png),auto";
        if (this.innerHTML == '<img src="img/mouse1.png" alt="">') {
            scor++;
            this.innerHTML = '<img src="img/mouse2.png" alt="">';
        }
        graed.placeholder = scor;
        minzl.placeholder = parseInt(scor / sum * 100)+"%";

    }

}



document.getElementById("easy").onclick = function () {
    startime(1500, 800);
}

document.getElementById("hard").onclick = function () {
    startime(800, 400);
}

function startime(time1, time2) {
    cover.style.display = "none";
    //生成随机数随机取到td
    var mouseid = setInterval(function () {
        var num = parseInt(Math.random() * td.length);

        td[num].innerHTML = '<img src="img/mouse1.png" alt="">';

        setTimeout(function () {
            td[num].innerHTML = "";
        }, time2)

    }, time1)

    var timeid = setInterval(function () {
        time--;
        revertime.placeholder = time;
        if (time == 0) {
            clearInterval(mouseid);
            clearInterval(timeid);
            alert("游戏结束");
        }
    }, 3000)


}