let media = 0


// Constantes de configuração
const NOTA_MINIMA = 0;
const NOTA_MAXIMA = 10;
const NOTA_MEDIA = 7;
const PESO_NP1 = 0.4;
const PESO_NP2 = 0.4;
const PESO_PIM = 0.2;

function calcular()
    {
       let np1 = document.getElementById("np1").value
       let np2 = document.getElementById("np2").value
       let pim = document.getElementById("pim").value
       const res = document.getElementById("res")
    
    if (np1 === "" || np2 === "" || pim === "")
        {
            res.innerHTML = "Preencha todos os campos"
            return
        }

         np1 = Number(np1)
         np2 = Number(np2)
         pim = Number(pim)

        if(isNaN(np1) || isNaN(np2) || isNaN(pim))
            {
                res.innerHTML = "Preencha todas as notas corretamente"
                return
            }

        if
        (
            np1 < NOTA_MINIMA || np1 > NOTA_MAXIMA ||
            np2 < NOTA_MINIMA || np2 > NOTA_MAXIMA ||
            pim < NOTA_MINIMA || pim > NOTA_MAXIMA 
        )
        {
          res.innerHTML = `As notas devem estar entre ${NOTA_MINIMA} e ${NOTA_MAXIMA}.`
          return
        }

         media = (np1 * PESO_NP1) + (np2 * PESO_NP2) + (pim * PESO_PIM);
        

        if(media >= NOTA_MEDIA)
        {
          res.innerHTML = `Sua média semestral é ${media.toFixed(1)} , Você esta aprovado!`
          exameArea.style.display = "none"

        }
        else
        {
          res.innerHTML = `Sua média semestral é ${media.toFixed(1)} , Você esta de exame! `
          exameArea.style.display = "block"
          
        }
        
    }

    function exame()
    {
        let exame = document.getElementById("exame").value
        const res = document.getElementById("res")

        if(exame === "")
            {
                res.innerHTML = "Digite a nota do exame"
                return
            }

        exame = Number(exame)

        if(isNaN(exame) || exame < NOTA_MINIMA || exame > NOTA_MAXIMA )
            {
                res.innerHTML = `A nota deve estar entre ${NOTA_MINIMA} e ${NOTA_MAXIMA}.`
                return
            }

        if(media + exame >= NOTA_MAXIMA)
            {
                res.innerHTML = "Você está aprovado!"
                return
            }
        else
            {
                res.innerHTML = "Você está de DP!"
            }
    }