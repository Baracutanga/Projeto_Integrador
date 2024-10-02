const pastaAnterior = document.querySelectorAll('.pasta-anterior');
const formulario = document.getElementById('formulario-add');
const btnAdd = document.getElementById('add-aviso');
const btnEnviar = document.getElementById('enviar-btn');
const formAviso = document.getElementById('formulario-add');
const containerMain = document.getElementById('container-main');

// async function CarregarComunicados() {
//     try {
//         const response = await fetch('http://localhost:8000/api/avisos/');
//         if (!response){
//             throw new Error(`Erro ao buscar dados: ${response.status}`);
//         }
//         const avisos = await response.json();
//         console.log(avisos);
        
//         const listaComunicados = document.getElementById('comunicado-list');
//         const createDivComunicado = document.createElement('div');
//         const createTitulo = document.createElement('h3');
//         const divEditDelete = document.createElement('div');
//         const btnEdit = document.createElement('button');
//         const btnIcon = document.createElement('img');
//         const conteudo = document.createElement('p')
//         const btnLerMais = document.createElement('div');
//         const irPagLerMais = document.createElement('a');
//         const btnOpenCom = document.createElement('button');

//         avisos.forEach(aviso => {
//             // Atribuir Ids
//             createDivComunicado.id = 'comunicado';
//             divEditDelete.id = 'edit-delete'
//             btnEdit.type = 'button';
//             btnEdit.id = 'btn-edit';
//             btnIcon.alt= 'btn-edit';
//             btnIcon.href = '/frontend/icons/editar.svg';
//             btnLerMais.id = 'btn-lermais';
//             btnOpenCom.type = 'button';

            
//             containerMain.appendChild(listaComunicados);
//             listaComunicados.appendChild(createDivComunicado);
//             createDivComunicado.appendChild(createTitulo);
//             createTitulo.innerText = aviso.nome;
//             createDivComunicado.appendChild(divEditDelete);
//             divEditDelete.appendChild(btnEdit);
//             btnEdit.appendChild(btnIcon);
//             createDivComunicado.appendChild(conteudo)
//             conteudo.innerText = aviso.descricao;
//             createDivComunicado.appendChild(btnLerMais);
//             btnLerMais.appendChild(irPagLerMais);
//             irPagLerMais.appendChild(btnOpenCom)
//         })
//     } catch (error){
//         console.error('Erro ao buscar dados:', error);
//     }
// }

// window.addEventListener('load', function() {
//     console.log('Página carregada!');
    
//     // Chama a função
//     CarregarComunicados();
//   });

// Enviar Comunicado
formAviso.addEventListener('submit', async (e) => {
    e.preventDefault();

    const titulo = document.getElementById('titulo-area');
    const textArea = document.getElementById('comunicao-textarea');
    
    try {
        const response = await fetch('http://localhost:8000/api/avisos/create', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ nome: titulo.value, descricao: textArea.value, turma: '66fce960f518a6293edcf293', disciplina: '66f3a6fe8f5f6816e45d9a8d' })
        });

        const data = await response.json();
        formulario.style.visibility = 'hidden';
        titulo.value = '';
        textArea.value = '';
        console.log('Usuário cadastrado:', data);
    } catch(error) {
        console.error('Erro ao enviar dados:', error);
    } 
})

// Pasta anterior. Ex: Home > Comunicado
pastaAnterior.forEach((pasta) => {
    pasta.addEventListener('mouseenter', () => {
        pasta.style.color = '#21618C';
    });

    pasta.addEventListener('mouseleave', () => {
        pasta.style.color = '';
    });
});

// Abrir formulário
btnAdd.addEventListener('click', () => {
    formulario.style.visibility = 'visible';
})

function ClickChange() {
    btnEnviar.style.color = '#fff'
}
function ClickBack() {
    btnEnviar.style.color = ''
}