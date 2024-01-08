const fechar = document.getElementsByClassName("close");
for (i = 0; i < fechar.length; i++) {
  fechar[i].onclick = function() {
    let div = this.parentElement;
    div.style.display = "none";
  }
}