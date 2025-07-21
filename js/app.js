let jogosAlugados = 0;


function contarEExibirJogosAlugados() {
    console.log(`Total de jogos alugados: ${jogosAlugados}`);
}


function alterarStatus(numCard){
    let gameAlterar = document.getElementById(`game-${numCard}`);
    let buttonStatus = gameAlterar.querySelector('.dashboard__item__button');
    let divStatus = gameAlterar.querySelector('.dashboard__item__img');
    let nomeJogo = gameAlterar.querySelector('.dashboard__item__name').textContent;
    

    if(!divStatus.classList.contains('dashboard__item__img--rented')){

        buttonStatus.textContent = 'Return';
        buttonStatus.classList.add('dashboard__item__button--return');
        divStatus.classList.add('dashboard__item__img--rented');

        jogosAlugados = jogosAlugados + 1;
    } else {
        let confirmacaoDevolucao = prompt(`Do you really want to return the game ${nomeJogo} ? (1 - Yes | 2 - No)`);
        if(confirmacaoDevolucao == 1){
            buttonStatus.textContent = 'Rent';
            buttonStatus.classList.remove('dashboard__item__button--return');
            divStatus.classList.remove('dashboard__item__img--rented');
            jogosAlugados = jogosAlugados - 1;
        }

    }

    contarEExibirJogosAlugados();


}


document.addEventListener('DOMContentLoaded', function() {
    jogosAlugados = document.querySelectorAll('.dashboard__item__img--rented').length;
    contarEExibirJogosAlugados();
});