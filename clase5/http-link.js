document.querySelectorAll(".http-link").forEach(function (link) {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    cargarPagina(
      link.dataset.page,
      document.querySelector(link.dataset.target)
    );
  });
});

function cargarPagina(pagina, contenedor) {
  const xhr = new XMLHttpRequest();
  xhr.open("GET", pagina);
  xhr.send();
  xhr.addEventListener("load", function () {
    contenedor.innerHTML = xhr.response;
  });
}
