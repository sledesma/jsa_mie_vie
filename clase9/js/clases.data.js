// DataMappper

// Una clase que represente la entidad actual
class Resource {
  constructor(props) {
    this.props = props;
  }

  get(prop) {
    return this.props[prop];
  }

  set(prop, val) {
    this.props[prop] = val;
  }

  json() {
    return JSON.stringify(this.props);
  }
}

// Una clase que represente el origen de datos
class RESTClient {
  constructor(endpoint) {
      this.endpoint = endpoint;
  }

  async get(id = null) {
    let url = id === null ? this.endpoint : `${this.endpoint}/${id}`;
    const res = await fetch(url);
    const json = await res.json();
    return json;
  }

  async post(body) {
    let url = this.endpoint;
    const res = await fetch(url, { method: "POST", body: body });
    const json = await res.json();
    return json;
  }

  async put(id, body) {
    let url = `${this.endpoint}/${id}`;
    const res = await fetch(url, { method: "PUT", body: body });
    const json = await res.json();
    return json;
  }

  async delete(id) {
    let url = `${this.endpoint}/${id}`;
    const res = await fetch(url, { method: "DELETE" });
    const json = await res.json();
    return json;
  }

}

// Una clase que permita conectar una entidad con un origen de datos

class Mapper {
    constructor(dataSource) {
        this.dataSource = dataSource;
    }

    findAll() {}
    findOne() {}
}

class ResourceMapper extends Mapper {

    constructor(dataSource) {
        super(dataSource)
    }

    findAll() {
        return new Promise((resolve, reject) => {
            this.dataSource.get().then(json => {
                // Map 'json' to Resource class
                let data = [];
                json.forEach(obj => data.push(new Resource(obj)));
                resolve(data);
            });
        });
    }

    findOne(id) {
        return new Promise((resolve, reject) => {
            this.dataSource.get(id).then(json => {
                // Map 'json' to Resource class
                resolve(new Resource(json));
            });
        });
    }

    filter(campo, valor) {
        return new Promise((resolve, reject) => {
            this.dataSource.get().then(json => {
                // Map 'json' to Resource class
                let data = [];
                json.forEach(obj => {
                    if(obj[campo].includes(valor))
                        data.push(new Resource(obj))
                });
                resolve(data);
            });
        });
    }

}

