let info = {
    firstName: "Eddie",
    lastName: "Huancahuire Velasquez",
    age: 23,
    height: 1.65,
    isDeveloper: true
};

let age = info.age;

let lista = [
    { ...info },
    {
        firstName: "Bruno",
        lastName: "Roman Huaman",
        age: 25,
        height: 1.70,
        isDeveloper: true
    },
    {
        firstName: "Erick",
        lastName: "Torres Huillca",
        age: 23,
        height: 1.80,
        isDeveloper: false
    }
];

lista.sort((a, b) => b.age - a.age);