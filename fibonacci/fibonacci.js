function fibonacci(){
    var numero = 0
    var proximo_numero = 1
    var temp
    var res = ''
    var box = document.getElementById('box')
    var num = document.getElementById('num').value
    box.innerHTML = ` `
    if (num.length == 0) {
        box.innerHTML = `Insira um número`
        }
    else{
    while (numero <= num){
        var f = numero
        res += `${f} `
        box.innerHTML += `<br> ${f} <br>`
        temp = proximo_numero
        proximo_numero += numero
        numero = temp
    }
    return res
    
}
}
function layout(){
    var res = fibonacci()
    var btn2 = document.getElementById('btn2')
    var num = document.getElementById('num').value
    var box = document.getElementById('box')
    if (num.length == 0) {
        box.innerHTML = `Insira um número`
        }
    else{
    box.innerHTML = `${res}`
}
}
