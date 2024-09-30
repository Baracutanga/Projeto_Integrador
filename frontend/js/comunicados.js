const pastaAnterior = document.querySelectorAll('.pasta-anterior');
const formulario = document.getElementById('formulario-add');
const btnAdd = document.getElementById('add-aviso');
const btnEnviar = document.getElementById('enviar-btn');

pastaAnterior.forEach((pasta) => {
    pasta.addEventListener('mouseenter', () => {
        pasta.style.color = '#21618C';
    });

    pasta.addEventListener('mouseleave', () => {
        pasta.style.color = '';
    });
});

btnAdd.addEventListener('click', () => {
    formulario.style.visibility = 'visible';
})

function ClickChange() {
    btnEnviar.style.color = '#fff'
}
function ClickBack() {
    btnEnviar.style.color = ''
}