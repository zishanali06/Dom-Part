document.addEventListener('DOMContentLoaded', function(){
    let button = document.createElement('button');
    let buttontxt = document.createTextNode('Click Me');

    button.appendChild(buttontxt);
    document.body.appendChild(button);

    button.addEventListener('click', function(){
        alert('Winter is Coming!');
    });

    

});

let button2 = document.querySelector("#btn");

