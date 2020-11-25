
const users = (function(){

    let users = null;

    const getUsers = async function() {
        console.log('Cargando usuarios de la API');
        const res = await fetch('https://jsonplaceholder.typicode.com/users');
        const data = await res.json();
        return data;
    }



    const public = {
        get: function(callback) {
            if(users == null) {
                getUsers().then(data => {
                    users = data
                    callback(users);
                });
            }

            callback(users);

        }
    };

    return public;

})();

users.get(function(users){
    console.log('Hola mundo');
});

users.get(function(users){
    console.log('Usuarios');
})
