$(".enviar").click((event)=>{
    event.preventDefault
    let red = parseInt($("#nota__redacao").val())
    let nat = parseFloat($("#nota__natureza").val())
    let hum = parseFloat($("#nota__humanas").val())
    let ling = parseFloat($("#nota__linguagens").val())
    let mat = parseFloat($("#nota__matematica").val())
    let resposta = parseFloat($("#nota__enem--numero").val())
    let p_red = parseFloat($("#nota__redacao--peso").val())
    let p_nat = parseFloat($("#nota__natureza--peso").val())
    let p_hum = parseFloat($("#nota__humanas--peso").val())
    let p_ling = parseFloat($("#nota__linguagens--peso").val())
    let p_mat = parseFloat($("#nota__matematica--peso").val())
    
    var nota = ((red*p_red)+(nat*p_nat)+(hum*p_hum)+(ling*p_ling)+(mat*p_mat)) / (p_red+p_nat+p_hum+p_ling+p_mat)
    console.log(nota);

    $(".nota__enem--numero").text(nota)

})

