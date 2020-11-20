const posts = new ResourceMapper(
    new RESTClient('https://jsonplaceholder.typicode.com/posts')
)

const cardTemplate = new Template('#card');
const buscar = new SearchBox('#txtBuscar');

buscar.on('input', function(e){
    document.querySelector('.grilla').innerHTML = '';
    posts.filter('title', e.target.value).then(d => {
        d.forEach(post => {
            document.querySelector('.grilla').innerHTML += cardTemplate.getHtmlOutput({
                titulo: post.props.title,
                descripcion: post.props.body
            });
        })
    });
});