// const tinderUser = new Object() // singleton object
// console.log(tinderUser); // {}


const tinderUser = {}
// console.log(tinderUser); // {}
tinderUser.id = "123abc"
tinderUser.name = "Summy"
tinderUser.isLoggedIn = false

// console.log(tinderUser);
const regularUser = {
    email: "some@gmail.com",
    fullname:{
        userfullName: {
            firstName: "Andaz",
            lastName: "Kumar"
        }
    }
}

// console.log(regularUser.fullname.userfullName.firstName); // Andaz

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}

// const obj3 = { obj1, obj2}
// console.log(obj3);  // { obj1: { '1': 'a', '2': 'b' }, obj2: { '3': 'c', '4': 'd' } }

// const obj4 = Object.assign(obj1, obj2)  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// const obj5 = Object.assign( {}, obj1, obj2)  //{ '1': 'a', '2': 'b', '3': 'c', '4': 'd' }
// console.log(obj4);

const obj3 = {...obj1, ...obj2}
// console.log(obj3);

const users =[
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    {
        id: 1,
        email: "abc@gmail.com"
    },
    
]
// console.log(users[1].email); //abc@gmail.com
users[1].email = "andaz@google.com"
// console.log(users[1].email);

// console.log(tinderUser);  //  { id: '123abc', name: 'Summy', isLoggedIn: false }
// console.log(Object.keys(tinderUser));  //  [ 'id', 'name', 'isLoggedIn' ]
// console.log(Object.values(tinderUser));  // [ '123abc', 'Summy', false ]
// console.log(Object.entries(tinderUser));  // [ [ 'id', '123abc' ], [ 'name', 'Summy' ], [ 'isLoggedIn', false ] ]

// console.log(tinderUser.hasOwnProperty('isLoggedIn'));  // true
// console.log(tinderUser.hasOwnProperty('isLogged'));  // false


// ++++++++++++++++++ object Destructureing +++++++++++++

const course = {
    courseName: "JS in hindi",
    coursePrice: "999",
    courseInstructor: "Andaz"
}

// method 1 to access
// course.courseInstructor

// method 2
const {courseInstructor} = course
console.log(courseInstructor); // Andaz

// we can change the name of (courseInstructor)
const {courseInstructor: instructor} = course
console.log(instructor);  // Andaz

// ++++++++++++++++++  API's Format  +++++++++++++++++++++++
// +++++++++++++++++  Type 1  ++++++++++++++++++++++++++++++
// {
//     "courseName": "JS in hindi",
//     "coursePrice": "999",
//     "courseInstructor": "Andaz"
// }

// +++++++++++++++++  Type 2  ++++++++++++++++++++++++++++++
[
    {},
    {},
    {}
]









