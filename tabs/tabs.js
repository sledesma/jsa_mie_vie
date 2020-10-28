// Version 1

const link1 = document.querySelector('#link-1');
const link2 = document.querySelector('#link-2');
const link3 = document.querySelector('#link-3');

const tab1 = document.querySelector('#tabs1');
const tab2 = document.querySelector('#tabs2');
const tab3 = document.querySelector('#tabs3');

let tab1Visible = false;
let tab2Visible = false;
let tab3Visible = false;

link1.addEventListener('click', function(event){
    event.preventDefault();
    
    if(tab2Visible) {
        tab2.style = 'display: none';
        tab2Visible = false;
    }
    
    if(tab3Visible) {
        tab3.style = 'display: none';
        tab3Visible = false;
    }

    if(!tab1Visible) {
        tab1.style = 'display: block';
        tab1Visible = true;
    }

});

link2.addEventListener('click', function(event){
    event.preventDefault();

    if(tab1Visible) {
        tab1.style = 'display: none';
        tab1Visible = false;
    }

    if(tab3Visible) {
        tab3.style = 'display: none';
        tab3Visible = false;
    }

    if(!tab2Visible) {
        tab2.style = 'display: block';
        tab2Visible = true;
    }
});

link3.addEventListener('click', function(event){
    event.preventDefault();

    if(tab2Visible) {
        tab2.style = 'display: none';
        tab2Visible = false;
    }

    if(tab1Visible) {
        tab1.style = 'display: none';
        tab1Visible = false;
    }

    if(!tab3Visible) {
        tab3.style = 'display: block';
        tab3Visible = true;
    }
});