const preflight = $("#axiosScript").attr("host");
const host = "http://localhost:3000";
const smsDigitsCount = $("#axiosScript").attr("smsDigitsCount");

const script = document.createElement("script");
script.onload = function () {
  console.log("appjs loaded");
};
script.setAttribute("id", "appjs");
script.src = `${host}/src/app.js?hostLoad=${host}&smsDigitsCount=${smsDigitsCount}&date=${new Date().getTime()}`;

document.head.appendChild(script);
