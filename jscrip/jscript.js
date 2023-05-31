//cargar en la ventana
git_loock()
function git_loock() {
    alert("hola mundo");
    //crear h1, h2 y h3
    var h1 = document.createElement("h1");
    document.body.append(h1)
    h1.textContent='buscando'
    var h2 = document.createElement("h2");
    document.body.append(h2)
    h2.textContent='confligtos'
    var h3 = document.createElement("h3");
    h3.textContent='en git '
    document.body.append(h3)

}
