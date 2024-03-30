// const blogUser = new Object()

// console.log(blogUser);

const blogUser = {}

blogUser.id = "123abd"
blogUser.name ="Sam"
blogUser.isLoggedIn = false

// console.log(blogUser);

const regularUser ={
    email: "sam44@google.com",
    fullname: {
        userfullname: {
            firstname: "Sameer",
            lastname: "Maurya"
        }
    }
}

// console.log(regularUser.fullname.userfullname);

const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "a", 4: "b"}

// const obj3 = {obj1, obj2}


// Object.assign is use to merge all value 
// const obj3 = Object.assign({}, obj1, obj2)


// it use to spread the value
const obj3 = {...obj1, ...obj2}
// console.log(obj3);

// console.log(blogUser);

// console.log(Object.keys(blogUser));
console.log(Object.values(blogUser));
// console.log(Object.entries(blogUser));

// console.log(blogUser.hasOwnProperty('isLogged'));


const course = {
      coursename: "Cloud computing",
      price: "999",
      courseInstructor: "Sameer"
}

//normal method to print
// console.log(course.courseInstructor);

// new method for print

const {courseInstructor} = course
console.log(courseInstructor);

// json format

// {
//     "name": " ram",
//     "vill": "lucknow",
//     "work": "waiter"
// }

// other json format

[
    {},
    {},
    {}
]