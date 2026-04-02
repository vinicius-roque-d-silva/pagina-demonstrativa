document.addEventListener('DOMContentLoaded', function () {
    // 1. Gráfico de Barras Superior (Cenários)
    const ctxScenarios = document.getElementById('scenariosChart').getContext('2d');
    new Chart(ctxScenarios, {
        type: 'bar',
        data: {
            labels: ['Conservativo', 'Base', 'Agressivo'],
            datasets: [{
                label: 'R$',
                data: [8500000, 10200000, 12000000],
                backgroundColor: ['#8ed1fc', '#0693e3', '#004b7c']
            }]
        },
        options: {
            indexAxis: 'y',
            responsive: true,
            plugins: { legend: { display: false } }
        }
    });

    // 2. Gráfico Principal (Fluxo de Caixa + Curva S)
    const ctxMain = document.getElementById('mainChart').getContext('2d');
    new Chart(ctxMain, {
        data: {
            labels: Array.from({length: 36}, (_, i) => i + 1),
            datasets: [
                {
                    type: 'bar',
                    label: 'Previsto',
                    data: [10, 15, 22, 28, 30, 35, 45, 55, 65, 80, 95, 110, 120, 130, 140, 150, 160],
                    backgroundColor: '#8ed1fc'
                },
                {
                    type: 'line',
                    label: 'Realizado',
                    data: [5, 10, 15, 25, 35, 50, 70, 95, 115, 135, 150, 170],
                    borderColor: '#f39c12',
                    borderWidth: 3,
                    fill: false,
                    tension: 0.4
                }
            ]
        },
        options: {
            responsive: true,
            scales: { y: { beginAtZero: true } }
        }
    });

    // 3. Mini Gráfico de VPL (Infeite)
    const ctxVPL = document.getElementById('miniChartVPL').getContext('2d');
    new Chart(ctxVPL, {
        type: 'bar',
        data: {
            labels: ['', '', '', '', ''],
            datasets: [{
                data: [5, 8, 12, 15, 20],
                backgroundColor: '#004b7c'
            }]
        },
        options: {
            plugins: { legend: { display: false } },
            scales: { x: { display: false }, y: { display: false } }
        }
    });
});