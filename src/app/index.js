const carroDatos = require('./carroDatos');
const UI = require('./ui');

const carrodatos = new carroDatos();
const ui = new UI();

const informa = carrodatos.dataUser();

informa.then(data => {
    ui.showDatos(data);
    //console.log(data);
});


document.getElementById('contenido').addEventListener('click', (e) => {
    const ui = new UI();
    ui.deleteDatos(e.target);
    //console.log(e.target.nodeName);
    //console.log(e.target.parentElement);
});

const form = document.getElementById('formUser');
form.addEventListener('submit', () => {
    let firstName = document.getElementById('fname').value;
    let lastName = document.getElementById('lname').value;
    let email = document.getElementById('email').value;
    ui.newUsers(firstName, lastName, email);

    //e.preventDefault();
});