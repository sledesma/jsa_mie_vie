            document.querySelectorAll('*[validacion-regex]').forEach(function(el){
                const evento = el.getAttribute('validacion-evento');
                const expreg = el.getAttribute('validacion-regex');
                
                el.addEventListener(evento, function(){
                    const regex = new RegExp(expreg);
                    if(regex.test(el.value)) {
                        el.style = "border: 2px solid green";
                    } else {
                        el.style = "border: 2px solid red";
                    }
                });
            });