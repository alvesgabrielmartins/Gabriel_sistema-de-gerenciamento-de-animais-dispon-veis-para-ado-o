// script.js

const form = document.getElementById('animalForm');
const listaAnimais = document.getElementById('listaAnimais');

form.addEventListener('submit', function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome').value;
    const idade = document.getElementById('idade').value;
    const tipo = document.getElementById('tipo').value;
    const imagem = document.getElementById('imagem').value || 'https://via.placeholder.com/250';

    const animal = {
        nome,
        idade,
        tipo,
        imagem
    };

    adicionarAnimal(animal);
    form.reset();
});

function adicionarAnimal(animal) {
    const card = document.createElement('div');
    card.className = 'animal-card';
    card.innerHTML = `
        <img src="${animal.imagem}" alt="Imagem de ${animal.nome}">
        <h3>${animal.nome}</h3>
        <p><strong>Idade:</strong> ${animal.idade} ano(s)</p>
        <p><strong>Tipo:</strong> ${animal.tipo}</p>
        <button class="remove-btn">Remover</button>
    `;

    card.querySelector('.remove-btn').addEventListener('click', () => {
        card.remove();
    });

    listaAnimais.appendChild(card);
}
