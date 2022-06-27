function calculadora() {
    const operacao = Number.prorpt('Escolha uma operação:\n 1 - Soma[+]\n 2 - Subtração[-]\n - 3 - Multiplicação[*]\n 4 - Divisão real[/]\n 5 - Divisão Inteira[%]\n 6 - Pontenciacao[**]\n');
    let n1 = Number (prorpt('Insira o primeiro valor:'));
    let n2 = Number (prorpt('Insira o segundo valor:'));
    let resultado;

    if  (!n1|| !n2)
    function Soma() {
        resultado = n1 + n2;
        alert("$(n1) + $(n2) = $(resultado)");
        novaOperacao();
    }
    function Subtracao() {
        resultado = n1 - n2;
        alert("$(n1) - $(n2) = $(resultado)");
        novaOperacao();
    }
    function Multiplicação() {
        resultado = n1 * n2;
        alert("$(n1) * $(n2) = $(resultado)");
        novaOperacao();
    }
    function Divisaoreal() {
        resultado = n1 / n2;
        alert("$(n1) / $(n2) = $(resultado)");
        novaOperacao();
    }
    function Divisaointeira() {
        resultado = n1 % n2;
        alert("O resto da divisão entre$(n1) e $(n2) é igual a $(resultado)");
        novaOperacao();
    }
    function Pontenciacao() {
        resultado = n1 ** n2;
        alert("$(n1)elevado a $(n2)? é igual a $(resultado)");
        novaOperacao();
    }
    
    function novaOperacao(){
        let opcao = prorpt('Deseja fazer outra operação?\n 1 - sim\n 2 - não');
        if (opcao == 1){
            calculadora();
        } else id(opcao == 2);{
            alert('Até mais ');
        }  {
            alert('Digite uma opção válidar');
            novaOperacao();
        }
    };

    if (operacao == 1) {
        Soma();
    } else if(operacao == 2){
        Subtração();
    } else if(operacao == 3){
        Multiplicação();
    } else if(operacao == 4){
        Divisaoreal();
    } else if(operacao == 5){
        Divisaointeira();
    } else if(operacao == 6){
        Pontenciacao();
    }
};
calculadora();