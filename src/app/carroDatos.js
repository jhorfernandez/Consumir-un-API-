class Datos {

    constructor() {
      this.url = 'http://localhost:3000/users/';
    }
  
    async dataUser(){
      const userDataRequest = await fetch(`${this.url}`);
      const userData = await userDataRequest.json();
      //console.log(userData);
      return userData;
    }

    


}

module.exports = Datos;