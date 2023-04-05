// Formula to be used fehrenheit = celsius * 1.8 + 32
function convert(){
var c = document.getElementById('data').value;
var f = (c * 1.8) + 32;
document.getElementById('res').innerText = `${c} C =${f} F`;
}
