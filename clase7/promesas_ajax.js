function ajax(
    url,
    config = { method: "GET", responseType: "json", body: null }
  ) {
    return new Promise(function (resolver, rechazar) {
      const xhr = new XMLHttpRequest();
      xhr.responseType = config.responseType;
      xhr.open(config.method, url);
      xhr.send(config.body);
      xhr.addEventListener("load", () => {
        resolver(xhr.response);
      });
    });
  }

  ajax('https://jsonplaceholder.typicode.com/posts', {method: 'POST' })
  .then(function (datos) {
    console.log("Datos recibidos: ", datos);
  });