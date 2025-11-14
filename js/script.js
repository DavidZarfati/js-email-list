//codice per generare email  https://flynn.boolean.careers/exercises/api/random/mail
let listaMailGenerate = []
let mailGenerate = 0
let mailGenerata = ""

const bottoneMail = document.getElementById("genera-mail")
// console.log(bottoneMail); debug
const listaMail = document.getElementById("list-mail")
// console.log(listaMail); debug

let sommaLi = []
bottoneMail.addEventListener("click", function () {
    listaMail.innerHTML = '';
    for (i = 0; i < 10; i++) {
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            // console.log(axios); debug
            .then(function (resp) {
                mailGenerata = resp.data.response
                listaMailGenerate.push(resp.data.response)
                // console.log(mailGenerata);
                // let mailGenerataUl = `<li>${mailGenerata}<li>`
                // listaMail.appendChild(mailGenerataUl)
                let li = document.createElement('li');
                li.textContent = mailGenerata;
                sommaLi.push(li)

                mailGenerate++
                if (mailGenerate === 10) {
                    console.log(listaMailGenerate.join(","))
                    console.log(listaMailGenerate);
                    sommaLi.forEach(function (liSingolo) {
                        listaMail.appendChild(liSingolo);
                    })
                    // Li ho mostrati in entrambi i modi (array inteso come lista e lista intesa come lista con virgole) chiedi a samuel,loris,olga
                    mailGenerate = 0
                    listaMailGenerate = []
                    sommaLi = []
                }
            }
            )

    }


})


