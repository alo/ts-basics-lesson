"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var example_function_1 = require("./example-function");
var Tbbt = /** @class */ (function () {
    function Tbbt() {
        this.tbbtGuys = [];
    }
    Tbbt.prototype.addGuy = function (guy) {
        this.tbbtGuys = this.tbbtGuys.concat([guy]);
    };
    Tbbt.prototype.removeGuy = function (guy) {
        this.tbbtGuys = this.tbbtGuys.filter(function (tbbtGuy) { return tbbtGuy.name !== guy.name; });
    };
    Tbbt.prototype.showGuys = function () {
        // this.tbbtGuys.map(guy => console.log( `El teléfono de ${guy.name} es ${guy.phone}` ));
        this.tbbtGuys.map(function (guy) { return console.log(example_function_1.formatNames(guy)); });
    };
    return Tbbt;
}());
var t = new Tbbt();
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
