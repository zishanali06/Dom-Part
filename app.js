document.addEventListener('DOMContentLoaded', function(){
    let button = document.createElement('button');
    let buttontxt = document.createTextNode('Click Me');

    button.appendChild(buttontxt);
    document.body.appendChild(button);

    button.addEventListener('click', function(){
        alert('Winter is Coming!');
    });

    let para = document.createElement('p');
    let paratext = document.createTextNode('This is the Coolest thing!');

    para.appendChild(paratext);
    document.body.appendChild(para);

    para.addEventListener('click', function(){
        let colors = ['red', 'blue', 'green', 'yellow', 'aqua'];

        para.style.color = colors[Math.floor(Math.random() * 5)];
    })
    
    let button3 = document.createElement('button');
    let buttontxt2 = document.createTextNode('Click Me for New Div Span');

    button3.appendChild(buttontxt2);
    document.body.appendChild(button3);

    let emptydiv = document.createElement('div');
    document.body.appendChild(emptydiv);
    
    button3.addEventListener('click', function(){
        let span = document.createElement('span');
        let spantext = document.createTextNode('Zishan');
        span.appendChild(spantext);
        emptydiv.appendChild(span);
    });

});

let button2 = document.querySelector("#btn");

button2.addEventListener('click', function(){
    let boxcontent = document.querySelector('.txt');

    alert(boxcontent.value);
});

let newdiv = document.querySelector('.newdiv');
newdiv.addEventListener('mouseover', function(){
    newdiv.style.backgroundColor = 'red';
});
newdiv.addEventListener('mouseleave', function(){
    newdiv.style.backgroundColor = 'blue';
})

