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

