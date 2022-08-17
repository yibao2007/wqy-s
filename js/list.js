localStorage.setItem("delete1", "none");
localStorage.setItem("delete2", "none");
localStorage.setItem("delete3", "none");
localStorage.setItem("delete4", "none");

//汽水的代码快
//增加
function increase1() {
  if (localStorage.dianji1) {
    localStorage.dianji1 = Number(localStorage.dianji1) + 1;
    document.getElementById("latiao").innerHTML = localStorage.dianji1;
    document.getElementById("n_latiao").innerHTML =
      localStorage.dianji1 * 3 + "元";
  }
}
//减少
function reduce1() {
  if (localStorage.dianji1 >= 1) {
    localStorage.dianji1 = Number(localStorage.dianji1) - 1;
    document.getElementById("latiao").innerHTML = localStorage.dianji1;
    document.getElementById("n_latiao").innerHTML =
      localStorage.dianji1 * 3 + "元";
  }
  if (localStorage.dianji1 == 0) {
    delete1();
  }
}
//删除
function delete1() {
  document.getElementById("delete1").style.display =
    localStorage.getItem("delete1");
  document.getElementById("n_latiao").innerHTML = "3元";
  document.getElementById("latiao").innerHTML = "1";
  localStorage.dianji1 = 1;
}
//添加
function tianjia1() {
  localStorage.dianji1 = 1;
  document.getElementById("delete1").style.display =
    localStorage.getItem("none");
}
//汽水的代码快
//增加
function increase2() {
  if (localStorage.dianji2) {
    localStorage.dianji2 = Number(localStorage.dianji2) + 1;
    document.getElementById("shupian").innerHTML = localStorage.dianji2;
    document.getElementById("n_shupian").innerHTML =
      localStorage.dianji2 * 5 + "元";
  }
}
//减少
function reduce2() {
  if (localStorage.dianji2 >= 1) {
    localStorage.dianji2 = Number(localStorage.dianji2) - 1;
    document.getElementById("shupian").innerHTML = localStorage.dianji2;
    document.getElementById("n_shupian").innerHTML =
      localStorage.dianji2 * 5 + "元";
  }
  if (localStorage.dianji2 == 0) {
    delete2();
  }
}
//删除
function delete2() {
  document.getElementById("delete2").style.display =
    localStorage.getItem("delete2");
  document.getElementById("n_shupian").innerHTML = "5元";
  document.getElementById("shupian").innerHTML = "1";
  localStorage.dianji2 = 1;
}
//添加
function tianjia2() {
  localStorage.dianji2 = 1;
  document.getElementById("delete2").style.display =
    localStorage.getItem("none");
}
//汽水的代码快
//增加
function increase3() {
  if (localStorage.dianji3) {
    localStorage.dianji3 = Number(localStorage.dianji3) + 1;
    document.getElementById("qishui").innerHTML = localStorage.dianji3;
    document.getElementById("n_qishui").innerHTML =
      localStorage.dianji3 * 2 + "元";
  }
}
//减少
function reduce3() {
  if (localStorage.dianji3 >= 1) {
    localStorage.dianji3 = Number(localStorage.dianji3) - 1;
    document.getElementById("qishui").innerHTML = localStorage.dianji3;
    document.getElementById("n_qishui").innerHTML =
      localStorage.dianji3 * 2 + "元";
  }
  if (localStorage.dianji3 == 0) {
    delete3();
  }
}
//删除
function delete3() {
  document.getElementById("delete3").style.display =
    localStorage.getItem("delete3");
  document.getElementById("n_qishui").innerHTML = "2元";
  document.getElementById("qishui").innerHTML = "1";
  localStorage.dianji3 = 1;
}
//添加
function tianjia3() {
  localStorage.dianji3 = 1;
  document.getElementById("delete3").style.display =
    localStorage.getItem("none");
}
//汽水的代码快
//增加
function increase4() {
  if (localStorage.dianji4) {
    localStorage.dianji4 = Number(localStorage.dianji4) + 1;
    document.getElementById("shili").innerHTML = localStorage.dianji4;
    document.getElementById("n_shili").innerHTML =
      localStorage.dianji4 * 2 + "元";
  }
}
//减少
function reduce4() {
  if (localStorage.dianji4 >= 1) {
    localStorage.dianji4 = Number(localStorage.dianji4) - 1;
    document.getElementById("shili").innerHTML = localStorage.dianji4;
    document.getElementById("n_shili").innerHTML =
      localStorage.dianji4 * 2 + "元";
  }
  if (localStorage.dianji4 == 0) {
    delete4();
  }
}
//删除
function delete4() {
  document.getElementById("delete4").style.display =
    localStorage.getItem("delete4");
  document.getElementById("n_shili").innerHTML = "2元";
  document.getElementById("shili").innerHTML = "1";
  localStorage.dianji4 = 1;
}
//添加
function tianjia4() {
  localStorage.dianji4 = 1;
  document.getElementById("delete4").style.display =
    localStorage.getItem("none");
}
//一个小担心： 一个物品的交互就用了40行代码，后续的优化工作量依然很大
