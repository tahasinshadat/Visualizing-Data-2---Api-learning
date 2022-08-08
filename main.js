let bigDiv = document.getElementById("big_div")

let submitGenderBtn = document.getElementById("submit_gender")
let submitFirstNameBtn = document.getElementById("submit_firstname")
let submitLastNameBtn = document.getElementById("submit_lastname")
let global_data;

fetch("https://randomuser.me/api/?results=100")

    .then(function(response){
        return response.json()
    })

    .then(function(data){
        global_data = data;
        for(let i=0; i < data.results.length; i++) {
            // console.log(data.results[i].gender)
            let newDiv = document.createElement("div")

            let newh1 = document.createElement("h1")
            newh1.innerHTML = data.results[i].name.first + " " + data.results[i].name.last

            let newimg = document.createElement("img")
            newimg.src = data.results[i].picture.large

            let info= document.createElement("h2")
            info.innerHTML = "Information:"

            let gender = document.createElement("h3")
            gender.innerHTML = "Gender: " + data.results[i].gender

            let age = document.createElement('h3')
            age.innerHTML = "Age: " + data.results[i].dob.age

            let phone = document.createElement("h3")
            phone.innerHTML = "Phone Number: " + data.results[i].phone

            let email = document.createElement('h3')
            email.innerHTML = "Email: " + data.results[i].email

            let area = document.createElement('h3')
            area.innerHTML = "City and Country: " + data.results[i].location.city + ", " + data.results[i].location.country

            newDiv.append(newh1, newimg, info, gender, age, phone, email, area)

            newDiv.className = "personContainer"

            bigDiv.appendChild(newDiv)
        }

    })


/////////////////////////////////////////////////////////////////////////////////


submitGenderBtn.onclick= function(event) {
    event.preventDefault()


    let genderBox = document.getElementById("gender")
    let gender = genderBox.value
    // console.log(gender)

    bigDiv.innerHTML = ''

    for(let i=0; i < global_data.results.length; i++) {

        if (gender == global_data.results[i].gender) {
            let newDiv = document.createElement("div")

            let newh1 = document.createElement("h1")
            newh1.innerHTML = global_data.results[i].name.first + " " + global_data.results[i].name.last

            let newimg = document.createElement("img")
            newimg.src = global_data.results[i].picture.large

            let info= document.createElement("h2")
            info.innerHTML = "Information:"

            let gender = document.createElement("h3")
            gender.innerHTML = "Gender: " + global_data.results[i].gender

            let age = document.createElement('h3')
            age.innerHTML = "Age: " + global_data.results[i].dob.age

            let phone = document.createElement("h3")
            phone.innerHTML = "Phone Number: " + global_data.results[i].phone

            let email = document.createElement('h3')
            email.innerHTML = "Email: " + global_data.results[i].email

            let area = document.createElement('h3')
            area.innerHTML = "City and Country: " + global_data.results[i].location.city + ", " + global_data.results[i].location.country

            newDiv.append(newh1, newimg, info, gender, age, phone, email, area)

            newDiv.className = "personContainer"

            bigDiv.appendChild(newDiv)
        }
    }
}


submitFirstNameBtn.onclick= function(event) {
    event.preventDefault()


    let firstNameBox = document.getElementById("first_name")
    let firstName = firstNameBox.value
    // console.log(firstName)

    bigDiv.innerHTML = ''

    for(let i=0; i < global_data.results.length; i++) {

        if (firstName == global_data.results[i].name.first) {
            let newDiv = document.createElement("div")

            let newh1 = document.createElement("h1")
            newh1.innerHTML = global_data.results[i].name.first + " " + global_data.results[i].name.last

            let newimg = document.createElement("img")
            newimg.src = global_data.results[i].picture.large

            let info= document.createElement("h2")
            info.innerHTML = "Information:"

            let gender = document.createElement("h3")
            gender.innerHTML = "Gender: " + global_data.results[i].gender

            let age = document.createElement('h3')
            age.innerHTML = "Age: " + global_data.results[i].dob.age

            let phone = document.createElement("h3")
            phone.innerHTML = "Phone Number: " + global_data.results[i].phone

            let email = document.createElement('h3')
            email.innerHTML = "Email: " + global_data.results[i].email

            let area = document.createElement('h3')
            area.innerHTML = "City and Country: " + global_data.results[i].location.city + ", " + global_data.results[i].location.country

            newDiv.append(newh1, newimg, info, gender, age, phone, email, area)

            newDiv.className = "personContainer"

            bigDiv.appendChild(newDiv)
        }
    }
}


submitLastNameBtn.onclick= function(event) {
    event.preventDefault()


    let lastNameBox = document.getElementById("last_name")
    let lastName = lastNameBox.value
    // console.log(lastName)

    bigDiv.innerHTML = ''

    for(let i=0; i < global_data.results.length; i++) {

        if (lastName == global_data.results[i].name.last) {
            let newDiv = document.createElement("div")

            let newh1 = document.createElement("h1")
            newh1.innerHTML = global_data.results[i].name.first + " " + global_data.results[i].name.last

            let newimg = document.createElement("img")
            newimg.src = global_data.results[i].picture.large

            let info= document.createElement("h2")
            info.innerHTML = "Information:"

            let gender = document.createElement("h3")
            gender.innerHTML = "Gender: " + global_data.results[i].gender

            let age = document.createElement('h3')
            age.innerHTML = "Age: " + global_data.results[i].dob.age

            let phone = document.createElement("h3")
            phone.innerHTML = "Phone Number: " + global_data.results[i].phone

            let email = document.createElement('h3')
            email.innerHTML = "Email: " + global_data.results[i].email

            let area = document.createElement('h3')
            area.innerHTML = "City and Country: " + global_data.results[i].location.city + ", " + global_data.results[i].location.country

            newDiv.append(newh1, newimg, info, gender, age, phone, email, area)

            newDiv.className = "personContainer"

            bigDiv.appendChild(newDiv)
        }
    }
}

