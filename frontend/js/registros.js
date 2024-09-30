const escolhaRegistro = document.getElementById('opcoes-registro');
const forms = document.querySelectorAll('.register-form');
const btnClose = document.getElementById('btn-fechar');

// Abrir pop-up de escolha
function addRegistro() {
    escolhaRegistro.style.visibility = 'visible';
}

// Função para fechar formulário
const closeForm = (idForm) => {
    idFormulario = document.getElementById(idForm);
    idFormulario.style.visibility = 'hidden';
}

// Abrir form de professor
function OpenFProf() {
    const formProf = document.getElementById('register-professor');

    escolhaRegistro.style.visibility = 'hidden'
    formProf.style.visibility = 'visible';
}

// Abrir form de coordenador
function OpenFCoord() {
    const formCoord = document.getElementById('register-coordenador');

    escolhaRegistro.style.visibility = 'hidden'
    formCoord.style.visibility = 'visible';
}

// Abrir form de aluno
function OpenFAluno() {
    const formAluno = document.getElementById('register-aluno');

    escolhaRegistro.style.visibility = 'hidden'
    formAluno.style.visibility = 'visible';
}

// Abrir form de disciplina
function OpenFDisc() {
    const formDisc = document.getElementById('register-disciplina');

    escolhaRegistro.style.visibility = 'hidden'
    formDisc.style.visibility = 'visible';
}

// Abrir form de turma
function OpenFTurma() {
    const formTurma = document.getElementById('register-turma');

    escolhaRegistro.style.visibility = 'hidden'
    formTurma.style.visibility = 'visible';
}