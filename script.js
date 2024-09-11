let opcaoSelecionada = null;
const bolas = document.querySelectorAll('.bola');

bolas.forEach(function(bola) {
    bola.addEventListener('click', function() {
        bolas.forEach(function(b) {
            b.classList.remove('selecionado');
        });
        bola.classList.add('selecionado');
        opcaoSelecionada = bola.getAttribute('data-value');
    });
});

document.querySelector('.botao').addEventListener('click', function() {
    if (opcaoSelecionada) {
        window.location.href = `thanks.html?rating=${opcaoSelecionada}`;
    } else {
        alert('Por favor, selecione uma opção.');
    }
});
