// 著作權自動更新年分
// 讓 Copyright 永遠顯示目前年份
const year = new Date().getFullYear();
document.getElementsByClassName("copyright")[0].innerHTML = year;

// 網頁版
// 數位高手國小頁面
document
  .getElementsByClassName("e")[0]
  .addEventListener("click", function (event) {
    event.preventDefault();
    // 測試站
    window.open(
      "https://digitalapi.knsh.com.tw/project/minjie/all/db/pages/e/index.html"
    );
    //正式站
    //window.open('https://digitalmaster.knsh.com.tw/v3/pages/e/index.html');
    return false;
  });

// 數位高手國中頁面
document
  .getElementsByClassName("j")[0]
  .addEventListener("click", function (event) {
    event.preventDefault();
    // 測試站
    window.open(
      "https://digitalapi.knsh.com.tw/project/minjie/all/db/pages/j/index.html"
    );
    // 正式站
    //window.open('https://digitalmaster.knsh.com.tw/v3/pages/j/index.html');
    return false;
  });

// 電腦版下載連結
document
  .getElementsByClassName("button_grid2")[0]
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.open(
      "https://digitalmaster.knsh.com.tw/downloader/cloudebooksetup_lo.exe"
    );
    return false;
  });

// 平板專用下載連結
document
  .getElementsByClassName("e")[1]
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.open("https://qr.knsh.com.tw/AS34X");
    return false;
  });
document
  .getElementsByClassName("j")[1]
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.open("https://qr.knsh.com.tw/6O23G");
    return false;
  });

// 觸控專用下載連結
document
  .getElementsByClassName("button_grid2")[1]
  .addEventListener("click", function (event) {
    event.preventDefault();
    window.open(
      "https://digitalmaster.knsh.com.tw/downloader/knshEbook20230109.apk?utm_source=digitalmaster&utm_medium=box"
    );
    return false;
  });

// 判斷裝置是否為windows系統
// 非windows則不顯示電腦版下載
if (
  !navigator.userAgent.match("windows") &&
  !navigator.userAgent.match("Windows")
)
  document.getElementsByClassName("button_grid2")[0].classList.add("d-none");
else
  document.getElementsByClassName("button_grid2")[0].classList.remove("d-none");

/* 先移除連結，未來有需要在開放
// 返回媒體盒1.0連結
document.querySelector('#to_oldpage button').addEventListener('click', function (event) {
    event.preventDefault();
    //window.open('https://digitalmaster.knsh.com.tw/downloader/box-web/');
    window.open('https://digitalmaster.knsh.com.tw/v1/index.html');
    return false;
})
*/
