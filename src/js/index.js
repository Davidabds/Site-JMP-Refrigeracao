const botaoFiltrar = document.querySelector('.btn-filtrar');

botaoFiltrar.addEventListener('click', function () {

    const categoriaSelecionada = document.querySelector('#categoria').value.trim().toLowerCase();
    const nomeDigitado = document.querySelector('#nome').value.trim().toLowerCase();
    const precoMaximoSelecionado = document.querySelector('#preco').value;

    const cartas = document.querySelectorAll('.carta');

    cartas.forEach(function (carta) {
        const categoriasDaCarta = carta.dataset.categoria.toLowerCase().split(' '); // Agora vira array
        const nomeCarta = carta.querySelector('.nome-personagem').textContent.toLowerCase();
        const precoCarta = carta.dataset.preco;

        let mostrarCarta = true;

        const temFiltroDeCategoria = categoriaSelecionada !== '';

        const cartaNaoBateComFiltroDeCategoria = temFiltroDeCategoria && !categoriasDaCarta.includes(categoriaSelecionada);

        if (cartaNaoBateComFiltroDeCategoria) {
            mostrarCarta = false;
        }

        const temFiltroDeNome = nomeDigitado !== ''; 
        const cartaNaoBateComFiltroDeNome = temFiltroDeNome && !nomeCarta.includes(nomeDigitado);

if (cartaNaoBateComFiltroDeNome) {
    mostrarCarta = false;
}


        const temFiltroDePreco = precoMaximoSelecionado !== '';
        const cartaNaoBateComFiltroDePrecoMaximo = parseFloat(precoCarta) > parseFloat(precoMaximoSelecionado);

        if (temFiltroDePreco && cartaNaoBateComFiltroDePrecoMaximo) {
            mostrarCarta = false;
        }

        if (mostrarCarta) {
            carta.classList.add('mostrar');
            carta.classList.remove('esconder');
        } else {
            carta.classList.remove('mostrar');
            carta.classList.add('esconder');
        }



    });
});
