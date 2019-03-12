import { Person } from './person.interface';
import { formatNames } from './example-function';

class Tbbt {
  tbbtGuys: Person[];

  constructor() {
    this.tbbtGuys = [];
  }

  addGuy(guy: Person) {
    this.tbbtGuys = [...this.tbbtGuys, guy];
  }

  removeGuy(guy: Person) {
    this.tbbtGuys = this.tbbtGuys.filter(tbbtGuy => tbbtGuy.name !== guy.name);
  }

  showGuys() {
    // this.tbbtGuys.map(guy => console.log( `El teléfono de ${guy.name} es ${guy.phone}` ));

    this.tbbtGuys.map(guy => console.log(formatNames(guy)));
  }
}

let t = new Tbbt();

t.addGuy({
  name: 'Sheldon',
  phone: 654987321
});

t.addGuy({
  name: 'Penny',
  phone: 65432164
});

t.addGuy({
  name: 'Leonard',
  phone: 65432164
});

t.showGuys();

console.log('-------- Eliminamos los elementos del array ------------');

t.removeGuy({ name: 'Penny', phone: 0 });

t.showGuys();
