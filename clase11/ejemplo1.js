// Herramientas de persistencia en el Browser
// Caché => Guardar archivos
// Storage => Guardar información (texto)
// IndexedDb => Bbdd
// Cookies

/*
        if(localStorage.getItem('datos'))
        fetch('https://jsonplaceholder.typicode.com/posts')
        */

if (localStorage.getItem("datos")) {
  console.log("CARGANDO DESDE EL STORAGE");
  render(JSON.parse(localStorage.getItem("datos")));
} else {
  console.log("no existe");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((r) => r.json())
    .then((j) => {
      console.log("CARGANDO DESDE EL FETCH");
      localStorage.setItem("datos", JSON.stringify(j));
      render(JSON.parse(localStorage.getItem("datos")));
    });
}

function render(items) {
  const element = document.querySelector("#app");
  element.innerHTML = ""; // IMPACTO AL DOM

  const frag = document.createDocumentFragment();

  items.forEach((item) => {
    const contenedor = document.createElement("div");

    const titulo = document.createElement("h2");
    titulo.innerHTML = item.title;
    contenedor.appendChild(titulo);

    const cuerpo = document.createElement("p");
    cuerpo.innerHTML = item.body;
    contenedor.append(cuerpo);

    contenedor.appendChild(document.createElement("hr"));

    frag.appendChild(contenedor);
  });

  element.appendChild(frag); // IMPACTO AL DOM
}
