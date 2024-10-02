const escolhaRegistro = document.getElementById('opcoes-registro');
const forms = document.querySelectorAll('.register-form');
const btnClose = document.getElementById('btn-fechar');
const btnSubmit = document.getElementById('submit-turma');



// Abrir pop-up de escolha
function addRegistro() {
    escolhaRegistro.style.visibility = 'visible';
}

async function carregarDisciplinas() {
    try {
        const response = await fetch('http://localhost:8000/api/disciplinas/')
        if (!response.ok) {
            throw new Error(`Erro: ${response.status}`);
        }

        const resultado = await response.json();
        const disciplinas = resultado.data.disciplinas;
        const selectDisciplinaTurma = document.getElementById('select-disciplina-turma');
        const selectDisciplinaProf = document.getElementById('select-disciplina-professor');

        disciplinas.forEach(disciplina => {
            const createOption = document.createElement('option');
            createOption.value = disciplina.nome;
            createOption.innerText = disciplina.nome;

            selectDisciplinaTurma.appendChild(createOption);
            selectDisciplinaProf.appendChild(createOption);
        });

    } catch (error) {
        console.error('Erro ao buscar dados:', error);
    }
}

window.addEventListener('load', carregarDisciplinas);

// Função para fechar formulário
const closeForm = (idForm) => {
    const idFormulario = document.getElementById(idForm);
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