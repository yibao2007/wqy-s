localStorage.setItem("delete1", "none");
localStorage.setItem("delete2", "none");
localStorage.setItem("delete3", "none");
localStorage.setItem("delete4", "none");

//汽水的代码快
//增加
sessionStorage.setItem("dianji1", "1");
sessionStorage.setItem("latiao", "3");
function increase1() {
  if (sessionStorage.getItem("dianji1") >= 1) {
    sessionStorage.dianji1 = Number(sessionStorage.getItem("dianji1")) + 1;
    document.getElementById("latiao").innerHTML = sessionStorage.dianji1;
    document.getElementById("n_latiao").innerHTML =
      sessionStorage.dianji1 * 3 + "元";
  }
}
//减少
function reduce1() {
  if (sessionStorage.getItem("dianji1") >= 1) {
    sessionStorage.dianji1 = Number(sessionStorage.getItem("dianji1")) - 1;
    document.getElementById("latiao").innerHTML = sessionStorage.dianji1;
    document.getElementById("n_latiao").innerHTML =
      sessionStorage.dianji1 * 3 + "元";
  }
  if (sessionStorage.getItem("dianji1") == 0) {
    delete1();
  }
}
//删除
function delete1() {
  document.getElementById("delete1").style.display =
    localStorage.getItem("delete1");
  document.getElementById("n_latiao").innerHTML = "3元";
  document.getElementById("latiao").innerHTML = "1";
  sessionStorage.dianji1 = 1;
}
//添加
function tianjia1() {
  sessionStorage.dianji1 = 1;
  document.getElementById("delete1").style.display =
    localStorage.getItem("none");
}
//汽水的代码快
//增加
sessionStorage.setItem("dianji2", "1");
sessionStorage.setItem("shupian", "3");
function increase2() {
  if (sessionStorage.getItem("dianji2") >= 1) {
    sessionStorage.dianji2 = Number(sessionStorage.getItem("dianji2")) + 1;
    document.getElementById("shupian").innerHTML = sessionStorage.dianji2;
    document.getElementById("n_shupian").innerHTML =
      sessionStorage.dianji2 * 5 + "元";
  }
}
//减少
function reduce2() {
  if (sessionStorage.getItem("dianji2") >= 1) {
    sessionStorage.dianji2 = Number(sessionStorage.getItem("dianji2")) - 1;
    document.getElementById("shupian").innerHTML = sessionStorage.dianji2;
    document.getElementById("n_shupian").innerHTML =
      sessionStorage.dianji2 * 5 + "元";
  }
  if (sessionStorage.getItem("dianji2") == 0) {
    delete2();
  }
}
//删除
function delete2() {
  document.getElementById("delete2").style.display =
    localStorage.getItem("delete2");
  document.getElementById("n_shupian").innerHTML = "5元";
  document.getElementById("shupian").innerHTML = "1";
  sessionStorage.dianji2 = 1;
}
//添加
function tianjia2() {
  sessionStorage.dianji2 = 1;
  document.getElementById("delete2").style.display =
    localStorage.getItem("none");
}
//汽水的代码快
//增加
sessionStorage.setItem("dianji3", "1");
sessionStorage.setItem("qishi", "2");
function increase3() {
  if (sessionStorage.getItem("dianji3") >= 1) {
    sessionStorage.dianji3 = Number(sessionStorage.getItem("dianji3")) + 1;
    document.getElementById("qishui").innerHTML = sessionStorage.dianji3;
    document.getElementById("n_qishui").innerHTML =
      sessionStorage.dianji3 * 2 + "元";
  }
}
//减少
function reduce3() {
  if (sessionStorage.getItem("dianji3") >= 1) {
    sessionStorage.dianji3 = Number(sessionStorage.getItem("dianji3")) - 1;
    document.getElementById("qishui").innerHTML = sessionStorage.dianji3;
    document.getElementById("n_qishui").innerHTML =
      sessionStorage.dianji3 * 2 + "元";
  }
  if (sessionStorage.getItem("dianji3") == 0) {
    delete3();
  }
}
//删除
function delete3() {
  document.getElementById("delete3").style.display =
    localStorage.getItem("delete3");
  document.getElementById("n_qishui").innerHTML = "2元";
  document.getElementById("qishui").innerHTML = "1";
  sessionStorage.dianji3 = 1;
}
//添加
function tianjia3() {
  sessionStorage.dianji3 = 1;
  document.getElementById("delete3").style.display =
    localStorage.getItem("none");
}
//汽水的代码快
//增加
sessionStorage.setItem("dianji4", "1");
sessionStorage.setItem("shili", "1");
function increase4() {
  if (sessionStorage.getItem("dianji4") >= 1) {
    sessionStorage.dianji4 = Number(sessionStorage.getItem("dianji4")) + 1;
    document.getElementById("shili").innerHTML = sessionStorage.dianji4;
    document.getElementById("n_shili").innerHTML =
      sessionStorage.dianji4 * 1 + "元";
  }
}
//减少
function reduce4() {
  if (sessionStorage.getItem("dianji4") >= 1) {
    sessionStorage.dianji4 = Number(sessionStorage.getItem("dianji4")) - 1;
    document.getElementById("shili").innerHTML = sessionStorage.dianji4;
    document.getElementById("n_shili").innerHTML =
      sessionStorage.dianji4 * 1 + "元";
  }
  if (sessionStorage.getItem("dianji4") == 0) {
    delete4();
  }
}
//删除
function delete4() {
  document.getElementById("delete4").style.display =
    localStorage.getItem("delete4");
  document.getElementById("n_shili").innerHTML = "1元";
  document.getElementById("shili").innerHTML = "1";
  sessionStorage.dianji4 = 1;
}
//添加
function tianjia4() {
  sessionStorage.dianji4 = 1;
  document.getElementById("delete4").style.display =
    localStorage.getItem("none");
}
//一个小担心： 一个物品的交互就用了40行代码，后续的优化工作量依然很大
