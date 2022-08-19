let numeroAleatorio= Math.floor(Math.random() * 100) + 1;
console.log(numeroAleatorio);
let rodadas = 1;
const elementsToast = document.querySelector("#btn-enviar");

function jogo(){
    let palpite = Number(document.querySelector("#numero").value);
    let listaPalpites = document.getElementById("tentativas");
    let reultado = document.getElementById("certo-errado");
    let palpiteBaixo_ouAlto = document.getElementById("dica");
    

    if(rodadas < 10){
        rodadas = rodadas + 1;
        console.log("rodadas" + rodadas);
        if(palpite === numeroAleatorio){
            reultado.innerHTML = "Parabens voce acertou! "
            listaPalpites.innerHTML += " " + palpite + " ";
            document.querySelector("#numero").value = "";
           palpiteBaixo_ouAlto.innerHTML = "";
        }else{
            listaPalpites.innerHTML += " " + palpite + " ";
            reultado.innerHTML = "Numero errado";
            document.querySelector("#numero").value = "";
            if(palpite < numeroAleatorio){
                palpiteBaixo_ouAlto.innerHTML = "Seu palpite esta muito baixo" ;
            }else{
                palpiteBaixo_ouAlto.innerHTML = "Seu palpite esta muito alto";
            }
            
        }
    }else{
        palpite.disabled = true;
        reultado.innerHTML = "Jogo encerrado!"
        //alert(rodadas + " rodadas! fim de jogo");
        instanceToast();
    }

}





const instanceToast = ()=>{
    M.toast({
        html: "Jogo encerrado!",
        classes: "rounded"
    })
}