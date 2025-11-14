//codice per generare email  https://flynn.boolean.careers/exercises/api/random/mail
for (i = 0; i < 10; i++) {
    axios.get(`https://flynn.boolean.careers/exercises/api/random/mail`)
        // console.log(axios); debug
        .then(function (resp) {
            const mailGenerata = resp.data.response
            console.log(mailGenerata);
        })
}