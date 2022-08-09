let numeroAleatorio= Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);

function jogo(){
    let palpite = Number(document.querySelector("#numero").value);
    let listaPalpites = document.getElementById("tentativas");
    let reultado = document.getElementById("certo-errado");
    let palpiteBaixo_ouAlto = document.getElementById("dica");
    let rodadas = 1;
   

    if(rodadas <= 10){
        if(palpite === numeroAleatorio){
            reultado.innerHTML = "Parabens voce acertou!"
            listaPalpites.innerHTML += " " + palpite + " ";
            palpiteBaixo_ouAlto.innerHTML = "";
        }else{
            listaPalpites.innerHTML += " " + palpite + " ";
            reultado.innerHTML = "Numero errado";
            if(palpite < numeroAleatorio){
                palpiteBaixo_ouAlto.innerHTML = "Seu palpite esta muito baixo";
            }else{
                palpiteBaixo_ouAlto.innerHTML = "Seu palpite esta muito alto"
            }
            
        }
    }else{
        palpite.disabled = true;
        reultado.innerHTML = "Jogo encerrado!"
    }

    rodadas++;
    console.log(rodadas);
}

