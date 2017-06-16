// name, age, height
class Person {
    constructor(name, age, height) {
        this.name = name;
        this.age = age;
        this.height = height;
    }
}

const teo = new Person('Teo', 18, 150);
const ti = new Person('Ti', 10, 180);
const tun = new Person('Tun', 20, 140);

const arrPerson = [teo, ti, tun];

// const older = arrPerson.filter(e => e.age >= 18);
// console.log(older);

// const tiIndex = arrPerson.findIndex(e => e.name === 'Ti');
// console.log(tiIndex);

arrPerson.sort((a, b) => a.age - b.age);
// arrPerson.sort((a, b) =>  - a.height + b.height);

console.log(arrPerson);