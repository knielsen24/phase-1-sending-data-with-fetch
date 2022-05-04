
const submitData = (userName, userEmail) => {
    
    const userData = {
        name: userName,
        email: userEmail,
    }

    console.log(userData)
    
    
    const configObj = {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify(userData),
    }
    
    
    return fetch("http://localhost:3000/users", configObj)
        .then(r => r.json())
        .then(data => console.log(data))
        .catch(error => {
            alert("could not fetch data")
            error.message
        })
}


submitData("neo", "theone@testsuite.com")



// const formData = {
//     dogName: "Bryon",
//     dogBreed: "Poddle",
// }


// const configurationObject = {
//     method: "POST",
//     headers: {
//         "Content-Type": "application/json",
//         "Accept": "application/json",
//     },
//     body: JSON.stringify(formData),
// };

// fetch("http://localhost:3000/dogs", configurationObject)
//     .then(r => r.json())
//     .then(data => data)
//     .catch(error => {
//         alert("Bad things! Ragnarok")
//         error.message
//     })