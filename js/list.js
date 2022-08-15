localStorage.setItem("delete1", "none");
localStorage.setItem("delete2", "none");
localStorage.setItem("delete3", "none");
localStorage.setItem("delete4", "none");

//汽水的代码快
//增加
sessionStorage.setItem("latiao", "3");
var latiao = Number(sessionStorage.getItem("latiao"));
function increase1() {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.clickcount1) {
      sessionStorage.clickcount1 = Number(sessionStorage.clickcount1) + 1;
    } else {
      sessionStorage.clickcount1 = 1;
    }
    document.getElementById("latiao").innerHTML = Number(
      sessionStorage.clickcount1
    );
    document.getElementById("n_latiao").innerHTML =
      sessionStorage.clickcount1 * latiao + "元";
  } else {
    tishi();
  }
}
//减少
function reduce1() {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.clickcount1) {
      sessionStorage.clickcount1 = Number(sessionStorage.clickcount1) - 1;
    } else {
      sessionStorage.clickcount1 = 1;
    }
    document.getElementById("latiao").innerHTML = Number(
      sessionStorage.clickcount1
    );
    document.getElementById("n_latiao").innerHTML =
      sessionStorage.clickcount1 * latiao + "元";

    if (sessionStorage.clickcount1 <= 1) {
      delete1();
    }
  } else {
    tishi();
  }
}
//提示的代码快
function tishi() {
  alert("抱歉，您的浏览器不支持 Web Stoeage");
}
function delete1() {
  document.getElementById("delete1").style.display =
    localStorage.getItem("delete1");
  sessionStorage.removeItem("clickcount1");
}
//汽水的代码快
//增加
sessionStorage.setItem("shupian", "5");
var shupian = Number(sessionStorage.getItem("shupian"));
function increase2() {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.clickcount2) {
      sessionStorage.clickcount2 = Number(sessionStorage.clickcount2) + 1;
    } else {
      sessionStorage.clickcount2 = 1;
    }
    document.getElementById("shupian").innerHTML = Number(
      sessionStorage.clickcount2
    );
    document.getElementById("n_shupian").innerHTML =
      sessionStorage.clickcount2 * shupian + "元";
  } else {
    tishi();
  }
}
//减少
function reduce2() {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.clickcount2) {
      sessionStorage.clickcount2 = Number(sessionStorage.clickcount2) - 1;
    } else {
      sessionStorage.clickcount2 = 1;
    }
    document.getElementById("shupian").innerHTML = Number(
      sessionStorage.clickcount2
    );
    document.getElementById("n_shupian").innerHTML =
      sessionStorage.clickcount2 * shupian + "元";

    if (sessionStorage.clickcount2 <= 1) {
      delete2();
    }
  } else {
    tishi();
  }
}
//提示的代码快
function tishi() {
  alert("抱歉，您的浏览器不支持 Web Stoeage");
}
function delete2() {
  document.getElementById("delete2").style.display =
    localStorage.getItem("delete2");
  sessionStorage.removeItem("clickcount1");
}
//汽水的代码快
//增加
sessionStorage.setItem("qishui", "2");
var qishui = Number(sessionStorage.getItem("qishui"));
function increase3() {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.clickcount3) {
      sessionStorage.clickcount3 = Number(sessionStorage.clickcount3) + 1;
    } else {
      sessionStorage.clickcount3 = 1;
    }
    document.getElementById("qishui").innerHTML = Number(
      sessionStorage.clickcount3
    );
    document.getElementById("n_qishui").innerHTML =
      sessionStorage.clickcount3 * qishui + "元";
  } else {
    tishi();
  }
}
//减少
function reduce3() {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.clickcount3) {
      sessionStorage.clickcount3 = Number(sessionStorage.clickcount3) - 1;
    } else {
      sessionStorage.clickcount3 = 1;
    }
    document.getElementById("qishui").innerHTML = Number(
      sessionStorage.clickcount3
    );
    document.getElementById("n_qishui").innerHTML =
      sessionStorage.clickcount3 * qishui + "元";

    if (sessionStorage.clickcount3 <= 1) {
      delete3();
    }
  } else {
    tishi();
  }
}
//提示的代码快
function tishi() {
  alert("抱歉，您的浏览器不支持 Web Stoeage");
}
function delete3() {
  document.getElementById("delete3").style.display =
    localStorage.getItem("delete3");
  sessionStorage.removeItem("clickcount3");
}
//汽水的代码快
//增加
sessionStorage.setItem("shili", "1");
var shili = Number(sessionStorage.getItem("shili"));
function increase4() {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.clickcount4) {
      sessionStorage.clickcount4 = Number(sessionStorage.clickcount4) + 1;
    } else {
      sessionStorage.clickcount4 = 1;
    }
    document.getElementById("shili").innerHTML = Number(
      sessionStorage.clickcount4
    );
    document.getElementById("n_shili").innerHTML =
      sessionStorage.clickcount4 * shili + "元";
  } else {
    tishi();
  }
}
//减少
function reduce4() {
  if (typeof Storage !== "undefined") {
    if (sessionStorage.clickcount4) {
      sessionStorage.clickcount4 = Number(sessionStorage.clickcount4) - 1;
    } else {
      sessionStorage.clickcount4 = 1;
    }
    document.getElementById("shili").innerHTML = Number(
      sessionStorage.clickcount4
    );
    document.getElementById("n_shili").innerHTML =
      sessionStorage.clickcount4 * shili + "元";

    if (sessionStorage.clickcount4 <= 1) {
      delete4();
    }
  } else {
    tishi();
  }
}
//提示的代码快
function tishi() {
  alert("抱歉，您的浏览器不支持 Web Stoeage");
}
function delete4() {
  document.getElementById("delete4").style.display =
    localStorage.getItem("delete4");
  sessionStorage.removeItem("clickcount4");
}
//一个小担心： 一个物品的交互就用了40行代码，后续的优化工作量依然很大
