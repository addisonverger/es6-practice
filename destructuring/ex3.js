let array = [
    {
        name: "Amanda",
        role: "Instructor"
    },
    {
        name: "Kamilah",
        role: "Student"
    }
]
// Using destructuring, and in one line of code, 
//  create 2 variables that extract the names of everyone in the array

let [ { name: FirstName }, { name: SecondName } ] = array

FirstName === Amanda
SecondName === Kamilah
