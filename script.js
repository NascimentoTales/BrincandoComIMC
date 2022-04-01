const container = document.getElementById("container");
const p = document.createElement("p");
const p2 = document.createElement("p");
const body = document.querySelector("body");
const img = document.createElement("img")

body.style.backgroundColor = "aqua";

start()

function start() {
    
    p.innerHTML = "Aqui aparecerá o sei IMC" 
    img.src = ""
    container.appendChild(p)

    calcular()
}


function calcular() {

    document.querySelector("button").addEventListener("click", () =>{
        const sexo = document.querySelector('input[name="sex"]:checked').value;
        const peso = document.getElementById("peso").value;
        const altura = document.getElementById("altura").value;
        const imc = peso * altura;

        // console.log(sexo);

        p.innerHTML = "Calculando IMC..." 
        p2.innerHTML = "" 

        setTimeout(() => {
            if(sexo == "menino"){
                body.style.backgroundColor = "blue";
                // console.log("Menino");
                if (imc < 10) {
                    p.innerHTML = "Pronto" 

                    img.src = images[0].magro
                    container.appendChild(img)

                    p2.innerHTML = `Seu IMC é ${imc}!`
                    container.appendChild(p2)
                    
                }else{
                    p.innerHTML = "Pronto" 

                    img.src = images[0].medio
                    container.appendChild(img)

                    p2.innerHTML = `Seu IMC é ${imc}!`
                    container.appendChild(p2)
                    
                }
            }else{
                body.style.backgroundColor = "pink";
                // console.log("Menina");
                if (imc < 10) {
                    p.innerHTML = "Pronto" 

                    img.src = images[1].magro
                    container.appendChild(img)

                    p2.innerHTML = `Seu IMC é ${imc}!`
                    container.appendChild(p2)
                }else{
                    p.innerHTML = "Pronto" 

                    img.src = images[1].medio
                    container.appendChild(img)

                    p2.innerHTML = `Seu IMC é ${imc}!`
                    container.appendChild(p2)
                    
                }
            }
        }, 2000);
        
        

    })

}
