function toggleForm(type) {
    document.getElementById('luasForm').style.display = (type === 'luas') ? 'block' : 'none';
    document.getElementById('kelilingForm').style.display = (type === 'keliling') ? 'block' : 'none';
}

function hitungLuas() {
    var sisi = parseFloat(document.getElementById('luasSisi').value);
    var rumus = 'luas = sisi x sisi';
    var perhitungan = 'sisi = ' + sisi + ' x ' + sisi;
    var luas = sisi * sisi;
    var resultText = rumus + '\n' + perhitungan + '\nluas = ' + luas;
    document.getElementById('hasilLuas').innerText = resultText;
}

function hitungKeliling() {
    var sisi = parseFloat(document.getElementById('kelilingSisi').value);
    var rumus = 'keliling = 4 x sisi';
    var perhitungan = 'keliling = 4 x ' + sisi;
    var keliling = 4 * sisi;
    var resultText = rumus + '\n' + perhitungan + '\nKeliling = ' + keliling;
    document.getElementById('hasilKeliling').innerText = resultText;
}

function resetForm(type) {
    if (type === 'luas') {
        document.getElementById('luasSisi').value = '';
        document.getElementById('hasilLuas').innerText = 'Luas: ';
    } else if (type === 'keliling') {
        document.getElementById('kelilingSisi').value = '';
        document.getElementById('hasilKeliling').innerText = 'Keliling: ';
    }
}
