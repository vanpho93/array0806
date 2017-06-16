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

    // arrPerson.forEach((e, i) => console.log(i + 1 + ': ' + e.name));
        // function check(arr, checkFunction) {
        //     for (let i = 0; i < arr.length; i++) {
        //         if (checkFunction(arr[i])) return true;
        //     }
        //     return false;
        // }
        // console.log(check(arrPerson, e => e.height > 190));
        // console.log(check(arrPerson, e => e.age > 18));

const isOldEnough = arrPerson.every(e => e.age > 15);
console.log(isOldEnough);
