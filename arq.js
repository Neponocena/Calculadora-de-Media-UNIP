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
            np1 < 0 || np1 > 10 ||
            np2 < 0 || np2 > 10 ||
            pim < 0 || pim > 10 
        )
        {
          res.innerHTML = "As notas devem estar entre 0 e 10."
          return
        }

        let media = (np1 * 0.4) + (np2 * 0.4) + (pim * 0.2);
        

        if(media >= 7)
        {
          res.innerHTML = `Sua média semestral é ${media} , Você esta aprovado!`

        }
        else
        {
          res.innerHTML = `Sua média semestral é ${media} , Você esta de exame! `
          
        }
        
    }