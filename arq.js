function calcular()
    {
        var np1 = Number(document.getElementById("np1").value)
        var np2 = Number(document.getElementById("np2").value)
        var pim = Number(document.getElementById("pim").value)

        var media = (np1 * 0.4) + (np2 * 0.4) + (pim * 0.2);

        var res = document.getElementById("res")

        res.innerHTML = `Sua média semestral é ${media} `

        if(media >= 7)
        {
          res.innerHTML = `Sua média semestral é ${media} , Você esta aprovado!`

        }
        else
        {
          res.innerHTML = `Sua média semestral é ${media} , Você esta de exame! `
          
        }
        
    }