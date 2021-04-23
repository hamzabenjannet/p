const host = "http://localhost:3000";
const smsDigitsCount = 4;
const preflight = document.getElementById("preflight").getAttribute("src");
const appjs = document.createElement("script");
appjs.onload = function () {
  console.log("appjs loaded");
};
appjs.setAttribute("id", "appjs");
appjs.src = `${host}/src/app.js?hostLoad=${host}&smsDigitsCount=${smsDigitsCount}&date=${new Date().getTime()}`;
document.head.appendChild(appjs);
