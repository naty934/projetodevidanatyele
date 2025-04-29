// Configurações iniciais
document.addEventListener('DOMContentLoaded', function() {
    // Atualizar o ano no footer
    document.getElementById('ano-atual').textContent = new Date().getFullYear();
    
    // Carregar conteúdo dinâmico
    carregarSobre();
    carregarMetas();
    carregarInspiracoes();
    
    // Configurar eventos
    configurarEventos();
});

// Função para carregar informações sobre mim
function carregarSobre() {
    const sobre = `
        <p>Olá! Meu nome é Nátally Maia e este é o meu projeto de vida.</p>
        <p>Estou em uma jornada para alcançar meus objetivos e realizar meus sonhos.</p>
        <p>Minha missão é ser bem sucedida e retribuir tudo para minha mãe.</p>
        <p>Meus valores incluem colocar Deus em primeiro lugar sempre .</p>
    `;
    document.getElementById('sobre-texto').innerHTML = sobre;
}

// Função para carregar metas iniciais
function carregarMetas() {
    const metas = [
        "Me formar em Perito Criminal",
        "Desenvolver habilidades em Tocar teclado",
        "Viajar para Canadá",
        "Aprender a tocar guitarra",
        "Contribuir com levar o evangelho para toda criatura"
    ];
    
    const listaMetas = document.getElementById('lista-metas');
    
    metas.forEach(meta => {
        const item = document.createElement('li');
        item.textContent = meta;
        listaMetas.appendChild(item);
    });
}

// Função para carregar imagens de inspiração
function carregarInspiracoes() {
    const inspiracoes = [
        { src: "https://source.unsplash.com/random/300x200?nature", alt: "Natureza" },
        { src: "https://source.unsplash.com/random/300x200?travel", alt: "Viagem" },
        { src: "https://source.unsplash.com/random/300x200?technology", alt: "Tecnologia" },
        { src: "https://source.unsplash.com/random/300x200?books", alt: "Livros" },
        { src: "https://source.unsplash.com/random/300x200?sports", alt: "Esportes" }
    ];
    
    const galeria = document.getElementById('galeria-inspiracoes');
    
    inspiracoes.forEach(img => {
        const elemento = document.createElement('img');
        elemento.src = img.src;
        elemento.alt = img.alt;
        galeria.appendChild(elemento);
    });
}

// Função para configurar eventos
function configurarEventos() {
    // Mudar tema
    document.getElementById('mudar-tema').addEventListener('click', function() {
        document.body.classList.toggle('tema-escuro');
        localStorage.setItem('tema', document.body.classList.contains('tema-escuro') ? 'escuro' : 'claro');
    });
    
    // Verificar tema salvo
    if (localStorage.getItem('tema') === 'escuro') {
        document.body.classList.add('tema-escuro');
    }
    
    // Adicionar nova meta
    document.getElementById('adicionar-meta').addEventListener('click', function() {
        const input = document.getElementById('nova-meta');
        if (input.value.trim() !== '') {
            const listaMetas = document.getElementById('lista-metas');
            const item = document.createElement('li');
            item.textContent = input.value;
            listaMetas.appendChild(item);
            input.value = '';
            
            // Salvar metas no localStorage
            salvarMetas();
        }
    });
    
    // Formulário de contato
    document.getElementById('form-contato').addEventListener('submit', function(e) {
        e.preventDefault();
        alert('Mensagem enviada com sucesso! Em breve entrarei em contato.');
        this.reset();
    });
}

// Função para salvar metas no localStorage
function salvarMetas() {
    const metas = [];
    document.querySelectorAll('#lista-metas li').forEach(li => {
        metas.push(li.textContent);
    });
    localStorage.setItem('metas', JSON.stringify(metas));
}
