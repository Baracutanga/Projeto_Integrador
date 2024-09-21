const escolhaAtividades = document.getElementById('escolha-atv');
const escolhaAvisos = document.getElementById('escolha-avisos');
const conteudo = document.getElementById('conteudo');
const conteudoAtividades = document.getElementById('atividades');
const conteudoAvisos = document.getElementById('avisos');

// Trocar para aba Avisos
escolhaAvisos.addEventListener('click', () => {
    conteudoAtividades.style.display = 'none';

    escolhaAtividades.style.backgroundColor = 'rgba(0, 0, 0, 0)';
    escolhaAtividades.style.color = 'rgba(0, 0, 0, .5)';
    escolhaAtividades.style.cursor = 'pointer';

    escolhaAvisos.style.backgroundColor = '#fff'
    escolhaAvisos.style.color = 'rgba(0, 0, 0, 1)';
    escolhaAvisos.style.cursor = 'default';
    
    conteudo.style.borderTopLeftRadius = '8px';
    conteudoAvisos.style.display = 'block';
})

// Trocar para aba Atividades
escolhaAtividades.addEventListener('click', () => {
    conteudoAvisos.style.display = '';
    
    escolhaAvisos.style.backgroundColor = '';
    escolhaAvisos.style.color = '';
    escolhaAvisos.style.cursor = '';

    escolhaAtividades.style.backgroundColor = '';
    escolhaAtividades.style.color = '';
    escolhaAtividades.style.cursor = '';

    conteudo.style.borderTopLeftRadius = '';
    conteudoAtividades.style.display = '';
})