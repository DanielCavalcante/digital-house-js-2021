let hiperlink = document.querySelector('a');

hiperlink.onclick = function(e) {
    console.log('Passou o mouse por cima!')
    e.preventDefault();
}

hiperlink.addEventListener('mouseover', function(event) {
   console.log('Passou o mouse por cima também!')
});

let input = document.querySelector('#input');
input.onkeydown = function(event) {
    console.log(event)
    alert("Você pressionou a tecla: "+ event.key);
}

