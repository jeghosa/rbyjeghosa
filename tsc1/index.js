var resv = document.querySelector(".projt");
var enterv = document.querySelector(".enter");
var showc = [{ url: "./nature.jpg", comment: "good" }, { url: "./northern.jpg", comment: "better" }];
// const resp = title?.textContent
resv.style.fontSize = "77px";
resv.textContent = "hello there";
console.log(resv.textContent);
document.body.style.backgroundColor = "red";
var person = "john";
console.log(person);
window.addEventListener("DOMContentLoaded", function showv() {
    var result = showc.map(function (item) {
        var url = item.url, comment = item.comment;
        return "<img src=".concat(url, " alt=\"logo\">\n <h5>").concat(comment, "</h5> ");
    }).join("");
    enterv.innerHTML = result;
});
