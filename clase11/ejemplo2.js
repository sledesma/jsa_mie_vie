document.addEventListener("DOMContentLoaded", function () {
  const campo = document.querySelector("#busqueda");

  fetch("https://jsonplaceholder.typicode.com/posts")
    .then((r) => r.json())
    .then((json) => {
      sessionStorage.setItem("posts", JSON.stringify(json));

      campo.addEventListener("input", () => {
        const datos = JSON.parse(sessionStorage.getItem("posts"));

        render(datos.filter((val) => val.title.includes(campo.value)));
      });
    });
});

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
