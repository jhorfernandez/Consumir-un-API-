class UI {
    constructor() {
        this.user = document.getElementById('contenido');
        this.crear = document.createElement('div');
        this.url = 'http://localhost:3000/users/';
    }

    showDatos(data) {

        data.forEach(element => {

            this.crear.innerHTML += `
                            <div class="card text-white bg-primary mt-5">
                                <div class="card-hearder"><h2 class="text-white text-center">Vendedor De Carros ${element.firstName}</h2></div>
                                <div class="card-body">
                                    <div class="card-title">_id: ${element._id}</div>
                                    <div class="card-text">firstName: ${element.firstName}</div>
                                    <div class="card-text">lastName: ${element.lastName}</div>
                                    <div class="card-text">email: ${element.email}</div>
                                    <a href="#" class="btn btn-danger" name="${element._id}">Delete</a>
                                    <a href="#" class="btn btn-warning" name="update">Update</a>
                                </div>
                            </div>
                           
                           `;
            this.user.appendChild(this.crear);

        });

        //this.user.innerHTML = element;
        //console.log(data.cars[0].make);
        //console.log(data[0].cars);
        //console.log(data[0]._id);
        //console.log(data[1]._id);
        //console.log(data[3].firstName);
        //console.log(data);
    }

    async deleteDatos(crear) {
        let id = crear.name;
        console.log(id);
        console.log(this.url);
        const userDeleteRequest = await fetch(`${this.url}${id}`, {
            method: 'delete'
        });

        const datosRequest = await userDeleteRequest.json();

        console.log(datosRequest.success);

        if (datosRequest.success === true) {
            console.log(crear.parentElement.parentElement.remove());
            //console.log('si son iguales');
        }

        this.alertasUser('Vendedor de automoviles eliminado con exito', 'primary');
    }

    async newUsers(fName, lName, uemail) {
        const data = {
            firstName: fName,
            lastName: lName,
            email: uemail
        }
        console.log(data.firstName);
        const userAddRequest = await fetch(`${this.url}`, {
            method: 'POST',
            body: JSON.stringify(data),
            headers: {
                'Content-Type': 'application/json'
            }
        });
    }

    alertasUser(message, cssClass) {
        const div = document.createElement('div');
        div.className = `alert alert-${cssClass} mt-2`;
        div.appendChild(document.createTextNode(message));
        //showing in dom
        const container = document.querySelector('.container');
        const row = document.querySelector('.row');
        container.insertBefore(div, row);
        setTimeout(() => {
            document.querySelector('.alert').remove();
        }, 1000);
    }



}

module.exports = UI;