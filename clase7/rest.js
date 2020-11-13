function rest(endpoint = '') {

    const lastChar = endpoint.charAt(endpoint.length - 1);

    if(lastChar === '/')
        endpoint = endpoint.slice(0,-1);

    console.log(endpoint);

    return {

        all: async function() {
    
            const res = await fetch(endpoint);
    
            const json = await res.json();
    
            return json;
        },
    
        get: async function (id) {
    
            const res = await fetch(`${endpoint}/${id}`);
    
            const json = await res.json();
    
            return json;
        },
    
        create: async function (data) {
    
          const res = await fetch(endpoint,{
              method: 'POST',
              headers: {
                  'Content-type': 'application/json'
              },
              body: JSON.stringify(data)
          });
    
          const json = await res.json();
    
          return json;
        },
    
        edit: async function(id, data) {
    
          const res = await fetch(`${endpoint}/${id}`,{
              method: 'PUT',
              headers: {
                  'Content-type': 'application/json'
              },
              body: JSON.stringify(data)
          });
    
          const json = await res.json();
    
          return json;                   
        },
    
        delete: async function(id) {
          const res = await fetch(`${endpoint}/${id}`,{
              method: 'DELETE'
          });
    
          const json = await res.json();
    
          return json;              
        }
    
    };
}

