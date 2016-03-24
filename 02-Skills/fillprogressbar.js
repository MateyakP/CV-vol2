
var tab = [40, 45, 90]

function fillHTML(chien, label) {
for (var i = 1; 1 <= 6; i++) {
    var elem = document.getElementById("html" + i);
    var width = 10;
    var id = setInterval(frame, 40);
    function frame() {
        if (width >= tab[2]) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label1").innerHTML = width * 1 + '%';
        }
        }
    }
}
function fillCSS() {
    var elem = document.getElementById("css");
    var width = 10;
    var id = setInterval(frame, 40);
    function frame() {
        if (width >= 85) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label2").innerHTML = width * 1 + '%';
        }
    }
}
function fillJS() {
    var elem = document.getElementById("js");
    var width = 10;
    var id = setInterval(frame, 40);
    function frame() {
        if (width >= 40) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label3").innerHTML = width * 1 + '%';
        }
    }
}
function fillRoR() {
    var elem = document.getElementById("ror");
    var width = 10;
    var id = setInterval(frame, 40);
    function frame() {
        if (width >= 45) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label4").innerHTML = width * 1 + '%';
        }
    }
}
function fillGit() {
    var elem = document.getElementById("git");
    var width = 10;
    var id = setInterval(frame, 40);
    function frame() {
        if (width >= 50) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label5").innerHTML = width * 1 + '%';
        }
    }
}
function fillPS() {
    var elem = document.getElementById("ps");
    var width = 10;
    var id = setInterval(frame, 40);
    function frame() {
        if (width >= 60) {
            clearInterval(id);
        } else {
            width++;
            elem.style.width = width + '%';
            document.getElementById("label6").innerHTML = width * 1 + '%';
        }
    }
}
