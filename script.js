// Pegar os dados do formulario

/* const fname = document.getElementById("fname");
const lname = document.getElementById("lname");
const country = document.getElementById("country");
const address = document.getElementById("address");
const phone = document.getElementById("phone");
const email = document.getElementById("email"); */

//Para  "ouvir" oclick do botao, usamos o addEventListener
const btnSubmit = document.getElementById("btn");
//está ouvindo o click do botao, para poder executar a função logo
//em seguida

const data = [];

btnSubmit.addEventListener('click', function (event) {
    //essa linha "event.preventDefault " 
    //não deixa o formulario
    //se comportar como padrao, ou seja,
    //enviar o dados para a proxima pagina/requisição.
    event.preventDefault();

    const pessoa = {
        nome: fname.value,
        endereco: address.value,
        fone: phone.value,
        email: email.value,

        favoritos: [
            {
                titulo: "a nova casa",
                autor: "Juca Bala.",
                ano: 2025,
                genero: "Aventura"

            }
        ]

    }
    data.push(pessoa);
    console.log(pessoa.favoritos)
    console.log(data);

    /* const dados = [
        fname.value,
        lname.value,
        address.value,
        phone.value,
        email.value,
        country.value
    ] */
    //console.log(dados)

})
