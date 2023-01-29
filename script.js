//1 - função que exiba uma mensagem no console
let msg = `Olha sou uma mensagem e espero aparecer no console.log `
function exibirMsg() {
    console.log(msg)
}
exibirMsg();


//2 - função que receba o seu nome como (parâmetro) e exiba no console
function exibirNome (nome){
    console.log(`Meu nome é ${nome}`)
}
exibirNome(`Jésus Baro`);

//3 - função que receba nome, idade, e um estilo musical preferido (parâmetros) e exiba no console
function perfil(nome, idade , estilo) {
    console.log(`Meu nome é ${nome}, tenho ${idade}, e meu estilo preferido atualmente é ${estilo}`)
}

perfil(`Jésus`, 24, `eletronica ` )
//4 - função que receba um filme, uma música (parâmetros) e exiba no console

function audiovisual(filme, musica) {
    console.log(`Um filme que indico é a ${filme} e uma música a ${musica}`)
}

audiovisual(`A viagem de chiriro`, `Tempos Artificias de Luedji Luna`)


//5 - função que retorne o triplo do número recebido no parâmetro da função
function triplo(numero) {
    console.log( numero*=3)
    
}
triplo(10)

//6 - função que  verifique se uma  variável é true ou false
let _nome = `Jésus`
function verificacao(){
    if (_nome === `Beyoncé`) {
        console.log(`Você é a Beyoncé.`)
    } else {
        console.log(`Você não é a Beyoncé. Você é o ${_nome}, se liga!`)
   
    }
}
verificacao();