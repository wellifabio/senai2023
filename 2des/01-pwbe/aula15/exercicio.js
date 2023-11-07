let aportes = [
    { mes: 'Janeiro', aporte: 500, juros: 0.001 },
    { mes: 'Fevereiro', aporte: 300, juros: 0.003 },
    { mes: 'Março', aporte: 250, juros: 0.005 },
    { mes: 'Abril', aporte: 300, juros: 0.01 },
    { mes: 'Maio', aporte: 100, juros: 0.007 },
    { mes: 'Junho', aporte: 0, juros: 0.005 },
    { mes: 'Julho', aporte: 0, juros: 0.003 },
    { mes: 'Agosto', aporte: 300, juros: 0.008 },
    { mes: 'Setembro', aporte: 400, juros: 0.011 },
    { mes: 'Outubro', aporte: 200, juros: 0.01 },
]

function calcInvestimento(aporte, montante) {
    return new Promise(res => {
        setTimeout(() => {
            let rendimento = (aporte.aporte + montante) * aporte.juros;
            console.log(`Rendeu ${rendimento.toFixed(2)}`);
            res(rendimento);
        }, 500);
    });
}

async function investimentos() {
    let montante = 0;
    for (let i = 0; i < aportes.length; i++) {
        console.log(`${aportes[i].mes}, investimento: ${aportes[i].aporte}, juros: ${(aportes[i].juros * 100).toFixed(2)}%`);
        let rendimento = await calcInvestimento(aportes[i], montante);
        montante += aportes[i].aporte + rendimento;
        console.log('Montante = ' + montante.toFixed(2)+'\n');
    };
}

investimentos();