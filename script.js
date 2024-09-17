// Seleciona todos os botões com a classe 'btn-proximo'
const avanca = document.querySelectorAll('.btn-proximo');

// Adiciona um ouvinte de evento para cada botão
avanca.forEach(button => {
    button.addEventListener('click', function() {
        // Seleciona o passo atual que está ativo
        const atual = document.querySelector('.passo.ativo');
        
        // Obtém o próximo passo a partir do atributo 'data-proximo'
        const proximoPassoId = 'passo-' + this.getAttribute('data-proximo');
        const proximoPasso = document.getElementById(proximoPassoId);
        
        // Remove a classe 'ativo' do passo atual e a adiciona ao próximo passo
        atual.classList.remove('ativo');
        proximoPasso.classList.add('ativo');
    });
});
