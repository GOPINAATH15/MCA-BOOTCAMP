const a = document.getElementById('js');
a.innerHTML = "JS DOM";
a.style.backgroundColor = "red";
a.style.fontFamily = "cursive";

const b = document.getElementById('main')
for (let i = 0; i < 5; i++) {
    b.innerHTML += "<h2>Welcome<h2>"
}
b.style.backgroundColor = "yellow";
