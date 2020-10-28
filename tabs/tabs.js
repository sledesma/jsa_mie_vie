const tabLinks = document.querySelectorAll('.tabs-link');
let tabs = [];

// Inicializar las petañas en falso
tabLinks.forEach(function(el){
    tabs.push({ selector: el.dataset.link, visible: false });
});

// Agregar el listener para mostrar la pestaña deseada
tabLinks.forEach(function(el){
    el.addEventListener('click', function(event){
        tabs = tabs.map(function(item){
            if(item.selector == el.dataset.link) {
                item.visible = true;
            } else {
                item.visible = false;
            }
            return item;
        });

        doTabs(tabs);
    });
});

// Procesar las pestañas e impactar ene l DOM
function doTabs(tablist) {
    tablist.forEach(function(t){
        const el = document.querySelector(t.selector);
        if(t.visible) {
            el.style = 'display: block';
        } else {
            el.style = 'display: none';
        }
    });
}