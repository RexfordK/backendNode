// var name = "Max";
// var age = 29;
// var hasHobbits = true;

// function summerizeUser(userName, userAge, userHasHobby) {
//     return (
//         `Name is ${userName}, age is ${userAge}, and the user has hobbies ${userHasHobby}`
//     );
// }

// const user = (userName, userAge, userHasHobby) => {
//     return (
//         `Name is ${userName}, age is ${userAge}, and the user has hobbies ${userHasHobby}`
//     );
// }

// // console.log(summerizeUser("Rexford",25,"fishing"));
// console.log(user("james",25,"eating"));

const person = {
    name: "Max",
    age: 29,
    greet() {
        console.log("Hi " + this.name);
    }
}

const hobbies = ["sports","cookies"];
// const copiedArray = hobbies.slice();
const copiedArray = [...hobbies];

console.log(copiedArray);

const toArray = (...args) => {
    return args;
};

console.log(toArray(1,2,3))