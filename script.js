function mostrarAviso() {
  const aviso = document.getElementById('aviso');
  aviso.style.display = 'block';
  aviso.textContent = 'Reunião com os pais na próxima sexta às 15h. Compareçam!';
}

// Depoimentos com localStorage
const form = document.getElementById('form-depoimento');
const lista = document.getElementById('lista-depoimentos');

// Carrega depoimentos salvos
window.addEventListener('DOMContentLoaded', () => {
  const salvos = JSON.parse(localStorage.getItem('depoimentos')) || [];
  salvos.forEach(adicionarDepoimentoNaTela);
});

// Adiciona novo depoimento
form.addEventListener('submit', function (e) {
  e.preventDefault();
  const texto = this.querySelector('textarea').value;
  adicionarDepoimentoNaTela(texto);
  salvarDepoimento(texto);
  this.reset();
});

function adicionarDepoimentoNaTela(texto) {
  const novo = document.createElement('p');
  novo.textContent = `"${texto}"`;
  lista.prepend(novo);
}

function salvarDepoimento(texto) {
  const depoimentos = JSON.parse(localStorage.getItem('depoimentos')) || [];
  depoimentos.unshift(texto);
  localStorage.setItem('depoimentos', JSON.stringify(depoimentos));
}
