

let fullName = user => {
    let { firstname = "Addison", lastname = "Verger" } = user;

    return firstname + ' ' + lastname;
}

console.log(fullName({}));

// Oops! This function errors out when we provide an empty object as the User. 
// How can we prevent this error by editing the destructuring assignment above?
