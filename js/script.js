//codice per generare email  https://flynn.boolean.careers/exercises/api/random/mail
let mailGenerate = 0
let mailGenerata = ""

const bottoneMail = document.querySelector("#genera-mail")
// console.log(bottoneMail); debug
const listaMail = document.querySelector("#list-mail")
// console.log(listaMail); debug

let sommaLi = []
bottoneMail.addEventListener("click", function () {
    listaMail.innerHTML = '';
    let htmlList = '';
    for (i = 0; i < 10; i++) {
        axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
            .then(function (resp) {
                htmlList += `<li>${resp.data.response}</li>`
                console.log(htmlList);
                mailGenerate++
                if (mailGenerate === 10) {
                    listaMail.innerHTML = htmlList;
                }
            })
    }
});



// const li = document.createElement('li');
// li.textContent = mailGenerata;
// sommaLi.push(li)