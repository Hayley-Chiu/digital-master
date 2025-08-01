// --- 尺寸偵測除錯碼 ---
function showDeviceInfo() {
  const width = window.innerWidth;
  const height = window.innerHeight;
  const dpr = window.devicePixelRatio;

  const info = `
    寬度 (CSS Pixels): ${width}px
    高度 (CSS Pixels): ${height}px
    裝置像素比 (DPR): ${dpr}
  `;

  // 建立一個 div 來顯示資訊
  const infoDiv = document.createElement("div");
  infoDiv.style.position = "fixed";
  infoDiv.style.bottom = "10px";
  infoDiv.style.left = "10px";
  infoDiv.style.padding = "10px";
  infoDiv.style.backgroundColor = "rgba(0, 0, 0, 0.8)";
  infoDiv.style.color = "white";
  infoDiv.style.zIndex = "9999";
  infoDiv.style.fontFamily = "monospace";
  infoDiv.style.whiteSpace = "pre"; // 讓換行符號生效
  infoDiv.innerText = info;

  document.body.appendChild(infoDiv);
}

// 頁面載入時和視窗大小改變時都執行
window.addEventListener("load", showDeviceInfo);
window.addEventListener("resize", showDeviceInfo);
// --- 除錯碼結束 ---

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
const windowsCardWrapper = document.getElementById("windows-card-wrapper");
if (windowsCardWrapper) {
  const isWindows = /windows/i.test(navigator.userAgent);
  if (isWindows) {
    windowsCardWrapper.classList.remove("d-none");
  } else {
    windowsCardWrapper.classList.add("d-none");
  }
}

/* 先移除連結，未來有需要在開放
// 返回媒體盒1.0連結
document.querySelector('#to_oldpage button').addEventListener('click', function (event) {
    event.preventDefault();
    //window.open('https://digitalmaster.knsh.com.tw/downloader/box-web/');
    window.open('https://digitalmaster.knsh.com.tw/v1/index.html');
    return false;
})
*/
