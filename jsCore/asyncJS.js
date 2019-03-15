
// this is asyncronous code because they
const fetchData = (callback) => {
    const promise = new Promise((resolve, reject) => {

        setTimeout(() => {
            callback("done");
        }, 1500)
    })
    return promise;
}
setTimeout(() => {
  console.log("timer is done");
  fetchData.then((text => {
      console.log(text);
  }))
}, 2000);



// classes
class Person  {
    constructor(firstName, lastName,age) {
        this.firstName = firstName;
        this.lastName = lastName;
        let dob = 1993;
        let cur = 2019;
        this.age = cur - dob;
    }    
}

class Gymnist extends Person {
    constructor(firstName, lastName,age,hobby){
        super(firstName,lastName,age);
        this.hobby = hobby;
    }
}

const person1 = new Person("James","taylor",25);

let john = new Gymnist("john","clinton",25,"fishing");

// console.log(`${person1.firstName} ${person1.lastName} is ${pers1.age} years old `);
console.log(`${john.firstName} ${john.lastName} is ${john.age} and enjoys ${john.hobby}`);