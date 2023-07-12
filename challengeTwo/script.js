document.getElementById('simulador-form').addEventListener('submit', function (event) {
    event.preventDefault();

    var cantidad = parseFloat(document.getElementById('cantidad').value);
    var cuotas = parseInt(document.getElementById('cuotas').value);
    var interes = parseFloat(document.getElementById('interes').value);

    var cuota = calcularCuotaHipoteca(cantidad, cuotas, interes);

    document.getElementById('resultado').textContent = 'La cuota mensual es: €' + cuota.toFixed(2);
});

document.getElementById('cuotas').addEventListener('input', function () {
    document.getElementById('cuotas-value').textContent = this.value;
});

document.getElementById('interes').addEventListener('input', function () {
    document.getElementById('interes-value').textContent = this.value;
});

function calcularCuotaHipoteca(cantidad, cuotas, interes) {
    var tasaInteresMensual = (interes / 100) / 12;
    var factor = Math.pow(1 + tasaInteresMensual, cuotas);
    var cuota = (cantidad * tasaInteresMensual * factor) / (factor - 1);

    return cuota;
}
