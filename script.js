const container = document.getElementById("container");
const p = document.createElement("p");
const p2 = document.createElement("p");
const p3 = document.createElement("p");

const body = document.querySelector("body");
const img = document.createElement("img")

body.style.backgroundColor = "gray";

start()

function start() {
    
    p.innerHTML = "Aqui aparecerá o seu IMC" 
    img.src = ""
    container.appendChild(p)

    calcular()
}


function calcular() {

    document.querySelector("button").addEventListener("click", () =>{
        const sexo = document.querySelector('input[name="sex"]:checked').value;
        const peso = document.getElementById("peso").value;
        const altura = document.getElementById("altura").value;
        const formatacao = peso / (altura * altura);
        const imc = formatacao.toFixed(2)
        console.log(sexo);
    
        // console.log(sexo);
        if (peso === '' || altura === '') {
            alert("preencha o campo Vazio")
        }else{
            if (peso < 1 || altura < 1) {
                alert("Peso e/ou Altura Muito Baixos")
            }else{
                p.innerHTML = "Calculando IMC..." 
                p2.innerHTML = "" 
                p3.innerHTML = ""
                img.src = ''

                setTimeout(() => {
                    if(sexo == "menino"){
                        // Informações Meninos
                        body.style.backgroundColor = "aqua";
                        // console.log("Menino");
                        if(imc <= 18.5){
                            p.innerHTML = "Pronto" 

                            img.src = images[0].abaixo
                            container.appendChild(img)

                            p2.innerHTML = "Você está abaixo do peso ideal, e seu IMC é:"
                            p3.innerHTML = imc;
                            container.appendChild(p2)
                            container.appendChild(p3)

                        }else if(imc >= 18.6 && imc <= 24.99){
                            p.innerHTML = "Pronto" 

                            img.src = images[0].normal
                            container.appendChild(img)

                            p2.innerHTML = "Você está no peso ideal, e seu IMC é:"
                            p3.innerHTML = imc;
                            container.appendChild(p2)
                            container.appendChild(p3)

                        }else if(imc >= 25 && imc <= 29.99){
                            p.innerHTML = "Pronto" 

                            img.src = images[0].acima
                            container.appendChild(img)

                            p2.innerHTML = "Você está acima do peso ideal, e seu IMC é:"
                            p3.innerHTML = imc;
                            container.appendChild(p2)
                            container.appendChild(p3)

                        }else if(imc >= 30 && imc <= 39.99){
                            p.innerHTML = "Pronto" 

                            img.src = images[0].obesidade1
                            container.appendChild(img)

                            p2.innerHTML = "Você está acima do peso ideal, e seu IMC é:"
                            p3.innerHTML = imc;
                            container.appendChild(p2)
                            container.appendChild(p3)

                        }else{
                            p.innerHTML = "Pronto" 

                            img.src = images[0].obesidade2
                            container.appendChild(img)

                            p2.innerHTML = "Você está acima do peso ideal, e seu IMC é:"
                            p3.innerHTML = imc;
                            container.appendChild(p2)
                            container.appendChild(p3)
                        }
                        // Fim Informações Meninos

                    }else{
                        // Informações Meninas
                        body.style.backgroundColor = "pink";
                        // console.log("Menina");
                        if (imc < 17) {
                            p.innerHTML = "Pronto" 

                            img.src = images[1].muitoAbaixo
                            container.appendChild(img)

                            p2.innerHTML = "Você está muito abaixo do peso ideal, e seu IMC é:"
                            p3.innerHTML = imc;
                            container.appendChild(p2)
                            container.appendChild(p3)
                        }else if(imc >= 17 && imc <= 18.49){
                            p.innerHTML = "Pronto" 

                            img.src = images[1].abaixo
                            container.appendChild(img)

                            p2.innerHTML = "Você está abaixo do peso ideal, e seu IMC é:"
                            p3.innerHTML = imc;
                            container.appendChild(p2)
                            container.appendChild(p3)

                        }else if(imc >= 18.5 && imc <= 24.99){
                            p.innerHTML = "Pronto" 

                            img.src = images[1].normal
                            container.appendChild(img)

                            p2.innerHTML = "Você está no peso ideal, e seu IMC é:"
                            p3.innerHTML = imc;
                            container.appendChild(p2)
                            container.appendChild(p3)

                        }else if(imc >= 25 && imc <= 29.99){
                            p.innerHTML = "Pronto" 

                            img.src = images[1].acima
                            container.appendChild(img)

                            p2.innerHTML = "Você está acima do peso ideal, e seu IMC é:"
                            p3.innerHTML = imc;
                            container.appendChild(p2)
                            container.appendChild(p3)

                        }else if(imc >= 30 && imc <= 34.99){
                            p.innerHTML = "Pronto" 

                            img.src = images[1].obesidade1
                            container.appendChild(img)

                            p2.innerHTML = "Você está acima do peso ideal, e seu IMC é:"
                            p3.innerHTML = imc;
                            container.appendChild(p2)
                            container.appendChild(p3)

                        }else if(imc >= 35 && imc <= 39.99){
                            p.innerHTML = "Pronto" 

                            img.src = images[1].obesidade2
                            container.appendChild(img)

                            p2.innerHTML = "Você está acima do peso ideal, e seu IMC é:"
                            p3.innerHTML = imc;
                            container.appendChild(p2)
                            container.appendChild(p3)

                        }else{
                            p.innerHTML = "Pronto" 

                            img.src = images[1].obesidade3
                            container.appendChild(img)

                            p2.innerHTML = "Você está acima do peso ideal, e seu IMC é:"
                            p3.innerHTML = imc;
                            container.appendChild(p2)
                            container.appendChild(p3)

                        }
                    }
                }, 2000);
            }
        }
    })
}
