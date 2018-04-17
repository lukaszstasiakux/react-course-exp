// const person = {
//   name: 'Lukas',
//   age: 26,
//   location : {
//     city: 'Krakow',
//     temp: 32
//   }
// }
// const {name: firstName = 'Janusz', age} = person;
// const {city, temp: temperatur} = person.location


// console.log(`${firstName} is ${age}`)

// console.log(`it's ${temperatur} in ${city}`)

///array

const address =['1299 nJumper', 'Warszawa', 'Polska','31-246'];

const [street, city, state = 'USA', zip] = address;

console.log(`you are in ${city} ${state}`)