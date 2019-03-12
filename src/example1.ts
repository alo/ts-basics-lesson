// Vars & const

// var nombre = 'alo'; // avoid
// let nombre = 'alo';
// const nombre = 'alo';

// types

// let nombre; // implicit any
// nombre = 'alo';

// let nombre = 'alo'; // implicit string

// let tbbtGuys: string[] = [
//   'Sheldon',
//   'Penny',
//   'Bernadette',
//   'Howard',
//   'Leonard',
//   'Rajesh',
//   'Amy'
// ];

// // functions
// let numerico: number;

// function testaso(name: string): string {
//   // console.log('Llamamos a la función');
//   return name;
// }

// testaso();

// class , Arrow functions

// let tbbtGuys: string[] = [
//   'Sheldon',
//   'Penny',
//   'Bernadette',
//   'Howard',
//   'Leonard',
//   'Rajesh',
//   'Amy'
// ];

// class Tbbt {
//   tbbtGuys: Person[];

//   constructor() {
//     this.tbbtGuys = [];
//   }

//   addGuy(guy: Person) {
//     // this.tbbtGuys.push(guy);
//     this.tbbtGuys = [...this.tbbtGuys, guy];
//   }

//   // removeGuy(guy: string) {
//   //   // for (let i = 0; i < this.tbbtGuys.length; i++) {
//   //   //   if (this.tbbtGuys[i] === guy) {
//   //   //     this.tbbtGuys.splice(i, 1);
//   //   //   }
//   //   // }

//   //   // this.tbbtGuys.forEach(function(element, i) {
//   //   //   if (element === guy) {
//   //   //     // this.tbbtGuys.splice(i, 1); // 😱
//   //   //   }
//   //   // });

//   //   // this.tbbtGuys.forEach((element, i) => {
//   //   //   if (element === guy) {
//   //   //     this.tbbtGuys.splice(i, 1); // 👌🏼
//   //   //   }
//   //   // });

//   //   // this.tbbtGuys = this.tbbtGuys.filter(tbbtGuy => {
//   //   //   return tbbtGuy !== guy;
//   //   // });

//   //   this.tbbtGuys = this.tbbtGuys.filter(tbbtGuy => tbbtGuy !== guy);
//   // }

//   showGuys() {
//     // this.tbbtGuys.forEach(function(element, i) {
//     //   console.log(element, i);
//     // });

//     this.tbbtGuys.forEach(element => {
//       console.log(element);
//     });

//     this.tbbtGuys.map(guy => console.log( `Este es ${guy}` ));
//   }
// }

// let t = new Tbbt();

// t.addGuy('Sheldon');
// t.addGuy('Penny');
// t.addGuy('Leonard');

// t.showGuys();
// console.log('-------- Eliminamos los elementos del array ------------');

// t.removeGuy('Penny');

// t.showGuys();
