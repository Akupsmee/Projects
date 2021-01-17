 const name = 'Ikenna';
 const age = 28;

 //console.log('My name is '+name+' and I am '+ age +' old')
 //const Hello = (`My name is ${name} and I am ${28} years old`);
 //console.log(Hello)
 
 const person = {
     firstname : "Ikenna",
     Lastname :"Akupuome",
     age : 28,
     hobbies: ['movies', 'football'],
     address : {
         street: '50 main st',
         city: 'Boston',
         state: 'MA'

     }
 }
//  person.email ='vyevacity@outlook.com'
//  console.log(person.hobbies[1])

 const people = [
    {
        "name": "Ikenna",
        "age" : 28   
       },

       {
        "name": "John",
        "age" : 31
       },

       {
        "name": "winifred",
        "age" : 25
       },
       {
           "name": "ope",
           "age": 27
       }

]

//  for(i = 0; i < 10 ; i++ ){
//      console.log(`for loop number: ${i}`);
//  }

//  let i= 0
//  while(i <= 10){
     
//     console.log(`while loop number: ${i}`);
//     i++;
//  }


// for(i = 0; i < people.length-1 ; i++ ){
//          console.log(people[i].age);
//      }

// for(let ppl of people){
//     console.log(ppl.name);
// }

// people.forEach(function(ppl) {
//     console.log(ppl.age);
// })
// people.map(function(ppl) {
//     console.log(ppl.age);
// })
// const pplname = people.map(function(ppl) {
//     return ppl.name;

// });

// console.log(pplname)| 

//class es6
class Person {
    constructor(firstName, LastName, dob) {
        this.firstName =firstName;
        this.lastName = LastName;
        this.dob = new Date(dob);

    }
    getBirthYear() {
        return this.dob.getFullYear();
    }

    getFullName(){
        return `${this.firstName} ${this.lastName}`;
    }
}

const Person1 = new Person("John", "Doe", "4-3-1980");
const Person2 = new Person( 'Mary', 'Smith', '3-6-1970');

console.log(Person2.getFullName());
console.log(Person1);
