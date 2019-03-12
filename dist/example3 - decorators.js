"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
// const alo: Person = { name: 'alo' };
// function addPhone(phone: number) {
//   return function(person: Person) {
//     return {
//       phone: phone,
//       name: person.name
//     };
//   };
// }
// const newAlo = addPhone(600092666)(alo);
// console.log(newAlo);
//  // Example Decorator
function addMainSkill(skill) {
    return function (tarjetClass) {
        return /** @class */ (function () {
            function class_1() {
                this.name = new tarjetClass().name;
                this.skill = skill;
            }
            return class_1;
        }());
    };
}
var Developer = /** @class */ (function () {
    function Developer() {
        this.name = 'alo';
    }
    Developer = __decorate([
        addMainSkill('js')
    ], Developer);
    return Developer;
}());
console.log(new Developer());
