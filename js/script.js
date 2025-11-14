//codice per generare email  https://flynn.boolean.careers/exercises/api/random/mail
let listaMailGenerate = []
let mailGenerate = 0
let mailGenerata = ""

const bottoneMail = document.getElementById("genera-mail")
// console.log(bottoneMail); debug

bottoneMail.addEventListener("click", function () {
    for (i = 0; i < 10; i++) {
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            // console.log(axios); debug
            .then(function (resp) {
                mailGenerata = resp.data.response
                listaMailGenerate.push(resp.data.response)
                console.log(mailGenerata);
                mailGenerate++
                if (mailGenerate === 10) {
                    console.log(listaMailGenerate.join(","))
                    console.log(listaMailGenerate);
                    // Li ho mostrati in entrambi i modi (array inteso come lista e lista intesa come lista con virgole) chiedi a samuel,loris,olga
                    mailGenerate = 0
                    listaMailGenerate = []
                }
            }
            )

    }


})


